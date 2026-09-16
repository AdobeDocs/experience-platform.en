---
keywords: Experience Platform;home;popular topics;namespace;Namespace;namespaces;Namespaces;identity namespace;Identity namespace;identity;Identity
solution: Experience Platform
title: Create a Custom Namespace in the Identity Service API
description: Using the Identity Namespace API, you can create a custom identity namespace that will be available only to your organization.
role: Developer
exl-id: 6015a225-4508-49cc-9dda-fb9f73a8746c
TQID: https://experienceleague.adobe.com/RXRNB0iqPLf0tKeAxh5JM7uJWmKWultFqHhztx76g-A
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
---
# Create a custom namespace in the Identity Service API

Using the [!DNL Identity Namespace] API, you can create a custom identity namespace that will be available only to your organization.

For recommendations around creating custom namespaces, see [the Identity Service FAQ documentation](../troubleshooting-guide.md).

>[!NOTE]
>
>Namespaces are a qualifier for identities. As such, once a namespace has been created, it cannot be deleted.

**API format**

```http
POST /idnamespace/identities
```

**Request**

```shell
curl -X POST \
  https://platform-va7.adobe.io/data/core/idnamespace/identities \
  -H 'Accept-Encoding: gzip, deflate' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -d '{
        "name": "Loyalty Member",
        "code": "Loyalty",
        "description": "Loyalty Program Member ID",
        "idType": "Cross_device"
      }'
```

**Response**

```json
{
    "updateTime": 1576286879075,
    "code": "Loyalty",
    "status": "ACTIVE",
    "description": "Loyalty Program Member ID",
    "id": 10093197,
    "createTime": 1576286879075,
    "idType": "Cross_device",
    "name": "Loyalty Member",
    "custom": true
}
```

## Next steps

Proceed to the next tutorial to [list the native ID of an identity](./list-native-id.md)
