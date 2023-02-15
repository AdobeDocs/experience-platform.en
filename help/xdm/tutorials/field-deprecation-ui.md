---
title: Deprecate an XDM Field in the UI
description: Learn how to deprecate Experience Data Model (XDM) fields using the Schema Editor within Experience Platform.
---
# Deprecate an XDM field in the UI

Once data is ingested into your schema, you can no longer remove fields from the schema without making breaking changes. Experience Data Model (XDM) offers you the flexibility to manage your data model as your business needs change by deprecating schema fields. Field deprecation removes fields from the UI view and also hides them from downstream UIs. Downstream UIs such as Segmentation and Profiles dashboards, and other solutions such as Customer Journey Analytics and Adobe Journey Optimizer, no longer display deprecated fields as part of their workflow. Although, they all retain the option to show deprecated fields. 

As deprecated fields are hidden from the UI by default, this streamlines your schema in the Schema Editor and prevents unwanted fields from being added to downstream dependencies such as the segment builder, journey designer, and so on. Field deprecation is also backward compatible. Other systems that use deprecated fields such as segments and queries will continue to evaluate them as intended. If a deprecated field is used in an existing segment it is treated normally, meaning that the field shows up as expected in the segment builder canvas or is evaluated based on any data available in the deprecated fields. This is a non-breaking change that does not negatively affect any existing data flows.

You can deprecate a field within a schema or custom resource by using the [Schema Editor](./create-schema-ui.md) or the [Schema Registry API](https://developer.adobe.com/experience-platform-apis/references/schema-registry/). This document covers how to deprecate fields for different XDM resources using the Schema Editor in the Experience Platform user interface. For steps on deprecating an XDM field using the API, see the tutorial on [deprecating an XDM field using the Schema Registry API](./field-deprecation-api.md).

## Deprecate a custom field {#custom}

To deprecate a field in a custom class, field group, or data type,...

{directions here}

## Deprecate a standard field in a schema {#standard}

<!-- Not sure if this is true:

Fields from standard classes, field groups, and data types cannot be deprecated directly. Instead, you can deprecate their use in the individual schemas that employ these standard resources by using a descriptor. 

-->

### Create a field deprecation descriptor {#create-descriptor}

<!-- To create a descriptor for the schema fields you want to deprecate, -->

### Verify the deprecated field {#verify-deprecation}

<!-- Not sure if necessary -->

## Next steps

This document covered how to deprecate XDM fields using the Schema Editor UI. For more information on configuring fields for custom resources, see the guide on [defining XDM fields in the API](./custom-fields-api.md). For more information on managing descriptors, see the [descriptors endpoint guide](../api/descriptors.md).
