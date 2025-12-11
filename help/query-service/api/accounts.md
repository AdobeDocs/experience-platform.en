---
keywords: Experience Platform;home;popular topics;query service;api guide;Query service;query service accounts;accounts;
solution: Experience Platform
title: Accounts API Endpoint
description: You can create a Query Service account for persistent .
role: Developer
exl-id: 1667f4a5-e6e5-41e9-8f9d-6d2c63c7d7d6
---
# Accounts endpoint

In Adobe Experience Platform Query Service, accounts are used to create non-expiring credentials that you can use with external SQL clients. You can use the `/accounts` endpoint in the Query Service API, which allows you to programatically create, retrieve, edit, and delete your Query Service integration accounts (also known as a technical account).

## Getting started

The endpoints used in this guide are part of the Query Service API. Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls.

## Create an account

You can create a Query Service integration account by making a POST request to the `/accounts` endpoint.

**API format**

```http
POST /accounts
```

**Request**

The following request will create a new Query Service integration account for your organization. 

```shell
curl -X POST https://platform.adobe.io/data/foundation/queryauth/accounts \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'content-type: application/json' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '
{
    "accountName": "sampleName",
    "assignedToUser": "sample@example.com",
    "credential": "samplecredential",
    "description": "Sample description"
}'
```

| Property | Description |
| -------- | ----------- |
| `accountName` | **Required** The name of the Query Service integration account. |
| `assignedToUser` | **Required** The Adobe ID that the Query Service integration account will be created for. |
| `credential` | *(Optional)* The credential that is used for the Query Service integration. If not specified, the system will automatically generate a credential for you. |
| `description` | *(Optional)* A description for the Query Service integration account. |

**Response**

A successful response returns HTTP status 200, with details of your newly created Query Service integration account. You can use these account details to connect Query Service with external clients.

```json
{
    "technicalAccountName": "2428A037-D963-47C2-A14D-CD816EFB0AA3@TECHACCT.ADOBE.COM",
    "technicalAccountId": "E09A0DFB5FDB25D90A494012",
    "credential": "samplecredential"
}
```

| Property | Description |
| -------- | ----------- |
| `technicalAccountName` | The name of your Query Service integration account. |
| `technicalAccountId` | The ID of your Query Service integration account. This, along with the `credential`, composes your password for your account. |
| `credential` | The credential of your Query Service integration account. This, along with the `technicalAccountId`, composes your password for your account. |

## Update an account

You can update your Query Service integration account by making a PUT request to the `/accounts` endpoint.

**API format**

```http
POST /accounts/{ACCOUNT_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{ACCOUNT_ID}` | The ID of the Query Service integration account you want to update. | 

**Request**

```shell
curl -X PUT https://platform.adobe.io/data/foundation/queryauth/accounts/E09A0DFB5FDB25D90A494012 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
 {
     "accountName": "Updated account name",
     "assignedToUser": "sampleuser2@adobe.com",
     "credential": "UpdatedCredential",
     "description": "Updated description"
 }'
```

| Property | Description |
| -------- | ----------- |
| `accountName` | *(Optional)* The updated name for the Query Service integration account. |
| `assignedToUser` | *(Optional)* The updated Adobe ID that the Query Service integration account is linked to. |
| `credential` | *(Optional)* The updated credential for your Query Service account. |
| `description` | *(Optional)* The updated description for the Query Service integration account. |

**Response**

A successful response returns HTTP status 200 with information about your newly updated Query Service integration account.

```json
{
    "accountName": "Updated account name",
    "assignedToUser": "sampleuser2@adobe.com",
    "created": "2021-06-16T16:44:42.073Z",
    "createdBy": "3BF132EF5BC636C10A49400B@AdobeID",
    "credential": "UpdatedCredential",
    "description": "Updated description",
    "lastUpdated": "2021-08-03T23:47:46.588Z",
    "lastUpdatedBy": "3BF132EF5BC636C10A49400B@AdobeID",
    "technicalAccountName": "2428A037-D963-47C2-A14D-CD816EFB0AA3@TECHACCT.ADOBE.COM",
    "technicalAccountId": "E09A0DFB5FDB25D90A494012"
}
```

## List all accounts

You can retrieve a list of all the Query Service integration accounts by making a GET request to the `/accounts` endpoint.

**API format**

```http
GET /accounts
```

**Request**

```shell
curl -X GET https://platform.adobe.io/foundation/queryauth/accounts \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with a list of all the Query Service integration accounts.

```json
{
    "accounts": [
        {
            "lastUpdated": "2021-06-16T18:07:49.581Z",
            "accountName": "Use for XQL testing of account creation",
            "description": "Local test",
            "assignedToUser": "platform-ui-automation@adobe.com",
            "technicalAccountName": "ADC7EB19-63B4-4B9F-A192-EBE3CD0C034E@TECHACCT.ADOBE.COM",
            "technicalAccountId": "38645A7360CA3DF30A49400F",
            "lastUpdatedBy": "3BF132EF5BC636C10A49400B@AdobeID",
            "createdBy": "3BF132EF5BC636C10A49400B@AdobeID",
            "created": "2021-06-16T18:07:49.581Z",
            "active": true
        },
        {
            "lastUpdated": "2021-06-16T16:44:42.073Z",
            "accountName": "Use for XQL testing of account creation",
            "description": " ",
            "assignedToUser": "platform-ui-automation@adobe.com",
            "technicalAccountName": "66E91FDD-4733-45E2-A312-D87580CFA55D@TECHACCT.ADOBE.COM",
            "technicalAccountId": "392202E060CA2A770A49420A",
            "lastUpdatedBy": "3BF132EF5BC636C10A49400B@AdobeID",
            "createdBy": "3BF132EF5BC636C10A49400B@AdobeID",
            "created": "2021-06-16T16:44:42.073Z",
            "active": true
        }
    ],
    "_page": {
        "count": 2,
        "next": "2021-06-16T16:44:42.073Z",
        "orderby": "-created",
        "property": "active==true",
        "start": "2021-06-16T18:07:49.581Z"
    },
    "_links": {
        "next": {
            "href": "https://platform.adobe.io/data/foundation/queryauth/accounts?orderby=-created&property=active==true&start=2021-06-16T16:44:42.073Z"
        },
        "prev": {
            "href": "https://platform.adobe.io/data/foundation/queryauth/accounts?orderby=-created&property=active==true&start=2021-06-16T18:07:49.581Z&isPrevLink=true"
        }
    },
    "version": 1
}
```

## Delete an account

You can delete your Query Service integration account by making a DELETE request to the `/accounts` endpoint.

**API format**

```http
DELETE /accounts/{ACCOUNT_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{ACCOUNT_ID}` | The ID of the Query Service integration account you want to delete. | 

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/foundation/queryauth/accounts/E09A0DFB5FDB25D90A494012 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with a message stating that the account was successfully deleted.

```json
{
    "result": "Success"
}
```