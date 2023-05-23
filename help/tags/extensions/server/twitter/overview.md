---
keywords: event forwarding extension;twitter;twitter event forwarding extension
title: Twitter event forwarding extension
description: This Adobe Experience Platform event forwarding extension allows you to ingest events into Twitter for your business requirements.
---
# [!DNL Twitter] event forwarding extension

[[!DNL Twitter]](https://www.twitter.com) is an online social media and social networking service, on which users post and interact with 280-character-long messages known as tweets. Users can interact with Twitter using a browser, mobile frontend software, or programmatically through its [APIs](https://developer.twitter.com/en/docs/twitter-api)

The [!DNL Twitter] Web Conversions API [event forwarding](../../../ui/event-forwarding/overview.md) extension allows you to leverage data captured in the Adobe Experience Platform Edge Network and send it to [!DNL Twitter]. This document covers the use cases of the extension, how to install it, and how to integrate its capabilities into your event forwarding [rules](../../../ui/managing-resources/rules.md).

[!DNL Twitter] requires [OAuth 1.0](https://developer.twitter.com/en/docs/authentication/oauth-1-0a) for authentication with the [!DNL Twitter] [!DNL Web Conversions] API.

## Use cases

This extension should be used if you want to use data from the Edge Network in [!DNL Twitter] to take advantage of its customer analytics and targeting capabilities.

For example, consider a marketing team in an organization. The team captures user interaction event data from their website as event data from their website and loads it into [!DNL Twitter] using this event forwarding extension.

The marketing and analytics teams can then leverage [!DNL Twitter's] capabilities to perform additional analysis and target these users for targeted advertisement campaigns.

For more information on use cases specific to [!DNL Twitter], refer to the [[!DNL Twitter] use cases](https://developer.twitter.com/en/use-cases/build-for-businesses) documentation.

## [!DNL Twitter] prerequisites and guardrails {#prerequisites}

You must have a valid [!DNL Twitter] account in order to use this extension. Go to the [[!DNL Twitter] registration page](https://help.twitter.com/en/using-twitter/create-twitter-account) to register and create an account if you do not have one already.

You must set up your account as a [!DNL Twitter] developer account. To find out how to sign up as a developer, refer to the [[!DNL Twitter] developer account](https://developer.twitter.com/en/support/twitter-api/developer-account).

### API guardrails {#guardrails}

The [!DNL Twitter] Web Conversions API has a rate limit of 60,000 requests per 15 minute interval, where each request allows 500 events.

### Gather required configuration details {#configuration-details}

In order to connect the Experience Platform to [!DNL Twitter], the following inputs are required:

| Key Type | Description |
| --- | --- |
| Consumer Key |​ The app's API Key for accessing the [!DNL Twitter] API. Refer to the [!DNL Twitter] documentation on [api keys and secrets](https://developer.twitter.com/en/docs/authentication/oauth-1-0a/api-key-and-secret) for guidance. | |
| Consumer Secret | The API Secret allows your app to access the [!DNL Twitter] API. Refer to the [!DNL Twitter] documentation on [api keys and secrets](https://developer.twitter.com/en/docs/authentication/oauth-1-0a/api-key-and-secret) for guidance. |
| Token Secret | The non-expiring token secret of your app, which is used for authenticating to the [!DNL Twitter] API via OAuth. Refer to the [!DNL Twitter] documentation on [obtaining use access tokens](https://developer.twitter.com/en/docs/authentication/oauth-1-0a/obtaining-user-access-tokens) for guidance. |
| Access Token | The non-expiring access token of your app, which is used for authenticating to the [!DNL Twitter] API via OAuth. Refer to the [!DNL Twitter] documentation on [obtaining use access tokens](https://developer.twitter.com/en/docs/authentication/oauth-1-0a/obtaining-user-access-tokens) for guidance. |
| Pixel Id | The [!DNL Twitter] Pixel is a website tag that is implemented on your website to track site actions or conversions. Refer to the [!DNL Twitter] documentation on [conversion tracking for websites](https://business.twitter.com/en/help/campaign-measurement-and-analytics/conversion-tracking-for-websites.html) for guidance. |

## Install and configure the [!DNL Twitter] extension {#install}

To install the extension, [create an event forwarding property](../../../ui/event-forwarding/overview.md#properties) or choose an existing property to edit instead.

Select **[!UICONTROL Extensions]** in the left navigation. In the **[!UICONTROL Catalog]** tab, select **[!UICONTROL Install]** on the card for the [!DNL Twitter] extension.

![Catalog showing the [!DNL Twitter] extension highlighting install.](../../../images/extensions/server/twitter/install.png)

>[!IMPORTANT]
>
>Depending on your implementation needs, you may need to create a schema, data elements, and a dataset before configuring the extension. Please review all the configuration steps before starting in order to determine which entities you need to set up for your use case.

On the next screen, input the following [configuration values](#configuration-details) that you previously gathered from [!DNL Twitter]:

* **[!UICONTROL Pixel Id]**
* **[!UICONTROL Consumer Key]**
* **[!UICONTROL Consumer Secret]**
* **[!UICONTROL Token]**
* **[!UICONTROL Token Secret]**

When finished, select **[!UICONTROL Save]**.

![[!DNL Twitter] configuration screen for the [!DNL Twitter] extension.](../../../images/extensions/server/twitter/configure.png)

## Configure an event forwarding rule {#config-rule}

Once all your data elements are set up, you can start creating event forwarding rules that determine when and how your events will be sent to [!DNL Twitter].

Create a new [rule](../../../ui/managing-resources/rules.md) in your event forwarding property. Under **[!UICONTROL Actions]**, add a new action and set the extension to **[!UICONTROL Twitter]**. To send Adobe Experience Edge Network events to [!DNL Twitter], set the **[!UICONTROL Action Type]** to **[!UICONTROL Send Web Conversion].**

After selection, additional controls appear to further configure the event. You need to map the [!DNL Twitter] event properties to the data elements that you previously created. For more information, refer to the [[!DNL Twitter] Web Conversions API](https://developer.twitter.com/en/docs/twitter-ads-api/measurement/api-reference/conversions).

![The [!DNL Twitter] creating a conversion event rule.](../../../images/extensions/server/twitter/action-configuration.png)

**[!UICONTROL User Identification]**

| Field name | Description | Example | Required |
| --- | --- | --- | --- |
| [!UICONTROL [!DNL Twitter] Click ID] | [!DNL Twitter] Click ID as parsed from the click-through URL. | 26l6412g5p4iyj65a2oic2ayg2 | Required if no other identifier is added. |
| [!UICONTROL Email] | An email address hashed with SHA256. The text must be lowercase and any trailing or leading spaces must be removed before hashing. | eventforwarding@example.com | Required if no other identifier is added. |
| [!UICONTROL Phone] | Phone serves as an identifier to match the conversion event. The phone number must be in E164 format [+][country code][area code][local phone number] before hashing. | +911234567875 | Required if no other identifier is added. |

**[!UICONTROL Conversion Data]**

| Field name | Description | Example | Required | 
| --- | --- | --- | --- |
| [!UICONTROL Conversion Time] | Date-time as string in ISO 8601 or in yyyy-MM-dd'T'HH:mm:ss:SSSZ format. | 2022-02-18T01:14:00.603Z | Yes |
| [!UICONTROL Event Id] | The base-36 ID of a specific event. This Id should match a pre-configured event contained within your [!DNL Twitter] ad account. This is known as the ID for the corresponding event in Events Manager. | o87ne or tw-o8z6j-o87ne (tw-pixel_id-event-id) | Yes |
| [!UICONTROL Number of Items] | The number of items being purchased in the event. This must be a positive number greater than 0. | 4 | No |
| [!UICONTROL Currency] | The currency of the items being purchased in the event. This is expressed in ISO-4217 and if not provided, the default will be USD. | USD | No |
| [!UICONTROL Value] | The price value of items being purchased in the event. | 100.00 | No |
| [!UICONTROL Conversion ID] | An identifier for a conversion event that can be used for de-duplication between Web Pixel and Conversion API conversions in the same event tag. | 23294827 | No |
| [!UICONTROL Description] | A description with any additional information on the conversions. | Test conversion | No |

## Validate data within [!DNL Twitter]

Once the event forwarding rule has been created and executed, validate whether the event that was sent to the [!DNL Twitter] API is displayed as expected in the [!DNL Twitter] UI.

If the event collection and [!DNL Experience Platform] integration were successful, you will see events within the [!DNL Twitter] [!UICONTROL Events manager].

![The [!DNL Twitter] event manager](../../../images/extensions/server/twitter/event-manager.png)

## Next steps

This guide covered how to send conversion events to [!DNL Twitter] using event forwarding. For more information on these underlying technologies, refer to the official documentation:

* [[!DNL Twitter] APIs](https://developer.twitter.com/en/docs/twitter-api) 
* [[!DNL Twitter] Web conversion API](https://developer.twitter.com/en/docs/twitter-ads-api/measurement/api-reference/conversions)
* [[!DNL Twitter] User Access Token](https://developer.twitter.com/en/docs/authentication/oauth-1-0a/obtaining-user-access-tokens) 
* [Pixel ID and conversion tracking](https://business.twitter.com/en/help/campaign-measurement-and-analytics/conversion-tracking-for-websites.html)
