---
title: Extend dataset export schedules for dataflows created prior to November 2024
description: Learn how to extend the export schedule for dataset export dataflows created prior to November 2024 that will stop working on September 1st, 2025.
type: Tutorial
hide: true
hidefromtoc: true
exl-id: a756886b-3f4b-4427-bd26-817221ba68aa
---
# Extend dataset export schedules for dataflows created prior to November 2024

>[!IMPORTANT]
>
>**Action required**: If your organization has [dataset export dataflows](export-datasets.md) created prior to November 2024, these dataflows will stop working on September 1st, 2025. This guide explains how to extend the export schedule beyond this date for the dataflows that you want to keep.

## Overview {#overview}

In the [September 2024 release of Experience Platform](/help/release-notes/2024/september-2024.md#destinations), Adobe introduced a default end date of **May 1st, 2025** for all dataset export dataflows created prior to the September 2024 release.

**This date has since been updated to September 1st, 2025** for all dataset export dataflows that were created **prior to November 2024**.

Dataset export dataflows created prior to November 2024 will stop exporting data on **September 1st, 2025** unless you manually extend their expiration date.

If you need the dataflows to keep exporting data after **September 1st, 2025**, you must extend their schedules for each destination to which you are exporting datasets, by following the steps in this guide.

## Affected destinations {#affected-destinations}

Your organization may have active dataset export dataflows sending data to the destinations listed below. Follow the steps in the next sections and watch the walkthrough video to learn how to identify which datasets are set to expire.

* [[!DNL Azure Data Lake Storage Gen2]](../catalog/cloud-storage/adls-gen2.md)
* [[!DNL Data Landing Zone]](../catalog/cloud-storage/data-landing-zone.md)
* [[!DNL Google Cloud Storage]](../catalog/cloud-storage/google-cloud-storage.md)
* [[!DNL Amazon S3]](../catalog/cloud-storage/amazon-s3.md#changelog)
* [[!DNL Azure Blob]](../catalog/cloud-storage/azure-blob.md#changelog) 
* [[!DNL SFTP]](../catalog/cloud-storage/sftp.md#changelog)
* [[!DNL Marketo Measure Ultimate]](../catalog/adobe/marketo-measure-ultimate.md)

## Video tutorial {#video}

Watch the video below for a step-by-step demonstration of how to identify dataset exports with upcoming end dates and extend the export schedule for the dataflows that you want to keep.

>[!VIDEO](https://video.tv.adobe.com/v/3470518/)

## Step 1: Identify affected dataflows {#identify-dataflows}

Before extending the export schedule for your dataset export dataflows, you first need to identify which dataflows are affected by the upcoming expiration date. Follow the steps below to locate dataflows that require action.

1. Go to **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]** in the Experience Platform UI.
2. Select **[!UICONTROL Activate]** on a destination which has active dataset export dataflows.

    >[!TIP]
    >
    >Use the **[!UICONTROL Data Types]** filter on the left side of the catalog to filter available destinations by **[!UICONTROL Datasets]**. 

3. Select the **[!UICONTROL Datasets]** data type to display only the dataflows with dataset exports.
![Screenshot showing how to filter dataflows by data type.](/help/destinations/assets/ui/export-datasets/dataset-type.png)
4. Select the **[!UICONTROL Created]** column header and choose **[!UICONTROL Sort Ascending]** to see older dataflows.
![Screenshot showing how to sort dataflows ascending.](/help/destinations/assets/ui/export-datasets/sort-ascending.png)
5. Identify which of the dataflows created prior to November 2024 you want to keep.

## Step 2: Access the export datasets workflow {#access-workflow}

For each dataflow that you want to keep, you need to access the export datasets workflow to modify the schedule.

1. Select the dataflow name in the **[!UICONTROL Name]** column. This takes you to the **[!UICONTROL Dataflow runs]** page.
2. On this page, select the **[!UICONTROL Export datasets]** option.
![Screenshot showing the export datasets option in the dataflow runs page.](/help/destinations/assets/ui/export-datasets/export-datasets-option.png)
3. On the **[!UICONTROL Select datasets]** page, select **[!UICONTROL Next]**. You do not need to add any new datasets to the dataflow.
4. This takes you to the **[!UICONTROL Scheduling]** page where you can also see a notification informing you of the dataset export expiration date.
![Dataset export dataflows with expiration notification](/help/destinations/assets/ui/export-datasets/dataset-export-notification.png)

## Step 3: Extend the export schedule {#extend-export-schedule}

Now you can modify the export schedule to extend beyond September 1st, 2025.

1. Select **[!UICONTROL Edit schedule]**.
![Screenshot of the Scheduling step showing the Edit schedule button.](/help/destinations/assets/ui/export-datasets/edit-schedule.png)
2. Select a new export schedule, then select **[!UICONTROL Save]**.
![Screenshot of the Scheduling step showing the scheduling options.](/help/destinations/assets/ui/export-datasets/edit-schedule-calendar.png)

    >[!TIP]
    >
    >Check the [dataset export documentation](export-datasets.md#scheduling) for detailed guidance on how to configure dataset export schedules.

## What happens if I miss the September 1st, 2025 deadline? {#missed-deadline}

If your dataset export dataflows expire on September 1st, 2025 and you haven't extended their schedules, there is a **30 days grace period** where you can contact Adobe to re-enable your dataflows without any data loss. This includes data that was not exported between September 1st and the date when you contacted Adobe.

>[!IMPORTANT]
>
>While Adobe provides this grace period, we strongly recommend extending your schedules before the September 1st, 2025 deadline to ensure uninterrupted data exports and avoid any potential service disruptions.
