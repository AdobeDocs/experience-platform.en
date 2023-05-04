---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API;preview;sample
title: Preview Sample Status (Profile Preview) API Endpoint
description: The preview sample status endpoint of the Real-Time Customer Profile API allows you to preview the latest successful sample of your Profile data, list profile distribution by dataset and by identity, and generate reports showing dataset overlap, identity overlap, and unstitched profiles.
exl-id: a90a601e-629e-417b-ac27-3d69379bb274
---
# Preview sample status endpoint (Profile preview)

Adobe Experience Platform enables you to ingest customer data from multiple sources in order to build a robust, unified profile for each of your individual customers. As data is ingested into Platform, a sample job is run to update the profile count and other Real-Time Customer Profile data-related metrics. 

The results of this sample job can be viewed using the `/previewsamplestatus` endpoint, part of the Real-Time Customer Profile API. This endpoint can also be used to list profile distributions by both dataset and identity namespace, as well as to generate multiple reports in order to gain visibility into the composition of your organization's Profile Store. This guide walks through the steps required to view these metrics using the `/previewsamplestatus` API endpoint.

>[!NOTE]
>
>There are estimate and preview endpoints available as part of the Adobe Experience Platform Segmentation Service API that allow you to view summary-level information regarding segment definitions to help ensure you are isolating the expected audience. To find detailed steps for working with segment preview and estimate endpoints, please visit the [previews and estimates endpoints guide](../../segmentation/api/previews-and-estimates.md), part of the [!DNL Segmentation] API developer guide.

## Getting started

