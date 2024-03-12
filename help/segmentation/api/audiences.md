---
title: Audiences API Endpoint
description: Use the audiences endpoint in the Adobe Experience Platform Segmentation Service API to programmatically create, manage, and update audiences for your organization.
role: Developer
exl-id: cb1a46e5-3294-4db2-ad46-c5e45f48df15
---
# Audiences endpoint

An audience is a collection of people who share similar behaviors and/or characteristics. These collections of people can be generated either by using Adobe Experience Platform or from external sources. You can use the `/audiences` endpoint in the Segmentation API, which allows you to programmatically retrieve, create, update, and delete audiences.

## Getting started

The endpoints used in this guide are part of the [!DNL Adobe Experience Platform Segmentation Service] API. Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls.

## Retrieve a list of audiences {#list}

You can retrieve a list of all audiences for your organization by making a GET request to the `/audiences` endpoint.

**API format**

The `/audiences` endpoint supports several query parameters to help filter your results. While these parameters are optional, their use is strongly recommended to help reduce expensive overhead when listing resources. If you make a call to this endpoint with no parameters, all audiences available for your organization will be retrieved. Multiple parameters can be included, separated by ampersands (`&`). 

```http
GET /audiences
GET /audiences?{QUERY_PARAMETERS}
```

The following query parameters can be used when retrieving a list of audiences:

| Query parameter | Description | Example |
| --------------- | ----------- | ------- |
| `start` | Specifies the starting offset for the audiences returned. | `start=5` |
| `limit` | Specifies the maximum number of audiences returned per page. | `limit=10` |
| `sort` | Specifies the order to sort the results by. This is written in the format `attributeName:[desc/asc]`. | `sort=updateTime:desc` |
| `property` | A filter that allows you to specify audiences that **exactly** match an attribute's value. This is written in the format `property=` | `property=audienceId==test-audience-id` |
| `name` | A filter that allows you to specify audiences whose names **contain** the provided value. This value is case insensitive. | `name=Sample` |
| `description` | A filter that allows you to specify audiences whose descriptions **contain** the provided value. This value is case insensitive.  | `description=Test Description` |

**Request**

The following request retrieves the last two audiences created in your organization.

+++A sample request to retrieve a list of audiences.

