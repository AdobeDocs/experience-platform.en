---
keywords: Experience Platform;developer guide;endpoint;Data Science Workspace;popular topics
solution: Experience Platform
title: Services
topic: Developer guide
---

# MLServices

An MLService is a published trained model that provides your organization with the ability to access and reuse previously developed models. A key feature of MLServices is the ability to automate training and scoring on a scheduled basis. Scheduled training runs can help upkeep a model's efficiency and accuracy, while scheduled scoring runs can ensure that new insights are consistently generated.

Automated training and scoring schedules are defined with a starting timestamp, ending timestamp, and a frequency represented as a <a href="https://en.wikipedia.org/wiki/Cron" target="_blank">cron expression</a>. Schedules can be defined when [creating an MLService](#create-an-mlservice) or applied by [updating an existing MLService](#update-an-mlservice).

This developer guide provides steps to help you start using the [Sensei Machine Learning API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/sensei-ml-api.yaml) `/mlServices` endpoint and demonstrates API calls for performing CRUD operations for the following:

* [Create an MLService](#create-an-mlservice)
* [Retrieve a list of MLServices](#retrieve-a-list-of-mlservices)
* [Retrieve a specific MLService](#retrieve-a-specific-mlservice)
* [Update an MLService](#update-an-mlservice)
* [Delete an MLService](#delete-an-mlservice)
* [Delete MLServices by MLInstance ID](#delete-mlservices-by-mlinstance-id)

## Getting started

You are required to have completed the [authentication](../../tutorials/authentication.md) tutorial in order to have access to the following request headers to make calls to the `/mlServices` endpoint:

* Authorization: Bearer `{ACCESS_TOKEN}`
* x-api-key: `{API_KEY}`
* x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

* x-sandbox-name: `{SANDBOX_NAME}`

For more information on sandboxes in Platform, see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

* Content-Type: application/json

### Create an MLService

You can create an MLService by performing a POST request and a payload that provides a name for the service and a valid MLInstance ID. The MLInstance used to create an MLService is not required to have existing training Experiments but you can choose to create the MLService with an existing trained model by providing the corresponding Experiment ID and training run ID.

#### API Format

```http
POST /mlServices
```

#### Request

```shell
curl -X POST \
    https://platform.adobe.io/data/sensei/mlServices \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'content-type: application/vnd.adobe.platform.sensei+json; profile=mlService.v1.json' \
    -d '{
        "name": "A name for this MLService",
        "description": "A description for this MLService",
        "mlInstanceId": "{MLINSTANCE_ID}",
        "trainingDataSetId": "{DATASET_ID}",
        "trainingExperimentId": "{TRAINING_ID}",
        "trainingExperimentRunId": "{RUN_ID}",
        "trainingSchedule": {
            "startTime": "2019-01-01T00:00",
            "endTime": "2019-12-31T00:00",
            "cron": "20 * * * *"
        },
        "scoringSchedule": {
            "startTime": "2019-01-01T00:00",
            "endTime": "2019-12-31T00:00",
            "cron": "20 * * * *"
        }
    }'
```

*   `name`: The desired name for the MLService. The service corresponding to this MLService will inherit this value to be displayed in the Service Gallery UI as the service's name.
*   `description`: An optional description for the MLService. The service corresponding to this MLService will inherit this value to be displayed in Service Gallery UI as the service's description.
*   `mlInstanceId`: A valid MLInstance ID.
*   `trainingDataSetId`: A training dataset ID which if provided will override the MLInstance's default dataset ID. If the MLInstance used to create the MLService does not define a training dataset, you must provide an appropriate training dataset ID.
*   `trainingExperimentId`: An Experiment ID which you can optionally provide. If this value is not provided then creating the MLService will also create a new Experiment using the MLInstance's default configurations.
*   `trainingExperimentRunId`: A training run ID which you can optionally provide. If this value is not provided then creating the MLService will also create and execute a training run using the MLInstance's default training parameters.
*   `trainingSchedule`: A schedule for automated training runs. If this property is defined, then the MLService will automatically perform training runs on a scheduled basis.
*   `trainingSchedule > startTime`: A timestamp for which scheduled training runs will begin.
*   `trainingSchedule > endTime`: A timestamp for which scheduled training runs will end.
*   `trainingSchedule > cron`: A cron expression that defines the frequency of automated training runs.
*   `scoringSchedule`: A schedule for automated scoring runs. If this property is defined, then the MLService will automatically perform scoring runs on a scheduled basis.
*   `scoringSchedule > startTime`: A timestamp for which scheduled scoring runs will begin.
*   `scoringSchedule > endTime`: A timestamp for which scheduled scoring runs will end.
*   `scoringSchedule > cron`: A cron expression that defines the frequency of automated scoring runs.

#### Response

A successful response returns a payload containing the details of the newly created MLService including its unique identifier (`id`), Experiment ID for training (`trainingExperimentId`), Experiment ID for scoring (`scoringExperimentId`), and the input training dataset ID (`trainingDataSetId`).

```json
{
    "id": "{MLSERVICE_ID}",
    "name": "A name for this MLService",
    "description": "A description for this MLService",
    "mlInstanceId": "{MLINSTANCE_ID}",
    "trainingExperimentId": "{TRAINING_ID}",
    "trainingDataSetId": "{DATASET_ID}",
    "scoringExperimentId": "{SCORING_ID}",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "userId": "Jane_Doe@AdobeID"
    },
    "trainingSchedule": {
        "startTime": "2019-01-01T00:00",
        "endTime": "2019-12-31T00:00",
        "cron": "20 * * * *"
    },
    "scoringSchedule": {
        "startTime": "2019-01-01T00:00",
        "endTime": "2019-12-31T00:00",
        "cron": "20 * * * *"
    },
    "updated": "2019-01-01T00:00:00.000Z"
}
```

### Retrieve a list of MLServices

You can retrieve a list of MLServices by performing a single GET request. To help filter results, you can specify query parameters in the request path. For a list of available queries, refer to the appendix section on [query parameters for asset retrieval](#query-parameters-for-asset-retrieval).

#### API Format

```http
GET /mlServices
GET /mlServices?parameter_1=value_1
GET /mlServices?parameter_1=value_1&parameter_2=value_2
```

#### Request

The following request contains a query and retrieves a list of MLServices sharing the same MLInstance ID (`{MLINSTANCE_ID}`).

```shell
curl -X GET \
    'https://platform.adobe.io/data/sensei/mlServices?property=mlInstanceId=={MLINSTANCE_ID}' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

*   `{MLINSTANCE_ID}`: A valid MLInstance ID.

#### Response

A successful response returns a list of MLServices and their details including their MLService ID (`{MLSERVICE_ID}`), Experiment ID for training (`{TRAINING_ID}`), Experiment ID for scoring (`{SCORING_ID}`), and the input training dataset ID (`{DATASET_ID}`).

```json
{
    "children": [
        {
            "id": "{MLSERVICE_ID}",
            "name": "A service created in UI",
            "mlInstanceId": "{MLINSTANCE_ID}",
            "trainingExperimentId": "{TRAINING_ID}",
            "trainingDataSetId": "{DATASET_ID}",
            "scoringExperimentId": "{SCORING_ID}",
            "created": "2019-01-01T00:00:00.000Z",
            "createdBy": {
                "displayName": "Jane Doe",
                "userId": "Jane_Doe@AdobeID"
            },
            "updated": "2019-01-01T00:00:00.000Z"
        }
    ],
    "_page": {
        "property": "mlInstanceId=={MLINSTANCE_ID},deleted==false",
        "count": 1
    }
}
```

### Retrieve a specific MLService

You can retrieve the details of a specific Experiment by performing a GET request that includes the desired MLService's ID in the request path.

#### API Format

```http
GET /mlServices/{MLSERVICE_ID}
```

*   `{MLSERVICE_ID}`: A valid MLService ID.

#### Request

```shell
curl -X GET \
    https://platform.adobe.io/data/sensei/mlServices/{MLSERVICE_ID} \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns a payload containing the details of the requested MLService.

```json
{
    "id": "{MLSERVICE_ID}",
    "name": "A name for this MLService",
    "description": "A description for this MLService",
    "mlInstanceId": "{MLINSTANCE_ID}",
    "trainingExperimentId": "{TRAINING_ID}",
    "trainingDataSetId": "{DATASET_ID}",
    "scoringExperimentId": "{SCORING_ID}",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "userId": "Jane_Doe@AdobeID"
    },
    "updated": "2019-01-01T00:00:00.000Z"
}
```

### Update an MLService

You can update an existing MLService by overwriting its properties through a PUT request that includes the target MLService's ID in the request path and providing a JSON payload containing updated properties.

>[!TIP] In order to ensure the success of this PUT request, it is suggested that first you perform a GET request to [retrieve the MLService by ID](#retrieve-a-specific-mlservice). Then, modify and update the returned JSON object and apply the entirety of the modified JSON object as the payload for the PUT request.

#### API Format

```http
PUT /mlServices/{MLSERVICE_ID}
```

*   `{MLSERVICE_ID}`: A valid MLService ID.

#### Request

```shell
curl -X PUT \
    https://platform.adobe.io/data/sensei/mlServices/{MLSERVICE_ID} \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'content-type: application/vnd.adobe.platform.sensei+json; profile=mlService.v1.json' \
    -d '{
        "name": "A name for this MLService",
        "description": "A description for this MLService",
        "mlInstanceId": "{MLINSTANCE_ID}",
        "trainingExperimentId": "{TRAINING_ID}",
        "trainingDataSetId": "{DATASET_ID}",
        "scoringExperimentId": "{SCORING_ID}",
        "trainingSchedule": {
            "startTime": "2019-01-01T00:00",
            "endTime": "2019-12-31T00:00",
            "cron": "20 * * * *"
        },
        "scoringSchedule": {
            "startTime": "2019-01-01T00:00",
            "endTime": "2019-12-31T00:00",
            "cron": "20 * * * *"
        }
    }'
```

#### Response

A successful response returns a payload containing the MLService's updated details.

```json
{
    "id": "{MLSERVICE_ID}",
    "name": "A name for this MLService",
    "description": "A description for this MLService",
    "mlInstanceId": "{MLINSTANCE_ID}",
    "trainingExperimentId": "{TRAINING_ID}",
    "trainingDataSetId": "{DATASET_ID}",
    "scoringExperimentId": "{SCORING_ID}",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "userId": "Jane_Doe@AdobeID"
    },
    "trainingSchedule": {
        "startTime": "2019-01-01T00:00",
        "endTime": "2019-12-31T00:00",
        "cron": "20 * * * *"
    },
    "scoringSchedule": {
        "startTime": "2019-01-01T00:00",
        "endTime": "2019-12-31T00:00",
        "cron": "20 * * * *"
    },
    "updated": "2019-01-02T00:00:00.000Z"
}
```

### Delete an MLService

You can delete a single MLService by performing a DELETE request that includes the target MLService's ID in the request path.

#### API Format

```http
DELETE /mlServices/{MLSERVICE_ID}
```

*   `{MLSERVICE_ID}`: A valid MLService ID

#### Request

```shell
curl -X DELETE \
    https://platform.adobe.io/data/sensei/mlServices/{MLSERVICE_ID} \
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
    "detail": "MLService deletion was successful"
}
```

### Delete MLServices by MLInstance ID

You can delete all MLServices belonging to a particular MLInstance by performing a DELETE request that specifies an MLInstance ID as a query parameter.

#### API Format

```http
DELETE /mlServices?mlInstanceId={MLINSTANCE_ID}
```

*   `{MLINSTANCE_ID}`: A valid MLInstance ID.

#### Request

```shell
curl -X DELETE \
    https://platform.adobe.io/data/sensei/mlServices?mlInstanceId={MLINSTANCE_ID} \
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
    "detail": "MLServices deletion was successful"
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

### Python CPU and GPU configurations

Python Engines have the ability to choose between either a CPU or a GPU for its training or scoring purposes, and is defined on an [MLInstance](./mlinstances.md) as a task specification (`tasks > specification`).

The following is an example configuration that specifies using a CPU for training and a GPU for scoring:

```json
[
    {
        "name": "train",
        "parameters": [
            {
                "key": "training parameter",
                "value": "parameter value"
            }    
        ],
        "specification": {
            "type": "ContainerTaskSpec",
            "cpus": "1"
        }
    },
    {
        "name": "score",
        "parameters": [
            {
                "key": "scoring parameter",
                "value": "parameter value" 
            }
        ],
        "specification": {
            "type": "ContainerTaskSpec",
            "gpus": "1"
        }
    }
]
```

>[!NOTE] The values of `cpus` and `gpus` does not signify the number of CPUs or GPUs, but rather the number of physical machines. These values are permissibly `"1"` and will throw an exception otherwise.

### PySpark and Spark resource configurations

PySpark and Spark Engines have the ability to modify computational resources for training and scoring purposes, these resources are described in the following table:

| Resource | Description | Type |
| -------- | ----------- | ---- |
| driverMemory | Memory for driver in megabytes | int |
| driverCores | Number of cores used by driver | int |
| executorMemory | Memory for executor in megabytes | int |
| executorCores | Number of cores used by executor | int |
| numExecutors | Number of executors | int |

Resources can be specified on an [MLInstance](./mlinstances.md) as either (A) individual training or scoring parameters, or (B) within an additional specifications object (`specification`). For example, the following resource configurations are the same for both training and scoring:

```json
[
    {
        "name": "train",
        "parameters": [
            {
                "key": "driverMemory",
                "value": "2048"
            },
            {
                "key": "driverCores",
                "value": "1"
            },
            {
                "key": "executorMemory",
                "value": "2048"
            },
            {
                "key": "executorCores",
                "value": "2"
            },
            {
                "key": "numExecutors",
                "value": "3"
            }
        ]
    },
    {
        "name": "score",
        "parameters": [
            {
                "key": "scoring parameter",
                "value": "parameter value"
            }
        ],
        "specification": {
            "type": "SparkTaskSpec",
            "name": "Spark Task name",
            "className": "Class name",
            "driverMemoryInMB": 2048,
            "driverCores": 1,
            "executorMemoryInMB": 2048,
            "executorCores": 2,
            "numExecutors": 3
        }
    }
]
```