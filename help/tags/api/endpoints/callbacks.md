---
title: Callbacks endpoint
description: Learn how to make calls to the /callbacks endpoint in the Reactor API.
exl-id: dd980f91-89e3-4ba0-a6fc-64d66b288a22
---
# Callbacks endpoint

A callback is a message that the Reactor API sends to a specific URL (usually one that is hosted by your organization).

Callbacks are intended to be used in conjunction with [audit events](./audit-events.md) to track activities in the Reactor API. Each time an audit event of a certain type is generated, a callback can send a matching message to the specified URL.

The service behind the URL specified in the callback must respond with HTTP status code 200 (OK) or 201 (Created). If the service does not respond with either of these status codes, the message delivery is retried at the following intervals:

* 1 minute
* 5 minutes
* 30 minutes
* 1 hour
* 12 hours
* 1 day
* 3 days

>[!NOTE]
>
>Retry intervals are relative to the previous interval. For example, if the retry at one minute fails, the next attempt is scheduled for five minutes after the one-minute attempt failed (six minutes after the message was generated).

If all delivery attempts are unsuccessful, the message is discarded.

A callback belongs to exactly one [property](./properties.md). A property can have many callbacks.

## Getting started

The endpoint used in this guide is part of the [Reactor API](https://www.adobe.io/experience-platform-apis/references/reactor/). Before continuing, please review the [getting started guide](../getting-started.md) for important information regarding how to authenticate to the API.

## List callbacks {#list}

You can list all callbacks under a property by making a GET request.

**API format**

```http
GET  /properties/{PROPERTY_ID}/callbacks
```

| Parameter | Description |
| --- | --- |
| `{PROPERTY_ID}` | The `id` of the property whose callbacks you want to list. |

{style="table-layout:auto"}

>[!NOTE]
>
>Using query parameters, listed callbacks can be filtered based on the following attributes:<ul><li>`created_at`</li><li>`updated_at`</li></ul>See the guide on [filtering responses](../guides/filtering.md) for more information.

**Request**

```shell
curl -X GET \
  https://reactor.adobe.io/properties/PR66a3356c73fc4aabb67ee22caae53d70/callbacks \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H "Content-Type: application/vnd.api+json" \
  -H 'Accept: application/vnd.api+json;revision=1'
```

**Response**

A successful response returns a list of callbacks for the specified property.

```json
{
  "data": [
    {
      "id": "CB26edef8d709243579589107bcda034da",
      "type": "callbacks",
      "attributes": {
        "created_at": "2020-12-14T17:34:47.082Z",
        "subscriptions": [
          "rule.created"
        ],
        "updated_at": "2020-12-14T17:34:47.082Z",
        "url": "https://www.example.com"
      },
      "relationships": {
        "property": {
          "links": {
            "related": "https://reactor.adobe.io/callbacks/CB26edef8d709243579589107bcda034da/property"
          },
          "data": {
            "id": "PR66a3356c73fc4aabb67ee22caae53d70",
            "type": "properties"
          }
        }
      },
      "links": {
        "property": "https://reactor.adobe.io/properties/PR66a3356c73fc4aabb67ee22caae53d70",
        "self": "https://reactor.adobe.io/callbacks/CB26edef8d709243579589107bcda034da"
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

## Look up a callback {#lookup}

You can look up a callback by providing its ID in the path of a GET request.

**API format**

```http
GET /callbacks/{CALLBACK_ID}
```

| Parameter | Description |
| --- | --- |
| `CALLBACK_ID` | The `id` of the callback that you want to look up. |

{style="table-layout:auto"}

**Request**

```shell
curl -X GET \
  https://reactor.adobe.io/callbacks/CBeef389cee8d84e69acef8665e4dcbef6 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H "Content-Type: application/vnd.api+json" \
  -H 'Accept: application/vnd.api+json;revision=1'
```

**Response**

A successful response returns the details of the callback.

```json
{
  "data": {
    "id": "CBeef389cee8d84e69acef8665e4dcbef6",
    "type": "callbacks",
    "attributes": {
      "created_at": "2020-12-14T17:34:36.872Z",
      "subscriptions": [
        "rule.created"
      ],
      "updated_at": "2020-12-14T17:34:36.872Z",
      "url": "https://www.example.com"
    },
    "relationships": {
      "property": {
        "links": {
          "related": "https://reactor.adobe.io/callbacks/CBeef389cee8d84e69acef8665e4dcbef6/property"
        },
        "data": {
          "id": "PRb513bbab52114573ac87f9848eea6ead",
          "type": "properties"
        }
      }
    },
    "links": {
      "property": "https://reactor.adobe.io/properties/PRb513bbab52114573ac87f9848eea6ead",
      "self": "https://reactor.adobe.io/callbacks/CBeef389cee8d84e69acef8665e4dcbef6"
    }
  }
}
```

## Create a callback {#create}

You can create a new callback by making a POST request.

**API format**

```http
POST /properties/{PROPERTY_ID}/callbacks
```

| Parameter | Description |
| --- | --- |
| `PROPERTY_ID` | The `id` of the [property](./properties.md) that you are defining the callback under. |

{style="table-layout:auto"}

**Request**

```shell
curl -X POST \
  https://reactor.adobe.io/properties/PR5e22de986a7c4070965e7546b2bb108d/callbacks \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.api+json;revision=1' \
  -d '{
        "data": {
          "attributes": {
            "url": "https://www.example.com",
            "subscriptions": [
              "rule.created"
            ]
          }
        }
      }'
