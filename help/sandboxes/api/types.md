---
keywords: Experience Platform;home;popular topics;list sandboxes
solution: Experience Platform
title: Sandbox Types API Endpoint
description: You can retrieve a list of supported sandbox types for your organization by making a GET request to the /sandboxTypes endpoint.
role: Developer
exl-id: eb5e1b44-37f5-4ed5-98f5-ac8db8792c7d
TQID: https://experienceleague.adobe.com/XMFMjrBV82u5kZJwQ2HbjNs3jRMTlftVFwR9RFUUB10
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# Sandbox Types endpoint

You can retrieve a list of supported sandbox types for your organization by making a GET request to the `/sandboxTypes` endpoint.

## Getting started

The API endpoint used in this guide is part of the [[!DNL Sandbox] API](https://www.adobe.io/experience-platform-apis/references/sandbox). Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Retrieve a list of supported sandbox types

You can retrieve a list of supported sandbox types for your organization by making a GET request to the `/sandboxTypes` endpoint.

**API format**

```http
GET /sandboxTypes
```

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/sandbox-management/sandboxTypes \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
```

**Response**

A successful response returns a list of sandbox types that are supported for your organization.

```json
{
    "sandboxTypes": [
        "production",
        "development"
    ]
}
```
