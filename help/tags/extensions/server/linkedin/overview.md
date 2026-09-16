---
title: Linkedin Conversions API event forwarding extension
description: This Adobe Experience Platform event forwarding extension allows you to measure the performance of your Linkedin marketing campaign.
last-substantial-update: 2023-10-25T00:00:00.000Z
exl-id: 411e7b77-081e-4139-ba34-04468e519ea5
TQID: https://experienceleague.adobe.com/0E-WrguJogQipnNsAooKdtdWnVKNoJhtX4-8UGm7Avs
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a075b2c1-7748-4328-b7f6-343aa314616a
    internal-label: Campaigns
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
  - id: d5ef99fa-df0c-4153-bf94-105ad0724167
    internal-label: Integrations
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
subfeature_v2:
  - id: b3ddd7c3-4e07-4269-8660-8dd1e8139d74
    internal-label: Monitoring
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: cdd65e7e-8839-44a2-bc21-0e03623b5dd1
    internal-label: Optimization
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# [!DNL LinkedIn] conversions API extension

[[!DNL LinkedIn Conversions API]](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/ads-reporting/conversions-api) is a conversion tracking tool that creates a direct connection between marketing data from an advertiser's server and [!DNL LinkedIn]. This enables advertisers to evaluate the effectiveness of their [!DNL LinkedIn] marketing campaigns regardless of the location of the conversion and utilize this information to drive campaign optimization. The [!DNL LinkedIn Conversions API] extension can help strengthen performance and decrease cost per action with more complete attribution, improved data reliability, and better optimized delivery.

## Prerequisites {#prerequisites}

