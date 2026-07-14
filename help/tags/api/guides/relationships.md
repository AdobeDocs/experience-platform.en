---
title: Relationships in the Reactor API
description: Learn how resource relationships are established in the Reactor API, including the relationship requirements for each resource.
exl-id: 23976978-a639-4eef-91b6-380a29ec1c14
TQID: https://experienceleague.adobe.com/KcLtiV0w04wqrvRIC2r17rghzzidb16B0KiaN34lovw
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Relationships in the Reactor API

Resources in the Reactor API are often related to each other. This document provides an overview of how resource relationships are established in the API, and the relationship requirements of each resource type.

Depending on the type of resource in question, some relationships are required. A required relationship implies that the parent resource cannot exist without the relationship. All other relationships are optional.

Regardless of whether they are required or optional, relationships are either automatically established by the system when relevant resources are created, or they must be created manually. In the case of creating relationships manually, there are two possible methods depending on the resource in question:

* [Create by payload](#payload)
* [Create by URL](#url) (for libraries only)

Refer to the section on [relationship requirements](#requirements) for a list of the compatible relationships for each resource type, and the methods required to establish those relationships where applicable.

## Create a relationship by payload {#payload}

Some relationships must be manually established when you initially create a resource. To accomplish this, you must provide a `relationship` object in the request payload when you first create the parent resource. Examples of these relationships include:

* [Creating a data element](../endpoints/data-elements.md#create) with the required extensions
* [Creating an environment](../endpoints/environments.md#create) with the required host relationship

**API format**

```http
POST /properties/{PROPERTY_ID}/{RESOURCE_TYPE}
```

| Parameter | Description |
| --- | --- |
| `{PROPERTY_ID}` | The ID of the property to which the resource belongs. |
| `{RESOURCE_TYPE}` | The type of resource to be created. |

{style="table-layout:auto"}

**Request**

The following request creates a new `rule_component`, establishing relationships with `rules` and an `extension`.

```shell
curl -X POST \
  https://reactor.adobe.io/properties/PRf606dbddfbdc44f580fc6f342b5ff9be/rule_components \
  -H 'Authorization: Bearer [TOKEN]' \
  -H 'x-api-key: [KEY]' \
  -H 'x-gw-ims-org-id: [ORG_ID]' \
  -H 'Accept: application/vnd.api+json;revision=1' \
  -H 'Content-Type: application/vnd.api+json' \
  -d '{
        "data": {
          "attributes": {
            "delegate_descriptor_id": "kessel-test::events::click",
            "name": "My Example Click Event",
            "settings": "{\"elementSelector\":\".accordion\",\"bubbleFireIfChildFired\":true}"
          },
          "relationships": {
            "extension": {
              "data": {
                "id": "EXa2865f4d14204fa094f247406424371b",
                "type": "extensions"
              }
            },
            "rules": {
              "data": [
                {
                  "id": "RLd53598e3f1884e63bbc8e9c95e463dcf",
                  "type": "rules"
                }
              ]
            }
          },
          "type": "rule_components"
        }
      }'
```

| Property | Description |
| --- | --- |
| `relationships` | An object that must be provided when creating relationships by payload. Each key in this object represents a specific relationship type. In the above example, `extension` and `rules` relationships are established, which are particular to `rule_components`. For more information on compatible relationship types for different resources, see the section on [relationship requirements by resource](#relationship-requirements-by-resource). |
| `data` | Each relationship type provided under the `relationship` object must contain a `data` property, which references the `id` and `type` of the resource a relationship is being established with. You can create a relationship with multiple resources of the same type by formatting the `data` property as an array of objects, with each object containing the `id` and `type` of an applicable resource. |
| `id` | The unique ID of a resource. Each `id` must be accompanied with a sibling `type` property, indicating the type of resource in question. |
| `type` | The type of resource as referenced by a sibling `id` field. Accepted values include `data_elements`, `rules`, `extensions`, and `environments`. |

{style="table-layout:auto"}

## Create a relationship by URL {#url}

Unlike other resources, libraries establish relationships through their own dedicated `/relationship` endpoints. Examples include:

* [Adding extensions, data elements, and rules to a library](../endpoints/libraries.md#add-resources)
* [Assigning a library to an environment](../endpoints/libraries.md#environment)

**API format**

```http
POST /properties/{PROPERTY_ID}/libraries/{LIBRARY_ID}/relationships/{RESOURCE_TYPE}
```

| Parameter | Description |
| --- | --- |
| `{PROPERTY_ID}` | The ID of the property to which the library belongs. |
| `{LIBRARY_ID}` | The ID of the library you want to create a relationship for. |
| `{RESOURCE_TYPE}` | The type of resource the relationship is targeting. Available values include `environment`, `data_elements`, `extensions`, and `rules`. |

**Request**

The following request uses the `/relationships/environment` endpoint for a library to create a relationship with an environment.

```shell
curl -X POST \
  https://reactor.adobe.io/properties/PRf606dbddfbdc44f580fc6f342b5ff9be/libraries/LB10c1fd171cd347f19fcb8659a8d679ef/relationships/environment \
  -H 'Authorization: Bearer [TOKEN]' \
  -H 'x-api-key: [KEY]' \
  -H 'x-gw-ims-org-id: [ORG_ID]' \
  -H 'Accept: application/vnd.api+json;revision=1' \
  -H 'Content-Type: application/vnd.api+json' \
  -d '{
        "data": {
          "id": "ENf395a477d2b24ad696d65b901055b9dc",
          "type": "environments",
        }
      }'
```

| Property | Description |
| --- | --- |
| `data` | An object which references the `id` and `type` of the target resource for the relationship. If you are creating a relationship with multiple resources of the same type (such as `extensions` and `rules`), the `data` property must be formatted as an array of objects, with each object containing the `id` and `type` of an applicable resource. |
| `id` | The unique ID of a resource. Each `id` must be accompanied with a sibling `type` property, indicating the type of resource in question. |
| `type` | The type of resource as referenced by a sibling `id` field. Accepted values include `data_elements`, `rules`, `extensions`, and `environments`. |

{style="table-layout:auto"}

## Relationship requirements by resource {#requirements}

The following tables outline the available relationships for each resource type, whether or not those relationships are required, and the accepted method to manually create the relationship where applicable.

>[!NOTE]
>
>If a relationship is not listed as being created by payload or URL, then it is automatically assigned by the system.

### Audit events

| Relationship | Required | Create by payload | Create by URL |
| :--- | :---: | :---: | :---: |
| `property` | &#x2713; | | |
| `entity` | &#x2713; | | |

{style="table-layout:auto"}

### Builds

| Relationship | Required | Create by payload | Create by URL |
| :--- | :---: | :---: | :---: |
| `data_elements` | | | |
| `extensions` | | | |
| `rules` | | | |
| `environment` | &#x2713; | | |
| `library` | &#x2713; | | |
| `property` | &#x2713; | | |

{style="table-layout:auto"}

### Callbacks

| Relationship | Required | Create by payload | Create by URL |
| :--- | :---: | :---: | :---: |
| `property` | &#x2713; | | |

{style="table-layout:auto"}

### Companies

| Relationship | Required | Create by payload | Create by URL |
| :--- | :---: | :---: | :---: |
| `properties` | | | |

{style="table-layout:auto"}

### Data elements

| Relationship | Required | Create by payload | Create by URL |
| :--- | :---: | :---: | :---: |
| `libraries` | | | |
| `revisions` | &#x2713; | | |
| `notes` | | | |
| `property` | &#x2713; | | |
| `origin` | &#x2713; | | |
| `extension` | &#x2713; | &#x2713; | |
| `updated_with_extension` | &#x2713; | | |
| `updated_with_extension_package` | &#x2713; | | |

{style="table-layout:auto"}

### Environments

| Relationship | Required | Create by payload | Create by URL |
| :--- | :---: | :---: | :---: |
| `library` | | | |
| `builds` | | | |
| `host` | &#x2713; | &#x2713; | |
| `property` | &#x2713; | | |

{style="table-layout:auto"}

### Extensions

| Relationship | Required | Create by payload | Create by URL |
| :--- | :---: | :---: | :---: |
| `libraries` | | | |
| `revisions` | &#x2713; | | |
| `notes` | | | |
| `property` | &#x2713; | | |
| `origin` | &#x2713; | | |
| `extension_package` | &#x2713; | &#x2713; | |
| `updated_with_extension_package` | &#x2713; | | |

{style="table-layout:auto"}

### Hosts

| Relationship | Required | Create by payload | Create by URL |
| :--- | :---: | :---: | :---: |
| `property` | &#x2713; | | |

{style="table-layout:auto"}

### Libraries

| Relationship | Required | Create by payload | Create by URL |
| :--- | :---: | :---: | :---: |
| `builds` | | | |
| `environment` | | | &#x2713; |
| `data_elements` | | | &#x2713; |
| `extensions` | | | &#x2713; |
| `rules` | | | &#x2713; |
| `notes` | | | |
| `upstream_library` | &#x2713; | | |
| `property` | &#x2713; | | |
| `last_build` | | | |

{style="table-layout:auto"}

### Notes

| Relationship | Required | Create by payload | Create by URL |
| :--- | :---: | :---: | :---: |
| `resource` | &#x2713; | | |

{style="table-layout:auto"}

### Properties

| Relationship | Required | Create by payload | Create by URL |
| :--- | :---: | :---: | :---: |
| `company` | &#x2713; | | |
| `callbacks` | | | |
| `environments` | | | |
| `libraries` | | | |
| `data_elements` | | | |
| `extensions` | | | |
| `extensions` | | | |

{style="table-layout:auto"}

### Rule components

| Relationship | Required | Create by payload | Create by URL |
| :--- | :---: | :---: | :---: |
| `updated_with_extensions_package` | &#x2713; | | |
| `updated_with_extension` | &#x2713; | | |
| `extension` | &#x2713; | &#x2713; | |
| `notes` | | | |
| `origin` | &#x2713; | | |
| `property` | &#x2713; | | |
| `rules` | &#x2713; | &#x2713; | |
| `revisions` | &#x2713; | | |

{style="table-layout:auto"}

### Rules

| Relationship | Required | Create by payload | Create by URL |
| :--- | :---: | :---: | :---: |
| `libraries` | | | |
| `revisions` | &#x2713; | | |
| `notes` | | | |
| `property` | &#x2713; | | |
| `origin` | &#x2713; | | |
| `rule_components` | | | |

### Secrets

| Relationship | Required | Create by payload | Create by URL |
| :--- | :---: | :---: | :---: |
| `property` | &#x2713; | | &#x2713; |
| `environment` | &#x2713; | &#x2713; | |

