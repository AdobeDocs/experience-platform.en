---
description: The server and file configuration specs for file-based destinations can be configured in Adobe Experience Platform Destination SDK via the /destination-servers endpoint.
title: (Beta) Configuration options for file-based destination server specs
exl-id: 56434e36-0458-45d9-961d-f6505de998f7
---
# (Beta) Server and file configuration for file-based destination server specs

## Overview {#overview}

>[!IMPORTANT]
>
>The functionality to configure and submit file-based destinations using Adobe Experience Platform Destination SDK is currently in Beta. The documentation and functionality are subject to change.

This page details all server configuration options for your file-based destination servers and instructs you how to set up various file configuration options for users exporting files from Experience Platform to your destination.

The server and file configuration specs for file-based destinations can be configured in Adobe Experience Platform Destination SDK via the `/destination-servers` endpoint. Read [Destination server API endpoint operations](./destination-server-api.md) for a complete list of operations you can perform on the endpoint.

## File-based Amazon S3 destination server spec {#s3-example}

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
       // see File-based destinations file configuration
    }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL Amazon S3], set this to `FILE_BASED_S3`.|
|`fileBasedS3Destination.bucket.templatingStrategy`| String|*Required.* Use `PEBBLE_V1`.|
|`fileBasedS3Destination.bucket.value`|String|The name of the [!DNL Amazon S3] bucket to be used by this destination.|
|`fileBasedS3Destination.path.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedS3Destination.path.value`|String|The path to the destination folder that will host the exported files.|

## File-based SFTP destination server spec {#sftp-example}

```json
{
   "name":"File-based SFTP destination server",
   "destinationServerType":"FILE_BASED_SFTP",
   "fileBasedSftpDestination":{
      "rootDirectory":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.rootDirectory}}"
      },
      "hostName":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.hostName}}"
      },
      "port": 22,
      "encryptionMode" : "PGP"
   },
    "fileConfigurations": {
       // see File-based destinations file configuration
    }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL SFTP] destinations, set this to `FILE_BASED_SFTP`.|
|`fileBasedSftpDestination.rootDirectory.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedSftpDestination.rootDirectory.value`|String|The root directory of the destination storage.|
|`fileBasedSftpDestination.hostName.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedSftpDestination.hostName.value`|String|The host name of the destination storage.|
|`port`|Integer|The SFTP file server port.|
|`encryptionMode`|String|Indicates whether to use file encryption. Supported values: <ul><li>PGP</li><li>None</li></ul>|

## File-based [!DNL Azure Data Lake Storage] ([!DNL ADLS]) destination server spec {#adls-example}

```json
{
   "name":"ADLS destination server",
   "destinationServerType":"FILE_BASED_ADLS_GEN2",
   "fileBasedAdlsGen2Destination":{
      "path":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.path}}"
      }
   },
  "fileConfigurations": {
       // see File-based destinations file configuration
    }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL Azure Data Lake Storage] destinations, set this to `FILE_BASED_ADLS_GEN2`.|
|`fileBasedAdlsGen2Destination.path.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedAdlsGen2Destination.path.value`|String|The path to the destination folder that will host the exported files.|

## File-based [!DNL Azure Blob Storage] destination server spec {#blob-example}

```json
{
   "name":"Blob destination server",
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
  "fileConfigurations": {
       // see File-based destinations file configuration
    }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL Azure Blob Storage] destinations, set this to `FILE_BASED_AZURE_BLOB`.|
|`fileBasedAzureBlobDestination.path.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedAzureBlobDestination.path.value`|String|The path to the destination folder that will host the exported files.|
|`fileBasedAzureBlobDestination.container.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedAzureBlobDestination.container.value`|String|The name of the [!DNL Azure Blob Storage] container to be used by this destination.|

## File-based [!DNL Data Landing Zone] ([!DNL DLZ]) destination server spec {#dlz-example}

```json
{
   "name":"DLZ destination server",
   "destinationServerType":"FILE_BASED_DLZ",
   "fileBasedDlzDestination":{
      "path":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.path}}"
      },
      "useCase": "Your use case"
   },
   "fileConfigurations": {
       // see File-based destinations file configuration
    }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL Data Landing Zone] destinations, set this to `FILE_BASED_DLZ`.|
|`fileBasedDlzDestination.path.templatingStrategy`|String| *Required.*  Use `PEBBLE_V1`.|
|`fileBasedDlzDestination.path.value`|String|The path to the destination folder that will host the exported files.|

## File-based [!DNL Google Cloud Storage] destination server spec {#gcs-example}

