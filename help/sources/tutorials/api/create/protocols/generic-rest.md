---
keywords: Experience Platform;home;popular topics;generic REST;generic rest
solution: Experience Platform
title: Create a Generic REST API Base Connection Using the Flow Service API
type: Tutorial
description: Learn how to connect Generic REST API to Adobe Experience Platform using the Flow Service API.
exl-id: 6b414868-503e-49d5-8f4a-5b2fc003dab0
---
# Create a Generic REST API base connection using the [!DNL Flow Service] API

>[!NOTE]
>
>The [!DNL Generic REST API] source is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labeled connectors.

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Generic REST API] using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Generic REST API], you must provide valid credentials for the authentication type of your choice. [!DNL Generic REST API] supports both OAuth 2 refresh code and basic authentication. See the following tables for information on the credentials for the two supported authentication types.

#### OAuth 2 refresh code

| Credential | Description |
| --- | --- |
| `host` | The host URL of the source that you are making your request to. This value is required and cannot be bypassed using `requestParameterOverride`. |
| `authorizationTestUrl` | (Optional) The authorization test URL is used to validate credentials when creating a base connection. If unprovided, credentials are automatically checked during the source connection creation step instead. |
| `clientId` | (Optional) The client ID associated with your user account. |
| `clientSecret` | (Optional) The client secret associated with your user account. |
| `accessToken` | The primary authentication credential used to access your application. The access token represents the authorization of your application, to access particular aspects of a user's data. This value is required and cannot be bypassed using `requestParameterOverride`. |
| `refreshToken` | (Optional) A token that's used to generate a new access token, when the access token has expired. |
| `expirationDate` | (Optional) A hidden value that defines the expiration date of your access token. |
| `accessTokenUrl` | (Optional) The URL endpoint used to fetch your access token. |
| `requestParameterOverride` | (Optional) A property that allows you to specify which credential parameters to override. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Generic REST API] is: `4e98f16f-87d6-4ef0-bdc6-7a2b0fe76e62`. |

#### Basic authentication

| Credential | Description |
| --- | --- |
| `host` | The host URL of the source that you are making your request to. |
| `username` | The username that corresponds with your user account. |
| `password` | The password that corresponds with your user account. |
| `connectionSpec.id` | The connection specification returns a source's connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Generic REST API] is: `4e98f16f-87d6-4ef0-bdc6-7a2b0fe76e62`. |

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

[!DNL Generic REST API] supports both basic authentication and OAuth 2 refresh code. See the following examples for guidance on how to authenticate with either authentication types.

### Create a [!DNL Generic REST API] base connection using OAuth 2 refresh code

To create a base connection ID using OAuth 2 refresh code, make a POST request to the `/connections` endpoint while providing your OAuth 2 credentials.

**API format**

```http
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Generic REST API]:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "Generic REST API base connection with OAuth 2 refresh code",
      "description": "Generic REST API base connection with OAuth 2 refresh code",
      "connectionSpec": {
          "id": "4e98f16f-87d6-4ef0-bdc6-7a2b0fe76e62",
          "version": "1.0"
      },
      "auth": {
          "specName": "oAuth2RefreshCode",
          "params": {
              "host": "{HOST}",
              "accessToken": "{ACCESS_TOKEN}"
          }
      }
  }'
```

| Property | Description |
| --------- | ----------- |
| `name` | The name of your base connection. Ensure that the name of your base connection is descriptive as you can use this to look up information on your base connection. |
| `description` | (Optional) A property that you can include to provide more information on your base connection. |
| `connectionSpec.id` | The connection specification ID associated with [!DNL Generic REST API]. This fixed ID is: `4e98f16f-87d6-4ef0-bdc6-7a2b0fe76e62`. |
| `auth.specName` | The authentication type that you are using to authenticate your source to Platform. |
| `auth.params.host` | The root URL used to connect to your [!DNL Generic REST API] source. |
| `auth.params.accessToken` | The corresponding access token used to authenticate your source. This is required for OAuth-based authentication. |

**Response**

A successful response returns the newly created connection, including its unique connection identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
  "id": "a5c6b647-e784-4b58-86b6-47e784ab580b",
  "etag": "\"7b01056a-0000-0200-0000-5e8a4f5b0000\""
}
```

### Create a [!DNL Generic REST API] base connection using basic authentication

To create a [!DNL Generic REST API] base connection using basic authentication, make a POST request to the `/connections` endpoint of [!DNL Flow Service] API while providing your basic authentication credentials.

**API format**

```https
POST /connections
```

**Request**

The following request creates a base connection for [!DNL Generic REST API]:

```shell
curl -X POST \
  'https://platform.adobe.io/data/foundation/flowservice/connections' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
  -d '{
      "name": "Generic REST API base connection with basic authentication",
      "description": "Generic REST API base connection with basic authentication",
      "connectionSpec": {
          "id": "4e98f16f-87d6-4ef0-bdc6-7a2b0fe76e62",
          "version": "1.0"
      },
      "auth": {
          "specName": "Basic Authentication",
          "params": {
              "host": "{HOST}",
              "username": "{USERNAME}",
              "password": "{PASSWORD}"
          }
      }
  }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your base connection. Ensure that the name of your base connection is descriptive as you can use this to look up information on your base connection. |
| `description` | (Optional) A property that you can include to provide more information on your base connection. |
| `connectionSpec.id` | The connection specification ID associated with [!DNL Generic REST API]. This fixed ID is: `4e98f16f-87d6-4ef0-bdc6-7a2b0fe76e62`. |
| `auth.specName` | The authentication type that you are using to connect your source to Platform. |
| `auth.params.host` | The root URL used to connect to your [!DNL Generic REST API] source. |
| `auth.params.username` | The username that corresponds with your [!DNL Generic REST API] source. This is required for basic authentication. |
| `auth.params.password` | The password that corresponds with your [!DNL Generic REST API] source. This is required for basic authentication. |

**Response**

A successful response returns the newly created base connection, including its unique connection identifier (`id`). This ID is required to explore your source's file structure and contents in the next step.

```json
{
    "id": "9601747c-6874-4c02-bb00-5732a8c43086",
    "etag": "\"3702dabc-0000-0200-0000-615b5b5a0000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Generic REST API] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring protocols data to Platform using the [!DNL Flow Service] API](../../collect/protocols.md)
