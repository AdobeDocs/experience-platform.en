---
keywords: event forwarding extension;pinterest;pinterest event forwarding extension
title: Pinterest event forwarding extension
description: This Adobe Experience Platform event forwarding extension allows you to ingest events into Pinterest for your business requirements.
---
# [!DNL Pinterest] event forwarding extension

[!DNL Pinterest] is a visual discovery engine for finding ideas such as recipes, home, style inspiration, and more. There are billions of pins on [!DNL Pinterest], which can also be shared with others on [!DNL Pinterest]. You can collate the user interaction events and leverage [!DNL Pinterest Analytics] to understand user behavior and run targeted advertisements.

The [[!DNL Pinterest] Conversions](https://developers.pinterest.com/docs/conversions/conversion-management/) API [event forwarding](../../../ui/event-forwarding/overview.md) extension allows you to leverage data captured in the Adobe Experience Platform Edge Network and send it to [!DNL Pinterest]. This document covers the use cases of the extension, how to install it, and how to integrate its capabilities into your event forwarding [rules](../../../ui/managing-resources/rules.md).

Bearer tokens are the authentication method used by [!DNL Pinterest] when interacting with the [!DNL Pinterest] API.

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
| Ads Account Id | Your [!DNL Pinterest] Ads Account Id. Refer to the [[!DNL Pinterest] documentation](https://developers.pinterest.com/docs/conversions/conversion-management/#Finding%20your%20%2Cad_account_id) for guidance. | 123456789012 |
| Bearer Token | Your [!DNL Pinterest] Bearer Token. Refer to the [[!DNL Pinterest] Conversions API](https://developers.pinterest.com/docs/conversions/conversion-management/#Authenticating%20for%20the%20send%20conversion%20events%20endpoint) document for guidance. <br> [!Note] <br> > <br> You will only be required to do this once as this token does not expire. | {YOUR_PINTEREST_BEARER_TOKEN} |

## Install and configure the [!DNL Pinterest] extension {#install}

To install the extension, [create an event forwarding property](../../../ui/event-forwarding/overview.md#properties) or choose an existing property to edit instead.

In the left navigation, select **[!UICONTROL Extensions]**. Select **[!UICONTROL Install]** on the card for the [!DNL Pinterest] extension in the **[!UICONTROL Catalog]** tab. 

![Installing the [!DNL Pinterest] extension.](../../../images/extensions/server/pinterest/install.png)

### Configure the [!DNL Pinterest] extension

>[!IMPORTANT]
>
>Depending on your implementation needs, you may need to create a schema, data elements, and a dataset before configuring the extension. Please review all the configuration steps before starting in order to determine which entities you need to set up for your use case.

In the left navigation, select **[!UICONTROL Extensions]**. Select **[!UICONTROL Configure]** on the card for the [!DNL Pinterest] extension in the [!UICONTROL Installed]** tab.

![Configuring the [!DNL Pinterest] extension.](../../../images/extensions/server/pinterest/configure.png)

On the next screen, input the [!UICONTROL Ads Account Id] and [!UICONTROL Bearer Token] that you previously gathered in the [configuration details](#configuration-details) section. When you're finished, select **[!UICONTROL Save]**.

![The [!DNL Pinterest] extension input.](../../../images/extensions/server/pinterest/input.png)

## Configure an event forwarding rule {#config-rule}

Once all your data elements are set up, you can start creating event forwarding rules that determine when and how your events will be sent to [!DNL Pinterest].

Create a new [rule](../../../ui/managing-resources/rules.md) in your event forwarding property. Under **[!UICONTROL Actions]**, add a new action and set the extension to **[!UICONTROL Pinterest]**. To send Adobe Experience Edge Network events to [!DNL Pinterest], set the **[!UICONTROL Action Type]** to **[!UICONTROL conversion event].**

![The [!DNL Pinterest] creating a conversion event rule.](../../../images/extensions/server/pinterest/rule.png)

After selection, additional controls appear to further configure the event. You need to map the [!DNL Pinterest] event properties to the data elements that you previously created. 

The **[!UICONTROL Main fields]** tab contains the following fields: 

| Field name | Description | Example | 
| --- | --- | --- | 
| [!UICONTROL Event Type] | This can be any event type however to leverage [!DNL Pinterest Analytics] it is recommended to use [[!DNL Pinterest] event codes](https://help.pinterest.com/en/business/article/add-event-codes) | * Checkout <br> * AddToCart <br> * PageVisit <br> * Signup | 
| [!UICONTROL Email] | SHA256 hashes of lowercase version of user's email addresses. This is used by [!DNL Pinterest] for matching. For more information, refer to the [[!DNL Pinterest] API](https://developers.pinterest.com/docs/api/v5/#operation/events/create). | ebd543592...f2b7e1 | 
| [!UICONTROL Time] | This refers to the event time. The default time format used is UNIX, in the format `<seconds>.<miliseconds>` depending on your local timezone. For more information, refer to the [[!DNL Pinterest] API](https://developers.pinterest.com/docs/api/v5/#operation/events/create). | 1433188255.500 indicates 1433188255 seconds and 500 milliseconds after epoch, or Monday, June 1, 2015, at 7:50:55 PM GMT. |

![The [!DNL Pinterest] main fields configuration.](../../../images/extensions/server/pinterest/action-configuration-main-fields.png)

The [!UICONTROL Custom Data] tab allows you to specify and send custom data to [!UICONTROL Pinterest].

![The [!DNL Pinterest] custom data configuration.](../../../images/extensions/server/pinterest/action-configurations-custom-data.png)

The [!UICONTROL Content Data] tab allows you to specify and send content data to [!UICONTROL Pinterest] 

![The [!DNL Pinterest] content data configuration.](../../../images/extensions/server/pinterest/action-configurations-user-data.png)

## Validate data within [!DNL Pinterest]

Once the event forwarding rule has been created and executed, validate whether the event that was sent to the [!DNL Pinterest] API is displayed as expected in the [!DNL Pinterest] UI.

If the event collection and [!DNL Experience Platform] integration was successful, you will see events within the [!DNL Pinterest] UI. 

![The [!DNL Pinterest] event manager](../../../images/extensions/server/pinterest/pinterest-event-history.png)

You can further drill through and view the [!DNL Pinterest] event data distribution.

![The [!DNL Pinterest] data distribution](../../../images/extensions/server/pinterest/pinterest-event-history-distribution.png)

## Next steps

This guide covered how to install and configure the [!DNL Pinterest] event forwarding extension in the UI. For more information, refer to the official documentation: 

* [[!DNL Pinterest] API](https://developers.pinterest.com/docs/api/v5/)
* [[!DNL Pinterest] conversions API Overview](https://help.pinterest.com/en/business/article/the-pinterest-api-for-conversions)
