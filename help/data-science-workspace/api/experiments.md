---
keywords: Experience Platform;developer guide;endpoint;Data Science Workspace;popular topics;experiments;sensei machine learning api
solution: Experience Platform
title: Experiments API Endpoint
description: Model development and training occurs at the Experiment level, where an Experiment consists of an MLInstance, training runs, and scoring runs.
role: Developer
exl-id: 6ca5106e-896d-4c03-aecc-344632d5307d
---
# Experiments endpoint

Model development and training occurs at the Experiment level, where an Experiment consists of an MLInstance, training runs, and scoring runs.

## Create an Experiment {#create-an-experiment}

You can create an Experiment by performing a POST request while providing a name and a valid MLInstance ID in the request payload.

>[!NOTE]
>
>Unlike model training in the UI, creating an Experiment through an explicit API call does not automatically create and execute a training run.

**API Format**

```http
POST /experiments
```

**Request**

```shell
curl -X POST \
    https://platform.adobe.io/data/sensei/experiments \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'content-type: application/vnd.adobe.platform.sensei+json;profile=experiment.v1.json' \
    -d '{
        "name": "a name for this Experiment",
        "mlInstanceId": "46986c8f-7739-4376-8509-0178bdf32cda"
    }'
```

| Property | Description |
| --- | --- |
| `name` | The desired name for the Experiment. The training run corresponding to this Experiment will inherit this value to be displayed in the UI as the training run name. |
| `mlInstanceId` | A valid MLInstance ID. |

**Response**

A successful response returns a payload containing the details of the newly created Experiment including its unique identifier (`id`).

```json
{
    "id": "5cb25a2d-2cbd-4c99-a619-8ddae5250a7b",
    "name": "A name for this Experiment",
    "mlInstanceId": "46986c8f-7739-4376-8509-0178bdf32cda",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "userId": "Jane_Doe@AdobeID"
    },
    "updated": "2019-01-01T00:00:00.000Z",
    "createdByService": false
}
```

## Create and execute a training or scoring run {#experiment-training-scoring}

You can create training or scoring runs by performing a POST request and providing a valid Experiment ID and specifying the run task. Scoring runs can be created only if the Experiment has an existing and successful training run. Successfully creating a training run will initialize the model training procedure and its successful completion will generate a trained model. Generating trained models will replace any previously existing ones such that an Experiment can only utilize a single trained model at any given time.

**API Format**

```http
POST /experiments/{EXPERIMENT_ID}/runs
```

| Parameter | Description |
| --- | --- |
| `{EXPERIMENT_ID}` | A valid Experiment ID. |

**Request**

```shell
curl -X POST \
    https://platform.adobe.io/data/sensei/experiments/5cb25a2d-2cbd-4c99-a619-8ddae5250a7b/runs \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'content-type: application/vnd.adobe.platform.sensei+json;profile=experimentRun.v1.json' \
    -d '{
        "mode": "{TASK}"
    }'
```

| Property | Description |
| --- | --- |
| `{TASK}` | Specifies the run's task. Set this value as either `train` for training, `score` for scoring, or `featurePipeline` for feature pipeline. |

**Response**

A successful response returns a payload containing the details of the newly created run including the inherited default training or scoring parameters, and the run's unique ID (`{RUN_ID}`).

```json
{
    "id": "33408593-2871-4198-a812-6d1b7d939cda",
    "mode": "{TASK}",
    "experimentId": "5cb25a2d-2cbd-4c99-a619-8ddae5250a7b",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "userId": "Jane_Doe@AdobeID"
    },
    "updated": "2019-01-01T00:00:00.000Z",
    "createdBySchedule": false,
    "tasks": [
        {
            "name": "{TASK}",
            "parameters": [
                {
                    "key": "parameter",
                    "value": "parameter value"
                }
            ]
        }
    ]
}
```

## Retrieve a list of Experiments

