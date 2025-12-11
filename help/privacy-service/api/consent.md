---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Consent API Endpoint
description: Learn how to manage customer consent requests for Experience Cloud applications using the Privacy Service API.
role: Developer
exl-id: ec505749-c0a9-4050-be56-4c0657807ec7
---
# Consent endpoint

Certain regulations require explicit customer consent before their personal data can be collected. The `/consent` endpoint in the [!DNL Privacy Service] API allows you to process customer consent requests and integrate them into your privacy workflow.

Before using this guide, please refer to the [getting started](./getting-started.md) guide for information on the required authentication headers presented in the example API call below.

## Process a customer consent request

Consent requests are processed by making a POST request to the `/consent` endpoint.

**API format**

```http
POST /consent
```

**Request**

The following request creates a new consent job for the user IDs provided in the `entities` array.

```shell
curl -X POST \
  https://platform.adobe.io/data/core/privacy/consent \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -d '{
        "optOutOfSale": true,
        "entities": [
          {
            "nameSpace": "email",
            "values": [
              "dsmith@acme.com",
              "ajones@acme.com"
            ]
          },
          {
            "nameSpace": "ECID",
            "values": [
              "443636576799758681021090721276"
            ]
          }
        ]
      }'
```

| Property | Description |
| --- | --- |
| `optOutOfSale` | When set to true, indicates that the users provided under `entities` wish to opt-out of the sale or sharing of their personal data. |
| `entities` | An array of objects indicating the users who the consent request applies to. Each object contains a `namespace` and an array of `values` to match individual users with that namespace. |
| `nameSpace` | Each object in the `entities` array must contain one of the [standard identity namespaces](./appendix.md#standard-namespaces) recognized by the Privacy Service API. |
| `values` | An array of values for each user, corresponding with the provided `nameSpace`. |

{style="table-layout:auto"}

>[!NOTE]
>
>For more information on how to determine which customer identity values to send to [!DNL Privacy Service], see the guide on [providing identity data](../identity-data.md).

**Response**

A successful response returns HTTP status 202 (Accepted) with no payload, indicating that the request was accepted by [!DNL Privacy Service] and is undergoing processing.
