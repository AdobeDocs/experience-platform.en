---
description: This page lists and describes all the API operations that you can perform using the `/authoring/testing/template/render/destination/` API endpoint, to to render exported data for your destination, based on your destination configuration.
title: Render template API operations
---
# Render file-based destination template with the testing API {#render-template-api-operations}

## Overview {#overview}

>[!IMPORTANT]
>
>**API endpoint**: `https://platform.adobe.io/data/core/activation/authoring/testing/template/render/destination'`

This page lists and describes all the API operations that you can perform using the `/authoring/testing/template/render/destination` API endpoint, to render exported profiles that match your destination's expected format, based on your destination configuration.

## Getting started with render template API operations {#get-started}

Before continuing, please review the [getting started guide](getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Render destination properties based on configured customer properties {#render-exported-data}

You can render exported profiles by making a POST request to the `authoring/testing/template/render` endpoint and providing the destination ID of the destination configuration and the template you created using the [sample template API endpoint](./sample-template-api.md). 

>[!TIP]
>
>* The destination ID that you should use here is the `instanceId` that corresponds to a destination configuration, created using the `/destinations` endpoint. Refer to the [destination configuration API operations](./destination-configuration-api.md#retrieve-list).

### API format


```http
POST authoring/testing/template/render/destination
```

### Request

```shell
curl --location --request POST 'https://platform.adobe.io/data/core/activation/authoring/testing/template/render/destination' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-api-key: {API_KEY}' \
--header 'Authorization: Bearer {ACCESS_TOKEN}' \
--header 'x-gw-ims-org-id: {IMS_ORG}' \
--header 'x-sandbox-name: {SANDBOX_NAME}' \
--data-raw '{
    "destinationId": "ca246623-2abd-428e-8f78-cc8a682f8768",
    "templates": {
        "bucket": "s3/{{customerData.bucket}}/{{customerData.path}}",
        "rootDirectory": "s3/{{customerData.fileType}}/{{destination.name}}/{{destination.segments[0].name}}"
    }
}'
```

| Parameter | Description |
| -------- | ----------- |
| `destinationId` | The destination instance ID of the destination that you are testing.| 
| `templates`| The templated fields defined in your [destination server configuration](server-and-file-configuration.md). The keys in these key-value pairs are not using any reserved names. You should use key names that offer the most accurate meaning for the customer configuration.|

### Response

```json
{
    "results": {
        "bucket": "s3/my-bucket/my-path",
        "rootDirectory": "s3/my-fileType/my-destination/my-segment"
    }
}
```

## API error handling {#api-error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps {#next-steps}

After reading this document, you now know how to generate exported profiles that match your destination's expected data format. Read [how to use Destination SDK to configure a file-based destination](configure-file-based-destination-instructions.md) to understand where this step fits into the process of configuring your destination.
