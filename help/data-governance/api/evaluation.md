---
keywords: Experience Platform;home;popular topics;Policy enforcement;Automatic enforcement;API-based enforcement;data governance
solution: Experience Platform
title: Policy Evaluation API Endpoints
topic-legacy: developer guide
description: Once marketing actions have been created and policies have been defined, you can use the Policy Service API to evaluate if any policies are violated by certain actions. The returned constraints take the form of a set of policies that would be violated by attempting the marketing action on the specified data containing data usage labels.
exl-id: f9903939-268b-492c-aca7-63200bfe4179
---
# Policy evaluation endpoints

Once marketing actions have been created and data usage policies have been defined, you can use the [!DNL Policy Service] API to evaluate if any policies are violated by certain actions. The returned constraints take the form of a set of policies that would be violated by attempting the marketing action on the specified data containing data usage labels.

By default, only policies whose status is set to `ENABLED` participate in evaluation. However, you can use the query parameter `?includeDraft=true` to include `DRAFT` policies in evaluation.

Evaluation requests can be made in one of three ways:

1. Given a marketing action and a set of data usage labels, does the action violate any policies?
1. Given a marketing action and one or more datasets, does the action violate any policies?
1. Given a marketing action, one or more datasets, and a subset of one or more fields within each of those datasets, does the action violate any policies?

## Getting started

