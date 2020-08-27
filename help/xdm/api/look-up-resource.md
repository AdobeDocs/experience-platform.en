---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Look up a resource
topic: developer guide
---

# Look up a resource

You can look up specific resources by making a GET request that includes the `$id` (URL-encoded URI) of the resource in the request path.

**API format**

```http
GET /{CONTAINER_ID}/{RESOURCE_TYPE}/{RESOURCE_ID} 
```

| Parameter | Description |
| --- | --- |
| `{CONTAINER_ID}` | The container where the resources are located ("global" or "tenant"). |
| `{RESOURCE_TYPE}` | The type of resource to retrieve from the [!DNL Schema Library]. Valid types are `datatypes`, `mixins`, `schemas`, and `classes`. |
| `{RESOURCE_ID}` | The URL-encoded `$id` URI or `meta:altId` of the resource. |

**Request**

```SHELL
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/global/mixins/https%3A%2F%2Fns.adobe.com%2Fxdm%2Fcontext%2Fprofile-person-details \
  -H 'Accept: application/vnd.adobe.xed+json; version=1' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

Resource lookup requests require a `version` be included in the Accept header. The following Accept headers are available for lookups:

| Accept | Description |
| ------- | ------------ |
| `application/vnd.adobe.xed+json; version={MAJOR_VERSION}` | Raw with `$ref` and `allOf`, has titles and descriptions. |
| `application/vnd.adobe.xed-full+json; version={MAJOR_VERSION}` | `$ref` and `allOf` resolved, has titles and descriptions. |
| `application/vnd.adobe.xed-notext+json; version={MAJOR_VERSION}` | Raw with `$ref` and `allOf`, no titles or descriptions. |
| `application/vnd.adobe.xed-full-notext+json; version={MAJOR_VERSION}` | `$ref` and `allOf` resolved, no titles or descriptions. |
| `application/vnd.adobe.xed-full-desc+json; version={MAJOR_VERSION}` | `$ref` and `allOf` resolved, descriptors included. |

>[!NOTE]
>
>If supplying the `major` version only (1, 2, 3, etc), the registry will return the latest `minor` version (.1, .2, .3, etc) automatically.

**Response**

A successful response returns the details of the resource. The fields that are returned depend on the Accept header sent in the request. Experiment with different Accept headers to compare the responses and determine which header is best for your use case. 

```JSON
{
    "$id": "https://ns.adobe.com/xdm/context/profile-person-details",
    "title": "Profile Person Details",
    "type": "object",
    "meta:extensible": true,
    "meta:abstract": true,
    "meta:intendedToExtend": [
        "https://ns.adobe.com/xdm/context/profile"
    ],
    "description": "Profile person details including naming, gender etc.",
    "definitions": {
        "profile-person-details": {
            "properties": {
                "person": {
                    "title": "Person",
                    "$ref": "https://ns.adobe.com/xdm/context/person",
                    "description": "An individual actor, contact, or owner.",
                    "meta:xdmField": "xdm:person"
                }
            }
        }
    },
    "allOf": [
        {
            "$ref": "https://ns.adobe.com/xdm/common/extensible#/definitions/@context"
        },
        {
            "$ref": "#/definitions/profile-person-details"
        }
    ],
    "meta:xdmId": "https://ns.adobe.com/xdm/context/profile-person-details",
    "meta:altId": "_xdm.context.profile-person-details",
    "meta:xdmType": "object",
    "meta:status": "experimental",
    "version": "1",
    "$schema": "http://json-schema.org/draft-06/schema#",
    "meta:resourceType": "mixins",
    "meta:registryMetadata": {
        "repo:createDate": 1551745787442,
        "repo:lastModifiedDate": 1551745787442
    }
}
```
