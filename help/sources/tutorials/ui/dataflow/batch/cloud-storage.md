---
keywords: Experience Platform;home;popular topics;dataflow;Dataflow
solution: Experience Platform
title: Configure a Dataflow for a Cloud Storage Batch Connector in the UI
topic: overview
type: Tutorial
description: A dataflow is a scheduled task that retrieves and ingests data from a source to a Platform dataset. This tutorial provides steps to configure a new dataflow using your cloud storage account.
exl-id: b327bbea-039d-4c04-afd3-f1d6a5f902a6
---
# Configure a dataflow for a cloud storage batch connection in the UI

A dataflow is a scheduled task that retrieves and ingests data from a source to a [!DNL Platform] dataset. This tutorial provides steps to configure a new dataflow using your cloud storage account.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
  * [Basics of schema composition](../../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-time Customer Profile]](../../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

Additionally, this tutorial requires that you have an established cloud storage account. A list of tutorials for creating different cloud storage accounts in the UI can be found in the [source connectors overview](../../../../home.md).

### Supported file formats

[!DNL Experience Platform] supports the following file formats to be ingested from external storages:

* Delimiter-separated values (DSV): Any single-character value can be used as a delimiter for DSV-formatted data files.
* [!DNL JavaScript Object Notation] (JSON): JSON-formatted data files must be XDM-compliant.
* [!DNL Apache Parquet]: Parquet-formatted data files must be XDM-compliant.

## Select data

After creating your cloud storage account, the **[!UICONTROL Select data]** step appears, providing an interface for you to explore your cloud storage file hierarchy.

* The left part of the interface is a directory browser, displaying your cloud storage files and directories.
* The right part of the interface lets you preview up to 100 rows of data from a compatible file.

![interface](../../../../images/tutorials/dataflow/cloud-storage/batch/interface.png)

Selecting a listed folder allows you to traverse the folder hierarchy into deeper folders. You can select single folder to ingest all files in the folder recursively. When ingesting an entire folder, you must ensure that all files in the folder share the same schema.

Once you have a compatible file or folder selected, select the corresponding data format from the [!UICONTROL Select data format] dropdown menu.

The following table displays the appropriate data format for the supported file types:

| File type | Data format |
| --- | --- |
| CSV | [!UICONTROL Delimited]|
| JSON | [!UICONTROL JSON] |
| Parquet | [!UICONTROL XDM Parquet] |

Select **[!UICONTROL JSON]** and wait a few seconds for the preview interface to populate.

![select-data](../../../../images/tutorials/dataflow/cloud-storage/batch/select-data.png)

>[!NOTE]
>
>Unlike delimited and JSON file types, Parquet formatted files are not available for preview.

The preview interface allows you to inspect the contents and structure of a file. By default, the preview interface displays the first file in the folder you selected.

To preview a different file, select the preview icon beside the name of the file you want to inspect.

![default-preview](../../../../images/tutorials/dataflow/cloud-storage/batch/default-preview.png)

Once you have inspected the contents and structure of the files in your folder, select **[!UICONTROL Next]** to ingest all files in the folder recursively.

![select-folder](../../../../images/tutorials/dataflow/cloud-storage/batch/select-folder.png)

If you prefer to select a specific file, select the file you want to ingest, and then select **[!UICONTROL Next]**.

![select-file](../../../../images/tutorials/dataflow/cloud-storage/batch/select-file.png)

### Set a custom delimiter for delimited files

You can set a custom delimiter when ingesting delimited files. Select the **[!UICONTROL Delimiter]** option and then select a delimiter from the dropdown menu. The menu displays the most frequently used options for delimiters, including a comma (`,`), a tab (`\t`), and a pipe (`|`). If you prefer to use a custom delimiter, select **[!UICONTROL Custom]** and enter a single-character delimiter of your choice in the pop up input bar.

Once you have selected your data format and set your delimiter, select **[!UICONTROL Next]**.

![](../../../../images/tutorials/dataflow/cloud-storage/batch/delimiter.png)

## Map data fields to an XDM schema

The **[!UICONTROL Mapping]** step appears, providing an interactive interface to map the source data to a [!DNL Platform] dataset. Source files formatted in Parquet must be XDM compliant and do not require you to manually configure the mapping, while CSV files require you to explicitly configure the mapping, but allow you to pick which source data fields to map. JSON files, if marked as XDM complaint, does not require manual configuration. However, if it is not marked as XDM compliant, it will require you to explicitly configure the mapping.

Choose a dataset for inbound data to be ingested into. You can either use an existing dataset or create a new one.

**Use an existing dataset**

To ingest data into an existing dataset, select **[!UICONTROL Existing dataset]**, then select the dataset icon.

![](../../../../images/tutorials/dataflow/cloud-storage/batch/use-existing-data.png)

The **[!UICONTROL Select dataset]** dialog appears. Find the dataset you you wish to use, select it, then click **[!UICONTROL Continue]**.

![](../../../../images/tutorials/dataflow/cloud-storage/batch/select-existing-dataset.png)

**Use a new dataset**

To ingest data into a new dataset, select **[!UICONTROL New dataset]** and enter a name and description for the dataset in the fields provided. To add a schema, you can enter an existing schema name in the **[!UICONTROL Select schema]** dialog box. Alternatively, you can select the **[!UICONTROL Schema advanced search]** to search for an appropriate schema.

During this step, you can enable your dataset for [!DNL Real-time Customer Profile] and create a holistic view of an entity's attributes and behaviors. Data from all enabled datasets will be included in [!DNL Profile] and changes are applied when you save your dataflow.

Toggle the **[!UICONTROL Profile dataset]** button to enable your target dataset for [!DNL Profile].

![](../../../../images/tutorials/dataflow/cloud-storage/batch/new-dataset.png)

The **[!UICONTROL Select schema]** dialog appears. Select the schema you wish to apply to the new dataset, then select **[!UICONTROL Done]**.

![](../../../../images/tutorials/dataflow/cloud-storage/batch/select-schema.png)

Based on your needs, you can choose to map fields directly, or use mapper functions to transform source data to derive computed or calculated values. For more information on data mapping and mapper functions, refer to the tutorial on [mapping CSV data to XDM schema fields](../../../../../ingestion/tutorials/map-a-csv-file.md). 

![](../../../../images/tutorials/dataflow/cloud-storage/batch/mapping.png)

For JSON files, in addition to directly mapping fields to other fields, you can directly map objects to other objects and arrays to other arrays You can also preview and map complex data types such as arrays in JSON files using a cloud storage source connector.

![](../../../../images/tutorials/dataflow/cloud-storage/batch/source-field-json.png)

![](../../../../images/tutorials/dataflow/cloud-storage/batch/target-field-json.png)

Please note that you cannot map across different types. For example, you cannot map an object to an array, or a field to an object.

>[!TIP]
>
>[!DNL Platform] provides intelligent recommendations for auto-mapped fields based on the target schema or dataset that you selected. You can manually adjust mapping rules to suit your use cases.

Select **[!UICONTROL Preview data]** to see mapping results of up to 100 rows of sample data from the selected dataset.

During the preview, the identity column is prioritized as the first field, as it is the key information necessary when validating mapping results.

![](../../../../images/tutorials/dataflow/cloud-storage/batch/mapping-preview.png)

Once your source data is mapped, select **[!UICONTROL Close]**.

## Schedule ingestion runs

The **[!UICONTROL Scheduling]** step appears, allowing you to configure an ingestion schedule to automatically ingest the selected source data using the configured mappings. The following table outlines the different configurable fields for scheduling:

| Field | Description |
| --- | --- |
| Frequency | Selectable frequencies include `Once`, `Minute`, `Hour`, `Day`, and `Week`. |
| Interval | An integer that sets the interval for the selected frequency. |
| Start time | A UTC timestamp indicating when the very first ingestion is set to occur. |
| Backfill | A boolean value that determines what data is initially ingested. If **[!UICONTROL Backfill]** is enabled, all current files in the specified path will be ingested during the first scheduled ingestion. If **[!UICONTROL Backfill]** is disabled, only the files that are loaded in between the first run of ingestion and the start time will be ingested. Files loaded prior to start time will not be ingested. |

Dataflows are designed to automatically ingest data on a scheduled basis. Start by selecting the ingestion frequency. Next, set the interval to designate the period between two flow runs. The interval's value should be a non-zero integer and should be set to greater than or equal to 15.

To set the start time for ingestion, adjust the date and time displayed in the start time box. Alternatively, you can select the calendar icon to edit the start time value. Start time must be greater than or equal to the current time in UTC.

Provide values for the schedule and select **[!UICONTROL Next]**.

![](../../../../images/tutorials/dataflow/cloud-storage/batch/scheduling-interval-on.png)

### Set up a one-time ingestion dataflow

To set up one-time ingestion, select the frequency drop down arrow and select **[!UICONTROL Once]**. You can continue to make edits to a dataflow set for a one-time frequency ingestion, so long as the start time remains in the future. Once the start time has passed, the one-time frequency value can no longer be edited. **[!UICONTROL Interval]** and **[!UICONTROL Backfill]** are not visible when setting up a one-time ingestion dataflow.

>[!IMPORTANT]
>
>It is strongly recommended to schedule your dataflow for one-time ingestion when using the [FTP connector](../../../../connectors/cloud-storage/ftp.md).

Once you have provided appropriate values to the schedule, select **[!UICONTROL Next]**.

![](../../../../images/tutorials/dataflow/cloud-storage/batch/scheduling-once.png)

## Provide dataflow details

The **[!UICONTROL Dataflow detail]** step appears, allowing you to name and give a brief description about your new dataflow.

During this process, you can also enable **[!UICONTROL Partial ingestion]** and **[!UICONTROL Error diagnostics]**. Enabling **[!UICONTROL Partial ingestion]** provides the ability to ingest data containing errors, up to a certain threshold that you can set. Enabling **[!UICONTROL Error diagnostics]** will provide details on any incorrect data that is batched separately. For more information, see the [partial batch ingestion overview](../../../../../ingestion/batch-ingestion/partial.md).

Provide values for the dataflow and select **[!UICONTROL Next]**.

![](../../../../images/tutorials/dataflow/cloud-storage/batch/dataflow-detail.png)

## Review your dataflow

The **[!UICONTROL Review]** step appears, allowing you to review your new dataflow before it is created. Details are grouped within the following categories:

* **[!UICONTROL Connection]**: Shows the source type, the relevant path of the chosen source file, and the amount of columns within that source file.
* **[!UICONTROL Assign dataset & map fields]**: Shows which dataset the source data is being ingested into, including the schema that the dataset adheres to.
* **[!UICONTROL Scheduling]**: Shows the active period, frequency, and interval of the ingestion schedule.

Once you have reviewed your dataflow, click **[!UICONTROL Finish]** and allow some time for the dataflow to be created.

![](../../../../images/tutorials/dataflow/cloud-storage/batch/review.png)

## Monitor your dataflow

Once your dataflow has been created, you can monitor the data that is being ingested through it to see information on ingestion rates, success, and errors. For more information on how to monitor dataflow, see the tutorial on [monitoring accounts and dataflows in the UI](../../monitor.md).

## Delete your dataflow

You can delete dataflows that are no longer necessary or were incorrectly created using the **[!UICONTROL Delete]** function available in the **[!UICONTROL Dataflows]** workspace. For more information on how to delete dataflows, see the tutorial on [deleting dataflows in the UI](../../delete.md).

## Next steps

By following this tutorial, you have successfully created a dataflow to bring in data from an external cloud storage, and gained insight on monitoring datasets. To learn more about creating dataflows, you can supplement your learning by watching the video below. Additionally, incoming data can now be used by downstream [!DNL Platform] services such as [!DNL Real-time Customer Profile] and [!DNL Data Science Workspace]. See the following documents for more details:

*   [[!DNL Real-time Customer Profile] overview](../../../../../profile/home.md)
*   [[!DNL Data Science Workspace] overview](../../../../../data-science-workspace/home.md)

>[!WARNING]
>
> The [!DNL Platform] UI shown in the following video is out-of-date. Please refer to the documentation above for the latest UI screenshots and functionality.

>[!VIDEO](https://video.tv.adobe.com/v/29695?quality=12&learn=on)

## Appendix

The following sections provide additional information for working with source connectors.

### Disable a dataflow

When a dataflow is created, it immediately becomes active and ingests data according to the schedule it was given. You can disable an active dataflow at any time by following the instructions below.

Within the **[!UICONTROL Sources]** workspace, click the **[!UICONTROL Browse]** tab. Next, click the name of the account that's associated the active dataflow you wish to disable.

![](../../../../images/tutorials/dataflow/cloud-storage/batch/browse.png)

The **[!UICONTROL Source activity]** page appears. Select the active dataflow from the list to open its **[!UICONTROL Properties]** column on the right-hand side of the screen, which contains an **[!UICONTROL Enabled]** toggle button. Click the toggle to disable the dataflow. The same toggle can be used to re-enable a dataflow after it has been disabled.

![](../../../../images/tutorials/dataflow/cloud-storage/batch/disable-source.png)

### Activate inbound data for [!DNL Profile] population

Inbound data from your source connector can be used towards enriching and populating your [!DNL Real-time Customer Profile] data. For more information on populating your [!DNL Real-time Customer Profile] data, see the tutorial on [Profile population](../../profile.md).
