---
keywords: Experience Platform;home;popular topics;api;Attribute-Based Access Control;attribute-based access control
solution: Experience Platform
title: Roles API Endpoint
description: The /roles endpoint in the Attribute-Based Access Control API allows you to  programmatically manage roles in Adobe Experience Platform.
exl-id: 049f7a18-7d06-437b-8ce9-25d7090ba782
---
# Roles endpoint

Roles define the access that an administrator, a specialist, or an end-user has to resources in your organization. In a role-based access control environment, user access provisioning is group through common responsibilities and needs. A role has a given set of permissions and members of your organization can be assigned to one or more roles, depending on the scope of view or write access they need. 

The `/roles` endpoint in the attribute-based access control API allows you to  programmatically manage roles in your organization.

## Getting started

The API endpoint used in this guide is part of the attribute-based access control API. Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Retrieve a list of roles {#list}

You can list all existing roles belonging to your organization by making a GET request to the `/roles` endpoint.

**API format**

```http
GET /roles/
```

**Request**

The following request retrieves a list of roles belonging to your organization.

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
      "id": "3dfa045d-de58-4dfd-8ea9-e4e2c1b6d809",
      "name": "Administrator Role",
      "description": "Role for administrator type of responsibilities and access",
      "roleType": "user-defined",
      "permissionSets": [
        "manage-datasets",
        "manage-schemas"
      ],
      "sandboxes": [
        "prod"
      ],
      "subjectAttributes": {
        "labels": [
          "core/S1"
        ]
      },
      "createdBy": "{CREATED_BY}",
      "createdAt": 1648153201825,
      "modifiedBy": "{MODIFIED_BY}",
      "modifiedAt": 1648153201825,
      "etag": null
    }
  ],
  "_page": {
    "limit": 1,
    "count": 1
  },
  "_links": {
    "next": {
      "href": "https://platform.adobe.io:443/data/foundation/access-control/administration/roles/3dfa045d-de58-4dfd-8ea9-e4e2c1b6d809",
      "templated": true
    },
    "page": {
      "href": "https://platform.adobe.io:443/data/foundation/access-control/administration/roles/3dfa045d-de58-4dfd-8ea9-e4e2c1b6d809",
      "templated": true
    },
    "subjects": {
      "href": "https://platform.adobe.io:443/data/foundation/access-control/administration/roles/3dfa045d-de58-4dfd-8ea9-e4e2c1b6d809",
      "templated": true
    }
  }
}
```

| Property | Description |
| --- | --- |
| `id` | The ID that corresponds with the role. This ID is auto-generated. |
| `name` | The name of your role. |
| `description` | The description property provides additional information on your role. |
| `roleType` | The designated type of the role. The possible values for role type are: `user-defined` and `system-defined`. |
| `permissionSets` | Permission sets represent a group of permissions that an administrator can apply to a role. An administrator can assign permission sets to a role, instead of assigning individual permissions. This allows you to create custom roles from a pre-defined role that contains a group of permissions. |
| `sandboxes` | This property displays the sandboxes within your organization that is provisioned for a particular role. |
| `subjectAttributes` | The attributes that indicate the correlation between a subject and the Platform resources that they have access to. |
| `subjectAttributes.labels` | Displays the data usage labels applied to the queried role. |

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
  https://platform.adobe.io/data/foundation/access-control/administration/roles/3dfa045d-de58-4dfd-8ea9-e4e2c1b6d809 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
```

**Response**

A successful response returns details for the queried role ID, including information on its role type, permission sets, and subject attributes.

```json
{
  "id": "3dfa045d-de58-4dfd-8ea9-e4e2c1b6d809",
  "name": "Administrator Role",
  "description": "Role for administrator type of responsibilities and access",
  "roleType": "user-defined",
  "permissionSets": [
    "manage-datasets",
    "manage-schemas"
  ],
  "sandboxes": [
    "prod"
  ],
  "subjectAttributes": {
    "labels": [
      "core/S1"
    ]
  },
  "createdBy": "{CREATED_BY}",
  "createdAt": 1648153201825,
  "modifiedBy": "{MODIFIED_BY}",
  "modifiedAt": 1648153201825,
  "etag": null
}
```

