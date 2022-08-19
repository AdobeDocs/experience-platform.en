---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema registry;Schema Registry;behavior;behaviour;behaviors;behaviours;
solution: Experience Platform
title: Behaviors API Endpoint
description: The /behaviors endpoint in the Schema Registry API allows you to retrieve all available behaviors in the global container.
topic-legacy: developer guide
exl-id: 3b45431f-1d55-4279-8b62-9b27863885ec
---
# Behaviors endpoint

In Experience Data Model (XDM), behaviors define the nature of data that a schema describes. Each XDM class must reference a specific behavior, which all schemas that employ that class will inherit. For nearly all use cases in Platform, there are two available behaviors:

* **[!UICONTROL Record]**: Provides information about the attributes of a subject. A subject could be an organization or an individual.
* **[!UICONTROL Time-series]**: Provides a snapshot of the system at the time an action was taken either directly or indirectly by a record subject.

>[!NOTE]
>
>There are some use cases in Platform that require the use of schema that does not employ either of the above behaviors. For these cases, a third "ad-hoc" behavior is available. See the tutorial on [creating an ad-hoc schema](../tutorials/ad-hoc.md) for more information.
>
>For more general information on data behaviors in terms of how they affect schema composition, refer to the guide on the [basics of schema composition](../schema/composition.md).

The `/behaviors` endpoint in the [!DNL Schema Registry] API allows you to view available behaviors in the `global` container.

## Getting started

The endpoint used in this guide is part of the [[!DNL Schema Registry] API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/behavior-registry.yaml). Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Retrieve a list of behaviors {#list}

You can retrieve a list of all available behaviors by making a GET request to the `/behaviors` endpoint.

**API format**

```http
GET /global/behaviors
```

**Request**

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/global/behaviors \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/vnd.adobe.xed-id+json'
```

**Response**

```json
{
    "results": [
        {
            "$id": "https://ns.adobe.com/xdm/data/record",
            "meta:altId": "_xdm.data.record",
            "version": "1.16.4",
            "title": "Record Schema"
        },
        {
            "$id": "https://ns.adobe.com/xdm/data/adhoc",
            "meta:altId": "_xdm.data.adhoc",
            "version": "1.16.4",
            "title": "Ad Hoc Schema"
        },
        {
            "$id": "https://ns.adobe.com/xdm/data/time-series",
            "meta:altId": "_xdm.data.time-series",
            "version": "1.16.4",
            "title": "Time-series Schema"
        }
    ],
    "_page": {
        "orderby": "updated",
        "next": null,
        "count": 3
    },
    "_links": {
        "next": null
    }
}
```

## Look up a behavior {#lookup}

You can look up a specific behavior by providing its ID in the path of a GET request to the `/behaviors` endpoint.

**API format**

```http
GET /global/behaviors/{BEHAVIOR_ID}
```

| Parameter | Description |
| --- | --- |
| `{BEHAVIOR_ID}` | The `meta:altId` or URL-encoded `$id` of the behavior you want to look up. |

{style="table-layout:auto"}

**Request**

The following request retrieves the details of the record behavior by providing its `meta:altId` in the request path.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/global/behaviors/_xdm.data.record \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}' \
  -H 'Accept: application/vnd.adobe.xed+json;version=1'
```

**Response**

A successful response returns the details of the behavior, including its version, description, and the attributes the behavior provides to the classes that employ it.

```json
{
    "$id": "https://ns.adobe.com/xdm/data/record",
    "meta:altId": "_xdm.data.record",
    "meta:resourceType": "behaviors",
    "version": "1.16.4",
    "title": "Record Schema",
    "type": "object",
    "description": "Used to indicate the behavior of record data semantic when composed into data schemas.",
    "definitions": {
        "record": {
            "properties": {
                "_id": {
                    "title": "Identifier",
                    "type": "string",
                    "format": "uri-reference",
                    "description": "A unique identifier for the record.",
                    "meta:xdmType": "string",
                    "meta:xdmField": "@id"
                }
            }
        }
    },
    "allOf": [
        {
            "$ref": "#/definitions/record",
            "type": "object",
            "meta:xdmType": "object"
        },
        {
            "$ref": "https://ns.adobe.com/xdm/common/extensible#/definitions/@context",
            "type": "object",
            "meta:xdmType": "object"
        }
    ],
    "meta:extensible": true,
    "meta:abstract": true,
    "meta:xdmType": "object",
    "meta:status": "stable",
    "$schema": "http://json-schema.org/draft-06/schema#",
    "meta:registryMetadata": {
        "repo:createdDate": 1606266789446,
        "repo:lastModifiedDate": 1606266789446,
        "eTag": "2cc114a54949a9668fe2ad046ccece59192e1bfa28f14e5ac7c893acb7820ba2",
        "meta:globalLibVersion": "1.16.4"
    }
}
```

## Next steps

This guide covered the use of the `/behaviors` endpoint in the [!DNL Schema Registry] API. To learn how to assign a behavior to a class using the API, see the [classes endpoint guide](./classes.md).
