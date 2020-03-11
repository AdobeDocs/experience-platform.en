---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: List resources
topic: developer guide
---

# List resources

You can view a list of all resources (schemas, classes, mixins, or data types) within a container by performing a single GET request. To help filter results, the Schema Registry supports the use of query parameters when listing resources.

The most common query parameters include:

* `limit` - Limit the number of resources returned. Example: `limit=5` will return a list of five resources.
* `orderby` - Sort results by a specific property. Example: `orderby=title` will sort results by title in ascending order (A-Z). Adding a `-` before title (`orderby=-title`) will sort items by title in descending order (Z-A). 
* `property` - Filter results on any top-level attributes. For example, `property=meta:intendedToExtend==https://ns.adobe.com/xdm/context/profile` returns only mixins that are compatible with the XDM Individual Profile class.

When combining multiple query parameters, they must be separated by ampersands (`&`).

**API format**

```http
GET /{CONTAINER_ID}/{RESOURCE_TYPE}
```

| Parameter | Description |
| --- | --- |
| `{CONTAINER_ID}` | The container where the resources are located ("global" or "tenant"). |
| `{RESOURCE_TYPE}` | The type of resource to retrieve from the Schema Library. Valid types are `datatypes`, `mixins`, `schemas`, and `classes`. |

**Request**

```SHELL
curl -X GET \
  https://platform.adobe.io/data/foundation/schemaregistry/global/classes&limit=2 \
  -H 'Accept: application/vnd.adobe.xed-id+json' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {IMS_ORG}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

The response format depends on the Accept header sent in the request. The following Accept headers are available for listing resources:

| Accept header | Description |
| ------- | ------------ |
| application/vnd.adobe.xed-id+json | Returns a short summary of each resource, generally the preferred header for listing |
| application/vnd.adobe.xed+json | Returns full JSON schema for each resource, with original `$ref` and `allOf` included |

**Response**

The request above used the `application/vnd.adobe.xed-id+json` Accept header, therefore the response includes only the `title`, `$id`, `meta:altId`, and `version` attributes for each resource. Substituting `full` into the Accept header returns all attributes of each resource. Select the appropriate Accept header depending on the information you require in your response.

```JSON
{
  "results": [
    {
        "title": "XDM ExperienceEvent",
        "$id": "https://ns.adobe.com/xdm/context/experienceevent",
        "meta:altId": "_xdm.context.experienceevent",
        "version": "1"
    },
    {
        "title": "XDM Individual Profile",
        "$id": "https://ns.adobe.com/xdm/context/profile",
        "meta:altId": "_xdm.context.profile",
        "version": "1"
    }
  ]
}
```
