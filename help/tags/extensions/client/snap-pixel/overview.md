---
title: Snap Pixel Extension Overview
description: Learn how you can use the Snap Pixel tag extension to capture valuble user interactions in Adobe Experience Platform.
last-substantial-update: 2025-09-17
---
# [!DNL Snap Pixel] extension overview

[[!DNL Snap Pixel]](https://businesshelp.snapchat.com/s/article/snap-pixel-about) is a JavaScript-based analytics tool that empowers you to capture valuable user interactions on your website. Important visitors actions, such as purchases, sign-ups, or other conversions, are automatically sent to your [Ads Manager](http://ads.snapchat.com/), enabling you to measure and optimize the performance of your ads, campaigns, conversion paths, and more.

The [!DNL Snap Pixel] tag extension allows you to integrate Snap Pixel functionality directly into your client-side tag libraries. This documentation outlines how to install the extension and implement its features within your tag management rules.

The Snap Pixel tag extension streamlines the integration of [!DNL Snap Pixel] functionality into your existing client-side tag libraries. This documentation outlines how to install the extension and configure its features within your tag management [rules](../../../ui/managing-resources/rules.md).

## Prerequisites {#prerequisites}

To use the extension, you will need a valid [!DNL Snap] account with access to [!DNL Ads Manager]. You must [create a new [!DNL Snap Pixel]](https://forbusiness.snapchat.com/advertising/snap-pixel#about) and copy its Pixel ID to configure the extension for your account. If you have an existing Snap Pixel, you can simply use its ID.

It is recommend to use [!DNL Snap Pixel] alongside the [!DNL Snap Conversions API] to send the same events from both the client side and server side. This approach can help recover events that may not be captured by the [!DNL Snap Pixel] alone. Refer to the [[!DNL Snap] Conversions API extension for event forwarding](../../server/snap/overview.md) for steps on how to integrate it in your server-side implementations. Please note that your organization must have access to [event forwarding](../../../ui/event-forwarding/overview.md) in order to use the server-side extension.

## Install the extension {#install}

To install the [!DNL Snap Pixel] extension, navigate to the Data Collection UI or Experience Platform UI and select **[!UICONTROL Tags]** from the left navigation. From here, select a property to add the extension to, or create a new property instead.

Once you have selected or created the desired property, select **[!UICONTROL Extensions]** in the left navigation, then select the **[!UICONTROL Catalog]** tab. Search for the [!UICONTROL Snap Pixel] card, then select **[!UICONTROL Install]**.

![The [!UICONTROL Install] button being selected for the [!UICONTROL Snap Pixel] extension in the Data Collection UI.](./images/install.png)

In the configuration view that appears, you must provide the Pixel ID you copied earlier to link the extension to your account. You can paste the ID directly into the input, or you can select an existing data element instead.

When finished, select **[!UICONTROL Save]**.

![The [!DNL Pixel] ID provided as a data element in the extension configuration view.](./images/configure.png)

The extension is installed and you can now employ its various actions in your tag rules.

## Configure a tag rule {#rule}

[!DNL Snap Pixel] supports a set of predefined standard events, each with specific contexts and accepted parameters. The rule actions available in the [!DNL Snap Pixel] extension align with these event types, making it simple to categorize and configure events being sent to Snap based on their type.

For demonstration purposes, this section shows how to build a rule that sends a purchase events to [!DNL Snap].

To begin, create a new tag rule and define the conditions as needed. When setting up the rule’s actions, choose [!DNL Snap Pixel] as the extension, then select **[!UICONTROL Send Purchase Event]** as the action type.

Once you’ve finished configuring the [!UICONTROL Send Purchase Event] action, select **[!UICONTROL Keep Changes]** to add it to your rule setup. 

![The [!UICONTROL Send Purchase Event] action type selected for a rule in the Data Collection UI.](./images/action-type.png)

When you're satisfied with the overall rule configuration, select **[!UICONTROL Save to Library]**.

To apply your updates, publish a new tag [build](../../../ui/publishing/builds.md) to enable the changes to the library.

## Confirm that [!DNL Snap] is receiving data {#confirm}

Once your updated build has been deployed to your website, you can verify that data is being sent as expected by triggering conversion events in your browser and checking they apear in [[!DNL Snap Events Manager]](https://businesshelp.snapchat.com/s/article/events-manager).

## Next steps {#next-steps}

This guide covered how to send data to [!DNL Snap] using the [!DNL Snap Pixel] tag extension. If you also plan to send server-side events to [!DNL Snap], you can now proceed to install and configure the [[!DNL Snap Conversions API event forwarding extension]](../../server/snap/overview.md).
