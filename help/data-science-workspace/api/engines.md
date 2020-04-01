---
keywords: Experience Platform;developer guide;endpoint;Data Science Workspace;popular topics
solution: Experience Platform
title: Engines
topic: Developer guide
---

# Engines

Engines are the foundations for machine learning Models in Data Science Workspace. They contain machine learning algorithms that solve specific problems, feature pipelines to perform feature engineering, or both. 

## Look up your Docker registry

Your Docker registry credentials are required in order to upload a packaged Recipe file, including your Docker host URL, username, and password. You can look up this information by performing the following GET request:

**API Format**

```http
GET /engines/dockerRegistry
```

**Request**

```shell
curl -X GET https://platform.adobe.io/data/sensei/engines/dockerRegistry \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a payload containing the details of your Docker registry including the Docker URL (`host`), username (`username`), and password (`password`).

>[!NOTE] Your Docker password changes whenever your `{ACCESS_TOKEN}` is updated.

```json
{
    "host": "docker_host.azurecr.io",
    "username": "00000000-0000-0000-0000-000000000000",
    "password": "password"
}
```

## Create an Engine using Docker URLs

You can create an Engine by performing a POST request while providing its metadata and a Docker URL that references a Docker image in multipart forms.

**API Format**

```http
POST /engines
```

**Request**

```shell
curl -X POST \
    https://platform.adobe.io/data/sensei/engines \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
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
                    "location": "{DOCKER_URL}",
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


**Response**

A successful response returns a payload containing the details of the newly created Engine including its unique identifier (`id`).

```json
{
    "id": "{ENGINE_ID}",
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
                "location": "{DOCKER_URL}",
                "name": "An additional name for the Docker image",
                "executionType": "Python",
                "packagingType": "docker"
            }
        }
    }
}
```

## Create an Engine using binary artifacts

You can create an Engine using local `.jar` or `.egg` binary artifacts by performing a POST request while providing its meta data and the artifact's path in multipart forms.

**API Format**

```http
POST /engines
```

**Request**

```shell
curl -X POST \
    https://platform.adobe.io/data/sensei/engines \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'content-type: multipart/form-data' \
    -F 'engine={
        "name": "A name for this Engine",
        "description": "A description for this Engine",
        "algorithm": "Classification",
        "type": "PySpark",
    }' \
    -F 'defaultArtifact=@path/to/binary/artifact/file.egg'
```

| Property | Description |
| --- | --- |
| `name` | The desired name for the Engine. The Recipe corresponding to this Engine will inherit this value to be displayed in the UI as the Recipe's name. |
| `description` | An optional description for the Engine. The Recipe corresponding to this Engine will inherit this value to be displayed in UI as the Recipe's description. This property is required. If you do not want to provide a description, set its value to be an empty string. |
| `algorithm` | A string that specifies the type of machine learning algorithm. Supported algorithm types include "Classification", "Regression", or "Custom". |
| `type` | The execution type of the Engine. This value corresponds to the language in which the binary artifact is built upon and can be either "PySpark" or "Spark". |


**Response**

A successful response returns a payload containing the details of the newly created Engine including its unique identifier (`id`).

```json
{
    "id": "{ENGINE_ID}",
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
                "location": "wasbs://artifact-location.blob.core.windows.net/Engine_ID/default.egg",
                "name": "file.egg",
                "executionType": "PySpark",
                "packagingType": "egg"
            }
        }
    }
}
```

## Create a feature pipeline Engine using binary artifacts

You can create a feature pipeline Engine using local `.jar` or `.egg` binary artifacts by performing a POST request while providing its meta data and the artifact's paths in multipart forms. A PySpark or Spark Engine has the ability to specify computation resources such as the number of cores or the amount of memory. Please refer to the appendix section on [PySpark and Spark resource configurations](./appendix.md) for more information.

**API Format**

```http
POST /engines
```

**Request**

