---
title: Data Landing Zone destination
description: Learn how to connect to Data Landing Zone to activate segments and export datasets.
exl-id: 40b20faa-cce6-41de-81a0-5f15e6c00e64
---
# (Beta) Data Landing Zone destination

>[!IMPORTANT]
>
>This destination is currently in Beta and is only available to a limited number of customers. To request access to the [!DNL Data Landing Zone] connection, contact your Adobe representative and provide your [!DNL Organization ID].


## Overview {#overview}

[!DNL Data Landing Zone] is an [!DNL Azure Blob] storage interface provisioned by Adobe Experience Platform, granting you access to a secure, cloud-based file storage facility to export files out of Platform. You have access to one [!DNL Data Landing Zone] container per sandbox, and the total data volume across all containers is limited to the total data provided with your Platform Products and Services license. All customers of Platform and its application services such as [!DNL Customer Journey Analytics], [!DNL Journey Orchestration], [!DNL Intelligent Services], and [!DNL Real-Time Customer Data Platform] are provisioned with one [!DNL Data Landing Zone] container per sandbox. You can read and write files to your container through [!DNL Azure Storage Explorer] or your command-line interface.

[!DNL Data Landing Zone] supports SAS-based authentication and its data is protected with standard [!DNL Azure Blob] storage security mechanisms at rest and in transit. SAS-based authentication allows you to securely access your [!DNL Data Landing Zone] container through a public internet connection. There are no network changes required for you to access your [!DNL Data Landing Zone] container, which means you do not need to configure any allow lists or cross-region setups for your network. 

Platform enforces a strict seven-day time-to-live (TTL) on all files uploaded to a [!DNL Data Landing Zone] container. All files are deleted after seven days.

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of a segment, together with the applicable schema fields (for example your PPID), as chosen in the select profile attributes screen of the [destination activation workflow](/help/destinations/ui/activate-batch-profile-destinations.md#select-attributes).|
| Export frequency | **[!UICONTROL Batch]** | Batch destinations export files to downstream platforms in increments of three, six, eight, twelve, or twenty-four hours. Read more about [batch file-based destinations](/help/destinations/destination-types.md#file-based).|

{style="table-layout:auto"}

## Manage the contents of your [!DNL Data Landing Zone]

You can use [[!DNL Azure Storage Explorer]](https://azure.microsoft.com/en-us/features/storage-explorer/) to manage the contents of your [!DNL Data Landing Zone] container. 

In the [!DNL Azure Storage Explorer] UI, select the connection icon in the left navigation bar. The **Select Resource** window appears, providing you with options to connect to. Select **[!DNL Blob container]** to connect to your [!DNL Data Landing Zone] storage.

![select-resource](/help/sources/images/tutorials/create/dlz/select-resource.png)

Next, select **Shared access signature URL (SAS)** as your connection method, and then select **Next**.

![select-connection-method](/help/sources/images/tutorials/create/dlz/select-connection-method.png)

After selecting your connection method, you must provide a **display name** and the **[!DNL Blob] container SAS URL** that corresponds with your [!DNL Data Landing Zone] container.

>[!IMPORTANT]
>
>You must use the Platform APIs to retrieve your Data Landing Zone credentials. For complete information, see [Retrieve Data Landing Zone credentials](https://experienceleague.adobe.com/docs/experience-platform/sources/api-tutorials/create/cloud-storage/data-landing-zone.html?lang=en#retrieve-data-landing-zone-credentials). 
>
> To retrieve the credentials and access the exported files, you must replace the query parameter `type=user_drop_zone` with `type=dlz_destination` in any HTTP calls described in the page above.

Provide your [!DNL Data Landing Zone] SAS URL and then select **Next**.

![enter-connection-info](/help/sources/images/tutorials/create/dlz/enter-connection-info.png)

The **Summary** window appears, providing you with an overview of your settings, including information on your [!DNL Blob] endpoint and permissions. When ready, select **Connect**.

![summary](/help/sources/images/tutorials/create/dlz/summary.png)

A successful connection updates your [!DNL Azure Storage Explorer] UI with your [!DNL Data Landing Zone] container.

![dlz-user-container](/help/sources/images/tutorials/create/dlz/dlz-user-container.png)

With your [!DNL Data Landing Zone] container connected to [!DNL Azure Storage Explorer], you can now start exporting files from Experience Platform to your [!DNL Data Landing Zone] container. To export files, you need to establish a connection to the [!DNL Data Landing Zone] destination in the Experience Platform UI, as described in the section below. 

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/connect-destination.html). In the destination configuration workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

Because [!DNL Data Landing Zone] is an Adobe-provisioned storage, you do not need to perform any steps to authenticate to the destination.

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

*  **[!UICONTROL Name]**: Fill in the preferred name for this destination.
*  **[!UICONTROL Description]**: Optional. For example, you can mention which campaign you are using this destination for.
* **[!UICONTROL Folder path]**: Enter the path to the destination folder that will host the exported files.
* **[!UICONTROL File type]**: select the format Experience Platform should use for the exported files. When selecting the [!UICONTROL CSV] option, you can also [configure the file formatting options](../../ui/batch-destinations-file-formatting-options.md).
* **[!UICONTROL Compression format]**: select the compression type that Experience Platform should use for the exported files.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

See [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md) for instructions on activating audience segments to this destination.

### Scheduling

In the **[!UICONTROL Scheduling]** step, you can [set up the export schedule](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling) for your [!DNL Data Landing Zone] destination and you can also [configure the name of your exported files](/help/destinations/ui/activate-batch-profile-destinations.md#file-names). 

### Map attributes and identities {#map}

In the **[!UICONTROL Mapping]** step, you can select which attribute and identity fields to export for your profiles. You can also select to change the headers in the exported file to any friendly name that you wish. For more information, view the [mapping step](/help/destinations/ui/activate-batch-profile-destinations.md#mapping) in the activate batch destinations UI tutorial.

## (Beta) Export datasets {#export-datasets}

This destination supports dataset exports. For complete information on how to set up dataset exports, read the [export datasets tutorial](/help/destinations/ui/export-datasets.md).

## Validate successful data export {#exported-data}

To verify if data has been exported successfully, check your [!DNL Data Landing Zone] storage and make sure that the exported files contain the expected profile populations.