```shell
curl -X GET https: //platform.adobe.io/data/core/ups/audiences?limit=2 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status 200 with a list of audiences that were created in your organization as JSON.

+++A sample response that contains the last two created audiences that belong to your organization

```json
{
    "children": [
        {
            "id": "60ccea95-1435-4180-97a5-58af4aa285ab",
            "audienceId": "60ccea95-1435-4180-97a5-58af4aa285ab",
            "schema": {
                "name": "_xdm.context.profile"
            },
            "ttlInDays": 60,
            "profileInstanceId": "ups",
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxId": "6ed34f6f-fe21-4a30-934f-6ffe21fa3075",
                "sandboxName": "prod",
                "type": "production",
                "default": true
            },
            "name": "People who ordered in the last 30 days",
            "description": "Last 30 days",
            "expression": {
                "type": "PQL",
                "format": "pql/text",
                "value": "workAddress.country = \"US\""
            },
            "mergePolicyId": "ef006bbe-750e-4e81-85f0-0c6902192dcc",
            "evaluationInfo": {
                "batch": {
                    "enabled": false
                },
                "continuous": {
                    "enabled": true
                },
                "synchronous": {
                    "enabled": false
                }
            },
            "dataGovernancePolicy": {
                "excludeOptOut": true
            },
            "isSystem": false,
            "creationTime": 1650374572000,
            "updateEpoch": 1650374573,
            "updateTime": 1650374573000,
            "createEpoch": 1650374572,
            "_etag": "\"33120d7c-0000-0200-0000-625eb7ad0000\"",
            "dependents": [],
            "definedOn": [
                {
                    "meta: resourceType": "unions",
                    "meta: containerId": "tenant",
                    "$ref": "https: //ns.adobe.com/xdm/context/profile__union"
                }
            ],
            "dependencies": [],
            "type": "SegmentDefinition",
            "originName": "REAL_TIME_CUSTOMER_PROFILE",
            "overridePerformanceWarnings": false,
            "createdBy": "{CREATED_BY_ID}",
            "lifecycleState": "published",
            "labels": [
                "core/C1"
            ],
            "namespace": "AEPSegments"
        },
        {
            "id": "32a83b5d-a118-4bd6-b3cb-3aee2f4c30a1",
            "audienceId": "test-external-audience-id",
            "name": "externalSegment1",
            "namespace": "aam",
            "imsOrgId": "{ORG_ID}",
            "sandbox":{
                "sandboxId": "6ed34f6f-fe21-4a30-934f-6ffe21fa3075",
                "sandboxName": "prod",
                "type": "production",
                "default": true
            },
            "isSystem": false,
            "description": "Last 30 days",
            "type": "ExternalSegment",
            "originName": "CUSTOM_UPLOAD",
            "lifecycleState": "published",
            "createdBy": "{CREATED_BY_ID}",
            "datasetId": "6254cf3c97f8e31b639fb14d",
            "labels":[
                "core/C1"
            ],
            "linkedAudienceRef": {
                "flowId": "4685ea90-d2b6-11ec-9d64-0242ac120002"
            },
            "creationTime": 1642745034000000,
            "updateEpoch": 1649926314,
            "updateTime": 1649926314000,
            "createEpoch": 1642745034
        }
    ],
    "_page":{
      "totalCount": 111,
      "pageSize": 2,
      "next": "1"
   },
   "_links":{
      "next":{
         "href":"@/audiences?start=1&limit=2&totalCount=111"
      }
   }
}
```

| Property | Audience type | Description |
| -------- | ------------- | ----------- | 
| `id` | Both | A system-generated read-only identifier for the audience. |
| `audienceId` | Both | If the audience is a Platform-generated audience, this is the same value as the `id`. If the audience is externally generated, this value is provided by the client. |
| `schema` | Both | The Experience Data Model (XDM) schema of the audience. |
| `imsOrgId` | Both | The ID of the organization that the audience belongs to. |
| `sandbox` | Both | Information about the sandbox that the audience belongs to. More information about sandboxes can be found in the [sandboxes overview](../../sandboxes/home.md). |
| `name` | Both | The name of the audience. |
| `description` | Both | A description of the audience. |
| `expression` | Platform-generated | The Profile Query Language (PQL) expression of the audience. More information about PQL expressions can be found in the [PQL expressions guide](../pql/overview.md). |
| `mergePolicyId` | Platform-generated | The ID of the merge policy that the audience is associated with. More information about merge policies can be found in the [merge policies guide](../../profile/api/merge-policies.md). |
| `evaluationInfo` | Platform-generated | Shows how the audience will be evaluated. Possible evaluation methods include batch, synchronous (streaming), or continuous (edge). More information about the evaluation methods can be found in the [segmentation overview](../home.md) |
| `dependents` | Both | An array of audience IDs that depend on the current audience. This would be used if you are creating an audience that is a segment of a segment. |
| `dependencies` | Both | An array of audience IDs that the audience depends on. This would be used if you are creating an audience that is a segment of a segment. |
| `type` | Both | A system-generated field that displays whether the audience is Platform-generated or is an externally generated audience. Possible values include `SegmentDefinition` and `ExternalSegment`. A `SegmentDefinition` refers to an audience that was generated in Platform, while an `ExternalSegment` refers to an audience that was not generated in Platform. |
| `originName` | Both | A field that refers to the name of the audience's origin. For Platform-generated audiences, this value will be `REAL_TIME_CUSTOMER_PROFILE`. For audiences generated in Audience Orchestration, this value will be `AUDIENCE_ORCHESTRATION`. For audiences generated in Adobe Audience Manager, this value will be `AUDIENCE_MANAGER`. For other externally generated audiences, this value will be `CUSTOM_UPLOAD`. |
| `createdBy` | Both | The ID of the user who created the audience. |
| `labels` | Both | Object-level data usage and attribute-based access control labels that are relevant to the audience. |
| `namespace` | Both | The namespace that the audience belongs to. Possible values include `AAM`, `AAMSegments`, `AAMTraits`, and `AEPSegments`. |
| `linkedAudienceRef` | Both | An object that contains identifiers to other audience-related systems. |

+++

## Create a new audience {#create}

You can create a new audience by making a POST request to the `/audiences` endpoint.

**API format**

```http
POST /audiences
```

**Request**

>[!BEGINTABS]

>[!TAB Platform-generated audience]

+++ A sample request for creating a Platform-generated audience

```shell
curl -X POST https://platform.adobe.io/data/core/ups/audiences
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
        "name": "People who ordered in the last 30 days",
        "profileInstanceId": "ups",
        "description": "Last 30 days",
        "type": "SegmentDefinition",
        "expression": {
            "type": "PQL",
            "format": "pql/text",
            "value": "workAddress.country = \"US\""
        },
        "schema": {
            "name": "_xdm.context.profile"
        },
        "labels": [
          "core/C1"
        ],
        "ttlInDays": 60
    }'
