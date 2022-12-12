---
description: This page explains how to use the /testing/destinationInstance API endpoint to test if your file-based destination is configured correctly and to verify the integrity of data flows to your configured destination.
title: Test your file-based destination with sample profiles
exl-id: 75f76aec-245b-4f07-8871-c64a710db9f6
---
# Test your file-based destination with sample profiles

## Overview {#overview}

This page explains how to use the `/testing/destinationInstance` API endpoint to test if your file-based destination is configured correctly and to verify the integrity of data flows to your configured destination.

You can make requests to the testing endpoint with or without adding [sample profiles](file-based-sample-profile-generation-api.md) to the call. If you don't send any profiles on the request, the API generates a sample profile automatically and adds it to the request.

The auto-generated sample profiles contain generic data. If you want to test your destination with custom, more intuitive profile data, use the [sample profile generation API](file-based-sample-profile-generation-api.md) to generate a sample profile, then customize its response and include it in the request to the `/testing/destinationInstance` endpoint.

## Getting started {#getting-started}

Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Prerequisites {#prerequisites}

Before you can use the `/testing/destinationInstance` endpoint, make sure you meet the following conditions:

* You have an existing file-based destination created through the Destination SDK and you can see it in your [destinations catalog](../ui/destinations-workspace.md).
* You have created at least one activation flow for your destination in the Experience Platform UI.
* To successfully make the API request, you need the destination instance ID corresponding to the destination instance that you will be testing. Get the destination instance ID that you should use in the API call, from the URL, when browsing a connection with your destination in the Platform UI.

   ![UI image showing how to get destination instance ID from the URL.](assets/get-destination-instance-id.png)
* *Optional*: If you want to test your destination configuration with a sample profile added to the API call, use the [/sample-profiles](file-based-sample-profile-generation-api.md) endpoint to generate a sample profile based on your existing source schema. If you do not provide a sample profile, the API will generate one and return it in the response.

## Test your destination configuration without adding profiles to the call {#test-without-adding-profiles}

**API format**

```http
POST /authoring/testing/destinationInstance/{DESTINATION_INSTANCE_ID}
```

**Request**

```shell
curl -X POST 'https://platform.adobe.io/data/core/activation/authoring/testing/destinationInstance/{DESTINATION_INSTANCE_ID}' \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

| Path parameters | Description |
| -------- | ----------- |
| `{DESTINATION_INSTANCE_ID}` | The ID of the destination instance for which you are generating sample profiles. See the [prerequisites](#prerequisites) section for details on how to obtain this ID. |

**Response**

A successful response returns HTTP status 200 along with the response payload.

```json
{
   "activations":[
      {
         "segment":"6fa55d3a-18e1-4f65-95ed-ac8fdb03b45b",
         "flowRun":"81150d76-7909-46b6-83f4-fc855a92de07"
      },
      {
         "segment":"5fa55d3a-18e1-4f65-95ed-ac8fdb03b45b",
         "flowRun":"4706780a-2ab3-4d33-8c76-7c87fd318cd8"
      }
   ],
   "results":"/authoring/testing/destinationInstance/fd3449fb-b929-45c8-9f3d-06b9d6aac328/results?flowRunIds=4706780a-2ab3-4d33-8c76-7c87fd318cd8,81150d76-7909-46b6-83f4-fc855a92de07",
   "inputProfiles":[
      {
         "segmentMembership":{
            "ups":{
               "fea8d394-5a8c-4cea-bebc-df020ce37f5c":{
                  "lastQualificationTime":"2022-01-13T11:33:28.211895Z",
                  "status":"realized"
               },
               "5fa55d3a-18e1-4f65-95ed-ac8fdb03b45b":{
                  "lastQualificationTime":"2022-01-13T11:33:28.211893Z",
                  "status":"realized"
               }
            }
         },
         "personalEmail":{
            "address":"john.smith@abc.com"
         },
         "identityMap":{
            "crmid":[
               {
                  "id":"crmid-P1A7l"
               }
            ]
         },
         "person":{
            "name":{
               "firstName":"string",
               "lastName":"string"
            }
         }
      }
   ]
}
```

| Property | Description |
| -------- | ----------- |
| `activations` | Returns the segment ID and flow run ID for each activated segment. The number of activation entries (and associated generated files) is equal to the number of segments mapped on the destination instance. <br><br> Example: If you mapped two segments to the destination instance, the `activations` array will contain two entries. Each activated segment will correspond to one exported file.|
| `results`| Returns the destination instance ID and the flow run IDs that you can use to call the [results API](file-based-destination-results-api.md), to further test the integration.|
| `inputProfiles` | Returns the sample profiles auto-generated by the API.|

{style="table-layout:auto"}

## Test your destination configuration with profiles added to the call {#test-with-added-profiles}

To test your destination with custom, more intuitive profile data, you can customize the response obtained from the [/sample-profiles](file-based-sample-profile-generation-api.md) endpoint with values of your choice, and include the custom profile in the request to the `/testing/destinationInstance` endpoint.

**API format**

```http
POST  /testing/destinationInstance/{DESTINATION_INSTANCE_ID}
```

**Request**

```shell
curl -X POST 'https://platform.adobe.io/data/core/activation/authoring/testing/destinationInstance/{DESTINATION_INSTANCE_ID}' 
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
 {
   "profiles":[
      {
         "segmentMembership":{
            "ups":{
               "fea8d394-5a8c-4cea-bebc-df020ce37f5c":{
                  "lastQualificationTime":"2022-01-13T11:33:28.211895Z",
                  "status":"realized"
               },
               "5fa55d3a-18e1-4f65-95ed-ac8fdb03b45b":{
                  "lastQualificationTime":"2022-01-13T11:33:28.211893Z",
                  "status":"realized"
               }
            }
         },
         "personalEmail":{
            "address":"michaelsmith@example.com"
         },
         "identityMap":{
            "crmid":[
               {
                  "id":"Custom CRM ID"
               }
            ]
         },
         "person":{
            "name":{
               "firstName":"Michael",
               "lastName":"Smith"
            }
         }
      }
   ]
}'
```

| Parameter | Description |
| -------- | ----------- |
| `{DESTINATION_INSTANCE_ID}` | The destination instance ID of the destination that you are testing.  The ID of the destination instance for which you are generating sample profiles. See the [prerequisites](#prerequisites) section for details on how to obtain this ID.|
|`profiles`| Array that can include one or multiple profiles. Use the [sample profile API endpoint](file-based-sample-profile-generation-api.md) to generate profiles to use in this API call.|

**Response**

A successful response returns HTTP status 200 along with the response payload.

``` json
{
   "activations":[
      {
         "segment":"6fa55d3a-18e1-4f65-95ed-ac8fdb03b45b",
         "flowRun":"81150d76-7909-46b6-83f4-fc855a92de07"
      },
      {
         "segment":"5fa55d3a-18e1-4f65-95ed-ac8fdb03b45b",
         "flowRun":"4706780a-2ab3-4d33-8c76-7c87fd318cd8"
      }
   ],
   "results":"/authoring/testing/destinationInstance/fd3449fb-b929-45c8-9f3d-06b9d6aac328/results?flowRunIds=4706780a-2ab3-4d33-8c76-7c87fd318cd8,81150d76-7909-46b6-83f4-fc855a92de07",
   "inputProfiles":[
      {
         "segmentMembership":{
            "ups":{
               "fea8d394-5a8c-4cea-bebc-df020ce37f5c":{
                  "lastQualificationTime":"2022-01-13T11:33:28.211895Z",
                  "status":"realized"
               },
               "5fa55d3a-18e1-4f65-95ed-ac8fdb03b45b":{
                  "lastQualificationTime":"2022-01-13T11:33:28.211893Z",
                  "status":"realized"
               }
            }
         },
         "personalEmail":{
            "address":"michaelsmith@example.com"
         },
         "identityMap":{
            "crmid":[
               {
                  "id":"Custom CRM ID"
               }
            ]
         },
         "person":{
            "name":{
               "firstName":"Michael",
               "lastName":"Smith"
            }
         }
      }
   ]
}
```

| Property | Description |
| -------- | ----------- |
| `activations` | Returns the segment ID and flow run ID for each activated segment. The number of activation entries (and associated generated files) is equal to the number of segments mapped on the destination instance. <br><br> Example: If you mapped two segments to the destination instance, the `activations` array will contain two entries. Each activated segment will correspond to one exported file.|
| `results`| Returns the destination instance ID and the flow run IDs that you can use to call the [results API](file-based-destination-results-api.md), to further test the integration.|
| `inputProfiles` | Returns the custom sample profiles that you passed in the API request.|

## API error handling {#api-error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps

After reading this document, you now know how to test your file-based destination configuration.

If you have received a valid API response, your destination is working correctly. If you want to see more detailed information about your activation flow, you can use the `results` property from the response to [view detailed activation results](file-based-destination-results-api.md).

If you are building a public destination, you can now [submit your destination configuration](../destination-sdk/submit-destination.md) to Adobe for review.
