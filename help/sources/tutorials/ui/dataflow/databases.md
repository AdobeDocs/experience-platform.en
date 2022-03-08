---
keywords: Experience Platform;home;popular topics;database connector
solution: Experience Platform
title: Configure a Dataflow for a Database Source Connection in the UI
topic-legacy: overview
type: Tutorial
description: A dataflow is a scheduled task that retrieves and ingests data from a source to a Platform dataset. This tutorial provides steps to configure a new dataflow using your database account.
exl-id: 9fd8a7ec-bbd8-4890-9860-e6defc6cade3
---
# Configure a dataflow for a database connection in the UI

A dataflow is a scheduled task that retrieves and ingests data from a source to a dataset in Adobe Experience Platform. This tutorial provides steps on how to create a dataflow for a database source using Platform UI.

>[!NOTE]
>
>In order to create a dataflow, you must already have an authenticated account with a database source. A list of tutorials for creating different database source accounts in the UI can be found in the [sources overview](../../../home.md#database).

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  * [Basics of schema composition](../../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-time Customer Profile]](../../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

## Add data

After creating your database account, the **[!UICONTROL Add data]** step appears, providing an interface for you to explore your database hierarchy

* The left half of the interface is a browser, displaying a list of data tables contained in your account. The interface also includes a search option that allows you to quickly identify the source data you intend to use.
* The right half of the interface is a preview panel, allowing you to preview up to 100 rows of data.

>[!NOTE]
>
>The search source data option is available to all tabular-based source connectors excluding the Analytics, Classifications, Event Hubs, and Kinesis connectors.

Once you find the source data, select the table, then select **[!UICONTROL Next]**.

![select-data](../../../images/tutorials/dataflow/databases/select-data.png)

## Provide dataflow details

The [!UICONTROL Dataflow detail] page allows you to select whether you want to use an existing dataset or a new dataset. During this process, you can also configure settings for [!UICONTROL Profile dataset], [!UICONTROL Error diagnostics], [!UICONTROL Partial ingestion], and [!UICONTROL Alerts].

![dataflow-detail](../../../images/tutorials/dataflow/databases/dataflow-detail.png)

### Use an existing dataset

To ingest data into an existing dataset, select **[!UICONTROL Existing dataset]**. You can either retrieve an existing dataset using the [!UICONTROL Advanced search] option or by scrolling through the list of existing datasets in the dropdown menu. Once you have selected a dataset, provide a name and a description for your dataflow.

![existing-dataset]()

### Use a new dataset

To ingest into a new dataset, select **[!UICONTROL New dataset]** and then provide an output dataset name and an optional description. Next, select a schema to map to using the [!UICONTROL Advanced search] option or by scrolling through the list of existing schemas in the dropdown menu. Once you have selected a schema, provide a name and a description for your dataflow.

![new-dataset]()

### Enable [!DNL Profile] and error diagnostics

Next, select the **[!UICONTROL Profile dataset]** toggle to enable your dataset for [!DNL Profile]. This allows you to create a holistic view of an entity's attributes and behaviors. Data from all [!DNL Profile]-enabled datasets will be included in [!DNL Profile] and changes are applied when you save your dataflow.

[!UICONTROL Error diagnostics] enables detailed error message generation for any erroneous records that occur in your dataflow, while [!UICONTROL Partial ingestion] allows you to ingest data containing errors, up to a certain threshold that you manually define. See the [partial batch ingestion overview](../../../../ingestion/batch-ingestion/partial.md) for more information.

![profile-and-errors]()

### Enable alerts

You can enable alerts to receive notifications on the status of your dataflow. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to sources alerts using the UI](../alerts.md).

When you are finished providing details to your dataflow, select **[!UICONTROL Next]**.

![alerts]()

## Map data fields to an XDM schema

The [!UICONTROL Mapping] step appears, providing you with an interface to map the source fields from your source schema to their appropriate target XDM fields in the target schema.

Based on your needs, you can choose to map fields directly, or use data prep functions to transform source data to derive computed or calculated values. For comprehensive steps on using the mapper interface and calculated fields, see the [Data Prep UI guide](../../../../data-prep/ui/mapping.md).

>[!TIP]
>
>Platform provides intelligent recommendations for auto-mapped fields based on the target schema or dataset that you selected. You can manually adjust mapping rules to suit your use cases.

![](../../../images/tutorials/dataflow/all-tabular/mapping.png)

Once your source data is mapped, select **[!UICONTROL Close]**.

## Schedule ingestion runs

