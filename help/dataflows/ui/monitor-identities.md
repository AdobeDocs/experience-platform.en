# Monitor dataflows for identities in the UI

INTRO

## Getting started {#getting-started}

BLURB

## Monitoring identities dashboard {#identity-metrics}

>[!CONTEXTUALHELP]
>id="platform_monitoring_identity_processing"
>title="Identity processing"
>abstract="The Identity processing view contains information on records ingested to Identity service, including the number of identities added, graphs created and graphs updated. Review the metric definition guide to learn more about metrics and graphs."
>text="Learn more in documentation"

>[!CONTEXTUALHELP]
>id="platform_monitoring_dataflow_run_details_identity"
>title="Dataflow run details"
>abstract="The Dataflow run details page displays more information on your Identity dataflow run, including its IMS Org ID and dataflow run ID."

To access the **[!UICONTROL Identities]** dashboard, select **[!UICONTROL Monitoring]** in the left navigation. Once on the **[!UICONTROL Monitoring]** page, select the **[!UICONTROL Identities]** card.

IMAGE

On the main **[!UICONTROL Identities]** dashboard, the **[!UICONTROL Identities]** card shows information about the INFO

The dashboard itself contains metrics about Identity processing. By default, the dashboard will show Identity processing details for your organization's sources for the last 24 hours. 

IMAGE

The [!UICONTROL Identity processing] page contains information on records ingested to [!DNL Identity Service], including number of identities added, graphs created, and graphs updated.

The following metrics are available for this dashboard view:

TABLE

You can select the filter icon (ICON) beside the source name to see INFO.

Select the filter icon ![filter](../assets/ui/monitor-sources/filter.png) beside the dataflow run start time to see more information on your [!DNL Identity] dataflow run.

![identities](../assets/ui/monitor-sources/identities.png)

| Identity metrics | Description |
| ---------------- | ----------- |
| [!UICONTROL Records received] | The number of records received from [!DNL Data Lake]. |
| [!UICONTROL Records failed] | The number of records that were not ingested into Platform due to errors in the data. |
| [!UICONTROL Records skipped] | The number of records that were ingested, but not into [!DNL Identity Service] because there was only one identifier in the record row. |
| [!UICONTROL Records ingested] | The number of records ingested into [!DNL Identity Service]. |
| [!UICONTROL Total records] | The total count of all records, including records failed, records skipped, [!DNL Identities] added, and duplicated records. |
| [!UICONTROL Identities added] | The number of net new identifiers added to [!DNL Identity Service]. |
| [!UICONTROL Graphs created] | The number of net new identity graphs created in [!DNL Identity Service]. |
| [!UICONTROL Graphs updated] | The number of existing identity graphs updated with new edges. |
| [!UICONTROL Failed dataflow runs] | The number of dataflow runs that failed. |
| [!UICONTROL Processing time] | The timestamp from the start of ingestion to completion. |
| [!UICONTROL Status] | Defines the overall status of a dataflow. The possible status values are: <ul><li>`Success`: Indicates that a dataflow is active and is ingesting data according to the schedule it was provided..</li><li>`Failed`: Indicates that the activation process of a dataflow has been disrupted due to errors. </li><li>`Processing`: Indicates that the dataflow is not yet active. This status is often encountered immediately after a new dataflow is created.</li></ul> |

The [!UICONTROL Dataflow run details] page displays more information on your [!DNL Identity] dataflow run, including its IMS Org ID and dataflow run ID. This page also displays the corresponding error code and error message provided by [!DNL Identity Service], should any errors occur in the ingestion process.

Select **[!UICONTROL Run start: 2/14/2021, 9:47 PM]** to return to the previous page.

![identities-dataflow-run](../assets/ui/monitor-sources/identities-dataflow-run.png)
