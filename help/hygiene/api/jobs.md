---
title: Delete Consumer Records using the Data Hygiene API
description: Learn how to programmatically correct or delete your customers' stored personal data in Adobe Experience Platform.
hide: true
hidefromtoc: true
exl-id: d80a4be3-e072-4bb4-a56d-b34a20f88c78
---
# Delete consumer records using the Data Hygiene API

>[!IMPORTANT]
>
>This endpoint represents the beta functionality for record deletes. For the latest functionality, please use the [`/workorder` endpoint](./workorder.md) instead.

The Data Hygiene API allows you to programmatically correct or delete your customers' stored personal data in Adobe Experience Platform.

You can access the API through the same root path as the [Privacy Service API](../../privacy-service/api/overview.md): `https://platform.adobe.io/data/core/privacy/`

## Getting started

This section provides an introduction to the core concepts you need to know before attempting to make calls to the Data Hygiene API.

### Gather values for required headers

In order to make calls to the Data Hygiene API, you must first gather your authentication credentials. These are the same credentials that are used to access the Privacy Service API. Refer to the [API overview](./overview.md#getting-started) to generate values for each of the required headers for the Data Hygiene API, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

* `Content-Type: application/json`

### Reading sample API calls

This document provides an example API call to demonstrate how to format your requests. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/api-guide.md#sample-api) in the getting started guide for Experience Platform APIs.

## Create a delete job

You can create a delete job by making a POST request.

**API format**

```http
POST /jobs
```

**Request**

The request payload is structured similarly to that of a [delete request in the Privacy Service API](../../privacy-service/api/privacy-jobs.md#access-delete). It includes a `users` array whose objects represent the users whose data is to be deleted.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/privacy/jobs \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'Content-Type: application/json' \
  -d '{
        "companyContexts": [
          {
            "namespace": "imsOrgID",
            "value": "{ORG_ID}"
          }
        ],
        "users": [
          {
            "key": "John Doe",
            "action": [
              "delete"
            ],
            "userIDs": [
              {
                "namespace": "email",
                "value": "johnd@example.com",
                "type": "standard",
              },
              {
                "namespace": "ECID",
                "value": "9cbefef1-dd44-4411-87db-2d387bf882bc",
                "type": "standard"
              }
            ]
          },
          {
            "key": "Jane Doe",
            "action": [
              "delete"
            ],
            "userIDs": [
              {
                "namespace": "Loyalty ID",
                "value": "30583967185734",
                "type": "custom"
              }
            ]
          }
        ]
      }'
```

| Property | Description |
| --- | --- |
| `companyContexts` | An array containing authentication information for your organization. It must contain a single object with the following properties: <ul><li>`namespace`: Must be set to `imsOrgID`.</li><li>`value`: Your IMS Org ID. This is the same value that is provided in the `x-gw-ims-org-id` header.</li></ul> |
| `users` | An array containing a collection of at least one user whose information you would like to delete. Each user object contains the following information: <ul><li>`key`: An identifier for a user that is used to qualify the separate job IDs in the response data. It is best practice to choose a unique, easily identifiable string for this value so it can be referenced or looked up later.</li><li>`action`: An array that lists desired actions to take on the user's data. Must contain a single string value: `delete`.</li><li>`userIDs`: A collection of identities for the user. The number of identities a single user can have is limited to nine. Each identity contains the following properties: <ul><li>`namespace`: The [identity namespace](../../identity-service/namespaces.md) associated with the ID. This can be a [standard namespace](../../privacy-service/api/appendix.md#standard-namespaces) recognized by Platform, or it can be a custom namespace defined by your organization. The type of namespace used must be reflected in the `type` property.</li><li>`value`: The identity value.</li><li>`type`: Must be set to `standard` if using a globally recognized namespace, or `custom` if you are using a namespace defined by your organization.</li></ul></li></ul> |

{style="table-layout:auto"}

**Response**

A successful response returns the details of the created jobs.

```json
{
  "requestId": "16318094870430026RX-334",
  "totalRecords": 2,
  "jobs": [
    {
      "jobId": "c9b5fd82-db14-4c27-8bec-64a06e1fbda4",
      "customer": {
        "user": {
          "key": "John Doe",
          "action": ["delete"],
          "userIDs": [
            {
              "namespace": "email",
              "value": "johnd@example.com",
              "type": "standard",
              "namespaceId": 6,
              "isDeletedClientSide": false
            },
            {
              "namespace": "ECID",
              "value": "9cbefef1-dd44-4411-87db-2d387bf882bc",
              "type": "standard",
              "namespaceId": 4,
              "isDeletedClientSide": false
            }
          ]
        }
      }
    },
    {
      "jobId": "8ddc8e73-cecc-4be3-ae44-cdba127f7c70",
      "customer": {
        "user": {
          "key": "Jane Doe",
          "action": ["delete"],
          "userIDs": [
            {
              "namespace": "Loyalty ID",
              "value": "30583967185734",
              "type": "custom",
              "isDeletedClientSide": false
            }
          ]
        }
      }
    }
  ]
}
```
