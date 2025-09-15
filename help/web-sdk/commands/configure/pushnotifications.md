---
title: pushNotifications
description: Configure push notifications for the Web SDK to enable browser-based push messaging.
---

# `pushNotifications` {#push-notifications}

>[!AVAILABILITY]
>
> Push notifications for the Web SDK are currently in **beta**. The functionality and documentation may change.

The `pushNotifications` property enables you to configure push notifications for web applications. This feature allows your web app to receive messages pushed from a server, even when the website is not currently loaded in the browser or even when the browser is not running.

## Prerequisites {#prerequisites}

Before configuring push notifications, ensure you have:

1. **User permission**: Users must explicitly grant permission for notifications
2. **Service worker**: A registered service worker is required for push notifications to function
3. **VAPID keys**: Generate VAPID (Voluntary Application Server Identification) keys for secure communication

## Generate VAPID keys {#generate-vapid-keys}

To generate VAPID keys, install the `web-push` NPM package and run:

```bash
npm install web-push -g
web-push generate-vapid-keys
```

This generates a public and private key pair. Use the public key in your Web SDK configuration and store the private key within the Adobe Journey Optimizer push notifications channel.

## Configure push notifications using the Web SDK tag extension {#configure-push-notifications-tag-extension}

Follow these steps to enable and configure push notifications:

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. **Enable push notifications** from the "Custom build components" section.
1. Scroll down to locate the [!UICONTROL Push Notifications] section.
1. Enter your VAPID public key in the **[!UICONTROL VAPID Public Key]** field.
1. Click **[!UICONTROL Save]**, then publish your changes.

>[!NOTE]
>
> Push notifications must be explicitly enabled in the tag extension configuration. The feature is disabled by default.

## Configure push notifications using the Web SDK JavaScript library {#configure-push-notifications-javascript}

Set the `pushNotifications` object when running the `configure` command:

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  pushNotifications: {
    vapidPublicKey:
      "BEl62iUYgUivElbkzaBgNL3r3vOAhvJyFXjS6FjjRRojYD4NElJkLBJKZvS3xAAh4_gE3WnMaZNu_KGP4jAQlJz",
  },
});
```

## Properties {#properties}

| Property  | Type   | Required | Description  |
| ------ | ------ | -------- | ----- |
| `vapidPublicKey` | String | Yes  | The VAPID public key used for push subscription. Must be a Base64-encoded string. |

## Important considerations {#important-considerations}

- **Security**: Push subscriptions are tied to the specific VAPID public key used during subscription. If you change VAPID keys, existing subscriptions are automatically unsubscribed and recreated with the new key.
- **Caching**: The Web SDK automatically manages subscription updates by comparing the current ECID and subscription details with cached values. Subscription data is only sent when changes are detected.
- **Service worker requirement**: Push notifications require a registered service worker. Ensure your service worker is properly configured to handle push events.

## Next steps {#next-steps}

After configuring push notifications, use the [`sendPushSubscription`](../sendPushSubscription.md) command to register push subscriptions with Adobe Experience Platform.
