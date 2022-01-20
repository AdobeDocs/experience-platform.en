---
description: This page lists and describes all the API operations that you can perform using the `/authoring/destinations/publish` API endpoint.
title: Publish Destinations API endpoint operations
exl-id: 0564a132-42f4-478c-9197-9b051acf093c
---
# Publish Destinations endpoint API operations {#publish-destination}

>[!IMPORTANT]
>
>**API endpoint**: `platform.adobe.io/data/core/activation/authoring/destinations/publish` 

This page lists and describes all the API operations that you can perform using the `/authoring/destinations/publish` API endpoint. 

After you have configured and tested your destination, you can submit it to Adobe for review and publishing.

Use the publish destinations API endpoint to submit a publishing request when:
* As a Destination SDK partner, you want to make your productized destination available across all Experience Platform organizations for all Experience Platform customers to use;
* You want to make your custom destination available in your own Experience Platform organization, across all sandboxes.

## Getting started with destination publishing API operations {#get-started}

Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

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
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "destinationId":"1230e5e4-4ab8-4655-ae1e-a6296b30f2ec",
   "destinationAccess":"LIMITED",
   "allowedOrgs":[
      "xyz@AdobeOrg",
      "lmn@AdobeOrg"
   ]
}
```

|Parameter | Type | Description|
|---------|----------|------|
|`destinationId` | String | The destination ID of the destination configuration that you are submitting for publishing. Get the destination ID of a destination configuration by using the [destination configuration API reference](./destination-configuration-api.md#retrieve-list).  |
|`destinationAccess` | String | `ALL` or `LIMITED`. Specify if you want your destination to appear in the catalog for all Experience Platform customers or just for certain organizations. <br> **Note**: If you use `LIMITED`, the destination will be published for your Experience Platform organization only. If you'd like to publish the destination to a subset of Experience Platform organizations for customer testing purposes, please reach out to Adobe support. |
|`allowedOrgs` | String | If you use `"destinationAccess":"LIMITED"`, specify the Experience Platform organizations for which the destination will be available. |

{style="table-layout:auto"}

**Response**

A successful response returns HTTP status 201 with details of your destination publish request.

## List destination publish requests {#retrieve-list}

You can retrieve a list of all destinations submitted for publishing for your IMS Organization by making a GET request to the `/authoring/destinations/publish` endpoint.

**API format**


```http
GET /authoring/destinations/publish
```

**Request**

The following request will retrieve the list of destinations submitted for publishing that you have access to, based on IMS Organization and sandbox configuration.

```shell
curl -X GET https://platform.adobe.io/data/core/activation/authoring/destinations/publish \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

The following response returns HTTP status 200 with a list of destinations submitted for publishing that you have access to, based on the IMS Organization ID and sandbox name that you used. One `configId` corresponds to the publish request for one destination.

```json

{
   "destinationId":"1230e5e4-4ab8-4655-ae1e-a6296b30f2ec",
   "publishDetailsList":[
      {
         "configId":"string",
         "allowedOrgs":[
            "xyz@AdobeOrg",
            "lmn@AdobeOrg"
         ],
         "status":"TEST",
         "publishedDate":"1630617746"
      }
   ]
}
    
```

|Parameter | Type | Description|
|---------|----------|------|
|`destinationId` | String | The destination ID of the destination configuration that you have submitted for publishing. |
|`publishDetailsList.configId` | String | The unique ID of the destination publish request for your submitted destination. |
|`publishDetailsList.allowedOrgs` | String | Returns the Experience Platform organizations for which the destination should be available. |
|`publishDetailsList.status` | String | The status of your destination publish request. Possible values are `TEST`, `REVIEW`, `APPROVED`, `PUBLISHED`, `DENIED`, `REVOKED`, `DEPRECATED`.|
|`publishDetailsList.publishedDate` | String | The date when the destination was submitted for publishing, in epoch time. |

{style="table-layout:auto"}

## Update an existing destination publish request {#update}

You can update the allowed organizations in an existing destination publish request by making a PUT request to the `/authoring/destinations/publish` endpoint and providing the ID of the destination for which you want to update the allowed organizations. In the body of the call, provide the updated allowed organizations.

**API format**


```http
PUT /authoring/destinations/publish/{DESTINATION_ID}
```

| Parameter | Description |
| -------- | ----------- |
| `{DESTINATION_ID}` | The ID of the destination for which you want to update the publish request. |

**Request**

The following request updates an existing destination publish request, configured by the parameters provided in the payload. In the example call below, we are updating the allowed organizations.  

```shell

curl -X PUT https://platform.adobe.io/data/core/activation/authoring/destinations/publish/1230e5e4-4ab8-4655-ae1e-a6296b30f2ec \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "destinationId":"1230e5e4-4ab8-4655-ae1e-a6296b30f2ec",
   "destinationAccess":"LIMITED",
   "allowedOrgs":[
      "abc@AdobeOrg",
      "def@AdobeOrg"
   ]
}
```

## Get the status of a specific destination publish request {#get}

You can retrieve detailed information about a specific destination publish request by making a GET request to the `/authoring/destinations/publish` endpoint and providing the ID of the destination for which you want to retrieve the publishing status.

**API format**


```http
GET /authoring/destinations/publish/{DESTINATION_ID}
```

| Parameter | Description |
| -------- | ----------- |
| `{DESTINATION_ID}` | The ID of the destination for which you want to retrieve the publishing status. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/core/activation/authoring/destinations/publish/1230e5e4-4ab8-4655-ae1e-a6296b30f2ec \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with detailed information about the specified destination publish request.

```json
{
   "destinationId":"1230e5e4-4ab8-4655-ae1e-a6296b30f2ec",
   "publishDetailsList":[
      {
         "configId":"string",
         "allowedOrgs":[
            "xyz@AdobeOrg",
            "lmn@AdobeOrg"
         ],
         "status":"TEST",
         "publishedDate":"string"
      }
   ]
}
```

## API error handling

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps

After reading this document, you now know how to submit a publish request for your destination. The Adobe Experience Platform team will review your publish request and get back to you with five business days.
