---
keywords: Experience Platform;home;popular topics;Zoho CRM;zoho crm;Zoho;zoho
solution: Experience Platform
title: Create a Zoho CRM Base Connection Using the Flow Service API
topic-legacy: overview
type: Tutorial
description: Learn how to connect Adobe Experience Platform to Zoho CRM using the Flow Service API.
exl-id: 33995927-8f5e-44c5-b809-4db8706bbd34
---
# Create a [!DNL Zoho CRM] base connection using the [!DNL Flow Service] API

A base connection represents the authenticated connection between a source and Adobe Experience Platform.

This tutorial walks you through the steps to create a base connection for [!DNL Zoho CRM] using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting Started

This guide requires a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../../../home.md): [!DNL Experience Platform] allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using [!DNL Platform] services.
* [Sandboxes](../../../../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you need to know in order to successfully connect to [!DNL Zoho CRM] using the [!DNL Flow Service] API.

### Gather required credentials

In order for [!DNL Flow Service] to connect with [!DNL Zoho CRM], you must provide values for the following connection properties:

| Credential | Description |
| --- | --- |
| `endpoint` | The endpoint of the [!DNL Zoho CRM] server you are making your request to. |
| `accountsUrl` | The accounts URL is used to generate your access and refresh tokens. The URL must be domain-specific. |
| `clientId` | The client ID that corresponds with your [!DNL Zoho CRM] user account. |
| `clientSecret` | The client secret that corresponds with your [!DNL Zoho CRM] user account. |
| `accessToken` | The access token authorizes your secure and temporary access to your [!DNL Zoho CRM] account. |
| `refreshToken` | A refresh token is a token used to generate a new access token, once your access token has expired. |
| `connectionSpec.id` | The connection specification returns a source’s connector properties, including authentication specifications related to creating the base and source connections. The connection specification ID for [!DNL Zoho CRM] is: `929e4450-0237-4ed2-9404-b7e1e0a00309`. |

For more information on these credentials, see the documentation on [[!DNL Zoho CRM] authentication](https://www.zoho.com/crm/developer/docs/api/v2/oauth-overview.html).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../../../landing/api-guide.md).

## Create a base connection

A base connection retains information between your source and Platform, including your source's authentication credentials, the current state of the connection, and your unique base connection ID. The base connection ID allows you to explore and navigate files from within your source and identify the specific items that you want to ingest, including information regarding their data types and formats.

To create a base connection ID, make a POST request to the `/connections` endpoint while providing your [!DNL Zoho CRM] authentication credentials as part of the request parameters.

**API format**

```https
POST /connections
```

**Request**

>[!TIP]
>
>Your Accounts URL domain must correspond with your appropriate domain location. The following are the various domains and their corresponding accounts URLs:<ul><li>United States: https://accounts.zoho.com</li><li>Australia: https://accounts.zoho.com.au</li><li>Europe: https://accounts.zoho.eu</li><li>India: https://accounts.zoho.in</li><li>China: https://accounts.zoho.com.cn</li></ul>

The following request creates a base connection for [!DNL Zoho CRM]:

```shell
curl -X POST \
    'https://platform.adobe.io/data/foundation/flowservice/connections' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}' \
    -H 'Content-Type: application/json'
    -d '{
        "name": "Zoho CRM base connection",
        "description": "Base Connection for Zoho CRM",
        "auth": {
            "specName": "Basic Authentication",
            "params": {
                "endpoint": "{ENDPOINT}",
                "accountsUrl": "{ACCOUNTS_URL}",
                "clientId": "{CLIENT_ID}",
                "clientSecret": "{CLIENT_SECRET}",
                "accessToken": "{ACCESS_TOKEN}",
                "refreshToken": "{REFRESH_TOKEN}"
            }
        },
        "connectionSpec": {
            "id": "929e4450-0237-4ed2-9404-b7e1e0a00309",
            "version": "1.0"
        }
    }'
```

| Parameter | Description |
| --- | --- |
| `name` | The name of your [!DNL Zoho CRM] base connection. You can use this name to lookup your [!DNL Zoho CRM] base connection. |
| `description` | An optional description for your [!DNL Zoho CRM] base connection. |
| `auth.specName` | The authentication type used for the connection. |
| `auth.params.endpoint` | The endpoint of the [!DNL Zoho CRM] server you are making your request to. |
| `auth.params.accountsUrl` | The accounts URL is used to generated your access and refresh tokens. The URL must be domain-specific. |
| `auth.params.clientId` | The client ID that corresponds with your [!DNL Zoho CRM] user account. |
| `auth.params.clientSecret` | The client secret that corresponds with your [!DNL Zoho CRM] user account. |
| `auth.params.accessToken` |  The access token authorizes your secure and temporary access to your [!DNL Zoho CRM] account. |
| `auth.params.refreshToken` | A refresh token is a token used to generate a new access token, once your access token has expired. |
| `connectionSpec.id` | The connection specification ID for [!DNL Zoho CRM]: `929e4450-0237-4ed2-9404-b7e1e0a00309`. |

**Response**

A successful response returns details of the newly created base connection, including its unique identifier (`id`). This ID is required in the next step to create a source connection.

```json
{
    "id": "2484f2df-c057-4ab5-84f2-dfc0577ab592",
    "etag": "\"10033e77-0000-0200-0000-5e96785b0000\""
}
```

## Next steps

By following this tutorial, you have created a [!DNL Zoho] base connection using the [!DNL Flow Service] API. You can use this base connection ID in the following tutorials:

* [Explore the structure and contents of your data tables using the [!DNL Flow Service] API](../../explore/tabular.md)
* [Create a dataflow to bring CRM data to Platform using the [!DNL Flow Service] API](../../collect/crm.md)
