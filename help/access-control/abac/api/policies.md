---
keywords: Experience Platform;home;popular topics;api;Attribute-Based Access Control;attribute-based access control
solution: Experience Platform
title: Access Control Policies API Endpoint
description: The /policies endpoint in the Attribute-Based Access Control API allows you to  programmatically manage policies in Adobe Experience Platform.
exl-id: 07690f43-fdd9-4254-9324-84e6bd226743
---
# Access control policies endpoint

>[!NOTE]
>
>If a user token is being passed, then the user of the token must have an "org admin" role for the requested org.

Access control policies are statements that bring attributes together to establish permissible and impermissible actions. These policies can either be local or global, and can override other policies. The `/policies` endpoint in the attribute-based access control API allows you to programmatically manage policies, including information on the rules that govern them as well as their respective subject conditions.

>[!IMPORTANT]
>
>This endpoint is not to be confused with the `/policies` endpoint in the [Policy Service API](../../../data-governance/api/policies.md), which is used to manage data usage policies.

## Getting started

The API endpoint used in this guide is part of the attribute-based access control API. Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Retrieve a list of policies {#list}

Make a GET request to the `/policies` endpoint to list all existing policies in your organization.

**API format**

```http
GET /policies
```

**Request**

The following request retrieves a list of existing policies.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/access-control/administration/policies \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
```

**Response**

A successful response returns a list of existing policies.

```json
{
  {
      "id": "7019068e-a3a0-48ce-b56b-008109470592",
      "imsOrgId": "{IMS_ORG}",
      "createdBy": "{CREATED_BY}",
      "createdAt": 1652892767559,
      "modifiedBy": "{MODIFIED_BY}",
      "modifiedAt": 1652895736367,
      "name": "schema-field",
      "description": "schema-field",
      "status": "inactive",
      "subjectCondition": null,
      "rules": [
          {
              "effect": "Deny",
              "resource": "/orgs/{IMS_ORG}/sandboxes/xql/schemas/*/schema-fields/*",
              "condition": "{\"adobe.match_all_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]}",
              "actions": [
                  "com.adobe.action.read",
                  "com.adobe.action.write",
                  "com.adobe.action.view"
              ]
          },
          {
              "effect": "Permit",
              "resource": "/orgs/{IMS_ORG}/sandboxes/*/schemas/*/schema-fields/*",
              "condition": "{\"adobe.match_all_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]}",
              "actions": [
                  "com.adobe.action.delete"
              ]
          },
          {
              "effect": "Deny",
              "resource": "/orgs/{IMS_ORG}/sandboxes/delete-sandbox-adfengine-test-8/segments/*",
              "condition": "{\"!\":[{\"adobe.match_any_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"custom/\",{\"var\":\"resource.labels\"}]}]}",
              "actions": [
                  "com.adobe.action.write"
              ]
          }
      ],
      "_etag": "\"0300593f-0000-0200-0000-62852ff80000\""
  },
  {
      "id": "13138ef6-c007-495d-837f-0a248867e219",
      "imsOrgId": "{IMS_ORG}",
      "createdBy": "{CREATED_BY}",
      "createdAt": 1652859368555,
      "modifiedBy": "{MODIFIED_BY}",
      "modifiedAt": 1652890780206,
      "name": "Documentation-Copy",
      "description": "xyz",
      "status": "active",
      "subjectCondition": null,
      "rules": [
          {
              "effect": "Permit",
              "resource": "orgs/{IMS_ORG}/sandboxes/ro-sand/schemas/*/schema-fields/*",
              "condition": "{\"!\":[{\"or\":[{\"adobe.match_all_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]},{\"!\":[{\"and\":[{\"adobe.match_any_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]},{\"adobe.match_all_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]}]}]}]}]}",
              "actions": [
                  "com.adobe.action.read"
              ]
          },
          {
              "effect": "Deny",
              "resource": "orgs/{IMS_ORG}/sandboxes/*/segments/*",
              "condition": "{\"!\":[{\"or\":[{\"adobe.match_any_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]},{\"adobe.match_all_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"custom/\",{\"var\":\"resource.labels\"}]}]}]}",
              "actions": [
                  "com.adobe.action.read"
              ]
          }
      ],
      "_etag": "\"0300d43c-0000-0200-0000-62851c9c0000\""
  },
}
```

| Property | Description |
| --- | --- |
| `id` | The ID that corresponds with a policy. This identifier is auto-generated and can be used to lookup, update, and delete a policy. |
| `imsOrgId` | The organization where the queried policy is accessible. |
| `createdBy` | The ID of the user who created the policy. |
| `createdAt` | The time when the policy was created. The `createdAt` property is displayed in unix epoch timestamp.  |
| `modifiedBy` | The ID of the user who last updated the policy. |
| `modifiedAt` | The time when the policy was last updated. The `modifiedAt` property is displayed in unix epoch timestamp. |
| `name` | The name of the policy. |
| `description` | (Optional) A property that can be added to provide further information on a particular policy. |
| `status` | The current status of a policy. This property defines whether a policy is currently `active` or `inactive`. |
| `subjectCondition` | The conditions applied to a subject. A subject is a user with certain attributes requesting access to a resource to perform an action. In this case, `subjectCondition` are query-like conditions applied to the subject attributes. |
| `rules` | The set of rules that define a policy. Rules define which attribute combinations are authorized in order for the subject to successfully perform an action to the resource. |
| `rules.effect` | The effect that results after considering values for `action`, `condition` and `resource`. Possible values include: `permit`, `deny`, or `indeterminate`. |
| `rules.resource` | The asset or object that a subject can or can't access.  Resources can be files, applications, servers, or even APIs. |
| `rules.condition` | The conditions applied to a resource. For example, if a resource is a schema, then a schema can have certain labels applied to it that contribute to whether an action against that schema is permissible or impermissible. |
| `rules.action` | The action that a subject is permitted to do against a queried resource. Possible values include: `read`, `create`, `edit`, and `delete`. |

## Look up policy details by ID {#lookup}

Make a GET request to the `/policies` endpoint while providing a policy ID in the request path to retrieve information about that individual policy.

**API format**

```http
GET /policies/{POLICY_ID}
```

| Parameter | Description |
| --- | --- |
| {POLICY_ID} | The ID of the policy you want to retrieve. |

**Request**

The following request retrieves information about an individual policy.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/access-control/administration/policies/13138ef6-c007-495d-837f-0a248867e219 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
```

**Response**

A successful request returns information on the queried policy ID.

```json
{
  "policies": [
    {
      "id": "7019068e-a3a0-48ce-b56b-008109470592",
      "imsOrgId": "5555467B5D8013E50A494220@AdobeOrg",
      "createdBy": "example@AdobeID",
      "createdAt": 1652892767559,
      "modifiedBy": "example@AdobeID",
      "modifiedAt": 1652895736367,
      "name": "schema-field",
      "description": "schema-field",
      "status": "inactive",
      "subjectCondition": null,
      "rules": [
        {
          "effect": "Deny",
          "resource": "/orgs/5555467B5D8013E50A494220@AdobeOrg/sandboxes/xql/schemas/*/schema-fields/*",
          "condition": "{\"adobe.match_all_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]}",
          "actions": [
            "com.adobe.action.read",
            "com.adobe.action.write",
            "com.adobe.action.view"
          ]
        },
        {
          "effect": "Permit",
          "resource": "/orgs/5555467B5D8013E50A494220@AdobeOrg/sandboxes/*/schemas/*/schema-fields/*",
          "condition": "{\"adobe.match_all_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]}",
          "actions": [
            "com.adobe.action.delete"
          ]
        },
        {
          "effect": "Deny",
          "resource": "/orgs/5555467B5D8013E50A494220@AdobeOrg/sandboxes/delete-sandbox-adfengine-test-8/segments/*",
          "condition": "{\"!\":[{\"adobe.match_any_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"custom/\",{\"var\":\"resource.labels\"}]}]}",
          "actions": [
            "com.adobe.action.write"
          ]
        }
      ],
      "etag": "\"0300593f-0000-0200-0000-62852ff80000\""
    }
  ]
}
```

| Property | Description |
| --- | --- |
| `id` | The ID that corresponds with a policy. This identifier is auto-generated and can be used to lookup, update, and delete a policy. |
| `imsOrgId` | The organization where the queried policy is accessible. |
| `createdBy` | The ID of the user who created the policy. |
| `createdAt` | The time when the policy was created. The `createdAt` property is displayed in unix epoch timestamp.  |
| `modifiedBy` | The ID of the user who last updated the policy. |
| `modifiedAt` | The time when the policy was last updated. The `modifiedAt` property is displayed in unix epoch timestamp. |
| `name` | The name of the policy. |
| `description` | (Optional) A property that can be added to provide further information on a particular policy. |
| `status` | The current status of a policy. This property defines whether a policy is currently `active` or `inactive`. |
| `subjectCondition` | The conditions applied to a subject. A subject is a user with certain attributes requesting access to a resource to perform an action. In this case, `subjectCondition` are query-like conditions applied to the subject attributes. |
| `rules` | The set of rules that define a policy. Rules define which attribute combinations are authorized in order for the subject to successfully perform an action to the resource. |
| `rules.effect` | The effect that results after considering values for `action`, `condition` and `resource`. Possible values include: `permit`, `deny`, or `indeterminate`. |
| `rules.resource` | The asset or object that a subject can or can't access.  Resources can be files, applications, servers, or even APIs. |
| `rules.condition` | The conditions applied to a resource. For example, if a resource is a schema, then a schema can have certain labels applied to it that contribute to whether an action against that schema is permissible or impermissible. |
| `rules.action` | The action that a subject is permitted to do against a queried resource. Possible values include: `read`, `create`, `edit`, and `delete`. |


## Create a policy {#create}

To create a new policy, make a POST request to the `/policies` endpoint.

**API format**

```http
POST /policies
```

**Request**

The following request creates a new policy named: `acme-integration-policy`.

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/access-control/administration/policies \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
  -d'{
      "name": "acme-integration-policy",
      "description": "Policy for ACME",
      "imsOrgId": "{IMS_ORG}",
      "rules": [
        {
          "effect": "Permit",
          "resource": "/orgs/{IMS_ORG}/sandboxes/*",
          "condition": "{\"or\":[{\"adobe.match_any_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]},{\"!\":[{\"adobe.match_all_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]}]}]}",
          "actions": [
            "com.adobe.action.read"
          ]
        }
      ]
    }'
