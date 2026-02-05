---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API;preview;sample
title: Preview Sample Status (Profile Preview) API Endpoint
description: The preview sample status endpoint of the Real-Time Customer Profile API allows you to preview the latest successful sample of your Profile data, list profile distribution by dataset and by identity, and generate reports showing dataset overlap, identity overlap, and unstitched profiles.
role: Developer
exl-id: a90a601e-629e-417b-ac27-3d69379bb274
---
# Preview sample status endpoint (Profile preview)

Adobe Experience Platform enables you to ingest customer data from multiple sources in order to build a robust, unified profile for each of your individual customers. As data is ingested into Experience Platform, a sample job is run to update the profile count and other Real-Time Customer Profile data-related metrics. 

The results of this sample job can be viewed using the `/previewsamplestatus` endpoint, part of the Real-Time Customer Profile API. This endpoint can also be used to list profile distributions by both dataset and identity namespace, as well as to generate multiple reports in order to gain visibility into the composition of your organization's Profile store. This guide walks through the steps required to view these metrics using the `/previewsamplestatus` API endpoint.

>[!NOTE]
>
>There are estimate and preview endpoints available as part of the Adobe Experience Platform Segmentation Service API that allow you to view summary-level information regarding segment definitions to help ensure you are isolating the expected audience. To find detailed steps for working with preview and estimate endpoints, please visit the [previews and estimates endpoints guide](../../segmentation/api/previews-and-estimates.md), part of the [!DNL Segmentation] API developer guide.

## Getting started

