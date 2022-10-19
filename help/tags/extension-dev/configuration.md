---
title: Extension Configuration
description: Learn how to configure a tag extension to gather global settings from a user in the Adobe Experience Platform UI or Data Collection UI.
exl-id: 2bf33617-1398-499f-8325-3849dbdb1f97
---
# Extension configuration

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../term-updates.md) for a consolidated reference of the terminology changes.

Extension configuration is the manner by which an extension gathers global settings from a user. For example, consider an extension that allows the user to send a beacon using a Send Beacon action, and the beacon must always contain an account ID. We don't want to trouble users by asking them for the account ID each time they configure a Send Beacon action. Instead, the extension should ask for the account ID once from the extension configuration view. Each time a beacon is to be sent, the Send Beacon action library module can pull the account ID from the extension configuration and add it to the beacon.

When users install an extension to a tag property in Adobe Experience Platform, they will be shown the extension configuration view which your extension will provide. They cannot complete installing the extension without completing extension configuration. See the document on [views](./web/views.md) to learn how to create a view for extension configuration.

After settings are saved from an extension configuration view, they will be emitted in the tag runtime library. You can then access these settings from extension library modules by calling [`turbine.getExtensionSettings()`](./turbine.md#get-extension-settings).

Extension configuration is an optional feature that you may choose not to leverage.
