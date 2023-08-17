---
keywords: Experience Platform;home;popular topics;schema;Schema;xdm;experience data model;namespace;namespaces;compatibility mode;xed;
solution: Experience Platform
title: Namespacing in Experience Data Model (XDM)
description: Learn how namespacing in Experience Data Model (XDM) allows you to extend your schemas and prevent field collisions as different schema components are brought together.
exl-id: b351dfaf-5219-4750-a7a9-cf4689a5b736
---
# Namespacing in Experience Data Model (XDM)

All fields in Experience Data Model (XDM) schemas have an associated namespace. These namespaces allow you to extend your schemas and prevent field collisions as different schema components are brought together. This document provides an overview of namespaces in XDM and how they are represented in the [Schema Registry API](../api/overview.md).

Namespacing allows you to define a field in one namespace as meaning something different than the same field in a different namespace. In practice, the namespace of a field indicates who created the field (such as standard XDM (Adobe), a vendor, or your organization).

For example, consider an XDM schema that uses the [[!UICONTROL Personal Contact Details] field group](../field-groups/profile/demographic-details.md), which has a standard `mobilePhone` field that exists in the `xdm` namespace. In the same schema, you are also free to create a separate `mobilePhone` field under a different namespace (your [tenant ID](../api/getting-started.md#know-your-tenant_id)). Both of these fields can coexist together while having different underlying meanings or constraints.

## Namespacing syntax

The following sections demonstrate how namespaces are assigned in XDM syntax.

### Standard XDM {#standard}

The standard XDM syntax provides insight into how namespaces are represented in schemas (including [how they are translated in Adobe Experience Platform](#compatibility)).

Standard XDM uses [JSON-LD](https://www.w3.org/TR/json-ld11/#basic-concepts) syntax to assign namespaces to fields. This namespace comes in the form of a URI (such as `https://ns.adobe.com/xdm` for the `xdm` namespace), or as a shorthand prefix which is configured in the `@context` attribute of a schema.

The following is an example schema for a product in standard XDM syntax. With the exception of `@id` (the unique identifier as defined by the JSON-LD spec), each field under `properties` starts with a namespace and ends with the field name. If using a shorthand prefix defined under `@context`, the namespace and the field name are separated by a colon (`:`). If not using a prefix, the namespace and field name are separated by a slash (`/`). 

```json
{
  "$id": "https://ns.adobe.com/xdm/schemas/mySchema",
  "title": "Product",
  "description": "Represents the definition of a Project",
  "@context": {
    "xdm": "https://ns.adobe.com/xdm",
    "repo": "http://ns.adobe.com/adobecloud/core/1.0/",
    "schema": "http://schema.org",
    "tenantId": "https://ns.adobe.com/tenantId"
  },
  "properties": {
    "@id": {
      "type": "string"
    },
    "xdm:sku": {
      "type": "string"
    },
    "xdm:name": {
      "type": "string"
    },
    "repo:createdDate": {
      "type": "string",
      "format": "datetime"
    },
    "https://ns.adobe.com/xdm/channels/application": {
      "type": "string"
    },
    "schema:latitude": {
      "type": "number"
    },
    "https://ns.adobe.com/vendorA/product/stockNumber": {
      "type": "string"
    },
    "tenantId:internalSku": {
      "type": "number"
    }
  }
}
```

| Property | Description |
| --- | --- |
| `@context` | An object that defines the shorthand prefixes that can be used instead of a full namespace URI under `properties`.  |
| `@id` | A unique identifier for the record as defined by the [JSON-LD spec](https://www.w3.org/TR/json-ld11/#node-identifiers). |
| `xdm:sku` | An example of a field that uses a shorthand prefix to denote a namespace. In this case, `xdm` is the namespace (`https://ns.adobe.com/xdm`), and `sku` is the field name. |
| `https://ns.adobe.com/xdm/channels/application` | An example of a field that uses the full namespace URI. In this case, `https://ns.adobe.com/xdm/channels` is the namespace, and `application` is the field name.  |
| `https://ns.adobe.com/vendorA/product/stockNumber` | Fields provided by vendor resources use their own unique namespaces. In this example, `https://ns.adobe.com/vendorA/product` is the vendor namespace, and `stockNumber` is the field name.  |
| `tenantId:internalSku` | Fields defined by your organization use your unique tenant ID as their namespace. In this example, `tenantId` is the tenant namespace (`https://ns.adobe.com/tenantId`), and `internalSku` is the field name. |

{style="table-layout:auto"}

### Compatibility Mode {#compatibility}

In Adobe Experience Platform, XDM schemas are represented in [Compatibility Mode](../api/appendix.md#compatibility) syntax, which does not use the JSON-LD syntax to represent namespaces. Instead, Platform converts the namespace to a parent field (starting with an underscore) and nests the fields under it.

For example, the standard XDM `repo:createdDate` is converted to `_repo.createdDate` and would appear under the following structure in Compatibility Mode:

```json
"_repo": {
  "type": "object",
  "properties": {
    "createdDate": {
      "type": "string",
      "format": "datetime"
    }
  }
}
```

Fields that use the `xdm` namespace appear as root fields under `properties` and drop the `xdm:` prefix that would appear in [standard XDM syntax](#standard). For example, `xdm:sku` is simply listed as `sku` instead.

The following JSON represents how the standard XDM syntax example shown above is translated to Compatibility Mode.

```json
{
  "$id": "https://ns.adobe.com/xdm/schemas/mySchema",
  "title": "Product",
  "description": "Represents the definition of a Project",
  "properties": {
    "_id": {
      "type": "string"
    },
    "sku": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "_repo": {
      "type": "object",
      "properties": {
        "createdDate": {
          "type": "string",
          "format": "datetime"
        }
      }
    },
    "_channels": {
      "type": "object",
      "properties": {
        "application": {
          "type": "string"
        }
      }
    },
    "_schema": {
      "type": "object",
      "properties": {
        "application": {
          "type": "string"
        }
      }
    },
    "_vendorA": {
      "type": "object",
      "properties": {
        "product": {
          "type": "object",
          "properties": {
            "stockNumber": {
              "type": "string"
            }
          }
        }
      }
    },
    "_tenantId": {
      "type": "object",
      "properties": {
        "internalSku": {
          "type": "number"
        }
      }
    }
  }
}
```

## Next steps

This guide provided an overview of XDM namespaces and how they are represented in JSON. For more information on how to configure XDM schemas using the API, see the [Schema Registry API guide](../api/overview.md).
