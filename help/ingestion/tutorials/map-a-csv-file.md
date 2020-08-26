---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Map a CSV file to an XDM schema
topic: tutorial
---

# Map a CSV file to an XDM schema

In order to ingest CSV data into [!DNL Adobe Experience Platform], the data must be mapped to an [!DNL Experience Data Model] (XDM) schema. This tutorial covers how to map a CSV file to an XDM schema using the [!DNL Platform] user interface.

In addition, the appendix to this tutorial provides further information regarding the use of [mapping functions](#mapping-functions).

## Getting started

This tutorial requires a working understanding of the following components of [!DNL Platform]:

- [[!DNL Experience Data Model] (XDM System)](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data.
- [Batch ingestion](../batch-ingestion/overview.md): The method by which [!DNL Platform] ingests data from user-supplied datafiles.

This tutorial also requires that you have already created a dataset to ingest your CSV data into. For steps on creating a dataset in the UI, see the [data ingest tutorial](./ingest-batch-data.md).

## Choose a destination

Log in to [Adobe Experience Platform](https://platform.adobe.com) and then select **[!UICONTROL Workflows]** from the left navigation bar to access the *[!UICONTROL Workflows]* workspace.

From the **[!UICONTROL Workflows]** screen, select **[!UICONTROL Map CSV to XDM schema]** under the **[!UICONTROL Data ingestion]** section and then select **[!UICONTROL Launch]**.

![](../images/tutorials/map-a-csv-file/workflows.png)

The *[!UICONTROL Map CSV to XDM schema]* workflow appears, starting on the *[!UICONTROL Destination]* step. Choose a dataset for inbound data to be ingested into. You can either use an existing dataset or create a new one.

**Use an existing dataset**

To ingest your CSV data into an existing dataset, select **[!UICONTROL Use existing dataset]**. You can either retrieve an existing dataset using the search function or by scrolling through the list of existing datasets in the panel.

![](../images/tutorials/map-a-csv-file/use-existing-dataset.png)

To ingest your CSV data into a new dataset, select **[!UICONTROL Create new dataset]** and enter a name and description for the dataset in the fields provided. Select a schema by using either the search function or by scrolling through the list of schemas provided. Select **[!UICONTROL Next]** to proceed.

![](../images/tutorials/map-a-csv-file/create-new-dataset.png)

## Add data

The *[!UICONTROL Add data]* step appears. Drag-and-drop your CSV file into the space provided, or select **[!UICONTROL Choose files]** to manually input your CSV file.

![](../images/tutorials/map-a-csv-file/add-data.png)

The *[!UICONTROL Sample data]* section appears once the file is uploaded, showing the first ten rows of data. Once you have confirmed that the data has uploaded as expected, select **[!UICONTROL Next]**.

![](../images/tutorials/map-a-csv-file/sample-data.png)

## Map CSV fields to XDM schema fields

The *[!UICONTROL Mapping]* step appears. The columns of the CSV file are listed under *[!UICONTROL Source Field]*, with their corresponding XDM schema fields listed under *[!UICONTROL Target Field]*. Unselected target fields are outlined in red. You can use the filter fields option to narrow down the list of source fields available.

To map a CSV column to an XDM field, select the schema icon next to the column's corresponding target field.

![](../images/tutorials/map-a-csv-file/mapping.png)

The *[!UICONTROL Select schema field]* window appears. Here you can navigate the structure of the XDM schema and locate the field you wish to map the CSV column to. Click an XDM field to select it, then click **[!UICONTROL Select]**.

![](../images/tutorials/map-a-csv-file/select-schema-field.png)

The *[!UICONTROL Mapping]* screen reappears, with the selected XDM field now appearing under *[!UICONTROL Target Field]*.

![](../images/tutorials/map-a-csv-file/field-mapped.png)

If you do not wish to map a particular CSV column, you can remove the mapping by clicking the **remove icon** next to the target field. You can also remove all mappings by selecting the **[!UICONTROL Clear all mappings button]**.

![](../images/tutorials/map-a-csv-file/remove-mapping.png)

If you want to add a new mapping, select **[!UICONTROL Add new mapping]** at the top of the *[!UICONTROL Source Field]* list.

![](../images/tutorials/map-a-csv-file/add-mapping.png)

When mapping fields, you can also include functions to compute values based on input source fields. See the [mapping functions](#mapping-functions) section in the appendix for more information.

### Add calculated field

Calculated fields allow for values to be created based on the attributes in the input schema. These values can then be assigned to attributes in the target schema and be provided a name and description to allow for easier reference.

Select the **[!UICONTROL Add calculated field]** button to proceed.

![](../images/tutorials/map-a-csv-file/add-calculated-field.png)

The **[!UICONTROL Create calculated field]** panel appears. The left dialog box contains the fields, functions, and operators supported in calculated fields. Select one of the tabs to start adding functions, fields, or operators to the expression editor.

![](../images/tutorials/map-a-csv-file/create-calculated-fields.png)

| Tab | Description |
| --------- | ----------- |
| Fields | The fields tab lists fields and attributes available in the source schema. |
| Functions | The functions tab lists the functions available to transform the data. |
| Operators | The operators tab lists the operators that are available to transform the data. |

You can manually add fields, functions, and operators using the expression editor at the center. Select the editor to start creating an expression.

![](../images/tutorials/map-a-csv-file/expression-editor.png)

Select **[!UICONTROL Save]** to proceed.

The mapping screen reappears with your newly created source field. Apply the appropriate corresponding target field and select **[!UICONTROL Finish]** to complete the mapping.

![](../images/tutorials/map-a-csv-file/new-field.png)

## Monitor your dataflow

Once your CSV file is mapped and created, you can monitor the data that is being ingested through it. For more information on monitoring dataflows, see the tutorial on [monitoring streaming dataflows](../../ingestion/quality/monitor-data-flows.md).

## Next steps

By following this tutorial, you have successfully mapped a flat CSV file to an XDM schema and ingested it into [!DNL Platform]. This data can now be used by downstream [!DNL Platform] services such as [!DNL Real-time Customer Profile]. See the overview for [[!DNL Real-time Customer Profile]](../../profile/home.md) for more information.

## Appendix

The following section provides additional information for mapping CSV columns to XDM fields.

### Mapping functions

Certain mapping functions can be used to compute and calculate values based on what is entered in source fields. To use a function, type it in under *[!UICONTROL Source Field]* with appropriate syntax and inputs.

For example, to concatenate **city** and **country** CSV fields and assign them to the **city** XDM field, set the source field as `concat(city, ", ", county)`.

![](../images/tutorials/map-a-csv-file/mapping-function.png)

The following table lists all supported mapping functions, including sample expressions and their resulting outputs.

| Function | Description | Sample expression | Sample output |
| -------- | ----------- | ----------------- | ------------- |
| concat | Concatenates given strings. | concat("Hi, ", "there", "!") | `"Hi, there!"` |
| explode | Splits the string based on a regex and returns an array of parts. | explode("Hi, there!", " ") | `["Hi,", "there"]` |
| instr | Returns the location/index of a substring. | instr("adobe<span>.com", "com") | 6 |
| replacestr | Replaces the search string if present in original string. | replacestr("This is a string re test", "re", "replace") | "This is a string replace test" |
| substr| Returns a substring of a given length. | substr("This is a substring test", 7, 8) | " a subst" |
| lower /<br>lcase | Converts a string to lowercase. | lower("HeLLo")<br>lcase("HeLLo") | "hello" |
| upper /<br>ucase | Converts a string to uppercase. | upper("HeLLo")<br>ucase("HeLLo") | "HELLO" |
| split | Splits an input string on a separator. | split("Hello world", " ") | `["Hello", "world"]` |
| join | Joins a list of objects using the separator. | `join(" ", ["Hello", "world"]`) | "Hello world" |
| coalesce | Returns the first non-null object in a given list. | coalesce(null, null, null, "first", null, "second") | "first" |
| decode | Given a key and a list of key value pairs flattened as an array, the function returns the value if key is found or return a default value if present in the array. | decode("k2", "k1", "v1", "k2", "v2", "default") | "v2" |
| iif | Evaluates a given boolean expression and returns the specified value based on the result. | iif("s".equalsIgnoreCase("S"), "True", "False") | "True" |
| min | Returns the minimum of the given arguments. Uses natural ordering. | min(3, 1, 4) | 1 |
| max | Returns the maximum of the given arguments. Uses natural ordering. | max(3, 1, 4) | 4 |
| first | Retrieves the first given argument. | first("1", "2", "3") | "1" |
| last | Retrieves the last given argument. | last("1", "2", "3") | "3" |
| uuid /<br>guid | Generates a pseudo-random ID. | uuid()<br>guid() | {UNIQUE_ID} |
| now | Retrieves the current time. | now() | `2019-10-23T10:10:24.556-07:00[America/Los_Angeles]` |
| timestamp | Retrieves the current Unix time. | timestamp() | 1571850624571 |
| format | Formats the input date according to a specified format. | format({DATE}, "yyyy-MM-dd HH:mm:ss") | "2019-10-23 11:24:35" |
| dformat | Converts a timestamp to a date string according to a specified format. | dformat(1571829875, "dd-MMM-yyyy hh:mm") | "23-Oct-2019 11:24" |
| date | Converts a date string into a ZonedDateTime object (ISO 8601 format). | date("23-Oct-2019 11:24") | "2019-10-23T11:24:00+00:00" |
| date_part | Retrieves the parts of the date. The following component values are supported: <br><br>"year"<br>"yyyy"<br>"yy"<br><br>"quarter"<br>"qq"<br>"q"<br><br>"month"<br>"mm"<br>"m"<br><br>"dayofyear"<br>"dy"<br>"y"<br><br>"day"<br>"dd"<br>"d"<br><br>"week"<br>"ww"<br>"w"<br><br>"weekday"<br>"dw"<br>"w"<br><br>"hour"<br>"hh"<br>"hh24"<br>"hh12"<br><br>"minute"<br>"mi"<br>"n"<br><br>"second"<br>"ss"<br>"s"<br><br>"millisecond"<br>"ms" | date_part(date("2019-10-17 11:55:12"), "MM") | 10 |
| set_date_part | Replaces a component in a given date. The following components are accepted: <br><br>"year"<br>"yyyy"<br>"yy"<br><br>"month"<br>"mm"<br>"m"<br><br>"day"<br>"dd"<br>"d"<br><br>"hour"<br>"hh"<br><br>"minute"<br>"mi"<br>"n"<br><br>"second"<br>"ss"<br>"s" | set_date_part("m", 4, date("2016-11-09T11:44:44.797") | "2016-04-09T11:44:44.797" |
| make_date_time /<br>make_timestamp | Creates a date from parts. | make_date_time(2019, 10, 17, 11, 55, 12, 999, "America/Los_Angeles") | `2019-10-17T11:55:12.0​00000999-07:00[America/Los_Angeles]` |
| current_timestamp | Returns the current timestamp. | current_timestamp() | 1571850624571 |
| current_date | Returns the current date without a time component. | current_date() | "18-Nov-2019" |