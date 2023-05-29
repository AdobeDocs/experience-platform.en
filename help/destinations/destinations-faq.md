---
keywords: destinations; questions; frequently asked questions; faq; destinations faq
title: Frequently asked questions
description: Answers to the most frequently asked questions about Adobe Experience Platform destinations
exl-id: 2c34ecd0-a6d0-48dd-86b0-a144a6acf61a
---
# Frequently asked questions {#faq}

## Overview {#overview}

This document provides answers to frequently asked questions about Adobe Experience Platform destinations. For questions and troubleshooting related to other [!DNL Platform] services, including those encountered across all [!DNL Platform] APIs, please refer to the [Experience Platform troubleshooting guide](../landing/troubleshooting.md).

## General destinations questions {#general}

**Why am I seeing different profile counts in the Experience Platform UI and in the exported CSV files?**

This is a normal behavior due to the way Experience Platform performs segmentation.

Streaming segmentation updates the profile count for streaming segments throughout the day, while batch segmentation updates the profile count for batch segments once every 24 hours.

When the segment export schedule differs from the segmentation schedule, the profile counts between the UI and the exported [!DNL CSV] file will be different, especially when it comes to streaming segments.

See the [Segmentation Service documentation](../segmentation/home.md) for more details.

## [!DNL Facebook Custom Audiences] {#facebook-faq}

**What do I need to do before I can activate audiences in [!DNL Facebook Custom Audiences]?**

Before you can send your audience segments to [!DNL Facebook], make sure you meet the following requirements:

