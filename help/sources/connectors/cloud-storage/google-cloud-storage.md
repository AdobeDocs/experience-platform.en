---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Google Cloud Storage connector
topic: overview
---

# Google Cloud Storage connector

Adobe Experience Platform provides native connectivity for cloud providers like AWS, [!DNL Google Cloud Platform], and [!DNL Azure], allowing you to bring your data from these systems.

Cloud storage sources can bring your own data into [!DNL Platform] without the need to download, format, or upload. Ingested data can be formatted as XDM JSON, XDM parquet, or delimited. Every step of the process is integrated into the Sources workflow. [!DNL Platform] allows you to bring in data from [!DNL Google Cloud Storage] through batches.

## Prerequisite setup for connecting your [!DNL Google Cloud Storage] account

In order to connect to [!DNL Platform], you must first enable interoperability for your [!DNL Google Cloud Storage] account. To access the interoperability setting, open [!DNL Google Cloud Platform] and select **[!UICONTROL Settings]** from the **[!UICONTROL Storage]** option in the navigation panel.

![](../../images/tutorials/create/google-cloud-storage/nav.png)

The **[!UICONTROL Settings]** page appears. From here, you can see information regarding your [!DNL Google] project ID and details about your [!DNL Google Cloud Storage] account. To access interoperability settings, select **[!UICONTROL Interoperability]** from the top header.

![](../../images/tutorials/create/google-cloud-storage/project-access.png)

The **[!UICONTROL Interoperability]** page contains information on authentication, access keys, and the default project associated with your user account. If you have not already established a default project for interoperable access, you can set one up from within the *[!UICONTROL Default project for interoperable access]* section. If a default project has already been established, the section will show a confirmation that a project has been set as default.

To generate a new access key ID and a secret access key for your user account, select **[!UICONTROL Create a Key]**.

![](../../images/tutorials/create/google-cloud-storage/interoperability.png)

You can use your newly generated access key ID and secret access key to connect your [!DNL Google Cloud Storage] account to [!DNL Platform].

The documentation below provides information on how to connect [!DNL Google Cloud Storage] to [!DNL Platform] using APIs or the user interface:

## Connect [!DNL Google Cloud Storage] to [!DNL Platform]

The documentation below provides information on how to connect [!DNL Google Cloud Storage] to [!DNL Platform] using APIs or the user interface:

### Using APIs

- [Create a Google Cloud Storage connector using the Flow Service API](../../tutorials/api/create/cloud-storage/google.md)
- [Explore a cloud storage system using the Flow Service API](../../tutorials/api/explore/cloud-storage.md)
- [Collect cloud storage data using the Flow Service API](../../tutorials/api/collect/cloud-storage.md)

### Using the UI

- [Create a Google Cloud Storage source connector in the UI](../../tutorials/ui/create/cloud-storage/google-cloud-storage.md)
- [Configure a dataflow for a cloud storage connector in the UI](../../tutorials/ui/dataflow/batch/cloud-storage.md)