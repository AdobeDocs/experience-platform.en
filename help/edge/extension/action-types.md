---
title: Action Types in the Adobe Experience Platform Web SDK Extension
description: Learn about the different action types provided by the Adobe Experience Platform Web SDK tag extension.
solution: Experience Platform
exl-id: a4bf0bb9-59b4-4c43-97e6-387768176517
---
# Action types

After you configure the [Adobe Experience Platform Web SDK tag extension](web-sdk-extension-configuration.md), configure your action types.

This page describes the available action types.


## Send Event

Sends an event to Adobe [!DNL Experience Platform] so that Adobe Experience Platform can collect the data you send and act on that information. Select an instance (if you have more than one). Any data that you want to send can be sent in the **[!UICONTROL XDM Data]** field. Use a JSON object that conforms to the structure of your XDM schema. This object can either be created on your page or through a **[!UICONTROL Custom Code]** **[!UICONTROL Data Element]**.

There are a few other fields in the Send Event action type that could also be useful depending on your implementation. Please note that these fields are all optional.

- **Type:** This field allows you specify an event type that will be recorded in you XDM schema. See the [documentation](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/tracking-events.html?lang=en#using-the-sendbeacon-api) for more information on the default event types.
- **Data:** Data that does not match an XDM schema can be sent using this field. This field is useful if you are trying to update an Adobe Target profile or send Target Recommendations attributes. For examples view our [documentation](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/tracking-events.html?lang=en).
<!--- **Merge ID:** If you would like to specify a merge ID for your event, you can do so in this field. Please note that the solutions downstream are not able to merge your event data at this time. -->
- **Dataset ID:** If you need to send data to a dataset other than the one you specified in your datastream, you can specify that dataset ID here.
- **Document will unload:** If you would like to make sure that the events reach the server even if the user navigates away from the page, check the **[!UICONTROL Document will unload]** checkbox. This allows events to reach the server but responses are ignored.
- **Render visual personalization decisions:** If you want to render personalized content on your page, check the **[!UICONTROL Render visual personalization decisions]** checkbox. You can also specify decision scopes and/or surfaces if necessary. See the [personalization documentation](https://experienceleague.adobe.com/docs/experience-platform/edge/personalization/rendering-personalization-content.html?lang=en#automatically-rendering-content) for more information on rendering personalized content. 

## Set Consent

After you have received consent from your user, this consent must be communicated to the Adobe Experience Platform Web SDK by using the "Set Consent" action type. Currently, two types of standards are supported: "Adobe" and "IAB TCF." See [Supporting Customer Consent Preferences](../consent/supporting-consent.md). When using Adobe version 2.0, only a data element value is supported. You will need to create a data element that resolves to the consent object.

In this action, you are also provided with an optional field to include an Identity Map so that identities can be synced once consent is received. Syncing is useful when the consent is configured as "Pending" or "Out" because the consent call is likely the first call to fire.

## Reset Event Merge ID

If you would like to reset your event merge ID on your page, you can do so with this action. To reset your ID, select the Merge ID you want to reset and fire the action as needed.

## What's next

After you set your actions, [configure your data element types](data-element-types.md).
