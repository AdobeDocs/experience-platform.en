---
title: Best practices for Privacy Service
description: Learn how to reduce the processing time and the costs incurred to your organization when completing privacy requests by following these optimal use guidelines.
exl-id: 1333d6c6-5ca0-41c1-9f9e-aa2a5a8b8a9c
---
# Best practices for advanced data lifecycle management

Use the Data Lifecycle UI and Data Hygiene API to efficiently submit cleanup requests to remove data from Adobe Experience Platform services. Follow these best practices to streamline your request processing and optimize completion response times.

## Getting Started

This guide requires a working understanding of the Data Lifecycle workspace and Data Hygiene API. and how it enables you to manage cleanup requests within AEP. Familiarize yourself with the guides on [Data Hygiene Service](./data-hygiene-service.md) and [submitting cleanup requests in the UI](./ui/user-guide.md#creating-workorders), or through the API.

## Prerequisites

Access to Data Hygiene Service is managed through granular role-based permissions in Adobe Admin Console. Ensure you have the necessary permissions in your product profile to utilize specific features in the UI and API. Contact your system administrator for additional permissions. Administrators can refer to the guide on [managing permissions for Data Hygiene Service](./permissions.md) for more details.

## Workorder creation guidelines

Follow these guidelines to optimize your cleanup request submissions:

1. **Maximize identities per request:** Include up to 100,000 identities per cleanup request to enhance efficiency.
2. **Specify individual datasets:** For maximum efficiency, specify the individual dataset to be processed.
3. **Submit multiple requests:** Submit multiple requests with maximum identity counts to achieve quicker processing, as work orders are batched for efficiency.
4. **API throttling considerations:** Be mindful of API throttling to prevent slow-downs. Smaller requests (< 100 IDs) at higher frequencies may result in 429 responses and require resubmission at acceptable rates.

## Dataset expiration (TTL)

Dataset ecxpirations are handled by the `/ttl` endpoint on the Data Hygiene API.

Setting up automatic dataset cleanup is recommended for short-lived data. Use TTL feature to trigger dataset cleanup based on specified time/date. Monitor progress efficiently through I/O Events.

## Monitoring Status of Workorders and TTLs

ADLM provides methods to retrieve and monitor job status efficiently. Follow these guidelines for effective monitoring:

### I/O Events

- Set up webhooks to receive push notifications for status changes.
- Utilize notifications to monitor progress and updates upon completion.
- Avoid implementing polling mechanisms to minimize API traffic.

### Retrieve Detailed Responses for a Single Workorder

- Use GET /workorder{work_order_id} endpoint for detailed response data.
- Retrieve product-specific responses and success messages.
- Avoid using this method for regular polling activities.

By adhering to these best practices, you can effectively manage cleanup requests and optimize response times within Data Hygiene Service.
