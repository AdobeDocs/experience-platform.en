---
title: User-defined Dashboards
description: Learn how to build and manage custom dashboards where you can create, add, and edit bespoke widgets to visualize key metrics.
---
# User-defined dashboards (Beta)

>[!IMPORTANT]
>
>The user-defined dashboards feature is in beta. Its features and documentation are subject to change.

Adobe Experience Platform Dashboards helps you to expedite insights and customize visualization through the user-defined dashboards feature. This feature enables you to build and manage custom dashboards where you can create, add, and edit bespoke widgets to visualize key metrics relevant to your organization.

## Getting started

To view dashboards in Adobe Experience Platform you must have the appropriate permissions enabled. Please read the [dashboards permissions documentation](./permissions.md#available-permissions) to learn how to grant users the ability to view, edit, and update Experience Platform dashboards using Adobe Admin Console. If you do not have administrator privileges for your organization, contact your product administrator to obtain the required permissions.

## Create custom dashboards

To create a custom dashboard, first, navigate to the dashboard inventory. Select **[!UICONTROL Dashboards]** from the left navigation of the Platform UI followed by **[!UICONTROL Create dashboard]**.

To learn more about the available pre-configured dashboards, see the [dashboard inventory overview](./inventory.md).

>[!NOTE]
>
>By adding a custom dashboard, the list of pre-configured dashboards is removed from the dashboard inventory. Instead, the dashboard inventory comprises solely of user-defined dashboards.

![The dashboard inventory with "Create dashboard" highlighted.](./images/user-defined-dashboards/create-dashboard.png)

The [!UICONTROL Create dashboard] dialog appears. Enter a human-friendly, descriptive name for the collection of widgets you intend to create, and select **[!UICONTROL Save]**.

![The Create dashboard dialog.](./images/user-defined-dashboards/create-dashboard-dialog.png)

The newly created blank dashboard appears with your chosen name in the top left corner of the view.

## Create a widget

From your new dashboard view, select **[!UICONTROL Add new widget]** to begin the widget creation process.

![The new empty dashboard with Add new widget highlighted.](./images/user-defined-dashboards/add-new-widget.png)

### Widget composer

The widget composer workspace appears. Next, select **[!UICONTROL Select data]** to choose the data model from which to add attributes to your widgets. 

![The widget composer workspace.](./images/user-defined-dashboards/widget-composer.png)

The [!UICONTROL Select data] dialog appears. Select a data model from the left column to display a preview list of all available tables. 

>[!NOTE]
>
>User-defined dashboards currently only supports the profile data model. More options will be supported.

![The select data dialog.](./images/user-defined-dashboards/select-data-dialog.png)

The preview list provides details about the tables contained in the data model. The table below provides descriptions of the column fields and their potential values.

| Column field | Description |
|---|---|
|[!UICONTROL Title] | The name of the table.|
|[!UICONTROL Table type] | The type of table. Potential types include: `fact`, `dimension`, and `none`. |
|[!UICONTROL Lookups] | The number of tables joined to the chosen table.|

<!-- accurate descriptions required -->

Select **[!UICONTROL Next]** to confirm your choice of data model. The next view displays a list of the tables available in the left rail. Select a table to see a comprehensive breakdown of the data contained in your selected table.

The [!UICONTROL Preview] panel contains tabs for [!UICONTROL Sample records] and [!UICONTROL Attributes]. [!UICONTROL Sample records] provides a tabulated view for all the table columns of the selected data model table. The [!UICONTROL Attributes] tab provides the attribute name, data type, and source table for every attribute associated with the selected table. 

Select a table from the list available in the left rail to provide data for your widget and select [!UICONTROL Select] to return to the widget composer.

![The select data dialog with select highlighted.](./images/user-defined-dashboards/select-a-table.png)

The widget composer is now populated with data from your chosen table.

The data model and currently selected table are displayed at the top of the left rail, and the attributes available to create your widget are listed in the attributes column.

![A widget populated with data within the widget composer.](./images/user-defined-dashboards/populated-widget-composer.png)

>[!TIP]
>
>You can change the chosen data model by selecting the pencil icon (![Pencil icon.](./images/user-defined-dashboards/edit-icon.png)) in the left rail.

Select the ellipses (`...`) next to an attribute name to add an attribute to either the X or the Y axis.

![The widget composer with the ellipses dropdown highlighted to add attributes a widget axis.](./images/user-defined-dashboards/attributes-dropdown.png)

Next, select the type of graph or chart from the [!UICONTROL Marks] dropdown to generate a preview visualization of your widget's current settings. In the [!UICONTROL Properties] rail on the right side of the screen, enter a name for the widget in the [!UICONTROL Widget title] text field. 

![The widget composer with the Marks dropdown and widget title text field highlighted.](./images/user-defined-dashboards/marks-dropdown-widget-title.png)

When you are satisfied with your widget select **[!UICONTROL Save]**. A tick icon underneath the widget name indicates that the widget has been saved. 

![New widget save confirmation.](./images/user-defined-dashboards/save-confirmation.png)

Select **[!UICONTROL Cancel]** to return to your custom dashboard.

![The widget composer with an example widget created.](./images/user-defined-dashboards/composed-widget.png)

>[!TIP]
>
>Select the setting icon next to the dashboard name to see details about its creation. You can change the name of your dashboard in the dialog that appears.

Select **[!UICONTROL Save]** to confirm your dashboard name and layout.

## Next steps

By reading this document you have a better understanding of how to create a custom dashboard and how to create, edit, and update custom widgets for that dashboard.

To discover the available pre-configured metrics and visualizations for the [profiles](./guides/profiles.md#standard-widgets), [segments](./guides/segments.md#standard-widgets), and [destinations](./guides/destinations.md#standard-widgets) dashboards, see the list of standard widgets in their respective documentation.

 


