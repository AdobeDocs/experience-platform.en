---
title: Web Extension Flow
description: Learn how web extension components interact with each other at runtime in Adobe Experience Platform.
exl-id: 90a0c64c-d240-4e2c-876b-22f05d6f3f82
TQID: 'https://experienceleague.adobe.com/hRbG-iWrtGKOuQoq64EXwEqBF6aE-wC4Urolt0AOZHI'
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
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
# Web extension flow

In web extensions, each event, condition, action, and data element type has both a view which allows users to modify settings and a library module to act upon those user-defined settings.

As the following high-level diagram shows, the extension's event type view will be shown inside an iframe within the application integrated with Adobe Experience Platform. The user then uses the view to modify settings which are then saved within Experience Platform. When the tag runtime library is built, both the extension's event type library module as well as the user-defined settings will be included in the runtime library. At runtime, Experience Platform will inject the user-defined settings into the library module.

![extension flow diagram](../images/flow/web/extension-flow.png)

In the following diagram you can see the link between events, conditions and actions inside the rule processing flow.

![rule processing flow diagram](../images/flow/web/rule-processing-flow.png)

The rule processing flow contains the following phases:

1. The `settings` and the `trigger` method are provided to the event library module at startup.
1. When the event library module determines the event has occurred, the event library module calls `trigger`.
1. Tags passes `settings` into the rule's condition library modules where conditions are evaluated.
1. Each condition library module returns whether a condition evaluates to true.
1. If all conditions pass, the rule's actions are executed.
