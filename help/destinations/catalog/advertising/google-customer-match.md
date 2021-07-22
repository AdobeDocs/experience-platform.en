---
keywords: google customer match;Google customer match;Google Customer Match
title: Google Customer Match connection
description: Google Customer Match lets you use your online and offline data to reach and re-engage with your customers across Google's owned and operated properties, such as Search, Shopping, Gmail, and YouTube.
exl-id: 8209b5eb-b05c-4ef7-9fdc-22a528d5f020
---
# [!DNL Google Customer Match] connection

## Overview {#overview}

[Google Customer Match](https://support.google.com/google-ads/answer/6379332?hl=en) lets you use your online and offline data to reach and re-engage with your customers across Google's owned and operated properties, such as: [!DNL Search], [!DNL Shopping], [!DNL Gmail], and [!DNL YouTube].

![Google Customer Match destination in the Adobe Experience Platform UI](../../assets/catalog/advertising/google-customer-match/catalog.png)

## Use cases

To help you better understand how and when to use the [!DNL Google Customer Match] destination, here are sample use cases that Adobe Experience Platform customers can solve by using this feature.

### Use case #1

An athletic apparel brand wants to reach existing customers through [!DNL Google Search] and [!DNL Google Shopping] to personalize offers and items based on their past purchases and browsing history. The apparel brand can ingest email addresses from their own CRM to Experience Platform, and build segments from their own offline data. Then, they can send these segments to [!DNL Google Customer Match] to be used across [!DNL Search] and [!DNL Shopping], optimizing their advertising spending.  

### Use case #2

A prominent technology company launched a new phone. To promote this new phone model, they are looking to drive awareness of the new features and functionality of the phone to customers who own previous models of their phones. 

To promote the release, they upload email addresses from their CRM database into Experience Platform, using the email addresses as identifiers. Segments are created based on customers who own older phone models. Then segments get sent to [!DNL Google Customer Match], so the company can target current customers, customers who own older phone models, and similar customers on [!DNL YouTube]. 

## Data governance for [!DNL Google Customer Match] destinations {#data-governance}

Some destinations in Experience Platform have certain rules and obligations for data sent to, or received from, the destination platform. You are responsible for understanding the limitations and obligations of your data and how you use that data in Adobe Experience Platform and the destination platform. Adobe Experience Platform provides data governance tools to help you manage some of those data usage obligations. [Learn more](../../../data-governance/labels/overview.md) about data governance tools and policies.

## Supported identities {#supported-identities}

[!DNL Google Customer Match] supports the activation of identities described in the table below. Learn more about [identities](/help/identity-service/namespaces.md).

|Target Identity|Description|Considerations|
|---|---|---|
|GAID|Google Advertising ID|Select this target identity when your source identity is a GAID namespace.|
|IDFA|Apple ID for Advertisers|Select this target identity when your source identity is an IDFA namespace.|
|phone_sha256_e.164|Phone numbers in E164 format, hashed with the SHA256 algorithm|Both plain text and SHA256 hashed phone numbers are supported by Adobe Experience Platform. Follow the instructions in the [ID matching requirements](#id-matching-requirements-id-matching-requirements) section and use the appropriate namespaces for plain text and hashed phone numbers, respectively. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|
|email_lc_sha256|Email addresses hashed with the SHA256 algorithm|Both plain text and SHA256 hashed email addresses are supported by Adobe Experience Platform. Follow the instructions in the [ID matching requirements](#id-matching-requirements-id-matching-requirements) section and use the appropriate namespaces for plain text and hashed email addresses, respectively. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.|
|user_id|Custom user IDs|Select this target identity when your source identity is a custom namespace.|

## Export type {#export-type}

**Segment Export** - you are exporting all members of a segment (audience) with the identifiers (name, phone number, and others) used in the [!DNL Google Customer Match] destination.

## [!DNL Google Customer Match] account prerequisites {#google-account-prerequisites}

Before setting up a [!DNL Google Customer Match] destination in Experience Platform, make sure you read and adhere to Google's policy for using [!DNL Customer Match], outlined in the [Google support documentation](https://support.google.com/google-ads/answer/6299717).

Next, make sure your [!DNL Google] account is configured for a [!DNL Standard] or higher access level. See the [Google Ads documentation](https://support.google.com/google-ads/answer/9978556?visit_id=637611563637058259-4176462731&rd=1) for details.

### Allow list {#allowlist}

Before creating the [!DNL Google Customer Match] destination in Experience Platform, make sure your [!DNL Google Ads] account complies with the [Google Customer Match policy](https://support.google.com/google-ads/answer/6299717/customer-match-policy).

Customers with compliant accounts are automatically allow listed by Google.

## ID matching requirements {#id-matching-requirements}

[!DNL Google] requires that no personally identifiable information (PII) is sent in clear. Therefore, the audiences activated to [!DNL Google Customer Match] can be keyed off *hashed* identifiers, such as email addresses or phone numbers.

Depending on the type of IDs that you ingest into Adobe Experience Platform, you must adhere to their corresponding requirements.

## Phone number hashing requirements {#phone-number-hashing-requirements}

There are two methods to activate phone numbers in [!DNL Google Customer Match]:

* **Ingesting raw phone numbers**: you can ingest raw phone numbers in the [!DNL E.164] format into [!DNL Platform], and they are automatically hashed upon activation. If you choose this option, make sure to always ingest your raw phone numbers into the `Phone_E.164` namespace.
* **Ingesting hashed phone numbers**: you can pre-hash your phone numbers before ingestion into [!DNL Platform]. If you choose this option, make sure to always ingest your hashed phone numbers into the `PHONE_SHA256_E.164` namespace.

>[!NOTE]
>
>Phone numbers ingested into the `Phone` namespace cannot be activated in [!DNL Google Customer Match].

## Email hashing requirements {#hashing-requirements}

You can hash email addresses before ingesting them into Adobe Experience Platform, or use email addresses in clear in Experience Platform, and have [!DNL Platform] hash them on activation.

For more information about Google's hashing requirements and other restrictions on activation, see the following sections in Google's documentation:

* [[!DNL Customer Match] with email address, address, or user ID](https://developers.google.com/adwords/api/docs/guides/remarketing#customer_match_with_email_address_address_or_user_id)
* [[!DNL Customer Match] considerations](https://developers.google.com/adwords/api/docs/guides/remarketing#customer_match_considerations)
* [Customer Match with phone number](https://developers.google.com/adwords/api/docs/guides/remarketing#customer_match_with_phone_number)
* [Customer Match with mobile device IDs](https://developers.google.com/adwords/api/docs/guides/remarketing#customer_match_with_mobile_device_ids)


To learn about ingesting email addresses in Experience Platform, see the [batch ingestion overview](../../../ingestion/batch-ingestion/overview.md) and the [streaming ingestion overview](../../../ingestion/streaming-ingestion/overview.md).

If you select to hash the email addresses yourself, make sure to comply with Google's requirements, outlined in the links above.

## Using custom namespaces {#custom-namespaces}

Before you can use the `User_ID` namespace to send data to Google, make sure you synchronize your own identifiers using [!DNL gTag]. Refer to the [Google official documentation](https://support.google.com/google-ads/answer/9199250) for detailed information.

<!-- Data from unhashed namespaces is automatically hashed by [!DNL Platform] upon activation.

Attribute source data is not automatically hashed. When your source field contains unhashed attributes, check the **[!UICONTROL Apply transformation]** option, to have [!DNL Platform] automatically hash the data on activation.
![Identity mapping transformation](../../assets/ui/activate-destinations/identity-mapping-transformation.png) -->

## Configure destination - video walkthrough {#video}

The video below demonstrates the steps to configure a [!DNL Google Customer Match] destination and activate segments. The steps are also laid out sequentially in the next sections.

>[!VIDEO](https://video.tv.adobe.com/v/332599/?quality=12&learn=on&captions=eng)

## Connect to destination {#connect-destination}

In **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**, scroll to the **[!UICONTROL Advertising]** category. Select [!DNL Google Customer Match], then select **[!UICONTROL Configure]**.

![Connect to Google Customer Match destination](../../assets/catalog/advertising/google-customer-match/connect.png)

>[!NOTE]
>
>If a connection with this destination exists, you can see an **[!UICONTROL Activate]** button on the destination card. For more information about the difference between **[!UICONTROL Activate]** and **[!UICONTROL Configure]**, refer to the [Catalog](../../ui/destinations-workspace.md#catalog) section of the destination workspace documentation.  

In the **Account** step, if you had previously set up a connection to your [!DNL Google Customer Match] destination, select **[!UICONTROL Existing Account]** and select your existing connection. Or, you can select **[!UICONTROL New Account]** to set up a new connection to [!DNL Google Customer Match]. To log in and connect Adobe Experience Cloud to your [!DNL Google Ad] account, select **[!UICONTROL Connect to destination]**.

>[!NOTE]
>
>Experience Platform supports credentials validation in the authentication process. It displays an error message if you input incorrect credentials to your [!DNL Google Ad] account, to ensure that you don't complete the workflow with incorrect credentials.

![Connect to Google Customer Match destination - authentication step](../../assets/catalog/advertising/google-customer-match/connection.png)

Once your credentials are confirmed and Adobe Experience Cloud is connected to your Google account, you can select **[!UICONTROL Next]** to proceed to the **[!UICONTROL Authentication]** step.

![Credentials confirmed](../../assets/catalog/advertising/google-customer-match/connection-success.png)

In the **[!UICONTROL Authentication]** step, enter a **[!UICONTROL Name]** and a **[!UICONTROL Description]** for your activation flow and fill in your Google **[!UICONTROL Account ID]**.

In this step, you can also select any **[!UICONTROL Marketing actions]** that apply to this destination. Marketing actions indicate the intent for which the data is exported to the destination. You can select from Adobe-defined marketing actions or you can create your own marketing action. For more information about marketing actions, see the [Data usage policies overview](../../../data-governance/policies/overview.md).

Select **[!UICONTROL Create Destination]** after you filled in the fields above.

>[!IMPORTANT]
>
> * The **[!UICONTROL Combine with PII]** marketing action is selected by default for the [!DNL Google Customer Match] destination and cannot be removed. 
> * For [!DNL Google Customer Match] destinations. **[!UICONTROL Account ID]** is your customer client ID with Google. The format of the ID is xxx-xxx-xxxx.  

![Connect Google Customer Match - authentication step](../../assets/catalog/advertising/google-customer-match/authentication.png)

Your destination is now created. You can select **[!UICONTROL Save & Exit]** if you want to activate segments later on or you can select **[!UICONTROL Next]** to continue the workflow and select segments to activate. In either case, see the next section, [Activate segments to [!DNL Google Customer Match]](#activate-segments), for the rest of the workflow.

## Activate segments to [!DNL Google Customer Match] {#activate-segments}

For instructions on how to activate segments to [!DNL Google Customer Match], see [Activate Data to Destinations](../../ui/activate-destinations.md). 


In the **[!UICONTROL Segment schedule]** step, you must provide the [!UICONTROL App ID] when sending [!DNL IDFA] or [!DNL GAID] segments to [!DNL Google Customer Match].

![Google Customer Match App ID](../../assets/catalog/advertising/google-customer-match/gcm-destination-appid.png)

For details on how to find the [!DNL App ID], refer to the [Google official documentation](https://developers.google.com/adwords/api/docs/reference/v201809/AdwordsUserListService.CrmBasedUserList#appid).

## Verify that segment activation was successful {#verify-activation}

After completing the activation flow, switch to your **[!UICONTROL Google Ads]** account. The activated segments are shown in your Google account as customer lists. Please note that depending on your segment size, some audiences do not populate unless there are over 100 active users to serve.

When mapping a segment to both [!DNL IDFA] and [!DNL GAID] mobile IDs, [!DNL Google Customer Match] creates a separate segment for each ID mapping. Your [!DNL Google Ads] account shows two different segments, one for the [!DNL IDFA], and one for the [!DNL GAID] mapping.

## Extra resources {#additional-resources}

* [Integrate Google Customer Match - Video tutorial](https://experienceleague.adobe.com/docs/platform-learn/tutorials/rtcdp/integrate-with-google-customer-match.html)
