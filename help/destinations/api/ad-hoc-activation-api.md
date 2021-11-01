---
keywords: Experience Platform;destination api;ad-hoc activation;activate segments ad-hoc
solution: Experience Platform
title: (Beta) Activate audience segments through the Experience Platform ad-hoc activation API
description: This article illustrates the end-to-end workflow for activating segments via the ad-hoc activation API, including the segmentation jobs that take place before activation.
topic-legacy: tutorial
type: Tutorial
hidefromtoc: yes
hide: yes
---

# (Beta) Activate audience segments through the Experience Platform ad-hoc activation API

>[!IMPORTANT]
>
>The [!DNL ad-hoc activation API] in Platform is currently in beta. The documentation and the functionality are subject to change.

## Overview {#overview}

The ad-hoc activation API allows marketers to programmatically activate audience segments to destinations, in a fast and efficient manner, for situations where immediate activation is required.

The diagram below illustrates the end-to-end workflow for activating segments via the ad-hoc activation API, including the segmentation jobs that take place in Platform every 24 hours.

![ad-hoc-activation](../assets/api/ad-hoc-activation/ad-hoc-activation-overview.png)

>[!NOTE]
>
>Ad-hoc audience activation is only supported by [batch file-based destinations](../destination-types.md#file-based).

## Guardrails {#guardrails}

Keep in mind the following guardrails when using the ad-hoc activation API.

* Each ad-hoc activation job can activate up to 20 segments. Attempting to activate more than 20 segments per job will cause the job to fail.
* Ad-hoc activation jobs cannot run in parallel with scheduled [segment export jobs](../../segmentation/api/export-jobs.md). Before running an ad-hoc activation job, make sure the scheduled segment export job has finished. See [destination dataflow monitoring](../../dataflows/ui/monitor-destinations.md) for information on how to monitor the status of activation flows. For example, if your activation dataflow shows a **[!UICONTROL Processing]** status, wait for it to finish before running the ad-hoc activation job.
* Do not run more than one concurrrent ad-hoc activation job per segment.

## Segmentation considerations {#segmentation-considerations}

Adobe Experience Platform runs scheduled segmentation jobs once every 24 hours. The ad-hoc activation API runs based on the latest segmentation results.

## Step 1: Prerequisites {#prerequisites}

Before you can make calls to the Adobe Experience Platform APIs, make sure you meet the following prerequisites:

* You have an IMS Organization account with access to Adobe Experience Platform.
* Your Experience Platform account has the `developer` and `user` roles enabled for the Adobe Experience Platform API product profile. Contact your [Admin Console](../../access-control/home.md) administrator to enable these roles for your account.
* You have an Adobe ID. If you do not have an Adobe ID, go to the [Adobe Developer Console](https://developer.adobe.com/console) and create a new account.

## Step 2: Gather credentials {#credentials}

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

## Step 3: Create activation flow in the Platform UI {#activation-flow}

Before you can activate segments through the ad-hoc activation API, you must first have an activation flow configured in the Platform UI, for the chosen destination.

This includes going into the activation workflow, selecting your segments, configuring a schedule, and activating them.

See the following tutorial for detailed instructions on how to configure an activation flow for your batch destinations: [Activate audience data to batch profile export destinations](../ui/activate-batch-profile-destinations.md).

## Step 4: Obtain the latest segment export job ID {#segment-export-id}

Before you can run the ad-hoc activation job, you must obtain the ID of the latest segment export job. You must pass this ID in the ad-hoc activation job request.

Follow the instructions described [here](../../segmentation/api/export-jobs.md#retrieve-list) to retrieve a list of all the segment export jobs.

In the response, look for the first record that includes the schema property below.

```
"schema":{
   "name":"_xdm.context.profile"
}
```

The segment export job ID is in the `id` property, as shown below.

![segment export job ID](../assets/api/ad-hoc-activation/segment-export-job-id.png)


## Step 5: Run the ad-hoc activation job {#activation-job}

Adobe Experience Platform runs scheduled segmentation jobs once every 24 hours. The ad-hoc activation API runs based on the latest segmentation results.

Before running an ad-hoc activation job, make sure the scheduled segment export job for your segments has finished. See [destination dataflow monitoring](../../dataflows/ui/monitor-destinations.md) for information on how to monitor the status of activation flows. For example, if your activation dataflow shows a **[!UICONTROL Processing]** status, wait for it to finish before running the ad-hoc activation job.

Once the segment export job has completed, you can trigger the activation.

>[!WARNING]
>
>You can activate a maximum of 50 segments per ad-hoc activation job. Attempting to activate more segments will cause the job to fail.

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
| <ul><li>`exportid11`</li><li>`exportid12`</li></ul> | The IDs returned in the response of the [segment export](../../segmentation/api/export-jobs.md#retrieve-list) job. See [Step 4: Obtain the latest segment export job ID](#segment-export-id) for instructions on how to find this ID. |

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

| Property | Description |
| -------- | ----------- |
| `code` | The API response code. A successful call returns `DEST-ADH-200` (status code 200), while an incorrectly formatted one returns `DEST-ADH-400` (status code 400). |
| `message` | The success or error message returned by the API. |
| `statusURLs` | The status URL of the activation flow. You can track the flow progress using the [Flow Service API](../../sources/tutorials/api/monitor.md). |


## API error handling

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](https://experienceleague.adobe.com/docs/experience-platform/landing/troubleshooting.html?lang=en#api-status-codes) and [request header errors](https://experienceleague.adobe.com/docs/experience-platform/landing/troubleshooting.html?lang=en#request-header-errors) in the Platform troubleshooting guide.
