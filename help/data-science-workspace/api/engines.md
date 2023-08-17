---
keywords: Experience Platform;developer guide;endpoint;Data Science Workspace;popular topics;engines;sensei machine learning api
solution: Experience Platform
title: Engines API Endpoint
description: Engines are the foundations for machine learning Models in Data Science Workspace. They contain machine learning algorithms that solve specific problems, feature pipelines to perform feature engineering, or both.
exl-id: 7c670abd-636c-47d8-bd8c-5ce0965ce82f
---
# Engines endpoint

Engines are the foundations for machine learning Models in Data Science Workspace. They contain machine learning algorithms that solve specific problems, feature pipelines to perform feature engineering, or both. 

## Look up your Docker registry

>[!TIP]
>
>If you do not have a Docker URL, visit the [Package source files into a recipe](../models-recipes/package-source-files-recipe.md) tutorial for a step-by-step walkthrough on creating a Docker host URL.

Your Docker registry credentials are required in order to upload a packaged Recipe file, including your Docker host URL, username, and password. You can look up this information by performing the following GET request:

**API Format**

```https
GET /engines/dockerRegistry
```

**Request**

```shell
curl -X GET https://platform.adobe.io/data/sensei/engines/dockerRegistry \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a payload containing the details of your Docker registry including the Docker URL (`host`), username (`username`), and password (`password`).

>[!NOTE]
>
>Your Docker password changes whenever your `{ACCESS_TOKEN}` is updated.

```json
{
    "host": "docker_host.azurecr.io",
    "username": "00000000-0000-0000-0000-000000000000",
    "password": "password"
}
```

## Create an Engine using Docker URLs {#docker-image}

You can create an Engine by performing a POST request while providing its metadata and a Docker URL that references a Docker image in multipart forms.

**API Format**

```https
POST /engines
```

**Request Python/R**

```shell
curl -X POST \
    https://platform.adobe.io/data/sensei/engines \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'content-type: multipart/form-data' \
    -F 'engine={
        "name": "A name for this Engine",
        "description": "A description for this Engine",
        "type": "Python",
        "algorithm": "Classification",
        "artifacts": {
            "default": {
                "image": {
                    "location": "v1rsvj32smc4wbs.azurecr.io/ml-featurepipeline-pyspark:1.0",
                    "name": "An additional name for the Docker image",
                    "executionType": "Python"
                }
            }
        }
    }' 
