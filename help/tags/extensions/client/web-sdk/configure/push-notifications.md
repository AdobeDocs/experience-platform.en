---
title: Push notification settings
description: Configure push notification settings for the Web SDK tag extension.
exl-id: 96ab7ea8-7180-46bb-9c15-eecba2009c52
TQID: 'https://experienceleague.adobe.com/VgGzBccAStme5jPkQ-szKaebhisbDHrn6ds850CLQMk'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: 66e1fd99-672d-5d64-aa58-eca107f0fbae
    internal-label: Push
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: a492a671-d5f6-46ee-b832-2efbca14ddd8
    internal-label: Activation and channels
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Push notification settings {#push-notifications}

>[!CONTEXTUALHELP]
>id="platform_tags_websdk_pushnotifications"
>title="Push notifications"
>abstract="Sets a VAPID public key for push notification authentication."

This configuration section allows you to set a VAPID public key for push notification authentication.

>[!NOTE]
>
>This feature must first be enabled using [Custom build components](custom-build-components.md); it is disabled by default.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Expand **[!UICONTROL Custom build components]**, then enable **[!UICONTROL Push notifications]**.
1. Under [!UICONTROL SDK instances], scroll down to locate the [!UICONTROL Push Notifications] section.
1. Enter your VAPID public key in the **[!UICONTROL VAPID Public Key]** field.

![Image showing push notifications settings using the Web SDK tag extension](../assets/push-notifications.png)

The following fields are available:

## [!UICONTROL VAPID public key]

The VAPID public key used for push subscriptions. It is a Base64-encoded string.

## [!UICONTROL Application ID]

The application ID associated with the VAPID public key.

## [!UICONTROL Tracking dataset ID]

The dataset ID for push notification tracking and analytics.

## Push notifications using the JavaScript library

This section is the tag equivalent of [`pushNotifications`](/help/collection/js/commands/configure/pushnotifications.md) when configuring the JavaScript library. The linked page also provides information about prerequisites and generating a VAPID public key.
