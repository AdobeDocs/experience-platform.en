---
description: Configure file formatting options for file-based destinations
title: Learn how to use Destination SDK to configure file formatting options for file-based destinations.
---
# Configure file formatting options for file-based destinations

## Overview {#overview}

Destination SDK allows you to extensively tweak the formatting and compression options of your exported files, to match any downstream requirements in your data ingestion location. 

This page describes how to use Destination SDK to configure [file formatting options](../../server-and-file-configuration.md#file-configuration) for file-based destinations.

## Prerequisites {#prerequisites}

Before advancing to the steps outlined below, please read the [Destination SDK getting started](../../getting-started.md) page for information on obtaining the necessary Adobe I/O authentication credentials and other prerequisites to work with Destination SDK APIs.

## Create a server and file configuration {#create-server-file-configuration}

Start by using the `/destination-server` endpoint to create a server and file configuration. For detailed descriptions of the parameters in the HTTP request, read the [server and file configuration specifications for file-based destinations](../../server-and-file-configuration.md#s3-example) and the associated [file formatting configurations](../../server-and-file-configuration.md#file-configuration).

Below is an example of a destination server configuration for an Amazon S3 destination, with several file 

**API format**

```http
POST platform.adobe.io/data/core/activation/authoring/destination-servers
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/core/activation/authoring/destination-server \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
{
  "name": "Amazon S3 Server with several CSV Options",
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
      "value": "{% if customerData.compression is empty %}NONE{% else %}{{customerData.compression}}{% endif %}"
    },
    "fileType": {
      "templatingStrategy": "PEBBLE_V1",
      "value": "{{customerData.fileType}}"
    },
    "csvOptions": {
      "sep": {
        "templatingStrategy": "PEBBLE_V1",
        "value": "{% if customerData.delimiter is not empty %}{{customerData.delimiter}}{% else %},{% endif %}"
      },
      "quote": {
        "templatingStrategy": "PEBBLE_V1",
        "value": "{% if customerData.quote is not empty %}{{customerData.quote}}{% else %}\\u0000{% endif %}"
      },
      "escape": {
        "templatingStrategy": "PEBBLE_V1",
        "value": "{% if customerData.escape is not empty %}{{customerData.escape}}{% else %}\\{% endif %}"
      },
      "nullValue": {
        "templatingStrategy": "PEBBLE_V1",
        "value": "{% if customerData.nullValue is not empty %}{{customerData.nullValue}}{% else %}null{% endif %}"
      },
      "emptyValue": {
        "templatingStrategy": "PEBBLE_V1",
        "value": "{% if customerData.emptyValue is not empty %}{{customerData.emptyValue}}{% else %}{% endif %}"
      }
    }
  }
}
}'
```

A successful response returns the new destination server configuration, including the unique identifier (`instanceId`) of the configuration. Store this value as it is required in the next step.

## Add the file formatting options to the destination configuration {#create-destination-configuration}

After adding the desired file formatting options to the destination server and file formatting configuration in the previous step, you must now use the `/destinations` API endpoint to add tje desired fields as customer data fields to the destination configuration.

Note that this is not mandatory. This step only determines which of the file formatting options should be surfaced to users in the Experience Platform UI.



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

## Verify the Experience Platform UI {#verify-ui}

As you configure the file formatting options, you should check the Experience Platform UI for how these are rendered.

![Screen recording showing the destinations catalog page with a selected destination card.](../../assets/destination-card.gif)

In the images and recordings below, note how the options in the [activation workflow for file-based destinations](/help/destinations/ui/activate-batch-profile-destinations.md) match the options that you selected in the destination configuration.

When filling in details about the destination, notice how the fields surfaced are the custom data fields that you set up in the configuration.


![Screen recording showing the customer data fields defined in your configuration.](../../assets/file-configuration-options.gif)

When scheduling export intervals, notice how the fields surfaced are the fields you set up in the `batchConfig` configuration.
![export scheduling options](../../assets/file-export-scheduling.png)

When viewing the filename configuration options, notice how the fields surfaced represent the `filenameConfig` options that you set up in the configuration.
![filename configuration options](../../assets/file-naming-options.gif)

## Next steps {#next-steps}

By reading this article, you now know how to set up custom file formatting options for your exported files, by using Destination SDK. Next, your team can use the [activation workflow for file-based destinations](../../../ui/activate-batch-profile-destinations.md) to export data to the destination.
