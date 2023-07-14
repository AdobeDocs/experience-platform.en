---
title: (Beta) Azure Data Lake Storage Gen2 connection
description: Learn how to connect to Azure Data Lake Storage Gen2 to activate audiences and export datasets.
exl-id: d265a02d-c901-4b39-8714-fe9ecdbb5bb1
---
# (Beta) [!DNL Azure Data Lake Storage Gen2] connection

>[!IMPORTANT]
>
>This destination is currently in Beta and is only available to a limited number of customers. To request access to the [!DNL Azure Data Lake Storage Gen2] connection, contact your Adobe representative and provide your [!DNL Organization ID].

## Overview {#overview}

Read this page to learn to create a live outbound connection to your [[!DNL Azure Data Lake Storage Gen2]](https://learn.microsoft.com/en-us/azure/storage/blobs/data-lake-storage-introduction) ([!DNL ADLS Gen2]) data lake to periodically export data files from Experience Platform.

## Connect to your [!DNL ADLS Gen2] storage through API or UI {#connect-api-or-ui}

* To connect to your [!DNL ADLS Gen2] storage location using the Platform user interface, read the sections [Connect to the destination](#connect) and [Activate audiences to this destination](#activate) below.
* To connect to your [!DNL ADLS Gen2] storage location programmatically, read the [Activate audiences to file-based destinations by using the Flow Service API tutorial](../../api/activate-segments-file-based-destinations.md).

## Supported audiences {#supported-audiences}

This section describes all the audiences that you can export to this destination.

All destinations support the activation of audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).

Additionally, this destination also supports the activation of the audiences described in the table below.

| Audience type | Description | 
---------|----------|
| Custom uploads | Audiences ingested into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of a segment, together with the applicable schema fields (for example your PPID), as chosen in the select profile attributes screen of the [destination activation workflow](/help/destinations/ui/activate-batch-profile-destinations.md#select-attributes).|
| Export frequency | **[!UICONTROL Batch]** | Batch destinations export files to downstream platforms in increments of three, six, eight, twelve, or twenty-four hours. Read more about [batch file-based destinations](/help/destinations/destination-types.md#file-based).|

{style="table-layout:auto"}

## Prerequisites {#prerequisites}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](/help/destinations/ui/connect-destination.md). In the destination configuration workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

* **[!UICONTROL URL]**: The endpoint for [!DNL Azure Data Lake Storage Gen2]. The endpoint pattern is: `abfss://<container>@<accountname>.dfs.core.windows.net`.
* **[!UICONTROL Tenant]**: The tenant information that contains your application.
* **[!UICONTROL Service principal ID]**: The application's client ID.
* **[!UICONTROL Service principal key]**: The application's key.
* **[!UICONTROL Encryption key]**: Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. View an example of a correctly formatted encryption key in the image below.

    ![Image showing an example of a correctly formatted PGP key in the UI](../../assets/catalog/cloud-storage/sftp/pgp-key.png)

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Optional. For example, you can mention which campaign you are using this destination for.
* **[!UICONTROL Folder path]**: Enter the path to the destination folder that will host the exported files.
* **[!UICONTROL File type]**: select the format Experience Platform should use for the exported files. When selecting the [!UICONTROL CSV] option, you can also [configure the file formatting options](../../ui/batch-destinations-file-formatting-options.md).
* **[!UICONTROL Compression format]**: select the compression type that Experience Platform should use for the exported files.
* **[!UICONTROL Include manifest file]**: toggle this option on if you'd like the exports to include a manifest JSON file that contains information abut the export location, export size, and more.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

See [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md) for instructions on activating audiences to this destination.

### Scheduling {#scheduling}

In the **[!UICONTROL Scheduling]** step, you can [set up the export schedule](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling) for your [!DNL Azure Data Lake Storage Gen2] destination and you can also [configure the name of your exported files](/help/destinations/ui/activate-batch-profile-destinations.md#file-names). 

### Map attributes and identities {#map}

In the **[!UICONTROL Mapping]** step, you can select which attribute and identity fields to export for your profiles. You can also select to change the headers in the exported file to any friendly name that you wish. For more information, view the [mapping step](/help/destinations/ui/activate-batch-profile-destinations.md#mapping) in the activate batch destinations UI tutorial.

## (Beta) Export datasets {#export-datasets}

This destination supports dataset exports. For complete information on how to set up dataset exports, read the tutorials: 

* How to [export datasets using the Platform user interface](/help/destinations/ui/export-datasets.md). 
* How to [export datasets programmatically using the Flow Service API](/help/destinations/api/export-datasets.md).

## Validate successful data export {#exported-data}

To verify if data has been exported successfully, check your [!DNL Azure Data Lake Storage Gen2] storage and make sure that the exported files contain the expected profile populations.
