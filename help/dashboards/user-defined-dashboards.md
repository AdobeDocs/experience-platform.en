---
title: User Defined Dashboards
description: Learn how to build and manage custom dashboards where you can create, add, and edit bespoke widgets to visualize key metrics.
---
# User defined dashboards (Beta)

>[!IMPORTANT]
>
>The [!DNL Shared Device Detection] feature is in beta. Its features and documentation are subject to change.

Adobe Experience Platform Dashboards helps you to accelerate insights and customize visualization through the user-defined dashboard feature. This feature enables you to build and manage custom dashboards where you can create, add, and edit bespoke widgets to visualize key metrics relevant to your organization.

## Getting started

To view dashboards in Adobe Experience Platform you must have the appropriate permissions enabled. Please read the [dashboards permissions documentation](./permissions.md#available-permissions) to learn how to grant users the ability to view, edit, and update Experience Platform dashboards using Adobe Admin Console. If you do not have have administrator privileges for your organization, contact your product administrator to obtain the required permissions.

## Create custom dashboards

To create a custom dashboard, first navigate to the dashboards inventory. Select **[!UICONTROL Dashabords]** from the left navigation of the Platform UI followed by **[!UICONTROL Create dashboard]** from the dashboard inventory.

See the documentation for an [overview of the dashboard inventory](./inventory.md) and the available pre-configured dashboards.

>[!NOTE]
>
>By adding a custom dashboard, the list of pre-configured dashboards is removed from the dashboard inventory. Instead, the dashboard inventory comprises solely of user-defined dashboards.

![The dashboard inventory with "Create dashboard" highlighted.](./images/user-defined-dashboards/create-dashboard.png)

The [!UICONTROL Create dashboard] dialog appears. Enter a human friendly, descriptive name for the collection of widgets you intend to create, and select **[!UICONTROL Save]**.

![The Create dashboard dialog.](./images/user-defined-dashboards/create-dashboard-dialog.png)

The newly created blank dashboard appears with your chosen name in the top left corner fo the view. Select **[!UICONTROL Add new widget]** to begin the widget creation process.

![The new empty dashboard with Add new widget highlighted.](./images/user-defined-dashboards/add-new-widget.png)

## Widget composer

The widget composer workspace appears. Next, select **[!UICONTROL Select data]** to choose the data model from which to add attributes to your widgets. 

![The widget composer workspace.](./images/user-defined-dashboards/widget-composer.png)

The [!UICONTROL Select data] dialog appears.

>[!NOTE]
>
>User-defined dashboards currently only supports the profile data model. More options will be supported.

![The select data dialog.](./images/user-defined-dashboards/select-data-dialog.png)

Select a data model from the left column to display a preview list of all available tables. 

The preview list provides details about the tables contained in the data model. The table below provides descriptions of the column fields and their potential values.

| Column field | Description |
|---|---|
|[!UICONTROL Title] | The name of the table.|
|[!UICONTROL Table type] | The type of table. Potential types include: `fact`, `dimension`, and `none`. |
|[!UICONTROL Lookups] | The number of table .|

<!-- accurate descriptions required -->

Select **[!UICONTROL Next]** to confirm your choice of data model. The next view displays a list of the tables available in the left rail. Select a table to see a comprehensive breakdown of the data contained in your selected table.

The [!UICONTROL Preview] panel contains tabs for [!UICONTROL Sample records] and [!UICONTROL Attributes]. [!UICONTROL Sample records] provides a tabulated view for all the table columns of the selected data model table. The [!UICONTROL Attributes] tab provides the attribute name, data type, and source table for every attribute associated with the selected table. 

Select a table from the list available in the left rail to provide data for your widget and select [!UICONTROL Select].

![The select data dialog with select highlighted.](./images/user-defined-dashboards/select-a-table.png)

The widget composer is now populated with data form your chosen table.

<!-- Populated widget composer image -->