You can retrieve a list of Experiments belonging to a particular MLInstance by performing a single GET request and providing a valid MLInstance ID as a query parameter. For a list of available queries, refer to the appendix section on [query parameters for asset retrieval](./appendix.md#query).


**API Format**

```http
GET /experiments
GET /experiments?property=mlInstanceId=={MLINSTANCE_ID}
```

| Parameter | Description |
| --- | --- |
| `{MLINSTANCE_ID}` | Provide a valid MLInstance ID to retrieve a list of Experiments belonging to that particular MLInstance. |

**Request**

```shell
curl -X GET \
    https://platform.adobe.io/data/sensei/experiments?property=mlInstanceId==46986c8f-7739-4376-8509-0178bdf32cda \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a list of Experiments sharing the same MLInstance ID (`{MLINSTANCE_ID}`).

```json
{
    "children": [
        {
            "id": "5cb25a2d-2cbd-4c99-a619-8ddae5250a7b",
            "name": "A name for this Experiment",
            "mlInstanceId": "46986c8f-7739-4376-8509-0178bdf32cda",
            "created": "2019-01-01T00:00:00.000Z",
            "updated": "2019-01-01T00:00:00.000Z",
            "createdByService": false
        },
        {
            "id": "6cb25a2d-2cbd-4c99-a619-8ddae5250a7b",
            "name": "Training Run 1",
            "mlInstanceId": "46986c8f-7839-4376-8509-0178bdf32cda",
            "created": "2019-01-01T00:00:00.000Z",
            "updated": "2019-01-01T00:00:00.000Z",
            "createdByService": false
        },
        {
            "id": "7cb25a2d-2cbd-4c99-a619-8ddae5250a7b",
            "name": "Training Run 2",
            "mlInstanceId": "46986c8f-7939-4376-8509-0178bdf32cda",
            "created": "2019-01-01T00:00:00.000Z",
            "updated": "2019-01-01T00:00:00.000Z",
            "createdByService": false
        }
    ],
    "_page": {
        "property": "deleted==false",
        "count": 3
    }
}
```

## Retrieve a specific Experiment {#retrieve-specific}

You can retrieve the details of a specific Experiment by performing a GET request that includes the desired Experiment's ID in the request path.

**API Format**

```http
GET /experiments/{EXPERIMENT_ID}
```

| Parameter | Description |
| --- | --- |
| `{EXPERIMENT_ID}` | A valid Experiment ID. |

**Request**

```shell
curl -X GET \
    https://platform.adobe.io/data/sensei/experiments/5cb25a2d-2cbd-4c99-a619-8ddae5250a7b \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a payload containing the details of the requested Experiment.

```json
{
    "id": "5cb25a2d-2cbd-4c99-a619-8ddae5250a7b",
    "name": "A name for this Experiment",
    "mlInstanceId": "46986c8f-7739-4376-8509-0178bdf32cda",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "userId": "Jane_Doe@AdobeID"
    },
    "updated": "2019-01-01T00:00:00.000Z",
    "createdByService": false
}
```

## Retrieve a list of Experiment runs

You can retrieve a list of training or scoring runs belonging to a particular Experiment by performing a single GET request and providing a valid Experiment ID. To help filter results, you can specify query parameters in the request path. For a complete list of available query parameters, see the appendix section on [query parameters for asset retrieval](./appendix.md#query).

>[!NOTE]
>
>When combining multiple query parameters, they must be separated by ampersands (&).

**API Format**

```http
GET /experiments/{EXPERIMENT_ID}/runs
GET /experiments/{EXPERIMENT_ID}/runs?{QUERY_PARAMETER}={VALUE}
GET /experiments/{EXPERIMENT_ID}/runs?{QUERY_PARAMETER_1}={VALUE_1}&{QUERY_PARAMETER_2}={VALUE_2}
```

| Parameter | Description |
| --- | --- |
| `{EXPERIMENT_ID}` | A valid Experiment ID. |
| `{QUERY_PARAMETER}` | One of the [available query parameters](./appendix.md#query) used to filter results. |
| `{VALUE}` | The value for the preceding query parameter. |

**Request**

The following request contains a query and retrieves a list of training runs belonging to some Experiment.

```shell
curl -X GET \
    https://platform.adobe.io/data/sensei/experiments/5cb25a2d-2cbd-4c99-a619-8ddae5250a7b/runs?property=mode==train \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a payload containing a list of runs and each of their details including their Experiment run ID (`{RUN_ID}`).

```json
{
    "children": [
        {
            "id": "33408593-2871-4198-a812-6d1b7d939cda",
            "mode": "train",
            "experimentId": "5cb25a2d-2cbd-4c99-a619-8ddae5250a7b",
            "created": "2019-01-01T00:00:00.000Z",
            "createdBy": {
                "userId": "Jane_Doe@AdobeID"
            },
            "createdBySchedule": false
        }
    ],
    "_page": {
        "property": "mode==train,experimentId==5cb25a2d-2cbd-4c99-a619-8ddae5250a7b,deleted==false",
        "totalCount": 1,
        "count": 1
    }
}
```

## Update an Experiment

You can update an existing Experiment by overwriting its properties through a PUT request that includes the target Experiment's ID in the request path and providing a JSON payload containing updated properties.

>[!TIP]
>
>In order to ensure the success of this PUT request, it is suggested that first you perform a GET request to [retrieve the Experiment by ID](#retrieve-specific). Then, modify and update the returned JSON object and apply the entirety of the modified JSON object as the payload for the PUT request.

The following sample API call updates an Experiments's name while having these properties initially:

```json
{
    "name": "A name for this Experiment",
    "mlInstanceId": "46986c8f-7739-4376-8509-0178bdf32cda",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "userId": "Jane_Doe@AdobeID"
    },
    "createdByService": false
}
```

**API Format**

```http
PUT /experiments/{EXPERIMENT_ID}
```

| Parameter | Description |
| --- | --- |
| `{EXPERIMENT_ID}` | A valid Experiment ID. |

**Request**

```shell
curl -X PUT \
    https://platform.adobe.io/data/sensei/experiments/5cb25a2d-2cbd-4c99-a619-8ddae5250a7b \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'content-type: application/vnd.adobe.platform.sensei+json;profile=experiments.v1.json' \
    -d '{
        "name": "An upated name",
        "mlInstanceId": "46986c8f-7739-4376-8509-0178bdf32cda",
        "created": "2019-01-01T00:00:00.000Z",
        "createdBy": {
            "userId": "Jane_Doe@AdobeID"
        },
        "createdByService": false
    }'
```

**Response**

A successful response returns a payload containing the Experiment's updated details.

```json
{
    "id": "5cb25a2d-2cbd-4c99-a619-8ddae5250a7b",
    "name": "An updated name",
    "mlInstanceId": "46986c8f-7739-4376-8509-0178bdf32cda",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "userId": "Jane_Doe@AdobeID"
    },
    "updated": "2019-01-02T00:00:00.000Z",
    "createdByService": false
}
```

## Delete an Experiment

You can delete a single Experiment by performing a DELETE request that includes the target Experiment's ID in the request path.

**API Format**

```http
DELETE /experiments/{EXPERIMENT_ID}
```

| Parameter | Description |
| --- | --- |
| `{EXPERIMENT_ID}` | A valid Experiment ID. |

**Request**

```shell
curl -X DELETE \
    https://platform.adobe.io/data/sensei/experiments/5cb25a2d-2cbd-4c99-a619-8ddae5250a7b \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```json
{
    "title": "Success",
    "status": 200,
    "detail": "Experiment successfully deleted"
}
```

## Delete Experiments by MLInstance ID

You can delete all Experiments belonging to a particular MLInstance by performing a DELETE request that includes the MLInstance ID as a query parameter.

**API Format**

```http
DELETE /experiments?mlInstanceId={MLINSTANCE_ID}
```

| Parameter | Description |
| --- | ---|
| `{MLINSTANCE_ID}` |  A valid MLInstance ID. |

**Request**

```shell
curl -X DELETE \
    https://platform.adobe.io/data/sensei/experiments?mlInstanceId=46986c8f-7739-4376-8509-0178bdf32cda \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

```json
{
    "title": "Success",
    "status": 200,
    "detail": "Experiments successfully deleted"
}
```
