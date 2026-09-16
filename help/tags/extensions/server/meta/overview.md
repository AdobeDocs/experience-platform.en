---
title: Meta Conversions API Extension Overview
description: Learn about the Meta Conversions API extension for event forwarding in Adobe Experience Platform.
exl-id: 6b5836d6-6674-4978-9165-0adc1d7087b7
TQID: https://experienceleague.adobe.com/GrTuIOPkhlhBNYFBjXEyyhmjqJ3eUR64QXJ57jUc3c8
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: f002a92a-b99f-47a4-90c8-65e0e415bc7a
    internal-label: Pass
  - id: fdddec33-c9cb-4459-b8b6-2664395a6f10
    internal-label: Real-Time Customer Data Platform
feature_v2:
  - id: a075b2c1-7748-4328-b7f6-343aa314616a
    internal-label: Campaigns
  - id: b12f6872-9271-4369-85e5-86969a0b99a2
    internal-label: APIs
  - id: ba929a52-9339-4154-9487-317dc875a3c7
    internal-label: Use cases
  - id: bef6f891-2e8a-425e-8f99-7ddf22070daa
    internal-label: APIs
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
  - id: c93393a4-e558-47e1-992e-c91ed4d480ce
    internal-label: Implementation
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
subfeature_v2:
  - id: a94ced60-8199-4549-b453-ede2acb4101e
    internal-label: Hybrid implementation
  - id: ae2cba0e-54f2-464b-a3b3-ad371e8a886a
    internal-label: Catalog
  - id: b572b7ff-a413-4173-b2b4-d7d3874f1b9b
    internal-label: Best practices
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
  - id: c1f1ac67-ccab-4be9-a93a-b7faba1192c4
    internal-label: Assurance
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
  - id: e0c8953a-a203-4291-bef3-3560160d3041
    internal-label: Get started
  - id: ee602049-8a18-43df-9299-a689a025a371
    internal-label: Use cases
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
  - id: f9a2105e-7a47-4e85-9193-31a519a2cb83
    internal-label: Data elements
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
    internal-label: Optimization
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# [!DNL Meta Conversions API] extension overview

