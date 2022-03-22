---
description: This page lists and describes all the API operations that you can perform using the `/authoring/testing/destinationInstance/` API endpoint, to test if your file-based destination is configured correctly and to verify the integrity of data flows to your configured destination.
title: Destination testing API operations
---
# Test file-based destination configuration with the testing API {#test-destination-configuration-api}

## Overview {#overview}

>[!IMPORTANT]
>
>**API endpoint**: `https://platform.adobe.io/data/core/activation/authoring/testing/destinationInstance/`

This page lists and describes all the API operations that you can perform using the `/authoring/testing/destinationInstance/` API endpoint, to test if your destination is configured correctly and to verify the integrity of data flows to your configured destination. For a description of the functionality supported by this endpoint, read [Test your destination configuration](./test-destination.md).

You make requests to the testing endpoint with or without adding profiles to the call. If you don't send any profiles on the request, Adobe will generate those internally for you and add them to the request.

You can use the [sample profile generation API](file-based-sample-profile-generation-api.md) to create profiles to use in requests to the destination testing API.

## How to get the destination instance ID {#get-destination-instance-id}

>[!IMPORTANT]
>
>In order to use this API, you must have an existing connection to your destination in the Experience Platform UI. Read [connect to destination](../ui/connect-destination.md) and [activate profiles and segments to a destination](../ui/activate-segment-streaming-destinations.md) for more information. After establishing the connection to your destination, get the destination instance ID that you should use in API calls to this endpoint from the URL when [browsing a connection with your destination](../ui/destination-details-page.md).
>![UI image how to get destination instance ID](./assets/get-destination-instance-id.png)

## Getting started with destination testing API operations {#get-started}

Before continuing, please review the [getting started guide](getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Test your destination configuration without adding profiles to the call {#test-without-adding-profiles}

You can test your destination configuration by making a POST request to the `authoring/testing/destinationInstance/{DESTINATION_INSTANCE_ID}` endpoint and providing the destination instance ID of the destination that you are testing.

### API format

```http
POST authoring/testing/destinationInstance/{DESTINATION_INSTANCE_ID}
```

| Query parameter | Description |
| -------- | ----------- |
| `{DESTINATION_INSTANCE_ID}` | The destination instance ID of the destination that you are testing. |

### Request

The following request calls your destination's REST API endpoint. The request is configured by the `{DESTINATION_INSTANCE_ID}` query parameter.

```shell
curl --location --request POST 'https://platform.adobe.io/data/core/activation/authoring/testing/destinationInstance/fd3449fb-b929-45c8-9f3d-06b9d6aac328' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-api-key: {API_KEY}' \
--header 'Authorization: Bearer {ACCESS_TOKEN}' \
--header 'x-gw-ims-org-id: {IMS_ORG}' \
--header 'x-sandbox-name: {SANDBOX_NAME}' \
```

### Response

A successful response returns HTTP status 200 along with the API response from your destination's REST API endpoint.

``` json
{
    "activations": [
        {
            "segment": "6fa55d3a-18e1-4f65-95ed-ac8fdb03b45b",
            "flowRun": "81150d76-7909-46b6-83f4-fc855a92de07"
        },
        {
            "segment": "5fa55d3a-18e1-4f65-95ed-ac8fdb03b45b",
            "flowRun": "4706780a-2ab3-4d33-8c76-7c87fd318cd8"
        }
    ],
    "results": "/authoring/testing/destinationInstance/fd3449fb-b929-45c8-9f3d-06b9d6aac328/results?flowRunIds=4706780a-2ab3-4d33-8c76-7c87fd318cd8,81150d76-7909-46b6-83f4-fc855a92de07",
    "inputProfiles": [
        {
            .....
        }
    ]
}
```

| Property | Description |
| -------- | ----------- |
| `activations` | The list of segment activated to the destination, and their corresponding flow run ID.|
| `inputProfiles` | Includes the profiles that were exported on the call to your destination. The profiles match your source schema.|

{style="table-layout:auto"}

## Test your destination configuration with profiles added to the call {#test-with-added-profiles}

You can test your destination configuration by making a POST request to the `authoring/testing/destinationInstance/{DESTINATION_INSTANCE_ID}` endpoint and providing the destination instance ID of the destination that you are testing.

### API format

```http
POST authoring/testing/destinationInstance/{DESTINATION_INSTANCE_ID}
```

| Query parameter | Description |
| -------- | ----------- |
| `{DESTINATION_INSTANCE_ID}` | The destination instance ID of the destination that you are testing. |

### Request

The following request calls your destination's REST API endpoint. The request is configured by the parameters provided in the payload and the `{DESTINATION_INSTANCE_ID}` query parameter.

```shell

curl --location --request POST 'https://platform.adobe.io/data/core/activation/authoring/testing/destinationInstance/fd3449fb-b929-45c8-9f3d-06b9d6aac328' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-api-key: {API_KEY}' \
--header 'Authorization: Bearer {ACCESS_TOKEN}' \
--header 'x-gw-ims-org-id: {IMS_ORG}' \
--header 'x-sandbox-name: {SANDBOX_NAME}' \
--data-raw '{
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
}'
```

### Response

A successful response returns HTTP status 200 along with the API response from your destination's REST API endpoint.

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

## API error handling {#api-error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps

After reading this document, you now know how to test your destination. You can now use the Adobe [self-service documentation process](../destination-sdk/docs-framework/documentation-instructions.md) to create a documentation page for your destination.
