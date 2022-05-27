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

```json
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

## Step 2: Create an audience template {#create-audience-template}

Use the `/authoring/audience-templates` API endpoint to create an audience template for [!DNL Google Ad Manager 360].

**API format**

```http
POST /authoring/audience-templates
```

```json
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

```json
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
      "destinationServerId": "<~server-id~>",
      "authenticationRule": "CUSTOMER_AUTHENTICATION"
    }
  ],
  "segmentMappingConfig": {
    "mapUserInput": false,
    "mapExperiencePlatformSegmentId": true,
    "mapExperiencePlatformSegmentName": true,
    "audienceTemplateId": "<~audience-template-id~>",
    "authenticationId": "YOUR_GOOGLE_CREDENTIAL_ID"
  },
  "schemaConfig": {
    "useCustomerSchemaForAttributeMapping": false,
    "identityRequired": true,
    "profileRequired": false,
    "segmentRequired": true,    
    "profileFields": [],
    "requiredMappings": [
      {
        "destination": "ppid"
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
      "ONCE",
      "EVERY_HOUR"
    ],
    "defaultFrequency": "EVERY_3_HOURS",
    "defaultStartTime": "00:00",
    "filenameConfig": {
      "allowedFilenameAppendOptions": [
        "DESTINATION_NAME",
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
        "DESTINATION_INSTANCE_ID",
        "SEGMENT_ID"
      ],
      "defaultFilename": "%ORGANIZATION_NAME%_%SEGMENT_ID%_%SANDBOX_NAME%"
    }
  },
  "maxProfileAttributes": 1,
  "maxIdentityAttributes": 1,
  "backfillHistoricalProfileData": true
}
```

## Step 4: Publish your destination {#publish-destination}

After configuring and testing your destination, use the [destination publishing API](./destination-publish-api.md) to submit your configuration to Adobe for review.

## Step 5: Document your destination {#document-destination}

If you are an Independent Software Vendor (ISV) or System Integrator (SI) creating a [productized integration](./overview.md#productized-custom-integrations), use the [self-service documentation process](./docs-framework/documentation-instructions.md) to create a product documentation page for your destination in the [Experience Platform destinations catalog](/help/destinations/catalog/overview.md).
