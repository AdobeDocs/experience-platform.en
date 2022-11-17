---
title: Microsoft Azure Extension Overview
description: Learn about the Microsoft Azure extension for event forwarding in Adobe Experience Platform.
---
# [!DNL Microsoft Azure] extension overview

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

In [!DNL Microsoft Azure], [[!DNL Event Hubs]](https://azure.microsoft.com/en-us/products/event-hubs/#overview) is a highly scalable, real-time data ingress service that allows you to process and analyze the massive amounts of data produced by your connected devices and applications. Once data is collected into an event hub, it can be transformed and stored using any real-time analytics provider or batching/storage adapters.

The [!DNL Microsoft Azure] [event forwarding](../../../ui/event-forwarding/overview.md) extension leverages [!DNL Event Hubs] to send events from the Adobe Experience Platform Edge Network to [!DNL Azure] for further processing. This guide covers how to install the extension and employ its capabilities in an event forwarding rule.

## Prerequisites

In order to use this extension, you must have a valid [!DNL Azure] account with access to [!DNL Event Hubs]. You must also [create an event hub using the [!DNL Azure] portal](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-create) before following the steps below.

## Install the extension

To install the Microsoft [!DNL Azure] extension, navigate to the Data Collection UI or Experience Platform UI and select **[!UICONTROL Event Forwarding]** from the left navigation. From here, select a property to add the extension to, or create a new property instead.

Once you have selected or created the desired property, select **[!UICONTROL Extensions]** in the left navigation, then select the **[!UICONTROL Catalog]** tab. Search for [!UICONTROL Microsoft Azure] card, then select **[!UICONTROL Install]**.

![The [!UICONTROL Install] button being selected for the [!UICONTROL Microsoft Azure] extension in the Data Collection UI.](../../../images/extensions/azure/install.png)

Since the extension does not have any configuration properties, it is immediately added to the list of installed extensions. You can now start using [!DNL Event Hub] action types when configuring event forwarding rules.

## Configure an event forwarding rule {#rule}

Start creating a new event forwarding rule and configure its conditions as desired. When selecting the actions for the rule, select **[!UICONTROL Microsoft Azure]** for the extension, then select **[!UICONTROL Send Data to Event Hubs]** for action type.

![The [!UICONTROL Send Data to Event Hubs] action type being selected for a rule in the Data Collection UI.](../../../images/extensions/azure/select-action-type.png)

The right panel updates to show configuration options for how the data should be sent. Specifically, you must assign [data elements](../../../ui/managing-resources/data-elements.md) to the various properties that represent your [!DNL Event Hub] configuration.

![The configuration options for the [!UICONTROL Send Data to Event Hubs] action type shown in the UI.](../../../images/extensions/azure/event-hub-details.png)

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
