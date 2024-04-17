---
title: Configure your sources accounts and dataflows using the UI
description: Learn how to 
---
# Inventory Modernization for Sources in the UI

In the Experience Platform UI, select [!UICONTROL Sources] in the left navigation and then select [!UICONTROL Dataflows] from the top header. By default, the filter menu is displayed on the left of the interface. To hide the menu, select **[!UICONTROL Hide filters]**.

You can filter your sources dataflows by the following parameters:

* Source platform
* Tags
* Status
* Target dataset
* Account name
* Created by
* Creation date
* Modified date

**The basics**

Use the filter menu on the left navigation to filter your sources dataflows. You can combine different filters to widen or narrow down your search. Use the breadcrumb tool to remove elements of your filtering setting. Select **[!UICONTROL Clear all]** to remove all filters.

**Filter by source platform**

Use the [!UICONTROL Source platform] panel to filter your dataflows by type of source. You can either type in a particular source or use the dropdown menu to see a list of sources in the catalog. You can also filter for several different sources for a given query. For example, you can select [!DNL Amazon S3], [!DNL Azure Data Lake Storage Gen2], and [!DNL Google Cloud Storage] to update the catalog and display only the dataflows that were created with the selected sources.

![A query to filter dataflows by source platform.]

**Filter by tags**

Use the tags panel to filter your dataflows by their respective tags.

Select **[!UICONTROL Has any tag]** and then select the tags that you want to filter by using the dropdown menu. Use this setting to filter for dataflows that has any of the tags that you selected.

![A query to filter dataflows by any tag.]

Select **[!UICONTROL Has all tags]** and then select the tags that you want to filter by using the dropdown menu. Usee this setting to filter for dataflows that has all of the tags that you selected.

![A query to filter dataflows by all tags.]

**Filter by status**

You can filter by status using the [!UICONTROL Status] panel.

![The status panel to filter by the status of a given dataflow.]

| Status | Description |
| --- | --- |
| Enabled | Select **[!UICONTROL Enabled]** to filter your view and display only active dataflows. | 
| Disabled | Select **[!UICONTROL Disabled]** to filter your view and display only deactivated dataflows. |
| Draft | Select **[!UICONTROL Draft]** to filter your view and display only dataflows are in draft mode. |

**Filter by target dataset**

Select **[!UICONTROL Target dataset]** to  access a dropdown menu of all target datasets. Then, select a target dataset to filter your view and display only the dataflows that were created using your specified target datasets.

**Filter by account name**

Select **[!UICONTROL Account name]** to access a dropdown menu of all accounts. Then, select an account to filter your view and display dataflows created by your selected account.

**Filter by user**

Use the [!UICONTROL Created by] panel to filter dataflows by user. Select the dropdown and then select the username to filter your dataflows by.


**Filter by date of creation**

You can filter your dataflows by their creation dates. In the [!UICONTROL Created date] panel, configure a start date and end date to create a time frame window and filter your view to display only dataflows created within that window.

You can configure your time frame by inputting your start and end date. Alternatively, select the calendar icon and use the calendar to configure your dates.

You can also follow the same steps, but filter dataflows by their last modification date, as opposed to their creation date.

**Filter by date of modification**

Similarly, you can apply same principles and filter your dataflow by their dates of modification. Use the **[!UICONTROL Modified date]** to configure a particular time frame and filter your view to display only dataflows that have been modified during that period.

## Search

## Inline actions

Select the ellipses beside a dataflow name for a list of inline actions that you can use to make modifications to your dataflow:

| Inline actions | Description |
| --- | --- |
| Edit schedule | Select **[!UICONTROL Edit schedule]** to update the ingestion schedule of your dataflow. A dataflow that has been set to one-time ingestion cannot be edited. |
| Disable dataflow | Select **[Disable dataflow]** to deactivate a dataflow run. This option does not delete your dataflow. |
| View in monitoring | Select **[!UICONTROL View in monitoring]** to view the metrics and status of your dataflow in the monitoring dashboard. For more information, read the guide on [monitoring sources dataflows](../../../dataflows/ui/monitor-sources.md). |
| Delete | Select **[!UICONTROL Delete]** to delete your dataflow. |
| Run on-demand | Select **[!UICONTROL Run on-demand]** to trigger a single iteration of a dataflow run. For more information, read the guide on [creating an on-demand dataflow run](../ui/on-demand-ingestion.md). |
| Subscribe to alerts | Select **[!UICONTROL Subscribe to alerts]** to view a pop-up window of alerts that you can subscribe to: <ul><li>Sources Dataflow Run Start: Select this alert to receive a notification when your on-demand dataflow run begins.</li><li>Sources Dataflow Run Success: Select this alert to receive a notification when your on-demand dataflow run finishes successfully.</li><li>Sources Dataflow Run Failure: Select this alert when your on-demand dataflow run fails due to errors.</li></ul> For more information, read the guide on [subscribing to alerts for sources dataflows](../ui/alerts.md).  |
| Add to package | Select **[!UICONTROL Add to package]** to add your dataflow to a package and export it for use in a different sandbox. During this step, you can either create a new package or add your dataflow to an existing package. For information, read the guide on [sandbox tooling](../../../sandboxes/ui/sandbox-tooling.md).|
| Manage tags | Select **[!UICONTROL Manage tags]** to add or remove tags from your dataflow. Use tags to manage metadata taxonomies and classify business objects for easier discovery and categorization. For more information, read the guide on [managing tags](../../../administrative-tags/ui/managing-tags.md).|