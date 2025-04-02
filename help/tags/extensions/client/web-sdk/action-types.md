---
title: Action Types in the Adobe Experience Platform Web SDK Extension
description: Learn about the different action types provided by the Adobe Experience Platform Web SDK tag extension.
solution: Experience Platform
exl-id: a4bf0bb9-59b4-4c43-97e6-387768176517
---

# Action types

After you configure the [Adobe Experience Platform Web SDK tag extension](web-sdk-extension-configuration.md), you must configure your action types.

This page describes the action types supported by the [Adobe Experience Platform Web SDK tag extension](web-sdk-extension-configuration.md).

## Apply propositions {#apply-propositions}

The **[!UICONTROL Apply propositions]** action type allows you to render propositions in single-page applications without incrementing metrics.

This action type is useful when working with single-page applications where portions of the page get re-rendered, potentially overwriting any personalizations already applied to the page.

You can use this action type for various use cases, such as:

1. **Render mbox HTML offers**. Propositions explicitly requested via a scope or surface from a **[!UICONTROL Send event]** action are not automatically rendered. You can use the **[!UICONTROL Apply propositions]** action type to tell Web SDK where to render them by specifying the proposition metadata.
2. **Render the offers for a view on a single-page application**. When rendering a view change event, if the analytics data is not ready yet, you can use the **[!UICONTROL Apply propositions]** action to render the view propositions at the top of page. See [top and bottom of page events (Second page view - Option 2)](../../../../web-sdk/use-cases/top-bottom-page-events.md) for more details. To use this, enter a **[!UICONTROL View name]** in the form.
3. **Re-render propositions**. When your site uses a framework like React to re-render content, you may need to re-apply personalization. In such cases you can use the **[!UICONTROL Apply propositions]** action type to do this.

This action type will not send a display event for rendered propositions. It will keep track of rendered propositions so that these can be included in subsequent **[!UICONTROL Send event]** calls.


![Platform Tags UI showing the Apply Propositions action type.](assets/apply-propositions.png)

This action type supports the following fields:

* **[!UICONTROL Propositions]**: An array of proposition objects that you want to re-render.
* **[!UICONTROL View name]**: The name of the view to render.
* **[!UICONTROL Proposition metadata]**: An object that determines how HTML offers can be applied. You can provide this information either through the form or through a data element. It contains the following properties:
  * **[!UICONTROL Scope]**
  * **[!UICONTROL Selector]**
  * **[!UICONTROL Action type]**

## Apply response {#apply-response}

Use the **[!UICONTROL Apply response]** action type when you want to perform various actions based on a response from the Edge Network. This action type is typically used in hybrid deployments where the server makes an initial call to the Edge Network, then this action type takes the response from that call and initializes the Web SDK in the browser.

Using this action type may reduce client load times for hybrid personalization use cases.

![Image of the Experience Platform user interface showing the Apply response action type.](assets/apply-response.png)

This action type supports the following configuration options:

* **[!UICONTROL Instance]**: Select the Web SDK instance that you are using.
* **[!UICONTROL Response headers]**: Select the data element which returns an object containing the header keys and values returned from the Edge Network server call.
* **[!UICONTROL Response body]**: Select the data element which returns the object containing the JSON payload provided by the Edge Network response.
* **[!UICONTROL Render visual personalization decisions]**: Enable this option to automatically render the personalization content provided by the Edge Network and pre-hide the content to prevent flicker.

## Evaluate rulesets {#evaluate-rulesets}

This action type manually triggers ruleset evaluation. Rulesets are returned by Adobe Journey Optimizer to support features like in-browser messages.

![Image of the Experience Platform user interface showing the Evaluate rulesets response action type.](assets/evaluate-rulesets.png)

This action type supports the following options:

* **[!UICONTROL Render visual personalization decisions]**: Enable this option to render visual personalization decisions for the ruleset items that match.
* **[!UICONTROL Decision context]**: This is a key-value map that is used when evaluating Adobe Journey Optimizer rulesets for on-device decisioning. You can provide the decision context manually or through a data element.

## Get Media Analytics Tracker {#get-media-analytics-tracker}

This action is used to get the legacy Media Analytics API. When configuring the action and an object name is provided, then the legacy Media Analytics API will be exported to that window object. If none is provided it will be exported to `window.Media` as the current Media JS library does.

![Experience Platform UI image showing the Get Media Analytics Tracker action type.](assets/get-media-analytics-tracker.png)

## Redirect with identity {#redirect-with-identity}

