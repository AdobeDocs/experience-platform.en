---
keywords: Experience Platform;home;popular topics;api;field level access control;Field Level Access Control;flac;FLAC
solution: Experience Platform
title: Roles API Endpoint
description: The /roles endpoint in the Field Level Access Control API allows you to  programmatically manage roles in Adobe Experience Platform.
---
# Roles endpoint

Roles define the access that an administrator, a specialist, or an end-user has to resources in your organization. In a role-based access control environment, user access provisioning is group through common responsibilities and needs. A role has a given set of permissions and members of your organization can be assigned to one or more roles, depending on the scope of view or write access they need. 

The `/roles` endpoint in the Field Level Access Control API allows you to  programmatically manage roles in your IMS Organization.

## Getting started

The API endpoint used in this guide is part of the Field Level Access Control API. Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Retrieve a list of roles {#list}

You can list all existing roles belonging to your IMS Organization by making a GET request to the `/roles` endpoint.

**API format**

```http
GET /roles/
```

**Request**

The following request retrieves a list of roles belonging to your IMS Organization.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/access-control/administration/roles \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
```

**Response**

A successful response returns a list of roles in your organization, including information on their respective role type, permission sets, and subject attributes.

```json
{
  "roles": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "roleType": "user-defined",
      "permissionSets": [
        "string"
      ],
      "sandboxes": [
        "string"
      ],
      "subjectAttributes": {
        "additionalProp1": [
          "string"
        ],
        "additionalProp2": [
          "string"
        ],
        "additionalProp3": [
          "string"
        ]
      },
      "createdBy": "string",
      "createdAt": 0,
      "modifiedBy": "string",
      "modifiedAt": 0,
      "etag": "string"
    }
  ],
  "_page": {
    "limit": 0,
    "count": 0
  },
  "_links": {
    "next": {
      "href": "string",
      "templated": true
    },
    "page": {
      "href": "string",
      "templated": true
    },
    "subjects": {
      "href": "string",
      "templated": true
    }
  }
}
```

## Look up a role {#lookup}

You can look up an individual role by making a GET request that includes the corresponding `roleId` in the request path.

**API format**

```http
GET /roles/{ROLE_ID}
```

| Parameter | Description |
| --- | --- |
| {ROLE_ID} | The ID of the role that you want to look up. |

**Request**

The following request retrieves information for `{ROLE_ID}`.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/access-control/administration/roles/{ROLE_ID} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
```

**Response**

A successful response returns details for the queried role ID, including information on its role type, permission sets, and subject attributes.

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "roleType": "user-defined",
  "permissionSets": [
    "string"
  ],
  "sandboxes": [
    "string"
  ],
  "subjectAttributes": {
    "additionalProp1": [
      "string"
    ],
    "additionalProp2": [
      "string"
    ],
    "additionalProp3": [
      "string"
    ]
  },
  "createdBy": "string",
  "createdAt": 0,
  "modifiedBy": "string",
  "modifiedAt": 0,
  "etag": "string"
}
```

## Look up subjects by role ID

You can also retrieve subjects by making a GET request to the `/roles` endpoint while providing a {ROLE_ID}.

**API format**

```http
GET /roles/{ROLE_ID}/subjects
```

| Parameter | Description |
| --- | --- |
| {ROLE_ID} | The ID of the role associated to the subjects you want to look up. |

**Request**

The following request retrieves subjects associated with `{ROLE_ID}`.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/access-control/administration/roles/{ROLE_ID} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
```

**Response**

A successful response returns the subjects associated with the queried role ID, including the corresponding subject ID and subject type.

```json
{
  "subjects": [
    {
      "subjectId": "string",
      "subjectType": "user"
    }
  ],
  "_page": {
    "limit": 0,
    "count": 0
  },
  "_links": {
    "next": {
      "href": "string",
      "templated": true
    },
    "page": {
      "href": "string",
      "templated": true
    }
  }
}
```

## Create a role {#create}

To create a new role, make a POST request to the `/roles` endpoint while providing values for your role's name, description, and role type.

**API format**

```http
POST /roles/
```

**Request**

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/access-control/administration/roles \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
  -d'{
    "name": "Example Role Name",
    "title": "Example Role Description",
    "roleType": "user-defined"
  }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your role. Ensure that the name of your role is descriptive as you can use this to look up information on your role. |
| `description` | (Optional) A descriptive value that you can include to provide more information on your role. |
| `roleType` |

**Response**

