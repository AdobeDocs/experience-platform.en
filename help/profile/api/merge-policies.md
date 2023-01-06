---
keywords: Experience Platform;profile;real-time customer profile;troubleshooting;API
title: Merge Policies API Endpoint
type: Documentation
description: Adobe Experience Platform enables you to bring data fragments together from multiple sources and combine them in order to see a complete view of each of your individual customers. When bringing this data together, merge policies are the rules that Platform uses to determine how data will be prioritized and what data will be combined to create a unified view.
exl-id: fb49977d-d5ca-4de9-b185-a5ac1d504970
---
# Merge policies endpoint

Adobe Experience Platform enables you to bring data fragments together from multiple sources and combine them in order to see a complete view of each of your individual customers. When bringing this data together, merge policies are the rules that [!DNL Platform] uses to determine how data will be prioritized and what data will be combined to create a unified view. 

For example, if a customer interacts with your brand across several channels, your organization will have multiple profile fragments related to that single customer appearing in multiple datasets. When these fragments are ingested into Platform, they are merged together in order to create a single profile for that customer. When the data from multiple sources conflicts (for example one fragment lists the customer as "single" while the other lists the customer as "married") the merge policy determines which information to include in the profile for the individual.

Using RESTful APIs or the user interface, you can create new merge policies, manage existing policies, and set a default merge policy for your organization. This guide provides steps for working with merge policies using the API. 

To work with merge policies using the UI, please refer to the [merge policies UI guide](../merge-policies/ui-guide.md). To learn more about merge policies in general, and their role within Experience Platform, please begin by reading the [merge policies overview](../merge-policies/overview.md).

## Getting started

