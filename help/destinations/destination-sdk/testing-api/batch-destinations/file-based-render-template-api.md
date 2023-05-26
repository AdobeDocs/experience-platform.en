---
description: This page explains how to use the /authoring/testing/template/render endpoint to visualize how the templatized customer data fields defined in your destination configuration would look like.
title: Validate templatized customer fields
exl-id: 8ed93f0c-3439-4d11-bb2f-d417a1e0b6a8
---

# Validate templatized customer fields

## Overview {#overview}

The `/authoring/testing/template/render` endpoint helps you visualize how the templatized [customer data fields](../../functionality/destination-configuration/customer-data-fields.md) defined in your destination configuration would look like.

The endpoint generates random values for your customer data fields, and returns them in the response. This helps you validate the semantic structure of customer data fields, such as bucket names or folder paths.

## Getting started {#getting-started}

Before continuing, please review the [getting started guide](../../getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Prerequisites {#prerequisites}

Before you can use the `/template/render` endpoint, make sure you meet the following conditions:

* You have an existing file-based destination created through the Destination SDK and you can see it in your [destinations catalog](../../../ui/destinations-workspace.md).
* To successfully make the API request, you need the destination instance ID corresponding to the destination instance that you will be testing. Get the destination instance ID that you should use in the API call, from the URL, when browsing a connection with your destination in the Platform UI.

   ![UI image showing how to get destination instance ID from the URL.](../../assets/testing-api/get-destination-instance-id.png)

## Render templatized customer fields {#render-customer-fields}

**API format**

```http
POST /authoring/testing/template/render/destination
```

To illustrate the behavior of this API endpoint, let's consider a file-based destination with the following customer data fields configuration:

```json
"fileBasedS3Destination":{
   "bucket":{
      "templatingStrategy":"PEBBLE_V1",
      "value":"{{customerData.bucket}}"
   },
   "path":{
      "templatingStrategy":"PEBBLE_V1",
      "value":"{{customerData.path}}"
   }
}
```

**Request**

The request below calls the `/authoring/testing/template/render` endpoint, which returns a response with randomly generated values for the two customer data fields mentioned above.

```shell
curl -X POST 'https://platform.adobe.io/data/core/activation/authoring/testing/template/render/destination' \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
 {
    "destinationId": "{DESTINATION_CONFIGURATION_ID}",
    "templates": {
        "bucket": "{{customerData.bucket}}",
        "path": "{{customerData.bucket}}/{{customerData.path}}"
    }
}'
```

| Parameters | Description |
| -------- | ----------- |
| `destinationId` | The ID of the [destination configuration](../../authoring-api/destination-configuration/retrieve-destination-configuration.md) that you are testing.| 
| `templates`| The templatized field names defined in your [destination server configuration](../../authoring-api/destination-server/create-destination-server.md).|

**Response**

A successful response returns an `HTTP 200 OK` status, and the body includes randomly generated values for your templatized fields.

This response can help you validate the correct structure of your customer data fields, such as bucket names or folder paths.


```json
{
    "results": {
        "bucket": "hfWpE-bucket",
        "path": "hfWpE-bucket/ceC"
    }
}
```

## API error handling {#api-error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps {#next-steps}

After reading this document, you now know how to validate the customer data field configuration defined in your [destination server](../../authoring-api/destination-server/create-destination-server.md).
