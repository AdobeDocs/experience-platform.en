---
description: Learn how to configure file formatting options when activating data to file-based destinations
title: File formatting options for file-based destinations
---
# File formatting options for file-based destinations

## Overview {#overview}

The option to configure various file formatting options for the exported files is available to you when you [connect](/help/destinations/ui/connect-destination.md) to a file-based destination, such as [Amazon S3](/help/destinations/catalog/cloud-storage/amazon-s3.md#connect), [Azure Blob](/help/destinations/catalog/cloud-storage/azure-blob.md#connect), or [SFTP](/help/destinations/catalog/cloud-storage/sftp.md#connect). 

You can configure various file formatting options for exported files by using the Experience Platform UI or API. You can modify several properties of the exported files to match the requirements of the file reception system on your side, in order to optimally read and interpret the files received from Experience Platform.

To configure file formatting options for exported files by using the Experience Platform UI, read this document.

To configure file formatting options for exported files by using the Experience Platform Flow Service API, read ...... API doc.

## File formatting configuration {#file-configuration}

>[!IMPORTANT]
>
>The destination that you are connecting to may not have all these options available. It is up to the destination developer to determine which file formatting options they want to support in their destination. The destination developer can determine which options are required and which options are optional. Required options are marked with an asterisk in the Experience Platform UI.

This section describes the file formatting settings available for the exported `CSV` files. 

![Image showing some of the available file formatting options.](/help/destinations/assets/ui/batch-destinations-file-formatting-options/file-formatting-options.png)

### Delimiter

Sets a separator for each field and value. For example, `,` for comma-separated values or `/t` for tab-separated values

### Quote character 

Sets a single character used for escaping quoted values where the separator can be part of the value.

### Escape character

Sets a single character used for escaping quotes inside an already quoted value.

### Null value output

Sets the string representation of a null value within the exported files.

### Empty value output

Sets the string representation of an empty value.

### Encoding

Specifies encoding (charset) of saved CSV files. Options are UTF-8 or UTF-16. 

### Char to escape quote

A flag indicating whether values containing quotes should always be enclosed in quotes.

Default is to escape all values containing a quote character.

### Line separator

Defines the line separator that should be used for writing. Maximum length is 1 character.

### Ignore leading whitespace

A flag indicating whether or not leading whitespaces from values being exported should be skipped.

### Ignore trailing whitespace

A flag indicating whether or not trailing whitespaces from values being exported should be skipped.

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
|`maxFileRowCount`|Optional|Maximum number of rows that the exported file can contain. Configure this based on your destination platform file size requirements.|N/A|

{style="table-layout:auto"}