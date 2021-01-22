---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;experience data model;data model;ui;workspace;required;field;
solution: Experience Platform
title: Define required fields in the UI
description: Learn how to define a required XDM field in the Experience Platform user interface.
topic: user guide
---

# Define required fields in the UI

In Experience Data Model (XDM), a required field indicates that it must be supplied a valid value in order for a particular record or time-series event to be accepted during data ingestion. Common use cases for required fields include user identity information and timestamps.

When [defining a new field](./overview.md#define) in the Adobe Experience Platform user interface, you can set it as a required field by selecting the **[!UICONTROL Required]** checkbox in the right rail. Select **[!UICONTROL Apply]** to apply the change to the schema.

![](../../images/ui/fields/special/required.png)

Once the field is applied, its path appears under **[!UICONTROL Required fields]** in the left rail. If the field is nested, then any parent fields will also appear as required.

![](../../images/ui/fields/special/required-applied.png)

## Next steps

This guide covered how to define a required field in the the UI. See the overview on [defining fields in the UI](./overview.md#special) to learn how to define other XDM field types in the [!DNL Schema Editor].