| Property | Description |
| --- | --- |
| `id` | The ID that corresponds with the role. This ID is auto-generated. |
| `name` | The name of your role. |
| `description` | The description property provides additional information on your role. |
| `roleType` | The designated type of the role. The possible values for role type are: `user-defined` and `system-defined`. |
| `permissionSets` | Permission sets represent a group of permissions that an administrator can apply to a role. An administrator can assign permission sets to a role, instead of assigning individual permissions. This allows you to create custom roles from a pre-defined role that contains a group of permissions. |
| `sandboxes` | This property displays the sandboxes within your organization that is provisioned for a particular role. |
| `subjectAttributes` | The attributes that indicate the correlation between a subject and the Platform resources that they have access to. |
| `subjectAttributes.labels` | Displays the data usage labels applied to the queried role. |

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

The following request retrieves subjects associated with `3dfa045d-de58-4dfd-8ea9-e4e2c1b6d809`.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/access-control/administration/roles/3dfa045d-de58-4dfd-8ea9-e4e2c1b6d809/subjects \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
```

**Response**

A successful response returns the subjects associated with the queried role ID, including the corresponding subject ID and subject type.

```json
{
  "items": [
      {
          "roleId": "3dfa045d-de58-4dfd-8ea9-e4e2c1b6d809",
          "subjectType": "user",
          "subjectId": "03Z07HFQCCUF3TUHAX274206@AdobeID"
      },
      {
          "roleId": "3dfa045d-de58-4dfd-8ea9-e4e2c1b6d809",
          "subjectType": "user",
          "subjectId": "PIRJ7WE5T3QT9Z4TCLVH86DE@AdobeID"
      },
      {
          "roleId": "3dfa045d-de58-4dfd-8ea9-e4e2c1b6d809",
          "subjectType": "user",
          "subjectId": "WHPWE00MC26SHZ7AKBFG403D@AdobeID"
      },
  ]
  "_page": {
    "limit": 0,
    "count": 0
  },
  "_links": {
      "self": {
          "href": "/roles/{ROLE_ID}/subjects",
          "templated": false,
          "type": null,
          "method": null
      },
      "page": {
          "href": "/roles/{ROLE_ID}/subjects?limit={limit}&start={start}&orderBy={orderBy}&property={property}",
          "templated": true,
          "type": null,
          "method": null
      }
  }
}
```

| Property | Description |
| --- | --- |
| `roleId` | The role ID associated with the queried subject. |
| `subjectType` | The type of the queried subject. |
| `subjectId` | The ID that corresponds with the queried subject. |

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
    "name": "Administrator Role",
    "description": "Role for administrator type of responsibilities and access",
    "roleType": "user-defined"
  }'
```

| Property | Description |
| --- | --- |
| `name` | The name of your role. Ensure that the name of your role is descriptive as you can use this to look up information on your role. |
| `description` | (Optional) A descriptive value that you can include to provide more information on your role. |
| `roleType` | The designated type of the role. The possible values for role type are: `user-defined` and `system-defined`. |

**Response**

A successful response returns your newly created role, with its corresponding role ID, as well as information on its role type, permission sets, and subject attributes.

```json
{
  "id": "3dfa045d-de58-4dfd-8ea9-e4e2c1b6d809",
  "name": "Administrator Role",
  "description": "Role for administrator type of responsibilities and access",
  "roleType": "user-defined",
  "permissionSets": [
    "manage-datasets",
    "manage-schemas"
  ],
  "sandboxes": [
    "prod"
  ],
  "subjectAttributes": {
    "labels": [
      "core/S1"
    ]
  },
  "createdBy": "{CREATED_BY}",
  "createdAt": 1648153201825,
  "modifiedBy": "{MODIFIED_BY}",
  "modifiedAt": 1648153201825,
  "etag": null
}
```

