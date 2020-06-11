---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Secure Python Data Access SDK
topic: tutorial
---

# Secure Python Data Access SDK

The Secure Python Data Access SDK is a software development kit that enables reading and writing of datasets from Adobe Experience Platform.

## Getting started

You are required to have completed the [authentication](../../tutorials/authentication.md) tutorial in order to have access to the following request headers to make calls to [!DNL Adobe Experience Platform] APIs:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

For more information on sandboxes in Platform, see the [sandbox overview documentation](../../sandboxes/home.md). 

## Environment setup

By default, the service endpoints are set to integration environment endpoints. As a result, to point to production, set the following environment variables to the following values:

| Variable | Endpoint |
| -------- | -------- |
| `ENV_CATALOG_URL` | `https://platform.adobe.io/data/foundation/catalog/` |
| `ENV_QUERY_SERVICE_URL` | `https://platform.adobe.io/data/foundation/query` |
| `ENV_BULK_INGEST_URL` | `https://platform.adobe.io/data/foundation/import/` |
| `ENV_REGISTRY_URL` | `https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas` |

Additionally, your credentials can be added as environment variables.

| Variable | Value |
| -------- | ----- |
| `ORG_ID` | Your `{IMS_ORG}` ID. |
| `SERVICE_API_KEY` | Your `{API_KEY}` value. |
| `USER_TOKEN` | Your `{ACCESS_TOKEN}` value. |
| `SERVICE_TOKEN` | (Not sure what this is) |
| `SANDBOX_ID` | |
| `SANDBOX_NAME` | |