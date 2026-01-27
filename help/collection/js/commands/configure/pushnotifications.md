---
title: pushNotifications
description: Configure push notifications for the Web SDK to enable browser-based push messaging.
---
# `pushNotifications` {#push-notifications}

>[!AVAILABILITY]
>
>Push notifications for the Web SDK are currently in **beta**. The functionality and documentation are subject to change.

The `pushNotifications` property lets you configure push notifications for web applications. This feature allows your web app to receive messages pushed from a server, even when the website is not currently loaded in the browser.

## Prerequisites {#prerequisites}

Before configuring push notifications, ensure that you have:

1. **User permission**: Users must explicitly grant permission for notifications
2. **Service worker**: A registered service worker is required for push notifications to function
3. **VAPID keys**: Generate VAPID (Voluntary Application Server Identification) keys for secure communication
4. **Application ID**: The app ID used when saving the VAPID keys inside Adobe Journey Optimizer -> Channels -> Push Settings -> Push Credentials
5. **Tracking dataset ID**: The ID of the system dataset with the name "AJO Push Tracking Experience Event Dataset". Get this from Adobe Journey Optimizer -> Datasets

## Generate VAPID keys {#generate-vapid-keys}

To generate VAPID keys, install the `web-push` NPM package and run:

```bash
npm install web-push -g
web-push generate-vapid-keys
```

This action generates a public and private key pair. Use the public key in your Web SDK configuration and store the private key within the Adobe Journey Optimizer push notifications channel.

## Install the service worker

The service worker code must be served from the same domain as the website. Download the service worker code from Adobe's CDN and host the JavaScript file from your own server. The Web SDK service worker code is available using the following URL structure:

- **Minified**: `https://cdn1.adoberesources.net/alloy/[VERSION]/alloyServiceWorker.min.js`
- **Full**: `https://cdn1.adoberesources.net/alloy/[VERSION]/alloyServiceWorker.js`

Here is an example of how to install the service worker:

```html
<script>
  navigator.serviceWorker.register("/alloyServiceWorker.js", { scope: "/" });
</script>
```

## Implementation

Set the `pushNotifications` object when running the `configure` command:

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  pushNotifications: {
    vapidPublicKey: "BEl62iUYgU[...]KGP4jAQlJz",
    applicationId: "my-app-id",
    trackingDatasetId: "4dc19305cdd27e03dd9a6bbe",
  },
});
```

## Properties {#properties}

| Property | Type | Required | Description |
|---|---|---|---|
| **`vapidPublicKey`** | String | Yes | The VAPID public key used for push subscriptions. Must be a Base64-encoded string. |
| **`applicationId`** | String | Yes | The application ID associated with the VAPID public key. |
| **`trackingDatasetId`** | String | Yes | The system dataset ID used for push notification tracking. |

## Important considerations {#important-considerations}

- **Security**: Push subscriptions are tied to the specific VAPID public key used during subscription. If you change VAPID keys, existing subscriptions are automatically unsubscribed and recreated with the new key.
- **Caching**: The Web SDK automatically manages subscription updates by comparing the current ECID and subscription details with cached values. Subscription data is only sent when changes are detected.
- **Service worker requirement**: Push notifications require a registered service worker. Ensure your service worker is properly configured to handle push events.

## Configure push notifications using the Web SDK tag extension {#configure-push-notifications-tag-extension}

The Web SDK tag extension equivalent to this property is the [[!UICONTROL Push notifications]](/help/tags/extensions/client/web-sdk/configure/push-notifications.md) section when configuring the extension.

## Next steps {#next-steps}

After configuring push notifications, use the [sendPushSubscription](../sendpushsubscription.md) command to register push subscriptions with Adobe Experience Platform.
