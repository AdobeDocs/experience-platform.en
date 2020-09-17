---
keywords: Experience Platform;home;popular topics;Phoenix;phoenix
solution: Experience Platform
title: Create a Phoenix connector using the Flow Service API
topic: overview
description: This tutorial uses the Flow Service API to walk you through the steps to connect a Phoenix database to Experience Platform.
---

# Create a [!DNL Phoenix] connector using the [!DNL Flow Service] API

>[!NOTE]
>
>The [!DNL Phoenix] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to walk you through the steps to connect a [!DNL Phoenix] database to [!DNL Experience Platform].

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

*   [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
*   [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Phoenix] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Phoenix], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | The IP address or host name of the [!DNL Phoenix] server. |
| `username` | The user name that you use to access [!DNL Phoenix] Server. |
| `password` | The password corresponding to the user. |
| `port` | The TCP port that the [!DNL Phoenix] server uses to listen for client connections. If you connect to [!DNL Azure] HDInsights, specify port as 443. |
| `httpPath` | The partial URL corresponding to the [!DNL Phoenix] server. Specify /hbasephoenix0 if using [!DNL Azure] HDInsights cluster. |
| `enableSsl` | A boolean value. Specifies whether the connections to the server are encrypted using SSL. |
| `connectionSpec.id` | The unique identifier needed to create a connection. The connection specification ID for [!DNL Phoenix] is: `102706fb-a5cd-42ee-afe0-bc42f017ff43` |

For more information about getting started refer to [this Phoenix document](https://python-phoenixdb.readthedocs.io/en/latest/api.html).

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

A connection specifies a source and contains your credentials for that source. Only one connection is required per [!DNL Phoenix] account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

In order to create a [!DNL Phoenix] connection, its unique connection specification ID must be provided as part of the POST request. The connection specification ID for [!DNL Phoenix] is `102706fb-a5cd-42ee-afe0-bc42f017ff43`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Phoenix test connection",
        "description": "Phoenix test connection",
        "auth": {
            "specName": "Basic Authentication",
        "params": {
            "host" :  "{HOST}",
            "username" : "{USERNAME}",
            "password" :"{PASSWORD}",
            "port" : {PORT},
            "httpPath" : "{PATH}",
            "enableSsl" : {SSL}
            }
        },
        "connectionSpec": {
            "id": "102706fb-a5cd-42ee-afe0-bc42f017ff43",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| --------- | ----------- |
| `auth.params.host` | The host of the [!DNL Phoenix] server. |
| `auth.params.username` | The username associated with your [!DNL Phoenix] connection. |
| `auth.params.password` | The password associated with your [!DNL Phoenix] connection. |
| `auth.params.port` | The TCP port for your [!DNL Phoenix] connection. |
| `auth.params.httpPath` | The partial http path for your [!DNL Phoenix] connection. |
| `auth.params.enableSsl` | The boolean value that specifies whether the connections to the server are encrypted using SSL. |
| `connectionSpec.id` | The [!DNL Phoenix] connection specification ID: `102706fb-a5cd-42ee-afe0-bc42f017ff43`. |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "0d982fff-c443-403e-982f-ffc443f03e37",
    "etag": "\"830082dc-0000-0200-0000-5e84ee560000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Phoenix] connection using the [!DNL Flow Service] API and have obtained the connection's unique ID value. You can use this ID in the next tutorial as you learn how to [explore databases using the Flow Service API](../../explore/database-nosql.md).