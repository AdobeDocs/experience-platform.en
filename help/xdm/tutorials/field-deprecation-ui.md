---
title: Deprecate an XDM Field in the UI
description: Learn how to deprecate Experience Data Model (XDM) fields using the Schema Editor within Experience Platform.
---
# Deprecate an XDM field in the UI

In Experience Data Model (XDM), you can deprecate a field within a schema or custom resource by using the [Schema Editor](./create-schema-ui.md) or the [Schema Registry API](https://developer.adobe.com/experience-platform-apis/references/schema-registry/). Deprecating a field causes it to be hidden from downstream UIs such as the [!UICONTROL Profiles] workspace and Customer Journey Analytics, but it is otherwise a non-breaking change and does not negatively affect existing data flows.

This document covers how to deprecate fields for different XDM resources using the Schema Editor in the Experience Platform user interface. For steps on deprecating an XDM field using the API, see the tutorial on [deprecating an XDM field using the Schema Registry API](./field-deprication-api.md).

## Getting started
