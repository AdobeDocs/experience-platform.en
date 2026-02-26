---
title: Content API Endpoint
description: Learn how to retrieve your access data using the Privacy Service API.
role: Developer
exl-id: b3b7ea0f-957d-4e51-bf92-121e9ae795f5
---
# Content endpoint

Use the `/content` endpoint to securely retrieve *access information* (the information that a privacy subject can rightfully request to access) for your customers. The download URL provided in the response to a `/jobs/{JOB_ID}` GET request points to an Adobe service endpoint. You can then make a GET request to `/jobs/:JOB_ID/content` to return your customer data in JSON format. This access method implements multiple layers of authentication and access control to enhance security.

Before using this guide, please refer to the [getting started guide](./getting-started.md) for information on the required authentication headers presented in the example API call below.

>[!TIP]
>
>If you do not currently know the job ID for the access information you require, make a call to the `/jobs` endpoint and use additional query parameters to filter the results. A complete list of the available query parameters can be found in the [privacy jobs endpoint guide](./privacy-jobs.md).

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
  https://platform.adobe.io/data/core/privacy/jobs/dbe3a6a6-f8e6-11ee-a365-8d1d6df81cc5 \
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
    "submittedBy":"jsnow@adobe.com",
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
    "downloadUrl":"https://platform.adobe.io/data/core/privacy/jobs/dbe3a6a6-f8e6-11ee-a365-8d1d6df81cc5/content",
    "regulation":"gdpr"
}
```

| Property             | Description                                                                                               |
|----------------------|---------------------------------------------------------------------------------------------------------------|
| `jobId`              | A unique identifier for the privacy job.                                                                      |
| `requestId`          | A unique identifier for the specific request made to the Privacy Service.                                     |
| `userKey`            | `userKey` is the `key` value that you provided when you submitted the privacy request. The `key` value is your opportunity to provide an identifier for the data subject that makes sense to you. It is typically a unique identifier that your system created for tracking that data subject. TIP: You can list all active privacy jobs and compare your `key` to each job.                 |
| `action`             | The type of action requested. The accepted values are `access` and `delete`.                                  |
| `status`             | The current status of the privacy job.                                                                        |
| `submittedBy`        | The email address of the person who submitted the privacy job.                                                |
| `createdDate`        | The date and time when the privacy job was created.                                                           |
| `lastModifiedDate`   | The date and time when the privacy job was last modified.                                                     |
| `userIds`            | An array containing user identifiers and related information.                                                 |
| `userIds.namespace`          | The namespace used for the user identifier.                                                                   |
| `userIds.value`              | The actual value of the user identifier.                                                                      |
| `userIds.type`               | The type of identifier (for example `standard` or `custom`).                                                              |
| `userIds.namespaceId`        | An identifier for the namespace used to categorize and manage user identities.                                |
| `userIds.isDeletedClientSide`| A boolean indicating whether the identifier has been deleted on the client side.                              |
| `productResponses`           | An array containing responses from different products or services related to the privacy job.                 |
| `productResponses.product`            | The name of the product or service that was used to acquire information on the data subject.                  |
| `productResponses.retryCount`         | The number of times the request has been retried.                                                             |
| `productResponses.processedDate`      | The date and time when the product response was processed.                                                    |
| `productResponses.productStatusResponse`| An object containing the status of the product response.                                                    |
| `productResponses.productStatusResponse.status`             | The status of the product response.                                                                           |
| `downloadURL`        | This attribute provides an endpoint, which is available to call for 60 days after the job completes. The status of the job must be `complete` and the `action` must be `access`. Otherwise, this field is absent. |
| `regulation`         | The regulatory framework under which the privacy request is being processed, such as `gdpr`, `ccpa`, `lgpd_bra`, `pdpa_tha`, and so on.         |

{style="table-layout:auto"}

## Retrieve customer access information {#retrieve-access-data}

To get the 'access information' produced in response to your data subject's query, make a GET request to the `/jobs/{JOB_ID}/content` endpoint. The response is a zip file (*.zip) that contains a folder with sub-folders for each product that holds data on the data subject.

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

**Response**

The response is a zip file (*.zip). The information is typically returned in JSON format, although that cannot be guaranteed. Extracted data can be returned in any format.

