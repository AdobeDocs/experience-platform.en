---
title: Web Extension Flow
description: Learn how web extension components interact with each other at runtime in Adobe Experience Platform.
exl-id: 90a0c64c-d240-4e2c-876b-22f05d6f3f82
TQID: https://experienceleague.adobe.com/hRbG-iWrtGKOuQoq64EXwEqBF6aE-wC4Urolt0AOZHI
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: f002a92a-b99f-47a4-90c8-65e0e415bc7a
    internal-label: Pass
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
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
