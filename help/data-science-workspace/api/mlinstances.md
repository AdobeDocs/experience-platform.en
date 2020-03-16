---
keywords: Experience Platform;developer guide;endpoint;Data Science Workspace;popular topics
solution: Experience Platform
title: MLInstances
topic: Developer guide
---

# MLInstances

An MLInstance is a pairing of an existing [Engine](./engines.md) with an appropriate set of configurations that defines any training parameters, scoring parameters, or hardware resource configurations.

This developer guide provides steps to help you start using the [Sensei Machine Learning API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/sensei-ml-api.yaml) `/mlInstances` endpoint and demonstrates API calls for performing CRUD operations for the following:

* [Create an MLInstance](#create-an-mlinstance)
* [Retrieve a list of MLInstances](#retrieve-a-list-of-mlinstances)
* [Retrieve a specific MLInstance](#retrieve-a-specific-mlinstance)
* [Update an MLInstance](#update-an-mlinstance)
* [Delete an MLInstance](#delete-an-mlinstance)
* [Delete MLInstances by Engine ID](#delete-mlinstances-by-engine-id)

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

### Create an MLInstance

You can create an MLInstance by performing a POST request while providing a request payload consisting of a valid Engine ID (`{ENGINE_ID}`) and an appropriate set of default configurations. If the Engine ID references a PySpark or Spark Engine then you have the ability to configure the amount of computation resources such as the number of cores or the amount of memory. If a Python Engine is referenced then you can choose between using either a CPU or GPU for training and scoring purposes. Refer to the appendix sections on [PySpark and Spark resource configurations](#pyspark-and-spark-resource-configurations) and [Python CPU and GPU configuration](#python-cpu-and-gpu-configurations) for more information.

#### API Format

```http
POST /mlInstances
```

#### Request

```shell
curl -X POST \
    https://platform.adobe.io/data/sensei/mlInstances \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H 'content-type: application/vnd.adobe.platform.sensei+json;profile=mlInstance.v1.json' \
    -d '{
        "name": "A name for this MLInstance",
        "description": "A description for this MLInstance",
        "engineId": "{ENGINE_ID}",
        "tasks": [
            {
                "name": "train",
                "parameters": [
                    {
                        "key": "training parameter",
                        "value": "parameter value"
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
                ]
            },
            {
                "name": "fp",
                "parameters": [
                    {
                        "key": "feature pipeline parameter",
                        "value": "parameter value"
                    }
                ]
            }
        ],
    }'
```

*   `name`: The desired name for the MLInstance. The Model corresponding to this MLInstance will inherit this value to be displayed in the UI as the Model's name.
*   `description`: An optional description for the MLInstance. The Model corresponding to this MLInstance will inherit this value to be displayed in UI as the Model's description. This property is required. If you do not want to provide a description, set its value to be an empty string.
*   `engineId`: The ID of an existing Engine.
*   `tasks`: A set of configurations for training, scoring, or feature pipelines.

#### Response

A successful response returns a payload containing the details of the newly created MLInstance including its unique identifier (`id`).

```json
{
    "id": "{MLINSTANCE_ID}",
    "name": "A name for this MLInstance",
    "description": "A description for this MLInstance",
    "engineId": "{ENGINE_ID}",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "userId": "Jane_Doe@AdobeID"
    },
    "updated": "2019-01-01T00:00:00.000Z",
    "tasks": [
        {
            "name": "train",
            "parameters": [
                {
                    "key": "training parameter",
                    "value": "parameter value"
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
            ]
        },
        {
            "name": "fp",
            "parameters": [
                {
                    "key": "feature pipeline parameter",
                    "value": "parameter value"
                }
            ]
        }
    ]
}
```

### Retrieve a list of MLInstances

You can retrieve a list of MLInstances by performing a single GET request. To help filter results, you can specify query parameters in the request path. For a list of available queries, refer to the appendix section on [query parameters for asset retrieval](#query-parameters-for-asset-retrieval).

#### API Format

```http
GET /mlInstances
GET /mlInstances?parameter_1=value_1
GET /mlInstances?parameter_1=value_1&parameter_2=value_2
```

#### Request

```shell
curl -X GET \
    https://platform.adobe.io/data/sensei/mlInstances \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns a list of MLInstances and their details.

```json
{
    "children": [
        {
            "id": "{MLINSTANCE_ID}",
            "name": "A name for this MLInstance",
            "description": "A description for this MLInstance",
            "engineId": "{ENGINE_ID}",
            "created": "2019-01-01T00:00:00.000Z",
            "createdBy": {
                "displayName": "Jane Doe",
                "userId": "Jane_Doe@AdobeID"
            },
            "updated": "2019-01-01T00:00:00.000Z"
        },
        {
            "id": "{MLINSTANCE_ID}",
            "name": "Retail Sales Model",
            "description": "A Model created with the Retail Sales Recipe",
            "engineId": "{ENGINE_ID}",
            "created": "2019-01-01T00:00:00.000Z",
            "createdBy": {
                "displayName": "Jane Doe",
                "userId": "Jane_Doe@AdobeID"
            },
            "updated": "2019-01-01T00:00:00.000Z"
        }
    ],
    "_page": {
        "property": "deleted==false",
        "totalCount": 2,
        "count": 2
    }
}
```

### Retrieve a specific MLInstance

You can retrieve the details of a specific MLInstance by performing a GET request that includes the ID of the desired MLInstance in the request path.

#### API Format

```http
GET /mlInstances/{MLINSTANCE_ID}
```

*   `{MLINSTANCE_ID}`: The ID of the desired MLInstance.

#### Request

```shell
curl -X GET \
    https://platform.adobe.io/data/sensei/mlInstances/{MLINSTANCE_ID} \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

#### Response

A successful response returns the details of the MLInstance.

```json
{
    "id": "{MLINSTANCE_ID}",
    "name": "A name for this MLInstance",
    "description": "A description for this MLInstance",
    "engineId": "{ENGINE_ID}",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "displayName": "Jane Doe",
        "userId": "Jane_Doe@AdobeID"
    },
    "updated": "2019-01-01T00:00:00.000Z",
    "tasks": [
        {
            "name": "train",
            "parameters": [
                {
                    "key": "training parameter",
                    "value": "parameter value"
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
            ]
        },
        {
            "name": "fp",
            "parameters": [
                {
                    "key": "feature pipeline parameter",
                    "value": "parameter value"
                }
            ]
        }
    ]
}
```

### Update an MLInstance

You can update an existing MLInstance by overwriting its properties through a PUT request that includes the target MLInstance's ID in the request path and providing a JSON payload containing updated properties.

>[!TIP] In order to ensure the success of this PUT request, it is suggested that first you perform a GET request to [retrieve the MLInstance by ID](#retrieve-an-mlinstance-by-id). Then, modify and update the returned JSON object and apply the entirety of the modified JSON object as the payload for the PUT request.

The following sample API call will update an MLInstance's training and scoring parameters while having these properties initially:

```json
{
    "name": "A name for this MLInstance",
    "description": "A description for this MLInstance",
    "engineId": "00000000-0000-0000-0000-000000000000",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "displayName": "Jane Doe",
        "userId": "Jane_Doe@AdobeID"
    },
    "tasks": [
        {
            "name": "train",
            "parameters": [
                {
                    "key": "learning_rate",
                    "value": "0.3"
                }
            ]
        },
        {
            "name": "score",
            "parameters": [
                {
                    "key": "output_dataset_id",
                    "value": "output-dataset-000"
                }
            ]
        }
    ]
}
```

#### API Format

```http
PUT /mlInstances/{MLINSTANCE_ID}
```

*   `{MLINSTANCE_ID}`: A valid MLInstance ID.

#### Request

```shell
curl -X PUT \
    https://platform.adobe.io/data/sensei/mlInstances/{MLINSTANCE_ID} \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'content-type: application/vnd.adobe.platform.sensei+json;profile=mlInstance.v1.json' \
    -d '{
        "name": "A name for this MLInstance",
        "description": "A description for this MLInstance",
        "engineId": "00000000-0000-0000-0000-000000000000",
        "created": "2019-01-01T00:00:00.000Z",
        "createdBy": {
            "displayName": "Jane Doe",
            "userId": "Jane_Doe@AdobeID"
        },
        "tasks": [
            {
                "name": "train",
                "parameters": [
                    {
                        "key": "learning_rate",
                        "value": "0.5"
                    }
                ]
            },
            {
                "name": "score",
                "parameters": [
                    {
                        "key": "output_dataset_id",
                        "value": "output-dataset-001"
                    }
                ]
            }
        ]
    }'
```

#### Response

A successful response returns a payload containing the MLInstance's updated details.

```json
{
    "id": "{MLINSTANCE_ID}",
    "name": "A name for this MLInstance",
    "description": "A description for this MLInstance",
    "engineId": "00000000-0000-0000-0000-000000000000",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "displayName": "Jane Doe",
        "userId": "Jane_Doe@AdobeID"
    },
    "updated": "2019-01-02T00:00:00.000Z",
    "tasks": [
        {
            "name": "train",
            "parameters": [
                {
                    "key": "learning_rate",
                    "value": "0.5"
                }
            ]
        },
        {
            "name": "score",
            "parameters": [
                {
                    "key": "output_dataset_id",
                    "value": "output-data-set-001"
                }
            ]
        }
    ]
}
```

### Delete MLInstances by Engine ID

You can delete all MLInstances sharing the same Engine by performing a DELETE request that includes the Engine ID as a query parameter.

#### API Format

```http
DELETE /mlInstances?engineId={ENGINE_ID}
```

*   `{ENGINE_ID}`: A valid Engine ID.

#### Request

```shell
curl -X DELETE \
    https://platform.adobe.io/data/sensei/mlInstances?engineId={ENGINE_ID} \
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
    "detail": "MLInstances successfully deleted"
}
```

### Delete an MLInstance

You can delete a single MLInstance by performing a DELETE request that includes the target MLInstance's ID in the request path.

#### API Format

```http
DELETE /mlInstances/{MLINSTANCE_ID}
```

*   `{MLINSTANCE_ID}`: A valid MLInstance ID.

#### Request

```shell
curl -X DELETE \
    https://platform.adobe.io/data/sensei/mlInstances/{MLINSTANCE_ID} \
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
    "detail": "MLInstance deletion was successful"
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

Python Engines have the ability to choose between either a CPU or a GPU for its training or scoring purposes, and is defined on an [MLInstance](#mlinstance) as a task specification (`tasks > specification`).

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

>   **Note:** The values of `cpus` and `gpus` does not signify the number of CPUs or GPUs, but rather the number of physical machines. These values are permissibly `"1"` and will throw an exception otherwise.

### PySpark and Spark resource configurations

PySpark and Spark Engines have the ability to modify computational resources for training and scoring purposes, these resources are described in the following table:

| Resource | Description | Type |
| -------- | ----------- | ---- |
| driverMemory | Memory for driver in megabytes | int |
| driverCores | Number of cores used by driver | int |
| executorMemory | Memory for executor in megabytes | int |
| executorCores | Number of cores used by executor | int |
| numExecutors | Number of executors | int |

Resources can be specified on an [MLInstance](#mlinstance) as either (A) individual training or scoring parameters, or (B) within an additional specifications object (`specification`). For example, the following resource configurations are the same for both training and scoring:

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