---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: List active sandboxes for the current user
topic: developer guide
---

# List active sandboxes for the current user

>[!NOTE]
>
>Unlike other endpoints provided in the Sandbox API, this endpoint is available for all users, including those without Sandbox Administration access permissions.

You can list the sandboxes that are active for the current user by making a GET request to the root (`/`) endpoint.

**API format**

```http
GET /
```

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/sandbox-management/ \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a list of sandboxes that are active for the current user, including details such as `name`, `title`, `state`, and `type`.

```json
{
    "sandboxes": [
        {
            "name": "prod",
            "title": "Production",
            "state": "active",
            "type": "production",
            "region": "VA7",
            "isDefault": true,
            "eTag": 2,
            "createdDate": "2019-09-04 04:57:24",
            "lastModifiedDate": "2019-09-04 04:57:24",
            "createdBy": "{USER_ID}",
            "modifiedBy": "{USER_ID}"
        },
        {
            "name": "dev",
            "title": "Development",
            "state": "active",
            "type": "development",
            "region": "VA7",
            "isDefault": false,
            "eTag": 1,
            "createdDate": "2019-09-03 22:27:48",
            "lastModifiedDate": "2019-09-03 22:27:48",
            "createdBy": "{USER_ID}",
            "modifiedBy": "{USER_ID}"
        },
        {
            "name": "stage",
            "title": "Staging",
            "state": "active",
            "type": "development",
            "region": "VA7",
            "isDefault": false,
            "eTag": 1,
            "createdDate": "2019-09-03 22:27:48",
            "lastModifiedDate": "2019-09-03 22:27:48",
            "createdBy": "{USER_ID}",
            "modifiedBy": "{USER_ID}"
        }
    ]
}
```

| Property | Description |
| --- | --- |
| `name` | The name of the sandbox. Used for lookup purposes in API calls. |
| `title` | The display name for the sandbox. |
| `state` | The current processing state of the sandbox. A sandbox's state can be any of the following: <ul><li>**creating**: The sandbox has been created, but is still being provisioned by the system.</li><li>**active**: The sandbox is created and active.</li><li>**failed**: Due to an error, the sandbox was not able to be provisioned by the system and is disabled.</li><li>**deleted**: The sandbox has been manually disabled.</li></ul> |
| `type` | The sandbox type, either "development" or "production". |
| `isDefault` | A boolean property indicating whether this sandbox is the default sandbox for the organization. Typically this is the production sandbox. |
| `eTag` | An identifier for a specific version of the sandbox. Used for version control and caching efficiency, this value is updated each time a change is made to the sandbox. |
