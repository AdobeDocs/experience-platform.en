---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Available metrics
topic: developer guide
---

# Metrics endpoint

Observability metrics provide insights into usage statistics, historical trends, and performance indicators for various features in Adobe Experience Platform. The `/metrics` endpoint in the [!DNL Observability Insights API] allows you to programmatically retrieve metric data for your organization's activity in [!DNL Platform].

## Getting started

The API endpoint used in this guide is part of the [[!DNL Observability Insights] API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/observability-insights.yaml). Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any [!DNL Experience Platform] API.

## Retrieve observability metrics

You can retrieve observability metrics by making a GET request to the `/metrics` endpoint in the Observability Insights API.

**API format**

When using the `/metrics` endpoint, at least one metric request parameter must be provided. Other query parameters are optional for filtering results.

```http
GET /metrics?metric={METRIC}
GET /metrics?metric={METRIC}&metric={METRIC_2}
GET /metrics?metric={METRIC}&id={ID}
GET /metrics?metric={METRIC}&dateRange={DATE_RANGE}
GET /metrics?metric={METRIC}&metric={METRIC_2}&id={ID}&dateRange={DATE_RANGE}
```

| Parameter | Description |
| --- | --- |
| `{METRIC}` | The metric you want to expose. When combining multiple metrics in a single call, you must use an ampersand (`&`) to separate individual metrics. For example, `metric={METRIC_1}&metric={METRIC_2}`. |
| `{ID}` | The identifier for a particular [!DNL Platform] resource whose metrics you want to expose. This ID may be optional, required, or not applicable depending on the metrics being used. See the [appendix](#available-metrics) for a list of available metrics, as well as supported IDs (both required and optional) for each metric. |
| `{DATE_RANGE}` | The date range for the metrics you want to expose, in ISO 8601 format (for example, `2018-10-01T07:00:00.000Z/2018-10-09T07:00:00.000Z`). |

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/infrastructure/observability/insights/metrics?metric=timeseries.ingestion.dataset.size&metric=timeseries.ingestion.dataset.recordsuccess.count&id=5cf8ab4ec48aba145214abeb&dateRange=2018-10-01T07:00:00.000Z/2019-06-06T07:00:00.000Z \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a list of objects, each containing a timestamp within the provided `dateRange` and corresponding values for the metrics specified in the request path. If the `id` of a [!DNL Platform] resource is included in the request path, the results will apply only to that particular resource. If the `id` is omitted, the results will apply to all applicable resources within your IMS Organization.

```json
{
    "id": "5cf8ab4ec48aba145214abeb",
    "imsOrgId": "{IMS_ORG}",
    "timeseries": {
        "granularity": "MONTH",
        "items": [
            {
                "timestamp": "2019-06-01T00:00:00Z",
                "metrics": {
                    "timeseries.ingestion.dataset.recordsuccess.count": 1125,
                    "timeseries.ingestion.dataset.size": 32320
                }
            },
            {
                "timestamp": "2019-05-01T00:00:00Z",
                "metrics": {
                    "timeseries.ingestion.dataset.recordsuccess.count": 1003,
                    "timeseries.ingestion.dataset.size": 31409
                }
            },
            {
                "timestamp": "2019-04-01T00:00:00Z",
                "metrics": {
                    "timeseries.ingestion.dataset.recordsuccess.count": 740,
                    "timeseries.ingestion.dataset.size": 25809
                }
            },
            {
                "timestamp": "2019-03-01T00:00:00Z",
                "metrics": {
                    "timeseries.ingestion.dataset.recordsuccess.count": 740,
                    "timeseries.ingestion.dataset.size": 25809
                }
            },
            {
                "timestamp": "2019-02-01T00:00:00Z",
                "metrics": {
                    "timeseries.ingestion.dataset.recordsuccess.count": 390,
                    "timeseries.ingestion.dataset.size": 16801
                }
            }
        ],
        "_page": null,
        "_links": null
    },
    "stats": {}
}
```

## Appendix

The following section contains additional information about working with the `/metrics` endpoint.

### Available metrics {#available-metrics}

The following tables list all of the metrics that are exposed by Observability Insights, broken down by [!DNL Platform] service. Each metric includes a description and accepted ID query parameter.

#### [!DNL Data Ingestion] {#ingestion}

The following table outlines metrics for Adobe Experience Platform [!DNL Data Ingestion]. Metrics in **bold** are streaming ingestion metrics.

| Insights metric | Description | ID query parameter |
| ---- | ---- | ---- |
| timeseries.ingestion.dataset.new.count | Total number of datasets created. | N/A |
| timeseries.ingestion.dataset.size | Cumulative size of all data ingested for one dataset for or all datasets.| Dataset ID (Optional) |
| timeseries.ingestion.dataset.dailysize | Size of data ingested on a daily usage basis for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.ingestion.dataset.batchfailed.count | Number of batches failed for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.ingestion.dataset.batchsuccess.count | Number of batches ingested for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.ingestion.dataset.recordsuccess.count | Number of records ingested for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.total.messages.rate | Total number of messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.valid.messages.rate | Total number of valid messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.invalid.messages.rate | Total number of invalid messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.category.type.count | Total number of invalid "type" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.category.range.count | Total number of invalid "range" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.category.format.count | Total number of invalid "format" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.category.pattern.count | Total number of invalid "pattern" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.category.presence.count | Total number of invalid "presence" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.category.enum.count | Total number of invalid "enum" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.category.unclassified.count | Total number of invalid "unclassified" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.validation.category.unknown.count | Total number of invalid "unknown" messages for one dataset or for all datasets. | Dataset ID (Optional) |
| timeseries.data.collection.inlet.total.messages.received | Total number of messages received for one data inlet or for all data inlets. | Inlet ID (Optional) |
| timeseries.data.collection.inlet.total.messages.size.received | Total size of data received for one data inlet or for all data inlets. | Inlet ID (Optional) |
| timeseries.data.collection.inlet.success | Total number of successful HTTP calls to one data inlet or to all data inlets. | Inlet ID (Optional) |
| timeseries.data.collection.inlet.failure | Total number of failed HTTP calls to one data inlet or to all data inlets. | Inlet ID (Optional) |

#### [!DNL Identity Service] {#identity}

The following table outlines metrics for Adobe Experience Platform [!DNL Identity Service].

| Insights metric | Description | ID query parameter |
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

#### [!DNL Privacy Service] {#privacy}

The following table outlines metrics for Adobe Experience Platform [!DNL Privacy Service].

| Insights metric | Description | ID query parameter |
| ---- | ---- | ---- |
| timeseries.gdpr.jobs.totaljobs.count | Total number of jobs created from GDPR. | ENV (**Required**) |
| timeseries.gdpr.jobs.completedjobs.count | Total number of completed jobs from GDPR. | ENV (**Required**) |
| timeseries.gdpr.jobs.errorjobs.count | Total number of error jobs from GDPR. | ENV (**Required**) |

#### [!DNL Query Service] {#query}

The following table outlines metrics for Adobe Experience Platform [!DNL Query Service].

| Insights metric | Description | ID query parameter |
| ---- | ---- | ---- |
| timeseries.queryservice.query.scheduleonce.count | Total number of non-recurring scheduled queries. | N/A |
| timeseries.queryservice.query.scheduledrecurring.count | Total number of recurring scheduled queries. | N/A |
| timeseries.queryservice.query.batchquery.count | Total number of executed batch queries. | N/A |
| timeseries.queryservice.query.scheduledquery.count | Total number of executed scheduled queries. | N/A |
| timeseries.queryservice.query.interactivequery.count | Total number of executed interactive queries. | N/A |
| timeseries.queryservice.query.batchfrompsqlquery.count | Total number of executed batch queries from PSQL. | N/A |

#### [!DNL Real-time Customer Profile] {#profile}

The following table outlines metrics for [!DNL Real-time Customer Profile].

| Insights metric | Description | ID query parameter |
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