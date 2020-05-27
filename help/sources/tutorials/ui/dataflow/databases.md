---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Configure a dataflow for a database connector in the UI
topic: overview
---

# Configure a dataflow for a database connector in the UI

A dataflow is a scheduled task that retrieves and ingests data from a source to a Platform dataset. This tutorial provides steps to configure a new dataflow using your database base connector.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

-   [Experience Data Model (XDM) System](../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
    -   [Basics of schema composition](../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
    -   [Schema Editor tutorial](../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
-   [Real-time Customer Profile](../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

Additionally, this tutorial requires that you have already created a database connector. A list of tutorials for creating different database connectors in the UI can be found in the [source connectors overview](../../../home.md).

## Select data

After creating your database connector, the *[!UICONTROL Select data]* step appears, providing an interactive interface for you to explore your database hierarchy.

- The left half of the interface is a browser, displaying your account's list of databases.
- The right half of the interface lets you preview up to 100 rows of data.

Select the database you wish to use, then click **[!UICONTROL Next]**.

![](../../../images/tutorials/dataflow/databases/add-data.png)

## Map data fields to an XDM schema

The *Mapping* step appears, providing an interactive interface to map the source data to a Platform dataset.

Choose a dataset for inbound data to be ingested into. You can either use an existing dataset or create a new dataset.

### Use an existing dataset

To ingest data into an existing dataset, select **[!UICONTROL Existing dataset]**, then click the dataset icon.

![](../../../images/tutorials/dataflow/databases/existing-dataset.png)

The *[!UICONTROL Select dataset]* dialog appears. Find the dataset you you wish to use, select it, then click **[!UICONTROL Continue]**.

![](../../../images/tutorials/dataflow/databases/select-existing-dataset.png)

### Use a new dataset

To ingest data into a new dataset, select **[!UICONTROL New dataset]** and enter a name and description for the dataset in the fields provided.

You can attach a schema field by typing a schema name in the **[!UICONTROL Select schema]** search bar. You can also select the drop down icon to see a list of existing schemas. Alternatively, you can select **[!UICONTROL Advanced search]** to a screen of existing schemas including their respective details.

![](../../../images/tutorials/dataflow/databases/new-dataset.png)

The *[!UICONTROL Select schema] dialog appears. Select the schema you wish to apply to the new dataset, then click **[!UICONTROL Done]**.

![](../../../images/tutorials/dataflow/databases/select-existing-schema.png)

Based on your needs, you can choose to map fields directly, or use mapper functions to transform source data to derive computed or calculated values. For more information on data mapping and mapper functions, refer to the tutorial on [mapping CSV data to XDM schema fields](../../../../ingestion/tutorials/map-a-csv-file.md).

Once your source data is mapped, click **[!UICONTROL Next]**.

![](../../../images/tutorials/dataflow/databases/mapping.png)

## Schedule ingestion runs

The *[!UICONTROL Scheduling]* step appears, allowing you to configure an ingestion schedule to automatically ingest the selected source data using the configured mappings. The following table outlines the different configurable fields for scheduling:

| Field | Description |
| --- | --- |
| Frequency | Selectable frequencies include Minute, Hour, Day, and Week. |
| Interval | An integer that sets the interval for the selected frequency. |
| Start time | A UTC timestamp for which the very first ingestion will occur. The start time value must be set in epoch time in seconds. |
| Backfill | A boolean value that determines what data is initially ingested. If *Backfill* is enabled, all current files in the specified path will be ingested during the first scheduled ingestion. If *Backfill* is disabled, only the files that are loaded in between the first run of ingestion and the *Start time* will be ingested. Files loaded prior to *Start time* will not be ingested. |
| Delta Column | An option with a filtered set of source schema fields of type, date, or time. This field is used to differentiate between new and existing data. Incremental data will be ingested based on the timestamp of selected column. |

Dataflows are designed to automatically ingest data on a scheduled basis. If you wish to only ingest once through this workflow, you can do so by configuring the **[!UICONTROL Frequency]** to "Day" and applying a very large number for the **[!UICONTROL Interval]**, such as 10000 or similar.

Provide values for the schedule and select **[!UICONTROL Next]**.

![](../../../images/tutorials/dataflow/databases/schedule.png)

## Name your dataflow

The *[!UICONTROL dataflow detail]* step appears, where you must provide a name and an optional description for the dataflow. Select **[!UICONTROL Next]** when finished.

![](../../../images/tutorials/dataflow/databases/dataflow-detail.png)

## Review your dataflow

The *[!UICONTROL Review]* step appears, allowing you to review your new dataflow before it is created. Details are grouped within the following categories:

- *Connection*: Shows the source type, the relevant path of the chosen source file, and the amount of columns within that source file.
- *Assign dataset & map fields*: Shows which dataset the source data is being ingested into, including the schema that the dataset adheres to.
- *Scheduling*: Shows the active period, frequency, and interval of the ingestion schedule.

Once you have reviewed your dataflow, click **[!UICONTROL Finish]** and allow some time for the dataflow to be created.

![](../../../images/tutorials/dataflow/databases/review.png)

## Monitor your dataflow

Once your dataflow has been created, you can monitor the data that is being ingested through it. For more information on how to monitor your dataflows, see the tutorial on [accounts and dataflows](../monitor.md).

## Next steps

By following this tutorial, you have successfully created a dataflow to bring in data from an external database and gained insight on monitoring datasets. Incoming data can now be used by downstream Platform services such as Real-time Customer Profile and Data Science Workspace. See the following documents for more details:

-   [Real-time Customer Profile overview](../../../../profile/home.md)
-   [Data Science Workspace overview](../../../../data-science-workspace/home.md)

## Appendix

The following sections provide additional information for working with source connectors.

### Disable a dataflow

When a dataflow is created, it immediately becomes active and ingests data according to the schedule it was given. You can disable an active dataflow at any time by following the instructions below.

Within the *[!UICONTROL Sources]* workspace, select the **[!UICONTROL Dataflowss]** tab. Next, select the dataflow that you wish to disable.

![](../../../images/tutorials/dataflow/databases/list-of-dataflows.png)

The *Properties* column appears on the right-hand side of the screen, including an **[!UICONTROL Enabled]** toggle button. Select the toggle to disable the dataflow. The same toggle can be used to re-enable a dataflow after it has been disabled.

![](../../../images/tutorials/dataflow/databases/disable.png)

### Activate inbound data for Profile population

Inbound data from your source connector can be used towards enriching and populating your Real-time Customer Profile data. For more information on populating your Real-Customer Profile data, see the tutorial on [Profile population](../profile.md).