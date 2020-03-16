---
keywords: Experience Platform;developer guide;endpoint;Data Science Workspace;popular topics
solution: Experience Platform
title: Experiments
topic: Developer guide
---

# Experiments

Model development and training occurs at the Experiment level, where an Experiment consists of an MLInstance, training runs, and scoring runs.

This developer guide provides steps to help you start using the [Sensei Machine Learning API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/sensei-ml-api.yaml) `/Experiments` endpoint and demonstrates API calls for performing CRUD operations for the following:

*   [Create an Experiment](#create-an-experiment)
*   [Create and execute an Experiment run](#create-and-execute-a-training-or-scoring-run)
*   [Retrieve a list of Experiments](#retrieve-a-list-of-experiments)
*   [Retrieve a specific Experiment](#retrieve-a-specific-experiment)
*   [Retrieve a list of Experiment runs](#retrieve-a-list-of-experiment-runs)
*   [Update an Experiment](#update-an-experiment)
*   [Delete an Experiment](#delete-an-experiment)
*   [Delete Experiments by MLInstance ID](#delete-experiments-by-mlinstance-id)

## Getting started

You are required to have completed the [authentication](../../tutorials/authentication.md) tutorial in order to have access to the following request headers to make calls to the `/Engines` endpoint:

* Authorization: Bearer `{ACCESS_TOKEN}`
* x-api-key: `{API_KEY}`
* x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

* x-sandbox-name: `{SANDBOX_NAME}`

For more information on sandboxes in Platform, see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

* Content-Type: application/json

### Create an Experiment

You can create an Experiment by performing a POST request while providing a name and a valid MLInstance ID in the request payload.

>[!NOTE] Unlike model training in the UI, creating an Experiment through an explicit API call does not automatically create and execute a training run.

#### API Format

```http
POST /experiments
```

#### Request

```shell
curl -X POST \
    https://platform.adobe.io/data/sensei/experiments \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'content-type: application/vnd.adobe.platform.sensei+json;profile=experiment.v1.json' \
    -d '{
        "name": "a name for this Experiment",
        "mlInstanceId": "{MLINSTANCE_ID}"
    }'
```

*   `name`: The desired name for the Experiment. The training run corresponding to this Experiment will inherit this value to be displayed in the UI as the training run name.
*   `mlInstanceId`: A valid MLInstance ID.

#### Response

A successful response returns a payload containing the details of the newly created Experiment including its unique identifier (`id`).

```json
{
    "id": "{EXPERIMENT_ID}",
    "name": "A name for this Experiment",
    "mlInstanceId": "{MLINSTANCE_ID}",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "userId": "Jane_Doe@AdobeID"
    },
    "updated": "2019-01-01T00:00:00.000Z",
    "createdByService": false
}
```

### Create and execute a training or scoring run

You can create training or scoring runs by performing a POST request and providing a valid Experiment ID and specifying the run task. Scoring runs can be created only if the Experiment has an existing and successful training run. Successfully creating a training run will initialize the model training procedure and its successful completion will generate a trained model. Generating trained models will replace any previously existing ones such that an Experiment can only utilize a single trained model at any given time.

#### API Format

```http
POST /experiments/{EXPERIMENT_ID}/runs
```

*   `{EXPERIMENT_ID}`: A valid Experiment ID.

#### Request

```shell
curl -X POST \
    https://platform.adobe.io/data/sensei/experiments/{EXPERIMENT_ID}/runs \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'content-type: application/vnd.adobe.platform.sensei+json;profile=experimentRun.v1.json' \
    -d '{
        "mode": "{TASK}"
    }'
```

*   `{TASK}`: Specifies the run's task. Set this value as either `train` for training, `score` for scoring, or `fp` for feature pipeline.

#### Response

A successful response returns a payload containing the details of the newly created run including the inherited default training or scoring parameters, and the run's unique ID (`{RUN_ID}`).

```json
{
    "id": "{RUN_ID}",
    "mode": "{TASK}",
    "experimentId": "{EXPERIMENT_ID}",
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

### Retrieve a list of Experiments

You can retrieve a list of Experiments belonging to a particular MLInstance by performing a single GET request and providing a valid MLInstance ID as a query parameter. For a list of available queries, refer to the appendix section on [query parameters for asset retrieval](#appendix-query-parameters-for-asset-retrieval).


#### API Format

```http
GET /experiments
GET /experiments?property=mlInstanceId=={MLINSTANCE_ID}
```

*   `{MLINSTANCE_ID}`: Provide a valid MLInstance ID to retrieve a list of Experiments belonging to that particular MLInstance.

#### Request

```shell
curl -X GET \
    https://platform.adobe.io/data/sensei/experiments?property=mlInstanceId=={MLINSTANCE_ID} \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns a list of Experiments sharing the same MLInstance ID (`{MLINSTANCE_ID}`).

```json
{
    "children": [
        {
            "id": "{EXPERIMENT_ID}",
            "name": "A name for this Experiment",
            "mlInstanceId": "{MLINSTANCE_ID}",
            "created": "2019-01-01T00:00:00.000Z",
            "updated": "2019-01-01T00:00:00.000Z",
            "createdByService": false
        },
        {
            "id": "{EXPERIMENT_ID}",
            "name": "Training Run 1",
            "mlInstanceId": "{MLINSTANCE_ID}",
            "created": "2019-01-01T00:00:00.000Z",
            "updated": "2019-01-01T00:00:00.000Z",
            "createdByService": false
        },
        {
            "id": "{EXPERIMENT_ID}",
            "name": "Training Run 2",
            "mlInstanceId": "{MLINSTANCE_ID}",
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

### Retrieve a specific Experiment

You can retrieve the details of a specific Experiment by performing a GET request that includes the desired Experiment's ID in the request path.

#### API Format

```http
GET /experiments/{EXPERIMENT_ID}
```

*   `{EXPERIMENT_ID}`: A valid Experiment ID

#### Request

```shell
curl -X GET \
    https://platform.adobe.io/data/sensei/experiments/{EXPERIMENT_ID} \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```


#### Response

A successful response returns a payload containing the details of the requested Experiment.

```json
{
    "id": "{EXPERIMENT_ID}",
    "name": "A name for this Experiment",
    "mlInstanceId": "{MLINSTANCE_ID}",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "userId": "Jane_Doe@AdobeID"
    },
    "updated": "2019-01-01T00:00:00.000Z",
    "createdByService": false
}
```

### Retrieve a list of Experiment runs

You can retrieve a list of training or scoring runs belonging to a particular Experiment by performing a single GET request and providing a valid Experiment ID. To help filter results, you can specify query parameters in the request path. For a complete list of available query parameters, see the appendix section on [query parameters for asset retrieval](#appendix-query-parameters-for-asset-retrieval).

>[!NOTE] When combining multiple query parameters, they must be separated by ampersands (&).

#### API Format

```http
GET /experiments/{EXPERIMENT_ID}/runs
GET /experiments/{EXPERIMENT_ID}/runs?parameter_1=value_1
GET /experiments/{EXPERIMENT_ID}/runs?parameter_1=value_1&parameter_2=value_2
```

*   `{EXPERIMENT_ID}`: A valid Experiment ID

#### Request

The following request contains a query and retrieves a list of training runs belonging to some Experiment.

```shell
curl -X GET \
    https://platform.adobe.io/data/sensei/experiments/{EXPERIMENT_ID}/runs?property=mode==train \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns a payload containing a list of runs and each of their details including their Experiment run ID (`{RUN_ID}`).

```json
{
    "children": [
        {
            "id": "{RUN_ID}",
            "mode": "train",
            "experimentId": "{EXPERIMENT_ID}",
            "created": "2019-01-01T00:00:00.000Z",
            "createdBy": {
                "userId": "Jane_Doe@AdobeID"
            },
            "createdBySchedule": false
        }
    ],
    "_page": {
        "property": "mode==train,experimentId=={EXPERIMENT_ID},deleted==false",
        "totalCount": 1,
        "count": 1
    }
}
```

### Update an Experiment

You can update an existing Experiment by overwriting its properties through a PUT request that includes the target Experiment's ID in the request path and providing a JSON payload containing updated properties.

>[!TIP] In order to ensure the success of this PUT request, it is suggested that first you perform a GET request to [retrieve the Experiment by ID](#retrieve-a-specific-experiment). Then, modify and update the returned JSON object and apply the entirety of the modified JSON object as the payload for the PUT request.

The following sample API call updates an Experiments's name while having these properties initially:

```json
{
    "name": "A name for this Experiment",
    "mlInstanceId": "{MLINSTANCE_ID}",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "userId": "Jane_Doe@AdobeID"
    },
    "createdByService": false
}
```

#### API Format

```http
PUT /experiments/{EXPERIMENT_ID}
```

*   `{EXPERIMENT_ID}`: A valid Experiment ID

#### Request

```shell
curl -X PUT \
    https://platform.adobe.io/data/sensei/experiments/{EXPERIMENT_ID} \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'content-type: application/vnd.adobe.platform.sensei+json;profile=experiments.v1.json' \
    -d '{
        "name": "An upated name",
        "mlInstanceId": "{MLINSTANCE_ID}",
        "created": "2019-01-01T00:00:00.000Z",
        "createdBy": {
            "userId": "Jane_Doe@AdobeID"
        },
        "createdByService": false
    }'
```

#### Response

A successful response returns a payload containing the Experiment's updated details.

```json
{
    "id": "{EXPERIMENT_ID}",
    "name": "An updated name",
    "mlInstanceId": "{MLINSTANCE_ID}",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "userId": "Jane_Doe@AdobeID"
    },
    "updated": "2019-01-02T00:00:00.000Z",
    "createdByService": false
}
```

### Delete an Experiment

You can delete a single Experiment by performing a DELETE request that includes the target Experiment's ID in the request path.

#### API Format

```http
DELETE /experiments/{EXPERIMENT_ID}
```

*   `{EXPERIMENT_ID}`: A valid Experiment ID

#### Request

```shell
curl -X DELETE \
    https://platform.adobe.io/data/sensei/experiments/{EXPERIMENT_ID} \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

```json
{
    "title": "Success",
    "status": 200,
    "detail": "Experiment successfully deleted"
}
```

### Delete Experiments by MLInstance ID

You can delete all Experiments belonging to a particular MLInstance by performing a DELETE request that includes the MLInstance ID as a query parameter.

#### API Format

```http
DELETE /experiments?mlInstanceId={MLINSTANCE_ID}
```

*   `{MLINSTANCE_ID}`: A valid MLInstance ID.

#### Request

```shell
curl -X DELETE \
    https://platform.adobe.io/data/sensei/experiments?mlInstanceId={MLINSTANCE_ID} \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

```json
{
    "title": "Success",
    "status": 200,
    "detail": "Experiments successfully deleted"
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