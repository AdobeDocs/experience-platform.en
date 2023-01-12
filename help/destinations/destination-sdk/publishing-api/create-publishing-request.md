---
description: This page exemplifies the API call used to submit a destination publishing request through Adobe Experience Platform Destination SDK. 
title: Create a destination publishing request
---

# Create a destination publishing request

>[!IMPORTANT]
>
>You only need to use this API endpoint if you are submitting a productized (public) destination, to be used by other Experience Platform customers. If you are creating a private destination for your own use, you do not need to formally submit the destination using the publishing API.

>[!IMPORTANT]
>
>**API endpoint**: `platform.adobe.io/data/core/activation/authoring/destinations/publish` 

This page lists and describes all the API operations that you can perform using the `/authoring/destinations/publish` API endpoint.

After you have configured and tested your destination, you can submit it to Adobe for review and publishing. Read [Submit for review a destination authored in Destination SDK](./submit-destination.md) for all the other steps you must do as part of the destination submission process.

Use the publish destinations API endpoint to submit a publishing request when:

* As a Destination SDK partner, you want to make your productized destination available across all Experience Platform organizations for all Experience Platform customers to use;
* You make *any updates* to your configurations. Configuration updates are reflected in the destination only after you submit a new publishing request, which is approved by the Experience Platform team.

## Getting started with destination publishing API operations {#get-started}

Before continuing, please review the [getting started guide](../getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Submit a destination configuration for publishing {#create}

You can submit a destination configuration for publishing by making a POST request to the `/authoring/destinations/publish` endpoint.

**API format**

```http
POST /authoring/destinations/publish
```

**Request**

The following request submits a destination for publishing, across the organizations configured by the parameters provided in the payload. The payload below includes all parameters accepted by the `/authoring/destinations/publish` endpoint.

```shell
curl -X POST https://platform.adobe.io/data/core/activation/authoring/destinations/publish \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "destinationId":"1230e5e4-4ab8-4655-ae1e-a6296b30f2ec",
   "destinationAccess":"ALL"
}
```

|Parameter | Type | Description|
|---------|----------|------|
|`destinationId` | String | The destination ID of the destination configuration that you are submitting for publishing. Get the destination ID of a destination configuration by using the [destination configuration API reference](./destination-configuration-api.md#retrieve-list).  |
|`destinationAccess` | String | Use `ALL` for your destination to appear in the catalog for all Experience Platform customers.  |

{style="table-layout:auto"}

**Response**

A successful response returns HTTP status 201 with details of your destination publish request.

## API error handling

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps

After reading this document, you now know how to submit a publish request for your destination. The Adobe Experience Platform team will review your publish request and get back to you with five business days.