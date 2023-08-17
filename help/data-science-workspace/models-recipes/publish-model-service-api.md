---
keywords: Experience Platform;publish a model;Data Science Workspace;popular topics;sensei machine learning api
solution: Experience Platform
title: Publish a Model as a Service Using the Sensei Machine Learning API
type: Tutorial
description: This tutorial covers the process of publishing a model as a service using the Sensei Machine Learning API.
exl-id: f78b1220-0595-492d-9f8b-c3a312f17253
---
# Publish a model as a service using the [!DNL Sensei Machine Learning API]

This tutorial covers the process of publishing a model as a service using the [[!DNL Sensei Machine Learning API]](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/sensei-ml-api.yaml).

## Getting started

This tutorial requires a working understanding of Adobe Experience Platform Data Science Workspace. Before beginning this tutorial, please review the [Data Science Workspace overview](../home.md) for a high-level introduction to the service.

To follow along with this tutorial, you must have an existing ML Engine, ML Instance, and Experiment. For steps on how to create these in the API, see the tutorial on [importing a packaged recipe](./import-packaged-recipe-api.md).

Finally, before starting this tutorial, please review the [getting started](../api/getting-started.md) section of the developer guide for important information that you need to know in order to successfully make calls to the [!DNL Sensei Machine Learning] API, including the required headers used throughout this tutorial:

- `{ACCESS_TOKEN}`
- `{ORG_ID}`
- `{API_KEY}`

All POST, PUT, and PATCH requests require an additional header:

- Content-Type: application/json

### Key Terms

The following table outlines some common terminology used in this tutorial:

| Term | Definition |
| --- | --- |
| **Machine Learning Instance (ML Instance)** | An instance of a [!DNL Sensei] Engine for a particular tenant, containing specific data, parameters, and [!DNL Sensei] code. |
| **Experiment** | An umbrella entity for holding training Experiment Runs, scoring Experiment Runs, or both. |
| **Scheduled Experiment** | A term to describe the automation of training or scoring Experiment Runs, governed by a user defined schedule. |
| **Experiment Run** | A particular instance of training or scoring Experiments. Multiple Experiment Runs from a particular Experiment may differ in dataset values used for training or scoring. |
| **Trained Model** | A machine learning model created by the process of experimenting and feature engineering before arriving at a validated, evaluated, and finalized model. |
| **Published Model** | A finalized and versioned model arrived at after training, validation, and evaluation. |
| **Machine Learning Service (ML Service)** | A ML Instance deployed as a Service to support on-demand requests for training and scoring using an API endpoint. An ML Service can also be created using existing trained Experiment Runs. |

## Create an ML Service with an existing training Experiment Run and scheduled scoring

When you publish a training Experiment Run as an ML Service, you can schedule scoring by providing details for the scoring Experiment Run the payload of a POST request. This results in the creation of a scheduled Experiment entity for scoring.

**API format**

```http
POST /mlServices
```

**Request**

```SHELL
curl -X POST 
  https://platform.adobe.io/data/sensei/mlServices
  -H 'Authorization: {ACCESS_TOKEN}' 
  -H 'x-api-key: {API_KEY}' 
  -H 'x-gw-ims-org-id: {ORG_ID}'
  -H 'Content-Type: application/json'
  -d '{
        "name": "Service name",
        "description": "Service description",
        "trainingExperimentId": "c4155146-b38f-4a8b-86d8-1de3838c8d87",
        "trainingExperimentRunId": "5c5af39c73fcec153117eed1",
        "scoringDataSetId": "5c5af39c73fcec153117eed1",
        "scoringTimeframe": "20000",
        "scoringSchedule": {
          "startTime": "2019-04-09T00:00",
          "endTime": "2019-04-10T00:00",
          "cron": "10 * * * *"
        }
      }'
```