| Property | Description |
| --- | --- |
| `id` | The ID that corresponds with the role. This ID is auto-generated. |
| `name` | The name of your role. |
| `description` | The description property provides additional information on your role. |
| `roleType` | The designated type of the role. The possible values for role type are: `user-defined` and `system-defined`. |
| `permissionSets` | Permission sets represent a group of permissions that an administrator can apply to a role. An administrator can assign permission sets to a role, instead of assigning individual permissions. This allows you to create custom roles from a pre-defined role that contains a group of permissions. |
| `sandboxes` | This property displays the sandboxes within your organization that is provisioned for a particular role. |
| `subjectAttributes` | The attributes that indicate the correlation between a subject and the Platform resources that they have access to. |
| `subjectAttributes.labels` | Displays the data usage labels applied to the queried role. |

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
        "path": "/description",
        "value": "Role with permission sets for admin type of access"
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
  "id": "3dfa045d-de58-4dfd-8ea9-e4e2c1b6d809",
  "name": "Administrator Role",
  "description": "Role with permission sets for admin type of access",
  "roleType": "user-defined",
  "permissionSets": [
    "manage-datasets",
    "manage-schemas"
  ],
  "sandboxes": [
    "prod"
  ],
  "subjectAttributes": {
    "labels": [
      "core/S1"
    ]
  },
  "createdBy": "{CREATED_BY}",
  "createdAt": 1648153201825,
  "modifiedBy": "{MODIFIED_BY}",
  "modifiedAt": 1648153201825,
  "etag": null
}
```

| Property | Description |
| --- | --- |
| `id` | The ID that corresponds with the role. This ID is auto-generated. |
| `name` | The name of your role. |
| `description` | The description property provides additional information on your role. |
| `roleType` | The designated type of the role. The possible values for role type are: `user-defined` and `system-defined`. |
| `permissionSets` | Permission sets represent a group of permissions that an administrator can apply to a role. An administrator can assign permission sets to a role, instead of assigning individual permissions. This allows you to create custom roles from a pre-defined role that contains a group of permissions. |
| `sandboxes` | This property displays the sandboxes within your organization that is provisioned for a particular role. |
| `subjectAttributes` | The attributes that indicate the correlation between a subject and the Platform resources that they have access to. |
| `subjectAttributes.labels` | Displays the data usage labels applied to the queried role. |

## Update a role by role ID {#put}

You can update a role by making a PUT request to the `/roles` endpoint and specifying the role ID that corresponds to the role you want to update.

**API format**

```http
PUT /roles/{ROLE_ID}
```

**Request**

The following request updates the name, description, and role type for role ID: `3dfa045d-de58-4dfd-8ea9-e4e2c1b6d809`.

```shell
curl -X PUT \
  https://platform.adobe.io/data/foundation/access-control/administration/roles/3dfa045d-de58-4dfd-8ea9-e4e2c1b6d809 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
  -d'{
    "name": "Administrator role for ACME",
    "description": "New administrator role for ACME",
    "roleType": "user-defined"
  }'
```

| Parameter | Description |
| --- | --- |
| `name` | The updated name of a role. |
| `description` | The updated description of a role. |
| `roleType` | The designated type of the role. The possible values for role type are: `user-defined` and `system-defined`. |

**Response**

A successful returns your updated role, including new values for its name, description, and role type.

```json
{
  "id": "3dfa045d-de58-4dfd-8ea9-e4e2c1b6d809",
  "name": "Administrator Role",
  "description": "Role with permission sets for admin type of access",
  "roleType": "user-defined",
  "permissionSets": [
    "manage-datasets",
    "manage-schemas"
  ],
  "sandboxes": [
    "prod"
  ],
  "subjectAttributes": {
    "labels": [
      "core/S1"
    ]
  },
  "createdBy": "{CREATED_BY}",
  "createdAt": 1648153201825,
  "modifiedBy": "{MODIFIED_BY}",
  "modifiedAt": 1648153201825,
  "etag": null
}
```

| Property | Description |
| --- | --- |
| `id` | The ID that corresponds with the role. This ID is auto-generated. |
| `name` | The name of your role. |
| `description` | The description property provides additional information on your role. |
| `roleType` | The designated type of the role. The possible values for role type are: `user-defined` and `system-defined`. |
| `permissionSets` | Permission sets represent a group of permissions that an administrator can apply to a role. An administrator can assign permission sets to a role, instead of assigning individual permissions. This allows you to create custom roles from a pre-defined role that contains a group of permissions. |
| `sandboxes` | This property displays the sandboxes within your organization that is provisioned for a particular role. |
| `subjectAttributes` | The attributes that indicate the correlation between a subject and the Platform resources that they have access to. |
| `subjectAttributes.labels` | Displays the data usage labels applied to the queried role. |

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
        "path": "/subjects",
        "value": "New subjects"
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

| Property | Description |
| --- | --- |
| `subjectId` | The ID of a subject. |
| `subjectType` | The type of a subject. |

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
