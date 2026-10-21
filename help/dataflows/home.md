---
keywords: Experience Platform;home;popular topics;data flows;dataflows;data;monitoring;monitor dataflows;monitor data flows;monitor;monitoring dataflows;monitoring data flows;flow;flow service;
solution: Experience Platform
title: Dataflows Overview
description: This document introduces dataflows, expressing how they are used in Adobe Experience Platform.
exl-id: 8fe08ffa-f095-4e9f-8bab-d060985f0236
TQID: 'https://experienceleague.adobe.com/DyJwen9bud8l9MrZKTTvv4XAamSkZEskNRo2Eldcdls'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: ''
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
# Dataflows overview

In Adobe Experience Platform, data is ingested from a wide variety of sources, analyzed within Experience Platform, and activated to a wide variety of destinations. Experience Platform makes the process of tracking this potentially non-linear flow of data easier by providing transparency with dataflows. 

## Using dataflows

Dataflows are a representation of data jobs that move data across Experience Platform. These dataflows are configured across different services, helping move data from source connectors to target datasets, where it is then utilized by Identity Service and Real-Time Customer Profile before ultimately being activated to destinations.

To learn more about using dataflows in source connectors, please read the [sources overview](../sources/home.md).

## Preparing data

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM). 

To learn more about preparing data after it's been ingested, please read the [Data Prep overview](../data-prep/home.md).

## Monitoring dataflows

Monitoring dataflows can be done by using either Experience Platform APIs or the Experience Platform UI. To learn how to monitor dataflows using the API, please read the [monitoring dataflows API tutorial](./api/monitor.md). To learn how to monitor dataflows within the Experience Platform UI, please read the tutorials on [monitoring dataflows for sources](./ui/monitor-sources.md) and [monitoring dataflows for destinations](./ui/monitor-destinations.md).
