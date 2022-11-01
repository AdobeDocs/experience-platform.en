---
keywords: Experience Platform;Score a model;Data Science Workspace;popular topics;sensei machine learning api
solution: Experience Platform
title: Score a Model Using the Sensei Machine Learning API
topic-legacy: tutorial
type: Tutorial
description: This tutorial will show you how to leverage the Sensei Machine Learning APIs to create an Experiment and an Experiment Run.
exl-id: 202c63b0-86d8-4a82-8ec8-d144a8911d08
---
# Score a model using the [!DNL Sensei Machine Learning API]

This tutorial will show you how to leverage the APIs to create an Experiment and an Experiment Run. For a list of all the endpoints in the Sensei Machine Learning API, please refer to [this document](https://developer.adobe.com/experience-platform-apis/references/sensei-machine-learning/).

## Create a scheduled Experiment for scoring

Similar to scheduled Experiments for training, creating a scheduled Experiment for scoring is also done by including a `template` section to the body parameter. Additionally, the `name` field under `tasks` in the body is set as `score`.

The following is an example of creating an Experiment that will run every 20 minutes starting from `startTime` and will run until `endTime`.

**Request** 

```Shell
curl -X POST \
  https://platform.adobe.io/data/sensei/experiments \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/vnd.adobe.platform.sensei+json;profile=experiment.v1.json' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -d '{JSON_PAYLOAD}'
```

`{ORG_ID}`: Your IMS org credentials found in your unique Adobe Experience Platform integration.  
`{ACCESS_TOKEN}`: Your specific bearer token value provided after authentication.  
`{API_KEY}`: Your specific API key value found in your unique Adobe Experience Platform integration.  
`{JSON_PAYLOAD}`: Experiment Run object to be sent. The example we use in our tutorial is shown here:

```JSON
{
    "name": "Experiment for Retail",
    "mlInstanceId": "{INSTANCE_ID}",
    "template": {
        "tasks": [{
            "name": "score",
            "parameters": [
                {
                    "key": "modelId",
                    "value": "{MODEL_ID}"
                }
            ],
            "specification": {
                "type": "SparkTaskSpec",
                "executorCores": 5,
                "numExecutors": 5
            }
        }],
        "schedule": {
            "cron": "*/20 * * * *",
            "startTime": "2018-07-04",
            "endTime": "2018-07-06"
        }
    }
}
```

`{INSTANCE_ID}`: The ID that represents the MLInstance.  
`{MODEL_ID}`: The ID that represents the trained Model.  

The following is the response after creating the scheduled Experiment.

**Response**

```JSON
{
  "id": "{EXPERIMENT_ID}",
  "name": "Experiment for Retail",
  "mlInstanceId": "{INSTANCE_ID}",
  "created": "2018-11-11T11:11:11.111Z",
  "updated": "2018-11-11T11:11:11.111Z",
  "template": {
    "tasks": [
      {
        "name": "score",
        "parameters": [...],
        "specification": {
          "type": "SparkTaskSpec",
          "executorCores": 5,
          "numExecutors": 5
        }
      }
    ],
    "schedule": {
      "cron": "*\/20 * * * *",
      "startTime": "2018-07-04",
      "endTime": "2018-07-06"
    }
  }
}
```

`{EXPERIMENT_ID}`: The ID that represents the Experiment.  
`{INSTANCE_ID}`: The ID that represents the MLInstance.  


### Create an Experiment Run for scoring

Now with the trained model, we can create an Experiment Run for scoring. The value of the `modelId` parameter is the `id` parameter returned in the GET Model request above.

**Request**

```Shell
curl -X POST \
  https://platform.adobe.io/data/sensei/experiments/{EXPERIMENT_ID}/runs \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/vnd.adobe.platform.sensei+json;profile=experimentRun.v1.json' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -d '{JSON_PAYLOAD}'
```

`{ORG_ID}`: Your IMS org credentials found in your unique Adobe Experience Platform integration.  
`{ACCESS_TOKEN}`: Your specific bearer token value provided after authentication.  
`{API_KEY}`: Your specific API key value found in your unique Adobe Experience Platform integration.  
`{EXPERIMENT_ID}`: The ID corresponding to the Experiment you want to target. This can be found in the response when creating your Experiment.  
`{JSON_PAYLOAD}`: Data to be posted. The example we use in our tutorial is here:

```JSON
{
   "mode":"score",
    "tasks": [
        {
            "name": "score",
            "parameters": [
                {
                    "key": "modelId",
                    "value": "{MODEL_ID}"
                }
            ]
        }
    ]
}
```

`{MODEL_ID}`: The ID corresponding to the Model.  

The response from the Experiment Run creation is shown below:

**Response**

```JSON
{
    "id": "{EXPERIMENT_RUN_ID}",
    "mode": "score",
    "experimentId": "{EXPERIMENT_ID}",
    "created": "2018-01-01T11:11:11.011Z",
    "updated": "2018-01-01T11:11:11.011Z",
    "deleted": false,
    "tasks": [
        {
            "name": "score",
            "parameters": [...]
        }
    ]
}
```

`{EXPERIMENT_ID}`:  The ID corresponding to the Experiment the Run is under.  
`{EXPERIMENT_RUN_ID}`: The ID corresponding to the Experiment Run you just created.  


### Retrieve an Experiment Run status for scheduled Experiment Run

To get Experiment Runs for scheduled Experiments, the query is shown below:

**Request**

```Shell
curl -X GET \
  'https://platform.adobe.io/data/sensei/experiments/{EXPERIMENT_ID}/runs' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}'
```

`{EXPERIMENT_ID}`:  The ID corresponding to the Experiment the Run is under.  
`{ACCESS_TOKEN}`: Your specific bearer token value provided after authentication.  
`{ORG_ID}`: Your IMS org credentials found in your unique Adobe Experience Platform integration.  

Since there are multiple Experiment Runs for a specific Experiment, the response returned will have an array of Run IDs.

**Response**

```JSON
{
    "children": [
        {
            "id": "{EXPERIMENT_RUN_ID}",
            "experimentId": "{EXPERIMENT_ID}",
            "created": "2018-01-01T11:11:11.011Z",
            "updated": "2018-01-01T11:11:11.011Z"
        },
        {
            "id": "{EXPERIMENT_RUN_ID}",
            "experimentId": "{EXPERIMENT_ID}",
            "created": "2018-01-01T11:11:11.011Z",
            "updated": "2018-01-01T11:11:11.011Z"
        }
    ]
}
```

`{EXPERIMENT_RUN_ID}`: The ID corresponding to the Experiment Run.  
`{EXPERIMENT_ID}`:  The ID corresponding to the Experiment the Run is under.  

### Stop and delete a scheduled Experiment

If you want to stop execution of a scheduled Experiment before its `endTime`, this can be done by querying a DELETE request to the `{EXPERIMENT_ID}`

**Request**

```Shell
curl -X DELETE \
  'https://platform.adobe.io/data/sensei/experiments/{EXPERIMENT_ID}' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-gw-ims-org-id: {ORG_ID}'
```

`{EXPERIMENT_ID}`:  The ID corresponding to the Experiment.  
`{ACCESS_TOKEN}`: Your specific bearer token value provided after authentication.  
`{ORG_ID}`: Your IMS org credentials found in your unique Adobe Experience Platform integration.  

>[!NOTE]
>
>The API call will disable creation of new Experiment runs. However, it will not stop execution of already running Experiment Runs.

The following is the Response notifying that the Experiment is successfully deleted.

**Response**

```JSON
{
    "title": "Success",
    "status": 200,
    "detail": "Experiment successfully deleted"
}
```