```

| Property | Description |
| --- | --- |
| `name` | The desired name for the Engine. The Recipe corresponding to this Engine will inherit this value to be displayed in the UI as the Recipe's name. |
| `description` | An optional description for the Engine. The Recipe corresponding to this Engine will inherit this value to be displayed in UI as the Recipe's description. This property is required. If you do not want to provide a description, set its value to be an empty string. |
| `type` | The execution type of the Engine. This value corresponds to the language in which the Docker image is built upon and can be either "Python", "R", or "Tensorflow". |
| `algorithm` | A string that specifies the type of machine learning algorithm. Supported algorithm types include "Classification", "Regression", or "Custom". |
| `artifacts.default.image.location` | The location of the Docker image linked to by a Docker URL. |
| `artifacts.default.image.executionType` | The execution type of the Engine. This value corresponds to the language in which the Docker image is built upon and can be either "Python", "R", or "Tensorflow". |

**Request PySpark/Scala**

When making a request for PySpark recipes, the `executionType` and `type` is "PySpark". When making a request for Scala recipes, the `executionType` and `type` is "Spark". The following Scala recipe example uses Spark:

```shell
curl -X POST \
  https://platform.adobe.io/data/sensei/engines \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'content-type: multipart/form-data' \
    -F 'engine={
    "name": "Spark retail sales recipe",
    "description": "A description for this Engine",
    "type": "Spark",
    "mlLibrary":"databricks-spark",
    "artifacts": {
        "default": {
            "image": {
                "name": "modelspark",
                "executionType": "Spark",
                "packagingType": "docker",
                "location": "v1d2cs4mimnlttw.azurecr.io/sarunbatchtest:0.0.1"
            }
        }
    }
}'
```

| Property | Description |
| --- | --- |
| `name` | The desired name for the Engine. The Recipe corresponding to this Engine will inherit this value to be displayed in the UI as the Recipe's name. |
| `description` | An optional description for the Engine. The Recipe corresponding to this Engine will inherit this value to be displayed in UI as the Recipe's description. This property is required. If you do not want to provide a description, set its value to be an empty string. |
| `type` | The execution type of the Engine. This value corresponds to the language in which the Docker image is built upon. The value can be set to Spark or PySpark. |
| `mlLibrary` | A field that is required when creating engines for PySpark and Scala recipes. This field must be set to `databricks-spark`. |
| `artifacts.default.image.location` | The location of the Docker image. Only Azure ACR or Public (unauthenticated) Dockerhub is supported. |
| `artifacts.default.image.executionType` | The execution type of the Engine. This value corresponds to the language in which the Docker image is built upon. This can be either "Spark" or "PySpark". |

**Response**

A successful response returns a payload containing the details of the newly created Engine including its unique identifier (`id`). The following example response is for a Python Engine. All Engine responses follow this format:

```json
{
    "id": "22f4166f-85ba-4130-a995-a2b8e1edde32",
    "name": "A name for this Engine",
    "description": "A description for this Engine",
    "type": "Python",
    "algorithm": "Classification",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "userId": "Jane_Doe@AdobeID"
    },
    "updated": "2019-01-01T00:00:00.000Z",
    "artifacts": {
        "default": {
            "image": {
                "location": "v1rsvj32smc4wbs.azurecr.io/ml-featurepipeline-pyspark:1.0",
                "name": "An additional name for the Docker image",
                "executionType": "Python",
                "packagingType": "docker"
            }
        }
    }
}
```

## Create a feature pipeline Engine using Docker URLs {#feature-pipeline-docker}

You can create a feature pipeline Engine by performing a POST request while providing its metadata and a Docker URL that references a Docker image.

**API format**

```https
POST /engines
```

**Request**

```shell
curl -X POST \
 https://platform.adobe.io/data/sensei/engines \
    -H 'Authorization: Bearer ' \
    -H 'x-gw-ims-org-id: 20655D0F5B9875B20A495E23@AdobeOrg' \
    -H 'Content-Type: application/vnd.adobe.platform.sensei+json;profile=engine.v1.json' \
    -H 'x-api-key: acp_foundation_machineLearning' \
    -H 'Content-Type: text/plain' \
    -F '{
    "type": "PySpark",
    "algorithm":"fp",
    "name": "Feature_Pipeline_Engine",
    "description": "Feature_Pipeline_Engine",
    "mlLibrary": "databricks-spark",
    "artifacts": {
       "default": {
           "image": {
                "location": "v7d1cs2mimnlttw.azurecr.io/ml-featurepipeline-pyspark:0.2.1",
                "name": "datatransformation",
                "executionType": "PySpark",
                "packagingType": "docker"
            },
           "defaultMLInstanceConfigs": [ ...
           ]
       }
   }
}'
```

| Property | Description |
| --- | --- |
| `type` | The execution type of the Engine. This value corresponds to the language in which the Docker image is built upon. The value can be set to Spark or PySpark. |
| `algorithm` | The algorithm being used, set this value to `fp` (feature pipeline). |
| `name` | The desired name for the feature pipeline Engine. The Recipe corresponding to this Engine will inherit this value to be displayed in the UI as the Recipe's name. |
| `description` | An optional description for the Engine. The Recipe corresponding to this Engine will inherit this value to be displayed in UI as the Recipe's description. This property is required. If you do not want to provide a description, set its value to be an empty string. |
| `mlLibrary` | A field that is required when creating engines for PySpark and Scala recipes. This field must be set to `databricks-spark`. |
| `artifacts.default.image.location` | The location of the Docker image. Only Azure ACR or Public (unauthenticated) Dockerhub is supported. |
| `artifacts.default.image.executionType` | The execution type of the Engine. This value corresponds to the language in which the Docker image is built upon. This can be either "Spark" or "PySpark". |
| `artifacts.default.image.packagingType` | The packaging type of the Engine. This value should be set to `docker`. |
| `artifacts.default.defaultMLInstanceConfigs` | Your `pipeline.json` configuration file parameters. |

**Response**

A successful response returns a payload containing the details of the newly created feature pipeline Engine including its unique identifier (`id`). The following example response is for a PySpark feature pipeline Engine.

```json
{
    "id": "88236891-4309-4fd9-acd0-3de7827cecd1",
    "name": "Feature_Pipeline_Engine",
    "description": "Feature_Pipeline_Engine",
    "type": "PySpark",
    "algorithm": "fp",
    "mlLibrary": "databricks-spark",
    "created": "2020-04-24T20:46:58.382Z",
    "updated": "2020-04-24T20:46:58.382Z",
    "deprecated": false,
    "artifacts": {
        "default": {
            "image": {
                "location": "v7d1cs3mimnlttw.azurecr.io/ml-featurepipeline-pyspark:0.2.1",
                "name": "datatransformation",
                "executionType": "PySpark",
                "packagingType": "docker"
            },
        "defaultMLInstanceConfigs": [ ... ]
        }
    }
}
```

## Retrieve a list of Engines

You can retrieve a list of Engines by performing a single GET request. To help filter results, you can specify query parameters in the request path. For a list of available queries, refer to the appendix section on [query parameters for asset retrieval](./appendix.md#query).

**API Format**

```https
GET /engines
GET /engines?parameter_1=value_1
GET /engines?parameter_1=value_1&parameter_2=value_2
```

**Request**

```shell
curl -X GET \
    https://platform.adobe.io/data/sensei/engines \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a list of Engines and their details.

