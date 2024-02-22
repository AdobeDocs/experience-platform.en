---
keywords: Experience Platform;home;popular topics;date range
title: Alerts UI Guide
description: Learn how to manage alerts in the Experience Platform user interface.
feature: Alerts
exl-id: 4ba3ef2b-7394-405e-979d-0e5e1fe676f3
---
# Alerts UI guide

The Adobe Experience Platform user interface allows you to view a history of received alerts based on metrics revealed by Adobe Experience Platform Observability Insights. The UI also allows you to view, enable, disable, and subscribe to available alert rules.

>[!NOTE]
>
>For an introduction to alerts in Experience Platform, see the [alerts overview](./overview.md).

To get started, select **[!UICONTROL Alerts]** in the left navigation.

![Alerts page highlighting [!UICONTROL Alerts] in the left navigation.](../images/alerts/ui/workspace.png)

## Manage alert rules

The **[!UICONTROL Browse]** tab lists the available rules that may trigger an alert.

![A list of available alerts show in the [!UICONTROL Browse] tab.](../images/alerts/ui/rules.png)

Select a rule from the list to view its description and its configuration parameters in the right rail, including threshold and severity.

![An alert rule highlighted showing details in the right rail.](../images/alerts/ui/rule-details.png)

Select the ellipsis (**...**) next to a rule's name, and a dropdown displays controls to enable or disable the alert (depending on its current status), and to subscribe or unsubscribe to email notifications for the alert.

![The selected ellipses reveal the drop-down menu.](../images/alerts/ui/disable-subscribe.png)

## Manage alert subscribers

>[!NOTE]
>
> To assign an alert to an Adobe user ID, an external email address, or an email group list, you must be an administrator. 

The **[!UICONTROL Browse]** tab lists the available rules that may trigger an alert.

![A list of available alert rules shown in the [!UICONTROL Browse] tab.](../images/alerts/ui/rules.png)

Select the ellipsis (**...**) next to a rule's name, a dropdown displays controls. Select **[!UICONTROL Manage alert subscribers]**.

![Select the ellipses to display the drop-down menu. The [!UICONTROL Manage alert subscribers] option is highlighted.](../images/alerts/ui/manage-alert-subscribers.png)

The [!UICONTROL Manage alert subscribers] page appears. To assign notifications to specific users, enter their Adobe user ID, external email address, or an email group list, then press enter.

>[!NOTE]
>
>To send this notice to several users at once, provide a list of user ID's or email addresses separated by commas.

![The manage alert subscribers page showing entered email addresses.](../images/alerts/ui/manage-alert-add-email.png)

The email addresses appear in the list of current subscribers listed. Select **[!UICONTROL Update]**.

![The manage alert subscribers page highglighting subscribers and [!UICONTROL Update].](../images/alerts/ui/manage-alert-subscribers-added-email.png)

You have added users successfully to your alert notification list. The submitted users will now receive email notifications for this alert as seen in the image below.

![An email example of the alert notification that is received.](../images/alerts/ui/manage-alert-subscribers-email.png)

## Enable email alerts

Alert notifications can be delivered direct to your email. 

Select the bell icon (![bell icon](../images/alerts/ui/bell-icon.png)) located in the top ribbon on the right to display notifications and announcements. In the dropdown that appears, select the cog icon (![cog icon](../images/alerts/ui/cog-icon.png)) to access the Experience Cloud preferences page.

![A list of alerts shown highlighting the bell icon and the cog icon.](../images/alerts/ui/edit-preferences.png)

The **Profile** page is displayed. Select the **[!UICONTROL Notifications]** in the left navigation to access the email alerts preferences.

![The Profile page highlighting [!UICONTROL Notifications] in the left navigation.](../images/alerts/ui/profile.png)

Scroll to the **Emails** section at the bottom of the page and select **[!UICONTROL Instant notifications]** 

![The Emails section highlighted in the Profile page.](../images/alerts/ui/notifications.png)

Any alerts that you are subscribed to will now be delivered to the email address that is connected to your Adobe ID account.

## View alert history

The **[!UICONTROL History]** tab shows the history of received alerts for your organization, including the rule that triggered the alert, triggered date, and resolved date (if applicable).

![A list of received alerts show in the [!UICONTROL History] tab.](../images/alerts/ui/history.png)

Select a listed alert and more details appear in the right rail, including a short summary of the event that triggered the alert.

![An alert highlighted showing details in the right rail.](../images/alerts/ui/history-details.png)

## Next steps

This document provided an overview of how to view and manage alerts in the Platform UI. See the overview on [Observability Insights](../home.md) for more information on the service's capabilities.
