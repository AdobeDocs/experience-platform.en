---
title: Web SDK JavaScript library overview
description: Send data to the Adobe Experience Platform Edge Network using JavaScript.
exl-id: 1348144a-7d25-4c27-bc40-3daee2f043a6
TQID: https://experienceleague.adobe.com/9lk8ofZIQFzuYYl-BaT-c79H1yEmRps-ZuiLXm4mjPU
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: df80eeb1-8d72-467e-b0df-9d51c7d3a0a1
    internal-label: Audience Manager
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: f002a92a-b99f-47a4-90c8-65e0e415bc7a
    internal-label: Pass
feature_v2:
  - id: a075b2c1-7748-4328-b7f6-343aa314616a
    internal-label: Campaigns
  - id: a8b0238e-1d43-4679-a3b4-5ba1bad83baa
    internal-label: Implementation
  - id: baaa0dd2-d27e-4921-aae3-7888623a5fa5
    internal-label: APIs and SDKs
  - id: c814092e-2730-45e8-a12d-e084529f52cb
    internal-label: Destinations
  - id: c93393a4-e558-47e1-992e-c91ed4d480ce
    internal-label: Implementation
  - id: d5ef99fa-df0c-4153-bf94-105ad0724167
    internal-label: Integrations
  - id: d833d0ef-8ed5-4cff-a5e7-9f12abd02a31
    internal-label: SDKs
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: eb9732ab-8232-4b21-bc4c-89de86dbe4d7
    internal-label: Integrations
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
  - id: f7c7de77-382f-4f48-8b36-61a170f06d3d
    internal-label: Integrations
  - id: fc7979f3-56c3-43ca-9784-f1ea3dc69c4b
    internal-label: Integrations
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
  - id: d2a6cbf4-df32-480f-909e-b42f66dcb9f0
    internal-label: Places
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: e8a4c7eb-7254-4984-ac46-e651a57c7e39
    internal-label: SDKs
  - id: ee602049-8a18-43df-9299-a689a025a371
    internal-label: Use cases
  - id: fd0ff162-b6d3-4a11-8aeb-e165a01c0f0a
    internal-label: at.js
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: c2be0313-b3ae-45e0-b454-d20bf54b23f2
    internal-label: Measurement
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Web SDK JavaScript library overview

The **Adobe Experience Platform Web SDK** is a client-side JavaScript library that allows you to send data to the Adobe Experience Platform Edge Network. This guide documents the Web SDK JavaScript library (`alloy.js`) implementation path, including core concepts, installation, configuration, and commands. For the Web SDK tag extension in the Data Collection UI, see the [Web SDK tag extension](/help/tags/extensions/client/web-sdk/overview.md).

The Web SDK sends data in a solution-agnostic way (XDM) to the Experience Platform Edge Network, which then maps the data to solution-specific formats and destinations and sends it in real time.

## Experience Platform Edge Network {#edge-network}

The Adobe Experience Platform Edge Network provides low-latency data collection, pluggable computing, and rapid data activation across all addressable channels. It offers a single consolidated SDK for web, mobile, and server-side channels, sending data to a common Adobe domain (`adobedc.net`) and receiving a single payload for data and experience delivery.

On the server-side, a unified edge gateway and a common platform service framework simplify the deployment of new capabilities, while providing the following benefits:

* Decreasing customer time to value;
* Ending the need for "point" integrations;
* Improving performance compared to the old libraries;
* Decreasing operating costs;
* Increasing innovation speed;
* Creating sustained competitive advantages for Adobe customers.

A consolidated edge system lets you manage advertising, marketing, and personalization campaigns across all channels. It reduces the total cost of ownership and supports various data types, enabling you to map your data model for use with multiple Experience Cloud products.

>[!VIDEO](https://video.tv.adobe.com/v/34141?quality=12&learn=on)

## Libraries replaced by the Web SDK {#sdks}

The Web SDK is an open-source library built from scratch to integrate functionalities of existing libraries. It addresses issues with tag firing order, version inconsistencies, and dependency management, offering a way to implement many Experience Cloud products. The Web SDK replaces data collection for the following services:

* Adobe Experience Platform Visitor ID service (`Visitor.js`)
* Adobe Analytics (`AppMeasurement.js`)
* Adobe Target (`AT.js`)
* Adobe Audience Manager (`DIL.js`)
* Adobe Media Analytics
* Adobe Advertising

It also introduces a new endpoint that streamlines HTTP requests to Adobe solutions. Previously, multiple calls were needed for each data collection library. Now, a single call can retrieve an ID, fetch a [!DNL Target] experience, send data to [!DNL Audience Manager], and pass data to Adobe Experience Platform.

## Migrating from existing libraries to Web SDK {#migrating-to-web-sdk}

Adobe offers a streamlined upgrade path to simplify your migration from any of the existing libraries to the Web SDK. You can migrate each page of your website individually, without needing to migrate the entire site at once. You can use the Web SDK on some pages while existing libraries remain on others, allowing for a gradual transition.
