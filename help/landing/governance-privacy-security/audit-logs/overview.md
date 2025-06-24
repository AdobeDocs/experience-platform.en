---
title: Audit Logs Overview
description: Learn how audit logs allow you to see who did what actions in Adobe Experience Platform.
role: Admin,Developer
feature: Audits
exl-id: 00baf615-5b71-4e0a-b82a-ca0ce8566e7f
---
# Audit logs {#audit-logs}

>[!CONTEXTUALHELP]
>id="platform_audits_privacyconsole_actions"
>title="Top Actions"
>abstract="This widget shows the top kinds of actions that have been taken in Experience Platform within the selected timeframe. To see the full list of recorded actions in Experience Platform, select **Audits** in the left navigation."

>[!CONTEXTUALHELP]
>id="platform_audits_privacyconsole_users"
>title="Top Users"
>abstract="This widget shows the users that have executed the most actions in Experience Platform within the selected timeframe. To see the full list of recorded actions in Experience Platform, select **Audits** in the left navigation."

>[!CONTEXTUALHELP]
>id="platform_privacyConsole_audits_description"
>title="Monitor user activities in Experience Platform"
>abstract="<h2>Description</h2><p>You can monitor user activity for various Experience Platform services and capabilities in the form of audit logs. These logs form an audit trail that records <b>who</b> performed <b>what</b> action and <b>when</b>. Audit logs can help with troubleshooting issues on Experience Platform and help your business effectively comply with corporate data stewardship policies and regulatory requirements.</p>"

In order to increase the transparency and visibility of activities performed in the system, Adobe Experience Platform allows you to audit user activity for various services and capabilities in the form of "audit logs". These logs form an audit trail that can help with troubleshooting issues on Experience Platform, and help your business effectively comply with corporate data stewardship policies and regulatory requirements.

In a basic sense, an audit log tells **who** performed **what** action, and **when**. Each action recorded in a log contains metadata that indicates the action type, date and time, the email ID of the user who performed the action, and additional attributes relevant to the action type.

When a user performs an action, two types of audit events are recorded. A core event captures the authorization result of the action, allow or deny, while an enhanced event captures the result of executing the action, success or failure. Multiple enhanced events can be linked to same core event as seen while activating a destination: core event records authorization of Destination Update action, while the enhanced events may record multiple Segment Activate actions.

>[!NOTE]
>
> The metadata for the actions **Add user** and **Remove user** within the **Role** resource will not contain the email ID of the user who performed the action. Instead, the logs will display the system generated email ID (system@adobe.com).

This document covers audit logs in Experience Platform, including how to view and manage them in UI or API.

## Event types captured by audit logs {#category}

The following table outlines which actions on which resources are recorded by audit logs:

