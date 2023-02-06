---
description: Learn how to configure file formatting options when activating data to file-based destinations
title: (Beta) Configure file formatting options for file-based destinations
exl-id: f59b1952-e317-40ba-81d1-35535e132a72
---
# (Beta) Configure file formatting options for file-based destinations

>[!IMPORTANT]
>
>The **[!UICONTROL File formatting options]** functionality in Adobe Experience Platform is currently in Beta. The documentation and functionality are subject to change.
>Contact your Adobe representative for access to this functionality.
> 
>The file formatting options described in this document are currently available for CSV files only. 

The option to configure various file formatting options for the exported files is available to you when you [connect](/help/destinations/ui/connect-destination.md) to a file-based destination, such as [Amazon S3](/help/destinations/catalog/cloud-storage/amazon-s3.md#connect), [Azure Blob](/help/destinations/catalog/cloud-storage/azure-blob.md#connect), or [SFTP](/help/destinations/catalog/cloud-storage/sftp.md#connect). 

You can configure various file formatting options for exported files by using the Experience Platform UI. You can modify several properties of the exported files to match the requirements of the file reception system on your side, in order to optimally read and interpret the files received from Experience Platform.

<!--
* To configure file formatting options for exported files by using the Experience Platform UI, read this document.
* To configure file formatting options for exported files by using the Experience Platform Flow Service API, read [Flow Service API - Destinations](https://developer.adobe.com/experience-platform-apis/references/destinations/).
-->

## File formatting configuration {#file-configuration}

To display the file formatting options, start the [connect to destination](/help/destinations/ui/connect-destination.md) workflow. Select **Data type: Segments** and **File type: CSV** to display the file formatting settings available for the exported `CSV` files. 

>[!IMPORTANT]
>
>The destination that you are connecting to may not have all these options available. It is up to the destination developer to determine which file formatting options they want to support in their destination. The destination developer can determine which options are available when connecting to the destination. Required options are marked with an asterisk in the Experience Platform UI.
> 
>The new cloud storage destinations - [(Beta) Amazon S3](/help/destinations/catalog/cloud-storage/amazon-s3.md), [(Beta) Azure Blob](/help/destinations/catalog/cloud-storage/azure-blob.md), [(Beta) Azure Data Lake Storage Gen2](/help/destinations/catalog/cloud-storage/adls-gen2.md), [(Beta) Data Landing Zone](/help/destinations/catalog/cloud-storage/data-landing-zone.md), [(Beta) Google Cloud Storage](/help/destinations/catalog/cloud-storage/google-cloud-storage.md), [(Beta) SFTP](/help/destinations/catalog/cloud-storage/sftp.md) - currently only support the six CSV options highlighted below.

![Image showing some of the available file formatting options.](/help/destinations/assets/ui/batch-destinations-file-formatting-options/file-formatting-options.png)

### Delimiter {#delimiter}

Sets a separator for each field and value. Available options are:

* Colon `(:)`
* Comma `(,)`
* Pipe `(|)`
* Semicolon `(;)`
* Tab `(\\t)`

### Quote character 

Sets a single character used for escaping quoted values where the separator can be part of the value.

### Escape character

Sets a single character used for escaping quotes inside an already quoted value.

### Empty value output

Sets the string representation of an empty value.

### Null value output

Sets the string representation of a null value within the exported files. 

Example output with **[!UICONTROL null]** selected: `male,NULL,TestLastName`
Example output with **""** selected: `male,"",TestLastName`
Example output with **[!UICONTROL Empty string]** selected: `male,,TestLastName`

### Compression format

Sets which compression codec to use when saving data to file. Supported options are GZIP and NONE.

### Encoding

*Not shown in the UI screenshot*. Specifies encoding (charset) of saved CSV files. Options are UTF-8 or UTF-16. 

### Char to escape quote

*Not shown in the UI screenshot*. A flag indicating whether values containing quotes should always be enclosed in quotes.

Default is to escape all values containing a quote character.

### Line separator

*Not shown in the UI screenshot*. Defines the line separator that should be used for writing. Maximum length is 1 character.

### Ignore leading whitespace

*Not shown in the UI screenshot*. A flag indicating whether or not leading whitespaces from values being exported should be skipped.

Example output with **[!UICONTROL True]** selected: `"male","John","TestLastName"`
Example output with **[!UICONTROL False]** selected: `" male","John","TestLastName"`

### Ignore trailing whitespace

Not shown in the UI screenshot. A flag indicating whether or not trailing whitespaces from values being exported should be skipped.

Example output with **[!UICONTROL True]** selected: `"male","John","TestLastName"`
Example output with **[!UICONTROL False]** selected: `"male ","John","TestLastName"`

### Next steps {#next-steps}

After reading this document, you now know how to configure file export options for your CSV data files to tailor the file contents to the requirements of your downstream file reception system. Next, you can read the [file-based destinations activation tutorial](/help/destinations/ui/activate-batch-profile-destinations.md) to start exporting files to your preferred cloud storage location.