```

| Property | Description |
| -------- | ----------- | 
| `name` | The name of the audience. |
| `description` | A description of the audience. |
| `type` | A field that displays whether the audience is Platform-generated or is an externally generated audience. Possible values include `SegmentDefinition` and `ExternalSegment`. A `SegmentDefinition` refers to an audience that was generated in Platform, while an `ExternalSegment` refers to an audience that was not generated in Platform. |
| `expression` | The Profile Query Language (PQL) expression of the audience. More information about PQL expressions can be found in the [PQL expressions guide](../pql/overview.md). |
| `schema` | The Experience Data Model (XDM) schema of the audience. |
| `labels` | Object-level data usage and attribute-based access control labels that are relevant to the audience. |
| `ttlInDays` | Represents the data expiration value for the audience, in days. |

+++

>[!TAB Externally generated audience]

+++ A sample request for creating an externally generated audience

```shell
curl -X POST https://platform.adobe.io/data/core/ups/audiences
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
        "audienceId":"test-external-audience-id",
        "name":"externalAudience",
        "namespace":"aam",
        "description":"Last 30 days",
        "type":"ExternalSegment",
        "originName":"CUSTOM_UPLOAD",
        "lifecycleState":"published",
        "datasetId":"6254cf3c97f8e31b639fb14d",
        "labels":[
            "core/C1"
        ],
        "linkedAudienceRef":{
            "flowId": "4685ea90-d2b6-11ec-9d64-0242ac120002"
        }
    }'
