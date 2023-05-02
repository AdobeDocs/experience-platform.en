---
description: This page lists and describes all the API operations that you can perform using the `/authoring/testing/destinationInstance/` API endpoint, to test if your destination is configured correctly and to verify the integrity of data flows to your configured destination.
title: Test your streaming destination with sample profiles
exl-id: 2b54250d-ec30-4ad7-a8be-b86b14e4f074
---

# Test your streaming destination with sample profiles {#template-api-operations}

>[!IMPORTANT]
>
>**API endpoint**: `https://platform.adobe.io/data/core/activation/authoring/testing/destinationInstance/`

This page lists and describes all the API operations that you can perform using the `/authoring/testing/destinationInstance/` API endpoint, to test if your destination is configured correctly and to verify the integrity of data flows to your configured destination. For a description of the functionality supported by this endpoint, read [Test your destination configuration](streaming-destination-testing-overview.md).

You make requests to the testing endpoint with or without adding profiles to the call. If you don't send any profiles on the request, Adobe will generate those internally for you and add them to the request.

You can use the [Sample profile generation API](sample-profile-generation-api.md) to create profiles to use in requests to the destination testing API.

## How to get the destination instance ID {#get-destination-instance-id}

>[!IMPORTANT]
>
>* In order to use this API, you must have an existing connection to your destination in the Experience Platform UI. Read [connect to destination](https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/connect-destination.html?lang=en) and [activate profiles and segments to a destination](https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/activate/activate-segment-streaming-destinations.html?lang=en) for more information. After establishing the connection to your destination, get the destination instance ID that you should use in API calls to this endpoint from the URL when [browsing a connection with your destination](https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/destination-details-page.html?lang=en).
>![UI image how to get destination instance ID](../../assets/testing-api/get-destination-instance-id.png)

## Getting started with destination testing API operations {#get-started}

