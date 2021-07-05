---
title: Audit Logs Overview
description: Learn how audit logs allow you to see who did what actions in Adobe Experience Platform.
---
# Activity logs (Beta)

>[!IMPORTANT]
>
>The activity logs feature in Adobe Experience Platform is currently in beta. The functionality described in this documentation is subject to change.

In order to increase the transparency and visibility of activities performed in the system, Adobe Experience Platform allows you to audit user activity for various services and capabilities in the form of "activity logs". These activity logs form an audit trail that can help with troubleshooting issues on Platform, and help your business effectively comply with corporate data stewardship policies and regulatory requirements.

In a basic sense, an activity log tells **who** performed **what** action, and **when**.

## Managing activity logs in the UI

You can view and export activity logs for different Experience Platform features within the **[!UICONTROL Audits]** workspace in the Platform UI.

### View activity logs

Under the **[!UICONTROL Activity log]** tab, you can view a list of user activity records over the last 90 days. To start displaying data, you must first select a **[!UICONTROL Category]** by using the dropdown menu in the left rail.

Once a category is selected, the table populates with matching activity logs. From here, you can use the **[!UICONTROL Action]** dropdown to narrow results further based on action type, such as "[!UICONTROL Create]", "[!UICONTROL Delete]", and "[!UICONTROL Update]".

Under **[!UICONTROL Date range]**, you can specify start and end dates for the range of activities you want to display.

>[!NOTE]
>
>Activity logs over 90 days old are automatically removed from the system.

Under **[!UICONTROL Status]**, you can filter activities by whether they succeeded or failed.

If you know the name of an asset or user you want to find activity logs for, you can use the search bar to filter by that name.

### Export an activity log

Select **[!UICONTROL Download log]** to export an activity log.

## Next steps

This guide covered how to manage activity logs in the Experience Platform UI. For more information on how to monitor Platform activities, see the documentation on [Observability Insights](../../../observability/home.md) and [monitoring data ingestion](../../../ingestion/quality/monitor-data-ingestion.md).