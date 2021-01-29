---
keywords: Experience Platform;home;popular topics;event hub;Azure event hub;Event hub
solution: Experience Platform
title: Create an Azure Event Hubs connector using the Flow Service API
topic: overview
type: Tutorial
description: This tutorial uses the Flow Service API to walk you through the steps to connect Experience Platform to an Azure Event Hubs account.
---

# Create an [!DNL Azure Event Hubs] connector using the [!DNL Flow Service] API

>[!NOTE]
>
> The [!DNL Azure Event Hubs] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [!DNL Flow Service] API to walk you through the steps to connect [!DNL Experience Platform] to an [!DNL Azure Event Hubs] account.

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

- [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
- [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to an [!DNL Azure Event Hubs] account using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with your [!DNL Azure Event Hubs] account, you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `sasKeyName` | The name of the authorization rule, which is also known as the SAS key name. |
| `sasKey` | The generated shared access signature. |
| `namespace` | The namespace of the Event Hubs you are accessing. |
| `connectionSpec.id` | The [!DNL Azure Event Hubs] connection specification ID: `bf9f5905-92b7-48bf-bf20-455bc6b60a4e` |

For more information about these values, refer to [this Event Hubs document](https://docs.microsoft.com/en-us/azure/event-hubs/authenticate-shared-access-signature).

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- `Authorization: Bearer {ACCESS_TOKEN}`
- `x-api-key: {API_KEY}`
- `x-gw-ims-org-id: {IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to the [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- `x-sandbox-name: {SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

- `Content-Type: application/json`

## Create a connection

A connection specifies a source and contains your credentials for that source. Only one connection is required per [!DNL Azure Event Hubs] account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Azure Event Hubs connection",
        "description": "Connector for Azure Event Hubs",
        "auth": {
            "specName": "Basic Authentication for Event Hubs",
            "params": {
                "sasKeyName": "sasKeyName",
                "sasKey": "sasKey",
                "namespace": "namespace"
            }
        },
        "connectionSpec": {
            "id": "bf9f5905-92b7-48bf-bf20-455bc6b60a4e",
            "version": "1.0"
        }
    }'
```

| Property | Description |
| -------- | ----------- |
| `auth.params.sasKeyName` | The name of the authorization rule, which is also known as the SAS key name. |
| `auth.params.sasKey` | The generated shared access signature. |
| `namespace` | The namespace of the [!DNL Event Hubs] you are accessing. |
| `connectionSpec.id` | The [!DNL Azure Event Hubs] connection specification ID: `bf9f5905-92b7-48bf-bf20-455bc6b60a4e` |

**Response**

A successful response returns details of the newly created connection, including its unique identifier (`id`). This ID is required to explore your cloud storage data in the next tutorial.

```json
{
    "id": "4cb0c374-d3bb-4557-b139-5712880adc55",
    "etag": "\"6507cfd8-0000-0200-0000-5e18fc600000\""
}
```

## Next steps

By following this tutorial, you have created an [!DNL Azure Event Hubs] connection using APIs and a unique ID was obtained as part of the response body. ou can use this connection ID to [collect streaming data using the Flow Service API](../../collect/streaming.md).