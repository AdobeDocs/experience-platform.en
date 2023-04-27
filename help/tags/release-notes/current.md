---
title: Release Notes for Tags and Event Forwarding
description: The latest release notes for tags and event forwarding in Adobe Experience Platform.
exl-id: 2ebeaa1e-64b8-48fd-b4e8-419663271a87
---
# Release notes for tags and event forwarding

## April 26, 2023

* **User Attribution**: User activity for Tags and Event Forwarding are now tracked and visible in the Rules and Publishing screens.

* **OAuth JWT Secret**: The OAuth JWT Secret allows customers to use Adobe and Google Service tokens to support server-server interactions in Event Forwarding.

The following new extension has been released:

* **[!DNL Pinterest Conversions API] extension**: The [[!DNL Pinterest Conversions API]](https://experienceleague.adobe.com/docs/experience-platform/tags/extensions/server/pinterest/overview.html) event forwarding extension allows you to leverage data captured in Adobe Experience Platform Edge Network and send it to [!DNL Pinterest] in the form of server-side events using the [!DNL Pinterest Conversions API].

## March 29, 2023

**Quick Stark Workflows (Beta)**

Access new quick start workflows under "Getting Started" from the Data Collection home screen! The following workflows are now available to customers as a public Beta.
* **[Meta Conversions API](https://experienceleague.adobe.com/docs/experience-platform/tags/extensions/server/meta/overview.html?lang=en#quick-start)**: Event Forwarding customers can rapidly collect and forward event data, server-side to Meta for ad conversions in just a few simple steps.
* **[Mobile SDK](https://developer.adobe.com/client-sdks/documentation/)**: Customers can rapidly implement the Mobile SDK and validate basic mobile events in just a few simple steps.

New extensions have been released:

* **[!DNL Braze] event forwarding extension**: The [[!DNL Braze Track Events API]](https://experienceleague.adobe.com/docs/experience-platform/tags/extensions/server/braze/overview.html) event forwarding extension allows you to leverage data captured in the Adobe Experience Platform Edge Network and send it to [!DNL Braze] in the form of server-side events using the [!DNL Braze] User Track APIs.
* **[Epsilon Events API] event forwarding extension**: The [[!DNL Epsilon Events API]](https://experienceleague.adobe.com/docs/experience-platform/tags/extensions/server/braze/overview.html) extension allows you to leverage event forwarding to capture event information in the Adobe Experience Platform Edge Network and send it to [!DNL Epsilon] using the [!DNL Epsilon] Event API.
* **[!DNL Mixpanel] event forwarding extension**: The [[!DNL Mixpanel Track Events API]](https://experienceleague.adobe.com/docs/experience-platform/tags/extensions/server/braze/overview.html) extension allows you to leverage event forwarding to capture event information in the Adobe Experience Platform Edge Network and send it to [!DNL Mixpanel] using the Track Events API.

## January 25, 2023

* **New home screen**: The home page for Data Collection UI has been updated to include helpful onboarding information and links to streamline productivity. This includes:
    1. Documentation and recommended workflows to get started
    1. Recent properties, rules, and data elements
    1. Popular extensions
    1. New extension updates with a quick install feature
* **Send data to [!DNL Google Ads] using event forwarding**: You can now use the [[!DNL Google Ads Enhanced Conversions] API extension](../extensions/server/google-ads-enhanced-conversions/overview.md) for event forwarding, combined with [Google Oauth 2 secrets](../ui/event-forwarding/secrets.md#google-oauth2), to securely send server-side data to [!DNL Google Ads] in real time.

## November 23, 2022

* **[!DNL AWS] extension for event forwarding**: You can now send data to [!DNL Amazon Web Services] ([!DNL AWS]) using an [event forwarding](../../tags/ui/event-forwarding/overview.md) extension. See the [[!DNL AWS] extension overview](../../tags/extensions/server/aws/overview.md) for more information.
* **[!DNL Google Ads Enhanced Conversions] extension for event forwarding**: You can now send conversion data to [!DNL Google Ads] using an [event forwarding](../../tags/ui/event-forwarding/overview.md) extension. See the [[!DNL Google Ads Enhanced Conversions] extension overview](../../tags/extensions/server/google-ads-enhanced-conversions/overview.md) for more information.
* **[!DNL Microsoft Azure] extension for event forwarding**: You can now send data to [!DNL Microsoft Azure] using an [event forwarding](../../tags/ui/event-forwarding/overview.md) extension. See the [[!DNL Microsoft Azure] extension overview](../../tags/extensions/server/azure/overview.md) for more information.

## October 26, 2022

* **Sensitive data handling for datastreams**: Datastreams now leverage several Platform technologies to appropriately handle sensitive data as enforced by regulations such as the Health Insurance Portability and Accountability Act (HIPAA). See the section on [handling senstive data in datstreams](../../edge/datastreams/overview.md#sensitive) for more information.
* **[!DNL Splunk] extension for event forwarding**: You can now send data to [!DNL Splunk] using an [event forwarding](../ui/event-forwarding/overview.md) extension. See the [[!DNL Splunk] extension overview](../extensions/server/splunk/overview.md) for more information.
* **[!DNL Zendesk] extension for event forwarding**: You can now send data to [!DNL Zendesk] using an [event forwarding](../ui/event-forwarding/overview.md) extension. See the [[!DNL Zendesk] extension overview](../extensions/server/zendesk/overview.md) for more information.

## September 28, 2022

* **Adobe Experience Platform left nav integration**: All capabilities that were previously exclusive to the Data Collection UI (including tags and event forwarding) are now also available through the left navigation in the Experience Platform UI, under the category **[!UICONTROL Data Collection]**. This eliminates the need to switch between UIs when working with data collection capabilities in Platform.
* **User attribution in tags and event forwarding**: When listing available properties in tags and event forwarding, each listed property now shows when it was last updated and by whom.
* **[[!DNL Snap Conversions API] extension](https://exchange.adobe.com/apps/ec/108550) for event forwarding**: You can now send data to the [!DNL Snapchat Conversions API] using an [event forwarding](../../tags/ui/event-forwarding/overview.md) extension. For more information on how to authenticate and use the API, refer to the [[!DNL Snapchat Marketing API] documentation](https://marketingapi.snapchat.com/docs/conversion.html).

## July 27, 2022

* Access to tags and event forwarding capabilities is now managed through Adobe Admin Console under the card for Adobe Experience Platform Data Collection. See the guide on [data collection permissions](../../collection/permissions.md) for more information.
* Support for Internet Explorer 10 and 11 has been [deprecated](../ie-deprecation.md).

## June 22, 2022

New extensions have been released:

* [Google Data Layer tag extension](../extensions/client/google-data-layer/overview.md): Allows you to use a Google data layer in your tags implementation.
* [Google Ads Enhanced Conversions event forwarding extension](https://partners.adobe.com/exchangeprogram/experiencecloud/exchange.details.108630.html): Allows you to enhance your Google Ads conversions in real time.
* [Mailchimp event forwarding extension](../extensions/server/mailchimp/overview.md): Sends events to the Mailchimp Marketing API which can trigger emails for Mailchimp marketing campaigns, journeys, or transactions.