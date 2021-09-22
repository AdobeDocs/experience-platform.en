---
keywords: Experience Platform;destination api;ad-hoc activation;activate segments ad-hoc
solution: Experience Platform
title: Activate audience segments to your destinations using the Adobe Experience Platform API
description: Activate audience segments to your destinations using the Adobe Experience Platform API
topic-legacy: tutorial
type: Tutorial
hidefromtoc: yes
hide: yes
---

# Activate audience segments through ad-hoc activation API

## Overview

Read this tutorial to understand how to use the segment create job to programmatically create audience segments, export them, and activate them to batch destinations using the ad-hoc activation API endpoint.

>[!NOTE]
>
>Ad-hoc audience activation is only supported by batch destinations.

## Getting started {#getting-started}

### Prerequisites {#prerequisites}

Before you can make calls to the Adobe Experience Platform APIs, make sure you meet the following prerequisites:

* You have an IMS Organization account with access to Adobe Experience Platform.
* Your Experience Platform account has the `developer` and `user` roles enabled for the Adobe Experience Platform API product profile. Contact your [Admin Console](../../access-control/home.md) administrator to enable these roles for your account.
* You have an Adobe ID. If you do not have an Adobe ID, go to the [Adobe Developer Console](https://developer.adobe.com/console) and create a new account.

### Gather required credentials {#credentials}

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

### Create activation flow in the Platform UI {#activation-flow}

To activate segments ad-hoc to a destination, you must first have an activation flow configured for the chosen destination.

See the following tutorial for detailed instructions on how to configure an activation flow for your destinations: [Activate audience data to batch profile export destinations](../ui/activate-batch-profile-destinations.md).

## Run the segment creation job {#segmentation-job}

You can create a new segment job by making a POST request to the `/segment/jobs` endpoint and including in the body the ID of the segment definition from which you would like to create a new audience.

Refer to [Create a new segment job](../../segmentation/api/segment-jobs.md#create) for detailed instructions on how to make this API call.

## Run the segment export job {#export-job}

Once the segmentation job has completed successfully, run the segment export job.

You can create a new export job by making a POST request to the `/export/jobs` endpoint.

Refer to [Create a new export job](../../segmentation/api/export-jobs.md#create) for detailed instructions on how to make this API call.

## Run the ad-hoc activation job {#activation-job}

Once the segment export job has completed, you can trigger the activation.

You can activate any number of segments in a single activation job.

>[!NOTE]
>
>You can run up to 20 activation jobs per day.

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
   "message":"Adhoc run triggered succesfully",
   "statusURLs":[
      "https://platform.adobe.io/data/core/activation/flowservice/runs?properties=providerRefId=ADH:segment-id-1",
      "https://platform.adobe.io/data/core/activation/flowservice/runs?properties=providerRefId=ADH:segment-id-2"
   ]
}
```

## API error handling

Destination SDK API endpoints follow the general Experience Platform API error message principles. Refer to [API status codes](https://experienceleague.adobe.com/docs/experience-platform/landing/troubleshooting.html?lang=en#api-status-codes) and [request header errors](https://experienceleague.adobe.com/docs/experience-platform/landing/troubleshooting.html?lang=en#request-header-errors) in the Platform troubleshooting guide.
