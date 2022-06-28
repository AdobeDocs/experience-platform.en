---
title: Search endpoint
description: Learn how to make calls to the /search endpoint in the Reactor API.
exl-id: 14eb8d8a-3b42-42f3-be87-f39e16d616f4
---
# Search endpoint

The `/search` endpoint in the Reactor API provides a way to find resources matching desired criteria, expressed as a query.

The following API resource types are searchable, utilizing the same data structure as the resource-based documents returned across the API:

* `audit_events`
* `builds`
* `callbacks`
* `data_elements`
* `environments`
* `extension_packages`
* `extensions`
* `hosts`
* `libraries`
* `properties`
* `rule_components`
* `rules`

All queries are scoped to the your current company and accessible properties.

>[!IMPORTANT]
>
>The search functionality has the following caveats and exceptions:
>* meta is not searchable and not returned in search results.
>* Schema fields for extension package delegates (actions, conditions, etc.) are searchable as text, not as a nested data structure.
>* Range queries presently only support integers.

For more in-depth information on how to use this functionality, refer to the [searching guide](../guides/search.md).

## Getting started

The endpoint used in this guide is part of the [Reactor API](https://www.adobe.io/experience-platform-apis/references/reactor/). Before continuing, please review the [getting started guide](../getting-started.md) for important information regarding how to authenticate to the API.

## Perform a search {#perform}

You can perform a search by making a POST request.

**API format**

```http
POST /search
```

**Request**

```shell
curl -X POST \
  https://reactor.adobe.io/search \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H "Content-Type: application/vnd.api+json" \
  -H 'Accept: application/vnd.api+json;revision=1' \
  -d '{
        "data": {
          "from": 0,
          "size": 25,
          "query": {
            "attributes.name": {
              "value": "Performance"
            },
            "attributes.revision_number": {
              "range": {
                "lte": "2",
                "gt": "0"
              }
            }
          },
          "sort": [
            {
              "attributes.revision_number": "desc"
            }
          ],
          "resource_types": [
            "data_elements",
            "rule_components"
          ]
        }
      }'
```

| Property | Description |
| --- | --- |
| `from` | The number of results to offset the response by. |
| `size` | The maximum amount of results to return. Results cannot exceed 100 items. |
| `query` | An object that represents the search query. For each property in this object, the key must represent a field path to query by, and the value must be an object whose sub-properties determine what to query for.<br><br>For each field path, you can use the following sub-properties:<ul><li>`exists`: Returns true if the field exists in the resource.</li><li>`value`: Returns true if the field's value matches the value of this property.</li><li>`value_operator`: Boolean logic used to determine how a `value` query should handled. Allowed values are `AND` and `OR`. When excluded, `AND` logic is assumed. See the section on [value operator logic](#value-operator) for more information.</li><li>`range` Returns true if the field's value falls within a specific numerical range. The range itself is determined by the following sub-properties:<ul><li>`gt`: Greater than the supplied value, non-inclusive.</li><li>`gte`: Greater than or equal to the supplied value.</li><li>`lt`: Less than the supplied value, non-inclusive.</li><li>`lte`: Less than or equal to the supplied value.</li></ul></li></ul> |
| `sort` | An array of objects, indicating the order in which to sort results. Each object must contain a single property: the key represents the field path to sort by, and the value represents the sort order (`asc` for ascending, `desc` for descending). |
| `resource_types` | An array of strings, indicating the specific resource types to search. |

{style="table-layout:auto"}

**Response**

A successful response returns a list of matching resources for the query. For details on how the API determines matches for specific values, see the appendix section on [matching conventions](#conventions).

```json
{
  "data": [
    {
      "id": "DE5d11b3ed301d4ce99b530a5121e392b2",
      "type": "data_elements",
      "attributes": {
        "created_at": "2020-12-14T17:36:09.045Z",
        "deleted_at": null,
        "dirty": true,
        "enabled": true,
        "name": "Performance Indicator",
        "published": false,
        "published_at": null,
        "revision_number": 1,
        "updated_at": "2020-12-14T17:36:09.045Z",
        "clean_text": false,
        "default_value": null,
        "delegate_descriptor_id": "kessel-test::dataElements::dom-attribute",
        "force_lower_case": false,
        "review_status": "unsubmitted",
        "storage_duration": null,
        "settings": "{\"elementProperty\":\"html\",\"elementSelector\":\".target-element\"}"
      },
      "relationships": {
        "libraries": {
          "links": {
            "related": "https://reactor.adobe.io/data_elements/DE5d11b3ed301d4ce99b530a5121e392b2/libraries"
          }
        },
        "revisions": {
          "links": {
            "related": "https://reactor.adobe.io/data_elements/DE5d11b3ed301d4ce99b530a5121e392b2/revisions"
          }
        },
        "notes": {
          "links": {
            "related": "https://reactor.adobe.io/data_elements/DE5d11b3ed301d4ce99b530a5121e392b2/notes"
          }
        },
        "property": {
          "links": {
            "related": "https://reactor.adobe.io/data_elements/DE5d11b3ed301d4ce99b530a5121e392b2/property"
          },
          "data": {
            "id": "PR97d92a379a5f48758947cdf44f607a0d",
            "type": "properties"
          }
        },
        "origin": {
          "links": {
            "related": "https://reactor.adobe.io/data_elements/DE5d11b3ed301d4ce99b530a5121e392b2/origin"
          },
          "data": {
            "id": "DE5d11b3ed301d4ce99b530a5121e392b2",
            "type": "data_elements"
          }
        },
        "extension": {
          "links": {
            "related": "https://reactor.adobe.io/data_elements/DE5d11b3ed301d4ce99b530a5121e392b2/extension"
          },
          "data": {
            "id": "EX0348d463358c4c89afe726245576f112",
            "type": "extensions"
          }
        },
        "updated_with_extension_package": {
          "links": {
            "related": "https://reactor.adobe.io/data_elements/DE5d11b3ed301d4ce99b530a5121e392b2/updated_with_extension_package"
          },
          "data": {
            "id": "EP75db2452065b44e2b8a38ca883ce369a",
            "type": "extension_packages"
          }
        },
        "updated_with_extension": {
          "links": {
            "related": "https://reactor.adobe.io/data_elements/DE5d11b3ed301d4ce99b530a5121e392b2/updated_with_extension"
          },
          "data": {
            "id": "EX1cc78b39339242da82a0e0752fa53375",
            "type": "extensions"
          }
        }
      },
      "links": {
        "property": "https://reactor.adobe.io/properties/PR97d92a379a5f48758947cdf44f607a0d",
        "origin": "https://reactor.adobe.io/data_elements/DE5d11b3ed301d4ce99b530a5121e392b2",
        "self": "https://reactor.adobe.io/data_elements/DE5d11b3ed301d4ce99b530a5121e392b2",
        "extension": "https://reactor.adobe.io/extensions/EX0348d463358c4c89afe726245576f112"
      },
      "meta": {
        "latest_revision_number": 1
      }
    }
  ],
  "meta": {
    "total_hits": 1
  }
}
```

## Appendix

The following section contains additional information about using the `/search` endpoint.

### Value operator logic {#value-operator}

Search query values are split into terms to match against indexed documents. Between each term, an `AND` relationship is assumed.

When using `AND` as the `value_operator`, a query value of `My Rule Holiday Sale` is interpreted as documents with a field containing `My AND Rule AND Holiday AND Sale`.

When using `OR` as the `value_operator`, a query value of `My Rule Holiday Sale` is interpreted as documents with a field containing `My OR Rule OR Holiday OR Sale`. The more terms that match, the higher the `match_score`. Due to the nature of partial term matching, when nothing closely matches the desired value, you can obtain a result set where the value is matched only on a very basic level, such as a few characters of text.

### Matching conventions {#conventions}

Search is concerned with answering how relevant a document is to a supplied query. The way document data is analyzed and indexed directly affects this. 

The following table breaks down the match conventions for common field types:

| Field type | Match conventions |
| --- | --- |
| Strings | Text with a partial term analysis, case-insensitive |
| Enum values | Exact match, case-sensitive |
| Integers | Exact match |
| Floats | Exact match |
| Timestamps | Exact match (DateTime format) |
| Display names | Text with a partial term analysis, case-insensitive |

There are additional conventions for specific fields that appear in the API:

| Field | Match conventions |
| --- | --- |
| `id` | Exact match, case-sensitive |
| `delegate_descriptor_id` | Exact match, case-sensitive, with terms split on `::` |
| `name` | Exact match, case-sensitive |
| `settings` | Text with a partial term analysis, case-insensitive |
| `type` | Exact match, case-sensitive |
