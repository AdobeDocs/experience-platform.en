---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segmentation Service;segment definition;segment definitions;api;API;
solution: Experience Platform
title: Segment Definitions API Endpoint
description: The segment definitions endpoint in the Adobe Experience Platform Segmentation Service API allows you to programmatically manage segment definitions for your organization.
exl-id: e7811b96-32bf-4b28-9abb-74c17a71ffab
---
# Segment definitions endpoint

Adobe Experience Platform allows you to create segments that define a group of specific attributes or behaviors from a group of profiles. A segment definition is an object that encapsulates a query written in [!DNL Profile Query Language] (PQL). This object is also called a PQL predicate. PQL predicates define the rules for the segment based on conditions related to any record or time-series data you supply to [!DNL Real-Time Customer Profile]. See the [PQL guide](../pql/overview.md) for more information on writing PQL queries.

This guide provides information to help you better understand segment definitions and includes sample API calls for performing basic actions using the API.

## Getting started

The endpoints used in this guide are part of the [!DNL Adobe Experience Platform Segmentation Service] API. Before continuing, please review the [getting started guide](./getting-started.md) for important information that you need to know in order to successfully make calls to the API, including required headers and how to read example API calls.

## Retrieve a list of segment definitions {#list}

You can retrieve a list of all segment definitions for your organization by making a GET request to the `/segment/definitions` endpoint.

**API format**

The `/segment/definitions` endpoint supports several query parameters to help filter your results. While these parameters are optional, their use is strongly recommended to help reduce expensive overhead. Making a call to this endpoint with no parameters will retrieve all segment definitions available for your organization. Multiple parameters can be included, separated by ampersands (`&`). 

```http
GET /segment/definitions
GET /segment/definitions?{QUERY_PARAMETERS}
```

**Query parameters**

| Parameter | Description | Example |
| --------- | ----------- | ------- |
| `start` | Specifies the starting offset for the segment definitions returned. | `start=4` |
| `limit` | Specifies the number of segment definitions returned per page. | `limit=20` |
| `page` | Specifies which page the results of segment definitions will start from. | `page=5` |
| `sort` | Specifies which field to sort the results by. Is written in the following format: `[attributeName]:[desc|asc]`.  | `sort=updateTime:desc` |
| `evaluationInfo.continuous.enabled` | Specifies if the segment definition is streaming-enabled. | `evaluationInfo.continuous.enabled=true` |

**Request**

The following request will retrieve the last two segment definitions posted within your organization.

```shell
curl -X GET https://platform.adobe.io/data/core/ups/segment/definitions?limit=2 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with a list of segment definitions for the specified organization as JSON.

```json
{
    "segments": [
        {
            "id": "3da8bad9-29fb-40e0-b39e-f80322e964de",
            "schema": {
                "name": "_xdm.context.profile"
            },
            "ttlInDays": 30,
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxId": "28e74200-e3de-11e9-8f5d-7f27416c5f0d",
                "sandboxName": "prod",
                "type": "production",
                "default": true
            },
            "name": "segment",
            "description": "",
            "expression": {
                "type": "PQL",
                "format": "pql/json",
                "value": "{PQL_EXPRESSION}"
            },
            "mergePolicyId": "b83185bb-0bc6-489c-9363-0075eb30b4c8",
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
            "dataGovernancePolicy": {
                "excludeOptOut": true
            },
            "creationTime": 1573253640000,
            "baselineTime": 1574327114,
            "updateEpoch": 1575588309,
            "updateTime": 1575588309000
        },
        {
            "id": "ca763983-5572-4ea4-809c-b7dff7e0d79b",
            "schema": {
                "name": "_xdm.context.profile"
            },
            "ttlInDays": 30,
            "imsOrgId": "{ORG_ID}",
            "name": "test segment",
            "description": "",
            "expression": {
                "type": "PQL",
                "format": "pql/json",
                "value": "{PQL_EXPRESSION}"
            },
            "mergePolicyId": "b83185bb-0bc6-489c-9363-0075eb30b4c8",
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
            "dataGovernancePolicy": {
                "excludeOptOut": true
            },
            "creationTime": 1561073779000,
            "baselineTime": 1574327114,
            "updateEpoch": 1574327114,
            "updateTime": 1574327114000
        }
    ],
    "page": {
        "totalCount": 2,
        "totalPages": 1,
        "sortField": "creationTime",
        "sort": "desc",
        "pageSize": 2,
        "limit": 100
    },
    "link": {}
}
```

## Create a new segment definition {#create}

You can create a new segment definition by making a POST request to the `/segment/definitions` endpoint.

**API format**

```http
POST /segment/definitions
```

**Request**

```shell 
curl -X POST https://platform.adobe.io/data/core/ups/segment/definitions
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
        "name": "People who ordered in the last 30 days",
        "profileInstanceId": "ups",
        "description": "Last 30 days",
        "expression": {
            "type": "PQL",
            "format": "pql/text",
            "value": "workAddress.country = \"US\""
        },
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
        "schema": {
            "name": "_xdm.context.profile"
        },
        "payloadSchema": "string",
        "ttlInDays": 60
    }'