| Property | Description |
| --- | --- |
| `mlInstanceId` | Existing ML Instance identification, the training Experiment Run used to create the ML Service should correspond to this particular ML Instance. |
| `trainingExperimentId` | Experiment identification corresponding to the ML Instance identification. |
| `trainingExperimentRunId` | A particular training Experiment Run to be used for publishing the ML Service. |
| `scoringDataSetId` | Identification referring to the specific data set to be used for scheduled scoring Experiment Runs. |
| `scoringTimeframe` | An Integer value representing minutes for filtering data to be used for scoring Experiment Runs. For example, a value of `10080` means data from the past 10080 minutes or 168 hours will be used for each scheduled scoring Experiment Run. Note that a value of `0` will not filter data, all data within the dataset is used for scoring. |
| `scoringSchedule` | Contains details regarding scheduled scoring Experiment Runs. |
| `scoringSchedule.startTime` | Datetime indicating when to start scoring. |
| `scoringSchedule.endTime` | Datetime indicating when to start scoring. |
| `scoringSchedule.cron` | Cron value indicating the interval by which to score Experiment Runs. |

**Response**

A successful response returns the details of the newly created ML Service, including its unique `id` and the `scoringExperimentId` for its corresponding scoring Experiment.


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

## Creating an ML Service from an existing ML Instance

Depending on your specific use case and requirements, creating an ML Service with an ML Instance is flexible in terms of scheduling training and scoring Experiment Runs. This tutorial will go through the specific cases where:

