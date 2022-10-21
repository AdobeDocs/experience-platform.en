---
keywords: Experience Platform;home;popular topics;Oracle Service Cloud;oracle service cloud
title: Create an Oracle Service Cloud Source Connection Using the Flow Service API
description: Learn how to connect Adobe Experience Platform to Oracle Service Cloud using the Flow Service API.
---
# (Beta) Create a Oracle Service Cloud source connection using the [!DNL Flow Service] API

>[!NOTE]
>
>The Oracle Service Cloud source is in beta. See the [sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled sources.

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for Oracle Service Cloud using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to Oracle Service Cloud using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with Oracle Service Cloud, you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | The host URL of your Oracle Service Cloud instance. |
| `username` | The username for your Oracle Service Cloud user account. |
| `password` | The password for your Oracle Service Cloud account. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for Oracle Service Cloud is: `ba5126ec-c9ac-11eb-b8bc-0242ac130003`. |

For more information on authenticating your Oracle Service Cloud account, refer to the [[!DNL Oracle] guide on authentication](https://docs.oracle.com/en/cloud/saas/b2c-service/20c/cxska/OKCS_Authenticate_and_Authorize.html).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your Oracle Service Cloud authentication credentials as part of the request parameters.

**API format**

```http
POST /connections
```

**Request**

The following request creates a base connection for Oracle Service Cloud:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Base connection for Oracle Service Cloud",
      "description": "Base connection for Oracle Service Cloud",
      "auth": {
          "specName": "Basic Authentication",
          "params": {
              "host": "{HOST}",
              "username": "{USERNAME}",
              "password": "{PASSWORD}"
          }
      },
      "connectionSpec": {
          "id": "ba5126ec-c9ac-11eb-b8bc-0242ac130003",
          "version": "1.0"
      }
  }'
```

| Parameter | Description |
| --------- | ----------- |
| `auth.params.host` | The host URL of your Oracle Service Cloud instance. |
| `auth.params.username` | The username associated with your Oracle Service Cloud account. |
| `auth.params.password` | The password associated with your Oracle Service Cloud account. |
| `connectionSpec.id` | The Oracle Service Cloud connection specification ID: `ba5126ec-c9ac-11eb-b8bc-0242ac130003` |

**Response**

A successful response returns the newly created connection, including its unique identifier (`id`). This ID is required to explore your CRM system in the next step.

```json
{
    "id": "4267c2ab-2104-474f-a7c2-ab2104d74f86",
    "etag": "\"0200f1c5-0000-0200-0000-5e4352bf0000\""
}
```

## Next steps

By following this tutorial, you have created a Oracle Service Cloud base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring customer success data to Platform using the [!DNL Flow Service] API](../../collect/customer-success.md)
