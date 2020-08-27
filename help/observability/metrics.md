---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Available metrics
topic: developer guide
---

# List of available metrics

The following tables list all of the metrics that are exposed by Observability Insights, broken down by [!DNL Platform] service. Each metric includes a description and accepted ID query parameter.

## [!DNL Data Ingestion]

The following table outlines metrics for Adobe Experience Platform [!DNL Data Ingestion]. Metrics in **bold** are streaming ingestion metrics.

| Insights metric | Description | ID query parameter |
| ---- | ---- | ---- |
| timeseries.ingestion.dataset.new.count | Total number of datasets created. | N/A |
| timeseries.ingestion.dataset.size | Cumulative size of all data ingested for one dataset for or all datasets.| Dataset ID (Optional) |
| timeseries.ingestion.dataset.dailysize | Size of data ingested on a daily usage basis for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.ingestion.dataset.batchfailed.count | Number of batches failed for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.ingestion.dataset.batchsuccess.count | Number of batches ingested for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.ingestion.dataset.recordsuccess.count | Number of records ingested for one dataset or for all datasets. | Dataset ID (Optional) |
| **timeseries.data.collection.validation.total.messages.rate** | Total number of messages for one dataset or for all datasets. | Dataset ID (Optional) |
| **timeseries.data.collection.validation.valid.messages.rate** | Total number of valid messages for one dataset or for all datasets. | Dataset ID (Optional) |
| **timeseries.data.collection.validation.invalid.messages.rate** | Total number of invalid messages for one dataset or for all datasets. | Dataset ID (Optional) |
| **timeseries.data.collection.validation.category.type.count** | Total number of invalid "type" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| **timeseries.data.collection.validation.category.range.count** | Total number of invalid "range" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| **timeseries.data.collection.validation.category.format.count** | Total number of invalid "format" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| **timeseries.data.collection.validation.category.pattern.count** | Total number of invalid "pattern" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| **timeseries.data.collection.validation.category.presence.count** | Total number of invalid "presence" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| **timeseries.data.collection.validation.category.enum.count** | Total number of invalid "enum" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| **timeseries.data.collection.validation.category.unclassified.count** | Total number of invalid "unclassified" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| **timeseries.data.collection.validation.category.unknown.count** | Total number of invalid "unknown" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| **timeseries.data.collection.inlet.total.messages.received**| Total number of messages received for one data inlet or for all data inlets. | Inlet ID (Optional) |
| **timeseries.data.collection.inlet.total.messages.size.received** | Total size of data received for one data inlet or for all data inlets. | Inlet ID (Optional) |
| **timeseries.data.collection.inlet.success** | Total number of successful HTTP calls to one data inlet or to all data inlets. | Inlet ID (Optional) |
| **timeseries.data.collection.inlet.failure** | Total number of failed HTTP calls to one data inlet or to all data inlets. | Inlet ID (Optional) |

## [!DNL Identity Service]

The following table outlines metrics for Adobe Experience Platform [!DNL Identity Service].

| Insights metric | Description | ID query parameter |
| ---- | ---- | ---- |
| timeseries.identity.dataset.recordsuccess.count | Number of records written to their data source by [!DNL Identity Service], for one dataset or all datasets. | Dataset ID (Optional) |
| timeseries.identity.dataset.recordfailed.count | Number of records failed by [!DNL Identity Service], for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.identity.dataset.namespacecode.recordsuccess.count | Number of Identity records successfully ingested for a namespace. | Namespace ID (**Required**) |
| timeseries.identity.dataset.namespacecode.recordfailed.count | Number of Identity records failed by a namespace. | Namespace ID (**Required**) |
| timeseries.identity.dataset.namespacecode.recordskipped.count | Number of Identity records skipped by a namespace. | Namespace ID (**Required**) |
| timeseries.identity.graph.imsorg.uniqueidentities.count | Number of unique identities stored in the identity graph for your IMS Organization. | N/A |
| timeseries.identity.graph.imsorg.namespacecode.uniqueidentities.count | Number of unique identities stored in the identity graph for a namespace. | Namespace ID (**Required**) |
| timeseries.identity.graph.imsorg.numidgraphs.count | Number of unique graph identities stored in the identity graph for your IMS Organization. | N/A |
| timeseries.identity.graph.imsorg.graphstrength.uniqueidentities.count | Number of unique identities stored in the identity graph for your IMS Organization for a particular graph strength ("unknown", "weak", or "strong"). | Graph strength (**Required**) |

