---
title: Evolution from Audience Manager
description: Understand how to migrate from Audience Manager to Real-Time CDP
---

# Evolution from Audience Manager

As your organization evolves to use Adobe Real-Time CDP, explore these considerations to prepare your data and to become aware of critical differences between the two technologies. This article is aimed at an administrator audience.

## 1. Consider data architecture within Audience Manager.

As you consider migrating from Audience Manager to Real-Time CDP, this is a critical time to analyze your [Audience Manager segments](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/segments/segments-purpose.html?lang=en) and determine what the [signals](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/data-explorer/data-explorer-understanding-signals.html?lang=en), [traits](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/traits/trait-details-page.html?lang=en), and [rules](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/segments/segment-builder.html?lang=en#segment-builder-section) are that make up those segments.

Furthermore, think about the data sources that you use for the segments.

We recommend that you categorize your segments as follows: 

* Segments that can be sent to Experience Platform via the [Audience Manager Source Connector](/help/sources/connectors/adobe-applications/audience-manager.md), as they have no data dependencies, no destination/activation challenges, and their segmentation rules can be created through AEP-native data collection later. 
* (2) Segments that have rules that can be supported but may have contain data that won't be available in Real-Time CDP. And, lastly, 
* (3) segments that cannot be created in AEP and are missing functionality.

Adobe Real-Time CDP offers 3 types of segment evaluation: Batch, Streaming, and Edge. Customers that leverage real-time segments in Audience Manager may be restricted by the current limitation of 500 streaming segments in Real-Time CDP. Read more about segmentation guardrails.

## 2. Which segments are critical to send through via Audience Manager Source Connector?

Based on the evaluation criteria, segments that have no data dependencies, no destination/activation challenges, and their segmentation rules can be created through AEP-native data collection, Adobe Experience Platform Web SDK, at a later date should be sent through the AAM Source Connector.

## 3. Will you be leveraging Experience Cloud Audiences Destination Card to bring data back to Audience Manager?

Segments that have rules that can be supported but have activation dependencies to Audience Manager, could be sent to AAM via the Experience Cloud Audiences Destination Card.

## 4. What are destinations you have in place in Audience Manager today that you can start moving to Real-Time CDP?

It is strongly encouraged that segments using Audience Manager People-based Destinations get pushed to Real-Time CDP via the AAM Source Connector and then activation is achieved through Real-Time CDP. All people-based destinations available in Audience Manager are also available in Real-Time CDP: Facebook, Google Customer Match, LinkedIn and additional 1st party data and media strategy partners like Pinterest, Snapchat, Tiktok, Amazon DSP and The Trade Desk are available. Real-Time CDP currently supports 60+ destinations natively in the catalog; 20+ of which are advertising/social destinations that support 1st party audience matching.

## Next steps

After reading this page, you now have a first set of considerations to work through as you start your evolution from Audience Manager to Real-Time CDP.
