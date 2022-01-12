---
keywords: Experience Platform;home;popular topics;date range
title: Standard alert rules
description: This document covers the predefined alert rules provided by Experience Platform.
feature: Alerts
exl-id: b4af1c15-b1bc-4e4b-a447-09cc17a63988
---
# Standard alert rules

Adobe Experience Platform provides several predefined alert rules that you can enable for your organization. The table below covers the details of these Adobe-provided alert rules. For more general information on alerts in Experience Platform, see the [alerts overview](./overview.md).

## Data Ingestion

The following alert rules are specific to [Data Ingestion](../../ingestion/home.md) and  [sources](../../sources/home.md):

| Rule | Description | Threshold | Evaluation frequency | Repeat window | 
| --- | --- | --- | --- | --- |
| Sources Flow Run Start | This alert triggers when a source connection starts processing data. | N/A | N/A | N/A |
| Sources Flow Run Success | This alert triggers when data is successfully ingested from a source connection. | N/A | N/A | N/A |
| Sources Flow Run Failure | This alert triggers when an error occurs while ingesting data from a source connection. | N/A | N/A | N/A |
| Ingestion Delay | This alert triggers when a batch ingestion flow run is taking longer to process than the allotted threshold. | 150 minutes | 30 seconds | 10 hours |

{style="table-layout:auto"}

## Identity Service

The following alert rules are specific to [Identity Service](../../identity-service/home.md):

| Rule | Description | Threshold | Evaluation frequency | Repeat window | 
| --- | --- | --- | --- | --- |
| Identity Service Flow Run Start | This alert triggers when an Identity Service flow run starts processing data. In other words, ingested data is being loaded from the Data Lake into Identity Service. | N/A | N/A | N/A |
| Identity Service Flow Run Delay | This alert triggers when an Identity Service flow run is taking longer to process than the allotted threshold. | 150 minutes | 30 seconds | 2 minutes |
| Identity Service Flow Run Success | This alert triggers when data is successfully ingested into Identity Service. | N/A | N/A | N/A |
| Identity Service Flow Run Failure | This alert triggers when an error occurs while ingesting data into Identity Service. | N/A | N/A | N/A |

{style="table-layout:auto"}

## Real-time Customer Profile

The following alert rules are specific to [Real-time Customer Profile](../../profile/home.md):

| Rule | Description | Threshold | Evaluation frequency | Repeat window | 
| --- | --- | --- | --- | --- |
| Profile Flow Run Start | This alert triggers when a Profile flow run starts processing data. | N/A | N/A | N/A |
| Profile Flow Run Delay | This alert triggers when a Real-time Customer Profile flow run is taking longer to process than the allotted threshold. | 150 minutes | 30 seconds | 10 hours |
| Profile Flow Run Success | This alert triggers when data is successfully ingested into Profile. | N/A | N/A | N/A |
| Profile Flow Run Failure | This alert triggers when an error occurs while ingesting data into Profile. | N/A | N/A | N/A |

{style="table-layout:auto"}

## Segmentation

The following alert rules are specific to [Segmentation Service](../../segmentation/home.md):

| Rule | Description | Threshold | Evaluation frequency | Repeat window | 
| --- | --- | --- | --- | --- |
| Segment Job Start | This alert triggers when a segment starts processing data. | N/A | N/A | N/A |
| Segment Job Delay | This alert triggers when a segment jobs takes longer than 150 minutes to complete. | N/A | 30 seconds | 3 hours |
| Segment Job Success | This alert triggers when a segment job completes successfully. | N/A | N/A | N/A |
| Segment Job Failure | This alert triggers when a segment job results in an error. | N/A | N/A | N/A |
| Segment Definition Disabled | This alert triggers when a segment definition is disabled. | N/A | N/A | N/A |

{style="table-layout:auto"}

## Destinations

The following alert rules are specific to [destinations](../../destinations/home.md):

| Rule | Description | Threshold | Evaluation frequency | Repeat window | 
| --- | --- | --- | --- | --- |
| Destination Flow Run Start | This alert triggers when a destination flow run starts processing data. | N/A | N/A | N/A |
| Destination Flow Run Delay | This alert triggers when a destination flow run is taking longer to process than the allotted threshold. | 150 minutes | 30 seconds | 10 hours |
| Destination Flow Run Success | This alert triggers when data is successfully sent to a destination. | N/A | N/A | N/A |
| Destination Flow Run Failure | This alert triggers when an error occurs while sending data to a destination. | N/A | N/A | N/A |

{style="table-layout:auto"}

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