```

| Property | Description |
| -------- | ----------- | 
| `audienceId` | A user-provided ID for the audience. |
| `name` | The name of the audience. |
| `namespace` | The namespace for the audience. |
| `description` | A description of the audience. |
| `type` | A field that displays whether the audience is Platform-generated or is an externally generated audience. Possible values include `SegmentDefinition` and `ExternalSegment`. A `SegmentDefinition` refers to an audience that was generated in Platform, while an `ExternalSegment` refers to an audience that was not generated in Platform. |
| `originName` | The name of the origin of the audience. For externally generated audiences, the default value of this is `CUSTOM_UPLOAD`. Other supported values include `REAL_TIME_CUSTOMER_PROFILE`, `CUSTOM_UPLOAD`, `AUDIENCE_ORCHESTRATION`, and `AUDIENCE_MATCH`. |
| `lifecycleState` | An optional field that determines the initial state of the audience you're trying to create. Supported values include `draft`, `published`, and `inactive`. |
| `datasetId` | The ID of the dataset where the data that comprises the audience can be found. |
| `labels` | Object-level data usage and attribute-based access control labels that are relevant to the audience. |
| `audienceMeta` | Metadata that belongs to the externally generated audience. |
| `linkedAudienceRef` | An object that contains identifiers for other audience-related systems. This can include the following: <ul><li>`flowId`: This ID is used to connect the audience to the dataflow that was used to bring in the audience data. More information about the IDs required can be found in the [create a dataflow guide](../../sources/tutorials/api/collect/cloud-storage.md).</li><li>`aoWorkflowId`: This ID is used to connect the audience to a related Audience Orchestration composition.</li/> <li>`payloadFieldGroupRef`: This ID is used to refer to the XDM Field Group schema that describes the structure of the audience. More information about the value of this field can be found in the [XDM Field Group endpoint guide](../../xdm/api/field-groups.md).</li><li>`audienceFolderId`: This ID is used to refer to the folder ID in Adobe Audience Manager for the audience. More information about this API can be found in the [Adobe Audience Manager API guide](https://bank.demdex.com/portal/swagger/index.html#/Segment%20Folder%20API).</ul> |

+++

>[!ENDTABS]

**Response**

A successful response returns HTTP status 200 with information about your newly created audience.

>[!BEGINTABS]

>[!TAB Platform-generated audience]

+++A sample response when creating a Platform-generated audience.

```json
{
    "id": "60ccea95-1435-4180-97a5-58af4aa285ab",
    "audienceId": "60ccea95-1435-4180-97a5-58af4aa285ab",
     "schema": {
      "name": "_xdm.context.profile"
    },
    "ttlInDays": 60,
    "profileInstanceId": "ups",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "6ed34f6f-fe21-4a30-934f-6ffe21fa3075",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "isSystem":false,     
    "name": "People who ordered in the last 30 days",
    "description": "Last 30 days",
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "workAddress.country = \"US\""
    },
    "mergePolicyId": "ef006bbe-750e-4e81-85f0-0c6902192dcc",
    "evaluationInfo": {
        "batch": {
          "enabled": false
        },
        "continuous": {
          "enabled": true
        },
        "synchronous": {
          "enabled": false
        }
    },
    "dataGovernancePolicy": {
      "excludeOptOut": true
    },
    "creationTime": 1650374572000,
    "updateEpoch": 1650374573,
    "updateTime": 1650374573000,
    "createEpoch": 1650374572,
    "_etag": "\"33120d7c-0000-0200-0000-625eb7ad0000\"",
    "dependents": [],
    "definedOn": [
        {
          "meta:resourceType": "unions",
          "meta:containerId": "tenant",
          "$ref": "https://ns.adobe.com/xdm/context/profile__union"
        }
    ],
    "dependencies": [],
    "type": "SegmentDefinition",
    "originName": "REAL_TIME_CUSTOMER_PROFILE",
    "overridePerformanceWarnings": false,
    "createdBy": "{CREATED_BY_ID}",
    "lifecycleState": "active",
    "labels": [
      "core/C1"
    ],
    "namespace": "AEPSegments"
}
```

+++

>[!TAB Externally generated audience]

+++A sample response when creating an externally generated audience.

```json
{
   "id": "322f9f62-cd27-11ec-9d64-0242ac120002",
   "audienceId": "test-external-audience-id",
   "name": "externalAudience",
   "namespace": "aam",
   "imsOrgId": "{ORG_ID}",
   "sandbox":{
      "sandboxId": "6ed34f6f-fe21-4a30-934f-6ffe21fa3075",
      "sandboxName": "prod",
      "type": "production",
      "default": true
   },
   "isSystem": false,
   "description": "Last 30 days",
   "type": "ExternalSegment",
   "originName": "CUSTOM_UPLOAD",
   "lifecycleState": "published",
   "createdBy": "{CREATED_BY_ID}",
   "datasetId": "6254cf3c97f8e31b639fb14d",
   "labels": [
      "core/C1"
   ],
   "linkedAudienceRef": {
      "flowId": "4685ea90-d2b6-11ec-9d64-0242ac120002"
   },
   "_etag": "\"f4102699-0000-0200-0000-625cd61a0000\"",
   "creationTime": 1650251290000,
   "updateEpoch": 1650251290,
   "updateTime": 1650251290000,
   "createEpoch": 1650251290
}
```

+++

## Look up a specified audience {#get}

You can look up detailed information about a specific audience by making a GET request to the `/audiences` endpoint and providing the ID of the audience you wish to retrieve in the request path.

**API format**

```http
GET /audiences/{AUDIENCE_ID}
```

| Parameter | Description |
| --------- | ----------- | 
| `{AUDIENCE_ID}` | The ID of the audience you are trying to retrieve. Please note that this is the `id` field, and is **not** the `audienceId` field. |

**Request**

+++A sample request for retrieving an audience

```shell
curl -X GET https://platform.adobe.io/data/core/ups/audiences/60ccea95-1435-4180-97a5-58af4aa285ab \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status 200 with information about the specified audience. The response will differ depending if the audience is generated with Adobe Experience Platform or external sources.

>[!BEGINTABS]

>[!TAB Platform-generated audience]

+++A sample response when retrieving a Platform-generated audience.

