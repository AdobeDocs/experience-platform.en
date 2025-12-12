---
keywords: target personalization; destination; experience platform target destination;adobe target destination;
title: Adobe Target connection
description: Adobe Target is an application that provides real-time, AI-powered personalization and experimentation capabilities in all inbound customer interactions across websites, mobile apps, and more.
exl-id: 3e3c405b-8add-4efb-9389-5ad695bc9799
---
# Adobe Target connection {#adobe-target-connection}

## Destination changelog {#changelog}

|Release month|Update type|Description|
|---|---|---|
|April 2024| Functionality and documentation update | When connecting to the Target destination and using a datastream, you now *do not need* to necessarily enable the datastream for edge segmentation. This means that the Target destination will work with batch and streaming audiences, though the use cases that you can accomplish differ. View the table in the [connection parameters](#parameters) section for more information. |
|January 2024|Functionality and documentation update| You can now share audiences and profile attributes to the Adobe Target connection for the default production sandbox and other non-default sandboxes.  |
|June 2023|Functionality and documentation update| As of June 2023, you can select the Adobe Target workspace that you want to share audiences to, when configuring a new Adobe Target destination connection. See the [connection parameters](#parameters) section for more information. Additionally, see the tutorial on [configuring workspaces](https://experienceleague.adobe.com/docs/target-learn/tutorials/administration/set-up-workspaces.html) in Adobe Target for more information about workspaces.|
|May 2023|Functionality and documentation update| As of May 2023, the **[!UICONTROL Adobe Target]** connection supports [attribute-based personalization](../../ui/activate-edge-personalization-destinations.md#map-attributes) and is generally available to all customers.|

{style="table-layout:auto"}

## Overview {#overview}

Adobe Target is an application that provides real-time, AI-powered personalization and experimentation capabilities in all inbound customer interactions across websites, mobile apps, and more.

Adobe Target is a personalization connection in the Adobe Experience Platform destinations catalog.

## Video overview {#video-overview}

For a brief overview on how to configure the Adobe Target connection in Experience Platform, watch the video below.

>[!VIDEO](https://video.tv.adobe.com/v/3418799/?quality=12&learn=on)

## Supported use cases based on implementation type {#supported-use-cases}

The table below displays the supported use cases for the Adobe Target destination, based on your implementation type, with or without the Web SDK and with or without [edge segmentation](/help/segmentation/home.md#edge) enabled. 

|Adobe Target implementation *without* Web SDK| Adobe Target implementation *with* Web SDK | Adobe Target implementation *with* Web SDK *and* edge segmentation off |
|---|---|---|
|<ul><li>A datastream is not required. Adobe Target can be deployed through [at.js](https://experienceleague.adobe.com/docs/target-dev/developer/client-side/at-js-implementation/overview.html), [server-side](https://experienceleague.adobe.com/docs/target-dev/developer/overview.html#server-side-implementation), or [hybrid](https://experienceleague.adobe.com/docs/target-dev/developer/overview.html#hybrid-implementation) implementation methods.</li><li>[Edge segmentation](../../../segmentation/methods/edge-segmentation.md) is not supported.</li><li>[Same-page and next-page personalization](../../ui/activate-edge-personalization-destinations.md) are not supported.</li><li>You can share audiences and profile attributes to the Adobe Target connection for the *default production sandbox* and non-default sandboxes.</li><li>To configure next-session personalization without using a datastream, use [at.js](https://experienceleague.adobe.com/docs/target/using/implement-target/client-side/at-js-implementation/at-js/how-atjs-works.html).</li></ul>|<ul><li>A datastream with Adobe Target and Experience Platform configured as services is required.</li><li>Edge segmentation works as expected.</li><li>[Same-page and next-page personalization](../../ui/activate-edge-personalization-destinations.md#use-cases) are supported.</li><li>Sharing audiences and profile attributes from other sandboxes is supported.</li></ul>| <ul><li>A datastream with Adobe Target and Experience Platform configured as services is required.</li><li>When [configuring the datastream](/help/destinations/ui/activate-edge-personalization-destinations.md#configure-datastream), do not select the **Edge segmentation** checkbox.</li><li>[Next-session personalization](../../ui/activate-edge-personalization-destinations.md#next-session) is supported.</li><li>Sharing audiences and profile attributes from other sandboxes is supported.</li></ul> |


## Prerequisites {#prerequisites}

### Datastream {#datastream}

When configuring the Adobe Target connection to [use a datastream](#parameters), you must have [Adobe Experience Platform Data Collection](/help/collection/home.md) implemented.

Configuring the Adobe Target connection without using a datastream does not require you to implement the Web SDK.

>[!IMPORTANT]
>
>Before creating an [!DNL Adobe Target] connection, read the guide on how to [configure personalization destinations for same-page and next-page personalization](../../ui/activate-edge-personalization-destinations.md). This guide takes you through the required configuration steps for same-page and next-page personalization use cases, across multiple Experience Platform components. To achieve same-page and next-page personalization use cases, you must use a datastream when configuring the Adobe Target connection.

### Prerequisites in Adobe Target {#prerequisites-in-adobe-target}

In Adobe Target, make sure that your user has:

* Access to the [default workspace](https://experienceleague.adobe.com/docs/target/using/administer/manage-users/enterprise/property-channel.html#default-workspace);
* The **Approver** [role](https://experienceleague.adobe.com/docs/target/using/administer/manage-users/enterprise/property-channel.html#roles-and-permissions).

Read more about granting permissions for [Target Premium](https://experienceleague.adobe.com/docs/target/using/administer/manage-users/enterprise/properties-overview.html#section_8C425E43E5DD4111BBFC734A2B7ABC80) and for [Target Standard](https://experienceleague.adobe.com/docs/target/using/administer/manage-users/users/user-management.html#roles-permissions).

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

>[!IMPORTANT]
>
>When activating *edge audiences for same-page and next-page personalization use cases*, the audiences *must* use an [active-on-edge merge policy](../../../segmentation/ui/segment-builder.md#merge-policies). The [!DNL active-on-edge] merge policy ensures that audiences are constantly evaluated [on the edge](../../../segmentation/methods/edge-segmentation.md) and are available for real-time and next-page personalization use cases.  Read about [all available use cases](#parameter),based on implementation type.
>If you map edge audiences which use a different merge policy to Adobe Target destinations, those audiences will not be evaluated for real-time and next-page use cases.
>Follow the instructions on [creating a merge policy](../../../profile/merge-policies/ui-guide.md#create-a-merge-policy), and make sure to enable the **[!UICONTROL Active-On-Edge Merge Policy]** toggle.


| Audience origin | Supported | Description | 
|---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| Custom uploads | X | Audiences [imported](../../../segmentation/ui/audience-portal.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
|---------|----------|---------|
| Export type | **[!DNL Profile request]** | You are requesting all the audiences that are mapped in the Adobe Target destination for a single profile.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!CONTEXTUALHELP]
>id="platform_destinations_target_datastream"
>title="About datastreams"
>abstract="This option determines in which data collection datastream the audiences will be included. The drop-down menu shows only datastreams which have the Target configuration enabled. To use edge segmentation, you must select a datastream. Selecting None disables all use cases that use edge segmentation."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/destinations/catalog/personalization/adobe-target-connection.html#parameters" text="Learn more about selecting datastreams"

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

Adobe Experience Platform automatically connects to your company's Adobe Target instance. There is no authentication required.

### Connection parameters {#parameters}

>[!CONTEXTUALHELP]
>id="platform_destinations_target_workspace"
>title="About Adobe Target Workspaces"
>abstract="Select the Adobe Target workspace to which audiences will be shared. You can select a single workspace for each Adobe Target connection. Upon activation, audiences are routed to the selected workspace while following the applicable Experience Platform data usage labels."
>additional-url="https://experienceleague.adobe.com/docs/target-learn/tutorials/administration/set-up-workspaces.html" text="Learn more about Adobe Target workspaces"

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

* **Name**: Fill in the preferred name for this destination.
* **Description**: Enter a description for your destination. For example, you can mention which campaign you are using this destination for. This field is optional.
* **Datastream**: This determines in which Data Collection datastream the audiences will be included. The drop-down menu shows only datastreams that have the Target and Adobe Experience Platform services enabled. See [configuring a datastream](../../../datastreams/configure.md#aep) for detailed information on how to configure a datastream for Adobe Experience Platform and Adobe Target.

    >[!IMPORTANT]
    >
    >**Datastream uniqueness across organization**: The combination of datastream ID and sandbox name must be unique for Adobe Target destination connections within an IMS Org. This means:
    >
    >* The same combination of datastream ID + sandbox name cannot be used for multiple Adobe Target destination connections across the entire organization
    >* You can use the same datastream ID for different destination connections as long as the connections are on different sandboxes
    >* This rule applies to all datastream selections, including when you select **[!UICONTROL None]**

    * **[!UICONTROL None]**: Select this option if you need to configure Adobe Target personalization but you cannot implement the Adobe Experience Platform Web SDK. When using this option, audiences exported from Experience Platform to Target only support next-session personalization, and edge segmentation is disabled. Reference the table in the [supported use cases](#supported-use-cases) section for a comparison of available use cases per implementation type.

    |Adobe Target implementation *without* Web SDK| Adobe Target implementation *with* Web SDK | Adobe Target implementation *with* Web SDK *and* edge segmentation off |
    |---|---|---|
    |<ul><li>A datastream is not required. Adobe Target can be deployed through [at.js](https://experienceleague.adobe.com/docs/target-dev/developer/client-side/at-js-implementation/overview.html), [server-side](https://experienceleague.adobe.com/docs/target-dev/developer/overview.html#server-side-implementation), or [hybrid](https://experienceleague.adobe.com/docs/target-dev/developer/overview.html#hybrid-implementation) implementation methods.</li><li>[Edge segmentation](../../../segmentation/methods/edge-segmentation.md) is not supported.</li><li>[Same-page and next-page personalization](../../ui/activate-edge-personalization-destinations.md) are not supported.</li><li>You can share audiences and profile attributes to the Adobe Target connection for the *default production sandbox* and non-default sandboxes.</li><li>To configure next-session personalization without using a datastream, use [at.js](https://experienceleague.adobe.com/docs/target/using/implement-target/client-side/at-js-implementation/at-js/how-atjs-works.html).</li></ul>|<ul><li>A datastream with Adobe Target and Experience Platform configured as services is required.</li><li>Edge segmentation works as expected.</li><li>[Same-page and next-page personalization](../../ui/activate-edge-personalization-destinations.md#use-cases) are supported.</li><li>Sharing audiences and profile attributes from other sandboxes is supported.</li></ul>| <ul><li>A datastream with Adobe Target and Experience Platform configured as services is required.</li><li>When [configuring the datastream](/help/destinations/ui/activate-edge-personalization-destinations.md#configure-datastream), do not select the **Edge segmentation** checkbox.</li><li>[Next-session personalization](../../ui/activate-edge-personalization-destinations.md#next-session) is supported.</li><li>Sharing audiences and profile attributes from other sandboxes is supported.</li></ul> |

* **Workspace**: Select the Adobe Target [workspace](https://experienceleague.adobe.com/docs/target-learn/tutorials/administration/set-up-workspaces.html) to which audiences will be shared. You can select a single workspace for each Adobe Target connection. Upon activation, audiences are routed to the selected workspace while following the applicable [Experience Platform data usage labels](../../../data-governance/labels/overview.md).
    
>[!NOTE]
>
>When using a custom Target workspace for [same-page and next-page personalization with attributes](../../ui/activate-edge-personalization-destinations.md), only the [selected audiences](../../ui/activate-edge-personalization-destinations.md#select-audiences) are sent to the selected Target workspace. The [mapped attributes](../../ui/activate-edge-personalization-destinations.md#mapping) are sent to the default Target workspace.
><br>
>This behavior will change in a future update. 

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate audiences to edge personalization destinations](../../ui/activate-edge-personalization-destinations.md) for instructions on activating audiences to this destination.

## Remove audiences from a Target destination {#remove}

There are extra steps required to remove an audience from an existing Adobe Target connection when that audience is already being used in an Adobe Target [activity](https://experienceleague.adobe.com/en/docs/target/using/activities/activities). Trying to remove an audience from an Adobe Target connection results in an error if the audience is used by an Adobe Target activity.

![Experience Platform UI image showing an error caused by attempting to remove an audience that is used by a Target activity.](../../assets/catalog/personalization/adobe-target-connection/remove-audience-error.png)

To remove an audience from a Target destination when the audience is being used in an activity, you must first either remove the audience from the Target activity which is using it, or delete the activity altogether. Then, you can remove the audience from your Target connection.

If the audience is not being used in an activity, go to **[!UICONTROL Destinations]** > **[!UICONTROL Browse]** > **[!UICONTROL Select destination dataflow]** > **[!UICONTROL Activation data]**, select the audiences that you want to remove, then select **[!UICONTROL Remove audiences]**.

## Exported data {#exported-data}

Adobe Target *reads* profile data from the Adobe Experience Platform Edge Network, so no data gets exported.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](https://experienceleague.adobe.com/docs/experience-platform/data-governance/home.html).
