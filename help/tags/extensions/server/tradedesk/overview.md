---
title: The Trade Desk Real-Time Conversions API Extension Overview
description: Learn about The Trade Desk Real-Time Conversions API extension for event forwarding in Adobe Experience Platform.
exl-id: 1ff32e2b-9ff8-4395-ae44-cba75a2da515
TQID: https://experienceleague.adobe.com/WxVVcBWiq0p7LaTNM-GCo6Au2SIcoIisNyKt9qyXQqk
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
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
subfeature_v2:
  - id: b572b7ff-a413-4173-b2b4-d7d3874f1b9b
    internal-label: Best practices
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# [!DNL The Trade Desk Real-Time Conversions API] extension overview

You can use the [[!DNL The Trade Desk Real-Time Conversions API]](https://partner.thetradedesk.com/v3/portal/data/doc/DataConversionEventsApi) extension to send data from the Adobe Experience Platform Edge Network to [!DNL The Trade Desk] by utilizing the API's capabilities in your [event forwarding](../../../ui/event-forwarding/overview.md) rules. 

Using [!DNL The Trade Desk Real-Time Conversions API] extension, you can leverage the API's capabilities in your [event forwarding](../../../ui/event-forwarding/overview.md) rules to send data to [!DNL The Trade Desk] from the Adobe Experience Platform Edge Network. 

Read this document to learn how to install the extension and use its capabilities in an event forwarding [rule](../../../ui/managing-resources/rules.md).

>[!NOTE]
>
>This extension and documentation page are maintained by [!DNL The Trade Desk] team. For any inquiries or update requests, please contact them directly.

## Prerequisites {#prerequisites}

You must have a relevant Advertiser ID, UPixel ID, and Tracker ID are required from within your [!DNL The Trade Desk] account in order to configure the [[!DNL The Trade Desk Real-Time Conversions API]](https://partner.thetradedesk.com/v3/portal/data/doc/DataConversionEventsApi).

>[!INFO]
>
>If you are a merchant, you will also need to obtain your Merchant ID.

## Install and configure the [!DNL The Trade Desk] Real-Time Conversions API {#install}

To install the extension, [create an event forwarding property](../../../ui/event-forwarding/overview.md#properties) or select an existing property to edit instead.

Select **[!UICONTROL Extensions]** in the left navigation. In the **[!UICONTROL Catalog]** tab, select the **[!UICONTROL The Trade Desk]** Real-Time Conversions API card, then select **[!UICONTROL Install]**.

![The extension catalog showing the [!DNL The Trade Desk] extension card highlighting install.](../../../images/extensions/server/tradedesk/install-extension.png)

On the next screen, enter the [!UICONTROL Advertiser ID], and optionally a [!UICONTROL Merchant ID]. You can paste the ID's directly into these inputs, or you can use a data element instead. These will serve as the default values used when making an event call to [!DNL The Trade Desk] Real-Time Conversions API. Select **[!UICONTROL Save]** when finished.

To learn how you can create data elements and make them available to extensions in your tag property, follow the [Create data elements](https://experienceleague.adobe.com/en/docs/platform-learn/data-collection/tags/create-data-elements) tutorial.

![The [!DNL The Trade Desk] extension configuration page with the [!UICONTROL Advertiser ID] and [!UICONTROL Merchant ID] fields highlighted.](../../../images/extensions/server/tradedesk/configure-extension.png)

The extension is installed and you can now employ its capabilities in your event forwarding rules.

## Configure an event forwarding rule {#rule}

Once you have installed and configured the extension, you can start creating event forwarding rules that determine how and when you events will be sent to [!DNL The Trade Desk].

You should consider configuring several rules in order to send all accepted [request properties](https://partner.thetradedesk.com/v3/portal/data/doc/DataConversionEventsApi#properties) via [!DNL The Trade Desk] and [!DNL The Trade Desk] Real-Time Conversions API.

>[!NOTE]
>
>Events should be sent out in real-time or as close to real-time as possible.

Create a new event forwarding [rule](../../../ui/managing-resources/rules.md) in your event forwarding property. Under **[!UICONTROL Actions]**, add a new action and set the extension to **[!UICONTROL The Trade Desk]**. Next, select **[!UICONTROL Real Time Conversion]** for the **[!UICONTROL Action Type]**.

![The Event Forwarding Property Rules view, with the fields required to add an event forwarding rule action configuration highlighted.](../../../images/extensions/server/tradedesk/tradedesk-event-action.png)

After selection, additional controls appear to further configure the event data that will be sent to [!DNL The Trade Desk]. Select **[!UICONTROL Keep Changes]** to save the rule.

The configuration options are divided into three main sections as outlined below:

**[!UICONTROL Basic Request Properties]**

| Input | Description |
| --- | --- |
| Tracker ID | The platform ID of the event tracker. |
| UPixel ID | The universal pixel ID for the event. |
| Referrer URL | The website URL from where the event occurred, if any. |
| Event Name | The type of event defined by the partner platform. |
| Value | The revenue-tracking value in decimal string (for example, "19.98"). |
| Currency | Currency code in ISO format. |
| Client IP |  The client IPv4 or IPv6 IP address. |
| Ad ID | The unique advertising ID for the event. |
| Ad ID Type | The type of the advertising ID, specified in the AD ID property: TDID, IDFA, AAID, DAID, NAID, IDL, EUID, or UID2. |
| Impression | A 36-character string (including dashes) that serves as the unique ID for the impression to which the event is attributed. |
| Order ID | The associated order identifier of the event. |
| td1-td10 | Ten sequentially numbered custom dynamic properties that can be used to provide additional conversion metadata. |

{style="table-layout:auto"}

![The [!DNL Basic Request Properties] section showing example data input into the fields.](../../../images/extensions/server/tradedesk/configure-extension-basic-request-properties.png)

Refer to the [!DNL The Trade Desk] developer documentation for more information on the [request properties](https://partner.thetradedesk.com/v3/portal/data/doc/DataConversionEventsApi#properties) accepted by [!DNL The Trade Desk] Real-Time Conversions API. 

**[!UICONTROL Object Request Parameters]**

A JSON object containing more information. You have the option to use a reduced set of key-value inputs or to supply raw JSON. Additionally, you can retrieve dynamic data from a data element by selecting the disks (![Disk Icon](/help/images/icons/database.png)) on the right.


![The [!DNL Object Request Parameters] section showing available fields.](../../../images/extensions/server/tradedesk/configure-object-request-params.png)

Refer to the [Real-Time Conversions Event](https://partner.thetradedesk.com/v3/portal/data/doc/DataConversionEventsApi#properties-items) documentation for more information on the [!UICONTROL Object Request Parameters] and their properties.

**[!UICONTROL Configuration Overrides]**

>[!NOTE]
>
>The [!UICONTROL Configuration Overrides] fields allow you to set a different [!DNL Advertiser ID] and/or [!DNL Merchant ID] on every rule.

| Input | Description |
| --- | --- |
| Advertiser ID | Unique identifier for the advertiser which this event is associated. A different Advertiser ID can be provided to override the ID you supplied in the extension configuration. |
| Merchant ID | The unique identifier that each merchant is given by [!DNL The Trade Desk] throughout the onboarding procedure. A different Merchant ID can be provided to override the ID you supplied in the extension configuration. |

![The [!DNL Configuration Overrides] section showing available fields.](../../../images/extensions/server/tradedesk/configure-overrides.png)

When you are satisfied with the rule, select **[!UICONTROL Save to Library]**. Finally, publish a new event forwarding [build](../../../ui/publishing/builds.md) to enable the changes made to the library.

## Next steps

This guide covered how to send server-side event data to [!DNL The Trade Desk] using the [!DNL The Trade Desk] Real-Time Conversions API extension. From here, it is recommended to expand your integration by creating distinct rules that send specific conversion events as applicable per campaign. For more information on event forwarding capabilities in [!DNL Adobe Experience Platform], read the [event forwarding overview](../../../ui/event-forwarding/overview.md).

See the [!DNL The Trade Desk] documentation on [best practices for the [!DNL The Trade Desk] Real-Time Conversions API](https://partner.thetradedesk.com/v3/portal/data/doc/DataConversionEventsApi) for more guidance on how to effectively implement your integration. 

For details on how to debug your implementation using the Experience Platform Debugger and Event Forwarding Monitoring tool, read the [Adobe Experience Platform Debugger overview](../../../../debugger/home.md) and [Monitor activities in event forwarding](../../../ui/event-forwarding/monitoring.md).
