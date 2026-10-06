---
description: Learn how to use Destination SDK to configure an Amazon S3 destination that exports datasets from Experience Platform.
title: Configure a dataset export destination
---
# Configure a dataset export destination

## Overview {#overview}

This page describes how to use Destination SDK to configure a destination that supports [dataset exports](../../../../catalog/datasets/overview.md). Use a dataset export destination to export raw datasets from [!DNL Experience Platform] to external storage locations for reporting, data science workflows, and many other use cases.

This guide uses [!DNL Amazon S3] as an example throughout, but the same configuration principles apply to any file-based destination type supported by Destination SDK ([!DNL Azure Blob Storage], [!DNL SFTP], [!DNL Azure Data Lake Storage Gen2], [!DNL Google Cloud Storage], and [!DNL Data Landing Zone]).

For detailed descriptions of all parameters used in this guide, see [configuration options in Destination SDK](../../functionality/configuration-options.md).

## Prerequisites {#prerequisites}

Before advancing to the steps outlined below, read the [Destination SDK getting started](../../getting-started.md) page for information on obtaining the necessary Adobe I/O authentication credentials and other prerequisites to work with Destination SDK APIs.

## Step 1: Create a server and file configuration {#create-server-file-configuration}

Start by using the `/destination-servers` endpoint to [create a server and file configuration](../../authoring-api/destination-server/create-destination-server.md).

**API format**

```http
POST platform.adobe.io/data/core/activation/authoring/destination-servers
```

**Request**

The following request creates a new destination server configuration for an [!DNL Amazon S3] destination. The `fileType` and `compression` values are templated, meaning they will be supplied by the customer at destination connection time via the `customerDataFields` you define in the next step.

```shell
curl -X POST https://platform.adobe.io/data/core/activation/authoring/destination-servers \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "name":"Amazon S3 dataset export destination server",
   "destinationServerType":"FILE_BASED_S3",
   "fileBasedS3Destination":{
      "bucket":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.bucketName}}"
      },
      "path":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.path}}"
      }
   },
   "fileConfigurations":{
      "compression":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.compression}}"
      },
      "fileType":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.fileType}}"
      },
      "csvOptions":{
         "quoteAll":{
            "templatingStrategy":"NONE",
            "value":"false"
         },
         "header":{
            "templatingStrategy":"NONE",
            "value":"true"
         },
         "ignoreLeadingWhiteSpace":{
            "templatingStrategy":"NONE",
            "value":"true"
         },
         "ignoreTrailingWhiteSpace":{
            "templatingStrategy":"NONE",
            "value":"true"
         },
         "nullValue":{
            "templatingStrategy":"NONE",
            "value":""
         },
         "dateFormat":{
            "templatingStrategy":"NONE",
            "value":"yyyy-MM-dd"
         },
         "timestampFormat":{
            "templatingStrategy":"NONE",
            "value":"yyyy-MM-dd'\''T'\'':mm:ss[.SSS][XXX]"
         }
      }
   }
}'
```

A successful response returns the new destination server configuration, including the unique identifier (`instanceId`) of the configuration. Store this value as it is required in the next step.

## Step 2: Create destination configuration {#create-destination-configuration}

After creating the destination server configuration in the previous step, use the `/destinations` API endpoint to create the destination configuration.

