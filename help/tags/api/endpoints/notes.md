---
title: Notes endpoint
description: Learn how to make calls to the /notes endpoint in the Reactor API.
exl-id: fa3bebc0-215e-4515-87b9-d195c9ab76c1
---
# Notes endpoint

In the Reactor API, notes are textual annotations that you can add to certain resources. Notes are essentially comments on their respective resources. The contents of notes have no impact on resource behavior, and can be used for a variety of of use cases including the following:

* Providing background information
* Functioning as to-do lists
* Passing along resource-usage advice
* Giving instructions to other team members
* Recording historical context

The `/notes` endpoint in the Reactor API allows you to manage these notes programmatically.

Notes can be applied the following resources:

* [Data elements](./data-elements.md)
* [Extensions](./extensions.md)
* [Libraries](./libraries.md)
* [Properties](./properties.md)
* [Rule components](./rule-components.md)
* [Rules](./rules.md)
* [Secrets](./secrets.md)

These six types are collectively known as "notable" resources. When a notable resource is deleted, its associated notes are also deleted.

>[!NOTE]
>
>For resources that can have multiple revisions, any notes must be created on the current (head) revision. They may not be attached to other revisions.
>
>However, notes may still be read from revisions. In such cases, the API returns only the notes that existed before the creation of the revision. They provide a snapshot of the annotations as they were when the revision was cut. In contrast, reading notes from the current (head) revision returns all its notes.

## Getting started

The endpoint used in this guide is part of the [Reactor API](https://www.adobe.io/experience-platform-apis/references/reactor/). Before continuing, please review the [getting started guide](../getting-started.md) for important information regarding how to authenticate to the API.

## Retrieve a list of notes {#list}

You can retrieve a list of notes for a resource by appending `/notes` to the path of a GET request for the resource in question.

**API format**

```http
GET /{RESOURCE_TYPE}/{RESOURCE_ID}/notes
```

| Parameter | Description |
| --- | --- |
| `RESOURCE_TYPE` | The type of resource you are fetching notes for. Must be one of the following values: <ul><li>`data_elements`</li><li>`extensions`</li><li>`libraries`</li><li>`properties`</li><li>`rule_components`</li><li>`rules`</li></ul> |
| `RESOURCE_ID` | The `id` of the specific resource whose notes you want to list. |

{style="table-layout:auto"}

**Request**

The following request lists the notes attached to a library.

```shell
curl -X GET \
  https://reactor.adobe.io/libraries/LBcffea1a38c52408cae2398868625a12d/notes \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H "Content-Type: application/vnd.api+json" \
  -H 'Accept: application/vnd.api+json;revision=1'
```

**Response**

A successful response returns a list of notes attached to the specified resource.

```json
{
  "data": [
    {
      "id": "NTa40de8d76bfd4e40835830900ce83b7b",
      "type": "notes",
      "attributes": {
        "author_display_name": "John Smith",
        "author_email": "jsmith@example.com",
        "created_at": "2020-12-14T17:51:00.411Z",
        "text": "this is a note on a library"
      },
      "relationships": {
        "resource": {
          "links": {
            "related": "https://reactor.adobe.io/libraries/LBcffea1a38c52408cae2398868625a12d"
          },
          "data": {
            "id": "LBcffea1a38c52408cae2398868625a12d",
            "type": "libraries"
          }
        }
      },
      "links": {
        "resource": "https://reactor.adobe.io/libraries/LBcffea1a38c52408cae2398868625a12d",
        "self": "https://reactor.adobe.io/notes/NTa40de8d76bfd4e40835830900ce83b7b"
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

## Look up a note {#lookup}

You can look up a note by providing its ID in the path of a GET request.

**API format**

```http
GET /notes/{NOTE_ID}
```

| Parameter | Description |
| --- | --- |
| `NOTE_ID` | The `id` of the note that you want to look up. |

{style="table-layout:auto"}

**Request**

```shell
curl -X GET \
  https://reactor.adobe.io/notes/NT550b7a17ab304d49ba289a2978d673e5 \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H "Content-Type: application/vnd.api+json" \
  -H 'Accept: application/vnd.api+json;revision=1'
```

**Response**

A successful response returns the details of the note.

```json
{
  "data": {
    "id": "NT550b7a17ab304d49ba289a2978d673e5",
    "type": "notes",
    "attributes": {
      "author_display_name": "John Smith",
      "author_email": "jsmith@example.com",
      "created_at": "2020-12-14T17:51:10.316Z",
      "text": "this is a note on a property"
    },
    "relationships": {
      "resource": {
        "links": {
          "related": "https://reactor.adobe.io/properties/PR4537ac6f1f204ffd864ec47c4b27c2e8"
        },
        "data": {
          "id": "PR4537ac6f1f204ffd864ec47c4b27c2e8",
          "type": "properties"
        }
      }
    },
    "links": {
      "resource": "https://reactor.adobe.io/properties/PR4537ac6f1f204ffd864ec47c4b27c2e8",
      "self": "https://reactor.adobe.io/notes/NT550b7a17ab304d49ba289a2978d673e5"
    }
  }
}
```

## Create a note {#create}

>[!WARNING]
>
>Before creating a new note, keep in mind that notes are not editable, and only way to delete them is to delete their corresponding resource.

You can create a new note by appending `/notes` to the path of a POST request for the resource in question.

**API format**

```http
POST /{RESOURCE_TYPE}/{RESOURCE_ID}/notes
```

| Parameter | Description |
| --- | --- |
| `RESOURCE_TYPE` | The type of resource you are creating a note for. Must be one of the following values: <ul><li>`data_elements`</li><li>`extensions`</li><li>`libraries`</li><li>`properties`</li><li>`rule_components`</li><li>`rules`</li></ul> |
| `RESOURCE_ID` | The `id` of the specific resource that you want to create a note for. |

{style="table-layout:auto"}

**Request**

The following request creates a new note for a property.

```shell
curl -X POST \
  https://reactor.adobe.io/properties/PRb25a704c0b7c4562835ccdf96d3afd31/notes \
  -H 'Authorization: Bearer {ACCESS_TOKEN}' \
  -H 'x-api-key: {API_KEY}' \
  -H 'x-gw-ims-org-id: {ORG_ID}' \
  -H 'Content-Type: application/json' \
  -d '{
        "data": {
          "type": "notes",
          "attributes": {
            "text": "this is a note on a property"
          }
        }
      }'
```

| Property | Description |
| --- | --- |
| `type` | **(Required)** The type of resource being updated. For this endpoint, the value must be `notes`. |
| `attributes.text` | **(Required)** The text that comprises the note. Each note is limited to 512 Unicode characters. |

{style="table-layout:auto"}

**Response**

A successful response return the details of the newly created note.

```json
{
  "data": {
    "id": "NT550b7a17ab304d49ba289a2978d673e5",
    "type": "notes",
    "attributes": {
      "author_display_name": "John Smith",
      "author_email": "jsmith@example.com",
      "created_at": "2020-12-14T17:51:10.316Z",
      "text": "This is a note on a property"
    },
    "relationships": {
      "resource": {
        "links": {
          "related": "https://reactor.adobe.io/properties/PR4537ac6f1f204ffd864ec47c4b27c2e8"
        },
        "data": {
          "id": "PR4537ac6f1f204ffd864ec47c4b27c2e8",
          "type": "properties"
        }
      }
    },
    "links": {
      "resource": "https://reactor.adobe.io/properties/PR4537ac6f1f204ffd864ec47c4b27c2e8",
      "self": "https://reactor.adobe.io/notes/NT550b7a17ab304d49ba289a2978d673e5"
    }
  }
}
```
