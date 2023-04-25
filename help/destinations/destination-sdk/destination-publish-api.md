---
description: This page lists and describes all the API operations that you can perform using the `/authoring/destinations/publish` API endpoint.
title: Publish Destinations API endpoint operations
exl-id: 0564a132-42f4-478c-9197-9b051acf093c
---
# Publish Destinations endpoint API operations {#publish-destination}

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

<!-- * You want to make your custom destination available in your own Experience Platform organization, across all sandboxes. -->

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

## List destination publish requests {#retrieve-list}

You can retrieve a list of all destinations submitted for publishing for your organization by making a GET request to the `/authoring/destinations/publish` endpoint.

**API format**

```http
GET /authoring/destinations/publish
```

**Request**

The following request retrieves the list of destinations submitted for publishing that you have access to, based on organization and sandbox configuration.

```shell
curl -X GET https://platform.adobe.io/data/core/activation/authoring/destinations/publish \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

The following response returns HTTP status 200 with a list of destinations submitted for publishing that you have access to, based on the organization ID and sandbox name that you used. One `configId` corresponds to the publish request for one destination.

```json
{
   "destinationId":"1230e5e4-4ab8-4655-ae1e-a6296b30f2ec",
   "publishDetailsList":[
      {
         "configId":"123cs780-ce29-434f-921e-4ed6ec2a6c35",
         "allowedOrgs": [
            "*"
         ],    
         "status":"PUBLISHED",
         "destinationType": "PUBLIC",
         "publishedDate":"1630617746"
      }
   ]
}
```

|Parameter | Type | Description|
|---------|----------|------|
|`destinationId` | String | The destination ID of the destination configuration that you have submitted for publishing. |
|`publishDetailsList.configId` | String | The unique ID of the destination publish request for your submitted destination. |
|`publishDetailsList.allowedOrgs` | String | Returns the Experience Platform organizations for which the destination is available. <br> <ul><li> For `"destinationType": "PUBLIC"`, this parameter returns `"*"`, which means that the destination is available for all Experience Platform organizations.</li><li> For `"destinationType": "DEV"`, this parameter returns the Organization ID of the organization which you used to author and test the destination.</li></ul>|
|`publishDetailsList.status` | String | The status of your destination publish request. Possible values are `TEST`, `REVIEW`, `APPROVED`, `PUBLISHED`, `DENIED`, `REVOKED`, `DEPRECATED`. Destinations with the value `PUBLISHED` are live and can be used by Experience Platform customers.|
|`publishDetailsList.destinationType` | String | The type of destination. Values can be `DEV` and `PUBLIC`. `DEV` corresponds to the destination in your Experience Platform organization. `PUBLIC` corresponds to the destination that you have submitted for publishing. Think of these two options in Git terms, where the `DEV` version represents your local authoring branch and the `PUBLIC` version represents the remote main branch.|
|`publishDetailsList.publishedDate` | String | The date when the destination was submitted for publishing, in epoch time.|

{style="table-layout:auto"}

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
 -H 'x-gw-ims-org-id: {ORG_ID}' \
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
         "configId":"ab41387c0-4772-4709-a3ce-6d5fee654520",
         "allowedOrgs":[
            "716543205DB85F7F0A495E5B@AdobeOrg"
         ],
         "status":"TEST",
         "destinationType":"DEV"
      },
      {
         "configId":"cd568c67-f25e-47e4-b9a2-d79297a20b27",
         "allowedOrgs":[
            "*"
         ],
         "status":"DEPRECATED",
         "destinationType":"PUBLIC",
         "publishedDate":1630525501009
      },
      {
         "configId":"ef6f07154-09bc-4bee-8baf-828ea9c92fba",
         "allowedOrgs":[
            "*"
         ],
         "status":"PUBLISHED",
         "destinationType":"PUBLIC",
         "publishedDate":1630531586002
      }
   ]
}
```

## API error handling

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps

After reading this document, you now know how to submit a publish request for your destination. The Adobe Experience Platform team will review your publish request and get back to you with five business days.
