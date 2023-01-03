---
keywords: Experience Platform;home;popular topics;data governance;data usage policy
solution: Experience Platform
title: Create a Data Governance Policy in the API
topic-legacy: policies
type: Tutorial
description: Learn how to create a data governance policy using the Policy Service API.
exl-id: 8483f8a1-efe8-4ebb-b074-e0577e5a81a4
---
# Create a data governance policy in the API

The [Policy Service API](https://www.adobe.io/experience-platform-apis/references/policy-service/) allows you to create and manage data governance policies to determine what marketing actions can be taken against data that contains certain data usage labels.

This document provides a step-by-step tutorial for creating a governance policy using the [!DNL Policy Service] API.

>[!NOTE]
>
>For steps on how to create an access control policy, see the `/policies` endpoint guide for the [Access Control API](../../access-control/abac/api/policies.md). To learn how to create a consent policy, see the [policies UI guide](./user-guide.md#consent-policy).

## Getting started

This tutorial requires a working understanding of the following key concepts involved in creating and evaluating policies:

* [Adobe Experience Platform Data Governance](../home.md): The framework by which [!DNL Platform] enforces data usage compliance.
    * [Data usage labels](../labels/overview.md): Data usage labels are applied to XDM data fields, specifying restrictions for how that data can be accessed.
* [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data.
* [Sandboxes](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

Before starting this tutorial, please review the [developer guide](../api/getting-started.md) for important information that you need to know in order to successfully make calls to the [!DNL Policy Service] API, including required headers and how to read example API calls.

## Define a marketing action {#define-action}

In the Data Governance framework, a marketing action is an action that an [!DNL Experience Platform] data consumer takes, for which there is a need to check for violations of data usage policies.

The first step in creating a data usage policy is to determine what marketing action the policy will evaluate. This can be done using one of the following options:

* [Look up an existing marketing action](#look-up)
* [Create a new marketing action](#create-new)

### Look up an existing marketing action {#look-up}

You can look up existing marketing actions to be evaluated by your policy by making a GET request to one of the `/marketingActions` endpoints.

**API format**

Depending on whether you are looking up a marketing action provided by [!DNL Experience Platform] or a custom marketing action created by your organization, use the `marketingActions/core` or `marketingActions/custom` endpoints, respectively.

```http
GET /marketingActions/core
GET /marketingActions/custom
```

**Request**

The following request uses the `marketingActions/custom` endpoint, which fetches a list of all marketing actions defined by your IMS Organization.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the total number of marketing actions found (`count`) and lists the details of the marketing actions themselves within the `children` array.

```json
{
    "_page": {
        "start": "sampleMarketingAction",
        "count": 2
    },
    "_links": {
        "page": {
            "href": "https://platform.adobe.io/marketingActions/custom?{?limit,start,property}",
            "templated": true
        }
    },
    "children": [
        {
            "name": "sampleMarketingAction",
            "description": "Marketing Action description.",
            "imsOrg": "{ORG_ID}",
            "created": 1550714012088,
            "createdClient": "{CREATED_CLIENT}",
            "createdUser": "{CREATED_USER}",
            "updated": 1550714012088,
            "updatedClient": "{UPDATED_CLIENT}",
            "updatedUser": "{UPDATED_USER}",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/marketingActions/custom/sampleMarketingAction"
                }
            }
        },
        {
            "name": "newMarketingAction",
            "description": "Another marketing action.",
            "imsOrg": "{ORG_ID}",
            "created": 1550793833224,
            "createdClient": "{CREATED_CLIENT}",
            "createdUser": "{CREATED_USER}",
            "updated": 1550793833224,
            "updatedClient": "{UPDATED_CLIENT}",
            "updatedUser": "{UPDATED_USER}",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/marketingActions/custom/newMarketingAction"
                }
            }
        }
    ]
}
```

| Property | Description |
| --- | --- |
| `_links.self.href` | Each item within the `children` array contains a URI ID for the listed marketing action. |

When you find the marketing action that you want to use, record the value of its `href` property. This value is used during the next step of [creating a policy](#create-policy).

### Create a new marketing action {#create-new}

You can create a new marketing action by making a PUT request to the `/marketingActions/custom/` endpoint and providing a name for the marketing action at the end of the request path.

**API format**

```http
PUT /marketingActions/custom/{MARKETING_ACTION_NAME}
```

| Parameter | Description |
| --- | --- |
| `{MARKETING_ACTION_NAME}` | The name of the new marketing action you want to create. This name acts as the marketing action's primary identifier and therefore must be unique. Best practice is to give the marketing action a name that is descriptive but concise. |

**Request**

The following request creates a new custom marketing action called "exportToThirdParty". Notice that the `name` in the request payload is the same as the name provided in the request path.

```shell
curl -X PUT \  
  https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/exportToThirdParty \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
      "name": "exportToThirdParty",
      "description": "Export data to a third party"
    }'
```

| Property | Description |
| --- | --- |
| `name` | The name of the marketing action you want to create. This name must match the name provided in the request path or a 400 (Bad Request) error will occur. |
| `description` | A human-readable description of the marketing action. |

**Response**

A successful response returns HTTP status 201 (Created) and the details of the newly created marketing action.

```json
{
    "name": "exportToThirdParty",
    "description": "Export data to a third party",
    "imsOrg": "{ORG_ID}",
    "created": 1550713341915,
    "createdClient": "{CREATED_CLIENT}",
    "createdUser": "{CREATED_USER",
    "updated": 1550713856390,
    "updatedClient": "{UPDATED_CLIENT}",
    "updatedUser": "{UPDATED_USER}",
    "_links": {
        "self": {
            "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/marketingActions/custom/exportToThirdParty"
        }
    }
}
```

| Property | Description |
| --- | --- |
| `_links.self.href` | The URI ID of the marketing action. |

Record the URI ID of the newly created marketing action, as it will be used in the next step of creating a policy.

## Create a policy {#create-policy}

Creating a new policy requires you to provide the URI ID of a marketing action with an expression of the usage labels that prohibit that marketing action. 

This expression is called a policy expression and is an object containing either (A) a label, or (B) an operator and operands, but not both. In turn, each operand is also a policy expression object. For example, a policy regarding the export of data to a third party might be prohibited if `C1 OR (C3 AND C7)` labels are present. This expression would be specified as:

```json
"deny": {
  "operator": "OR",
  "operands": [
    {
      "label": "C1"
    },
    {
      "operator": "AND",
      "operands": [
        {
          "label": "C3"
        },
        {
          "label": "C7"
        }
      ]
    }
  ]
}
```

>[!NOTE]
>
>Only OR and AND operators are supported.

Once you have configured your policy expression, you can create a new policy by making a POST request to the `/policies/custom` endpoint.

**API format**

```http
POST /policies/custom
```

**Request**

The following request creates a policy called "Export Data to Third Party" by providing a marketing action and policy expression in the request payload.

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/dulepolicy/policies/custom \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "name": "Export Data to Third Party",
    "status": "DRAFT",
    "marketingActionRefs": [
      "../marketingActions/custom/exportToThirdParty"
    ],
    "description": "Conditions under which data cannot be exported to a third party",
    "deny": {
      "operator": "OR",
      "operands": [
        {"label": "C1"},
        {
          "operator": "AND",
          "operands": [
            {"label": "C3"},
            {"label": "C7"}
          ]
        }
      ]
    }
  }'
```

| Property | Description |
| --- | --- |
| `marketingActionRefs` | An array containing the `href` value of a marketing action, obtained in the [previous step](#define-action). While the above example lists only one marketing action, multiple actions can also be provided. |
| `deny` | The policy expression object. Defines the usage labels and conditions that would cause the policy to reject the marketing action referenced in `marketingActionRefs`. |

**Response**

A successful response returns HTTP status 201 (Created) and the details of the newly created policy.

```json
{
    "name": "Export Data to Third Party",
    "status": "DRAFT",
    "marketingActionRefs": [
        "https://platform-stage.adobe.io:443/data/foundation/dulepolicy/marketingActions/custom/exportToThirdParty"
    ],
    "description": "Conditions under which data cannot be exported to a third party",
    "deny": {
        "operator": "OR",
        "operands": [
            {
                "label": "C1"
            },
            {
                "operator": "AND",
                "operands": [
                    {
                        "label": "C3"
                    },
                    {
                        "label": "C7"
                    }
                ]
            }
        ]
    },
    "imsOrg": "{ORG_ID}",
    "created": 1565651746693,
    "createdClient": "{CREATED_CLIENT}",
    "createdUser": "{CREATED_USER",
    "updated": 1565651746693,
    "updatedClient": "{UPDATED_CLIENT}",
    "updatedUser": "{UPDATED_USER}",
    "_links": {
        "self": {
            "href": "https://platform-stage.adobe.io/data/foundation/dulepolicy/policies/custom/5d51f322e553c814e67af1a3"
        }
    },
    "id": "5d51f322e553c814e67af1a3"
}
```

| Property | Description |
| --- | --- |
| `id` | A read-only, system-generated value that uniquely identifies the policy. |

Record the URI ID of the newly created policy, as it is used in the next step to enable the policy.

## Enable the policy

>[!NOTE]
>
>While this step is optional if you wish to leave your policy in `DRAFT` status, please note that by default a policy must have its status set to `ENABLED` in order to participate in evaluation. See the guide on [policy enforcement](../enforcement/api-enforcement.md) for information on how to make exceptions for policies in `DRAFT` status.

By default, policies that have their `status` property set to `DRAFT` do not participate in evaluation. You can enable your policy for evaluation by making a PATCH request to the `/policies/custom/` endpoint and providing the unique identifier for the policy at the end of the request path.

**API format**

```http
PATCH /policies/custom/{POLICY_ID}
```

| Parameter | Description |
| --- | --- |
| `{POLICY_ID}` | The `id` value of the policy you want to enable. |

**Request**

The following request performs a PATCH operation on the `status` property of the policy, changing its value from `DRAFT` to `ENABLED`.

```shell
curl -X PATCH \
  https://platform.adobe.io/data/foundation/dulepolicy/policies/custom/5d51f322e553c814e67af1a3
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '[
    {
      "op": "replace",
      "path": "/status",
      "value": "ENABLED"
    }
  ]'
```

| Property | Description |
| --- | --- |
| `op` | The type of PATCH operation to perform. This request performs a "replace" operation. |
| `path` | The path to the field to be updated. When enabling a policy, the value must be set to "/status". |
| `value` | The new value to be assigned to the property specified in `path`. This request sets the policy's `status` property to "ENABLED". |

**Response**

A successful response returns HTTP status 200 (OK) and the details of the updated policy, with its `status` now set to `ENABLED`.

```json
{
    "name": "Export Data to Third Party",
    "status": "ENABLED",
    "marketingActionRefs": [
        "https://platform-stage.adobe.io:443/data/foundation/dulepolicy/marketingActions/custom/exportToThirdParty"
    ],
    "description": "Conditions under which data cannot be exported to a third party",
    "deny": {
        "operator": "OR",
        "operands": [
            {
                "label": "C1"
            },
            {
                "operator": "AND",
                "operands": [
                    {
                        "label": "C3"
                    },
                    {
                        "label": "C7"
                    }
                ]
            }
        ]
    },
    "imsOrg": "{ORG_ID}",
    "created": 1565651746693,
    "createdClient": "{CREATED_CLIENT}",
    "createdUser": "{CREATED_USER}",
    "updated": 1565723012139,
    "updatedClient": "{UPDATED_CLIENT}",
    "updatedUser": "{UPDATED_USER}",
    "_links": {
        "self": {
            "href": "https://platform-stage.adobe.io/data/foundation/dulepolicy/policies/custom/5d51f322e553c814e67af1a3"
        }
    },
    "id": "5d51f322e553c814e67af1a3"
}
```

## Next steps

By following this tutorial, you have successfully created a data usage policy for a marketing action. You can now continue to the tutorial on [enforcing data usage policies](../enforcement/api-enforcement.md) to learn how to check for policy violations and handle them in your experience application.

For more information on the different available operations in the [!DNL Policy Service] API,  see the [Policy Service developer guide](../api/getting-started.md). For information on how to enforce policies for [!DNL Real-Time Customer Profile] data, see the tutorial on [enforcing data usage compliance for audience segments](../../segmentation/tutorials/governance.md).

To learn how to manage usage policies in the [!DNL Experience Platform] user interface, see the [policy user guide](user-guide.md).
