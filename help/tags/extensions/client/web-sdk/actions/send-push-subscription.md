---
title: Send push subscription
description: Register, send, and collect data for browser push subscriptions.
---
# Send push subscription

>[!AVAILABILITY]
>
>Push notifications for the Web SDK are currently in **beta**. The functionality and documentation are subject to change.

The **[!UICONTROL Send push subscription]** action registers push notification subscriptions with Adobe Experience Platform. It handles the retrieval of push subscription details from the browser and sends them to your configured datastream. It is available in Web SDK extension versions 2.32.0 or later.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]** and set the [!UICONTROL Action Type] to **[!UICONTROL Send push subscription]**.

The action does not have any configuration settings beyond selecting an SDK instance.

Make sure that you set a valid [VAPID public key](../configure/push-notifications.md) when configuring the extension before you use this command.

This action is the tag extension equivalent to the [`sendPushSubscription`](/help/collection/js/commands/sendpushsubscription.md) command. See the linked page for information about prerequisites, recommended execution frequency, how the command works, and error handling.

>[!MORELIKETHIS]
>
>* [Configure push notifications](../configure/push-notifications.md)
>* [Web Push API specification](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
>* [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
