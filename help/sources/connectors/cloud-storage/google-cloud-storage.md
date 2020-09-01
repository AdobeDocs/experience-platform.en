---
keywords: Experience Platform;home;popular topics;Google Cloud Storage;google cloud storage
solution: Experience Platform
title: Google Cloud Storage connector
topic: overview
description: The documentation below provides information on how to connect Google Cloud Storage to Platform using APIs or the user interface.
---

# Google Cloud Storage connector

Adobe Experience Platform provides native connectivity for cloud providers like AWS, [!DNL Google Cloud Platform], and [!DNL Azure], allowing you to bring your data from these systems.

Cloud storage sources can bring your own data into [!DNL Platform] without the need to download, format, or upload. Ingested data can be formatted as XDM JSON, XDM parquet, or delimited. Every step of the process is integrated into the Sources workflow. [!DNL Platform] allows you to bring in data from [!DNL Google Cloud Storage] through batches.

## IP address allow list

The following IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources.

### East US region

- `20.41.2.0/23`
- `20.41.4.0/26`
- `20.44.17.80/28`
- `20.49.102.16/29`
- `40.70.148.160/28`
- `52.167.107.224/28`

### West Europe region

- `13.69.67.192/28`
- `13.69.107.112/28`
- `13.69.112.128/28`
- `40.74.24.192/26`
- `40.74.26.0/23`
- `40.113.176.232/29`
- `52.236.187.112/28`

### Australia East

- `13.70.74.144/28`
- `20.37.193.0/25`
- `20.37.193.128/26`
- `20.37.198.224/29`
- `40.79.163.80/28`
- `40.79.171.160/28`

## Prerequisite setup for connecting your [!DNL Google Cloud Storage] account

In order to connect to [!DNL Platform], you must first enable interoperability for your [!DNL Google Cloud Storage] account. To access the interoperability setting, open [!DNL Google Cloud Platform] and select **[!UICONTROL Settings]** from the **[!UICONTROL Storage]** option in the navigation panel.

![](../../images/tutorials/create/google-cloud-storage/nav.png)

The **[!UICONTROL Settings]** page appears. From here, you can see information regarding your [!DNL Google] project ID and details about your [!DNL Google Cloud Storage] account. To access interoperability settings, select **[!UICONTROL Interoperability]** from the top header.

![](../../images/tutorials/create/google-cloud-storage/project-access.png)

The **[!UICONTROL Interoperability]** page contains information on authentication, access keys, and the default project associated with your user account. If you have not already established a default project for interoperable access, you can set one up from within the **[!UICONTROL Default project for interoperable access]** section. If a default project has already been established, the section will show a confirmation that a project has been set as default.

To generate a new access key ID and a secret access key for your user account, select **[!UICONTROL Create a Key]**.

![](../../images/tutorials/create/google-cloud-storage/interoperability.png)

You can use your newly generated access key ID and secret access key to connect your [!DNL Google Cloud Storage] account to [!DNL Platform].

## Connect [!DNL Google Cloud Storage] to [!DNL Platform]

The documentation below provides information on how to connect [!DNL Google Cloud Storage] to [!DNL Platform] using APIs or the user interface:

### Using APIs

- [Create a Google Cloud Storage connector using the Flow Service API](../../tutorials/api/create/cloud-storage/google.md)
- [Explore a cloud storage system using the Flow Service API](../../tutorials/api/explore/cloud-storage.md)
- [Collect cloud storage data using the Flow Service API](../../tutorials/api/collect/cloud-storage.md)

### Using the UI

- [Create a Google Cloud Storage source connector in the UI](../../tutorials/ui/create/cloud-storage/google-cloud-storage.md)
- [Configure a dataflow for a cloud storage connector in the UI](../../tutorials/ui/dataflow/batch/cloud-storage.md)