```shell
curl -X POST \
    https://platform.adobe.io/data/sensei/engines \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'content-type: multipart/form-data' \
    -F 'engine={
        "name": "Feature Pipeline Engine",
        "description": "A feature pipeline Engine",
        "algorithm":"fp",
        "type": "PySpark"
    }' \
    -F 'featurePipelineOverrideArtifact=@path/to/binary/artifact/feature_pipeline.egg' \
    -F 'defaultArtifact=@path/to/binary/artifact/feature_pipeline.egg'
```

| Property | Description |
| --- | --- |
| `name` | The desired name for the Engine. The Recipe corresponding to this Engine will inherit this value to be displayed in the UI as the Recipe's name. |
| `description` | An optional description for the Engine. The Recipe corresponding to this Engine will inherit this value to be displayed in UI as the Recipe's description. This property is required. If you do not want to provide a description, set its value to be an empty string. |
| `algorithm` | A string that specifies the type of machine learning algorithm. Set this value as "fp" to specify this creation to be a Feature Pipeline Engine. |
| `type` | The execution type of the Engine. This value corresponds to the language in which the binary artifacts are built upon and can be either "PySpark" or "Spark". |

**Response**

A successful response returns a payload containing the details of the newly created Engine including its unique identifier (`id`).

```json
{
    "id": "{ENGINE_ID}",
    "name": "Feature Pipeline Engine",
    "description": "A feature pipeline Engine",
    "type": "PySpark",
    "algorithm": "fp",
    "created": "2019-01-01T00:00:00.000Z",
    "createdBy": {
        "userId": "Jane_Doe@AdobeID"
    },
    "updated": "2019-01-01T00:00:00.000Z",
    "artifacts": {
        "default": {
            "image": {
                "location": "wasbs://artifact-location.blob.core.windows.net/Engine_ID/default.egg",
                "name": "file.egg",
                "executionType": "PySpark",
                "packagingType": "egg"
            }
        }
    }
}
```

## Retrieve a list of Engines

You can retrieve a list of Engines by performing a single GET request. To help filter results, you can specify query parameters in the request path. For a list of available queries, refer to the appendix section on [query parameters for asset retrieval](./appendix.md).

**API Format**

```http
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
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a list of Engines and their details.

```json
{
    "children": [
        {
            "id": "{ENGINE_ID}",
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
            "id": "{ENGINE_ID}",
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
            "id": "{ENGINE_ID}",
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

```http
GET /engines/{ENGINE_ID}
```

| Parameter | Description |
| --- | --- |
| `{ENGINE_ID}` | The ID of an existing Engine. |

**Request**

```shell
curl -X GET \
    https://platform.adobe.io/data/sensei/engines/{ENGINE_ID} \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a payload containing the details of the desired Engine.

```json
{
    "id": "{ENGINE_ID}",
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
                "location": "wasbs://artifact-location.blob.core.windows.net/{ENGINE_ID}/default.egg",
                "name": "file.egg",
                "executionType": "PySpark",
                "packagingType": "egg"
            }
        }
    }
}
```

## Update an Engine

You can modify and update an existing Engine by overwriting its properties through a PUT request that includes the target Engine's ID in the request path and providing a JSON payload containing updated properties.

>[!NOTE] In order to ensure the success of this PUT request, it is suggested that first you perform a GET request to [retrieve the Engine by ID](#retrieve-specific). Then, modify and update the returned JSON object and apply the entirety of the modified JSON object as the payload for the PUT request.

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

```http
PUT /engines/{ENGINE_ID}
```

| Parameter | Description |
| --- | --- |
| `{ENGINE_ID}` | The ID of an existing Engine. |

**Request**

```shell
curl -X PUT \
    https://platform.adobe.io/data/sensei/engines/{ENGINE_ID} \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
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
    "id": "{ENGINE_ID}",
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

```http
DELETE /engines/{ENGINE_ID}
```

| Parameter | Description |
| --- | --- |
| `{ENGINE_ID}` |  The ID of an existing Engine. |

**Request**

```shell
curl -X DELETE \
    https://platform.adobe.io/data/sensei/engines/{ENGINE_ID} \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
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