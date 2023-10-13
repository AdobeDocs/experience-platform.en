---
description: This page exemplifies the API call used to update an existing destination configuration through Adobe Experience Platform Destination SDK.
title: Update a destination configuration
exl-id: d7f18689-9806-4f73-a63a-fa112569819c
---
# Update a destination configuration

This page exemplifies the API request and payload that you can use to update an existing destination configuration, using the `/authoring/destinations` API endpoint.

>[!TIP]
>
>Any update operation on productized/public destinations is visible only after you use the [publishing API](../../publishing-api/create-publishing-request.md) and submit the update for Adobe review.

For a detailed description of the capabilities of a destination configuration, read the following articles:

* [Customer authentication configuration](../../functionality/destination-configuration/customer-authentication.md)
* [OAuth2 authentication](../../functionality/destination-configuration/oauth2-authentication.md)
* [Customer data fields](../../functionality/destination-configuration/customer-data-fields.md)
* [UI attributes](../../functionality/destination-configuration/ui-attributes.md)
* [Schema configuration](../../functionality/destination-configuration/schema-configuration.md)
* [Identity namespace configuration](../../functionality/destination-configuration/identity-namespace-configuration.md)
* [Destination delivery](../../functionality/destination-configuration/destination-delivery.md)
* [Audience metadata configuration](../../functionality/destination-configuration/audience-metadata-configuration.md)
* [Audience metadata configuration](../../functionality/destination-configuration/audience-metadata-configuration.md)
* [Aggregation policy](../../functionality/destination-configuration/aggregation-policy.md)
* [Batch configuration](../../functionality/destination-configuration/batch-configuration.md)
* [Historical profile qualifications](../../functionality/destination-configuration/historical-profile-qualifications.md)

>[!IMPORTANT]
>
>All parameter names and values supported by Destination SDK are **case sensitive**. To avoid case sensitivity errors, please use the parameters names and values exactly as shown in the documentation.

## Getting started with destination configuration API operations {#get-started}

Before continuing, please review the [getting started guide](../../getting-started.md) for important information that you need to know in order to successfully make calls to the API, including how to obtain the required destination authoring permission and required headers.

## Update a destination configuration {#update}

You can update an [existing](create-destination-configuration.md) destination configuration by making a `PUT` request to the `/authoring/destinations` endpoint with the updated payload.

>[!TIP]
>
>API endpoint: `platform.adobe.io/data/core/activation/authoring/destinations`

To obtain an existing destination configuration and its corresponding `{INSTANCE_ID}`, see the article about [retrieving a destination configuration](retrieve-destination-configuration.md).

**API format**

```http
PUT /authoring/destinations/{INSTANCE_ID}
```

| Parameter | Description |
| -------- | ----------- |
| `{INSTANCE_ID}` | The ID of the destination configuration that you want to update. To obtain an existing destination configuration and its corresponding `{INSTANCE_ID}`, see [Retrieve a destination configuration](retrieve-destination-configuration.md).|

+++Request

The following request updates the destination we created in [this example](create-destination-configuration.md#create) with different `filenameConfig` options.

```shell {line-numbers="true" highlight="115-128"}
curl -X POST https://platform.adobe.io/data/core/activation/authoring/destinations/{INSTANCE_ID} \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "name":"Amazon S3 destination with predefined CSV formatting options",
   "description":"Amazon S3 destination with predefined CSV formatting options",
   "status":"TEST",
   "customerAuthenticationConfigurations":[
      {
         "authType":"S3"
      }
   ],
   "customerEncryptionConfigurations":[
       
   ],
   "customerDataFields":[
      {
         "name":"bucket",
         "title":"Enter the name of your Amazon S3 bucket",
         "description":"Amazon S3 bucket name",
         "type":"string",
         "isRequired":true,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"path",
         "title":"Enter the path to your S3 bucket folder",
         "description":"Enter the path to your S3 bucket folder",
         "type":"string",
         "isRequired":true,
         "pattern":"^[A-Za-z]+$",
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"compression",
         "title":"Compression format",
         "description":"Select the desired file compression format.",
         "type":"string",
         "isRequired":true,
         "readOnly":false,
         "enum":[
            "SNAPPY",
            "GZIP",
            "DEFLATE",
            "NONE"
         ]
      },
      {
         "name":"fileType",
         "title":"File type",
         "description":"Select the exported file type.",
         "type":"string",
         "isRequired":true,
         "readOnly":false,
         "hidden":false,
         "enum":[
            "csv",
            "json",
            "parquet"
         ],
         "default":"csv"
      }
   ],
   "uiAttributes":{
      "documentationLink":"https://www.adobe.com/go/destinations-amazon-s3-en",
      "category":"cloudStorage",
      "icon":{
         "key":"amazonS3"
      },
      "connectionType":"S3",
      "frequency":"Batch"
   },
   "destinationDelivery":[
      {
         "deliveryMatchers":[
            {
               "type":"SOURCE",
               "value":[
                  "batch"
               ]
            }
         ],
         "authenticationRule":"CUSTOMER_AUTHENTICATION",
         "destinationServerId":"{{destinationServerId}}"
      }
   ],
   "schemaConfig":{
      "profileRequired":true,
      "segmentRequired":true,
      "identityRequired":true
   },
   "batchConfig":{
      "allowMandatoryFieldSelection":true,
      "allowDedupeKeyFieldSelection":true,
      "defaultExportMode":"DAILY_FULL_EXPORT",
      "allowedExportMode":[
         "DAILY_FULL_EXPORT",
         "FIRST_FULL_THEN_INCREMENTAL"
      ],
      "allowedScheduleFrequency":[
         "DAILY",
         "EVERY_3_HOURS",
         "EVERY_6_HOURS",
         "ONCE"
      ],
      "defaultFrequency":"DAILY",
      "defaultStartTime":"00:00",
      "filenameConfig":{
         "allowedFilenameAppendOptions":[
            "SEGMENT_NAME",
            "DESTINATION_INSTANCE_NAME",
            "ORGANIZATION_NAME",
            "SANDBOX_NAME",
            "DATETIME",
            "CUSTOM_TEXT"
         ],
         "defaultFilenameAppendOptions":[
            "DATETIME"
         ],
         "defaultFilename":"%DESTINATION%_%SEGMENT_ID%_%DESTINATION_INSTANCE_ID%,"
      },
      "backfillHistoricalProfileData":true
   }
}'
```

+++

+++Response

A successful response returns HTTP status 200 with the details of your updated destination configuration.

+++

## API error handling {#error-handling}

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](../../../../landing/troubleshooting.md#api-status-codes) and [request header errors](../../../../landing/troubleshooting.md#request-header-errors) in the Platform troubleshooting guide.

## Next steps

After reading this document, you now know how to update a destination configuration through the Destination SDK `/authoring/destinations` API endpoint.

To learn more about what you can do with this endpoint, see the following articles:

* [Create a destination configuration](create-destination-configuration.md)
* [Retrieve a destination configuration](retrieve-destination-configuration.md)
* [Delete a destination configuration](delete-destination-configuration.md)