```json
{
    "id": "60ccea95-1435-4180-97a5-58af4aa285ab",
    "audienceId": "60ccea95-1435-4180-97a5-58af4aa285ab",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "ttlInDays": 60,
    "profileInstanceId": "ups",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "6ed34f6f-fe21-4a30-934f-6ffe21fa3075",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "isSystem": false,
    "name": "People who ordered in the last 30 days",
    "description": "Last 30 days",
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "workAddress.country = \"US\""
    },
    "mergePolicyId": "ef006bbe-750e-4e81-85f0-0c6902192dcc",
    "evaluationInfo": {
        "batch": {
            "enabled": false
        },
        "continuous": {
            "enabled": true
        },
        "synchronous": {
            "enabled": false
        }
    },
    "dataGovernancePolicy": {
        "excludeOptOut": true
    },
    "creationTime": 1650374572000,
    "updateEpoch": 1650374573,
    "updateTime": 1650374573000,
    "createEpoch": 1650374572,
    "_etag": "\"33120d7c-0000-0200-0000-625eb7ad0000\"",
    "dependents": [],
    "definedOn": [
        {
            "meta:resourceType": "unions",
            "meta:containerId": "tenant",
            "$ref": "https://ns.adobe.com/xdm/context/profile__union"
        }
    ],
    "dependencies": [],
    "type": "SegmentDefinition",
    "overridePerformanceWarnings": false,
    "createdBy": "{CREATED_BY_ID}",
    "lifecycleState": "active",
    "labels": [
        "core/C1"
    ],
    "namespace": "AEPSegments"
}
```

+++

>[!TAB Externally generated audience]

+++A sample response when retrieving an externally generated audience.

```json
{
    "id": "60ccea95-1435-4180-97a5-58af4aa285ab",
    "audienceId": "test-external-audience-id",
    "name": "externalAudience",
    "namespace": "aam",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "6ed34f6f-fe21-4a30-934f-6ffe21fa3075",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "isSystem": false,
    "description": "Last 30 days",
    "type": "ExternalSegment",
    "lifecycleState": "active",
    "createdBy": "{CREATED_BY_ID}",
    "datasetId": "6254cf3c97f8e31b639fb14d",
    "labels": [
        "core/C1"
    ],
    "_etag": "\"f4102699-0000-0200-0000-625cd61a0000\"",
    "creationTime": 1650251290000,
    "updateEpoch": 1650251290,
    "updateTime": 1650251290000,
    "createEpoch": 1650251290
}
```

+++

>[!ENDTABS]

## Update a field in an audience {#update-field}

You can update the fields of specific audience by making a PATCH request to the `/audiences` endpoint and providing the ID of the audience you wish to update in the request path.

**API format**

```http
PATCH /audiences/{AUDIENCE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{AUDIENCE_ID}` | The ID of the audience that you want to update. Please note that this is the `id` field, and is **not** the `audienceId` field. |

**Request**
 
+++A sample request to update a field in an audience.

```shell
curl -X PATCH https://platform.adobe.io/data/core/ups/audiences/4afe34ae-8c98-4513-8a1d-67ccaa54bc05 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
     [
        {
            "op": "add",
            "path": "/expression",
            "value": {
                "type": "PQL",
                "format": "pql/text",
                "value": "workAddress.country = \"CA\""
            }
        }
      ]'
```

| Property | Description |
| -------- | ----------- |
| `op` | For updating audiences, this value is always `add`. |
| `path` | The path of the field you want to update. |
| `value` | The value that you want to update the field to. |

+++

**Response**

A successful response returns HTTP status 200 with information about your newly updated audience.

+++A sample response when updating a field in an audience.

```json
{
    "id": "60ccea95-1435-4180-97a5-58af4aa285ab",
    "audienceId": "60ccea95-1435-4180-97a5-58af4aa285ab",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "ttlInDays": 60,
    "profileInstanceId": "ups",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "6ed34f6f-fe21-4a30-934f-6ffe21fa3075",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "name": "People who ordered in the last 30 days",
    "description": "Last 30 days",
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "workAddress.country = \"CA\""
    },
    "mergePolicyId": "ef006bbe-750e-4e81-85f0-0c6902192dcc",
    "evaluationInfo": {
        "batch": {
          "enabled": false
        },
        "continuous": {
          "enabled": true
        },
        "synchronous": {
          "enabled": false
        }
    },
    "dataGovernancePolicy": {
      "excludeOptOut": true
    },
    "creationTime": 1650374572000,
    "updateEpoch": 1650374573,
    "updateTime": 1650374573000,
    "createEpoch": 1650374572,
    "_etag": "\"33120d7c-0000-0200-0000-625eb7ad0000\"",
    "dependents": [],
    "definedOn": [
        {
          "meta:resourceType": "unions",
          "meta:containerId": "tenant",
          "$ref": "https://ns.adobe.com/xdm/context/profile__union"
        }
    ],
    "dependencies": [],
    "type": "SegmentDefinition",
    "overridePerformanceWarnings": false,
    "createdBy": "{CREATED_BY_ID}",
    "lifecycleState": "active",
    "labels": [
      "core/C1"
    ],
    "namespace": "AEPSegments"
}
```

