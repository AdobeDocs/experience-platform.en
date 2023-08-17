---
description: Learn how to use Destination SDK to configure an Azure Blob Storage destination with custom file formatting options and custom file name configuration.
title: Configure an Azure Blob Storage destination with custom file formatting options and custom file name configuration.
exl-id: effbd218-3a7c-4986-9fba-f5727a21e480
---
# Configure an [!DNL Azure Blob Storage] destination with custom file formatting options and custom file name configuration

## Overview {#overview}

This page describes how to use Destination SDK to configure an [!DNL Azure Blob Storage] destination with custom [file formatting options](configure-file-formatting-options.md) and a custom [file name configuration](../../functionality/destination-configuration/batch-configuration.md#file-name-configuration).

This page shows all the configuration options available for Azure Blob Storage destinations. You can edit the configurations shown in the steps below or delete certain parts of the configurations, as needed.

For detailed descriptions of the parameters used below, see [configuration options in Destinations SDK](../../functionality/configuration-options.md).

## Prerequisites {#prerequisites}

Before advancing to the steps outlined below, please read the [Destination SDK getting started](../../getting-started.md) page for information on obtaining the necessary Adobe I/O authentication credentials and other prerequisites to work with Destination SDK APIs.

## Step 1: Create a server and file configuration {#create-server-file-configuration}

Start by using the `/destination-server` endpoint to [create a server and file configuration](../../authoring-api/destination-server/create-destination-server.md).

**API format**

```http
POST platform.adobe.io/data/core/activation/authoring/destination-servers
```

**Request**

The following request creates a new destination server configuration, configured by the parameters provided in the payload.
The payload below includes a generic Azure Blob configuration, with custom [CSV file formatting](../../functionality/destination-server/file-formatting.md) configuration parameters that users can define in the Experience Platform UI.

```shell
curl -X POST https://platform.adobe.io/data/core/activation/authoring/destination-server \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \ 
 -d '
{
   "name":"Azure Blob server with custom file formatting options and custom file name configuration",
   "description":"Azure Blob server with custom file formatting options and custom file name configuration",
   "destinationServerType":"FILE_BASED_AZURE_BLOB",
   "fileBasedAzureBlobDestination":{
      "path":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.path}}"
      },
      "container":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.container}}"
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
         "sep":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{{customerData.sep}}"
         },
         "encoding":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{{customerData.encoding}}"
         },
         "quote":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{{customerData.quote}}"
         },
         "quoteAll":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{{customerData.quoteAll}}"
         },
         "escape":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{{customerData.escape}}"
         },
         "escapeQuotes":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{{customerData.escapeQuotes}}"
         },
         "header":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{{customerData.header}}"
         },
         "ignoreLeadingWhiteSpace":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{{customerData.ignoreLeadingWhiteSpace}}"
         },
         "nullValue":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{{customerData.nullValue}}"
         },
         "dateFormat":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{{customerData.dateFormat}}"
         },
         "charToEscapeQuoteEscaping":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{{customerData.charToEscapeQuoteEscaping}}"
         },
         "emptyValue":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{{customerData.dateFormat}}"
         }
      }
   }
}'
```

A successful response returns the new destination server configuration, including the unique identifier (`instanceId`) of the configuration. Store this value as it is required in the next step.

## Step 2: Create destination configuration {#create-destination-configuration}

After creating the destination server and file formatting configuration in the previous step, you can now use the `/destinations` API endpoint to create a destination configuration.

To connect the server configuration in [step 1](#create-server-file-configuration) to this destination configuration, replace the `destinationServerId` value in the API request below with the value obtained when creating your destination server in [step 1](#create-server-file-configuration).

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
 -d ' {
   "name":"Azure Blob Storage destination with custom file formatting options and custom file name configuration",
   "description":"Azure Blob Storage destination with custom file formatting options and custom file name configuration",
   "status":"TEST",
   "customerAuthenticationConfigurations":[
      {
         "authType":"AZURE_CONNECTION_STRING"
      }
   ],
   "customerDataFields":[
      {
         "name":"path",
         "title":"Folder path",
         "description":"Enter your Azure Blob folder path",
         "type":"string",
         "isRequired":true,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"container",
         "title":"Azure Blob container name",
         "description":"Enter your Azure Blob container name",
         "type":"string",
         "isRequired":true,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"sep",
         "title":"Enter your desired separator for each field and value",
         "description":"Enter your desired separator for each field and value",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"encoding",
         "title":"Select the desired CSV file encoding",
         "description":"Select the desired CSV file encoding",
         "type":"string",
         "enum":[
            "UTF-8",
            "UTF-16"
         ],
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"quote",
         "title":"Quoted values escape character",
         "description":"Enter the desired character to be used for escaping quoted values.",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"quoteAll",
         "title":"Escape all quoted values",
         "description":"Select whether to escape all quoted values.",
         "type":"string",
         "enum":[
            "true",
            "false"
         ],
         "default":"true",
         "isRequired":true,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"escape",
         "title":"Quote escaping character",
         "description":"Enter the desired character to be used for escaping quotes inside an already quoted value.",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"escapeQuotes",
         "title":"Enclose quoted values within quotes",
         "description":"Select whether values containing quotes should always be enclosed in quotes.",
         "type":"string",
         "enum":[
            "true",
            "false"
         ],
         "isRequired":false,
         "default":"true",
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"header",
         "title":"Generate file header.",
         "description":"Select whether to write the names of columns as the first line of the exported files.",
         "type":"string",
         "isRequired":false,
         "enum":[
            "true",
            "false"
         ],
         "readOnly":false,
         "default":"true",
         "hidden":false
      },
      {
         "name":"ignoreLeadingWhiteSpace",
         "title":"Ignore leading white space",
         "description":"Select whether leading whitespaces should be trimmed from exported values.",
         "type":"string",
         "isRequired":false,
         "enum":[
            "true",
            "false"
         ],
         "readOnly":false,
         "default":"true",
         "hidden":false
      },
      {
         "name":"nullValue",
         "title":"NULL value string format",
         "description":"Enter the string representation of a NULL value. ",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"dateFormat",
         "title":"Date format",
         "description":"Enter the desired date format. ",
         "type":"string",
         "default":"yyyy-MM-dd",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"charToEscapeQuoteEscaping",
         "title":"Quote escaping escape character",
         "description":"Enter the desired character to be used for escaping the escaping of a quote character.",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "hidden":false
      },
      {
         "name":"emptyValue",
         "title":"Empty value string format",
         "description":"Enter the string representation of an empty value.",
         "type":"string",
         "isRequired":false,
         "readOnly":false,
         "default":"",
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
      "documentationLink":"https://www.adobe.com/go/destinations-blob-connection-parameters-en",
      "category":"cloudStorage",
      "connectionType":"Azure Blob",
      "frequency":"Batch",
      "flowRunsSupported":true,
      "monitoringSupported":true
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
         "destinationServerId":"{{instanceID of your destination server}}"
      }
   ],
   "schemaConfig":{
      "profileRequired":true,
      "segmentRequired":true,
      "identityRequired":true
   },
   "batchConfig":{
      "allowMandatoryFieldSelection":true,
      "allowJoinKeyFieldSelection":true,
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
         "ONCE",
         "EVERY_HOUR"
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

![Screen recording showing the destinations catalog page with a selected destination card.](../../assets/guides/batch/blob-destination-card.gif)

In the images and recordings below, note how the options in the [activation workflow for file-based destinations](/help/destinations/ui/activate-batch-profile-destinations.md) match the options that you selected in the destination configuration.

When filling in details about the destination, notice how the fields surfaced are the custom data fields that you set up in the configuration.

>[!TIP]
>
>The order in which you add the custom data fields to the destination configuration is not reflected in the UI. The custom data fields are always displayed in the order displayed in the screen recording below.

![fill in destination details](../../assets/guides/batch/file-configuration-options.gif)

When scheduling export intervals, notice how the fields surfaced are the fields you set up in the `batchConfig` configuration.
![export scheduling options](../../assets/guides/batch/file-export-scheduling.png)

When viewing the filename configuration options, notice how the fields surfaced represent the `filenameConfig` options that you set up in the configuration.
![filename configuration options](../../assets/guides/batch/file-naming-options.gif)

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

By reading this article, you now know how to author a custom [!DNL Azure Blob Storage] destination by using Destination SDK. Next, your team can use the [activation workflow for file-based destinations](../../../ui/activate-batch-profile-destinations.md) to export data to the destination.