- [You do not require scheduled training, but require scheduled scoring.](#ml-service-with-scheduled-experiment-for-scoring)
- [You require scheduled Experiment Runs for both training and scoring.](#ml-service-with-scheduled-experiments-for-training-and-scoring)

Note that an ML Service can be created using an ML Instance without scheduling any training or scoring Experiments. Such ML Services will create ordinary Experiment entities and a single Experiment Run for training and scoring.

### ML Service with scheduled Experiment for scoring {#ml-service-with-scheduled-experiment-for-scoring}

You can create an ML Service by publishing an ML Instance with scheduled Experiment Runs for scoring, which will create an ordinary Experiment entity for training. A training Experiment Run is generated and will be used for all scheduled scoring Experiment Runs. Ensure you have the `mlInstanceId`, `trainingDataSetId`, and `scoringDataSetId` required for the creation of the ML Service, and that they exist and are valid values.

**API format**

```http
POST /mlServices
```

**Request**

```SHELL
curl -X POST 
  https://platform.adobe.io/data/sensei/mlServices
  -H 'Authorization: {ACCESS_TOKEN}' 
  -H 'x-api-key: {API_KEY}' 
  -H 'x-gw-ims-org-id: {ORG_ID}' 
  -H 'x-sandbox-name: {SANDBOX_NAME}'
  -d '{
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
      }'
```

| JSON key | Description |
| --- | --- |
| `mlInstanceId` | Existing ML Instance identification, representing the ML Instance used to create the ML Service. |
| `trainingDataSetId` | Identification referring to the specific data set to be used for training Experiment. |
| `trainingTimeframe` | An Integer value representing minutes for filtering data to be used for training Experiment. For example, a value of `"10080"` means data from the past 10080 minutes or 168 hours will be used for the training Experiment Run. Note that a value of `"0"` will not filter data, all data within the dataset is used for training. |
| `scoringDataSetId` | Identification referring to the specific data set to be used for scheduled scoring Experiment Runs. |
| `scoringTimeframe` | An Integer value representing minutes for filtering data to be used for scoring Experiment Runs. For example, a value of `"10080"` means data from the past 10080 minutes or 168 hours will be used for each scheduled scoring Experiment Run. Note that a value of `"0"` will not filter data, all data within the dataset is used for scoring. |
| `scoringSchedule` | Contains details regarding scheduled scoring Experiment Runs. |
| `scoringSchedule.startTime` | Datetime indicating when to start scoring. |
| `scoringSchedule.endTime` | Datetime indicating when to start scoring. |
| `scoringSchedule.cron` | Cron value indicating the interval by which to score Experiment Runs. |

**Response**

A successful response returns the details of the newly created ML Service. This includes the service's unique `id`, as well as the `trainingExperimentId` and `scoringExperimentId` for its corresponding training and scoring Experiments, respectively.

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

### ML Service with scheduled Experiments for training and scoring {#ml-service-with-scheduled-experiments-for-training-and-scoring}

To publish an existing ML Instance as an ML Service with scheduled training and scoring Experiment Runs, you are required to provide both training and scoring schedules. When an ML Service of this configuration is created, scheduled Experiment entities for both training and scoring is also created. Note that training and scoring schedules do not have to be the same. During a scoring job execution, the latest trained model produced by scheduled training Experiment Runs will be fetched and used for the scheduled scoring run.

**API format**

```http
POST /mlServices
```

**Request**

```SHELL
curl -X POST 'https://platform.adobe.io/data/sensei/mlServices' 
  -H 'Authorization: Bearer {ACCESS_TOKEN}' 
  -H 'x-api-key: {API_KEY}' 
  -H 'x-gw-ims-org-id: {ORG_ID}' 
  -H 'x-sandbox-name: {SANDBOX_NAME}'
  -d '{
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
      }'
```

| JSON key | Description |
| --- | --- |
| `mlInstanceId` | Existing ML Instance identification, representing the ML Instance used to create the ML Service. |
| `trainingDataSetId` | Identification referring to the specific data set to be used for training Experiment. |
| `trainingTimeframe` | An Integer value representing minutes for filtering data to be used for training Experiment. For example, a value of `"10080"` means data from the past 10080 minutes or 168 hours will be used for the training Experiment Run. Note that a value of `"0"` will not filter data, all data within the dataset is used for training. |
| `scoringDataSetId` | Identification referring to the specific data set to be used for scheduled scoring Experiment Runs. |
|`scoringTimeframe` | An Integer value representing minutes for filtering data to be used for scoring Experiment Runs. For example, a value of `"10080"` means data from the past 10080 minutes or 168 hours will be used for each scheduled scoring Experiment Run. Note that a value of `"0"` will not filter data, all data within the dataset is used for scoring. |
| `trainingSchedule` | Contains details regarding scheduled training Experiment Runs. |
| `scoringSchedule` | Contains details regarding scheduled scoring Experiment Runs. |
| `scoringSchedule.startTime` | Datetime indicating when to start scoring. |
| `scoringSchedule.endTime` | Datetime indicating when to start scoring. |
| `scoringSchedule.cron` | Cron value indicating the interval by which to score Experiment Runs. |

**Response**

A successful response returns the details of the newly created ML Service. This includes the service's unique `id`, as well as the `trainingExperimentId` and `scoringExperimentId` of its corresponding training and scoring Experiments, respectively. In the example response below, the presence of `trainingSchedule` and `scoringSchedule` suggests that the Experiment entities for training and scoring are scheduled Experiments.

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

## Look up an ML Service {#retrieving-ml-services}

You can look up an existing ML Service by making a `GET` request to `/mlServices` and providing the unique `id` of the ML Service in the path.

**API format**

```http
GET /mlServices/{SERVICE_ID}
```

| Parameter | Description |
| --- | --- |
| `{SERVICE_ID}` | The unique `id` of the ML Service you are looking up. |

**Request**

```SHELL
curl -X GET 'https://platform.adobe.io/data/sensei/mlServices/{SERVICE_ID}' 
  -H 'Authorization: Bearer {ACCESS_TOKEN}' 
  -H 'x-api-key: {API_KEY}' 
  -H 'x-gw-ims-org-id: {ORG_ID}' 
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the ML Service.

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

>[!NOTE]
>
>Retrieving different ML Services may return a response with more or less key-value pairs. The above response is a representation of a [ML Service with both scheduled training and scoring Experiment Runs](#ml-service-with-scheduled-experiments-for-training-and-scoring).


## Schedule training or scoring

If you want to schedule scoring and training on an ML Service that has already been published, you can do so by updating the existing ML Service with a `PUT` request on `/mlServices`.

**API format**

```http
PUT /mlServices/{SERVICE_ID}
```

| Parameter | Description |
| --- | --- |
| `{SERVICE_ID}` | The unique `id` of the ML Service you are updating. |

**Request**

The following request schedules training and scoring for an existing ML Service by adding the `trainingSchedule` and `scoringSchedule` keys with their respective `startTime`, `endTime`, and `cron` keys. 

```SHELL
curl -X PUT 'https://platform.adobe.io/data/sensei/mlServices/{SERVICE_ID}' 
  -H 'Authorization: {ACCESS_TOKEN}' 
  -H 'x-api-key: {API_KEY}' 
  -H 'x-gw-ims-org-id: {ORG_ID}' 
  -H 'x-sandbox-name: {SANDBOX_NAME}'
  -d '{
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
      }'
```

>[!WARNING]
>
>Do not attempt to modify the `startTime` on existing scheduled training and scoring jobs. If the `startTime` must be modified, consider publishing the same Model and rescheduling training and scoring jobs.

**Response**

A successful response returns the details of the updated ML Service.

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