```

| Parameter | Description |
| --- | --- |
| `name` | The name of the policy. |
| `description` | (Optional) A property that can be added to provide further information on a particular policy. |
| `imsOrgId` | The organization that contains the policy. |
| `rules` | The set of rules that define a policy. Rules define which attribute combinations are authorized in order for the subject to successfully perform an action to the resource. |
| `rules.effect` | The effect that results after considering values for `action`, `condition` and `resource`. Possible values include: `permit`, `deny`, or `indeterminate`. |
| `rules.resource` | The asset or object that a subject can or can't access.  Resources can be files, applications, servers, or even APIs. |
| `rules.condition` | The conditions applied to a resource. For example, if a resource is a schema, then a schema can have certain labels applied to it that contribute to whether an action against that schema is permissible or impermissible. |
| `rules.action` | The action that a subject is permitted to do against a queried resource. Possible values include: `read`, `create`, `edit`, and `delete`. |

**Response**

A successful request returns the newly created policy, including its unique policy ID and associated rules.

```json
{
    "id": "c3863937-5d40-448d-a7be-416e538f955e",
    "imsOrgId": "{IMS_ORG}",
    "createdBy": "{CREATED_BY}",
    "createdAt": 1652988384458,
    "modifiedBy": "{MODIFIED_BY}",
    "modifiedAt": 1652988384458,
    "name": "acme-integration-policy",
    "description": "Policy for ACME",
    "status": "active",
    "subjectCondition": null,
    "rules": [
        {
            "effect": "Permit",
            "resource": "/orgs/{IMS_ORG}/sandboxes/*",
            "condition": "{\"or\":[{\"adobe.match_any_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]},{\"!\":[{\"adobe.match_all_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]}]}]}",
            "actions": [
                "com.adobe.action.read"
            ]
        }
    ],
    "_etag": null
}
```

| Property | Description |
| --- | --- |
| `id` | The ID that corresponds with a policy. This identifier is auto-generated and can be used to lookup, update, and delete a policy. |
| `name` | The name of a policy. |
| `rules` | The set of rules that define a policy. Rules define which attribute combinations are authorized in order for the subject to successfully perform an action to the resource. |
| `rules.effect` | The effect that results after considering values for `action`, `condition` and `resource`. Possible values include: `permit`, `deny`, or `indeterminate`. |
| `rules.resource` | The asset or object that a subject can or can't access.  Resources can be files, applications, servers, or even APIs. |
| `rules.condition` | The conditions applied to a resource. For example, if a resource is a schema, then a schema can have certain labels applied to it that contribute to whether an action against that schema is permissible or impermissible. |
| `rules.action` | The action that a subject is permitted to do against a queried resource. Possible values include: `read`, `create`, `edit`, and `delete`. |


## Update a policy by policy ID {#put}

To update the rules of an individual policy, make a PUT request to the `/policies` endpoint while providing the ID of the policy that you want to update in the request path.

**API format**

```http
PUT /policies/{POLICY_ID}
```

| Parameter | Description |
| --- | --- |
| {POLICY_ID} | The ID of the policy you want to update. |

**Request**

```shell
curl -X PUT \
  https://platform.adobe.io/data/foundation/access-control/administration/policies/8cf487d7-3642-4243-a8ea-213d72f694b9 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
  -d'{
      "id": "8cf487d7-3642-4243-a8ea-213d72f694b9",
      "imsOrgId": "{IMS_ORG}",
      "name": "test-2",
      "rules": [
      {
        "effect": "Deny",
        "resource": "/orgs/{IMS_ORG}/sandboxes/*",
        "condition": "{\"or\":[{\"adobe.match_any_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]},{\"!\":[{\"adobe.match_all_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]}]}]}",
        "actions": [
          "com.adobe.action.read"
        ]
      }
    ]
  }'
