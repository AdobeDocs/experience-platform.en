---
title: Create a PathFactory Base Connection Using the Flow Service API
description: Learn how to authenticate your PathFactory account against Experience Platform using the Flow Service API.
badge: Beta
exl-id: 2bdfe38b-d3f7-480f-87c6-0b98b9521be2
---
# Create a [!DNL PathFactory] base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

Read this document to learn how to create a base connection for [!DNL PathFactory] using the [[!DNL Flow Service] API](<https://www.adobe.io/experience-platform-apis/references/flow-service/>).

## Get started

This guide requires a working understanding of the following components of Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Experience Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Experience Platform instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Experience Platform APIs

For information on how to successfully make calls to Experience Platform APIs, see the guide on [getting started with Experience Platform APIs](../../../../../landing/api-guide.md).

The following section provides additional information that you will need to know in order to successfully connect to [!DNL PathFactory] using the [!DNL Flow Service] API.

### Gather Required Credentials {#gather-credentials}

To access your PathFactory account on the Experience Platform, you must provide the following values:

| Credential | Description |
| ---------- | ----------- |
| Username | Your [!DNL PathFactory] account username. This is essential for identifying your account in the system. |
| Password | The password associated with your [!DNL PathFactory] account. Ensure this is kept secure to prevent unauthorized access. |
| Domain | The domain associated with your [!DNL PathFactory] account. This typically refers to the unique identifier within your [!DNL PathFactory] URL. |
| Access Token | A unique token used for API authentication to ensure secure communication between your systems and [!DNL PathFactory]. |
| API Endpoints | Specific API endpoints for accessing data: Visitors, Sessions, and Page Views. Each endpoint corresponds to different data sets you can retrieve. **Note:** These are pre-defined by [!DNL PathFactory] and are specific to the data you intend to access: <ul><li>**Visitors Endpoint**: `/api/public/v3/data_lake_apis/visitors.json`</li><li>**Sessions Endpoint**: `/api/public/v3/data_lake_apis/sessions.json`</li><li>**Page Views Endpoint**: `/api/public/v3/data_lake_apis/page_views.json`</li></ul> |

For more information on how to secure and use your credentials, and how to obtain and refresh your access token, visit the [[!DNL PathFactory] Support Center](https://support.pathfactory.com/categories/adobe/). This resource offers comprehensive guides on managing your credentials and ensuring effective and secure API integration.

## Create a base connection

A base connection retains information between your source and Experience Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL PathFactory] authentication credentials as part of the request body.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL PathFactory]:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "PathFactory base connection",
      "description": "PathFactory base connection",
      "auth": {
          "specName": "Basic Authentication",
          "params": {
              "host": "acme-ab12c3d4e5fg6hijk7lmnop8qrst"
              "clientId": "pathfactory",
              "clientSecret": "xxxx"
          }
      },
      "connectionSpec": {
          "id": "ea1c2a08-b722-11eb-8529-0242ac130003",
          "version": "1.0"
      }
  }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.clientId` | The client ID associated with your [!DNL PathFactory] application. |
| `auth.params.clientSecret` | The client secret associated with your [!DNL PathFactory] application. |
| `connectionSpec.id` | The [!DNL PathFactory] connection specification ID: `ea1c2a08-b722-11eb-8529-0242ac130003`. |

**Response**

A successful response returns the newly created connection, including its unique connection identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "2fce94c1-9a93-4971-8e94-c19a93097129",
    "etag": "\"d403848a-0000-0200-0000-5e978f7b0000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL PathFactory] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring marketing automation data to Experience Platform using the [!DNL Flow Service] API](../../collect/marketing-automation.md)
