---
title: sendPushSubscription
description: Register push notification subscriptions with Adobe Experience Platform.
---

# `sendPushSubscription` {#send-push-subscription}

>[!AVAILABILITY]
>
>Push notifications for the Web SDK are currently in **beta**. The functionality and documentation are subject to change.

The `sendPushSubscription` command registers push notification subscriptions with Adobe Experience Platform. This command handles the retrieval of push subscription details from the browser and sends them to your configured datastream. It is available in Web SDK versions 2.29.0 or later.

## Prerequisites {#prerequisites}

Before using `sendPushSubscription`, ensure that you have:

1. **Configured push notifications**: Set up the [`pushNotifications`](configure/pushnotifications.md) configuration property with your VAPID public key
2. **User permission**: Users must have granted notification permission (`Notification.permission === "granted"`)
3. **Service worker**: A registered service worker must be available on your site
4. **Push Manager support**: The browser must support push notifications and have the PushManager API available

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

## Recommended execution frequency {#recommended-execution-frequency}

For optimal push notification functionality, Adobe recommends executing the `sendPushSubscription` command **once per day**. This frequency ensures that:

* Subscription details remain current in Adobe Experience Platform
* Any changes to push tokens or subscription status are captured
* The user's profile stays updated with the latest push notification preferences

You can implement this using an approach similar to the one below:

```js
// Check if subscription data was sent today
const lastSent = localStorage.getItem("alloy_push_last_sent");
const today = new Date().toDateString();

if (lastSent !== today) {
  alloy("sendPushSubscription").then(() => {
    localStorage.setItem("alloy_push_last_sent", today);
  });
}
```

## How it works {#how-it-works}

The `sendPushSubscription` command performs the following actions:

1. **Validates prerequisites**: Verifies that push notifications are configured and user permission is granted
2. **Awaits identity**: Waits for the user's ECID to be available
3. **Retrieves subscription**: Gets the active push subscription from the service worker using the configured VAPID key
4. **Checks for changes**: Compares current subscription details with cached values (ECID + subscription details). If subscription details haven't changed, the command logs an info message and returns without making a network request
5. **Sends to datastream**: If changes are detected, transmits the subscription data to your configured Adobe Experience Platform datastream
6. **Updates cache**: Stores the new subscription details for future comparison

## Error handling {#error-handling}

Common error conditions and their messages:

| Error   | Cause  |
| ------- | ---- |
| `"Push notifications module is not configured. No VAPID public key was provided."` | Missing or invalid pushNotifications configuration  |
| `"Service workers are not supported in this browser."`  | Browser doesn't support service workers  |
| `"Push notifications are not supported in this browser."`  | Browser doesn't support push notifications or Notification API |
| `"The user has not given permission to send push notifications."` | User hasn't granted notification permission (`Notification.permission === "granted"`)  |
| `"No service worker registration was found."`  | No service worker is registered for the current origin |
| `"No VAPID public key was provided."` | VAPID public key is missing from configuration |

## Data payload {#data-payload}

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
  ],
}
```

## Register push subscription using the Web SDK tag extension {#register-push-subscription-tag-extension}

The Web SDK tag extension equivalent to this field is using the [[!UICONTROL Send Push Subscription]](/help/tags/extensions/client/web-sdk/actions/send-push-subscription.md) action within a tag rule.

>[!MORELIKETHIS]
>
>* [Configure push notifications](configure/pushnotifications.md)
>* [Web Push API specification](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
>* [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
