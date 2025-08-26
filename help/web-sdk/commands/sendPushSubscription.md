---
title: sendPushSubscription
description: Register push notification subscriptions with Adobe Experience Platform.
exl-id:
---

# `sendPushSubscription` {#send-push-subscription}

>[!AVAILABILITY]
>
> Push notifications for the Web SDK are currently in **beta**. The functionality and documentation may change.

The `sendPushSubscription` command registers push notification subscriptions with Adobe Experience Platform. This command handles the retrieval of push subscription details from the browser and sends them to your configured datastream.

## Prerequisites

Before using `sendPushSubscription`, ensure you have:

1. **Configured push notifications**: Set up the [`pushNotifications`](configure/pushnotifications.md) configuration property with your VAPID public key
2. **User permission**: Users must have granted notification permission (`Notification.permission === "granted"`)
3. **Service worker**: A registered service worker must be available on your site
4. **Push Manager support**: The browser must support push notifications and have the PushManager API available

## Register push subscription using the Web SDK tag extension

Sending push subscription data is performed as an action within a rule in the Adobe Experience Platform Data Collection tags interface.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Action Type] to **[!UICONTROL Send Push Subscription]**.
1. Click **[!UICONTROL Keep Changes]**, then run your publishing workflow.

## Register push subscription using the Web SDK JavaScript library

Run the `sendPushSubscription` command when calling your configured instance of the Web SDK. Make sure that you call the [`configure`](configure/overview.md) command with push notifications configured before calling the `sendPushSubscription` command.

```js
alloy("sendPushSubscription")
  .then(() => {
    console.log("Push subscription recorded successfully");
  })
  .catch((error) => {
    console.error("Failed to send push subscription:", error);
  });
```

## Recommended execution frequency

For optimal push notification functionality, Adobe recommends executing the `sendPushSubscription` command **once per day**. This ensures that:

- Subscription details remain current in Adobe Experience Platform
- Any changes to push tokens or subscription status are captured
- The user's profile stays updated with the latest push notification preferences

You can implement this using an approach similar with the one below:

```js
// Check if we've sent subscription data today
const lastSent = localStorage.getItem("alloy_push_last_sent");
const today = new Date().toDateString();

if (lastSent !== today) {
  alloy("sendPushSubscription").then(() => {
    localStorage.setItem("alloy_push_last_sent", today);
  });
}
```

## How it works

The `sendPushSubscription` command performs the following actions:

1. **Validates prerequisites**: Verifies that push notifications are configured and user permission is granted
2. **Awaits identity**: Waits for the user's ECID to be available
3. **Retrieves subscription**: Gets the active push subscription from the service worker using the configured VAPID key
4. **Checks for changes**: Compares current subscription details with cached values (ECID + subscription details). If subscription details haven't changed, the command logs an info message and returns without making a network request.
5. **Sends to datastream**: If changes are detected, transmits the subscription data to your configured Adobe Experience Platform datastream
6. **Updates cache**: Stores the new subscription details for future comparison

## Error handling

Common error conditions and their messages:

| Error                                                                              | Cause                                                          |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------- |
| `"Push notifications module is not configured. No VAPID public key was provided."` | Missing or invalid pushNotifications configuration             |
| `"Service workers are not supported in this browser."`                             | Browser doesn't support service workers                        |
| `"Push notifications are not supported in this browser."`                          | Browser doesn't support push notifications or Notification API |
| `"The user has not given permission to send push notifications."`                  | User hasn't granted notification permission                    |
| `"No service worker registration was found."`                                      | No service worker is registered for the current origin         |
| `"No VAPID public key was provided."`                                              | VAPID public key is missing from configuration                 |

## Data payload

The command sends push notification data in the following format:

```js
{
  pushNotificationDetails: [
    {
      appID: "example.com", // Current domain
      token: "...", // Serialized subscription details + ECID
      platform: "web", // Always "web" for Web SDK
      denylisted: false, // Always false
      identity: {
        namespace: {
          code: "ECID",
        },
        id: "12345678901234567890", // User's ECID
      },
    },
  ];
}
```

## Related documentation

- [Configure push notifications](configure/pushnotifications.md)
- [Web Push API specification](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
