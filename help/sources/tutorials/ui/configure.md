---
title: Configure your sources accounts and dataflows using the UI
description: Learn how to 
---
# Inventory Modernization for Sources in the UI


## Filter 

* Select the filter icon to access the filter rail
* Select **[!UICONTROL Source platform]** to access a dropdown menu of all sources
* You can filter by status using the [!UICONTROL Status] panel.
  * Select [!UICONTROL Enabled] to filter your view and display only active dataflows.
  * Select [!UICONTROL Disabled] to filter your view and display only deactivated dataflows.
  * Select [!UICONTROL Draft] to filter your view and display only dataflows are in draft mode.
* Select [!UICONTROL Target dataset] to  access a dropdown menu of all target datasets. Then, select a target dataset to filter your view and display only the dataflows that were created using your specified target datasets.
* Select [!UICONTROL Account name] to access a dropdown menu of all accounts. Then, select an account to filter your view and display dataflows created by your selected account.
* You can filter your dataflows by their creation dates. In the [!UICONTROL Created date] panel, configure a start date and end date to create a time frame window and filter your view to display only dataflows created within that window.
  * You can configure your time frame by inputting your start and end date. Alternatively, select the calendar icon and use the calendar to configure your dates.
  * You can also follow the same steps, but filter dataflows by their last modification date, as opposed to their creation date.
* Use the [!UICONTROL Created by] panel to filter dataflows by user. Select the dropdown and then select the username to filter your dataflows by.
* To filter by tags, you can either:
  * Select [!UICONTROL Has any tag] to filter for dataflows that has any tags that you select.
  * Select [!UICONTROL Has all tags] to filter for dataflows that has all of the tags that you select.

## Search

## Inline actions

* Select the ellipses beside a dataflow name for a list of inline actions that you can use to make modifications to your dataflow:

| Inline actions | Description |
| --- | --- |
| Edit schedule | Select **[!UICONTROL Edit schedule]** to update the ingestion schedule of your dataflow. A dataflow that has been set to one-time ingestion cannot be edited. |
| Disable dataflow | |
| View in monitoring | Select **[!UICONTROL View in monitoring]** to view the metrics and status of your dataflow in the monitoring dashboard. |
| Delete | Select **[!UICONTROL Delete]** to delete your dataflow. |
| Run on-demand | Select **[!UICONTROL Run on-demand]** to trigger a single iteration of a dataflow run. |
| Subscribe to alerts | Select **[!UICONTROL Subscribe to alerts]** to view a pop-up window of alerts that you can subscribe to: <ul><li>Sources Dataflow Run Start: Select this alert to receive a notification when your on-demand dataflow run begins.</li><li>Sources Dataflow Run Success: Select this alert to receive a notification when your on-demand dataflow run finishes successfully.</li><li>Sources Dataflow Run Failure: Select this alert when your on-demand dataflow run fails due to errors.</li></ul>  |
| Add to package | |
| Manage tags | |