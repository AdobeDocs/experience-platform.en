---
keywords: Experience Platform;home;popular topics;api;field level access control;Field Level Access Control;flac;FLAC
solution: Experience Platform
title: Roles API Endpoint
description: The /roles endpoint in the Field Level Access Control API allows you to  programmatically manage roles in Adobe Experience Platform.
---
# Roles endpoint

## Getting started

The API endpoint used in this guide is part of the Field Level Access Control API. Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Retrieve a list of roles {#list}

You can list all existing roles belonging to your IMS Organization, by making a GET request to the `/roles` endpoint.

**API format**

```http
GET /roles?{QUERY_PARAMS}
```

| Parameter | Description |
| --------- | ----------- |
| `{QUERY_PARAMS}` | Optional query parameters to filter results by. See the section on [query parameters](./appendix.md#query) for more information. |

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/access-control/administration/roles \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
```

**Response**

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

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/access-control/administration/roles/{ROLE_ID} \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
```

**Response**

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

## Create a role {#create}

To create a new role, make a POST request to the `/roles` endpoint while providing values for your role's name, description, and role type.

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

**Response**

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

You can update a role's properties by making a PATCH request to the `/roles` endpoint while providing the corresponding `roleId` and values for the operations you want to apply.

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

**Response**

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



## Update subject by role ID

## Delete a role {#delete}