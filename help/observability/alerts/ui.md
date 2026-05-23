---
keywords: Experience Platform;home;popular topics;date range
title: Alerts UI Guide
description: Learn how to manage alerts in the Experience Platform user interface.
feature: Alerts
exl-id: 4ba3ef2b-7394-405e-979d-0e5e1fe676f3
TQID: https://experienceleague.adobe.com/X1LmSIA3VvcE4j6XH2p4oRKZwDVz24HPuRwwqijiPHU
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# Alerts UI guide

In Adobe Experience Platform, you can view a history of alerts your organization has received, based on metrics from observability insights. You can also browse available alert rules and turn them on or off, subscribe to them, and manage who receives email notifications.

>[!NOTE]
>
>For an introduction to alerts in Experience Platform, see the [alerts overview](./overview.md).

To get started, select **[!UICONTROL Alerts]** in the left navigation.

![Alerts page highlighting [!UICONTROL Alerts] in the left navigation.](../images/alerts/ui/workspace.png)

## Manage alert rules {#manage-rules}

The **[!UICONTROL Browse]** tab lists the available rules that may trigger an alert. Select a rule from the list to view its description and its configuration parameters in the right panel, including threshold and severity.

![An alert rule highlighted showing details in the right panel.](../images/alerts/ui/rule-details.png)

Select the ellipsis (**...**) next to a rule's name. A menu opens where you can enable or disable the alert (depending on its current status) and subscribe or unsubscribe from email notifications for that rule.

![The ellipsis opens the menu with these options.](../images/alerts/ui/disable-subscribe.png)

## Manage alert subscribers {#manage-subscribers}

>[!NOTE]
>
> To assign an alert to an Adobe user ID, an external email address, or an email group list, you must be an administrator. 

On the **[!UICONTROL Browse]** tab, select the ellipsis (**...**) next to the rule you want to manage, then select **[!UICONTROL Manage alert subscribers]**.

![The Manage alert subscribers option is highlighted.](../images/alerts/ui/manage-alert-subscribers.png)

The **[!UICONTROL Manage alert subscribers]** page opens. To add subscribers, enter an Adobe user ID, an external email address, or an email group list, then press **Enter**.

>[!NOTE]
>
>To add several subscribers at once, enter user IDs or email addresses separated by commas.

![The manage alert subscribers page showing entered email addresses.](../images/alerts/ui/manage-alert-add-email.png)

Added addresses appear in the subscribers list. Select **[!UICONTROL Update]**.

![The manage alert subscribers page highlighting subscribers and Update.](../images/alerts/ui/manage-alert-subscribers-added-email.png)

Once subscribers have been added successfully, they will receiving email notifications for this alert.

![Example of an email alert notification.](../images/alerts/ui/manage-alert-subscribers-email.png)

## Enable email alerts {#enable-email}

To have alert notifications delivered to your inbox, select the bell icon (![bell icon](/help/images/icons/bell.png)) in the upper-right toolbar to open notifications and announcements. From the dropdown, select the settings icon (![settings icon](/help/images/icons/settings.png)) to open Experience Cloud preferences.

![Notifications panel with the bell icon and settings icon highlighted.](../images/alerts/ui/edit-preferences.png)

The **[!UICONTROL Profile]** page opens. Select **[!UICONTROL Notifications]** in the left navigation to open email preferences. Scroll to the **Emails** section at the bottom of the page and select **[!UICONTROL Instant notifications]**.

![The Emails section highlighted on the Profile page.](../images/alerts/ui/notifications.png)

Alerts you are subscribed to are sent to the email address linked to your Adobe ID.

## Customize alert threshold {#alert-threshold}

Alert thresholds can be customized for the following alert types:

| Alert type | Customized parameter |
|---|---|
| Segment Job Delay | Delay threshold |
| Segment Export Delay | Delay threshold |
| Destination Flow Run Delay | Delay threshold |
| Identity Service Flow Run Delay | Delay threshold |
| Profile Flow Run Delay | Delay threshold |
| Profile Streaming Ingestion Failure Rate Exceeded | Error threshold |
| Profile Streaming Ingestion Skip Rate Exceeded | Error threshold |
| Sources Flow Run Delay | Delay threshold |
| Sources Ingestion Error Rate Exceeded | Error threshold |
| Query Run Delay | Delay threshold |
| Activation Skip Rate Exceeded | Error threshold |

Select the ellipsis (**...**) next to a rule's name, then select **[!UICONTROL Edit]**.

![The [!UICONTROL Edit] option is highlighted for the selected rule.](../images/alerts/ui/threshold-edit.png)

On the **[!UICONTROL Customize alert]** page, set the threshold for that rule to your desired time (in minutes), then select **[!UICONTROL Confirm]**.

![The Customize alert page highlighting [!UICONTROL Threshold] and [!UICONTROL Confirm] options.](../images/alerts/ui/threshold-update.png)

You return to the **[!UICONTROL Alerts]** page. To check the threshold, select the rule in the list. The right panel shows the threshold, status, severity, and other details.

![An alert selected with details in the right panel, including threshold.](../images/alerts/ui/threshold-view.png)

## View alert history {#alert-history}

The **[!UICONTROL History]** tab lists alerts your organization has received, including the rule that triggered the alert, the related object name, when the alert was triggered, and when it was resolved (if applicable).

![Received alerts listed on the [!UICONTROL History] tab.](../images/alerts/ui/history.png)

Select an alert from the list to view more details in the right panel, including a short summary of what triggered it. Use global search to find and open the related object.

![An alert highlighted showing details in the right panel.](../images/alerts/ui/history-details.png)

### Search alerts by alert name

In the search bar, enter text to match the **alert name**. The list updates to show matching alerts.

![Search bar highlighted showing alert name entered and search results](../images/alerts/ui/search-alert-name.png)

### Search alerts by object name

To filter by **object name**, select the filter icon (![filter icon](/help/images/icons/filter.png)), then enter the object name in the search bar. The list shows alerts associated with that object.

![Filter icon and search bar highlighted showing object name entered and search results](../images/alerts/ui/search-object-name.png)

### Search alerts by date range

Select the calendar icon (![calendar icon](/help/images/icons/calendar.png)) in the upper right to limit results to alerts triggered in a specific period.

![Calendar icon highlighted.](../images/alerts/ui/date-range.png)

Select a preset (**[!UICONTROL Last 24 hours]**, **[!UICONTROL Last 7 days]**, or **[!UICONTROL Last 30 days]**) or set a custom range in the calendar, then select **[!UICONTROL Apply]**.

![Date range selector page displayed.](../images/alerts/ui/date-range-filter.png)

You return to the **[!UICONTROL History]** tab which shows the filtered results.

## Next steps

This guide showed how to view and manage alerts in the Experience Platform UI. See the [[!DNL Observability Insights] overview](../home.md) for more ways to monitor activity across Experience Platform.