+++

## Update an audience {#put}

You can update (overwrite) a specific audience by making a PUT request to the `/audiences` endpoint and providing the ID of the audience you wish to update in the request path.

**API format**

```http
PUT /audiences/{AUDIENCE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{AUDIENCE_ID}` | The ID of the audience that you want to update. Please note that this is the `id` field, and is **not** the `audienceId` field. |

**Request**

+++A sample request for updating an entire audience.

```shell
curl -X PUT https://platform.adobe.io/data/core/ups/audiences/4afe34ae-8c98-4513-8a1d-67ccaa54bc05 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '{
    "audienceId": "test-external-audience-id",
    "name": "New external audience",
    "namespace": "aam",
    "description": "Last 30 days",
    "type": "ExternalSegment",
    "lifecycleState": "published",
    "datasetId": "6254cf3c97f8e31b639fb14d",
    "labels": [
        "core/C1"
    ]
}' 
```

| Property | Description |
| -------- | ----------- | 
| `audienceId` | The ID of the audience. For externally generated audiences, this value may be supplied by the user.  |
| `name` | The name of the audience. |
| `namespace` | The namespace for the audience. |
| `description` | A description of the audience. |
| `type` | A system-generated field that displays whether the audience is Platform-generated or is an externally generated audience. Possible values include `SegmentDefinition` and `ExternalSegment`. A `SegmentDefinition` refers to an audience that was generated in Platform, while an `ExternalSegment` refers to an audience that was not generated in Platform. |
| `lifecycleState` | The status of the audience. Possible values include `draft`, `published`, and `inactive`. `draft` represents when the audience is created, `published` when the audience is published, and `inactive` when the audience is no longer active. |
| `datasetId` | The ID of the dataset that the audience data can be found. |
| `labels` | Object-level data usage and attribute-based access control labels that are relevant to the audience. |

+++

**Response**

A successful response returns HTTP status 200 with details of your newly updated audience. Please note that the details of your audience will differ depending if it is a Platform-generated audience or an externally generated audience.

+++A sample response when updating an entire audience.

```json
{
    "id": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
    "audienceId": "test-external-audience-id",
    "name": "New external audience",
    "namespace": "aam",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "6ed34f6f-fe21-4a30-934f-6ffe21fa3075",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "description": "Last 30 days",
    "type": "ExternalSegment",
    "lifecycleState": "published",
    "createdBy": "{CREATED_BY_ID}",
    "datasetId": "6254cf3c97f8e31b639fb14d",
    "_etag": "\"f4102699-0000-0200-0000-625cd61a0000\"",
    "creationTime": 1650251290000,
    "updateEpoch": 1650251290,
    "updateTime": 1650251290000,
    "createEpoch": 1650251290
}
```

+++

## Delete an audience {#delete}

You can delete a specific audience by making a DELETE request to the `/audiences` endpoint and providing the ID of the audience you wish to delete in the request path.

**API format**

```http
DELETE /audiences/{AUDIENCE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{AUDIENCE_ID}` | The ID of the audience that you want to delete. Please note that this is the `id` field, and is **not** the `audienceId` field. |

**Request**

+++ A sample request for deleting an audience.

```shell
curl -X DELETE https://platform.adobe.io/data/core/ups/audiences/60ccea95-1435-4180-97a5-58af4aa285ab5 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

+++

**Response**

A successful response returns HTTP status 204 with no message.

## Retrieve multiple audiences {#bulk-get}

You can retrieve multiple audiences by making a POST request to the `/audiences/bulk-get` endpoint and providing the IDs of the audiences you wish to retrieve.

**API format**

```http
POST /audiences/bulk-get
```

**Request**

+++ A sample request for retrieving multiple audiences.

```shell
curl -X POST https://platform.adobe.io/data/core/ups/audiences/bulk-get
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d ' {
    "ids": [
        {
            "id": "72c393ea-caed-441a-9eb6-5f66bb1bd6cd"
        },
        {
            "id": "QU9fLTEzOTgzNTE0MzY0NzY0NDg5NzkyOTkx_6ed34f6f-fe21-4a30-934f-6ffe21fa3075"
        }
    ]
 }
