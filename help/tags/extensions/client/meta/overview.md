---
title: Meta Pixel Extension Overview
description: Learn about the Meta Pixel tag extension in Adobe Experience Platform.
exl-id: c5127bbc-6fe7-438f-99f1-6efdbe7d092e
TQID: https://experienceleague.adobe.com/0B6N5yvE4O-P6O6HyWMtkY0iU-0IXR6QUmHclhiss2o
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a075b2c1-7748-4328-b7f6-343aa314616a
    internal-label: Campaigns
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: e9dbdbc5-3e52-40f0-a7bc-e18542967b7a
    internal-label: Implementations
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
subfeature_v2:
  - id: ae2cba0e-54f2-464b-a3b3-ad371e8a886a
    internal-label: Catalog
  - id: b64298cc-90cc-46b7-8917-ee391f1c7516
    internal-label: Data collection UI
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
  - id: df312454-73c4-43f6-a90e-18f5043f074c
    internal-label: Tags
  - id: f6ff4d13-7b5c-4533-8556-95e76673d4cb
    internal-label: Properties
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
---
# [!DNL Meta Pixel] extension overview

[[!DNL Meta Pixel]](https://developers.facebook.com/docs/meta-pixel/) is a JavaScript-based analytics tool that allows you to track visitor activity on your website. Visitor actions that you track (called conversions) are sent to [[!DNL Ads Manager]](https://www.facebook.com/business/tools/ads-manager) where they can be used to measure the effectiveness of your ads, campaigns, conversion funnels, and more.

The [!DNL Meta Pixel] tag extension allows you to leverage [!DNL Pixel] functionalities in your client-side tag libraries. This document covers how to install the extension and use its capabilities in a [rule](../../../ui/managing-resources/rules.md).

## Prerequisites

In order to use the extension, you must have a valid [!DNL Meta] account with access to [!DNL Ads Manager]. Specifically, you must [create a new [!DNL Meta Pixel]](https://www.facebook.com/business/help/952192354843755) and copy its [!DNL Pixel ID] so the extension can be configured to your account. If you already have an existing [!DNL Meta Pixel], you can use its ID instead.

It is strongly recommended to use [!DNL Meta Pixel] in combination with the [!DNL Meta Conversions API] to share and send the same events from the client side and server side, respectively, since this may help recover events that were not picked up by [!DNL Meta Pixel]. See the guide on the [[!DNL Meta Conversions API] extension for event forwarding](../../client/meta/overview.md) for steps on how to integrate it in your server-side implementations. Note that your organization must have access to [event forwarding](../../../ui/event-forwarding/overview.md) in order to use the server-side extension.

## Install the extension

To install the [!DNL Meta Pixel] extension, navigate to the Data Collection UI or Experience Platform UI and select **[!UICONTROL Tags]** from the left navigation. From here, select a property to add the extension to, or create a new property instead.

Once you have selected or created the desired property, select **[!UICONTROL Extensions]** in the left navigation, then select the **[!UICONTROL Catalog]** tab. Search for the [!UICONTROL Meta Pixel] card, then select **[!UICONTROL Install]**.

![The [!UICONTROL Install] button being selected for the [!UICONTROL Meta Pixel] extension in the Data Collection UI.](../../../images/extensions/client/meta/install.png)

In the configuration view that appears, you must provide the [!DNL Pixel] ID you copied earlier to link the extension to your account. You can paste the ID directly into the input, or you can select an existing data element instead.

>[!TIP]
>
>Using a data element gives you the option to dynamically change the [!DNL Pixel] ID used depending on other factors such as the build environment. See the appendix section on [using different [!DNL Pixel] IDs for different environments](#id-data-element) for more information.

You can also optionally provide an event ID to associate with the extension. This is used to deduplicate identical events between [!DNL Meta Pixel] and the [!DNL Meta Conversions API]. For details, see the section on [event deduplication](../../server/meta/overview.md#event-deduplication) in overview for the [!DNL Conversions API] extension.

When finished, select **[!UICONTROL Save]**

![The [!DNL Pixel] ID provided as a data element in the extension configuration view.](../../../images/extensions/client/meta/configure.png)

The extension is installed and you can now employ its various actions in your tag rules.

## Configure a tag rule {#rule}

[!DNL Meta Pixel] accepts a set of predefined [standard events](https://www.facebook.com/business/help/402791146561655), each with their own contexts and accepted properties. The rule actions provided by the [!DNL Pixel] extension correlate to these event types, allowing you to easily categorize and configure the event being sent to [!DNL Meta] according to its type.

For demonstration purposes, this section shows how to build a rule that sends a page view event to [!DNL Meta].

Start creating a new tag rule and configure its conditions as desired. When selecting the actions for the rule, select **[!UICONTROL Meta Pixel]** for the extension, then select **[!UICONTROL Send Page View]** for the action type.

![The [!UICONTROL Send Page View] action type being selected for a rule in the Data Collection UI.](../../../images/extensions/client/meta/select-action.png)

There is no further configuration required for the [!UICONTROL Send Page View] action. Select **[!UICONTROL Keep Changes]** to add the action to the rule configuration. When you are satisfied with the rule, select **[!UICONTROL Save to Library]**. 

Finally, publish a new tag [build](../../../ui/publishing/builds.md) to enable the changes to the library.

## Confirm that [!DNL Meta] is receiving data

After your updated build has been deployed to your website, you can confirm whether data is being sent as expected by generating some conversion events on your browser and checking if those events appear in [[!DNL Meta Events Manager]](https://www.facebook.com/business/help/898185560232180).

## Next steps

This guide covered how to send data to [!DNL Meta] using the [!DNL Meta Pixel] tag extension. If you are planning on also sending server-side events to [!DNL Meta], you can now proceed to install and configure the [[!DNL Conversions API] event forwarding extension](../../server/meta/overview.md).

For more information on tags in Experience Platform, refer to the [tags overview](../../../home.md).

## Appendix: Use different [!DNL Pixel] IDs for different environments {#id-data-element}

If you want to test your implementation in development or staging environments while keeping your production [!DNL Meta Pixel] analytics intact, you can use a data element to dynamically choose an appropriate [!DNL Pixel] ID depending on the environment being used.

You can achieve this by using a [!UICONTROL Custom Code] data element (provided by the [[!UICONTROL Core] extension](../core/overview.md)) in combination with the [`turbine` free variable](../../../extension-dev/turbine.md). In the data element's JavaScript code, use the `turbine` object to find the current environment stage, then return an appropriate [!DNL Pixel] ID based on the result.

The following example returns a fake production ID `exampleProductionKey` when used in the production environment, and a different ID `exampleTestKey` when any other environment is used. When implementing this code, replace each value with your actual production and test [!DNL Pixel] IDs.

```js
return (turbine.environment.stage === "production" ? 'exampleProductionKey' : 'exampleTestKey');
```
