---
title: Identity optimization algorithm
description: Learn about Identity Optimization Algorithm in Identity Service.
hide: true
hidefromtoc: true
badge: Alpha
---
# Identity optimization algorithm

>[!IMPORTANT]
>
>The identity optimization algorithm is in Alpha. The feature and documentation are subject to change.

The identity optimization algorithm is a rule that helps ensure that an identity graph is representative of a single person, and therefore, prevents the unwanted merging of identities on Real-Time Customer Profile.

## Input parameters

A single merged profile and its corresponding identity graph should represent a single individual (person entity). A single individual is usually represented by CRM IDs and/or Login IDs. The expectation is that no two individuals (CRM IDs) are merged into a single profile or graph.

You must specify which namespaces represent a person entity in Identity Service using the identity optimization algorithm. For example, if a CRM database defines a user account to be associated with a single CRM ID and a single email address, then the identity settings for this sandbox would look like:

* CRM ID namespace = unique
* Email namespace = unique

A namespace that you declare to be unique will automatically be configured to have a maximum limit of one within a given identity graph. For example, if you declare a CRM ID namespace as unique, then an identity graph can only have one identity that contains a CRM ID namespace.

>[!NOTE]
>
>* Currently, the algorithm only supports the use of a single login identifier (one login namespace). Multiple login identifiers (multiple identity namespaces used to login), household entity graphs, and hierarchical graph structures are not supported at this time.
>
>* All namespaces that are person identifiers and that are used in the sandbox to generate identity graphs must be marked as a unique namespace. Otherwise, you may see undesirable linking results.

## Process

Upon ingesting new identities, Identity Service checks if the new identities and their corresponding namespaces will result in exceeding the configured limits. If limits are not exceeded, then the ingestion of new identities will proceed and these identities will be linked to the graph. However, if limits are exceeded, the identity optimization algorithm will update the graph such that the most recent timestamp is honored, and oldest links with the lower priority namespaces are removed.

## Example scenarios for identity optimization algorithm

The following section outlines how the identity optimization algorithm behaves, under scenarios such as shared device or ingestion of data with the same timestamp.

### Shared device

A shared device refers to a device that is used by more than one individual. For example, a shared device can be a laptop or a tablet that you share with a partner or a family member, a library computer, or a public kiosk.

>[!BEGINTABS]

>[!TAB Example one]

| Namespace | Limit |
| --- | --- |
| CRM ID | 1 |
| Email | 1 |
| ECID | N/A |

In this example, both CRM ID and Email are designated as unique namespaces. At `timestamp=0`, a CRM record dataset is ingested and creates two different graphs because of the limit configuration. Each graph contains a CRM ID and an Email namespace.

* `timestamp=1`: Jane logs in to your e-commerce website using a laptop. Jane is represented by her CRM ID and Email, while the web browser on her laptop that she uses is represented by an ECID.
* `timestamp=2`: John logs in to your e-commerce website using the same laptop. John is represented by his CRM ID and Email, while the web browser he used is already represented by an ECID. Due to the same ECID being linked to two different graphs, Identity Service is able to know that this device (laptop) is a shared device.
* However, due to the limit configuration that sets a maximum of one CRM ID namespace and one Email namespace per graph, identity optimization algorithm then splits the graph into two.
  * Finally, because John is the last authenticated user, the ECID that represents the laptop, remains linked to his graph instead of Jane's.

![shared device case one](../images/identity-settings/shared-device-case-one.png)

>[!TAB Example two]

| Namespace | Limit |
| --- | --- |
| CRM ID | 1 |
| ECID | N/A |

In this example, the CRM ID namespace is designated as a unique namespace.

* `timestamp=1`: Jane logs in to your e-commerce website using a laptop. She is represented by her CRM ID, and the web browser on the laptop is represented by the ECID.
* `timestamp=2`: John logs in to your e-commerce website using the same laptop. He is represented by his CRM ID and the web browser he uses is represented by the same ECID.
  * This event links two independent CRM IDs to the same ECID, which exceeds the configured limit of one CRM ID.
  * As a result, identity optimization algorithm removes the older link, which in this case is Jane's CRM ID that was linked at `timestamp=1`.
  * However, while Jane's CRM ID will no longer exist as a graph on Identity Service, it will still persist as a profile on Real-Time Customer Profile. This is because an identity graph must contain at least two linked identities, and as a result of removing the links, Jane's CRM ID no longer has another identity to link to.

![shared-device-case-two](../images/identity-settings/shared-device-case-two.png)

>[!ENDTABS]

### Bad email

There are instances where a user may input bad values for their email and/or phone numbers. 

| Namespace | Limit |
| --- | --- |
| CRM ID | 1 |
| Email | 1 |
| ECID | N/A |

In this example, CRM ID and Email namespaces are designated as unique. Consider the scenario that Jane and John have signed up to your e-commerce website using a bad email value (for example, test<span>@test.com).

* `timestamp=1`: Jane logs in to your e-commerce website using Safari on her iPhone, establishing her CRM ID (login information) and her ECID (browser). This event also registers an EMAIL namespace with the value of test<span>@test.com.
* `timestamp=2`: John logs in to your e-commerce website using Google Chrome on his iPhone, establishing his CRM ID (login information) and ECID (browser). (Should it be clarified that John is also using test<span>@test.com)
* `timestamp=3`: Jane logs in again and her graph gets linked to test<span>@test.com.
* `timestamp=4`: John logs in again and his graph also gets linked to test<span>@test.com.
  * This then becomes a violation of the configured limits as it creates a single graph with two disparate CRM ID namespaces.
  * As a result, the identity optimization algorithm deletes the older link, which in this case is the link between {CRM ID: 456, ECID: 999} and {EMAIL: test@test} that was established at `timestamp=3`.

![bad-email](../images/identity-settings/bad-email.png)


## Next steps

For more information on identity graph linking rules, read the following documentation:

* [Identity graph linking rules overview](./overview.md)
* [Example scenarios for configuring identity graph linking rules](./example-scenarios.md)
* [Identity linking logic](./identity-linking-logic.md)
* [Identity Service and Real-Time Customer Profile](identity-and-profile.md)
