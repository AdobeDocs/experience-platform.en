---
keywords: Experience Platform;home;popular topics;data usage compliance;enforce;enforce data usage compliance;Segmentation Service;segmentation;Segmentation;
solution: Experience Platform
title: Enforce Data Usage Compliance for an Audience Segment Using APIs
type: Tutorial
description: This tutorial covers the steps for enforcing data usage compliance for Real-Time Customer Profile audience segments using APIs.
exl-id: 2299328c-d41a-4fdc-b7ed-72891569eaf2
---
# Enforce data usage compliance for an audience segment using APIs

This tutorial covers the steps for enforcing data usage compliance for [!DNL Real-Time Customer Profile] audience segments using APIs.

## Getting started

This tutorial requires a working understanding of the following components of [!DNL Adobe Experience Platform]:

- [[!DNL Real-Time Customer Profile]](../../profile/home.md): [!DNL Real-Time Customer Profile] is a generic lookup entity store, and is used to manage [!DNL Experience Data Model (XDM)] data within [!DNL Platform]. Profile merges data across various enterprise data assets and provides access to that data in a unified presentation.
    - [Merge policies](../../profile/api/merge-policies.md): Rules used by [!DNL Real-Time Customer Profile] to determine what data can be merged into a unified view under certain conditions. Merge policies can be configured for Data Governance purposes.
- [[!DNL Segmentation]](../home.md): How [!DNL Real-Time Customer Profile] divides a large group of individuals contained in the profile store into smaller groups that share similar traits and will respond similarly to marketing strategies.
- [Data Governance](../../data-governance/home.md): Data Governance provides the infrastructure for data usage labeling and enforcement, using the following components:
    - [Data usage labels](../../data-governance/labels/user-guide.md): Labels used to describe datasets and fields in terms of the level of sensitivity with which to handle their respective data.
    - [Data usage policies](../../data-governance/policies/overview.md): Configurations indicating which marketing actions are allowed on data categorized by particular data usage labels.
    - [Policy enforcement](../../data-governance/enforcement/overview.md): Allows you to enforce data usage policies and prevent data operations that constitute policy violations.
- [Sandboxes](../../sandboxes/home.md): [!DNL Experience Platform] provides virtual sandboxes which partition a single [!DNL Platform] instance into separate virtual environments to help develop and evolve digital experience applications.

The following sections provide additional information that you will need to know in order to successfully make calls to the [!DNL Platform] APIs.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the [!DNL Experience Platform] troubleshooting guide.

### Gather values for required headers

