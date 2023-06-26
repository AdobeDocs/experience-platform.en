---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segmentation Service;audiences;audience;API;api;
title: Audiences API Endpoint
description: The audiences endpoint in the Adobe Experience Platform Segmentation Service API allows you to programmatically manage audiences for your organization.
exl-id: cb1a46e5-3294-4db2-ad46-c5e45f48df15
hide: true
hidefromtoc: true
---
# Audiences endpoint

>[!IMPORTANT]
>
>The audience endpoint is currently in beta and is not available to all users. The documentation and the functionality are subject to change.

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
| `withMetrics` | A filter that returns the metrics in addition to the audiences. | `property=withMetrics==true` |

>[!IMPORTANT]
>
>For audiences, metrics are returned under the `metrics` attribute, and contains information on profile counts, creation, and update timestamps.

**No metrics**

The following request/response pair is used when the `withMetrics` query parameter is not present.

**Request**

The following request retrieves the last five audiences created in your organization.

```shell
curl -X GET https://platform.adobe.io/data/core/ups/audiences?limit=5 \
 -H 'Authorization:  Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id:  {IMS_ORG}' \
 -H 'x-api-key:  {API_KEY}' \
 -H 'x-sandbox-name:  {SANDBOX_NAME}'
```

**Response** {#no-metrics}

A successful response returns HTTP status 200 with a list of audiences that were created in your organization as JSON.

>[!NOTE]
>
>The following response has been truncated for space, and shows only the first audience returned.

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
            "overridePerformanceWarnings": false,
            "createdBy": "{CREATED_BY_ID}",
            "lifecycle": "published",
            "labels": [
                "core/C1"
            ],
            "namespace": "AEPSegments"
        }
    ]
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
| `evaluationInfo` | Platform-generated | Shows how the audience will be evaluated. Possible evaluation methods include batch, streaming, or edge. More information about the evaluation methods can be found in the [segmentation overview](../home.md) |
| `dependents` | Both | An array of audience IDs that depend on the current audience. This would be used if you are creating an audience that is a segment of a segment. |
| `dependencies` | Both | An array of audience IDs that the audience depends on. This would be used if you are creating an audience that is a segment of a segment. |
| `type` | Both | A system-generated field that displays whether the audience is Platform-generated or is an externally generated audience. Possible values include `SegmentDefinition` and `ExternalAudience`. A `SegmentDefinition` refers to an audience that was generated in Platform, while an `ExternalAudience` refers to an audience that was not generated in Platform. |
| `createdBy` | Both | The ID of the user who created the audience. |
| `labels` | Both | Object-level data usage and attribute-based access control labels that are relevant to the audience. |
| `namespace` | Both | The namespace that the audience belongs to. Possible values include `AAM`, `AAMSegments`, `AAMTraits`, and `AEPSegments`. |
| `audienceMeta` | External | Externally-created metadata from the externally created audience. |

**With metrics**

The following request/response pair is used when the `withMetrics` query parameter is present.

**Request**

The following request retrieves the last five audiences, with metrics, created in your organization.

```shell
curl -X GET https://platform.adobe.io/data/core/ups/audiences?propoerty=withMetrics==true&limit=5&sort=totalProfiles:desc \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with a list of audiences, with metrics, for the specified organization as JSON.

>[!NOTE]
>
>The following response has been truncated for space, and shows only the first audience returned.

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
                    "meta: resourceType": "unions",
                    "meta: containerId": "tenant",
                    "$ref": "https: //ns.adobe.com/xdm/context/profile__union"
                }
            ],
            "dependencies": [],
            "metrics": {
                "type": "export",
                "jobId": "test-job-id",
                "id": "32a83b5d-a118-4bd6-b3cb-3aee2f4c30a1",
                "data": {
                    "totalProfiles": 11200769,
                    "totalProfilesByNamespace": {
                        "crmid": 11400769
                    },
                    "totalProfilesByStatus": {
                        "realized": 11400769
                    }
                },
                "createEpoch": 1653583927,
                "updateEpoch": 1653583927
            },
            "type": "SegmentDefinition",
            "overridePerformanceWarnings": false,
            "createdBy": "{CREATED_BY_ID}",
            "lifecycle": "published",
            "labels": [
                "core/C1"
            ],
            "namespace": "AEPSegments"
        }
   ],
   "_page": {
      "totalCount": 111,
      "pageSize": 5,
      "next": "1"
   },
   "_links": {
      "next": {
         "href": "@/audiences?start=1&limit=5&totalCount=111"
      }
   }
}
```

The following lists properties **exclusive** to the `withMetrics` response. If you want to know the standard audience properties, please read the [previous section](#no-metrics).

| Property | Description |
| -------- | ----------- |
| `metrics.imsOrgId` | The organization ID of the audience. |
| `metrics.sandbox` | The sandbox information related to the audience. |
| `metrics.jobId` | The ID of the segment job that is processing the audience. |
| `metrics.type` | The segment job type. This can either be `export` or `batch_segmentation`. |
| `metrics.id` | The audience's ID. |
| `metrics.data` | Metrics that are related to the audience. This includes information such as the total number of profiles included in the audience, the total number of profiles on a per-namespace basis, and the total number of profiles on a per-status basis. |
| `metrics.createEpoch` | A timestamp that shows when the audience was created. |
| `metrics.updateEpoch` | A timestamp that shows when the audience was last updated. |

## Create a new audience {#create}

You can create a new audience by making a POST request to the `/audiences` endpoint.

**API format**

```http
POST /audiences
```

**Request**

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
        ]
    }'
