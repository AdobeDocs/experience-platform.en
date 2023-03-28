---
keywords: Experience Platform;home;popular topics;segment evaluation;Segmentation Service;segmentation;Segmentation;evaluate a segment;access segment results;evaluate and access segment;
solution: Experience Platform
title: Evaluate and Access Segment Results
type: Tutorial
description: Follow this tutorial to learn how to evaluate segments and access segment results using the Adobe Experience Platform Segmentation Service API.
exl-id: 47702819-f5f8-49a8-a35d-034ecac4dd98
---
# Evaluate and access segment results

This document provides a tutorial for evaluating segments and accessing segment results using the [[!DNL Segmentation API]](../api/getting-started.md). 

## Getting started

This tutorial requires a working understanding of the various [!DNL Adobe Experience Platform] services involved in creating audience segments. Before beginning this tutorial, please review the documentation for the following services:

- [[!DNL Real-Time Customer Profile]](../../profile/home.md): Provides a unified, customer profile in real time based on aggregated data from multiple sources.
- [[!DNL Adobe Experience Platform Segmentation Service]](../home.md): Allows you to build audience segments from [!DNL Real-Time Customer Profile] data.
- [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which Platform organizes customer experience data. To best make use of Segmentation, please ensure your data is ingested as profiles and events according to the [best practices for data modeling](../../xdm/schema/best-practices.md).
- [Sandboxes](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

### Required headers

This tutorial also requires you to have completed the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en) in order to successfully make calls to [!DNL Platform] APIs. Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. Requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

All POST, PUT, and PATCH requests require an additional header:

- Content-Type: application/json

## Evaluate a segment {#evaluate-a-segment}

Once you have developed, tested, and saved your segment definition, you can then evaluate the segment through either scheduled evaluation or on-demand evaluation.

[Scheduled evaluation](#scheduled-evaluation) (also known as 'scheduled segmentation') allows you to create a recurring schedule for running an export job at a specific time, whereas [on-demand evaluation](#on-demand-evaluation) involves creating a segment job to build the audience immediately. Steps for each are outlined below.

If you have not yet completed the [create a segment using the Segmentation API](./create-a-segment.md) tutorial or created a segment definition using [Segment Builder](../ui/overview.md), please do so before proceeding with this tutorial.

## Scheduled evaluation {#scheduled-evaluation}

Through scheduled evaluation, your IMS Org can create a recurring schedule to automatically run export jobs.

>[!NOTE]
>
>Scheduled evaluation can be enabled for sandboxes with a maximum of five (5) merge policies for [!DNL XDM Individual Profile]. If your organization has more than five merge policies for [!DNL XDM Individual Profile] within a single sandbox environment, you will not be able to use scheduled evaluation.

### Create a schedule

By making a POST request to the `/config/schedules` endpoint, you can create a schedule and include the specific time when the schedule should be triggered.

More detailed information about using this endpoint can be found in the [schedules endpoint guide](../api/schedules.md#create)

### Enable a schedule

By default, a schedule is inactive when created unless the `state` property is set to `active` in the create (POST) request body. You can enable a schedule (set the `state` to `active`) by making a PATCH request to the `/config/schedules` endpoint and including the ID of the schedule in the path.

More detailed information about using this endpoint can be found in the [schedules endpoint guide](../api/schedules.md#update-state)

### Update the schedule time

Schedule timing can be updated by making a PATCH request to the `/config/schedules` endpoint and including the ID of the schedule in the path.

More detailed information about using this endpoint can be found in the [schedules endpoint guide](../api/schedules.md#update-schedule)

## On-demand evaluation

On-demand evaluation allows you to create a segment job in order to generate an audience segment whenever you require it. Unlike scheduled evaluation, this will happen only when requested and is not recurring.

### Create a segment job

A segment job is an asynchronous process that creates an audience segment on demand. It references a segment definition, as well as any merge policies controlling how [!DNL Real-Time Customer Profile] merges overlapping attributes across your profile fragments. When a segment job successfully completes, you can gather various information about the segment, such as any errors that may have occurred during processing and the ultimate size of your audience. A segment job needs to be run every time you want to refresh the audience that currently qualifies for the segment definition.

You can create a new segment job by making a POST request to the `/segment/jobs` endpoint in the [!DNL Real-Time Customer Profile] API.

More detailed information about using this endpoint can be found in the [segment jobs endpoint guide](../api/segment-jobs.md#create)

### Look up segment job status

You can use the `id` for a specific segment job to perform a lookup request (GET) in order to view the current status of the job.

More detailed information about using this endpoint can be found in the [segment jobs endpoint guide](../api/segment-jobs.md#get)

## Interpret segment results

When segment jobs are successfully run, the `segmentMembership` map is updated for each profile included within the segment. `segmentMembership` also stores any pre-evaluated audience segments that are ingested into [!DNL Platform], allowing for integration with other solutions like [!DNL Adobe Audience Manager].

The following example shows what the `segmentMembership` attribute looks like for each individual profile record:

```json
{
  "segmentMembership": {
    "UPS": {
      "04a81716-43d6-4e7a-a49c-f1d8b3129ba9": {
        "timestamp": "2018-04-26T15:52:25+00:00",
        "status": "realized"
      },
      "53cba6b2-a23b-454a-8069-fc41308f1c0f": {
        "lastQualificationTime": "2018-04-26T15:52:25+00:00",
        "status": "realized"
      }
    },
    "Email": {
      "abcd@adobe.com": {
        "lastQualificationTime": "2017-09-26T15:52:25+00:00",
        "status": "exited"
      }
    }
  }
}
```

| Property | Description |
| -------- | ----------- |
| `lastQualificationTime` | The timestamp when the assertion of segment membership was made and the profile entered or exited the segment. |
| `status` | The status of segment participation as part of the current request. Must be equal to one of the following known values: <ul><li>`realized`: Entity is entering the segment.</li><li>`exited`: Entity is exiting the segment.</li></ul> |

>[!NOTE]
>
>Any segment membership that is in the `exited` status for more than 30 days, based on the `lastQualificationTime`, will be subject to deletion.

## Access segment results

The results of a segment job can be accessed in one of two ways: you can access individual profiles or export an entire audience to a dataset.

The following sections outline these options in more detail.

## Look up a profile 

If you know the specific profile that you would like to access, you can do so using the [!DNL Real-Time Customer Profile] API. The complete steps for accessing individual profiles are available in the [Access Real-Time Customer Profile data using the Profile API](../../profile/api/entities.md) tutorial.

## Export a segment {#export}

After a segmentation job has successfully completed (the value of the `status` attribute is "SUCCEEDED"), you can export your audience to a dataset where it can be accessed and acted upon. 

The following steps are required to export your audience:

- [Create a target dataset](#create-a-target-dataset) - Create the dataset to hold audience members.
- [Generate audience profiles in the dataset](#generate-profiles) - Populate the dataset with XDM Individual Profiles based on the results of a segment job.
- [Monitor export progress](#monitor-export-progress) - Check the current progress of the export process. 
- [Read audience data](#next-steps) - Retrieve the resulting XDM Individual Profiles representing the members of your audience.

### Create a target dataset {#create-dataset}

When exporting an audience, a target dataset must first be created. It is important that the dataset be configured correctly to ensure the export is successful. 

One of the key considerations is the schema upon which the dataset is based (`schemaRef.id` in the API sample request below). In order to export a segment, the dataset must be based on the [!DNL XDM Individual Profile Union Schema] (`https://ns.adobe.com/xdm/context/profile__union`). A union schema is a system-generated, read-only schema that aggregates the fields of schemas which share the same class, in this case that is the XDM Individual Profile class. For more information on union view schemas, please see the [Real-Time Customer Profile section of the Schema Registry developer guide](../../xdm/api/getting-started.md).

There are two ways to create the necessary dataset:

- **Using APIs:** The steps that follow in this tutorial outline how to create a dataset that references the [!DNL XDM Individual Profile Union Schema] using the [!DNL Catalog] API. 
- **Using the UI:** To use the [!DNL Adobe Experience Platform] user interface to create a dataset that references the union schema, follow the steps in the [UI tutorial](../ui/overview.md) and then return to this tutorial to proceed with the steps for [generating audience profiles](#generate-profiles).

If you already have a compatible dataset and know its ID, you can proceed directly to the step for [generating audience profiles](#generate-profiles).

**API format**

```http
POST /dataSets
```

**Request**

The following request creates a new dataset, providing configuration parameters in the payload.

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/catalog/dataSets \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "name": "Segment Export",
    "schemaRef": {
        "id": "https://ns.adobe.com/xdm/context/profile__union",
        "contentType": "application/vnd.adobe.xed+json;version=1"
    }
}'
```

| Property | Description |
| -------- | ----------- |
| `name` | A descriptive name for the dataset. |
| `schemaRef.id` | The ID of the union view (schema) that the dataset will be associated with. |

**Response**

A successful response returns an array containing the read-only, system-generated unique ID of the newly created dataset. A properly configured dataset ID is required in order to successfully export audience members.

```json
[
  "@/datasets/5b020a27e7040801dedba61b"
] 
```

### Generate profiles for audience members {#generate-profiles}

Once you have a union-persisting dataset, you can create an export job to persist the audience members to the dataset by making a POST request to the `/export/jobs` endpoint in the [!DNL Real-Time Customer Profile] API and providing the dataset ID and the segment information for the segments that you wish to export.

More detailed information about using this endpoint can be found in the [export jobs endpoint guide](../api/export-jobs.md#create)

### Monitor export progress

As an export job processes, you can monitor its status by making a GET request to the `/export/jobs` endpoint and including the `id` of the export job in the path. The export job is complete once the `status` field returns the value "SUCCEEDED".

More detailed information about using this endpoint can be found in the [export jobs endpoint guide](../api/export-jobs.md#get)

## Next steps

Once the export has completed successfully, your data is available within the [!DNL Data Lake] in [!DNL Experience Platform]. You can then use the [[!DNL Data Access API]](https://www.adobe.io/experience-platform-apis/references/data-access/) to access the data using the `batchId` associated with the export. Depending on the size of the segment, the data may be in chunks and the batch may consist of several files.

For step-by-step instructions on how to use the [!DNL Data Access] API to access and download batch files, follow the [Data Access tutorial](../../data-access/tutorials/dataset-data.md).

You can also access successfully exported segment data using [!DNL Adobe Experience Platform Query Service]. Using the UI or RESTful API, [!DNL Query Service] allows you to write, validate, and run queries on data within the [!DNL Data Lake].

For more information on how to query audience data, please review the documentation on [[!DNL Query Service]](../../query-service/home.md).
