---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API;preview;sample
title: Profile preview - Real-time Customer Profile API
description: Adobe Experience Platform enables you to ingest customer data from multiple sources in order to build robust unified profiles for individual customers. As data enabled for Real-time Customer Profile is ingested into Platform, it is stored within the Profile data store. As the number of records in the Profile store increases or decreases, a sample job is run that includes information regarding how many profile fragments and merged profiles are in the data store. Using the Profile API you can preview the latest successful sample, as well as list profile distribution by dataset and by identity namespace.
topic: guide
---

# Preview sample status endpoint (Profile preview)

Adobe Experience Platform enables you to ingest customer data from multiple sources in order to build robust unified profiles for individual customers. As data enabled for Real-time Customer Profile is ingested into [!DNL Platform], it is stored within the Profile data store. 

When the ingestion of records into the Profile store increases or decreases the total profile count by more than 5%, a job is triggered to update the count. For streaming data workflows, a check is done on an hourly basis to determine if the 5% increase or decrease threshold has been met. If it has, a job is automatically triggered to update the count. For batch ingestion, within 15 minutes of successfully ingesting a batch into the Profile store, if the 5% increase or decrease threshold is met, a job is run to update the count. Using the Profile API you can preview the latest successful sample job, as well as list profile distribution by dataset and by identity namespace.

These metrics are also available within the [!UICONTROL Profiles] section of the Experience Platform UI. For information on how to access Profile data using the UI, please visit the [[!DNL Profile] user guide](../ui/user-guide.md).

## Getting started

