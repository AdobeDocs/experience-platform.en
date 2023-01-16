---
description: Learn how to use Destination SDK to configure an Amazon S3 destination with predefined file formatting options and custom file name configuration.
title: Configure an Amazon S3 destination with predefined file formatting options and custom file name configuration.
exl-id: 0ecd3575-dcda-4e5c-af5c-247d4ea13fa1
---
# Configure an [!DNL Amazon S3] destination with predefined file formatting options and custom file name configuration

## Overview {#overview}

This page describes how to use Destination SDK to configure an Amazon S3 destination with predefined, default [file formatting options](configure-file-formatting-options.md) and a custom [file name configuration](../../functionality/destination-configuration/batch-configuration.md#file-name-configuration).

This page shows all the configuration options available for [!DNL Amazon S3] destinations. You can edit the configurations shown in the steps below or delete certain parts of the configurations, as needed.

For detailed descriptions of the parameters used below, see [configuration options in Destinations SDK](../../functionality/configuration-options.md).

## Prerequisites {#prerequisites}

Before advancing to the steps outlined below, please read the [Destination SDK getting started](../../getting-started.md) page for information on obtaining the necessary Adobe I/O authentication credentials and other prerequisites to work with Destination SDK APIs.

## Step 1: Create a server and file configuration {#create-server-file-configuration}

Start by using the `/destination-server` endpoint to create a server and file configuration. For detailed descriptions of the parameters in the HTTP request, read the [server and file configuration specifications for file-based destinations](../../server-and-file-configuration.md#s3-example) and the associated [file formatting configurations](../../server-and-file-configuration.md#file-configuration).

**API format**

```http
POST platform.adobe.io/data/core/activation/authoring/destination-servers
```

**Request**

The following request creates a new destination server configuration, configured by the parameters provided in the payload.
The payload below includes a generic [!DNL Amazon S3] configuration, with predefined, default [CSV file formatting](../../server-and-file-configuration.md#file-configuration) configuration parameters that users can define in the Experience Platform UI.

```shell
curl -X POST https://platform.adobe.io/data/core/activation/authoring/destination-server \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
    "name": "Amazon S3 destination server with predefined default CSV options",
    "destinationServerType": "FILE_BASED_S3",
    "fileBasedS3Destination": {
        "bucket": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.bucket}}"
        },
        "path": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.path}}"
        }
    },
    "fileConfigurations": {
        "compression": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.compression}}"
        },
        "fileType": {
            "templatingStrategy": "PEBBLE_V1",
            "value": "{{customerData.fileType}}"
        },
        "csvOptions": {
            "quote": {
                "templatingStrategy": "NONE",
                "value": "\""
            },
            "quoteAll": {
                "templatingStrategy": "NONE",
                "value": "false"
            },
            "escape": {
                "templatingStrategy": "NONE",
                "value": "\\"
            },
            "escapeQuotes": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "header": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "ignoreLeadingWhiteSpace": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "ignoreTrailingWhiteSpace": {
                "templatingStrategy": "NONE",
                "value": "true"
            },
            "nullValue": {
                "templatingStrategy": "NONE",
                "value": ""
            },
            "dateFormat": {
                "templatingStrategy": "NONE",
                "value": "yyyy-MM-dd"
            },
            "timestampFormat": {
                "templatingStrategy": "NONE",
                "value": "yyyy-MM-dd'T':mm:ss[.SSS][XXX]"
            },
            "charToEscapeQuoteEscaping": {
                "templatingStrategy": "NONE",
                "value": "\\"
            },
            "emptyValue": {
                "templatingStrategy": "NONE",
                "value": ""
            }
        }
    }
}'
```

A successful response returns the new destination server configuration, including the unique identifier (`instanceId`) of the configuration. Store this value as it is required in the next step.

## Step 2: Create destination configuration {#create-destination-configuration}

After creating the destination server and file formatting configuration in the previous step, you can now use the `/destinations` API endpoint to create a destination configuration.

To connect the server configuration in [step 1](#create-server-file-configuration) to this destination configuration, replace the `destinationServerId` value in the API request below with the `instanceId` value obtained when creating your destination server in [step 1](#create-server-file-configuration).

**API format**

```http
POST platform.adobe.io/data/core/activation/authoring/destinations
``` 

**Request**

```shell
curl -X POST https://platform.adobe.io/data/core/activation/authoring/destinations \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "name":"Amazon S3 destination with predefined CSV formatting options",
   "description":"Amazon S3 destination with predefined CSV formatting options",
   "releaseNotes":"Amazon S3 destination with predefined CSV formatting options",
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
      "flowRunsSupported":true,
      "monitoringSupported":true,
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
         "EVERY_8_HOURS",
         "EVERY_12_HOURS",
         "ONCE"
      ],
      "defaultFrequency":"DAILY",
      "defaultStartTime":"00:00",
      "filenameConfig":{
         "allowedFilenameAppendOptions":[
            "SEGMENT_NAME",
            "DESTINATION_INSTANCE_ID",
            "DESTINATION_INSTANCE_NAME",
            "ORGANIZATION_NAME",
            "SANDBOX_NAME",
            "DATETIME",
            "CUSTOM_TEXT"
         ],
         "defaultFilenameAppendOptions":[
            "DATETIME"
         ],
         "defaultFilename":"%DESTINATION%_%SEGMENT_ID%"
      },
      "backfillHistoricalProfileData":true
   }
}'
```

A successful response returns the new destination configuration, including the unique identifier (`instanceId`) of the configuration. Store this value as it is required if you need to make further HTTP requests to update your destination configuration.

## Step 3: Verify the Experience Platform UI {#verify-ui}

Based on the configurations above, the Experience Platform catalog will now display a new private destination card for you to use.

![Screen recording showing the destinations catalog page with a selected destination card.](../../assets/destination-card.gif)

In the images and recordings below, note how the options in the [activation workflow for file-based destinations](/help/destinations/ui/activate-batch-profile-destinations.md) match the options that you selected in the destination configuration.

When filling in details about the destination, notice how the fields surfaced are the custom data fields that you set up in the configuration.

>[!TIP]
>
>The order in which you add the custom data fields to the destination configuration is not reflected in the UI. The customer data fields are always displayed in the order displayed in the screen recording below.

![Screen recording showing the customer data fields defined in your configuration.](../../assets/file-configuration-options.gif)

When scheduling export intervals, notice how the fields surfaced are the fields you set up in the `batchConfig` configuration.
![export scheduling options](../../assets/file-export-scheduling.png)

When viewing the filename configuration options, notice how the fields surfaced represent the `filenameConfig` options that you set up in the configuration.
![filename configuration options](../../assets/file-naming-options.gif)

If you want to adjust any of the fields mentioned above, repeat [steps one](#create-server-file-configuration) and [two](#create-destination-configuration) to modify the configurations according to your needs.

## Step 4: (Optional) Publish your destination {#publish-destination}

>[!NOTE]
>
>This step is not required if you are creating a private destination for your own use, and are not looking to publish it in the destinations catalog for other customers to use.

After configuring your destination, use the [destination publishing API](../../publishing-api/create-publishing-request.md) to submit your configuration to Adobe for review.

## Step 5: (Optional) Document your destination {#document-destination}

>[!NOTE]
>
>This step is not required if you are creating a private destination for your own use, and are not looking to publish it in the destinations catalog for other customers to use.

If you are an Independent Software Vendor (ISV) or System Integrator (SI) creating a [productized integration](../../overview.md#productized-custom-integrations), use the [self-service documentation process](../../docs-framework/documentation-instructions.md) to create a product documentation page for your destination in the [Experience Platform destinations catalog](../../../catalog/overview.md).

## Next steps {#next-steps}

By reading this article, you now know how to author a custom [!DNL Amazon S3] destination by using Destination SDK. Next, your team can use the [activation workflow for file-based destinations](../../../ui/activate-batch-profile-destinations.md) to export data to the destination.
