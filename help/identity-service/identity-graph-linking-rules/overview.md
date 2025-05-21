---
title: Identity Graph Linking Rules
description: Learn about Identity Graph Linking Rules in Identity Service.
exl-id: 317df52a-d3ae-4c21-bcac-802dceed4e53
---
# [!DNL Identity Graph Linking Rules] overview {#identity-graph-linking-rules-overview}

>[!CONTEXTUALHELP]
>id="platform_identities_linkingrules_overview"
>title="Identity graph linking rules"
>abstract="To prevent these unwanted merges, you can use configurations provided through Identity Graph Linking Rules and allow for accurate personalization for your users."

>[!IMPORTANT]
>
>[!DNL Identity Graph Linking Rules] is now generally available. Contact Adobe Support if you have an existing sandbox that requires collapsed graphs to be un-collapsed ("fixed") after you enable identity settings.

With Adobe Experience Platform Identity Service and Real-Time Customer Profile, it is easy to assume that your data is ingested perfectly and that all merged profiles represent a single individual person through a person identifier, such as a CRMID. However, there are possible scenarios where certain data could try to merge multiple disparate profiles into a single profile ("graph collapse"). To prevent these unwanted merges, you can use configurations provided through [!DNL Identity Graph Linking Rules] and allow for accurate personalization for your users.

## Get started

The following documents are essential in understanding [!DNL Identity Graph Linking Rules].

* [Identity Optimization Algorithm](./identity-optimization-algorithm.md)
* [Implementation guide](./implementation-guide.md)
* [Examples of graph configurations](./example-configurations.md)
* [Troubleshooting and FAQ](./troubleshooting.md)
* [Namespace priority](./namespace-priority.md)
* [Graph simulation UI](./graph-simulation.md)
* [Identity settings UI](./identity-settings-ui.md)

## Video library

Watch the following videos to learn about some of the fundamental aspects of Identity Graph Linking Rules.

<!-- CARDS
{target = _blank}
* https://experienceleague.adobe.com/en/docs/platform-learn/tutorials/identities/graph-linking-rules/overview
* https://experienceleague.adobe.com/en/docs/platform-learn/tutorials/identities/graph-linking-rules/graph-simulation 

    {description = Learn how to use the graph simulator to test out identity graph linking rules.}

* https://experienceleague.adobe.com/en/docs/platform-learn/tutorials/identities/graph-linking-rules/identity-settings
    {description = Learn how to enable and configure identity graph linking rules to build accurate customer profiles}
