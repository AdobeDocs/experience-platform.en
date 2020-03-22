---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Adobe Experience Platform Streaming Ingestion overview
topic: overview
---

# Streaming ingestion overview

Streaming ingestion for Adobe Experience Platform provides users a method to send data from client and server-side devices to Experience Platform in real-time.

## What can you do with streaming ingestion?

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences by generating a Real-time Customer Profile for each of your individual customers. Streaming ingestion plays a key role in building these profiles by enabling you to deliver Profile data into the Data Lake with as little latency as possible.

### Stream profile records and ExperienceEvents

With streaming ingestion, users can stream profile records and ExperienceEvents to Platform in seconds to help drive real-time personalization. All data sent to streaming ingestion APIs is automatically persisted in the Data Lake.

Please read the [create a streaming connection guide](../tutorials/create-streaming-connection.md) for more information.

### Stream to datasets

Once you are confident that your data is clean, you can enable your datasets for Real-time Customer Profile and Identity Service.

For more information on enabling a dataset for Profile and Identity Service, please read the [configure a dataset guide](../../profile/tutorials/dataset-configuration.md). 

## What is the expected latency for streaming ingestion on Platform?

| Destination | Expected latency | 
| --------- | ---------------- |
| Real-time Customer Profile | < 1 minute |
| Data Lake | < 60 minutes |

## Adobe Experience Platform extension

You can use the Adobe Experience Platform extension to create a new streaming connection. The Experience Platform extension provides actions to send beacons formatted in Experience Data Model (XDM) for real-time ingestion to Experience Platform. Visit the [Experience Platform Extension](https://docs.adobe.com/content/help/en/launch/using/extensions-ref/adobe-extension/adobe-experience-platform-extension.html) documentation for more information. 