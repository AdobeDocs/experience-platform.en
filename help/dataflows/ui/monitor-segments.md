---
keywords: Experience Platform;home;popular topics;monitor segments;monitor dataflows;dataflows;segmentation
description: Segmentation allows you to create segments and audiences from your Real-time Customer Profile data. This tutorial provides instructions on how you can monitor dataflows during segmentation using the Experience Platform user interface.
solution: Experience Platform
title: Monitor dataflows for segments in the UI
topic-legacy: overview
type: Tutorial
---
# Monitor dataflows for segments in the UI

Segmentation Service allows you to create segments and audiences from your Real-time Customer Profile data in Adobe Experience Platform. Platform provides dataflows to transparently track this flow of data from sources to destinations.

The monitoring dashboard provides you with a visual representation of the journey of a dataflow, including the status of your data's segmentation. This tutorial provides instructions on how you can use the monitoring dashboard to monitor your data's segmentation using the Experience Platform user interface.

## Getting started {#getting-started}

This guide requires a working understanding of the following components of Adobe Experience Platform:

- [Dataflows](../home.md): Dataflows are a representation of data jobs that move data across Platform. Dataflows are configured across different services, helping move data from source connectors to target datasets, to [!DNL Identity] and [!DNL Profile], and to [!DNL Destinations].
  - [Dataflow runs](../../sources/notifications.md): Dataflow runs are the recurring scheduled jobs based on the frequency configuration of selected dataflows.
- [Segmentation](../../segmentation/home.md): Segmentation allows you to create segments and audiences from your Real-time Customer Profile data. 
- [Sandboxes](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

## Monitoring segments dashboard {#monitoring-segments-dashboard}

To access the Segments dashboard, select Monitoring in the left navigation. Once on the Monitoring page, select Segments. The dashboard contains metrics for both segments and segment jobs. By default, the dashboard will show the segment metrics for the last 24 hours.

IMAGE

The following metrics are available for this dashboard view:

| Metric | Description |
| ------ | ----------- |
| **Segment name** | The name of the segment. |
| **Last evaluation timestamp** | The date and time that the segment's last evaluation job ran. Possible values include |
| **Last evaluation status** | The status of the segment's last evaluation job. |
| **Last evaluation profiles** | The number of profiles that were evaluated in the segment's last evaluation job. |
| **Last activation timestamp** | The date and time that the segment's last activation job ran. |
| **Last activation status** | The status of the segment's last activation job. Possible values include | 
| **Last activation identities** | The number of identities that were activated in the segment's last activation job. |
| **Last activation destination** | The name of the destination that the segment's last activation job activated to. |

You can filter to a specific segment and view its segment jobs by selecting the filter icon.

IMAGE

The filtered segment dashboard appears. This dashboard displays the time and status of the last evaluation and export jobs run, a graph showing the profile count of the segment evaluation, and metrics for the segment jobs that were run. By default, the dashboard will show segment job metrics for the last 24 hours.

IMAGE

The following metrics are available for this dashboard view:

| Metric | Description |
| ------ | ----------- |
| **Job start** | The date and time when the segment job started. |
| **Type** | Indicates the type of the segment job. The two supported job types are **activation** and **evaluation** jobs. |
| **Job complete** | The date and time when the segment job completed. |
| **Processing time** | The amount of time it took for the segment job to complete. |
| **Job status** | The status of the segment job. Supported values include **[!UICONTROL Success]**, **[!UICONTROL In Progress]**, and **[!UICONTROL Failed]**. |
| **Profile count** | The number of profiles that the segment job is evaluating. Each user should have a unique profile. |
| **Identity count** | The number of identities that the segment job is activating. Each profile can have multiple identities. For example, a profile could have an email, phone number, and a loyalty number as identities. |
| **Destination name** | The name of the destination that the segment job is being activated for. |

You can further filter to a specific segment job and see its details by selecting the filter icon. There are two different kinds of segment jobs that can be filtered on: activation jobs and evaluation jobs:

### Activation job details {#activation-job-details}

The activation job dataflow run details page shows information on the run's metrics, dataflow run errors, and segments that are related to the segment job. By default, the details page shows the dataflow run errors.

IMAGE

The following metrics are available for this dashboard view:

| Metric | Description |
| ------ | ----------- |
| **Profiles received** | |
| **Identities activated** | |
| **Identities excluded** | |
| **Size of data** | |
| **Total files** | |
| **Status** | |
| **Dataflow run start** | |
| **Dataflow run end** | |
| **Dataflow run ID** | |
| **IMS org ID** | |
| **Destination name** | |

Underneath the metrics, a toggle to display between the dataflow run errors and the segments is displayed.

Under the dataflow run errors section, the details page shows the identities failed and the identities excluded. Within this errors section, details about the error code and number of identities failed or excluded.

IMAGE

Under the segments section a list of segments that belong to the activation job are shown. You can filter the list of segments by name by using the search bar. 

For the segments section, the following metrics are available:

| Metric | Description | 
| ------ | ----------- |
| **Name** | |
| **Identities activated** | |
| **Identities excluded** | |
| **Last dataflow run status** | |
| **Last dataflow run date** | |

### Evaluation job details {#evaluation-job-details}

The evaluation job dataflow run details page shows information on the run's metrics and segments that are related to the segment job.

IMAGE

The following metrics are available for this dashboard view:

| Metric | Description |
| ------ | ----------- |
| **Total profiles** | |
| **Status** | |
| **Job start** | |
| **Job end** | |
| **Job type** | |
| **Evaluation type** | |
| **Job ID** | |
| **IMS org ID** | |
| **Segment name** | |
| **Segment ID** | |

Under the segments section a list of segments that belong to the activation job are shown. You can filter the list of segments by name by using the search bar. 

For the segments section, the following metrics are available:

| Metric | Description | 
| ------ | ----------- |
| **Name** | |
| **Profile count** | |