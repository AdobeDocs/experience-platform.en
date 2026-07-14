---
title: Adobe TikTok web events API extension Integration
description: This Adobe Experience Platform web events API allows you to share website interactions directly with TikTok.
last-substantial-update: 2023-09-26T00:00:00.000Z
exl-id: 14b8e498-8ed5-4330-b1fa-43fd1687c201
TQID: https://experienceleague.adobe.com/X5swX7MnFvVXFQ8AYGKWZpSOAZppvknnXPldZMOs83c
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: adee20bd-51f4-461d-b9db-d215f8756eeb
    internal-label: Audiences
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
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
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
    internal-label: Optimization
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# [!DNL TikTok] web events API extension overview

The [!DNL TikTok] events API is a secure [Edge Network API](https://developer.adobe.com/data-collection-apis/docs/) interface that allows you to share information with [!DNL TikTok] directly about user actions on your websites. You can leverage the event forwarding rules to send data from the [!DNL Adobe Experience Platform Edge Network] to [!DNL TikTok] by using the [!DNL TikTok] Web Events API extension.

## [!DNL TikTok] prerequisites {#prerequisites}

To configure the [!DNL TikTok] web events API to use the [!DNL TikTok] events API, you need to generate a [!DNL TikTok] pixel code and access token. 

You must have a valid [!DNL TikTok] for business account in order to create a [!DNL TikTok] pixel using the partner setup. Go to the [[!DNL TikTok] for business registration page](https://www.tiktok.com/business/en-US/solutions/business-account) to register and create an account if you do not have one already.

You must be logged into your business account to set up [!DNL TikTok] Pixel using partner setup. To do this, follow the steps below:

1. Navigate to the **[!UICONTROL Assets]** tab and select **[!UICONTROL Event]**.
2. Under Web Events, select **[!UICONTROL Manage]**.
3. Select **[!UICONTROL Set Up Web Events]**.
4. Select **[!UICONTROL Partner Setup]** as your connection method.

See the [Get Started with Pixel](https://ads.tiktok.com/help/article/get-started-pixel) guide for more information on how to setup the [!DNL TikTok] pixel.

You can generate an access token once the pixel has been successfully created. To do this navigate to the Pixel and select the **[!UICONTROL Settings]** tab. Under Events API, select **[!UICONTROL Generate Access Token]**.

See the [[!DNL TikTok] getting started guide](https://business-api.tiktok.com/portal/docs?id=1739584855420929) for more information on how to setup the pixel code and access token.

## Install and configure the [!DNL TikTok] web events API extension {#install}

To install the extension, select **[!UICONTROL Extensions]** in the left navigation. In the **[!UICONTROL Catalog]** tab, select the **[!UICONTROL TikTok Web Events API Extension]** and then select **[!UICONTROL Install]**.

![The extension catalog showing the [!DNL TikTok] extension card highlighting install.](../../../images/extensions/server/tiktok/install-extension.png)

On the next screen, input the following configuration values that you previously generated from [!DNL TikTok] Ads Manager:

* **[!UICONTROL Pixel Code]**
* **[!UICONTROL Access Token]**

When finished, select **[!UICONTROL Save]**.

![[!DNL TikTok] configuration screen for the [!DNL TikTok] web events API extension.](../../../images/extensions/server/tiktok/configure.png)

## Configure an event forwarding rule {#config-rule}

Once all your data elements are set up, you can start creating event forwarding rules that determine when and how your events will be sent to [!DNL TikTok].

Create a new [rule](../../../ui/managing-resources/rules.md) in your event forwarding property. Under **[!UICONTROL Actions]**, add a new action and set the extension to **[!UICONTROL TikTok Web Events API Extension]**. To send Edge Network events to [!DNL TikTok], set the **[!UICONTROL Action Type]** to **[!UICONTROL Send TikTok Web Events API Event].**

![The [!UICONTROL Send TikTok Web Events API Event] action type being selected for a [!DNL TikTok] rule in the Data Collection UI.](../../../images/extensions/server/tiktok/select-action.png)

After selection, additional controls appear to further configure the event, as outlined below. Once complete, select **[!UICONTROL Keep Changes]** to save the rule.

**[!UICONTROL Web Events and Parameters]**

Web events and parameters contain general information about the event. Standard events are supported across [!DNL TikTok] integration tools and can be used for reporting , optimizing for conversions, and building audiences.

| Input | Description |
| --- | --- |
| Event Name | The name of the event. These are actions with predefined names created by [!DNL TikTok] and is a required field. Refer to the [[!DNL TikTok] Marketing API](https://business-api.tiktok.com/portal/docs?id=1741601162187777) documentation for more information on supported events. |
| Event Time | Date-time as string in ISO 8601 or in `yyyy-MM-dd'T'HH:mm:ss:SSSZ` format. This is a required field. |
| Event ID | The unique ID generated by advertisers to indicate each event. This is an optional field and is used for deduplication. |

{style="table-layout:auto"}

![The [!DNL Web Events and Parameters] section showing example data input into the fields.](../../../images/extensions/server/tiktok/configure-web-events-parameters.png)

**[!UICONTROL User Context Parameters]**

User context parameters contain customer information that is used to match web visitor events with [!DNL TikTok] users. Including multiple types of matching data allows you to increase the accuracy of targeting and optimization models.

| Input | Description |
| --- | --- |
| IP Address | Non-hashed public IP address of the browser. Support is provided for IPv4 and IPv6 addresses. Both the full and compressed forms of IPv6 addresses are recognized. |
| User Agent | The non-hashed user agent from the user's device. |
| Email | Email address of the contact associated with the conversion event. |
| Phone | The phone number must be in E164 format `[+][country code][area code][local phone number]` before hashing. |
| Cookie ID | If you are using Pixel SDK will automatically save a unique identifier in the `_ttp` cookie, if cookies are enabled. The `_ttp` value can  extracted and used for this field. |
| External ID | Any unique identifier such as user IDs, external cookie IDs and so on and must be hashed with SHA256. |
| TikTok Click ID | The `ttclid` which is added to the URL of the landing page each time an advertisement is selected on [!DNL TikTok]. |
| Page URL | The page URL at the time of the event. |
| Page Referrer URL | The URL of the page referrer. |

{style="table-layout:auto"}

![The [!DNL User Context Parameters] section showing example data input into the fields.](../../../images/extensions/server/tiktok/configure-user-context-parameters.png)

**[!UICONTROL Properties Parameters]**

Use the properties parameters to configure additional supported properties.

| Input | Description |
| --- | --- |
| Price | The cost of a single item.  |
| Quantity | The number of items being purchased in the event. This must be a positive number greater than 0. |
| Content Type | A value of either `product` or `product_group` must be assigned to the content_type object property, depending on how you will configure your data feed when you set up your product catalog. |
| Content ID | A unique identifier of the product item. |
| Content Category | Category of the page/product. |
| Content Name | Name of the page/product. |
| Currency | The currency of the items being purchased in the event. This is expressed in ISO-4217. |
| Value | The total price of the order. This value will be equal to the price * quantity. |
| Description | A description of the item or page. |
| Query | The string of text that was used to lookup a product. |
| Status | The status of an order, item, or service. For example, "submitted". |

{style="table-layout:auto"}

![The [!DNL Properties Parameters] section showing example data input into the fields.](../../../images/extensions/server/tiktok/configure-properties-parameters.png)

## Event deduplication {#deduplication}

[!DNL TikTok] pixel will need to be setup for deduplication if you use both the [!DNL TikTok] pixel SDK and the [!DNL TikTok] web events API extension to send the same events to [!DNL TikTok]. 

Deduplication is not required if distinct event types are being sent from the client and server without any overlap. To ensure that your reporting is not negatively impacted, you must make sure that any single event that is shared by the [!DNL TikTok] pixel SDK and the [!DNL TikTok] web events API extension is deduplicated.

When sending shared events, make sure that every event includes a pixel ID, event ID and name. Duplicated events that arrive within five minutes of each other will be merged. If the data field was absent from the first event, it will be combined with the subsequent event. Any duplicate events received within 48 hours will be removed.

See the [!DNL TikTok] documentation on [Event Deduplication](https://ads.tiktok.com/help/article/event-deduplication) for more details on this process.

## Next steps

This guide covered how to send server-side event data to [!DNL TikTok] using the [!DNL TikTok] web events API extension. For more information on event forwarding capabilities in [!DNL Adobe Experience Platform], refer to the [event forwarding overview](../../../ui/event-forwarding/overview.md).