```

| Property | Description |
| -------- | ----------- | 
| `name` | The name of the audience. |
| `description` | A description of the audience. |
| `type` | A field that displays whether the audience is Platform-generated or is an externally generated audience. Possible values include `SegmentDefinition` and `ExternalAudience`. A `SegmentDefinition` refers to an audience that was generated in Platform, while an `ExternalAudience` refers to an audience that was not generated in Platform. |
| `expression` | The Profile Query Language (PQL) expression of the audience. More information about PQL expressions can be found in the [PQL expressions guide](../pql/overview.md). |
| `schema` | The Experience Data Model (XDM) schema of the audience. |
| `labels` | Object-level data usage and attribute-based access control labels that are relevant to the audience. |

**Response**

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
    "overridePerformanceWarnings": false,
    "createdBy": "{CREATED_BY_ID}",
    "lifecycle": "active",
    "labels": [
      "core/C1"
    ],
    "namespace": "AEPSegments"
}
```

## Look up a specified audience {#get}

You can look up detailed information about a specific audience by making a GET request to the `/audiences` endpoint and providing the ID of the audience you wish to retrieve in the request path.

**API format**

```http
GET /audiences/{AUDIENCE_ID}
GET /audiences/{AUDIENCE_ID}?property=withmetrics==true
```

| Parameter | Description |
| --------- | ----------- | 
| `{AUDIENCE_ID}` | The ID of the audience you are trying to retrieve. |
| `property=withmetrics==true` | An optional query parameter that you can use if want to retrieve a specified audience with the audience metrics. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/core/ups/audiences/60ccea95-1435-4180-97a5-58af4aa285ab \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with information about the specified audience. The response will differ depending if the audience is generated with Adobe Experience Platform or external sources.

**Platform-generated**

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
    "lifecycle": "active",
    "labels": [
        "core/C1"
    ],
    "namespace": "AEPSegments"
}
```

**Externally generated**

```json
{
    "id": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
    "audienceId": "test-external-audience-id",
    "name": "externalSegment1",
    "namespace": "aam",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "6ed34f6f-fe21-4a30-934f-6ffe21fa3075",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "isSystem":false,
    "description": "Last 30 days",
    "type": "ExternalSegment",
    "lifecycle": "active",
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

## Update a field in an audience {#update-field}

You can update the fields of specific audience by making a PATCH request to the `/audiences` endpoint and providing the ID of the audience you wish to update in the request path.

**API format**

```http
PATCH /audiences/{AUDIENCE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{AUDIENCE_ID}` | The ID of the audience that you want to update. |

**Request**

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

**Response**

A successful response returns HTTP status 200 with information about your newly updated audience.

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
    "lifecycle": "active",
    "labels": [
      "core/C1"
    ],
    "namespace": "AEPSegments"
}
```

## Update an audience {#put}

You can update (overwrite) a specific audience by making a PUT request to the `/audiences` endpoint and providing the ID of the audience you wish to update in the request path.

**API format**

```http
PUT /audiences/{AUDIENCE_ID}
```

**Request**

```shell
curl -X PUT https://platform.adobe.io/data/core/ups/audiences/4afe34ae-8c98-4513-8a1d-67ccaa54bc05 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '{
    "audienceId":"test-external-audience-id",
    "name":"new externalSegment",
    "namespace":"aam",
    "description":"Last 30 days",
    "type":"ExternalSegment",
    "lifecycle":"published",
    "datasetId":"6254cf3c97f8e31b639fb14d",
    "labels":[
        "core/C1"
    ]
}' 
```

| Property | Description |
| -------- | ----------- | 
| `audienceId` | The ID of the audience. This is used by external audiences  |
| `name` | The name of the audience. |
| `namespace` | |
| `description` | A description of the audience. |
| `type` | A system-generated field that displays whether the audience is Platform-generated or is an externally generated audience. Possible values include `SegmentDefinition` and `ExternalAudience`. A `SegmentDefinition` refers to an audience that was generated in Platform, while an `ExternalAudience` refers to an audience that was not generated in Platform. |
| `lifecycle` | The status of the audience. Possible values include `draft`, `published`, `inactive`, and `archived`. `draft` represents when the audience is created, `published` when the audience is published, `inactive` when the audience is no longer active, and `archived` if the audience is deleted. |
| `datasetId` | The ID of the dataset that the audience data can be found. |
| `labels` | Object-level data usage and attribute-based access control labels that are relevant to the audience. |

**Response**

A successful response returns HTTP status 200 with details of your newly updated audience. Please note that the details of your audience will differ depending if it is a Platform-generated audience or an externally generated audience.

```json
{
    "id": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
    "audienceId": "test-external-audience-id",
    "name": "new externalSegment",
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
    "lifecycle": "published",
    "createdBy": "{CREATED_BY_ID}",
    "datasetId": "6254cf3c97f8e31b639fb14d",
    "_etag": "\"f4102699-0000-0200-0000-625cd61a0000\"",
    "creationTime": 1650251290000,
    "updateEpoch": 1650251290,
    "updateTime": 1650251290000,
    "createEpoch": 1650251290
}
```

## Delete an audience {#delete}

You can delete a specific audience by making a DELETE request to the `/audiences` endpoint and providing the ID of the audience you wish to delete in the request path.

**API format**

```http
DELETE /audiences/{AUDIENCE_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{AUDIENCE_ID}` | The ID of the audience that you want to delete. |

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/core/ups/audiences/60ccea95-1435-4180-97a5-58af4aa285ab5 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {IMS_ORG}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 204 with no message.
