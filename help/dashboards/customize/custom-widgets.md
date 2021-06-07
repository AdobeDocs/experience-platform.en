---
keywords: Experience Platform;user interface;UI;dashboards;dashboard;profiles;segments;destinations;license usage
title: Dashboard Widget Library Overview
description: This guide provides step-by-step instructions for adding standard widgets and creating custom widgets for visualizing dashboard data in Adobe Experience Platform. 
exl-id: 1d33e3ea-a8a8-4a09-8bd9-2e04ecedebdc
---
# Creating custom widgets for dashboards {#custom-widgets}

Within the Adobe Experience Platform user interface, you can view and interact with your organization's data using multiple dashboards. You can also update some of these dashboards by adding new widgets to your dashboard view. In addition to the standard widgets provided by Adobe, you can create custom widgets and share them throughout your organization. 

This guide provides step-by-step instructions for creating and adding custom widgets to the [!UICONTROL Profiles], [!UICONTROL Segments], and [!UICONTROL Destinations] dashboards in the Platform UI.

To learn more about standard widgets, please refer to the guide for [adding standard widgets to your dashboards](standard-widgets.md).

>[!NOTE]
>
>The widgets shown in the [!UICONTROL License usage] dashboard cannot be customized. To learn more about this unique dashboard, read the [license usage dashboard documentation](guides/license-usage.md).

## Getting started with custom widgets

To further customize the look of dashboards within Experience Platform, you can create widgets and share them with other users in your organization using the [widget library](widget-library.md). 

>[!IMPORTANT]
>
>Your organization can create a maximum of 20 custom widgets in the widget library.

From the widget library, select the **[!UICONTROL Custom]** tab to begin creating custom widgets or to view custom widgets that your organization has already created. 

![](../images/customization/custom-widgets.png)

## Edit schema

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

## Create a custom widget

To create a custom widget, select **[!UICONTROL Create]** from the center of the widget library, or if custom widgets have already been created, select **[!UICONTROL Create widget]** from the top-right corner of the widget library. 

![](../images/customization/create-widget.png)

On the **[!UICONTROL Create widget]** dialog, you can provide a title and description for your new widget and choose the attribute that you want the widget to display. To choose an attribute, select the radio button beside the attribute you want to add.

>[!NOTE]
>
>Only one attribute can be selected per widget. Also, if a widget has already been created for an attribute, the attribute appears grayed out.

![](../images/customization/create-widget-dialog.png)

A preview of the new widget appears in the dialog, showing a horizontal bar graph with mock data. 

>[!NOTE]
>
>The only metric currently supported for all attributes is profile count and the only visualization currently supported for custom widgets is a horizontal bar graph. 
>
>Data shown in the example widget is for illustration purposes only. The preview does not display actual data from your organization.

![](../images/customization/create-widget-select-attribute.png)

To save your new widget and return to the [!UICONTROL Custom] tab, select **[!UICONTROL Create]**. Your new widget is now available to be added to a dashboard by choosing the widget from the library and selecting **[!UICONTROL Add widget]**.

## Archive a custom widget

After a widget has been added to the library, it can be archived using the **[!UICONTROL Archive]** button. You can also edit the widget to update the title or description fields.

## Next steps

After reading this document, you now are able to access the [!UICONTROL Widget library] and use it to create and add custom widgets for your organization. To modify the size and location of widgets in the dashboard, please refer to the [modify dashboards guide](modify.md).