You must [create a conversion rule](https://www.linkedin.com/help/lms/answer/a1657171) in your [!DNL LinkedIn Campaign Manager] account. [!DNL Adobe] recommends including "CAPI" at the beginning of the conversation rule name to set it apart from other conversion rule types you might have configured.

### Create a secret and a data element

Create a new [!DNL LinkedIn] [event forwarding secret](../../../ui/event-forwarding/secrets.md) and provide it with a unique name that signifies the authenticating member. This will be used to authenticate the connection to your account while keeping the value secure.

Next, [create a data element](../../../ui/managing-resources/data-elements.md#create-a-data-element) using the [!UICONTROL Core] extension and a [!UICONTROL Secret] data element type to reference the `LinkedIn` secret you just created.

## Install and configure the [!DNL LinkedIn] extension {#install}

To install the extension, [create an event forwarding property](../../../ui/event-forwarding/overview.md#properties) or select an existing property to edit.

Select **[!UICONTROL Extensions]** in the left navigation. In the **[!UICONTROL Catalog]** tab, select the **[!UICONTROL LinkedIn]** extension and then select **[!UICONTROL Install]**.

![The extension catalog showing the [!DNL LinkedIn] extension card highlighting install.](../../../images/extensions/server/linkedin/install-extension.png)

On the next screen, enter the data element secret you created earlier into the `Access Token` field. The data element secret will contain your [!DNL LinkedIn] OAuth 2 token. Select **[!UICONTROL Save]** when finished.

![The [!DNL LinkedIn] extension configuration page with the [!UICONTROL Access Token] field and [!UICONTROL Save] highlighted.](../../../images/extensions/server/linkedin/configure-extension.png)

## Create a [!DNL Send Conversion] rule {#tracking-rule}

Once all your data elements are set up, you can start creating event forwarding rules that determine when and how your events will be sent to [!DNL LinkedIn].

Create a new event forwarding [rule](../../../ui/managing-resources/rules.md) in your event forwarding property. Under **[!UICONTROL Actions]**, add a new action and set the extension to **[!UICONTROL LinkedIn]**. Next, select **[!UICONTROL Send Conversion]** for the **[!UICONTROL Action Type]**.

![The Event Forwarding Property Rules view, with the fields required to add an event forwarding rule action configuration highlighted.](../../../images/extensions/server/linkedin/linkedin-event-action.png)

After selection, additional controls appear to further configure the event. Select **[!UICONTROL Keep Changes]** to save the rule.

**[!UICONTROL User Data]**

| Input | Description |
| --- | --- |
| [!UICONTROL Email] | Email address of the contact associated with the conversion event. The email value will be encoded by the extension code in SHA256 unless the provided value is already a SHA256 string. |
| [!UICONTROL LinkedIn First Party Ads Tracking UUID] | This is a first party cookie id. Advertisers need to enable enhanced conversion tracking from [[!DNL LinkedIn Campaign Manager]](https://www.linkedin.com/help/lms/answer/a423304/enable-first-party-cookies-on-a-linkedin-insight-tag) in order to activate first party cookies that append a click ID parameter `li_fat_id` to the click URLs. |
| [!UICONTROL Customer Information Data] | This field contains a JSON object with extra attributes that will be sent along with the message.<br><br>Under the **[!UICONTROL Raw]** option, you can paste the JSON object directly into the provided text field, or you can select the data element icon (![Dataset icon](/help/images/icons/database.png)) to select from a list of existing data elements to represent the data.<br><br>You can also use the **[!UICONTROL JSON Key-Value Pairs Editor]** option to manually add each key-value pair through a UI editor. Each value can be represented by a raw input, or a data element can be selected instead. The accepted key values are: `firstName`, `lastName`, `companyName`, `title` and `country`. |

{style="table-layout:auto"}

![The [!DNL User Data] section showing example data input into the fields.](../../../images/extensions/server/linkedin/configure-extension-user-data.png)

**[!UICONTROL Conversion Data]**

| Input | Description |
| --- | --- |
| [!UICONTROL Conversion] | The ID of the conversion rule created in [LinkedIn Campaign Manager](https://www.linkedin.com/help/lms/answer/a1657171). Select the conversion rule to obtain the ID, then copy the ID from the browser URL (for example, `/campaignmanager/accounts/508111232/conversions/15588877`) as `/conversions/<id>`. |
| [!UICONTROL Conversion Time] | Each timestamp in milliseconds at which the conversion event happened. <br><br> Note: If your source records the conversion timestamp in seconds, please insert 000 at the end to transform it to milliseconds. |
| [!UICONTROL Currency] | Currency code in ISO format. |
| [!UICONTROL Amount] | Value of the conversion in decimal string (for example, "100.05"). |
| [!UICONTROL Event ID] | The unique id generated by advertisers to indicate each event. This is an optional field and is used for [deduplication](https://learn.microsoft.com/en-us/linkedin/marketing/conversions/deduplication?view=li-lms-2024-02). |

{style="table-layout:auto"}

![The [!DNL Conversion Data] section showing example data in the fields.](../../../images/extensions/server/linkedin/configure-extension-conversions-data.png)

**[!UICONTROL Configuration Overrides]**

>NOTE
>
>The [!UICONTROL Configuration Overrides] field allows a user to set a different [!DNL LinkedIn] access token on every rule, allowing each rule to use an access token that may have access to different [!DNL LinkedIn] ad accounts.

| Input | Description |
| --- | --- |
| [!UICONTROL Access Token] | The [!DNL LinkedIn] access token. |

![The [!DNL Configuration Overrides] section showing example data input in the field.](../../../images/extensions/server/linkedin/configure-extension-configuration-override.png)

## Next steps

This guide covered how to send data to [!DNL LinkedIn] using the [!DNL LinkedIn Conversions API] event forwarding extension. For more information on event forwarding capabilities in [!DNL Adobe Experience Platform], read the [event forwarding overview](../../../ui/event-forwarding/overview.md).

For details on how to debug your implementation using the Experience Platform Debugger and Event Forwarding Monitoring tool, read the [Adobe Experience Platform Debugger overview](../../../../debugger/home.md) and [Monitor activities in event forwarding](../../../ui/event-forwarding/monitoring.md).
