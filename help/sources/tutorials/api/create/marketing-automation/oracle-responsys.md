---
keywords: Experience Platform;home;popular topics;oracle;
title: (Beta) Create an Oracle Responsys Base Connection Using the Flow Service API
description: Learn how to connect Adobe Experience Platform to Oracle Responsys using the Flow Service API.
hide: true
hidefromtoc: true
exl-id: 76659f5a-c923-488c-88f6-1919bc6a7bb5
---
# (Beta) Create an [!DNL Oracle Responsys] base connection using the [!DNL Flow Service] API

>[!NOTE]
>
>The [!DNL Oracle Responsys] source is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labeled connectors.

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Oracle Responsys] using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting Started

This guide requires a working understanding of the following components of Platform:

* [Sources](../../../../home.md): Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): Platform provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you need to know in order to successfully connect to [!DNL Oracle Responsys] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Oracle Responsys], you must provide values for the following connection properties:

| Credential | Description |
| --- | --- |
| `endpoint` | The REST authentication endpoint URL of your [!DNL Oracle Responsys] instance.  |
| `clientId` | The client ID of your [!DNL Oracle Responsys] instance. |
| `clientSecret` | The client secret of your [!DNL Oracle Responsys] instance. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The value for the connection specification ID of the [!DNL Oracle Responsys] source is fixed as: `ff4274f2-c9a9-11eb-b8bc-0242ac130003`. |

For more information on authentication credentials for [!DNL Oracle Responsys], see the [[!DNL Oracle Responsys] guide on authentication](https://docs.oracle.com/en/cloud/saas/marketing/responsys-develop/API/GetStarted/authentication.htm).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Oracle Responsys] authentication credentials as part of the request parameters.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Oracle Responsys]:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json'
  -d '{
      "name": "Oracle Responsys Base Connection",
      "description": "Base Connection for Oracle Responsys",
      "auth": {
          "specName": "Basic Authentication",
          "params": {
              "endpoint": "{ENDPOINT}",
              "clientId": "{CLIENT_ID}",
              "clientSecret": "{CLIENT_SECRET}"
          }
      },
      "connectionSpec": {
          "id": "ff4274f2-c9a9-11eb-b8bc-0242ac130003",
          "version": "1.0"
      }
  }'
```

| Parameter | Description |
| --- | --- |
| `name` | The name of your [!DNL Oracle Responsys] base connection. It is recommended to provide a descriptive name as you can use this value to look up your base connection. |
| `description` | (Optional) A property that you can include to provide supplementary information on your base connection. |
| `auth.specName` | The authentication type used for the connection. |
| `auth.params.endpoint` | The REST authentication endpoint URL of your [!DNL Oracle Responsys] server.  |
| `auth.params.clientId` | The client ID of your [!DNL Oracle Responsys] instance. |
| `auth.params.clientSecret` | The client secret of your [!DNL Oracle Responsys] instance. |
| `connectionSpec.id` | The value for the connection specification ID of the [!DNL Oracle Responsys] source is fixed as: `ff4274f2-c9a9-11eb-b8bc-0242ac130003`. |

**Response**

A successful response returns details of the newly created base connection, including its unique identifier (`id`). This ID is required in the next step to create a source connection.

```json
{
    "id": "2484f2df-c057-4ab5-84f2-dfc0577ab592",
    "etag": "\"10033e77-0000-0200-0000-5e96785b0000\""
}
```

## Next steps

By following this tutorial, you have created an [!DNL Oracle Responsys] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring marketing automation data to Platform using the [!DNL Flow Service] API](../../collect/marketing-automation.md)