-->
<!-- START CARDS HTML - DO NOT MODIFY BY HAND -->
<div class="columns">
    <div class="column is-half-tablet is-half-desktop is-one-third-widescreen" aria-label="Identity graph linking rules overview">
        <div class="card" style="height: 100%; display: flex; flex-direction: column; height: 100%;">
            <div class="card-image">
                <figure class="image x-is-16by9">
                    <a href="https://experienceleague.adobe.com/en/docs/platform-learn/tutorials/identities/graph-linking-rules/overview" title="Identity graph linking rules overview" target="_blank" rel="referrer">
                        <img class="is-bordered-r-small" src="https://video.tv.adobe.com/v/3448250/?format=jpeg&nocache=1747851655227" alt="Identity graph linking rules overview"
                             style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; overflow: hidden; display: block; margin: auto;">
                    </a>
                </figure>
            </div>
            <div class="card-content is-padded-small" style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                <div class="top-card-content">
                    <p class="headline is-size-6 has-text-weight-bold">
                        <a href="https://experienceleague.adobe.com/en/docs/platform-learn/tutorials/identities/graph-linking-rules/overview" target="_blank" rel="referrer" title="Identity graph linking rules overview">Identity graph linking rules overview</a>
                    </p>
                    <p class="is-size-6">Get an overview of how identity graph linking rules help data architects maintain accurate customer profiles and prevent graph collapse.</p>
                </div>
                <a href="https://experienceleague.adobe.com/en/docs/platform-learn/tutorials/identities/graph-linking-rules/overview" target="_blank" rel="referrer" class="spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM" style="align-self: flex-start; margin-top: 1rem;">
                    <span class="spectrum-Button-label has-no-wrap has-text-weight-bold">Watch</span>
                </a>
            </div>
        </div>
    </div>
    <div class="column is-half-tablet is-half-desktop is-one-third-widescreen" aria-label="Identity graph linking rules - Graph Simulation">
        <div class="card" style="height: 100%; display: flex; flex-direction: column; height: 100%;">
            <div class="card-image">
                <figure class="image x-is-16by9">
                    <a href="https://experienceleague.adobe.com/en/docs/platform-learn/tutorials/identities/graph-linking-rules/graph-simulation" title="Identity graph linking rules - Graph Simulation" target="_blank" rel="referrer">
                        <img class="is-bordered-r-small" src="https://video.tv.adobe.com/v/3444032/?format=jpeg&nocache=1747851655237" alt="Identity graph linking rules - Graph Simulation"
                             style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; overflow: hidden; display: block; margin: auto;">
                    </a>
                </figure>
            </div>
            <div class="card-content is-padded-small" style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                <div class="top-card-content">
                    <p class="headline is-size-6 has-text-weight-bold">
                        <a href="https://experienceleague.adobe.com/en/docs/platform-learn/tutorials/identities/graph-linking-rules/graph-simulation" target="_blank" rel="referrer" title="Identity graph linking rules - Graph Simulation">Identity graph linking rules - Graph Simulation</a>
                    </p>
                    <p class="is-size-6">Learn how to use the graph simulator to test out identity graph linking rules.</p>
                </div>
                <a href="https://experienceleague.adobe.com/en/docs/platform-learn/tutorials/identities/graph-linking-rules/graph-simulation" target="_blank" rel="referrer" class="spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM" style="align-self: flex-start; margin-top: 1rem;">
                    <span class="spectrum-Button-label has-no-wrap has-text-weight-bold">Watch</span>
                </a>
            </div>
        </div>
    </div>
    <div class="column is-half-tablet is-half-desktop is-one-third-widescreen" aria-label="Identity graph linking rules - Identity settings">
        <div class="card" style="height: 100%; display: flex; flex-direction: column; height: 100%;">
            <div class="card-image">
                <figure class="image x-is-16by9">
                    <a href="https://experienceleague.adobe.com/en/docs/platform-learn/tutorials/identities/graph-linking-rules/identity-settings" title="Identity graph linking rules - Identity settings" target="_blank" rel="referrer">
                        <img class="is-bordered-r-small" src="https://video.tv.adobe.com/v/3458487/?format=jpeg&nocache=1747851655218" alt="Identity graph linking rules - Identity settings"
                             style="width: 100%; aspect-ratio: 16 / 9; object-fit: cover; overflow: hidden; display: block; margin: auto;">
                    </a>
                </figure>
            </div>
            <div class="card-content is-padded-small" style="display: flex; flex-direction: column; flex-grow: 1; justify-content: space-between;">
                <div class="top-card-content">
                    <p class="headline is-size-6 has-text-weight-bold">
                        <a href="https://experienceleague.adobe.com/en/docs/platform-learn/tutorials/identities/graph-linking-rules/identity-settings" target="_blank" rel="referrer" title="Identity graph linking rules - Identity settings">Identity graph linking rules - Identity settings</a>
                    </p>
                    <p class="is-size-6">Learn how to enable and configure identity graph linking rules to build accurate customer profiles</p>
                </div>
                <a href="https://experienceleague.adobe.com/en/docs/platform-learn/tutorials/identities/graph-linking-rules/identity-settings" target="_blank" rel="referrer" class="spectrum-Button spectrum-Button--outline spectrum-Button--primary spectrum-Button--sizeM" style="align-self: flex-start; margin-top: 1rem;">
                    <span class="spectrum-Button-label has-no-wrap has-text-weight-bold">Watch</span>
                </a>
            </div>
        </div>
    </div>
</div>
<!-- END CARDS HTML - DO NOT MODIFY BY HAND -->


## Graph collapse scenarios {#graph-collapse-scenarios}

>[!CONTEXTUALHELP]
>id="platform_identities_graphcollapsescenarios"
>title="Graph Collapse Scenarios"
>abstract="There are multiple reasons why graphs could "collapse", or represent multiple person entities."

This section outlines example scenarios that you may consider when configuring [!DNL Identity Graph Linking Rules].

### Shared device

There are instances where multiple logins can occur on a single device:

| Shared device | Description |
| --- | --- |
| Family computers and tablets | Husband and wife both login to their respective bank accounts. |
| Public kiosk | Travelers at an airport logging on using their loyalty ID to check in bags and print boarding passes. |
| Call center | Call center personnel log in on a single device on behalf of customers calling customer support to resolve issues. |

![A diagram of some common shared devices.](../images/identity-settings/shared-devices.png)

In these cases, from a graph standpoint, with no limits enabled, a single ECID will be linked to multiple CRMIDs. 

With [!DNL Identity Graph Linking Rules], you can:

* Configure the ID used for login as unique identifier. For example, you can limit a graph to store just one identity with a CRMID namespace, and thus define that CRMID as the unique identifier of a shared device.
  * By doing this, you can ensure that CRMIDs do not get merged by the ECID.

### Invalid email/phone scenarios

There are also instances of users who provide fake values as phone numbers and/or email addresses when registering. In these cases, if limits are not enabled, then phone/email related identities will end up being linked to multiple different CRMIDs.

![A diagram that represents invalid email or phone scenarios.](../images/identity-settings/invalid-email-phone.png)

With [!DNL Identity Graph Linking Rules], you can:

* Configure either the CRMID, phone number, or email address as the unique identifier and thus limit one person to just one CRMID, phone number, and/or email address associated with their account.

