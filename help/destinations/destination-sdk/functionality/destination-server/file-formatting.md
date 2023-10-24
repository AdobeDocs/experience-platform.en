---
description: Learn how to configure file formatting options for file-based destinations built with Adobe Experience Platform Destination SDK, via the `/destination-servers` endpoint.
title: File formatting configuration
exl-id: 98fec559-9073-4517-a10e-34c2caf292d5
---
# File formatting configuration

Destination SDK supports a flexible set of features which you can configure according to your integration needs. Among these features is the support for [!DNL CSV] file formatting.

When you create file-based destinations through Destination SDK, you can define how the exported CSV files should be formatted. You can customize many formatting options, such as, but not limited to:

* Whether the CSV file should include a header;
* What character to use for quoting values;
* What empty values should look like.

Depending on your destination configuration, users will see certain options in the UI when connecting to a file-based destination. You can see what these options look like in the [file formatting options for file-based destinations](../../../ui/batch-destinations-file-formatting-options.md) documentation.


File formatting settings are part of the destination server configuration for file-based destinations. 

To understand where this component fits into an integration created with Destination SDK, see the diagram in the [configuration options](../configuration-options.md) documentation or seethe guide on how to [use Destination SDK to configure a file-based destination](../../guides/configure-file-based-destination-instructions.md#create-server-file-configuration).

You can configure the file formatting options via the `/authoring/destination-servers` endpoint. See the following API reference pages for detailed API call examples where you can configure the components shown in this page.

* [Create a destination server configuration](../../authoring-api/destination-server/create-destination-server.md)
* [Update a destination server configuration](../../authoring-api/destination-server/update-destination-server.md)

This page describes all the supported file formatting settings for exported `CSV` files.

>[!IMPORTANT]
>
>All parameter names and values supported by Destination SDK are **case sensitive**. To avoid case sensitivity errors, please use the parameters names and values exactly as shown in the documentation.

## Supported integration types {#supported-integration-types}

Refer to the table below for details on which types of integrations support the functionality described on this page.

|Integration type| Supports functionality |
|---|---|
| Real-time (streaming) integrations | No |
| File-based (batch) integrations | Yes |

## Supported parameters {#supported-parameters}

You can modify several properties of the exported files to match the requirements of your destination's file reception system, in order to optimally read and interpret the files received from Experience Platform.

>[!NOTE]
>
>CSV options are only supported when exporting CSV files. The `fileConfigurations` section is not mandatory when setting up a new destination server. If you don't pass any values in the API call for the CSV options, the default ones from the [reference table further below](#file-formatting-reference-and-example) will be used.


## CSV options where users cannot select configuration options {#file-configuration-templating-none}

In the configuration example below, all the CSV options are predefined. The export settings defined in each of the `csvOptions` parameters are final and users cannot modify them.

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
        "maxFileRowCount":5000000,
        "includeFileManifest": {
            "templatingStrategy":"PEBBLE_V1",
            "value":"{{ customerData.includeFileManifest }}"
      }
    }
