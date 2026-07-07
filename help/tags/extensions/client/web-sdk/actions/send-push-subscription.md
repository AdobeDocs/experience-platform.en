---
title: Send push subscription
description: Register, send, and collect data for browser push subscriptions.
exl-id: 5a19dab9-cd47-4920-9864-6094b89ab1a1
TQID: https://experienceleague.adobe.com/39epFLTnbR6-1veSp-a7pd4tfvustc-SdkGabLdsQSE
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
