---
keywords: launch extensions;launch extension;launch destinations; platform launch extensions;platform launch extension;platform launch destinations
title: Experience Platform Launch Extensions
seo-title: Experience Platform Launch Extensions
description: Launch is the next-generation of tag management capabilities from Adobe. Launch gives customers a simple way to deploy and manage all of the analytics, marketing, and advertising tags necessary to power relevant customer experiences.
seo-description: Launch is the next-generation of tag management capabilities from Adobe. Launch gives customers a simple way to deploy and manage all of the analytics, marketing, and advertising tags necessary to power relevant customer experiences.
---

# Adobe Experience Platform Launch extensions {#experience-platform-launch-extensions}

Adobe Experience Platform Launch is the next-generation of tag management capabilities from Adobe. Platform Launch gives customers a simple way to deploy and manage all of the analytics, marketing, and advertising tags necessary to power relevant customer experiences. Platform Launch is offered to Adobe Experience Cloud customers as an included, value-add feature.

For an introduction to Experience Platform Launch capabilities, see the resources below:
*  Adobe Experience Platform Launch [documentation](https://experienceleague.adobe.com/docs/launch/using/overview.html)
*  Adobe Experience Platform Launch [quick start videos](https://experienceleague.adobe.com/docs/launch/using/intro/get-started/videos.html?). Start with [Introduction to Adobe Experience Platform Launch](https://www.youtube.com/embed/rwqqkG1SERU) and [Publishing process overview](https://helpx.adobe.com/analytics/how-to/adobe-launch-publishing-process.html), then move on to the next concepts. 

## How to find the Platform Launch extensions in the Adobe Real-time CDP interface {#how-to-find-extensions-in-interface}

To find the Platform Launch extensions in the Adobe Real-time CDP interface, browse to **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]** and select **[!UICONTROL Extensions]** in the **[!UICONTROL Types]** filter. 

![Extensions filter in the interface](/help/rtcdp/destinations/assets/extensions-filter.png)

## How Platform Launch extensions work {#how-extensions-work}

Platform Launch extensions forward raw event data to several types of destinations. Think of extensions as an **Event Forwarding** type of destination. This is a simpler type of integration with destination platforms, which only forwards raw event data. Examples of those are the [Gainsight personalization extension](/help/rtcdp/destinations/gainsight-extension.md) or the [Confirmit Voice of the Customer extension](/help/rtcdp/destinations/confirmit-digital-feedback-extension.md).

**Profile/Segment Export** destinations in Real-time Customer Data Platform capture event data, combine it with other data sources, apply segmentation, and export segments and qualified profiles to destinations. Examples of those are the [Amazon S3 cloud storage destination](/help/rtcdp/destinations/amazon-s3-destination.md) or the [Google Display & Video 360 advertising destination](/help/rtcdp/destinations/google-dv360-destination.md).

![Experience Platform Launch extensions compared to other destinations](/help/rtcdp/destinations/assets/launch-and-other-destinations.png)

## Benefits of using Platform Launch extensions {#extensions-benefits}

Adobe Experience Platform Launch is free for existing Experience Cloud customers. Platform Launch simplifies tag deployment on your website via easy-to-use extensions that you can install, configure, update, and delete. Platform Launch has a small footprint on your website and allows you to keep your pages loading quickly.

>[!IMPORTANT]
>
>While you cannot activate segments to Platform Launch extensions, you can set up rules to only forward event data in certain situations. Read more below.

You can create *rules* that determine when to forward event data to extensions. This powerful functionality enables you to forward event data only in certain situations as opposed to sending event data on every interaction. For more information, read about rules in the [Adobe Experience Platform Launch documentation](https://experienceleague.adobe.com/docs/launch/using/reference/manage-resources/rules.html).

## Example use cases for Platform Launch extensions {#extensions-use-cases}

Platform Launch extensions enable you to satisfy various customer use cases. Some example use cases for using Platform Launch extensions are:

* You can send website or native app data to Facebook via the Facebook pixel extension. Facebook Pixel indicates which parts of your site or app a visitor navigated to, forwards that information to Facebook, and you can retarget your visitor via Facebook.
* You can forward event data from your websites and apps into Google Analytics to analyze and make decisions based on that data.
* You could turn on a client-side chatbox app at the right time based on how your users are interacting with your pages, according to rules you set up in Platform Launch.


## Extension categories {#extension-categories}

Platform Launch extensions can fall under the following categories in Adobe Real-time CDP:

* [Advertising](/help/rtcdp/destinations/advertising-destinations.md)
* [Analytics](/help/rtcdp/destinations/analytics-destinations.md)
* [Data Management Platform](/help/rtcdp/destinations/dmp-destinations.md)
* [Email marketing destinations](/help/rtcdp/destinations/email-marketing-destinations.md)
* [Personalization](/help/rtcdp/destinations/personalization-destinations.md)
* [Surveys](/help/rtcdp/destinations/survey-destinations.md)
* [Voice of the customer](/help/rtcdp/destinations/voice-of-customer-destinations.md)
