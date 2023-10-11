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

With Adobe Experience Platform Identity Service and Real-Time Customer Profile, it is easy to assume that your data is ingested perfectly. However, there are possible scenarios where certain data could try to merge multiple profiles.

## Example scenarios

* Shared device: Shared device refers to devices that are used by more than one individual. Examples of a shared device include tablets, library computers, and kiosks.
* Bad email / phone numbers
* Implementation errors (bad data)

## Identity graph linking rules objectives

With Identity graph linking rules you can:

* Configure limits to prevent two person identifiers from merging into one identity graph, so that a single identity graph only represents a single person.
  * The limits that you configure are then enforced by identity optimization algorithm.
* Configure priorities to associate online events conducted by the authenticated individual to a given user.

### Limits

Namespace limits define the maximum number of identities that can exist in a graph from a given namespace. For example, a given graph can only store one identity with a CRM ID namespace.

* As long as the graph is within the guardrails, the graph can add as many namespaces as needed.
  * ECIDs do not have a limit, so the number of ECIDs can continue to grow as long as you are within the guardrails.

### Identity optimization algorithm

* The identity optimization algorithm is a rule that ensures that the limits are honored. 
* The algorithm honors the most recent links and removes the oldest links to make sure that a given identity graph stays within the limits that you have defined.

The following is a list of implications of the algorithm on associating anonymous events to known identifiers:

  * The ECID will be associated to the last authenticated user if the following conditions are met:
    * If CRM IDs are merged by ECID (shared device).
    * If limits are configured to just one CRM ID.


**Priority** (not available for alpha)



>[!BEGINSHADEBOX]

**What namespace priority is**

* Namespace priority defines which namespaces are more important than others. 
* This information is used to define primary identities to store profile fragments.
  * If priority is configured, the primary identity setting on Web SDK will no longer be used to determine storing profile fragments

**What namespace priority is not**

* Limits and priority are independent configurations - they do **not** affect each other.
  * Limits is an identity graph configuration in Identity Service
  * Priority is a profile fragment configuration on Real-Time Customer Profile.
* Priority does **not** affect identity graph system guardrails.


>[!ENDSHADEBOX]