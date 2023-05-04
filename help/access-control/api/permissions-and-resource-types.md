---
keywords: Experience Platform;home;popular topics;access control permissions;access control resource types;access control api
solution: Experience Platform
title: Reference API Endpoint
description: The reference endpoint in the Access Control API allows you view the names of available permissions and resource types, which can then be used to view effective access control policies for the current user.
exl-id: 18d84d54-9258-4451-9aa8-7c647b45a8da
---
# Reference endpoint

>[!NOTE]
>
>If a user token is being passed, then the user of the token must have an "org admin" role for the requested org.

You can list the names of all permissions and resource types by making a GET request to the `/acl/reference` endpoint. These names can then be used in API calls to [view effective access control policies](./effective-policies.md) for the current user.

A permission is a policy that is managed through the Adobe Admin Console, and maps to zero or more resource-type policies. A resource type is a policy that enables read, write, and/or delete capabilities for a specific type of [!DNL Platform] resource (such as datasets or schemas).

**API format**

```http
GET /acl/reference
```

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/access-control/acl/reference \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}'
```

**Response**

A successful response returns a `permissions` object and a `resource-types` object, each containing a full list of names for access permissions or resource types, respectively.

```json
{
  "permissions": {
    "export-audience-for-segment": {
      "segments": [
        "read"
      ]
    },
    "manage-datasets": {
      "connection": [
        "read",
        "write",
        "delete"
      ],
      "datasets": [
        "read",
        "write",
        "delete"
      ]
    }
    {"..."}
  },
  "resource-types": {
    "classes": [
      "read",
      "write",
      "delete"
    ],
    "connection": [
      "read",
      "write",
      "delete"
    ],
    "data-types": [
      "read",
      "write",
      "delete"
    ],
    "...": [
      "..."
    ]
  }
}
```