A successful response returns your newly created role, with its corresponding role ID, as well as information on its role type, permission sets, and subject attributes.

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "roleType": "user-defined",
  "permissionSets": [
    "string"
  ],
  "sandboxes": [
    "string"
  ],
  "subjectAttributes": {
    "additionalProp1": [
      "string"
    ],
    "additionalProp2": [
      "string"
    ],
    "additionalProp3": [
      "string"
    ]
  },
  "createdBy": "string",
  "createdAt": 0,
  "modifiedBy": "string",
  "modifiedAt": 0,
  "etag": "string"
}
```

## Update a role {#patch}

You can update a role's properties by making a PATCH request to the `/roles` endpoint while providing the corresponding role ID and values for the operations you want to apply.

**API format**

```http
PATCH /roles/{ROLE_ID}
```

| Parameter | Description |
| --- | --- |
| {ROLE_ID} | The ID of the role that you want to update. |


**Request**

```shell
curl -X PATCH \
  https://platform.adobe.io/data/foundation/access-control/administration/roles/{ROLE_ID} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
  -d'{
    "operations": [
      {
        "op": "add",
        "path": "string",
        "value": "string"
      }
    ]
  }'
```

| Operations | Description |
| --- | --- |
| `op` | The operation call used to define the action needed to update the role. Operations include: `add`, `replace`, and `remove`. |
| `path` | The path of the parameter to be updated. |
| `value` | The new value you want to update your parameter with. |

**Response**

A successful response returns the updated role, including new values for the properties you chose to update.

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "roleType": "user-defined",
  "permissionSets": [
    "string"
  ],
  "sandboxes": [
    "string"
  ],
  "subjectAttributes": {
    "additionalProp1": [
      "string"
    ],
    "additionalProp2": [
      "string"
    ],
    "additionalProp3": [
      "string"
    ]
  },
  "createdBy": "string",
  "createdAt": 0,
  "modifiedBy": "string",
  "modifiedAt": 0,
  "etag": "string"
}
```

## Update a role by role ID {#put}

You can update a role by making a PUT request to the `/roles` endpoint and specifying the role ID that corresponds to the role you want to update.

**API format**

```http
PUT /roles/{ROLE_ID}
```

**Request**

The following request updates the name, description, and role type for role ID: `{ROLE_ID}`.

```shell
curl -X PUT \
  https://platform.adobe.io/data/foundation/access-control/administration/roles/{ROLE_ID} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
  -d'{
    "name": "string",
    "description": "string",
    "roleType": "user-defined"
  }'
```

| Parameter | Description |
| --- | --- |
| `name` |
| `description` |
| `roleType` |

**Response**

A successful returns your updated role, including new values for its name, description, and role type.

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "roleType": "user-defined",
  "permissionSets": [
    "string"
  ],
  "sandboxes": [
    "string"
  ],
  "subjectAttributes": {
    "additionalProp1": [
      "string"
    ],
    "additionalProp2": [
      "string"
    ],
    "additionalProp3": [
      "string"
    ]
  },
  "createdBy": "string",
  "createdAt": 0,
  "modifiedBy": "string",
  "modifiedAt": 0,
  "etag": "string"
}
```

## Update subject by role ID

To update the subjects associated with a role, make a PATCH request to the `/roles` endpoint while providing the role ID of the subjects you want to update.

**API format**

```http
PATCH /roles/{ROLE_ID}
```

| Parameter | Description |
| --- | --- |
| {ROLE_ID} | The ID of role associated with the subjects you want to update. |

**Request**

The following request updates the subjects associated with `{ROLE_ID}`.

```shell
curl -X PATCH \
  https://platform.adobe.io/data/foundation/access-control/administration/roles/{ROLE_ID} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
  -d'{
    "operations": [
      {
        "op": "add",
        "path": "string",
        "value": "string"
      }
    ]
  }'
```

| Operations | Description |
| --- | --- |
| `op` | The operation call used to define the action needed to update the role. Operations include: `add`, `replace`, and `remove`. |
| `path` | The path of the parameter to be updated. |
| `value` | The new value you want to update your parameter with. |

**Response**

A successful response returns the updated subjects associated with the queried role ID.

```json
{
  "subjects": [
    {
      "subjectId": "string",
      "subjectType": "user"
    }
  ],
  "_page": {
    "limit": 0,
    "count": 0
  },
  "_links": {
    "next": {
      "href": "string",
      "templated": true
    },
    "page": {
      "href": "string",
      "templated": true
    }
  }
}
```

## Delete a role {#delete}

To delete a role, make a DELETE request to the `/roles` endpoint while specifying the ID of the role you want to delete.

**API format**

```http
DELETE /roles/{ROLE_ID}
```

| Parameter | Description |
| --- | --- |
| {ROLE_ID} | The ID of the role you want to delete. |

**Request**

The following request deletes the role with the ID of `{ROLE_ID}`.

```shell
curl -X DELETE \
  https://platform.adobe.io/data/foundation/access-control/administration/roles/{ROLE_ID} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
```

**Response**

A successful response returns HTTP status 204 (No Content) and a blank body.

You can confirm the deletion by attempting a lookup (GET) request to the role. You will receive an HTTP status 404 (Not Found) because the role has been removed from the administration.
