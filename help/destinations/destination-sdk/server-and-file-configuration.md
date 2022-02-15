---
description: The server specs for file-based destinations can be configured in Adobe Experience Platform Destination SDK via the common endpoint `/authoring/destination-servers`.
title: Configuration options for file-based destination server specs
exl-id: cf493ed5-0bdb-4b90-b84d-73926a566a2a
---
# Configuration options for file-based destination server specs

## Overview {#overview}

>[!IMPORTANT]
>
>The functionality to configure and submit file-based destinations using Adobe Experience Platform Destination SDK is currently in Beta. The documentation and functionality are subject to change.

The server specs for file-based destinations can be configured in Adobe Experience Platform Destination SDK via the common endpoint `/authoring/destination-servers`. Read [Destinations API endpoint operations](./destination-server-api.md) for a complete list of operations you can perform on the endpoint.

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
|`destinationServerType`|String|Set this value according to your destination platform. Supported values: <ul><li>`FILE_BASED_S3` for Amazon S3 destinations</li><li>`FILE_BASED_SFTP` for SFTP destinations</li><li>`FILE_BASED_ADLS_GEN2` for [!DNL Azure Data Lake Storage] ([!DNL ADLS]) destinations</li><li>`FILE_BASED_AZURE_BLOB` for Azure Blob destinations</li><li>`FILE_BASED_DLZ` for [!DNL Data Landing Zone] destinations</ul>|
|`fileBasedS3Destination.bucket.templatingStrategy`| String|*Required.* <ul><li>Use `PEBBLE_V1` if Adobe needs to transform the URL in the `value` field below. Use this option if you have an endpoint like: `https://api.moviestar.com/data/{{customerData.region}}/items` </li><li> Use `NONE` if no transformation is needed on the Adobe side, for example if you have an endpoint like: `https://api.moviestar.com/data/items` </li></ul>  |
|`fileBasedS3Destination.bucket.value`|String|The name of the [!DNL Amazon S3] bucket to be used by this destination.|
|`fileBasedS3Destination.path.templatingStrategy`|String| *Required.* <ul><li>Use `PEBBLE_V1` if Adobe needs to transform the URL in the `value` field below. Use this option if you have an endpoint like: `https://api.moviestar.com/data/{{customerData.region}}/items` </li><li> Use `NONE` if no transformation is needed on the Adobe side, for example if you have an endpoint like: `https://api.moviestar.com/data/items` </li></ul>  |
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
|`destinationServerType`|String|Set this value according to your destination platform. Supported values: <ul><li>`FILE_BASED_S3` for Amazon S3 destinations</li><li>`FILE_BASED_SFTP` for SFTP destinations</li><li>`FILE_BASED_ADLS_GEN2` for [!DNL Azure Data Lake Storage] ([!DNL ADLS]) destinations</li><li>`FILE_BASED_AZURE_BLOB` for Azure Blob destinations</li><li>`FILE_BASED_DLZ` for [!DNL Data Landing Zone] destinations</ul>|
|`fileBasedSftpDestination.rootDirectory.templatingStrategy`|String| *Required.* <ul><li>Use `PEBBLE_V1` if Adobe needs to transform the URL in the `value` field below. Use this option if you have an endpoint like: `https://api.moviestar.com/data/{{customerData.region}}/items` </li><li> Use `NONE` if no transformation is needed on the Adobe side, for example if you have an endpoint like: `https://api.moviestar.com/data/items` </li></ul>  |
|`fileBasedSftpDestination.rootDirectory.value`|String|The root directory of the destination storage.|
|`port`|Integer|The SFTP file server port.|
|`encryptionMode`|String|Indicates whether to use file encryption. Supported values: <ul><li>PGP</li><li>None</li></ul>|