```

**Response**

A successful response returns the updated policy.

```json
{
    "id": "8cf487d7-3642-4243-a8ea-213d72f694b9",
    "imsOrgId": "{IMS_ORG}",
    "createdBy": "{CREATED_BY}",
    "createdAt": 1652988866647,
    "modifiedBy": "{MODIFIED_BY}",
    "modifiedAt": 1652989297287,
    "name": "test-2",
    "description": null,
    "status": "active",
    "subjectCondition": null,
    "rules": [
        {
            "effect": "Deny",
            "resource": "/orgs/{IMS_ORG}/sandboxes/*",
            "condition": "{\"or\":[{\"adobe.match_any_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]},{\"!\":[{\"adobe.match_all_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]}]}]}",
            "actions": [
                "com.adobe.action.read"
            ]
        }
    ],
    "_etag": null
}
```

## Update policy properties {#patch}

To update the properties of an individual policy, make a PATCH request to the `/policies` endpoint while providing the ID of the policy that you want to update in the request path.

**API format**

```http
PATCH /policies/{POLICY_ID}
```

| Parameter | Description |
| --- | --- |
| {POLICY_ID} | The ID of the policy you want to update. |

**Request**

The following request replaces the value of `/description` in policy ID `c3863937-5d40-448d-a7be-416e538f955e`.

```shell
curl -X PATCH \
  https://platform.adobe.io/data/foundation/access-control/administration/policies/c3863937-5d40-448d-a7be-416e538f955e \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}'
  -d'{
    "operations": [
      {
        "op": "replace",
        "path": "/description",
        "value": "Pre-set policy to be applied for ACME"
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

A successful response returns the queried policy ID with updated description.

```json
{
    "id": "c3863937-5d40-448d-a7be-416e538f955e",
    "imsOrgId": "{IMS_ORG}",
    "createdBy": "acp_accessControlService",
    "createdAt": 1652988384458,
    "modifiedBy": "acp_accessControlService",
    "modifiedAt": 1652988384458,
    "name": "acme-integration-policy",
    "description": "Pre-set policy to be applied for ACME",
    "status": "active",
    "subjectCondition": null,
    "rules": [
        {
            "effect": "Permit",
            "resource": "/orgs/{IMS_ORG}/sandboxes/*",
            "condition": "{\"or\":[{\"adobe.match_any_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]},{\"!\":[{\"adobe.match_all_labels_by_prefix\":[{\"var\":\"subject.roles.labels\"},\"core/\",{\"var\":\"resource.labels\"}]}]}]}",
            "actions": [
                "com.adobe.action.read"
            ]
        }
    ],
    "_etag": null
}
```

## Delete a policy {#delete}

To delete a policy, make a DELETE request to the `/policies` endpoint while providing the ID of the policy you want to delete.

**API format**

```http
DELETE /policies/{POLICY_ID}
```

| Parameter | Description |
| --- | --- |
| {POLICY_ID} | The ID of the policy you want to delete. |

**Request**

The following request deletes the policy with the ID of `c3863937-5d40-448d-a7be-416e538f955e`.

```shell
curl -X DELETE \
  https://platform.adobe.io/data/foundation/access-control/administration/policies/c3863937-5d40-448d-a7be-416e538f955e \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
```

**Response**

A successful response returns HTTP status 204 (No Content) and a blank body.

You can confirm the deletion by attempting a lookup (GET) request to the policy. You will receive an HTTP status 404 (Not Found) because the policy has been removed from the administration.
