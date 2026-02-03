---
title: Snowflake Batch connection
description: Create a live Snowflake data share to receive daily audience updates directly as shared tables into your account.
last-substantial-update: 2025-10-23
badgeUltimate: label="Ultimate" type="Positive"
exl-id: 6959ccd0-ba30-4750-a7de-d0a709292ef7
---
# Snowflake Batch connection {#snowflake-destination}

>[!AVAILABILITY]
>
>This destination connector is in limited availability and only available to Real-Time CDP Ultimate customers provisioned in the [VA7 region](/help/landing/multi-cloud.md#azure-regions).

## Overview {#overview}

Use this destination to send audience data into dynamic tables in your Snowflake account. Dynamic tables provide access to your data without requiring physical data copies.

Read the following sections to understand how the Snowflake destination works and how data is transferred between Adobe and Snowflake.

### How Snowflake data sharing works {#data-sharing}

This destination uses a [!DNL Snowflake] data share, which means that no data is physically exported or transferred to your own Snowflake instance. Instead, Adobe grants you read-only access to a live table hosted within Adobe's Snowflake environment. You can query this shared table directly from your Snowflake account, but you do not own the table and cannot modify or retain it beyond the specified retention period. Adobe fully manages the lifecycle and structure of the shared table.

The first time after you set up a dataflow from Adobe to your Snowflake account, you are prompted to accept the private listing from Adobe.

![Screenshot showing the Snowflake private listing acceptance screen](../../assets/catalog/cloud-storage/snowflake-batch/snowflake-accept-listing.png)

### Data retention and Time-to-Live (TTL) {#ttl}

All data shared through this integration has a fixed Time-to-Live (TTL) of seven days. Seven days after the last export, the dynamic table automatically expires and becomes inaccessible, regardless of whether the dataflow is still active. If you need to retain the data for longer than seven days, you must copy the contents into a table that you own in your own Snowflake instance before the TTL expires.

>[!IMPORTANT]
>
>Deleting a dataflow in Experience Platform will result in the dynamic table disappearing from your Snowflake account.

### Audience update behavior {#audience-update-behavior}

If your audience is evaluated in [batch mode](../../../segmentation/methods/batch-segmentation.md), the data in the shared table is refreshed every 24 hours. This means there may be a delay of up to 24 hours between changes in audience membership and when those changes are reflected in the shared table.

### Batch data sharing logic {#batch-data-sharing}

When a dataflow runs for an audience for the first time, it performs a backfill and shares all currently qualified profiles. After this initial backfill, the destination provides periodic snapshots of the complete audience membership. Each snapshot replaces the previous data in the shared table, ensuring that you always see the latest complete view of the audience without historical data.

## Streaming versus batch data sharing {#batch-vs-streaming}

Experience Platform provides two types of Snowflake destinations: [Snowflake Streaming](snowflake.md) and [Snowflake Batch](snowflake-batch.md).

While both destinations give you access to your data in Snowflake in a zero-copy manner, there are some recommended best practices in terms of use cases for each connector.

The table below will help you decide which connector to use by outlining the scenarios where each data sharing method is most appropriate.

|  | Choose [Snowflake Batch](snowflake-batch.md) when you need | Choose [Snowflake Streaming](snowflake.md) when you need |
|--------|-------------------|----------------------|
| **Update frequency** | Periodic snapshots | Continuous updates in real-time |
| **Data presentation** | Complete audience snapshot that replaces previous data | Incremental updates based on profile changes |
| **Use case focus** | Analytical/ML workloads where latency is not critical | Immediate action scenarios requiring real-time updates |
| **Data management** | Always see latest complete snapshot | Incremental updates based on audience membership changes |
| **Example scenarios** | Business reporting, data analysis, ML model training | Marketing campaign suppression, real-time personalization |

For more information about streaming data sharing, see the [Snowflake Streaming connection](snowflake.md) documentation.

## Use cases {#use-cases}

Batch data sharing is ideal for scenarios where you need a complete snapshot of your audience and real-time updates are not required, such as:

* **Analytical workloads**: When performing data analysis, reporting, or business intelligence tasks that require a complete view of audience membership
* **Machine learning workflows**: For training ML models or running predictive analytics that benefit from complete audience snapshots
* **Data warehousing**: When you need to maintain a current copy of audience data in your own Snowflake instance
* **Periodic reporting**: For regular business reporting where you need the latest audience state without historical change tracking
* **ETL processes**: When you need to transform or process audience data in batches

Batch data sharing simplifies data management by providing complete snapshots, eliminating the need to manage incremental updates or merge changes manually.

## Prerequisites {#prerequisites}

Before configuring your Snowflake connection, make sure you meet the following prerequisites:

* You have access to a [!DNL Snowflake] account.
* Your Snowflake account is subscribed to private listings. You or someone in your company who has account administrator privileges on Snowflake can configure this.

Read the [[!DNL Snowflake] documentation](https://docs.snowflake.com/en/collaboration/consumer-listings-access#access-a-private-listing) for more information on the necessary permissions.

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination. The two tables below indicate which audiences this connector supports, by _audience origin_ and _profile types included in the audience_:

| Audience origin | Supported | Description | 
|---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| All other audience origins | ✓ | This category includes all audience origins outside of audiences generated through the [!DNL Segmentation Service]. Read about the [various audience origins](/help/segmentation/ui/audience-portal.md#customize). Some examples include: <ul><li> custom upload audiences [imported](../../../segmentation/ui/audience-portal.md#import-audience) into Experience Platform from CSV files,</li><li> look-alike audiences, </li><li> federated audiences, </li><li> audiences generated in other Experience Platform apps such as Adobe Journey Optimizer, </li><li> and more. </li></ul> |

{style="table-layout:auto"}

Supported audiences by audience data type:

| Audience data type | Supported | Description | Use cases |
|--------------------|-----------|-------------|-----------|
| [People audiences](/help/segmentation/types/people-audiences.md) | ✓ | Based on customer profiles, allowing you to target specific groups of people for marketing campaigns. | Frequent buyers, cart abandoners |
| [Account audiences](/help/segmentation/types/account-audiences.md) | No | Target individuals within specific organizations for account-based marketing strategies. | B2B marketing |
| [Prospect audiences](/help/segmentation/types/prospect-audiences.md) | No | Target individuals who are not yet customers but share characteristics with your target audience. | Prospecting with third-party data |
| [Dataset exports](/help/catalog/datasets/overview.md) | No | Collections of structured data stored in the Adobe Experience Platform Data Lake. | Reporting, data science workflows |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
|---------|----------|---------|
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience with the identifiers (name, phone number, or others) used in the [!DNL Snowflake] destination.|
| Export frequency | **[!UICONTROL Batch]** | This destination provides periodic snapshots of complete audience membership through Snowflake data sharing. Each snapshot replaces the previous data, ensuring you always have the latest complete view of your audience.|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, select **[!UICONTROL Connect to destination]** and provide an account name and, optionally, an account description.

![Sample screenshot showing how to authenticate to the destination](../../assets/catalog/cloud-storage/snowflake-batch/authenticate-destination.png)

### Fill in destination details {#destination-details}

>[!CONTEXTUALHELP]
>id="platform_destinations_snowflake_batch_accountid"
>title="Enter your Snowflake Account ID"
>abstract="If your account is linked to an organization use this format: `OrganizationName.AccountName`<br><br> If your account is not linked to an organization use this format:`AccountName`"

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Sample screenshot showing how to fill in details for your destination](../../assets/catalog/cloud-storage/snowflake-batch/configure-destination-details.png)

* **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
* **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
* **[!UICONTROL Snowflake Account ID]**: Your Snowflake account ID. Use the following Account ID format depending on whether your account is linked to an organization:
    * If your account is linked to an organization:`OrganizationName.AccountName`.
    * If your account is not linked to an organization:`AccountName`.
* **[!UICONTROL Select Snowflake Region]**: Select the region where your Snowflake instance is provisioned. See the Snowflake [documentation](https://docs.snowflake.com/en/user-guide/intro-regions) for detailed information on supported cloud regions.
* **[!UICONTROL Account acknowledgment]**: After entering your **[!UICONTROL Snowflake Account ID]**, select **[!UICONTROL Yes]** in this dropdown to confirm that your **[!UICONTROL Snowflake Account ID]** is correct and it belongs to you.

>[!IMPORTANT]
>
> Special characters used in the destination name and Experience Platform sandbox name are automatically converted to underscores (`_`) in Snowflake. To avoid confusion, do not use any special characters in your destination and sandbox name.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, read the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate audience data to batch profile export destinations](/help/destinations/ui/activate-batch-profile-destinations.md) for instructions on activating audiences to this destination.

### Map attributes {#map}

You can export identities and profile attributes to this destination.

![Experience Platform user interface image showing the mapping screen for the Snowflake destination.](../../assets/catalog/cloud-storage/snowflake-batch/mapping.png)

You can use the [calculated fields control](../../ui/data-transformations-calculated-fields.md) to export and perform operations on arrays.

The target attributes are automatically created in Snowflake using the attribute name that you provide in the **[!UICONTROL Attribute name]** field.

## Exported data / Validate data export {#exported-data}

The data is staged into your Snowflake account via a dynamic table. Check your Snowflake account to verify that the data was exported correctly.

### Data structure {#data-structure}

The dynamic table contains the following columns:

* **TS**: A timestamp column that represents when each row was last updated
* **Mapping attributes**: Every mapping attribute that you select during the activation workflow is represented as a column header in Snowflake
* **Audience membership**: Membership to any audience mapped to the dataflow is indicated via an `active` entry in the corresponding cell

![Screenshot showing the Snowflake interface with dynamic table data](../../assets/catalog/cloud-storage/snowflake-batch/data-validation.png)

## Known limitations {#known-limitations}

### Regional availability {#regional-availability}

The [!DNL Snowflake] batch destination is currently only available to Real-Time CDP customers provisioned in the Experience Platform VA7 region.

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).