```

| Property | Description |
| --- | --- |
| `url` | The URL destination for the callback message. The URL must use the HTTPS protocol extension. |
| `subscriptions` | An array of strings, indicating the audit event types that will trigger the callback. See the [audit events endpoint guide](./audit-events.md) for a list of possible event types. |

{style="table-layout:auto"}

**Response**

A successful response return the details of the newly created callback.

```json
{
  "data": {
    "id": "CB32d8f23d5ee548278d32076af4c442a0",
    "type": "callbacks",
    "attributes": {
      "created_at": "2020-12-14T17:34:27.059Z",
      "subscriptions": [
        "rule.created"
      ],
      "updated_at": "2020-12-14T17:34:27.059Z",
      "url": "https://www.example.com"
    },
    "relationships": {
      "property": {
        "links": {
          "related": "https://reactor.adobe.io/callbacks/CB32d8f23d5ee548278d32076af4c442a0/property"
        },
        "data": {
          "id": "PR5e22de986a7c4070965e7546b2bb108d",
          "type": "properties"
        }
      }
    },
    "links": {
      "property": "https://reactor.adobe.io/properties/PR5e22de986a7c4070965e7546b2bb108d",
      "self": "https://reactor.adobe.io/callbacks/CB32d8f23d5ee548278d32076af4c442a0"
    }
  }
}
```

## Update a callback

You can update a callback by including its ID in the path of a PATCH request.

**API format**

```http
PATCH /callbacks/{CALLBACK_ID}
```

| Parameter | Description |
| --- | --- |
| `CALLBACK_ID` | The `id` of the callback that you want to update. |

{style="table-layout:auto"}

**Request**

The following request updates the `subscriptions` array for an existing callback.

```shell
curl -X PATCH \
  https://reactor.adobe.io/callbacks/CB4310904d415549888cc9e31ebe1e1e45 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.api+json;revision=1' \
  -d '{
        "data": {
          "attributes": {
            "url": "https://www.example.net",
            "subscriptions": [
              "rule.created",
              "build.created"
            ]
          },
          "type": "callbacks",
          "id": "CB4310904d415549888cc9e31ebe1e1e45"
        }
      }'
```

| Property | Description |
| --- | --- |
| `attributes` | An object whose properties represent the attributes to be updated for the callback. Each key represents the particular callback attribute to be updated, along with the corresponding value it should be updated to.<br><br>The following attributes can be updated for callbacks:<ul><li>`subscriptions`</li><li>`url`</li></ul> |
| `id` | The `id` of the callback you want to update. This should match the `{CALLBACK_ID}` value provided in the request path. |
| `type` | The type of resource being updated. For this endpoint, the value must be `callbacks`. |

{style="table-layout:auto"}

**Response**

A successful response returns the details of the updated callback.

```json
{
  "data": {
    "id": "CB4310904d415549888cc9e31ebe1e1e45",
    "type": "callbacks",
    "attributes": {
      "created_at": "2020-12-14T17:34:56.884Z",
      "subscriptions": [
        "rule.created",
        "build.created"
      ],
      "updated_at": "2020-12-14T17:34:57.614Z",
      "url": "https://www.example.net"
    },
    "relationships": {
      "property": {
        "links": {
          "related": "https://reactor.adobe.io/callbacks/CB4310904d415549888cc9e31ebe1e1e45/property"
        },
        "data": {
          "id": "PR0a8ef3ca31dc456a8566e9288960bd79",
          "type": "properties"
        }
      }
    },
    "links": {
      "property": "https://reactor.adobe.io/properties/PR0a8ef3ca31dc456a8566e9288960bd79",
      "self": "https://reactor.adobe.io/callbacks/CB4310904d415549888cc9e31ebe1e1e45"
    }
  }
}
```

## Delete a callback

You can delete a callback by including its ID in the path of a DELETE request.

**API format**

```http
DELETE /callbacks/{CALLBACK_ID}
```

| Parameter | Description |
| --- | --- |
| `CALLBACK_ID` | The `id` of the callback that you want to delete. |

{style="table-layout:auto"}

**Request**

```shell
curl -X DELETE \
  https://reactor.adobe.io/callbacks/CB4310904d415549888cc9e31ebe1e1e45 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/vnd.api+json;revision=1'
```

**Response**

A successful response returns HTTP status 204 (No Content) with no response body, indicating that the callback has been deleted.
