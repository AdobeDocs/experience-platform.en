---
description: This page exemplifies the API call used to retrieve details about a destination publishing request through Adobe Experience Platform Destination SDK. 
title: Retrieve a destination publishing request
---

# Retrieve a destination publishing request

>[!IMPORTANT]
>
>You only need to use this API endpoint if you are submitting a productized (public) destination, to be used by other Experience Platform customers. If you are creating a private destination for your own use, you do not need to formally submit the destination using the publishing API.

>[!IMPORTANT]
>
>**API endpoint**: `platform.adobe.io/data/core/activation/authoring/destinations/publish` 

After you have configured and tested your destination, you can submit it to Adobe for review and publishing. Read [Submit for review a destination authored in Destination SDK](../guides/submit-destination.md) for all the other steps you must do as part of the destination submission process.

Use the publish destinations API endpoint to submit a publishing request when:

* As a Destination SDK partner, you want to make your productized destination available across all Experience Platform organizations for all Experience Platform customers to use;
* You make *any updates* to your configurations. Configuration updates are reflected in the destination only after you submit a new publishing request, which is approved by the Experience Platform team.

>[!IMPORTANT]
>
>All parameter names and values supported by Destination SDK are **case sensitive**. To avoid case sensitivity errors, please use the parameters names and values exactly as shown in the documentation.

## Getting started with destination publishing API operations {#get-started}

Before continuing, please review the [getting started guide](../getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## List destination publish requests {#retrieve-list}

You can retrieve a list of all destinations submitted for publishing for your IMS Organization by making a GET request to the `/authoring/destinations/publish` endpoint.

**API format**

Use the following API format to retrieve all publishing requests for your account.

```http
GET /authoring/destinations/publish
```

Use the following API format to retrieve a specific publishing request, defined by the `{DESTINATION_ID}` parameter.

```http
GET /authoring/destinations/publish/{DESTINATION_ID}
```

**Request**

The following two requests retrieve all publishing requests for your IMS Organization, or a specific publishing request, depending on whether you pass the `DESTINATION_ID` parameter in the request.

Select each tab below to view the corresponding payload.

>[!BEGINTABS]

>[!TAB Retrieve all publishing requests]

+++Request

The following request will retrieve the list of publishing requests that you have submitted, based on [!DNL IMS Org ID] and sandbox configuration.

```shell
curl -X GET https://platform.adobe.io/data/core/activation/authoring/destinations/publish \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

+++Response

The following response returns HTTP status 200 with a list of all destinations submitted for publishing that you have access to, based on the IMS Organization ID and sandbox name that you used. One `configId` corresponds to the publish request for one destination.

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

|Parameter | Type | Description|
|---------|----------|------|
|`destinationId` | String | The destination ID of the destination configuration that you have submitted for publishing. |
|`publishDetailsList.configId` | String | The unique ID of the destination publish request for your submitted destination. |
|`publishDetailsList.allowedOrgs` | String | Returns the Experience Platform organizations for which the destination is available. <br> <ul><li> For `"destinationType": "PUBLIC"`, this parameter returns `"*"`, which means that the destination is available for all Experience Platform organizations.</li><li> For `"destinationType": "DEV"`, this parameter returns the Organization ID of the organization which you used to author and test the destination.</li></ul>|
|`publishDetailsList.status` | String | The status of your destination publish request. Possible values are `TEST`, `REVIEW`, `APPROVED`, `PUBLISHED`, `DENIED`, `REVOKED`, `DEPRECATED`. Destinations with the value `PUBLISHED` are live and can be used by Experience Platform customers.|
|`publishDetailsList.destinationType` | String | The type of destination. Values can be `DEV` and `PUBLIC`. `DEV` corresponds to the destination in your Experience Platform organization. `PUBLIC` corresponds to the destination that you have submitted for publishing. Think of these two options in Git terms, where the `DEV` version represents your local authoring branch and the `PUBLIC` version represents the remote main branch.|
|`publishDetailsList.publishedDate` | String | The date when the destination was submitted for publishing, in epoch time.|

{style="table-layout:auto"}

+++

>[!TAB Retrieve a specific publishing request]

+++Request

```shell
curl -X GET https://platform.adobe.io/data/core/activation/authoring/destinations/publish/{DESTINATION_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

| Parameter | Description |
| -------- | ----------- |
| `{DESTINATION_ID}` | The ID of the destination for which you want to retrieve the publishing status. |

+++

+++Response

If you passed a `DESTINATION_ID` in the API call, the response returns HTTP status 200 with detailed information about the specified destination publish request.

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

+++

>[!ENDTABS]

## API error handling

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.