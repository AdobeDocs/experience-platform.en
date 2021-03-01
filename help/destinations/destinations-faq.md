---
keywords: destinations; questions; frequently asked questions; faq; destinations faq
title: Destinations FAQ
seo-title: Destinations FAQ
description: Answers to the most frequently asked questions about Adobe Experience Platform Destinations
seo-description: Answers to the most frequently asked questions about Adobe Experience Platform Destinations
---

# Destinations FAQ {#faq}

## Destination latency {#latency}

**How long do Adobe Experience Platform destinations take to process audience data?**

Adobe Experience Platform currently supports sending profile and segment data to the following type of destinations:

* [!DNL REST API] endpoints, such as [!DNL Google DV360] or [!DNL Facebook];
* Messaging bus locations, such as [!DNL Amazon Kinesis] or [!DNL Azure Event Hub];
* Cloud storage locations, such as [!DNL Amazon AWS], [!DNL SFTP] locations, or email marketing destinations.

Destination latency is subject to the data format supported by the destination endpoint, and the profile export frequency.

Audience activation in destinations based on [!DNL REST APIs] and event hubs is minimal, and takes place in near real-time.

Audience activation for file-based destinations can take up to 24 hours.

Profile data exports take place on a daily basis.

## [!DNL Facebook Custom Audiences] (#facebook-faq)

**What do I need to do before I can activate audiences in [!DNL Facebook Custom Audiences]?**

Before you can send your audience segments to [!DNL Facebook], make sure you meet the following requirements:

- Your [!DNL Facebook] user account must have the **[!DNL Manage campaigns]** permission enabled for the Ad account that you plan to use.
- The **Adobe Experience Cloud** business account must be added as an advertising partner in your [!DNL Facebook Ad Account]. Use `business ID=206617933627973`. See [Add Partners to Your Business Manager](https://www.facebook.com/business/help/1717412048538897) in the Facebook documentation for details.
    >[!IMPORTANT]
    >
    > When configuring the permissions for Adobe Experience Cloud, you must enable the **Manage campaigns** permission. This is required for the [!DNL Adobe Experience Platform] integration.
- Read and sign the [!DNL Facebook Custom Audiences] Terms of Service. To do this, go to `https://business.facebook.com/ads/manage/customaudiences/tos/?act=[accountID]`, where `accountID` is your [!DNL Facebook Ad Account ID].

**Do I need to add any apps or pixels to my Facebook advertiser account?**

No. As this is not a pixel-based integration, there is no need to add any pixels to your advertiser account.

**How long does Facebook take to process information from Adobe Experience Platform?**

[!DNL Facebook Custom Audiences] needs up to an hour to process information received from [!DNL Platform].

**Can I use [!DNL Facebook Custom Audiences] for audience targeting in other [!DNL Facebook] apps, like [!DNL Instagram]?**

You can use the [!DNL Facebook Custom Audiences] destination for audience targeting across Facebook's family of apps that are supported by [!DNL Facebook Custom Audiences], including [!DNL Facebook], [!DNL Instagram], [!DNL Audience Network], and [!DNL Messenger]. Selection of the app which advertisers want to run campaigns on is indicated at the placement level in [!DNL Facebook Ads Manager].

**What is the difference between the [!DNL Facebook Custom Audiences] destination and [!DNL Website Custom Audiences]?**

The [!DNL Facebook Custom Audiences] destination uses [!DNL Platform] identities when sending audiences to [!DNL Facebook], while [!DNL Website Custom Audiences] use the Facebook pixel integrated in a website.

**Does the Adobe Experience Platform integration with [!DNL Facebook Custom Audiences] support disqualifying a users from an audience when they no longer qualify for it?**

Yes, the integration supports removing users from [!DNL Facebook Custom Audiences] when they no longer qualify.

**What kind of identifiers can I use to send audiences to [!DNL Facebook]?**

[!DNL Facebook] requires that no personally identifiable information (PII) is sent in clear. Therefore, the audiences activated to [!DNL Facebook] can be keyed off *hashed* identifiers, such as email addresses or phone numbers.

For detailed explanations on the ID matching requirements, see [ID matching requirements](catalog/social/facebook.md#id-matching-requirements).

## LinkedIn Matched Audiences {#linkedin}

**What do I need to do before I can activate audiences in [!DNL LinkedIn Matched Audiences]?**

Before you can use the [!UICONTROL LinkedIn Matched Audience] destination, make sure your [!DNL LinkedIn Campaign Manager] account has the [!DNL Creative Manager] permission level or higher.

To learn how to edit your [!DNL LinkedIn Campaign Manager] user permissions, see [Add, Edit, and Remove User Permissions on Advertising Accounts](https://www.linkedin.com/help/lms/answer/5753) in the LinkedIn documentation.

**What kind of identifiers can I use to send audiences to [!DNL LinkedIn]?**

[!DNL LinkedIn] requires that no personally identifiable information (PII) is sent in clear. Therefore, the audiences activated to [!DNL LinkedIn] can be keyed off *hashed* identifiers, such as email addresses or phone numbers.

For detailed explanations on the ID matching requirements, see [ID matching requirements](catalog/social/linkedin.md#id-matching-requirements).

