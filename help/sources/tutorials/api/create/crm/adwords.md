---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create a Google AdWords connector using the Flow Service API
topic: overview
---

# Create a Google AdWords connector using the Flow Service API

Flow Service is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the Flow Service API to walk you through the steps to connect Experience Platform to Google AdWords (hereinafter referred to as "AdWords").

## Getting Started

This guide requires a working understanding of the following components of Adobe Experience Platform:

*   [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
*   [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to AdWords using the Flow Service API.

### Gather required credentials

In order for Flow Service to connect with AdWords, you must provide values for the following connection properties:

| **Credential** | **Description** |
| -------------- | --------------- |
| `clientCustomerID` | The customer ID associated with the target Google AdWords |account. |
| `developerToken` | The string used to identify an AdWords API developer. |
| `refreshToken` | The refresh token obtained from Google used to authorize access to AdWords. |
| `clientID` | The ID of the application used to generate the refresh token. |
| `clientSecret` | The client secret for the application used to generate the refresh token. |

For more information about these values, refer to this [Google AdWords document](https://developers.google.com/adwords/api/docs/guides/authentication).

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](../../../../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform, including those belonging to the Flow Service, are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

*   x-sandbox-name: `{SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`

## Look up connection specifications

In order to create an AdWords connection, a set of AdWords connection specifications must exist within Flow Service. The first step in connecting Platform to AdWords is to retrieve these specifications.

**API format**

Each available source has its own unique set of connection specifications for describing connector properties such as authentication requirements. You can look up connection specifications for AdWords by performing a GET request and using query parameters.

Sending a GET request without query parameters will return connection specifications for all available sources. You can include the query `property=name=="google-adwords"` to obtain information specifically for AdWords.

```http
GET /connectionSpecs
GET /connectionSpecs?property=name=="google-adwords"
```

**Request**

The following request retrieves the connection specification for AdWords.

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/connectionSpecs?{QUERY_PARAMS}' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the connection specification for AdWords, including its unique identifier (`id`). This ID is required in the next step to create a base connection.

```json
{
    "items": [
        {
            "id": "d771e9c1-4f26-40dc-8617-ce58c4b53702",
            "name": "google-adwords",
            "providerId": "0ed90a81-07f4-4586-8190-b40eccef1c5a",
            "version": "1.0",
            "authSpec": [
                {
                    "name": "Basic Authentication for google-adwords",
                    "type": "Basic_Authentication",
                    "spec": {
                        "$schema": "http://json-schema.org/draft-07/schema#",
                        "type": "object",
                        "description": "defines auth params",
                        "properties": {
                            "clientCustomerID": {
                                "type": "string",
                                "description": "The Client customer ID of the AdWords account"
                            },
                            "developerToken": {
                                "type": "string",
                                "description": "The developer token associated with the manager account",
                                "format": "password"
                            },
                            "refreshToken": {
                                "type": "string",
                                "description": "The refresh token obtained from Google for authorizing access to AdWords",
                                "format": "password"
                            },
                            "clientId": {
                                "type": "string",
                                "description": "The client ID of the Google application used to acquire the refresh token"
                            },
                            "clientSecret": {
                                "type": "string",
                                "description": "The client secret of the google application used to acquire the refresh token",
                                "format": "password"
                            }
                        },
                        "required": [
                            "clientCustomerID",
                            "developerToken",
                            "refreshToken",
                            "clientId",
                            "clientSecret"
                        ]
                    }
                }
            ],
        }
    ]
}
```

## Create a base connection

A base connection specifies a source and contains your credentials for that source. Only one base connection is required per AdWords account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

```shell
curl -X POST \
    'http://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "google-adwords base connection",
        "description": "Base connection for google-adwords",
        "auth": {
            "specName": "Basic Authentication",
            "params": {
                "clientCustomerID": "{CLIENT_CUSTOMER_ID}",
                "developerToken": "{DEVELOPER_TOKEN}",
                "clientId": "{CLIENT_ID}",
                "clientSecret": "{CLIENT_SECRET}",
                "refreshToken": "{REFRESH_TOKEN}"
            }
        },
        "connectionSpec": {
            "id": "d771e9c1-4f26-40dc-8617-ce58c4b53702",
            "version": "1.0"
        }
    }
```

| Property | Description |
| -------- | ----------- |
| `auth.params.clientCustomerID` | The client customer ID of your AdWords account. |
| `auth.params.developerToken` | The developer token of your AdWords account. |
| `auth.params.refreshToken` | The refresh token of your AdWords account. |
| `auth.params.clientID` | The client ID of your AdWords account. |
| `auth.params.clientSecret` | The client secret of your AdWords account. |
| `connectionSpec.id` | The connection specification `id` of your AdWords account retrieved in the previous step. |

**Response**

A successful response returns the unique identifier (`id`) of the newly created base connection. This ID is required to explore your AdWords data in the next tutorial.

```json
{
    "id": "e6ce1eab-416b-4a20-8e1e-ab416b1a206f",
    "etag": "\"8e0052a2-0000-0200-0000-5e25fb330000\""
}
```

## Next steps

By following this tutorial, you have created an AdWords base connection using the Flow Service API, and have obtained the connection's unique ID value. You can use this base connection ID in the next tutorial as you learn how to [explore CRM systems using the Flow Service API](../../explore/crm.md).
