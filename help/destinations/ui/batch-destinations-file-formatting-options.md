---
description: Learn how to configure file formatting options when activating data to file-based destinations
title: File formatting options for file-based destinations
---
# File formatting options for file-based destinations

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

