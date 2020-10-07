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

There are two supported methods for retrieving metric data using the API:

* [Version 1](#v1): Specify metrics using query parameters.
* [Version 2](#v2): Specify and apply filters to metrics using a JSON payload.

### Version 1 {#v1}

You can retrieve metrics data by making a GET request to the `/metrics` endpoint, specifying metrics through the use of query parameters.

**API format**

At least one metric must be provided in the `metric` parameter. Other query parameters are optional for filtering results.

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
| `{ID}` | The identifier for a particular [!DNL Platform] resource whose metrics you want to expose. This ID may be optional, required, or not applicable depending on the metrics being used. See the [appendix](#available-metrics) for a list of available metrics, including the supported IDs (both required and optional) for each metric. |
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

### Version 2 {#v2}

You can retrieve metrics data by making a POST request to the `/metrics` endpoint, specifying the metrics you wish to retrieve in the payload.

**API format**

```http
POST /metrics
```

**Request**

```sh
curl -X POST \
  https://platform.adobe.io/data/infrastructure/observability/insights/metrics \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "start": "2020-07-14T00:00:00.000Z",
        "end": "2020-07-22T00:00:00.000Z",
        "granularity": "day",
        "metrics": [
          {
            "name": "timeseries.ingestion.dataset.recordsuccess.count",
            "filters": [
              {
                "name": "dataSetId",
                "value": "5edcfb2fbb642119194c7d94|5eddb21420f516191b7a8dad",
                "groupBy": true
              }
            ],
            "aggregator": "sum",
            "downsample": "sum"
          },
          {
            "name": "timeseries.ingestion.dataset.dailysize",
            "filters": [
              {
                "name": "dataSetId",
                "value": "5eddb21420f516191b7a8dad",
                "groupBy": false
              }
            ],
            "aggregator": "sum",
            "downsample": "sum"
          }
        ]
      }'
```

| Property | Description |
| --- | --- |
| `start` | The earliest date/time from which to retrieve metric data. |
| `end` | The latest date/time from which to retrieve metric data. |
| `granularity` | An optional field that indicates the a time interval to divide metric data by. For example, a value of `DAY` returns metrics for each day between the `start` and `end` date, whereas a value of `MONTH` would group metric results by month instead. When using this field, a corresponding `downsample` property must also be provided to indicate the aggregation function by which to group data. |
| `metrics` | An array of objects, one for each metric you want to retrieve. |
| `name` | The name of a metric recognized by Observability Insights. See the [appendix](#available-metrics) for a full list of accepted metric names. |
| `filters` | An optional field that allows you to filter metrics by specific datasets. The field is an array of objects (one for each filter), with each object containing the following properties: <ul><li>`name`: The type of entity to filter metrics against. Currently, only `dataSets` is supported.</li><li>`value`: The ID of one or more datasets. Multiple dataset IDs can be provided as a single string, with each ID separated by vertical bar characters (`|`).</li><li>`groupBy`: When set to true, indicates that the corresponding `value` represents multiple datasets whose metric results should be returned separately. If set to false, metric results for those datasets are grouped together.</li></ul> |
| `aggregator` | Specifies the aggregation function that should be used to group multiple times-series records into single results. For detailed information on available aggregators, refer to the [OpenTSDB documentation](http://opentsdb.net/docs/build/html/user_guide/query/aggregators.html). |
| `downsample` | An optional field that allows you to specify an aggregation function to reduce the sampling rate of metric data by sorting fields into intervals (or "buckets"). The interval for the downsampling is determined by the `granularity` property. For detailed information on downsampling, refer to the [OpenTSDB documentation](http://opentsdb.net/docs/build/html/user_guide/query/downsampling.html). |

**Response**

A successful response returns the resulting datapoints for the metrics and filters specified in the request.

```json
{
  "metricResponses": [
    {
      "metric": "timeseries.ingestion.dataset.recordsuccess.count",
      "filters": [
        {
          "name": "dataSetId",
          "value": "5edcfb2fbb642119194c7d94|5eddb21420f516191b7a8dad",
          "groupBy": true
        }
      ],
      "datapoints": [
        {
          "groupBy": {
            "dataSetId": "5edcfb2fbb642119194c7d94"
          },
          "dps": {
            "2020-07-14T00:00:00Z": 44.0,
            "2020-07-15T00:00:00Z": 46.0,
            "2020-07-16T00:00:00Z": 36.0,
            "2020-07-17T00:00:00Z": 50.0,
            "2020-07-18T00:00:00Z": 38.0,
            "2020-07-19T00:00:00Z": 40.0,
            "2020-07-20T00:00:00Z": 42.0,
            "2020-07-21T00:00:00Z": 42.0,
            "2020-07-22T00:00:00Z": 50.0
          }
        },
        {
          "groupBy": {
            "dataSetId": "5eddb21420f516191b7a8dad"
          },
          "dps": {
            "2020-07-14T00:00:00Z": 44.0,
            "2020-07-15T00:00:00Z": 46.0,
            "2020-07-16T00:00:00Z": 36.0,
            "2020-07-17T00:00:00Z": 50.0,
            "2020-07-18T00:00:00Z": 38.0,
            "2020-07-19T00:00:00Z": 40.0,
            "2020-07-20T00:00:00Z": 42.0,
            "2020-07-21T00:00:00Z": 42.0,
            "2020-07-22T00:00:00Z": 50.0
          }
        }
      ],
      "granularity": "DAY"
    },
    {
      "metric": "timeseries.ingestion.dataset.dailysize",
      "filters": [
        {
          "name": "dataSetId",
          "value": "5eddb21420f516191b7a8dad",
          "groupBy": false
        }
      ],
      "datapoints": [
        {
          "groupBy": {},
          "dps": {
            "2020-07-14T00:00:00Z": 38455.0,
            "2020-07-15T00:00:00Z": 40213.0,
            "2020-07-16T00:00:00Z": 31476.0,
            "2020-07-17T00:00:00Z": 43705.0,
            "2020-07-18T00:00:00Z": 33227.0,
            "2020-07-19T00:00:00Z": 34977.0,
            "2020-07-20T00:00:00Z": 36735.0,
            "2020-07-21T00:00:00Z": 36737.0,
            "2020-07-22T00:00:00Z": 43715.0
          }
        }
      ],
      "granularity": "DAY"
    }
  ]
}
```

| Property | Description |
| --- | --- |
| `metricResponses` | An array whose objects represent each of the metrics specified in the request. Each object contains information about the filter configuration and returned metric data. |
| `metric` | The name of one of the metrics provided in the request. |
| `filters` | The filter configuration for the specified metric. |
| `datapoints` | An array whose objects represent the results of the specified metric and filters. The number of objects in the array depends on the filter options provided in the request. If no filters were provided, the array will only contain a single object that represents all datasets. |
| `groupBy` | If multiple datasets were specified in the `filter` property for a metric, and the `groupBy` option was set to true in the request, this object will contain the ID of the dataset that the corresponding `dps` property applies to.<br><br>If this object appears empty in the response, the corresponding `dps` property applies to all datasets provided in the `filters` array (or all datasets in [!DNL Platform] if no filters were provided). |
| `dps` | The returned data for the given metric, filter, and time range. Each key in this object represents a timestamp with a corresponding value for the specified metric. The time period between each datapoint depends on the `granularity` value specified in the request. |

## Appendix

The following section contains additional information about working with the `/metrics` endpoint.

### Available metrics {#available-metrics}

The following tables list all of the metrics that are exposed by [!DNL Observability Insights], broken down by [!DNL Platform] service. Each metric includes a description and accepted ID query parameter.

>[!NOTE]
>
>All listed ID query parameters are optional unless stated otherwise.

#### [!DNL Data Ingestion] {#ingestion}

The following table outlines metrics for Adobe Experience Platform [!DNL Data Ingestion]. Metrics in **bold** are streaming ingestion metrics.

| Insights metric | Description | ID query parameter |
| ---- | ---- | ---- |
| timeseries.ingestion.dataset.new.count | Total number of datasets created. | N/A |
| timeseries.ingestion.dataset.size | Cumulative size of all data ingested for one dataset for or all datasets.| Dataset ID |
| timeseries.ingestion.dataset.dailysize | Size of data ingested on a daily usage basis for one dataset or for all datasets. | Dataset ID |
| timeseries.ingestion.dataset.batchfailed.count | Number of batches failed for one dataset or for all datasets. | Dataset ID |
| timeseries.ingestion.dataset.batchsuccess.count | Number of batches ingested for one dataset or for all datasets. | Dataset ID |
| timeseries.ingestion.dataset.recordsuccess.count | Number of records ingested for one dataset or for all datasets. | Dataset ID |
| **timeseries.data.collection.validation.total.messages.rate** | Total number of messages for one dataset or for all datasets. | Dataset ID |
| **timeseries.data.collection.validation.valid.messages.rate** | Total number of valid messages for one dataset or for all datasets. | Dataset ID |
| **timeseries.data.collection.validation.invalid.messages.rate** | Total number of invalid messages for one dataset or for all datasets. | Dataset ID |
| **timeseries.data.collection.validation.category.type.count** | Total number of invalid "type" messages for one dataset or for all datasets. | Dataset ID |
| **timeseries.data.collection.validation.category.range.count** | Total number of invalid "range" messages for one dataset or for all datasets. | Dataset ID |
| **timeseries.data.collection.validation.category.format.count** | Total number of invalid "format" messages for one dataset or for all datasets. | Dataset ID |
| **timeseries.data.collection.validation.category.pattern.count** | Total number of invalid "pattern" messages for one dataset or for all datasets. | Dataset ID |
| **timeseries.data.collection.validation.category.presence.count** | Total number of invalid "presence" messages for one dataset or for all datasets. | Dataset ID |
| **timeseries.data.collection.validation.category.enum.count** | Total number of invalid "enum" messages for one dataset or for all datasets. | Dataset ID |
| **timeseries.data.collection.validation.category.unclassified.count** | Total number of invalid "unclassified" messages for one dataset or for all datasets. | Dataset ID |
| **timeseries.data.collection.validation.category.unknown.count** | Total number of invalid "unknown" messages for one dataset or for all datasets. | Dataset ID |
| **timeseries.data.collection.inlet.total.messages.received**| Total number of messages received for one data inlet or for all data inlets. | Inlet ID |
| **timeseries.data.collection.inlet.total.messages.size.received** | Total size of data received for one data inlet or for all data inlets. | Inlet ID |
| **timeseries.data.collection.inlet.success** | Total number of successful HTTP calls to one data inlet or to all data inlets. | Inlet ID |
| **timeseries.data.collection.inlet.failure** | Total number of failed HTTP calls to one data inlet or to all data inlets. | Inlet ID |

#### [!DNL Identity Service] {#identity}

The following table outlines metrics for Adobe Experience Platform [!DNL Identity Service].

| Insights metric | Description | ID query parameter |
| ---- | ---- | ---- |
| timeseries.identity.dataset.recordsuccess.count | Number of records written to their data source by [!DNL Identity Service], for one dataset or all datasets. | Dataset ID |
| timeseries.identity.dataset.recordfailed.count | Number of records failed by [!DNL Identity Service], for one dataset or for all datasets. | Dataset ID |
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
| timeseries.profiles.dataset.recordread.count | Number of records read from the [!DNL Data Lake] by [!DNL Profile], for one dataset or for all datasets. | Dataset ID |
| timeseries.profiles.dataset.recordsuccess.count | Number of records written to their data source by [!DNL Profile], for one dataset or for all datasets. | Dataset ID |
| timeseries.profiles.dataset.recordfailed.count | Number of records failed by [!DNL Profile], for one dataset or for all datasets. | Dataset ID |
| timeseries.profiles.dataset.batchsuccess.count | Number of [!DNL Profile] batches ingested for a dataset or for all datasets. | Dataset ID |
| timeseries.profiles.dataset.batchfailed.count | Number of [!DNL Profile] batches failed for one dataset or for all datasets. | Dataset ID |
| platform.ups.ingest.streaming.request.m1_rate | Incoming Request rate. | IMS Org (**Required**) |
| platform.ups.ingest.streaming.access.put.success.m1_rate | Ingestion success rate. | IMS Org (**Required**) |
| platform.ups.ingest.streaming.records.created.m15_rate | Rate of new records ingested for a dataset. | Dataset ID (**Required**) |
| platform.ups.ingest.streaming.request.error.created.outOfOrder.m1_rate | Rate of out-of-order timestamped records for create request for a dataset. | Dataset ID (**Required**) |
| platform.ups.profile-commons.ingest.streaming.dataSet.record.created.timestamp | Timestamp for last create record request for a dataset.| Dataset ID (**Required**) |
| platform.ups.ingest.streaming.request.error.updated.outOfOrder.m1_rate | Rate of out-of-order timestamped records for update request for a dataset. | Dataset ID (**Required**) |
| platform.ups.profile-commons.ingest.streaming.dataSet.record.updated.timestamp | Timestamp for last update record request for a dataset. | Dataset ID (**Required**) |
| platform.ups.ingest.streaming.record.size.m1_rate | Average record size. | IMS Org (**Required**) |
| platform.ups.ingest.streaming.records.updated.m15_rate | Rate of update requests for records ingested for a dataset. | Dataset ID (**Required**) |

### Error messages

Responses from the `/metrics` endpoint may return error messages under certain conditions. These error messages are returned in the following format:

```json
{
    "type": "http://ns.adobe.com/aep/errors/INSGHT-1000-400",
    "title": "Bad Request - Start date cannot be after end date.",
    "status": 400,
    "report": {
        "tenantInfo": {
            "sandboxName": "prod",
            "sandboxId": "49f58060-5d47-34rd-aawf-a5384333ff12",
            "imsOrgId": "{IMS_ORG}"
        },
        "additionalContext": null
    },
    "error-chain": [
        {
            "serviceId": "INSGHT",
            "errorCode": "INSGHT-1000-400",
            "invokingServiceId": "INSGHT",
            "unixTimeStampMs": 1602095177129
        }
    ]
}
```

| Property | Description |
| --- | --- |
| `title` | A string containing the error message and the potential reason why it may have occurred. |
| `report` | Contains contextual information about the error, including the sandbox and IMS Org being used in the operation that triggered it. |

The following table lists the different error codes that can be returned by the API:

| Error code | Title | Description |
| --- | --- | --- |
| `INSGHT-1000-400` | Bad request payload | Something was wrong with the request payload. Ensure that you match the payload formatting exactly as shown [above](#v2). Any of the possible reasons can trigger this error:<ul><li>Missing required fields such as `aggregator`</li><li>Invalid metrics</li><li>The request contains an invalid aggregator</li><li>A start date takes place after an end date</li></ul> |
| `INSGHT-1001-400` | Metrics query failed | There was an error when attempting to query the metrics database, due to a bad request or the query itself being unparsable. Ensure that your request is properly formatted before trying again. |
| `INSGHT-1001-500` | Metrics query failed | There was an error when attempting to query the metrics database, due to a server error. Try the request again, and if the problem persists, contact Adobe support. |
| `INSGHT-1002-500` | Service error | The request could not be processed due to an internal error. Try the request again, and if the problem persists, contact Adobe support. |
| `INSGHT-1003-401` | Sandbox validation error | The request could not be processed due to a sandbox validation error. Ensure that the sandbox name you provided in the `x-sandbox-name` header represents a valid, enabled sandbox for your IMS Organization before trying the request again. |
