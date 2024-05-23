---
title: Content API Endpoint
description: Learn how to retrieve your access data using the Privacy Service API.
role: Developer
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
---
# Content endpoint

>[!IMPORTANT]
>
>The `/content` endpoint is currently in beta and your organization may not yet have access to it yet. The functionality and documentation are subject to change.

<!-- Q) Should this be called 'access information' or 'customer content'? -->

Enjoy enhanced security when retrieving 'access information' (the information that a privacy subject can rightfully request to access). The download URL provided in the response to a `/jobs/{JOB_ID}` GET request now points to an Adobe service endpoint. Customer data is now returned in JSON format by making a GET request to `/jobs/:JOB_ID/content`. This access method implements multiple layers of authentication and access control to enhance security.

Before using this guide, please refer to the [getting started guide](./getting-started.md) for information on the required authentication headers presented in the example API call below.

>[!TIP]
>
>If you do not currently know the job ID for the access information you require, make a call to the `/jobs`endpoint and use additional query parameters to filter the results. A complete list of the available query parameters can be found in the [privacy jobs endpoint guide](./privacy-jobs.md).

## Retrieve privacy job information

To retrieve information about a specific job, such as its current processing status, include that job's `jobId` in the path of a GET request to the `/jobs` endpoint.

**API format**

```http
GET /jobs/{JOB_ID}
```

**Request**

The following request retrieves the details of the job whose `jobId` is provided in the request path.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/privacy/jobs/32d429b1-f7f4-11ee-a365-574bcf5a525d \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}'
```

**Response**

A successful response returns the details of the specified job.

>[!NOTE]
>
>Privacy jobs must have the `complete` status to contain the `downloadUrl`. 

```json
{
    "jobId":"dbe3a6a6-f8e6-11ee-a365-8d1d6df81cc5",
    "requestId":"17129380910360540RX-753",
    "userKey":"1234",
    "action":"access",
    "status":"complete",
    "submittedBy":"tboyer@adobe.com",
    "createdDate":"04/12/2024 04:08 PM GMT",
    "lastModifiedDate":"04/12/2024 04:08 PM GMT",
    "userIds":[{
        "namespace":"ECID",
        "value":"1234",
        "type":"standard",
        "namespaceId":4,
        "isDeletedClientSide":false
        }],
    "productResponses":[{
        "product":"Identity",
        "retryCount":0,
        "processedDate":"04/12/2024 04:08 PM GMT",
        "productStatusResponse":{"status":"submitted"
        }}],
    "downloadUrl":"https://platform-stage.adobe.io/data/core/privacy/jobs/dbe3a6a6-f8e6-11ee-a365-8d1d6df81cc5/content",
    "regulation":"gdpr"
}
```

| Property             | Description                                                                                               |
|----------------------|---------------------------------------------------------------------------------------------------------------|
| `jobId`              | A unique identifier for the privacy job.                                                                      |
| `requestId`          | A unique identifier for the specific request made to the Privacy Service.                                     |
| `userKey`            | An identifier for the user related to the privacy job. This property is an internal system reference.               |
| `action`             | The type of action requested, such as access, deletion, or rectification.                                     |
| `status`             | The current status of the privacy job.                                                                        |
| `submittedBy`        | The email address of the person who submitted the privacy job.                                                |
| `createdDate`        | The date and time when the privacy job was created.                                                           |
| `lastModifiedDate`   | The date and time when the privacy job was last modified.                                                     |
| `userIds`            | An array containing user identifiers and related information.                                                 |
| `namespace`          | The namespace used for the user identifier.                                                                   |
| `value`              | The actual value of the user identifier.                                                                      |
| `type`               | The type of identifier (for example `standard` or `custom`).                                                              |
| `namespaceId`        | An identifier for the namespace used to categorize and manage user identities.                                |
| `isDeletedClientSide`| A boolean indicating whether the identifier has been deleted on the client side.                              |
| `productResponses`   | An array containing responses from different products or services related to the privacy job.                 |
| `product`            | The name of the product or service that was used to acquire information on the data subject.                  |
| `retryCount`         | The number of times the request has been retried.                                                             |
| `processedDate`      | The date and time when the product response was processed.                                                    |
| `productStatusResponse`| An object containing the status of the product response.                                                    |
| `status`             | The status of the product response.                                                                           |
| `downloadURL`        | This attribute provides an endpoint which is available to call for 60 days after the job completes. The status of the job must be `complete`. |
| `regulation`         | The regulatory framework under which the privacy request is being processed, such as GDPR, CCPA, and so on.         |

{style="table-layout:auto"}

## Retrieve customer access information {#retrieve-access-data}

To process a requests for your customer's 'access information', make a GET request to the `/jobs/{JOB_ID}/consent` endpoint. Customer data is returned in JSON format.

>[!TIP]
>
>You need a specific job ID to make this request. If you need to retrieve the specific job ID, first make a GET request to the `/jobs` endpoint and use additional query parameters to filter the results. Detailed information including the allowed query parameters can be found in the [privacy jobs endpoint guide](./privacy-jobs.md).

**API format**

```http
GET /jobs/{JOB_ID}/content
```

**Request**

The following request returns 'access information' for the job ID provided in the request.

```shell
curl -X GET \
  https://platform.adobe.io/data/core/privacy/jobs/32d429b1-f7f4-11ee-a365-574bcf5a525d/content \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \ 
  -H 'Accept: application/json`
```