Use this action type to share identities from the current page to other domains. This action is designed to be used with a **[!UICONTROL click]** event type and a value comparison condition. See [append identity to URL using the Web SDK extension](../../../../web-sdk/commands/appendidentitytourl.md#extension) for more information on how to use this action type.

## Send event {#send-event}

Sends an event to Experience Platform so that Platform can collect the data you send and act on that information. Any data that you want to send can be sent in the **[!UICONTROL XDM Data]** field. Use a [!DNL JSON] object that conforms to the structure of your [!DNL XDM] schema. This object can either be created on your page or through a **[!UICONTROL Custom Code]** **[!UICONTROL Data Element]**.

The **[!UICONTROL Send Event]** action type supports the fields and settings described below. These fields are all optional.

### Instance settings {#instance}

Use the **[!UICONTROL Instance]** selector to choose your Web SDK instance that you want to configure. If you have only one instance, it is preselected.

![Platform Tags UI image showing the instance settings for the Send Event action type.](assets/instance-settings.png)

* **[!UICONTROL Instance]**: Select the Web SDK instance that you want to configure. If you only have one instance, it will be preselected.
* **[!UICONTROL Use guided events]**: Enable this option to automatically fill in or hide certain fields to enable a particular use case. Enabling this option triggers the display of the following settings.
    * **[!UICONTROL Request personalization]**: This event is intended to be called at the top of page. When selected, this event sets the following fields:
        * **[!UICONTROL Type]**: **[!UICONTROL Decisioning Proposition Fetch]**
        * **[!UICONTROL Automatically send a display event]**: **[!UICONTROL false]**
        * To automatically render personalization in this case, enable the **[!UICONTROL Render visual personalization decisions]** option.
    * **[!UICONTROL Collect analytics]**: This event is intended to be called at the bottom of the page. When selected, this event sets the following fields:
        * **[!UICONTROL Include rendered propositions]**: **[!UICONTROL true]**
        * The **[!UICONTROL Personalization]** settings are hidden

    >[!NOTE]
    >
    >The guided events are related to [top and bottom of page events](../../../../web-sdk/use-cases/top-bottom-page-events.md).
    

### Data {#data}

![Platform Tags UI image showing the Data element settings for the Send Event action type.](assets/data.png)

* **[!UICONTROL Type]**: This field allows you specify an event type that will be recorded in your XDM schema. See [`type`](/help/web-sdk/commands/sendevent/type.md) in the `sendEvent` command for more information.
* **[!UICONTROL XDM]**:
* **[!UICONTROL Data]**: Use this field to send data that does not match an XDM schema. This field is useful if you are trying to update an Adobe Target profile or send Target Recommendations attributes. See [`data`](/help/web-sdk/commands/sendevent/data.md) in the `sendEvent` command for more information.
* **[!UICONTROL Include rendered propositions]**: Enable this option to include all the propositions that have been rendered, but a display event has not been sent. Use this in tandem with **[!UICONTROL Automatically send a display event]** disabled. This setting updates the `_experience.decisioning` XDM field with information about the rendered propositions.
* **[!UICONTROL Document will unload]**: Enable this option to make sure that the events reach the server even if the user navigates away from the page. This allows events to reach the server, but responses are ignored.
* **[!UICONTROL Merge ID]**: **This field is deprecated**. This will populate the `eventMergeId` XDM field.

### Personalization {#personalization}

![Platform Tags UI image showing the Personalization settings for the Send Event action type.](assets/personalization-settings.png)

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

## Send media event {#send-media-event}

Sends a media event to Adobe Experience Platform and/or Adobe Analytics. This action is useful when you are tracking media events on your website. Select an instance (if you have more than one). The action requires a `playerId` that represents a unique identifier for a tracked media session. It also requires a **[!UICONTROL Quality of Experience]** and a `playhead` data element when starting a media session.

![Experience Platform UI image showing the send media event screen.](assets/send-media-event.png)

The **[!UICONTROL Send media event]** action type supports the following properties:

* **[!UICONTROL Instance]**: The Web SDK instance that is being used.
* **[!UICONTROL Media Event Type]**: The type of the media event being tracked.
* **[!UICONTROL Player ID]**: The media session unique identifier.
* **[!UICONTROL Playhead]**: The current position of the media playback, in seconds.
* **[!UICONTROL Media session details]**: When sending a media start event, the required media session details should be specified.
* **[!UICONTROL Chapter details]**: In this section you can specify the chapter details when sending a chapter start media event.
* **[!UICONTROL Advertising details]**: When sending an `AdBreakStart` event, you must specify the required advertising details.
* **[!UICONTROL Advertising pod details]**: Details about the advertising pod when sending an `AdStart` event.
* **[!UICONTROL Error details]**: Details about the playback error that is being tracked.
* **[!UICONTROL State Update Details]**: The player state that is being updated.
* **[!UICONTROL Custom Metadata]**: The custom metadata about the media event that is being tracked.
* **[!UICONTROL Quality of Experience]**: The media quality of experience data that is being tracked.

## Set consent {#set-consent}

After you have received consent from your user, this consent must be communicated to the Adobe Experience Platform Web SDK by using the "Set Consent" action type. Currently, two types of standards are supported: "Adobe" and "IAB TCF." See [Supporting Customer Consent Preferences](../../../../web-sdk/commands/setconsent.md). When using Adobe version 2.0, only a data element value is supported. You will need to create a data element that resolves to the consent object.

In this action, you are also provided with an optional field to include an Identity Map so that identities can be synced once consent is received. Syncing is useful when the consent is configured as "Pending" or "Out" because the consent call is likely the first call to fire.

## Update variable {#update-variable}

Use this action to modify an XDM object as a result of an event. This action is intended to build up an object that can later be referenced from a **[!UICONTROL Send event]** action, to record the event XDM object.

In order to use this action type you must have defined a [variable](data-element-types.md#variable) data element. Once you choose a variable data element to modify, an editor appears, similar to the editor for the [XDM object](data-element-types.md#xdm-object) data element.

![](assets/update-variable.png)

The XDM schema that is used for the editor is the schema that is selected on the [!UICONTROL variable] data element. You can set one or more properties of the object by clicking on one of the properties in the tree on the left, and then modifying the value on the right.For example, in the screenshot below, the producedBy property is getting set to the data element "Produced by data element."

![](assets/update-variable-set-property.png)

There are some differences between the editor in the update variable action versus the editor in the XDM object data element. First, the update variable action has a root level item labeled "xdm." If you click on this item, you can specify a data element to use to set the entire object. Second, the update variable action has checkboxes to clear the data from the xdm object. Click on one of the properties on the left, and then check the checkbox on the right to clear the value. This will clear out the current value before setting any values on the variable.

## Next steps {#next-steps}

After reading this article, you should have a better understanding of how to configure your actions. Next, read about how to [configure your data element types](data-element-types.md).
