---
description: This page exemplifies the API call used to delete an existing destination configuration through Adobe Experience Platform Destination SDK.
title: Delete a destination configuration
exl-id: c7309ab7-1b8d-46d4-8017-fd4aa5918cdd
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
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
# Delete a destination configuration

This page exemplifies the API request and payload that you can use to delete an existing destination configuration, using the `/authoring/destinations` API endpoint.

>[!IMPORTANT]
>
>All parameter names and values supported by Destination SDK are **case sensitive**. To avoid case sensitivity errors, use the parameter names and values exactly as shown in the documentation.

## Getting started with destination configuration API operations {#get-started}

Before continuing, review the [getting started guide](../../getting-started.md) for important information that you need to know to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Delete a destination configuration {#delete}

You can delete an [existing](create-destination-configuration.md) destination configuration by making a `DELETE` request to the `/authoring/destinations` endpoint with the `{INSTANCE_ID}`of the destination configuration that you want to delete.

>[!TIP]
>
>**API endpoint**: `platform.adobe.io/data/core/activation/authoring/destinations`

To obtain an existing destination configuration and its corresponding `{INSTANCE_ID}`, see the article about [retrieving a destination configuration](retrieve-destination-configuration.md).

**API format**

```http
DELETE /authoring/destinations/{INSTANCE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{INSTANCE_ID}` | The `ID` of the destination configuration you want to delete. |

{style="table-layout:auto"}

+++ Request

```shell
curl -X DELETE https://platform.adobe.io/data/core/activation/authoring/destinations/{INSTANCE_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

+++

+++ Response

A successful response returns HTTP status 200 along with an empty HTTP response.


## API error handling {#error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. See [API status codes](../../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../../landing/troubleshooting.md#request-header-errors) in the Experience Platform troubleshooting guide.

## Next steps {#next-steps}

After reading this document, you now know how to delete an existing destination configuration through the Destination SDK `/authoring/destinations` API endpoint.

To learn more about what you can do with this endpoint, see the following articles:

* [Create a destination configuration](create-destination-configuration.md)
* [Retrieve a destination configuration](retrieve-destination-configuration.md)
* [Update a destination configuration](update-destination-configuration.md)

+++
