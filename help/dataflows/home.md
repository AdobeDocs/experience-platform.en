---
keywords: Experience Platform;home;popular topics;data flows;dataflows;data;monitoring;monitor dataflows;monitor data flows;monitor;monitoring dataflows;monitoring data flows;flow;flow service;
solution: Experience Platform
title: Dataflows Overview
description: This document introduces dataflows, expressing how they are used in Adobe Experience Platform.
exl-id: 8fe08ffa-f095-4e9f-8bab-d060985f0236
---
# Dataflows overview

In Adobe Experience Platform, data is ingested from a wide variety of sources, analyzed within Experience Platform, and activated to a wide variety of destinations. Platform makes the process of tracking this potentially non-linear flow of data easier by providing transparency with dataflows. 

## Using dataflows

Dataflows are a representation of data jobs that move data across Platform. These dataflows are configured across different services, helping move data from source connectors to target datasets, where it is then utilized by Identity Service and Real-Time Customer Profile before ultimately being activated to destinations.

To learn more about using dataflows in source connectors, please read the [sources overview](../sources/home.md).

## Preparing data

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM). 

To learn more about preparing data after it's been ingested, please read the [Data Prep overview](../data-prep/home.md).

## Monitoring dataflows

Monitoring dataflows can be done by using either Platform APIs or the Platform UI. To learn how to monitor dataflows using the API, please read the [monitoring dataflows API tutorial](./api/monitor.md). To learn how to monitor dataflows within the Platform UI, please read the tutorials on [monitoring dataflows for sources](./ui/monitor-sources.md) and [monitoring dataflows for destinations](./ui/monitor-destinations.md).
