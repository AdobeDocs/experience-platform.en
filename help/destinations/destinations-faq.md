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


**Do I need to add any apps or pixels to my Facebook advertiser account?**

No. As this is not a pixel-based integration, there is no need to add any pixels to your advertiser account.

**How long does Facebook take to process information from Adobe Experience Platform?**

[!DNL Facebook Custom Audiences] needs up to an hour to process information received from [!DNL Platform].

**Can I use [!DNL Facebook Custom Audiences] for audience targeting in other [!DNL Facebook] apps, like [!DNL Instagram]?**

You can use the [!DNL Facebook Custom Audiences] destination for audience targeting across Facebook's family of apps that are supported by [!DNL Facebook Custom Audiences], including [!DNL Facebook], [!DNL Instagram], [!DNL Audience Network], and [!DNL Messenger]. Selection of the app which advertisers want to run campaigns on is indicated at the placement level in [!DNL Facebook Ads Manager].

**What is the difference between the [!DNL Facebook Custom Audiences] destination and [!DNL Website Custom Audiences]?**

The [!DNL Facebook Custom Audiences] destination uses [!DNL Platform] identities when sending audiences to [!DNL Facebook], while [!DNL Website Custom Audiences] use the Facebook pixel integrated in a website.
