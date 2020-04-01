---
keywords: Experience Platform;developer guide;endpoint;Data Science Workspace;popular topics
solution: Experience Platform
title: Models
topic: Developer guide
---

# Models

A model is an instance of a machine learning recipe that is trained using historical data and configurations to solve for a business use case.

## Retrieve a list of Models

You can retrieve a list of Model details belonging to all Models by performing a single GET request to /models. By default this list will order itself from oldest created model and limit the results to 25. You may choose to filter results by specifying some query parameters. For a list of available queries, refer to the appendix section on [query parameters for asset retrieval](./appendix.md#query).

**API format**

```http
GET /models
```

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/sensei/models/ \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a payload containing the details of your Models including each Models unique identifier (`id`).

```json
{
    "children": [
        {
            "id": "{MODEL_ID}",
            "name": "A name for this Model",
            "experimentId": "{EXPERIMENT_ID}",
            "experimentRunId": "{EXPERIMENT_RUN_ID}",
            "description": "A description for this Model",
            "modelArtifactUri": "wasb://test-models@mlpreprodstorage.blob.core.windows.net/model-name",
            "created": "2019-01-01T00:00:00.000Z",
            "createdBy": {
                "userId": "Jane_Doe@AdobeID"
            },
            "updated": "2019-01-02T00:00:00.000Z"
       },
        {
            "id": "{MODEL_ID}",
            "name": "Model 2",
            "experimentId": "{EXPERIMENT_ID}",
            "experimentRunId": "{EXPERIMENT_RUN_ID}",
            "description": "A description for Model2",
            "modelArtifactUri": "wasb://test-models@mlpreprodstorage.blob.core.windows.net/model-name",
            "created": "2019-01-01T00:00:00.000Z",
            "createdBy": {
                "userId": "Jane_Doe@AdobeID"
            },
            "updated": "2019-01-02T00:00:00.000Z"
       },
        {
            "id": "{MODEL_ID}",
            "name": "Model 3",
            "experimentId": "{EXPERIMENT_ID}",
            "experimentRunId": "{EXPERIMENT_RUN_ID}",
            "description": "A description for Model3",
            "modelArtifactUri": "wasb://test-models@mlpreprodstorage.blob.core.windows.net/model-name",
            "created": "2019-01-01T00:00:00.000Z",
            "createdBy": {
                "userId": "Jane_Doe@AdobeID"
            },
            "updated": "2019-01-02T00:00:00.000Z"
       },
    ],
    "_page": {
        "property": "deleted==false",
        "count": 3
    }
}
```

| Property | Description |
| --- | --- |
| `id` | The ID corresponding to the Model. |
| `modelArtifactUri` | A URI indicating where the model is stored. The URI ends with the `name` value for the model. |
| `experimentId` | A valid Experiment ID. |
| `experimentRunId` | A valid Experiment Run ID. |

## Retrieve a specific Model

You can retrieve a list of Model details belonging to a particular Model by performing a single GET request and providing a valid Model ID in the request path. To help filter results, you can specify query parameters in the request path. For a list of available queries, refer to the appendix section on [query parameters for asset retrieval](./appendix.md#query).

**API Format**

```http
GET /models/{MODEL_ID}
GET /models/?property=experimentRunID=={EXPERIMENT_RUN_ID}
```

| Parameter | Description |
| --- | --- |
| `{MODEL_ID}` | The identifier of the trained or published Model. |
| `{EXPERIMENT_RUN_ID}` | The identifier of the experiment run. |
  
**Request**

The following request contains a query and retrieves a list of trained Models sharing the same experimentRunID ({EXPERIMENT_RUN_ID}).

```shell
curl -X GET \
  https://platform.adobe.io/data/sensei/models/?property=experimentRunId=={EXPERIMENT_RUN_ID} \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a payload containing the details of your Model including the Models unique identifier (`id`).

```json
{
    "children": [
        {
            "id": "{MODEL_ID}",
            "name": "A name for this Model",
            "experimentId": "{EXPERIMENT_ID}",
            "experimentRunId": "{EXPERIMENT_RUN_ID}",
            "description": "A description for this Model",
            "modelArtifactUri": "wasb://test-models@mlpreprodstorage.blob.core.windows.net/model-name",
            "created": "2019-01-01T00:00:00.000Z",
            "createdBy": {
                "userId": "Jane_Doe@AdobeID"
            },
            "updated": "2019-01-02T00:00:00.000Z"
       }
    ],
    "_page": {
        "property": "experimentRunId=={EXPERIMENT_RUN_ID},deleted==false",
        "count": 1
    }
}
```

| Property | Description |
| --- | --- |
| `id` | The ID corresponding to the Model. |
| `modelArtifactUri` | A URI indicating where the model is stored. The URI ends with the `name` value for the model. |
| `experimentId` | A valid Experiment ID. |
| `experimentRunId` | A valid Experiment Run ID. |

## Update a Model by ID

You can update an existing Model by overwriting its properties through a PUT request that includes the target Model's ID in the request path and providing a JSON payload containing updated properties.

>[!TIP] In order to ensure the success of this PUT request, it is suggested that first you perform a GET request to retrieve the Model by ID. Then, modify and update the returned JSON object and apply the entirety of the modified JSON object as the payload for the PUT request.

**API Format**

```http
PUT /models/{MODEL_ID}
```

| Parameter | Description |
| --- | --- |
| `{MODEL_ID}` | The identifier of the trained or published Model. |
  
**Request**

```shell
curl -X PUT \
  https://platform.adobe.io/data/sensei/models/{MODEL_ID} \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'Content-Type: application/vnd.adobe.platform.sensei+json;profile=mlInstance.v1.json' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -d '{
        "id": "{MODEL_ID}",
        "name": "A name for this Model",
        "experimentId": "{EXPERIMENT_ID}",
        "experimentRunId": "{EXPERIMENT_RUN_ID}",
        "description": "An updated description for this Model",
        "modelArtifactUri": "wasb://test-models@mlpreprodstorage.blob.core.windows.net/model-name",
        "created": "2019-01-01T00:00:00.000Z",
        "createdBy": {
            "userId": "Jane_Doe@AdobeID"
        },
        "updated": "2019-01-02T00:00:00.000Z"
    }'
```

**Response**

A successful response returns a payload containing the Experiment's updated details.

```json
{
        "id": "{MODEL_ID}",
        "name": "A name for this Model",
        "experimentId": "{EXPERIMENT_ID}",
        "experimentRunId": "{EXPERIMENT_RUN_ID}",
        "description": "An updated description for this Model",
        "modelArtifactUri": "wasb://test-models@mlpreprodstorage.blob.core.windows.net/model-name",
        "created": "2019-01-01T00:00:00.000Z",
        "createdBy": {
            "userId": "Jane_Doe@AdobeID"
        },
        "updated": "2019-01-02T00:00:00.000Z"
    }
```

## Delete a Model by ID

You can delete a single Model by performing a DELETE request that includes the target Model's ID in the request path.

**API Format**

```http
DELETE /models/{MODEL_ID}
```

| Parameter | Description |
| --- | --- |
| `{MODEL_ID}` | The identifier of the trained or published Model. |

**Request**

```shell
curl -X DELETE \
  https://platform.adobe.io/data/sensei/models/{MODEL_ID} \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a payload containing a 200 status confirming the deletion of the Model.

```json
{
    "title": "Success",
    "status": 200,
    "detail": "Model deletion was successful"
}
```
