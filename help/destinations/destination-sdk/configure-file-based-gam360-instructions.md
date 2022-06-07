---
description: This page lists and describes the steps to configure a file-based Google Ad Manager 360 destination using Destination SDK.
title: (Beta) Use Destination SDK to configure a file-based Google Ad Manager 360 destination
---
# (Beta) Use Destination SDK to configure a file-based Google Ad Manager 360 destination

## Overview {#overview}

>[!IMPORTANT]
>
>The functionality to configure and submit file-based destinations using Adobe Experience Platform Destination SDK is currently in Beta. The documentation and functionality are subject to change.

This page describes how to use the information in [Configuration options in Destinations SDK](./configuration-options.md) and in other Destination SDK functionality and API reference documents to configure a [file-based](../../destinations/destination-types.md#file-based) Google Ad Manager 360 destination. The steps are laid out in sequential order below.

## Prerequisites {#prerequisites}

Before advancing to the steps illustrated below, please read the [Destination SDK getting started](./getting-started.md) page for information on obtaining the necessary Adobe I/O authentication credentials and other prerequisites to work with Destination SDK APIs. 

## Step 1: Create a server and file configuration {#create-server-file-configuration}

Start by creating a server and file configuration using the `/destinations-servers` endpoint (read [API reference](./destination-server-api.md)).

**API format**

```http
POST /activation/authoring/destination-servers
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/core/activation/authoring/destination-servers \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "name":"Google Ad Manager 360 Server",
   "destinationServerType":"FILE_BASED_GOOGLE_CLOUD",
   "fileBasedGoogleCloudStorageDestination":{
      "bucket":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.bucket}}"
      },
      "path":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.path}}"
      }
   },
   "fileConfigurations":{
      "compression":{
         "templatingStrategy":"NONE",
         "value":"NONE"
      },
      "fileType":{
         "templatingStrategy":"NONE",
         "value":"CSV"
      },
      "maxFileRowCount":5000000
   }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination server.|
|`destinationServerType`|String|Set this value according to your destination platform. <br><br> When configuring a Google Ad Manager 360 destination, set this to `FILE_BASED_GOOGLE_CLOUD`.|
|`fileBasedGoogleCloudStorageDestination.bucket.templatingStrategy`|String| *Required.*  Use `PEBBLE_V1`.|
|`fileBasedGoogleCloudStorageDestination.bucket.value`|String|The name of the [!DNL Google Cloud Storage] bucket to be used by this destination. The `{{customerData.bucket}}` macro will use the bucket name defined by the user in the UI.|
|`fileBasedGoogleCloudStorageDestination.path.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedGoogleCloudStorageDestination.path.value`|String|The path to the destination folder that will host the exported files. The `{{customerData.path}}` macro will use the path defined by the user in the UI.|
|`fileConfigurations.compression.templatingStrategy`|String|When configuring a [!DNL Google Ad Manager 360] destination, set this to `NONE`.|
|`fileConfigurations.compression.value`|Optional|Compression codec to use when saving data to file. <br><br> When configuring a [!DNL Google Ad Manager 360] destination, set this to `NONE`.|
|`fileConfigurations.fileType.templatingStrategy`|String|When configuring a [!DNL Google Ad Manager 360] destination, set this to `NONE`.|
|`fileType.value`|Optional|Specifies the output file format. <br><br> When configuring a [!DNL Google Ad Manager 360] destination, set this to `CSV`.|
|`maxFileRowCount`|Integer|Defines the maximum number of rows to be included in the exported files. When configuring a [!DNL Google Ad Manager 360] destination, set this to 5000000. |


## Step 2: Create an audience template {#create-audience-template}

Use the `/authoring/audience-templates` API endpoint to create an audience template for [!DNL Google Ad Manager 360] (read [API reference](audience-metadata-api.md)). The audience template configuration below is specific to [!DNL Google Ad Manager 360].

**API format**

```http
POST /authoring/audience-templates
```

**Request**
>[!IMPORTANT]
>
>When configuring a [!DNL Google Ad Manager 360] destination, perform the audience template API call exactly as shown below. None of the parameters shown below need to be changed.

```shell
curl -X POST https://platform.adobe.io/data/core/activation/authoring/audience-templates \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
   "audience":{
      "context":"Google Ads",
      "sid":"{{segment.id}}",
      "name":"{{segment.name}}",
      "description":"{{segment.description}}",
      "account":"{{customerData.accountId}}",
      "accountType":"{{customerData.accountType}}",
      "imsOrgId":"{{userContext.imsOrgId}}"
   },
   "credential":{
      "clientId":"{{authentication.oauth2RefreshTokenAuthentication.clientId}}",
      "clientSecret":"{{authentication.oauth2RefreshTokenAuthentication.clientSecret}}",
      "refreshToken":"{{authentication.oauth2RefreshTokenAuthentication.refreshToken}}",
      "clientCustomerId":"621-988-9373",
      "authType":"OAUTH2_REFRESH"
   }
}
```

## Step 3: Create destination configuration {#create-destination-configuration}

Use the `/destinations` API endpoint to create the destination configuration. For more information about this configuration, refer to [Destination configuration](./file-based-destination-configuration.md).

To connect the server and file configuration in step 1 to this destination configuration, add the instance ID of the server and template configuration as `destinationServerId` here.

**API format**

```http
POST /activation/authoring/destinations
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
  "name": "Google Ad Manager 360",
  "description": "Google Ad Manager 360 Destination",
  "releaseNotes": "",
  "status": "",
  "customerAuthenticationConfigurations": [
    {
      "authType": "GOOGLE_CLOUD_STORAGE"
    }
  ],
  "customerDataFields": [
    {
      "name": "bucket",
      "type": "string",
      "title": "Google Cloud Storage bucket",
      "description": "Enter the Google Cloud Storage bucket name",
      "isRequired": true
    },
    {
      "name": "path",
      "type": "string",
      "title": "Folder path",
      "description": "Enter the path to the folder which will host the exported files",
      "isRequired": true,
      "pattern": "^[A-Za-z]+$"
    },
    {
      "name": "accountId",
      "title": "Ad Account ID",
      "description": "Ad Account ID",
      "type": "string",
      "isRequired": true,
      "readOnly": false,
      "hidden": false,
      "pattern": "^[0-9]+$"
    },
    {
      "name": "accountType",
      "title": "Ad Account Type",
      "description": "Ad Account Type",
      "type": "string",
      "enum": [
        "DFP_BY_GOOGLE",
        "ADX_BUYER"
      ],
      "isRequired": true,
      "readOnly": false,
      "hidden": false
    }
  ],
  "uiAttributes": {
    "documentationLink": "",
    "iconUrl": null,
    "category": "advertising",
    "frequency": "Batch",
    "monitoringSupported": true,
    "flowRunsSupported": true
  },
  "destinationDelivery": [
    {
      "destinationServerId": "{YOUR_DESTINATION_SERVER_ID}",
      "authenticationRule": "CUSTOMER_AUTHENTICATION"
    }
  ],
  "segmentMappingConfig": {
    "mapUserInput": false,
    "mapExperiencePlatformSegmentId": true,
    "mapExperiencePlatformSegmentName": true,
    "audienceTemplateId": "{YOUR_AUDIENCE_TEMPLATE_ID}",
    "authenticationId": "{YOUR_GOOGLE_CREDENTIAL_ID}"
  },
  "schemaConfig": {
    "useCustomerSchemaForAttributeMapping": false,
    "identityRequired": true,
    "profileRequired": false,
    "segmentRequired": true,    
    "profileFields": [],
    "requiredMappings": [
      {
        "destination": "ppid",
        "mandatoryRequired": true,
        "primaryKeyRequired": true
      },
      {
        "sourceType": "text/plain",
        "source": "metadata.segment.alias",
        "destination": "list_id"
      },
      {
        "sourceType": "text/x.aep-xl",
        "source": "iif(${segmentMembership.ups.seg_id.status}==\"exited\", \"1\",\"0\")",
        "destination": "delete"
      }
    ] 
  },
  "batchConfig": {
    "defaultExportMode": "FIRST_FULL_THEN_INCREMENTAL",
    "allowedExportModes": [
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
    "defaultFrequency": "EVERY_3_HOURS",
    "defaultStartTime": "00:00",
    "filenameConfig": {
      "allowedFilenameAppendOptions": [
        "DESTINATION",
        "SEGMENT_ID",
        "SEGMENT_NAME",
        "DATETIME",
        "TIMESTAMP",
        "CUSTOM_TEXT",
        "DESTINATION_INSTANCE_NAME",
        "DESTINATION_INSTANCE_ID",
        "SANDBOX_NAME",
        "ORGANIZATION_NAME"
      ],
      "defaultFilenameAppendOptions": [
        "SEGMENT_ID",
        "DATETIME"
      ],
      "defaultFilename": ""
    }
  },
  "maxProfileAttributes": 1,
  "maxIdentityAttributes": 1,
  "backfillHistoricalProfileData": true
}
```

|Parameter | Type | Description|
|---------|----------|------|
|All parameters||See the [file-based destination configuration](file-based-destination-configuration.md) documentation for detailed explanation on each destination parameter specific to file-based destinations.|
|`requiredMappings`|Array|*Required*. Applies only to [Google Ad Manager 360 destinations](configure-file-based-gam360-instructions.md). This mapping configuration is required by [!DNL Google Ad Manager 360] and should not be modified.|