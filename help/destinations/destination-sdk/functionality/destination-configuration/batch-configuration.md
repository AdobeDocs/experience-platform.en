---
description: Learn how to configure the file export settings for destinations built with Destination SDK.
title: Batch configuration
---

# Batch configuration - file naming and export scheduling {#batch-configuration}

This section refers to the file naming and export scheduling settings that will be displayed for your destination in the Adobe Experience Platform user interface. The values that you set up here are surfaced in the [Schedule segment export](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling) step of the file-based destinations activation workflow. 

```json
"batchConfig":{
   "allowMandatoryFieldSelection":true,
   "allowDedupeKeyFieldSelection":true,
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
      "ONCE"
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
   }
```

|Parameter | Type | Description|
|---------|----------|------|
|`allowMandatoryFieldSelection`|Boolean|Set to `true` to allow customers to specify which profile attributes are mandatory. Default value is `false`. See [Mandatory attributes](../ui/activate-batch-profile-destinations.md#mandatory-attributes) for more information. |
|`allowDedupeKeyFieldSelection`|Boolean|Set to `true` to allow customers to specify deduplication keys. Default value is `false`.  See [Deduplication keys](../ui/activate-batch-profile-destinations.md#deduplication-keys) for more information. |
|`defaultExportMode`|Enum|Defines the default file export mode. Supported values:<ul><li>`DAILY_FULL_EXPORT`</li><li>`FIRST_FULL_THEN_INCREMENTAL`</li></ul> Default value is `DAILY_FULL_EXPORT`. See the [batch activation documentation](../ui/activate-batch-profile-destinations.md#scheduling) for details about file exports scheduling. |
|`allowedExportModes`|List|Defines the file export modes available to customers. Supported values:<ul><li>`DAILY_FULL_EXPORT`</li><li>`FIRST_FULL_THEN_INCREMENTAL`</li></ul>|
|`allowedScheduleFrequency`|List|Defines the file export frequency available to customers. Supported values:<ul><li>`ONCE`</li><li>`EVERY_3_HOURS`</li><li>`EVERY_6_HOURS`</li><li>`EVERY_8_HOURS`</li><li>`EVERY_12_HOURS`</li><li>`DAILY`</li></ul>|
|`defaultFrequency`|Enum|Defines the default file export frequency.Supported values:<ul><li>`ONCE`</li><li>`EVERY_3_HOURS`</li><li>`EVERY_6_HOURS`</li><li>`EVERY_8_HOURS`</li><li>`EVERY_12_HOURS`</li><li>`DAILY`</li></ul> Default value is `DAILY`.|
|`defaultStartTime`|String|Defines the default start time for the file export. Uses 24-hour file format. Default value is "00:00".|
|`filenameConfig.allowedFilenameAppendOptions`|String|*Required*. List of available file name macros for users to choose from. This determines which items are appended to exported file names (segment ID, organization name, date and time of export, and others). When setting `defaultFilename`, make sure to avoid duplicating macros. <br><br>Supported values: <ul><li>`DESTINATION`</li><li>`SEGMENT_ID`</li><li>`SEGMENT_NAME`</li><li>`DESTINATION_INSTANCE_ID`</li><li>`DESTINATION_INSTANCE_NAME`</li><li>`ORGANIZATION_NAME`</li><li>`SANDBOX_NAME`</li><li>`DATETIME`</li><li>`CUSTOM_TEXT`</li></ul>Regardless of the order in which you define the macros, the Experience Platform UI will always display them in the order presented here. <br><br> If `defaultFilename` is empty, the `allowedFilenameAppendOptions` list must contain at least one macro.|
|`filenameConfig.defaultFilenameAppendOptions`|String|*Required*. Pre-selected default file name macros that users can uncheck.<br><br> The macros in this list are a subset of the ones defined in `allowedFilenameAppendOptions`. |
|`filenameConfig.defaultFilename`|String|*Optional*. Defines the default file name macros for the exported files. These cannot be overwritten by users. <br><br>Any macro defined by `allowedFilenameAppendOptions` will be appended after the `defaultFilename` macros. <br><br>If `defaultFilename` is empty, you must define at least one macro in `allowedFilenameAppendOptions`.|

{style="table-layout:auto"}

## File name configuration {#file-name-configuration}

Use file name configuration macros to define what the exported file names should include. The macros in the table below describe elements found in the UI in the [file name configuration](../ui/activate-batch-profile-destinations.md#file-names) screen.


>[!TIP]
> 
>As a best practice, you should always include the `SEGMENT_ID` macro in your exported file names. Segment IDs are unique, so including them in the file name is the best way to ensure that file names are unique as well. 

|Macro|UI label|Description|Example|
|---|---|---|---|
|`DESTINATION`|[!UICONTROL Destination]|Destination name in the UI.|Amazon S3|
|`SEGMENT_ID`|[!UICONTROL Segment ID]|Unique, Platform-generated segment ID|ce5c5482-2813-4a80-99bc-57113f6acde2|
|`SEGMENT_NAME`|[!UICONTROL Segment Name]|User-defined segment name|VIP subscriber|
|`DESTINATION_INSTANCE_ID`|[!UICONTROL Destination ID]|Unique, Platform-generated ID of the destination instance|7b891e5f-025a-4f0d-9e73-1919e71da3b0|
|`DESTINATION_INSTANCE_NAME`|[!UICONTROL Destination Name]|User-defined name of the destination instance.|My 2022 Advertising Destination|
|`ORGANIZATION_NAME`|[!UICONTROL Organization Name]|Name of the customer organization in Adobe Experience Platform.|My Organization Name|
|`SANDBOX_NAME`|[!UICONTROL Sandbox Name]|Name of the sandbox used by the customer.|prod|
|`DATETIME` / `TIMESTAMP`|[!UICONTROL Date and time]|`DATETIME` and `TIMESTAMP` both define when the file was generated, but in different formats. <br><br><ul><li>`DATETIME` uses the following format: YYYYMMDD_HHMMSS.</li><li>`TIMESTAMP` uses the 10-digit Unix format. </li></ul> `DATETIME` and `TIMESTAMP` are mutually exclusive, and cannot be used simultaneously. |<ul><li>`DATETIME`: 20220509_210543</li><li>`TIMESTAMP`: 1652131584</li></ul>|
|`CUSTOM_TEXT`|[!UICONTROL Custom text]|User-defined custom text to be included in the file name. Cannot be used in `defaultFilename`.|My_Custom_Text|
|`TIMESTAMP`|[!UICONTROL Date and time]|10-digit timestamp of the time when the file was generated, in Unix format.|1652131584|

{style="table-layout:auto"}

![UI image showing the file name configuration screen with preselected macros](assets/file-name-configuration.png)

The example shown in the image above uses the following file name macro configuration:

```json
"filenameConfig":{
   "allowedFilenameAppendOptions":[
      "CUSTOM_TEXT",
      "SEGMENT_ID",
      "DATETIME"
   ],
   "defaultFilenameAppendOptions":[
      "SEGMENT_ID",
      "DATETIME"
   ],
   "defaultFilename": "%DESTINATION%"
}
```
