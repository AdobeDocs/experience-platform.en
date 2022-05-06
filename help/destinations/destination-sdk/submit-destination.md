---
description: This page provides all the information you need to submit for review a destination authored using Destination SDK.
title: Submit for review a destination authored in Destination SDK
exl-id: eef0d858-ebd9-426e-91a1-5c93903b0eb5
---
# Submit for review a destination authored in Destination SDK

## Overview {#overview}

Before your destination can be published to the [Experience Platform destinations catalog](/help/destinations/catalog/overview.md), you must provide Adobe with certain information about the destination and the testing you performed, to ensure that users enjoy the best possible experience when activating data to your platform.

This page lists all the information you need to provide when submitting or updating a destination you authored using Adobe Experience Platform Destination SDK. To successfully submit a destination in Adobe Experience Platform, send an email to <aepdestsdk@adobe.com> which includes:

* A description of the use cases that your destination solves. This is not required if you are updating an existing destination configuration.
* Test results after using the test destination API endpoint to perform an HTTP call to your destination. Please share with Adobe:
  * An API call made to your destination endpoint.
  * The API response received from your destination endpoint.
* Proof that you have submitted a destination publishing request for your destination using the [destination publishing API](./destination-publish-api.md).
* (For productized integrations only) a documentation PR (pull request), following the instructions described in the the [self-service documentation process](./docs-framework/documentation-instructions.md).
* An image file which will be displayed as a logo for your destination card in the Experience Platform destinations catalog.

>[!IMPORTANT]
>
>* Adobe's standard response time to review destination publish requests is five business days.
>
>* If the Adobe team asks that you make any updates to your configurations following your initial submission, you must submit another destination publish request after you make the updates.
>
>* Even after your destination is live in the Experience Platform catalog, if you need to make any updates to your configurations, you must submit a new destination publish request for the updates to be reflected in the configurations.

You can find detailed information about each item in the sections below:

## Use case description

Provide a description of the use cases that your destination solves for Experience Platform customers. Your descriptions can be similar to use cases from existing partners:

* [Pinterest](/help/destinations/catalog/advertising/pinterest.md): Create audiences from your customer lists, people who’ve visited your site or people who have already interacted with your content on Pinterest.
* [Yahoo Data X](/help/destinations/catalog/advertising/datax.md#use-cases): DataX APIs are available for advertisers that want to target a specific audience group keyed off email addresses in Verizon Media (VMG) can quickly create a new segment and push the desired audience group using VMG’s near-real-time API.

## Test results after using the test destination API

Provide test results after using the [test destination API](./test-destination.md) endpoint to perform an HTTP call to your destination. This includes:

* The complete API request (headers and body) made to your destination endpoint, using the testing API.
* The API response received from your destination endpoint.

For example, your request and response may look similar to the samples below:

**Request**

``` shell

curl --location --request POST 'https://platform.adobe.io/data/core/activation/authoring/testing/destinationInstance/3e0ac39c-ef14-4101-9fd9-cf0909814510' \
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
            "Email":[
               {
                  "id":"Email-iIyJc"
               }
            ],
            "IDFA":[
               {
                  "id":"IDFA-viPAW"
               }
            ],
            "GAID":[
               {
                  "id":"GAID-Bc6LE"
               }
            ],
            "Email_LC_SHA256":[
               {
                  "id":"Email_LC_SHA256-gEOdj"
               }
            ]
         },
         "attributes":{
            "key":{
               "value":"string"
            }
         }
      }
   ]
}'

```

**Response**

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
            "Email":[
               {
                  "id":"Email-iIyJc"
               }
            ],
            "IDFA":[
               {
                  "id":"IDFA-viPAW"
               }
            ],
            "GAID":[
               {
                  "id":"GAID-Bc6LE"
               }
            ],
            "Email_LC_SHA256":[
               {
                  "id":"Email_LC_SHA256-gEOdj"
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

## Proof that you have submitted a destination publishing request

After successfully testing your destination, you must use the [destination publishing API](./destination-publish-api.md) to submit the destination to Adobe for review and publishing.

Provide the ID of the publish request for your destination. For information on how to retrieve the publish request ID, read [List destination publish requests](./destination-publish-api.md#retrieve-list).

## Destination documentation PR (pull request) for productized integrations

If you are an Independent Software Vendor (ISV) or System Integrator (SI) creating a [productized integration](./overview.md#productized-custom-integrations), use the [self-service documentation process](./docs-framework/documentation-instructions.md) to create a product documentation page for your destination. As part of the submission process, provide the pull request (PR) for your destination documentation.

## Logo for your destination

The destinations catalog includes a logo for each destination card. In your submission email, include an image with the logo for your destination.

The image requirements are:
* **Format**: `SVG`
* **Size**: less than 2MB

## Download sample email

[Download](./assets/sample-email-submit-destination.rtf) a sample email with all the information that you need to provide to Adobe.