```

## CSV options where users can select configuration options {#file-configuration-templating-pebble}

In the configuration example below, none of the CSV options are predefined. The `value` in each of the `csvOptions` parameters is configured in a corresponding customer data field through the `/destinations` endpoint (for example [`customerData.quote`](../../functionality/destination-configuration/customer-data-fields.md#conditional-options) for the `quote` file formatting option) and users can use the Experience Platform UI to select between the various options you configure in the corresponding customer data field. You can see what these options look like in the [file formatting options for file-based destinations](../../../ui/batch-destinations-file-formatting-options.md) documentation.

```json
{
   "fileConfigurations":{
      "compression":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{% if customerData contains 'compression' and customerData.compression is not empty %}{{customerData.compression}}{% else %}NONE{% endif %}"
      },
      "fileType":{
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{customerData.fileType}}"
      },
      "csvOptions":{
         "sep":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{% if customerData contains 'csvOptions' and customerData.csvOptions contains 'delimiter' %}{{customerData.csvOptions.delimiter}}{% else %},{% endif %}"
         },
         "quote":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{% if customerData contains 'csvOptions' and customerData.csvOptions contains 'quote' %}{{customerData.csvOptions.quote}}{% else %}\"{% endif %}"
         },
         "escape":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{% if customerData contains 'csvOptions' and customerData.csvOptions contains 'escape' %}{{customerData.csvOptions.escape}}{% else %}\\{% endif %}"
         },
         "nullValue":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{% if customerData contains 'csvOptions' and customerData.csvOptions contains 'nullValue' %}{{customerData.csvOptions.nullValue}}{% else %}null{% endif %}"
         },
         "emptyValue":{
            "templatingStrategy":"PEBBLE_V1",
            "value":"{% if customerData contains 'csvOptions' and customerData.csvOptions contains 'emptyValue' %}{{customerData.csvOptions.emptyValue}}{% else %}{% endif %}"
         }
      },
      "maxFileRowCount":5000000,
      "includeFileManifest": {
         "templatingStrategy":"PEBBLE_V1",
         "value":"{{ customerData.includeFileManifest }}"
      }
   }
}
```

## Complete reference and examples for supported file formatting options {#file-formatting-reference-and-example}

>[!TIP]
>
>The CSV file formatting options described below are also documented in the [Apache Spark guide for CSV files](https://spark.apache.org/docs/latest/sql-data-sources-csv.html). The descriptions used below are taken from the Apache Spark guide.

Below is a complete reference of all available file formatting options in Destination SDK, alongside output examples for each option.

|Field|Required/Optional|Description|Default value|Example output 1|Example output 2|
|---|---|---|---|---|---|
|`templatingStrategy`|Required| For each file formatting option that you configure, you are required to add the parameter `templatingStrategy`, which can have two values: <br><ul><li>`NONE`: use this value if you are not planning to allow users to select between different values for a configuration. See [this configuration](#file-configuration-templating-none) for an example where file formatting options are fixed.</li><li>`PEBBLE_V1`: use this value if you want to allow users to select between different values for a configuration. In this case, you must also set up a corresponding customer data field in the `/destination` endpoint configuration, to surface the various options to users in the UI. See [this configuration](#file-configuration-templating-pebble) for an example where users can select between different values for file formatting options.</li></ul> |-|-|-|
|`compression.value`|Optional|Compression codec to use when saving data to file. Supported values: `none`, `bzip2`, `gzip`, `lz4`, and `snappy`.|`none`|-|-|
|`fileType.value`|Optional|Specifies the output file format. Supported values: `csv`, `parquet`, and `json`.|`csv`|-|-|
|`csvOptions.quote.value`|Optional|*Only for `"fileType.value": "csv"`*. Sets a single character used for escaping quoted values where the separator can be part of the value.|`null`| Default value example: `quote.value: "u0000"` --> `male,NULJohn,LastNameNUL`| Custom example: `quote.value: "\""` --> `male,"John,LastName"`|
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
|`maxFileRowCount`|Optional|Indicates the maximum number of rows per exported file, between 1,000,000 and 10,000,000 rows. | 5,000,000 |
|`includeFileManifest`|Optional| Enables support for exporting a file manifest along with the file exports. The manifest JSON file contains information about the export location, export size, and more. The manifest is named using the format `manifest-<<destinationId>>-<<dataflowRunId>>.json`. | View a [sample manifest file](/help/destinations/assets/common/manifest-d0420d72-756c-4159-9e7f-7d3e2f8b501e-0ac8f3c0-29bd-40aa-82c1-f1b7e0657b19.json). The manifest file includes the following fields: <ul><li>`flowRunId`: The [dataflow run](/help/dataflows/ui/monitor-destinations.md#dataflow-runs-for-batch-destinations) which generated the exported file.</li><li>`scheduledTime`: The time in UTC when the file was exported. </li><li>`exportResults.sinkPath`: The path in your storage location where the exported file is deposited. </li><li>`exportResults.name`: The name of the exported file.</li><li>`size`: The size of the exported file, in bytes.</li></ul> |

{style="table-layout:auto"}

## Next steps {#next-steps}

After reading this article, you should have a better understanding of how file formatting works in a destination server configuration, and how you can configure it.

To learn more about the other destination server components, see the following articles:

* [Server specs for destinations created with Destination SDK](server-specs.md)
* [Templating specs](templating-specs.md)
* [Message format](message-format.md)
