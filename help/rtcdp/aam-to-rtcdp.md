---
title: Evolution from Audience Manager to Real-Time CDP
description: Understand the considerations before planning your migration from Audience Manager to Real-Time CDP.
---

# Evolution from Audience Manager to Real-Time CDP

As your organization evolves to use Adobe Real-Time CDP, explore these considerations to prepare your data and to become aware of critical differences between the two technologies. This article is aimed at an administrator audience.

## 1. Consider data architecture within Audience Manager

As you consider migrating from Audience Manager to Real-Time CDP, this is a critical time to analyze your [Audience Manager segments](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/segments/segments-purpose.html?lang=en) and determine what the [signals](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/data-explorer/data-explorer-understanding-signals.html?lang=en), [traits](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/traits/trait-details-page.html?lang=en), and [rules](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/segments/segment-builder.html?lang=en#segment-builder-section) are that make up those segments.

Furthermore, think about the data sources that you currently use in Audience Manager.

We recommend that you categorize your segments as follows: 

* Segments that can be sent to Experience Platform via the [Audience Manager Source Connector](/help/sources/connectors/adobe-applications/audience-manager.md), as they have no data dependencies, no destination or activation challenges, and their segmentation rules can be created through the Real-time CDP [segment builder](/help/segmentation/ui/segment-builder.md) later. 
* Segments that have rules that can be supported but may have contain data that won't be available in Real-Time CDP.
* Segments that cannot be created in Real-time CDP and are missing functionality.

>[!TIP]
>
>Adobe Real-Time CDP offers [three types of segment evaluation](/help/segmentation/home.md#evaluate-segments): [!UICONTROL Batch], [!UICONTROL Streaming], and [!UICONTROL Edge]. Customers who use real-time segments in Audience Manager may be restricted by the current limitation of 500 streaming segments in Real-Time CDP. Read more about [segmentation guardrails](/help/profile/guardrails.md).

## 2. Which segments are critical to send through via Audience Manager Source Connector?

Based on their evaluation criteria, segments that have no data dependencies, no destination or activation challenges, and their segmentation rules can be created through Real-Time CDP data collection like [Adobe Experience Platform Web SDK](/help/edge/web-sdk-faq.md) at a later date should be sent through the Audience Manager Source Connector.

## 3. Will you be leveraging the Experience Cloud Audiences Destination Card to bring data back to Audience Manager?

Segments that have rules that can be supported in Real-Time CDP but have activation dependencies to Audience Manager could be sent to Audience Manager via the [Experience Cloud Audiences](/help/destinations/catalog/adobe/experience-cloud-audiences.md) destination card.

## 4. Which destinations do you have in place in Audience Manager today that you can start moving to Real-Time CDP?

We strongly recommend that segments activated in Audience Manager to [people-based destinations](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/destinations/people-based/people-based-destinations-overview.html?lang=en) get pushed to Real-Time CDP via the Audience Manager Source Connector, to then activate through Real-Time CDP. 

All people-based destinations available in Audience Manager - [Facebook](/help/destinations/catalog/social/facebook.md), [Google Customer Match](/help/destinations/catalog/advertising/google-customer-match.md), [LinkedIn](/help/destinations/catalog/social/linkedin.md) - are also available in Real-Time CDP.

Additional first-party data and media strategy partners like [Pinterest](/help/destinations/catalog/advertising/pinterest.md), [Snapchat](/help/destinations/catalog/advertising/snap-inc.md), [TikTok](/help/destinations/catalog/social/tiktok.md), [Amazon Ads](/help/destinations/catalog/advertising/amazon-ads.md) and [The Trade Desk](/help/destinations/catalog/advertising/tradedesk.md) are available. 

Real-Time CDP currently supports more than 60 destinations natively in the [catalog](/help/destinations/catalog/overview.md), over 20 of which are advertising or social destinations that support first-party audience matching.

## Next steps

After reading this page, you now have a first set of considerations to work through as you start your evolution from Audience Manager to Real-Time CDP. 
