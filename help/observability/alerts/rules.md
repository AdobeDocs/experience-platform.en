---
keywords: Experience Platform;home;popular topics;date range
title: Standard alert rules
description: This document covers the predefined alert rules provided by Experience Platform. 
---

# Standard alert rules

Adobe Experience Platform provides several predefined alert rules that you can enable for your organization. The table below covers the details of these Adobe-provided alert rules. For more general information on alerts in Experience Platform, see the [alerts overview](./overview.md).

| Rule | Description | Evaluation frequency | Repeat window | 
| --- | --- | --- | --- |
| Entitlement Threshold Exceeded | This alert triggers when the number of created profiles exceeds 80% of your organization's entitlement. | 30 seconds | N/A |
| No ingestion activity in past 24 hours | This alert triggers when no new data has been ingested in the last 24-hour period. | 1 day | 1 day |
| SFTP source has not ingested data | This alert triggers when an [SFTP source](../../sources/connectors/cloud-storage/sftp.md) has not ingested any data within a certain time period. | 1 day | 1 day |
| Ingestion error rate exceeded | This alert triggers when the error rate for data ingestion exceeds 20%. | 30 seconds | 30 seconds |
| Feed Message | This alert when an identity sharing feed message has been sent to a user using [Segment Match](../../segmentation/ui/segment-match.md). | N/A | N/A |
| Feed Access Revoked | This alert triggers when another Platform user revokes access to an identity sharing feed using [Segment Match](../../segmentation/ui/segment-match.md). | N/A | N/A |
| Feed Modified | This alert triggers when an identity sharing feed is modified by a user using [Segment Match](../../segmentation/ui/segment-match.md). | N/A | N/A |
| Feed Shared | This alert triggers when a user shares a new feed in [Segment Match](../../segmentation/ui/segment-match.md). | N/A | N/A |
| Link Request | This alert triggers when a user requests to connect for partner sharing. | N/A | N/A |
| Link Action | This alert triggers when a user accepts a request to connect for partner sharing. | N/A | N/A |
| Segment Definition Disabled | This alert triggers when a segment definition is disabled. | N/A | N/A |
| Segment Job Delay | This alert triggers when a segment jobs takes longer than 150 minutes to complete. | 30 seconds | 3 hours |
| Sources Flow Run Failure | This alert triggers when an error occurs while ingesting data from a source connection. | N/A | N/A |
| Sources Flow Run Success | This alert triggers when data is successfully ingested from a source connection. | N/A | N/A |

{style="table-layout:auto"}