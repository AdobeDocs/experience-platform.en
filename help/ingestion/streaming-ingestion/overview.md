---
keywords: Experience Platform;home;popular topics;data ingestion;ingested data;streaming;overview;streaming ingestion;latency;streaming latency;
solution: Experience Platform
title: Streaming Ingestion Overview
description: Learn about streaming ingestion in Adobe Experience Platform.
exl-id: 851f15fd-7ac5-4a9f-934d-6b907057da87
TQID: https://experienceleague.adobe.com/htRFdI6kObtLCuiaLwexpBLQVRe5-TfcxLgeRLrHZTw
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: e5ae22e3-a3b0-46ed-804f-9abf1bbe3e74
    internal-label: Guardrails
  - id: f5efb499-54f9-432b-ac5c-599dbac103af
    internal-label: Data management
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
    internal-label: Data management
---
# Streaming ingestion overview

Streaming ingestion for Adobe Experience Platform provides users a method to send data from client and server-side devices to Experience Platform in real time.

## What can you do with streaming ingestion?

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences by generating a Real-Time Customer Profile for each of your individual customers. Streaming ingestion plays a key role in building these profiles by enabling you to deliver Profile data into data lake with as little latency as possible. 

The following video is designed to help support your understanding of streaming ingestion, and outlines the concepts above.

>[!VIDEO](https://video.tv.adobe.com/v/28425?quality=12&learn=on)

### Stream profile records and [!DNL ExperienceEvents]

With streaming ingestion, users can stream profile records and [!DNL ExperienceEvents] to Experience Platform in seconds to help drive real-time personalization. All data sent to streaming ingestion APIs is automatically persisted in data lake.

Please read the [create a streaming connection guide](../tutorials/create-streaming-connection.md) for more information.

### Stream to datasets

Once you are confident that your data is clean, you can enable your datasets for Real-Time Customer Profile and [!DNL Identity Service].

For more information on enabling a dataset for Profile and [!DNL Identity Service], please read the [configure a dataset guide](/help/profile/tutorials/dataset-configuration.md). 

## What is the expected latency for streaming ingestion on Experience Platform?

>[!IMPORTANT]
>
>Guardrails for streaming ingestion are bound to the total license usage entitlement that corresponds with your entire organization. Additionally, data usage in development sandboxes are limited to 10% of your total profiles. For more information about license usage entitlement, read the [data management best practices guide](/help/landing/license-usage-and-guardrails/data-management-best-practices.md). To learn how to set limits to your streaming throughput, read the [Capacity overview](../../landing/license-usage-and-guardrails/capacity.md).

| Destination | Expected latency |
| --------- | ---------------- |
| Real-Time Customer Profile | <ul><li>< 15 minutes at the 95th percentile for B2C Data Ingestion.</li><li>< 30 minutes at the 95th percentile for B2B Data Ingestion.</li></ul> |
| Data lake | < 60 minutes |

## Request per seconds (RPS) guidance on streaming ingestion

The table below displays guidance on the request per seconds limits for streaming ingestion.

| RPS limit | Notes |
| --- | --- |
| 1000 requests per second | These can contain multiple messages when using `/collection/batch` endpoint. |
| 10000 individual messages per second | The messages can be grouped into fewer actual requests when using the `/collection/` endpoint. |

>[!IMPORTANT]
>
>The enforced limit becomes **60 requests per minute** when using synchronous validation as it is intended for debugging purposes.

## Adobe Experience Platform extension

You can use the Adobe Experience Platform extension to create a new streaming connection. The [!DNL Experience Platform] extension provides actions to send beacons formatted in [!DNL Experience Data Model] (XDM) for real-time ingestion to [!DNL Experience Platform]. Visit the [Experience Platform Extension](/help/tags/extensions/client/web-sdk/overview.md) documentation for more information.
