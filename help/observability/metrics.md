---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Available metrics
topic: developer guide
---

# List of available metrics

Below is a list of metrics that are exposed by Observability Insights, each with their associated Platform service, description, and accepted ID query parameter.

| Insights metric | Platform service | Description | ID query parameter |
| ---- | ---- | ---- | ---- |
| timeseries.ingestion.dataset.new.count | Data Ingestion | Total number of datasets created. | N/A |
| timeseries.ingestion.dataset.size | Data Ingestion | Cumulative size of all data ingested for one dataset for or all datasets.| Dataset ID (Optional) |
| timeseries.ingestion.dataset.dailysize | Data Ingestion | Size of data ingested on a daily usage basis for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.ingestion.dataset.batchfailed.count | Data Ingestion | Number of batches failed for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.ingestion.dataset.batchsuccess.count | Data Ingestion | Number of batches ingested for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.ingestion.dataset.recordsuccess.count | Data Ingestion | Number of records ingested for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.total.messages.rate | Data Ingestion (streaming) | Total number of messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.valid.messages.rate | Data Ingestion (streaming) | Total number of valid messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.invalid.messages.rate | Data Ingestion (streaming) | Total number of invalid messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.category.type.count | Data Ingestion (streaming) | Total number of invalid "type" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.category.range.count | Data Ingestion (streaming) | Total number of invalid "range" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.category.format.count | Data Ingestion (streaming) | Total number of invalid "format" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.category.pattern.count | Data Ingestion (streaming) | Total number of invalid "pattern" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.category.presence.count | Data Ingestion (streaming) | Total number of invalid "presence" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.category.enum.count | Data Ingestion (streaming) | Total number of invalid "enum" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.category.unclassified.count | Data Ingestion (streaming) | Total number of invalid "unclassified" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.category.unknown.count | Data Ingestion (streaming) | Total number of invalid "unknown" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.inlet.total.messages.received | Data Ingestion (streaming) | Total number of messages received for one data inlet or for all data inlets. | Inlet ID (Optional) |
| timeseries.data.collection.inlet.total.messages.size.received | Data Ingestion (streaming) | Total size of data received for one data inlet or for all data inlets. | Inlet ID (Optional) |
| timeseries.data.collection.inlet.success | Data Ingestion (streaming) | Total number of successful HTTP calls to one data inlet or to all data inlets. | Inlet ID (Optional) |
| timeseries.data.collection.inlet.failure | Data Ingestion (streaming) | Total number of failed HTTP calls to one data inlet or to all data inlets. | Inlet ID (Optional) |
| timeseries.profiles.dataset.recordread.count | Real-time Customer Profile | Number of records read from the data lake by Profile, for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.profiles.dataset.recordsuccess.count | Real-time Customer Profile | Number of records written to their data source by Profile, for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.profiles.dataset.recordfailed.count | Real-time Customer Profile | Number of records failed by Profile, for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.profiles.dataset.batchsuccess.count | Real-time Customer Profile | Number of Profile batches ingested for a dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.profiles.dataset.batchfailed.count | Real-time Customer Profile | Number of Profile batches failed for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.identity.dataset.recordsuccess.count | Identity Service | Number of records written to their data source by Identity Service, for one dataset or all datasets. | Dataset ID (Optional) |
| timeseries.identity.dataset.recordfailed.count | Identity Service | Number of records failed by Identity Service, for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.identity.dataset.namespacecode.recordsuccess.count | Identity Service | Number of Identity records successfully ingested for a namespace. | Namespace ID (**Required**) |
| timeseries.identity.dataset.namespacecode.recordfailed.count | Identity Service | Number of Identity records failed by a namespace. | Namespace ID (**Required**) |
| timeseries.identity.dataset.namespacecode.recordskipped.count | Identity Service | Number of Identity records skipped by a namespace. | Namespace ID (**Required**) |
| timeseries.identity.graph.imsorg.uniqueidentities.count | Identity Service | Number of unique identities stored in the identity graph for your IMS Organization. | N/A |
| timeseries.identity.graph.imsorg.namespacecode.uniqueidentities.count | Identity Service | Number of unique identities stored in the identity graph for a namespace. | Namespace ID (**Required**) |
| timeseries.identity.graph.imsorg.numidgraphs.count | Identity Service | Number of unique graph identities stored in the identity graph for your IMS Organization. | N/A |
| timeseries.identity.graph.imsorg.graphstrength.uniqueidentities.count | Identity Service | Number of unique identities stored in the identity graph for your IMS Organization for a particular graph strength ("unknown", "weak", or "strong"). | Graph strength (**Required**) |
| timeseries.gdpr.jobs.totaljobs.count | GDPR | Total number of jobs created from GDPR. | ENV (**Required**) |
| timeseries.gdpr.jobs.completedjobs.count | GDPR | Total number of completed jobs from GDPR. | ENV (**Required**) |
| timeseries.gdpr.jobs.errorjobs.count | GDPR | Total number of error jobs from GDPR. | ENV (**Required**) |
| timeseries.queryservice.query.scheduleonce.count | Query Service | Total number of non-recurring scheduled queries. | N/A |
| timeseries.queryservice.query.scheduledrecurring.count | Query Service | Total number of recurring scheduled queries. | N/A |
| timeseries.queryservice.query.batchquery.count | Query Service | Total number of executed batch queries. | N/A |
| timeseries.queryservice.query.scheduledquery.count | Query Service | Total number of executed scheduled queries. | N/A |
| timeseries.queryservice.query.interactivequery.count | Query Service | Total number of executed interactive queries. | N/A |
| timeseries.queryservice.query.batchfrompsqlquery.count | Query Service | Total number of executed batch queries from PSQL. | N/A |