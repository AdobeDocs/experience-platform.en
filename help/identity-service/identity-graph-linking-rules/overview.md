---
title: Identity graph linking rules overview
description: Learn about Identity Graph Linking Rules in Identity Service.
hide: true
hidefromtoc: true
badge: Alpha
exl-id: 317df52a-d3ae-4c21-bcac-802dceed4e53
---
# Identity graph linking rules overview

>[!IMPORTANT]
>
>Identity graph linking rules are currently in Alpha. The feature and documentation are subject to change.

## Table of contents

* [Overview](./overview.md)
* [Example scenarios](./example-scenarios.md)
* [Identity Service and Real-Time Customer Profile](identity-and-profile.md)
* [Identity linking logic](./identity-linking-logic.md)

With Adobe Experience Platform Identity Service and Real-Time Customer Profile, it is easy to assume that your data is ingested perfectly and that all merged profiles represent a single individual person through a person identifier, such as a CRM ID. However, there are possible scenarios where certain data could try to merge multiple disparate profiles into a single profile ("profile collapse"). To prevent these unwanted merges, you can use configurations provided through identity graph linking rules and allow for accurate personalization for your users.

## Example scenarios where profile collapse could happen

* **Shared device**: Shared device refers to devices that are used by more than one individual. Examples of a shared device include tablets, library computers, and kiosks.
* **Bad email and phone numbers**: Bad email and phone numbers refer to end-users registering invalid contact information, such as "test<span>@test.com" for email, and "+1-111-111-1111" for phone number.
* **Erroneous or bad identity values**: Erroneous or bad identity values refer to non-unique identity values that could merge CRM IDs. For example, while IDFA's are required to have 36 characters (32 alphanumeric characters and four hyphens), there are scenarios where an IDFA with an identity value of "user_null" can get ingested. Similarly, phone numbers only support numerical characters, but a phone namespace with an identity value of "not-specified" may get ingested.

For more information on use case scenarios for identity graph linking rules, read the document on [example scenarios](./example-scenarios.md).

## Identity graph linking rules objectives

With Identity graph linking rules you can:

* Configure limits to prevent two disparate person identifiers from merging into one identity graph, so that a single identity graph only represents a single person.
  * The limits that you configure are then enforced by identity optimization algorithm.
* Configure priorities to associate online events conducted by the authenticated individual to a given user.

### Limits

You can use namespace limits to define the maximum number of identities that can exist in a graph based on a given namespace. For example, you can set your graph to have a maximum of just one identity with a CRM ID namespace, thus preventing the merging of two disparate person identifiers within the same graph.

* If a limit is not configured, this could result in unwanted graph merges, such as two identities with a CRM ID namespace in a graph.
* If a limit is not configured, the graph can add as many namespaces as needed as long as the graph is within the guardrails (50 identities/graph).
* If a limit is configured, then the identity optimization algorithm will ensure that the limit is enforced.

### Identity optimization algorithm

The identity optimization algorithm is a rule that ensures that the limits are enforced. The algorithm honors the most recent links and removes the oldest links to make sure that a given graph stays within the limits that you have defined.

The following is a list of implications of the algorithm on associating anonymous events to known identifiers:

* The ECID will be associated to the last authenticated user if the following conditions are met:
  * If CRM IDs are merged by ECID (shared device).
  * If limits are configured to just one CRM ID.

### Priority

>[!IMPORTANT]
>
>Namespace priorities are currently not available for alpha.

You can use namespace priority to define which namespaces are more important than others. The hierarchy that you set for your namespaces are then used to define primary identities and store profile fragments. If priority settings are configured, then the primary identity setting on Web SDK will no longer be used to determine which profile fragments are stored.

* Limits and priority are independent configurations and do **not** affect each other:
  * Limits is an identity graph configuration in Identity Service.
  * Priority is a profile fragment configuration on Real-Time Customer Profile.
  * Priority does **not** affect identity graph system guardrails.

>[!BEGINSHADEBOX]

**Namespace priority example**

Suppose that you have configured the following priority for your namespaces:

1. CRM ID: Represents a user.
2. IDFA: Represents an Apple hardware device, such as an iPhone and iPad.
3. GAID: Represents a Google hardware device, such as Google Pixel.
4. ECID: Represents a web browser, such as Firefox, Safari and Chrome.
5. AAID: Represents a web browser.
If ECID and AAID are sent simultaneously, both identities represent the same web browser (duplicate).

If the following experience events are ingested into Experience Platform, the profile fragments are then stored against the namespace with the higher priority.

**Authenticated events:**

* If the identity map contains an ECID, a GAID, and a CRM ID, the event information will be stored against the CRM ID (primary identity).
  * GAID represents a Google hardware device (e.g. Google Pixel), ECID represents a web browser (e.g. Google Chrome), and CRM ID represents an authenticated user.
  * If the identity map contains a CRM ID, an ECID, and an AAID, the event information will be stored against the CRM ID (primary identity).

**Unauthenticated events:**

* If the identity map contains an ECID, IDFA, and AAID, then the event information will be stored against the IDFA (primary identity).
  * IDFA represents an Apple hardware device (e.g. iPhone), ECID and AAID both represent a web browser (Safari).

>[!ENDSHADEBOX]

## Next steps

For more information on identity graph linking rules, read the following documentation:

* [Example scenarios for configuring identity graph linking rules](./example-scenarios.md)
* [Identity Service and Real-Time Customer Profile](identity-and-profile.md)
* [Identity linking logic](./identity-linking-logic.md)
