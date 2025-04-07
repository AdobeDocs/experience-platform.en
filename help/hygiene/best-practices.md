---
title: Best Practices for Advanced Data Lifecycle Management
description: Learn how to efficiently manage data hygiene requests in Adobe Experience Platform using the Advanced Data Lifecycle Management UI and Data Hygiene API. This guide covers best practices such as maximizing identities per request, specifying individual datasets, and being mindful of API throttling to prevent slowdowns. The document includes guidelines for setting up automatic dataset cleanup, how to monitor work order statuses, and detailed response retrieval methods. Follow these practices to streamline your request processing and optimize response times.
exl-id: 75e2a97b-ce6c-4ebd-8fc8-597887f77037
---
# Best practices for Advanced Data Lifecycle Management

Use the Advanced Data Lifecycle Management UI and Data Hygiene API to efficiently manage cleanup requests and remove data from Adobe Experience Platform services. Follow these best practices to streamline your request processing and optimize completion response times.

## Prerequisites {#prerequisites}

This guide requires a working understanding of the Data Lifecycle workspace and the [Data Hygiene API](./api/overview.md). Before continuing this document, familiarize yourself with the guides on [Advanced Data Lifecycle Management](./home.md) and [creating record delete requests](./ui/record-delete.md) or [dataset expirations in the UI](./ui/dataset-expiration.md), or through the API.

## Work order creation guidelines {#work-order-creation-guidelines}

You can use the `/workorder` endpoint in the Data Hygiene API to programmatically manage record delete requests in Experience Platform. With this endpoint, you can create a delete request, check on its status, or update an existing request. See the [Work order endpoint document](./api/workorder.md) to learn how to perform these actions using the API.

>[!TIP]
>
>A work order is a structured request that performs specific data management operations, such as data cleanup or transformation, to ensure efficient and systematic processing.

Follow these guidelines to optimize your cleanup request submissions:

1. **Maximize identities per request:** Include up to 100,000 identities per cleanup request to enhance efficiency. Batching multiple identities into a single request helps reduce the frequency of API calls and minimizes the risk of performance issues due to excessive single-identity requests. Submit requests with maximum identity counts to achieve quicker processing, as work orders are batched for efficiency.
2. **Specify individual datasets:** For maximum efficiency, specify the individual dataset to be processed.
3. **API throttling considerations:** Be mindful of API throttling to prevent slow-downs. Smaller requests (< 100 IDs) at higher frequencies may result in 429 responses and require resubmission at acceptable rates. 

### Manage 429 Errors {#manage-429-errors}

If you receive a 429 error, it indicates that you have exceeded the allowed number of requests within a given time period. Follow these best practices to manage 429 errors effectively:

- **Read the 'Retry-After' header**: When a 429 error is returned, check the 'Retry-After' response header. This header specifies the time to wait before retrying the request.
- **Implement retry logic**: Use the 'Retry-After' value to implement retry logic in your application, ensuring that retries are attempted after the specified time to avoid subsequent 429 errors.
- **Batch your requests**: Avoid submitting numerous small requests in quick succession. Instead, batch multiple identities into a single request to reduce the frequency of calls and minimize the risk of hitting rate limits.

## Dataset expiration {#dataset-expiration} 

Set up automatic dataset cleanup for short-lived data. Use the `/ttl` endpoint on the Data Hygiene API to schedule expiration dates for datasets for cleanup based on a specified time or date. See the Dataset expiration endpoint guide to learn how to [create a dataset expiration](./api/dataset-expiration.md) and the [accepted query parameters](./api/dataset-expiration.md#query-params).

## Monitor work order and dataset expiration status {#monitor}

You can efficiently monitor the progress of your data lifecycle management through the use of **I/O Events**. An I/O Event is a mechanism for receiving real-time notifications about changes or updates in various services within Experience Platform. 

I/O Event alerts can be sent to a configured webhook to enable the automation of activity monitoring. To receive alerts via webhook, you must register your webhook for Experience Platform alerts in the Adobe Developer Console. See the guide on [subscribing to Adobe I/O Event notifications](../observability/alerts/subscribe.md) for the detailed instructions.

Use the following data lifecycle methods and guidelines to effectively retrieve and monitor job statuses:

### I/O Events {#io-events}

To efficiently monitor the progress of your data lifecycle tasks, set up and use I/O Events by following these steps:

- Set up webhooks to receive push notifications for status changes.
- Use notifications to monitor progress and receive updates upon completion.
- Avoid implementing polling mechanisms to minimize API traffic.

### Retrieve detailed responses for a single work order {#retrieve-detailed-work-order-response}

For in-depth information on individual work orders, use the following approach:

- Make a GET request to the `/workorder/{work_order_id}` endpoint for detailed response data.
- Retrieve product-specific responses and success messages.
- Avoid using this method for regular polling activities.

By adhering to these best practices, you can effectively manage cleanup requests and optimize response times within Advanced Data Lifecycle Management.
