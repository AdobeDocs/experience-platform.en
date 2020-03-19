---
keywords: Experience Platform;developer guide;endpoint;Data Science Workspace;popular topics
solution: Experience Platform
title: Insights
topic: Developer guide
---

# Insights

Insights contain metrics which are used to empower a data scientist to evaluate and choose optimal ML models by displaying relevant evaluation metrics.

This developer guide provides steps to help you start using the [Sensei Machine Learning API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/sensei-ml-api.yaml) `/insights` endpoint and demonstrates API calls for performing CRUD operations for the following:

* [Retrieve a list of insights](#retrieve-a-list-of-insights)
* [Retrieve a specific insight](#retrieve-a-specific-insight) 
* [Create a new Model insight](#add-a-new-model-insight)
* [Retrieve a list of default metrics for algorithms](#retrieve-a-list-of-default-metrics-for-algorithms)

## Getting started

You are required to have completed the [authentication](../../tutorials/authentication.md) tutorial in order to have access to the following request headers to make calls to the `/mlInstances` endpoint:

* Authorization: Bearer `{ACCESS_TOKEN}`
* x-api-key: `{API_KEY}`
* x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

* x-sandbox-name: `{SANDBOX_NAME}`

For more information on sandboxes in Platform, see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

* Content-Type: application/json

### Retrieve a list of Insights

You can retrieve a list of Insights by performing a single GET request to the insights endpoint.  To help filter results, you can specify query parameters in the request path. For a list of available queries, refer to the appendix section on [query parameters for asset retrieval](#query-parameters-for-asset-retrieval).

#### API Format

```http
GET /insights/
```

#### Request

```shell
curl -X GET \
  https://platform.adobe.io/data/sensei/insights \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns a payload that includes a list of insights and each insight has unique identifier ( **id** ). Additionally you will receive **"context"** which contains the unique identifiers that are associated with that particular insight following with the Insights events and metrics data.

```json
{
    "children": [
        {
            "id": "{INSIGHT_ID}",
            "context": {
                "experimentId": "{EXPERIMENT_ID}",
                "experimentRunId": "{EXPERIMENT_RUN_ID}",
                "modelId": "{MODEL_ID}"
            },
            "events": {
                "name": "fit",
                "eventValues": {
                    "algorithm": null,
                    "ratio": "0.8"
                }
            },
            "metrics": [
                {
                    "name": "MAPE",
                    "value": "0.0111111111111",
                    "valueType": "double"
                }
            ],
            "created": "2019-01-01T00:00:00.000Z",
            "updated": "2019-01-02T00:00:00.000Z"
        },
        {
            "id": "{INSIGHT_ID}",
            "context": {
                "experimentId": "{EXPERIMENT_ID}",
                "experimentRunId": "{EXPERIMENT_RUN_ID}",
                "modelId": "{MODEL_ID}"
            },
            "events": {
                "name": "fit",
                "eventValues": {
                    "algorithm": null,
                    "ratio": "0.8"
                }
            },
            "metrics": [
                {
                    "name": "MAPE",
                    "value": "0.0111111111111",
                    "valueType": "double"
                }
            ],
            "created": "2019-01-01T00:00:00.000Z",
            "updated": "2019-01-02T00:00:00.000Z"
            }
        ],
    "_page": {
        "count": 2
    }
}
```

*  `id`: The ID corresponding to the Insight.
*  `{EXPERIMENT_ID}`: A valid Experiment ID.
*  `{EXPERIEMENT_RUN_ID}`: A valid Experiment Run ID.
*  `{MODEL_ID}`: A valid Model ID.

### Retrieve a specific Insight

To lookup a particular insight make a GET request and provide a valid `{INSIGHT_ID}` in the request path. To help filter results, you can specify query parameters in the request path. For a list of available queries, refer to the appendix section on [query parameters for asset retrieval](#query-parameters-for-asset-retrieval).

#### API Format

```http
GET /insights/{INSIGHT_ID}
```

* `{INSIGHT_ID}`: The unique identifier of a Sensei insight.

#### Request

```shell
curl -X GET \
  https://platform.adobe.io/data/sensei/insights/{INSIGHT_ID} \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns a payload that includes the insights unique identifier ( **id** ). Additionally you will receive **"context"** which contains the unique identifiers that are associated with the particular insight following with the Insights events and metrics data.

```json
{
    "id": "{INSIGHT_ID}",
    "context": {
        "experimentId": "{EXPERIMENT_ID}",
        "experimentRunId": "{EXPERIMENT_RUN_ID}",
        "modelId": "{MODEL_ID}"
    },
    "events": {
        "name": "fit",
        "eventValues": {
            "algorithm": null,
            "ratio": "0.8"
        }
    },
    "metrics": [
        {
            "name": "MAPE",
            "value": "0.0111111111111",
            "valueType": "double"
        }
    ],
    "created": "2019-01-01T00:00:00.000Z",
    "updated": "2019-01-02T00:00:00.000Z"
}
```

*  `id`: The ID corresponding to the Insight.
*  `{EXPERIMENT_ID}`: A valid Experiment ID.
*  `{EXPERIEMENT_RUN_ID}`: A valid Experiment Run ID.
*  `{MODEL_ID}`: A valid Model ID.

### Add a new Model insight

You can create a new Model insight by performing a POST request and a payload that provides context, events,and metrics for the new Model insight. The context field used to create a new Model insight is not required to have existing services attached to it but you can choose to create the new Model insight with existing services by providing one or more of the corresponding ID's:

```json
"context": {
    "clientId": "{CLIENT_ID}",
    "notebookId": "{NOTEBOOK_ID}",
    "experimentId": "{EXPERIMENT_ID}",
    "engineId": "{ENGINE_ID}",
    "mlInstanceId": "{MLINSTANCE_ID}",
    "experimentRunId": "{EXPERIMENT_RUN_ID}",
    "modelId": "{MODEL_ID}",
    "dataSetId": "{DATASET_ID}"
  }
```

#### API Format

```http
POST /insights
```

#### Request

```shell
curl -X POST \
  https://platform.adobe.io/data/sensei/insights \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H `Content-Type: application/vnd.adobe.platform.sensei+json;profile=mlInstance.v1.json`
    -d {
    "context": {
        "experimentId": "{EXPERIMENT_ID}",
        "experimentRunId": "{EXPERIMENT_RUN_ID}",
        "modelId": "{MODEL_ID}"
    },
    "events": {
        "name": "fit2",
        "eventValues": {
            "algorithm": null,
            "ratio": "0.99"
        }
    },
    "metrics": [
        {
            "name": "MAPE2",
            "value": "0.11111111111",
            "valueType": "double"
        }
    ],
    "created": "2019-01-01T00:00:00.000Z",
    "updated": "2019-01-02T00:00:00.000Z"
}
```

#### Response

A successful response will return a payload that has a `{INSIGHT_ID}` and any parameters that you provided in the initial request.

```json
{
    "id": "{INSIGHT_ID}",
    "context": {
        "experimentId": "{EXPERIMENT_ID}",
        "experimentRunId": "{EXPERIMENT_RUN_ID}",
        "modelId": "{MODEL_ID}"
    },
    "events": {
        "name": "fit2",
        "eventValues": {
            "algorithm": null,
            "ratio": "0.99"
        }
    },
    "metrics": [
        {
            "name": "MAPE2",
            "value": "0.11111111111",
            "valueType": "double"
        }
    ],
    "created": "2019-01-01T00:00:00.000Z",
    "updated": "2019-01-02T00:00:00.000Z"
}
```

* `{INSIGHT_ID}`: The unique ID that is created for this particular insight when a successful POST request is made.

### Retrieve a list of default metrics for algorithms

You can retrieve a list of all your algorithm's and default metrics by performing a single GET request to the metrics endpoint. To query a particular metric make a GET request and provide a valid `{ALGORITHM}` in the request path.

* `{ALGORITHM}`: The identifier of the algorithm type

#### API Format

```http
GET /insights/metrics
GET /insights/metrics?algorithm={ALGORITHM}
```

#### Request

The following request contains a query and retrieves a specific metric by using the algorithm identifier `{ALGORITHM}`

```shell
curl -X GET \
  'https://platform.adobe.io/data/sensei/insights/metrics?algorithm={ALGORITHM}' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'

```

#### Response 

A successful response returns a payload that includes the `{ALGORITHM}` unique identifier and an array of default metrics.

```json
{
    "children": [
        {
            "algorithm": "{ALGORITHM}",
            "defaultMetrics": [
                "f-score",
                "auroc",
                "roc",
                "precision",
                "recall",
                "accuracy",
                "confusion matrix"
            ]
        }
    ]
}
```

## Appendix

The following sections provide reference information for various features of the Sensei Machine Learning API.

### Query parameters for asset retrieval

The Sensei Machine Learning API provides support for query parameters with retrieving assets. Available query parameters and their usages are described in the following table:

| Query parameter | Description | Default value |
| --------------- | ----------- | ------- |
| `start` | Indicates the starting index for pagination. | `start=0` |
| `limit` | Indicates the maximum number of results to return. | `limit=25` |
| `orderby` | Indicates the properties to use for sorting in priority order. Include a dash (**-**) before a property name to sort in descending order, otherwise results are sorted in ascending order. | `orderby=created` |
| `property` | Indicates the comparison expression that an object must satisfy in order to be returned. | `property=deleted==false` |

>[!NOTE] When combining multiple query parameters, they must be separated by ampersands (**&**).