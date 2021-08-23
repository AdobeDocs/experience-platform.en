---
title: Adobe Experience Platform Edge Network End-to-End Overview
description: A high-level overview of how to send event data to Adobe Experience Cloud solutions using the Adobe Experience Platform Edge Network.
---
# Adobe Experience Platform Edge Network end-to-end overview

Adobe Experience Platform Edge Network provides a single gateway to transfer your data to other Adobe products or third-party destinations. In order to use the Edge Network to send event data from your application, it is important to understand the core components that have to be configured in order for that data to be delivered to the destinations you require.

This guide provides a high-level tutorial of how to send an event through the Edge Network. Specifically, the tutorial walks through the steps of installing and configuring the Adobe Experience Platform Web SDK tag extension within the Data Collection UI.

>[!NOTE]
>
>You can also opt to install and configure the SDK manually if you don't want to use tags, but the surrounding steps must still be completed as outlined below.

## Prerequisites

This tutorial uses the Data Collection UI to create a schema, configure a datastream, and install the Web SDK. In order to perform these actions in the UI, you must be granted access to at least one web property along with the following [property rights](../tags/ui/administration/user-permissions.md#property-rights):

* Develop
* Manage Extensions

See the guide on [managing permissions](../tags/ui/administration/manage-permissions.md) in the tags documentation to learn how to grant access to properties and property rights.

## Create an XDM schema

[Experience Data Model (XDM)](../xdm/home.md) is an open-source specification that provides common structures and definitions for data in the form of schemas. In other words, XDM is a way of structuring and formatting your data in a way that is actionable by the Edge Network and other Adobe Experience Cloud applications.

The first step in setting up your Edge Network operations is to create an XDM schema to represent your data. At a later step in this tutorial, you will map the data you want to send to the structure of this schema.

>[!NOTE]
>
>XDM schemas are very customizable. Rather than being overly prescriptive, the steps outlined below focus specifically on the schema requirements for the Web SDK. Outside of these parameters, you are free to define the remaining structure your data however you wish.

In the Data Collection UI, select **[!UICONTROL Schemas]** in the left navigation. From here, you can see a list of previously created schemas belonging to your organization. To continue, select **[!UICONTROL Create schema]**, then select **[!UICONTROL XDM ExperienceEvent]** from the dropdown menu.

![Schemas workspace](./images/e2e/schemas.png)

A dialog appears that prompts you to start adding field groups to the schema. In order to send events using the Web SDK, you must add the field group **[!UICONTROL AEP Web SDK ExperienceEvent Mixin]**. This field group contains definitions for data that is automatically collected by the Web SDK library.

Use the search bar to narrow down the list to help find this field group easier. Once you have found it, select it from the list before selecting **[!UICONTROL Add field groups]**.

![Schemas workspace](./images/e2e/add-field-group.png)

The schema canvas appears, showing a tree structure of your XDM schema including the fields provided by the Web SDK field group.

![Schema structure](./images/e2e/schema-structure.png)

Select the root field in the tree to open **[!UICONTROL Schema properties]** in the right rail, where you can provide a name and optional description for the schema.

![Name the schema](./images/e2e/name-schema.png)

If you want to add more fields to the schema, you can do so by selecting **[!UICONTROL Add]** under the **[!UICONTROL Field groups]** section in the left rail.

![Add field groups](./images/e2e/add-field-groups.png)

>[!NOTE]
>
>See the guide on [adding field groups](../xdm/ui/resources/schemas.md#add-field-groups) in the XDM documentation for detailed steps on how to search for different field groups to suit your use cases.
>
>Best practice is to only add fields for data you plan on sending through the Edge Network. Once you have added fields to a schema and saved it, only additive changes can be made to the schema thereafter. See the section on the [rules of schema evolution](../xdm/schema/composition.md#evolution) for more information.

Once you have added the fields you need, select **[!UICONTROL Save]** to save the schema.

![Save the schema](./images/e2e/save-schema.png)

## Create a datastream

A datastream is a configuration that tells the Edge Network where you want your data to be sent. Specifically, a datastream specifies which Experience Cloud products you want to send the data to, and how you want the data to be handled and stored in each product.

>[!NOTE]
>
>If you have a license for [event forwarding](../tags/ui/event-forwarding/overview.md) and want to use the functionality, you must enable it for a datastream in the same way that you enable Adobe products. In other words, you must configure a datastream regardless of whether you are using tags or event forwarding.

* A datastream tells the Edge Network where you want your data to be sent
* Differentiate event forwarding and the Web SDK
  * When setting up the datastream, you select the Adobe products you want to send data to, but you *also* can choose to enable event forwarding from here
* You fill in certain fields for each products, here are the details on that...(links)

## Install and configure the Web SDK

* This section uses the Data Collection UI to configure the Web SDK extension, but you can also configure it using raw code, see (link) for more info
* Fill details about organization, plus the datastream you created earlier. That way the web SDK knows which configuration to use to send your data to the right places
* Note that depending on where they want to send their data, they'll need to use tags or event forwarding:
  * If sending to Adobe products, use tags (it's free)
  * If sending to third parties, use event forwarding (paid service)

### Create an XDM data element

* Go over to Data Elements in the UI and create a new data element
* Select the Web SDK extension
* Select the XDM Object data element type
* Selects your Platform sandbox, and from that you can see all the schemas you've created in that sandbox
* You can select the sandbox you created earlier, and then you can start mapping your data to the schema

### Create a rule

* A rule is a construct that triggers when a certain event is detected, and performs an action if the required conditions (if any) are met.
* This is what ultimately sends event data to ExC solutions
* Create a send event action
  * In the **XDM data** field, select the XDM data element you created earlier, and that's what will be sent to the Edge

## Configure event forwarding (optional)

* Set up everything we just talked about up until this point
* Enable event forwarding in the datastream
* Create an event forwarding property to configure the destination for the event using a rule (E.F. uses a lot of the same functionality philosophy as tags)
* Get your event sent to the edge