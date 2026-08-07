---
title: Getting Started With Event Forwarding
description: Follow this step-by-step tutorial to get started using event forwarding in Adobe Experience Platform.
feature: Event Forwarding
exl-id: f82bfac9-dc2d-44de-a308-651300f107df
TQID: https://experienceleague.adobe.com/le5vikYVp7NdNw3hWPwAcZyQQXD3n-NBkEWbX4g0RSU
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: fdddec33-c9cb-4459-b8b6-2664395a6f10
    internal-label: Real-Time Customer Data Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Getting started with event forwarding

>[!NOTE]
>
>Event forwarding is a paid feature that is included as part of the Adobe Real-Time Customer Data Platform Connections, Prime, or Ultimate offerings.

To use event forwarding in Adobe Experience Platform, data must be sent to Adobe Experience Platform Edge Network using one or more of the following three options:

* [Adobe Experience Platform Web SDK](../../extensions/client/web-sdk/overview.md)
* [Adobe Experience Platform Mobile SDK](https://sdkdocs.com)
* [Edge Network API](https://developer.adobe.com/data-collection-apis/docs/)

>[!NOTE]
>The Experience Platform Web SDK and Experience Platform Mobile SDK do not require deployment through tags in Adobe Experience Platform. However, using tags to deploy these SDKs is the recommended approach.

After you send data to Edge network, you can toggle on Adobe solutions to send data there. To send data to a non-Adobe solution, set that up in event forwarding.

## Prerequisites

* Adobe Real-Time CDP Connections, Prime, or Ultimate (Contact your Adobe account team for pricing)
* Event forwarding in Adobe Experience Platform
* Adobe Experience Platform Web SDK, Mobile SDK, or Edge Network API configured to send data to Edge Network
* Map data to Experience Data Model (XDM) (This mapping can be done using tags)

## Create an XDM schema

In Adobe Experience Platform, create your schema.

1. Create a schema by selecting **[!UICONTROL Schemas]**>**[!UICONTROL Create Schema]** and choosing the **[!UICONTROL XDM ExperienceEvent]** option.

1. Give the schema a name and short description.

1. You can add the "ExperienceEvent web details" field group by selecting **[!UICONTROL Add]** next to **[!UICONTROL Field Groups]**. 

    >[!NOTE]
    >
    >Multiple field groups can be added, if desired.

1. Save the schema and note the name that you gave it.

For more information about schemas, see [Experience Data Model (XDM) System Help](https://experienceleague.adobe.com/docs/experience-platform/xdm/home.html).

## Create an event forwarding property

In the **[!UICONTROL Tags]** workspace, create a property of type **[!UICONTROL Edge]**.

1. Select **[!UICONTROL New Property]**. 

1. Name the property. 

1. Choose the "Edge" platform type.

1. Select **[!UICONTROL Save]**.

After you create the property, go to the **[!UICONTROL Environments]** tab for the new property and make
note of the environment IDs. If the Adobe Org used in the datastream differs from the Adobe Org used in event forwarding, you can copy the Environment ID from the **[!UICONTROL Environments]** tab and paste it when creating a datastream. Otherwise, you can select the environment from a drop-down menu.

## Create a datastream

To create your datastream in Adobe Experience Platform, use the Environment ID generated when you created the event forwarding property.

1. Select **[!UICONTROL Datastreams]** in the left navigation.

1. Name the configuration and provide an optional description. 
    The description helps to identify configurations in a list of several configurations. 

1. Select **[!UICONTROL Save]**.

## Enable event forwarding {#enable-event-forwarding}

Next, configure Edge Network to send data to event forwarding, and to other Adobe products.

1. In the **[!UICONTROL Datastreams]** workspace, select the property you created.

1. Select the Development, Production, or Staging environment.

    Or, to send data to an event forwarding environment outside the Adobe org, select **[!UICONTROL Switch to Advanced Mode]** and paste in an ID. The ID is provided when you create a event forwarding property.

1. Toggle on the necessary tools and configure as required.

    * Adobe Analytics requires a report suite ID.

    * Event forwarding in Adobe Experience Platform requires a property ID and environment ID. This is the publish path for the event forwarding property.

After configuring, make note of the Environment IDs for the new property.

## Configure the Experience Platform Web SDK extension to send data to the datastream created previously

Create your property in the **[!UICONTROL Tags]** workspace, then navigate to **[!UICONTROL Extensions]** and select the Experience Platform Web SDK extension from the catalog to configure and install it.

See the [Web SDK extension documentation](../../extensions/client/web-sdk/overview.md) for details on configuration options.

## Create a tag rule to send data to Experience Platform Web SDK

After the above is in place, build data definitions, rules, and so on, that use event forwarding and tags, but that need only a single request from the page.

Create a page load rule using the Experience Platform Web SDK extension and the "Send Event" action type:

1. Open the **[!UICONTROL Rules]** tab, then select **[!UICONTROL Create New Rule]**.

1. Name the rule.

1. Select **[!UICONTROL Events Add]**.

1. Add an event by choosing an extension and one of the event types available for that extension, then configure the settings for the event. For example, select **[!UICONTROL Core - Window Loaded]**.

1. Add an action using the Experience Platform Web SDK extension. Select **[!UICONTROL Send Event]** from the **[!UICONTROL Action Type]** list, select the desired Instance (Alloy instance configured earlier), and then select a data element to add to the XDM Data block within the Alloy hit.

1. Leave the rest of the settings as default for this example, and select **[!UICONTROL Save]**.

For another example, you might create a rule that sends the data layer to Edge if the user hovers over a specified button.

## Summary

With the following in place, you can now create event forwarding rules to forward data to non-Adobe destinations.

* Experience Data Model schema (Note the name that you gave it.)
* An event forwarding property (Keep track of the property ID and environment IDs.)
* A datastream (Note the environment ID, not to be confused with the environment ID from event forwarding.)
* A tag property
