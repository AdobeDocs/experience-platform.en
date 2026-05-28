---
title: Snowflake Streaming connection
description: Create a live Snowflake data share to receive streaming audience updates directly as shared tables into your account.
last-substantial-update: 2026-04-28T00:00:00.000Z
badgeUltimate: label="Ultimate" type="Positive"
exl-id: 4a00e46a-dedb-4dd3-b496-b0f4185ea9b0
TQID: https://experienceleague.adobe.com/vu6WWijCtgC7CpgDvE--290DfNlQePYvSZQjjh3e9FU
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
subfeature_v2:
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
    internal-label: Optimization
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
    internal-label: Data management
---
# Snowflake Streaming connection {#snowflake-destination}

>[!AVAILABILITY]
>
>This destination connector is in limited availability and only available to [!DNL Real-Time CDP] Ultimate customers provisioned in the [VA7 region](/help/landing/multi-cloud.md#azure-regions).

## Overview {#overview}

Use the Snowflake destination connector to export data to Adobe's Snowflake instance, which Adobe then shares with your instance through [private listings](https://other-docs.snowflake.com/en/collaboration/collaboration-listings-about).

Read the following sections to understand how the Snowflake destination works and how data is transferred between Adobe and Snowflake.

### How Snowflake data sharing works {#data-sharing}

This destination uses a [!DNL Snowflake] data share, which means that no data is physically exported or transferred to your own Snowflake instance. Instead, Adobe grants you read-only access to a live table hosted within Adobe's Snowflake environment. You can query this shared table directly from your Snowflake account, but you do not own the table and cannot modify or retain it beyond the specified retention period. Adobe fully manages the lifecycle and structure of the shared table.

The first time you share data from Adobe's Snowflake instance to yours, you are prompted to accept the private listing from Adobe.

![Screenshot showing the Snowflake private listing acceptance screen](../../assets/catalog/warehouses/snowflake/snowflake-accept-listing.png)

### Data retention and Time-to-Live (TTL) {#ttl}

All data shared through this integration has a fixed Time-to-Live (TTL) of seven days. Seven days after the last export, the shared table automatically expires and becomes inaccessible, regardless of whether the dataflow is still active. If you need to retain the data for longer than seven days, you must copy the contents into a table that you own in your own Snowflake instance before the TTL expires.

### Audience update behavior {#audience-update-behavior}

If your audience is evaluated in [batch mode](../../../segmentation/methods/batch-segmentation.md), the data in the shared table is refreshed every 24 hours. This means there may be a delay of up to 24 hours between changes in audience membership and when those changes are reflected in the shared table.

### Incremental export logic {#incremental-export}

When a dataflow runs for an audience for the first time, it performs a backfill and shares all currently qualified profiles. After this initial backfill, only incremental updates are reflected in the shared table. This means profiles that are added to or removed from the audience. This approach ensures efficient updates and keeps the shared table up to date.

## Streaming versus batch data sharing {#batch-vs-streaming}

[!DNL Adobe Experience Platform] provides two types of [!DNL Snowflake] destinations: [Snowflake Streaming](snowflake.md) and [Snowflake Batch](snowflake-batch.md).

The table below will help you decide which destination to use by outlining the scenarios where each data sharing method is most appropriate.

|  | Choose [Snowflake Batch](snowflake-batch.md) when you need | Choose [Snowflake Streaming](snowflake.md) when you need |
|--------|-------------------|----------------------|
| **Update frequency** | Periodic snapshots | Continuous updates in real-time |
| **Data presentation** | Complete audience snapshot that replaces previous data | Incremental updates based on profile changes |
| **Use case focus** | Analytical/ML workloads where latency is not critical | Immediate action scenarios requiring real-time updates |
| **Data management** | Always see latest complete snapshot | Incremental updates based on audience membership changes |
| **Example scenarios** | Business reporting, data analysis, ML model training | Marketing campaign suppression, real-time personalization |

For more information about batch data sharing, see the [Snowflake Batch connection](snowflake-batch.md) documentation.

## Use cases {#use-cases}

Streaming data sharing is ideal for scenarios where you need immediate updates when a profile changes its membership or other attributes. This is crucial for use cases requiring real-time responsiveness, such as:

* **Marketing campaign suppression**: Immediately suppress marketing campaigns for users who have taken specific actions, such as signing up for a service or making a purchase
* **Real-time personalization**: Update user experiences instantly when profile attributes change, such as when a user visits a website, views a product page, or adds items to a shopping cart
* **Immediate action scenarios**: Execute quick suppression and retargeting based on real-time data to reduce delays and ensure marketing campaigns are more relevant and timely
* **Efficiency and nuance**: Enable greater efficiency and nuance in marketing efforts by allowing quick response to user behavior changes
* **Real-time customer journey optimization**: Update customer experiences immediately when segment membership or profile attributes change

Streaming data sharing provides continuous updates based on segment changes, identity map changes, or attribute changes, making it suitable when low latency matters.

## Prerequisites {#prerequisites}

Before configuring your Snowflake connection, make sure you meet the following prerequisites:

* You have access to a [!DNL Snowflake] account.
* Your [!DNL Snowflake] account is subscribed to private listings. You or someone in your company who has account administrator privileges on [!DNL Snowflake] can configure this.
* You know your [!DNL Snowflake] account region, which you will select from a dropdown when connecting to the destination.

Read the [[!DNL Snowflake] documentation](https://docs.snowflake.com/en/collaboration/consumer-listings-access#access-a-private-listing) for more information on the necessary permissions.

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination. The two tables below indicate which audiences this connector supports, by _audience origin_ and _profile types included in the audience_:

| Audience origin | Supported | Description |
|---------|----------|----------|
| [!DNL Segmentation Service] | Yes | Audiences generated through the [!DNL Adobe Experience Platform] [Segmentation Service](../../../segmentation/home.md).|
| All other audience origins | Yes | This category includes all audience origins outside of audiences generated through the [!DNL Segmentation Service]. Read about the [various audience origins](/help/segmentation/ui/audience-portal.md#customize). Some examples include: <ul><li> custom upload audiences [imported](../../../segmentation/ui/audience-portal.md#import-audience) into [!DNL Adobe Experience Platform] from CSV files,</li><li> look-alike audiences, </li><li> federated audiences, </li><li> audiences generated in other [!DNL Adobe Experience Platform] apps such as [!DNL Adobe Journey Optimizer], </li><li> and more. </li></ul> |

{style="table-layout:auto"}

Supported audiences by audience data type:

| Audience data type | Supported | Description | Use cases |
|--------------------|-----------|-------------|-----------|
| [People audiences](/help/segmentation/types/people-audiences.md) | Yes | Based on customer profiles, allowing you to target specific groups of people for marketing campaigns. | Frequent buyers, cart abandoners |
| [Account audiences](/help/segmentation/types/account-audiences.md) | No | Target individuals within specific organizations for account-based marketing strategies. | B2B marketing |
| [Prospect audiences](/help/segmentation/types/prospect-audiences.md) | No | Target individuals who are not yet customers but share characteristics with your target audience. | Prospecting with third-party data |
| [Dataset exports](/help/catalog/datasets/overview.md) | No | Collections of structured data stored in the [!DNL Adobe Experience Platform] Data Lake. | Reporting, data science workflows |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
|---------|----------|---------|
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience with the identifiers (name, phone number, or others) used in the [!DNL Snowflake] destination.|
| Export frequency | **[!UICONTROL Streaming]** | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in [!DNL Adobe Experience Platform] based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
>
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, select **[!UICONTROL Connect to destination]**.

![Sample screenshot showing how to authenticate to the destination](../../assets/catalog/warehouses/snowflake/authenticate-destination.png)

### Fill in destination details {#destination-details}

>[!CONTEXTUALHELP]
>id="platform_destinations_snowflake_accountID"
>title="Enter your Snowflake Account ID"
>abstract="If your account is linked to an organization, use this format: `OrganizationName.AccountName`<br><br>If your account is not linked to an organization, use this format: `AccountName`"

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Sample screenshot showing how to fill in details for your destination](../../assets/catalog/warehouses/snowflake/configure-destination-details.png)

* **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
* **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
* **[!UICONTROL Snowflake Account ID]**: Your Snowflake account ID. Use the following Account ID format depending on whether your account is linked to an organization:
    * If your account is linked to an organization:`OrganizationName.AccountName`.
    * If your account is not linked to an organization:`AccountName`.
* **[!UICONTROL Account acknowledgment]**: Toggle on the Snowflake Account ID acknowledgment to confirm that your Account ID is correct and it belongs to you.

>[!NOTE]
>
> The **[!UICONTROL Snowflake Account ID]** cannot be edited through the [edit destination](../../ui/edit-destination.md) workflow after you create the destination. To use a different account, [create a new destination connection](../../ui/connect-destination.md).

>[!IMPORTANT]
>
> Special characters used in the destination name and [!DNL Adobe Experience Platform] sandbox name are automatically converted to underscores (`_`) in [!DNL Snowflake]. To avoid confusion, do not use any special characters in your destination and sandbox name.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, read the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
>
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate profiles and audiences to streaming audience export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

### Map attributes {#map}

The Snowflake destination supports the mapping of profile attributes to custom attributes.

![Experience Platform user interface image showing the mapping screen for the Snowflake destination.](../../assets/catalog/warehouses/snowflake/mapping.png)

The target attributes are automatically created in Snowflake using the attribute name that you provide in the **[!UICONTROL Attribute name]** field.

## Exported data / Validate data export {#exported-data}

The data is shared into your Snowflake account via a shared table. Check your Snowflake account to verify that the data was exported correctly.

The following example shows sample rows from a shared table: some columns store identities and segment membership as JSON; mapped profile attributes appear as separate string columns.

![Sample Snowflake worksheet rows showing TS, IDENTITYMAP, SEGMENT_MEMBERSHIP, and mapped attribute columns.](../../assets/catalog/warehouses/snowflake/snowflake-streaming-exported-data.png) {align="center" zoomable="yes"}

### Data structure {#data-structure}

The screenshot above shows the following columns:

* **TS**: A timestamp indicating when each row was last updated.
* **IDENTITYMAP**: JSON object for each profile identity map.
* **SEGMENT_MEMBERSHIP**: JSON object for each audience activated on the dataflow. Value include `lastQualificationTime` and `status` (for example `realized` when the profile qualifies for the segment).
* **Mapping attributes**: Every mapping attribute that you select during the activation workflow is represented as a column header in [!DNL Snowflake].

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).
