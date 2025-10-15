---
keywords: Experience Platform;home;popular topics;data ingestion;ingested data;streaming;overview;streaming ingestion;latency;streaming latency;
solution: Experience Platform
title: Streaming Ingestion Overview
description: Streaming ingestion for Adobe Experience Platform provides users a method to send data from client and server-side devices to Experience Platform in real time.
exl-id: 851f15fd-7ac5-4a9f-934d-6b907057da87
---
# Streaming ingestion overview

Streaming ingestion for Adobe Experience Platform provides users a method to send data from client and server-side devices to [!DNL Experience Platform] in real time.

## What can you do with streaming ingestion?

Adobe Experience Platform enables you to drive coordinated, consistent, and relevant experiences by generating a [!DNL Real-Time Customer Profile] for each of your individual customers. Streaming ingestion plays a key role in building these profiles by enabling you to deliver [!DNL Profile] data into the [!DNL Data Lake] with as little latency as possible. 

The following video is designed to help support your understanding of streaming ingestion, and outlines the concepts above.

>[!VIDEO](https://video.tv.adobe.com/v/28425?quality=12&learn=on)

### Stream profile records and [!DNL ExperienceEvents]

With streaming ingestion, users can stream profile records and [!DNL ExperienceEvents] to [!DNL Experience Platform] in seconds to help drive real-time personalization. All data sent to streaming ingestion APIs is automatically persisted in the [!DNL Data Lake].

Please read the [create a streaming connection guide](../tutorials/create-streaming-connection.md) for more information.

### Stream to datasets

Once you are confident that your data is clean, you can enable your datasets for [!DNL Real-Time Customer Profile] and [!DNL Identity Service].

For more information on enabling a dataset for [!DNL Profile] and [!DNL Identity Service], please read the [configure a dataset guide](../../profile/tutorials/dataset-configuration.md). 

## What is the expected latency for streaming ingestion on Experience Platform?

>[!IMPORTANT]
>
>Guardrails for streaming ingestion are bound to the total license usage entitlement that corresponds with your entire organization. Additionally, data usage in development sandboxes are limited to 10% of your total profiles. For more information about license usage entitlement, read the [data management best practices guide](../../landing/license-usage-and-guardrails/data-management-best-practices.md). To learn how to set limits to your streaming throughput, read the [Capacity overview](../../landing/license-usage-and-guardrails/capacity.md).

| Destination | Expected latency | 
| --------- | ---------------- |
| Real-Time Customer Profile | < 15 minutes at the 95th percentile |
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

You can use the Adobe Experience Platform extension to create a new streaming connection. The [!DNL Experience Platform] extension provides actions to send beacons formatted in [!DNL Experience Data Model] (XDM) for real-time ingestion to [!DNL Experience Platform]. Visit the [Experience Platform Extension](../../tags/extensions/client/web-sdk/overview.md) documentation for more information.

## IP Address Allowlisting for Streaming Ingestion API

>[!AVAILABILITY]
>
>Support for IP address allowlisting for Streaming Ingestion API is in beta and your organization may not have access to it yet. The functionality and documentation are subject to change.

You can now allowlist IP addresses for the Streaming Ingestion API. Use this feature to secure your ingestion endpoints by restricting access to only the IP addresses that you specify.

### How IP allowlisting works

The IP allowlisting feature works as follows:

1. **Submit IP addresses:** You provide a list of trusted IP addresses, mapped to your sandboxes.
2. **Configuration:** Adobe configures the allowlist at the organization and sandbox level for your organization.
3. **Enforcement:** Incoming requests are evaluated against your provided allowlist:
   * If the IP matches your allowlist, the request is processed normally.
   * If the IP is not on the allowlist, the request is blocked and returns an HTTP 403 or 401 error.

### Key considerations

* The IP allowlisting feature applies only to the [Streaming Ingestion API](https://developer.adobe.com/experience-platform-apis/references/streaming-ingestion/) (`dcs.adobedc.net`) and does **not** apply to `server.adobedc.net` or `edge.adobedc.net`.
* New sandboxes are open by default until allowlisting is enabled.
* Removing a sandbox from the allowlist will reopen it to the internet.
* You must maintain the complete list of sandbox-to-IP mappings on your side and always submit the full list in the IP allowlisting form. Incremental updates are not supported.

### Enable IP allowlisting

Follow the steps below to enable IP allowlisting for your organization:

1. Download and complete the [IP allowlisting form](../images/assets/ip_allowlisting_aep.xlsx.zip).
2. Open a support ticket and file the subject as **AEP DCS & Streaming Ingestion - IP Allowlisting request**. Attach the completed form to this ticket.
3. After submitting your ticket, Adobe Customer Care will forward your request to engineering.
4. Engineers enable allowlisting and confirms setup.
5. You then validate access and confirm using the support ticket.

| Organization | Sandbox name | Allowed IPs |
| --- | --- | --- |
| ACME | Prod | 203.0.113.42, 198.51.100.25, 192.0.2.10 |
| ACME | Dev | 203.0.113.43, 198.51.100.26, 192.0.2.11 |
| LUMA | Prod | 203.0.113.46, 198.51.100.29, 192.0.2.14 |

### FAQ

Read the following for answers to frequently asked questions regarding IP address allowlisting for the Streaming Ingestion API.

#### Which APIs are covered?

Only the `dcs.adobedc.net` Streaming Ingestion API endpoints.

### What happens if my request comes from an unlisted IP?

It is blocked with an HTTP 403/401 error.

#### Are new sandboxes protected automatically?

No. They are open until you provide IP mappings via the allowlisting form.

#### Can I send only updated IPs when my allowlist changes?

No. You must always send the complete list of sandbox and IP mappings. Partial (incremental) updates are not accepted.