```

| Property | Description |
| -------- | ----------- |
| `name` | **Required.** A unique name by which to refer to the segment. |
| `description` | A description of the segment definition you are creating. |
| `evaluationInfo` | The type of segment you are creating. If you want to create a batch segment, set `evaluationInfo.batch.enabled` to be true. If you want to create a streaming segment, set `evaluationInfo.continuous.enabled` to be true. If you want to create an edge segment, set `evaluationInfo.synchronous.enabled` to be true. If left empty, the segment will be created as a **batch** segment. |
| `schema` | **Required.** The schema associated with the entities in the segment. Consists of either an `id` or `name` field. |
| `expression` | **Required.** An entity that contains fields information about the segment definition. |
| `expression.type` | Specifies the expression type. Currently, only "PQL" is supported. |
| `expression.format` | Indicates the structure of the expression in value. Currently, the following format is supported: <ul><li>`pql/text`: A textual representation of a segment definition, according to the published PQL grammar.  For example, `workAddress.stateProvince = homeAddress.stateProvince`.</li></ul> |
| `expression.value` | An expression that conforms to the type indicated in `expression.format`. |
| `description` | A human-readable description of the definition. |

>[!NOTE]
>
>A segment definition expression may also reference a computed attribute. To learn more, please refer to the [computed attribute API endpoint guide](../../profile/computed-attributes/ca-api.md)
>
>Computed attribute functionality is in alpha and is not available to all users. Documentation and functionality are subject to change.

**Response**

A successful response returns HTTP status 200 with details of your newly created segment definition.

```json
{
    "id": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "ttlInDays": 60,
    "profileInstanceId": "ups",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "28e74200-e3de-11e9-8f5d-7f27416c5f0d",
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
    "dataGovernancePolicy": {
        "excludeOptOut": true
    },
    "creationTime": 0,
    "updateEpoch": 1579292094,
    "updateTime": 1579292094000
}
```

| Property | Description |
| -------- | ----------- |
| `id` | A system-generated ID of your newly created segment definition. |
| `evaluationInfo` | An object that indicates what type of evaluation the segment definition will undergo. It can be batch, streaming (also known as continuous), or edge (also known as synchronous) segmentation. |

## Retrieve a specific segment definition {#get}

You can retrieve detailed information about a specific segment definition by making a GET request to the `/segment/definitions` endpoint and providing the ID of the segment definition you wish to retrieve in the request path.

**API format**

```http
GET /segment/definitions/{SEGMENT_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{SEGMENT_ID}` | The `id` value of the segment definition you want to retrieve. |

**Request**

```shell
curl -X GET https://platform.adobe.io/data/core/ups/segment/definitions/4afe34ae-8c98-4513-8a1d-67ccaa54bc05 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with detailed information about the specified segment definition.

```json
{
    "id": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "ttlInDays": 60,
    "profileInstanceId": "ups",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "28e74200-e3de-11e9-8f5d-7f27416c5f0d",
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
    "dataGovernancePolicy": {
        "excludeOptOut": true
    },
    "creationTime": 0,
    "updateEpoch": 1579292094,
    "updateTime": 1579292094000
}
```

| Property | Description |
| -------- | ----------- |
| `id` | A system-generated read-only ID of the segment definition. |
| `name` | A unique name by which to refer to the segment. |
| `schema` | The schema associated with the entities in the segment. Consists of either an `id` or `name` field. |
| `expression` | An entity that contains fields information about the segment definition. |
| `expression.type` | Specifies the expression type. Currently, only "PQL" is supported. |
| `expression.format` | Indicates the structure of the expression in value. Currently, the following format is supported: <ul><li>`pql/text`: A textual representation of a segment definition, according to the published PQL grammar.  For example, `workAddress.stateProvince = homeAddress.stateProvince`.</li></ul> |
| `expression.value` | An expression that conforms to the type indicated in `expression.format`. |
| `description` | A human readable description of the definition. |
| `evaluationInfo` | An object that indicates what type of evaluation, batch, streaming (also known as continuous), or edge (also known as synchronous), the segment definition will undergo. |

## Bulk retrieve segment definitions {#bulk-get}

You can retrieve detailed information about multiple specified segment definitions by making a POST request to the `/segment/definitions/bulk-get` endpoint and providing the `id` values of the segment definitions in the request body.

**API format**

```http
POST /segment/definitions/bulk-get
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/core/ups/segment/definitions/bulk-get \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
        "ids": [
            {
                "id": "54669488-03ab-4e0d-a694-37fe49e32be8"
            },
            {
                "id": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05"
            }
        ]
    }'
```

**Response**

A successful response returns HTTP status 207 with the requested segment definitions.

```json
{
    "results": {
        "54669488-03ab-4e0d-a694-37fe49e32be8": {
            "id": "54669488-03ab-4e0d-a694-37fe49e32be8",
            "schema": {
                "name": "_xdm.context.profile"
            },
            "ttlInDays": 60,
            "profileInstanceId": "ups",
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxId": "28e74200-e3de-11e9-8f5d-7f27416c5f0d",
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
            "dataGovernancePolicy": {
                "excludeOptOut": true
            },
            "creationTime": 0,
            "updateEpoch": 1579292094,
            "updateTime": 1579292094000
        },
        "4afe34ae-8c98-4513-8a1d-67ccaa54bc05": {
            "id": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
            "schema": {
                "name": "_xdm.context.profile"
            },
            "ttlInDays": 60,
            "profileInstanceId": "ups",
            "imsOrgId": "{ORG_ID}",
            "sandbox": {
                "sandboxId": "28e74200-e3de-11e9-8f5d-7f27416c5f0d",
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
            "dataGovernancePolicy": {
                "excludeOptOut": true
            },
            "creationTime": 0,
            "updateEpoch": 1579292094,
            "updateTime": 1579292094000
        }

    }
}
```

| Property | Description |
| -------- | ----------- |
| `id` | A system-generated read-only ID of the segment definition. |
| `name` | A unique name by which to refer to the segment. |
| `schema` | The schema associated with the entities in the segment. Consists of either an `id` or `name` field. |
| `expression` | An entity that contains fields information about the segment definition. |
| `expression.type` | Specifies the expression type. Currently, only "PQL" is supported. |
| `expression.format` | Indicates the structure of the expression in value. Currently, the following format is supported: <ul><li>`pql/text`: A textual representation of a segment definition, according to the published PQL grammar.  For example, `workAddress.stateProvince = homeAddress.stateProvince`.</li></ul> |
| `expression.value` | An expression that conforms to the type indicated in `expression.format`. |
| `description` | A human readable description of the definition. |
| `evaluationInfo` | An object that indicates what type of evaluation, batch, streaming (also known as continuous), or edge (also known as synchronous), the segment definition will undergo. |

## Delete a specific segment definition {#delete}

You can request to delete a specific segment definition by making a DELETE request to the `/segment/definitions` endpoint and providing the ID of the segment definition you wish to delete in the request path.

>[!NOTE]
>
> You will **not** be able to delete a segment that is used in a destination activation.

**API format**

```http
DELETE /segment/definitions/{SEGMENT_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{SEGMENT_ID}` | The `id` value of the segment definition you want to delete. |

**Request**

```shell
curl -X DELETE https://platform.adobe.io/data/core/ups/segment/definitions/4afe34ae-8c98-4513-8a1d-67ccaa54bc05 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with no message.

## Update a specific segment definition

You can update a specific segment definition by making a PATCH request to the `/segment/definitions` endpoint and providing the ID of the segment definition you wish to update in the request path.

**API format**

```http
PATCH /segment/definitions/{SEGMENT_ID}
```

| Parameter | Description |
| --------- | ----------- |
| `{SEGMENT_ID}` | The `id` value of the segment definition you want to update. |

**Request**

The following request will update the work address country from the USA to Canada.

```shell
curl -X PATCH https://platform.adobe.io/data/core/ups/segment/definitions/4afe34ae-8c98-4513-8a1d-67ccaa54bc05 \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}' \
 -d '
{
    "id": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
    "name": "Updated people who ordered in the last 30 days",
    "profileInstanceId": "ups",
    "description": "Last 30 days",
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "workAddress.country = \"CA\""
    },
    "schema": {
        "name": "_xdm.context.profile"
    },
    "payloadSchema": "string",
    "ttlInDays": 60,
    "creationTime": 0,
    "updateTime": 0,
    "updateEpoch": 0
}'
```

**Response**

A successful response returns HTTP status 200 with details of your newly updated segment definition. Notice how the work address country has been updated from the USA (US) to Canada (CA).

```json
{
    "id": "4afe34ae-8c98-4513-8a1d-67ccaa54bc05",
    "schema": {
        "name": "_xdm.context.profile"
    },
    "ttlInDays": 60,
    "profileInstanceId": "ups",
    "imsOrgId": "{ORG_ID}",
    "sandbox": {
        "sandboxId": "28e74200-e3de-11e9-8f5d-7f27416c5f0d",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "name": "Updated people who ordered in the last 30 days",
    "description": "Last 30 days",
    "expression": {
        "type": "PQL",
        "format": "pql/text",
        "value": "workAddress.country = \"CA\""
    },
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
    "dataGovernancePolicy": {
        "excludeOptOut": true
    },
    "creationTime": 0,
    "updateEpoch": 1579295340,
    "updateTime": 1579295340000
}
```

## Convert segment definition

You can convert a segment definition between `pql/text` and `pql/json` or `pql/json` to `pql/text` by making a POST request to the `/segment/conversion` endpoint.

**API format**

```http
POST /segment/conversion
```

**Request**

The following request will change the segment definition's format from `pql/text` to `pql/json`.

```shell
curl -X POST https://platform.adobe.io/data/core/ups/segment/conversion \
 -H 'Authorization: Bearer {ACCESS_TOKEN}' \
 -H 'Content-Type: application/json' \
 -H 'x-gw-ims-org-id: {ORG_ID}' \
 -H 'x-api-key: {API_KEY}' \
 -H 'x-sandbox-name: {SANDBOX_NAME}'
 -d '{
        "name": "People who ordered in the last 30 days",
        "profileInstanceId": "ups",
        "description": "Last 30 days",
        "expression": {
            "type": "PQL",
            "format": "pql/text",
            "value": "workAddress.country = \"US\""
        },
        "schema": {
            "name": "_xdm.context.profile"
        },
        "payloadSchema": "string",
        "ttlInDays": 60
    }'
```

**Response**

A successful response returns HTTP status 200 with details of your newly converted segment definition.

```json
{
    "ttlInDays": 60,
    "imsOrgId": "6A29340459CA8D350A49413A@AdobeOrg",
    "sandbox": {
        "sandboxId": "ff0f6870-c46d-11e9-8ca3-036939a64204",
        "sandboxName": "prod",
        "type": "production",
        "default": true
    },
    "description": "Last 30 days",
    "expression": {
        "type": "PQL",
        "format": "pql/json",
        "value": "{\"nodeType\":\"fnApply\",\"fnName\":\"=\",\"params\":[{\"nodeType\":\"fieldLookup\",\"fieldName\":\"country\",\"object\":{\"nodeType\":\"fieldLookup\",\"fieldName\":\"workAddress\",\"object\":{\"nodeType\":\"parameterReference\",\"position\":1}}},{\"nodeType\":\"literal\",\"literalType\":\"String\",\"value\":\"US\"}]}"
    }
}
```

## Next steps

After reading this guide you now have a better understanding of how segment definitions work. For more information on creating a segment, please read the [creating a segment](../tutorials/create-a-segment.md) tutorial.