## File-based [!DNL Azure Data Lake Storage] ([!DNL ADLS]) destination destination server spec {#adls-example}

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
|`destinationServerType`|String|Set this value according to your destination platform. Supported values: <ul><li>`FILE_BASED_S3` for Amazon S3 destinations</li><li>`FILE_BASED_SFTP` for SFTP destinations</li><li>`FILE_BASED_ADLS_GEN2` for [!DNL Azure Data Lake Storage] ([!DNL ADLS]) destinations</li><li>`FILE_BASED_AZURE_BLOB` for Azure Blob destinations</li><li>`FILE_BASED_DLZ` for [!DNL Data Landing Zone] destinations</ul>|
|`fileBasedAdlsGen2Destination.path.templatingStrategy`|String| *Required.* <ul><li>Use `PEBBLE_V1` if Adobe needs to transform the URL in the `value` field below. Use this option if you have an endpoint like: `https://api.moviestar.com/data/{{customerData.region}}/items` </li><li> Use `NONE` if no transformation is needed on the Adobe side, for example if you have an endpoint like: `https://api.moviestar.com/data/items` </li></ul>|
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
|`destinationServerType`|String|Set this value according to your destination platform. Supported values: <ul><li>`FILE_BASED_S3` for Amazon S3 destinations</li><li>`FILE_BASED_SFTP` for SFTP destinations</li><li>`FILE_BASED_ADLS_GEN2` for [!DNL Azure Data Lake Storage] ([!DNL ADLS]) destinations</li><li>`FILE_BASED_AZURE_BLOB` for Azure Blob destinations</li><li>`FILE_BASED_DLZ` for [!DNL Data Landing Zone] destinations</ul>|
|`fileBasedAzureBlobDestination.path.templatingStrategy`|String| *Required.* <ul><li>Use `PEBBLE_V1` if Adobe needs to transform the URL in the `value` field below. Use this option if you have an endpoint like: `https://api.moviestar.com/data/{{customerData.region}}/items` </li><li> Use `NONE` if no transformation is needed on the Adobe side, for example if you have an endpoint like: `https://api.moviestar.com/data/items` </li></ul>  |
|`fileBasedAzureBlobDestination.path.value`|String|The path to the destination folder that will host the exported files.|
|`fileBasedAzureBlobDestination.container.templatingStrategy`|String| *Required.* <ul><li>Use `PEBBLE_V1` if Adobe needs to transform the URL in the `value` field below. Use this option if you have an endpoint like: `https://api.moviestar.com/data/{{customerData.region}}/items` </li><li> Use `NONE` if no transformation is needed on the Adobe side, for example if you have an endpoint like: `https://api.moviestar.com/data/items` </li></ul>  |
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
|`destinationServerType`|String|Set this value according to your destination platform. Supported values: <ul><li>`FILE_BASED_S3` for Amazon S3 destinations</li><li>`FILE_BASED_SFTP` for SFTP destinations</li><li>`FILE_BASED_ADLS_GEN2` for [!DNL Azure Data Lake Storage] ([!DNL ADLS]) destinations</li><li>`FILE_BASED_AZURE_BLOB` for Azure Blob destinations</li><li>`FILE_BASED_DLZ` for [!DNL Data Landing Zone] destinations</ul>|
|`fileBasedDlzDestination.path.templatingStrategy`|String| *Required.* <ul><li>Use `PEBBLE_V1` if Adobe needs to transform the URL in the `value` field below. Use this option if you have an endpoint like: `https://api.moviestar.com/data/{{customerData.region}}/items` </li><li> Use `NONE` if no transformation is needed on the Adobe side, for example if you have an endpoint like: `https://api.moviestar.com/data/items` </li></ul>  |
|`fileBasedDlzDestination.path.value`|String|The path to the destination folder that will host the exported files.|
|`useCase`|String||

## File-based destinations file configuration {#file-configuration}

This section describes the file formatting settings for the exported files.

>[!NOTE]
>
>The `fileConfigurations` section is not mandatory when setting up a new destination server. If you don't pass any values in the API call for the CSV options, the default ones from the table below will be used.

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
|`csvOptions.quote.value`|Optional|Sets a single character used for escaping quoted values where the separator can be part of the value.|`null`|
|`csvOptions.quoteAll.value`|Optional|Indicates whether all values should always be enclosed in quotes. Default is to only escape values containing a quote character.|`false`|
|`csvOptions.escape.value`|Optional|Sets a single character used for escaping quotes inside an already quoted value.|`\`|
|`csvOptions.escapeQuotes.value`|Optional|Indicates whether values containing quotes should always be enclosed in quotes. Default is to escape all values containing a quote character.|`true`|
|`csvOptions.header.value`|Optional|Indicates whether to write the names of columns as the first line.|`true`|
|`csvOptions.ignoreLeadingWhiteSpace.value`|Optional|Indicates whether to trim leading white spaces from values.|`true`|
|`csvOptions.ignoreTrailingWhiteSpace.value`|Optional|Indicates whether to trim trailing whitespaces from values.|`true`|
|`csvOptions.nullValue.value`|Optional|Sets the string representation of a null value. |`""`|
|`csvOptions.dateFormat.value`|Optional|Indicates the date format.|`yyyy-MM-dd`|
|`csvOptions.timestampFormat.value`|Optional|Sets the string that indicates a timestamp format.|`yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]`|
|`csvOptions.charToEscapeQuoteEscaping.value`|Optional|Sets a single character used for escaping the escape for the quote character.|`\` when the escape and quote characters are different. `\0` when the escape and quote character are the same.|
|`csvOptions.emptyValue.value`|Optional|Sets the string representation of an empty value.|`""`|
|`csvOptions.lineSep.value`|Optional|Defines the line separator that should be used for writing. Maximum length is 1 character.|`\n`|