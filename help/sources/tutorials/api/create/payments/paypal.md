---
keywords: Experience Platform;home;popular topics;PayPal connector;paypal;Paypal
solution: Experience Platform
title: Create a PayPal connector using the Flow Service API
topic: overview
description: This tutorial uses the Flow Service API to walk you through the steps to connect PayPal to Experience Platform.
---

# Create a [!DNL PayPal] connector using the [!DNL Flow Service] API

>[!NOTE]
>
>The [!DNL PayPal] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to walk you through the steps to connect [!DNL PayPal] to Experience Platform.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

*   [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
*   [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL PayPal] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL PayPal], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| Host | The URL of the [!DNL PayPal] instance. (default: api.sandbox.paypal.com). |
| Client ID | The client ID associated with your [!DNL PayPal] application. |
| Client secret | The client secret associated with your [!DNL PayPal] application. |
| Connection specification ID | The unique identifier needed to create a connection. The connection specification ID for [!DNL PayPal] is: `221c7626-58f6-4eec-8ee2-042b0226f03b` |

For more information about getting started refer to [this PayPal document](https://developer.paypal.com/docs/api/overview/#get-credentials).

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](../../../../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

*   Authorization: Bearer `{ACCESS_TOKEN}`
*   x-api-key: `{API_KEY}`
*   x-gw-ims-org-id: `{IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to the [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

*   x-sandbox-name: `{SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

*   Content-Type: `application/json`

## Create a connection

A connection specifies a source and contains your credentials for that source. Only one connection is required per [!DNL PayPal] account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

In order to create a [!DNL PayPal] connection, its unique connection specification ID must be provided as part of the POST request. The connection specification ID for [!DNL PayPal] is `221c7626-58f6-4eec-8ee2-042b0226f03b`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Paypal connection",
        "description": "Paypal connection",
        "auth": {
        "specName": "Client-Id-Secret Based Authentication",
        "params": {
            "host": "{HOST}",
            "clientId": "{CLIENT_ID}",
            "clientSecret": "{CLIENT_SECRET}"
            }
        },
        "connectionSpec": {
            "id": "221c7626-58f6-4eec-8ee2-042b0226f03b",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| --------- | ----------- |
| `auth.params.host` | The URL of the [!DNL PayPal] instance. |
| `auth.params.clientId` | The client ID associated with your [!DNL PayPal] instance. |
| `auth.params.clientSecret` | The client secret associated with your [!DNL PayPal] instance. |
| `connectionSpec.id` | The [!DNL PayPal] connection specification ID: `221c7626-58f6-4eec-8ee2-042b0226f03b`. |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "24151d58-ffa7-4960-951d-58ffa7396097",
    "etag": "\"65015e9d-0000-0200-0000-5e89162d0000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL PayPal] connection using the [!DNL Flow Service] API and have obtained the connection's unique ID value. You can use this ID in the next tutorial as you learn how to [explore payments application using the Flow Service API](../../explore/payments.md).
