---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: List resources
topic: developer guide
---

# List resources

You can view a list of all resources (schemas, classes, mixins, or data types) within a container by performing a single GET request.

**API format**

>[!NOTE] When listing resources, the Schema Registry limits result sets to 300 items. In order to return resources beyond this limit, you must use [paging parameters](#paging). It is also recommended that you use query parameters to [filter results](#filtering) and reduce the number of resources returned.

```http
GET /{CONTAINER_ID}/{RESOURCE_TYPE}
GET /{CONTAINER_ID}/{RESOURCE_TYPE}?{QUERY_PARAMS}
```

| Parameter | Description |
| --- | --- |
| `{CONTAINER_ID}` | The container where the resources are located ("global" or "tenant"). |
| `{RESOURCE_TYPE}` | The type of resource to retrieve from the Schema Library. Valid types are `datatypes`, `mixins`, `schemas`, and `classes`. |
| `{QUERY_PARAMS`} | Optional query parameters to filter results by. See the section on [query parameters](#query) for more information. |

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
| application/vnd.adobe.xdm-v2+json | Returns all the results in a single request. |

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

The Schema Registry supports the use of query parameters to page and filter results when listing resources.

>[!NOTE] When combining multiple query parameters, they must be separated by ampersands (`&`).

### Paging {#paging}

The most common query parameters for paging include:

| Parameter | Description |
| --- | --- |
| `start` | Specify where the listed results should be gin. Example: `start=2` will list results from the third returned item onward.  |
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

>[!TIP] You can use the `property` parameter to filter mixins by their compatible class. For example, `property=meta:intendedToExtend==https://ns.adobe.com/xdm/context/profile` returns only mixins that are compatible with the XDM Individual Profile class.
