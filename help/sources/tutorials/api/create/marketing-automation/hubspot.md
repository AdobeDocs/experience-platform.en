---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Create a HubSpot connector using the Flow Service API
topic: overview
---

# Create a HubSpot connector using the Flow Service API

>[!NOTE]
>The HubSpot connector is in beta. The features and documentation are subject to change.

Flow Service is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the Flow Service API to walk you through the steps to connect Experience Platform to HubSpot.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

*   [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
*   [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to HubSpot using the Flow Service API.

### Gather required credentials

In order for Flow Service to connect with HubSpot, you must provide the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| Client ID | The client ID associated with your HubSpot application. |
| Client Secret | The client secret associated with your HubSpot application. |
| Access Token | The access token obtained when initially authenticating your OAuth integration. |
| Refresh Token | The refresh token obtained when initially authenticating your OAuth integration. |
| Connection specification ID | The unique identifier needed to create a connection. The connection specification ID for HubSpot is: `cc6a4487-9e91-433e-a3a3-9cf6626c1806` |

For more information about getting started, refer to this [HubSpot document](https://developers.hubspot.com/docs/methods/oauth2/oauth2-overview).

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

## Create a connection

A connection specifies a source and contains your credentials for that source. Only one connection is required per HubSpot account as it can be used to create multiple source connectors to bring in different data.

**API format**

```https
POST /connections
```

**Request**

In order to create a HubSpot connection, its unique connection specification ID must be provided as part of the POST request. The connection specification ID for HubSpot is `cc6a4487-9e91-433e-a3a3-9cf6626c1806`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "connection for hubspot",
        "description": "connection for hubspot",
        "auth": {
            "specName": "Basic Authentication",
            "params": {
                "clientId": "{CLIENT_ID}",
                "clientSecret": "{CLIENT_SECRET}",
                "accessToken": "{ACCESS_TOKEN}",
                "refreshToken": "{REFRESH_TOKEN}"
            }
        },
        "connectionSpec": {
            "id": "cc6a4487-9e91-433e-a3a3-9cf6626c1806",
            "version": "1.0"
        }
    }
```

| Property | Description |
| -------- | ----------- |
| `auth.params.clientId` | The client ID associated with your HubSpot application. |
| `auth.params.clientSecret` | The client secret associated with your HubSpot application. |
| `auth.params.accessToken` | The access token obtained when initially authenticating your OAuth integration. |
| `auth.params.refreshToken` | The refresh token obtained when initially authenticating your OAuth integration. |

**Response**

A successful response returns details of the newly created connection for the API, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "2fce94c1-9a93-4971-8e94-c19a93097129",
    "etag": "\"d403848a-0000-0200-0000-5e978f7b0000\""
}
```

By following this tutorial, you have created a HubSpot connection using the Flow Service API, and have obtained the connection's unique ID value. You can use this connection ID in the next tutorial as you learn how to [explore marketing automation systems using the Flow Service API](../../explore/marketing-automation.md).