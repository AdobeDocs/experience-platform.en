---
title: Marketo Munchkin Extension Overview
description: Learn about the Marketo Munchkin tag extension in Adobe Experience Platform.
exl-id: 8efc5203-91fc-4e89-be8f-74bf1aeeee5f
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
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
