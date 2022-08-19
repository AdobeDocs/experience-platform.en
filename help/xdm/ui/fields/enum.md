---
keywords: Experience Platform;home;popular topics;api;API;XDM;XDM system;experience data model;data model;ui;workspace;enum;field;
solution: Experience Platform
title: Define Enum Fields and Suggested Values in the UI
description: Learn how to define enums and suggested values for string fields in the Experience Platform user interface.
topic-legacy: user guide
exl-id: 67ec5382-31de-4f8d-9618-e8919bb5a472
---
# Define enums and suggested values in the UI {#enum}

>[!CONTEXTUALHELP]
>id="platform_xdm_enumsuggestedvalue"
>title="Enums and suggested values"
>abstract="An enum constrains a string field to only allow data that matches a predefined set of values to be ingested. Alternatively, you can define a set of suggested values for the field that do not restrict ingestion, but instead define the attributes that you can choose from in segmentation. See the documentation for more information."

In Experience Data Model (XDM), a string field can be given a predefined set of accepted or suggested values to better control what values are ingested into that field or how it will behave in segmentation.

An **enum** constrains the values that can be ingested for a string field to a predefined set. If you attempt to ingest data to an enum field and the value does not match any of those defined in its configuration, ingestion will be denied.

In contrast to enums, adding **suggested values** to a string field does not constrain the values that it can ingest. Instead, suggested values affect what predefined values are available in the [Segmentation UI](../../../segmentation/ui/overview.md) when including the string field as an attribute.

When [defining a new field](./overview.md#define) in the Adobe Experience Platform user interface and setting the type to [!UICONTROL String], you are given the option to define an [enum](#enum) or [suggested values](#suggested-values) for that field.

![Image showing the Enum & Suggested Values option enabled for a string field in the UI](../../images/ui/fields/enum/enum-options-selected.png)

## Define an enum {#enum}

Select **[!UICONTROL Enums and Suggested Values]**, then select **[!UICONTROL Enums]**.Additional controls appear, allowing you to specify the value constraints for the enum. To add a constraint, select **[!UICONTROL Add row]**.

![Image showing the Enums option selected in the UI](../../images/ui/fields/enum/enum-add-row.png)

Under the **[!UICONTROL Value]** column, you must provide the exact value you want to constrain the field to. You can optionally provide a human-friendly **[!UICONTROL Display Name]** for the constraint as well, which affects how the value will be represented in segmentation.

Continue to use **[!UICONTROL Add row]** to add the desired constraints and optional labels to the enum, or select the delete icon (![Image of the delete icon](../../images/ui/fields/enum/remove-icon.png)) next to a previously added row to remove it. When finished, select **[!UICONTROL Apply]** to apply the changes to the schema.

![Image showing the enum values and display names filled out for the string field in the UI](../../images/ui/fields/enum/enum-confirm.png)

The canvas updates to reflect the changes. When you explore this schema in the future, you can view and edit the constraints for the enum field within the right rail.

## Define suggested values {#suggested-values}

Select **[!UICONTROL Enums and Suggested Values]**, then select **[!UICONTROL Suggested Values]** to make additional controls appear. From here, select **[!UICONTROL Add row]** to start adding suggested values.

![Image showing the Suggested Values option selected in the UI](../../images/ui/fields/enum/suggested-add-row.png)

Under the **[!UICONTROL Display Name]** column, provide a human-friendly name for the value as you want it to appear in the Segmentation UI. To add more suggested values, select **[!UICONTROL Add row]** again and repeat the process as needed. To remove a previously added row, select the delete icon (![Image of the delete icon](../../images/ui/fields/enum/remove-icon.png)) next to the row in question.

When finished, select **[!UICONTROL Apply]** to apply the changes to the schema.

![Image showing the enum values and display names filled out for the string field in the UI](../../images/ui/fields/enum/suggested-confirm.png)

### Manage suggested values for standard fields

Some fields from standard XDM components contain their own suggested values, such as `eventType` from the [[!UICONTROL XDM ExperienceEvent] class](../../classes/experienceevent.md). When using these fields in your schemas, you can use the available toggles to control which existing suggested values are to be used.

![Image showing the enum values and display names filled out for the string field in the UI](../../images/ui/fields/enum/suggested-standard.png)

Similar to custom fields, select **[!UICONTROL Add row]** to add your own suggested values for standard fields.

![Image showing the enum values and display names filled out for the string field in the UI](../../images/ui/fields/enum/suggested-standard.png)

>[!NOTE]
>
>Only suggested values that you define can be removed from a standard field. Existing suggested values can be disabled, but they cannot be removed outright.

<!-- ## Next steps

This guide covered how to define enums and suggested values for string fields in the the UI. See the overview on [defining fields in the UI](./overview.md#special) to learn how to define other XDM field types in the [!DNL Schema Editor]. -->
