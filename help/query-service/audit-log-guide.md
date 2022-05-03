---
title: Query Service Audit Log Integration
description: Query Service audit logs maintain records for various user actions to form an audit trail for troubleshooting issues or adhering to corporate data stewardship policies and regulatory requirements. This tutorial provides an overview of the audit log features specific to Query Service.
---
# [!DNL Query Service] audit log integration

The Adobe Experience Platform [!DNL Query Service] audit log integration provides records of user actions. Audit logs are an essential tool for troubleshooting and adhering to corporate data stewardship policies and regulatory requirements. The capability allows you to return an action log for many event types and filter and export the records. The logs can be accessed either through the Platform UI or the [Audit Query API](https://www.adobe.io/experience-platform-apis/references/audit-query/) and downloaded in either CSV or JSON file formats.

See the documentation to [learn more about the audit logs user interface](../landing/governance-privacy-security/audit-logs/overview.md) or [making calls to Platform APIs](). 

## Prerequisites

You must have the [!UICONTROL Data Governance] [!UICONTROL View User Activity Log] permission enabled to view the audit log dashboard within the Platform UI. The permission is enabled through Adobe [Admin Console](https://adminconsole.adobe.com/). Please contact your organization's administrator if you do not have administrator privileges to enable this permission. See the access control documentation for [full instructions on adding permissions through Admin Console](../access-control/home.md). 

## [!DNL Query Service] audit log categories {#audit-log-categories}

The audit log categories provided by [!DNL Query Service] are as follows.

| Category | Description |
|---|---|
| [!UICONTROL Scheduled query] | This category allows you to return the query details of any scheduled queries. |
| [!UICONTROL Query template] | As queries are stored as templates, the [!UICONTROL Query template] category provides a record of any query run through [!DNL Query Service] UI or API. |

The log results can be further filtered based on the time period they were executed, the action/function taken, and the status, or user that enacted the query.

## Perform a [!DNL Query Service] audit log 

To perform an audit for [!DNL Query Service] activity, select **[!UICONTROL Audits]** form the Platform UI left navigation rail, followed by the funnel icon (![A filter icon.](./images/audit-log/filter.png)) to display a list of filter controls to help narrow results.

![The Platform UI audit log dashboard with Audits in the left navigation and filter controls highlighted.]()

From the [!UICONTROL Audits] dashboard [!UICONTROL Activity log] tab, you can filter all the recorded Platform actions by any of the [!DNL Query Service] categories. 

See the audit log documentation for [full instructions on how to filter the logs based on category, action, user, and status](../landing/governance-privacy-security/audit-logs/overview.md#managing-audit-logs-in-the-ui).

The returned audit log data contains the following information on all queries that meet your chosen filter criteria.

| Column name  | Description |
|---|---|
| [!UICONTROL Timestamp] | The exact date and time of the query in a `month/day/year hour:minute AM/PM` format.  |
| [!UICONTROL Asset Name] | This is the schedule ID when using the [!UICONTROL Scheduled query] category, and the template name when using the [!UICONTROL Query template] category.  |
| [!UICONTROL Category] | This field will match the category selected by you in the filter dropdown.  |
| [!UICONTROL Action] |  This can be either create, delete, update, execute, enable, or disable. The available actions depend on the category chosen as a filter. |
| [!UICONTROL User] | This field provides the user ID that executed the query. | 

>[!NOTE]
>
>More query details are provided by downloading the log results in either CSV or JSON file formats, than are displayed by default in the audit log dashboard.

<!-- In the Scheduled Query category of audit logs, what are the 'enable' and 'disable' actions in SQL?  -->
<!-- What populates the Asset name column in the audit log results? -->
<!-- What do the Status filters mean (Allow, Deny, Success, and Failure)? -->
<!-- Are there any limitations to filtering by date? -->

Select any row of audit log results to open a details panel to the right of the screen.

![Audits dashboard Activity log tab with the details panel highlighted.]()

>[!NOTE]
>
>The details panel can be used to find the [!UICONTROL Asset ID]. The Asset ID is the query ID.

## Available filters for [!DNL Query Service] audit log categories

The following table details the filters available for [!DNL Query Service] audit log categories.

| Filter  | Description |
|---|---|
| Category | See the [[!DNL Query Service] audit log categories](#audit-log-categories) section for a complete list of available categories. |
| Action | When referring to query logs, Update is both `UPDATE` and `INSERT`, delete is `DROP TABLE`, create is `CTAS`, execute is `SELECT`. The execute action is not available as a filter for the [!UICONTROL Query template] category. In the [!UICONTROL Scheduled Query] category of audit logs, enable and disable actions refer to ... and ... respectively. |
| User | Enter the complete user ID (for example, johndoe@acme.com) to filter by user. |
| Status | Available options are Allow, Deny, Success, and Failure. |
| Date  | Select a start date and/or an end date to define a date range to filter results by. |

## Next steps

By reading this document you have a better understanding of the [!DNL Query Service] audit log capability and how it can be used to filter your [!DNL Query Service] user actions.
