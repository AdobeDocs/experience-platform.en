---
title: Identity graph linking rules overview
description: Learn about Identity Graph Linking Rules in Identity Service.
hide: true
hidefromtoc: true
badge: Alpha
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


With Adobe Experience Platform Identity Service and Real-Time Customer Profile, it is easy to assume that your data is ingested perfectly, resulting in all merged profiles representing a single individual person (represented by a person identifier, such as CRM ID). However, there are possible scenarios where certain data could try to merge multiple profiles into a single profile ("profile collapse"). This feature is designed to prevent these unwanted merges, which could prevent accurate personalization to users.

## Example scenarios where profile collapse could happen

* Shared device: Shared device refers to devices that are used by more than one individual. Examples of a shared device include tablets, library computers, and kiosks.
* Bad email / phone numbers: End-users registering invalid contact information, such as "test<span>@test.com", "+1-111-111-1111"
* Erroneous/'bad' identity values: Non-unique identity values that could merge CRMIDs, such as an identity with an IDFA namespace with identity value "user_null" (IDFA identity values should have 36 characters - 32 alphanumeric characters and four hyphens), or phone namespace with identity value "not-specified" (phone numbers should not have any alphabet characters).

## Identity graph linking rules objectives

With Identity graph linking rules you can:

* Configure limits to prevent two person identifiers from merging into one identity graph, so that a single identity graph only represents a single person.
  * The limits that you configure are then enforced by identity optimization algorithm.
* Configure priorities to associate online events conducted by the authenticated individual to a given user.

### Limits

Namespace limits define the maximum number of identities that can exist in a graph from a given namespace.

* Customers will define whether a limit is needed for each namespace.
* If a limit is not configured, this could result in unwanted graph merges, such as 2 identities with a CRM ID namespace in a graph.
* If a limit is not configured, the graph can add as many namespaces as needed as long as the graph is within the guardrails (50 identities/graph)
* If a limit is configured, then the identity optimization algorithm (see below) will ensure that the limit is honored.

### Identity optimization algorithm

* The identity optimization algorithm is a rule that ensures that the limits are honored. 
* The algorithm honors the most recent links and removes the oldest links to make sure that a given identity graph stays within the limits that you have defined.

The following is a list of implications of the algorithm on associating anonymous events to known identifiers:

  * The ECID will be associated to the last authenticated user if the following conditions are met:
    * If CRM IDs are merged by ECID (shared device).
    * If limits are configured to just one CRM ID.


### Priority (not available for alpha)

You can use namespace priority to define which namespaces are more important than others. The hierarchy that you set for your namespaces are then used to define primary identities and store profile fragments. If priority settings are configured, then the primary identity setting on Web SDK will no longer be used to determine which profile fragments are stored.

>[!IMPORTANT]
>
> * Limits and priority are independent configurations and do **not** affect each other:
>   * Limits is an identity graph configuration in Identity Service.
>   * Priority is a profile fragment configuration on Real-Time Customer Profile.
>   * Priority does **not** affect identity graph system guardrails.


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

* Authenticated events:
  * If the identity map contains an ECID, a GAID, and a CRM ID, the event information will be stored against the CRM ID (primary identity).
    * GAID represents John's Google Pixel (hardware), ECID represents Google Chrome (web browser), CRM ID represents John (person).
  * If the identity map contains a CRM ID, an ECID, and an AAID, the event information will be stored against the CRM ID (primary identity).
* Unauthenticated events:
  * If the identity map contains an ECID, IDFA, and AAID, then the event information will be stored against the IDFA (primary identity).
    * John uses Safari on his iPhone to browse your website anonymously.
      * IDFA represents iPhone (hardware), ECID and AAID both represent Safari (web browser).

>[!ENDSHADEBOX]