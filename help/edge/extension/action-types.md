---
title: Action Types in the Adobe Experience Platform Web SDK Extension
description: Learn about the different action types provided by the Adobe Experience Platform Web SDK tag extension.
solution: Experience Platform
exl-id: a4bf0bb9-59b4-4c43-97e6-387768176517
---

# Action types

After you configure the [Adobe Experience Platform Web SDK tag extension](web-sdk-extension-configuration.md), you must configure your action types.

This page describes the action types supported by the [Adobe Experience Platform Web SDK tag extension](web-sdk-extension-configuration.md).

## Send event {#send-event}

Sends an event to Adobe [!DNL Experience Platform] so that Adobe Experience Platform can collect the data you send and act on that information. Select an instance (if you have more than one). Any data that you want to send can be sent in the **[!UICONTROL XDM Data]** field. Use a JSON object that conforms to the structure of your XDM schema. This object can either be created on your page or through a **[!UICONTROL Custom Code]** **[!UICONTROL Data Element]**.

There are a few other fields in the Send Event action type that could also be useful depending on your implementation. Please note that these fields are all optional.

- **Type:** This field allows you specify an event type that will be recorded in you XDM schema. See the [documentation](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/tracking-events.html?lang=en#using-the-sendbeacon-api) for more information on the default event types.
- **Data:** Data that does not match an XDM schema can be sent using this field. This field is useful if you are trying to update an Adobe Target profile or send Target Recommendations attributes. For examples view our [documentation](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/tracking-events.html?lang=en).<!--- **Merge ID:** If you would like to specify a merge ID for your event, you can do so in this field. Please note that the solutions downstream are not able to merge your event data at this time. -->
- **Dataset ID:** If you need to send data to a dataset other than the one you specified in your datastream, you can specify that dataset ID here.
- **Document will unload:** If you would like to make sure that the events reach the server even if the user navigates away from the page, check the **[!UICONTROL Document will unload]** checkbox. This allows events to reach the server but responses are ignored.
- **Render visual personalization decisions:** If you want to render personalized content on your page, check the **[!UICONTROL Render visual personalization decisions]** checkbox. You can also specify decision scopes and/or surfaces if necessary. See the [personalization documentation](../personalization/rendering-personalization-content.md#automatically-rendering-content) for more information on rendering personalized content.

## Set consent {#set-consent}

After you have received consent from your user, this consent must be communicated to the Adobe Experience Platform Web SDK by using the "Set Consent" action type. Currently, two types of standards are supported: "Adobe" and "IAB TCF." See [Supporting Customer Consent Preferences](../consent/supporting-consent.md). When using Adobe version 2.0, only a data element value is supported. You will need to create a data element that resolves to the consent object.

In this action, you are also provided with an optional field to include an Identity Map so that identities can be synced once consent is received. Syncing is useful when the consent is configured as "Pending" or "Out" because the consent call is likely the first call to fire.

## Reset event merge ID {#reset-event-merge-id}

If you would like to reset your event merge ID on your page, you can do so with this action. To reset your ID, select the Merge ID you want to reset and fire the action as needed.

## (Beta) Update variable {#update-variable}

>[!IMPORTANT]
>
>This is currently a beta functionality and is subject to change. Future versions may contain breaking changes.

Use this action to modify an XDM object as a result of an event. This action is intended to build up an object that can later be referenced from a **[!UICONTROL Send event]** action, to record the event XDM object.

In order to use this action type you must have defined a [variable](data-element-types.md#variable) data element. Once you choose a variable data element to modify, an editor appears, similar to the editor for the [XDM object](data-element-types.md#xdm-object) data element. The XDM schema that is used for the editor is the schema that is selected on the [!UICONTROL variable] data element. You can set one or more properties of the object by clicking on one of the properties in the tree on the left, and then modifying the value on the right.

There are some differences between the editor in the update variable action versus the editor in the XDM object data element. First, the update variable action has a root level item labeled "xdm." If you click on this item, you can specify a data element to use to set the entire object.  Second, the update variable action has checkboxes to clear the data from the xdm object. Click on one of the properties on the left, and then check the checkbox on the right to clear the value. This will clear out the current value before setting any values on the variable.

See the page on [Rule stacking](rule-stacking.md) to learn more about how to use the action to build XDM objects.

You could create an XDM object data element that specifies the default data that should be added to every send event call. Then

## Next steps {#next-steps}

After reading this article you should have a better understanding of how to configure your actions. Next, read about how to [configure your data element types](data-element-types.md).