```json
{
    "children": [
        {
            "id": "22f4166f-85ba-4130-a995-a2b8e1edde31",
            "name": "A name for this Engine",
            "description": "A description for this Engine",
            "type": "PySpark",
            "algorithm": "Classification",
            "created": "2019-01-01T00:00:00.000Z",
            "createdBy": {
                "userId": "Jane_Doe@AdobeID"
            },
            "updated": "2019-01-01T00:00:00.000Z"
        },
        {
            "id": "22f4166f-85ba-4130-a995-a2b8e1edde32",
            "name": "A name for this Engine",
            "description": "A description for this Engine",
            "type": "Python",
            "algorithm": "Classification",
            "created": "2019-01-01T00:00:00.000Z",
            "createdBy": {
                "userId": "Jane_Doe@AdobeID"
            },
            "updated": "2019-01-01T00:00:00.000Z"
        },
        {
            "id": "22f4166f-85ba-4130-a995-a2b8e1edde33",
            "name": "Feature Pipeline Engine",
            "description": "A feature pipeline Engine",
            "type": "PySpark",
            "algorithm":"fp",
            "created": "2019-01-01T00:00:00.000Z",
            "createdBy": {
                "userId": "Jane_Doe@AdobeID"
            },
            "updated": "2019-01-01T00:00:00.000Z"
        }
    ],
    "_page": {
        "property": "deleted==false",
        "totalCount": 100,
        "count": 3
    }
}
```

### Retrieve a specific Engine {#retrieve-specific}

You can retrieve the details of a specific Engine by performing a GET request that includes the ID of the desired Engine in the request path.

**API Format**

```https
GET /engines/{ENGINE_ID}
```

| Parameter | Description |
| --- | --- |
| `{ENGINE_ID}` | The ID of an existing Engine. |

**Request**

```shell
curl -X GET \
    https://platform.adobe.io/data/sensei/engines/22f4166f-85ba-4130-a995-a2b8e1edde32 \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a payload containing the details of the desired Engine.

```json
{
    "id": "22f4166f-85ba-4130-a995-a2b8e1edde32",
    "name": "A name for this Engine",
    "description": "A description for this Engine",
    "type": "PySpark",
    "algorithm": "Classification",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "userId": "Jane_Doe@AdobeID"
    },
    "updated": "2019-01-01T00:00:00.000Z",
    "artifacts": {
        "default": {
            "image": {
                "location": "v7d1cs2mimnlttw.azurecr.io/ml-featurepipeline-pyspark:0.2.1",
                "name": "file.egg",
                "executionType": "PySpark",
                "packagingType": "docker"
            }
        }
    }
}
```

## Update an Engine

You can modify and update an existing Engine by overwriting its properties through a PUT request that includes the target Engine's ID in the request path and providing a JSON payload containing updated properties.

>[!NOTE]
>
>In order to ensure the success of this PUT request, it is suggested that first you perform a GET request to [retrieve the Engine by ID](#retrieve-specific). Then, modify and update the returned JSON object and apply the entirety of the modified JSON object as the payload for the PUT request.

The following sample API call will update an Engine's name and description while having these properties initially:

```json
{
    "name": "A name for this Engine",
    "description": "A description for this Engine",
    "type": "Python",
    "algorithm": "Classification",
    "artifacts": {
        "default": {
            "image": {
                "executionType": "Python",
                "packagingType": "docker"
            }
        }
    }
}
```

**API Format**

```https
PUT /engines/{ENGINE_ID}
```

| Parameter | Description |
| --- | --- |
| `{ENGINE_ID}` | The ID of an existing Engine. |

**Request**

```shell
curl -X PUT \
    https://platform.adobe.io/data/sensei/engines/22f4166f-85ba-4130-a995-a2b8e1edde32 \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'content-type: application/vnd.adobe.platform.sensei+json;profile=engine.v1.json' \
    -d '{
        "name": "An updated name for this Engine",
        "description": "An updated description",
        "type": "Python",
        "algorithm": "Classification",
        "artifacts": {
            "default": {
                "image": {
                    "executionType": "Python",
                    "packagingType": "docker"
                }
            }
        }
    }'
```

**Response**

A successful response returns a payload containing the Engine's updated details.

```json
{
    "id": "22f4166f-85ba-4130-a995-a2b8e1edde32",
    "name": "An updated name for this Engine",
    "description": "An updated description",
    "type": "Python",
    "algorithm": "Classification",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "displayName": "Jane Doe",
        "userId": "Jane_Doe@AdobeID"
    },
    "updated": "2019-01-02T00:00:00.000Z",
    "artifacts": {
        "default": {
            "image": {
                "executionType": "Python",
                "packagingType": "docker"
            }
        }
    }
}
```

## Delete an Engine

You can delete an Engine by performing a DELETE request while specifying the target Engine's ID in the request path. Deleting an Engine will cascade delete all MLInstances which reference that Engine, including any Experiments and Experiment runs belonging to those MLInstances.

**API Format**

```https
DELETE /engines/{ENGINE_ID}
```

| Parameter | Description |
| --- | --- |
| `{ENGINE_ID}` |  The ID of an existing Engine. |

**Request**

```shell
curl -X DELETE \
    https://platform.adobe.io/data/sensei/engines/22f4166f-85ba-4130-a995-a2b8e1edde32 \
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
    "detail": "Engine deletion was successful"
}
```
