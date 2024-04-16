---
title: Advanced Data Lifecycle Management Overview
description: Advanced Data Lifecycle Management allows you to manage the lifecycle of your data by updating or purging outdated or inaccurate records.
exl-id: 104a2bb8-3242-4a20-b98d-ad6df8071a16
---
# Advanced Data Lifecycle Management in Adobe Experience Platform

Adobe Experience Platform provides a robust set of tools to manage large, complicated data operations in order to orchestrate consumer experiences. As data is ingested into the system over time, it becomes increasingly important to manage your data stores so that data is used as expected, is updated when incorrect data needs correcting, and is deleted when organizational policies deem it necessary.

<!-- Platform's data lifecycle capabilities allow you to manage your stored data through the following:

* Scheduling automated dataset expirations
* Deleting individual records from one or all datasets

>[!IMPORTANT]
>
>Record deletes are meant to be used for data cleansing, removing anonymous data, or data minimization. They are **not** to be used for data subject rights requests (compliance) as pertaining to privacy regulations like the General Data Protection Regulation (GDPR). For all compliance use cases, use [Adobe Experience Platform Privacy Service](../privacy-service/home.md) instead. -->

These activities can be performed using the [[!UICONTROL Data Lifecycle] UI workspace](#ui) or the [Data Hygiene API](#api). When a data lifecycle job executes, the system provides transparency updates at each step of process. See the section on [timelines and transparency](#timelines-and-transparency) for more information on how each job type is represented in the system.

## [!UICONTROL Data Lifecycle] UI workspace {#ui}

The [!UICONTROL Data Lifecycle] workspace in the Platform UI allows you to configure and schedule data lifecycle operations, helping to ensure that your records are being maintained as expected.

For detailed steps on managing data lifecycle tasks in the UI, see the [data lifecycle UI guide](./ui/overview.md).

## Data Hygiene API {#api}

The [!UICONTROL Data Lifecycle] UI is built on top of the Data Hygiene API, whose endpoints are available for you to use directly if you prefer to automate your data lifecycle activities. See the [Data Hygiene API guide](./api/overview.md) for more information.

## Timelines and transparency

[Record delete](./ui/record-delete.md) and dataset expiration requests each have their own processing timelines and provide transparency updates at key points in their respective workflows. 

<!-- ### Dataset expirations {#dataset-expiration-transparency} -->

The following takes place when a [dataset expiration request](./ui/dataset-expiration.md) is created:

| Stage | Time after scheduled expiration | Description |
| --- | --- | --- |
| Request is submitted | 0 hours | A data steward or privacy analyist submits a request for a dataset to expire at a given time. The request is visible in the [!UICONTROL Data Lifecycle UI] after it has been submitted, and remains in a pending status until the scheduled expiration time, after which the request will execute. |
| Dataset is dropped | 1 hour | The dataset is dropped from the [dataset inventory page](../catalog/datasets/user-guide.md) in the UI. The data within the data lake is only soft deleted, and will remain so until the end of the process, after which it will be hard deleted. |
| Profile count updated | 30 hours | Depending on the contents of the dataset being deleted, some profiles may be removed from the system if all of their component attributes are tied to that dataset. 30 hours after the dataset is deleted, any resulting changes in overall profile counts are reflected in [dashboard widgets](../dashboards/guides/profiles.md#profile-count-trend) and other reports. |
| Audiences updated | 48 hours | Once all affected profiles are updated, all related [audiences](../segmentation/home.md) are updated to reflect their new size. Depending on the dataset that was removed and the attributes that you are segmenting on, the size of each audience could increase or decrease as a result of the deletion. |
| Journeys and destinations updated | 50 hours | [Journeys](https://experienceleague.adobe.com/docs/journey-optimizer/using/orchestrate-journeys/about-journeys/journey.html), [campaigns](https://experienceleague.adobe.com/docs/journey-optimizer/using/campaigns/get-started-with-campaigns.html), and [destinations](../destinations/home.md) are updated according to changes in related segments. |
| Hard deletion complete | 15 days | All data related to the dataset is hard deleted from the data lake. The [status of the data lifecycle job](./ui/browse.md#view-details) that deleted the dataset is updated to reflect this. |

{style="table-layout:auto"}

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

This document provided an overview of Platform's Data Lifecycle capabilities. To get started making data hygiene requests in the UI, refer to the [UI guide](./ui/overview.md). To learn how to create Data Lifecycle jobs programmatically, refer to the [Data Hygiene API guide](./api/overview.md)
