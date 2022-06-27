---
description: Learn how to use Destination SDK to configure an Amazon S3 destination with custom file formatting options.
title: (Beta) Use Destination SDK to configure an Amazon S3 destination with custom file formatting options
---
# (Beta) Use Destination SDK to configure an Amazon S3 destination with custom file formatting options

## Overview {#overview}

>[!IMPORTANT]
>
>The functionality to configure file-based destinations using Adobe Experience Platform Destination SDK is currently in Beta. The documentation and functionality are subject to change.

This page describes how to use Destination SDK to configure an Amazon S3 destination with custom file formatting options. This page shows all the configuration options available for Amazon S3 destinations. You can edit the configurations in the steps below or delete certain parts of the configurations, as needed.

## Prerequisites {#prerequisites}

Before advancing to the steps outlined below, please read the [Destination SDK getting started](./getting-started.md) page for information on obtaining the necessary Adobe I/O authentication credentials and other prerequisites to work with Destination SDK APIs.

## Step 1: Create a server and file configuration {#create-server-file-configuration}

Start by using the `/destinations-server` endpoint to create a server and file configuration. For detailed descriptions of the parameters in the call, read the [server and file configuration specifications for file-based destinations](/help/destinations/destination-sdk/server-and-file-configuration.md#s3-example) and the associated [file formatting configurations](/help/destinations/destination-sdk/server-and-file-configuration.md#file-configuration).

**API format**

```http
POST platform.adobe.io/data/core/activation/authoring/destination-servers
```

```json
{
    "name": "Amazon S3 Destination server",
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
        "csvOptions": {
            "sep": {
                "templatingStrategy": "PEBBLE_V1",
                "value": "{{customerData.sep}}"
            },
            "encoding": {
                "templatingStrategy": "PEBBLE_V1",
                "value": "{{customerData.encoding}}"
            },
            "quote": {
                "templatingStrategy": "PEBBLE_V1",
                "value": "{{customerData.quote}}"
            },
            "quoteAll": {
                "templatingStrategy": "PEBBLE_V1",
                "value": "{{customerData.quoteAll}}"
            },
            "escape": {
                "templatingStrategy": "PEBBLE_V1",
                "value": "{{customerData.escape}}"
            },
            "escapeQuotes": {
                "templatingStrategy": "PEBBLE_V1",
                "value": "{{customerData.escapeQuotes}}"
            },
            "header": {
                "templatingStrategy": "PEBBLE_V1",
                "value": "{{customerData.header}}"
            },
            "ignoreLeadingWhiteSpace": {
                "templatingStrategy": "PEBBLE_V1",
                "value": "{{customerData.ignoreLeadingWhiteSpace}}"
            },
            "nullValue": {
                "templatingStrategy": "PEBBLE_V1",
                "value": "{{customerData.nullValue}}"
            },
            "dateFormat": {
                "templatingStrategy": "PEBBLE_V1",
                "value": "{{customerData.dateFormat}}"
            },
            "charToEscapeQuoteEscaping": {
                "templatingStrategy": "PEBBLE_V1",
                "value": "{{customerData.charToEscapeQuoteEscaping}}"
            },
            "emptyValue": {
                "templatingStrategy": "PEBBLE_V1",
                "value": "{{customerData.dateFormat}}"
            },
            "compression": {
                "templatingStrategy": "PEBBLE_V1",
                "value": "{{customerData.compression}}"
            },
            "fileType": {
                "templatingStrategy": "PEBBLE_V1",
                "value": "{{customerData.fileType}}"
            }
        }
    }
}
```

## Step 2: Create destination configuration {#create-destination-configuration}

After creating the destination server and file configuration in the previous step, you can now use the `/destinations` API endpoint to create a destination configuration.

To connect the server and file configuration in step 1 to this destination configuration, add the instance ID of the server and template configuration as `destinationServerId` here.

Find descriptions of the parameters below in the pages:
* [Batch destination configuration](./file-based-destination-configuration.md#batch-configuration)
* [Authentication configuration](/help/destinations/destination-sdk/authentication-configuration.md#s3)
* [File-based destination configuration API operations](/help/destinations/destination-sdk/destination-configuration-api.md#create-file-based)

**API format**

```http
POST platform.adobe.io/data/core/activation/authoring/destinations
``` 

```json

{
        "name": "S3 Destination with CSV Options",
        "description": "S3 Destination with CSV Options",
        "releaseNotes": "S3 Destination with CSV Options",
        "status": "TEST",
        "customerAuthenticationConfigurations": [
            {
                "authType": "S3"
            }
        ],
        "customerEncryptionConfigurations": [
            {
                "encryptionAlgo": ""
            }
        ],
        "customerDataFields": [
            {
                "name": "bucket",
                "title": "Select Amazon S3 Bucket",
                "description": "Select Amazon S3 Bucket",
                "type": "string",
                "isRequired": true,
                "readOnly": false,
                "hidden": false
            },
            {
                "name": "path",
                "title": "Select Amazon S3 path",
                "description": "Select Amazon S3 Bucket",
                "type": "string",
                "isRequired": true,
                "pattern": "^[A-Za-z]+$",
                "readOnly": false,
                "hidden": false
            },
            {
                "name": "sep",
                "title": "Select separator for each field and value",
                "description": "Select for each field and value",
                "type": "string",
                "isRequired": false,
                "readOnly": false,
                "hidden": false
            },
            {
                "name": "encoding",
                "title": "Specify encoding (charset) of saved CSV files",
                "description": "Select encoding of csv files",
                "type": "string",
                "enum": ["UTF-8", "UTF-16"],
                "isRequired": false,
                "readOnly": false,
                "hidden": false
            },
            {
                "name": "quote",
                "title": "Select a single character used for escaping quoted values",
                "description": "Select single character for escaping quoted values",
                "type": "string",
                "isRequired": false,
                "readOnly": false,
                "hidden": false
            },
            {
                "name": "quoteAll",
                "title": "Quote All",
                "description": "Select flag for escaping quoted values",
                "type": "string",
                "enum" : ["true","false"],
                "default": "true",
                "isRequired": true,
                "readOnly": false,
                "hidden": false
            },
             {
                "name": "escape",
                "title": "Select a single character used for escaping quotes",
                "description": "Select a single character used for escaping quotes inside an already quoted value",
                "type": "string",
                "isRequired": false,
                "readOnly": false,
                "hidden": false
            },
            {
                "name": "escapeQuotes",
                "title": "Escape quotes",
                "description": "A flag indicating whether values containing quotes should always be enclosed in quotes",
                "type": "string",
                "enum" : ["true","false"],
                "isRequired": false,
                "default": "true",
                "readOnly": false,
                "hidden": false
            },
            {
                "name": "header",
                "title": "header",
                "description": "Writes the names of columns as the first line.",
                "type": "string",
                "isRequired": false,
                "enum" : ["true","false"],
                "readOnly": false,
                "default": "true",
                "hidden": false
            },
            {
                "name": "ignoreLeadingWhiteSpace",
                "title": "Ignore leading white space",
                "description": "A flag indicating whether or not leading whitespaces from values being written should be skipped.",
                "type": "string",
                "isRequired": false,
                "enum" : ["true","false"],
                "readOnly": false,
                "default": "true",
                "hidden": false
            },
            {
                "name": "nullValue",
                "title": "Select the string representation of a null value",
                "description": "Sets the string representation of a null value. ",
                "type": "string",
                "isRequired": false,
                "readOnly": false,
                "hidden": false
            },
            {
                "name": "dateFormat",
                "title": "Date format",
                "description": "Select the string that indicates a date format. ",
                "type": "string",
                "default": "yyyy-MM-dd",
                "isRequired": false,
                "readOnly": false,
                "hidden": false
            },
             {
                "name": "charToEscapeQuoteEscaping",
                "title": "Char to escape quote escaping",
                "description": "Sets a single character used for escaping the escape for the quote character",
                "type": "string",
                "isRequired": false,
                "readOnly": false,
                "hidden": false
            },
            {
                "name": "emptyValue",
                "title": "Select the string representation of an empty value",
                "description": "Select the string representation of an empty value",
                "type": "string",
                "isRequired": false,
                "readOnly": false,
                "default": "",
                "hidden": false
            },
            {
                "name": "compression",
                "title": "Select compression",
                "description": "Select compressiont",
                "type": "string",
                "isRequired": true,
                "readOnly": false,
                "enum" : ["SNAPPY","GZIP","DEFLATE", "NONE"]
            },
            {
                "name": "fileType",
                "title": "Select a fileType",
                "description": "Select fileType",
                "type": "string",
                "isRequired": true,
                "readOnly": false,
                "hidden": false,
                "enum" :["csv", "json", "parquet"],
                "default" : "csv"
            }
        ],
        "uiAttributes": {
            "documentationLink": "https://www.adobe.io/apis/experienceplatform.html",
            "category": "S3",
            "iconUrl": "https://dc5tqsrhldvnl.cloudfront.net/2/90048/da276e30c730ce6cd666c8ca78360df21.png",
            "connectionType": "S3",
            "flowRunsSupported": true,
            "monitoringSupported": true,
            "frequency": "Batch"
        },
        "destinationDelivery": [
            {
                "deliveryMatchers" : [
                    {
                        "type" : "SOURCE",
                        "value" : [
                            "batch"
                        ]
                    }
                ],
                "authenticationRule": "CUSTOMER_AUTHENTICATION",
                "destinationServerId": "{{destinationServerId}}"
            }
        ],
        "schemaConfig" : {
            "profileRequired" : true,
            "segmentRequired" : true,
            "identityRequired" : true
        },
        "batchConfig":{
            "allowMandatoryFieldSelection": true,
            "allowJoinKeyFieldSelection": true,
            "defaultExportMode": "DAILY_FULL_EXPORT",
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
                "ONCE",
                "EVERY_HOUR"
            ],
            "defaultFrequency":"DAILY",
            "defaultStartTime":"00:00"
        },
        "backfillHistoricalProfileData": true
    }
```

## Verify the Experience Platform UI {#verify-ui}

Based on the configurations above, the Experience Platform user interface will now display a new private destination card for you to use, similar to the one in this recording:

