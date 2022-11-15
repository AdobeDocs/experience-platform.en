---
title: Google Ads Enhanced Conversions Extension
description: Learn about the Google Ads Enhanced Conversions extension for event forwarding in Adobe Experience Platform.
exl-id: 65cdff40-276f-4481-9621-6c6861dbd412
---
# [!DNL Google Ads] Enhanced Conversions extension

Using the [!DNL Google Ads] API, you can leverage [enhanced conversions](https://support.google.com/google-ads/answer/9888656) by sending first-party customer data in the form of conversion adjustments. Google uses this additional data to improve the reporting of your online conversions driven by ad interactions. 

The [[!DNL Google Ads] Enhanced Conversions event forwarding extension](https://exchange.adobe.com/apps/ec/108630/google-ads-enhanced-conversions) (heretofore referred to as the [!DNL Enhanced Conversions] extension) provides a user-friendly template to easily implement enhanced conversions for the [!DNL Google Ads] API. 

>[!IMPORTANT]
>
>Enhanced conversions only work for conversion types where customer data is present, such as subscriptions, sign-ups, and purchases. One or more of the following pieces of customer data must be available, as they are required when [configuring a conversion action](#conversion-action-event-forwarding) for an event forwarding rule: 
>
>* Email address (preferred) 
>* Name and home address (street address, city, state/region, and postal code) 
>* Phone number (must be provided in addition to one of the other two pieces of information above) 

## Implementation overview 

Enhanced conversions leverage the [!DNL Google Ads] API to add first-party data to a conversion that happened on a client device, usually a website. This means that there are two steps to implement enhanced conversions: 

1. Send a conversion from the client.
1. Use event forwarding to send additional first-party data that enhances the conversion data sent from the client.

>[!TIP]
>
>To associate the client-side conversion event with the first-party data sent from event forwarding, the `transaction_ID` must be the same in both calls. For more information on where this value must be provided for each service, see the sections on configuring conversion actions for [tags](#conversion-action-tags) and [event forwarding](#conversion-action-event-forwarding), respectively.

Since sending conversion events involves both a client-side and server-side implementation, this document covers the prerequisite steps for setting up the client-side [[!DNL Google Global Site Tag] (gtag) extension](https://exchange.adobe.com/apps/ec/101437/google-global-site-tag-gtag) in addition to the [!DNL Enhanced Conversions] extension for event forwarding.

## Send a conversion using tags

To send a conversion event from on a website, [!DNL Google Global Site Tag] (gtag) must be deployed. You can achieve this using tags by configuring and installing the [!DNL Google Global Site Tag] (gtag) extension.

### Configure and install the [!DNL Google Global Site Tag] extension

Navigate to the [!UICONTROL Data Collection] UI or Experience Platform UI and select **[!UICONTROL Tags]** in the left navigation. Select the tag property you wish to install the extension on, then select **[!UICONTROL Extensions]** in the left navigation. Under the **[!UICONTROL Catalog]** tab, locate the [!UICONTROL Google Global Site Tag (gtag)] extension and select **[!UICONTROL Install]**.

![The [!UICONTROL Google Global Site Tag (gtag)] extension being selected under the [!UICONTROL Extensions] view in the [!UICONTROL Data Collection] UI.](../../../images/extensions/google-ads-enhanced-conversions/install-gtag-extension.png)

The installation dialog appears. From here, select **[!UICONTROL Add Account]** and provide the following values when prompted:

| Account property | Description |
| --- | --- |
| Account Name | A unique name for the account. This name is only used within the tags UI. |
| Account ID | Your [!DNL Google Ads] account ID. To find this value, log into [!DNL Google Ads] and navigate to: **[!DNL Tools and Settings]** > **[!DNL Conversions]** > **[!DNL Select a conversion action]** > **[!DNL Tag Setup]** > **[!DNL Install the Tag yourself]**. The account ID string can be found in the code snippet window that starts with `AW-` or `d`. |
| Product | Select **[!UICONTROL Google Ads (AdWords)]**. |

{style="table-layout:auto"}

When finished, select **[!UICONTROL Add Account]**, then select **[!UICONTROL Save]**.

### Add a send conversion action {#conversion-action-tags}

After installing the extension, you can start including conversion actions in your tag rules. When creating or editing a rule that listens to the conversion you would like to enhance, select **[!UICONTROL Add]** under [!UICONTROL Actions]. In the next dialog, select **[!UICONTROL Google Global Site Tag (gtag)]** from the [!UICONTROL Extension] dropdown, then select **[!UICONTROL Send an event]** under [!UICONTROL Action Type].

![The [!UICONTROL Send an event] action type being selected within the action configuration view of the rule editing workflow.](../../../images/extensions/google-ads-enhanced-conversions/select-client-action.png)

Additional controls appear that allow you to configure the [!DNL gtag] event. At a minimum, the following fields must be filled out: 

1. **[!UICONTROL Event Name (Action)]**: Enter `conversion` as the value.
1. Add a new field where the key is `transaction_id` and the value is a [data element](../../../ui/managing-resources/data-elements.md) that contains the [transaction ID](https://support.google.com/google-ads/answer/6386790) value.
1. **[!UICONTROL Conversion Label]**: Enter the appropriate conversion label from your [!DNL Google Ads] account. To find this value, log into Google Ads and navigate to **[!DNL Tools and Settings]** > **[!DNL Conversions]** > **[!DNL Select a conversion action]** > **[!DNL Tag Setup]** > **[!DNL Use Google Tag Manager]**. The conversion label can be found under [!DNL Instructions]. 
    >[!IMPORTANT]
    >
    >While you are in the tag setup area of your [!DNL Google Ads] account, make sure that enhanced conversions is enabled. To do this, review and accept the Terms of Service, then select **[!DNL Turn on enhanced conversions]** and **[!DNL API]** as the implementation method. 

After you have configured the action, select **[!UICONTROL Keep Changes]** to add the action to the rule configuration. When you are satisfied with the rule, select **[!UICONTROL Save to Library]**. 

Finally, publish a new [build](../../../ui/publishing/builds.md) to enable the changes to the library.

## Send first-party data using event forwarding 

Once you are able to send conversion events from the client side, you can enhance these conversions using the [!DNL Enhanced Conversions] event forwarding extension.

### Create a Google OAuth 2 secret and data element {#create-secret-data-element}

Before you configure the extension, you must create an access token in event forwarding to authenticate to [!DNL Google Ads] API.

See the guide on [creating event forwarding secrets](../../../ui/event-forwarding/secrets.md) for detailed steps. Ensure that you select **[!UICONTROL Google OAuth 2]** as the secret type. Continue to follow the prompts, and when asked to select a Google Account profile, select the account that has access to the conversion action you are configuring. 

Once the secret is created, [create a new data element](../../../ui/managing-resources/data-elements.md#create-a-data-element) and select **[!UICONTROL Secret]** for the data element type. Select the appropriate Google OAuth 2 secret for each environment and select **[!UICONTROL Save to Library]**. 

### Configure and install the [!DNL Enhanced Conversions] extension {#install-enhanced-conversions}

Find the [!UICONTROL Google Ads Enhanced Conversions] extension in the event forwarding catalog and select **[!UICONTROL Install]**. 

![The [!UICONTROL Google Ads Enhanced Conversions] extension being selected under the [!UICONTROL Extensions] view in the [!UICONTROL Data Collection] UI.](../../../images/extensions/google-ads-enhanced-conversions/install-enhanced-conversions.png)

To configure the extension, you must populate the two required fields:

1. **[!UICONTROL Customer ID]**: The ID that uniquely identifies your [!DNL Google Ads] account. To find this value, log into [!DNL Google Ads] and navigate to **[!DNL Help]** > **[!DNL Customer ID]**.
1. **[!UICONTROL Access Token Data Element]**: Select the data element icon (![Data element icon](../../../images/extensions/google-ads-enhanced-conversions/data-element-icon.png)) and choose the Google OAuth 2 secret data element that you [configured in the previous step](#create-secret-data-element) from the menu.

When finished, select **[!UICONTROL Save]** to install the extension.

### Add a [!UICONTROL Send Conversion] action to a rule {#conversion-action-event-forwarding}

After the extension is installed, you can start to include [!UICONTROL Send Conversion] actions in your event forwarding rules. When creating or editing a rule that listens to the conversion you'd like to enhance, select **[!UICONTROL Add]** under [!UICONTROL Actions]. In the next dialog, select **[!UICONTROL Google Ads Enhanced Conversions]** from the [!UICONTROL Extension] dropdown, then select **[!UICONTROL Send Conversion]** under [!UICONTROL Action Type].

![The [!UICONTROL Send Conversion] action type being selected within the action configuration view of the rule editing workflow.](../../../images/extensions/google-ads-enhanced-conversions/select-server-action.png)

New controls appear in the right panel that allow you to configure your conversion. At a minimum, the following fields must be completed:

**Conversion Information**

| Input | Description |
| --- | --- |
| Customer ID | Your [!DNL Google Ads] customer ID. Defaults to the customer ID you entered when [installing the extension](#install-enhanced-conversions). |
| Conversion ID or Conversion Label | Tracking values obtained from [!DNL Google Ads] when setting up conversion tracking. Values start with `AW-`.<br><br>For details on how to find these values, refer to the [[!DNL Google Ads] documentation](https://support.google.com/tagmanager/answer/6105160?hl=en). |
| Transaction ID | Select a data element that has the same transaction ID value that is [sent from the client side](#conversion-action-tags) using the [!DNL Google Global Site Tag] extension. |

**User Identification**

* At least one of the three user identifiers must be included: 
    * Email 
    * Phone Number 
    * Full Address 

>[!TIP]
>
>User identification data must be hashed before it is sent to Google. If the data is not hashed when event forwarding receives it, select the **[!UICONTROL Normalize & Hash]** toggle on a given field to instruct the extension to hash the value.
>
>![The [!UICONTROL Normalize & Hash] toggle enabled for the [!UICONTROL Email] input within the [!UICONTROL Send Conversion] action configuration form.](../../../images/extensions/google-ads-enhanced-conversions/hash-user-id-values.png)

When finished, select **[!UICONTROL Keep Changes]** to add the action to the rule configuration. When you are satisfied with the rule, select **[!UICONTROL Save to Library]**. 

Finally, publish a new event forwarding [build](../../../ui/publishing/builds.md) to enable the changes to the library.

## Next steps

This guide covered how send conversion events to [!DNL Google Ads] using the [!DNL Enhanced Conversions] event forwarding extension. For more information on event forwarding capabilities in Experience Platform, refer to the [event forwarding overview](../../../ui/event-forwarding/overview.md).