The API endpoint used in this guide is part of the [[!DNL Real-time Customer Profile] API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/real-time-customer-profile.yaml). Before continuing, please review the [getting started guide](getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any [!DNL Experience Platform] API.

## View last sample status {#view-last-sample-status}

You can perform a GET request to the `/previewsamplestatus` endpoint to view the details for the last successful sample job that was run for your IMS Organization. This includes the total number of profiles in the sample, as well as the profile count metric, or total number of profiles your organization has within Experience Platform. The profile count is generated after merging together profile fragments to form a single profile for each individual customer. In other words, your organization may have multiple profile fragments related to a single customer who interacts with your brand across different channels, but these fragments would be merged together (according to the default merge policy) and would return a count of "1" profile because they are all related to the same individual.

The profile count also includes both profiles with attributes (record data) as well as profiles containing only time series (event) data, such as Adobe Analytics profiles. The sample job is refreshed regularly as Profile data is ingested in order to provide an up-to-date total number of profiles within Platform.

**API format**

```http
GET /previewsamplestatus
```

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/previewsamplestatus \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

The response includes the details for the last successful sample job that was run for the IMS organization. 

>[!NOTE]
>
>In this example response, `numRowsToRead` and `totalRows` are equal to each other. Depending on the number of profiles your organization has in Experience Platform this may be the case. However, generally these two numbers are different, with `numRowsToRead` being the smaller number because it represents the sample as a subset of the total number of profiles (`totalRows`).

```json
{
  "numRowsToRead": "41003",
  "sampleJobRunning": {
    "status": true,
    "submissionTimestamp": "2020-08-01 17:57:57.0"
  },
  "cosmosDocCount": "\"300803\"",
  "totalFragmentCount": 47429,
  "lastSuccessfulBatchTimestamp": "\"null\"",
  "streamingDriven": "\"false\"",
  "totalRows": "41003",
  "lastBatchId": "\"null\"",
  "status": "TASK_FINISHED",
  "samplingRatio": 1.0,
  "mergeStrategy": "timestampOrdered_auto",
  "lastSampledTimestamp": "2020-08-01 17:57:57.0"
}
```

|Property|Description|
|---|---|
|`numRowsToRead`|The total number of merged profiles in the sample.|
|`sampleJobRunning`| A boolean value that returns `true` when a sample job is in progress. Provides transparency into the latency that occurs from when a batch file is uploaded to when it is actually added to the Profile store.|
|`cosmosDocCount`|Total document count in Cosmos.|
|`totalFragmentCount`|Total number of profile fragments in the Profile store.|
|`lastSuccessfulBatchTimestamp`|Last successful batch ingestion timestamp.|
|`streamingDriven`| *This field has been deprecated and contains no significance to the response.*|
|`totalRows`|Total number of merged profiles in Experience platform, also know as the 'profile count.'|
|`lastBatchId`|Last batch ingestion ID.|
|`status`|Status of last sample.|
|`samplingRatio`|Ratio of merged profiles sampled (`numRowsToRead`) to total merged profiles (`totalRows`), expressed as a percentage in decimal format.|
|`mergeStrategy`|Merge strategy used in the sample.|
|`lastSampledTimestamp`|Last successful sample timestamp.|

## List profile distribution by dataset

To see the distribution of profiles by dataset, you can perform a GET request to the `/previewsamplestatus/report/dataset` endpoint.

**API format**

```http
GET /previewsamplestatus/report/dataset
GET /previewsamplestatus/report/dataset?{QUERY_PARAMETERS}
```

|Parameter|Description|
|---|---|
|`date`| Specify the date of the report to be returned. If multiple reports were run on the date, the most recent report for that date will be returned. If a report does not exist for the specified date, a 404 error will be returned. If no date is specified, the most recent report will be returned. Format: YYYY-MM-DD. Example: `date=2024-12-31`|

**Request**

The following request uses the `date` parameter to return the most recent report for the date specified.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/previewsamplestatus/report/dataset?date=2020-08-01 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

The response includes a `data` array, containing a list of dataset objects. The response shown has been truncated to show three datasets. 

>[!NOTE]
>
>If multiple reports existed for the date, only the latest would be returned. If a dataset report did not exist for the date provided, HTTP Status 404 (Not Found) would be returned.

```json
{
  "data": [
    {
      "sampleCount": 12577,
      "samplePercentage": 0.306734,
      "fullIDsCount": 20988,
      "fullIDsPercentage": 0.511865,
      "name": "CRM Profiles",
      "description": "Profiles from the CRM.",
      "value": "5f160106be34361915754b9c",
      "streamingIngestionEnabled": "",
      "createdUser": "{CREATED_USER}",
      "reportTimestamp": "2020-08-01T17:57:58.697",
    },
    {
      "sampleCount": 12938,
      "samplePercentage": 0.315538,
      "fullIDsCount": 21796,
      "fullIDsPercentage": 0.531571,
      "name": "AAM Authenticated Profiles",
      "description": "This data set contains AAM authenticated profiles.",
      "value": "5dc77ec6eed47f18a796ca90",
      "streamingIngestionEnabled": "",
      "createdUser": "{CREATED_USER}",
      "reportTimestamp": "2020-08-01T17:57:58.697"
    },
    {
      "sampleCount": 22725,
      "samplePercentage": 0.554228,
      "fullIDsCount": 41003,
      "fullIDsPercentage": 1.0,
      "name": "Loyalty Program Members",
      "description": "Members of the loyalty program at all levels.",
      "value": "5d0fda92274e55144d4de620",
      "streamingIngestionEnabled": "",
      "createdUser": "{CREATED_USER}",
      "reportTimestamp": "2020-08-01T17:57:58.697"
    }
  ],
  "reportTimestamp": "2020-08-01T17:57:58.697"
}
```

|Property|Description|
|---|---|
|`sampleCount`|The total number of sampled merged profiles with this dataset ID.|
|`samplePercentage`|The `sampleCount` as a percentage of the total number of sampled merged profiles (the `numRowsToRead` value as returned in the [last sample status](#view-last-sample-status)), expressed in decimal format.|
|`fullIDsCount`|The total number of merged profiles with this dataset ID.|
|`fullIDsPercentage`|The `fullIDsCount` as a percentage of the total number of merged profiles (the `totalRows` value as returned in the [last sample status](#view-last-sample-status)), expressed in decimal format.|
|`name`|The name of the dataset, as provided during dataset creation.|
|`description`|The description of the dataset, as provided during dataset creation.|
|`value`|The ID of the dataset.|
|`streamingIngestionEnabled`|Whether the dataset is enabled for streaming ingestion.|
|`createdUser`|The user ID of the user who created the dataset.|
|`reportTimestamp`|The timestamp of the report. If a `date` parameter was provided during the request, the report returned is for the date provided. If no `date` parameter is provided, the most recent report is returned.|



## List profile distribution by namespace

You can perform a GET request to the `/previewsamplestatus/report/namespace` endpoint to view the breakdown by identity namespace across all of the merged profiles in your Profile store. Identity namespaces are an important component of Adobe Experience Platform Identity Service that serve as indicators of the context to which customer data relates. To learn more, visit the [identity namespace overview](../../identity-service/namespaces.md).

>[!NOTE]
>
>The total number of profiles by namespace (adding together the values shown for each namespace) will always be higher than the profile count metric because one profile could be associated with multiple namespaces. For example, if a customer interacts with your brand on more than one channel, multiple namespaces will be associated with that individual customer.

**API format**

```http
GET /previewsamplestatus/report/namespace
GET /previewsamplestatus/report/namespace?{QUERY_PARAMETERS}
```

|Parameter|Description|
|---|---|
|`date`| Specify the date of the report to be returned. If multiple reports were run on the date, the most recent report for that date will be returned. If a report does not exist for the specified date, a 404 error will be returned. If no date is specified, the most recent report will be returned. Format: YYYY-MM-DD. Example: `date=2024-12-31`|

**Request**

The following request does not specify a `date` parameter and will therefore return the most recent report.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/previewsamplestatus/report/namespace \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

The response includes a `data` array, with individual objects containing the details for each namespace. The response shown has been truncated to show four namespaces.

```json
{
  "data": [
    {
      "sampleCount": 12148,
      "samplePercentage": 0.296271,
      "reportTimestamp": "2020-08-01T17:57:58.697",
      "fullIDsFragmentCount": 13141,
      "fullIDsCount": 12631,
      "fullIDsPercentage": 0.308051,
      "code": "Email",
      "value": "6"
    },
    {
      "sampleCount": 6989,
      "samplePercentage": 0.170451,
      "reportTimestamp": "2020-08-01T17:57:58.697",
      "fullIDsFragmentCount": 7543,
      "fullIDsCount": 7042,
      "fullIDsPercentage": 0.171744,
      "code": "ECID",
      "value": "4"
    },
    {
      "sampleCount": 888,
      "samplePercentage": 0.021657,
      "reportTimestamp": "2020-08-01T17:57:58.697",
      "fullIDsFragmentCount": 3801,
      "fullIDsCount": 3206,
      "fullIDsPercentage": 0.078189,
      "code": "AAID",
      "value": "10"
    },
    {
      "sampleCount": 21809,
      "samplePercentage": 0.531888,
      "reportTimestamp": "2020-08-01T17:57:58.697",
      "fullIDsFragmentCount": 27023,
      "fullIDsCount": 21936,
      "fullIDsPercentage": 0.534985,
      "code": "Phone",
      "value": "7"
    }
  ],
  "reportTimestamp": "2020-08-01T17:57:58.697"
}
```

|Property|Description|
|---|---|
|`sampleCount`|The total number of sampled merged profiles in the namespace.|
|`samplePercentage`|The `sampleCount` as a percentage of sampled merged profiles (the `numRowsToRead` value as returned in the [last sample status](#view-last-sample-status)), expressed in decimal format.|
|`reportTimestamp`|The timestamp of the report. If a `date` parameter was provided during the request, the report returned is for the date provided. If no `date` parameter is provided, the most recent report is returned.|
|`fullIDsFragmentCount`|The total number of profile fragments in the namespace.|
|`fullIDsCount`|The total number of merged profiles in the namespace.|
|`fullIDsPercentage`|The `fullIDsCount` as a percentage of total merged profiles (the `totalRows` value as returned in the [last sample status](#view-last-sample-status)), expressed in decimal format.|
|`code`|The `code` for the namespace. This can be found when working with namespaces using the [Adobe Experience Platform Identity Service API](../../identity-service/api/list-namespaces.md) and is also referred to as the [!UICONTROL Identity symbol] in the Experience Platform UI. To learn more, visit the [identity namespace overview](../../identity-service/namespaces.md).|
|`value`|The `id` value for the namespace. This can be found when working with namespaces using the [Identity Service API](../../identity-service/api/list-namespaces.md).|

## Next steps

You can also use similar estimates and previews to view summary-level information regarding your segment definitions to help ensure you are isolating the expected audience. To find detailed steps for working with segment previews and estimates using the [!DNL Adobe Experience Platform Segmentation Service] API, please visit the [previews and estimates endpoints guide](../../segmentation/api/previews-and-estimates.md), part of the [!DNL Segmentation] API developer guide.

