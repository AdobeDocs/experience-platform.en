---
keywords: Experience Platform;home;popular topics;namespace list;list namespace
solution: Experience Platform
title: List Available Identity Namespaces
description: List all available namespaces.
role: Developer
exl-id: b65e5f86-143d-4ca5-8b3f-2c0a24433bbf
---
# List available identity namespaces

**API format**

```http
GET /idnamespace/identities
```

**Request**

```shell
curl -X GET \
  'https://platform-va7.adobe.io/data/core/idnamespace/identities' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

The response includes an array of objects, with each object representing an available namespace. Namespaces with a "[!UICONTROL custom]" value of "[!UICONTROL false]" are standard namespaces, while those with a "[!UICONTROL custom]" value of "[!UICONTROL true]" are namespaces that your organization has created.

>[!NOTE]
>
>This response has been truncated for space.

```json
[
  {
        "updateTime": 1441122419000,
        "code": "CORE",
        "status": "ACTIVE",
        "description": "CORE Namespace",
        "id": 0,
        "createTime": 1441122419000,
        "idType": "COOKIE",
        "name": "CORE",
        "custom": false
    },
    {
        "updateTime": 1495153678000,
        "code": "ECID",
        "status": "ACTIVE",
        "description": "ECID Namespace",
        "id": 4,
        "createTime": 1495153678000,
        "idType": "COOKIE",
        "name": "ECID",
        "custom": false
    },
    {
        "updateTime": 1522783145000,
        "code": "AdCloud",
        "status": "ACTIVE",
        "description": "Adobe AdCloud - ID Syncing Partner",
        "id": 411,
        "createTime": 1522783145000,
        "idType": "COOKIE",
        "name": "AdCloud",
        "custom": false
    }
]
```

## Next steps

Proceed to the next tutorial to [create a custom namespace](./create-custom-namespace.md)
