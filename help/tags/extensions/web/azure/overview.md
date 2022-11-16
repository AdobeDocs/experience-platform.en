---
title: Microsoft Azure Extension Overview
description: Learn about the Microsoft Azure extension for event forwarding in Adobe Experience Platform.
---
# [!DNL Microsoft Azure] extension overview

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

[!DNL Microsoft Azure]'s [[!DNL Event Hubs]](https://azure.microsoft.com/en-us/products/event-hubs/#overview) service is a highly scalable, real-time data ingress service that allows you to process and analyze the massive amounts of data produced by your connected devices and applications. Once data is collected into an event hub, it can be transformed and stored using any real-time analytics provider or batching/storage adapters.

The [!DNL Microsoft Azure] [event forwarding](../../../ui/event-forwarding/overview.md) extension leverages [!DNL Event Hubs] to send events from the Adobe Experience Platform Edge Network to [!DNL Azure] for further processing. This guide covers how to install the extension and employ its capabilities in an event forwarding rule.

## Prerequisites

In order to use this extension, you must have a valid [!DNL Azure] account with access to [!DNL Event Hubs]. You must also [create an event hub using the [!DNL Azure] portal](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-create) before following the steps below.

## Install the extension

To install the Microsoft [!DNL Azure] extension, navigate to the Data Collection UI or Experience Platform UI and select **[!UICONTROL Event Forwarding]** from the left navigation. From here, select a property to add the extension to, or create a new property instead.

Once you have selected or created the desired property, select **[!UICONTROL Extensions]** in the left navigation, then select the **[!UICONTROL Catalog]** tab. Search for [!UICONTROL Microsoft Azure] card, then select **[!UICONTROL Install]**.

![The [!UICONTROL Install] button being selected for the [!UICONTROL Microsoft Azure] extension in the Data Collection UI.](../../../images/extensions/azure/install.png)

Since the extension does not have any configuration properties, it is immediately added to the list of installed extensions. You can now start using [!DNL Event Hub] action types when configuring event forwarding rules.

## Configure an event forwarding rule

Start creating a new event forwarding rule rule and configure its conditions as desired. When selecting the actions for the rule, select **[!UICONTROL Microsoft Azure]** for the extension, then select **[!UICONTROL Send Data to Event Hubs]** for action type.

![The [!UICONTROL Send Data to Event Hubs] action type being selected for a rule in the Data Collection UI.](../../../images/extensions/azure/select-action-type.png)

The right panel updates to show configuration options for how the data should be sent. Specifically, you must assign [data elements](../../../ui/managing-resources/data-elements.md) to the various properties that represent your [!DNL Event Hub] configuration.

![The [!UICONTROL Send Data to Event Hubs] action type being selected for a rule in the Data Collection UI.](../../../images/extensions/azure/event-hub-details.png)

**[!UICONTROL Event Hub Details]**

| Input | Description |
| --- | --- |
| [!UICONTROL Namespace] | The name of the [!DNL Event Hubs] namespace that you created when [setting up the event hub](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-create#create-an-event-hubs-namespace). |
| [!UICONTROL Name] | The name of the event hub. |
| [!UICONTROL SAS Authorization Rule Name and SAS Access Key] | You can configure the EventHubs shared access authorization rule on an [!DNL Event Hubs] namespace or an event hub instance. |
| [!UICONTROL Partition ID] | [!DNL Event Hubs] allows you to [send events directly to specific partitions](https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/event-hubs/partitioning-in-event-hubs-and-kafka). To leverage this feature, provide the ID of the partition that you want to receive the events. |

{style="table-layout:auto"}

**Data**

| Input | Description |
| --- | --- |
| [!UICONTROL Payload] | This field contains the data that will be forwarded to the [!DNL Event Hubs]. The data can be a JSON object, a string, or a data element. |

{style="table-layout:auto"}

## Appendix: Obtain SAS authorization values {#sas}

Find out more at: Get an [!DNL Event Hubs] connection string

### Using SAS Authorization rules defined at namespace level

The shared access authorization rules created at namespace level will work for all the event hubs that exist in that namespace.

For obtaining the name and the access key you need to do:

* Sign in to [!DNL Azure] portal.
* Select All services on the left navigational menu.
* Select [!DNL Event Hubs] in the Analytics section.
* In the list of event hubs, select your event hub.
* On the [!DNL Event Hubs] Namespace page, select Shared Access Policies on the left menu.
* Select a shared access policy in the list of policies. The default one is named: RootManageSharedAccessPolicy. You can add a policy with appropriate permissions (send, listen), and use that policy.
    * The name of the policy from the [!DNL Azure] portal is what you need to use in the SAS Authorization Rule Name field.
* Select the policy from the list.
* Copy the Primary Key and create a secret with the type Token inside the Event Forwarding UI.
* Create a data element with the type Secret and select the secret you just create.
* Use the Secret data element in the SAS Access Key  field.

### Using SAS Authorization rules defined for a specific event hub in a namespace

For obtaining the name and the access key you need to do:

* On the [!DNL Event Hubs] Namespace page, select the event hub in the bottom pane.
* On the [!DNL Event Hubs] instance page, select Shared access policies on the left menu.
* There's no default policy created for an event hub. Create a policy with Manage, Send, or Listen** access.
* Use the policy name that you just created in the SAS Authorization Rule Name field.
* Select the policy from the list.
* Copy the Primary Key and create a secret with the type Token inside the Event Forwarding UI.
* Create a data element with the type Secret and select the secret you just create.
* Use the Secret data element in the SAS Access Key  field.
