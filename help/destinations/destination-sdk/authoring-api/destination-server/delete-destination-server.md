---
description: This page exemplifies the API call used to delete an existing destination server configuration through Adobe Experience Platform Destination SDK. 
title: Delete a destination server configuration
---

# Delete a destination server configuration

>[!IMPORTANT]
>
>**API endpoint**: `platform.adobe.io/data/core/activation/authoring/destination-servers`

This page exemplifies the API request and payload that you can use to delete an existing destination server configuration, using the `/authoring/destination-servers` API endpoint.

For a detailed description of the capabilities that you can delete through this endpoint, read the following articles:

* [Server specs for destinations created with Destination SDK](../../../destination-sdk/functionality/destination-server/server-specs.md)
* [Templating specs for destinations created with Destination SDK](../../../destination-sdk/functionality/destination-server/templating-specs.md)
* [Message format](../../../destination-sdk/functionality/destination-server/message-format.md)
* [File formatting configuration](../../../destination-sdk/functionality/destination-server/file-formatting.md)

## Getting started with destination server API operations {#get-started}

Before continuing, please review the [getting started guide](../../getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Delete a destination server configuration {#delete}

You can delete an [existing](create-destination-server.md) destination server configuration by making a `DELETE` request to the `/authoring/destination-servers` endpoint with the `{INSTANCE_ID}`of the destination server configuration that you want to delete.

To obtain an existing destination server configuration and its corresponding `{INSTANCE_ID}`, see the article about [retrieving a destination server configuration](retrieve-destination-server.md).

**API format**

```http
DELETE /authoring/destination-servers/{INSTANCE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{INSTANCE_ID}` | The `ID` of the destination server configuration you want to delete. |

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/core/activation/authoring/destination-servers/bd4ec8f0-e98f-4b6a-8064-dd7adbfffec9 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response returns HTTP status 200 along with an empty HTTP response.

## API error handling {#error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps {#next-steps}

After reading this document, you now know how to delete an existing destination server through the Destination SDK `/authoring/destination-servers` API endpoint.

To learn more about what you can do with this endpoint, see the following articles:

* [Create a destination server configuration](create-destination-server.md)
* [Retrieve a destination server configuration](retrieve-destination-server.md)
* [Update a destination server configuration](update-destination-server.md)

