---
keywords: Experience Platform;home;popular topics;date range
title: Standard alert rules
description: This document covers the predefined alert rules provided by Experience Platform.
feature: Alerts
exl-id: b4af1c15-b1bc-4e4b-a447-09cc17a63988
---
# Standard alert rules

Adobe Experience Platform provides several predefined alert rules that you can enable for your organization. This document covers the details of these Adobe-provided alert rules. For more general information on alerts in Experience Platform, see the [alerts overview](./overview.md).

When [viewing alert rules in the Platform UI](./ui.md), you can subscribe to each rule individually. When subscribing to alerts through [I/O Event notifications](./subscribe.md), however, alert rules are organized into different subscription packages. In the tables below, each rule is shown with its corresponding I/O Event subscription name.

## Data Ingestion

The following alert rules are specific to [Data Ingestion](../../ingestion/home.md) and  [sources](../../sources/home.md):

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Source Flow Run Info | Sources Flow Run Start | This alert triggers when a source connection starts processing data. |
| Source Flow Run Info | Sources Flow Run Success | This alert triggers when data is successfully ingested from a source connection. |
| Source Flow Run Delays, Failures and Errors | Sources Flow Run Failure | This alert triggers when an error occurs while ingesting data from a source connection. |
| Source Flow Run Delays, Failures and Errors | Ingestion Delay | This alert triggers when a batch ingestion flow run takes longer than 150 minutes to process. |
| Source Flow Run Delays, Failures and Errors | Ingestion Failure | This alert triggers when the ratio of failed records to all records exceed a threshold of 0.5%. |

{style="table-layout:auto"}

If you have previously subscribed to the following alert type, you will no longer receive alerts as this alert has been deprecated:

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Source Flow Run Delays, Failures and Errors | Lack of Ingestion | This alert sends you a message if ingestion is delayed by more than seven hours and no data gets ingested to Platform. |

{style="table-layout:auto"}

## Identity Service

The following alert rules are specific to [Identity Service](../../identity-service/home.md):

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Identity Ingestion Info | Identity Service Flow Run Start | This alert triggers when an Identity Service flow run starts processing data. In other words, ingested data is being loaded from the Data Lake into Identity Service. |
| Identity Ingestion Info | Identity Service Flow Run Success | This alert triggers when data is successfully loaded from the Data Lake into Identity Service. |
| Identity Ingestion Delays, Failures and Errors | Identity Service Flow Run Delay | This alert triggers when an Identity Service flow run takes longer than 150 minutes to process. |
| Identity Ingestion Delays, Failures and Errors | Identity Service Flow Run Failure | This alert triggers when an error occurs while ingesting data into Identity Service. |

{style="table-layout:auto"}

## Real-Time Customer Profile

The following alert rules are specific to [Real-Time Customer Profile](../../profile/home.md):

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Profile Ingestion Info | Profile Flow Run Start | This alert triggers when a Profile flow run starts processing data. |
| Profile Ingestion Info | Profile Flow Run Success | This alert triggers when data is successfully loaded into Profile from the Data Lake. |
| Profile Ingestion Delays, Failures and Errors | Profile Flow Run Delay | This alert triggers when loading data from the Data Lake into Profile takes longer than 150 minutes to process. |
| Profile Ingestion Delays, Failures and Errors | Profile Flow Run Failure | This alert triggers when an error occurs while ingesting data into Profile. |

{style="table-layout:auto"}

## Segmentation

The following alert rules are specific to [Segmentation Service](../../segmentation/home.md):

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Segment Evaluation Job Info | Segment Job Start | This alert triggers when a segment evaluation job starts processing data. |
| Segment Evaluation Job Info | Segment Job Success | This alert triggers when a segment evaluation job completes successfully. |
| Segment Evaluation Job Delays, Failures and Errors | Segment Job Delay | This alert triggers when a segment evaluation jobs takes longer than 150 minutes to complete. |
| Segment Evaluation Job Delays, Failures and Errors | Segment Job Failure | This alert triggers when a segment evaluation job results in an error. |
| Segment Evaluation Job Delays, Failures and Errors | Segment Definition Disabled | This alert triggers when a segment definition is disabled due to internal error. This automatically triggers a war room for an Adobe engineering team to investigate the issue. This alert is only intended to be informative and does not require any action from you. |

{style="table-layout:auto"}

## Destinations

The following alert rules are specific to [destinations](../../destinations/home.md):

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Destination Flow Run Info | Destination Flow Run Start | This alert triggers when a destination flow run starts activating a segment. |
| Destination Flow Run Info | Destination Flow Run Success | This alert triggers when a segment is successfully activated to a destination. |
| Destination Flow Run Delays, Failures and Errors | Destination Flow Run Delay | This alert triggers when a destination flow run takes longer than 150 minutes to activate a segment. |
| Destination Flow Run Delays, Failures and Errors | Destination Flow Run Failure | This alert triggers when an error occurs while activating a segment to a destination. |
| Destination Flow Run Delays, Failures and Errors | Skippage rate exceeds threshold | This alert triggers when the ratio of skipped IDs to total IDs exceeds a threshold. |

{style="table-layout:auto"}

## Query Service

The following alert rules are specific to [Query Service](../../query-service/home.md):

| I/O Event subscription | Alert rule | Description |
| --- | --- | --- |
| Query Service scheduled query info | Query Service scheduled query start | This alert triggers when a scheduled query starts running. |
| Query Service scheduled query info | Query Service scheduled query success | This alert triggers when a scheduled query job completes successfully. |
| Query Service scheduled query delays, failures and errors | query service scheduled query failure | This alert triggers when a scheduled query job fails. |

<!-- (Definitions to be added once available)
| Segment Job Delay | This alert triggers when a segment job takes longer than 150 minutes to complete. | N/A | 30 seconds | 3 hours |
| No Ingestion Activity in Past 24 Hours | This alert triggers when no new data has been ingested in the last 24-hour period. | N/A | 1 day | 1 day |
| Ingestion Error Rate Exceeded | This alert triggers when the error rate for data ingestion exceeds the allotted threshold. | 20% | 30 seconds | 30 seconds |
| Entitlement Threshold Exceeded | This alert triggers when the number of created profiles exceeds 80% of your organization's entitlement. | 30 seconds | N/A |
| SFTP source has not ingested data | This alert triggers when an [SFTP source](../../sources/connectors/cloud-storage/sftp.md) has not ingested any data within a certain time period. | 1 day | 1 day |
| Feed Message | This alert when an identity sharing feed message has been sent to a user using [Segment Match](../../segmentation/ui/segment-match.md). | N/A | N/A |
| Feed Access Revoked | This alert triggers when another Platform user revokes access to an identity sharing feed using [Segment Match](../../segmentation/ui/segment-match.md). | N/A | N/A |
| Feed Modified | This alert triggers when an identity sharing feed is modified by a user using [Segment Match](../../segmentation/ui/segment-match.md). | N/A | N/A |
| Feed Shared | This alert triggers when a user shares a new feed in [Segment Match](../../segmentation/ui/segment-match.md). | N/A | N/A |
| Link Request | This alert triggers when a user requests to connect for partner sharing. | N/A | N/A |
| Link Action | This alert triggers when a user accepts a request to connect for partner sharing. | N/A | N/A |
-->