The [[!DNL Meta Conversions API]](https://developers.facebook.com/docs/marketing-api/conversions-api/) allows you to connect your server-side marketing data to [!DNL Meta] technologies in order to optimize your ad targeting, decrease cost per action, and measure results. Events are linked to a [[!DNL Meta Pixel]](https://developers.facebook.com/docs/meta-pixel/) ID and are processed in a similar way to client-side events.

Using the [!DNL Meta Conversions API] extension, you can leverage the API's capabilities in your [event forwarding](../../../ui/event-forwarding/overview.md) rules to send data to [!DNL Meta] from the Adobe Experience Platform Edge Network. This document covers how to install the extension and use its capabilities in an event forwarding [rule](../../../ui/managing-resources/rules.md).

## Demo

The following video is intended to support your understanding of the [!DNL Meta Conversions API].

>[!VIDEO](https://unlockmarketingdata.com/video-meta-conversions-api)

## Prerequisites

It is strongly recommended to use [!DNL Meta Pixel] and the [!DNL Conversions API] to share and send the same events from the client side and server side, respectively, since this may help recover events that were not picked up by [!DNL Meta Pixel]. Before installing the [!DNL Conversions API] extension, see the guide on the [[!DNL Meta Pixel] extension](../../client/meta/overview.md) for steps on how to integrate it in your client-side tag implementations.

>[!NOTE]
>
>The section on [event deduplication](#deduplication) later in this document covers the steps to ensure the same event is not used twice, as it may be received from both the browser and the server.

In order to use the [!DNL Conversions API] extension, you must have access to event forwarding and have a valid [!DNL Meta] account with access to [!DNL Ad Manager] and [!DNL Event Manager]. Specifically, you must copy the ID of an existing [[!DNL Meta Pixel]](https://www.facebook.com/business/help/952192354843755?id=1205376682832142) (or [create a new [!DNL Pixel]](https://www.facebook.com/business/help/952192354843755) instead) so the extension can be configured to your account.

>[!INFO]
>
>If you're planning to use this extension with mobile app data, or if you also work with offline event data in your [!DNL Meta] campaigns, you'll need to create your dataset through an existing app and select **Create from a pixel ID** when prompted. See the article [Decide which dataset creation option is right for your business](https://www.facebook.com/business/help/5270377362999582?id=490360542427371) for details. Refer to the [Conversions API for App Events](https://developers.facebook.com/docs/marketing-api/conversions-api/app-events) document for all the required and optional app tracking parameters.

## Install the extension

To install the [!DNL Meta Conversions API] extension, navigate to the Data Collection UI or Experience Platform UI and select **[!UICONTROL Event Forwarding]** from the left navigation. From here, select a property to add the extension to, or create a new property instead.

Once you have selected or created the desired property, select **[!UICONTROL Extensions]** in the left navigation, then select the **[!UICONTROL Catalog]** tab. Search for the [!UICONTROL Meta Conversions API] card, then select **[!UICONTROL Install]**.

![The [!UICONTROL Install] option being selected for the [!UICONTROL Meta Conversions API] extension in the Data Collection UI.](../../../images/extensions/server/meta/install.png)

In the configuration view that appears, you must provide the [!DNL Pixel] ID you copied earlier to link the extension to your account. You can paste the ID directly into the input, or you can use a data element instead.

You also need to provide an access token to use the [!DNL Conversions API] specifically. Refer to the [!DNL Conversions API] documentation on [generating an access token](https://developers.facebook.com/docs/marketing-api/conversions-api/get-started#access-token) for steps on how to obtain this value.

When finished, select **[!UICONTROL Save]**

![The [!DNL Pixel] ID provided as a data element in the extension configuration view.](../../../images/extensions/server/meta/configure.png)

The extension is installed and you can now employ its capabilities in your event forwarding rules.

## Integration with the Facebook and Instagram extension {#facebook}

The integration using the Facebook and Instagram extension allows you to quickly authenticate into your Meta Business Account. This then auto-populates your [!UICONTROL Pixel ID] and the Meta Conversions API [!UICONTROL Access Token], making it easier to install and configure the Meta Conversions API.

A dialogue prompt to authenticate in Facebook and Instagram appears when installing the [!UICONTROL Meta Conversions API] extension.

![The [!UICONTROL Meta Conversions API Extension] installation page highlighting [!UICONTROL Connect to Meta].](../../../images/extensions/server/meta/mbe-extension-install.png)

A dialogue prompt to authenticate in Facebook and Instagram also appears in the quick start workflow UI within event forwarding. 

![The quick start workflow UI highlighting [!UICONTROL Connect to Meta].](../../../images/extensions/server/meta/mbe-extension-quick-start.png)

## Integration with Event Quality Match Score (EMQ) {#emq}

The integration with Event Quality Match Score (EMQ) allows you to easily view the effectiveness of your implementation by showing EMQ scores. This integration minimizes context switching and helps you improve the success of your Meta Conversions API implementations. These event scores appear in the [!UICONTROL Meta Conversions API extension] configuration screen.

![The [!UICONTROL Meta Conversions API Extension] configuration page highlighting [!UICONTROL View EMQ Score].](../../../images/extensions/server/meta/emq-score.png)

## Integration with LiveRamp (Alpha) {#alpha}

[!DNL LiveRamp] customers who have [!DNL LiveRamp]'s Authenticated Traffic Solution (ATS) deployed on their sites may opt to share RampIDs as a customer information parameter. Please work with your [!DNL Meta] account team to join the Alpha program for this feature.

![The Meta event forwarding [!UICONTROL Rule] configuration page highlighting [!UICONTROL Partner Name (alpha)] and [!UICONTROL Partner ID (alpha)].](../../../images/extensions/server/meta/live-ramp.png)

## Configure an event forwarding rule {#rule}

This section covers how to use the [!DNL Conversions API] extension in a generic event forwarding rule. In practice, you should configure several rules in order to send all accepted [standard events](https://developers.facebook.com/docs/meta-pixel/reference) via [!DNL Meta Pixel] and [!DNL Conversions API]. For mobile app data, please see the required fields, app data fields, customer information parameters, and custom data details [here](https://developers.facebook.com/docs/marketing-api/conversions-api/app-events).

>[!NOTE]
>
>Events should be [sent in real time](https://www.facebook.com/business/help/379226453470947?id=818859032317965) or as close to real time as possible for better ad campaign optimization.

Start creating a new event forwarding rule and configure its conditions as desired. When selecting the actions for the rule, select **[!UICONTROL Meta Conversions API Extension]** for the extension, then select **[!UICONTROL Send Conversions API Event]** for the action type.

![The [!UICONTROL Send Page View] action type being selected for a rule in the Data Collection UI.](../../../images/extensions/server/meta/select-action.png)

Controls appear that allow you to configure the event data that will be sent to [!DNL Meta] via the [!DNL Conversions API]. These options can be entered directly into the provided inputs, or you can select existing data elements to represent the values instead. The config options are divided into four main sections as outlined below.

| Config section | Description |
| --- | --- |
| [!UICONTROL Server Event Parameters] | General information about the event, including the time it occurred and the source action that triggered it. Refer to the [!DNL Meta] developer documentation for more information on the [standard event parameters](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event) accepted by the [!DNL Conversions API].<br><br>If you are using both [!DNL Meta Pixel] and the [!DNL Conversions API] to send events, make sure to include both an **[!UICONTROL Event Name]** (`event_name`) and **[!UICONTROL Event ID]** (`event_id`) with every event, since these values are used for [event deduplication](#deduplication).<br><br>You also have the option to **[!UICONTROL Enable Limited Data Use]** to help comply with customer opt-outs. See the [!DNL Conversions API] documentation on [data processing options](https://developers.facebook.com/docs/marketing-apis/data-processing-options/) for details on this feature. |
| [!UICONTROL Customer Information Parameters] | User identity data that is used to attribute the event to a customer. Some of these values must be hashed before they can be sent to the API.<br><br>To ensure a good common API connection and high event match quality (EMQ), it is recommended that you send all [accepted customer information parameters](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters) alongside server events. These parameters should also be [prioritized based on their importance and impact on EMQ](https://www.facebook.com/business/help/765081237991954?id=818859032317965). |
| [!UICONTROL Custom Data] | Additional data to be used for ads delivery optimization, provided in the form of a JSON object. Refer to the [[!DNL Conversions API] documentation](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/custom-data) for more information on the accepted properties for this object.<br><br>If you are sending a purchase event, you must use this section to provide the required attributes `currency` and `value`.  |
| [!UICONTROL Test Event] | This option is used to verify whether your configuration is causing server events to be received by [!DNL Meta] as expected. To use this feature, select the **[!UICONTROL Send as Test Event]** checkbox, and then provide a test event code of your choice in the input below. Once the event forwarding rule is deployed, if you configured the extension and action correctly you should seeing activities appearing within the **[!DNL Test Events]** view in [!DNL Meta Events Manager]. |

{style="table-layout:auto"}

When finished, select **[!UICONTROL Keep Changes]** to add the action to the rule configuration.

![[!UICONTROL Keep Changes] being selected for the action configuration.](../../../images/extensions/server/meta/keep-changes.png)

When you are satisfied with the rule, select **[!UICONTROL Save to Library]**. Finally, publish a new event forwarding [build](../../../ui/publishing/builds.md) to enable the changes made to the library.

## Event deduplication {#deduplication}

As mentioned in the [prerequisites section](#prerequisites), it is recommended that you use both the [!DNL Meta Pixel] tag extension and the [!DNL Conversions API] event forwarding extension to send the same events from the client and server in a redundant setup. This can help recover events that were not picked up by one extension or the other.

If you are sending different event types from the client and server with no overlap between the two, then deduplication is not necessary. However, if any single event is shared by both [!DNL Meta Pixel] and the [!DNL Conversions API], you must ensure that these redundant events are deduplicated so that your reporting is not adversely affected.

When sending shared events, make sure that you are including an event ID and name with every event that you send from both the client and server. When multiple events with the same ID and name are received, [!DNL Meta] automatically employs several strategies to deduplicate them and keep the most relevant data. See the [!DNL Meta] documentation on [deduplication for [!DNL Meta Pixel] and [!DNL Conversions API] events](https://www.facebook.com/business/help/823677331451951?id=1205376682832142) for details on this process.

## Quick start workflow: Meta Conversions API Extension (Beta) {#quick-start}

>[!IMPORTANT]
>
>* The quick start feature is available to customers who have purchased the Real-Time CDP Prime and Ultimate package. Please contact your Adobe representative for more information.
>* This feature is for net new implementations and does not currently support auto installing extensions and configurations on existing tags and event forwarding properties. 

>[!NOTE]
>
>Any existing client can use the quick start workflows to create a reference implementation that can be used for the following:
>
>* Use it as the start of a brand new implementation. 
>* Take advantage of it as a reference implementation that you can examine to see how it has been configured and then replicate in your current production implementations.

The quick start feature helps you get set up with ease and efficiency with the Meta Conversions API and the Meta Pixel extensions. This tool automates multiple steps that are performed in Adobe tags and event forwarding, significantly reducing the set up time.

This feature automatically installs and configures both the Meta Conversions API and the Meta Pixel extensions on a newly auto-generated tags and event forwarding property with the necessary rules and data elements. Additionally, it also auto installs and configures the Experience Platform Web SDK and Datastream. Lastly, the quick start feature auto-publishes the library to the designated URL in a development environment, which enables client side data collection and server side event forwarding in real-time via Event Forwarding and Experience Platform Edge Network.

The following video provides an introduction to the quick start feature.

>[!VIDEO](https://video.tv.adobe.com/v/3416939?quality=12&learn=on)

### Install quick start feature 

>[!NOTE]
>
>The guided setup feature helps you get set up with ease and efficiency. This tool automates multiple steps that are performed in Adobe tags and event forwarding. It will not deliver an end to end, fully functional implementation that accommodates all use cases.

To get started with the guided setup, follow the instructions in the [Event Forwarding guided setup](../../../ui/event-forwarding/guided-setup.md).

#### Adding Additional Events

To add new events, select **[!UICONTROL Edit Your Tags Web Property]**.

![Next steps dialog showing edit your tags web property](../../../images/extensions/server/meta/edit-your-tags-web-property.png)

Select the rule that corresponds to the meta event that you would like to edit. For example, **MetaConversion_AddToCart**.

>[!NOTE]
>
>If there is no event, this rule will not run. This is true for all rules, with the **MetaConversion_PageView** rule being the exception.

To add an event select **[!UICONTROL Add]** under the [!UICONTROL Events] heading.

![Tag properties page showing no events](../../../images/extensions/server/meta/edit-rule.png)

Select the [!UICONTROL Event Type]. In this example, we have selected the [!UICONTROL Click] event and configured it to trigger when the **.add-to-cart-button** is selected. Select **[!UICONTROL Keep Changes]**.

![Event configuration screen showing click event](../../../images/extensions/server/meta/event-configuration.png)

The new event has been saved. Select **[!UICONTROL Select a working library]** and select the library that you would like to build to.

![Select a working library drop down](../../../images/extensions/server/meta/working-library.png)

Next select the dropdown beside **[!UICONTROL Save to Library]** and select **[!UICONTROL Save to Library and Build]**. This will publish the change in the library.

![Select save to library and build](../../../images/extensions/server/meta/save-and-build.png)

Repeat these steps for any other meta conversion event you would like to configure.

#### Data Layer Configuration {#configuration}

>[!IMPORTANT]
>
>The way you update this global data layer depends on your website architecture. A single page application will be different to a server-side rendering app. There is also the possibility that you will be wholly in charge of creating and updating this data inside the Tags product. In all instances the data layer will need to be updated in between running each of the `MetaConversion_* rules`. If you don't update the data between rules, you may also run into a case where you are sending stale data from the last `MetaConversion_* rule` in the current `MetaConversion_* rule`.

During the configuration, you were asked where your data layer lives. By default, this would be `window.dataLayer.meta`, and inside the `meta` object, your data would be expected as shown below.

![Data layer meta information](../../../images/extensions/server/meta/data-layer-meta.png)

This is important to understand as every `MetaConversion_*` rule uses this data structure to pass the relevant pieces of data to the [!DNL Meta Pixel] extension and to the [!DNL Meta Conversions API]. Refer to the documentation on [standard events](https://developers.facebook.com/docs/meta-pixel/reference#standard-events) for more information on what data different meta events require.

For example, if you wanted to use the `MetaConversion_Subscribe` rule, you would need to update `window.dataLayer.meta.currency`, `window.dataLayer.meta.predicted_ltv`, and `window.dataLayer.meta.value` as per the object properties described in the documentation on [standard events](https://developers.facebook.com/docs/meta-pixel/reference#standard-events).

Below is an example of what would need to be run on a website to update the data layer before the rule is executed.

![Update data layer meta information](../../../images/extensions/server/meta/update-data-layer-meta.png)

By default, the `<datalayerpath>.conversionData.eventId` will be randomly generated by the "Generate New Event Id" action on any of the `MetaConversion_* rules`.

For a local reference of how the data layer should look, you can open the custom code editor on the `MetaConversion_DataLayer` data element on your property.

## Next steps

This guide covered how to send server-side event data to [!DNL Meta] using the [!DNL Meta Conversions API] extension. From here, it is recommended to expand your integration by connecting more [!DNL Pixels] and sharing more events when applicable. Doing either of the following can help further improve your ad performance:

* Connect any other [!DNL Pixels] that are not yet connected to a [!DNL Conversions API] integration.
* If you are sending certain events exclusively through [!DNL Meta Pixel] on the client side, send these same events to the [!DNL Conversions API] from the server side as well.

See the [!DNL Meta] documentation on [best practices for the [!DNL Conversions API]](https://www.facebook.com/business/help/308855623839366?id=818859032317965) for more guidance on how to effectively implement your integration. For more general information on tags and event forwarding in Adobe Experience Cloud, refer to the [tags overview](../../../home.md).