The API endpoints used in this guide is part of the [[!DNL Policy Service] API](https://www.adobe.io/experience-platform-apis/references/policy-service/). Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any [!DNL Experience Platform] API.

## Evaluate for policy violations using data usage labels {#labels}

You can evaluate for policy violations based on the presence of a specific set of data usage labels by using the `duleLabels` query parameter in a GET request.

**API format**

```http
GET /marketingActions/core/{MARKETING_ACTION_NAME}/constraints?duleLabels={LABELS_LIST}
GET /marketingActions/custom/{MARKETING_ACTION_NAME}/constraints?duleLabels={LABELS_LIST}
```

| Parameter | Description |
| --- | --- |
| `{MARKETING_ACTION_NAME}` | The name of the marketing action to test against a set of data usage labels. You can retrieve a list of available marketing actions by making a [GET request to the marketing actions endpoint](./marketing-actions.md#list). |
| `{LABELS_LIST}` | A comma-separated list of data usage labels names to test the marketing action against. For example: `duleLabels=C1,C2,C3`<br><br>Note that label names are case-sensitive. Ensure that you are using the correct case when listing them in the `duleLabels` parameter. |

**Request**

The example request below evaluates a marketing action against the labels C1 and C3.

>[!IMPORTANT]
>
>Be aware of the `AND` and `OR` operators in your policy expressions. In the example below, if either label (`C1` or `C3`) had appeared alone in the request, the marketing action would not have violated this policy. It takes both labels (`C1` and `C3`) to return the violated policy. Ensure you are evaluating policies carefully and defining policy expressions with equal care.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/sampleMarketingAction/constraints?duleLabels=C1,C3' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response includes a `violatedPolicies` array, which contains the details of the policies that were violated as a result of performing the marketing action against the provided labels. If no policies are violated, the `violatedPolicies` array will be empty.

```JSON
{
    "timestamp": 1551134846737,
    "clientId": "{CLIENT_ID}",
    "userId": "{USER_ID}",
    "imsOrg": "{ORG_ID}",
    "marketingActionRef": "https://platform.adobe.io/marketingActions/custom/sampleMarketingAction",
    "duleLabels": [
        "C1",
        "C3"
    ],
    "violatedPolicies": [
        {
            "name": "Export Data to Third Party",
            "status": "ENABLED",
            "marketingActionRefs": [
                "https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/sampleMarketingAction"
            ],
            "description": "NEW content for description.",
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
            "createdClient": "{CREATED_CLIENT}",
            "createdUser": "{CREATED_USER}",
            "updated": 1550714340335,
            "updatedClient": "{UPDATED_CLIENT}",
            "updatedUser": "{UPDATED_USER}",
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

## Evaluate for policy violations using datasets {#datasets}

You can evaluate for policy violations based on a set of one or more datasets from which data usage labels can be collected. This is done by performing a POST request to the `/constraints` endpoint for a specific marketing action and providing a list of dataset IDs within the request body.

**API format**

```http
POST /marketingActions/core/{MARKETING_ACTION_NAME}/constraints
POST /marketingActions/custom/{MARKETING_ACTION_NAME}/constraints
```

| Parameter | Description |
| --- | --- |
| `{MARKETING_ACTION_NAME}` | The name of the marketing action to test against one or more datasets. You can retrieve a list of available marketing actions by making a [GET request to the marketing actions endpoint](./marketing-actions.md#list). |

**Request**

The following request performs the `crossSiteTargeting` marketing action against a set of three datasets to evaluate for any policy violations.

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/crossSiteTargeting/constraints \
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
            "entityId": "5cc1fb685410ef14b748c55f"
        }
      ]'
```

| Property | Description |
| --- | --- |
| `entityType` | The type of entity whose ID is indicated in the sibling `entityId` property. Currently, the only accepted value is `dataSet`. |
| `entityId` | The ID of a dataset to test the marketing action against. A list of datasets and their corresponding IDs can be obtained by making a GET request to the `/dataSets` endpoint in the [!DNL Catalog Service] API. See the guide on [listing [!DNL Catalog] objects](../../catalog/api/list-objects.md) for more information. |

**Response**

A successful response includes a `violatedPolicies` array, which contains the details of the policies that were violated as a result of performing the marketing action against the provided datasets. If no policies are violated, the `violatedPolicies` array will be empty.

```JSON
{
    "timestamp": 1556324277895,
    "clientId": "{CLIENT_ID}",
    "userId": "{USER_ID}",
    "imsOrg": "{ORG_ID}",
    "marketingActionRef": "https://platform.adobe.io:443/data/foundation/dulepolicy/marketingActions/custom/crossSiteTargeting",
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
        }
    ],
    "violatedPolicies": [
        {
            "name": "Targeting Ads or Content",
            "status": "ENABLED",
            "marketingActionRefs": [
                "https://platform.adobe.io:443/data/foundation/dulepolicy/marketingActions/custom/crossSiteTargeting"
            ],
            "description": "Data cannot be used for targeting any ads or content, either on-site or cross-site.",
            "deny": {
                "operator": "AND",
                "operands": [
                    {
                        "label": "C4"
                    },
                    {
                        "label": "C6"
                    }
                ]
            },
            "imsOrg": "{ORG_ID}",
            "created": 1551141210463,
            "createdClient": "{CREATED_CLIENT}",
            "createdUser": "{CREATED_USER}",
            "updated": 1551146178603,
            "updatedClient": "{UPDATED_CLIENT}",
            "updatedUser": "{UPDATED_USER}",
            "_links": {
                "self": {
                    "href": "https://platform.adobe.io:443/data/foundation/dulepolicy/policies/custom/5c74895a74744d13dc2d87cc"
                }
            },
            "id": "5c74895a74744d13dc2d87cc"
        }
    ]
}
```

| Property | Description |
| --- | --- |
| `duleLabels` | The response object includes a `duleLabels` array that contains a consolidated list of all labels found within the specified datasets. This list includes dataset- and field-level labels on all fields within the dataset. |
| `discoveredLabels` | The response also includes a `discoveredLabels` array containing objects for each dataset, showing `datasetLabels` broken down into dataset- and field-level labels. Each field-level label shows the path to the specific field with that label. |

## Evaluate for policy violations using specific dataset fields {#fields}

You can evaluate for policy violations based on a subset of fields from within one or more datasets, so that only the data usage labels applied those fields are evaluated.

When evaluating policies using dataset fields, please keep the following in mind:

* **Field names are case sensitive**: When providing fields, they must be written exactly as they appear in the dataset (for example, `firstName` vs `firstname`).
* **Dataset label inheritance**: Individual fields in a dataset inherit any labels that have been applied at the dataset level. If your policy evaluations are not returning as expected, be sure to check for any labels that may have been inherited from the dataset level down to fields, in addition to those applied at the field level.

**API format**

```http
POST /marketingActions/core/{MARKETING_ACTION_NAME}/constraints
POST /marketingActions/custom/{MARKETING_ACTION_NAME}/constraints
```

| Parameter | Description |
| --- | --- |
| `{MARKETING_ACTION_NAME}` | The name of the marketing action to test against a subset of dataset fields. You can retrieve a list of available marketing actions by making a [GET request to the marketing actions endpoint](./marketing-actions.md#list). |

**Request**

The following request tests the marketing action `crossSiteTargeting` on a specific set of fields belonging to three datasets. The payload is similar to an [evaluation request involving only datasets](#datasets), adding specific fields for each dataset to collect labels from.

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/crossSiteTargeting/constraints \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '[
        {
            "entityType": "dataSet",
            "entityId": "5c423dc25f2f2e00005e2319",
            "entityMeta": {
                "fields": [
                    "/properties/_customer",
                    "/properties/faxPhone"
                ]
            }
        },
        {
            "entityType": "dataSet",
            "entityId": "5cc323e15410ef14b749481e",
            "entityMeta": {
                "fields": [
                    "/properties/_customer",
                    "/properties/geoUnit"
                ]
            }
        },
        {
            "entityType": "dataSet",
            "entityId": "5cc1fb685410ef14b748c55f",
            "entityMeta": {
                "fields": [
                    "/properties/faxPhone"
                ]
            }
        }
      ]'
```

| Property | Description |
| --- | --- |
| `entityType` | The type of entity whose ID is indicated in the sibling `entityId` property. Currently, the only accepted value is `dataSet`. |
| `entityId` | The ID of a dataset whose fields are to be evaluated against the marketing action. A list of datasets and their corresponding IDs can be obtained by making a GET request to the `/dataSets` endpoint in the [!DNL Catalog Service] API. See the guide on [listing [!DNL Catalog] objects](../../catalog/api/list-objects.md) for more information. |
| `entityMeta.fields` | An array of paths to specific fields within the dataset's schema, provided in the form of JSON Pointer strings. See the section on [JSON Pointer](../../landing/api-fundamentals.md#json-pointer) in the API fundamentals guide for details on the accepted syntax for these strings. |

**Response**

A successful response includes a `violatedPolicies` array, which contains the details of the policies that were violated as a result of performing the marketing action against the provided dataset fields. If no policies are violated, the `violatedPolicies` array will be empty.

Comparing the example response below to the [response involving only datasets](#datasets), note that the list of collected labels is shorter. The `discoveredLabels` for each dataset have also been reduced, as they only include the fields specified in the request body. In addition, the previously violated policy `Targeting Ads or Content` requires both `C4 AND C6` labels to present, and is therefore no longer violated as indicated by the empty `violatedPolicies` array.

```JSON
{
    "timestamp": 1556325503038,
    "clientId": "{CLIENT_ID}",
    "userId": "{USER_ID}",
    "imsOrg": "{ORG_ID}",
    "marketingActionRef": "https://platform.adobe.io:443/data/foundation/dulepolicy/marketingActions/custom/crossSiteTargeting",
    "duleLabels": [
        "C2",
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
                            "C5"
                        ],
                        "path": "/properties/_customer"
                    },
                    {
                        "labels": [
                            "C5"
                        ],
                        "path": "/properties/geoUnit"
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
                        "path": "/properties/faxPhone"
                    }
                ]
            }
        }
    ],
    "violatedPolicies": []
}
```

## Evaluate policies in bulk {#bulk}

The `/bulk-eval` endpoint allows you to run multiple evaluation jobs in a single API call.

**API format**

```http
POST /bulk-eval
```

**Request**

The payload of a bulk evaluation request should be an array of objects; one for each evaluation job to be performed. For jobs that evaluate based on datasets and fields, an `entityList` array must be provided. For jobs that evaluate based on data usage labels, a `labels` array must be provided.

>[!WARNING]
>
>If any listed evaluation job contains both an `entityList` and a `labels` array, an error will result. If you wish to evaluate the same marketing action based on both datasets and labels, you must include separate evaluation jobs for that marketing action.

```shell
curl -X POST \
  https://platform.adobe.io/data/foundation/dulepolicy/bulk-eval \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '[
        {
          "evalRef": "https://platform.adobe.io:443/data/foundation/dulepolicy/marketingActions/core/emailTargeting/constraints",
          "includeDraft": false,
          "labels": [
            "C1",
            "C2",
            "C3"
          ]
        },
        {
          "evalRef": "https://platform.adobe.io:443/data/foundation/dulepolicy/marketingActions/core/emailTargeting/constraints",
          "includeDraft": false,
          "entityList": [
            {
              "entityType": "dataSet",
              "entityId": "5b67f4dd9f6e710000ea9da4",
              "entityMeta": {
                "fields": [
                  "address"
                ]
              }
            }
          ]
        }
      ]'
