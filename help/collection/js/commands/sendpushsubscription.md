---
title: sendPushSubscription
description: Register push notification subscriptions with Adobe Experience Platform.
exl-id: 7cb13834-46f4-481c-bd9d-600083eb6cfb
TQID: https://experienceleague.adobe.com/3acin90o8JdMA6LS-s7tHnf2-qcRn7XDO1aw-Zx3QyU
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# `sendPushSubscription` {#send-push-subscription}

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
| `"Push notifications module is not configured."` | Missing or invalid `pushNotifications` configuration  |
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
      appID: "my-app-id", // The configured application ID
      token: "...", // Serialized push subscription details (endpoint and keys)
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
