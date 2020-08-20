---
keywords: Experience Platform;home;popular topics;date range
solution: Experience Platform
title: Adobe Experience Platform Observability Insights
topic: overview
description: Observability Insights is a RESTful API that allows you to expose key observability metrics in Adobe Experience Platform. These metrics provide insights into Platform usage statistics, health-checks for Platform services, historical trends, and performance indicators for various Platform functionalities.
---

# Adobe Experience Platform Observability Insights overview

Observability Insights is a RESTful API that allows you to expose key observability metrics in Adobe Experience Platform. These metrics provide insights into [!DNL Platform] usage statistics, health-checks for [!DNL Platform] services, historical trends, and performance indicators for various [!DNL Platform] functionalities. 

This document demonstrates an example call to the Observability Insights API. For a complete list of Observability endpoints, please refer to the [Observability Insights API reference](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/observability-insights.yaml).

## Getting started

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {IMS_ORG}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in. For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../sandboxes/home.md).

* `x-sandbox-name: {SANDBOX_NAME}`

## Retrieve observability metrics

You can retrieve observability metrics by making a request to the `/metrics` endpoint in the Observability Insights API. There are two supported methods for retrieving metric data:

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
| `{ID}` | The identifier for a particular [!DNL Platform] resource whose metrics you want to expose. This ID may be optional, required, or not applicable depending on the metrics being used. For a list of available metrics, as well as supported IDs (both required and optional) for each metric, see the reference document on [available metrics](metrics.md). |
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
        "start":"2020-07-14T00:00:00.000Z",
        "end":"2020-07-22T00:00:00.000Z",
        "granularity":"day",
        "metrics":[
          {
            "name":"timeseries.ingestion.dataset.recordsuccess.count",
            "filters":[
              {
                "name":"dataSetId",
                "value":"5edcfb2fbb642119194c7d94|5eddb21420f516191b7a8dad",
                "groupBy":true
              }
            ],
            "aggregator":"sum",
            "downsample":"sum"
          },
          {
            "name":"timeseries.ingestion.dataset.dailysize",
            "filters":[
              {
                "name":"dataSetId",
                "value":"5eddb21420f516191b7a8dad",
                "groupBy":false
              }
            ],
            "aggregator":"sum",
            "downsample":"sum"
          }
        ]
      }'
```

| Property | Description |
| --- | --- |
| `start` | The earliest date/time from which to retrieve metric data. |
| `end` | The latest date/time from which to retrieve metric data. |
| `granularity` | Indicates the period of time to divide metric data by. For example, a value of `DAY` returns metrics for each day between the `start` and `end` date, whereas a value of `MONTH` would group metric results by month instead. |
| `metrics` | An array of objects, one for each metric you want to retrieve. |
| `name` | The name of a metric recognized by Observability Insights. See the [metrics reference](./metrics.md) for a full list of accepted metric names. |
| `filters` | An optional field that allows you to filter metrics by specific datasets. The field is an array of objects (one for each filter), with each object containing the following properties: <ul><li>`name`: </li><li>`value`: </li><li>`groupBy`: </li></ul> |
| `aggregator` | |
| `downsample` | |

**Response**

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
| `dataPoints` | |
| `dps` | |

## Next steps

This document provided an overview of the Observability Insights API. See the document on [available metrics](metrics.md) for a full list of metrics that can be used in the API.