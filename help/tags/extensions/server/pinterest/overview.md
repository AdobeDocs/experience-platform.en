---
keywords: event forwarding extension;pinterest;pinterest event forwarding extension
title: Pinterest event forwarding extension
description: This Adobe Experience Platform event forwarding extension allows you to ingest events into Pinterest for your business requirements.
last-substantial-update: 2023-04-27
---
# [!DNL Pinterest] event forwarding extension

[!DNL Pinterest] is a visual discovery engine for finding ideas such as recipes, home decor, style inspiration, and more. There are billions of pins on [!DNL Pinterest], which can also be shared with others on [!DNL Pinterest]. You can collate the user interaction events and leverage [!DNL Pinterest Analytics] to understand user behavior and run targeted advertisements.

The [[!DNL Pinterest] Conversions](https://developers.pinterest.com/docs/conversions/conversion-management/) API [event forwarding](../../../ui/event-forwarding/overview.md) extension allows you to leverage data captured in the Adobe Experience Platform Edge Network and send it to [!DNL Pinterest]. This document covers the use cases of the extension, how to install it, and how to integrate its capabilities into your event forwarding [rules](../../../ui/managing-resources/rules.md).

Conversions access tokens are the authentication method used by [!DNL Pinterest] when interacting with the [!DNL Pinterest] API.

## Use cases

This extension should be used if you want to use data from the Edge Network in [!DNL Pinterest] to take advantage of its customer analytics capabilities.

For example, consider a marketing team in an organization. The team captures user interaction event data from their website and loads it into [!DNL Pinterest] using this event forwarding extension.

The marketing and analytics teams can then leverage [!DNL Pinterest] Analytics capabilities to understand key user interactions and behavior, allowing you to better understand users and target them for targeted ad campaigns.

For more information on use cases specific to [!DNL Pinterest], refer to the [[!DNL Pinterest] use cases](https://business.pinterest.com/en/success-stories) documentation.

## [!DNL Pinterest] prerequisites {#prerequisites}

You must have a valid [!DNL Pinterest] [business account](https://help.pinterest.com/en/business/article/get-a-business-account) in order to use this extension. Go to the [[!DNL Pinterest] registration page](https://www.pinterest.com/business/create/) to register and create an account if you do not have one already.

You will also need a [!DNL Pinterest] developer account, which will need to be associated with your [!DNL Pinterest] business account. To associate your developer account with your business account, refer to the [[!DNL Pinterest ] developer account](https://developers.pinterest.com/account-setup/).

### Gather required configuration details {#configuration-details}

In order to connect the Experience Platform to [!DNL Pinterest], the following inputs are required:

| Credential | Description | Example |
| --- | --- | --- |
| Ads Account Id | Your [!DNL Pinterest] Ads Account Id. Refer to the [[!DNL Pinterest] documentation](https://help.pinterest.com/en/business/article/find-ids-in-ads-manager) for guidance. | 123456789012 |
| Conversion Access Token | Your [!DNL Pinterest] Conversion Access Token. Refer to the [[!DNL Pinterest] Conversions API](https://developers.pinterest.com/docs/conversions/conversions/#Get%20the%20conversion%20token) document for guidance. <br> **You will only be required to do this once as this token does not expire.** | {YOUR_PINTEREST_BEARER_TOKEN} |

## Install and configure the [!DNL Pinterest] extension {#install}

To install the extension, [create an event forwarding property](../../../ui/event-forwarding/overview.md#properties) or choose an existing property to edit instead.

In the left navigation, select **[!UICONTROL Extensions]**. Select **[!UICONTROL Install]** on the card for the [!DNL Pinterest] extension in the **[!UICONTROL Catalog]** tab. 

![Catalog displaying the [!DNL Pinterest] extension with [!UICONTROL Install] highlighted.](../../../images/extensions/server/pinterest/install.png)

### Configure the [!DNL Pinterest] extension

>[!IMPORTANT]
>
>Depending on your implementation needs, you may need to create a schema, data elements, and a dataset before configuring the extension. Please review all the configuration steps before starting in order to determine which entities you need to set up for your use case.

In the left navigation, select **[!UICONTROL Extensions]**. Select **[!UICONTROL Configure]** on the card for the [!DNL Pinterest] extension in the [!UICONTROL Installed]** tab.

![[!DNL Pinterest] extension shown in the [!UICONTROL Install] tab with [!UICONTROL Configure] highlighted.](../../../images/extensions/server/pinterest/configure.png)

On the next screen, input the [!UICONTROL Ads Account Id] and [!UICONTROL Conversion Access Token] that you previously gathered in the [configuration details](#configuration-details) section. When you're finished, select **[!UICONTROL Save]**.

![The [!DNL Pinterest] [!UICONTROL Configure] screen highlighting the [!UICONTROL Ads Account Id] and [!UICONTROL Conversion Access Token] input fields.](../../../images/extensions/server/pinterest/input.png)

## Configure an event forwarding rule {#config-rule}

Once all your data elements are set up, you can start creating event forwarding rules that determine when and how your events will be sent to [!DNL Pinterest].

Create a new [rule](../../../ui/managing-resources/rules.md) in your event forwarding property. Under **[!UICONTROL Actions]**, add a new action and set the extension to **[!UICONTROL Pinterest]**. To send Adobe Experience Edge Network events to [!DNL Pinterest], set the **[!UICONTROL Action Type]** to **[!UICONTROL Send Event].**

![The [!DNL Pinterest] [!UICONTROL Send Event] rule creation.](../../../images/extensions/server/pinterest/rule.png)

After selection, additional controls appear to further configure the event. You need to map the [!DNL Pinterest] event properties to the data elements that you previously created. 

### [!UICONTROL Event Data]

The following event data will be required to create the new rule:

| Field name | Description | Example | 
| --- | --- | --- | 
| [!UICONTROL Event Name] | The type of the user event. This can be any event type however, to leverage [!DNL Pinterest Analytics] it is recommended to use [[!DNL Pinterest] event codes](https://help.pinterest.com/en/business/article/add-event-codes) | * checkout <br> * add_to_cart <br> * page_visit <br> * signup <br> * [User-defined event] | 
| [!UICONTROL Action Source] | The source indicating where the conversion event occurred. | * app_android <br> * app_ios <br> * web <br> * offline | 
| [!UICONTROL Event Time] | This refers to the event time. The default time format used is UNIX, in the format `<seconds>.<miliseconds>` depending on your local timezone. For more information, refer to the [[!DNL Pinterest] API](https://developers.pinterest.com/docs/api/v5/#operation/events/create). | 1433188255.500 indicates 1433188255 seconds and 500 milliseconds after epoch, or Monday, June 1, 2015, at 7:50:55 PM GMT. |
| [!UICONTROL Event ID] | A unique id string that identifies this event and can be used for deduping between events ingested via both the conversion API and Pinterest tracking. Without this, the event's data is likely to be double counted and will report metric inflation. | ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad | 
| [!UICONTROL Event Properties] |  A JSON object containing custom properties of the event. Select from providing raw JSON or using a simplified set of key-value inputs. | { "event_source_url": "http://site.com" } | 

![The [!DNL Pinterest] [!UICONTROL Event Data] highlighted in the rule action.](../../../images/extensions/server/pinterest/event-data.png)

The following event properties can be configured:

| Field name | Description |
| --- | --- |
| Event Source URL | URL of the web conversion event. |
| Application Store ID | The app store app ID. |
| Application Name | The name of the application. |
| Application Version | The version of the application. |
| Device Brand | Brand of device being used by the user. |
| Device Carrier | User's mobile carrier for their device. |
| Device Model | Model of the user's device. |
| Device Type | Type of device being used by the user. |
| OS Version | Version of the device's operating system. |
| User Language | Two-character ISO-639-1 language code indicating the user's language. |

### [!UICONTROL User Data]

The following user data can be entered by are not required fields:

| Field name | Description | Example | 
| --- | --- | --- | 
| [!UICONTROL Email] | User email address or a SHA256 hash of the user address email. | ebd543592...f2b7e1 | 
| [!UICONTROL Mobile Adverstising IDs] | Sha256 hashes of user's "Google Advertising IDs" (GAIDs) or "Apple's Identifier for Advertisers" (IDFAs) | ebd543592...f2b7e1 |
| [!UICONTROL Client IP Address] | The user's IP address, which can be either in IPv4 or IPv6 format. Used for matching. | 192.168.0.1 |
| [!UICONTROL Client User Agent] | The user agent string of the user's web browser. | Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion |
| [!UICONTROL Customer information data] | A JSON object containing other customer information. Select from providing raw JSON or using a simplified set of key-value inputs. | { "ph": "122333445" } |

![The [!DNL Pinterest] [!UICONTROL User Data] highlighted in the rule action.](../../../images/extensions/server/pinterest/user-data.png)

The customer information properties that can be configured are:

| Field name | Description |
| --- | --- |
| Phone | User contact number. Only digits are accepted and should be entered with country code, area code, and number. |
| Gender | Gender can be entered as either "f" for female, "m" for male, or "n" for non-binary. |
| Date of Birth | Birth date, entered as year, month, and day. |
| Last Name | User's last name. |
| First Name | User's first name. |
| City | User's residency city. This is mostly used for billing purposes. |
| State | User's state, which is provided as a two-letter code in lowercase. |
| Zip Code | User's zipcode, which is mostly used for billing purposes. |
| Country | Two-character ISO-3166 country code indicating the user's country. |
| External ID | Unique id from the advertiser that identifies a user in their space. For example, user id, loyalty id, and so on. |
| Click ID | The unique identifier stored in _epik cookie on your domain or &epik= query parameter in the URL. |

>[!IMPORTANT]
>
>Before sending the data to the [!DNL Pinterest] API endpoint, the extension will hash and normalize the values of the following fields: Email, Phone Number, First Name, Last Name, Gender, Date of Birth, City, State, Zip Code, Country, and External ID. The extension will not hash the value of these fields if a SHA256 string is already present.

### [!UICONTROL Custom Data]

The following custom data can be entered for the rule:

| Field name | Description |
| --- | --- |
| Currency | The ISO-4217 currency code. If this is not provided, [!DNL Pinterest] will default to the advertiser's currency that was set during account creation. |
| Value | Total value of the event. Accepted as a string in the request. This will be parsed into a double digit. |
| Search String | The search string related to the user conversion event. |
| Order ID | The order ID. Sending `order_id` will help [!DNL Pinterest] deduplicate events when necessary. |
| Number of Products | Total number of products of the event. For example, the total number of items purchased in a checkout event. |
| Content IDs | List (array) of products IDs. |
| Contents | A list (array) of objects containing information about products, such as price and quantity. |

![The [!DNL Pinterest] [!UICONTROL Custom Data] highlighted in the rule action.](../../../images/extensions/server/pinterest/custom-data.png)

## Validate data within [!DNL Pinterest]

Once the event forwarding rule has been created and executed, validate whether the event that was sent to the [!DNL Pinterest] API is displayed as expected in the [!DNL Pinterest] UI.

If the event collection and [!DNL Experience Platform] integration were successful, you will see events within the [!DNL Pinterest] UI. 

![The [!DNL Pinterest] event manager](../../../images/extensions/server/pinterest/event-history.png)

You can further drill through and view the [!DNL Pinterest] event data distribution.

![The [!DNL Pinterest] data distribution](../../../images/extensions/server/pinterest/event-history-distribution.png)

## Next steps

This guide covered how to install and configure the [!DNL Pinterest] event forwarding extension in the UI. For more information, refer to the official documentation: 

* [[!DNL Pinterest] API](https://developers.pinterest.com/docs/api/v5/)
* [[!DNL Pinterest] Conversions API Overview](https://help.pinterest.com/en/business/article/the-pinterest-api-for-conversions)
