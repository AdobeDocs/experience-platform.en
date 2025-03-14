---
title: Identity Graph Linking Rules
description: Learn about identity graph linking rules in Identity Service.
exl-id: 317df52a-d3ae-4c21-bcac-802dceed4e53
---
# Identity graph linking rules overview

>[!AVAILABILITY]
>
>Identity graph linking rules is currently in Limited Availability. Contact your Adobe account team for information on how to access the feature in development sandboxes.

With Adobe Experience Platform Identity Service and Real-Time Customer Profile, it is easy to assume that your data is ingested perfectly and that all merged profiles represent a single individual person through a person identifier, such as a CRMID. However, there are possible scenarios where certain data could try to merge multiple disparate profiles into a single profile ("graph collapse"). To prevent these unwanted merges, you can use configurations provided through identity graph linking rules and allow for accurate personalization for your users.

Watch the following video for additional information on using identity graph linking rules:

>[!VIDEO](https://video.tv.adobe.com/v/3448250/?learn=on&enablevpops)

## Get started

The following documents are essential in understanding identity graph linking rules.

* [Identity optimization algorithm](./identity-optimization-algorithm.md)
* [Implementation guide](./implementation-guide.md)
* [Examples of graph configurations](./example-configurations.md)
* [Troubleshooting and FAQ](./troubleshooting.md)
* [Namespace priority](./namespace-priority.md)
* [Graph simulation UI](./graph-simulation.md)
* [Identity settings UI](./identity-settings-ui.md)

## Graph collapse scenarios {#graph-collapse-scenarios}

>[!CONTEXTUALHELP]
>id="platform_identities_graphcollapsescenarios"
>title="Graph Collapse Scenarios"
>abstract="There are multiple reasons why graphs could "collapse", or represent multiple person entities."

This section outlines example scenarios that you may consider when configuring identity graph linking rules.

### Shared device

There are instances where multiple logins can occur on a single device:

| Shared device | Description |
| --- | --- |
| Family computers and tablets | Husband and wife both login to their respective bank accounts. |
| Public kiosk | Travelers at an airport logging on using their loyalty ID to check in bags and print boarding passes. |
| Call center | Call center personnel log in on a single device on behalf of customers calling customer support to resolve issues. |

![A diagram of some common shared devices.](../images/identity-settings/shared-devices.png)

In these cases, from a graph standpoint, with no limits enabled, a single ECID will be linked to multiple CRMIDs. 

With identity graph linking rules, you can:

* Configure the ID used for login as unique identifier. For example, you can limit a graph to store just one identity with a CRMID namespace, and thus define that CRMID as the unique identifier of a shared device.
  * By doing this, you can ensure that CRMIDs do not get merged by the ECID.

### Invalid email/phone scenarios

There are also instances of users who provide fake values as phone numbers and/or email addresses when registering. In these cases, if limits are not enabled, then phone/email related identities will end up being linked to multiple different CRMIDs.

![A diagram that represents invalid email or phone scenarios.](../images/identity-settings/invalid-email-phone.png)

With identity graph linking rules, you can:

* Configure either the CRMID, phone number, or email address as the unique identifier and thus limit one person to just one CRMID, phone number, and/or email address associated with their account.

### Erroneous or bad identity values

There are cases where non-unique, erroneous identity values are ingested in the system, irrespective of namespace. Examples include:

* IDFA namespace with the identity value of "user_null".
  * IDFA identity values should have 36 characters: 32 alphanumeric characters and four hyphens.
* Phone number namespace with the identity value of "not-specified".
  * Phone numbers should not have any alphabet characters.

These identities could result in the following graphs, where multiple CRMIDs are merged together with the 'bad' identity:

![A graph example of identity data with erroneous or bad identity values.](../images/identity-settings/bad-data.png)

With identity graph linking rules you can configure the CRMID as the unique identifier to prevent unwanted profile collapsing due to this type of data.

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

* Scott uses a tablet and opens his Google Chrome browser to go to acme<span>.com, where he signs in and browses for new basketball shoes.
  * Behind the scenes, this scenario logs the following identities:
    * An ECID namespace and value to represent the use of the browser
    * A CRMID namespace and value to represent the authenticated user (Scott signed in with his username and password combination).
* His son Peter then uses the same tablet and also uses Google Chrome to go to acme<span>.com, where he signs in with his own account to browse for football equipment.
  * Behind the scenes, this scenario logs the following identities:
    * The same ECID namespace and value to represent the browser.
    * A new CRMID namespace and value to represent the authenticated user.

If CRMID was configured as a unique namespace, then the identity optimization algorithm splits the CRMIDs apart into two separate identity graphs, instead of merging them together.

If you do not configure a unique namespace, you may end up with unwanted graph merges, such as two identities with the same CRMID namespace, but different identity values (scenarios like these often represent two different person entities in the same graph).

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

* [Identity optimization algorithm](./identity-optimization-algorithm.md)
* [Implementation guide](./implementation-guide.md)
* [Examples of graph configurations](./example-configurations.md)
* [Troubleshooting and FAQ](./troubleshooting.md)
* [Namespace priority](./namespace-priority.md)
* [Graph simulation UI](./graph-simulation.md)
* [Identity settings UI](./identity-settings-ui.md)
