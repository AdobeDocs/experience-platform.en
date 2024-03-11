---
title: Google Cloud Storage connection
description: Learn how to connect to Google Cloud Storage and activate audiences or export datasets.
last-substantial-update: 2023-07-26
exl-id: ab274270-ae8c-4264-ba64-700b118e6435
---
# [!DNL Google Cloud Storage] connection

## Overview {#overview}

Create a live outbound connection to [!DNL Google Cloud Storage] to periodically export data files from Adobe Experience Platform into your own buckets.

## Connect to your [!DNL Google Cloud Storage] storage through API or UI {#connect-api-or-ui}

* To connect to your [!DNL Google Cloud Storage] storage location using the Platform user interface, read the sections [Connect to the destination](#connect) and [Activate audiences to this destination](#activate) below.
* To connect to your [!DNL Google Cloud Storage] storage location programmatically, read the [Activate audiences to file-based destinations by using the Flow Service API tutorial](../../api/activate-segments-file-based-destinations.md).

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

| Audience origin | Supported | Description | 
---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| Custom uploads | ✓ | Audiences [imported](../../../segmentation/ui/overview.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of a segment, together with the applicable schema fields, as chosen in the select profile attributes screen of the [destination activation workflow](/help/destinations/ui/activate-batch-profile-destinations.md#select-attributes).|
| Export frequency | **[!UICONTROL Batch]** | Batch destinations export files to downstream platforms in increments of three, six, eight, twelve, or twenty-four hours. Read more about [batch file-based destinations](/help/destinations/destination-types.md#file-based).|

{style="table-layout:auto"}

## Export datasets {#export-datasets}

This destination supports dataset exports. For complete information on how to set up dataset exports, read the tutorials: 

* How to [export datasets using the Platform user interface](/help/destinations/ui/export-datasets.md). 
* How to [export datasets programmatically using the Flow Service API](/help/destinations/api/export-datasets.md).

## File format of the exported data {#file-format}

When exporting *audience data*, Platform creates a `.csv`, `parquet`, or `.json` file in the storage location that you provided. For more information about the files, see the [supported file formats for export](../../ui/activate-batch-profile-destinations.md#supported-file-formats-export) section in the audience activation tutorial.

When exporting *datasets*, Platform creates a `.parquet` or `.json` file in the storage location that you provided. For more information about the files, see the [verify successful dataset export](../../ui/export-datasets.md#verify) section in the export datasets tutorial.

## Prerequisite setup for connecting your [!DNL Google Cloud Storage] account {#prerequisites}

In order to connect Platform to [!DNL Google Cloud Storage], you must first enable interoperability for your [!DNL Google Cloud Storage] account. To access the interoperability setting, open [!DNL Google Cloud Platform] and select **[!UICONTROL Settings]** from the **[!UICONTROL Cloud Storage]** option in the navigation panel.

![Google Cloud Platform dashboard with Cloud Storage and Settings highlighted.](../../../sources/images/tutorials/create/google-cloud-storage/nav.png)

The **[!UICONTROL Settings]** page appears. From here, you can see information regarding your [!DNL Google] project ID and details about your [!DNL Google Cloud Storage] account. To access interoperability settings, select **[!UICONTROL Interoperability]** from the top header.

![The Interoperability tab highlighted in the Google Cloud Platform dashboard.](../../../sources/images/tutorials/create/google-cloud-storage/project-access.png)

The **[!UICONTROL Interoperability]** page contains information on authentication, access keys, and the default project associated with your service account. To generate a new access key ID and a secret access key for your service account, select **[!UICONTROL Create a Key for a Service Account]**.

![The Create a key for a service account control highlighted in the Google Cloud Platform dashboard.](../../../sources/images/tutorials/create/google-cloud-storage/interoperability.png)

You can use your newly generated access key ID and secret access key to connect your [!DNL Google Cloud Storage] account to Platform.

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](/help/destinations/ui/connect-destination.md). In the destination configuration workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

* **[!UICONTROL Access key ID]**: A 61-character, alphanumeric string used to authenticate your [!DNL Google Cloud Storage] account to Platform. For information on how to obtain this value, read the [prerequisites](#prerequisites) section above.
* **[!UICONTROL Secret access key]**: A 40-character, base64-encoded string used to authenticate your [!DNL Google Cloud Storage] account to Platform. For information on how to obtain this value, read the [prerequisites](#prerequisites) section above.
* **[!UICONTROL Encryption key]**: Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. View an example of a correctly formatted encryption key in the image below.

    ![Image showing an example of a correctly formatted PGP key in the UI](../../assets/catalog/cloud-storage/sftp/pgp-key.png)

For more information about these values, read the [Google Cloud Storage HMAC keys](https://cloud.google.com/storage/docs/authentication/hmackeys#overview) guide. For steps on how to generate your own access key ID and secret access key, refer to the [[!DNL Google Cloud Storage] source overview](/help/sources/connectors/cloud-storage/google-cloud-storage.md).

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Optional. For example, you can mention which campaign you are using this destination for.
* **[!UICONTROL Bucket name]**: Enter the name of the [!DNL Google Cloud Storage] bucket to be used by this destination.
* **[!UICONTROL Folder path]**: Enter the path to the destination folder that will host the exported files.
* **[!UICONTROL File type]**: Select the format Experience Platform should use for the exported files. When selecting the [!UICONTROL CSV] option, you can also [configure the file formatting options](../../ui/batch-destinations-file-formatting-options.md).
* **[!UICONTROL Compression format]**: Select the compression type that Experience Platform should use for the exported files.
* **[!UICONTROL Include manifest file]**: Toggle this option on if you'd like the exports to include a manifest JSON file that contains information about the export location, export size, and more. The manifest is named using the format `manifest-<<destinationId>>-<<dataflowRunId>>.json`. View a [sample manifest file](/help/destinations/assets/common/manifest-d0420d72-756c-4159-9e7f-7d3e2f8b501e-0ac8f3c0-29bd-40aa-82c1-f1b7e0657b19.json). The manifest file includes the following fields:
  * `flowRunId`: The [dataflow run](/help/dataflows/ui/monitor-destinations.md#dataflow-runs-for-batch-destinations) which generated the exported file. 
  * `scheduledTime`: The time in UTC when the file was exported. 
  * `exportResults.sinkPath`: The path in your storage location where the exported file is deposited. 
  * `exportResults.name`: The name of the exported file.
  * `size`: The size of the exported file, in bytes.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

See [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md) for instructions on activating audiences to this destination.

### Scheduling

In the **[!UICONTROL Scheduling]** step, you can [set up the export schedule](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling) for your [!DNL Google Cloud Storage] destination and you can also [configure the name of your exported files](/help/destinations/ui/activate-batch-profile-destinations.md#file-names). 

### Map attributes and identities {#map}

In the **[!UICONTROL Mapping]** step, you can select which attribute and identity fields to export for your profiles. You can also select to change the headers in the exported file to any friendly name that you wish. For more information, view the [mapping step](/help/destinations/ui/activate-batch-profile-destinations.md#mapping) in the activate batch destinations UI tutorial.

## Validate successful data export {#exported-data}

To verify if data has been exported successfully, check your [!DNL Google Cloud Storage] bucket and make sure that the exported files contain the expected profile populations.

## IP address allowlist {#ip-address-allow-list}

Refer to the [IP address allowlist](ip-address-allow-list.md) article if you need to add Adobe IPs to an allowlist.