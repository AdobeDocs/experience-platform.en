---
keywords: Experience Platform;home;popular topics;Policy enforcement;Automatic enforcement;API-based enforcement;data governance
solution: Experience Platform
title: Policies
topic: developer guide
description: Once marketing actions have been created and policies have been defined, you can use the Policy Service API to evaluate if any policies are violated by certain actions. The returned constraints take the form of a set of policies that would be violated by attempting the marketing action on the specified data containing data usage labels.
---

# Policy evaluation

Once marketing actions have been created and policies have been defined, you can use the [!DNL Policy Service] API to evaluate if any policies are violated by certain actions. The returned constraints take the form of a set of policies that would be violated by attempting the marketing action on the specified data containing data usage labels.

By default, **only policies whose status is set to "ENABLED" participate in evaluation**, however you can use the query parameter `?includeDraft=true` to include "DRAFT" policies in evaluation.

Evaluation requests can be made in one of three ways:

1. Given a set of data usage labels and a marketing action, does the action violate any policies?
1. Given one or more datasets and a marketing action, does the action violate any policies?
1. Given one or more datasets and a subset of one or more fields within each of those datasets, does the action violate any policies?

## Evaluate policies using data usage labels and a marketing action

Evaluating policy violations based on the presence of data usage labels requires you to specify the set of labels that would be present on the data during the request. This is done through the use of query parameters, where data usage labels are provided as a comma-separated list of values, as shown in the following example.

**API format**

```http
GET /marketingActions/core/{marketingActionName}/constraints?duleLabels={value1},{value2}
GET /marketingActions/custom/{marketingActionName}/constraints?duleLabels={value1},{value2}
```

**Request**

The example request below evaluates a marketing action against the labels C1 and C3. When evaluating policies using data usage labels, please keep the following in mind:
* **Data usage labels are case sensitive.** The request shown above returns a violated policy, whereas making the same request using lowercase labels (e.g. `"c1,c3"`, `"C1,c3"`, `"c1,C3"`) does not.
* **Be aware of the `AND` and `OR` operators in your policy expressions.** In this example, if either label (`C1` or `C3`) had appeared alone in the request, the marketing action would not have violated this policy. It takes both labels (`C1 AND C3`) to return the violated policy. Ensure you are evaluating policies carefully and defining policy expressions with equal care.

```SHELL
curl -X GET \
  'https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/sampleMarketingAction/constraints?duleLabels=C1,C3' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

The response object includes a `duleLabels` array that should match the labels sent in the request. If performing the specified marketing action against the data usage labels violates a policy, the `violatedPolicies` array will contain the details of the policy (or policies) affected. If no policies are violated, the `violatedPolicies` array will appear empty (`[]`).

```JSON
{
    "timestamp": 1551134846737,
    "clientId": "{CLIENT_ID}",
    "userId": "{USER_ID}",
    "imsOrg": "{IMS_ORG}",
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
            "imsOrg": "{IMS_ORG}",
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

## Evaluate policies using datasets and a marketing action

You can also evaluate policy violations by specifying the ID of one or more datasets from which data usage labels can be collected. This is done by performing a POST request to either the core or custom `/constraints` endpoint for a marketing action and specifying dataset IDs within the request body, as shown below.

**API format**

```http
POST /marketingActions/core/{marketingActionName}/constraints
POST /marketingActions/custom/{marketingActionName}/constraints
```

**Request**

The request body contains an array with an object for each dataset ID. Since you are sending a request body, the "Content-Type: application/json" request header is required, as shown in the following example.

```SHELL
curl -X POST \
  https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/crossSiteTargeting/constraints \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
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

**Response**

The response object includes a `duleLabels` array that contains a consolidated list of all labels found within the specified datasets. This list includes dataset- and field-level labels on all fields within the dataset.

The response also includes a `discoveredLabels` array containing objects for each dataset, showing `datasetLabels` broken down into dataset- and field-level labels. Each field-level label shows the path to the specific field with that label.

If the specified marketing action violates a policy involving the `duleLabels` within the datasets, the `violatedPolicies` array will contain the details of the policy (or policies) affected. If no policies are violated, the `violatedPolicies` array will appear empty (`[]`).

```JSON
{
    "timestamp": 1556324277895,
    "clientId": "{CLIENT_ID}",
    "userId": "{USER_ID}",
    "imsOrg": "{IMS_ORG}",
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
            "imsOrg": "{IMS_ORG}",
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

## Evaluate policies using datasets, fields, and a marketing action

In addition to supplying one or more dataset IDs, a subset of fields from within each dataset may also be specified, indicating that only the data usage labels on those fields should be evaluated. Similar to the POST request involving only datasets, this request adds specific fields for each dataset to the request body.

When evaluating policies using dataset fields, please keep the following in mind:

* **Field names are case sensitive.** When providing fields, they must be written exactly as they appear in the dataset (for example, `firstName` vs `firstname`).
* **Dataset label inheritance.** data usage labels can be applied at multiple levels and are inherited downward. If your policy evaluations are not returning the way you thought they might, be sure to check the inherited labels from datasets down to fields in addition to those applied at the field level.

**API format**

```http
POST /marketingActions/core/{marketingActionName}/constraints
POST /marketingActions/custom/{marketingActionName}/constraints
```

**Request**

The request body contains an array with an object for each dataset ID and the subset of fields within that dataset that should be used for evaluation. Since you are sending a request body, the "Content-Type: application/json" request header is required, as shown in the following example. 

```SHELL
curl -X POST \
  https://platform.adobe.io/data/foundation/dulepolicy/marketingActions/custom/crossSiteTargeting/constraints \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
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

**Response**

The response object includes a `duleLabels` array that contains the consolidated list of labels found on the specified fields. Remember that this includes dataset labels as well, as they are inherited down to fields. 

If a policy is violated by performing the specified marketing action on the data in the provided fields, the `violatedPolicies` array will contain the details of the policy (or policies) affected. If no policies are violated, the `violatedPolicies` array will appear empty (`[]`).

In the response below, you can see that the list of `duleLabels` is now shorter, as is the `discoveredLabels` for each dataset as it only includes the fields specified in the request body. You will also notice that the previously violated policy, "Targeting Ads or Content", required both `C4 AND C6` labels, so it is therefore no longer violated and the `violatedPolicies` array appears empty.

```JSON
{
    "timestamp": 1556325503038,
    "clientId": "{CLIENT_ID}",
    "userId": "{USER_ID}",
    "imsOrg": "{IMS_ORG}",
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

## Policy evaluation for [!DNL Real-time Customer Profile]

The [!DNL Policy Service] API can also be used to check for policy violations involving the use of [!DNL Real-time Customer Profile] segments. See the tutorial on [enforcing data usage compliance for audience segments](../../segmentation/tutorials/governance.md) for more information.