The API endpoint used in this guide is part of the [[!DNL Real-Time Customer Profile] API](https://www.adobe.com/go/profile-apis-en). Before continuing, please review the [getting started guide](getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any [!DNL Experience Platform] API.

## Profile fragments vs merged profiles

This guide references both "profile fragments" and "merged profiles". It is important to understand the difference between these terms before proceeding. 

Each individual customer profile is composed of multiple profile fragments that have been merged to form a single view of that customer. For example, if a customer interacts with your brand across several channels, your organization likely has multiple profile fragments related to that single customer appearing in multiple datasets. 

When profile fragments are ingested into Experience Platform, they are merged together (based on a merge policy) in order to create a single profile for that customer. Therefore, the total number of profile fragments is likely to always be higher than the total number of merged profiles, as each profile is composed of multiple fragments.

To learn more about profiles and their role within Experience Platform, please begin by reading the [Real-Time Customer Profile overview](../home.md).

## How the sample job is triggered

As data enabled for Real-Time Customer Profile is ingested into [!DNL Experience Platform], it is stored within the Profile data store. When the ingestion of records into the Profile store increases or decreases the total profile count by more than 3%, a sampling job is triggered to update the count. The way in which the sample is triggered depends on the type of ingestion being used:

* For **streaming data workflows**, a check is done on an hourly basis to determine if the 3% increase or decrease threshold has been met. If it has, a sample job is automatically triggered to update the count. 
* For **batch ingestion**, within 15 minutes of successfully ingesting a batch into the Profile store, if the 3% increase or decrease threshold is met, a job is run to update the count. Using the Profile API you can preview the latest successful sample job, as well as list profile distribution by dataset and by identity namespace.

The profile count and profiles by namespace metrics are also available within the [!UICONTROL Profiles] section of the Experience Platform UI. For information on how to access Profile data using the UI, please visit the [[!DNL Profile] UI guide](../ui/user-guide.md).

## View last sample status {#view-last-sample-status}

You can view the details for the last successful sample job that was run for your organization by making a GET request to the `/previewsamplestatus` endpoint. This report includes the total number of profiles in the sample, as well as the profile count metric, or total number of profiles your organization has within Experience Platform. 

The profile count is generated after merging together profile fragments to form a single profile for each individual customer. In other words, when profile fragments are merged together they return a count of "1" profile because they are all related to the same individual.

The profile count also includes both profiles with attributes (record data) as well as profiles containing only time series (event) data, such as Adobe Analytics profiles. The sample job is refreshed regularly as Profile data is ingested in order to provide an up-to-date total number of profiles within Experience Platform.

**API format**

```http
GET /previewsamplestatus
```

**Request**

+++ A sample request to view the last sample status.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/previewsamplestatus \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

+++

**Response**

A successful response returns HTTP status 200 and includes the details for the last successful sample job that was run for the organization. 

+++ A sample response that contains the last sample status.

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
  "docCount": "\"300803\"",
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

| Property | Description |
| -------- | ----------- |
| `numRowsToRead` | The total number of merged profiles in the sample. |
| `sampleJobRunning` | A boolean value that returns `true` when a sample job is in progress. Provides transparency into the latency that occurs from when a batch file is uploaded to when it is actually added to the Profile store.|
| `docCount` | Total document count in database. |
| `totalFragmentCount` | Total number of profile fragments in the Profile store. |
| `lastSuccessfulBatchTimestamp` | Last successful batch ingestion timestamp. |
| `streamingDriven` | *This field has been deprecated and contains no significance to the response.* |
| `totalRows` | Total number of merged profiles in Experience Platform, also know as the profile count. |
| `lastBatchId` | Last batch ingestion ID. |
| `status` | Status of last sample. |
| `samplingRatio` | Ratio of merged profiles sampled (`numRowsToRead`) to total merged profiles (`totalRows`), expressed as a percentage in decimal format. |
| `mergeStrategy` | Merge strategy used in the sample. |
| `lastSampledTimestamp` | Last successful sample timestamp. |

+++

## List profile distribution by dataset

You can see the distribution of profiles by dataset by making a GET request to the `/previewsamplestatus/report/dataset` endpoint.

**API format**

```http
GET /previewsamplestatus/report/dataset
GET /previewsamplestatus/report/dataset?{QUERY_PARAMETERS}
```

| Query parameter | Description | Example |
| --------------- | ----------- | ------- |
|`date`| Specify the date of the report to be returned. If multiple reports were run on the date, the most recent report for that date is returned. If a report does not exist for the specified date, a 404 (Not Found) error is returned. If no date is specified, the most recent report is returned. Format: YYYY-MM-DD. | `date=2024-12-31`|

**Request**

The following request uses the `date` parameter to return the most recent report for the date specified.

+++ A sample request to retrieve the profile distribution by dataset.

```shell
curl -X GET https://platform.adobe.io/data/core/ups/previewsamplestatus/report/dataset?date=2020-08-01 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

+++

**Response**

>[!NOTE]
>
>If multiple reports exist for the date, only the latest report is returned. If a dataset report does not exist for the date provided, HTTP Status 404 (Not Found) is returned.

A successful response returns HTTP status 200 and includes a `data` array, containing a list of dataset objects.

+++ A sample response that contains the latest dataset objects.

>[!NOTE]
>
>The following response shown has been truncated to show three datasets. 

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

| Property | Description |
| -------- | ----------- |
| `sampleCount` | The total number of sampled merged profiles with this dataset ID. |
| `samplePercentage` | The `sampleCount` as a percentage of the total number of sampled merged profiles (the `numRowsToRead` value as returned in the [last sample status](#view-last-sample-status)), expressed in decimal format. |
| `fullIDsCount` | The total number of merged profiles with this dataset ID. |
| `fullIDsPercentage` | The `fullIDsCount` as a percentage of the total number of merged profiles (the `totalRows` value as returned in the [last sample status](#view-last-sample-status)), expressed in decimal format. |
| `name` | The name of the dataset, as provided during dataset creation. |
| `description` | The description of the dataset, as provided during dataset creation. |
| `value` | The ID of the dataset. |
| `streamingIngestionEnabled` | Whether the dataset is enabled for streaming ingestion. |
| `createdUser` | The user ID of the user who created the dataset. |
| `reportTimestamp` | The timestamp of the report. If a `date` parameter was provided during the request, the report returned is for the date provided. If no `date` parameter is provided, the most recent report is returned. |

+++

## List profile distribution by identity namespace

You can perform a GET request to the `/previewsamplestatus/report/namespace` endpoint to view the breakdown by identity namespace across all of the merged profiles in your Profile store. This includes both the standard identities provided by Adobe, as well as the custom identities defined by your organization.

Identity namespaces are an important component of Adobe Experience Platform Identity Service that serve as indicators of the context to which customer data relates. To learn more, begin by reading the [identity namespace overview](../../identity-service/features/namespaces.md).

>[!NOTE]
>
>The total number of profiles by namespace (adding together the values shown for each namespace) may be higher than the profile count metric because one profile could be associated with multiple namespaces. For example, if a customer interacts with your brand on more than one channel, multiple namespaces will be associated with that individual customer.

**API format**

```http
GET /previewsamplestatus/report/namespace
GET /previewsamplestatus/report/namespace?{QUERY_PARAMETERS}
```

| Query parameter | Description | Example |
| --------------- | ----------- | ------- |
| `date` | Specifies the date of the report to be returned. If multiple reports were run on the date, the most recent report for that date is returned. If a report does not exist for the specified date, a 404 (Not Found) error is returned. If no date is specified, the most recent report is be returned. Format: `YYYY-MM-DD`. | `date=2025-6-20` |

**Request**

The following request does not specify a `date` parameter and will return the most recent report.

+++ A sample request to return the most recent report for profile distribution by namespace. 

```shell
curl -X GET https://platform.adobe.io/data/core/ups/previewsamplestatus/report/namespace \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

+++

**Response**

A successful response returns HTTP status 200 and includes a `data` array, with individual objects containing the details for each namespace. The response shown has been truncated to show four namespaces.

+++ A sample response contains information about the profile distribution by namespace.

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

| Property | Description |
| -------- | ----------- |
| `sampleCount` | The total number of sampled merged profiles in the namespace. |
| `samplePercentage` | The `sampleCount` as a percentage of sampled merged profiles (the `numRowsToRead` value as returned in the [last sample status](#view-last-sample-status)), expressed in decimal format. |
| `reportTimestamp` | The timestamp of the report. If a `date` parameter was provided during the request, the report returned is for the date provided. If no `date` parameter is provided, the most recent report is returned. |
| `fullIDsFragmentCount` | The total number of profile fragments in the namespace. |
| `fullIDsCount` | The total number of merged profiles in the namespace. |
| `fullIDsPercentage` | The `fullIDsCount` as a percentage of total merged profiles (the `totalRows` value as returned in the [last sample status](#view-last-sample-status)), expressed in decimal format. |
| `code` | The `code` for the namespace. This can be found when working with namespaces using the [Adobe Experience Platform Identity Service API](../../identity-service/api/list-namespaces.md) and is also referred to as the [!UICONTROL Identity symbol] in the Experience Platform UI. To learn more, visit the [identity namespace overview](../../identity-service/features/namespaces.md). |
| `value` | The `id` value for the namespace. This can be found when working with namespaces using the [Identity Service API](../../identity-service/api/list-namespaces.md). |

+++

## List the dataset statistics {#dataset-stats}

You can generate a report that gives statistics about the dataset by making a GET request to the `/previewsamplestatus/report/dataset_stats` endpoint.

**API format**

```http
GET /previewsamplestatus/report/dataset_stats
```

**Request**

+++ A sample request to generate the dataset statistics report.

```shell
curl -X GET https://platform.adobe.io/data/core/ups/previewsamplestatus/report/dataset_stats \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

+++

**Response**

A successful response returns HTTP status 200 with information about the dataset's statistics.

+++ A sample response that contains information about the dataset's statistics.

>[!NOTE]
>
>The following response has been truncated to show three datasets. 

```json
{
    "data": [
        {
            "120days": 4,
            "14days": 4,
            "30days": 4,
            "365days": 4,
            "60days": 4,
            "7days": 4,
            "90days": 4,
            "datasetId": "{DATASET_ID}",
            "datasetType": "ExperienceEvents",
            "percentEvents": 0.0,
            "percentProfiles": 0.0,
            "profileFragments": 1,
            "records": 4,
            "totalProfiles": 1
        },
        {
            "120days": 155435837,
            "14days": 32888631,
            "30days": 66496282,
            "365days": 155435837,
            "60days": 116433804,
            "7days": 18202004,
            "90days": 155435837,
            "datasetId": "{DATASET_ID}",
            "datasetType": "ExperienceEvents",
            "percentEvents": 16.0,
            "percentProfiles": 0.0,
            "profileFragments": 5410745,
            "records": 155435837,
            "totalProfiles": 4524723
        },
        {
            "120days": 0,
            "14days": 0,
            "30days": 0,
            "365days": 0,
            "60days": 0,
            "7days": 0,
            "90days": 0,
            "datasetId": "{DATASET_ID}",
            "datasetType": "Profiles",
            "percentEvents": 0.0,
            "percentProfiles": 0.0,
            "profileFragments": 3589,
            "records": 3589,
            "totalProfiles": 3589
        }
    ],
    "reportTimestamp": "2025-10-29T16:20:18.956"
}
```

| Property | Description |
| -------- | ----------- |
| `120days` | The number of records that will remain in the dataset after a data expiration of 120 days. |
| `14days` | The number of records that will remain in the dataset after a data expiration of 14 days.  |
| `30days` | The number of records that will remain in the dataset after a data expiration of 30 days.  |
| `365days` | The number of records that will remain in the dataset after a data expiration of 365 days.  |
| `60days` | The number of records that will remain in the dataset after a data expiration of 60 days.  |
| `7days` | The number of records that will remain in the dataset after a data expiration of 7 days.  |
| `90days` | The number of records that will remain in the dataset after a data expiration of 90 days.  | 
| `datasetId` | The ID of the dataset. |
| `datasetType` | The dataset type. This value can be either `Profiles` or `ExperienceEvents`. |
| `percentEvents` | The percentage of Experience Events records that are within the dataset. |
| `percentProfiles` | The percentage of Profile records that are within the dataset. |
| `profileFragments` | The total number of profile fragments that exist in the dataset. |
| `records` | The total number of profile records ingested into the dataset.  |
| `totalProfiles` | The total number of Profiles ingested into the dataset. |

+++

## Next steps

Now that you know how to preview sample data in the Profile store and run multiple reports on the data, you can also use the estimate and preview endpoints of the Segmentation Service API to view summary-level information regarding your segment definitions. This information helps to ensure you are isolating your expected audience. To learn more about working with previews and estimates using the Segmentation API, please visit the [preview and estimate endpoints guide](../../segmentation/api/previews-and-estimates.md).

