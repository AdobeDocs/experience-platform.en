---
title: Service level agreements and targets
description: Learn how to configure authentication for the Edge Network Server API
seo-description: Learn how to configure authentication for the Edge Network Server API
keywords: data collection;collection;edge network;api;sla;slt;service levels
---

# Guardrails

## Overview {#overview}

Adobe will use commercially resonable efforts to make the [!DNL Server API] available within a monthly uptime percentage of at least 99.9% for each region, during any monthly billing cycle.

## Definitions

* **Availability** is calculated for each five-minute interval as the percentage of requests processed by the Experience Adobe Experience Platform Edge Network that do not fail with errors and relate solely to the provisioned Adobe Experience Platform Edge Network APIs. If a tenant did not make any requests in a given five-minute interval, that interval is considered to be 100% available.
* **Monthly uptime percentage** for a given region is calculated as the average of the availability for all five-minute intervals in a month.
* An **upstream** is a service behind the Adobe Edge Network, enabled for a specific datastream, such as Adobe Server Side Forwarding, Adobe Edge Segmentation, or Adobe Target.
* A **request** sent to the Server API is defined as one or more request units.
* A **request unit** corresponds to a 8 KB fragment of a request and one upstream configured for a datastream.
* An **error** is any request that fails due to an Adobe Experience Platform Edge Network [internal service error](error-handling.md).

## Internal targets

Adobe engineering teams deploy close to real-time telemetry, monitoring, and scale out procedures to ensure the following targets:

* Less than 1% of HTTP requests return `5xx` errors in the last five minutes
* Less than 1% of upstream connnections return an error in the last five minutes
* Any tenant capacity is doubled in less than 10 minutes from the moment when a limit is reached.

## Service level agreement exclusions

The service level commitment described above does not apply to any unavailability or performance issues caused by the following events:

* Factors outside of our reasonable control, including Internet access or related problems beyond Adobe’s infrastructure.
* Any misuse of the [!DNL Server API], as defined by the limits outlined below.

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
| [JSON Smile](https://github.com/FasterXML/smile-format-specification) | 64 KB | 8 |


>[!NOTE]
>
>Depending on the payload itself, binary formats are generally 20-40% more compact, allowing you to push more data than you would in plain-text JSON. Please get in contact with your Customer Care representative if you need a higher capacity for your datastreams.