* Your [!DNL Facebook] user account must have the **[!DNL Manage campaigns]** permission enabled for the Ad account that you plan to use.
* The **Adobe Experience Cloud** business account must be added as an advertising partner in your [!DNL Facebook Ad Account]. Use `business ID=206617933627973`. See [Add Partners to Your Business Manager](https://www.facebook.com/business/help/1717412048538897) in the Facebook documentation for details.
    >[!IMPORTANT]
    >
    > When configuring the permissions for Adobe Experience Cloud, you must enable the **Manage campaigns** permission. This is required for the [!DNL Adobe Experience Platform] integration.
* Read and sign the [!DNL Facebook Custom Audiences] Terms of Service. To do this, go to `https://business.facebook.com/ads/manage/customaudiences/tos/?act=[accountID]`, where `accountID` is your [!DNL Facebook Ad Account ID].

**Do I need to add any apps or pixels to my [!DNL Facebook] advertiser account?**

No. As this is not a pixel-based integration, there is no need to add any pixels to your advertiser account.

**How long does Facebook take to process information from Adobe Experience Platform?**

As of March 2021, [!DNL Facebook Custom Audiences] needs up to an hour to process information received from [!DNL Platform].

**Can I use [!DNL Facebook Custom Audiences] for audience targeting in other [!DNL Facebook] apps, like [!DNL Instagram]?**

You can use the [!DNL Facebook Custom Audiences] destination for audience targeting across Facebook's family of apps that are supported by [!DNL Facebook Custom Audiences], including [!DNL Facebook], [!DNL Instagram], [!DNL Audience Network], and [!DNL Messenger]. Selection of the app which advertisers want to run campaigns on is indicated at the placement level in [!DNL Facebook Ads Manager].

**What is the difference between the [!DNL Facebook Custom Audiences] connection and [!DNL Facebook Pixel] extension?**

The [!DNL Facebook Custom Audiences] connection uses [!DNL Platform] identities when sending audiences to [!DNL Facebook], while the [[!DNL Facebook Pixel] connection](../destinations/catalog/advertising/facebook-pixel.md) uses the [!DNL Facebook] pixel integrated in a website.

These two integrations are complementary; you can use both to ensure better audience coverage. As an example, you can use the [!DNL Facebook Pixel] extension for prospecting website visitors who have not created an account, whereas [!DNL Facebook Custom Audiences] can help you target existing customers, based on [!DNL Platform] identities.

**Does the Adobe Experience Platform integration with [!DNL Facebook Custom Audiences] support disqualifying users from an audience when they no longer qualify for it?**

Yes, the integration supports removing users from [!DNL Facebook Custom Audiences] when they no longer qualify.

**How should I hash the audience data before sending it to [!DNL Facebook]?**

[!DNL Facebook] requires that no personally identifiable information (PII) is sent in clear. Therefore, the audiences activated to [!DNL Facebook] can be keyed off *hashed* identifiers, such as email addresses or phone numbers.

For detailed explanations on the ID matching requirements, see [ID matching requirements](catalog/social/facebook.md#id-matching-requirements).

**What kind of identities can I activate in [!DNL Facebook Custom Audiences]?**

[!DNL Facebook Custom Audiences] supports the activation of the following identities: hashed emails, hashed phone numbers, [!DNL GAID], [!DNL IDFA], and custom external IDs.

**Can I create multiple Facebook destinations in the Platform UI for separate Facebook accounts?** 

Yes. A Facebook destination in Experience Platform is 1:1 to an ad account in Facebook. You can create a separate Facebook destination for each Facebook ad account in your company. Follow the [destination connection tutorial](/help/destinations/ui/connect-destination.md) and connect to a separate Facebook account for each new Facebook destination in the Platform UI. There is no limit on the number of Facebook ad accounts that you can connect to.

## Google Customer Match {#google-customer-match}

**When exporting segments to Google Customer Match, why am I seeing extra numbers appended at the end of the segment names in the Google interface?**

Google requires segment names to be unique. The numbers that you are seeing are [UNIX timestamps](https://www.unixtimestamp.com/) and they are appended to keep the segment names unique, if you mapped the same segment to multiple Google destinations.

## LinkedIn Matched Audiences {#linkedin}

**Do I need to add any apps or pixels to my [!DNL LinkedIn] advertiser account?**

No. As this is not a pixel-based integration, there is no need to add any pixels to your advertiser account.

**What do I need to do before I can activate audiences in [!DNL LinkedIn Matched Audiences]?**

Before you can use the [!UICONTROL LinkedIn Matched Audience] destination, make sure your [!DNL LinkedIn Campaign Manager] account has the [!DNL Creative Manager] permission level or higher.

To learn how to edit your [!DNL LinkedIn Campaign Manager] user permissions, see [Add, Edit, and Remove User Permissions on Advertising Accounts](https://www.linkedin.com/help/lms/answer/5753) in the LinkedIn documentation.

**How should I hash the audience data before sending it to [!DNL LinkedIn]?**

[!DNL LinkedIn] requires that no personally identifiable information (PII) is sent in clear. Therefore, the audiences activated to [!DNL LinkedIn] can be keyed off *hashed* identifiers, such as email addresses or phone numbers.

For detailed explanations on the ID matching requirements, see [ID matching requirements](catalog/social/linkedin.md#id-matching-requirements).

**What kind of identities can I activate in [!DNL LinkedIn]?**

[!DNL LinkedIn Matched Audiences] supports the activation of the following identities: hashed emails, [!DNL GAID], and [!DNL IDFA].

## Attribute-based personalization via Adobe Target and Custom Personalization destinations {#attribute-personalization}

**Do I need to use the Experience Platform Web SDK to send audiences and attributes to Adobe Target?** 

No, Web SDK is not required to activate audiences to Adobe Target.

However, if [!DNL at.js] is used instead of Web SDK, only next-session personalization is supported.

For [same-page and next-page personalization](ui/activate-edge-personalization-destinations.md) use cases, you must use either [Web SDK](../edge/home.md) or the [Edge Network Server API](../server-api/overview.md).

**Is there a limit on the number of attributes that I can send from Real-time Customer Data Platform to Adobe Target or a Custom Personalization destination?**

Yes, same-page and next-page personalization use cases support a maximum of 30 attributes per sandbox, when activating audiences to Adobe Target or Custom Personalization destinations. 

**What types of attributes are supported for activation (e.g. arrays, maps, etc?**

Currently, only leaf-level attributes are supported for activation. 

**Is there a limit on the number of audiences that can be activated to Adobe Target and Custom Personalization destinations?**

Yes, you can activate a maximum of 150 edge audiences per sandbox.  For more information on activation guardrails, see the [default guardrails for activation](guardrails.md). 

**After I create an audience in Experience Platform, how long will it take for that audience to be available for edge segmentation use cases?** 

Audience definitions are propagated to the edge network in up to one hour. However, if an audience is activated within this first hour, some visitors who would have qualified for the audience could be missed. 

**Where can I see the activated attributes in Adobe Target?**

Attributes will be available to use in Target in JSON and HTML offers. 

**Can I create a destination without a datastream and then add a datastream to the same destination at a later point?**

This is currently not supported through the Destinations UI. If you need assistance in this case, please reach out to your Adobe representative.

**What happens if I delete an Adobe Target destination?**

When you delete a destination:

* All audiences and attributes mapped under the destination are deleted from Target.
* The projection configuration is also deleted.

**Does the integration work using the Edge Network Server API?**

Yes, the Edge Network Server API works with the Custom Personalization destination. Since profile attributes may contain sensitive data, in order to protect this data, the Custom Personalization destination requires you to use the Edge Network Server API for data collection. Furthermore, all API calls must be made in an authenticated context.

**I can only have one merge policy that is active-on-edge. Can I build audiences that use a different merge policy and still send them to Adobe Target as streaming segments?**

No. All audiences that you want to activate to Adobe Target must use an active-on-edge [merge policy](../profile/merge-policies/ui-guide.md).

**Are Data Usage Labeling and Enforcement (DULE) and Consent Policies enforced?**

Yes. The Data Governance and Consent Policies created and associated with the corresponding Marketing Actions will enforce activation of attributes.