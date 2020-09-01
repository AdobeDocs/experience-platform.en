---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;;experience data model;Experience data model;Experience Data Model;data model;Data Model;schema registry;Schema Registry;list;List;get;GET
solution: Experience Platform
title: List resources
description: You can view a list of all Schema Registry resources of a certain type (classes, mixins, schemas, data types, or descriptors) within a container by performing a single GET request.
topic: developer guide
---

# List resources

You can view a list of all [!DNL Schema Registry] resources of a certain type (classes, mixins, schemas, data types, or descriptors) within a container by performing a single GET request.

>[!NOTE]
>
>When listing resources, the [!DNL Schema Registry] limits result sets to 300 items. In order to return resources beyond this limit, you must use [paging parameters](#paging). It is also recommended that you use query parameters to [filter results](#filtering) and reduce the number of resources returned.

**API format**

```http
GET /{CONTAINER_ID}/{RESOURCE_TYPE}
GET /{CONTAINER_ID}/{RESOURCE_TYPE}?{QUERY_PARAMS}
```

| Parameter | Description |
| --- | --- |
| `{CONTAINER_ID}` | The container where the resources are located ("global" or "tenant"). |
| `{RESOURCE_TYPE}` | The type of resource to retrieve from the [!DNL Schema Library]. Valid types are `classes`, `mixins`, `schemas`, `datatypes`, and `descriptors`. |
| `{QUERY_PARAMS}` | Optional query parameters to filter results by. See the section on [query parameters](#query) for more information. |

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
| application/vnd.adobe.xed-id+json | Returns a short summary of each resource. This is the recommended header for listing resources. (Limit: 300)|
| application/vnd.adobe.xed+json | Returns full JSON schema for each resource, with original `$ref` and `allOf` included. (Limit: 300) |
| application/vnd.adobe.xdm-v2+json | When using the `/descriptors` endpoint, this Accept header must be used in order to utilize paging capabilities. |

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

## Using query parameters {#query}

The [!DNL Schema Registry] supports the use of query parameters to page and filter results when listing resources.

>[!NOTE]
>
>When combining multiple query parameters, they must be separated by ampersands (`&`).

### Paging {#paging}

The most common query parameters for paging include:

| Parameter | Description |
| --- | --- |
| `start` | Specify where the listed results should begin. This value can be obtained from the `_page.next` attribute of a list response, and used to access the next page of results. If the `_page.next` value is null, then there is no additional page available.  |
| `limit` | Limit the number of resources returned. Example: `limit=5` will return a list of five resources. |
| `orderby` | Sort results by a specific property. Example: `orderby=title` will sort results by title in ascending order (A-Z). Adding a `-` before title (`orderby=-title`) will sort items by title in descending order (Z-A). |

### Filtering {#filtering}

You can filter results by using the `property` parameter, which is used to apply a specific operator against a given JSON property within the retrieved resources. Supported operators include:

| Operator | Description | Example |
| --- | --- | --- |
| `==` | Filters by whether the property equals the provided value. | `property=title==test` |
| `!=` | Filters by whether the property does not equal the provided value. | `property=title!=test` |
| `<` | Filters by whether the property is less than the provided value. | `property=version<5` |
| `>` | Filters by whether the property is greater than the provided value. | `property=version>5` |
| `<=` | Filters by whether the property is less than or equal to the provided value. | `property=version<=5` |
| `>=` | Filters by whether the property is greater than or equal to the provided value. | `property=version>=5` |
| `~` | Filters by whether the property matches a provided regular expression. | `property=title~test$` |
| (None) | Stating only the property name returns only entries where the property exists. | `property=title` |

>[!TIP]
>
>You can use the `property` parameter to filter mixins by their compatible class. For example, `property=meta:intendedToExtend==https://ns.adobe.com/xdm/context/profile` returns only mixins that are compatible with the [!DNL XDM Individual Profile] class.
