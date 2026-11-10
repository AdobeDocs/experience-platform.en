---
title: Marketo Munchkin Extension Overview
description: Learn about the Marketo Munchkin tag extension in Adobe Experience Platform.
exl-id: 8efc5203-91fc-4e89-be8f-74bf1aeeee5f
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: b27e5950-9033-45ac-9f86-eb22e567f615
    internal-label: Marketo Engage
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: 1c1a93b2-f024-5627-9905-6faf6fcc22be
    internal-label: Munchkin Tracking Code
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: c4147b6e-073b-4d3c-9ab1-d60f2f4434ef
    internal-label: Behavioral data
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Marketo Munchkin extension overview

Use this extension to integrate the [!DNL Marketo Munchkin] JavaScript tracking code with your property. [!DNL Marketo Munchkin] JavaScript allows for tracking of end-user page visits and navigates to your Marketo landing pages and external web pages.

## Install Marketo Munchkin extension

If [!DNL Marketo Munchkin] extension is not yet installed, open your property, then select **[!UICONTROL Extensions > Catalog]**, hover over the [!DNL Marketo Munchkin] extension, and select **[!UICONTROL Install]**.

This extension has no necessary configuration.

## Marketo Munchkin extension action types

This section describes the action types available int he [!DNL Marketo Munchkin] extension.

### Initialize

![](../../../images/munchkin-Init.png)

**Munchkin ID: (required)** Munchkin Account ID found under Admin > Integration > Munchkin menu.

**Configurations:** All configurable parameters are documented [here](https://developers.marketo.com/javascript-api/lead-tracking/configuration/)

### Visit web page

![](../../../images/munchkin-visit-page.png)

**url: (required)** The URL file path used to record a page visit.

**params:** A query string of the desired parameters to be recorded.

**name:** The custom name of the web page asset.

### Click link

![](../../../images/munchkin-click-link.png)

**href: (required)** The URL file path used to record a link select.
