---
keywords: Experience Platform;home;popular topics;Shopify;shopify;ecommerce
solution: Experience Platform
title: Create a Shopify connector Source Connection Using the Flow Service API
topic: overview
type: Tutorial
description: Learn how to connect Shopify to Adobe Experience Platform using the Flow Service API.
---

# Create a [!DNL Shopify] source connection using the [!DNL Flow Service] API

>[!NOTE]
>
>The [!DNL Shopify] connector is in beta. See the [Sources overview](../../../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Adobe Experience Platform. The service provides a user interface and RESTful API from which all supported sources are connectable.

This tutorial uses the [[!DNL Flow Service]](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/flow-service.yaml) API to walk you through the steps to connect [!DNL Shopify] to [!DNL Experience Platform].

## Getting started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [[!DNL Sources]](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [[!DNL Sandboxes]](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully connect to [!DNL Shopify] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Shopify], you must provide values for the following connection properties:

| Credential | Description |
| ---------- | ----------- |
| `host` | The end point of your [!DNL Shopify] server. |
| `accessToken` | The access token for your [!DNL Shopify] user account. |
| `connectionSpec` | The unique identifier needed to create a connection. The connection specification ID for [!DNL Shopify] is: `4f63aa36-bd48-4e33-bb83-49fbcd11c708` |

For more information about getting started, refer to this [Shopify authentication document](https://shopify.dev/concepts/about-apis/authentication).

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../../../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

* `Authorization: Bearer {ACCESS_TOKEN}`
* `x-api-key: {API_KEY}`
* `x-gw-ims-org-id: {IMS_ORG}`

All resources in [!DNL Experience Platform], including those belonging to the [!DNL Flow Service], are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

* `x-sandbox-name: {SANDBOX_NAME}`

All requests that contain a payload (POST, PUT, PATCH) require an additional media type header:

* `Content-Type: application/json`

## Create a connection

A connection specifies a source and contains your credentials for that source. Only one connection is required per [!DNL Shopify] account as it can be used to create multiple source connectors to bring in different data.

**API format**

```http
POST /connections
```

**Request**

In order to create a [!DNL Shopify] connection, its unique connection specification ID must be provided as part of the POST request. The connection specification ID for [!DNL Shopify] is `4f63aa36-bd48-4e33-bb83-49fbcd11c708`.

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {IMS_ORG}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json' \
    -d '{
        "name": "Shopify source",
        "description": "Shopify source",
        "auth": {
            "specName": "Basic Authentication",
            "params": {
                "host": "{HOST}",
                "accessToken": "{ACCCESS_TOKEN}"
            }
        },
        "connectionSpec": {
            "id": "4f63aa36-bd48-4e33-bb83-49fbcd11c708",
            "version": "1.0"
        }
    }
```

| Property | Description |
| --------- | ----------- |
| `auth.params.host` | The endpoint of the [!DNL Shopify] server. |
| `auth.params.accessToken` | The access token for your [!DNL Shopify] user account. |
| `connectionSpec.id` | The [!DNL Shopify] connection specification ID: `4f63aa36-bd48-4e33-bb83-49fbcd11c708`. |

**Response**

A successful response returns the newly created connection, including its unique connection identifier (`id`). This ID is required to explore your data in the next tutorial.

```json
{
    "id": "582f4f8d-71e9-4a5c-a164-9d2056318d6c",
    "etag": "\"d600d3ae-0000-0200-0000-5fa99a3d0000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Shopify] connection using the [!DNL Flow Service] API and have obtained the connection's unique ID value. You can use this ID in the next tutorial as you learn how to [explore eCommerce connections using the Flow Service API](../../explore/ecommerce.md).