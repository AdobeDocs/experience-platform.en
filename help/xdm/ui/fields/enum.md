---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;experience data model;data model;ui;workspace;enum;field;
solution: Experience Platform
title: Define Enum Fields in the UI
description: Learn how to define an enum field in the Experience Platform user interface.
topic-legacy: user guide
exl-id: 67ec5382-31de-4f8d-9618-e8919bb5a472
---
# Define enum fields in the UI {#enum}

>[!CONTEXTUALHELP]
>id="platform_xdm_enumsuggestedvalue"
>title="Enums and suggested values"
>abstract="An enum constrains a string field to only allow data that matches a predefined set of values to be ingested. Alternatively, you can define a set of suggested values for the field that do not restrict ingestion, but instead define the attributes you can choose from in segmentation. See the documentation for more information."

In Experience Data Model (XDM), an enum field represents a field that is constrained to a pre-defined list of acceptable values.

When [defining a new field](./overview.md#define) in the Adobe Experience Platform user interface, you can set it as an enum field by selecting the **[!UICONTROL Enum]** checkbox in the right rail. 

![](../../images/ui/fields/special/enum.png)

Additional controls appear after selecting the checkbox, allowing you to specify the value constraints for the enum. Under the **[!UICONTROL Value]** column, you must provide the exact value you want to constrain the field to. This value must comply to the [!UICONTROL Type] you selected for the enum field. You can optionally provide a human-friendly **[!UICONTROL Label]** for the constraint as well.

To add additional constraints to the enum, select **[!UICONTROL Add row]**.

![](../../images/ui/fields/special/enum-add-row.png)

Continue to add the desired constraints and optional labels to the enum. When finished, select **[!UICONTROL Apply]** to apply the changes to the schema.

![](../../images/ui/fields/special/enum-configured.png)

The canvas updates to reflect the changes. When you explore this schema in the future, you can view and edit the constraints for the enum field within the right rail.

![](../../images/ui/fields/special/enum-applied.png)

## Next steps

This guide covered how to define an enum field in the the UI. See the overview on [defining fields in the UI](./overview.md#special) to learn how to define other XDM field types in the [!DNL Schema Editor].
