---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Secure Python Data Access SDK
topic: tutorial
---

# Secure Python Data Access SDK

The Secure Python Data Access SDK is a software development kit that enables reading and writing of datasets from Adobe Experience Platform.

## Getting started

You are required to have completed the [authentication](../../tutorials/authentication.md) tutorial in order to have access to the values to make calls to the Secure Python Data Access SDK:

- `{ACCESS_TOKEN}`
- `{API_KEY}`
- `{IMS_ORG}`

All resources in Experience Platform are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

- `{SANDBOX_NAME}`

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
| `SANDBOX_ID` | The `{SANDBOX_ID}` value of your sandbox. |
| `SANDBOX_NAME` | The `{SANDBOX_NAME}` value of your sandbox. |

## Installation

(I'm not sure?)

## Reading from a dataset

After setting the environment variables and completing installation, the dataset can now be read into the pandas dataframe.

```python
from platform_sdk.client_context import ClientContext
from platform_sdk.dataset_reader import DatasetReader

client_context = ClientContext(api_key=<api_key>,
                               org_id=<org_id>,
                               service_token=<service_token>,
                               user_token=<user_token>,
                               sandbox_id=<sandbox_id>,
                               sandbox_name=<sandbox_name>)
                               
dataset_reader = DatasetReader(client_context, <dataset_id>)
df = dataset_reader.read()
```