---
title: Manage Sources Dataflows in the UI
description: Learn how you can use the Experience Platform UI to manage your source dataflows.
---
# Manage sources dataflows in the UI

You can use the *Sources workspace* in the Adobe Experience Platform user interface to manage your existing source dataflows. 

- Use the [!UICONTROL Dataflows] page to access a centralized view of your organization's existing dataflows and search, filter, organize, and take actions on individual flows.
- Use filtering and search capabilities to navigate through source accounts and dataflows in your organization
- Use inline actions to modify configuration settings applied to your dataflows, improve organizational workflows, and apply tags, subscribe to alerts, or create ingestion jobs on demand.

## Get started

Before you begin, ensure that you have the following:

- Access to Adobe Experience Platform.
- Both **[!UICONTROL View Sources]** and **[!UICONTROL Manage Sources]** permissions are required.

It is helpful to have an understanding of the following Experience Platform features and concepts before working with the object navigation tools in the Sources workspace:

- [Sources](../../home.md): Learn how to connect, manage, and monitor external data sources in Experience Platform.
- [Sandboxes](../../../sandboxes/home.md): Discover how sandboxes let you develop and test different projects in isolated environments.
- [Administrative tags](../../../administrative-tags/overview.md): Use administrative tags to apply metadata keywords to your objects and enable search to find that object within the Experience Platform ecosystem.
- [Datasets](../../../catalog/datasets/user-guide.md): A dataset is a management construct for a collection of data, typically a table, that contains a schema (columns) and fields (rows).

## Access your source dataflows

In the Experience Platform UI, select **[!UICONTROL Sources]** from the left navigation to access the Sources workspace, and then select **[!UICONTROL Dataflows]** from the top header. The *[!UICONTROL Dataflows]* page displays a list of existing dataflows in your organization. From this page, you can search for specific dataflows, apply filters to narrow results, organize dataflows with tags, inspect metadata in the table, and continue to related actions such as updating or deleting a dataflow.

![The dataflows page in the sources workspace.](../../images/tutorials/manage/dataflows.png)

## Search and filter dataflows

Use the Dataflows page to quickly locate a specific dataflow or narrow the results.

### Search for a dataflow

Use the search field on the **[!UICONTROL Dataflows]** page to find a dataflow from the current inventory view. After you enter a search term, the table updates to show matching results.

### Filter your dataflows

Select the filter icon (![filter icon](/help/images/icons/filter.png)) to refine the list of available dataflows. You can apply one or more filters to narrow the results based on the metadata associated with each dataflow.

Available filter categories include:

| Filter | Description |
| --- | --- |
| Source platform | Filter your dataflows based on the source that they were created with. |
| Tags | Filter your dataflows based on the tags applied to them. |
| Status | Filter your dataflows based on their current status. |
| Target dataset | Filter your dataflows based on the target dataset they were created with. |
| Account name | Filter your dataflows based on the name of the account that they correspond with. |
| Created by | Filter your dataflows based on who created them. |
| Creation date | Filter your dataflows based on the date they were created. |
| Modified date | Filter your dataflows based on the date they were last updated. |

{style="table-layout:auto"}

To filter your dataflows:

1. Select the filter control to open the filter panel.
2. Select one or more filter criteria.
3. Review the updated results in the dataflows table.
4. Clear individual filters or select [!UICONTROL Clear all] to remove all filters and return to the full list.

Use filters to find dataflows by source platform, identify dataflows with a particular status, or narrow the table to dataflows associated with a specific dataset or account.

![The filter panel on the Dataflows page with source platform and tag filters applied.](../../images/tutorials/manage/filter.png)

## Organize dataflows with tags

You can use tags to organize your dataflows and improve discoverability on the **[!UICONTROL Dataflows]** page. Tags are especially useful when you want to group related dataflows and then use filters to find them again later

To organize a dataflow with tags:

1. Locate the dataflow that you want to update.
2. Select the ellipses (`...`) beside the dataflow name to open the action menu.
3. Select the tag-related action.
4. Add or remove tags as needed.
5. Select **[!UICONTROL Done]** to save your changes.
6. Use the **Tags** filter to find similarly tagged dataflows.

Use tags to create an organizational layer for browsing and filtering workflows, and to manage a larger number of dataflows more efficiently.

![The Add or remove tags dialog displaying tags applied to a dataflow.](../../images/tutorials/manage/tags.png)

## Resize table columns

You can resize table columns on the **[!UICONTROL Dataflows]** page to display more metadata when values are truncated in the default table view. This is useful when you want to inspect longer values such as dataflow names, account details, or target dataset information.

To resize a column, hover over the edge of a column header and drag the boundary to adjust its width.

Resize columns as needed to make it easier to review dataflow details before you take action.

![A resized column on the Dataflows table showing the full dataflow name and target dataset.](../../images/tutorials/manage/resize.png)

## Take action on a dataflow

After you locate the dataflow that you want to work with, select the ellipses (`...`) beside the dataflow name to view the available inline actions. Depending on the dataflow type and your permissions, available actions can include editing a schedule, disabling or deleting a dataflow, running a dataflow on demand, managing tags, and more.

![The selection of inline actions you can choose from for a given dataflow.](../../images/tutorials/manage/actions.png)

| Inline actions | Description |
| --- | --- |
| [!UICONTROL Edit schedule] | Select **[!UICONTROL Edit schedule]** to update the ingestion schedule of your dataflow. A dataflow that has been set to one-time ingestion cannot be edited. |
| [!UICONTROL Disable dataflow] | Select **[!UICONTROL Disable dataflow]** to deactivate a dataflow run. This option does not delete your dataflow. |
| [!UICONTROL View in monitoring] | Select **[!UICONTROL View in monitoring]** to view the metrics and status of your dataflow in the monitoring dashboard. For more information, read the guide on [monitoring sources dataflows](../../../dataflows/ui/monitor-sources.md). |
| [!UICONTROL Delete] | Select **[!UICONTROL Delete]** to delete your dataflow. |
| [!UICONTROL Run on-demand] | Select **[!UICONTROL Run on-demand]** to trigger a single iteration of a dataflow run. For more information, read the guide on [creating an on-demand dataflow run](../ui/on-demand-ingestion.md). |
| [!UICONTROL Subscribe to alerts] | Select **[!UICONTROL Subscribe to alerts]** to view a pop-up window of alerts that you can subscribe to: <ul><li>Sources Dataflow Run Start: Select this alert to receive a notification when your on-demand dataflow run begins.</li><li>Sources Dataflow Run Success: Select this alert to receive a notification when your on-demand dataflow run finishes successfully.</li><li>Sources Dataflow Run Failure: Select this alert to receive a notification when your on-demand dataflow run fails due to errors.</li></ul> For more information, read the guide on [subscribing to alerts for sources dataflows](../ui/alerts.md).  |
| [!UICONTROL Add to package] | Select **[!UICONTROL Add to package]** to add your dataflow to a package and export it for use in a different sandbox. During this step, you can either create a new package or add your dataflow to an existing package. For more information, read the guide on [sandbox tooling](../../../sandboxes/ui/sandbox-tooling.md).|
| [!UICONTROL Manage tags] | Select **[!UICONTROL Manage tags]** to add or remove tags from your dataflow. Use tags to manage metadata taxonomies and classify business objects for easier discovery and categorization. For more information, read the guide on [managing tags](../../../administrative-tags/ui/managing-tags.md).|

## Next steps

By reading this document, you have learned how to navigate your way through the sources accounts and dataflows pages. For more information on sources, read the [sources overview](../../home.md).

