---
keywords: Experience Platform;home;popular topics;streaming ingestion;ingestion;time series data;stream time series data;
solution: Experience Platform
title: Stream Time-Series Data Using Streaming Ingestion APIs
type: Tutorial
description: This tutorial will help you begin using streaming ingestion APIs, part of the Adobe Experience Platform Data Ingestion Service APIs.
exl-id: 720b15ea-217c-4c13-b68f-41d17b54d500
---
# Stream time-series data using Streaming Ingestion APIs

This tutorial will help you begin using streaming ingestion APIs, part of the Adobe Experience Platform [!DNL Data Ingestion Service] APIs.

## Getting started

This tutorial requires a working knowledge of various Adobe Experience Platform services. Before beginning this tutorial, please review the documentation for the following services:

- [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes experience data.
- [[!DNL Real-Time Customer Profile]](../../profile/home.md): Provides a unified, consumer profile in real time based on aggregated data from multiple sources.
- [Schema Registry developer guide](../../xdm/api/getting-started.md): A comprehensive guide that covers each of the available endpoints of the [!DNL Schema Registry] API and how to make calls to them. This includes knowing your `{TENANT_ID}`, which appears in calls throughout this tutorial, as well as knowing how to create schemas, which is used in creating a dataset for ingestion.

Additionally, this tutorial requires that you have already created a streaming connection. For more information on creating a streaming connection, please read the [create a streaming connection tutorial](./create-streaming-connection.md).

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../landing/api-guide.md).

## Compose a schema based off of the XDM ExperienceEvent class

To create a dataset, you will first need to create a new schema that implements the [!DNL XDM ExperienceEvent] class. For more information about how to create schemas, please read the [Schema Registry API developer guide](../../xdm/api/getting-started.md).

**API format**

```http
POST /schemaregistry/tenant/schemas
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "type": "object",
    "title": "{SCHEMA_NAME}",
    "description": "{SCHEMA_DESCRIPTION}",
    "allOf": [
        {
            "$ref": "https://ns.adobe.com/xdm/context/experienceevent"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/experienceevent-environment-details"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/experienceevent-commerce"
        },
        {  
         "$ref":"https://ns.adobe.com/experience/campaign/experienceevent-profile-work-details"
        }
    ],
    "meta:immutableTags": [
        "union"
    ]
}'
```

| Property | Description |
| -------- | ----------- |
| `title` | The name you want to use for your schema. This name must be unique. |
| `description` | A meaningful description for the schema you are creating. |
| `meta:immutableTags` | In this example, the `union` tag is used to persist your data into [[!DNL Real-Time Customer Profile]](../../profile/home.md). |

**Response**

A successful response returns HTTP status 201 with details of your newly created schema.

```json
{
    "$id": "https://ns.adobe.com/{TENANT_ID}/schemas/{SCHEMA_ID}",
    "meta:altId": "_{TENANT_ID}.schemas.{SCHEMA_ID}",
    "meta:resourceType": "schemas",
    "version": "1",
    "type": "object",
    "title": "{SCHEMA_NAME}",
    "description": "{SCHEMA_DESCRIPTION}",
    "allOf": [
        {
            "$ref": "https://ns.adobe.com/xdm/context/experienceevent",
            "type": "object",
            "meta:xdmType": "object"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/experienceevent-environment-details",
            "type": "object",
            "meta:xdmType": "object"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/experienceevent-commerce",
            "type": "object",
            "meta:xdmType": "object"
        },
        {
            "$ref": "https://ns.adobe.com/experience/campaign/experienceevent-profile-work-details",
            "type": "object",
            "meta:xdmType": "object"
        }
    ],
    "refs": [
        "https://ns.adobe.com/xdm/context/experienceevent-commerce",
        "https://ns.adobe.com/experience/campaign/experienceevent-profile-work-details",
        "https://ns.adobe.com/xdm/context/experienceevent-environment-details",
        "https://ns.adobe.com/xdm/context/experienceevent"
    ],
    "imsOrg": "{ORG_ID}",
    "meta:immutableTags": [
        "union"
    ],
    "meta:class": "https://ns.adobe.com/xdm/context/experienceevent",
    "required": [
        "@id",
        "xdm:timestamp"
    ],
    "meta:abstract": false,
    "meta:extensible": false,
    "meta:extends": [
        "https://ns.adobe.com/xdm/context/experienceevent",
        "https://ns.adobe.com/xdm/data/time-series",
        "https://ns.adobe.com/xdm/context/identitymap",
        "https://ns.adobe.com/xdm/context/experienceevent-environment-details",
        "https://ns.adobe.com/xdm/context/experienceevent-commerce",
        "https://ns.adobe.com/experience/campaign/experienceevent-profile-work-details"
    ],
    "meta:containerId": "tenant",
    "imsOrg": "{ORG_ID}",
    "meta:xdmType": "object",
    "meta:class": "https://ns.adobe.com/xdm/context/experienceevent",
    "meta:registryMetadata": {
        "repo:createDate": 1551229957987,
        "repo:lastModifiedDate": 1551229957987,
        "xdm:createdClientId": "{CLIENT_ID}",
        "xdm:repositoryCreatedBy": "{CREATED_BY}"
    },
    "meta:tenantNamespace": "{NAMESPACE}"
}
```

