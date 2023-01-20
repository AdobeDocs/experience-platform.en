---
keywords: Experience Platform;home;popular topics;filter;Filter;filter data;Filter data;date range
solution: Experience Platform
title: Filter Catalog Data Using Query Parameters
description: The Catalog Service API allows response data to be filtered through the use of request query parameters. Part of best practices for Catalog is to use filters in all API calls, as they reduce the load on the API and help to improve overall performance.
exl-id: 0cdb5a7e-527b-46be-9ad8-5337c8dc72b7
---
# Filter [!DNL Catalog] data using query parameters

The [!DNL Catalog Service] API allows response data to be filtered through the use of request query parameters. Part of best practices for [!DNL Catalog] is to use filters in all API calls, as they reduce the load on the API and help to improve overall performance.

This document outlines the most common methods for filtering [!DNL Catalog] objects in the API. It is recommended that you reference this document while reading the [Catalog developer guide](getting-started.md) to learn more about how to interact with the [!DNL Catalog] API. For more general information on [!DNL Catalog Service], see the [[!DNL Catalog] overview](../home.md).

## Limit returned objects

The `limit` query parameter constrains the number of objects returned in a response. [!DNL Catalog] responses are automatically metered according to configured limits:

* If a `limit` parameter is not specified, the maximum number of objects per response payload is 20.
* For dataset queries, if `observableSchema` is requested using the `properties` query parameter, the maximum number of datasets returned is 20.
* The global limit for all other Catalog queries is 100 objects.
* Invalid `limit` parameters (including `limit=0`) result in 400-level error responses that outline proper ranges.
* Limits or offsets that are passed as query parameters take precedence over those that are passed as headers.

**API format**

```http
GET /{OBJECT_TYPE}?limit={LIMIT}
```

| Parameter | Description |
| --- | --- |
| `{OBJECT_TYPE}` | The type of [!DNL Catalog] object to be retrieved. Valid objects are: <ul><li>`accounts`</li><li>`batches`</li><li>`connections`</li><li>`connectors`</li><li>`dataSets`</li><li>`dataSetFiles`</li><li>`dataSetViews`</li></ul>|
| `{LIMIT}` | An integer indicating the number of objects to return, ranging from 1 to 100. |

**Request**

The following request retrieves a list of datasets while limiting the response to three objects.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/catalog/dataSets?limit=3 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a list of datasets, limited to the number indicated by the `limit` query parameter.

```json
{
    "5ba9452f7de80400007fc52a": {
        "name": "Sample Dataset 1",
        "description": "Description of dataset.",
        "files": "@/dataSets/5ba9452f7de80400007fc52a/views/5ba9452f7de80400007fc52b/files"
    },
    "5bb276b03a14440000971552": {
        "name": "Sample Dataset 2",
        "description": "Description of dataset.",
        "files": "@/dataSets/5bb276b03a14440000971552/views/5bb276b01250b012f9acc75b/files"
    },
    "5bceaa4c26c115000039b24b": {
        "name": "Sample Dataset 3"
    }
}
```

## Limit displayed properties

Even when filtering the number of objects returned using the `limit` parameter, the returned objects themselves can often contain more information than you actually need. To further reduce the load on the system, it is best practice to filter responses to include only the properties that you need.

The `properties` parameter filters response objects to return only a set of specified properties. The parameter can be set to return one or multiple properties.

The `properties` parameter only accepts top-level object properties, meaning that for the following sample object, you could apply filters for `name`, `description`, and `subItem`, but NOT for `sampleKey`.

```json
{
  "5ba9452f7de80400007fc52a": {
      "name": "Sample Dataset",
      "description": "Sample dataset containing important data",
      "subitem": {
          "sampleKey": "sampleValue"
      }
  }
}
```

**API format**

```http
GET /{OBJECT_TYPE}?properties={PROPERTY}
GET /{OBJECT_TYPE}?properties={PROPERTY_1},{PROPERTY_2},{PROPERTY_3}
GET /{OBJECT_TYPE}/{OBJECT_ID}?properties={PROPERTY_1},{PROPERTY_2},{PROPERTY_3}
```

