---
title: Data Hygiene API (Alpha)
description: Learn how to programmatically correct or delete your customers' stored personal data in Adobe Experience Platform.
hide: true
hidefromtoc: true
exl-id: 78c8b15b-b433-4168-a1e8-c97b96e4bf85
---
# Data Hygiene API (Alpha)

>[!IMPORTANT]
>
>The Data Hygiene API is currently in alpha and your organization may not have access to it yet. The functionality described in this document is subject to change.

The Data Hygiene API allows you to programmatically correct or delete your customers' stored personal data in Adobe Experience Platform. Unlike the Privacy Service API, these operations do not need to be associated with legal privacy regulations and can be used purely for keeping your data clean and accurate.

You can access the API through the following root path: `https://platform.adobe.io/data/core/hygiene/`

## Getting started

This section provides an introduction to the core concepts you need to know before attempting to make calls to the Data Hygiene API.

### Gather values for required headers

In order to make calls to the Data Hygiene API, you must first gather your authentication credentials. These are the same credentials that are used to access the Privacy Service API. Follow the [getting started guide](./api/getting-started.md) for the Privacy Service API to generate values for each of the required headers for the Data Hygiene API, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {ORG_ID}`

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

* `Content-Type: application/json`

### Reading sample API calls

This document provides an example API call to demonstrate how to format your requests. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../landing/api-guide.md#sample-api) in the getting started guide for Experience Platform APIs.

## Create a delete job

You can create a delete job by making a POST request.

**API format**

```http
POST /jobs
```

**Request**

The request payload is structured similarly to that of a [delete request in the Privacy Service API](./api/privacy-jobs.md#access-delete). It includes a `users` array whose objects represent the users whose data is to be deleted.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/hygiene/jobs \
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
| `users` | An array containing a collection of at least one user whose information you would like to delete. Each user object contains the following information: <ul><li>`key`: An identifier for a user that is used to qualify the separate job IDs in the response data. It is best practice to choose a unique, easily identifiable string for this value so it can be referenced or looked up later.</li><li>`action`: An array that lists desired actions to take on the user's data. Must contain a single string value: `delete`.</li><li>`userIDs`: A collection of identities for the user. The number of identities a single user can have is limited to nine. Each identity contains the following properties: <ul><li>`namespace`: The [identity namespace](../identity-service/namespaces.md) associated with the ID. This can be a [standard namespace](./api/appendix.md#standard-namespaces) recognized by Platform, or it can be a custom namespace defined by your organization. The type of namespace used must be reflected in the `type` property.</li><li>`value`: The identity value.</li><li>`type`: Must be set to `standard` if using a globally recognized namespace, or `custom` if you are using a namespace defined by your organization.</li></ul></li></ul> |

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