Before continuing, please review the [getting started guide](../../getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Test your destination configuration without adding profiles to the call {#test-without-adding-profiles}

You can test your destination configuration by making a POST request to the `authoring/testing/destinationInstance/{DESTINATION_INSTANCE_ID}` endpoint and providing the destination instance ID of the destination that you are testing.

**API format**


```http
POST authoring/testing/destinationInstance/{DESTINATION_INSTANCE_ID}
```

| Query Parameter | Description |
| -------- | ----------- |
| `{DESTINATION_INSTANCE_ID}` | The destination instance ID of the destination that you are testing. |

**Request**

The following request calls your destination's REST API endpoint. The request is configured by the `{DESTINATION_INSTANCE_ID}` query parameter.

```shell
curl --location --request POST 'https://platform.adobe.io/data/core/activation/authoring/testing/destinationInstance/49966037-32cd-4457-a105-2cbf9c01826a' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-api-key: {API_KEY}' \
--header 'Authorization: Bearer {ACCESS_TOKEN}' \
--header 'x-gw-ims-org-id: {ORG_ID}' \
--header 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful response returns HTTP status 200 along with the API response from your destination's REST API endpoint.

``` json

{
   "results":[
      {
         "aggregationKey":{
            "destinationInstanceId":"string",
            "segmentId":"string",
            "segmentStatus":"realized",
            "identityNamespaces":[
               [
                  "email",
                  "phone"
               ]
            ]
         },
         "httpCalls":[
            {
               "traceId":"a06fec2d-a886-4219-8975-4e4b7ed26539",
               "request":{
                  "body":"{ \"attributes\": [  { \"external_id\": \"external_id-h29Fq\"  , \"AdobeExperiencePlatformSegments\": { \"add\": [  \"Nirvana fans\" ,  \"RHCP fans\"   ], \"remove\": [  ] }  ,  \"key\":  \"string\"    }  ] }",
                  "headers":[
                     {
                        "Content-Type":"application/json"
                     }
                  ],
                  "method":"POST",
                  "uri":"https://api.moviestar.com/users/track"
               },
               "response":{
                  "body":"{\"status\": \"success\"}",
                  "code":"200",
                  "headers":[
                     {
                        "Connection":"keep-alive"
                     },
                     {
                        "Content-Type":"application/json"
                     },
                     {
                        "Server":"nginx"
                     },
                     {
                        "Vary":"Origin,Accept-Encoding"
                     },
                     {
                        "transfer-encoding":"chunked"
                     }
                  ]
               }
            }
         ]
      }
   ],
   "inputProfiles":[
      {
         "segmentMembership":{
            "ups":{
               "03fb9938-8537-4b4c-87f9-9c4d413a0ee5":{
                  "lastQualificationTime":"2021-06-17T12:25:12.872039Z",
                  "status":"realized"
               },
               "27e05542-d6a3-46c7-9c8e-d59d50229530":{
                  "lastQualificationTime":"2021-06-17T12:25:12.872042Z",
                  "status":"realized"
               }
            }
         },
         "personalEmail":{
            "address":"john.smith@abc.com"
         },
         "identityMap":{
            "ECID":[
               {
                  "id":"ECID-vlnt6"
               }
            ]
         },
         "person":{
            "name":{
               "firstName":"string"
            }
         }
      }
   ]
}

```

| Property | Description |
| -------- | ----------- |
| `aggregationKey` | Includes information about the aggregation policy configured for the destination. For more information, read the [Aggregation policy](../../functionality/destination-configuration/aggregation-policy.md) documentation.  |
| `traceId` | A unique identifier for the operation. When encountering errors, you can share this ID with the Adobe team for troubleshooting purposes.|
| `results.httpCalls.request` | Includes the request that was sent by Adobe to your destination.|
| `results.httpCalls.response` | Includes the response received by Adobe from your destination.|
| `inputProfiles` | Includes the profiles that were exported on the call to your destination. The profiles match your source schema.|

{style="table-layout:auto"}

## Test your destination configuration with profiles added to the call {#test-with-added-profiles}

You can test your destination configuration by making a POST request to the `authoring/testing/destinationInstance/{DESTINATION_INSTANCE_ID}` endpoint and providing the destination instance ID of the destination that you are testing.

**API format**

```http
POST authoring/testing/destinationInstance/{DESTINATION_INSTANCE_ID}
```

| Query Parameter | Description |
| -------- | ----------- |
| `{DESTINATION_INSTANCE_ID}` | The destination instance ID of the destination that you are testing. |

**Request**

The following request calls your destination's REST API endpoint. The request is configured by the parameters provided in the payload and the `{DESTINATION_INSTANCE_ID}` query parameter.

```shell

curl --location --request POST 'https://platform.adobe.io/data/core/activation/authoring/testing/destinationInstance/49966037-32cd-4457-a105-2cbf9c01826a' \
--header 'Content-Type: application/json' \
--header 'Accept: application/json' \
--header 'x-api-key: {API_KEY}' \
--header 'Authorization: Bearer {ACCESS_TOKEN}' \
--header 'x-gw-ims-org-id: {ORG_ID}' \
--header 'x-sandbox-name: {SANDBOX_NAME}' \
--data-raw '{
   "profiles":[
      {
         "segmentMembership":{
            "ups":{
               "374a9a6c-c719-4cdb-a660-155a2838e6d6":{
                  "lastQualificationTime":"2021-05-13T12:16:27.248585Z",
                  "status":"realized"
               },
               "896f8776-9498-47b4-b994-51cb3f61c2c5":{
                  "lastQualificationTime":"2021-05-13T12:16:27.248605Z",
                  "status":"realized"
               }
            }
         },
         "identityMap":{
            "ECID":[
               {
                  "id":"ECID-Z3i2t"
               }
            ],
            "external_id":[
               {
                  "id":"external_id-h29Fq"
               }
            ]
         },
         "attributes":{
            "firstName":{
               "value":"John"
            }
         }
      }
   ]
}'

```

**Response**

A successful response returns HTTP status 200 along with the API response from your destination's REST API endpoint.

``` json

{
   "results":[
      {
         "aggregationKey":{
            "destinationInstanceId":"string",
            "segmentId":"string",
            "segmentStatus":"realized",
            "identityNamespaces":[
               [
                  "email",
                  "phone"
               ]
            ]
         },
         "httpCalls":[
            {
               "traceId":"a06fec2d-a886-4219-8975-4e4b7ed26539",
               "request":{
                  "body":"{ \"attributes\": [  { \"external_id\": \"external_id-h29Fq\"  , \"AdobeExperiencePlatformSegments\": { \"add\": [  \"Nirvana fans\" ,  \"RHCP fans\"   ], \"remove\": [  ] }  ,  \"key\":  \"string\"    }  ] }",
                  "headers":[
                     {
                        "Content-Type":"application/json"
                     }
                  ],
                  "method":"POST",
                  "uri":"https://api.moviestar.com/users/track"
               },
               "response":{
                  "body":"{\"status\": \"success\"}",
                  "code":"200",
                  "headers":[
                     {
                        "Connection":"keep-alive"
                     },
                     {
                        "Content-Type":"application/json"
                     },
                     {
                        "Server":"nginx"
                     },
                     {
                        "Vary":"Origin,Accept-Encoding"
                     },
                     {
                        "transfer-encoding":"chunked"
                     }
                  ]
               }
            }
         ]
      }
   ],
   "inputProfiles":[
      {
         "segmentMembership":{
            "ups":{
               "374a9a6c-c719-4cdb-a660-155a2838e6d6":{
                  "lastQualificationTime":"2021-05-13T12:16:27.248585Z",
                  "status":"realized"
               },
               "896f8776-9498-47b4-b994-51cb3f61c2c5":{
                  "lastQualificationTime":"2021-05-13T12:16:27.248605Z",
                  "status":"realized"
               }
            }
         },
         "identityMap":{
            "ECID":[
               {
                  "id":"ECID-Z3i2t"
               }
            ],
            "external_id":[
               {
                  "id":"external_id-h29Fq"
               }
            ]
         },
         "attributes":{
            "firstName":{
               "value":"John"
            }
         }
      }
   ]
}

```

## API error handling {#api-error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps

After reading this document, you now know how to test your destination. You can now use the Adobe [self-service documentation process](../../docs-framework/documentation-instructions.md) to create a documentation page for your destination.