| Parameter | Description |
| --- | --- |
| `{OBJECT_TYPE}` | The type of [!DNL Catalog] object to be retrieved. Valid objects are: <ul><li>`accounts`</li><li>`batches`</li><li>`connections`</li><li>`connectors`</li><li>`dataSets`</li><li>`dataSetFiles`</li><li>`dataSetViews`</li></ul>|
| `{PROPERTY}` | The name of an attribute to include in the response body. |
| `{OBJECT_ID}` | The unique identifier of a specific [!DNL Catalog] object being retrieved. |

**Request**

The following request retrieves a list of datasets. The comma-separated list of property names provided under the `properties` parameter indicates the properties to be returned in the response. A `limit` parameter is also included, which limits the number of datasets returned. If the request did not include a `limit` parameter, the response would contain a maximum of 20 objects.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/catalog/dataSets?limit=4&properties=name,schemaRef' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a list of [!DNL Catalog] objects with only the requested properties displayed.

```json
{
    "Dataset1": {
        "name": "Dataset 1",
        "schemaRef": {
            "id": "https://ns.adobe.com/{TENANT_ID}/schemas/bc82c518380478b59a95c63e0f843121",
            "contentType": "application/vnd.adobe.xed+json;version=1"
        }
    },
    "Dataset2": {},
    "Dataset3": {
        "name": {},
    },
    "Dataset4": {
        "name": "Dataset 4",
        "schemaRef": {
            "id": "https://ns.adobe.com/{TENANT_ID}/schemas/142afb78d8b368a5ba97a6cc8fc7e033",
            "contentType": "application/vnd.adobe.xed+json;version=1"
        }
    }
}
```

Based on the response above, the following can be inferred:

* If an object is missing any requested properties, it will only show the requested properties that it does include. (`Dataset1`)
* If an object does not include any of the requested properties, it will appear as an empty object. (`Dataset2`)
* A dataset may return a requested property as an empty object if it contains the property but there is no value. (`Dataset3`)
* Otherwise, the dataset will display the full value of all requested properties. (`Dataset4`)

