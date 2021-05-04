---
keywords: Experience Platform;home;popular topics;schema;Schema;xdm;experience data model;namespace;namespaces;compatibility mode;xed;
solution: Experience Platform
title: Namespacing in Experience Data Model (XDM)
topic-legacy: overviews
description: Learn how namespacing in Experience Data Model (XDM) allows you to extend your schemas and prevent field collisions as different schema components are brought together.
---

# Namespacing in Experience Data Model (XDM)

All fields in Experience Data Model (XDM) schemas have an associated namespace. These namespaces allow you to extend your schemas and prevent field collisions as different schema components are brought together. This document provides an overview of namespaces om XDM and how they are represented in the [Schema Registry API](../api/overview.md).

Namespacing allows you define a field `A` in namespace `X` as meaning something different than the same field `A` in namespace `Y`. In practice, the namespace of a field indicates its source (such as standard XDM, a vendor, or your organization).

For example, consider an XDM schema that uses the [[!UICONTROL Personal Contact Details] mixin](../mixins/profile/personal-details.md), which has a standard `mobilePhone` field that exists in the `xdm` namespace. In the same schema, you are also free to create your own `mobilePhone` field under a different namespace (your [tenant ID](../api/getting-started.md#know-your-tenant_id)) and both can coexist together but have a different underlying meaning or constraints.

## Namespacing syntax

The following sections demonstrate how namespaces are assigned in XDM syntaxes.

### Standard XDM {#standard}

The standard XDM syntax provides insight into how namespaces are represented in schemas (including how they are translated in [Compatibility Mode](#compatibility)).

Standard XDM uses [JSON-LD](https://json-ld.org/) syntax to assign namespaces to fields. This namespace comes in the form of a URI (such as `https://ns.adobe.com/xdm` for the `xdm` namespace), or as a shorthand prefix which is configured in the `@context` attribute of a schema.

The following is an example schema for a product in standard XDM syntax. Information about the use of namespaces is provided on commented lines

```json
{
    "$id": "https://ns.adobe.com/xdm/schemas/mySchema",
    "title": "Product",
    "description": "Represents the definition of a Project",
    "@context": {
        // Shorthand prefixes that can be used instead of the full URI
        "xdm": "https://ns.adobe.com/xdm",
        "repo": "http://ns.adobe.com/adobecloud/core/1.0/",
        "schema": "http://schema.org",
        "customerA": "https://ns.adobe.com/customera"
    },
    "properties": {
        // Unique identifier as defined by the JSON-LD spec
        "@id": {
            "type": "string"
        },
        // "xdm" is the configured shorthand namespace, "sku" is the field name 
        "xdm:sku": {
            "type": "string"
        },
        // "xdm" is the namespace, "name" is the field name
        "xdm:name": {
            "type": "string"
        },
        // "repo" is the configured shorthand namespace, "createdDate" is the field name
        "repo:createdDate": {
            "type": "string",
            "format": "datetime"
        },
        // https://ns.adobe.com/xdm/channels is the namespace, "application" is the field name
        "https://ns.adobe.com/xdm/channels/application": {
            "type": "string"
        },
        // "schema" is the configured shorthand namespace, "latitude" is the field name
        "schema:latitude": {
            "type": "number"
        },
        // https://ns.adobe.com/vendorA/product is the namespace, "stockNumber" is the field name
        "https://ns.adobe.com/vendorA/product/stockNumber": {
            "type": "string"
        },
        // "customerA" is the namespace (tenantId), "internalSku" is the field name
        "customerA:internalSku": {
            "type": "number"
        }
    }
}
```

### Compatibility Mode {#compatibility}

In Adobe Experience Platform, XDM schemas are represented in [Compatibility Mode](../api/appendix.md#compatibility) syntax, which does not use a `@context` property to set shorthand namespaces. Instead, a particular field's namespace is implied by the field's location in the structure of the schema's `properties` object.

Fields that use the `xdm` namespace appear as root fields under `properties` and drop the `xdm:` prefix that would appear in [standard XDM syntax](#standard). For example, `properties.xdm:sku` is listed as `properties.sku` instead.

For fields that do not use the `xdm` namespace, their namespaces are exposed via a parent property (prepended by an underscore) under the root of `properties`. For example, a `createdDate` field that uses the `repo` namespace would be located under `properties._repo.properties.createdDate`.

The following JSON represents how the standard XDM syntax example shown above is translated to Compatibility Mode.

```json
{
   "$id": "https://ns.adobe.com/xdm/schemas/mySchema",
   "title": "Product",
   "description": "Represents the definition of a Project",
   "properties": {
    // The @ symbol for "@id" is replaced with an underscore
    "_id": { 
        "type": "string"
    },
    // "xdm:" prefix is removed
    "sku": { 
        "type": "string"
    },
    // "xdm:" prefix is removed
    "name": { 
        "type": "string"
        },
    // The "repo" namespace is exposed as a parent field named "_repo"
    "_repo": { 
        "type": "object",
        "properties": {
            // Member of the "repo" namespace
            "createdDate": { 
                "type": "string",
                "format": "datetime"
            }
        }
    },
    // https://ns.adobe.com/xdm/channels namespace is exposed as a parent field named "_channels"
    "_channels": { 
        "type": "object",
        "properties": {
            // member of the "channels" namespace
            "application": { 
                "type": "string"
            }
        }
    },
    // http://schema.org namespace is exposed as a parent field named "_schema"
    "_schema": { 
         "type": "object",
         "properties": {
             // member of the "schema" namespace
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
    "_customerA": {
        "type": "object",
        "properties": {
            "internalSku": {
                "type": "number"
            }
        }
    }
}
```

## Next steps

This guide provided an overview of XDM namespaces and how they are represented in JSON. For more information on how to configure XDM schemas using the API, see the [Schema Registry API guide](../api/overview.md).
