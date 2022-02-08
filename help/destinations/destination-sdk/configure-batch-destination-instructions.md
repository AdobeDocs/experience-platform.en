---
description: This page lists and describes the steps to configure a file-based destination using Destination SDK.
title: (Beta) Use Destination SDK to configure a file-based destination
exl-id: d8aa7353-ba55-4a0d-81c4-ea2762387638
---
# (Beta) Use Destination SDK to configure a file-based destination

## Overview {#overview}

>[!IMPORTANT]
>
>The functionality to configure and submit file-based destinations using Adobe Experience Platform Destination SDK is currently in Beta. The documentation and functionality are subject to change.

This page describes how to use the information in [Configuration options in Destinations SDK](./configuration-options.md) and in other Destination SDK functionality and API reference documents to configure a [file-based destination](../../destinations/destination-types.md#file-based). The steps are laid out in sequential order below.

## Prerequisites {#prerequisites}

Before advancing to the steps illustrated below, please read the [Destination SDK getting started](./getting-started.md) page for information on obtaining the necessary Adobe I/O authentication credentials and other prerequisites to work with Destination SDK APIs.

## Steps to use the configuration options in Destination SDK to set up your destination {#steps}

![Illustrated steps of using Destination SDK endpoints](./assets/destination-sdk-steps.png)

## Step 1: Create a server and file configuration {#create-server-file-configuration}

Start by creating a server and file configuration using the `/destinations-server` endpoint (read [API reference](./destination-server-api.md)).

Shown below is an example configuration for an [!DNL Amazon S3] destination. To configure other types of file-based destinations, see their corresponding [server configurations](server-and-file-configuration.md).

**API format**

```http
POST platform.adobe.io/data/core/activation/authoring/destination-servers
```

```json
{
    "name": "S3 destination",
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
            },
            "lineSep": {
                "templatingStrategy": "NONE",
                "value": "\n"
            }
        }
    },
    "qos": {
        "name": "freeform"
    }
}
```

## Step 2: Create destination configuration {#create-destination-configuration}

Shown below is an example of a destination configuration, created by using the `/destinations` API endpoint. For more information about this template, refer to [Destination configuration](./destination-configuration.md).

To connect the server and file configuration in step 1 to this destination configuration, add the instance ID of the server and template configuration as `destinationServerId` here.

**API format**

```http
POST platform.adobe.io/data/core/activation/authoring/destinations
``` 

<!--

This example needs to be fully reviewed and updated for batch.

Q: Does aggregation apply to batch?
A: Confirm with Justin

-->


```json

{
    "name": "Amazon S3 destination",
    "description": "Amazon S3 destination is a fictional destination, used for this example.",
    "releaseNotes": "Test",
    "status": "Test",
    "customerAuthenticationConfigurations": [
        {
            "authType": "S3"
        }
    ],
    "customerEncryptionConfigurations": [],
    "customerDataFields": [
        {
            "name": "bucket",
            "title": "Amazon S3 bucket name",
            "description": "Enter the Amazon S3 Bucket name that will host the exported files.",
            "type": "string",
            "isRequired": true,
            "readOnly": false,
            "hidden": false
        },
        {
            "name": "path",
            "title": "Amazon S3 path",
            "description": "Enter Amazon S3 folder path",
            "type": "string",
            "isRequired": true,
            "pattern": "^[A-Za-z]+$",
            "readOnly": false,
            "hidden": false
        },
        {
            "name": "compression",
            "title": "Select compression type",
            "description": "Select the file compression type used by the exported files.",
            "type": "string",
            "isRequired": true,
            "readOnly": false,
            "enum": [
                "GZIP",
                "NONE",
                "bzip2",
                "lz4",
                "snappy",
                "deflate"
            ]
        },
        {
            "name": "fileType",
            "title": "Select a file format",
            "description": "Select the file format to be used by the exported files.",
            "type": "string",
            "isRequired": true,
            "readOnly": false,
            "hidden": false,
            "enum": [
                "csv",
                "json",
                "parquet"
            ],
            "default": "csv"
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
            "deliveryMatchers": [
                {
                    "type": "SOURCE",
                    "value": [
                        "batch"
                    ]
                }
            ],
            "authenticationRule": "CUSTOMER_AUTHENTICATION",
            "destinationServerId": "eec25bde-4f56-4c02-a830-9aa9ec73ee9d"
        }
    ],
    "schemaConfig": {
        "profileRequired": true,
        "segmentRequired": true,
        "identityRequired": true
    },
    "batchConfig": {
        "allowMandatoryFieldSelection": true,
        "allowDedupeKeyFieldSelection": true,
        "defaultExportMode": "DAILY_FULL_EXPORT",
        "allowedExportMode": [
            "DAILY_FULL_EXPORT",
            "FIRST_FULL_THEN_INCREMENTAL"
        ],
        "allowedScheduleFrequency": [
            "DAILY",
            "EVERY_3_HOURS",
            "EVERY_6_HOURS",
            "EVERY_8_HOURS",
            "EVERY_12_HOURS",
            "ONCE"
        ],
        "defaultFrequency": "DAILY",
        "defaultStartTime": "00:00"
    },
    "backfillHistoricalProfileData": true
}
```

## Step 3: Create message transformation template - use templating language to specify the message output format {#create-transformation-template}

<!-- 

Do we have any new documentation on templating within the Batch Destination SDK context? How does templating work for Batch Destination SDK? Asking to make sure if we should link to the same pages we use for streaming templating.

To validate Monday

-->

Based on the payloads that your destination supports, you must create a template that transforms the format of the exported data from Adobe XDM format into a format supported by your destination. See template examples in the section [Using a templating language for the identity, attributes, and segment membership transformations](./message-format.md#using-templating) and use the [template authoring tool](./create-template.md) provided by Adobe.

Once you have crafted a message transformation template that works for you, add it to the server and template configuration you created in step 1.

## Step 4: Create audience metadata configuration {#create-audience-metadata-configuration}


<!-- 

In a streaming context, the audience metadata configuration was only required for some destinations. Is this the same for batch Destination SDK?

We are starting the paragraph with "For some destinations, Destination SDK requires that you configure an audience metadata configuration to programmatically create, update, or delete audiences in your destination.". Is this statement valid in a Batch Destination SDK context as well?

-->

For some destinations, Destination SDK requires that you configure an audience metadata configuration to programmatically create, update, or delete audiences in your destination. Refer to [Audience metadata management](./audience-metadata-management.md) for information on when you need to set up this configuration and how to do it.

If you use an audience metadata configuration, you must connect it to the destination configuration you created in step 2. Add the instance ID of your audience metadata configuration to your destination configuration as `audienceTemplateId`.

## Step 5: Create credentials configuration / Set up authentication {#set-up-authentication}

Depending on whether you specify `"authenticationRule": "CUSTOMER_AUTHENTICATION"` or `"authenticationRule": "PLATFORM_AUTHENTICATION"` in the destination configuration above, you can set up authentication for your destination by using the `/destination` or the `/credentials` endpoint.

* If you selected `"authenticationRule": "CUSTOMER_AUTHENTICATION"` in the destination configuration, see the following sections for the authentication types supported by Destination SDK:
   * [OAuth 2 authentication](./oauth2-authentication.md)
   * [Amazon S3 authentication](authentication-configuration.md#s3)
   * [Azure connection string (beta)](authentication-configuration.md#blob)
   * [Azure service principal (beta)](authentication-configuration.md#adls)
   * [SFTP authentication with SSH key](authentication-configuration.md#sftp-ssh)
   * [SFTP authentication with password](authentication-configuration.md#sftp-password)

* If you selected `"authenticationRule": "PLATFORM_AUTHENTICATION"`, refer to the [Authentication configuration](./authentication-configuration.md#when-to-use).


<!-- ## Step 6: Test your destination {#test-destination}

After setting up your destination using the configuration endpoints in the previous steps, you can use the [destination testing tool](./create-template.md) to test the integration between Adobe Experience Platform and your destination.

As part of the process to test your destination, you must use the Experience Platform UI to create segments, which you will activate to your destination. Refer to the two resources below for instructions how to create segments in Experience Platform:

* [Create a segment documentation page](https://experienceleague.adobe.com/docs/experience-platform/segmentation/ui/overview.html?lang=en#create-segment)
* [Create a segment video walkthrough](https://experienceleague.adobe.com/docs/platform-learn/tutorials/segments/create-segments.html?lang=en) -->

## Step 6: Publish your destination {#publish-destination}

After configuring and testing your destination, use the [destination publishing API](./destination-publish-api.md) to submit your configuration to Adobe for review.

## Step 7: Document your destination {#document-destination}

If you are an Independent Software Vendor (ISV) or System Integrator (SI) creating a [productized integration](./overview.md#productized-custom-integrations), use the [self-service documentation process](./docs-framework/documentation-instructions.md) to create a product documentation page for your destination in the [Experience Platform destinations catalog](/help/destinations/catalog/overview.md).
