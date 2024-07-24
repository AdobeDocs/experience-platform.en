---
title: Identity graph linking rules overview
description: Learn about Identity Graph Linking Rules in Identity Service.
badge: Beta
exl-id: 317df52a-d3ae-4c21-bcac-802dceed4e53
---
# Identity graph linking rules overview

>[!AVAILABILITY]
>
>Identity graph linking rules is currently in beta. Contact your Adobe account team for information on the participation criteria. The feature and documentation are subject to change.

## Table of contents

* [Overview](./overview.md)
* [Identity optimization algorithm](./identity-optimization-algorithm.md)
* [Example scenarios](./example-scenarios.md)

With Adobe Experience Platform Identity Service and Real-Time Customer Profile, it is easy to assume that your data is ingested perfectly and that all merged profiles represent a single individual person through a person identifier, such as a CRM ID. However, there are possible scenarios where certain data could try to merge multiple disparate profiles into a single profile ("graph collapse"). To prevent these unwanted merges, you can use configurations provided through identity graph linking rules and allow for accurate personalization for your users.

## Example scenarios where graph collapse could happen

* **Shared device**: Shared device refers to devices that are used by more than one individual. Examples of a shared device include tablets, library computers, and kiosks.
* **Bad email and phone numbers**: Bad email and phone numbers refer to end-users registering invalid contact information, such as "test<span>@test.com" for email, and "+1-111-111-1111" for phone number.
* **Erroneous or bad identity values**: Erroneous or bad identity values refer to non-unique identity values that could merge CRM IDs. For example, while IDFA's are required to have 36 characters (32 alphanumeric characters and four hyphens), there are scenarios where an IDFA with an identity value of "user_null" can get ingested. Similarly, phone numbers only support numerical characters, but a phone namespace with an identity value of "not-specified" may get ingested.

For more information on use case scenarios for identity graph linking rules, read the document on [example scenarios](./example-scenarios.md).

## Identity graph linking rules {#identity-graph-linking-rules}

With Identity graph linking rules you can:

* Create a single identity graph / merged profile for each user by configuring unique namespaces, which will prevent two disparate person identifiers from merging into one identity graph.
* Associate online, authenticated events to the person by configuring priorities

### Terminology {#terminology}

| Terminology | Description |
| --- | --- |
| Unique namespace | A unique namespace is an identity namespace that has been set up to be distinct within the context of an identity graph. You can configure a namespace to be unique using the UI. Once a namespace is defined as unique, a graph can only have one identity that contains that namespace. |
| Namespace priority | Namespace priority refers to the relative importance of namespaces compared to one another. Namespace priority is configurable through the UI. You can rank namespaces in a given identity graph. Once enabled, names priority will be used in various scenarios, such as input for identity optimization algorithm and determining primary identity for experience event fragments. |
| Identity optimization algorithm | The identity optimization algorithm ensures that guidelines created by configuring a unique namespace and namespace priorities are enforced in a given identity graph. |

### Unique namespace {#unique-namespace}

You can configure a namespace to be unique using the identity settings UI workspace. Doing so, informs the identity optimization algorithm that a given graph may only have one identity that contains that unique namespace. This prevents the merging of two disparate person identifiers within the same graph.

Consider the following scenario:

* Scott uses a tablet and opens his Google Chrome browser to go to nike<span>.com, where he signs in and browses for new basketball shoes.
  * Behind the scenes, this scenario logs the following identities:
    * An ECID namespace and value to represent the use of the browser
    * A CRM ID namespace and value to represent the authenticated user (Scott signed in with his username and password combination).
* His son Peter then uses the same tablet and also uses Google Chrome to go to nike<span>.com, where he signs in with his own account to browse for football equipment.
  * Behind the scenes, this scenario logs the following identities:
    * The same ECID namespace and value to represent the browser.
    * A new CRM ID namespace and value to represent the authenticated user.

If CRM ID was configured as a unique namespace, then the identity optimization algorithm splits the CRM IDs apart into two separate identity graphs, instead of merging them together.

If you do not configure a unique namespace, you may end up with unwanted graph merges, such as two identities with the same CRM ID namespace, but different identity values (scenarios like these often represent two different person entities in the same graph).

You must configure a unique namespace to inform the identity optimization algorithm to enforce limitations on the identity data that are ingested into a given identity graph.

### Namespace priority {#namespace-priority}

Namespace priority refers to the relative importance of namespaces compared to one another. Namespace priority is configurable through the UI and you can rank namespaces in a given identity graph. 

One way in which namespace priority is used is in determining the primary identity of experience event fragments (user behavior) in Real-Time Customer Profile. If priority settings are configured, then the primary identity setting on Web SDK will no longer be used to determine which profile fragments are stored.

Unique namespaces and namespace priorities are both configurable in the identity settings UI workspace. However, the effects of their configurations are different:

| | Identity Service | Real-Time Customer Profile |
| --- | --- | --- |
| Unique namespace | In Identity Service, the identity optimization algorithm refers to unique namespaces to determine the identity data that is ingested to a given identity graph.| Unique namespaces do not affect Real-Time Customer Profile. |
| Namespace priority | In Identity Service, for graphs that have multiple layers, namespace priority will determine that the appropriate links are removed. | When an experience event is ingested in Profile, the namespace with the highest priority becomes the primary identity of the profile fragment. |

* Namespace priority does not affect graph behavior when the limit of 50 identities per graph is reached.
* **Namespace priority is a numerical value** assigned to a namespace indicating its relative importance. This is a property of a namespace.
* **Primary identity is the identity in which a profile fragment is stored against**. A profile fragment is a record of data that stores information about a certain user: attributes (usually ingested via CRM records) or events (usually ingested from experience events, or online data).
* Namespace priority determines the primary identity for experience event fragments.
  * For profile records, you can use the schemas workspace in the Experience Platform UI to define identity fields, including the primary identity. Read the guide on [defining identity fields in the UI](../../xdm/ui/fields/identity.md) for more information.
* If an experience event has two or more identities of the highest namespace priority in the identityMap, it will be rejected from ingestion because it will be deemed as "bad data". For example, if the identityMap contains `{ECID: 111, CRMID: John, CRMID: Jane}`, the entire event will be rejected as bad data because it implies that the event is associated to both `CRMID: John` and `CRMID: Jane` simultaneously.

For more information, read the guide on [namespace priority](./namespace-priority.md).

## Next steps

For more information on identity graph linking rules, read the following documentation:

* [Identity optimization algorithm](./identity-optimization-algorithm.md).
* [Namespace priority](./namespace-priority.md).
* [Example scenarios for configuring identity graph linking rules](./example-scenarios.md).
