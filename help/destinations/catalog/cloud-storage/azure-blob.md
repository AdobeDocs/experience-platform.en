---
title: Azure Blob connection
description: Create a live outbound connection to your Azure Blob storage to periodically export CSV data files from Adobe Experience Platform.
exl-id: 8099849b-e3d2-48a5-902a-ca5a5ec88207
---
# [!DNL Azure Blob] connection

## Destination changelog {#changelog}

>[!IMPORTANT]
>
>With the beta release of the export datasets functionality and the improved file export functionality, you may now be seeing two [!DNL Azure Blob] cards in the destinations catalog.
>* If you are already exporting files to the **[!UICONTROL Azure Blob]** destination: Please create new dataflows to the new **[!UICONTROL Azure Blob beta]** destination.
>* If you have not yet created any dataflows to the **[!UICONTROL Azure Blob]** destination, please use the new **[!UICONTROL Azure Blob beta]** card to export files to **[!UICONTROL Azure Blob]**.

![Image of the two Azure Blob destination cards in a side-by-side view.](../../assets/catalog/cloud-storage/blob/two-azure-blob-destination-cards.png)

Improvements in the new [!DNL Azure Blob] destination card include:

* [Dataset export support](/help/destinations/ui/export-datasets.md).
* Additional [file naming options](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling).
* Ability to set custom file headers in your exported files via the [improved mapping step](/help/destinations/ui/activate-batch-profile-destinations.md#mapping).
* [Ability to customize the formatting of exported CSV data files](/help/destinations/ui/batch-destinations-file-formatting-options.md).

## Overview {#overview}

[!DNL Azure Blob] (hereinafter referred to as [!DNL Blob]) is Microsoft's object storage solution for the cloud. This tutorial provides steps for creating a [!DNL Blob] destination using the [!DNL Platform] user interface.

## Connect to your [!UICONTROL Azure Blob] storage through API or UI {#connect-api-or-ui}

* To connect to your [!UICONTROL Azure Blob] storage location using the Platform user interface, read the sections [Connect to the destination](#connect) and [Activate segments to this destination](#activate) below.
* To connect to your [!UICONTROL Azure Blob] storage location programmatically, read the [Activate segments to file-based destinations by using the Flow Service API tutorial](../../api/activate-segments-file-based-destinations.md).

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Experience Data Model (XDM)] System](../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  * [Basics of schema composition](../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [[!DNL Real-Time Customer Profile]](../../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.

If you already have a valid [!DNL Blob] destination, you may skip the remainder of this document and proceed to the tutorial on [activating segments to your destination](../../ui/activate-batch-profile-destinations.md).

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen in the select profile attributes screen of the [destination activation workflow](../../ui/activate-batch-profile-destinations.md#select-attributes).|
| Export frequency | **[!UICONTROL Batch]** | Batch destinations export files to downstream platforms in increments of three, six, eight, twelve, or twenty-four hours. Read more about [batch file-based destinations](/help/destinations/destination-types.md#file-based).|

{style="table-layout:auto"}

## Supported file formats {#file-formats}

[!DNL Experience Platform] supports the following file format to be exported to [!DNL Azure Blob]:

* Comma-separated values (CSV): Support for exported data files is currently limited to comma-separated values.

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the destination configuration workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

>[!CONTEXTUALHELP]
>id="platform_destinations_connect_blob_rsa"
>title="RSA public key"
>abstract="Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. View an example of a correctly formatted key in the documentation link below."

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

* **[!UICONTROL Connection string]**: the connection string is required to access data in your Blob storage. The [!DNL Blob] connection string pattern starts with: `DefaultEndpointsProtocol=https;AccountName={ACCOUNT_NAME};AccountKey={ACCOUNT_KEY}`. 
    * For more information about configuring your [!DNL Blob] connection string, see [Configure a connection string for an Azure storage account](https://learn.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string#configure-a-connection-string-for-an-azure-storage-account) in the Microsoft documentation.
* **[!UICONTROL Encryption key]**: Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. View an example of a correctly formatted encryption key in the image below.

  ![Image showing an example of a correctly formatted PGP key in the UI](../../assets/catalog/cloud-storage/sftp/pgp-key.png)

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

* **[!UICONTROL Name]**: enter a name that will help you identify this destination.
* **[!UICONTROL Description]**: enter a description of this destination.
* **[!UICONTROL Folder path]**: enter the path to the destination folder that will host the exported files.
* **[!UICONTROL Container]**: enter the name of the [!DNL Azure Blob Storage] container to be used by this destination.
* **[!UICONTROL File type]**: select the format Experience Platform should use for the exported files. This option is only available for the **[!UICONTROL Azure Blob beta]** destination. When selecting the [!UICONTROL CSV] option, you can also [configure the file formatting options](../../ui/batch-destinations-file-formatting-options.md).
* **[!UICONTROL Compression format]**: select the compression type that Experience Platform should use for the exported files. This option is only available for the **[!UICONTROL Azure Blob beta]** destination.
* **[!UICONTROL Include manifest file]**: toggle this option on if you'd like the exports to include a manifest JSON file that contains information abut the export location, export size, and more. This option is only available for the **[!UICONTROL Azure Blob beta]** destination.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

See [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md) for instructions on activating audience segments to this destination.

## (Beta) Export datasets {#export-datasets}

This destination supports dataset exports. For complete information on how to set up dataset exports, read the tutorials: 

* How to [export datasets using the Platform user interface](/help/destinations/ui/export-datasets.md). 
* How to [export datasets programmatically using the Flow Service API](/help/destinations/api/export-datasets.md).

## Exported data {#exported-data}

For [!DNL Azure Blob Storage] destinations, [!DNL Platform] creates a `.csv` file in the storage location that you provided. For more information about the files, see [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md) in the segment activation tutorial.