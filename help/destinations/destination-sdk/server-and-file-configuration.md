---
description: The server and file configuration specs for file-based destinations can be configured in Adobe Experience Platform Destination SDK via the /destination-servers endpoint.
title: Configuration options for file-based destination server specs
exl-id: 56434e36-0458-45d9-961d-f6505de998f7
---
# Server and file configuration for file-based destination server specs

## Overview {#overview}

This page details all server configuration options for your file-based destination servers and shows how to set up various file configuration options for users exporting files from Experience Platform to your destination.

The server and file configuration specs for file-based destinations can be configured in Adobe Experience Platform Destination SDK via the `/destination-servers` endpoint. Read [Destination server API endpoint operations](./destination-server-api.md) for a complete list of operations you can perform on the endpoint.

The sections below include destination server specs specific to each supported batch destination type in Destination SDK.

## File-based Amazon S3 destination server spec {#s3-example}

The sample below shows a correct destination server configuration for an Amazon S3 destination.

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
       // See the file formatting configuration section further below on this page
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
|`fileConfigurations`|Object|See [file formatting configuration](#file-configuration) for detailed explanations about this section.|

{style="table-layout:auto"}

## File-based SFTP destination server spec {#sftp-example}

The sample below shows a correct destination server configuration for an SFTP destination.

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
       // See the file formatting configuration section further below on this page
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
|`fileConfigurations`|Object|See [file formatting configuration](#file-configuration) for detailed explanations about this section.|

{style="table-layout:auto"}

## File-based [!DNL Azure Data Lake Storage] ([!DNL ADLS]) destination server spec {#adls-example}

The sample below shows a correct destination server configuration for an [!DNL Azure Data Lake Storage] destination.

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
       // See the file formatting configuration section further below on this page
    }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL Azure Data Lake Storage] destinations, set this to `FILE_BASED_ADLS_GEN2`.|
|`fileBasedAdlsGen2Destination.path.templatingStrategy`|String| *Required.* Use `PEBBLE_V1`.|
|`fileBasedAdlsGen2Destination.path.value`|String|The path to the destination folder that will host the exported files.|
|`fileConfigurations`|Object|See [file formatting configuration](#file-configuration) for detailed explanations about this section.|

{style="table-layout:auto"}

## File-based [!DNL Azure Blob Storage] destination server spec {#blob-example}

The sample below shows a correct destination server configuration for an [!DNL Azure Blob Storage] destination.

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
       // See the file formatting configuration section further below on this page
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
|`fileConfigurations`|Object|See [file formatting configuration](#file-configuration) for detailed explanations about this section.|

{style="table-layout:auto"}

## File-based [!DNL Data Landing Zone] ([!DNL DLZ]) destination server spec {#dlz-example}

The sample below shows a correct destination server configuration for a [!DNL Data Landing Zone] ([!DNL DLZ]) destination.

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
       // See the file formatting configuration section further below on this page
    }
}
```

|Parameter|Type|Description|
|---|---|---|
|`name`|String|The name of your destination connection.|
|`destinationServerType`|String|Set this value according to your destination platform. For [!DNL Data Landing Zone] destinations, set this to `FILE_BASED_DLZ`.|
|`fileBasedDlzDestination.path.templatingStrategy`|String| *Required.*  Use `PEBBLE_V1`.|
|`fileBasedDlzDestination.path.value`|String|The path to the destination folder that will host the exported files.|
|`fileConfigurations`|Object|See [file formatting configuration](#file-configuration) for detailed explanations about this section.|

{style="table-layout:auto"}

## File-based [!DNL Google Cloud Storage] destination server spec {#gcs-example}

The sample below shows a correct destination server configuration for a [!DNL Google Cloud Storage] destination.

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
      // See the file formatting configuration section further below on this page
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
|`fileConfigurations`|Object|See [file formatting configuration](#file-configuration) for detailed explanations about this section.|

{style="table-layout:auto"}

## File formatting configuration {#file-configuration}

This section describes the file formatting settings for the exported `CSV` files. You can modify several properties of the exported files to match the requirements of the file reception system on your side, in order to optimally read and interpret the files received from Experience Platform.

>[!NOTE]
>
>CSV options are only supported when exporting CSV files. The `fileConfigurations` section is not mandatory when setting up a new destination server. If you don't pass any values in the API call for the CSV options, the default ones from the [reference table further below](#file-formatting-reference-and-example) will be used.

### File configurations with CSV options and the `templatingStrategy` set to `NONE`  {#file-configuration-templating-none}

In the configuration example below, all the CSV options are fixed. The export settings defined in each of the `csvOptions` parameters are final and users cannot modify them.

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
            }
        },
        "maxFileRowCount":5000000
    }
```

