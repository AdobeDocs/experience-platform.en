---
title: FreeWheel connection
description: Learn how to activate audiences from Adobe Experience Platform to FreeWheel for programmatic advertising across connected TV, display, and video inventory.
---
# [!DNL FreeWheel] connection {#freewheel}

## Overview {#overview}

[!DNL FreeWheel] is a global advertising technology platform that powers programmatic buying and selling across connected TV (CTV), video, and display inventory. [!DNL FreeWheel] provides a data-driven marketplace that connects advertisers with premium media owners worldwide.

Use this destination to send audiences from Adobe Experience Platform to [!DNL FreeWheel]. Audiences are delivered as daily batch files via [!DNL Amazon S3] and are made available for targeting in [!DNL FreeWheel] deals and campaigns.

## Prerequisites {#prerequisites}

Before you can activate audiences to [!DNL FreeWheel], review the following requirements:

* **FreeWheel network ID**: You must have a valid [!DNL FreeWheel] network ID. This is provided by [!DNL FreeWheel] when your account is set up.

## Supported identities {#supported-identities}

[!DNL FreeWheel] supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/features/namespaces.md).

| Target identity | Description | Considerations |
|---|---|---|
| `idfa` | Apple ID for Advertisers | Select this target identity when your source identity is an IDFA namespace. |
| `aaid` | Android Advertising ID | Select this target identity when your source identity is a GAID namespace. |
| `ctv` | Connected TV device ID | Select this target identity when targeting CTV devices. |
| `ip` | IPv4 address | Select this target identity to target users based on their IP address. Map a profile attribute containing a valid IPv4 address, or use a calculated field to derive the value. |
| `ipv6` | IPv6 address | Select this target identity to target users based on their IPv6 address. Map a profile attribute containing a valid IPv6 address, or use a calculated field to derive the value. |

{style="table-layout:auto"}

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