```

| Property | Description |
| --- | --- |
| `evalRef` | The URI of the marketing action to test against labels or datasets for policy violations. |
| `includeDraft` | By default, only enabled policies participate in evaluation. If `includeDraft` is set to `true`, policies that are in `DRAFT` status will also participate. |
| `labels` | An array of data usage labels to test the marketing action against.<br><br>**IMPORTANT**: When using this property, an `entityList` property must NOT be included in the same object. To evaluate the same marketing action using datasets and/or fields, you must include a separate object in the request payload that contains an `entityList` array. |
| `entityList` | An array of datasets and (optionally) specific fields within those datasets to test the marketing action against.<br><br>**IMPORTANT**: When using this property, a `labels` property must NOT be included in the same object. To evaluate the same marketing action using specific data usage labels, you must include a separate object in the request payload that contains a `labels` array. |
| `entityType` | The type of entity to test the marketing action against. Currently, only `dataSet` is supported. |
| `entityId` | The ID of a dataset to test the marketing action against. |
| `entityMeta.fields` | (Optional) A list of specific fields within the dataset to test the marketing action against. |

**Response**

A successful response returns an array of evaluation results; one for each policy evaluation job sent in the request.

```json
[
  {
    "status": 200,
    "body": {
      "timestamp": 1595866566165,
      "clientId": "{CLIENT_ID}",
      "userId": "{USER_ID}",
      "imsOrg": "{ORG_ID}",
      "sandboxName": "prod",
      "marketingActionRef": "https://platform.adobe.io:443/data/foundation/dulepolicy/marketingActions/core/emailTargeting",
      "duleLabels": [
        "C1",
        "C2",
        "C3"
      ],
      "violatedPolicies": []
    }
  },
  {
    "status": 200,
    "body": {
      "timestamp": 1595866566165,
      "clientId": "{CLIENT_ID}",
      "userId": "{USER_ID}",
      "imsOrg": "{ORG_ID}",
      "sandboxName": "prod",
      "marketingActionRef": "https://platform.adobe.io:443/data/foundation/dulepolicy/marketingActions/core/emailTargeting",
      "duleLabels": [
        "C1",
        "C2"
      ],
      "discoveredLabels": [
        {
          "entityType": "dataset",
          "entityId": "5b67f4dd9f6e710000ea9da4",
          "dataSetLabels": {
            "connection": {
              "labels": [

              ]
            },
            "dataset": {
              "labels": [
                "C1",
                "C2"
              ]
            },
            "fields": []
          }
        }
      ],
      "violatedPolicies": [
        {
          "name": "Email Policy",
          "status": "DRAFT",
          "marketingActionRefs": [
            "https://platform.adobe.io:443/data/foundation/dulepolicy/marketingActions/core/emailTargeting"
          ],
          "description": "Conditions under which we won't send marketing-based email",
          "deny": {
            "label": "C1",
            "operator": "AND",
            "operands": [
              {
                "label": "C1"
              },
              {
                "label": "C3"
              }
            ]
          },
          "id": "76131228-7654-11e8-adc0-fa7ae01bbebc",
          "imsOrg": "{ORG_ID}",
          "created": 1529696681413,
          "createdClient": "{CLIENT_ID}",
          "createdUser": "{USER_ID}",
          "updated": 1529697651972,
          "updatedClient": "{CLIENT_ID}",
          "updatedUser": "{USER_ID}",
          "_links": {
            "self": {
              "href": "./76131228-7654-11e8-adc0-fa7ae01bbebc"
            }
          }
        }
      ]
    }
  }
]
```

## Policy evaluation for [!DNL Real-time Customer Profile]

The [!DNL Policy Service] API can also be used to check for policy violations involving the use of [!DNL Real-time Customer Profile] segments. See the tutorial on [enforcing data usage compliance for audience segments](../../segmentation/tutorials/governance.md) for more information.
