---
keywords: Experience Platform;user interface;UI;dashboards;dashboard;profiles;segments;destinations;license usage
title: Customize Platform Dashboards in the UI
description: This guide provides step-by-step instructions for customizing the way in which your organization's Adobe Experience Platform data is displayed within dashboard widgets. 
topic: guide
---

# (Beta) Dashboard customization {#dashboard-customization}

>[!IMPORTANT]
>
>Dashboard functionality is currently in beta and is not available to all users. The documentation and the functionality are subject to change.

Within the Adobe Experience Platform user interface, you can view and interact with your organization's data using multiple dashboards. The default widgets and metrics shown in the dashboards can be adjusted at an individual user level to display preferred data and widgets can be created and shared between users in the same organization. This guide provides step-by-step instructions for customizing the way in which dashboard data is displayed within the profiles, segments, and destinations dashboards in the Profile UI.

>[!NOTE]
>
>The widgets shown in the [!UICONTROL License usage] dashboard cannot be customized. Please refer to the [license usage dashboard documentation](guides/license-usage.md) to learn more about this unique dashboard.

## Modify dashboard

From any dashboard (for example, the Profiles dashboard), you can select **[!UICONTROL Modify dashboard]** in order to resize and reorder existing widgets.

![](images/customization/modify-dashboard.png)

### Reorder widgets

After choosing to modify the dashboard, you can reorder the widgets by selecting the widget title and dragging and dropping the widgets into the desired order. In this example, the **[!UICONTROL Profiles by identity namespace]** widget is moved to the top row and the [!UICONTROL Profile Count] widget now appears on the second row.

>[!NOTE]
>
>As widgets are adjusted in size, surrounding widgets are repositioned dynamically. This may cause some widgets to be moved to additional rows, requiring you to scroll in order to see all widgets.

![](images/customization/move-widget.png)

### Resize widgets

You can also resize a widget by selecting the angle symbol in the bottom-right corner of the widget (`⌟`) and dragging the widget to the desired size. In this example, the **[!UICONTROL Profiles by identity namespace]** widget is resized to fill the entire top row, automatically moving the other widgets to the second row. Note how the horizontal axis adjusts to provide more detailed increments as the widget gets larger.

![](images/customization/resize-widget.png)

### Save dashboard updates

After you have finished moving and resizing widgets, select **[!UICONTROL Save]** to save your changes and return to the main dashboard view. If you do not wish to keep your changes, select **[!UICONTROL Cancel]** to reset the dashboard and return to the main dashboard view.

![](images/customization/save-changes.png)

## Widget library

In addition to resizing and reordering widgets, you can select additional widgets to display on your dashboard or create new widgets using the **[!UICONTROL Widget library]**. 

To access the widget library, select **[!UICONTROL Widget library]** from the modify dashboard screen.

>[!NOTE]
>
>The [!UICONTROL Widget library] button only appears once [!UICONTROL Modify dashboard] has been selected.

![](images/customization/widget-library-button.png)

### Add widgets {#add-widgets}



### Create custom widgets

>[!NOTE]
>
>Permissions required to create custom widgets.

To further customize the look of dashboards within Experience Platform, you can elect to create new widgets and share them with other users in your organization. To begin, select **[!UICONTROL Modify dashboard]** from the dashboard you wish edit, then select **[!UICONTROL Widget library]**.

![](images/customization/widget-library-button.png)

From the widget library, select the **[!UICONTROL Custom]** tab to begin creating custom widgets.

![](images/customization/custom-tab.png)

Choosing to create a new widget opens the **[!UICONTROL Create widget]** dialog where you can provide a title and description for the new widget and choose the attributes that you wish the widget to display. To add an attribute to the widget, select the radio button beside the attribute you wish to add.

![](images/customization/create-widget.png)

In order to save your new widget, select **[!UICONTROL Create]** and you will be returned to the [!UICONTROL Custom] tab. Your new widget is now available to be added to a dashboard following the same basic steps for [adding a widget to a dashboard](#add-widgets).

![](images/customization/custom-tab-new-widget.png)

## Next steps

By following this document you should now be able to use the [!UICONTROL Modify dashboard] functionality to reorder and resize widgets and access the [!UICONTROL Widget library] to add new widgets to a dashboard and create custom widgets for your organization. To learn more about working with specific dashboards, please select from the list of available dashboards documentation.