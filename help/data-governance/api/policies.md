---
keywords: Experience Platform;home;popular topics;Policy enforcement;API-based enforcement;data governance
solution: Experience Platform
title: Data Usage Policies API Endpoint
topic-legacy: developer guide
description: Data usage policies are rules your organization adopts that describe the kinds of marketing actions that you are allowed to, or restricted from, performing on data within Experience Platform. The /policies endpoint is used for all API calls related to viewing, creating, updating, or deleting data usage policies.
exl-id: 62a6f15b-4c12-4269-bf90-aaa04c147053
---
# Data usage policies endpoint

Data usage policies are rules that describe the kinds of marketing actions that you are allowed to, or restricted from, performing on data within [!DNL Experience Platform]. The `/policies` endpoint in the [!DNL Policy Service API] allows you to programmatically manage data usage policies for your organization.

>[!IMPORTANT]
>
>This endpoint is not to be confused with the `/policies` endpoint in the [Access Control API](../../access-control/abac/api/policies.md), which is used to manage access control policies.

## Getting started

The API endpoint used in this guide is part of the [[!DNL Policy Service] API](https://www.adobe.io/experience-platform-apis/references/policy-service/). Before continuing, please review the [getting started guide](getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any [!DNL Experience Platform] API.

## Retrieve a list of policies {#list}

You can list all `core` or `custom` policies by making a GET request to `/policies/core` or `/policies/custom`, respectively.

**API format**

```http
GET /policies/core
GET /policies/custom
```

**Request**

The following request retrieves a list of custom policies defined by your organization.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/dulepolicy/policies/custom \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response includes a `children` array that lists the details of each retrieved policy, including their `id` values. You can use the `id` field of a particular policy to perform [lookup](#lookup), [update](#update), and [delete](#delete) requests for that policy.

```JSON
{
    "_page": {
        "start": "5c6dacdf685a4913dc48937c",
        "count": 2
    },
    "_links": {
        "page": {
            "href": "https://platform.adobe.io/policies/custom?{?limit,start,property}",
            "templated": true
        }
    },
    "children": [
        {
            "name": "Export Data to Third Party",
            "status": "DRAFT",
            "marketingActionRefs": [
                "https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/exportToThirdParty"
            ],
            "description": "Conditions under which data cannot be exported to a third party",
            "deny": {
                "operator": "AND",
                "operands": [
                    {
                        "label": "C1"
                    },
                    {
                        "operator": "OR",
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
            "created": 1550691551888,
            "createdClient": "{CLIENT_ID}",
            "createdUser": "{USER_ID}",
            "updated": 1550701472910,
            "updatedClient": "{CLIENT_ID}",
            "updatedUser": "{USER_ID}",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/dulepolicy/policies/custom/5c6dacdf685a4913dc48937c"
                }
            },
            "id": "5c6dacdf685a4913dc48937c"
        },
        {
            "name": "Combine Data",
            "status": "ENABLED",
            "marketingActionRefs": [
                "https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/combineData"
            ],
            "description": "Data that meets these conditions cannot be combined.",
            "deny": {
                "operator": "AND",
                "operands": [
                    {
                        "label": "C3"
                    },
                    {
                        "label": "I1"
                    }
                ]
            },
            "imsOrg": "{ORG_ID}",
            "created": 1550703519823,
            "createdClient": "{CLIENT_ID}",
            "createdUser": "{USER_ID}",
            "updated": 1550714340335,
            "updatedClient": "{CLIENT_ID}",
            "updatedUser": "{USER_ID}",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io/data/foundation/dulepolicy/policies/custom/5c6ddb9f5c404513dc2dc454"
                }
            },
            "id": "5c6ddb9f5c404513dc2dc454"
        }
    ]
}
```

| Property | Description |
| --- | --- |
| `_page.count` | The total number of policies retrieved. |
| `name` | The display name for a policy. |
| `status` | The current status of a policy. There are three possible statuses: `DRAFT`, `ENABLED`, or `DISABLED`. By default, only `ENABLED` policies participate in evaluation. See the overview on [policy evaluation](../enforcement/overview.md) for more information.|
| `marketingActionRefs` | An array that lists the URIs of all applicable marketing actions for a policy. |
| `description` | An optional description that provides further context to the policy's use case. |
| `deny` | An object which describes the specific data usage labels that a policy's associated marketing action is restricted from being performed on. See the section on [creating a policy](#create-policy) for more information on this property. |

## Look up a policy {#look-up}

You can look up a specific policy by including that policy's `id` property in the path of a GET request.

**API format**

```http
GET /policies/core/{POLICY_ID}
GET /policies/custom/{POLICY_ID}
```

| Parameter | Description |
| --- | --- |
| `{POLICY_ID}` | The `id` of the policy you want to look up. |

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/dulepolicy/policies/custom/5c6dacdf685a4913dc48937c \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the policy.

```JSON
{
    "name": "Export Data to Third Party",
    "status": "DRAFT",
    "marketingActionRefs": [
        "https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/exportToThirdParty"
    ],
    "description": "Conditions under which data cannot be exported to a third party",
    "deny": {
        "operator": "AND",
        "operands": [
            {
                "label": "C1"
            },
            {
                "operator": "OR",
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
    "created": 1550703519823,
    "createdClient": "{CLIENT_ID}",
    "createdUser": "{USER_ID}",
    "updated": 1550714340335,
    "updatedClient": "{CLIENT_ID}",
    "updatedUser": "{USER_ID}",
    "_links": {
        "self": {
            "href": "https://platform.adobe.io/data/foundation/dulepolicy/policies/custom/5c6dacdf685a4913dc48937c"
        }
    },
    "id": "5c6dacdf685a4913dc48937c"
}
```

| Property | Description |
| --- | --- |
| `name` | The display name for the policy. |
| `status` | The current status of the policy. There are three possible statuses: `DRAFT`, `ENABLED`, or `DISABLED`. By default, only `ENABLED` policies participate in evaluation. See the overview on [policy evaluation](../enforcement/overview.md) for more information.|
| `marketingActionRefs` | An array that lists the URIs of all applicable marketing actions for the policy. |
| `description` | An optional description that provides further context to the policy's use case. |
| `deny` | An object which describes the specific data usage labels that the policy's associated marketing action is restricted from being performed on. See the section on [creating a policy](#create-policy) for more information on this property. |

## Create a custom policy {#create-policy}

In the [!DNL Policy Service] API, a policy is defined by the following:

* A reference to a specific marketing action
* An expression describing the data usage labels that the marketing action is restricted from being performed against

To satisfy the latter requirement, policy definitions must include a boolean expression regarding the presence of data usage labels. This expression is called a policy expression.

Policy expressions are provided in the form of a `deny` property within each policy definition. An example of a simple `deny` object that only checks the presence of a single label would look like the following:

```json
"deny": {
    "label": "C1"
}
```

However, many policies specify more complex conditions regarding the presence of data usage labels. To support these use cases, you can also include boolean operations to describe your policy expressions. The policy expression object must contain either a label or an operator and operands, but not both. In turn, each operand is also a policy expression object.

For example, in order to define a policy that prohibits a marketing action from being performed on data where `C1 OR (C3 AND C7)` labels are present, the policy's `deny` property would be specified as:

```JSON
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
```

| Property | Description |
| --- | --- |
| `operator` | Indicates the conditional relationship between the labels provided in the sibling `operands` array. Accepted values are: <ul><li>`OR`: The expression resolves to true if any of the labels in the `operands` array are present.</li><li>`AND`: The expression only resolves to true if all of the labels in the `operands` array are present.</li></ul>|
| `operands` | An array of objects, with each object representing either a single label or an additional pair of `operator` and `operands` properties. The presence of the labels and/or operations in an `operands` array resolves to true or false based on the value of its sibling `operator` property. |
| `label` | The name of a single data usage label that applies to the policy. |

You can create a new custom policy by making a POST request to the `/policies/custom` endpoint. 

**API format**

```http
POST /policies/custom
```

**Request**

The following request creates a new policy that restricts the marketing action `exportToThirdParty` from being performed on data containing labels `C1 OR (C3 AND C7)`.

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
          "https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/exportToThirdParty"
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
| `name` | The display name for the policy. |
| `status` | The current status of the policy. There are three possible statuses: `DRAFT`, `ENABLED`, or `DISABLED`. By default, only `ENABLED` policies participate in evaluation. See the overview on [policy evaluation](../enforcement/overview.md) for more information.|
| `marketingActionRefs` | An array that lists the URIs of all applicable marketing actions for the policy. The URI for a marketing action is provided under `_links.self.href` in the response for [looking up a marketing action](./marketing-actions.md#look-up). |
| `description` | An optional description that provides further context to the policy's use case. |
| `deny` | The policy expression that describes the specific data usage labels the policy's associated marketing action is restricted from being performed on. |

**Response**

A successful response returns the details of the newly created policy, including its `id`. This value is read-only and is assigned automatically when the policy is created.

```JSON
{
    "name": "Export Data to Third Party",
    "status": "DRAFT",
    "marketingActionRefs": [
        "https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/exportToThirdParty"
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
    "created": 1550691551888,
    "createdClient": "{CLIENT_ID}",
    "createdUser": "{USER_ID}",
    "updated": 1550691551888,
    "updatedClient": "{CLIENT_ID}",
    "updatedUser": "{USER_ID}",
    "_links": {
        "self": {
            "href": "https://platform.adobe.io/data/foundation/dulepolicy/policies/custom/5c6dacdf685a4913dc48937c"
        }
    },
    "id": "5c6dacdf685a4913dc48937c"
}
```

## Update a custom policy {#update}

>[!IMPORTANT]
>
>You can only update custom policies. If you wish to enable or disable core policies, see the section on [updating the list of enabled core policies](#update-enabled-core).

You can update an existing custom policy by providing its ID in the path of a PUT request with a payload that includes the updated form of the policy in its entirety. In other words, the PUT request essentially rewrites the policy.

>[!NOTE]
>
>See the section on [updating a portion of a custom policy](#patch) if you only want to update one or more fields for a policy, rather than overwrite it.

**API format**

```http
PUT /policies/custom/{POLICY_ID}
```

| Parameter | Description |
| --- | --- |
| `{POLICY_ID}` | The `id` of the policy you want to update. |

**Request**

In this example, the conditions for exporting data to a third party have changed, and now you require the policy that you created to deny this marketing action if `C1 AND C5` data labels are present.

The following request updates the existing policy to include the new policy expression. Note that since this request essentially rewrites the policy, all of the fields must be included in the payload, even if some of their values are not being updated.

```shell
curl -X PUT \
  https://platform.adobe.io/data/foundation/dulepolicy/policies/custom/5c6dacdf685a4913dc48937c \
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
          "operator": "AND",
          "operands": [
            {"label": "C1"},
            {"label": "C5"}
          ]
        }
      }'
```

| Property | Description |
| --- | --- |
| `name` | The display name for the policy. |
| `status` | The current status of the policy. There are three possible statuses: `DRAFT`, `ENABLED`, or `DISABLED`. By default, only `ENABLED` policies participate in evaluation. See the overview on [policy evaluation](../enforcement/overview.md) for more information.|
| `marketingActionRefs` | An array that lists the URIs of all applicable marketing actions for the policy. The URI for a marketing action is provided under `_links.self.href` in the response for [looking up a marketing action](./marketing-actions.md#look-up). |
| `description` | An optional description that provides further context to the policy's use case. |
| `deny` | The policy expression that describes the specific data usage labels the policy's associated marketing action is restricted from being performed on. See the section on [creating a policy](#create-policy) for more information on this property. |

**Response**

A successful response returns the details of the updated policy.

```JSON
{
    "name": "Export Data to Third Party",
    "status": "DRAFT",
    "marketingActionRefs": [
        "https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/core/exportToThirdParty"
    ],
    "description": "Conditions under which data cannot be exported to a third party",
    "deny": {
        "operator": "AND",
        "operands": [
            {
                "label": "C1"
            },
            {
                "label": "C5"
            }
        ]
    },
    "imsOrg": "{ORG_ID}",
    "created": 1550691551888,
    "createdClient": "{CLIENT_ID}",
    "createdUser": "{USER_ID}",
    "updated": 1550701472910,
    "updatedClient": "{CLIENT_ID}",
    "updatedUser": "{USER_ID}",
    "_links": {
        "self": {
            "href": "https://platform.adobe.io/data/foundation/dulepolicy/policies/custom/5c6dacdf685a4913dc48937c"
        }
    },
    "id": "5c6dacdf685a4913dc48937c"
}
```

## Update a portion of a custom policy {#patch}

>[!IMPORTANT]
>
>You can only update custom policies. If you wish to enable or disable core policies, see the section on [updating the list of enabled core policies](#update-enabled-core).

A specific portion of a policy may be updated using a PATCH request. Unlike PUT requests that rewrite the policy, PATCH requests update only the properties specified in the request body. This is especially useful when you want to enable or disable a policy, as you only need to provide the path to the appropriate property (`/status`) and its value (`ENABLED` or `DISABLED`).

>[!NOTE]
>
>Payloads for PATCH requests follow JSON Patch formatting. See the [API fundamentals guide](../../landing/api-fundamentals.md) for more information on the accepted syntax.

The [!DNL Policy Service] API supports the JSON Patch operations `add`, `remove`, and `replace`, and allows you to combine several updates together into a single call, as shown in the example below.

**API format**

```http
PATCH /policies/custom/{POLICY_ID}
```

| Parameter | Description |
| --- | --- |
| `{POLICY_ID}` | The `id` of the policy whose properties you want to update. |

**Request**

The following request uses two `replace` operations to change the policy status from `DRAFT` to `ENABLED`, and to update the `description` field with a new description.

>[!IMPORTANT]
>
>When sending multiple PATCH operations in a single request, they will be processed in the order in which they appear in the array. Ensure that you are sending the requests in the correct order where necessary.

```SHELL
curl -X PATCH \
  https://platform.adobe.io/data/foundation/dulepolicy/policies/custom/5c6dacdf685a4913dc48937c \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d ' [
          {
            "op": "replace",
            "path": "/status",
            "value": "ENABLED"
          },
          {
            "op": "replace",
            "path": "/description",
            "value": "New policy description."
          }
        ]'
```

**Response**

A successful response returns the details of the updated policy.


```JSON
{
    "name": "Export Data to Third Party",
    "status": "ENABLED",
    "marketingActionRefs": [
        "https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/exportToThirdParty"
    ],
    "description": "New policy description.",
    "deny": {
        "operator": "AND",
        "operands": [
            {
                "label": "C1"
            },
            {
                "operator": "OR",
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
    "created": 1550703519823,
    "createdClient": "{CLIENT_ID}",
    "createdUser": "{USER_ID}",
    "updated": 1550712163182,
    "updatedClient": "{CLIENT_ID}",
    "updatedUser": "{USER_ID}",
    "_links": {
        "self": {
            "href": "https://platform.adobe.io/data/foundation/dulepolicy/policies/custom/5c6dacdf685a4913dc48937c"
        }
    },
    "id": "5c6dacdf685a4913dc48937c"
}
```

## Delete a custom policy {#delete}

You can delete a custom policy by including its `id` in the path of a DELETE request.

>[!WARNING]
>
>Once deleted, policies cannot be recovered. It is best practice to [perform a lookup (GET) request](#lookup) first to view the policy and confirm it is the correct policy you wish to remove.

**API format**

```http
DELETE /policies/custom/{POLICY_ID}
```

| Parameter | Description |
| --- | --- |
| `{POLICY_ID}` | The ID of the policy you want to delete. |

**Request**

```shell
curl -X DELETE \
  https://platform.adobe.io/data/foundation/dulepolicy/policies/custom/5c6ddb56eb60ca13dbf8b9a8 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 (OK) with a blank body. 

You can confirm the deletion by attempting to look up (GET) the policy again. You should receive an HTTP 404 (Not Found) error if the policy has been successfully deleted.

## Retrieve a list of enabled core policies {#list-enabled-core}

By default, only enabled data usage policies participate in evaluation. You can retrieve a list of core policies that are currently enabled by your organization by making a GET request to the `/enabledCorePolicies` endpoint.

**API format**

```http
GET /enabledCorePolicies
```

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/dulepolicy/enabledCorePolicies \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the list of enabled core policies under a `policyIds` array.

```json
{
  "policyIds": [
    "corepolicy_0001",
    "corepolicy_0002",
    "corepolicy_0003",
    "corepolicy_0004",
    "corepolicy_0005",
    "corepolicy_0006",
    "corepolicy_0007",
    "corepolicy_0008"
  ],
  "imsOrg": "{ORG_ID}",
  "created": 1529696681413,
  "createdClient": "{CLIENT_ID}",
  "createdUser": "{USER_ID}",
  "updated": 1529697651972,
  "updatedClient": "{CLIENT_ID}",
  "updatedUser": "{USER_ID}",
  "_links": {
    "self": {
      "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/enabledCorePolicies"
    }
  }
}
```

## Update the list of enabled core policies {#update-enabled-core}

By default, only enabled data usage policies participate in evaluation. By making a PUT request to the `/enabledCorePolicies` endpoint, you can update the list of enabled core policies for your organization using a single call.

>[!NOTE]
>
>Only core policies can be enabled or disabled by this endpoint. To enable or disable custom policies, see the section on [updating a portion of a policy](#patch).

**API format**

```http
PUT /enabledCorePolicies
```

**Request**

The following request updates the list of enabled core policies based on the IDs provided in the payload.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/dulepolicy/enabledCorePolicies \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "policyIds": [
          "corepolicy_0001",
          "corepolicy_0002",
          "corepolicy_0007",
          "corepolicy_0008"
        ]
      }'
```

| Property | Description |
| --- | --- |
| `policyIds` | A list of core policy IDs that are to be enabled. Any core policies that are not included are set to `DISABLED` status and will not participate in evaluation. | 

**Response**

A successful response returns the updated list of enabled core policies under a `policyIds` array.

```json
{
  "policyIds": [
    "corepolicy_0001",
    "corepolicy_0002",
    "corepolicy_0007",
    "corepolicy_0008"
  ],
  "imsOrg": "{ORG_ID}",
  "created": 1529696681413,
  "createdClient": "{CLIENT_ID}",
  "createdUser": "{USER_ID}",
  "updated": 1595876052649,
  "updatedClient": "{CLIENT_ID}",
  "updatedUser": "{USER_ID}",
  "_links": {
    "self": {
      "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/enabledCorePolicies"
    }
  }
}
```

## Next steps

Once you have defined new policies or updated existing ones, you can use the [!DNL Policy Service] API to test marketing actions against specific labels or datasets and see whether your policies are raising violations as expected. See the guide on the [policy evaluation endpoints](./evaluation.md) for more information.
