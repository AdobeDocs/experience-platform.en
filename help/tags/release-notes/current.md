---
title: Release Notes for Tags and Event Forwarding
description: The latest release notes for tags and event forwarding in Adobe Experience Platform.
exl-id: 2ebeaa1e-64b8-48fd-b4e8-419663271a87
---
# Release notes for tags and event forwarding

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
