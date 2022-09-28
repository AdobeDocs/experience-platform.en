---
title: Rules endpoint
description: Learn how to make calls to the /rules endpoint in the Reactor API.
exl-id: 79ef4389-e4b7-461e-8579-16a1a78cdd43
---
# Rules endpoint

In the context of data collection tags, rules control the behavior of the resources in a deployed library. A rule is composed of one or more [rule components](./rule-components.md), exists to tie the rule components together in a logical way. The `/rules` endpoint in the Reactor API allows you to manage tag rules programmatically.

>[!NOTE]
>
>This document covers how to manage rules in the Reactor API. For information on how to interact with rules in the UI, refer to the [UI guide](../../ui/managing-resources/rules.md).

A rule belongs to exactly one [property](./properties.md). A property can have many rules.

## Getting started

The endpoint used in this guide is part of the [Reactor API](https://www.adobe.io/experience-platform-apis/references/reactor/). Before continuing, please review the [getting started guide](../getting-started.md) for important information regarding how to authenticate to the API.

## Retrieve a list of rules {#list}

You can retrieve a list of rules belonging to a property by including by making a GET request.

**API format**

```http
GET /properties/{PROPERTY_ID}/rules
```

| Parameter | Description |
| --- | --- |
| `PROPERTY_ID` | The `id` of the property whose components you want to list. |

{style="table-layout:auto"}

>[!NOTE]
>
>Using query parameters, listed rules can be filtered based on the following attributes:<ul><li>`created_at`</li><li>`dirty`</li><li>`enabled`</li><li>`name`</li><li>`origin_id`</li><li>`published`</li><li>`published_at`</li><li>`revision_number`</li><li>`updated_at`</li></ul>See the guide on [filtering responses](../guides/filtering.md) for more information.

**Request**

```shell
curl -X GET \
  https://reactor.adobe.io/properties/PR41f64d2a9d9b4862b0582c5ff6a07504/rules \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H "Content-Type: application/vnd.api+json" \
  -H 'Accept: application/vnd.api+json;revision=1'
```

**Response**

A successful response returns a list of rules for the specified property.

```json
{
  "data": [
    {
      "id": "RL8429f3fee98b44c68f7a538e68e21747",
      "type": "rules",
      "attributes": {
        "created_at": "2020-12-14T17:56:44.109Z",
        "deleted_at": null,
        "dirty": true,
        "enabled": true,
        "name": "Example Rule",
        "published": false,
        "published_at": null,
        "revision_number": 0,
        "updated_at": "2020-12-14T17:56:44.109Z",
        "review_status": "unsubmitted"
      },
      "relationships": {
        "libraries": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL8429f3fee98b44c68f7a538e68e21747/libraries"
          }
        },
        "revisions": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL8429f3fee98b44c68f7a538e68e21747/revisions"
          }
        },
        "notes": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL8429f3fee98b44c68f7a538e68e21747/notes"
          }
        },
        "property": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL8429f3fee98b44c68f7a538e68e21747/property"
          },
          "data": {
            "id": "PR41f64d2a9d9b4862b0582c5ff6a07504",
            "type": "properties"
          }
        },
        "origin": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL8429f3fee98b44c68f7a538e68e21747/origin"
          },
          "data": {
            "id": "RL8429f3fee98b44c68f7a538e68e21747",
            "type": "rules"
          }
        },
        "rule_components": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL8429f3fee98b44c68f7a538e68e21747/rule_components"
          }
        }
      },
      "links": {
        "property": "https://reactor.adobe.io/properties/PR41f64d2a9d9b4862b0582c5ff6a07504",
        "origin": "https://reactor.adobe.io/rules/RL8429f3fee98b44c68f7a538e68e21747",
        "self": "https://reactor.adobe.io/rules/RL8429f3fee98b44c68f7a538e68e21747",
        "rule_components": "https://reactor.adobe.io/rules/RL8429f3fee98b44c68f7a538e68e21747/rule_components"
      },
      "meta": {
        "latest_revision_number": 0
      }
    }
  ],
  "meta": {
    "pagination": {
      "current_page": 1,
      "next_page": null,
      "prev_page": null,
      "total_pages": 1,
      "total_count": 1
    }
  }
}
```

## Look up a rule {#lookup}

You can look up a rule by providing its ID in the path of a GET request.

>[!NOTE]
>
>When rules are deleted, they are marked as deleted but are not actually removed from system. Therefore, it is possible to retrieve a deleted rule. Deleted rules can be identified by the presence of a `meta.deleted_at` property.

**API format**

```http
GET /rules/{RULE_ID}
```

| Parameter | Description |
| --- | --- |
| `RULE_ID` | The `id` of the rule that you want to look up. |

{style="table-layout:auto"}

**Request**

```shell
curl -X GET \
  https://reactor.adobe.io/rules/RL14dc6a8c37b14b619ddb2b3ba489a1f5 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H "Content-Type: application/vnd.api+json" \
  -H 'Accept: application/vnd.api+json;revision=1'
```

**Response**

A successful response returns the details of the rule.

```json
{
  "data": {
    "id": "RL14dc6a8c37b14b619ddb2b3ba489a1f5",
    "type": "rules",
    "attributes": {
      "created_at": "2020-12-14T17:56:33.188Z",
      "deleted_at": null,
      "dirty": true,
      "enabled": true,
      "name": "Example Rule",
      "published": false,
      "published_at": null,
      "revision_number": 0,
      "updated_at": "2020-12-14T17:56:33.188Z",
      "review_status": "unsubmitted"
    },
    "relationships": {
      "libraries": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RL14dc6a8c37b14b619ddb2b3ba489a1f5/libraries"
        }
      },
      "revisions": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RL14dc6a8c37b14b619ddb2b3ba489a1f5/revisions"
        }
      },
      "notes": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RL14dc6a8c37b14b619ddb2b3ba489a1f5/notes"
        }
      },
      "property": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RL14dc6a8c37b14b619ddb2b3ba489a1f5/property"
        },
        "data": {
          "id": "PRfa164e39b0d74eb5b093ab963b1f1200",
          "type": "properties"
        }
      },
      "origin": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RL14dc6a8c37b14b619ddb2b3ba489a1f5/origin"
        },
        "data": {
          "id": "RL14dc6a8c37b14b619ddb2b3ba489a1f5",
          "type": "rules"
        }
      },
      "rule_components": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RL14dc6a8c37b14b619ddb2b3ba489a1f5/rule_components"
        }
      }
    },
    "links": {
      "property": "https://reactor.adobe.io/properties/PRfa164e39b0d74eb5b093ab963b1f1200",
      "origin": "https://reactor.adobe.io/rules/RL14dc6a8c37b14b619ddb2b3ba489a1f5",
      "self": "https://reactor.adobe.io/rules/RL14dc6a8c37b14b619ddb2b3ba489a1f5",
      "rule_components": "https://reactor.adobe.io/rules/RL14dc6a8c37b14b619ddb2b3ba489a1f5/rule_components"
    },
    "meta": {
      "latest_revision_number": 0
    }
  }
}
```

## Create a rule {#create}

You can create a new rule by making a POST request.

**API format**

```http
POST /properties/{PROPERTY_ID}/rules
```

| Parameter | Description |
| --- | --- |
| `PROPERTY_ID` | The `id` of the property that you are defining a rule under. |

{style="table-layout:auto"}

**Request**

```shell
curl -X POST \
  https://reactor.adobe.io/properties/PR03cc61073ef74fd2af21e4cfb6ed97a7/rules \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'Content-Type: application/json' \
  -d '{
        "data": {
          "attributes": {
            "name": "Example Rule",
            "enabled": true,
          },
          "type": "rules"
        }
      }'
```

| Property | Description |
| --- | --- |
| `attributes.name` | **(Required)** A human-readable name for the rule. |
| `attributes.enabled` | A boolean value indicating whether the rule is enabled. |
| `type` |  The type of resource being created. For this endpoint, the value must be `rules`. |

{style="table-layout:auto"}

**Response**

A successful response return the details of the newly created rule. 

```json
{
  "data": {
    "id": "RL52d156a9074844b89ca20c987dbafd3b",
    "type": "rules",
    "attributes": {
      "created_at": "2020-12-14T17:31:46.883Z",
      "deleted_at": null,
      "dirty": true,
      "enabled": true,
      "name": "Example Rule",
      "published": false,
      "published_at": null,
      "revision_number": 0,
      "updated_at": "2020-12-14T17:31:46.883Z",
      "review_status": "unsubmitted"
    },
    "relationships": {
      "libraries": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RL52d156a9074844b89ca20c987dbafd3b/libraries"
        }
      },
      "revisions": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RL52d156a9074844b89ca20c987dbafd3b/revisions"
        }
      },
      "notes": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RL52d156a9074844b89ca20c987dbafd3b/notes"
        }
      },
      "property": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RL52d156a9074844b89ca20c987dbafd3b/property"
        },
        "data": {
          "id": "PR03cc61073ef74fd2af21e4cfb6ed97a7",
          "type": "properties"
        }
      },
      "origin": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RL52d156a9074844b89ca20c987dbafd3b/origin"
        },
        "data": {
          "id": "RL52d156a9074844b89ca20c987dbafd3b",
          "type": "rules"
        }
      },
      "rule_components": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RL52d156a9074844b89ca20c987dbafd3b/rule_components"
        }
      }
    },
    "links": {
      "property": "https://reactor.adobe.io/properties/PR03cc61073ef74fd2af21e4cfb6ed97a7",
      "origin": "https://reactor.adobe.io/rules/RL52d156a9074844b89ca20c987dbafd3b",
      "self": "https://reactor.adobe.io/rules/RL52d156a9074844b89ca20c987dbafd3b",
      "rule_components": "https://reactor.adobe.io/rules/RL52d156a9074844b89ca20c987dbafd3b/rule_components"
    },
    "meta": {
      "latest_revision_number": 0
    }
  }
}
```

## Add events, conditions, and actions to a rule {#components}

Once you've [created a rule](#create), you can start building out its logic by adding events, conditions, and actions (collectively referred to as rule components). Refer to the section on [creating a rule component](./rule-components.md#create) in the `/rule_components` endpoint guide to learn how to do this in the Reactor API.

## Update a rule {#update}

You can update the attributes of a rule by including its ID in the path of a PATCH request.

**API format**

```http
PATCH /rules/{RULE_ID}
```

| Parameter | Description |
| --- | --- |
| `RULE_ID` | The `id` of the rule that you want to update. |

{style="table-layout:auto"}

**Request**

The following request updates the `name` of an existing rule.

```shell
curl -X PATCH \
  https://reactor.adobe.io/rules/RLd2528a53c21a468f93cfd85244f16fdd \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'Content-Type: application/json' \
  -d '{
  "data": {
    "attributes": {
      "name": "Test Rule"
    },
    "id": "RLd2528a53c21a468f93cfd85244f16fdd",
    "type": "rules"
  }
}'
```

| Property | Description |
| --- | --- |
| `attributes` | An object whose rules represent the attributes to be updated for the rule. The following attributes can be updated for a rule: <ul><li>`name`</li><li>`enabled`</li></ul> |
| `id` | The `id` of the rule you want to update. This should match the `{RULE_ID}` value provided in the request path. |
| `type` | The type of resource being updated. For this endpoint, the value must be `rules`. |

{style="table-layout:auto"}

**Response**

A successful response returns the details of the updated rule.

```json
{
  "data": {
    "id": "RLd2528a53c21a468f93cfd85244f16fdd",
    "type": "rules",
    "attributes": {
      "created_at": "2020-12-14T17:56:55.026Z",
      "deleted_at": null,
      "dirty": true,
      "enabled": true,
      "name": "Test Rule",
      "published": false,
      "published_at": null,
      "revision_number": 0,
      "updated_at": "2020-12-14T17:56:55.717Z",
      "review_status": "unsubmitted"
    },
    "relationships": {
      "libraries": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RLd2528a53c21a468f93cfd85244f16fdd/libraries"
        }
      },
      "revisions": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RLd2528a53c21a468f93cfd85244f16fdd/revisions"
        }
      },
      "notes": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RLd2528a53c21a468f93cfd85244f16fdd/notes"
        }
      },
      "property": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RLd2528a53c21a468f93cfd85244f16fdd/property"
        },
        "data": {
          "id": "PR7e37a33354cc4aa7880f2a550c4f844f",
          "type": "properties"
        }
      },
      "origin": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RLd2528a53c21a468f93cfd85244f16fdd/origin"
        },
        "data": {
          "id": "RLd2528a53c21a468f93cfd85244f16fdd",
          "type": "rules"
        }
      },
      "rule_components": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RLd2528a53c21a468f93cfd85244f16fdd/rule_components"
        }
      }
    },
    "links": {
      "property": "https://reactor.adobe.io/properties/PR7e37a33354cc4aa7880f2a550c4f844f",
      "origin": "https://reactor.adobe.io/rules/RLd2528a53c21a468f93cfd85244f16fdd",
      "self": "https://reactor.adobe.io/rules/RLd2528a53c21a468f93cfd85244f16fdd",
      "rule_components": "https://reactor.adobe.io/rules/RLd2528a53c21a468f93cfd85244f16fdd/rule_components"
    },
    "meta": {
      "latest_revision_number": 0
    }
  }
}
```

## Delete a rule

You can delete a rule by including its ID in the path of a DELETE request.

**API format**

```http
DELETE /rules/{RULE_ID}
```

| Parameter | Description |
| --- | --- |
| `RULE_ID` | The `id` of the rule that you want to delete. |

{style="table-layout:auto"}

**Request**

```shell
curl -X DELETE \
  https://reactor.adobe.io/rules/RLd2528a53c21a468f93cfd85244f16fdd \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}'
```

**Response**

A successful response returns HTTP status 204 (No Content) with no response body, indicating that the rule has been deleted.

## Manage notes for a rule {#notes}

Rules are "notable" resources, meaning you can create and retrieve text-based notes on each individual resource. See the [notes endpoint guide](./notes.md) for more information on how to manage notes for rules and other compatible resources.

## Retrieve related resources for a rule {#related}

The following calls demonstrate how to retrieve the related resources for a rule. When [looking up a rule](#lookup), these relationships are listed under the `relationships` rule.

See the [relationships guide](../guides/relationships.md) for more information on relationships in the Reactor API.

### List the related libraries for a rule {#libraries}

You can list the libraries that utilize a particular rule by appending `/libraries` to the path of a lookup request.

**API format**

```http
GET  /rules/{RULE_ID}/libraries
```

| Parameter | Description |
| --- | --- |
| `{RULE_ID}` | The `id` of the rule whose libraries you want to list. |

{style="table-layout:auto"}

**Request**

```shell
curl -X GET \
  https://reactor.adobe.io/rules/RLd2528a53c21a468f93cfd85244f16fdd/libraries \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H "Content-Type: application/vnd.api+json" \
  -H 'Accept: application/vnd.api+json;revision=1'
```

**Response**

A successful response returns a list of libraries that use the specified rule.

```json
{
  "data": [
    {
      "id": "LB62d20ad807a949e6b13b0a2c7299eb65",
      "type": "libraries",
      "attributes": {
        "created_at": "2020-12-14T17:50:19.589Z",
        "name": "My Library",
        "published_at": null,
        "state": "development",
        "updated_at": "2020-12-14T17:50:19.589Z",
        "build_required": true
      },
      "relationships": {
        "builds": {
          "links": {
            "related": "https://reactor.adobe.io/libraries/LB62d20ad807a949e6b13b0a2c7299eb65/builds"
          }
        },
        "environment": {
          "links": {
            "self": "https://reactor.adobe.io/libraries/LB62d20ad807a949e6b13b0a2c7299eb65/relationships/environment"
          },
          "data": null
        },
        "data_elements": {
          "links": {
            "related": "https://reactor.adobe.io/libraries/LB62d20ad807a949e6b13b0a2c7299eb65/data_elements",
            "self": "https://reactor.adobe.io/libraries/LB62d20ad807a949e6b13b0a2c7299eb65/relationships/data_elements"
          }
        },
        "extensions": {
          "links": {
            "related": "https://reactor.adobe.io/libraries/LB62d20ad807a949e6b13b0a2c7299eb65/extensions",
            "self": "https://reactor.adobe.io/libraries/LB62d20ad807a949e6b13b0a2c7299eb65/relationships/extensions"
          }
        },
        "notes": {
          "links": {
            "related": "https://reactor.adobe.io/libraries/LB62d20ad807a949e6b13b0a2c7299eb65/notes"
          }
        },
        "rules": {
          "links": {
            "related": "https://reactor.adobe.io/libraries/LB62d20ad807a949e6b13b0a2c7299eb65/rules",
            "self": "https://reactor.adobe.io/libraries/LB62d20ad807a949e6b13b0a2c7299eb65/relationships/rules"
          }
        },
        "upstream_library": {
          "data": null
        },
        "property": {
          "links": {
            "related": "https://reactor.adobe.io/libraries/LB62d20ad807a949e6b13b0a2c7299eb65/property"
          },
          "data": {
            "id": "PR241ba9cd56324ac192de68d658f20cb0",
            "type": "properties"
          }
        },
        "last_build": {
          "links": {
            "related": "https://reactor.adobe.io/libraries/LB62d20ad807a949e6b13b0a2c7299eb65/last_build"
          },
          "data": null
        }
      },
      "links": {
        "property": "https://reactor.adobe.io/properties/PR241ba9cd56324ac192de68d658f20cb0",
        "self": "https://reactor.adobe.io/libraries/LB62d20ad807a949e6b13b0a2c7299eb65"
      },
      "meta": {
        "build_status": null,
        "build_required_detail": "No build found since last state change"
      }
    }
  ],
  "meta": {
    "pagination": {
      "current_page": 1,
      "next_page": null,
      "prev_page": null,
      "total_pages": 1,
      "total_count": 1
    }
  }
}
```

### List the related revisions for a rule {#revisions}

You can list the revisions for a rule by appending `/revisions` to the path of a lookup request.

**API format**

```http
GET  /rules/{RULE_ID}/revisions
```

| Parameter | Description |
| --- | --- |
| `{RULE_ID}` | The `id` of the rule whose revisions you want to list. |

{style="table-layout:auto"}

**Request**

```shell
curl -X GET \
  https://reactor.adobe.io/rules/RL67de76e5bff9413aa8ad14e55172d8dc/revisions \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H "Content-Type: application/vnd.api+json" \
  -H 'Accept: application/vnd.api+json;revision=1'
```

**Response**

A successful response returns a list of revisions that use the specified rule.

```json
{
  "data": [
    {
      "id": "RL67de76e5bff9413aa8ad14e55172d8dc",
      "type": "rules",
      "attributes": {
        "created_at": "2020-12-14T17:57:29.835Z",
        "deleted_at": null,
        "dirty": false,
        "enabled": true,
        "name": "Example Rule",
        "published": false,
        "published_at": null,
        "revision_number": 0,
        "updated_at": "2020-12-14T17:57:29.835Z",
        "review_status": "unsubmitted"
      },
      "relationships": {
        "libraries": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL67de76e5bff9413aa8ad14e55172d8dc/libraries"
          }
        },
        "revisions": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL67de76e5bff9413aa8ad14e55172d8dc/revisions"
          }
        },
        "notes": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL67de76e5bff9413aa8ad14e55172d8dc/notes"
          }
        },
        "property": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL67de76e5bff9413aa8ad14e55172d8dc/property"
          },
          "data": {
            "id": "PR391208e5ea96442ea7903fe3f33f50e7",
            "type": "properties"
          }
        },
        "origin": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL67de76e5bff9413aa8ad14e55172d8dc/origin"
          },
          "data": {
            "id": "RL67de76e5bff9413aa8ad14e55172d8dc",
            "type": "rules"
          }
        },
        "rule_components": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL67de76e5bff9413aa8ad14e55172d8dc/rule_components"
          }
        }
      },
      "links": {
        "property": "https://reactor.adobe.io/properties/PR391208e5ea96442ea7903fe3f33f50e7",
        "origin": "https://reactor.adobe.io/rules/RL67de76e5bff9413aa8ad14e55172d8dc",
        "self": "https://reactor.adobe.io/rules/RL67de76e5bff9413aa8ad14e55172d8dc",
        "rule_components": "https://reactor.adobe.io/rules/RL67de76e5bff9413aa8ad14e55172d8dc/rule_components"
      },
      "meta": {
        "latest_revision_number": 1
      }
    },
    {
      "id": "RL6e5cb0d1c74542d6a3d04d08c6bb97ae",
      "type": "rules",
      "attributes": {
        "created_at": "2020-12-14T17:57:30.528Z",
        "deleted_at": null,
        "dirty": false,
        "enabled": true,
        "name": "Example Rule",
        "published": false,
        "published_at": null,
        "revision_number": 1,
        "updated_at": "2020-12-14T17:57:30.528Z",
        "review_status": "unsubmitted"
      },
      "relationships": {
        "libraries": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL6e5cb0d1c74542d6a3d04d08c6bb97ae/libraries"
          }
        },
        "revisions": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL6e5cb0d1c74542d6a3d04d08c6bb97ae/revisions"
          }
        },
        "notes": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL6e5cb0d1c74542d6a3d04d08c6bb97ae/notes"
          }
        },
        "property": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL6e5cb0d1c74542d6a3d04d08c6bb97ae/property"
          },
          "data": {
            "id": "PR391208e5ea96442ea7903fe3f33f50e7",
            "type": "properties"
          }
        },
        "origin": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL6e5cb0d1c74542d6a3d04d08c6bb97ae/origin"
          },
          "data": {
            "id": "RL67de76e5bff9413aa8ad14e55172d8dc",
            "type": "rules"
          }
        },
        "rule_components": {
          "links": {
            "related": "https://reactor.adobe.io/rules/RL6e5cb0d1c74542d6a3d04d08c6bb97ae/rule_components"
          }
        }
      },
      "links": {
        "property": "https://reactor.adobe.io/properties/PR391208e5ea96442ea7903fe3f33f50e7",
        "origin": "https://reactor.adobe.io/rules/RL67de76e5bff9413aa8ad14e55172d8dc",
        "self": "https://reactor.adobe.io/rules/RL6e5cb0d1c74542d6a3d04d08c6bb97ae",
        "rule_components": "https://reactor.adobe.io/rules/RL6e5cb0d1c74542d6a3d04d08c6bb97ae/rule_components"
      },
      "meta": {
        "latest_revision_number": 1
      }
    }
  ],
  "meta": {
    "pagination": {
      "current_page": 1,
      "next_page": null,
      "prev_page": null,
      "total_pages": 1,
      "total_count": 2
    }
  }
}
```

### Look up the related origin for a rule {#origin}

You can look up the origin (previous version) of a rule by appending `/origin` to the path of a lookup request.

**API format**

```http
GET /rules/{RULE_ID}/origin
```

| Parameter | Description |
| --- | --- |
| `{RULE_ID}` | The `id` of the rule whose origin you want to look up. |

{style="table-layout:auto"}

**Request**

```shell
curl -X GET \
  https://reactor.adobe.io/rules/RLb83ed2278dc045628c069ab7eb9bb866/origin \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H "Content-Type: application/vnd.api+json" \
  -H 'Accept: application/vnd.api+json;revision=1'
```

**Response**

A successful response returns the details of the the specified rule's extension.

```json
{
  "data": {
    "id": "RLb83ed2278dc045628c069ab7eb9bb866",
    "type": "rules",
    "attributes": {
      "created_at": "2020-12-14T17:57:41.517Z",
      "deleted_at": null,
      "dirty": false,
      "enabled": true,
      "name": "Example Rule",
      "published": false,
      "published_at": null,
      "revision_number": 0,
      "updated_at": "2020-12-14T17:57:41.517Z",
      "review_status": "unsubmitted"
    },
    "relationships": {
      "libraries": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RLb83ed2278dc045628c069ab7eb9bb866/libraries"
        }
      },
      "revisions": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RLb83ed2278dc045628c069ab7eb9bb866/revisions"
        }
      },
      "notes": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RLb83ed2278dc045628c069ab7eb9bb866/notes"
        }
      },
      "property": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RLb83ed2278dc045628c069ab7eb9bb866/property"
        },
        "data": {
          "id": "PR169d832d20ea4243b5a5db0ccc5aae9c",
          "type": "properties"
        }
      },
      "origin": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RLb83ed2278dc045628c069ab7eb9bb866/origin"
        },
        "data": {
          "id": "RLb83ed2278dc045628c069ab7eb9bb866",
          "type": "rules"
        }
      },
      "rule_components": {
        "links": {
          "related": "https://reactor.adobe.io/rules/RLb83ed2278dc045628c069ab7eb9bb866/rule_components"
        }
      }
    },
    "links": {
      "property": "https://reactor.adobe.io/properties/PR169d832d20ea4243b5a5db0ccc5aae9c",
      "origin": "https://reactor.adobe.io/rules/RLb83ed2278dc045628c069ab7eb9bb866",
      "self": "https://reactor.adobe.io/rules/RLb83ed2278dc045628c069ab7eb9bb866",
      "rule_components": "https://reactor.adobe.io/rules/RLb83ed2278dc045628c069ab7eb9bb866/rule_components"
    },
    "meta": {
      "latest_revision_number": 1
    }
  }
}
```

### Look up the related property for a rule {#property}

You can look up the property that owns a rule by appending `/property` to the path of a lookup request.

**API format**

```http
GET /rules/{RULE_ID}/property
```

| Parameter | Description |
| --- | --- |
| `{RULE_ID}` | The `id` of the rule whose property you want to look up. |

{style="table-layout:auto"}

**Request**

```shell
curl -X GET \
  https://reactor.adobe.io/rules/RC3d0805fde85d42db8988090bc074bb44/property \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H "Content-Type: application/vnd.api+json" \
  -H 'Accept: application/vnd.api+json;revision=1'
```

**Response**

A successful response returns the details of the the specified rule's property.

```json
{
  "data": {
    "id": "PR8ac25b57d5c24ebab68ffe5c630fc690",
    "type": "properties",
    "attributes": {
      "created_at": "2020-12-14T17:53:19.088Z",
      "enabled": true,
      "name": "Kessel Example Property",
      "updated_at": "2020-12-14T17:53:19.088Z",
      "platform": "web",
      "development": false,
      "token": "97b2cb1177df",
      "domains": [
        "example.com"
      ],
      "undefined_vars_return_empty": false,
      "rule_component_sequencing_enabled": false
    },
    "relationships": {
      "company": {
        "links": {
          "related": "https://reactor.adobe.io/properties/PR8ac25b57d5c24ebab68ffe5c630fc690/company"
        },
        "data": {
          "id": "CO2bf094214ffd4785bb4bcf88c952a7c1",
          "type": "companies"
        }
      },
      "callbacks": {
        "links": {
          "related": "https://reactor.adobe.io/properties/PR8ac25b57d5c24ebab68ffe5c630fc690/callbacks"
        }
      },
      "hosts": {
        "links": {
          "related": "https://reactor.adobe.io/properties/PR8ac25b57d5c24ebab68ffe5c630fc690/hosts"
        }
      },
      "environments": {
        "links": {
          "related": "https://reactor.adobe.io/properties/PR8ac25b57d5c24ebab68ffe5c630fc690/environments"
        }
      },
      "libraries": {
        "links": {
          "related": "https://reactor.adobe.io/properties/PR8ac25b57d5c24ebab68ffe5c630fc690/libraries"
        }
      },
      "data_elements": {
        "links": {
          "related": "https://reactor.adobe.io/properties/PR8ac25b57d5c24ebab68ffe5c630fc690/data_elements"
        }
      },
      "extensions": {
        "links": {
          "related": "https://reactor.adobe.io/properties/PR8ac25b57d5c24ebab68ffe5c630fc690/extensions"
        }
      },
      "rules": {
        "links": {
          "related": "https://reactor.adobe.io/properties/PR8ac25b57d5c24ebab68ffe5c630fc690/rules"
        }
      },
      "notes": {
        "links": {
          "related": "https://reactor.adobe.io/properties/PR8ac25b57d5c24ebab68ffe5c630fc690/notes"
        }
      }
    },
    "links": {
      "company": "https://reactor.adobe.io/companies/CO2bf094214ffd4785bb4bcf88c952a7c1",
      "data_elements": "https://reactor.adobe.io/properties/PR8ac25b57d5c24ebab68ffe5c630fc690/data_elements",
      "environments": "https://reactor.adobe.io/properties/PR8ac25b57d5c24ebab68ffe5c630fc690/environments",
      "extensions": "https://reactor.adobe.io/properties/PR8ac25b57d5c24ebab68ffe5c630fc690/extensions",
      "rules": "https://reactor.adobe.io/properties/PR8ac25b57d5c24ebab68ffe5c630fc690/rules",
      "self": "https://reactor.adobe.io/properties/PR8ac25b57d5c24ebab68ffe5c630fc690"
    },
    "meta": {
      "rights": [
        "approve",
        "develop",
        "manage_environments",
        "manage_extensions",
        "publish"
      ]
    }
  }
}
```
