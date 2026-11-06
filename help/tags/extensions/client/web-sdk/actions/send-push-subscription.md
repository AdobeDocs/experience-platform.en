---
title: Send push subscription
description: Register, send, and collect data for browser push subscriptions.
exl-id: 5a19dab9-cd47-4920-9864-6094b89ab1a1
TQID: 'https://experienceleague.adobe.com/39epFLTnbR6-1veSp-a7pd4tfvustc-SdkGabLdsQSE'
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
  - id: 1a2b3c4d-0006-4006-8006-000000000006
    internal-label: Data collection tags rules
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
# Send push subscription

>[!AVAILABILITY]
>
>Push notifications for the Web SDK are currently in **beta**. The functionality and documentation are subject to change.

The **[!UICONTROL Send push subscription]** action registers push notification subscriptions with Adobe Experience Platform. It handles the retrieval of push subscription details from the browser and sends them to your configured datastream. It is available in Web SDK extension versions 2.32.0 or later.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
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
