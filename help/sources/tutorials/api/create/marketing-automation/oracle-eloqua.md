---
keywords: Experience Platform;home;popular topics;oracle;eloqua;oracle eloqua
solution: Experience Platform
title: Create an Oracle Eloqua Base Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect Adobe Experience Platform to Oracle Eloqua using the Flow Service API.
---
# Create an [!DNL Oracle Eloqua] base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Oracle Eloqua] using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting Started

This guide requires a working understanding of the following components of Platform:

* [Sources](../../../../home.md): Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): Platform provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you need to know in order to successfully connect to [!DNL Oracle Eloqua] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Zoho CRM], you must provide values for the following connection properties:

| Credential | Description |
| --- | --- |
| `endpoint` |
| `username` |
| `password` |
| `connectionSpec.id` | The connection specification returns a source’s connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Oracle Eloqua] is: ``. |

For more information on authentication credentials for [!DNL Oracle Eloqua], see the [[!DNL Oracle Eloqua] guide on authentication](https://docs.oracle.com/en/cloud/saas/marketing/eloqua-rest-api/Authentication_Basic.html).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Oracle Eloqua] authentication credentials as part of the request parameters.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Oracle Eloqua]:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json'
  -d '{
      "name": "Oracle Eloqua Base Connection",
      "description": "Base Connection for Oracle Eloqua",
      "auth": {
          "specName": "Basic Authentication",
          "params": {
              "endpoint": "{ENDPOINT}",
              "username": "{USERNAME}",
              "password": "{PASSWORD}"
          }
      },
      "connectionSpec": {
          "id": "",
          "version": "1.0"
      }
  }'
```

| Parameter | Description |
| --- | --- |
| `name` |
| `description` |
| `auth.specName` | The authentication type used for the connection. |
| `auth.params.endpoint` |
| `auth.params.username` |
| `auth.params.password` |
| `connectionSpec.id` |

**Response**

A successful response returns details of the newly created base connection, including its unique identifier (`id`). This ID is required in the next step to create a source connection.

```json
{
    "id": "2484f2df-c057-4ab5-84f2-dfc0577ab592",
    "etag": "\"10033e77-0000-0200-0000-5e96785b0000\""
}
```

## Next steps

By following this tutorial, you have created an [!DNL Oracle Eloqua] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of a marketing automation source using the [!DNL Flow Service] API](../../explore/marketing-automation.md)
* [Create a dataflow to bring marketing automation data to Platform using the [!DNL Flow Service] API](../../dataflow/marketing-automation.md)


