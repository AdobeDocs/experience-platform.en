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

This integration is powered by the [Adobe Experience Platform Web SDK](../../../edge/home.md). You must be using this SDK to use this destination.

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
>abstract="This option determines in which data collection datastream the segments will be included in the response to the page. The drop-down menu shows only datastreams that have the destination configuration enabled. You must configure a datastream before you can configure your destination."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/datastreams.html?lang=en" text="Learn how to configure a datastream"

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

Adobe Experience Platform automatically connects to your company's Adobe Target instance. There is no authentication required.

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

*  **Name**: Fill in the preferred name for this destination.
*  **Description**: Enter a description for your destination. For example, you can mention which campaign you are using this destination for. This field is optional.
*  **Datastream ID**: This determines in which Data Collection datastream the segments will be included in the response to the page. The drop-down menu shows only datastreams that have the destination configuration enabled. See [Configuring a datastream](../../../edge/fundamentals/datastreams.md) for more details.

## Activate segments to this destination {#activate}

Read [Activate profiles and segments to profile request destinations](../../ui/activate-profile-request-destinations.md) for instructions on activating audience segments to this destination.

## Exported data {#exported-data}

Adobe Target reads profile data from the Adobe Experience Platform Edge Network, so no data gets exported.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](https://experienceleague.adobe.com/docs/experience-platform/data-governance/home.html).
