---
title: Use The Delta Sharing Source Connector In The UI
description: Learn how to use the Delta Sharing source connector in the Experience Platform user interface.
badge: Beta
exl-id: 4e889401-08c1-4c81-85e7-49fe1328c65d
---
# Use the [!DNL Databricks Delta Sharing] source connector in the UI {#use-deltashare-in-the-ui}

>[!CONTEXTUALHELP]
>id="platform_sources_deltashare_schema"
>title="Schema structure"
>abstract="Ensure that you review your schema structure because once you proceed, you will no longer be able to make changes to your schema."

>[!AVAILABILITY]
>
>This feature is currently in a **limited beta** and will only be available until July 15, 2026. Contact your Adobe account team to request access to the beta.

Read this guide to learn how to use the [!DNL Databricks Delta Sharing] source connector in the Adobe Experience Platform user interface.

## Get started

This tutorial requires a working understanding of the following Experience Platform components: 

- [Sources](../../../../home.md): Use Sources to create connections and dataflows for supported external data sources.
- [Experience Data Model (XDM) schemas](../../../../../xdm/home.md): Shared tables are represented in Experience Platform through relational schemas.
- [Datasets](../../../../../catalog/home.md): Shared data is represented as virtual datasets in Experience Platform. The source data is not physically ingested or copied into the Experience Platform data lake. 
- [Query Service / Data Distiller](../../../../../query-service/home.md): Use Query Service or Data Distiller to query and work with virtual datasets. 

>[!IMPORTANT]
>
>Read the [[!DNL Delta Sharing] overview](../../../../connectors/data-sharing/delta-sharing.md) to learn about prerequisite steps that you need to complete before connecting your account to Experience Platform.

## Navigate the sources catalog

In the Experience Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the *[!UICONTROL Sources]* workspace. Select the appropriate category in the *[!UICONTROL Categories]* panel. Alternatively, use the search bar to navigate to the specific source that you want to use.

To use [!DNL Delta Sharing], select the **[!UICONTROL Delta Sharing for Databricks]** source card under the *[!UICONTROL Data sharing]* and then select **[!UICONTROL Add data]**.

>[!TIP]
>
>Sources in the sources catalog display the **[!UICONTROL Set up]** option when a given source does not yet have an authenticated account. Once an authenticated account is created, this option changes to **[!UICONTROL Add data]**.

![The sources catalog with the Delta Sharing source card under Data sharing selected.](../../../../images/tutorials/create/delta-sharing/catalog.png)

### Use an existing account

To use an existing account, select **[!UICONTROL Existing account]** and select the [!DNL Delta Sharing] account that you want to use from the accounts interface.

![The existing accounts interface in the sources workflow with Existing account selected.](../../../../images/tutorials/create/delta-sharing/existing.png)

### Create a new account

To create a new account, select **[!UICONTROL New account]** and provide a name and an optional description for your account. Provide values for the following authentication credentials:

- Endpoint
- Bearer token
- Share credentials version
- Expiration time

>[!TIP]
>
>Read the [[!DNL Delta Sharing] authentication guide](../../../../connectors/data-sharing/delta-sharing.md) for more information on these credentials.

When finished, select **[!UICONTROL Connect to source]** and allow for a few moments for your connection to establish.

![The new account interface with Delta Sharing authentication fields including endpoint, bearer token, share credentials version, and expiration time.](../../../../images/tutorials/create/delta-sharing/new.png)

## Select your data

Next, select the for which you want to create a virtual dataset in Experience Platform and platform-based applications. Use the table directory to navigate to the desired data and use the preview interface to view the contents and structure of the selected data. When finished, select **[!UICONTROL Next]** to select columns for your schema.

![The select data step showing the table directory and preview of the data to ingest.](../../../../images/tutorials/create/delta-sharing/select-data.png)

## Select your schema