### Erroneous or bad identity values

There are cases where non-unique, erroneous identity values are ingested in the system, irrespective of namespace. Examples include:

* IDFA namespace with the identity value of "user_null".
  * IDFA identity values should have 36 characters: 32 alphanumeric characters and four hyphens.
* Phone number namespace with the identity value of "not-specified".
  * Phone numbers should not have any alphabet characters.

These identities could result in the following graphs, where multiple CRMIDs are merged together with the 'bad' identity:

![A graph example of identity data with erroneous or bad identity values.](../images/identity-settings/bad-data.png)

With [!DNL Identity Graph Linking Rules] you can configure the CRMID as the unique identifier to prevent unwanted profile collapsing due to this type of data.

## [!DNL Identity Graph Linking Rules] {#identity-graph-linking-rules}

With [!DNL Identity Graph Linking Rules] you can:

* Create a single identity graph / merged profile for each user by configuring unique namespaces, which will prevent two disparate person identifiers from merging into one identity graph.
* Associate online, authenticated events to the person by configuring priorities

### Terminology {#terminology}

| Terminology | Description |
| --- | --- |
| Unique namespace | A unique namespace is an identity namespace that has been set up to be distinct within the context of an identity graph. You can configure a namespace to be unique using the UI. Once a namespace is defined as unique, a graph can only have one identity that contains that namespace. |
| Namespace priority | Namespace priority refers to the relative importance of namespaces compared to one another. Namespace priority is configurable through the UI. You can rank namespaces in a given identity graph. Once enabled, names priority will be used in various scenarios, such as input for Identity Optimization Algorithm and determining primary identity for experience event fragments. |
| Identity Optimization Algorithm | The Identity Optimization Algorithm ensures that guidelines created by configuring a unique namespace and namespace priorities are enforced in a given identity graph. |

### Unique namespace {#unique-namespace}

You can configure a namespace to be unique using the identity settings UI workspace. Doing so, informs the Identity Optimization Algorithm that a given graph may only have one identity that contains that unique namespace. This prevents the merging of two disparate person identifiers within the same graph.

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

You must configure a unique namespace to inform the Identity Optimization Algorithm to enforce limitations on the identity data that are ingested into a given identity graph.

### Namespace priority {#namespace-priority}

Namespace priority refers to the relative importance of namespaces compared to one another. Namespace priority is configurable through the UI and you can rank namespaces in a given identity graph. 

One way in which namespace priority is used is in determining the primary identity of experience event fragments (user behavior) in Real-Time Customer Profile. If priority settings are configured, then the primary identity setting on Web SDK will no longer be used to determine which profile fragments are stored.

Unique namespaces and namespace priorities are both configurable in the identity settings UI workspace. However, the effects of their configurations are different:

| | Identity Service | Real-Time Customer Profile |
| --- | --- | --- |
| Unique namespace | In Identity Service, the Identity Optimization Algorithm refers to unique namespaces to determine the identity data that is ingested to a given identity graph.| Unique namespaces do not affect Real-Time Customer Profile. |
| Namespace priority | In Identity Service, for graphs that have multiple layers, namespace priority will determine that the appropriate links are removed. | When an experience event is ingested in Profile, the namespace with the highest priority becomes the primary identity of the profile fragment. |

* Namespace priority does not affect graph behavior when the limit of 50 identities per graph is reached.
* **Namespace priority is a numerical value** assigned to a namespace indicating its relative importance. This is a property of a namespace.
* **Primary identity is the identity in which a profile fragment is stored against**. A profile fragment is a record of data that stores information about a certain user: attributes (usually ingested via CRM records) or events (usually ingested from experience events, or online data).
* Namespace priority determines the primary identity for experience event fragments.
  * For profile records, you can use the schemas workspace in the Experience Platform UI to define identity fields, including the primary identity. Read the guide on [defining identity fields in the UI](../../xdm/ui/fields/identity.md) for more information.
* If an experience event has two or more identities of the highest namespace priority in the identityMap, it will be rejected from ingestion because it will be deemed as "bad data". For example, if the identityMap contains `{ECID: 111, CRMID: John, CRMID: Jane}`, the entire event will be rejected as bad data because it implies that the event is associated to both `CRMID: John` and `CRMID: Jane` simultaneously.

For more information, read the guide on [namespace priority](./namespace-priority.md).

## Next steps

For more information on [!DNL Identity Graph Linking Rules], read the following documentation:

* [Identity Optimization Algorithm](./identity-optimization-algorithm.md)
* [Implementation guide](./implementation-guide.md)
* [Examples of graph configurations](./example-configurations.md)
* [Troubleshooting and FAQ](./troubleshooting.md)
* [Namespace priority](./namespace-priority.md)
* [Graph Simulation UI](./graph-simulation.md)
* [Identity settings UI](./identity-settings-ui.md)