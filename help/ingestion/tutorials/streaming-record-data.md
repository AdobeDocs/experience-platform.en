---
keywords: Experience Platform;home;popular topics;streaming ingestion;ingestion;record data;stream record data;
solution: Experience Platform
title: Stream Record Data Using Streaming Ingestion APIs
type: Tutorial
description: This tutorial will help you begin using streaming ingestion APIs, part of the Adobe Experience Platform Data Ingestion Service APIs.
exl-id: 097dfd5a-4e74-430d-8a12-cac11b1603aa
---

# Stream record data using Streaming Ingestion APIs

This tutorial will help you begin using streaming ingestion APIs, part of the Adobe Experience Platform [!DNL Data Ingestion Service] APIs.

## Getting started

This tutorial requires a working knowledge of various Adobe Experience Platform services. Before beginning this tutorial, please review the documentation for the following services:

- [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes experience data.
  - [Schema Registry developer guide](../../xdm/api/getting-started.md): A comprehensive guide that covers each of the available endpoints of the [!DNL Schema Registry] API and how to make calls to them. This includes knowing your `{TENANT_ID}`, which appears in calls throughout this tutorial, as well as knowing how to create schemas, which is used in creating a dataset for ingestion.
- [[!DNL Real-Time Customer Profile]](../../profile/home.md): Provides a unified, consumer profile in real time based on aggregated data from multiple sources.

### Using Platform APIs

For information on how to successfully make calls to Platform APIs, see the guide on [getting started with Platform APIs](../../landing/api-guide.md).

## Compose a schema based off of the [!DNL XDM Individual Profile] class

To create a dataset, you will first need to create a new schema that implements the [!DNL XDM Individual Profile] class. For more information about how to create schemas, please read the [Schema Registry API developer guide](../../xdm/api/getting-started.md).

**API format**

```http
POST /schemaregistry/tenant/schemas
```

**Request**

```shell
curl -X POST https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'Content-Type: application/json' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -d '{
    "type": "object",
    "title": "Sample schema",
    "description": "Sample description",
    "allOf": [
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile-person-details"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile-work-details"
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
    "version": "1.0",
    "type": "object",
    "title": "Sample schema",
    "description": "Sample description",
    "allOf": [
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile-person-details"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/context/profile-work-details"
        }
    ],
    "meta:class": "https://ns.adobe.com/xdm/context/profile",
    "meta:abstract": false,
    "meta:extensible": false,
    "meta:extends": [
        "https://ns.adobe.com/xdm/context/profile",
        "https://ns.adobe.com/xdm/data/record",
        "https://ns.adobe.com/xdm/cpmtext/identitymap",
        "https://ns.adobe.com/xdm/common/extensible",
        "https://ns.adobe.com/xdm/common/auditable",
        "https://ns.adobe.com/xdm/context/profile-person-details",
        "https://ns.adobe.com/xdm/context/profile-work-details"
    ],
    "meta:immutableTags": [
        "union"
    ],
    "meta:containerId": "tenant",
    "imsOrg": "{ORG_ID}",
    "meta:xdmType": "object",
    "meta:registryMetadata": {
        "repo:createDate": 1551376506996,
        "repo:lastModifiedDate": 1551376506996,
        "xdm:createdClientId": "{CLIENT_ID}",
        "xdm:repositoryCreatedBy": "{CREATED_BY}"
    }
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
    "xdm:sourceProperty":"/workEmail/address",
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
>​ ​**Identity Namespace Codes**
>
> Please ensure that the codes are valid - the example above uses "email" which is a standard identity namespace. Other commonly used standard identity namespaces can be found within the [Identity Service FAQ](../../identity-service/troubleshooting-guide.md#what-are-the-standard-identity-namespaces-provided-by-experience-platform).
>
> If you would like to create a custom namespace, follow the steps outlined in the [identity namespace overview](../../identity-service/home.md).

**Response**

A successful response returns HTTP status 201 with information on the newly created primary identity descriptor for the schema.

```json
{
    "xdm:property": "xdm:code",
    "xdm:sourceSchema": "https://ns.adobe.com/{TENANT_ID}/schemas/{SCHEMA_ID}",
    "xdm:namespace": "Email",
    "@type": "xdm:descriptorIdentity",
    "xdm:sourceVersion": 1,
    "xdm:isPrimary": true,
    "xdm:sourceProperty": "/workEmail/address",
    "@id": "17aaebfa382ce8fc0a40d3e43870b6470aab894e1c368d16",
    "meta:containerId": "tenant",
    "version": "1",
    "imsOrg": "{ORG_ID}"
}
```

## Create a dataset for record data

Once you have created your schema, you will need to create a dataset to ingest record data.

>[!NOTE]
>
>This dataset will be enabled for **[!DNL Real-Time Customer Profile]** and **[!DNL Identity Service]**.

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
  -d ' {
    "name": "Dataset name",
    "description": "Dataset description",
    "schemaRef": {
        "id": "https://ns.adobe.com/{TENANT_ID}/schemas/{SCHEMA_ID},
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
    "@/dataSets/5e30d7986c0cc218a85cee65
]
```

## Create a streaming connection

After creating your schema and dataset, you can create a streaming connection

For more information on creating a streaming connection, please read the [create a streaming connection tutorial](./create-streaming-connection.md).

## Ingest record data to the streaming connection {#ingest-data}

With the dataset and streaming connection in place, you can ingest XDM-formatted JSON records to ingest record data into [!DNL Platform].

**API format**

```http
POST /collection/{CONNECTION_ID}?syncValidation=true
```

| Parameter | Description |
| --------- | ----------- |
| `{CONNECTION_ID}` | The `inletId` value of the streaming connection previously created. |
| `syncValidation`| An optional query parameter intended for development purposes. If set to `true`, it can be used for immediate feedback to determine if the request was successfully sent. By default, this value is set to `false`. Please note that if you set this query parameter to `true` that the request will be rate limited to 60 times per minute per `CONNECTION_ID`. |

**Request**

Ingesting record data to a streaming connection can be done either with or without the source name.

The example request below ingests a record with a missing source name to Platform. If a record is missing the source name, it will add the source ID from the streaming connection definition.

>[!NOTE]
>
>The following API call does **not** require any authentication headers.

```shell
curl -X POST https://dcs.adobedc.net/collection/{CONNECTION_ID}?syncValidation=true \
  -H "Cache-Control: no-cache" \
  -H "Content-Type: application/json" \
  -d '{
    "header": {
        "schemaRef": {
            "id": "https://ns.adobe.com/{TENANT_ID}/schemas/{SCHEMA_ID}",
            "contentType": "application/vnd.adobe.xed-full+json;version=1"
        },
        "imsOrgId": "{ORG_ID}",
        "datasetId": "{DATASET_ID}",
        "flowId": "{FLOW_ID}",
    },
    "body": {
        "xdmMeta": {
            "schemaRef": {
                "id": "https://ns.adobe.com/{TENANT_ID}/schemas/{SCHEMA_ID}",
                "contentType": "application/vnd.adobe.xed-full+json;version=1"
            }
        },
        "xdmEntity": {
            "person": {
                "name": {
                    "firstName": "Jane",
                    "middleName": "F",
                    "lastName": "Doe"
                },
                "birthDate": "1969-03-14",
                "gender": "female"
            },
            "workEmail": {
                "primary": true,
                "address": "janedoe@example.com",
                "type": "work",
                "status": "active"
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

A successful response returns HTTP status 200 with details of the newly streamed [!DNL Profile].

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
| `{CONNECTION_ID}` | The ID of the previously created streaming connection. |
| `xactionId` | A unique identifier generated server-side for the record you just sent. This ID helps Adobe trace this record's lifecycle through various systems and with debugging. |    
| `receivedTimeMs` | A timestamp (epoch in milliseconds) that shows what time the request was received. |
| `syncValidation.status` | Since the query parameter `syncValidation=true` was added, this value will appear. If the validation has succeeded, the status will be `pass`. |

## Retrieve the newly ingested record data

To validate the previously ingested records, you can use the [[!DNL Profile Access API]](../../profile/api/entities.md) to retrieve the record data.

>[!NOTE]
>
>If the merge policy ID is not defined and the `schema.name` or `relatedSchema.name` is `_xdm.context.profile`, [!DNL Profile Access] will fetch **all** related identities.

**API format**

```http
GET /access/entities
GET /access/entities?{QUERY_PARAMETERS}
GET /access/entities?schema.name=_xdm.context.profile&entityId=janedoe@example.com&entityIdNS=email
```

| Parameter | Description |
| --------- | ----------- |
| `schema.name` | **Required.** The name of the schema you are accessing. |
| `entityId` | The ID of the entity. If provided, you must also provide the entity namespace. |
| `entityIdNS` | The namespace of the ID you are trying to retrieve. |

**Request**

You can review the previously ingested record data with the following GET request.

```shell
curl -X GET 'https://platform.adobe.io/data/core/ups/access/entities?schema.name=_xdm.context.profile&entityId=janedoe@example.com&entityIdNS=email'\
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns HTTP status 200 with details of the entities requested. As you can see, this is the same record that was successfully ingested earlier.

```json
{
    "BVrqzwVv7o2p3naHvnsWpqZXv3KJgA": {
        "entityId": "BVrqzwVv7o2p3naHvnsWpqZXv3KJgA",
        "mergePolicy": {
            "id": "e161dae9-52f0-4c7f-b264-dc43dd903d56"
        },
        "sources": [
            "5e30d7986c0cc218a85cee65"
        ],
        "tags": [
            "1580346827274:2478:215"
        ],
        "identityGraph": [
            "BVrqzwVv7o2p3naHvnsWpqZXv3KJgA"
        ],
        "entity": {
            "person": {
                "name": {
                    "lastName": "Doe",
                    "middleName": "F",
                    "firstName": "Jane"
                },
                "gender": "female",
                "birthDate": "1969-03-14"
            },
            "workEmail": {
                "type": "work",
                "address": "janedoe@example.com",
                "status": "active",
                "primary": true
            },
            "identityMap": {
                "email": [
                    {
                        "id": "janedoe@example.com"
                    }
                ]
            }
        },
        "lastModifiedAt": "2020-01-30T01:13:59Z"
    }
}
```

## Next steps

By reading this document, you now understand how to ingest record data into [!DNL Platform] using streaming connections. You can try making more calls with different values and retrieving the updated values. Additionally, you can start monitoring your ingested data through [!DNL Platform] UI. For more information, please read the [monitoring data ingestion](../quality/monitor-data-ingestion.md) guide.

For more information about streaming ingestion in general, please read the [streaming ingestion overview](../streaming-ingestion/overview.md).