### File configurations with CSV options and the `templatingStrategy` set to `PEBBLE_V1` {#file-configuration-templating-pebble}

In the configuration example below, none of the CSV options are fixed. The `value` in each of the `csvOptions` parameters is configured in a corresponding customer data field through the `/destinations` endpoint (for example `customerData.quote` for the `quote` file formatting option) and users can use the Experience Platform UI to select between the various options you configure in the corresponding customer data field.

```json

  "fileConfigurations": {
    "compression": {
      "templatingStrategy": "PEBBLE_V1",
      "value": "{% if customerData contains 'compression' and customerData.compression is not empty %}{{customerData.compression}}{% else %}NONE{% endif %}"
    },
    "fileType": {
      "templatingStrategy": "PEBBLE_V1",
      "value": "{{customerData.fileType}}"
    },
    "csvOptions": {
      "sep": {
        "templatingStrategy": "PEBBLE_V1",
        "value": "{% if customerData contains 'csvOptions' and customerData.csvOptions contains 'delimiter' %}{{customerData.csvOptions.delimiter}}{% else %},{% endif %}"
      },
      "quote": {
        "templatingStrategy": "PEBBLE_V1",
        "value": "{% if customerData contains 'csvOptions' and customerData.csvOptions contains 'quote' %}{{customerData.csvOptions.quote}}{% else %}\"{% endif %}"
      },
      "escape": {
        "templatingStrategy": "PEBBLE_V1",
        "value": "{% if customerData contains 'csvOptions' and customerData.csvOptions contains 'escape' %}{{customerData.csvOptions.escape}}{% else %}\\{% endif %}"
      },
      "nullValue": {
        "templatingStrategy": "PEBBLE_V1",
        "value": "{% if customerData contains 'csvOptions' and customerData.csvOptions contains 'nullValue' %}{{customerData.csvOptions.nullValue}}{% else %}null{% endif %}"
      },
      "emptyValue": {
        "templatingStrategy": "PEBBLE_V1",
        "value": "{% if customerData contains 'csvOptions' and customerData.csvOptions contains 'emptyValue' %}{{customerData.csvOptions.emptyValue}}{% else %}{% endif %}"
      }
    }
  }
```

### Complete reference and examples for supported file formatting options {#file-formatting-reference-and-example}