```

+++

**Response**

A successful response returns HTTP status 207 with information with your requested audiences.

+++ A sample response when retrieving multiple audiences.

```json
{
   "results":{
      "72c393ea-caed-441a-9eb6-5f66bb1bd6cd":{
         "id": "72c393ea-caed-441a-9eb6-5f66bb1bd6cd",
         "audienceId": "72c393ea-caed-441a-9eb6-5f66bb1bd6cd",
         "schema": {
            "name": "_xdm.context.profile"
         },
         "ttlInDays": 30,
         "imsOrgId": "{ORG_ID}",
         "sandbox": {
            "sandboxId": "6ed34f6f-fe21-4a30-934f-6ffe21fa3075",
            "sandboxName": "prod",
            "type": "production",
            "default": true
         },
         "name": "Sample audience",
         "expression": {
            "type": "pql",
            "format": "pql/text",
            "value": "_id = \"abc\""         
        },
         "mergePolicyId": "87c94d51-239c-4391-932c-29c2412100e5",
         "evaluationInfo": {
            "batch": {
               "enabled": false
            },
            "continuous": {
               "enabled": true
            },
            "synchronous": {
               "enabled": false
            }
         },
         "ansibleUiEnabled": false,
         "dataGovernancePolicy": {
            "excludeOptOut": true
         },
         "creationTime": 1623889553000000,
         "updateEpoch": 1674646369,
         "updateTime": 1674646369000,
         "createEpoch": 1623889552,
         "_etag": "\"61030ec7-0000-0200-0000-63d113610000\"",
         "dependents": [],
         "definedOn": [
            {
               "meta:resourceType": "unions",
               "meta:containerId": "tenant",
               "$ref": "https://ns.adobe.com/xdm/context/profile__union"
            }
         ],
         "dependencies": [],
         "type": "SegmentDefinition",
         "state": "enabled",
         "overridePerformanceWarnings": false,
         "lastModifiedBy": "{CREATED_ID}",
         "lifecycleState": "published",
         "namespace": "AEPSegments",
         "isSystem": false,
         "saveSegmentMembership": true,
         "originName": "REAL_TIME_CUSTOMER_PROFILE"
      },
      "QU9fLTEzOTgzNTE0MzY0NzY0NDg5NzkyOTkx_6ed34f6f-fe21-4a30-934f-6ffe21fa3075":{
         "id": "QU9fLTEzOTgzNTE0MzY0NzY0NDg5NzkyOTkx_6ed34f6f-fe21-4a30-934f-6ffe21fa3075",
         "name": "label test24764489707692",
         "namespace": "AO",
         "imsOrgId": "{ORG_ID}",
         "sandbox":{
            "sandboxId": "6ed34f6f-fe21-4a30-934f-6ffe21fa3075",
            "sandboxName": "prod",
            "type": "production",
            "default": true
         },
         "type": "ExternalSegment",
         "lifecycleState": "published",
         "sourceId": "source-id",
         "createdBy": "{USER_ID}",
         "datasetId": "62bf31a105e9891b63525c92",
         "_etag": "\"3100da6d-0000-0200-0000-62bf31a10000\"",
         "creationTime": 1656697249000,
         "updateEpoch": 1656697249,
         "updateTime": 1656697249000,
         "createEpoch": 1656697249,
         "audienceId": "test-audience-id",
         "isSystem": false,
         "saveSegmentMembership": true,
         "linkedAudienceRef": {
            "aoWorkflowId": "62bf31858e87e34c8364befa"
         },
         "originName": "AUDIENCE_ORCHESTRATION"
      }
   }
}
```

+++


## Next steps

After reading this guide, you now have a better understanding of how to create, manage, and delete audiences using the Adobe Experience Platform API. For more information about audience management using the UI, please read the [segmentation UI guide](../ui/overview.md).
