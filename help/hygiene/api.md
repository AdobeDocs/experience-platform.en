---
title: Data Hygiene API Guide
description: Learn how to programmatically correct or delete your customers' stored personal data in Adobe Experience Platform.
exl-id: 78c8b15b-b433-4168-a1e8-c97b96e4bf85
---
# Data Hygiene API guide

The Data Hygiene API allows you to programmatically correct or delete your customers' stored personal data in Adobe Experience Platform. Unlike the Privacy Service API, these operations do not need to be associated with legal privacy regulations and can be used purely for keeping your data clean and accurate.

You can access the API through the following root path: `https://platform.adobe.io/data/core/hygiene/`

## Getting started

This section provides an introduction to the core concepts you need to know before attempting to make calls to the Data Hygiene API.

### Gather values for required headers

In order to make calls to the Data Hygiene API, you must first gather your authentication credentials. These are the same credentials that are used to access the Privacy Service API. Follow the [getting started guide](./api/getting-started.md) for the Privacy Service API to generate values for each of the required headers for the Data Hygiene API, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {IMS_ORG}`

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

* `Content-Type: application/json`

### Reading sample API calls

This document provides an example API call to demonstrate how to format your requests. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../landing/api-guide.md#sample-api) in the getting started guide for Experience Platform APIs.

## Delete an identity

You can delete a customer identity by making a POST request to the `/workorder` endpoint.

**API format**

```http
POST /workorder
```

**Request**

```shell
curl -X POST \
  https://platform.adobe.io/data/core/hygiene/workorder \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'Content-Type: application/json' \
  -d '{
        "action": "delete_identity",
        "datasetId": "c48b51623ec641a2949d339bad69cb15",
        "identities": [
          {
            "namespace": {
              "code": "email"
            },
            "id": "poul.anderson@example.com"
          },
          {
            "namespace": {
              "code": "email"
            },
            "id": "cordwainer.smith@gmail.com"
          },
          {
            "namespace": {
              "code": "email"
            },
            "id": "cyril.kornbluth@yahoo.com"
          }
        ]
      }'
```

| Property | Description |
| --- | --- |
| `action` | The action to be performed. The value must be set to `delete_identity` when deleting identities. |
| `datasetId` | The ID of the dataset that you are deleting identities from. |
| `identities` | An array containing the identities of at least one user whose information you would like to delete. Each identity is comprised of an [identity namespace](../identity-service/namespaces.md) and a value:<ul><li>`namespace`: Contains a single string property, `code`, which represents the identity namespace. </li><li>`id`: The identity value. |

{style="table-layout:auto"}

**Response**

A successful response returns the details the created work order.

```json
{
  "workorderId": "ID6c28e2d2d2b54079aadf7be94568f6d3",
  "orgId": "{IMS_ORG}",
  "operation": "delete_identity",
  "operationCount": 3,
  "status": "received",
  "created_at": "2022-04-07T15:56:49.431+00:00",
  "updated_at": "2022-04-07T15:33:10.664+00:00"
}
```

| Property | Description |
| --- | --- |
| `workorderId` | The ID of the work order. This can be used to look up the work order later when checkin its status. |
| `orgId` | The ID of the dataset that you are deleting identities from. |
| `identities` | An array containing the identities of at least one user whose information you would like to delete. Each identity is comprised of an [identity namespace](../identity-service/namespaces.md) and a value:<ul><li>`namespace`: Contains a single string property, `code`, which represents the identity namespace. </li><li>`id`: The identity value. |