>[!IMPORTANT]
>
>Once you select **[!UICONTROL Next]**, you will not be able to change the selected schema structure. If you have already selected **[!UICONTROL Next]** and moved past the schema selection step, you can no longer update your selected schema if you return to a previous step. To modify your schema, you must restart the dataflow configuration process and begin from the initial step.

After selecting a table from your [!DNL Delta Sharing] source, Experience Platform automatically infers the relational schema. At this stage, you are required to provide a schema name before proceeding. Optionally, you may also specify a **primary key** and a **version descriptor** to further define your schema.

**Primary key**: Set a primary key if your table has one. Consider the following factors when selecting a primary key:

- Select a key that is unique per row for the logical entity you care about (e.g., one row per order, per customer, per transaction).
- Select a key that is stable over time (doesn't change once written).
- Select a key that is not a high‑cardinality, non‑business surrogate that is meaningless for governance (e.g., a random "row_id" that the upstream regenerates).

**Version descriptor**: The version descriptor marks a column that tells you which row is the "latest" record for a given key. Use this as a reference in the case that your table keeps multiple versions of the same entity, and you want a well‑defined way to choose the current or latest one. Consider the following factors when selecting a version descriptor:

- A timestamp such as `last_updated_at` or `modified_ts`.
- An increasing numeric version such as `version_num` or `sequence_number`.

You can leave the version descriptor empty if you fall into the following scenarios:

- The table is purely transactional / event‑level (This means that each row is a one‑time event and doesn't represent a mutable "entity" with versions).
- There's no reliable "latest" indicator column.
- You haven't validated what the timestamp/version column really means.

>[!TIP]
>
>If you are unsure, you can elect to leave the version descriptor blank. You can still query the virtual dataset and implement "latest" logic directly in SQL.

![The schema selection step with inferred relational schema, schema name, and optional primary key and version descriptor fields.](../../../../images/tutorials/create/delta-sharing/schema.png)

## Provide dataset and dataflow details

A dataset is a management construct for a collection of data, typically a table, that contains a schema with columns or fields. In **Data Sharing**, the selected data is represented in Experience Platform as a virtual dataset. The data remains in the source system and is not ingested or persisted into the data lake.

Once your virtual dataset is configured, provide details for your dataflow, including a name, an optional description, and alert configurations.

| Dataflow configurations | Description |
| --- | --- |
| Dataflow name | The name of the dataflow. By default, this will use the name of the file that is being imported. |
| Description | (Optional) A brief description of your dataflow. |
| Alerts | Experience Platform can produce event-based alerts which users can subscribe to, these options allow a running dataflow to trigger these.  For more information, read the [alerts overview](../../alerts.md) <ul><li>**Sources Dataflow Run Start**: Select this alert to receive a notification when your dataflow run begins.</li><li>**Sources Dataflow Run Success**: Select this alert to receive a notification if your dataflow ends without any errors.</li><li>**Sources Dataflow Run Failure**: Select this alert to receive a notification if your dataflow run ends with any errors.</li></ul> |

{style="table-layout:auto"}

![The dataset and dataflow details interface with dataflow name, description, and alert configuration options.](../../../../images/tutorials/create/delta-sharing/details.png)

## Review your dataflow

The *[!UICONTROL Review]* step appears, allowing you to review the details of your dataflow before it is created. Details are grouped within the following categories:

- **[!UICONTROL Connection]**: Shows the account name, source platform, and the source name.
- **[!UICONTROL Assign dataset and map fields]**: Shows the target dataset and the schema that the dataset adheres to.

After confirming the details are correct, select **[!UICONTROL Finish]**.

![The Review step summarizing connection and dataset assignment before finishing the dataflow.](../../../../images/tutorials/create/delta-sharing/review.png)

## Monitor your dataflow

Once your dataflow has been created, you can monitor its status and activity to view information such as run status, success, and errors. For more information, see the tutorial on [monitoring accounts and dataflows in the UI](../../../../../dataflows/ui/monitor-sources.md).