>[!TIP]
>
>The CSV file formatting options described below are also documented in the [Apache Spark guide for CSV files](https://spark.apache.org/docs/latest/sql-data-sources-csv.html). The descriptions used below are taken from the Apache Spark guide.

Below is a complete reference of all available file formatting options in Destination SDK, alongside output examples for each option.

|Field|Required/Optional|Description|Default value|Example output 1|Example output 2|
|---|---|---|---|---|---|
|`templatingStrategy`|Required| For each file formatting option that you configure, you are required to add the parameter `templatingStrategy`, which can have two values: <br><ul><li>`NONE`: use this value if you are not planning to allow users to select between different values for a configuration. See [this configuration](#file-configuration-templating-none) for an example where file formatting options are fixed.</li><li>`PEBBLE_V1`: use this value if you want to allow users to select between different values for a configuration. In this case, you must also set up a corresponding customer data field in the `/destination` endpoint configuration, to surface the various options to users in the UI. See [this configuration](#file-configuration-templating-pebble) for an example where users can select between different values for file formatting options.</li></ul> |-|-|-|
|`compression.value`|Optional|Compression codec to use when saving data to file. Supported values: `none`, `bzip2`, `gzip`, `lz4`, and `snappy`.|`none`|-|-|
|`fileType.value`|Optional|Specifies the output file format. Supported values: `csv`, `parquet`, and `json`.|`csv`|-|-|
|`csvOptions.quote.value`|Optional|*Only for `"fileType.value": "csv"`*. Sets a single character used for escaping quoted values where the separator can be part of the value.|`null`|-|-|
|`csvOptions.quoteAll.value`|Optional|*Only for `"fileType.value": "csv"`*. Indicates whether all values should always be enclosed in quotes. Default is to only escape values containing a quote character.|`false`| `quoteAll`:`false` --> `male,John,"TestLastName"`|`quoteAll`:`true` -->`"male","John","TestLastName"`|
|`csvOptions.delimiter.value`|Optional|*Only for `"fileType.value": "csv"`*. Sets a separator for each field and value. This separator can be one or more characters.|`,`|`delimiter`:`,` --> `comma-separated values"`|`delimiter`:`\t` --> `tab-separated values`|
|`csvOptions.escape.value`|Optional|*Only for `"fileType.value": "csv"`*. Sets a single character used for escaping quotes inside an already quoted value.|`\`|`"escape"`:`"\\"` --> `male,John,"Test,\"LastName5"`|`"escape"`:`"'"` --> `male,John,"Test,'''"LastName5"`|
|`csvOptions.escapeQuotes.value`|Optional|*Only for `"fileType.value": "csv"`*. Indicates whether values containing quotes should always be enclosed in quotes. Default is to escape all values containing a quote character.|`true`|-|-|
|`csvOptions.header.value`|Optional|*Only for `"fileType.value": "csv"`*. Indicates whether to write the names of columns as the first line in the exported file.|`true`|-|-|
|`csvOptions.ignoreLeadingWhiteSpace.value`|Optional|*Only for `"fileType.value": "csv"`*. Indicates whether to trim leading white spaces from values.|`true`|`ignoreLeadingWhiteSpace`:`true` --> `"male","John","TestLastName"`|`ignoreLeadingWhiteSpace`:`false`--> `"    male","John","TestLastName"`|
|`csvOptions.ignoreTrailingWhiteSpace.value`|Optional|*Only for `"fileType.value": "csv"`*. Indicates whether to trim trailing white spaces from values.|`true`|`ignoreTrailingWhiteSpace`:`true` --> `"male","John","TestLastName"`|`ignoreTrailingWhiteSpace`:`false`--> `"male    ","John","TestLastName"`|
|`csvOptions.nullValue.value`|Optional|*Only for `"fileType.value": "csv"`*. Sets the string representation of a null value. |`""`|`nullvalue`:`""` --> `male,"",TestLastName`|`nullvalue`:`"NULL"` --> `male,NULL,TestLastName`|
|`csvOptions.dateFormat.value`|Optional|*Only for `"fileType.value": "csv"`*. Indicates the date format.|`yyyy-MM-dd`|`dateFormat`:`yyyy-MM-dd` --> `male,TestLastName,John,2022-02-24`|`dateFormat`:`MM/dd/yyyy` --> `male,TestLastName,John,02/24/2022`|
|`csvOptions.timestampFormat.value`|Optional|*Only for `"fileType.value": "csv"`*. Sets the string that indicates a timestamp format.|`yyyy-MM-dd'T'HH:mm:ss[.SSS][XXX]`|-|-|
|`csvOptions.charToEscapeQuoteEscaping.value`|Optional|*Only for `"fileType.value": "csv"`*. Sets a single character used for escaping the escape for the quote character.|`\` when the escape and quote characters are different. `\0` when the escape and quote character are the same.|-|-|
|`csvOptions.emptyValue.value`|Optional|*Only for `"fileType.value": "csv"`*. Sets the string representation of an empty value.|`""`|`"emptyValue":""` --> `male,"",John`|`"emptyValue":"empty"` --> `male,empty,John`|

{style="table-layout:auto"}