```json
{
   "name":"Google Cloud Storage Server",
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
      // see File-based destinations file configuration
   }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL Google Cloud Storage] destinations, set this to `FILE_BASED_GOOGLE_CLOUD`.|
|`fileBasedGoogleCloudStorageDestination.bucket.templatingStrategy`|String| *Required.*  Use `PEBBLE_V1`.|
|`fileBasedGoogleCloudStorageDestination.bucket.value`|String|The name of the [!DNL Google Cloud Storage] bucket to be used by this destination.|
|`fileBasedGoogleCloudStorageDestination.path.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedGoogleCloudStorageDestination.path.value`|String|The path to the destination folder that will host the exported files.|

## File-based destinations file name configuration {#file-name-configuration}

You can use file name configuration macros to define what the exported file names should include. The macros in the table below describe elements found in the UI in the [file name configuration](../ui/activate-batch-profile-destinations.md#file-names) screen.

```json
"filenameConfig":{
   "allowedFilenameAppendOptions":[
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
   "defaultFilenameAppendOptions":[
      "SEGMENT_ID",
      "DATETIME"
   ],
   "defaultFilename":""
}
```

As a best practice, you should always include the `SEGMENT_ID` macro in your exported file names. Segment IDs are unique, so including them in the file name is the best way to ensure that file names are unique as well.

|Macro|UI label|Description|Example|
|---|---|---|---|
|`DESTINATION`|[!UICONTROL Destination]|Destination name in the UI.|Amazon S3|
|`DESTINATION_INSTANCE_NAME`|[!UICONTROL Destination Name]|User-defined name of the destination instance.|My 2022 Advertising Destination|
|`DESTINATION_INSTANCE_ID`|[!UICONTROL Destination ID]|Unique, Platform-generated ID of the destination instance|7b891e5f-025a-4f0d-9e73-1919e71da3b0|
|`SEGMENT_NAME`|[!UICONTROL Segment Name]|User-defined segment name|VIP subscriber|
|`SEGMENT_ID`|[!UICONTROL Segment ID]|Unique, Platform-generated segment ID|ce5c5482-2813-4a80-99bc-57113f6acde2|
|`DATETIME`|[!UICONTROL Date and time]|Date and time when the file was generated, in the following format: YYYYMMDD_HHMMSS.|20220509_210543|
|`TIMESTAMP`|[!UICONTROL Date and time]|10-digit timestamp of the time when the file was generated, in Unix format.|1652131584|
|`CUSTOM_TEXT`|[!UICONTROL Custom text]|User-defined custom text to be included in the file name.|My_Custom_Text|
|`SANDBOX_NAME`|[!UICONTROL Sandbox Name]|Name of the sandbox used by the customer.|prod|
|`ORGANIZATION_NAME`|[!UICONTROL Organization Name]|Name of the customer organization in Adobe Experience Platform.|My Organization Name|

![UI image showing the file name configuration screen with preselected macros](assets/file-name-configuration.png)

The example shown in the image above uses the following file name macro configuration:

```json
"filenameConfig":{
   "allowedFilenameAppendOptions":[
      "CUSTOM_TEXT"
   ],
   "defaultFilenameAppendOptions":[
      "SEGMENT_ID",
      "DATETIME"
   ],
   "defaultFilename":"DESTINATION"
}
```

## File-based destinations file configuration {#file-configuration}

This section describes the file formatting settings for the exported `CSV` files. You can modify several properties of the exported files to match the requirements of the file reception system on your side, in order to optimally read and interpret the files received from Experience Platform.

>[!NOTE]
>
>CSV options are only supported when exporting CSV files. The `fileConfigurations` section is not mandatory when setting up a new destination server. If you don't pass any values in the API call for the CSV options, the default ones from the table below will be used.

```json
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
    }
```

|Field|Required/Optional|Description|Default value|
|---|---|---|---|
|`compression.value`|Optional|Compression codec to use when saving data to file. Supported values: `none`, `bzip2`, `gzip`, `lz4`, and `snappy`.|`none`|
|`fileType.value`|Optional|Specifies the output file format. Supported values: `csv`, `parquet`, and `json`.|`csv`|
|`csvOptions.quote.value`|Optional|*Only for `"fileType.value": "csv"`*. Sets a single character used for escaping quoted values where the separator can be part of the value.|`null`|
|`csvOptions.quoteAll.value`|Optional|*Only for `"fileType.value": "csv"`*. Indicates whether all values should always be enclosed in quotes. Default is to only escape values containing a quote character.|`false`|
|`csvOptions.escape.value`|Optional|*Only for `"fileType.value": "csv"`*. Sets a single character used for escaping quotes inside an already quoted value.|`\`|
|`csvOptions.escapeQuotes.value`|Optional|*Only for `"fileType.value": "csv"`*. Indicates whether values containing quotes should always be enclosed in quotes. Default is to escape all values containing a quote character.|`true`|
|`csvOptions.header.value`|Optional|*Only for `"fileType.value": "csv"`*. Indicates whether to write the names of columns as the first line.|`true`|
|`csvOptions.ignoreLeadingWhiteSpace.value`|Optional|*Only for `"fileType.value": "csv"`*. Indicates whether to trim leading white spaces from values.|`true`|
|`csvOptions.ignoreTrailingWhiteSpace.value`|Optional|*Only for `"fileType.value": "csv"`*. Indicates whether to trim trailing whitespaces from values.|`true`|
|`csvOptions.nullValue.value`|Optional|*Only for `"fileType.value": "csv"`*. Sets the string representation of a null value. |`""`|
|`csvOptions.dateFormat.value`|Optional|*Only for `"fileType.value": "csv"`*. Indicates the date format.|`yyyy-MM-dd`|
|`csvOptions.timestampFormat.value`|Optional|*Only for `"fileType.value": "csv"`*. Sets the string that indicates a timestamp format.|`yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]`|
|`csvOptions.charToEscapeQuoteEscaping.value`|Optional|*Only for `"fileType.value": "csv"`*. Sets a single character used for escaping the escape for the quote character.|`\` when the escape and quote characters are different. `\0` when the escape and quote character are the same.|
|`csvOptions.emptyValue.value`|Optional|*Only for `"fileType.value": "csv"`*. Sets the string representation of an empty value.|`""`|
|`csvOptions.lineSep.value`|Optional|*Only for `"fileType.value": "csv"`*. Defines the line separator that should be used for writing. Maximum length is 1 character.|`\n`|
