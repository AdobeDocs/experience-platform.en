---
keywords: Experience Platform;publish a model;Data Science Workspace;popular topics
solution: Experience Platform
title: Publish a model as a service (API)
topic: Tutorial
---

# Publish a model as a service (API)

- [Prerequisite](#prerequisite)
- [Key Terms](#key-terms)
- [API Workflow](#api-workflow)
- [Creating a ML Service with an existing training Experiment Run and scheduled scoring](#creating-a-ml-service-with-an-existing-training-experiment-run-and-scheduled-scoring)
- [Creating a ML Service from an existing ML Instance](#creating-a-ml-service-from-an-existing-ml-instance)
    - [ML Service with scheduled Experiment for scoring](#ml-service-with-scheduled-experiment-for-scoring)
    - [ML Service with scheduled Experiments for training and scoring](#ml-service-with-scheduled-experiments-for-training-and-scoring)
- [Retrieving ML Services](#retrieving-ml-services)
- [Schedule training or scoring](#schedule-training-or-scoring)

## Prerequisite

- Follow this [Tutorial](../../tutorials/authentication.md) for authorization to start making API calls.
From the tutorial you should now have the following information:
  - `{ACCESS_TOKEN}`: Your specific bearer token value provided after authentication.
  - `{IMS_ORG}`: Your IMS org credentials found in your unique Adobe Experience Platform integration.
  - `{API_KEY}`: Your specific API key value found in your unique Adobe Experience Platform integration.
- This tutorial requires existing ML Engine, ML Instance, and Experiment entities. Refer to this [Tutorial](./import-packaged-recipe-api.md) on creating ML Engine, ML Instance, or Experiment entities.
- For information on API endpoints and requests mentioned in this tutorial, check out the complete [Sensei Machine Learning API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/sensei-ml-api.yaml).

## Key Terms

Some common terminology used in this tutorial:

Term | Definition
--- | ---
**Machine Learning Instance (ML Instance)** | The conceptual entity that is an Instance of a Sensei Engine for a particular tenant made up of specific data, parameters, and Sensei code.
**Experiment** | An umbrella entity for holding training Experiment Runs, scoring Experiment Runs, or both.
**Scheduled Experiment** | A term to describe the automation of training or scoring Experiment Runs, governed by a user defined schedule.
**Experiment Run** | A particular instance of training or scoring Experiments. Multiple Experiment Runs from a particular Experiment may differ in dataset values used for training or scoring.
**Trained Model** | A machine learning model created by the process of experimenting and feature engineering before arriving at a validated, evaluated, and finalized model.
**Published Model** | A finalized and versioned model arrived at after training, validation, and evaluation.
**Machine Learning Service (ML Service)** | A ML Instance deployed as a Service to support on demand request for training and scoring via an endpoint. Note that a ML Service can also be created using existing trained experiment runs. |


## API Workflow

This tutorial will go over creating, retrieving, and updating a ML Service.

- [Creating a ML Service with an existing training Experiment Run and scheduled scoring](#creating-a-ml-service-with-an-existing-training-experiment-run-and-scheduled-scoring)
- [Creating a ML Service from an existing ML Instance](#creating-a-ml-service-from-an-existing-ml-instance)
    - [ML Service with scheduled Experiment for scoring](#ml-service-with-scheduled-experiment-for-scoring)
    - [ML Service with scheduled Experiments for training and scoring](#ml-service-with-scheduled-experiments-for-training-and-scoring)
- [Retrieving ML Services](#retrieving-ml-services)
- [Schedule training or scoring](#schedule-training-or-scoring)

## Creating a ML Service with an existing training Experiment Run and scheduled scoring

When you publish a training Experiment Run as a ML Service, you can schedule scoring by providing details for the scoring Experiment Run in `scoringSchedule` of your {JSON_PAYLOAD}. This results in the creation of a scheduled Experiment entity for scoring. Ensure you have the `mlInstanceId`, `trainingExperimentId`, `trainingExperimentRunId`, `scoringDataSetId`, and that they exist and are valid values.

To start, make a `POST` request to `/mlServices`. A sample curl command is shown below:

**Request**

```SHELL
curl -X POST 
  https://platform.adobe.io/data/sensei/mlServices
  -H 'Authorization: {ACCESS_TOKEN}' 
  -H 'x-api-key: {API_KEY}' 
  -H 'x-gw-ims-org-id: {IMS_ORG}' 
  -d '{JSON_PAYLOAD}'
```
- `{API_KEY}` : Your specific API key value found in your unique Adobe Experience Platform integration.  
- `{IMS_ORG}` :  Your IMS organization ID can be found under the integration details in the Adobe I/O Console.  
- `{ACCESS_TOKEN}` : Your specific bearer token value provided after authentication.  
- `{JSON_PAYLOAD}` : An example JSON payload format can be seen below:

```JSON
{
  "name": "string",
  "description": "string",
  "mlInstanceId": "string",
  "trainingExperimentId": "string",
  "trainingExperimentRunId": "string",
  "scoringDataSetId": "string",
  "scoringTimeframe": "integer",
  "scoringSchedule": {
    "startTime": "2019-03-13T00:00",
    "endTime": "2019-03-14T00:00",
    "cron": "30 * * * *"
  }
}
```

- `mlInstanceId` : Existing ML Instance identification, the training Experiment Run used to create the ML Service should correspond to this particular ML Instance.
- `trainingExperimentId` : Experiment identification corresponding to the ML Instance identification.
- `trainingExperimentRunId` : A particular training Experiment Run to be used for publishing the ML Service.
- `scoringDataSetId` : Identification referring to the specific data set to be used for scheduled scoring Experiment Runs.
- `scoringTimeframe` : An Integer value representing minutes for filtering data to be used for scoring Experiment Runs. For example, a value of `"10080"` means data from the past 10080 minutes or 168 hours will be used for each scheduled scoring Experiment Run. Note that a value of `"0"` will not filter data, all data within the dataset is used for scoring.
- `scoringSchedule` : Contains details regarding scheduled scoring Experiment Runs.
- `startTime` : definition.
- `endTime` : definition.
- `cron` : definition.

**Response**

```JSON
{
  "id": "string",
  "name": "string",
  "description": "string",
  "mlInstanceId": "string",
  "trainingExperimentId": "string",
  "trainingExperimentRunId": "string",
  "scoringExperimentId": "string",
  "scoringDataSetId": "string",
  "scoringTimeframe": "integer",
  "scoringSchedule": {
    "startTime": "2019-03-13T00:00",
    "endTime": "2019-03-14T00:00",
    "cron": "30 * * * *"
  },
  "created": "2019-04-08T14:45:25.981Z",
  "updated": "2019-04-08T14:45:25.981Z"
}
```

From the JSON response, the key `scoringExperimentId` with it's corresponding value suggests that a new scoring Experiment was created, along with the Experiment schedule which you provided in the `POST` request. The `id` key in the response uniquely identifies the ML Service that was created.

## Creating a ML Service from an existing ML Instance

Depending on your specific use case and requirements, creating a ML Service with a ML Instance is flexible in terms of scheduling training and scoring Experiment Runs. This tutorial will go through the specific cases where:

- [You do not require scheduled training, but require scheduled scoring.](#ml-service-with-scheduled-experiment-for-scoring)
- [You require scheduled Experiment Runs for both training and scoring.](#ml-service-with-scheduled-experiments-for-training-and-scoring)

Note that a ML Service can be created using a ML Instance without scheduling any training or scoring Experiments. Such ML Service will create ordinary Experiment entities and a single Experiment Run for training and scoring.

### ML Service with scheduled Experiment for scoring

Creating an ML Service by publishing a ML Instance with scheduled Experiment Runs for scoring will result in the creation of an ordinary Experiment entity for training. The resulting training Experiment Run that is generated will be used for all scheduled scoring Experiment Runs. Ensure you have the `mlInstanceId`, `trainingDataSetId`, and `scoringDataSetId` required for the creation of the ML Service, and that they exist and are valid values.

To start, make a `POST` request to `/mlServices`. A sample curl command is shown below:

**Request**

```SHELL
curl -X POST 
  https://platform.adobe.io/data/sensei/mlServices
  -H 'Authorization: {ACCESS_TOKEN}' 
  -H 'x-api-key: {API_KEY}' 
  -H 'x-gw-ims-org-id: {IMS_ORG}' 
  -d '{JSON_PAYLOAD}'
```

- `{API_KEY}` : Your specific API key value found in your unique Adobe Experience Platform integration.  
- `{IMS_ORG}` :  Your IMS organization ID can be found under the integration details in the Adobe I/O Console.  
- `{ACCESS_TOKEN}` : Your specific bearer token value provided after authentication.  
- `{JSON_PAYLOAD}` : An example JSON payload format can be seen below:

```JSON
{
  "name": "Service name",
  "description": "Service description",
  "mlInstanceId": "c4155146-b38f-4a8b-86d8-1de3838c8d87",
  "trainingDataSetId": "5c5af39c73fcec153117eed1",
  "trainingTimeframe": "10000",
  "scoringDataSetId": "5c5af39c73fcec153117eed1",
  "scoringTimeframe": "20000",
  "scoringSchedule": {
    "startTime": "2019-04-09T00:00",
    "endTime": "2019-04-10T00:00",
    "cron": "10 * * * *"
  }
}
```

| JSON key | Description |
| --- | --- |
| **`mlInstanceId`** | Existing ML Instance identification, representing the ML Instance used to create the ML Service. |
| **`trainingDataSetId`** | Identification referring to the specific data set to be used for training Experiment. |
| **`trainingTimeframe`** | An Integer value representing minutes for filtering data to be used for training Experiment. For example, a value of `"10080"` means data from the past 10080 minutes or 168 hours will be used for the training Experiment Run. Note that a value of `"0"` will not filter data, all data within the dataset is used for training. |
| **`scoringDataSetId`** | Identification referring to the specific data set to be used for scheduled scoring Experiment Runs. |
| **`scoringTimeframe`** | An Integer value representing minutes for filtering data to be used for scoring Experiment Runs. For example, a value of `"10080"` means data from the past 10080 minutes or 168 hours will be used for each scheduled scoring Experiment Run. Note that a value of `"0"` will not filter data, all data within the dataset is used for scoring. |
| **`scoringSchedule`** | Contains details regarding scheduled scoring Experiment Runs. |

**Response**

```JSON
{
  "id": "string",
  "name": "string",
  "description": "string",
  "mlInstanceId": "string",
  "trainingExperimentId": "string",
  "trainingDataSetId": "string",
  "trainingTimeframe": "integer",
  "scoringExperimentId": "string",
  "scoringDataSetId": "string",
  "scoringTimeframe": "integer",
  "scoringSchedule": {
    "startTime": "2019-04-09T00:00",
    "endTime": "2019-04-10T00:00",
    "cron": "10 * * * *"
  },
  "created": "2019-04-09T08:58:10.956Z",
  "updated": "2019-04-09T08:58:10.956Z"
}
```

From the `JSON` response, the keys `trainingExperimentId` and `scoringExperimentId` suggests that a new training and scoring Experiment entity was created for this ML Service. The presence of the `scoringSchedule` object refers to details on scoring Experiment Run schedule. The `id` key in the response refers to the ML Service you have just created.

### ML Service with scheduled Experiments for training and scoring

To publish an existing ML Instance as a ML Service with scheduled training and scoring Experiment Runs, you are required to provide both training and scoring schedules. When a ML Service of this configuration is created, scheduled Experiment entities for both training and scoring is also created. Note that training and scoring schedules do not have to be the same. During a scoring job execution, the latest trained model produced by scheduled training Experiment Runs will be fetched and used for the scheduled scoring run.

To create the ML Service, make a `POST` request to `/mlServices` with the `{JSON_PAYLOAD}` representing the ML Service object to be added. Ensure that the `mlInstanceId`, `trainingDataSetId`, and `scoringDataSetId` exists and are valid values.

**Request**

```SHELL
curl -X POST "https://platform-int.adobe.io/data/sensei/mlServices" 
  -H "Authorization: Bearer {ACCESS_TOKEN}" 
  -H "x-api-key: {API_KEY}" 
  -H "x-gw-ims-org-id: {IMS_ORG}" 
  -d "{JSON_PAYLOAD}"
```

- `{API_KEY}` : Your specific API key value found in your unique Adobe Experience Platform integration.  
- `{IMS_ORG}` :  Your IMS organization ID can be found under the integration details in the Adobe I/O Console.  
- `{ACCESS_TOKEN}` : Your specific bearer token value provided after authentication.  
- `{JSON_PAYLOAD}` : An example JSON payload format can be seen below:

```JSON
{
  "name": "string",
  "description": "string",
  "mlInstanceId": "string",
  "trainingDataSetId": "string",
  "trainingTimeframe": "string",
  "scoringDataSetId": "string",
  "scoringTimeframe": "string",
  "trainingSchedule": {
    "startTime": "2019-04-09T00:00",
    "endTime": "2019-04-10T00:00",
    "cron": "10 * * * *"
  },
  "scoringSchedule": {
    "startTime": "2019-04-09T00:00",
    "endTime": "2019-04-10T00:00",
    "cron": "10 * * * *"
  }
}
```

| JSON key | Description |
| --- | --- |
| **`mlInstanceId`** | Existing ML Instance identification, representing the ML Instance used to create the ML Service. |
| **`trainingDataSetId`** | Identification referring to the specific data set to be used for training Experiment. |
| **`trainingTimeframe`** | An Integer value representing minutes for filtering data to be used for training Experiment. For example, a value of `"10080"` means data from the past 10080 minutes or 168 hours will be used for the training Experiment Run. Note that a value of `"0"` will not filter data, all data within the dataset is used for training. |
| **`scoringDataSetId`** | Identification referring to the specific data set to be used for scheduled scoring Experiment Runs. |
|**`scoringTimeframe`** | An Integer value representing minutes for filtering data to be used for scoring Experiment Runs. For example, a value of `"10080"` means data from the past 10080 minutes or 168 hours will be used for each scheduled scoring Experiment Run. Note that a value of `"0"` will not filter data, all data within the dataset is used for scoring. |
| **`trainingSchedule`** | Contains details regarding scheduled training Experiment Runs. |
| **`scoringSchedule`** | Contains details regarding scheduled scoring Experiment Runs. |

**Response**

```JSON
{
  "id": "string",
  "name": "string",
  "description": "string",
  "mlInstanceId": "string",
  "trainingExperimentId": "string",
  "trainingDataSetId": "string",
  "trainingTimeframe": "integer",
  "scoringExperimentId": "string",
  "scoringDataSetId": "string",,
  "scoringTimeframe": "integer",
  "trainingSchedule": {
    "startTime": "2019-04-09T00:00",
    "endTime": "2019-04-10T00:00",
    "cron": "10 * * * *"
  },
  "scoringSchedule": {
    "startTime": "2019-04-09T00:00",
    "endTime": "2019-04-10T00:00",
    "cron": "10 * * * *"
  },
  "created": "2019-04-09T08:58:10.956Z",
  "updated": "2019-04-09T08:58:10.956Z"
}
```

The addition of `trainingExperimentId` and `scoringExperimentId` in the response body suggests the creation of Experiment entities for both training and scoring. The presence of `trainingSchedule` and `scoringSchedule` suggests that the above mentioned Experiment entities for training and scoring are scheduled Experiments. The `id` key in the response refers to the ML Service you have just created.

## Retrieving ML Services

To retrieve an existing ML Service is as simple as making a `GET` request to `/mlServices` endpoint. Ensure to have the ML Service identification for the specific ML Service you are attempting to retrieve.

**Request**

```SHELL
curl -X GET "https://platform.adobe.io/data/sensei/mlServices/{SERVICE_ID}" 
  -H "Authorization: Bearer {ACCESS_TOKEN}" 
  -H "x-api-key: {API_KEY}" 
  -H "x-gw-ims-org-id: {IMS_ORG}" 
```

- `{API_KEY}` : Your specific API key value found in your unique Adobe Experience Platform integration.  
- `{IMS_ORG}` :  Your IMS organization ID can be found under the integration details in the Adobe I/O Console.  
- `{ACCESS_TOKEN}` : Your specific bearer token value provided after authentication.  

**Response**

```JSON
{
  "id": "string",
  "name": "string",
  "description": "string",
  "mlInstanceId": "string",
  "trainingExperimentId": "string",
  "trainingDataSetId": "string",
  "trainingTimeframe": "integer",
  "scoringExperimentId": "string",
  "scoringDataSetId": "string",
  "scoringTimeframe": "integer",
  "trainingSchedule": {
    "startTime": "2019-04-09T00:00",
    "endTime": "2019-04-10T00:00",
    "cron": "10 * * * *"
  },
  "scoringSchedule": {
    "startTime": "2019-04-09T00:00",
    "endTime": "2019-04-10T00:00",
    "cron": "10 * * * *"
  },
  "created": "2019-05-13T23:46:03.478Z",
  "updated": "2019-05-13T23:46:03.478Z"
}
```

The JSON response represents the ML Service object. This object is equivalent to the response for when the ML Service is created. Note that retrieving different ML Services may return a response with more or less key-value pairs. The above response is a representation of a [ML Service with both scheduled training and scoring Experiment Runs](#ml-service-with-scheduled-experiments-for-training-and-scoring).


## Schedule training or scoring

Suppose you want to schedule scoring and training on a ML Service that has already been published, you can do so by updating the existing ML Service with a `PUT` request on `/mlServices`. Ensure to have the ML Service identification you would like to update. For your reference, [retrieving the ML Service](#retrieving-ml-services) you want to update might be a useful first step.

**Request**

```SHELL
curl -X PUT "https://platform.adobe.io/data/sensei/mlServices/{SERVICE_ID}" 
  -H "Authorization: {ACCESS_TOKEN}" 
  -H "x-api-key: {API_KEY}" 
  -H "x-gw-ims-org-id: {IMS_ORG}" 
  -d "{JSON_PAYLOAD}"
```

- `{SERVICE_ID}` : Unique identification referring to the ML Service you want to update.
- `{API_KEY}` : Your specific API key value found in your unique Adobe Experience Platform integration.  
- `{IMS_ORG}` :  Your IMS organization ID can be found under the integration details in the Adobe I/O Console.  
- `{ACCESS_TOKEN}` : Your specific bearer token value provided after authentication.  
- `{JSON_PAYLOAD}` : An example JSON payload format can be seen below:

```JSON
{
  "name": "string",
  "description": "string",
  "mlInstanceId": "string",
  "trainingExperimentId": "string",
  "trainingDataSetId": "string",
  "trainingTimeframe": "integer",
  "scoringExperimentId": "string",
  "scoringDataSetId": "string",
  "scoringTimeframe": "integer",
  "trainingSchedule": {
    "startTime": "2019-04-09T00:00",
    "endTime": "2019-04-11T00:00",
    "cron": "20 * * * *"
  },
  "scoringSchedule": {
    "startTime": "2019-04-09T00:00",
    "endTime": "2019-04-11T00:00",
    "cron": "20 * * * *"
  }
}
```

Scheduling training and scoring can be done by adding the `trainingSchedule` and `scoringSchedule` key with their respective `startTime`, `endTime`, and `cron` keys. 

>[!NOTE] that `PUT` requests on `mlServices` allows you to modify Services with existing scheduled experiment runs. Please **Do not** attempt to modify the `startTime` on existing scheduled training and scoring jobs. If the `startTime` must be modified, consider publishing the same Model and rescheduling training and scoring jobs.

**Response**

The response will be the `{JSON_PAYLOAD}` but with extra `id`, `created`, and `updated` keys in the object.

```JSON
{
  "id": "string",
  "name": "string",
  "description": "string",
  "mlInstanceId": "string",
  "trainingExperimentId": "string",
  "trainingDataSetId": "string",
  "trainingTimeframe": "integer",
  "scoringExperimentId": "string",
  "scoringDataSetId": "string",
  "scoringTimeframe": "integer",
  "trainingSchedule": {
    "startTime": "2019-04-09T00:00",
    "endTime": "2019-04-11T00:00",
    "cron": "20 * * * *"
  },
  "scoringSchedule": {
    "startTime": "2019-04-09T00:00",
    "endTime": "2019-04-11T00:00",
    "cron": "20 * * * *"
  },
  "created": "2019-04-09T08:58:10.956Z",
  "updated": "2019-04-09T09:43:55.563Z"
}
```
