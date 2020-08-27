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

* Authorization: Bearer `{ACCESS_TOKEN}`
* x-api-key: `{API_KEY}`
* x-gw-ims-org-id: `{IMS_ORG}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in. For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../sandboxes/home.md).

* x-sandbox-name: `{SANDBOX_NAME}`

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

## Next steps

This document provided an overview of the Observability Insights API. See the document on [available metrics](metrics.md) for a full list of metrics that can be used in the API.