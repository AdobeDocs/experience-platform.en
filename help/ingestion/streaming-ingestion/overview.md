---
keywords: Experience Platform;home;popular topics;data ingestion;ingested data;streaming;overview;streaming ingestion;latency;streaming latency;
solution: Experience Platform
title: Streaming Ingestion Overview
topic-legacy: overview
description: Streaming ingestion for Adobe Experience Platform provides users a method to send data from client and server-side devices to Experience Platform in real time.
exl-id: 851f15fd-7ac5-4a9f-934d-6b907057da87
---
# Streaming ingestion overview

Streaming ingestion for Adobe Experience Platform provides users a method to send data from client and server-side devices to [!DNL Experience Platform] in real time.

## What can you do with streaming ingestion?

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences by generating a [!DNL Real-time Customer Profile] for each of your individual customers. Streaming ingestion plays a key role in building these profiles by enabling you to deliver [!DNL Profile] data into the [!DNL Data Lake] with as little latency as possible. 

The following video is designed to help support your understanding of streaming ingestion, and outlines the concepts above.

>[!VIDEO](https://video.tv.adobe.com/v/28425?quality=12&learn=on)

### Stream profile records and [!DNL ExperienceEvents]

With streaming ingestion, users can stream profile records and [!DNL ExperienceEvents] to [!DNL Platform] in seconds to help drive real-time personalization. All data sent to streaming ingestion APIs is automatically persisted in the [!DNL Data Lake].

Please read the [create a streaming connection guide](../tutorials/create-streaming-connection.md) for more information.

### Stream to datasets

Once you are confident that your data is clean, you can enable your datasets for [!DNL Real-time Customer Profile] and [!DNL Identity Service].

For more information on enabling a dataset for [!DNL Profile] and [!DNL Identity Service], please read the [configure a dataset guide](../../profile/tutorials/dataset-configuration.md). 

## What is the expected latency for streaming ingestion on [!DNL Platform]?

| Destination | Expected latency | 
| --------- | ---------------- |
| Real-time Customer Profile | < 1 minute |
| Data Lake | < 60 minutes |

## Request per seconds (RPS) guidance on streaming ingestion

The table below displays guidance on the request per seconds limits for streaming ingestion.

| RPS limit | Notes |
| --- | --- |
| 1000 requests per second | These can contain multiple messages when using `/collection/batch` endpoint. |
| 10000 individual messages per second | The messages can be grouped into fewer actual requests when using the `/collection/batch` endpoint. |

>[!IMPORTANT]
>
>The enforced limit becomes **60 requests per minute** when using synchronous validation as it is intended for debugging purposes.

## Adobe Experience Platform extension

You can use the Adobe Experience Platform extension to create a new streaming connection. The [!DNL Experience Platform] extension provides actions to send beacons formatted in [!DNL Experience Data Model] (XDM) for real-time ingestion to [!DNL Experience Platform]. Visit the [Experience Platform Extension](../../tags/extensions/client/sdk/overview.md) documentation for more information.
