---
keywords: Experience Platform;home;popular topics;generic REST;generic rest
solution: Experience Platform
title: Create a Generic REST API Base Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect generic REST API to Adobe Experience Platform using the Flow Service API.
---
# Create a generic REST API base connection using the [!DNL Flow Service] API

>[!NOTE]
>
>The generic REST API source is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for generic REST API using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

### Gather required credentials

In order for [!DNL Flow Service] to connect with generic REST API, you must provide valid credentials for the authentication type of your choice. Generic REST API supports both OAuth 2 refresh code and basic authentication. See the following tables for information on the credentials for the two supported authentication types.

#### OAuth 2 refresh code

| Credential | Description |
| --- | --- |
| `host` |
| `authorizationTestUrl` |
| `clientId` |
| `clientSecret` |
| `accessToken` |
| `refreshToken` |
| `expirationDate` |
| `accessTokenUrl` |
| `connectionSpec.id` | The connection specification returns a source’s connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for generic REST API is: `4e98f16f-87d6-4ef0-bdc6-7a2b0fe76e62`. |

#### Basic authentication

| Credential | Description |
| --- | --- |
| `host` |
| `username` |
| `password` |

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your generic REST API authentication credentials as part of the request parameters.

**API format**

```http
POST /connections
```

**Request**

The following request creates a base connection for generic REST API:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d 
```

| Property | Description |
| --------- | ----------- |
| `connectionSpec.id` | The generic REST API connection specification ID: `4e98f16f-87d6-4ef0-bdc6-7a2b0fe76e62`. |

**Response**

A successful response returns the newly created connection, including its unique connection identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
  "id": "a5c6b647-e784-4b58-86b6-47e784ab580b",
  "etag": "\"7b01056a-0000-0200-0000-5e8a4f5b0000\""
}
```

## Next steps

By following this tutorial, you have created a generic REST API connection using the [!DNL Flow Service] API and have obtained the connection's unique ID value. You can use this ID in the next tutorial as you learn how to [explore protocols applications using the Flow Service API](../../explore/protocols.md).
