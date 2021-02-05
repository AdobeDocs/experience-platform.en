---
title: Platform Web SDK Extension Action Types
description: Adobe Experience Platform Web SDK Extension Action Types in Adobe Experience Platform Launch
---

# Action Types

After you configure the [Adobe Experience Platform Web SDK extension](web-sdk-extension.md) for [Adobe Experience Platform Launch](https://experienceleague.adobe.com/docs/launch.html), configure your action types.

This page describes the available action types.

## Send Event

Sends an event to Adobe [!DNL Experience Platform] so that Adobe Experience Platform can collect the data you send and act on that information. You must select an instance (if you have more than one). If the event happens at the beginning of a page load or during a view change in a single page application, select **[!UICONTROL Occurs at the start of a view]**. 

Any data that you want to send can be sent in the **[!UICONTROL XDM Data]** field. This should be a JSON object that conforms to the structure of your XDM schema. This object can either be created on your page or through a **[!UICONTROL Custom Code]** **[!UICONTROL Data Element]**.

## Set Consent

After you have received consent from your user, this must be communicated to the Adobe Experience Platform Web SDK. You do this by using the "Set Consent" action type. Currently, two types of standards are supported: "Adobe" and "IAB TCF." If using the Adobe standard, you can currently set the consent as "In," "Out," or you can provide it by using a data element. If using the IAB TCF standard, provide the version and value that you want to use, and additional information regarding GDPR. 

In this action you are also provided with an optional field to include an Identity Map so that identities can by synced once consent is received. This can be useful when the consent is configured as "Pending" because the consent call will likely be the first call to fire. 

## Reset Event Merge ID

If you would like to reset your event merge ID on your page you can do so with this action. To reset your ID you need to select the Merge ID you want to reset and fire the action as needed.

## What's next

After you set your action types, [configure your data element types](data-element-types.md).