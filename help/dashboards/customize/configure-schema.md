---
keywords: Experience Platform;user interface;UI;dashboards;dashboard;profiles;segments;destinations;license usage
title: Configure Schema for Creating Custom Dashboard Widgets
description: This guide provides step-by-step instructions for how to select attributes and configure your schema in order to create custom widgets for Adobe Experience Platform dashboards. 
exl-id: 1d33e3ea-a8a8-4a09-8bd9-2e04ecedebdc
---
# Configure schema for creating custom widgets

Within the Adobe Experience Platform user interface, you can view and interact with your organization's data using multiple dashboards. You can also update some of these dashboards by adding new widgets to your dashboard. In order to create new widgets, you must first identify the attributes upon which the widgets will be based.

This guide provides step-by-step instructions for configuring a schema by selecting attributes in order to create custom dashboard widgets.

Once attributes have been selected and the schema has been configured, you can proceed with the steps for [creating custom widgets for your dashboards](standard-widgets.md).

## Select an attribute

In order to create custom widgets, Real-time Customer Profile attributes must be identified to ensure that the data is included as part of the daily snapshot. If your organization has not selected any Profile attributes, the [!UICONTROL Configure schema] button appears in the top-right corner of the widget library.

When at least one custom attribute has been selected, the [!UICONTROL Edit schema] button appears in the top-right corner of the widget library. Select **[!UICONTROL Edit schema]** to open the **[!UICONTROL Select union schema field]** dialog to view the selected attributes and add more attributes.

>[!IMPORTANT]
>
>An organization can select a maximum of 20 attributes. 

![](../images/customization/edit-schema.png)

To select an attribute, navigate to the attribute in the union schema (or use search) and select the checkbox next to the attribute. Selecting the checkbox also adds the attribute to the **[!UICONTROL Selected Attributes]** list on the right-hand side of the dialog. 

>[!NOTE]
>
>In order for an attribute to be visible for selection, it must be one of the following: String, Date, Date-Time, Boolean, Short, Long, Integer, or Byte. Map and Double data types are not supported and are grayed out so that they cannot be selected.

After choosing the attributes that you wish to add, select **[!UICONTROL Save]** to save your attributes and return to the custom widgets tab.

Newly selected attributes are available following the daily snapshot when the data is refreshed.

![](../images/customization/select-attribute.png)

## Next steps

After reading this guide you are able to navigate to the widget library and select Real-time Customer Profile attributes to configure your schema. With Profile attributes selected, you are ready to follow the guide for [creating a custom widget for your dashboard](custom-widgets.md).