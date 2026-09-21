---
description: Learn how to monitor dataflows that move data from data lake to the relational store used by Orchestrated Campaigns in Adobe Experience Platform.
solution: Experience Platform
title: Monitor Orchestrated Campaign Ingestion in the UI
type: Tutorial
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
subfeature_v2:
  - id: b3ddd7c3-4e07-4269-8660-8dd1e8139d74
    internal-label: Monitoring
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---

# Monitor Orchestrated Campaign ingestion in the UI

<!-- DRAFT: PLAT-307189. Screenshots pending capture from the bug bash environment (do not use the XD mocks; QA confirmed the shipped UI differs from them). Several bug bash test cases were still unresolved as of 2026-09-18 (summary card data, metrics tiles, Records failed trend graph, detail table columns, search, failed dataflow runs, cross-stage reconciliation) - reverify against the live UI before publishing. -->

Orchestrated Campaigns use a relational store to power Adobe Journey Optimizer Brand Journeys. Use the **[!UICONTROL Orchestrated Campaign]** dashboard to monitor the dataflows that move data from data lake into that relational store, and to troubleshoot dropped or failed records without contacting support.

This guide is for data stewards and marketing or campaign operations users who manage batch and Orchestrated Campaign ingestion in [!DNL Experience Platform].

## Getting started {#getting-started}

This guide requires a working understanding of the following components of Adobe Experience Platform:

- [Dataflows](../home.md): Dataflows are a representation of data jobs that move data across Experience Platform. Dataflows are configured across different services, helping move data from source connectors to target datasets, to [!DNL Identity] and [!DNL Profile], and to [!DNL Destinations].
  - [Dataflow runs](../../sources/notifications.md): Dataflow runs are the recurring scheduled jobs based on the frequency configuration of selected dataflows.
- [Real-Time Customer Profile](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
- [Sandboxes](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Experience Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

## Access the Orchestrated Campaign dashboard {#access-dashboard}

In the [!DNL Experience Platform] UI, select **[!UICONTROL Monitoring]** in the left navigation. On the **[!UICONTROL Monitoring]** page, select the **[!UICONTROL Orchestrated Campaign]** tab.

<!-- TODO screenshot: Orchestrated Campaign tab next to Batch end-to-end and Streaming end-to-end -->

The **[!UICONTROL Orchestrated Campaign]** dashboard shows two ingestion summary cards, a metrics panel with trend graphs, and a dataflow and dataset detail table.

## View the ingestion summary cards {#summary-cards}

The dashboard displays two summary cards side by side:

- **[!UICONTROL Data Lake]**: Shows record counts for data moving from source dataflows into [!DNL Data Lake].
- **[!UICONTROL Orchestrated Campaign]**: Shows record counts for data moving from [!DNL Data Lake] into the relational store.

<!-- TODO screenshot: Data Lake and Orchestrated Campaign summary cards -->

Each card reports the same five metrics for its stage:

| Metric | Description |
| --- | --- |
| **[!UICONTROL Records ingested]** | The total number of net new records ingested into the stage. |
| **[!UICONTROL Records updated]** | The total number of existing records updated in the stage. |
| **[!UICONTROL Records deleted]** | The total number of records deleted from the stage. |
| **[!UICONTROL Records failed]** | The total number of records that were not processed due to errors. |
| **[!UICONTROL Records skipped]** | The total number of records skipped during processing. |

{style="table-layout:auto"}

## View metrics and trend graphs {#metrics-panel}

Below the summary cards, the metrics panel displays the same five metrics as tiles, aggregated for the selected time range. Two trend graphs plot **[!UICONTROL Records ingested]** and **[!UICONTROL Records failed]** over time.

<!-- TODO screenshot: metrics panel tiles and trend graphs -->

By default, the dashboard shows data for the last 24 hours. To change the range, select the time-range selector and choose a different window. For steps, read [Configure monitoring time frame](./monitor.md#configure-monitoring-time-frame).

To hide the metrics panel and graphs, select **[!UICONTROL Metrics and graphs]** to turn off the toggle.

## View the detail table {#detail-table}

The lower part of the dashboard lists the dataflows or datasets that contribute to Orchestrated Campaign ingestion.

<!-- TODO screenshot: detail table with Dataflows/Datasets toggle -->

Select **[!UICONTROL Dataflows]** or **[!UICONTROL Datasets]** to change how the table groups rows. Use **[!UICONTROL Search sources]** to filter the table to a specific dataflow or dataset.

Each row displays the following columns:

| Column | Description |
| --- | --- |
| **[!UICONTROL Target dataset]** | The name of the dataset that the dataflow writes to. Select the dataset name to go to its dataset page. |
| **[!UICONTROL Lineage]** | Opens the lineage reconciliation view for this dataflow. |
| **[!UICONTROL Records received]** | The total number of records received by the dataflow. |
| **[!UICONTROL Records ingested]** | The total number of net new records ingested. |
| **[!UICONTROL Records updated]** | The total number of existing records updated. |
| **[!UICONTROL Records deleted]** | The total number of records deleted. |
| **[!UICONTROL Records failed]** | The total number of records that were not processed due to errors. |
| **[!UICONTROL Records skipped]** | The total number of records skipped during processing. |
| **[!UICONTROL Failed dataflow runs]** | The total number of dataflow runs that failed. |

{style="table-layout:auto"}

## View the lineage reconciliation popup {#lineage-reconciliation}

Use the lineage reconciliation view to compare how a dataflow's records moved through the [!DNL Data Lake] and [!UICONTROL Orchestrated Campaign] stages, and to diagnose discrepancies between them.

Select **[!UICONTROL Lineage]** for a dataflow in the detail table.

<!-- TODO screenshot: lineage reconciliation popup -->

The popup shows the following values for both the [!DNL Data Lake] and [!UICONTROL Orchestrated Campaign] stages:

| Field | Description |
| --- | --- |
| **[!UICONTROL Records received]** | The total number of records received by the stage. |
| **[!UICONTROL Records processed]** | The total number of records successfully processed by the stage. This is the sum of records ingested, updated, and deleted. |
| **[!UICONTROL % Success rate]** | The percentage of received records that were successfully processed, calculated as records processed divided by records received. |
| **[!UICONTROL Records ingested]** | The total number of net new records ingested. |
| **[!UICONTROL Records updated]** | The total number of existing records updated. |
| **[!UICONTROL Records deleted]** | The total number of records deleted. |
| **[!UICONTROL Records skipped]** | The total number of records skipped during processing. |
| **[!UICONTROL Records failed]** | The total number of records that were not processed due to errors. |

{style="table-layout:auto"}

Compare the **[!UICONTROL % Success rate]** for each stage to identify where records are being dropped. For example, a lower success rate in the **[!UICONTROL Orchestrated Campaign]** stage than in the **[!UICONTROL Data Lake]** stage indicates that records are failing or being skipped after they reach data lake, rather than during the initial source ingestion.

## Next steps {#next-steps}

By reading this document, you learned how to use the **[!UICONTROL Orchestrated Campaign]** dashboard to monitor ingestion from data lake into the relational store, and how to use the lineage reconciliation view to diagnose discrepancies. For information on monitoring other stages, read the following documents:

- [Monitor data lake ingestion](monitor-sources.md)
- [Monitor dataflows for Profiles in the UI](monitor-profiles.md)
- [Monitoring dashboard overview](monitor.md)