>[!NOTE]
>
>In the `schemaRef` property for each dataset, the version number indicates the latest minor version of the schema. See the section on [schema versioning](../../xdm/api/getting-started.md#versioning) in the XDM API guide for more information.

## Offset starting index of response list

The `start` query parameter offsets the response list forward by a specified number, using zero-based numbering. For example, `start=2` would offset the response to start on the third listed object.

If the `start` parameter is not paired with a `limit` parameter, the maximum number of objects returned is 20.

**API format**

```http
GET /{OBJECT_TYPE}?start={OFFSET}
```

| Parameter | Description |
| --- | --- |
| `{OBJECT_TYPE}` | The type of Catalog object to be retrieved. Valid objects are: <ul><li>`accounts`</li><li>`batches`</li><li>`connections`</li><li>`connectors`</li><li>`dataSets`</li><li>`dataSetFiles`</li><li>`dataSetViews`</li></ul>|
| `{OFFSET}` | An integer indicating the number of objects to offset the response by. |

**Request**

The following request retrieves a list of datasets, offsetting to the fifth object (`start=4`) and limiting the response to two returned datasets (`limit=2`).

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/catalog/dataSets?start=4&limit=2 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

The response includes a JSON object containing two top-level items (`limit=2`), one for each dataset and their details (details have been condensed in the example). The response is shifted by four (`start=4`), meaning the datasets shown are number five and six chronologically.

```json
{
    "Dataset5": {},
    "Dataset6": {}
}
```

## Filter by tag

Some Catalog objects support the use of a `tags` attribute. Tags can attach information to an object and then be used later to retrieve that object. The choice of what tags to use and how to apply them depends on your organizational processes. 

There are a few limitations to consider when using tags:

* The only Catalog objects that currently support tags are datasets, batches, and connections.
* Tag names are unique to your IMS Organization.
* Adobe processes may leverage tags for certain behaviors. The names of these tags are prefixed with "adobe" as a standard. Therefore, you should avoid this convention when declaring tag names.
* The following tag names are reserved for use across [!DNL Experience Platform], and therefore cannot be declared as a tag name for your organization:
  * `unifiedProfile`: This tag name is reserved for datasets to be ingested by [[!DNL Real-Time Customer Profile]](../../profile/home.md).
  * `unifiedIdentity`: This tag name is reserved for datasets to be ingested by [[!DNL Identity Service]](../../identity-service/home.md).

Below is an example of a dataset that contains a `tags` property. The tags within that property take the form of key-value pairs, with each tag value appearing as an array containing a single string:

```json
{
    "5be1f2ecc73c1714ceba66e2": {
        "imsOrg": "{ORG_ID}",
        "tags": {
            "sampleTag": [
                "123456"
            ],
            "secondTag": [
                "sample_tag_value"
            ]
        },
        "name": "Sample Dataset",
        "description": "Same dataset containing sample data.",
        "dule": {
            "identity": [
                "I1"
            ]
        },
        "statsCache": {},
        "state": "DRAFT",
        "lastBatchId": "ca12b29612bf4052872edad59573703c",
        "lastBatchStatus": "success",
        "lastSuccessfulBatch": "ca12b29612bf4052872edad59573703c",
        "namespace": "{NAMESPACE}",
        "createdUser": "{CREATED_USER}",
        "createdClient": "{CREATED_CLIENT}",
        "updatedUser": "{UPDATED_USER}",
        "version": "1.0.0",
        "created": 1541534444286,
        "updated": 1541534444286
    }
}
```

**API format**

Values for the `tags` parameter take the form of key-value pairs, using the format `{TAG_NAME}:{TAG_VALUE}`. Multiple key-value pairs can be provided in the form of a comma-separated list. When multiple tags are provided, an AND relationship is assumed.

The parameter supports wildcard characters (`*`) for tag values. For example, a search string of `test*` returns any object where the tag value begins with "test". A search string consisting solely of a wildcard can be used to filter objects based on whether or not they contain a specific tag, regardless of its value.

```http
GET /{OBJECT_TYPE}?tags={TAG_NAME}:{TAG_VALUE}
GET /{OBJECT_TYPE}?tags={TAG_NAME_1}:{TAG_VALUE_1},{TAG_NAME_2}:{TAG_VALUE_2}
GET /{OBJECT_TYPE}?tags={TAG_NAME}:{TAG_VALUE}*
GET /{OBJECT_TYPE}?tags={TAG_NAME}:*
```

| Parameter | Description |
| --- | --- |
| `{OBJECT_TYPE}` | The type of [!DNL Catalog] object to be retrieved. Valid objects are: <ul><li>`accounts`</li><li>`batches`</li><li>`connections`</li><li>`dataSets`</li></ul>|
| `{TAG_NAME}` | The name of the tag to filter by. |
| `{TAG_VALUE}` | The value of the tag to filter by. Supports wildcard characters (`*`). |

**Request**

The following request retrieves a list of datasets, filtering by one tag having a specific value AND the second tag being present.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/catalog/dataSets?tags=sampleTag:123456,secondTag:* \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response returns a list of datasets that contain `sampleTag` with a value of "123456", AND `secondTag` with any value. Unless a limit is also specified, the response contains a maximum of 20 objects.

```json
{
    "5b67f4dd9f6e710000ea9da4": {
            "version": "1.0.2",
            "imsOrg": "{ORG_ID}",
            "name": "Example Dataset 1",
            "created": 1533539550237,
            "updated": 1533539552416,
            "createdClient": "{API_KEY}",
            "createdUser": "{USER_ID}",
            "updatedUser": "{USER_ID}",
            "tags": {
                "sampleTag": [
                    "123456"
                ],
                "secondTag": [
                    "Example tag value"
                ]
            },
            "dule": {},
            "statsCache": {}
    },
    "5b1e3c867e6d2600003d5b49": {
            "version": "1.0.0",
            "imsOrg": "{ORG_ID}",
            "name": "Example Dataset 2",
            "created": 1533539550237,
            "updated": 1533539552416,
            "createdClient": "{API_KEY}",
            "createdUser": "{USER_ID}",
            "updatedUser": "{USER_ID}",
            "tags": {
                "sampleTag": [
                    "123456"
                ],
                "secondTag": [
                    "A different tag value"
                ],
                "anotherTag": [
                    "2.0"
                ]
            },
            "dule": {},
            "statsCache": {}
    }
}
```

## Filter by date range

Some endpoints in the [!DNL Catalog] API have query parameters that allow for ranged queries, most often in the case of dates.

**API format**

```http
GET /batches?createdAfter={TIMESTAMP_1}&createdBefore={TIMESTAMP_2}
```

| Parameter | Description |
| --- | --- |
| `{TIMESTAMP }` | A datetime integer in Unix Epoch time. |

**Request**

The following request retrieves a list of batches created during the month of April 2019.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/catalog/batches?createdAfter=1554076800000&createdBefore=1556668799000' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response contains a list of [!DNL Catalog] objects that fall within the specified date range. Unless a limit is also specified, the response contains a maximum of 20 objects.

```json
{
    "5b67f4dd9f6e710000ea9da4": {
            "version": "1.0.2",
            "imsOrg": "{ORG_ID}",
            "name": "Example Dataset 1",
            "created": 1554930967705,
            "updated": 1554931119718,
            "createdClient": "{API_KEY}",
            "createdUser": "{USER_ID}",
            "updatedUser": "{USER_ID}",
            "dule": {},
            "statsCache": {}
    },
    "5b1e3c867e6d2600003d5b49": {
            "version": "1.0.0",
            "imsOrg": "{ORG_ID}",
            "name": "Example Dataset 2",
            "created": 1554974386247,
            "updated": 1554974386268,
            "createdClient": "{API_KEY}",
            "createdUser": "{USER_ID}",
            "updatedUser": "{USER_ID}",
            "dule": {},
            "statsCache": {}
    }
}
```

## Sort by property

The `orderBy` query parameter allows you to sort (order) response data based on a specified property value. This parameter requires a "direction" (`asc` for ascending or `desc` for descending), followed by a colon (`:`) and then a property to sort the results by. If a direction is not specified, the default direction is ascending.

Multiple sorting properties can be provided in a comma-separated list. If the first sorting property produces multiple objects that contain the same value for that property, the second sorting property is then used to further sort those matching objects.

For example, consider the following query: `orderBy=name,desc:created`. Results are sorted in ascending order based on the first sorting property, `name`. In cases where multiple records share the same `name` property, those matching records are then sorted by the second sorting property, `created`. If no returned records share the same `name`, the `created` property does not factor into the sorting.


**API format**

```http
GET /{OBJECT_TYPE}?orderBy=asc:{PROPERTY_NAME}
GET /{OBJECT_TYPE}?orderBy=desc:{PROPERTY_NAME}
GET /{OBJECT_TYPE}?orderBy={PROPERTY_NAME_1},desc:{PROPERTY_NAME_2}
```

| Parameter | Description |
| --- | --- |
| `{OBJECT_TYPE}` | The type of Catalog object to be retrieved. Valid objects are: <ul><li>`accounts`</li><li>`batches`</li><li>`connections`</li><li>`connectors`</li><li>`dataSets`</li><li>`dataSetFiles`</li><li>`dataSetViews`</li></ul>|
| `{PROPERTY_NAME}` | The name of a property to sort the results by. |

**Request**

The following request retrieves a list of datasets sorted by their `name` property. If any datasets share the same `name`, those datasets will in turn be ordered by their `updated` property in descending order.

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/catalog/dataSets?orderBy=name,desc:updated' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response contains a list of [!DNL Catalog] objects that are sorted according to the `orderBy` parameter. Unless a limit is also specified, the response contains a maximum of 20 objects. 

```json
{
    "5b67f4dd9f6e710000ea9da4": {
            "version": "1.0.2",
            "imsOrg": "{ORG_ID}",
            "name": "0405",
            "created": 1554930967705,
            "updated": 1554931119718,
            "createdClient": "{API_KEY}",
            "createdUser": "{USER_ID}",
            "updatedUser": "{USER_ID}",
            "dule": {},
            "statsCache": {}
    },
    "5b1e3c867e6d2600003d5b49": {
            "version": "1.0.3",
            "imsOrg": "{ORG_ID}",
            "name": "AAM Dataset",
            "created": 1554974386247,
            "updated": 1554974386268,
            "createdClient": "{API_KEY}",
            "createdUser": "{USER_ID}",
            "updatedUser": "{USER_ID}",
            "dule": {},
            "statsCache": {}
    },
    "5cd3a129ec106214b722a939": {
            "version": "1.0.2",
            "imsOrg": "{ORG_ID}",
            "name": "AAM Dataset",
            "created": 1554028394852,
            "updated": 1554130582960,
            "createdClient": "{API_KEY}",
            "createdUser": "{USER_ID}",
            "updatedUser": "{USER_ID}",
            "dule": {},
            "statsCache": {}
    }
}
```

## Filter by property

[!DNL Catalog] provides two methods of filtering by property, which are further outlined in the sections that follow:

* [Using simple filters](#using-simple-filters): Filter by whether a specific property matches a specific value.
* [Using the property parameter](#using-the-property-parameter): Use conditional expressions to filter based whether a property exists, or if a property's value matches, approximates, or compares to another specified value or regular expression.

### Using simple filters {#using-simple-filters}

Simple filters allow you to filter responses based on specific property values. A simple filter takes the form of `{PROPERTY_NAME}={VALUE}`.

For example, the query `name=exampleName` returns only objects whose `name` property contains a value of "exampleName". By contrast, the query `name=!exampleName` returns only objects whose `name` property is **not** "exampleName".

In addition, simple filters support the ability to query for multiple values for a single property. When multiple values are provided, the response returns objects whose property matches **any** of the values in the provided list. You can invert a multi-value query by prefixing a `!` character to the list, returning only objects whose property value is **not** in the provided list (for example, `name=!exampleName,anotherName`).

**API format**

```http
GET /{OBJECT_TYPE}?{PROPERTY_NAME}={VALUE}
GET /{OBJECT_TYPE}?{PROPERTY_NAME}=!{VALUE}
GET /{OBJECT_TYPE}?{PROPERTY_NAME}={VALUE_1},{VALUE_2},{VALUE_3}
GET /{OBJECT_TYPE}?{PROPERTY_NAME}=!{VALUE_1},{VALUE_2},{VALUE_3}
```

| Parameter | Description |
| --- | --- |
| `{OBJECT_TYPE}` | The type of [!DNL Catalog] object to be retrieved. Valid objects are: <ul><li>`accounts`</li><li>`batches`</li><li>`connections`</li><li>`connectors`</li><li>`dataSets`</li><li>`dataSetFiles`</li><li>`dataSetViews`</li></ul>|
| `{PROPERTY_NAME}` | The name of the property whose value you want to filter by. |
| `{VALUE}` | A property value that determines which results to include (or exclude, depending on the query). |

**Request**

The following request retrieves a list of datasets, filtered to include only datasets whose `name` property has a value of "exampleName" or "anotherName".

```shell
curl -X GET \
  'https://platform.adobe.io/data/foundation/catalog/dataSets?name=exampleName,anotherName' \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response contains a list of datasets, excluding any datasets whose `name` is "exampleName" or "anotherName". Unless a limit is also specified, the response contains a maximum of 20 objects. 

```json
{
    "5b67f4dd9f6e710000ea9da4": {
            "version": "1.0.2",
            "imsOrg": "{ORG_ID}",
            "name": "exampleName",
            "created": 1554930967705,
            "updated": 1554931119718,
            "createdClient": "{API_KEY}",
            "createdUser": "{USER_ID}",
            "updatedUser": "{USER_ID}",
            "dule": {},
            "statsCache": {}
    },
    "5b1e3c867e6d2600003d5b49": {
            "version": "1.0.3",
            "imsOrg": "{ORG_ID}",
            "name": "anotherName",
            "created": 1554974386247,
            "updated": 1554974386268,
            "createdClient": "{API_KEY}",
            "createdUser": "{USER_ID}",
            "updatedUser": "{USER_ID}",
            "dule": {},
            "statsCache": {}
    }
}
```

### Using the `property` parameter {#using-the-property-parameter}

The `property` query parameter provides more flexibility for property-based filtering than simple filters. In addition to filtering based on whether a property has a specific value, the `property` parameter can use other comparison operators (such as "more-than" (`>`) and "less-than" (`<`)) as well as regular expressions to filter by property values. It can also filter by whether or not a property exists, regardless of its value.

The `property` parameter only accepts top-level object properties, meaning that for the following sample object, you could filter by property for `name`, `description`, and `subItem`, but NOT for `sampleKey`.

```json
{
  "5ba9452f7de80400007fc52a": {
      "name": "Sample Dataset",
      "description": "Sample dataset containing important data",
      "subitem": {
          "sampleKey": "sampleValue"
      }
  }
}
```

**API format**

```http
GET /{OBJECT_TYPE}?property={CONDITION}
```

| Parameter | Description |
| --- | --- |
| `{OBJECT_TYPE}` | The type of [!DNL Catalog] object to be retrieved. Valid objects are: <ul><li>`accounts`</li><li>`batches`</li><li>`connections`</li><li>`connectors`</li><li>`dataSets`</li><li>`dataSetFiles`</li><li>`dataSetViews`</li></ul>|
| `{CONDITION}` | A conditional expression that indicates which property to query for, and how its value is to be evaluated. Examples are provided below. |

The value of the `property` parameter supports several different kinds of conditional expressions. The following table outlines the basic syntax for supported expressions:

| Symbol(s) | Description | Example |
| --- | --- | --- |
| (None) | Stating the property name with no operator returns only objects where the property exists, regardless of its value. | `property=name` |
| ! | Prefixing a "`!`" to the value of a `property` parameter returns only objects where the property does **not** exist. | `property=!name` |
| ~ | Returns only objects whose property values (string) match a regular expression provided after the tilde (`~`) symbol. | `property=name~^example` |
| == | Returns only objects whose property values exactly match the string provided after the double-equals symbol (`==`). | `property=name==exampleName` |
| != | Returns only objects whose property values do **not** match string provided after the not-equals symbol (`!=`). | `property=name!=exampleName` |
| < | Returns only objects whose property values are less than (but not equal to) a stated amount. | `property=version<1.0.0` |
| <= | Returns only objects whose property values are less than (or equal to) a stated amount. | `property=version<=1.0.0` |
| > | Returns only objects whose property values are greater than (but not equal to) a stated amount. | `property=version>1.0.0` |
| >= | Returns only objects whose property values are greater than (or equal to) a stated amount. | `property=version>=1.0.0` |

>[!NOTE]
>
>The `name` property supports the use of a wildcard `*`, either as the entire search string or as a part of it. Wildcards match empty characters, such that the search string `te*st` will match the value "test". Asterisks are escaped by doubling them (`**`). A double-asterisk in a search string represents a single asterisk as a literal string.

**Request**

The following request will return any datasets with a version number greater than 1.0.3.

```shell
curl -X GET \
  https://platform.adobe.io/data/foundation/catalog/dataSets?property=version>1.0.3 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'x-sandbox-name: {SANDBOX_NAME}'
```

**Response**

A successful response contains a list of datasets whose version numbers are greater than 1.0.3. Unless a limit is also specified, the response contains a maximum of 20 objects.

```json
{
    "5b67f4dd9f6e710000ea9da4": {
            "version": "1.1.2",
            "imsOrg": "{ORG_ID}",
            "name": "sampleDataset",
            "created": 1554930967705,
            "updated": 1554931119718,
            "createdClient": "{API_KEY}",
            "createdUser": "{USER_ID}",
            "updatedUser": "{USER_ID}",
            "dule": {},
            "statsCache": {}
    },
    "5b1e3c867e6d2600003d5b49": {
            "version": "1.0.6",
            "imsOrg": "{ORG_ID}",
            "name": "exampleDataset",
            "created": 1554974386247,
            "updated": 1554974386268,
            "createdClient": "{API_KEY}",
            "createdUser": "{USER_ID}",
            "updatedUser": "{USER_ID}",
            "dule": {},
            "statsCache": {}
    },
    "5cd3a129ec106214b722a939": {
            "version": "1.0.4",
            "imsOrg": "{ORG_ID}",
            "name": "anotherDataset",
            "created": 1554028394852,
            "updated": 1554130582960,
            "createdClient": "{API_KEY}",
            "createdUser": "{USER_ID}",
            "updatedUser": "{USER_ID}",
            "dule": {},
            "statsCache": {}
    }
}
```

## Combine multiple filters

Using an ampersand (`&`), you can combine multiple filters in a single request. When additional conditions are added to a request, an AND relationship is assumed. 

**API format**

```http
GET /{OBJECT_TYPE}?{FILTER_1}={VALUE}&{FILTER_2}={VALUE}&{FILTER_3}={VALUE}
```
