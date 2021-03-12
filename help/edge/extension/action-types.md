---
title: Action Types in the Adobe Experience Platform Web SDK Extension
description: Learn about the different action types provided by the Adobe Experience Platform Web SDK extension in Adobe Experience Platform Launch.
---

# Action types

After you configure the [Adobe Experience Platform Web SDK extension](web-sdk-extension.md) for [Adobe Experience Platform Launch](https://experienceleague.adobe.com/docs/launch.html), configure your action types.

This page describes the available action types.

## Send Event

Sends an event to Adobe [!DNL Experience Platform] so that Adobe Experience Platform can collect the data you send and act on that information. Select an instance (if you have more than one). If you would like to make sure that the events reach the server even if the user navigates away from the page you will want to check the **[!UICONTROL Document will unload]** checkbox. This will allow events to reach the server but responses will be ignored.

Any data that you want to send can be sent in the **[!UICONTROL XDM Data]** field. Use a JSON object that conforms to the structure of your XDM schema. This object can either be created on your page or through a **[!UICONTROL Custom Code]** **[!UICONTROL Data Element]**.

If you need to render personlization content you will want to check the **[UICONTROL Render visual personalization decisions]** checkbox. When doing this you can also specify decision scopes if necessary. See our [documentation](https://experienceleague.adobe.com/docs/experience-platform/edge/personalization/rendering-personalization-content.html?lang=en#automatically-rendering-content) on personalization for more information on rendering personalized content. 

## Set Consent

After you have received consent from your user, this consent must be communicated to the Adobe Experience Platform Web SDK by using the "Set Consent" action type. Currently, two types of standards are supported: "Adobe" and "IAB TCF." See [Supporting Customer Consent Preferences](../consent/supporting-consent.md). When using Adobe version 2.0, only a data element value is supported. You will need to create a data element that resolves to the consent object.

In this action, you are also provided with an optional field to include an Identity Map so that identities can be synced once consent is received. Syncing is useful when the consent is configured as "Pending", or "Out" because the consent call is likely the first call to fire.

## Reset Event Merge ID

If you would like to reset your event merge ID on your page, you can do so with this action. To reset your ID, select the Merge ID you want to reset and fire the action as needed.

## What's next

After you set your actions, [configure your data element types](data-element-types.md).
