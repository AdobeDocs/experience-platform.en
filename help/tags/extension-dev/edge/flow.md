---
title: Edge Extension Flow
description: Learn how the components of an edge extension in Adobe Experience Platform interact with each other at runtime.
exl-id: 99058e22-3e14-4ec6-858e-bb1c1fafdb7c
TQID: 'https://experienceleague.adobe.com/1cYf-3uRV0NSFBaEr2C5yaHfF9XQ0jcZfFgOozG7ElA'
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
  - id: e1f2a3b4-4027-4027-9027-400000000027
    internal-label: Event forwarding extensions
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e7840a7b-a94f-4256-aed0-4e94b08e157b
    internal-label: System architecture
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Edge extension flow

In edge extensions, each condition, action, and data element type has both a view which allows users to modify settings and a library module to act upon those user-defined settings.

As the following high-level diagram shows, the extension's action type view is shown inside an iframe within the application integrated with Adobe Experience Platform. The view is then used to modify settings which are then saved within Experience Platform. When the tag runtime library is built, both the extension's action type library module as well as the user-defined settings will be included in the runtime library that gets deployed to the edge node. User-defined settings from Experience Platform are injected into the library module at runtime.

![extension flow diagram](../images/flow/edge/event-processing-flow.png)

In the following diagram you can see the link between events, conditions and actions inside the rule processing flow.

![rule processing flow diagram](../images/flow/edge/rule-processing-flow.png)

The rule processing flow contains the following phases:

1. The `settings` and the `trigger` method are provided to the event library module at startup.
1. When the event library module determines the event has occurred, the event library module calls `trigger`.
1. Experience Platform passes `settings` into the rule's condition-type library modules where conditions are then evaluated.
1. Each condition type returns whether a condition evaluates to true.
1. If all conditions pass, the rule's actions are executed.