The API endpoint used in this guide is part of the [[!DNL Real-Time Customer Profile API]](https://www.adobe.com/go/profile-apis-en). Before continuing, please review the [getting started guide](getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any [!DNL Experience Platform] API.

## Components of merge policies {#components-of-merge-policies}

Merge policies are private to your IMS Organization, allowing you to create different policies to merge schemas in the specific ways that you need. Any API accessing [!DNL Profile] data requires a merge policy, though a default will be used if one is not explicitly provided. [!DNL Platform] provides organizations with a default merge policy, or you can create a merge policy for a specific Experience Data Model (XDM) schema class and mark it as the default for your organization. 

While each organization can potentially have multiple merge policies per schema class, each class can have only one default merge policy. Any merge policy set as default will be used in cases where the name of the schema class is provided and a merge policy is required but not provided. 

>[!NOTE]
>
>When you set a new merge policy as the default, any existing merge policy that was previously set as the default will automatically be updated to no longer be used as the default.

To ensure all profile consumers are working with the same view on edges, merge policies can be marked as active on edge. In order for a segment to be activated on edge (marked as an edge segment), it must be tied to a merge policy that is marked as active on edge. If a segment is **not** tied to a merge policy that is marked as active on edge, the segment will not be marked as active on edge, and will be marked as a streaming segment.

Additionally, each IMS Organization can only have **one** merge policy that is active on edge. If a merge policy is active on edge, it can be used for other systems on edge, such as Edge Profile, Edge Segmentation, and Destinations on Edge. 

### Complete merge policy object

The complete merge policy object represents a set of preferences controlling aspects of merging profile fragments. 

**Merge policy object**

```json
    {
        "id": "{MERGE_POLICY_ID}",
        "name": "{NAME}",
        "imsOrgId": "{ORG_ID}",
        "schema": {
            "name": "{SCHEMA_CLASS_NAME}"
        },
        "version": 1,
        "identityGraph": {
            "type": "{IDENTITY_GRAPH_TYPE}"
        },
        "attributeMerge": {
            "type": "{ATTRIBUTE_MERGE_TYPE}"
        },
        "isActiveOnEdge": "{BOOLEAN}",
        "default": "{BOOLEAN}",
        "updateEpoch": "{UPDATE_TIME}"
    }
```

|Property|Description|
|---|---|
|`id`|The system generated unique identifier assigned at creation time|
|`name`|Friendly name by which the merge policy can be identified in list views.|
|`imsOrgId`|Organization ID to which this merge policy belongs|
|`schema.name`|Part of the [`schema`](#schema) object, the `name` field contains the XDM schema class to which the merge policy relates. For more information on schemas and classes, please read the [XDM documentation](../../xdm/home.md).|
|`version`|[!DNL Platform] maintained version of merge policy. This read-only value is incremented whenever a merge policy is updated.|
|`identityGraph`|[Identity graph](#identity-graph) object indicating the identity graph from which related identities will be obtained. Profile fragments found for all related identities will be merged.|
|`attributeMerge`|[Attribute merge](#attribute-merge) object indicating the manner by which the merge policy will prioritize profile attributes in the case of data conflicts.|
|`isActiveOnEdge`|Boolean value indicating if this merge policy can be used on edge. By default, this value is `false`.|
|`default`|Boolean value indicating if this merge policy is the default for the specified schema.|
|`updateEpoch`|Date of the last update to the merge policy.|

**Example merge policy**

```json
    {
        "id": "10648288-cda5-11e8-a8d5-f2801f1b9fd1",
        "name": "profile-default",
        "imsOrgId": "{ORG_ID}",
        "schema": {
            "name": "_xdm.context.profile"
        },
        "version": 1,
        "identityGraph": {
            "type": "none"
        },
        "attributeMerge": {
            "type": "timestampOrdered"
        },
        "isActiveOnEdge": false,
        "default": true,
        "updateEpoch": 1551660639
    }
``` 

### Identity graph {#identity-graph}

[Adobe Experience Platform Identity Service](../../identity-service/home.md) manages the identity graphs used globally and for each organization on [!DNL Experience Platform]. The `identityGraph` attribute of the merge policy defines how to determine the related identities for a user.

**identityGraph object**

```json
    "identityGraph": {
        "type": "{IDENTITY_GRAPH_TYPE}"
    }
```

Where `{IDENTITY_GRAPH_TYPE}` is one of the following:

* **"none":** Perform no identity stitching.
* **"pdg":** Perform identity stitching based on your private identity graph.

**Example `identityGraph`**

```json
    "identityGraph": {
        "type": "pdg"
    }
```

### Attribute merge {#attribute-merge}

A profile fragment is the profile information for just one identity out of the list of identities that exist for a particular user. When the identity graph type used results in more than one identity, there is a potential for conflicting profile attributes and priority must be specified. Using `attributeMerge`, you can specify which profile attributes to prioritize in the event of a merge conflict between Key Value (record data) type datasets.

**attributeMerge object**

```json
    "attributeMerge": {
        "type": "{ATTRIBUTE_MERGE_TYPE}"
    }
```

Where `{ATTRIBUTE_MERGE_TYPE}` is one of the following:

* **`timestampOrdered`**: (default) Give priority to the profile which was updated last. Using this merge type, the `data` attribute is not required.
* **`dataSetPrecedence`**: Give priority to profile fragments based on the dataset from which they came. This could be used when information present in one dataset is preferred or trusted over data in another dataset. When using this merge type, the `order` attribute is required, as it lists the datasets in the order of priority.
  * **`order`**: When "dataSetPrecedence" is used, an `order` array must be supplied with a list of datasets. Any datasets not included in the list will not be merged. In other words, datasets must be explicitly listed to be merged into a profile. The `order` array lists the IDs of the datasets in order of priority.

#### Example `attributeMerge` object using `dataSetPrecedence` type

```json
    "attributeMerge": {
        "type": "dataSetPrecedence",
        "order": [
            "dataSetId_2", 
            "dataSetId_3", 
            "dataSetId_1", 
            "dataSetId_4"
        ]
    }
```

#### Example `attributeMerge` object using `timestampOrdered` type

```json
    "attributeMerge": {
        "type": "timestampOrdered"
    }
```

### Schema {#schema}

The schema object specifies the Experience Data Model (XDM) schema class for which this merge policy is created.

**`schema` object**

```json
    "schema": {
        "name": "{SCHEMA_NAME}"
    }
```

Where the value of `name` is the name of the XDM class upon which the schema associated with the merge policy is based.

**Example `schema`**

```json
    "schema": {
        "name": "_xdm.context.profile"
    }
```

To learn more about XDM and working with schemas in Experience Platform, begin by reading the [XDM System overview](../../xdm/home.md).

## Access merge policies {#access-merge-policies}

Using the [!DNL Real-Time Customer Profile] API, the `/config/mergePolicies` endpoint allows you perform a lookup request to view a specific merge policy by its ID, or access all of the merge policies in your IMS Organization, filtered by specific criteria. You can also use the `/config/mergePolicies/bulk-get` endpoint to retrieve multiple merge policies by their IDs. Steps for performing each of these calls are outlined in the following sections.

### Access a single merge policy by ID

You can access a single merge policy by its ID by making a GET request to the `/config/mergePolicies` endpoint and including the `mergePolicyId` in the request path.

**API format**

```http
GET /config/mergePolicies/{mergePolicyId}
```

|Parameter|Description|
|---|---|
|`{mergePolicyId}`|The identifier of the merge policy you want to delete.|

**Request**

```shell
curl -X GET \
  'https://platform.adobe.io/data/core/ups/config/mergePolicies/10648288-cda5-11e8-a8d5-f2801f1b9fd1' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}
```

**Response**

A successful response returns the details of the merge policy.

```json
{
    "id": "10648288-cda5-11e8-a8d5-f2801f1b9fd1",
    "imsOrgId": "{ORG_ID}",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "version": 1,
    "identityGraph": {
        "type": "pdg"
    },
    "attributeMerge": {
        "type": "timestampOrdered"
    },
    "isActiveOnEdge": "false",
    "default": false,
    "updateEpoch": 1551127597
}
```

See the [components of merge policies](#components-of-merge-policies) section at the beginning of this document for details on each of the individual elements that make up a merge policy.

### Retrieve multiple merge policies by their IDs

You can retrieve multiple merge policies by making a POST request to the `/config/mergePolicies/bulk-get` endpoint and including the IDs of the merge policies you wish to retrieve in the request body.

**API format**

```http
POST /config/mergePolicies/bulk-get
```

**Request**

The request body includes an "ids" array with individual objects containing the "id" for each merge policy for which you would like to retrieve details.

```shell
curl -X POST \
  'https://platform.adobe.io/data/core/ups/config/mergePolicies/bulk-get' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "ids": [
          {
            "id": "0bf16e61-90e9-4204-b8fa-ad250360957b"
          },
          {
            "id": "42d4a596-b1c6-46c0-994e-ca5ef1f85130"
          }
        ]
      }'
```

**Response**

A successful response returns HTTP Status 207 (Multi-Status) and the details of the merge policies whose IDs were provided in the POST request.

```json
{ 
    "results": { 
        "0bf16e61-90e9-4204-b8fa-ad250360957b": {
            "id": "0bf16e61-90e9-4204-b8fa-ad250360957b",
            "name": "Profile Default Merge Policy",
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxId": "ff0f6870-c46d-11e9-8ca3-036939a64204",
                "sandboxName": "prod",
                "type": "production",
                "default": true
            },
            "schema": {
                "name": "_xdm.context.profile"
            },
            "version": 1,
            "identityGraph": {
                "type": "none"
            },
            "attributeMerge": {
                "type": "timestampOrdered"
            },
            "isActiveOnEdge": true,
            "default": true,
            "updateEpoch": 1552086578
        },
        "42d4a596-b1c6-46c0-994e-ca5ef1f85130": {
            "id": "42d4a596-b1c6-46c0-994e-ca5ef1f85130",
            "name": "Dataset Precedence Merge Policy",
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxId": "ff0f6870-c46d-11e9-8ca3-036939a64204",
                "sandboxName": "prod",
                "type": "production",
                "default": true
            },
            "schema": {
                "name": "_xdm.context.profile"
            },
            "version": 1,
            "identityGraph": {
                "type": "pdg"
            },
            "attributeMerge": {
                "type": "dataSetPrecedence",
                "order": [
                    "5b76f86b85d0e00000be5c8b",
                    "5b76f8d787a6af01e2ceda18"
                ]
            },
            "isActiveOnEdge": false,
            "default": false,
            "updateEpoch": 1576099719
        }
    }
}
```

See the [components of merge policies](#components-of-merge-policies) section at the beginning of this document for details on each of the individual elements that make up a merge policy.

### List multiple merge policies by criteria

You can list multiple merge policies within your IMS Organization by issuing a GET request to the `/config/mergePolicies` endpoint and using optional query parameters to filter, order, and paginate the response. Multiple parameters can be included, separated by ampersands (&). Making a call to this endpoint with no parameters will retrieve all merge policies available for your organization.

**API format**

```http
GET /config/mergePolicies?{QUERY_PARAMS}
```

|Parameter|Description|
|---|---|
|`default`|A boolean value that filters results by whether or not the merge policies are the default for a schema class.|
|`limit`|Specifies the page size limit to control the number of results that are included in a page. Default value: 20|
|`orderBy`|Specifies the field by which to order results as in `orderBy=name` or `orderBy=+name` to sort by name in ascending order, or `orderBy=-name`, to sort in descending order. Omitting this value results in the default sorting of `name` in ascending order.|
|`isActiveOnEdge`|A boolean values that filters results by whether or not the merge policies are active on edge.|
|`schema.name`|Name of the schema for which to retrieve available merge policies.|
|`identityGraph.type`|Filters results by the identity graph type. Possible values include "none" and "pdg" (Private graph).|
|`attributeMerge.type`|Filters results by the attribute merge type used. Possible values include "timestampOrdered" and "dataSetPrecedence".|
|`start`|Page offset - specify the starting ID for data to retrieve. Default value: 0|
|`version`|Specify this if you are looking to use a specific version of the merge policy. By default, the latest version will be used.|

For more information regarding `schema.name`, `identityGraph.type`, and `attributeMerge.type`, refer to the [components of merge policies](#components-of-merge-policies) section provided earlier in this guide.


**Request**

The following request lists all merge policies for a given schema:

```shell
curl -X GET \
  'https://platform.adobe.io/data/core/ups/config/mergePolicies?schema.name=_xdm.context.profile' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}
```

**Response**

A successful response returns a paginated list of merge policies that meet the criteria specified by the query parameters sent in the request.

```json
{
    "_page": {
        "totalCount": 2,
        "pageSize": 2
    },
    "children": [
        {
            "id": "0bf16e61-90e9-4204-b8fa-ad250360957b",
            "name": "Profile Default Merge Policy",
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxId": "ff0f6870-c46d-11e9-8ca3-036939a64204",
                "sandboxName": "prod",
                "type": "production",
                "default": true
            },
            "schema": {
                "name": "_xdm.context.profile"
            },
            "version": 1,
            "identityGraph": {
                "type": "none"
            },
            "attributeMerge": {
                "type": "timestampOrdered"
            },
            "isActiveOnEdge": true,
            "default": true,
            "updateEpoch": 1552086578
        },
        {
            "id": "42d4a596-b1c6-46c0-994e-ca5ef1f85130",
            "name": "Dataset Precedence Merge Policy",
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxId": "ff0f6870-c46d-11e9-8ca3-036939a64204",
                "sandboxName": "prod",
                "type": "production",
                "default": true
            },
            "schema": {
                "name": "_xdm.context.profile"
            },
            "version": 1,
            "identityGraph": {
                "type": "pdg"
            },
            "attributeMerge": {
                "type": "dataSetPrecedence",
                "order": [
                    "5b76f86b85d0e00000be5c8b",
                    "5b76f8d787a6af01e2ceda18"
                ]
            },
            "isActiveOnEdge": false,
            "default": false,
            "updateEpoch": 1576099719
        }
    ],
    "_links": {
        "next": {
            "href": "@/mergePolicies?start=K1JJRDpFaWc5QUpZWHY1c2JBQUFBQUFBQUFBPT0jUlQ6MSNUUkM6MiNGUEM6QWdFQUFBQldBQkVBQVBnaFFQLzM4VUIvL2tKQi8rLysvMUpBLzMrMi8wRkFmLzR4UUwvL0VrRC85em4zRTBEcmNmYi92Kzh4UUwvL05rQVgzRi8rMStqNS80WHQwN2NhUUVzQUFBUUFleGpLQ1JnVXRVcEFCQUFFQVBBRA==&orderBy=&limit=2"
        }
    }
}
```

|Property|Description|
|---|---|
|`_links.next.href`| A URI address for the next page of results. Use this URI as the request parameter for another API call to the same endpoint to view the page. If no next page exists, this value will be an empty string.|

## Create a merge policy

You can create a new merge policy for your organization by making a POST request to the `/config/mergePolicies` endpoint.

**API format**

```http
POST /config/mergePolicies
```

**Request**
The following request creates a new merge policy, which is configured by the attribute values provided in the payload:

```shell
curl -X POST \
  https://platform.adobe.io/data/core/ups/config/mergePolicies \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Loyalty members ordered by ID",
    "identityGraph": {
        "type": "none"
    },
    "attributeMerge": {
        "type":"dataSetPrecedence",
        "order": [
            "5b76f86b85d0e00000be5c8b",
            "5b76f8d787a6af01e2ceda18"
        ]
    },
    "schema": {
        "name":"_xdm.context.profile"
    },
    "isActiveOnEdge": true,
    "default": true
}'
```

|Property|Description|
|---|---|
|`name`|A human-friendly name by which the merge policy can be identified in list views.|
|`identityGraph.type`|The identity graph type from which to obtain related identities to merge. Possible values: "none" or "pdg" (Private graph).|
|`attributeMerge`|The manner by which to prioritize profile attribute values in the case of data conflicts.|
| `schema`| The XDM schema class associated with the merge policy.|
|`isActiveOnEdge`|Specifies whether this merge policy is active on edge.|
| `default`|Specifies whether this merge policy is the default for the schema.|

Refer to the [components of merge policies](#components-of-merge-policies) section for more information.

**Response**

A successful response returns the details of the newly created merge policy.

```json
{
    "id": "e5bc94de-cd14-4cdf-a2bc-88b6e8cbfac2",
    "name": "Loyalty members ordered by ID",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "ff0f6870-c46d-11e9-8ca3-036939a64204",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "schema": {
        "name": "_xdm.context.profile"
    },
    "version": 1,
    "identityGraph": {
        "type": "none"
    },
    "attributeMerge": {
        "type": "dataSetPrecedence",
        "order": [
            "5b76f86b85d0e00000be5c8b",
            "5b76f8d787a6af01e2ceda18"
        ]
    },
    "isActiveOnEdge": true,
    "default": true,
    "updateEpoch": 1551898378
}
```

See the [components of merge policies](#components-of-merge-policies) section at the beginning of this document for details on each of the individual elements that make up a merge policy.

## Update a merge policy {#update}

You can modify an existing merge policy by editing individual attributes (PATCH) or by overwriting the entire merge policy with new attributes (PUT). Examples of each are shown below.

### Edit individual merge policy fields

You can edit individual fields for a merge policy by making a PATCH request to the `/config/mergePolicies/{mergePolicyId}` endpoint:

**API format**

```http
PATCH /config/mergePolicies/{mergePolicyId}
```

|Parameter|Description|
|---|---|
|`{mergePolicyId}`|The identifier of the merge policy you want to delete.|

**Request**

The following request updates a specified merge policy by changing the value of its `default` property to `true`:

```shell
curl -X PATCH \
  https://platform.adobe.io/data/core/ups/config/mergePolicies/e5bc94de-cd14-4cdf-a2bc-88b6e8cbfac2 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
    "op": "add",
    "path": "/default",
    "value": "true"
  }'
```

|Property|Description|
|---|---|
|`op`|Specifies the operation to take. Examples of other PATCH operations can be found in the [JSON Patch documentation](https://datatracker.ietf.org/doc/html/rfc6902)|
|`path`|The path of the field to update. Accepted values are: "/name", "/identityGraph.type", "/attributeMerge.type", "/schema.name", "/version", "/default", "/isActiveOnEdge"|
|`value`|The value to set the specified field to.|

Refer to the [components of merge policies](#components-of-merge-policies) section for more information.


**Response**

A successful response returns the details of the newly updated merge policy.

```json
{
    "id": "e5bc94de-cd14-4cdf-a2bc-88b6e8cbfac2",
    "name": "Loyalty members ordered by ID",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "ff0f6870-c46d-11e9-8ca3-036939a64204",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "schema": {
        "name": "_xdm.context.profile"
    },
    "version": 1,
    "identityGraph": {
        "type": "none"
    },
    "attributeMerge": {
        "type": "dataSetPrecedence",
        "order": [
            "5b76f86b85d0e00000be5c8b",
            "5b76f8d787a6af01e2ceda18"
        ]
    },
    "isActiveOnEdge": true,
    "default": true,
    "updateEpoch": 1551898378
}
```

### Overwrite a merge policy

Another way to modify a merge policy is to use a PUT request, which overwrites the entire merge policy.

**API format**

```http
PUT /config/mergePolicies/{mergePolicyId}
```

|Parameter|Description|
|---|---|
|`{mergePolicyId}`|The identifier of the merge policy you want to overwrite.|

**Request**

The following request overwrites the specified merge policy, replacing its attribute values with those supplied in the payload. Since this request completely replaces an existing merge policy, you are required to supply all of the same fields that were required when originally defining the merge policy. However, this time you are providing updated values for the fields you want to change.

```shell
curl -X PUT \
  https://platform.adobe.io/data/core/ups/config/mergePolicies/e5bc94de-cd14-4cdf-a2bc-88b6e8cbfac2 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Content-Type: application/json' \
  -d '{
        "name": "Loyalty members ordered by ID",
        "imsOrgId": "{ORG_ID}",
        "schema": {
            "name": "_xdm.context.profile"
        },
        "version": 1,
        "identityGraph": {
            "type": "none"
        },
        "attributeMerge": {
            "type": "dataSetPrecedence",
            "order": [
                "5b76f86b85d0e00000be5c8b",
                "5b76f8d787a6af01e2ceda18"
            ]
        },
        "isActiveOnEdge": true,
        "default": true,
        "updateEpoch": 1551898378
    }'
```

|Property|Description|
|---|---|
|`name`|A human-friendly name by which the merge policy can be identified in list views.|
|`identityGraph`|The identity graph from which to obtain related identities to merge.|
|`attributeMerge`|The manner by which to prioritize profile attribute values in the case of data conflicts.|
|`schema`| The XDM schema class associated with the merge policy.|
|`isActiveOnEdge`|Specifies whether this merge policy is active on edge.|
| `default`| Specifies whether this merge policy is the default for the schema.|

Refer to the [components of merge policies](#components-of-merge-policies) section for more information.

**Response**

A successful response returns the details of the updated merge policy.

```json
{
    "id": "e5bc94de-cd14-4cdf-a2bc-88b6e8cbfac2",
    "name": "Loyalty members ordered by ID",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "ff0f6870-c46d-11e9-8ca3-036939a64204",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "schema": {
        "name": "_xdm.context.profile"
    },
    "version": 1,
    "identityGraph": {
        "type": "none"
    },
    "attributeMerge": {
        "type": "dataSetPrecedence",
        "order": [
            "5b76f86b85d0e00000be5c8b",
            "5b76f8d787a6af01e2ceda18"
        ]
    },
    "isActiveOnEdge": true,
    "default": true,
    "updateEpoch": 1551898378
}
```

## Delete a merge policy

A merge policy can be deleted by making a DELETE request to the `/config/mergePolicies` endpoint and including the ID of the merge policy that you wish to delete in the request path.

>[!NOTE]
>
>If the merge policy has `isActiveOnEdge` set to true, the merge policy **cannot** be deleted. Use either the [PATCH](#edit-individual-merge-policy-fields) or [PUT](#overwrite-a-merge-policy) endpoints to update the merge policy before deleting it.

**API format**

```http
DELETE /config/mergePolicies/{mergePolicyId}
```

|Parameter|Description|
|---|---|
|`{mergePolicyId}`|The identifier of the merge policy you want to delete.|

**Request**

The following request deletes a merge policy.

```shell
curl -X DELETE \
  https://platform.adobe.io/data/core/ups/config/mergePolicies/e5bc94de-cd14-4cdf-a2bc-88b6e8cbfac2 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
```

**Response**

A successful delete request returns HTTP Status 200 (OK) and an empty response body. To confirm the deletion was successful, you can perform a GET request to view the merge policy by its ID. If the merge policy was deleted, you will receive an HTTP Status 404 (Not Found) error.

## Next steps

Now that you know how to create and configure merge policies for your organization, you can use them to adjust the view of customer profiles within Platform and to create audience segments from your [!DNL Real-Time Customer Profile] data. 

Please see the [Adobe Experience Platform Segmentation Service documentation](../../segmentation/home.md) to begin defining and working with segments.
