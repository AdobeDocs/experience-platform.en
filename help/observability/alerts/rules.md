---
keywords: Experience Platform;home;popular topics;date range
solution: Experience Platform
title: Standard alert rules
topic: overview
description: This document covers the predefined alert rules provided by Experience Platform. 
---

# Standard alert rules

Adobe Experience Platform provides several predefined alert rules that you can enable for your organization. The table below covers the details of these Adobe-provided alert rules. For more general information on alerts in Experience Platform, see the [alerts overview](./overview.md).

| Rule | Description | Repeat window | Evaluation frequency |
| --- | --- | --- | --- |
| Profile threshold exceeded | This alert triggers when the number of created profiles exceeds 80% of your organization's entitlement. | TBD | TBD |
| No ingestion activity in past 24 hours | This alert triggers when no new data has been ingested in the last 24-hour period. | 1 day | 1 day |
| SFTP source has not ingested data | This alert triggers when an [SFTP source](../../sources/connectors/cloud-storage/sftp.md) has not ingested any data within a certain time period. | 1 day | 1 day |
| Stream ingestion error rate above threshold | This alert triggers when the error rate for data ingestion exceeds 20%. | TBD | TBD |
| Batch ingestion duration above threshold | This alert triggers when batch ingestion takes longer than expected. | TBD | TBD |