---
title: Push notification settings
description: Configure push notification settings for the Web SDK tag extension.
exl-id: 96ab7ea8-7180-46bb-9c15-eecba2009c52
TQID: https://experienceleague.adobe.com/VgGzBccAStme5jPkQ-szKaebhisbDHrn6ds850CLQMk
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
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