| Property | Description |
| -------- | ----------- |
| `{TENANT_ID}` | This ID is used to ensure that resources you create are namespaced properly and contained within your IMS Organization. For more information about the Tenant ID, please read the [schema registry guide](../../xdm/api/getting-started.md#know-your-tenant-id). |

Please take note of the `$id` as well as the `version` attributes, as both of these will be used when creating your dataset.

## Set a primary identity descriptor for the schema

Next, add an [identity descriptor](../../xdm/api/descriptors.md) to the schema created above, using the work email address attribute as the primary identifier. Doing this will result in two changes:

1. The work email address will become a mandatory field. This means messages sent without this field will fail validation and will not be ingested.

2. [!DNL Real-Time Customer Profile] will use the work email address as an identifier to help stitch together more information about that individual.

### Request

```shell
curl -X POST https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "@type":"xdm:descriptorIdentity",
    "xdm:sourceProperty":"/_experience/campaign/message/profileSnapshot/workEmail/address",
    "xdm:property":"xdm:code",
    "xdm:isPrimary":true,
    "xdm:namespace":"Email",
    "xdm:sourceSchema":"{SCHEMA_REF_ID}",
    "xdm:sourceVersion":1
}
```

| Property | Description |
| -------- | ----------- |
| `{SCHEMA_REF_ID}` | The `$id` that you previously received when you composed the schema. It should look something like this: `"https://ns.adobe.com/{TENANT_ID}/schemas/{SCHEMA_ID}"` |

>[!NOTE]
>
>​**Identity Namespace Codes**
>
> Please ensure that the codes are valid - the example above uses "email" which is a standard identity namespace. Other commonly used standard identity namespaces can be found within the [Identity Service FAQ](../../identity-service/troubleshooting-guide.md#what-are-the-standard-identity-namespaces-provided-by-experience-platform).
>
> If you would like to create a custom namespace, follow the steps outlined in the [identity namespace overview](../../identity-service/home.md).

**Response**

A successful response returns HTTP status 201 with information on the newly created primary identity namespace for the schema.

```json
{
    "xdm:property": "xdm:code",
    "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/{SCHEMA_ID}",
    "xdm:namespace": "Email",
    "@type": "xdm:descriptorIdentity",
    "xdm:sourceVersion": 1,
    "xdm:isPrimary": true,
    "xdm:sourceProperty": "/_experience/campaign/message/profileSnapshot/workEmail/address",
    "@id": "ec31c09e0906561861be5a71fcd964e29ebe7923b8eb0d1e",
    "meta:containerId": "tenant",
    "version": "1",
    "imsOrg": "{ORG_ID}"
}
```

## Create a dataset for time series data

Once you have created your schema, you will need to create a dataset to ingest record data.

>[!NOTE]
>
>This dataset will be enabled for **[!DNL Real-Time Customer Profile]** and **[!DNL Identity]** by setting the appropriate tags.

**API format**

```http
POST /catalog/dataSets
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/catalog/dataSets \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "name": "{DATASET_NAME}",
    "description": "{DATASET_DESCRIPTION}",
    "schemaRef": {
        "id": "{SCHEMA_REF_ID}",
        "contentType": "application/vnd.adobe.xed-full+json;version=1"
    },
    "tags": {
        "unifiedIdentity": ["enabled:true"],
        "unifiedProfile": ["enabled:true"]
    }
}'
```

**Response**

A successful response returns HTTP status 201 and an array containing the ID of the newly created dataset in the format `@/dataSets/{DATASET_ID}`.

```json
[
    "@/dataSets/5e72608b10f6e318ad2dee0f"
]
```


## Create a streaming connection

After creating your schema and dataset, you will need to create a streaming connection to ingest your data.

For more information on creating a streaming connection, please read the [create a streaming connection tutorial](./create-streaming-connection.md).

## Ingest time series data to the streaming connection

With the dataset, streaming connection, and dataflow created, you can ingest XDM-formatted JSON records to ingest time series data within [!DNL Platform].

**API format**

```http
POST /collection/{CONNECTION_ID}?syncValidation=true
```

| Parameter | Description |
| --------- | ----------- |
| `{CONNECTION_ID}` | The `id` value of your newly created streaming connection. |
| `syncValidation`| An optional query parameter intended for development purposes. If set to `true`, it can be used for immediate feedback to determine if the request was successfully sent. By default, this value is set to `false`. Please note that if you set this query parameter to `true` that the request will be rate limited to 60 times per minute per `CONNECTION_ID`.  |

**Request**

Ingesting time series data to a streaming connection can be done either with or without the source name.

The example request below ingests time series data with a missing source name to Platform. If the data is missing the source name, it will add the source ID from the streaming connection definition.

Both `xdmEntity._id` and `xdmEntity.timestamp` are required fields for time-series data. The `xdmEntity._id` attribute represents a unique identifier for the record itself, **not** a unique ID of the person or device whose record it is.

You will need to generate your own `xdmEntity._id` and `xdmEntity.timestamp` for the record in a way that remains consistent if the record ever needs to be re-ingested. Ideally, your source system will contain these values. If an ID is not available, consider concatenating values of other fields in the record to create a unique value that can be consistently regenerated from the record on re-ingestion.

>[!NOTE]
>
>The following API call does **not** require any authentication headers.

```shell
curl -X POST https://dcs.adobedc.net/collection/{CONNECTION_ID}?syncValidation=true \
  -H "Content-Type: application/json" \
  -d '{
    "header": {
        "schemaRef": {
            "id": "{SCHEMA_REF_ID}",
            "contentType": "application/vnd.adobe.xed-full+json;version=1"
        },
        "flowId": "{FLOW_ID}",
        "datasetId": "{DATASET_ID}"
    },
    "body": {
        "xdmMeta": {
            "schemaRef": {
                "id": "https://ns.adobe.com/{TENANT_ID}/schemas/{SCHEMA_ID}",
                "contentType": "application/vnd.adobe.xed-full+json;version=1"
            },
        "identityMap": {
                "Email": [
                  {
                    "id": "acme_user@gmail.com",
                    "primary": true
                  }
                ]
              },
        },
        "xdmEntity":{
            "_id": "9af5adcc-db9c-4692-b826-65d3abe68c22",
            "timestamp": "2019-02-23T22:07:01Z",
            "environment": {
                "browserDetails": {
                    "userAgent": "Mozilla\/5.0 (Windows NT 5.1) AppleWebKit\/537.36 (KHTML, like Gecko) Chrome\/29.0.1547.57 Safari\/537.36 OPR\/16.0.1196.62",
                    "acceptLanguage": "en-US",
                    "cookiesEnabled": true,
                    "javaScriptVersion": "1.6",
                    "javaEnabled": true
                },
                "colorDepth": 32,
                "viewportHeight": 799,
                "viewportWidth": 414
            },
            "productListItems": [
                {
                    "SKU": "CC",
                    "name": "Fernie Snow",
                    "quantity": 30,
                    "priceTotal": 7.8
                }
            ],
            "commerce": {
                "productViews": {
                    "value": 1
                }
            },
            "_experience": {
                "campaign": {
                    "message": {
                        "profileSnapshot": {
                            "workEmail":{
                                "address": "janedoe@example.com"
                            }
                        }
                    }
                }
            }
        }
    }
}'
```

If you want to include a source name, the following example shows how you would include it.

```json
    "header": {
        "schemaRef": {
            "id": "https://ns.adobe.com/{TENANT_ID}/schemas/{SCHEMA_ID}",
            "contentType": "application/vnd.adobe.xed-full+json;version=1"
        },
        "imsOrgId": "{ORG_ID}",
        "datasetId": "{DATASET_ID}",
        "source": {
            "name": "Sample source name"
        }
    }
```

**Response**

An successful response returns HTTP status 200 with details of the newly streamed [!DNL Profile].

```json
{
    "inletId": "{CONNECTION_ID}",
    "xactionId": "1584479347507:2153:240",
    "receivedTimeMs": 1584479347507,
    "syncValidation": {
        "status": "pass"
    }
}
```

| Property | Description |
| -------- | ----------- |
| `{CONNECTION_ID}` | The `inletId` of the previously created streaming connection. |
| `xactionId` | A unique identifier generated server-side for the record you just sent. This ID helps Adobe trace this record's lifecycle through various systems and with debugging. |    
| `receivedTimeMs`: A timestamp (epoch in milliseconds) that shows what time the request was received. |
| `syncValidation.status` | Since the query parameter `syncValidation=true` was added, this value will appear. If the validation has succeeded, the status will be `pass`. |

## Retrieve the newly ingested time series data

To validate the previously ingested records, you can use the [[!DNL Profile Access API]](../../profile/api/entities.md) to retrieve the time series data. This can be done using a GET request to the `/access/entities` endpoint and using optional query parameters. Multiple parameters can be used, separated by ampersands (&)."

>[!NOTE]
>
>If the merge policy ID is not defined and the `schema.name` or `relatedSchema.name` is `_xdm.context.profile`, [!DNL Profile Access] will fetch **all** related identities.

**API format**

```http
GET /access/entities
GET /access/entities?{QUERY_PARAMETERS}
GET /access/entities?schema.name=_xdm.context.experienceevent&relatedSchema.name=_xdm.context.profile&relatedEntityId=janedoe@example.com&relatedEntityIdNS=email
```

| Parameter | Description |
| --------- | ----------- |
| `schema.name` | **Required.** The name of the schema you are accessing. |
| `relatedSchema.name` | **Required.** Since you are accessing a `_xdm.context.experienceevent`, this value specifies the schema for the profile entity that the time series events are related to. |
| `relatedEntityId` | The ID of the related entity. If provided, you must also provide the entity namespace. |
| `relatedEntityIdNS` | The namespace of the ID you are trying to retrieve. |

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/core/ups/access/entities?schema.name=_xdm.context.experienceevent&relatedSchema.name=_xdm.context.profile&relatedEntityId=janedoe@example.com&relatedEntityIdNS=email \
  -H "Authorization: Bearer {ACCESS_TOKEN}" \
  -H "x-api-key: {API_KEY}" \
  -H "x-gw-ims-org-id: {ORG_ID}" \
  -H "x-sandbox-name: {SANDBOX_NAME}"

```

**Response**

A successful response returns HTTP status 200 with details of the entities requested. As you can see, this is the same time series data that was previously ingested.

```json
{
    "_page": {
        "orderby": "timestamp",
        "start": "9af5adcc-db9c-4692-b826-65d3abe68c22",
        "count": 1,
        "next": ""
    },
    "children": [
        {
            "relatedEntityId": "BVrqzwVv7o2p3naHvnsWpqZXv3KJgA",
            "entityId": "9af5adcc-db9c-4692-b826-65d3abe68c22",
            "timestamp": 1582495621000,
            "entity": {
                "environment": {
                    "browserDetails": {
                        "javaScriptVersion": "1.6",
                        "cookiesEnabled": true,
                        "userAgent": "Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36 OPR/16.0.1196.62",
                        "acceptLanguage": "en-US",
                        "javaEnabled": true
                    },
                    "colorDepth": 32,
                    "viewportHeight": 799,
                    "viewportWidth": 414
                },
                "_id": "9af5adcc-db9c-4692-b826-65d3abe68c22",
                "commerce": {
                    "productViews": {
                        "value": 1
                    }
                },
                "productListItems": [
                    {
                        "name": "Fernie Snow",
                        "quantity": 30,
                        "SKU": "CC",
                        "priceTotal": 7.8
                    }
                ],
                "_experience": {
                    "campaign": {
                        "message": {
                            "profileSnapshot": {
                                "workEmail": {
                                    "address": "janedoe@example.com"
                                }
                            }
                        }
                    }
                },
                "timestamp": "2020-02-23T22:07:01Z"
            },
            "lastModifiedAt": "2020-03-18T18:51:19Z"
        }
    ],
    "_links": {
        "next": {
            "href": ""
        }
    }
}
```

## Next steps

By reading this document, you now understand how to ingest record data into [!DNL Platform] using streaming connections. You can try making more calls with different values and retrieving the updated values. Additionally, you can start monitoring your ingested data through [!DNL Platform] UI. For more information, please read the [monitoring data ingestion](../quality/monitor-data-ingestion.md) guide.

For more information about streaming ingestion in general, please read the [streaming ingestion overview](../streaming-ingestion/overview.md).
