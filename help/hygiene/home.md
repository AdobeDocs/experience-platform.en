---
title: Advanced Data Lifecycle Management Overview
description: Advanced Data Lifecycle Management allows you to manage the lifecycle of your data by updating or purging outdated or inaccurate records.
exl-id: 104a2bb8-3242-4a20-b98d-ad6df8071a16
---
# Advanced Data Lifecycle Management in Adobe Experience Platform

Adobe Experience Platform provides a robust set of tools to manage large, complicated data operations in order to orchestrate consumer experiences. As data is ingested into the system over time, it becomes increasingly important to manage your data stores so that data is used as expected, is updated when incorrect data needs correcting, and is deleted when organizational policies deem it necessary.

<!-- Experience Platform's data lifecycle capabilities allow you to manage your stored data through the following:

* Scheduling automated dataset expirations
* Deleting individual records from one or all datasets

>[!IMPORTANT]
>
>Record deletes are meant to be used for data cleansing, removing anonymous data, or data minimization. They are **not** to be used for data subject rights requests (compliance) as pertaining to privacy regulations like the General Data Protection Regulation (GDPR). For all compliance use cases, use [Adobe Experience Platform Privacy Service](../privacy-service/home.md) instead. -->

These activities can be performed using the [[!UICONTROL Data Lifecycle] UI workspace](#ui) or the [Data Hygiene API](#api). When a data lifecycle job executes, the system provides transparency updates at each step of process. See the section on [timelines and transparency](#timelines-and-transparency) for more information on how each job type is represented in the system.

>[!NOTE]
>
>Advanced Data Lifecycle Management supports dataset deletions through the [dataset expiration endpoint](./api/dataset-expiration.md) and ID deletions (row-level data) using primary identities via the [workorder endpoint](./api/workorder.md). You can also manage [dataset expirations](./ui/dataset-expiration.md) and [record deletions](./ui/record-delete.md) through the Experience Platform UI. See the linked documentation for more information. Note that Data Lifecycle does not support batch deletion.

## [!UICONTROL Data Lifecycle] UI workspace {#ui}

The [!UICONTROL Data Lifecycle] workspace in the Experience Platform UI allows you to configure and schedule data lifecycle operations, helping to ensure that your records are being maintained as expected.

For detailed steps on managing data lifecycle tasks in the UI, see the [data lifecycle UI guide](./ui/overview.md).

## Data Hygiene API {#api}

The [!UICONTROL Data Lifecycle] UI is built on top of the Data Hygiene API, whose endpoints are available for you to use directly if you prefer to automate your data lifecycle activities. See the [Data Hygiene API guide](./api/overview.md) for more information.

## Timelines and transparency {#timelines-and-transparency}

[Record delete](./ui/record-delete.md) and dataset expiration requests each have their own processing timelines and provide transparency updates at key points in their respective workflows. 

The following takes place when a [dataset expiration request](./ui/dataset-expiration.md) is created:

| Stage | Time after scheduled expiration | Description |
| --- | --- | --- |
| Request is submitted | 0 hours | A data steward or privacy analyst submits a request for a dataset to expire at a given time. The request is visible in the [!UICONTROL Data Lifecycle UI] after it has been submitted, and remains in a pending status until the scheduled expiration time, after which the request will execute. |
| Dataset is flagged for deletion | 0-2 hours | Once the request is executed, the dataset is flagged for deletion. If using Amazon Web Services (AWS) data storage, this process takes up to two hours. During this time, operations like batch and streaming segmentation, preview or estimate, export, and access disregard this dataset. |
| Dataset is dropped | 3 hours | **One hour after the dataset is flagged for deletion**, it is fully removed from the system. At this point, the dataset is dropped from the [dataset inventory page](../catalog/datasets/user-guide.md) in the UI. However, the data within the data lake is only soft deleted at this stage and will remain so until the hard deletion process is completed. |
| Profile count updated | 30 hours | Depending on the contents of the dataset being deleted, some profiles may be removed from the system if all of their component attributes are tied to that dataset. 30 hours after the dataset is deleted, any resulting changes in overall profile counts are reflected in [dashboard widgets](../dashboards/guides/profiles.md#profile-count-trend) and other reports. |
| Audiences updated | 48 hours | Once all affected profiles are updated, all related [audiences](../segmentation/home.md) are updated to reflect their new size. Depending on the dataset that was removed and the attributes that you are segmenting on, the size of each audience could increase or decrease as a result of the deletion. |
| Journeys and destinations updated | 50 hours | [Journeys](https://experienceleague.adobe.com/docs/journey-optimizer/using/orchestrate-journeys/about-journeys/journey.html), [campaigns](https://experienceleague.adobe.com/docs/journey-optimizer/using/campaigns/get-started-with-campaigns.html), and [destinations](../destinations/home.md) are updated according to changes in related segments. |
| Hard deletion complete | 15 days | All data related to the dataset is hard deleted from the data lake. The [status of the data lifecycle job](./ui/browse.md#view-details) that deleted the dataset is updated to reflect this. |

{style="table-layout:auto"}

>[!IMPORTANT]
>
>Dataset deletions in Amazon Web Services (AWS) are subject to a latency of around three hours before changes are fully applied. This includes up to two hours for the dataset to be flagged for deletion, followed by an additional hour before it is fully dropped from the system. In contrast, deletion requests for Experience Platform instances that use Azure Data Lake result in immediate changes across business functions. 
>
>For AWS users, this delay may impact batch segmentation, streaming segmentation, previews, estimates, exports, and data access. This latency only affects customers using AWS, as Azure Data Lake users experience immediate updates. For AWS users, it may take up to three hours for deletion requests to fully propagate through all impacted systems. Adjust your expectations accordingly.


<!-- ### Record deletes {#record-delete-transparency}

The following takes place when a [record delete request](./ui/record-delete.md) is created:

| Stage | Time after request submission | Description |
| --- | --- | --- |
| Request is submitted | 0 hours | A data steward or privacy analyist submits a record delete request. The request is visible in the [!UICONTROL Data Lifecycle UI] after it has been submitted. |
| Profile lookups updated | 3 hours | The change in profile counts caused by the deleted identity are reflected in [dashboard widgets](../dashboards/guides/profiles.md#profile-count-trend) and other reports. |
| Segments updated | 24 hours | Once profiles are removed, all related [segments](../segmentation/home.md) are updated to reflect their new size. |
| Journeys and destinations updated | 26 hours | [Journeys](https://experienceleague.adobe.com/docs/journey-optimizer/using/orchestrate-journeys/about-journeys/journey.html), [campaigns](https://experienceleague.adobe.com/docs/journey-optimizer/using/campaigns/get-started-with-campaigns.html), and [destinations](../destinations/home.md) are updated according to changes in related segments. |
| Records soft deleted in data lake | 7 days | The data is soft deleted from the data lake. |
| Data vacuuming completed | 14 days | The [status of the lifecycle job](./ui/browse.md#view-details) updates to indicate that the job has completed, meaning that data vacuuming has been completed on the data lake and the relevant records have been hard deleted. |

{style="table-layout:auto"} -->

## Next steps

This document provided an overview of Experience Platform's Data Lifecycle capabilities. To get started making data hygiene requests in the UI, refer to the [UI guide](./ui/overview.md). To learn how to create Data Lifecycle jobs programmatically, refer to the [Data Hygiene API guide](./api/overview.md)
