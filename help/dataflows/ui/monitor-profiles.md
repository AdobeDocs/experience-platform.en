---
keywords: Experience Platform;home;popular topics;monitor profiles;monitor dataflows;dataflows;profile;real time customer profile;
description: Segmentation allows you to create segments and audiences from your Real-time Customer Profile data. This tutorial provides instructions on how you can monitor dataflows during segmentation using the Experience Platform user interface.
title: Monitor Dataflows for Profiles in the UI
topic-legacy: overview
type: Tutorial
---

# Monitor dataflows for Profiles in the UI 

intro blurb

## Getting started {#getting-started}

This guide requires a working understanding of the following components of Adobe Experience Platform:

- [Dataflows](../home.md): Dataflows are a representation of data jobs that move data across Platform. Dataflows are configured across different services, helping move data from source connectors to target datasets, to [!DNL Identity] and [!DNL Profile], and to [!DNL Destinations].
  - [Dataflow runs](../../sources/notifications.md): Dataflow runs are the recurring scheduled jobs based on the frequency configuration of selected dataflows.
- profiles one here
- [Sandboxes](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

## Monitoring profiles dashboard {#profile-metrics}

>[!CONTEXTUALHELP]
>id="platform_monitoring_profile_processing"
>title="Profile processing"
>abstract="The Profile processing view contains information on records ingested to Profile service, including the number of profile fragments created, profile fragments updated and the total number of profile fragments."
>text="Learn more in documentation"

>[!CONTEXTUALHELP]
>id="platform_monitoring_dataflow_run_details_profile"
>title="Dataflow run details"
>abstract="The Dataflow run details page displays more information on your Profile dataflow run, including its IMS Org ID and dataflow run ID."

To access the Profiles dashboard, select Monitoring in the left navigation. Once on the Monitoring page, select the Profiles card.

The [!UICONTROL Profile processing] page contains information on records ingested to [!DNL Profile], including number of profile fragments created, profile fragments updated, and the total number of profile fragments.

Select the filter icon ![filter](../assets/ui/monitor-sources/filter.png) beside the dataflow run start time to see more information on your [!DNL Profile] dataflow run.

![profiles](../assets/ui/monitor-sources/profiles.png)

The following metrics are available for this dashboard view:

| Metric | Description |
| -------| ----------- |
| [!UICONTROL Records received] |  The number of records received from [!DNL Data Lake]. |
| [!UICONTROL Records failed ]| The number of records that were ingested, but not into [!DNL Profile] due to errors. |
| [!UICONTROL Profile fragments added] | The number of net new [!DNL Profile] fragments added. |
| [!UICONTROL Profile fragments updated] | The number of existing [!DNL Profile] fragments updated |
| [!UICONTROL Total Profile fragments] | The total number of records written into [!DNL Profile], including all existing [!DNL Profile] fragments updated and new [!DNL Profile] fragments created. |
| [!UICONTROL Failed dataflow runs] | The number of dataflow runs that failed. |
| [!UICONTROL Processing time] | The timestamp from the start of ingestion to completion. |
| [!UICONTROL Status] | Defines the overall status of a dataflow. The possible status values are: <ul><li>`Success`: Indicates that a dataflow is active and is ingesting data according to the schedule it was provided..</li><li>`Failed`: Indicates that the activation process of a dataflow has been disrupted due to errors. </li><li>`Processing`: Indicates that the dataflow is not yet active. This status is often encountered immediately after a new dataflow is created.</li></ul> |

The [!UICONTROL Dataflow run details] page displays more information on your [!DNL Profile] dataflow run, including its IMS Org ID and dataflow run ID. This page also displays the corresponding error code and error message provided by [!DNL Profile], should any errors occur in the ingestion process.

![profiles-dataflow-run](../assets/ui/monitor-sources/profiles-dataflow-run.png)