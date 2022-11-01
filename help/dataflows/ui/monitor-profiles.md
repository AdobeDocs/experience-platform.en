---
keywords: Experience Platform;home;popular topics;monitor profiles;monitor dataflows;dataflows;profile;real time customer profile;
description: Real-time Customer Profile lets you see a holistic view of each individual customer by combining data from multiple channels, including online, offline, CRM, and third party. This tutorial provides instructions on how you can monitor dataflows with Profiles using the Experience Platform user interface.
title: Monitor Dataflows for Profiles in the UI
topic-legacy: overview
type: Tutorial
exl-id: 00b624b2-f6d1-4ef2-abf2-52cede89b684
---
# Monitor dataflows for Profiles in the UI 

Real-time Customer Profile lets you see a holistic view of each individual customer by combining data from multiple channels, including online, offline, CRM, and third party. Profile allows you to consolidate your customer data into a unified view offering an actionable, timestamped account of every customer interaction. 

The monitoring dashboard provides you with a visual representation of the data's activity within Profile, including the status of your data's Profiles. This tutorial provides instructions on how you can use the monitoring dashboard to monitor your data's profiles using the Experience Platform user interface, allowing you to track the status of Profile processing.

## Getting started {#getting-started}

This guide requires a working understanding of the following components of Adobe Experience Platform:

- [Dataflows](../home.md): Dataflows are a representation of data jobs that move data across Platform. Dataflows are configured across different services, helping move data from source connectors to target datasets, to [!DNL Identity] and [!DNL Profile], and to [!DNL Destinations].
  - [Dataflow runs](../../sources/notifications.md): Dataflow runs are the recurring scheduled jobs based on the frequency configuration of selected dataflows.
