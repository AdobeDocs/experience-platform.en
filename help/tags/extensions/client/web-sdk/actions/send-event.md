---
title: Send event
description: Send data to the Adobe Experience Platform Edge Network.
---
# Send event

The **[!UICONTROL Send event]** action sends a payload to a datastream on the Adobe Experience Platform Edge Network. It is a core feature of data collection and personalization; almost all organizations use this action as part of their Web SDK implementation.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, then set the [!UICONTROL Action type] to **[!UICONTROL Send event]**.

## General fields

![Experience Platform Tags UI image showing the instance settings for the Send Event action type.](../assets/instance-settings.png)

* **[!UICONTROL Instance]**: The SDK instance that the action applies to. This drop-down menu is disabled if your implementation uses a single SDK instance.
* **[!UICONTROL Use guided events]**: Enable this option to automatically fill in or hide certain fields to enable a particular use case. This setting can help reduce noise of available options when setting up the action for each respective purpose, and follows Adobe's best practices of [Top/bottom page events](/help/collection/js/use-cases/top-bottom-page-events.md). Enabling this check box triggers the display of the following radio buttons:
  * **[!UICONTROL Request personalization]**: Get the latest personalization decisions without recording an Adobe Analytics event. It is most commonly called at the top of the page. When selected, this radio button sets the following fields:
    * [!UICONTROL Type] is locked to [!UICONTROL Decisioning Proposition Fetch]
    * [!UICONTROL Render visual personalization decisions] is locked to enabled
    * [!UICONTROL Automatically send a display event] is locked to disabled
  * **[!UICONTROL Collect analytics]**: Record an event without getting personalization decisions. It is most commonly called at the bottom of the page. When selected, this radio button sets the following fields:
    * [!UICONTROL Include rendered propositions] is locked to enabled
   
## Data fields

![Experience Platform Tags UI image showing the Data element settings for the Send Event action type.](../assets/data.png)

* **[!UICONTROL Type]**: The event type. You can select from a pre-defined set of values, or define your own value. See [Available values for `eventType`](/help/xdm/classes/experienceevent.md#accepted-values-for-eventtype) for more information. The JavaScript library equivalent to this field is [`eventType`](/help/collection/js/commands/sendevent/type.md).
* **[!UICONTROL XDM]**: The XDM payload that you want to send to Adobe. You can use either an [XDM object](../data-element-types.md#xdm-object) or [Variable](../data-element-types.md#variable) in this field. If you have rules that populate multiple XDM objects, you can use [Merged objects](../../core/overview.md#merged-objects) to combine them.
* **[!UICONTROL Data]**: The data payload that you want to send to Adobe. Some apps and services do not require adhering to an XDM schema, such as Adobe Analytics or Adobe Target. Use a [Variable](../data-element-types.md#variable) data element type for this field.
* **[!UICONTROL Include rendered propositions]**: Enable this option to include all the propositions that have been rendered, but a display event has not been sent. Use this in tandem with **[!UICONTROL Automatically send a display event]** disabled. This setting updates the `_experience.decisioning` XDM field with information about the rendered propositions.
* **[!UICONTROL Document will unload]**: Enable this option to make sure that the events reach the server even if the user navigates away from the page. This allows events to reach the server, but responses are ignored.
* **[!UICONTROL Merge ID]**: **This field is deprecated**. This will populate the `eventMergeId` XDM field.

### Personalization {#personalization}

![Experience Platform Tags UI image showing the Personalization settings for the Send Event action type.](assets/personalization-settings.png)

* **[!UICONTROL Scopes]**: Select the scopes (Adobe Target [!DNL mboxes]) you would like to explicitly request from personalization. You can enter the scopes manually, or by providing a data element.
* **[!UICONTROL Surfaces]**: Set the web surfaces that are available on the page for personalization. See the [Adobe Journey Optimizer documentation](https://experienceleague.adobe.com/docs/journey-optimizer/using/web/create-web.html) for more details.
* **Render visual personalization decisions:** If you want to render personalized content on your page, check the **[!UICONTROL Render visual personalization decisions]** checkbox. You can also specify decision scopes and/or surfaces if necessary. See the [personalization documentation](/help/web-sdk/personalization/rendering-personalization-content.md#automatically-rendering-content) for more information on rendering personalized content.
* **[!UICONTROL Request default personalization]**: Use this section to control whether the page-wide scope (global mbox) and default surface (web surface based on current URL) is requested. By default, this is requested automatically during the first `sendEvent` call of the page load. You can choose from the following options:
    * **[!UICONTROL Automatic]**: This is the default behavior. Only request default personalization when it has not yet been requested. This corresponds to `requestDefaultPersonalization` not set in the Web SDK command.
    * **[!UICONTROL Enabled]**: Explicitly request the page scope and default surface. This updates the SPA view cache. This corresponds to `requestDefaultPersonalization` set to `true`.
    * **[!UICONTROL Disabled]**: Explicitly suppress the request for the page scope and default surface. This corresponds to `requestDefaultPersonalization` set to `false`.
* **[!UICONTROL Decision context]**: This is a key-value map that is used when evaluating Adobe Journey Optimizer rulesets for on-device decisioning. You can provide the decision context manually or through a data element.

### Datastream configuration overrides {#datastream-overrides}

Datastream overrides allow you to define additional configurations for your datastreams, which get passed to the Edge Network via the Web SDK.

This helps you trigger different datastream behaviors than the default ones, without creating a new datastream or modifying your existing settings. See the documentation on [configuring datastream overrides](web-sdk-extension-configuration.md#datastream-overrides) for more details.