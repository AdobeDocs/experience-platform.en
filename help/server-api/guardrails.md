---
title: Performance guardrails for Edge Network Server API
description: Learn how to use the Server API within optimal performance guardrails.
keywords: data collection;collection;edge network;api;sla;slt;service levels
exl-id: 063d0fbb-26d1-4727-9dea-8e7223b2173d
---
# Performance guardrails for Edge Network Server API

## Overview {#overview}

Performance guardrails define usage limits related to your Server API use cases. Exceeding the performance guardrails outlined in this article could result in performance degradation.

Adobe is not responsible for performance degradation caused by exceeded usage limits. Customers who consistently exceed the performance guardrails can request additional processing capacity to avoid performance degradation.

## Definitions

* **Availability** is calculated for each five-minute interval as the percentage of requests processed by the Experience Platform Edge Network that do not fail with errors and relate solely to the provisioned Edge Network APIs. If a tenant did not make any requests in a given five-minute interval, that interval is considered to be 100% available.
* **Monthly uptime percentage** for a given region is calculated as the average of the availability for all five-minute intervals in a month.
* An **upstream** is a service behind the Edge Network, enabled for a specific datastream, such as Adobe Server Side Forwarding, Adobe Edge Segmentation, or Adobe Target.
* A **request unit** corresponds to a 8 KB fragment of a request and one upstream configured for a datastream.
* A **request** is a single message sent by a customer-owned application to the [!DNL Server API]. A request can contain one or more request units.
* An **error** is any request that fails due to an Edge Network [internal service error](error-handling.md).

## Service limits

All datastreams enforce certain usage limits, which mainly control how many events can be sent concurrently, their size, and the number of upstream services that those requests are routed to.

### Request units

All limits are applied and normalised over a **request unit (RU)**, defined as a **8 KB fragment** of a request going to one upstream service configured in a datastream.

#### Examples

| Upstreams configured per datastream | Average request size | Request units |
| --- | --- | --- |
| 1 (Adobe Platform) | 8 KB (1 fragment) | 1 |
| 2 (Adobe Platform, Adobe Target) | 8 KB (1 fragment)  | 2 |
| 2 (Adobe Platform, Adobe Target) | 16 KB (2 fragments)  | 4 |
| 2 (Adobe Platform, Adobe Target) | 64 KB (8 fragments)  | 16 |

### Request units limits

The table below shows the default limit values. If you need higher request unit limits, reach out to your account representative.

| Endpoint | Requests units per second |
| --- | --- |
| `/v2/interact` | 4000 |
| `/v2/collect` | 6000 |


### HTTP Request size limit

| Payload format | Max size for a request | Max 8 KB request fragments |
| --- | --- | --- |
| JSON plain-text | 64 KB | 8 |


>[!NOTE]
>
>Depending on the payload itself, binary formats are generally 20-40% more compact, allowing you to push more data than you would in plain-text JSON. Please get in contact with your Customer Care representative if you need a higher capacity for your datastreams.
