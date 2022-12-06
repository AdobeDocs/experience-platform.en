---
title: Meta Conversions API Extension Overview
description: Learn about the Meta Conversions API extension for event forwarding in Adobe Experience Platform.
---
# [!DNL Meta Conversions API] extension overview

The [[!DNL Meta Conversions API]](https://developers.facebook.com/docs/marketing-api/conversions-api/) allows you to connect your server-side marketing data to [!DNL Meta] technologies in order to optimize your ad targeting, decrease cost per action, and measure results. Events are linked to a [[!DNL Meta Pixel]](https://developers.facebook.com/docs/meta-pixel/) ID and are processed in a similar way to client-side events.

Using the [!DNL Meta Conversions API] extension, you can leverage the API's capabilities in your [event forwarding](../../../ui/event-forwarding/overview.md) rules to send data to [!DNL Meta] from the Adobe Experience Platform Edge Network. This document covers how to install the extension and use its capabilities in an event forwarding [rule](../../../ui/managing-resources/rules.md).

<!-- (To include when Pixel extension doc is published)
>[!NOTE]
>
>If you are trying to send events to [!DNL Meta] from the client side rather than from the server side, use the [[!DNL Meta Conversions API] tag extension](../../server/meta/overview.md) instead.
-->

## Prerequisites

In order to use the extension, you must access to event forwarding and have a valid [!DNL Facebook] account with access to [!DNL Ad Manager] and [!DNL Event Manager]. Specifically, you must copy the ID of an existing [[!DNL Meta Pixel]](https://www.facebook.com/business/help/952192354843755?id=1205376682832142) (or [create a new [!DNL Pixel]](https://www.facebook.com/business/help/952192354843755) instead) so the extension can be configured to your account.

## Install the extension

To install the [!DNL Meta Conversions API] extension, navigate to the Data Collection UI or Experience Platform UI and select **[!UICONTROL Event Forwarding]** from the left navigation. From here, select a property to add the extension to, or create a new property instead.

Once you have selected or created the desired property, select **[!UICONTROL Extensions]** in the left navigation, then select the **[!UICONTROL Catalog]** tab. Search for the [!UICONTROL Meta Conversions API] card, then select **[!UICONTROL Install]**.

![The [!UICONTROL Install] button being selected for the [!UICONTROL Meta Conversions API] extension in the Data Collection UI.](../../../images/extensions/server/meta/install.png)

In the configuration view that appears, you must provide the [!DNL Pixel] ID you copied earlier to link the extension to your account. You can paste the ID directly into the input, or you can use a data element instead.

You also need to provide an access token to use the [!DNL Conversions API] specifically. Refer to the [!DNL Conversions API] documentation on [generating an access token](https://developers.facebook.com/docs/marketing-api/conversions-api/get-started#access-token) for steps on how to obtain this value.

When finished, select **[!UICONTROL Save]**

![The [!DNL Pixel] ID provided as a data element in the extension configuration view.](../../../images/extensions/server/meta/configure.png)

The extension is installed and you can now employ its various actions in your tag rules.

## Configure an event forwarding rule {#rule}

<!-- [!DNL Meta Conversions API] accepts a set of predefined [standard events](https://www.facebook.com/business/help/402791146561655), each with their own contexts and accepted properties. The rule actions provided by the [!DNL Pixel] extension correlate to these event types, allowing you to easily categorize and configure the event being sent to [!DNL Meta] according to its type. -->

Start creating a new event forwarding rule and configure its conditions as desired. When selecting the actions for the rule, select **[!UICONTROL Meta Conversions API]** for the extension, then select **[!UICONTROL Send Conversions API Event]** for the action type.

![The [!UICONTROL Send Page View] action type being selected for a rule in the Data Collection UI.](../../../images/extensions/server/meta/select-action.png)

Controls appear that allow you to configure the event data that will be sent to [!DNL Meta] via the [!DNL Conversions API]. These options can be entered directly into the provided inputs, or you can select existing data elements to represent the values instead. The config options are divided into four main sections, as outlined below.

| Config section | Description |
| --- | --- |
| [!UICONTROL Server Event Parameters] | General information about the event, including the time it occurred and the source action that triggered it. Refer to the [[!DNL Conversions API] documentation](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/server-event) for more information on these parameters.<br><br>You also have the option to **[!UICONTROL Enable Limited Data Use]** to help comply with customer opt-outs. See the [!DNL Conversions API] documentation on [data processing options](https://developers.facebook.com/docs/marketing-apis/data-processing-options/) for details on this feature. |
| [!UICONTROL Customer Information Parameters] | User identity data that is used to attribute the event to a customer. Some of these values must be hashed before they can be sent to the API. Refer to the [[!DNL Conversions API] documentation](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/customer-information-parameters) for more information on these parameters. |
| [!UICONTROL Custom Data] | Additional data to be used for ads delivery optimization, provided in the form of a JSON object. Refer to the [[!DNL Conversions API] documentation](https://developers.facebook.com/docs/marketing-api/conversions-api/parameters/custom-data) for more information on the accepted properties for this object.<br><br>If you are sending a purchase event, you must use this section to provide the required attributes `currency` and `value`.  |
| [!UICONTROL Test Event] | This option is used to verify whether your configuration is causing server events to be received by [!DNL Meta] as expected. To use this feature, select the **[!UICONTROL Send as Test Event]** checkbox, and then provide a test event code of your choice in the input below. Once the event forwarding rule is deployed, if you configured the extension and action correctly you should seeing activities appearing within the **[!DNL Test Events]** view in [!DNL Meta Events Manager]. |

{style="table-layout:auto"}

When finished, select **[!UICONTROL Keep Changes]** to add the action to the rule configuration.

![[!UICONTROL Keep Changes] being selected for the action configuration.](../../../images/extensions/server/meta/keep-changes.png)

When you are satisfied with the rule, select **[!UICONTROL Save to Library]**. Finally, publish a new event forwarding [build](../../../ui/publishing/builds.md) to enable the changes made to the library.

## Next steps

This guide covered how to send server-side event data to [!DNL Meta] using the [!DNL Meta Conversions API] extension. For more information on tags and event forwarding, refer to the [tags overview](../../../home.md).
