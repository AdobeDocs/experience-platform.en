---
keywords: Experience Platform;user interface;UI;dashboards;dashboard;profiles;segments;destinations;license usage;widgets;metrics;
title: Custom Dashboard Widgets
description: This guide provides step-by-step instructions for creating custom widgets for use in Adobe Experience Platform dashboards. 
exl-id: 1d33e3ea-a8a8-4a09-8bd9-2e04ecedebdc
---

# Custom dashboard widgets

In Adobe Experience Platform, you can view and interact with your organization's data using multiple dashboards. You can also update certain dashboards by adding new widgets to your dashboard view. In addition to the standard widgets provided by Adobe, you can also create custom widgets and share them throughout your organization. 

This guide provides step-by-step instructions for creating and adding custom widgets to the [!UICONTROL Profiles], [!UICONTROL Segments], and [!UICONTROL Destinations] dashboards in the Platform UI.

To learn more about standard widgets, please refer to the guide for [adding standard widgets to your dashboards](standard-widgets.md).

>[!NOTE]
>
>The widgets shown in the [!UICONTROL License usage] dashboard cannot be customized. To learn more about this unique dashboard, read the [license usage dashboard documentation](../guides/license-usage.md).

## Widget library {#widget-library}

This guide requires access to the [!UICONTROL Widget library] within Experience Platform. To learn more about the widget library, and how to access it within the UI, please begin by reading the [widget library overview](widget-library.md).

## Getting started with custom widgets

Within the widget library, the **[!UICONTROL Custom]** tab enables you to create widgets and share them with other users in your organization in order to customize the look of your dashboards. 

>[!IMPORTANT]
>
>Your organization can create a maximum of 20 custom widgets in the widget library.

Select the **[!UICONTROL Custom]** tab to begin creating custom widgets or to view custom widgets that your organization has already created. 

![](../images/customization/custom-widgets.png)

## Create a custom widget

To create a custom widget, select **[!UICONTROL Create]** from the center of the widget library, or if custom widgets have already been created, select **[!UICONTROL Create widget]** from the top-right corner of the widget library. 

![](../images/customization/create-widget.png)

In the **[!UICONTROL Create widget]** dialog, you can provide a title and description for your new widget and choose the attribute that you want the widget to display. 

>[!NOTE]
>
>The list of available attributes depends on the schema that has been configured for your organization. To learn more about attribute selection and schema configuration, read the guide on [editing the schema to create custom widgets](edit-schema.md).

To choose an attribute, select the radio button beside the attribute you want to add.

>[!NOTE]
>
>Only one attribute can be selected per widget and only one widget can be created per attribute. If a widget has already been created for an attribute, the attribute appears grayed out.

![](../images/customization/create-widget-dialog.png)

## Preview custom widget

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

After reading this document, you are able to access the widget library and use it to create and add custom widgets for your organization. To modify the size and location of widgets that appear in the dashboard, please refer to the [modify dashboards guide](modify.md).
