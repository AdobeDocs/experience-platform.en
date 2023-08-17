---
keywords: Experience Platform;home;popular topics;flow service;update accounts
solution: Experience Platform
title: Update Accounts Using the Flow Service API
type: Tutorial
description: This tutorial covers the steps for updating the details and credentials of an account using the Flow Service API.
exl-id: a93385fd-ed36-457f-8882-41e37f6f209d
---
# Update accounts using the Flow Service API

In some circumstances, it may be required to update the details of an existing source connection. [!DNL Flow Service] provides you with the ability to add, edit, and delete details of an existing batch or streaming connection, including its name, description, and credentials.

This tutorial covers the steps for updating the details and credentials of a connection using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Getting started

This tutorial requires you to have an existing connection and a valid connection ID. If you do not have an existing connection, select your source of choice from the [sources overview](../../home.md) and follow the steps outlined before attempting this tutorial.

This tutorial also requires you to have a working understanding of the following components of Adobe Experience Platform:

* [Sources](../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Sandboxes](../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../../landing/api-guide.md).

## Look up connection details

The first step in updating your connection is to retrieve its details using your connection ID. To retrieve your connection's current details make a GET request to the [!DNL Flow Service] API while providing the connection ID, of the connection you want to update.

**API format**

```http
GET /connections/{CONNECTION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{CONNECTION_ID}` | The unique `id` value for the connection you want to retrieve. |

**Request**

The following request retrieves information regarding your connection.

```shell
curl -X GET \
    'https://platform.adobe.io/data/foundation/flowservice/connections/139f6a5f-a78b-4744-9f6a-5fa78bd74431' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the current details of your connection including its credentials, unique identifier (`id`), and version. The version value is required to update your connection.

```json
{
    "items": [
        {
            "createdAt": 1597973312000,
            "updatedAt": 1597973312000,
            "createdBy": "{CREATED_BY}",
            "updatedBy": "{UPDATED_BY}",
            "createdClient": "{CREATED_CLIENT}",
            "updatedClient": "{UPDATED_CLIENT}",
            "sandboxName": "{SANDBOX_NAME}",
            "id": "139f6a5f-a78b-4744-9f6a-5fa78bd74431",
            "name": "E2E_SF Base_Connection",
            "connectionSpec": {
                "id": "cfc0fee1-7dc0-40ef-b73e-d8b134c436f5",
                "version": "1.0"
            },
            "state": "enabled",
            "auth": {
                "specName": "Basic Authentication",
                "params": {
                    "securityToken": "{SECURITY_TOKEN}",
                    "password": "{PASSWORD}",
                    "username": "my-salesforce-account",
                    "environmentUrl": "login.salesforce.com"
                }
            },
            "version": "\"1400dd53-0000-0200-0000-5f3f23450000\"",
            "etag": "\"1400dd53-0000-0200-0000-5f3f23450000\""
        }
    ]
}
```

## Update connection

To update your connection's name, description, and credentials, perform a PATCH request to the [!DNL Flow Service] API while providing your connection ID, version, and the new information you want to use.

>[!IMPORTANT]
>
>The `If-Match` header is required when making a PATCH request. The value for this header is the unique version of the connection you want to update.

**API format**

```http
PATCH /connections/{CONNECTION_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{CONNECTION_ID}` | The unique `id` value for the connection you want to update. |

**Request**

The following request provides a new name and description, as well as a new set of credentials, to update your connection with.

```shell
curl -X PATCH \
    'https://platform.adobe.io/data/foundation/flowservice/connections/139f6a5f-a78b-4744-9f6a-5fa78bd74431' \
    -H 'Authorization: Bearer {ACCESS_TOKEN}' \
    -H 'x-api-key: {API_KEY}' \
    -H 'x-gw-ims-org-id: {ORG_ID}' \
    -H 'x-sandbox-name: {SANDBOX_NAME}'
    -H 'If-Match: 1400dd53-0000-0200-0000-5f3f23450000' \
    -d '[
        {
            "op": "replace",
            "path": "/auth/params",
            "value": {
                "username": "salesforce-connector-username",
                "password": "{NEW_PASSWORD}",
                "securityToken": "{NEW_SECURITY_TOKEN}"
            }
        },
        {
            "op": "replace",
            "path": "/name",
            "value": "Test salesforce connection"
        },
        {
            "op": "add",
            "path": "/description",
            "value": "A test salesforce connection"
        }
    ]'
```

| Parameter | Description |
| --------- | ----------- |
| `op` | The operation call used to define the action needed to update the connection. Operations include: `add`, `replace`, and `remove`. |
| `path` | The path of the parameter to be updated. |
| `value` | The new value you want to update your parameter with. |

**Response**

A successful response returns your connection ID and an updated etag. You can verify the update by making a GET request to the [!DNL Flow Service] API, while providing your connection ID.

```json
{
    "id": "139f6a5f-a78b-4744-9f6a-5fa78bd74431",
    "etag": "\"3600e378-0000-0200-0000-5f40212f0000\""
}
```

## Next steps

By following this tutorial, you have updated the credentials and information associated with your connection using the [!DNL Flow Service] API. For more information on using source connectors, see the [sources overview](../../home.md).
