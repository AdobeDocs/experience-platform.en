---
title: Microsoft Azure Event Hubs Extension Overview
description: Learn about the Microsoft Azure Event Hubs extension for event forwarding in Adobe Experience Platform.
---
# Microsoft Azure Event Hubs extension overview

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

Microsoft Azure is a cloud computing service for application management via Microsoft-managed data centers. It provides software as a service (SaaS), platform as a service (PaaS) and infrastructure as a service (IaaS) and supports many different programming languages, tools, and frameworks, including both Microsoft-specific and third-party software and systems.

The Microsoft Azure event forwarding extension leverages the Event Hubs service to send events from the Adobe Experience Platform Edge Network to Microsoft Azure for further processing.

Azure Event Hubs is a highly scalable data ingress service that ingests millions of events per second so that you can process and analyze the massive amounts of data produced by your connected devices and applications. Once data is collected into an event hub, it can be transformed and stored using any real-time analytics provider or batching/storage adapters.

## Prerequisites

You must have an Microsoft Azure account in order to use this extension.

You also need to create an event hub using the Azure portal by:

*  creating a resource group
*  creating an Event Hubs namespace
*  creating an event hub.

## Install the extension

To install the Microsoft Azure extension in the UI, navigate to Event Forwarding and select a property to add the extension to, or create a new property instead.

Once you have selected or created the desired property, navigate to Extensions > Catalog. Search for "Microsoft Azure", and then select Install on the Azure Extension.

The extension doesn't have any configuration properties.

## Configure an event forwarding rule

Start creating a new event forwarding rule rule and configure its conditions as desired. When selecting the actions for the rule, select the Microsoft Azure extension, then select the Send Data to Event Hubs action type.

When setting up the action configuration, you are prompted to assign data elements to the various properties that will be sent to the Azure event hub:

**Event Hub Details**

| Input | Description |
| --- | --- |
| Namespace | An Event Hubs namespace provides a unique scoping container, in which you create one or more event hubs. Use here the namespace that contains the event hub where you wish to forward the date. |
| Name | Provide the name of the event hub. |
| SAS Authorization Rule Name and SAS Access Key ​| You can configure the EventHubs shared access authorization rule on an Event Hubs namespace or an event hub instance. |
| Partition ID | You can send events directly to a specific partition in an event hub. Provide the partition ID that you want to receive the events. |

{style="table-layout:auto"}

**Data**

| Input | Description |
| --- | --- |
| Payload | This field contains the data that will be forwarded to the Event Hubs. The data can be a JSON, a string or a data element. |

{style="table-layout:auto"}

### Obtain SAS authorization values {#sas}

Find out more at: Get an Event Hubs connection string

#### Using SAS Authorization rules defined at namespace level

The shared access authorization rules created at namespace level will work for all the event hubs that exist in that namespace.

For obtaining the name and the access key you need to do:

* Sign in to Azure portal.
* Select All services on the left navigational menu.
* Select Event Hubs in the Analytics section.
* In the list of event hubs, select your event hub.
* On the Event Hubs Namespace page, select Shared Access Policies on the left menu.
* Select a shared access policy in the list of policies. The default one is named: RootManageSharedAccessPolicy. You can add a policy with appropriate permissions (send, listen), and use that policy.
    * The name of the policy from the Azure portal is what you need to use in the SAS Authorization Rule Name field.
* Select the policy from the list.
* Copy the Primary Key and create a secret with the type Token inside the Event Forwarding UI.
* Create a data element with the type Secret and select the secret you just create.
* Use the Secret data element in the SAS Access Key  field.

#### Using SAS Authorization rules defined for a specific event hub in a namespace

For obtaining the name and the access key you need to do:

* On the Event Hubs Namespace page, select the event hub in the bottom pane.
* On the Event Hubs instance page, select Shared access policies on the left menu.
* There's no default policy created for an event hub. Create a policy with Manage, Send, or Listen** access.
* Use the policy name that you just created in the SAS Authorization Rule Name field.
* Select the policy from the list.
* Copy the Primary Key and create a secret with the type Token inside the Event Forwarding UI.
* Create a data element with the type Secret and select the secret you just create.
* Use the Secret data element in the SAS Access Key  field.