The [!UICONTROL Scheduling] step appears, allowing you to configure an ingestion schedule to automatically ingest the selected source data using the configured mappings. By default, scheduling is set to `Once`. To adjust your ingestion frequency, select **[!UICONTROL Frequency]** and then select an option from the dropdown menu.

>[!TIP]
>
>Interval and backfill are not visible during a one-time ingestion.

![scheduling]()

If you set your ingestion frequency to `Minute`, `Hour`, `Day`, or `Week`, then you can enable [!UICONTROL Backfill] to ingest historical data. Furthermore, a scheduled ingestion frequency also requires you to define a column for incremental ingestion of data. This column is used to differentiate between new and existing data. 

![backfill]()

The following table outlines the different configurable fields for scheduling:

| Field | Description |
| --- | --- |
| Frequency | The frequency in which an ingestion happens. Selectable frequencies include `Once`, `Minute`, `Hour`, `Day`, and `Week`. |
| Interval | An integer that sets the interval for the selected frequency. The interval's value should be a non-zero integer and should be set to greater than or equal to 15. |
| Start time | A UTC timestamp indicating when the very first ingestion is set to occur. Start time must be greater than or equal to your current UTC time. |
| Backfill | A boolean value that determines what data is initially ingested. If **[!UICONTROL Backfill]** is enabled, all current files in the specified path will be ingested during the first scheduled ingestion. If **[!UICONTROL Backfill]** is disabled, only the files that are loaded in between the first run of ingestion and the start time will be ingested. Files loaded prior to start time will not be ingested. |
| Load incremental data by | An option with a filtered set of source schema fields of type, date, or time. This field is used to differentiate between new and existing data. Incremental data will be ingested based on the timestamp of selected column. |

![](../../../images/tutorials/dataflow/databases/schedule-interval-on.png)

## Review your dataflow

The **[!UICONTROL Review]** step appears, allowing you to review your new dataflow before it is created. Details are grouped within the following categories:

* **[!UICONTROL Connection]**: Shows the source type, the relevant path of the chosen source file, and the amount of columns within that source file.
* **[!UICONTROL Assign dataset & map fields]**: Shows which dataset the source data is being ingested into, including the schema that the dataset adheres to.
* **[!UICONTROL Scheduling]**: Shows the active period, frequency, and interval of the ingestion schedule.

Once you have reviewed your dataflow, click **[!UICONTROL Finish]** and allow some time for the dataflow to be created.

![](../../../images/tutorials/dataflow/databases/review.png)

## Monitor your dataflow

Once your dataflow has been created, you can monitor the data that is being ingested through it to see information on ingestion rates, success, and errors. For more information on how to monitor dataflow, see the tutorial on [monitoring accounts and dataflows in the UI](../monitor.md).

## Delete your dataflow

You can delete dataflows that are no longer necessary or were incorrectly created using the **[!UICONTROL Delete]** function available in the **[!UICONTROL Dataflows]** workspace. For more information on how to delete dataflows, see the tutorial on [deleting dataflows in the UI](../delete.md).

## Next steps

By following this tutorial, you have successfully created a dataflow to bring in data from an external database and gained insight on monitoring datasets. Incoming data can now be used by downstream [!DNL Platform] services such as [!DNL Real-time Customer Profile] and [!DNL Data Science Workspace]. See the following documents for more details:

-   [[!DNL Real-time Customer Profile] overview](../../../../profile/home.md)
-   [[!DNL Data Science Workspace] overview](../../../../data-science-workspace/home.md)

## Appendix

The following sections provide additional information for working with source connectors.

### Disable a dataflow

When a dataflow is created, it immediately becomes active and ingests data according to the schedule it was given. You can disable an active dataflow at any time by following the instructions below.

Within the **[!UICONTROL Sources]** workspace, select the **[!UICONTROL Dataflows]** tab. Next, select the dataflow that you wish to disable.

![](../../../images/tutorials/dataflow/databases/list-of-dataflows.png)

The **[!UICONTROL Properties]** column appears on the right-hand side of the screen, including an **[!UICONTROL Enabled]** toggle button. Select the toggle to disable the dataflow. The same toggle can be used to re-enable a dataflow after it has been disabled.

![](../../../images/tutorials/dataflow/databases/disable.png)

### Activate inbound data for [!DNL Profile] population

Inbound data from your source connector can be used towards enriching and populating your [!DNL Real-time Customer Profile] data. For more information on populating your [!DNL Real-time Customer Profile] data, see the tutorial on [Profile population](../profile.md).
