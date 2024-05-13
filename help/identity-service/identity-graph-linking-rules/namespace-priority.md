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

