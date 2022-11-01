---
keywords: Experience Platform;home;popular topics;Policy enforcement;Automatic enforcement;API-based enforcement;data governance;testing
solution: Experience Platform
title: Enforce Data Usage Policies Using the Policy Service API
topic-legacy: guide
type: Tutorial
description: Once you have created data usage labels for your data, and have created usage policies for marketing actions against those labels, you can use the Policy Service API to evaluate whether a marketing action performed on a dataset or an arbitrary group of labels constitutes a policy violation. You can then set up your own internal protocols to handle policy violations based on the API response.
exl-id: 093db807-c49d-4086-a676-1426426b43fd
---
# Enforce data usage policies using the [!DNL Policy Service] API

Once you have created data usage labels for your data, and have created usage policies for marketing actions against those labels, you can use the [[!DNL Policy Service API]](https://www.adobe.io/experience-platform-apis/references/policy-service/) to evaluate whether a marketing action performed on a dataset or an arbitrary group of labels constitutes a policy violation. You can then set up your own internal protocols to handle policy violations based on the API response.

>[!NOTE]
>
>By default, only policies whose status is set to `ENABLED` can participate in evaluation. To allow `DRAFT` policies to participate in evaluation, you must include the query parameter `includeDraft=true` in the request path.

This document provides steps on how to use the [!DNL Policy Service] API to check for policy violations in different scenarios.

## Getting started

This tutorial requires a working understanding of the following key concepts involved in enforcing data usage policies:

* [Data Governance](../home.md): The framework by which [!DNL Platform] enforces data usage compliance.
    * [Data usage labels](../labels/overview.md): Data usage labels are applied to datasets (and/or individual fields within those datasets), specifying restrictions for how that data can be used.
    * [Data usage policies](../policies/overview.md): Data usage policies are rules that describe the kinds of marketing actions that are allowed or restricted for certain sets of data usage labels.
* [Sandboxes](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

Before starting this tutorial, please review the [developer guide](../api/getting-started.md) for important information that you need to know in order to successfully make calls to the [!DNL Policy Service] API, including required headers and how to read example API calls.

## Evaluate using labels and a marketing action

You can evaluate a policy by testing a marketing action against a set of data usage labels that would hypothetically be present within a dataset. This is done through the use of the `duleLabels` query parameter, where labels are provided as a comma-separated list of values, as shown in the example below.

**API format**

```http
GET /marketingActions/core/{MARKETING_ACTION_NAME}/constraints?duleLabels={LABEL_1},{LABEL_2}
GET /marketingActions/custom/{MARKETING_ACTION_NAME}/constraints?duleLabels={LABEL_1},{LABEL_2}
```

| Parameter | Description |
| --- | --- |
| `{MARKETING_ACTION_NAME}` | The name of the marketing action associated with the data usage policy you are evaluating. |
| `{LABEL_1}` | A data usage label to test the marketing action against. At least one label must be provided. When providing multiple labels, they must be separated by commas. |

**Request**

The following request tests the `exportToThirdParty` marketing action against labels `C1` and `C3`. Since the data usage policy you created earlier in this tutorial defines the `C1` label as one of the `deny` conditions in its policy expression, the marketing action should trigger a policy violation.

>[!NOTE]
>
>Data usage labels are case-sensitive. Policy violations only occur when the labels defined in their policy expressions are matched exactly. In this example, a `C1` label would trigger a violation, whereas a `c1` label would not.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/exportToThirdParty/constraints?duleLabels=C1,C3 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the URL for the marketing action, the usage labels it was tested against, and a list of any policies that were violated as a result of testing the action against those labels. In this example, the "Export Data to Third Party" policy is shown in the `violatedPolicies` array, indicating that the marketing action triggered the expected policy violation.

```json
{
    "timestamp": 1565727821209,
    "clientId": "string",
    "userId": "string",
    "imsOrg": "{ORG_ID}",
    "marketingActionRef": "https://platform-stage.adobe.io:443/data/foundation/dulepolicy/marketingActions/custom/exportToThirdParty",
    "duleLabels": [
        "C1",
        "C3"
    ],
    "violatedPolicies": [
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
            "createdUser": "{CREATED_USER",
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
    ]
}
```

| Property | Description |
| --- | --- |
| `violatedPolicies` | An array listing any policies that were violated by testing the marketing action (specified in `marketingActionRef`) against the provided `duleLabels`. |

## Evaluate using datasets

You can evaluate a data usage policy by testing a marketing action against one or more datasets from which labels can be collected. This is done by making a POST request to `/marketingActions/core/{MARKETING_ACTION_NAME}/constraints` and providing dataset IDs within the request body, as shown in the example below.

**API format**

```http
POST /marketingActions/core/{MARKETING_ACTION_NAME}/constraints
POST /marketingActions/custom/{MARKETING_ACTION_NAME}/constraints
```

| Parameter | Description |
| --- | --- |
| `{MARKETING_ACTION_NAME}` | The name of the marketing action associated with the policy you are evaluating. |

**Request**

The following request tests the `exportToThirdParty` marketing action against three different datasets. The datasets are referenced by type and ID in an array provided in the payload.

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/exportToThirdParty/constraints
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '[
    {
      "entityType": "dataSet",
      "entityId": "5c423dc25f2f2e00005e2319"
    },
    {
      "entityType": "dataSet",
      "entityId": "5cc323e15410ef14b749481e"
    },
    {
      "entityType": "dataSet",
      "entityId": "5cc1fb685410ef14b748c55f",
      "entityMeta": {
          "fields": [
              "/properties/personalEmail/properties/address",
              "/properties/person/properties/name/properties/fullName"
          ]
      }
    }
  ]'
```

| Property | Description |
| --- | --- |
| `entityType` | Each item in the payload array must indicate the type of entity being defined. For this use case, the value will always be "dataSet". |
| `entityId` | Each item in the payload array must provide the unique ID for a dataset. |
| `entityMeta.fields` | (Optional) An array of [JSON Pointer](../../landing/api-fundamentals.md#json-pointer) strings, referencing specific fields in the dataset's schema. If this array is included, only the fields contained in the array participate in evaluation. Any schema fields that are not included in the array will not participate in evaluation.<br><br>If this field is not included, all fields within the dataset schema will be included in evaluation. |

**Response**

A successful response returns the URL for the marketing action, the usage labels that were collected from the provided datasets, and a list of any policies that were violated as a result of testing the action against those labels. In this example, the "Export Data to Third Party" policy is shown in the `violatedPolicies` array, indicating that the marketing action triggered the expected policy violation.

```json
{
    "timestamp": 1556324277895,
    "clientId": "{CLIENT_ID}",
    "userId": "{USER_ID}",
    "imsOrg": "{ORG_ID}",
    "marketingActionRef": "https://platform.adobe.io:443/data/foundation/dulepolicy/marketingActions/custom/exportToThirdParty",
    "duleLabels": [
        "C1",
        "C2",
        "C4",
        "C5",
        "C6"
    ],
    "discoveredLabels": [
        {
            "entityType": "dataSet",
            "entityId": "5c423dc25f2f2e00005e2319",
            "dataSetLabels": {
                "connection": {
                    "labels": []
                },
                "dataSet": {
                    "labels": [
                        "C6"
                    ]
                },
                "fields": [
                    {
                        "labels": [
                            "C2",
                            "C5"
                        ],
                        "path": "/properties/_customer"
                    },
                    {
                        "labels": [
                            "C4",
                            "C5"
                        ],
                        "path": "/properties/geoUnit"
                    },
                    {
                        "labels": [
                            "C4"
                        ],
                        "path": "/properties/identityMap"
                    },
                    {
                        "labels": [
                            "C4"
                        ],
                        "path": "/properties/journeyAI"
                    },
                    {
                        "labels": [
                            "C5"
                        ],
                        "path": "/properties/createdByBatchID"
                    },
                    {
                        "labels": [
                            "C5"
                        ],
                        "path": "/properties/faxPhone"
                    }
                ]
            }
        },
        {
            "entityType": "dataSet",
            "entityId": "5cc323e15410ef14b749481e",
            "dataSetLabels": {
                "connection": {
                    "labels": []
                },
                "dataSet": {
                    "labels": [
                        "C5"
                    ]
                },
                "fields": [
                    {
                        "labels": [
                            "C2",
                        ],
                        "path": "/properties/_customer"
                    },
                    {
                        "labels": [
                            "C5"
                        ],
                        "path": "/properties/geoUnit"
                    },
                    {
                        "labels": [
                            "C1"
                        ],
                        "path": "/properties/identityMap"
                    }
                ]
            }
        },
        {
            "entityType": "dataSet",
            "entityId": "5cc1fb685410ef14b748c55f",
            "dataSetLabels": {
                "connection": {
                    "labels": []
                },
                "dataSet": {
                    "labels": [
                        "C5"
                    ]
                },
                "fields": [
                    {
                        "labels": [
                            "C5"
                        ],
                        "path": "/properties/personalEmail/properties/address",
                    },
                    {
                        "labels": [
                            "C5"
                        ],
                        "path": "/properties/person/properties/name/properties/fullName"
                    }
                ]
            }
        }
    ],
    "violatedPolicies": [
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
            "createdUser": "{CREATED_USER",
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
    ]
}
```

| Property | Description |
| --- | --- |
| `duleLabels` | A list of data usage labels that were extracted from the datasets provided in the request payload. |
| `discoveredLabels` | A list of the datasets that were provided in the request payload, displaying the dataset-level and field-level labels that were found in each. |
| `violatedPolicies` | An array listing any policies that were violated by testing the marketing action (specified in `marketingActionRef`) against the provided `duleLabels`. |

## Next steps

By reading this document, you have successfully checked for policy violations when performing a marketing action on a dataset or a set of data usage labels. Using the data returned in API responses, you can set up protocols within your experience application to appropriately enforce policy violations when they occur.

For information on how Platform automatically provides policy enforcement for activated segments, see the guide on [automatic enforcement](./auto-enforcement.md).