## [!DNL Privacy Service]

The following table outlines metrics for Adobe Experience Platform [!DNL Privacy Service].

| Insights metric | Description | ID query parameter |
| ---- | ---- | ---- |
| timeseries.gdpr.jobs.totaljobs.count | Total number of jobs created from GDPR. | ENV (**Required**) |
| timeseries.gdpr.jobs.completedjobs.count | Total number of completed jobs from GDPR. | ENV (**Required**) |
| timeseries.gdpr.jobs.errorjobs.count | Total number of error jobs from GDPR. | ENV (**Required**) |

## [!DNL Query Service]

The following table outlines metrics for Adobe Experience Platform [!DNL Query Service].

| Insights metric | Description | ID query parameter |
| ---- | ---- | ---- |
| timeseries.queryservice.query.scheduleonce.count | Total number of non-recurring scheduled queries. | N/A |
| timeseries.queryservice.query.scheduledrecurring.count | Total number of recurring scheduled queries. | N/A |
| timeseries.queryservice.query.batchquery.count | Total number of executed batch queries. | N/A |
| timeseries.queryservice.query.scheduledquery.count | Total number of executed scheduled queries. | N/A |
| timeseries.queryservice.query.interactivequery.count | Total number of executed interactive queries. | N/A |
| timeseries.queryservice.query.batchfrompsqlquery.count | Total number of executed batch queries from PSQL. | N/A |

## [!DNL Real-time Customer Profile]

The following table outlines metrics for [!DNL Real-time Customer Profile].

| Insights metric | Description | ID query parameter |
| ---- | ---- | ---- |
| timeseries.profiles.dataset.recordread.count | Number of records read from the [!DNL Data Lake] by [!DNL Profile], for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.profiles.dataset.recordsuccess.count | Number of records written to their data source by [!DNL Profile], for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.profiles.dataset.recordfailed.count | Number of records failed by [!DNL Profile], for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.profiles.dataset.batchsuccess.count | Number of [!DNL Profile] batches ingested for a dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.profiles.dataset.batchfailed.count | Number of [!DNL Profile] batches failed for one dataset or for all datasets. | Dataset ID (Optional) |
| platform.ups.ingest.streaming.request.m1_rate | Incoming Request rate. | IMS Org |
| platform.ups.ingest.streaming.access.put.success.m1_rate | Ingestion success rate. | IMS Org |
| platform.ups.ingest.streaming.records.created.m15_rate | Rate of new records ingested for a dataset. | Dataset ID |
| platform.ups.ingest.streaming.request.error.created.outOfOrder.m1_rate | Rate of out-of-order timestamped records for create request for a dataset. | Dataset ID |
| platform.ups.profile-commons.ingest.streaming.dataSet.record.created.timestamp | Timestamp for last create record request for a dataset.| Dataset ID |
| platform.ups.ingest.streaming.request.error.updated.outOfOrder.m1_rate | Rate of out-of-order timestamped records for update request for a dataset. | Dataset ID |
| platform.ups.profile-commons.ingest.streaming.dataSet.record.updated.timestamp | Timestamp for last update record request for a dataset. | Dataset ID |
| platform.ups.ingest.streaming.record.size.m1_rate | Average record size. | IMS Org |
| platform.ups.ingest.streaming.records.updated.m15_rate | Rate of update requests for records ingested for a dataset. | Dataset ID |
