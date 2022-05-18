---
keywords: target personalization; destination; experience platform target destination;adobe target destination;
title: Adobe Target connection
description: Adobe Target is an application that provides real-time, AI-powered personalization and experimentation capabilities in all inbound customer interactions across websites, mobile apps, and more.
exl-id: 3e3c405b-8add-4efb-9389-5ad695bc9799
---
# Adobe Target connection {#adobe-target-connection}

## Overview {#overview}

Adobe Target is an application that provides real-time, AI-powered personalization and experimentation capabilities in all inbound customer interactions across websites, mobile apps, and more.

Adobe Target is a personalization connection in Adobe Experience Platform.

## Prerequisites {#prerequisites}

When configuring the Adobe Target connection to [use a datastream ID](#parameters), you must have the [Adobe Experience Platform Web SDK](../../../edge/home.md) implemented.

Configuring the Adobe Target connection without using a datastream ID does not require you to implement the Web SDK.

>[!IMPORTANT]
>
>Before creating an [!DNL Adobe Target] connection, read the guide on how to [configure personalization destinations for same-page and next-page personalization](../../ui/configure-personalization-destinations.md). This guide takes you through the required configuration steps for same-page and next-page personalization use cases, across multiple Experience Platform components.

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!DNL Profile request]** | You are requesting all the segments that are mapped in the Adobe Target destination for a single profile.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on segment evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Use cases {#use-cases}

**Personalizing a home page banner**

A home rental and sales company wants to personalize their home page with a banner, based on customer segment qualifications in Adobe Experience Platform. The company can select what audiences should get a personalized experience and send those to Adobe Target as targeting criteria for their Target offer.

## Connect to the destination {#connect}

>[!CONTEXTUALHELP]
>id="platform_destinations_target_datastream"
>title="About datastream IDs"
>abstract="This option determines in which data collection datastream the segments will be included. The drop-down menu shows only datastreams which have the Target configuration enabled. To use edge segmentation, you must select a datastream ID. Selecting None disables all use cases that use edge segmentation."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/destinations/catalog/personalization/adobe-target-connection.html#parameters" text="Learn more about selecting datastreams."

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

Adobe Experience Platform automatically connects to your company's Adobe Target instance. There is no authentication required.

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

*  **Name**: Fill in the preferred name for this destination.
*  **Description**: Enter a description for your destination. For example, you can mention which campaign you are using this destination for. This field is optional.
*  **Datastream ID**: This determines in which Data Collection datastream the segments will be included in the response to the page. The drop-down menu shows only datastreams that have the Target destination enabled. See [Configuring a datastream](../../../edge/fundamentals/datastreams.md) for more details.

When selecting the **[!UICONTROL None]** option for datastream ID, some personalization use cases are not supported. See the table below for details.
    
|No datastream selected|Datastream selected|
|---|---|
|<ul><li>[Edge segmentation](../../../segmentation/ui/edge-segmentation.md) is not supported.</li><li>[Same-page and next-page personalization](../../ui/configure-personalization-destinations.md) are not supported.</li><li>You can share segments to the Adobe Target connection only for the production sandbox.</li><li>To configure next-session personalization without using a datastream ID, use [at.js](https://experienceleague.adobe.com/docs/target/using/implement-target/client-side/at-js-implementation/at-js/how-atjs-works.html?lang=en).</li></ul>|<ul><li>Edge segmentation works as expected.</li><li>[Same-page and next-page personalization](../../ui/configure-personalization-destinations.md) are supported.</li><li>Segment sharing is supported for other sandboxes.</li></ul>|

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate profiles and segments to profile request destinations](../../ui/activate-profile-request-destinations.md) for instructions on activating audience segments to this destination.

## Exported data {#exported-data}

Adobe Target reads profile data from the Adobe Experience Platform Edge Network, so no data gets exported.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](https://experienceleague.adobe.com/docs/experience-platform/data-governance/home.html).