| Audience origin | Supported | Description |
|---------|----------|----------|
| [!DNL Segmentation Service] | Yes | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md). |
| All other audience origins | Yes | This category includes all audience origins outside of audiences generated through the [!DNL Segmentation Service]. Read about the [various audience origins](/help/segmentation/ui/audience-portal.md#customize). Some examples include: <ul><li>custom upload audiences [imported](../../../segmentation/ui/audience-portal.md#import-audience) into Experience Platform from CSV files,</li><li>look-alike audiences,</li><li>federated audiences,</li><li>audiences generated in other Experience Platform apps such as Adobe Journey Optimizer,</li><li>and more.</li></ul> |

{style="table-layout:auto"}

Supported audiences by audience data type:

| Audience data type | Supported | Description | Use cases |
|--------------------|-----------|-------------|-----------|
| [People audiences](/help/segmentation/types/people-audiences.md) | Yes | Based on customer profiles, allowing you to target specific groups of people for marketing campaigns. | CTV retargeting, reach suppression |
| [Account audiences](/help/segmentation/types/account-audiences.md) | No | Target individuals within specific organizations for account-based marketing strategies. | B2B marketing |
| [Prospect audiences](/help/segmentation/types/prospect-audiences.md) | No | Target individuals who are not yet customers but share characteristics with your target audience. | Prospecting with third-party data |
| [Dataset exports](/help/catalog/datasets/overview.md) | No | Collections of structured data stored in the Adobe Experience Platform Data Lake. | Reporting, data science workflows |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
|---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of an audience, together with the desired identity fields as chosen in the mapping step of the [destination activation workflow](/help/destinations/ui/activate-batch-profile-destinations.md#select-attributes). |
| Export frequency | **[!UICONTROL Batch]** | The first export is a full snapshot of all profiles qualified for the activated audiences. Subsequent exports are daily incremental updates that include new audience qualifications (adds) and audience exits (removes). A configurable full audience refresh interval (4, 8, or 12 weeks) is also available, triggering periodic full exports in addition to the daily incrementals. Full exports contain only currently qualified profiles. Audience exits are not included and are delivered exclusively through the daily incremental updates. Read more about [batch file-based destinations](/help/destinations/destination-types.md#file-based). |

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
>
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

Authentication to the [!DNL FreeWheel] destination is handled automatically by Adobe. No credentials or API keys are required from you during authentication. Adobe manages the secure connection to [!DNL FreeWheel]'s ingestion bucket on your behalf.

![Screenshot of the authentication step for the FreeWheel destination.](../../assets/catalog/advertising/freewheel/connect-destination.png){width="800" zoomable="yes"}

Select **[!UICONTROL Connect to destination]** to proceed to the destination details step.

### Fill in destination details {#destination-details}

>[!CONTEXTUALHELP]
>id="platform_destinations_freewheel_backfill"
>title="Full audience refresh interval"
>abstract="Select the interval at which a full audience export is sent to [!DNL FreeWheel] in addition to daily incremental updates. Available options are 4 weeks, 8 weeks, and 12 weeks."

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Sample screenshot showing how to fill in details for the FreeWheel destination.](../../assets/catalog/advertising/freewheel/destination-details.png){width="800" zoomable="yes"}

* **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
* **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
* **[!UICONTROL Region]**: The [!DNL FreeWheel] region where your account is hosted. Select one of the following options:
  * **[!UICONTROL US East]**
  * **[!UICONTROL Europe]**
  * **[!UICONTROL Asia Pacific]**
* **[!UICONTROL FreeWheel network ID]**: Your [!DNL FreeWheel] network ID. This value is provided by [!DNL FreeWheel] and uniquely identifies your organization in the [!DNL FreeWheel] platform.
* **[!UICONTROL Full audience refresh interval]**: The frequency at which a full audience export is sent to [!DNL FreeWheel] in addition to daily incremental updates. Select an interval from the dropdown.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
>
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate audience data to batch profile export destinations](/help/destinations/ui/activate-batch-profile-destinations.md) for instructions on activating audiences to this destination.

### Schedule audience exports {#schedule}

![Screenshot of the Scheduling step in the FreeWheel activation workflow.](../../assets/catalog/advertising/freewheel/scheduling.png){width="800" zoomable="yes"}

In the **[!UICONTROL Scheduling]** step, configure the export schedule for each audience. [!DNL FreeWheel] uses a hybrid export model: the first export for each activated audience is a full snapshot, followed by daily incremental updates.

Configure the following fields:

* **[!UICONTROL File export options]**: Select **[!UICONTROL Export incremental files]**. The first export automatically includes a full snapshot of all qualified profiles. Subsequent exports deliver only new audience qualifications and exits since the last export.
* **[!UICONTROL Frequency]**: Set to **[!UICONTROL Daily]**. [!DNL FreeWheel] expects daily incremental file delivery.
* **[!UICONTROL Scheduled start time]**: Enter the time in UTC at which the daily export should run. Exported files are delivered to [!DNL FreeWheel]'s ingestion bucket at the configured time.
* **[!UICONTROL Date]**: Set the start and end date for the activation. The start date determines when the first full snapshot export is sent.

>[!NOTE]
>
>Full exports (both the initial snapshot and periodic full refreshes) contain only currently qualified profiles. Audience exits are not included in full exports and are delivered exclusively through the daily incremental updates.

### Map attributes and identities {#map}

In the mapping step, select the source fields from your Experience Platform profiles and map them to the identity types supported by [!DNL FreeWheel]. At least one mapping is required.

>[!IMPORTANT]
>
>The [!DNL FreeWheel]-supported identity types are presented as **target attributes** in the mapping UI, not as identity namespaces.

If your [!DNL FreeWheel] account supports identity types that are not listed in the [supported identities](#supported-identities) table, you can map to them by manually entering the identity name in the target field instead of selecting from the predefined list.

![Screenshot showing a custom identity name typed directly into the target field in the mapping step.](../../assets/catalog/advertising/freewheel/custom-identity.png){width="800" zoomable="yes"}

The following are example mappings. Your actual mappings will depend on your profile schema and the identity types your [!DNL FreeWheel] account supports.

| Source field | Target field |
| --- | --- |
| `identityMap.IDFA` | `idfa` |
| `identityMap.GAID` | `aaid` |
| `homeAddress.ipAddress` | `ip` |

{style="table-layout:auto"}

>[!NOTE]
>
>No mandatory mappings are enforced. However, profiles without at least one valid identity mapping will not be included in the exported files.

## Exported data / Validate data export {#exported-data}

[!DNL FreeWheel] receives two types of files per export:

**Identity (data) files** contain the audience membership data. Each row maps a user identifier to one or more audience IDs. The files are delivered to [!DNL FreeWheel]'s [!DNL Amazon S3] ingestion bucket in CSV format without column headers. Separate files are produced for each identity type present in the export (for example, one file for `aaid` and a separate file for `idfa`).

Example data file format:

```csv
aebc1234-56f7-89ab-cdef-0123456789ab,segment_1,segment_2
f7c9a8b0-4d33-11ec-81d3-0242ac130003,segment_1,segment_3
123e4567-e89b-12d3-a456-426614174000,segment_2
```

**Taxonomy files** describe the audiences included in the export. These files are delivered alongside the data files and include the audience ID, name, and TTL (time to live) in days. The maximum TTL supported by [!DNL FreeWheel] is 90 days. The values in the example below are illustrative.

Example taxonomy file format:

```csv
Segment ID,Segment Name,TTL
segment_1,my_first_segment,30
segment_2,my_second_segment,30
segment_3,my_third_segment,30
```

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, see the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

For additional information about [!DNL FreeWheel] and its advertising technology platform, see the [FreeWheel website](https://www.freewheel.com){target="_blank"}.