The API endpoint used in this guide is part of the [[!DNL Real-Time Customer Profile] API](https://www.adobe.com/go/profile-apis-en). Before continuing, please review the [getting started guide](getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any [!DNL Experience Platform] API.

## Profile fragments vs merged profiles

This guide references both "profile fragments" and "merged profiles". It is important to understand the difference between these terms before proceeding. 

Each individual customer profile is composed of multiple profile fragments that have been merged to form a single view of that customer. For example, if a customer interacts with your brand across several channels, your organization likely has multiple profile fragments related to that single customer appearing in multiple datasets. 

When profile fragments are ingested into Platform, they are merged together (based on a merge policy) in order to create a single profile for that customer. Therefore, the total number of profile fragments is likely to always be higher than the total number of merged profiles, as each profile is composed of multiple fragments.

To learn more about profiles and their role within Experience Platform, please begin by reading the [Real-Time Customer Profile overview](../home.md).

## How the sample job is triggered

As data enabled for Real-Time Customer Profile is ingested into [!DNL Platform], it is stored within the Profile data store. When the ingestion of records into the Profile Store increases or decreases the total profile count by more than 5%, a sampling job is triggered to update the count. The way in which the sample is triggered depends on the type of ingestion being used:

* For **streaming data workflows**, a check is done on an hourly basis to determine if the 5% increase or decrease threshold has been met. If it has, a sample job is automatically triggered to update the count. 
* For **batch ingestion**, within 15 minutes of successfully ingesting a batch into the Profile Store, if the 5% increase or decrease threshold is met, a job is run to update the count. Using the Profile API you can preview the latest successful sample job, as well as list profile distribution by dataset and by identity namespace.

The profile count and profiles by namespace metrics are also available within the [!UICONTROL Profiles] section of the Experience Platform UI. For information on how to access Profile data using the UI, please visit the [[!DNL Profile] UI guide](../ui/user-guide.md).

## View last sample status {#view-last-sample-status}

You can perform a GET request to the `/previewsamplestatus` endpoint to view the details for the last successful sample job that was run for your organization. This includes the total number of profiles in the sample, as well as the profile count metric, or total number of profiles your organization has within Experience Platform. 

The profile count is generated after merging together profile fragments to form a single profile for each individual customer. In other words, when profile fragments are merged together they return a count of "1" profile because they are all related to the same individual.

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
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

The response includes the details for the last successful sample job that was run for the organization. 

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
|`sampleJobRunning`| A boolean value that returns `true` when a sample job is in progress. Provides transparency into the latency that occurs from when a batch file is uploaded to when it is actually added to the Profile Store.|
|`cosmosDocCount`|Total document count in Cosmos.|
|`totalFragmentCount`|Total number of profile fragments in the Profile Store.|
|`lastSuccessfulBatchTimestamp`|Last successful batch ingestion timestamp.|
|`streamingDriven`| *This field has been deprecated and contains no significance to the response.*|
|`totalRows`|Total number of merged profiles in Experience Platform, also know as the 'profile count.'|
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
|`date`| Specify the date of the report to be returned. If multiple reports were run on the date, the most recent report for that date is returned. If a report does not exist for the specified date, a 404 (Not Found) error is returned. If no date is specified, the most recent report is returned. Format: YYYY-MM-DD. Example: `date=2024-12-31`|

**Request**

The following request uses the `date` parameter to return the most recent report for the date specified.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/previewsamplestatus/report/dataset?date=2020-08-01 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

The response includes a `data` array, containing a list of dataset objects. The response shown has been truncated to show three datasets. 

>[!NOTE]
>
>If multiple reports exist for the date, only the latest report is returned. If a dataset report does not exist for the date provided, HTTP Status 404 (Not Found) is returned.

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

## List profile distribution by identity namespace

You can perform a GET request to the `/previewsamplestatus/report/namespace` endpoint to view the breakdown by identity namespace across all of the merged profiles in your Profile Store. This includes both the standard identities provided by Adobe, as well as the custom identities defined by your organization.

Identity namespaces are an important component of Adobe Experience Platform Identity Service that serve as indicators of the context to which customer data relates. To learn more, begin by reading the [identity namespace overview](../../identity-service/namespaces.md).

>[!NOTE]
>
>The total number of profiles by namespace (adding together the values shown for each namespace) may be higher than the profile count metric because one profile could be associated with multiple namespaces. For example, if a customer interacts with your brand on more than one channel, multiple namespaces will be associated with that individual customer.

**API format**

```http
GET /previewsamplestatus/report/namespace
GET /previewsamplestatus/report/namespace?{QUERY_PARAMETERS}
```

|Parameter|Description|
|---|---|
|`date`| Specify the date of the report to be returned. If multiple reports were run on the date, the most recent report for that date is returned. If a report does not exist for the specified date, a 404 (Not Found) error is returned. If no date is specified, the most recent report is be returned. Format: YYYY-MM-DD. Example: `date=2024-12-31`|

**Request**

The following request does not specify a `date` parameter and will therefore return the most recent report.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/previewsamplestatus/report/namespace \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
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

## Generate the dataset overlap report

The dataset overlap report provides visibility into the composition of your organization's Profile Store by exposing the datasets that contribute most to your addressable audience (merged profiles). In addition to providing insights into your data, this report can help you take actions to optimize license usage, such as setting expirations for certain datasets.

You can generate the dataset overlap report by performing a GET request to the `/previewsamplestatus/report/dataset/overlap` endpoint.

For step-by-step instructions outlining how to generate the dataset overlap report using the command line or the Postman UI, please refer to the [generating the dataset overlap report tutorial](../tutorials/dataset-overlap-report.md).

**API format**

```http
GET /previewsamplestatus/report/dataset/overlap
GET /previewsamplestatus/report/dataset/overlap?{QUERY_PARAMETERS}
```

|Parameter|Description|
|---|---|
|`date`| Specify the date of the report to be returned. If multiple reports were run on the same date, the most recent report for that date is returned. If a report does not exist for the specified date, a 404 (Not Found) error is returned. If no date is specified, the most recent report is returned. Format: YYYY-MM-DD. Example: `date=2024-12-31`|

**Request**

The following request uses the `date` parameter to return the most recent report for the date specified.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/previewsamplestatus/report/dataset/overlap?date=2021-12-29 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
```

**Response**

A successful request returns HTTP Status 200 (OK) and the dataset overlap report. 

```json
{
    "data": {
        "5d92921872831c163452edc8,5da7292579975918a851db57,5eb2cdc6fa3f9a18a7592a98": 123,
        "5d92921872831c163452edc8,5eb2cdc6fa3f9a18a7592a98": 454412,
        "5eeda0032af7bb19162172a7": 107
    },
    "reportTimestamp": "2021-12-29T19:55:31.147"
}
```

|Property|Description|
|---|---|
|`data`|The `data` object contains comma-separated lists of datasets and their respective profile counts.|
|`reportTimestamp`|The timestamp of the report. If a `date` parameter was provided during the request, the report returned is for the date provided. If no `date` parameter is provided, the most recent report is returned.|

### Interpreting the dataset overlap report

The results of the report can be interpreted from the datasets and profile counts in the response. Consider the following example report `data` object:

```json
  "5d92921872831c163452edc8,5da7292579975918a851db57,5eb2cdc6fa3f9a18a7592a98": 123,
  "5d92921872831c163452edc8,5eb2cdc6fa3f9a18a7592a98": 454412,
  "5eeda0032af7bb19162172a7": 107
```

This report provides the following information:

* There are 123 profiles comprised of data coming from the following datasets: `5d92921872831c163452edc8`, `5da7292579975918a851db57`, `5eb2cdc6fa3f9a18a7592a98`.
* There are 454,412 profiles comprised of data coming from these two datasets: `5d92921872831c163452edc8` and `5eb2cdc6fa3f9a18a7592a98`.
* There are 107 profiles that are comprised only of data from dataset `5eeda0032af7bb19162172a7`.
* There is a total of 454,642 profiles in the organization.

## Generate the identity namespace overlap report {#identity-overlap-report}

The identity namespace overlap report provides visibility into the composition of your organization's Profile Store by exposing the identity namespaces that contribute most to your addressable audience (merged profiles). This includes both the standard identity namespaces provided by Adobe, as well as the custom identity namespaces defined by your organization.

You can generate the identity namespace overlap report by performing a GET request to the `/previewsamplestatus/report/namespace/overlap` endpoint.

**API format**

```http
GET /previewsamplestatus/report/namespace/overlap
GET /previewsamplestatus/report/namespace/overlap?{QUERY_PARAMETERS}
```

|Parameter|Description|
|---|---|
|`date`| Specify the date of the report to be returned. If multiple reports were run on the same date, the most recent report for that date is returned. If a report does not exist for the specified date, a 404 (Not Found) error is returned. If no date is specified, the most recent report is returned. Format: YYYY-MM-DD. Example: `date=2024-12-31`|

**Request**

The following request uses the `date` parameter to return the most recent report for the date specified.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/previewsamplestatus/report/namespace/overlap?date=2021-12-29 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
```

**Response**

A successful request returns HTTP Status 200 (OK) and the identity namespace overlap report. 

```json
{
    "data": {
        "Email,crmid,loyal": 2,
        "ECID,Email,crmid": 7,
        "ECID,Email,mobilenr": 12,
        "AAID,ECID,loyal": 1,
        "mobilenr": 25,
        "AAID,ECID": 1508,
        "ECID,crmid": 1,
        "AAID,ECID,crmid": 2,
        "Email,crmid": 328,
        "CORE": 49,
        "AAID": 446,
        "crmid,loyal": 20988,
        "Email": 10904,
        "crmid": 249,
        "ECID,Email": 74,
        "Phone": 40,
        "Email,Phone,loyal": 48,
        "AAID,AVID,ECID": 85,
        "Email,loyal": 1002,
        "AAID,ECID,Email,Phone,crmid": 5,
        "AAID,ECID,Email,crmid,loyal": 23,
        "AAID,AVID,ECID,Email,crmid": 2,
        "AVID": 3,
        "AAID,ECID,Phone": 1,
        "loyal": 43,
        "ECID,Email,crmid,loyal": 6,
        "AAID,ECID,Email,Phone,crmid,loyal": 1,
        "AAID,ECID,Email": 2,
        "AAID,ECID,Email,crmid": 142,
        "AVID,ECID": 24,
        "ECID": 6565
    },
    "reportTimestamp": "2021-12-29T16:55:03.624"
}
```

|Property|Description|
|---|---|
|`data`|The `data` object contains comma-separated lists with unique combinations of identity namespace codes and their respective profile counts.|
|Namespace codes|The `code` is a short form for each identity namespace name. A mapping of each `code` to its `name` can be found using the [Adobe Experience Platform Identity Service API](../../identity-service/api/list-namespaces.md). The `code` is also referred to as the [!UICONTROL Identity symbol] in the Experience Platform UI. To learn more, visit the [identity namespace overview](../../identity-service/namespaces.md).|
|`reportTimestamp`|The timestamp of the report. If a `date` parameter was provided during the request, the report returned is for the date provided. If no `date` parameter is provided, the most recent report is returned.|

### Interpreting the identity namespace overlap report

The results of the report can be interpreted from the identities and profile counts in the response. The numerical value of each row tells you how many profiles are composed of that exact combination of standard and custom identity namespaces.

Consider the following excerpt from the `data` object:

```json
  "AAID,ECID,Email,crmid": 142,
  "AVID,ECID": 24,
  "ECID": 6565
```

This report provides the following information:

* There are 142 profiles composed of `AAID`, `ECID`, and `Email` standard identities, as well as from a custom `crmid` identity namespace.
* There are 24 profiles that are composed of `AAID` and `ECID` identity namespaces.
* There are 6,565 profiles that include only an `ECID` identity.

## Generate the unstitched profiles report

You can gain further visibility into the composition of your organization's Profile Store through the unstitched profiles report. An "unstitched" profile is a profile that contains only one profile fragment. An "unknown" profile is a profile that is associated with pseudonymous identity namespaces such as `ECID` and `AAID`. Unknown profiles are inactive, which means they have not added new events for the specified time period. The unstitched profiles report provides a breakdown of profiles for a period of 7, 30, 60, 90, and 120 days.

You can generate the unstitched profiles report by performing a GET request to the `/previewsamplestatus/report/unstitchedProfiles` endpoint.

**API format**

```http
GET /previewsamplestatus/report/unstitchedProfiles
```

**Request**

The following request returns the unstitched profiles report.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/previewsamplestatus/report/unstitchedProfiles \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
```

**Response**

A successful request returns HTTP Status 200 (OK) and the unstitched profiles report. 

>[!NOTE]
>
>For the purposes of this guide, the report has been truncated to include only `"120days"` and "`7days`" time periods. The full unstitched profiles report provides a breakdown of profiles for a period of 7, 30, 60, 90, and 120 days.

```json
{
  "data": {
      "totalNumberOfProfiles": 63606,
      "totalNumberOfEvents": 130977,
      "unstitchedProfiles": {
          "120days": {
              "countOfProfiles": 1644,
              "eventsAssociated": 26824,
              "nsDistribution": {
                  "Email": {
                      "countOfProfiles": 18,
                      "eventsAssociated": 95
                  },
                  "loyal": {
                      "countOfProfiles": 26,
                      "eventsAssociated": 71
                  },
                  "ECID": {
                      "countOfProfiles": 1600,
                      "eventsAssociated": 26658
                  }
              }
          },
          "7days": {
              "countOfProfiles": 1782,
              "eventsAssociated": 29151,
              "nsDistribution": {
                  "Email": {
                      "countOfProfiles": 19,
                      "eventsAssociated": 97
                  },
                  "ECID": {
                      "countOfProfiles": 1734,
                      "eventsAssociated": 28591
                  },
                  "loyal": {
                      "countOfProfiles": 29,
                      "eventsAssociated": 463
                  }
              }
          }
      }
  },
  "reportTimestamp": "2025-08-25T22:14:55.186"
}
```

|Property|Description|
|---|---|
|`data`|The `data` object contains the information returned for the unstitched profiles report.|
|`totalNumberOfProfiles`|The total count of unique profiles in the Profile Store. This is equivalent to the addressable audience count. It includes both known and unstitched profiles.|
|`totalNumberOfEvents`|The total number of ExperienceEvents in the Profile Store.|
|`unstitchedProfiles`|An object containing a breakdown of unstitched profiles by time period. The unstitched profiles report provides a breakdown of profiles for 7, 30, 60, 90, and 120 day time periods.|
|`countOfProfiles`|The count of unstitched profiles for the time period or the count of unstitched profiles for the namespace. |
|`eventsAssociated`|The number of ExperienceEvents for the time range or the number of events for the namespace.|
|`nsDistribution`|An object containing individual identity namespaces with the distribution of unstitched profiles and events for each namespace. Note: Adding together the total `countOfProfiles` for each identity namespace in the `nsDistribution` object equals the `countOfProfiles` for the time period. The same is true for `eventsAssociated` per namespace and the total `eventsAssociated` per time period.|
|`reportTimestamp`|The timestamp of the report.|

### Interpreting the unstitched profiles report

The results of the report can provide insight into how many unstitched and inactive profiles your organization has within its Profile Store.

Consider the following excerpt from the `data` object:

```json
  "7days": {
    "countOfProfiles": 1782,
    "eventsAssociated": 29151,
    "nsDistribution": {
      "Email": {
        "countOfProfiles": 19,
        "eventsAssociated": 97
      },
      "ECID": {
        "countOfProfiles": 1734,
        "eventsAssociated": 28591
      },
      "loyal": {
        "countOfProfiles": 29,
        "eventsAssociated": 463
      }
    }
  }
```

This report provides the following information:

* There are 1,782 profiles that contain only one profile fragment and have no new events for the past seven days.
* There are 29,151 ExperienceEvents associated with the 1,782 unstitched profiles.
* There are 1,734 unstitched profiles containing a single profile fragment from the identity namespace of ECID.
* There are 28,591 events associated with the 1,734 unstitched profiles that contain a single profile fragment from the identity namespace of ECID.

## Next steps

Now that you know how to preview sample data in the Profile Store and run multiple reports on the data, you can also use the estimate and preview endpoints of the Segmentation Service API to view summary-level information regarding your segment definitions. This information helps to ensure you are isolating the expected audience in your segment. To learn more about working with segment previews and estimates using the Segmentation API, please visit the [preview and estimate endpoints guide](../../segmentation/api/previews-and-estimates.md).

