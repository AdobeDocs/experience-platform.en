---
keywords: event forwarding extension;twitter;twitter event forwarding extension
title: Twitter event forwarding extension
description: This Adobe Experience Platform event forwarding extension sends Adobe Experience Edge Network events to Twitter.
---
# [!DNL Twitter] event forwarding extension

[[!DNL Twitter]](https://www.twitter.com) is an online social media and social networking service, on which users post and interact with 280-character-long messages known as tweets. Users can interact with Twitter using a browser, mobile frontend software, or programmatically through its [APIs](https://developer.twitter.com/en/docs/twitter-api)

The [!DNL Twitter Web Conversions] API [event forwarding](../../../ui/event-forwarding/overview.md) extension allows you to leverage data captured in the Adobe Experience Platform Edge Network and send it to [!DNL Twitter]. This document covers the use cases of the extension, how to install it, and how to integrate its capabilities in your event forwarding [rules](../../../ui/managing-resources/rules.md).

[!DNL Twitter] requires [OAuth 1.0](https://developer.twitter.com/en/docs/authentication/oauth-1-0a) for authentication with the [!DNL Twitter] [!DNL Web Conversions] API.

## Use cases

This extension should be used if you want to use data from the Edge Network in [!DNL Twitter] to take advantage of its customer analytics and targeting capabilities.

For example, consider a marketing team in an organization. The team captures user interaction event data from their website as event data from their website and loads it into [!DNL Twitter] using this event forwarding extension.

The marketing and analytics teams can then leverage [!DNL Twitter's] capabilities to perform additional analysis and target these users to run targeted advertisement campaigns.

For more information on use cases specific to [!DNL Twitter], refer to the [[!DNL Twitter] use cases](https://www.braze.com/customers) documentation.

## [!DNL Twitter] prerequisites and guardrails {#prerequisites}

The Twitter event forwarding extension requires a [!DNL Twitter] account. If you don't have one, you can create one by following the sign-up steps here.

You will also need a [!DNL Twitter] developer account. If you haven't signed up as a developer, you can do so by following the tutorial here.

### Gather required configuration details {#configuration-details}

Credential    Description
Consumer Key ​    The API Key for your app to access the [!DNL Twitter] API. Refer to the [!DNL Twitter] documentation for how to obtain one.
Consumer Secret    The API Secret for your app to access the [!DNL Twitter] API. Refer to the [!DNL Twitter] documentation for how to obtain one.
Token Secret    The non-expiring token secret of your app which is used for authenticating to the [!DNL Twitter] API via OAuth. Refer to the [!DNL Twitter] documentation for how to obtain one.
Access Token    The non-expiring access token of your app which is used for authenticating to the [!DNL Twitter] API via OAuth. Refer to the [!DNL Twitter] documentation for how to obtain one.
Pixel Id    The [!DNL Twitter Pixel], which is a website tag that is implemented on your website to track site actions or conversions. Refer to the [!DNL Twitter] documentation to obtain one.

## Install and configure the [!DNL Twitter] extension {#install}

If the [!DNL Twitter] extension is not yet installed, Create an event forwarding property or choose an existing property to edit instead.

Navigate to [!UICONTROL Extensions] > [!UICONTROL Catalog], search for Twitter, then select [!UICONTROL Install] on the [!DNL Twitter] Extension. Platform UI screenshot example for installing the [!DNL Twitter] extension.

Configure the [!DNL Twitter] extension
>[!IMPORTANT]
>
>Depending on your implementation needs, you may need to create a schema, data elements, and a dataset before configuring the extension. Please review all the configuration steps before starting in order to determine which entities you need to set up for your use case.

Navigate to [!UICONTROL Extensions] > [!UICONTROL Installed] tab, search for Twitter, and then select [!UICONTROL Configure] on the [!DNL Twitter] Extension. Platform UI screenshot example for configuring the [!DNL Twitter] extension.

Next, input the [!UICONTROL Consumer Key], [!UICONTROL Consumer Secret], [!UICONTROL Token Secret], [!UICONTROL Access Token] and [!UICONTROL Pixel Id] values with the details gathered in the configuration details section, Finally select [!UICONTROL Save]. Platform UI screenshot example for the [!DNL Twitter] extension input.

## Configure an event forwarding rule {#config-rule}

Create a new event forwarding Rule. Platform UI screenshot example to add an event forwarding rule.

Next, define the [!UICONTROL Action Configuration], select the [!UICONTROL Action Type] as [!UICONTROL conversion event] to send Adobe Experience Edge Network events to [!DNL Twitter]. After selection, additional controls appear to further configure the Event. Platform UI screenshot example to add an event forwarding rule action configuration.

The next step is to map the [!DNL Twitter] event properties to data elements that you have previously created. Refer to the [!DNL Twitter] Web Conversions API for more details. Navigate to the [!UICONTROL Main fields] tab below: | Field name | Description | Example | | --- | --- | --- | | [!UICONTROL Event Id] | The base-36 ID of a specific event. It should match with a pre-configured event contained within your [!DNL Twitter] Ad account. This is called ID in the corresponding event in Events Manager. | o87ne or tw-o8z6j-o87ne (tw-pixel_id-event-id) | | [!UICONTROL Email] | Email is used as the identifier to match the conversion event. | | | [!UICONTROL Phone No] | Phone No is optional, it is also used as the identifier to match the conversion event. The phone number must be in E164 format [+][country code][area code][local phone number] before hashing. It's required if no other identifier is added. | +911234567875 |

Within [!UICONTROL Action Configuration] you can send [!UICONTROL Custom Data]. Platform UI screenshot example to send custom data with action configuration.

Finally, within [!UICONTROL Action Configuration] you can also send [!UICONTROL Content Data]. Platform UI screenshot example to send content data with action configuration.

### Validate data within [!DNL Twitter]

After creating and executing the event forwarding rule, validate whether the event sent to the [!DNL Twitter] API is displayed as expected in the [!DNL Twitter] UI.

If the event collection and [!DNL Experience Platform] integration were successful, you will see events within the [!DNL Twitter] [!UICONTROL Events manager] as below: [!DNL Twitter] Event manager screenshot example.

## Next steps

This guide covered how to send conversion events to [!DNL Twitter] using event forwarding. For more information on these underlying technologies, refer to the official documentation:

* [[!DNL Twitter APIs]](https://developer.twitter.com/en/docs/twitter-api) 
* [[!DNL Twitter Web conversion API]](https://developer.twitter.com/en/docs/twitter-ads-api/measurement/api-reference/conversions)
* [[!DNL Twitter User Access Token]](https://developer.twitter.com/en/docs/authentication/oauth-1-0a/obtaining-user-access-tokens) 
* [Pixel ID and conversion tracking](https://business.twitter.com/en/help/campaign-measurement-and-analytics/conversion-tracking-for-websites.html)