In order to make calls to [!DNL Platform] APIs, you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). Completing the authentication tutorial provides the values for each of the required headers in all [!DNL Experience Platform] API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{ORG_ID}`

All resources in [!DNL Experience Platform] are isolated to specific virtual sandboxes. All requests to [!DNL Platform] APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

>[!NOTE]
>
>For more information on sandboxes in [!DNL Platform], see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

- Content-Type: application/json

## Look up a merge policy for a segment definition {#merge-policy}

This workflow begins by accessing a known audience segment. Segments that are enabled for use in [!DNL Real-Time Customer Profile] contain a merge policy ID within their segment definition. This merge policy contains information about which datasets are to be included in the segment, which in turn contain any applicable data usage labels.

Using the [!DNL Segmentation] API, you can look up a segment definition by its ID to find its associated merge policy.

**API format**

```http
GET /segment/definitions/{SEGMENT_DEFINITION_ID}
```

| Property | Description |
| -------- | ----------- |
| `{SEGMENT_DEFINITION_ID}` | The ID of the segment definition you want to look up. |

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/segment/definitions/24379cae-726a-4987-b7b9-79c32cddb5c1 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the segment definition.

```json
{
    "id": "24379cae-726a-4987-b7b9-79c32cddb5c1",
    "schema": { 
        "name": "_xdm.context.profile"
    },
    "ttlInDays": 90,
    "imsOrgId": "{ORG_ID}",
    "name": "Cart abandons in CA",
    "description": "",
    "expression": {
        "type": "PQL", 
        "format": "pql/text", 
        "value": "homeAddress.countryISO = 'US'"
    },
    "mergePolicyId": "2b43d78d-0ad4-4c1e-ac2d-574c09b01119",
    "evaluationInfo": {
        "batch": {
            "enabled": true
        },
        "continuous": {
            "enabled": false
        },
        "synchronous": {
            "enabled": false
        }
    },
    "creationTime": 1556094486000,
    "updateEpoch": 1556094486000,
    "updateTime": 1556094486000
  }
}
```

| Property | Description |
| -------- | ----------- |
| `mergePolicyId` | The ID of the merge policy used for the segment definition. This will be used in the next step. |

## Find the source datasets from the merge policy {#datasets}

Merge policies contain information about the their source datasets, which in turn contain data usage labels. You can lookup the details of a merge policy by providing the merge policy ID in a GET request to the [!DNL Profile] API. More information about merge policies can be found in the [merge policies endpoint guide](../../profile/api/merge-policies.md).

**API format**

```http
GET /config/mergePolicies/{MERGE_POLICY_ID}
```

| Property | Description |
| -------- | ----------- |
| `{MERGE_POLICY_ID}` | The ID of the merge policy obtained in the [previous step](#merge-policy). |

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/config/mergePolicies/2b43d78d-0ad4-4c1e-ac2d-574c09b01119 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns the details of the merge policy.

```json
{
    "id": "2b43d78d-0ad4-4c1e-ac2d-574c09b01119",
    "imsOrgId": "{ORG_ID}",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "version": 1,
    "identityGraph": {
        "type": "none"
    },
    "attributeMerge": {
        "type":"dataSetPrecedence", 
        "data": {
            "order": ["5b95b155419ec801e6eee780", "5b7c86968f7b6501e21ba9df"]
        }
    },
    "default": false,
    "updateEpoch": 1551127597
}
```

| Property | Description |
| -------- | ----------- |
| `schema.name` | The name of the schema associated with the merge policy. |
| `attributeMerge.type` | The data precedence configuration type for the merge policy. If the value is `dataSetPrecedence`, the datasets associated with this merge policy are listed under `attributeMerge > data > order`. If the value is `timestampOrdered`, then all datasets associated with the schema referenced in `schema.name` are used by the merge policy. |
| `attributeMerge.data.order` | If the `attributeMerge.type` is `dataSetPrecedence`, this attribute will be an array containing the IDs of the datasets used by this merge policy. These IDs are used in the next step. |

## Evaluate datasets for policy violations

>[!NOTE]
>
> This step assumes that you have at least one active data usage policy that prevents specific marketing actions to be performed on data containing certain labels. If you do not have any applicable usage policies for the datasets being evaluated, please follow the [policy creation tutorial](../../data-governance/policies/create.md) to create one before continuing with this step.

Once you have obtained the IDs of the merge policy's source datasets, you can use the [Policy Service API](https://www.adobe.io/experience-platform-apis/references/policy-service/) to evaluate those datasets against specific marketing actions in order to check for data usage policy violations.

To evaluate the datasets, you must provide the name of the marketing action in the path of a POST request, while providing the dataset IDs within the request body, as shown in the example below.

**API format**

```http
POST /marketingActions/core/{MARKETING_ACTION_NAME}/constraints
POST /marketingActions/custom/{MARKETING_ACTION_NAME}/constraints
```

| Parameter | Description |
| --- | --- |
| `{MARKETING_ACTION_NAME}` | The name of the marketing action associated with the data usage policy you are evaluating the datasets by. Depending on whether the policy was defined by Adobe or your organization, you must use `/marketingActions/core` or `/marketingActions/custom`, respectively. |

**Request**

The following request tests the `exportToThirdParty` marketing action against datasets obtained in the [previous step](#datasets). The request payload is an array containing the IDs of each dataset.

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
      "entityId": "5b95b155419ec801e6eee780"
    },
    {
      "entityType": "dataSet",
      "entityId": "5b7c86968f7b6501e21ba9df"
    }
  ]'
```

| Property | Description |
| --- | --- |
| `entityType` | Each item in the payload array must indicate the type of entity being defined. For this use case, the value will always be "dataSet". |
| `entityID` | Each item in the payload array must provide the unique ID for a dataset. |

**Response**

A successful response returns the URI for the marketing action, the data usage labels that were collected from the provided datasets, and a list of any data usage policies that were violated as a result of testing the action against those labels. In this example, the "Export Data to Third Party" policy is shown in the `violatedPolicies` array, indicating that the marketing action triggered a policy violation.

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
    "C5"
  ],
  "discoveredLabels": [
    {
      "entityType": "dataSet",
      "entityId": "5b95b155419ec801e6eee780",
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
      "entityId": "5b7c86968f7b6501e21ba9df",
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
| `duleLabels` | A list of data usage labels that were extracted from the provided datasets. |
| `discoveredLabels` | A list of the datasets that were provided in the request payload, displaying the dataset-level and field-level labels that were found in each. |
| `violatedPolicies` | An array listing any data usage policies that were violated by testing the marketing action (specified in `marketingActionRef`) against the provided `duleLabels`. |

Using the data returned in the API response, you can set up protocols within your experience application to appropriately enforce policy violations when they occur.

## Filter data fields

If your audience segment does not pass evaluation, you can adjust the data included in the segment through one of the two methods outlined below.

### Update the merge policy of the segment definition

Updating the merge policy of a segment definition will adjust the datasets and fields that will be included when the segment job is run. See the section on [updating an existing merge policy](../../profile/api/merge-policies.md#update) in the API merge policy tutorial for more information. 

### Restrict specific data fields when exporting the segment

When exporting a segment to a dataset using the [!DNL Segmentation] API, you can filter the data that is included in the export by using the `fields` parameter. Any data fields added to this parameter will be included in the export, while all other data fields will be excluded.

Consider a segment that has data fields named "A", "B", and "C". If you wished to only export field "C", then the `fields` parameter would contain field "C" alone. By doing this, fields "A" and "B" would be excluded when exporting the segment.
 
See the section on [exporting a segment](./evaluate-a-segment.md#export) in the segmentation tutorial for more information.

## Next steps

By following this tutorial, you have looked up the data usage labels associated with an audience segment and tested them for policy violations against specific marketing actions. For more information on Data Governance in [!DNL Experience Platform], please read the overview for [Data Governance](../../data-governance/home.md).
