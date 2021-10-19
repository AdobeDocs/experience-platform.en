---
keywords: Experience Platform;destination api;ad-hoc activation;activate segments ad-hoc
solution: Experience Platform
title: (Beta) Activate audience segments through ad-hoc activation API
description: This document contains examples on how to activate audience segments to your destinations using the Adobe Experience Platform ad-hoc activation API
topic-legacy: tutorial
type: Tutorial
hidefromtoc: yes
hide: yes
---

# (Beta) Activate audience segments through ad-hoc activation API

>[!IMPORTANT]
>
>The [!DNL ad-hoc activation API] in Platform is currently in beta. The documentation and the functionality are subject to change.

## Overview {#overview}

The ad-hoc activation API allows marketers to programmatically activate audience segments to destinations, in a fast and efficient manner, for situations where immediate activation is required.

This article illustrates the end-to-end workflow for activating segments via the ad-hoc activation API, including the segmentation jobs that take place before activation.

![ad-hoc-activation](../assets/api/ad-hoc-activation/ad-hoc-activation-overview.png)

In practice, most users only need to [run the ad-hoc activation job](#activation-job), unless they need a more up-to-date segmentation.

>[!NOTE]
>
>Ad-hoc audience activation is only supported by batch destinations.

## Guardrails {#guardrails}

Keep in mind the following guardrails when using the ad-hoc activation API.

* Each ad-hoc activation job can activate up to 50 segments. Attempting to activate more than 50 segments per job will cause the job to fail.
* You can run up to 20 ad-hoc activation jobs per day.
* Ad-hoc activation jobs cannot run in parallel with scheduled export jobs. Before running an ad-hoc activation job, make sure the scheduled export job has finished. See [destination dataflow monitoring](../../dataflows/ui/monitor-destinations.md) to keep an eye on each activation flow status. For example, if your activation dataflow shows a **[!UICONTROL Processing]** status, wait for it to finish before running the ad-hoc activation job.

## Getting started {#getting-started}

### Step 1: Prerequisites {#prerequisites}

Before you can make calls to the Adobe Experience Platform APIs, make sure you meet the following prerequisites:

* You have an IMS Organization account with access to Adobe Experience Platform.
* Your Experience Platform account has the `developer` and `user` roles enabled for the Adobe Experience Platform API product profile. Contact your [Admin Console](../../access-control/home.md) administrator to enable these roles for your account.
* You have an Adobe ID. If you do not have an Adobe ID, go to the [Adobe Developer Console](https://developer.adobe.com/console) and create a new account.

### Step 2: Gather credentials {#credentials}

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{IMS_ORG}`

Resources in Experience Platform can be isolated to specific virtual sandboxes. In requests to Platform APIs, you can specify the name and ID of the sandbox that the operation will take place in. These are optional parameters.

*   x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in Experience Platform, see the [sandbox overview documentation](../../sandboxes/home.md).

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`

### Swagger documentation {#swagger-docs}

You can find accompanying reference documentation for the segmentation and segment export jobs from this article in Swagger:

* [`getSegmentJobs`](https://www.adobe.io/experience-platform-apis/references/segmentation/#operation/getSegmentJobs)
* [`postExportJob`](https://www.adobe.io/experience-platform-apis/references/segmentation/#operation/getSegmentJobs)

### Step 3: Create activation flow in the Platform UI {#activation-flow}

To activate segments ad-hoc to a destination, you must first have an activation flow configured in the Platform UI, for the chosen destination.

This includes going into the activation workflow, selecting your segments, configuring a schedule, and activating them.

See the following tutorial for detailed instructions on how to configure an activation flow for your batch destinations: [Activate audience data to batch profile export destinations](../ui/activate-batch-profile-destinations.md).

## Step 4: Run segmentation jobs (optional) {#segmentation-jobs}

### Run the segment creation job {#segmentation-job}

>[!NOTE]
>
>Platform runs segmentation jobs periodically. You should only run this job manually if you need a more up-to-date segmentation result. Otherwise, skip to [running the ad-hoc activation job](#activation-job).

You can create a new segment job by making a POST request to the `/segment/jobs` endpoint and including in the body the ID of the segment definition from which you would like to create a new audience.

Refer to [Create a new segment job](../../segmentation/api/segment-jobs.md#create) for detailed instructions on how to make this API call.

### Run the segment export job {#export-job}

>[!NOTE]
>
>Platform runs segmentation jobs periodically. You should only run this job manually if you need a more up-to-date segmentation result. Otherwise, skip to [running the ad-hoc activation job](#activation-job).

Once the segmentation job has completed successfully, run the segment export job.

You can create a new export job by making a POST request to the `/export/jobs` endpoint.

Refer to [Create a new export job](../../segmentation/api/export-jobs.md#create) for detailed instructions on how to make this API call.

## Step 5: Run the ad-hoc activation job {#activation-job}

Once the segment export job has completed, you can trigger the activation.

>[!WARNING]
>
>You can run up to 20 activation jobs per day, and each activation job can include a maximum of 50 segments. Attempting to activate more than 50 segments per job will cause the job to fail.

### Request

```shell

curl -X POST https://platform.adobe.io/data/core/activation/disflowprovider/adhocrun \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -d '
{
   "activationInfo":{
      "destinationId1":[
         "segmentId1",
         "segmentId2"
      ],
      "destinationId2":[
         "segmentId2",
         "segmentId3"
      ]
   },
   "exportId":[
      "exportid11",
      "exportid12"
   ]
}
```

| Property | Description |
| -------- | ----------- |
| <ul><li>`destinationId1`</li><li>`destinationId2`</li></ul> | The IDs of the destination instances to which you want to activate audience segments. |
| <ul><li>`segmentId1`</li><li>`segmentId2`</li><li>`segmentId3`</li></ul>  | The IDs of the audience segments that you want to activate to the selected destination. |
| <ul><li>`exportid11`</li><li>`exportid12`</li></ul> | The IDs returned in the response of the [segment export](../../segmentation/api/export-jobs.md#create) job. |

### Response

A successful response returns HTTP status 200.

```shell
{
   "code":"DEST-ADH-200",
   "message":"Adhoc run triggered successfully",
   "statusURLs":[
      "https://platform.adobe.io/data/core/activation/flowservice/runs?properties=providerRefId=ADH:segment-id-1",
      "https://platform.adobe.io/data/core/activation/flowservice/runs?properties=providerRefId=ADH:segment-id-2"
   ]
}
```

## API error handling

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](https://experienceleague.adobe.com/docs/experience-platform/landing/troubleshooting.html?lang=en#api-status-codes) and [request header errors](https://experienceleague.adobe.com/docs/experience-platform/landing/troubleshooting.html?lang=en#request-header-errors) in the Platform troubleshooting guide.
