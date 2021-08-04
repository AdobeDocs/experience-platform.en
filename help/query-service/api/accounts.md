---
keywords: Experience Platform;home;popular topics;query service;api guide;Query service;query service accounts;accounts;
solution: Experience Platform
title: Accounts API Endpoint
topic-legacy: connection parameters
description: You can create a Query Service account for persistent .
exl-id: 1667f4a5-e6e5-41e9-8f9d-6d2c63c7d7d6
---
# Accounts endpoint

In Adobe Experience Platform Query Service, accounts are used to create non-expiring credentials that you can use with external SQL clients. You can use the `/accounts` endpoint in the Query Service API, which allows you to programatically create, retrieve, edit, and delete your Query Service integration accounts (also known as a technical account).

## Getting started

The endpoints used in this guide are part of the Query Service API. Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls.

## Create an account

You can create a Query Service integration account by making a POST request to the `/accounts`/ endpoint.

**API format**

```http
POST /accounts
```

**Request**

The following request will create a new Query Service integration account for your IMS Organization. 

```shell
curl -X POST https://platform.adobe.io/data/foundation/queryauth/accounts \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'content-type: application/json' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '
{
    "description": "Sample description"
}'
```

| Property | Description |
| -------- | ----------- |
| `description` | *(Optional)* A description for the Query Service integration account. |

**Response**

A successful response returns HTTP status 200, with details of your newly created Query Service integration account. You can use these account details to connect Query Service with external clients.

```json
{
    "technicalAccountName": "2428A037-D963-47C2-A14D-CD816EFB0AA3@TECHACCT.ADOBE.COM",
    "technicalAccountId": "E09A0DFB5FDB25D90A494012",
    "credential": "3ba00k32de304ceda702bc59567c35f8"
}
```

| Property | Description |
| -------- | ----------- |
| `technicalAccountName` | The name of your Query Service integration account. |
| `technicalAccountId` | The ID of your Query Service integration account. |
| `credential` | The 