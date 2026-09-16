---
title: Microsoft Azure Extension Overview
description: Learn about the Microsoft Azure extension for event forwarding in Adobe Experience Platform.
exl-id: 2337d99d-861e-44e7-94ed-ba21ef28d815
last-substantial-update: 2022-11-23T00:00:00.000Z
TQID: https://experienceleague.adobe.com/TChdA0zKwBpe8oyauafbwWZKgZkPcz6Y4cj76NoCGjw
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: ae2cba0e-54f2-464b-a3b3-ad371e8a886a
    internal-label: Catalog
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data elements
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# [!DNL Microsoft Azure] extension overview

In [!DNL Microsoft Azure], [[!DNL Event Hubs]](https://azure.microsoft.com/en-us/products/event-hubs/#overview) is a highly scalable, real-time data ingress service that allows you to process and analyze the massive amounts of data produced by your connected devices and applications. Once data is collected into an event hub, it can be transformed and stored using any real-time analytics provider or batching/storage adapters.

The [!DNL Microsoft Azure] [event forwarding](../../../ui/event-forwarding/overview.md) extension leverages [!DNL Event Hubs] to send events from the Adobe Experience Platform Edge Network to [!DNL Azure] for further processing. This guide covers how to install the extension and employ its capabilities in an event forwarding rule.

## Prerequisites

In order to use this extension, you must have a valid [!DNL Azure] account with access to [!DNL Event Hubs]. You must also [create an event hub using the [!DNL Azure] portal](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-create) before following the steps below.

## Install the extension

To install the Microsoft [!DNL Azure] extension, navigate to the Data Collection UI or Experience Platform UI and select **[!UICONTROL Event Forwarding]** from the left navigation. From here, select a property to add the extension to, or create a new property instead.

Once you have selected or created the desired property, select **[!UICONTROL Extensions]** in the left navigation, then select the **[!UICONTROL Catalog]** tab. Search for the [!UICONTROL Microsoft Azure] card, then select **[!UICONTROL Install]**.

![The [!UICONTROL Install] button being selected for the [!UICONTROL Microsoft Azure] extension in the Data Collection UI.](../../../images/extensions/server/azure/install.png)

Since the extension does not have any configuration properties, it is immediately added to the list of installed extensions. You can now start using [!DNL Event Hub] action types when configuring event forwarding rules.

## Configure an event forwarding rule {#rule}

Start creating a new event forwarding rule and configure its conditions as desired. When selecting the actions for the rule, select **[!UICONTROL Microsoft Azure]** for the extension, then select **[!UICONTROL Send Data to Event Hubs]** for action type.

![The [!UICONTROL Send Data to Event Hubs] action type being selected for a rule in the Data Collection UI.](../../../images/extensions/server/azure/select-action-type.png)

The right panel updates to show configuration options for how the data should be sent. Specifically, you must assign [data elements](../../../ui/managing-resources/data-elements.md) to the various properties that represent your [!DNL Event Hub] configuration.

![The configuration options for the [!UICONTROL Send Data to Event Hubs] action type shown in the UI.](../../../images/extensions/server/azure/event-hub-details.png)

**[!UICONTROL Event Hub Details]**

| Input | Description |
| --- | --- |
| [!UICONTROL Namespace] | The name of the [!DNL Event Hubs] namespace that you created when [setting up the event hub](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-create#create-an-event-hubs-namespace). |
| [!UICONTROL Name] | The name of the event hub. |
| [!UICONTROL SAS Authorization Rule Name] | The name of the shared access authorization rule for your entire [!DNL Event Hubs] namespace or the specific event hub instance that you want to send data to. See the appendix section on [obtaining SAS authorization values](#sas) for more information. |
| [!UICONTROL SAS Access Key] | The primary key of the shared access authorization rule for your entire [!DNL Event Hubs] namespace or the specific event hub instance that you want to send data to. See the appendix section on [obtaining SAS authorization values](#sas) for more information. |
| [!UICONTROL Partition ID] | [!DNL Event Hubs] allows you to [send events directly to specific partitions](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/event-hubs/partitioning-in-event-hubs-and-kafka). To leverage this feature, provide the ID of the partition that you want to receive the events. |

{style="table-layout:auto"}

**Data**

| Input | Description |
| --- | --- |
| [!UICONTROL Payload] | This field contains the data that will be forwarded to the [!DNL Event Hubs]. The data can be a JSON object, a string, or a data element. |

{style="table-layout:auto"}

When finished, select **[!UICONTROL Keep Changes]** to add the action to the rule configuration. When you are satisfied with the rule, select **[!UICONTROL Save to Library]**. 

Finally, publish a new event forwarding [build](../../../ui/publishing/builds.md) to enable the changes to the library.

## Next steps

This guide covered how to send data to [!DNL Event Hubs] using the [!DNL Microsoft Azure] event forwarding extension. For more information on event forwarding capabilities in Experience Platform, refer to the [event forwarding overview](../../../ui/event-forwarding/overview.md).

## Appendix: Obtain SAS authorization values {#sas}

External applications are granted access to [!DNL Event Hubs] through [shared access signatures (SAS)](https://learn.microsoft.com/en-us/azure/event-hubs/authorize-access-shared-access-signature). Each [!DNL Event Hubs] namespace and event hub instance has a default SAS authorization rule automatically assigned on creation, but you can also create additional policies for each resource if you wish.

When [configuring an event forwarding rule](#rule) using the [!DNL Azure] extension, you must provide the name and the primary key for the authorization rule governing the namespace or specific event hub you want to send data to. For details on how to obtain these values from the [!DNL Azure] portal, refer to the following sections in the [!DNL Azure] documentation:

* [Obtain SAS values for an [!DNL Event Hubs] namespace](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-get-connection-string#connection-string-for-a-namespace)
* [Obtain SAS values for a specific event hub in a namespace](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-get-connection-string#connection-string-for-a-specific-event-hub-in-a-namespace)

Once you have the required values, the authorization rule name can be provided directly as a string in the config input or you can create a string-type data element to reference it instead. The primary key, however, must first be contained inside of an event forwarding secret before it can be supplied in the rule configuration in order to protect your data security.

Within the event forwarding UI, [create a new secret](../../../ui/event-forwarding/secrets.md) and select **[!UICONTROL Token]** as the secret type. For the token value itself, provide the primary key you copied earlier. After creating the secret, create a data element with the type **[!UICONTROL Secret]** and select the [!DNL Event Hubs] secret from the list. Once the secret data element has been set up, you can reference that data element in the **[!UICONTROL SAS Access Key]** field.