- [Real-time Customer Profile](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
- [Sandboxes](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

## Monitoring profiles dashboard {#profile-metrics}

>[!CONTEXTUALHELP]
>id="platform_monitoring_profile_processing"
>title="Profile processing"
>abstract="The Profile processing view contains information on records ingested to Profile service, including the number of profile fragments created, profile fragments updated, and the total number of profile fragments."
>text="Learn more in documentation"

>[!CONTEXTUALHELP]
>id="platform_monitoring_dataflow_run_details_profile"
>title="Dataflow run details"
>abstract="The Dataflow run details page displays more information on your Profile dataflow run, including its organization ID and dataflow run ID."

To access the **[!UICONTROL Profiles]** dashboard, select **[!UICONTROL Monitoring]** in the left navigation. Once on the **[!UICONTROL Monitoring]** page, select the **[!UICONTROL Profiles]** card.

![The Profiles card. Information about the number of records received, the number of profile fragments created and updated, and the success rate is shown.](../assets/ui/monitor-profiles/focus-card.png)

On the main **[!UICONTROL Profiles]** dashboard, the **[!UICONTROL Profiles]** card shows information about the total number of records received, the number of profile fragments created and updated, as well as the success rate of created and updated profile fragments. 

The dashboard itself contains metrics about Profile processing. By default, the dashboard will show Profile processing details for your organization's sources for the last 24 hours. 

![The Profiles dashboard. Information about the number of the Profile records received per source is displayed.](../assets/ui/monitor-profiles/sources.png)

The [!UICONTROL Profile processing] page contains information on records ingested to [!DNL Profile], including number of profile fragments created, profile fragments updated, and the total number of profile fragments.

The following metrics are available for this dashboard view:

| Metric | Description |
| -------| ----------- |
| **[!UICONTROL Source name]** | The name of the source. |
| **[!UICONTROL Records received]** |  The number of records received from data lake. |
| **[!UICONTROL Records failed]**| The number of records that were ingested, but not into [!DNL Profile] due to errors. |
| **[!UICONTROL Profile fragments created]** | The number of net new [!DNL Profile] fragments added. |
| **[!UICONTROL Profile fragments updated]** | The number of existing [!DNL Profile] fragments updated. |
| **[!UICONTROL Total Profile fragments]** | The total number of records written into [!DNL Profile], including all existing [!DNL Profile] fragments updated and new [!DNL Profile] fragments created. |
| **[!UICONTROL Total failed dataflows]** | The number of dataflow runs that failed. |

You can select the filter icon ![Filter icon](../assets/ui/monitor-profiles/filter.png) beside the source name to see Profile processing information for that selected source's dataflows.

![The filter icon is highlighted. Selecting this icon allows you to view the selected source's dataflows.](../assets/ui/monitor-profiles/sources-filter.png)

Alternatively, you can select **[!UICONTROL Dataflows]** on the toggle to see Profile processing details for your organization's dataflows for the last 24 hours.

![The Profiles dashboard. Information about the number of the Profile records received per dataflow is displayed.](../assets/ui/monitor-profiles/dataflows.png)

The following metrics are available for this dashboard view:

| Metric | Description |
| -------| ----------- |
| **[!UICONTROL Dataflow]** | The name of the dataflow. |
| **[!UICONTROL Dataset]** | The name of the dataset that the dataflow is inserting to. |
| **[!UICONTROL Source name]** | The name of the source that the dataflow belongs to. |
| **[!UICONTROL Records received**] |  The number of records received from data lake. |
| **[!UICONTROL Records failed]** | The number of records that were ingested, but not into [!DNL Profile] due to errors. |
| **[!UICONTROL Profile fragments created]** | The number of net new [!DNL Profile] fragments added. |
| **[!UICONTROL Profile fragments updated]** | The number of existing [!DNL Profile] fragments updated |
| **[!UICONTROL Total Profile fragments]** | The total number of records written into [!DNL Profile], including all existing [!DNL Profile] fragments updated and new [!DNL Profile] fragments created. |
| **[!UICONTROL Total failed flow runs]** | The number of dataflow runs that failed. |
| **[!UICONTROL Last active]** | The timestamp which the dataflow was last run. |

Select the filter icon ![filter](../assets/ui/monitor-profiles/filter.png) beside the dataflow run start time to see more information on your [!DNL Profile] dataflow run.

![The filter icon is highlighted. Selecting this icon allows you to view details about the selected dataflow.](../assets/ui/monitor-profiles/dataflows-filter.png)

The [!UICONTROL Dataflow run details] page displays more information on your [!DNL Profile] dataflow run, including its organization ID and dataflow run ID. This page also displays the corresponding error code and error message provided by [!DNL Profile], should any errors occur in the ingestion process.

![A dashboard showing detailed information about the selected dataflow is displayed.](../assets/ui/monitor-profiles/dataflow-run-details.png)

The following metrics are available for this dashboard view:

| Metric | Description |
| -------| ----------- |
| **[!UICONTROL Records received]** | The number of records received from data lake. |
| **[!UICONTROL Records failed]** | The number of records that were ingested, but not into [!DNL Profile] due to errors. |
| **[!UICONTROL Profile fragments created]** | The number of net new [!DNL Profile] fragments added. |
| **[!UICONTROL Profile fragments updated]** | The number of existing [!DNL Profile] fragments updated. |
| **[!UICONTROL Status]** | Defines the overall status of a dataflow. The possible status values are: <ul><li>`Success`: Indicates that a dataflow is active and is ingesting data according to the schedule it was provided..</li><li>`Failed`: Indicates that the activation process of a dataflow has been disrupted due to errors. </li><li>`Processing`: Indicates that the dataflow is not yet active. This status is often encountered immediately after a new dataflow is created.</li></ul> |
| **[!UICONTROL Dataflow run start]** | The date and time the dataflow started to run. |
| **[!UICONTROL Last updated]** | The date and time the dataflow last updated. |
| **[!UICONTROL Error summary]** | If the dataflow run failed, this displays an error code and summary of why the dataflow run failed. |
| **[!UICONTROL Dataflow run ID]** | The ID of the dataflow run. |
| **[!UICONTROL IMS org ID]** | The organization ID that the dataflow run belongs to. |

Additionally, you can select the toggle to view the records failed or the records skipped. The errors section includes details about the error code and number of records failed or excluded.
