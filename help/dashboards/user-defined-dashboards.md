---
title: User-defined Dashboards
description: Learn how to build and manage custom dashboards where you can create, add, and edit bespoke widgets to visualize key metrics.
exl-id: a9ab83f7-b68d-4dbf-9dc6-ef253df5c82c
---
# User-defined dashboards

Adobe Experience Platform Dashboards helps you to expedite insights and customize visualization through the user-defined dashboards feature. This feature enables you to build and manage custom dashboards where you can create, add, and edit bespoke widgets to visualize key metrics relevant to your organization.

<!-- Getting started / permissions section commented out for Beta. This will be necessary after GA only

## Getting started

To view dashboards in Adobe Experience Platform you must have the appropriate permissions enabled. Please read the [dashboards permissions documentation](./permissions.md#available-permissions) to learn how to grant users the ability to view, edit, and update Experience Platform dashboards using Adobe Admin Console. If you do not have administrator privileges for your organization, contact your product administrator to obtain the required permissions. -->

## Create a custom dashboard

To create a custom dashboard, first, navigate to the dashboard inventory. Select **[!UICONTROL Dashboards]** from the left navigation of the Platform UI followed by **[!UICONTROL Create dashboard]**.

![The dashboard inventory with Dashboards in the left navigation and "Create dashboard" highlighted.](./images/user-defined-dashboards/create-dashboard.png)

Before adding a custom dashboard, the dashboards inventory is empty and displays a "No dashboards found." message. Once created, all of your user-defined dashboards are listed in the dashboard inventory. 

>[!NOTE]
>
>To edit an existing dashboard, select the dashboard name from the inventory list followed by the pencil icon (![A pencil icon.](./images/user-defined-dashboards/edit-icon.png))

The [!UICONTROL Create dashboard] dialog appears. Enter a human-friendly, descriptive name for the collection of widgets you intend to create, and select **[!UICONTROL Save]**.

![The Create dashboard dialog.](./images/user-defined-dashboards/create-dashboard-dialog.png)

The newly created blank dashboard appears with your chosen name in the top left corner of the view.

## Create a widget {#create-widget}

>[!CONTEXTUALHELP]
>id="platform_dashboards_udd_maxwidgets"
>title="Maximum number of widgets"
>abstract="User-defined dashboards support up to ten widgets. After you have added ten widgets to your dashboard, the [!UICONTROL Add new widget] option is disabled and appears gray."

From your new dashboard view, select **[!UICONTROL Add new widget]** to begin the widget creation process.

>[!IMPORTANT]
>
>User-defined dashboards support up to ten widgets. After you have added ten widgets to your dashboard, the [!UICONTROL Add new widget] option is disabled and appears gray.

![The new empty dashboard with Add new widget highlighted.](./images/user-defined-dashboards/add-new-widget.png)

### Widget composer

The widget composer workspace appears. Next, select **[!UICONTROL Select data]** to choose the data model from which to add attributes to your widgets. 

![The widget composer workspace.](./images/user-defined-dashboards/widget-composer.png)

#### Select data model {#select-data-model}

The [!UICONTROL Select data model] dialog appears. Select a data model from the left column to display a preview list of all available tables. The pre-configured data model for Real-Time Customer Data Platform is named [!UICONTROL CDPInsights].

>[!TIP]
>
>Select the information icon (![An information icon.](./images/user-defined-dashboards/info-icon.png)) to see the full data model name if it is too long to display in the data rail.

![The Select data dialog.](./images/user-defined-dashboards/select-data-model-dialog.png)

The preview list provides details about the tables contained in the data model. The table below provides descriptions of the column fields and their potential values.

| Column field | Description |
|---|---|
|[!UICONTROL Title] | The name of the table.|
|[!UICONTROL Table type] | The type of table. Potential types include: `fact`, `dimension`, and `none`. |
|[!UICONTROL Records] | The number of records associated with the chosen table.|
|[!UICONTROL Lookups] | The number of tables joined to the chosen table.|
|[!UICONTROL Attributes] | The number of attributes for the chosen table.|

Select **[!UICONTROL Next]** to confirm your choice of data model. The next view displays a list of the available tables in the left rail. Select a table to see a comprehensive breakdown of the data contained in your selected table.

### Populate widget {#populate-widget}

The [!UICONTROL Preview] panel contains tabs for [!UICONTROL Sample records] and [!UICONTROL Attributes]. The [!UICONTROL Sample records] tab provides a subset of the records from the selected table in a tabulated view. The [!UICONTROL Attributes] tab provides the attribute name, data type, and source table for every attribute associated with the selected table. 

Select a table from the list available in the left rail to provide data for your widget, and select **[!UICONTROL Select]** to return to the widget composer.

![The select data dialog with select highlighted.](./images/user-defined-dashboards/select-a-table.png)

The widget composer is now populated with data from your chosen table.

The data model and currently selected table are displayed at the top of the left rail, and the attributes available to create your widget are listed in the [!UICONTROL Attributes] column. You can use the search bar to look for attributes instead of scrolling the list, or change the chosen data model by selecting the pencil icon (![Pencil icon.](./images/user-defined-dashboards/edit-icon.png)) in the left rail.

![A widget populated with data within the widget composer.](./images/user-defined-dashboards/populated-widget-composer.png)

#### Add and filter attributes {#add-and-filter-attributes}

Select the add icon (![An add icon.](./images/user-defined-dashboards/add-icon.png)) next to an attribute name to add an attribute to your widget. The dropdown menu that appears allows you to add an attribute as either the X axis, the Y axis, a color, or a filter for your widget. The [!UICONTROL Color] attribute allows you to differentiate the results of the X and Y axis marks based on colour. It does this by splitting the results into different colours based on their composition of a third attribute. 

>[!TIP]
>
>If you want to flip the arrangement of X and Y axis, select the up and down arrow icon (![The up and down arrow icon.](./images/user-defined-dashboards/switch-axis-icon.png)) to switch their arrangement.

![The widget composer with the add-icon dropdown highlighted.](./images/user-defined-dashboards/attributes-dropdown.png)

To change the type of graph or chart of your widget, select the [!UICONTROL Marks] dropdown and choose from the available options. The options include bars, points, ticks, lines, or area. Once selected, a preview visualization of your widget's current settings is generated.

![The widget composer with the Marks dropdown highlighted.](./images/user-defined-dashboards/marks-dropdown.png)

By adding an attribute as a filter, you can select which values to include or exclude from the widget. After adding a filter from the attributes list, the [!UICONTROL Filter] dialog appears where you can select or deselect values using their checkbox.

![The filter dialog to filter values from your widget.](./images/user-defined-dashboards/filter-dialog.png)

#### Filter out historical data {#filter-historical-data}

To filter out historical data from your widget's data insights, add the `date_key` attribute as a filter and select **[!UICONTROL Recent date]** followed by **[!UICONTROL Apply]**. This filter ensures that the data used to derive insights is taken from the most recent system snapshot.

![The [!UICONTROL Filter: date_key] dialog with [!UICONTROL Recent date] and [!UICONTROL Apply] highlighted.](./images/user-defined-dashboards/recent-date.png)

Alternatively, you can create a custom period to filter your data by. Select **[!UICONTROL Select dates]** to extend the dialog with a list of available dates. Use the **[!UICONTROL Select all]** checkbox to enable or disable all available options, or select the checkbox for each day individually. Finally, select **[!UICONTROL Apply]** to confirm your choices.

>[!NOTE]
>
>If the `date_key` attribute has already been added as a filter, select the ellipsis followed by **[!UICONTROL Edit]** from the dropdown options. 

![The [!UICONTROL Filter: date_key] dialog with individual day checkboxes both checked and unchecked.](./images/user-defined-dashboards/select-dates.png)

### Widget properties

Select the properties icon (![The properties icon.](./images/user-defined-dashboards/properties-icon.png)) in the right rail to open the properties panel. In the [!UICONTROL Properties] panel, enter a name for the widget in the [!UICONTROL Widget title] text field. 

![The properties panel with the properties icon and the Widget title field highlighted.](./images/user-defined-dashboards/properties-panel.png)

From the widget properties panel, you can edit several aspects of your widget. You have complete control to edit the location of the widget legend. To move the legend, select the [!UICONTROL Legend placement] dropdown and choose your desired location from the list of available options. You can also rename the label associated with the legend, and the X or Y axis by entering a new name into the [!UICONTROL Legend title] text field, or [!UICONTROL Axis label] text field respectively. 

#### Save your widget {#save-widget}

Saving in the widget composer saves the widget locally to your dashboard. If you wish to save your work and resume at a later time, select **[!UICONTROL Save]**. A tick icon underneath the widget name indicates that the widget has been saved. Alternatively, when you are satisfied with your widget, select **[!UICONTROL Save and close]** to make the widget available to all other users with access to your dashboard. Select **[!UICONTROL Cancel]** to abandon your work and return to your custom dashboard.

![New widget save confirmation.](./images/user-defined-dashboards/save-confirmation.png)

>[!TIP]
>
>Select the properties icon (![The properties icon.](./images/user-defined-dashboards/properties-icon.png)) next to the dashboard name to see details about its creation. You can change the name of your dashboard in the dialog that appears.

Widgets can be re-arranged and resized while in this workspace. Select **[!UICONTROL Save]** to preserve your dashboard name and configured layout.

![The user-defined dashboard with a custom widget and the save button highlighted.](./images/user-defined-dashboards/user-defined-dashboard.png)

To ensure that each query for an Adobe Real-Time Customer Data Platform insights dashboard has enough resources to execute efficiently, the API tracks resource usage by assigning concurrency slots to each query. The system can process up to four concurrent queries, and therefore four concurrent query slots are available at any given time. Queries are put into a queue based on concurrency slots, then wait in the queue until enough concurrency slots are available.

### Duplicate a widget

Once you have created a widget, you can duplicate the entire widget and customize its attributes to create a unique widget without having to start from scratch. To duplicate a widget, first, navigate to the dashboard inventory. Then select the dashboard name from the inventory list. Your custom dashboard appears.

![The Platform UI with dashboards and a custom dashboard name highlighted.](./images/user-defined-dashboards/dashbaord-inventory.png)

Select the pencil icon  (![A pencil icon.](./images/user-defined-dashboards/edit-icon.png)) from the top right of your custiom dahboard to enter the editing mode.

![A custom dashboard with the pencil icon highlighted.](./images/user-defined-dashboards/edit-mode.png)

Next, select the ellipses in the top right of the widget that you wish to copy, followed by **[!UICONTROL Duplicate widget]** from the list of available options.

![A widget in a user-defined dashboard with the ellipses and Duplicate widget highlighted.](./images/user-defined-dashboards/duplicate.png)

A duplicate widget appear in your user-defined dashboard. Select the ellipses of your new widget, followed by **[!UICONTROL Edit]**, to customize your new widget.

## Next steps and additional resources

By reading this document, you have a better understanding of how to create a custom dashboard and how to create, edit, and update custom widgets for that dashboard.

To discover the available pre-configured metrics and visualizations for the [profiles](./guides/profiles.md#standard-widgets), [segments](./guides/segments.md#standard-widgets), and [destinations](./guides/destinations.md#standard-widgets) dashboards, see the list of standard widgets in their respective documentation.

To reinforce your understanding of user-defined dashboards in Experience Platform, watch the following video:

>[!VIDEO](https://video.tv.adobe.com/v/3409637?quality=12&learn=on)
