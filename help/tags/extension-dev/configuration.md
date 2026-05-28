---
title: Extension Configuration
description: Learn how to configure a tag extension to gather global settings from a user in the Adobe Experience Platform UI or Data Collection UI.
exl-id: 2bf33617-1398-499f-8325-3849dbdb1f97
TQID: https://experienceleague.adobe.com/lW8Mmn8baFACD38UIgN-lmjuCZBjmapOZOudjl6xogc
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
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
# Extension configuration

Extension configuration is the manner by which an extension gathers global settings from a user. For example, consider an extension that allows the user to send a beacon using a Send Beacon action, and the beacon must always contain an account ID. We don't want to trouble users by asking them for the account ID each time they configure a Send Beacon action. Instead, the extension should ask for the account ID once from the extension configuration view. Each time a beacon is to be sent, the Send Beacon action library module can pull the account ID from the extension configuration and add it to the beacon.

When users install an extension to a tag property in Adobe Experience Platform, they will be shown the extension configuration view which your extension will provide. They cannot complete installing the extension without completing extension configuration. See the document on [views](./web/views.md) to learn how to create a view for extension configuration.

After settings are saved from an extension configuration view, they will be emitted in the tag runtime library. You can then access these settings from extension library modules by calling [`turbine.getExtensionSettings()`](./turbine.md#get-extension-settings).

Extension configuration is an optional feature that you may choose not to leverage.