| Resource | Actions |
| --- | --- |
| [Access control policy (attribute based access control)](../../../access-control/home.md) | <ul><li>Create</li><li>Update</li><li>Delete</li></ul> |
| [Account (Adobe)](../../../sources/connectors/tutorials/ui/../../../tutorials/ui/update.md) | <ul><li>Create</li><li>Update</li><li>Delete</li></ul> |
| [Attribution AI instance](../../../intelligent-services/attribution-ai/overview.md) | <ul><li>Create</li><li>Update</li><li>Delete</li><li>Enable</li><li>Disable</li></ul> |
| [Audit logs](../../../landing/governance-privacy-security/audit-logs/overview.md) | <ul><li>Export</li></ul> |
| [Class](../../../xdm/schema/composition.md#class) | <ul><li>Create</li><li>Update</li><li>Delete</li></ul> |
| Computed attribute | <ul><li>Create</li><li>Update</li><li>Delete</li></ul> |
| [Customer AI instance](../../../intelligent-services/customer-ai/overview.md) | <ul><li>Create</li><li>Update</li><li>Delete</li><li>Enable</li><li>Disable</li></ul> |
| [Dataset](../../../catalog/datasets/overview.md) | <ul><li>Create</li><li>Update</li><li>Delete</li><li>Enable for [Real-Time Customer Profile](../../../profile/home.md)</li><li>Disable for Profile</li><li>Add data</li><li>Delete batch</li></ul> |
| [Datastream](../../../datastreams/overview.md) | <ul><li>Create</li><li>Update</li><li>Delete</li><li>Enable</li><li>Disable</li><li>[Edit Mapping](../../../datastreams/data-prep.md)</li></ul> |
| [Data types](../../../xdm/schema/composition.md#data-type) | <ul><li>Create</li><li>Update</li><li>Delete</li></ul> |
| [Destination](../../../destinations/home.md) | <ul><li>Create</li><li>Update</li><li>Delete</li><li>Enable</li><li>Disable</li><li>Dataset Activate</li><li>Dataset Remove</li><li>Profile Activate</li><li>Profile Remove</li></ul> |
| [Field group](../../../xdm/schema/composition.md#field-group) | <ul><li>Create</li><li>Update</li><li>Delete</li></ul> |
| [Identity graph](../../../identity-service/features/identity-graph-viewer.md) | <ul><li>View</li></ul> |
| [Identity namespace](../../../identity-service/features/namespaces.md) | <ul><li>Create</li><li>Update</li></ul> |
| [Merge policy](../../../profile/merge-policies/overview.md) | <ul><li>Create</li><li>Update</li><li>Delete</li></ul> |
| [Product profile](../../../access-control/home.md) | <ul><li>Create</li><li>Update</li><li>Delete</li></ul> |
| [Query](../../../query-service/ui/overview.md) | <ul><li>Execute</li></ul> |
| [Query template](../../../query-service/ui/overview.md) | <ul><li>Create</li><li>Update</li><li>Delete</li></ul> |
| [Role (attribute based access control)](../../../access-control/home.md) | <ul><li>Create</li><li>Update</li><li>Delete</li><li>Add user</li><li>Remove user</li></ul> |
| [Sandbox](../../../sandboxes/home.md) | <ul><li>Create</li><li>Update</li><li>Reset</li><li>Delete</li></ul> |
| [Scheduled query](../../../query-service/ui/overview.md) | <ul><li>Create</li><li>Update</li><li>Delete</li></ul> |
| [Schema](../../../xdm/schema/composition.md) | <ul><li>Create</li><li>Update</li><li>Delete</li><li>Enable for Profile</li></ul> |
| [Segment](../../../segmentation/home.md) | <ul><li>Create</li><li>Delete</li><li>Segment Activate</li><li>Segment Remove</li></ul> |
| [Source data flow](../../../sources/connectors/tutorials/ui/../../../tutorials/ui/update.md) | <ul><li>Create</li><li>Update</li><li>Delete</li><li>Enable</li><li>Disable</li><li>Dataset activate</li><li>Dataset remove</li><li>Profile ativate</li><li>Profile remove</li></ul> |
| [Work order](../../../hygiene/home.md) | <ul><li>Create</li></ul> |

## Access to audit logs

When the feature is enabled for your organization, audit logs are automatically collected as activity occurs. You do not need to manually enable log collection.

In order to view and export audit logs, you must have the **[!UICONTROL View User Activity Log]** access control permission granted (found under the [!UICONTROL Data Governance] category). To learn how to manage individual permissions for Experience Platform features, please refer to the [access control documentation](../../../access-control/home.md).

## Managing audit logs in the UI {#managing-audit-logs-in-the-ui}

>[!CONTEXTUALHELP]
>id="platform_privacyConsole_audits_instructions"
>title="Instructions"
>abstract="<ul><li>Select <b>Audits</b> in the left navigation. The Audits workspace shows a list of recorded logs, by default sorted from most recent to least recent.</li>&nbsp;&nbsp;&nbsp;<li> NOTE: Audit logs are retained for 365 days after which they will be deleted from the system. Therefore, you can only go back for a maximum period of 365 days. If you need to look back on data older than 365 days, you should export logs at a regular cadence to meet your internal policy requirements. </li><li>Select an event from the list to view its details in the right rail. </li><li>Select the funnel icon to display a List of filter controls to help narrow the results. Only the last 1000 records are displayed, regardless of the filters selected. </li><li>To export the current list of audit logs, select **Download log**.</li><li>For more help with this feature, see the <a href="https://experienceleague.adobe.com/docs/experience-platform/landing/governance-privacy-security/audit-logs/overview.html">audit logs overview</a> on Experience League.</li></ul>"

You can view audit logs for different Experience Platform features within the **[!UICONTROL Audits]** workspace in the Experience Platform UI. The workspace shows a list of recorded logs, by default sorted from most recent to least recent.

![The Audits dashboard highlighting Audits in the left menu.](../../images/audit-logs/audits.png)

Audit logs are retained for 365 days after which they will be deleted from the system. If you require data of more than 365 days, you should export logs at a regular cadence to meet your internal policy requirements.

Your method of requesting audit logs changes the allowable time period and the number of records you will have access to. [Exporting logs](#export-audit-logs) allows you to go back 365 days (in 90 day intervals) to a maximum of 10,000 audit logs (flatenned, core and enhanced), where as the [activity log UI](#filter-audit-logs) in Experience Platform displays the past 90 days to a maximum of 1000 core events, each of them with the corresponding enhanced events.

Select an event from the list to view its details in the right rail.

![Audits dashboard Activity log tab with the event details panel highlighted.](../../images/audit-logs/select-event.png)

### Filter audit logs

Select the funnel icon (![Filter icon](/help/images/icons/filter.png)) to display a list of filter controls to help narrow results. 

>[!NOTE]
>
>The Experience Platform UI only displays the past 90 days up a maximum of 1000 core events, each with the corresponding enhanced events, regardless of the applied filters. If you need logs past that (to a maximum of 365 days), you'll need to [export your audit logs](#export-audit-logs).

![The Audits dashboard with the filtered activity log highlighted.](../../images/audit-logs/filters.png)

The following filters are available for audit events in the UI:

| Filter | Description |
| --- | --- |
| [!UICONTROL Category] | Use the dropdown menu to filter displayed results by [category](#category). |
| [!UICONTROL Action] | Filter by action. The actions available for each service can be seen in the resource table above. |
| [!UICONTROL User] | Enter the complete user ID (for example, `johndoe@acme.com`) to filter by user. |
| [!UICONTROL Status] | Filter by whether the action was allowed (completed) or denied due to lack of [access control](../../../access-control/home.md) permissions. |
| [!UICONTROL Date] | Select a start date and/or an end date to define a date range to filter results by. Data can be exported with a 90-day lookback period (for example, 2021-12-15 to 2022-03-15). This can differ by event type. |

To remove a filter, select the "X" on the pill icon for the filter in question, or select **[!UICONTROL Clear all]** to remove all filters.

![The Audits dashboard with clear filter highlighted.](../../images/audit-logs/clear-filters.png)

The returned audit log data contains the following information on all queries that meet your chosen filter criteria.

| Column name  | Description |
|---|---|
| [!UICONTROL Timestamp] | The exact date and time of the action performed in a `month/day/year hour:minute AM/PM` format.  |
| [!UICONTROL Asset Name] | The value for the [!UICONTROL Asset Name] field depends on the category chosen as a filter. |
| [!UICONTROL Category] | This field matches the category selected in the filter dropdown.  |
| [!UICONTROL Action] | The available actions depend on the category chosen as a filter. |
| [!UICONTROL User] | This field provides the user ID that executed the query. | 

![The Audits dashboard with the filtered activity log highlighted.](../../images/audit-logs/filtered.png)

### Export audit logs {#export-audit-logs}

To export the current list of audit logs, select **[!UICONTROL Download log]**. 

>[!NOTE]
>
>Logs can be requested in 90 day intervals up to 365 days in the past. However, the maximum amount of logs that can be returned during a single export is 10,000 (flatenned, core or enhanced).

![The Audits dashboard with the [!UICONTROL Download log] highlighted.](../../images/audit-logs/download.png)

In the dialog that appears, select your preferred format (either **[!UICONTROL CSV]** or **[!UICONTROL JSON]**), then select **[!UICONTROL Download]**. The browser downloads the generated file and saves it to your machine.

![The file format selection dialog with [!UICONTROL Download] highlighted.](../../images/audit-logs/select-download-format.png)

## Enable alerts {#enable-alerts}

You can enable audit alerts to receive notifications for the following rules:

* Audience create
* Audience update
* Audience delete
* Dataset create
* Dataset update
* Dataset delete
* Schema create
* Schema update
* Schema delete

Select the desired alert from the list to subscribe to receive notifications. For more information on alerts, see the guide on [subscribing to alerts using the UI](../../../observability/alerts/ui.md).

## Managing audit logs in the API

All actions that you can perform in the UI can also be done using API calls. See the [API reference document](https://www.adobe.io/experience-platform-apis/references/audit-query/) for more information.

## Managing audit logs for Adobe Admin Console

To learn how to manage audit logs for activities in Adobe Admin Console, refer to the following [document](https://helpx.adobe.com/enterprise/using/audit-logs.html).

## Next steps and additional resources

This guide covered how to manage audit logs in Experience Platform. For more information on how to monitor Experience Platform activities, see the documentation on [Observability Insights](../../../observability/home.md) and [monitoring data ingestion](../../../ingestion/quality/monitor-data-ingestion.md).

To reinforce your understanding of audit logs in Experience Platform, watch the following video:

>[!VIDEO](https://video.tv.adobe.com/v/341450?quality=12&learn=on)
