---
title: Send event
description: Send data to the Adobe Experience Platform Edge Network.
exl-id: 4ac7750e-48ab-4eb6-873d-bb2556dbf788
TQID: https://experienceleague.adobe.com/wigmBsoROqaLGEVNIgAn2b6BJ3lhAAKFBW9cj12iZZs
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: cb954087-f4fc-4456-afb9-e939cabcdc79
    internal-label: Journey Optimizer
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: e98b7246-966c-4318-9e95-cad2f7a17dc7
    internal-label: Customer Journey Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c93393a4-e558-47e1-992e-c91ed4d480ce
    internal-label: Implementation
  - id: d556b755-390a-43f0-be32-a08cf6236126
    internal-label: Configuration
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
  - id: b3a93754-a8b8-46eb-9421-7eccaeeb3dff
    internal-label: Best practices
  - id: b572b7ff-a413-4173-b2b4-d7d3874f1b9b
    internal-label: Best practices
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
  - id: e9001ce2-5245-4a8e-8601-dd958009072f
    internal-label: Web experience
---
# Send event

The **[!UICONTROL Send event]** action sends a payload to a datastream on the Adobe Experience Platform Edge Network. It is a core feature of data collection and personalization; almost all organizations use this action as part of their Web SDK implementation.

1. Log in to [CX Enterprise](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, then set the [!UICONTROL Action type] to **[!UICONTROL Send event]**.

## General fields

![Experience Platform Tags UI image showing the instance settings for the Send Event action type.](../assets/instance-settings.png)

* **[!UICONTROL Instance]**: The SDK instance that the action applies to. This drop-down menu is disabled if your implementation uses a single SDK instance.
* **[!UICONTROL Use guided events]**: Enable this option to automatically fill in or hide certain fields to enable a particular use case. This setting can help reduce noise of available options when setting up the action for each respective purpose, and follows Adobe's best practices of [Top/bottom page events](/help/collection/use-cases/personalization/top-bottom-page-events.md). Enabling this checkbox triggers the display of the following radio buttons:
  * **[!UICONTROL Request personalization]**: Get the latest personalization decisions without recording an Adobe Analytics event. It is most commonly called at the top of the page. When selected, this radio button sets the following fields:
    * [!UICONTROL Type] is locked to [!UICONTROL Decisioning Proposition Fetch]
    * [!UICONTROL Render visual personalization decisions] is locked to enabled
    * [!UICONTROL Automatically send a display event] is locked to disabled
  * **[!UICONTROL Collect analytics]**: Record an event without getting personalization decisions. It is most commonly called at the bottom of the page. When selected, this radio button sets the following fields:
    * [!UICONTROL Include rendered propositions] is locked to enabled
   
## Data fields

![Experience Platform Tags UI image showing the Data element settings for the Send Event action type.](../assets/data.png)

* **[!UICONTROL Type]**: The event type. You can select from a pre-defined set of values, or define your own value. See [Accepted values for `eventType`](/help/xdm/classes/experienceevent.md#accepted-values-for-eventtype) for more information. The JavaScript library equivalent to this field is [`eventType`](/help/collection/js/commands/sendevent/eventtype.md).
* **[!UICONTROL XDM]**: The XDM payload that you want to send to Adobe. You can use either an [XDM object](../data-element-types.md#xdm-object) or [Variable](../data-element-types.md#variable) in this field. If you have rules that populate multiple XDM objects, you can use [Merged objects](../../core/overview.md#merged-objects) to combine them.
* **[!UICONTROL Data]**: The data payload that you want to send to Adobe. Some apps and services do not require adhering to an XDM schema, such as Adobe Analytics or Adobe Target. Use a [Variable](../data-element-types.md#variable) data element type for this field.
* **[!UICONTROL Include rendered propositions]**: Enable this checkbox to use this event as a display event, including the propositions that rendered when "automatically send a display event" was unchecked. The `_experience.decisioning` XDM field populates with information about rendered personalization.
* **[!UICONTROL Document will unload]**: Enable this checkbox to make sure that the event reaches the server even if the user navigates away from the page. This setting allows events to reach the server, but responses from the Edge Network are ignored.
* **[!UICONTROL Merge ID]** _(Deprecated)_: Populates the `eventMergeId` XDM field.

## Personalization fields

![Experience Platform Tags UI image showing the Personalization settings for the Send Event action type.](../assets/personalization-settings.png)

* **[!UICONTROL Scopes]**: An array of scopes that you want to explicitly request from personalization. You can enter the scopes manually, or provide a data element. When manually entering scopes, each field represents one scope. Select **[!UICONTROL Add scope]** to add more scopes to the action.
* **[!UICONTROL Surfaces]**: An array of surfaces to query with the event. See [Create web experiences](https://experienceleague.adobe.com/docs/journey-optimizer/using/web/create-web.html) in the Adobe Journey Optimizer documentation for more information. When manually entering surfaces, each field represents one surface. Select **[!UICONTROL Add surface]** to add more surfaces to the action.
* **Render visual personalization decisions:** A checkbox that, when enabled, lets you render personalized content on the page. See [Render DOM actions automatically](/help/collection/use-cases/personalization/render-auto-pers-content.md) for more information.
* **[!UICONTROL Request default personalization]**: Controls whether the page-wide scope and default surface is requested. By default, it is requested automatically during the first `sendEvent` call of the page load. The JavaScript library equivalent to these radio buttons is [`requestDefaultPersonalization`](/help/collection/js/commands/sendevent/personalization.md). You can choose from the following options:
  * **[!UICONTROL Automatic]**: The default behavior. Only request default personalization when it has not yet been requested.
  * **[!UICONTROL Enabled]**: Explicitly request the page scope and default surface. This updates the SPA view cache.
  * **[!UICONTROL Disabled]**: Explicitly suppress the request for the page scope and default surface.
* **[!UICONTROL Decision context]**: A key-value map that is used when evaluating Adobe Journey Optimizer rulesets for on-device decisioning. You can provide the decision context manually or through a data element.

## Advertising fields

![Experience Platform tags UI showing advertising settings for the Send event action](../assets/send-event-advertising.png)

* **[!UICONTROL Request default advertising data]**: Determines when (or if) the library adds advertising information to the XDM payload. You can choose from the following options:
  * **[!UICONTROL Automatic]**: Any advertising data available at the time of the event is added to the event payload.
  * **[!UICONTROL Wait]**: Delay sending the event until advertising data is received.
  * **[!UICONTROL Disabled]**: Do not add advertising data to the event payload. Select this option if your implementation does not use Adobe Analytics or Customer Journey Analytics.

## Datastream configuration overrides

This command supports datastream configuration overrides, giving you control over which apps and services receive this data. When you set a datastream configuration override in both an individual command and within the tag extension configuration settings, the individual command takes precedence. See [Datastream configuration overrides](../configure/configuration-overrides.md) for more information.
