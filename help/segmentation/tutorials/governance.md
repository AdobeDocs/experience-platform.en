---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Enforce data usage compliance for audience segments
topic: tutorial
---

# Enforce data usage compliance for an audience segment using APIs

This tutorial covers the steps for enforcing data usage compliance for Real-time Customer Profile audience segments using APIs.

The steps involved include:

- [Look up a merge policy for a segment definition](#look-up-a-merge-policy-for-a-segment-definition)
- [Find the source datasets from the merge policy](#find-the-source-datasets-from-the-merge-policy)
- [Look up data usage labels for the source datasets](#look-up-data-usage-labels-for-the-source-datasets)
- [Filter data fields](#filter-data-fields) *(Optional)*
- [Evaluate data for policy violations](#evaluate-data-for-policy-violations)

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

- [Real-time Customer Profile](../../profile/home.md): Real-time Customer Profile is a generic lookup entity store, and is used to manage Experience Data Model (XDM) data within Platform. Profile merges data across various enterprise data assets and provides access to that data in a unified presentation.
    - [Merge policies](../../profile/api/merge-policies.md): Rules used by Real-time Customer Profile to determine what data can be merged into a unified view under certain conditions. Merge policies can be configured for Data Governance purposes.
- [Segmentation](../home.md): How Real-time Customer Profile divides a large group of individuals contained in the profile store into smaller groups that share similar traits and will respond similarly to marketing strategies.
- [Data Governance](../../data-governance/home.md): Data Governance provides the infrastructure for data usage labeling and enforcement (DULE), using the following components:
    - [Data usage labels](../../data-governance/labels/user-guide.md): Labels used to describe datasets and fields in terms of the level of sensitivity with which to handle their respective data.
    - [Data usage policies](../../data-governance/api/getting-started.md): Configurations indicating which marketing actions are allowed on data categorized by particular data usage labels.

The following sections provide additional information that you will need to know in order to successfully make calls to the Platform APIs.

### Reading sample API calls

This tutorial provides example API calls to demonstrate how to format your requests. These include paths, required headers, and properly formatted request payloads. Sample JSON returned in API responses is also provided. For information on the conventions used in documentation for sample API calls, see the section on [how to read example API calls](../../landing/troubleshooting.md#how-do-i-format-an-api-request) in the Experience Platform troubleshooting guide.

### Gather values for required headers

In order to make calls to Platform APIs, you must first complete the [authentication tutorial](../../tutorials/authentication.md). Completing the authentication tutorial provides the values for each of the required headers in all Experience Platform API calls, as shown below:

- Authorization: Bearer `{ACCESS_TOKEN}`
- x-api-key: `{API_KEY}`
- x-gw-ims-org-id: `{IMS_ORG}`

All resources in Experience Platform are isolated to specific virtual sandboxes. All requests to Platform APIs require a header that specifies the name of the sandbox the operation will take place in:

- x-sandbox-name: `{SANDBOX_NAME}`

> [!NOTE] For more information on sandboxes in Platform, see the [sandbox overview documentation](../../sandboxes/home.md). 

All requests that contain a payload (POST, PUT, PATCH) require an additional header:

- Content-Type: application/json

## Lookup a merge policy for a segment definition

This workflow begins by accessing a known audience segment. Segments that are enabled for use in Real-time Customer Profile contain a merge policy ID within their segment definition. This merge policy contains information about which datasets are to be included in the segment, which in turn contain any applicable data usage labels.

Using the [Real-time Customer Profile API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/real-time-customer-profile.yaml), you can lookup a segment definition by its ID to find its associated merge policy.

**API format**

```http
GET /segment/definitions/{SEGMENT_DEFINITION_ID}
```

| Property | Description |
| -------- | ----------- |
| `{SEGMENT_DEFINITION_ID}` | The ID of the segment definition you want to lookup. |

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/segment/definitions/24379cae-726a-4987-b7b9-79c32cddb5c1 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Reponse**

A successful response returns the details of the segment definition.

```json
{
    "id": "24379cae-726a-4987-b7b9-79c32cddb5c1",
    "schema": { 
        "name": "_xdm.context.profile"
    },
    "ttlInDays": 90,
    "imsOrgId": "{IMS_ORG}",
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

## Find the source datasets from the merge policy

Merge policies contain information about the their source datasets, which in turn contain DULE labels. You can lookup the details of a merge policy by providing the merge policy ID in a GET request to the Profile API.

**API format**

```http
GET /config/mergePolicies/{MERGE_POLICY_ID}
```

| Property | Description |
| -------- | ----------- |
| `{MERGE_POLICY_ID}` | The ID of the merge policy obtained in the [previous step](#lookup-a-merge-policy-for-a-segment-definition). |

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/config/mergePolicies/2b43d78d-0ad4-4c1e-ac2d-574c09b01119 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Reponse**

A successful response returns the details of the merge policy.

```json
{
    "id": "2b43d78d-0ad4-4c1e-ac2d-574c09b01119",
    "imsOrgId": "{IMS_ORG}",
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
            "order" : ["5b95b155419ec801e6eee780", "5b7c86968f7b6501e21ba9df"]
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

## Lookup data usage labels for the source datasets

Once you have gathered the IDs of the merge policy's source datasets, you can use these IDs to lookup the data usage labels configured for the datasets themselves and any specific data fields contained therein.

The following call to the [Catalog Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/catalog.yaml) retrieves the data usage labels associated with a single dataset by providing its ID in the request path:

**API format**

```http
GET /dataSets/{DATASET_ID}/dule
```

| Property | Description |
| -------- | ----------- |
| `{DATASET_ID}` | The ID of the dataset whose data usage labels you want to lookup. |

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/catalog/dataSets/5b95b155419ec801e6eee780/dule \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Reponse**

A successful response returns a list of data usage labels associated with the dataset as a whole, and any particular data fields associated with the source schema.

```json
{
    "connection": {},
    "dataset": {
        "identity": [],
        "contract": [
            "C3"
        ],
        "sensitive": [],
        "contracts": [
            "C3"
        ],
        "identifiability": [],
        "specialTypes": []
    },
    "fields": [],
    "schemaFields": [
        {
            "path": "/properties/personalEmail/properties/address",
            "identity": [
                "I1"
            ],
            "contract": [
                "C2",
                "C9"
            ],
            "sensitive": [],
            "contracts": [
                "C2",
                "C9"
            ],
            "identifiability": [
                "I1"
            ],
            "specialTypes": []
        }
    ]
}
```

| Property | Description |
| -------- | ----------- |
| `dataset` | An object that contains the data usage labels applied to the dataset as a whole. |
| `schemaFields` | An array of objects representing specific schema fields that have data usage labels applied to them. |
| `schemaFields.path` | The path of the schema field whose data usage labels are listed in the same object. |

## Filter data fields

> [!NOTE] This step is optional. If you do not wish to adjust the data included in your segment based on your findings in the previous step of [looking up data usage labels](#lookup-data-usage-labels-for-the-source-datasets), you can skip ahead to the final step of [evaluating the data for policy violations](#evaluate-data-for-policy-violations).

If you wish to adjust the data included in your audience segment, you can do so using one of the following two methods:

### Update the merge policy of the segment definition

Updating the merge policy of a segment definition will adjust the datasets and fields that will be included when the segment job is run. See the section on [updating an existing merge policy](../../profile/api/merge-policies.md) in the merge policy tutorial for more information. 

### Restrict specific data fields when exporting the segment

When exporting a segment to a dataset using the Real-time Customer Profile API, you can filter the data that is included in the export by using the `fields` parameter. Any data fields added to this parameter will be included in the export, while all other data fields will be excluded.

Consider a segment that has data fields named "A", "B", and "C". If you wished to only export field "C", then the `fields` parameter would contain field "C" alone. By doing this, fields "A" and "B" would be excluded when exporting the segment.
 
See the section on [exporting a segment](./evaluate-a-segment.md#export-a-segment) in the segmentation tutorial for more information.

## Evaluate data for policy violations

Now that you have gathered the data usage labels associated with your audience segment, you can test these labels against marketing actions to evaluate for any data usage policy violations. For detailed steps on how to perform policy evaluations using the [DULE Policy Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/dule-policy-service.yaml), see the document on [policy evaluation](../../data-governance/enforcement/overview.md).

## Next steps

By following this tutorial, you have looked up the data usage labels associated with an audience segment and tested them for policy violations against specific marketing actions. For more information on Data Governance in Experience Platform, see the [Data Governance overview](../../data-governance/home.md).