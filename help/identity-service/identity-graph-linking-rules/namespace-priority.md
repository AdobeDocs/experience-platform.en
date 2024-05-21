---
title: Namespace priority
description: Learn about namespace priority in Identity Service
badge: Beta
---
# Namespace priority

>[!IMPORTANT]
>
>Namespace priority is in beta. The feature and documentation are subject to change.

Every customer implementation is unique and tailored to meet a particular organization's goals, and as such, the importance of a given namespace varies from customer to customer. Real-world examples include:

* On one hand, you might deem the Email namespace to represent a person entity and thus be unique per person. On the other hand, another customer might consider the Email namespace as an unreliable identifier and therefore, they may allow a single CRM ID to be associated to multiple identities with the Email namespace.
* You might collect online behavior using a "Login ID" namespace. This Login ID could have a 1:1 relationship with the CRM ID, which then stores attributes from a CRM system and may be considered the most important namespace. In this case, you are then determining that the CRM ID namespace is a more accurate representation of a person, while the Login ID namespace is the second most important.

You must make configurations in Identity Service that reflects the importance of your namespaces as this influences how profiles are formed and segmented.

## Determine your priorities

Determination of namespace priority is based on the following factors:

### Identity graph structure

If your organization's graph structured is layered, then namespace priority should reflect this so that the correct links are removed in the case of graph collapse.

>[!TIP]
>
>* What is "Graph collapse"?
>
>* What is a "layered" graph?

### Semantic meaning of the namespace

An identity represents a real-world object. There are three objects that are represented in the identity graph. In order of importance, they are:

* People (Cross-device, Email, Phone number)
* Hardware device
* Web browser (Cookie)

Person namespaces are relatively immutable compared to hardware devices (such as IDFA, GAID), which are relatively immutable compared to web browsers.

Another way to approach this topic is through cardinality. For a given person entity, how many identities will be created? In most cases, a person will have one CRM ID, a handful of hardware device identifiers (IDFA/GAID resets should not happen often), and even more cookies (an individual could conceivably brows on multiple devices, use incognito mode, or reset cookies at any  given time). Generally, **lower cardinality indicates a namespace with a higher value**.

### Validate your namespace priority settings

Once you have an idea of how you will prioritize your namespaces, you can use the Graph Simulation tool to test out various graph collapse scenarios and ensure that your priority configurations are returning the expected graph results. For more information, read the guide on using the [Graph Simulation tool](./graph-simulation.md).

### Configure namespace priority

Namespace priority can be configured using [!UICONTROL Identity Settings]. In the [!UICONTROL Identity Settings] interface, you maye drag and drop a namespace to determine its relative importance.

>[!IMPORTANT]
>
>You cannot prioritize device/cookie namespaces over person namespaces. This restriction ensures that misconfigurations does not happen.

## Namespace priority usage

Currently, namespace priority influences system behavior of Real-Time Customer Profile. The diagram below illustrates this concept. For more information, read the guide on [Adobe Experience Platform and applications architecture diagrams](https://experienceleague.adobe.com/en/docs/blueprints-learn/architecture/architecture-overview/platform-applications).

### Identity Service: Identity optimization algorithm

For relatively complex graph structures, namespace priority plays an important role in ensuring that the correct links are removed when graph collapse scenarios happen. For more information...

### Real-Time Customer Profile: primary identity determination for experience events

* For experience events, the primary identity is determined by the namespace with the highest priority.
  * This is because experience events are dynamic in nature. An identity map may contain three or more identities, and namespace priority ensures that the most important namespace is associated to the experience event.
* As a result, the following configurations **will no longer be used by Real-Time Customer Profile**:
  * "Primary" checkbox on data element type in WebSDK.
  * Any fields marked as primary identity on an XDM ExperienceEvent Class schema.
  * Default primary identity settings in the Adobe Analytics source connector (ECID or AAID).
* On the other hand, **namespace priority does not determine primary identity for profile records**.
  * For profile records, you may use the schemas workspace in the Experience Platform UI to define your identity fields, including the primary identity. Read the guide on [defining identity fields in the UI](../../xdm/ui/fields/identity.md) for more information.

>[!NOTE]
>
>* Namespace priority is **a property of a namespace**. It is a numerical value assigned to a namespace to indicate its relative importance.
>
>* Primary identity is the identity in which a profile fragment is stored against. A profile fragment is a record of data that stores information about a certain user: attributes (usually ingested via CRM records) or events (usually ingested from experience events or online data).

### Examples

| Namespace | Real-world application of the namespace | Priority |
| --- | --- | --- |
| CRMID | User | 1 |
| IDFA | Apple hardware device (iPhone, IPad, etc.) | 2 |
| GAID | Google hardware device (Google Pixel, Pixelbook, etc.)| 3 |
| ECID | Web browser (Firefox, Safari, Google Chrome, etc.)| 4 |
| AAID | Web browser | 5 |

{style="table-layout:auto"}

| User action (Experience event) | Authentication state | Data source | Identity map | Primary identity (primary key of profile fragment) |
| --- | --- | --- | --- | --- |
| View credit card offer page | Unauthenticated (anonymous) | Web SDK | {ECID} | ECID |
| View help page | Unauthenticated | Mobile SDK | {ECID, IDFA} | IDFA |
| View checking account balance | Authenticated | Web SDK | {CRMID, ECID} | CRM ID |
| Sign up for home loan | Authenticated | Analytics source connector | {CRMID, ECID, AAID} | CRMID |
| Transfer $1,000 from checking to savings | Authenticated | Mobile SDK | {CRMID, GAID, ECID} | CRMID |

{style="table-layout:auto"}

### Segmentation Service: segment membership metadata storage

For a given merged profile, segment memberships will be stored against the identity with the highest priority namespace.

For example, assume that there are two profiles:

* The first profile represents John.
* The second profile represents Jane.

If the John and Jane share a device, then the ECID (web browser) transfers from one person to another. However, this does not influence the segment membership information stored against John and Jane.

If the segment qualification criteria were solely based on anonymous events stored against the ECID, then Jane would qualify for that segment

## Impact on other services

**Experience Data Model (XDM) Schemas**

Any schema that is not an XDM Experience Event, such as XDM Individual Profiles, will continue to honor any [fields that you mark as an identity](../../xdm/ui/fields/identity.md).

**Data lake**

Data ingestion to data lake will continue to honor the primary identity settings configured on [Web SDK](../../tags/extensions/client/web-sdk/data-element-types.md#identity-map) and schemas. 

* Data lake will not determine primary identity based on namespace priority. For example, Adobe Customer Journey Analytics will continue to use values in the identity map even after namespace priority is enabled (such as, adding a dataset to a new connection), because Customer Journey Analytics consumes their data from data lake.

**Advanced data lifecycle management**

Data hygiene record delete requests functions in the following manner, for a given identity:

* Real-Time Customer Profile: Deletes any profile fragment with specified identity as primary identity. **The primary identity on Profile will now be determined based on namespace priority.**
* Data lake: Deletes any record with the specified identity as primary identity.

**Privacy Service**

Privacy Service deletion requests function in the following manner, for a given identity:

* Real-Time Customer Profile: Deletes any profile fragment with specified identity value as primary identity. **The primary identity on Profile will now be determined based on namespace priority.**
* Data lake: Deletes any record with the specified identity as primary or secondary identity.