To connect the server configuration from [step 1](#create-server-file-configuration) to this destination configuration, replace the `destinationServerId` value in the API request below with the `instanceId` value obtained when creating your destination server in [step 1](#create-server-file-configuration).

**API format**

```http
POST platform.adobe.io/data/core/activation/authoring/destinations
```

**Request**

```shell {line-numbers="true" highlight="4-6,115-143"}
curl -X POST https://platform.adobe.io/data/core/activation/authoring/destinations \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "name":"Amazon S3 dataset export destination",
   "description":"Amazon S3 destination for exporting Experience Platform datasets.",
   "status":"TEST",
   "sources":[
      "DATASETS"
   ],
   "customerAuthenticationConfigurations":[
      {
         "authType":"S3"
      }
   ],
   "customerDataFields":[
      {
         "name":"bucketName",
         "title":"Enter the name of your Amazon S3 bucket",
         "description":"Amazon S3 bucket name",
         "type":"string",
         "isRequired":true,
         "pattern":"(?=^.{3,63}$)(?!^(\\d+\\.)+\\d+$)(^(([a-z0-9]|[a-z0-9][a-z0-9\\-]*[a-z0-9])\\.)*([a-z0-9]|[a-z0-9][a-z0-9\\-]*[a-z0-9])$)",
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"path",
         "title":"Enter the path to your S3 bucket folder",
         "description":"Enter the path to your S3 bucket folder",
         "type":"string",
         "isRequired":true,
         "pattern":"^[0-9a-zA-Z\\/\\!\\-_\\.\\*\\''\\(\\)]*((\\%SEGMENT_(NAME|ID)\\%)?\\/?)+$",
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
            "GZIP",
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
            "json",
            "parquet"
         ],
         "default":"parquet"
      }
   ],
   "uiAttributes":{
      "documentationLink":"https://www.adobe.com/go/destinations-amazon-s3-en",
      "category":"cloudStorage",
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
      "profileRequired":false,
      "segmentRequired":false,
      "identityRequired":false
   },
   "aggregation":{
      "aggregationType":"BEST_EFFORT"
   },
   "batchConfig":{
      "allowMandatoryFieldSelection":false,
      "allowDedupKeyFieldSelection":false,
      "defaultExportMode":"FIRST_FULL_THEN_INCREMENTAL",
      "allowedExportModes":[
         "DAILY_FULL_EXPORT",
         "FIRST_FULL_THEN_INCREMENTAL"
      ],
      "allowedScheduleFrequency":[],
      "defaultFrequency":"EVERY_6_HOURS",
      "defaultStartTime":"00:00",
      "filenameConfig":{
         "allowedFilenameAppendOptions":[],
         "defaultFilenameAppendOptions":[],
         "defaultFilename":""
      },
      "datasetBatchConfig":{
         "allowedFoldernameAppendOptions":[
            "DESTINATION",
            "DATASET_ID",
            "DATASET_NAME",
            "DESTINATION_INSTANCE_ID",
            "DESTINATION_INSTANCE_NAME",
            "ORGANIZATION_NAME",
            "SANDBOX_NAME",
            "DATETIME",
            "EXPORT_TIME",
            "CUSTOM_TEXT"
         ],
         "defaultFoldernameAppendOptions":[
            "DATASET_ID",
            "EXPORT_TIME"
         ],
         "allowedExportModes":[
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
         ]
      }
   },
   "maxProfileAttributes":9000,
   "maxIdentityAttributes":1000,
   "backfillHistoricalProfileData":true
}'
```

The key differences from an audience export destination configuration are highlighted above:

| Parameter | Value for dataset exports | Description |
|---|---|---|
| `sources` | `["DATASETS"]` | Marks this destination as a dataset export destination. See [Configure audience data type](../../functionality/destination-configuration/audience-data-type.md#datasets) for details. |
| `schemaConfig.profileRequired` | `false` | Datasets do not require profile mapping. |
| `schemaConfig.segmentRequired` | `false` | Datasets do not require audience selection. |
| `schemaConfig.identityRequired` | `false` | Datasets do not require identity mapping. |
| `aggregation.aggregationType` | `BEST_EFFORT` | Dataset exports use best-effort aggregation. |
| `batchConfig.datasetBatchConfig` | See above | Controls folder naming and scheduling options specific to dataset exports. See [Dataset export configuration](../../functionality/destination-configuration/batch-configuration.md#dataset-export-configuration) for full parameter details. |

A successful response returns the new destination configuration, including the unique identifier (`instanceId`) of the configuration.

## Step 3: Set up authentication {#set-up-authentication}

Depending on whether you specified `"authenticationRule": "CUSTOMER_AUTHENTICATION"` or `"authenticationRule": "PLATFORM_AUTHENTICATION"` in the destination configuration above, you can set up authentication using the `/destination` or `/credentials` endpoint.

>[!NOTE]
>
>`CUSTOMER_AUTHENTICATION` is the more common of the two authentication rules and is the one to use if you want users to provide their own storage credentials when connecting to your destination.

* If you selected `"authenticationRule": "CUSTOMER_AUTHENTICATION"`, see the following sections for the authentication types supported by Destination SDK for file-based destinations:

    * [Amazon S3 authentication](../../functionality/destination-configuration/customer-authentication.md#s3)
    * [Azure Blob](../../functionality/destination-configuration/customer-authentication.md#blob)
    * [Azure Data Lake Storage](../../functionality/destination-configuration/customer-authentication.md#adls)
    * [Google Cloud Storage](../../functionality/destination-configuration/customer-authentication.md#gcs)
    * [SFTP authentication with SSH key](../../functionality/destination-configuration/customer-authentication.md#sftp-ssh)
    * [SFTP authentication with password](../../functionality/destination-configuration/customer-authentication.md#sftp-password)

* If you selected `"authenticationRule": "PLATFORM_AUTHENTICATION"`, you must create a [credentials configuration](../../credentials-api/create-credential-configuration.md) and pass the credential object's ID in the `authenticationId` parameter in the [destination delivery](../../functionality/destination-configuration/destination-delivery.md#platform-authentication) configuration.

## Step 4: Verify the [!DNL Experience Platform] UI {#verify-ui}

Based on the configurations above, the [!DNL Experience Platform] catalog will now display a new private destination card for you to use.

When users connect to the destination and select datasets to export, they will see the scheduling and folder naming options you defined in `datasetBatchConfig`.

## Step 5: (Optional) Publish your destination {#publish-destination}

>[!NOTE]
>
>This step is not required if you are creating a private destination for your own use, and are not looking to publish it in the destinations catalog for other customers to use.

After configuring your destination, use the [destination publishing API](../../publishing-api/create-publishing-request.md) to submit your configuration to Adobe for review.

## Step 6: (Optional) Document your destination {#document-destination}

>[!NOTE]
>
>This step is not required if you are creating a private destination for your own use, and are not looking to publish it in the destinations catalog for other customers to use.

If you are an Independent Software Vendor (ISV) or System Integrator (SI) creating a [productized integration](../../overview.md#productized-custom-integrations), use the [self-service documentation process](../../docs-framework/documentation-instructions.md) to create a product documentation page for your destination in the [Experience Platform destinations catalog](../../../catalog/overview.md).

## Next steps {#next-steps}

By reading this article, you now know how to author a dataset export destination using Destination SDK. Next, your team can use the [dataset export workflow](../../../ui/export-datasets.md) to export datasets to your destination.

To learn more about what you can do with Destination SDK, read the following articles:

* [Configuration options in Destination SDK](../../functionality/configuration-options.md)
* [Configure audience data type](../../functionality/destination-configuration/audience-data-type.md)
* [Batch configuration](../../functionality/destination-configuration/batch-configuration.md)
* [Use Destination SDK to configure a file-based destination](../configure-file-based-destination-instructions.md)
