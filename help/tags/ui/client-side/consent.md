---
title: Deploy JavaScript Tags to Manage Customer Consent
description: Learn how to manage customer opt-in and opt-out signals for various Adobe solutions in Adobe Experience Platform.
exl-id: 7762c42f-71c8-4f29-a96b-c6c04b838a91
TQID: 'https://experienceleague.adobe.com/PkcvM2FHjglClEhm6zvl8hkMAgcjPgDngniEMTANFeo'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: df80eeb1-8d72-467e-b0df-9d51c7d3a0a1
    internal-label: Audience Manager
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: e1971122-7081-4556-9222-8a31bd71800c
    internal-label: Experience Cloud Services
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: 6f307efa-2798-5b6d-8079-f765b66875c1
    internal-label: Cookies
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Deploy JavaScript tags to manage customer consent

Legal privacy regulations like the General Data Protection Regulation (GDPR) require companies to be able to manage consent for their users. Adobe customers may require visitors to opt-in before Adobe solutions execute for any given visitor. Visitors should have the ability to manage their opt-in and opt-out status.

Adobe CX Enterprise customers require a variety of implementations of these requirements. Some use enterprise-level consent managers and others build their own.

Adobe Experience Platform extension developers use extensions and the rule builder to define opt-in and opt-out solutions.

This document contains information about how to prevent Adobe tags from firing until consent is acquired.

## Adobe Advertising

Adobe Experience Platform does not fire [!DNL Adobe Advertising] automatically. [!DNL Advertising] only fires if you specifically tell it to in a rule action. Use the rule conditions to determine when and what to fire. For example, to use cookies to determine opt-in status, set a data element to read that cookie and use it as a condition in the rule to determine when to fire the Track Conversion action.

Integrations with consent managers (such as OneTrust) can set and track the consent cookies for customers, which can then be used in the rule builder.

## Analytics

In the Link Tracking section of the [!DNL Analytics] extension's configuration settings, make sure the following are *not* selected:

* Track download links
* Track outbound links

When these settings are not selected, Experience Platform does not fire [!DNL Adobe Analytics] automatically. [!DNL Analytics] fires only if you specifically tell it to in a rule action. Use the rule conditions to determine when and what to fire. For example, to use cookies to determine opt-in status, set a data element to read that cookie and use it as a condition in the rule to determine when to fire the Send Beacon action. 

Separately, you could consider using the [Adobe opt-in object](https://experienceleague.adobe.com/docs/id-service/using/implementation/opt-in-service/optin-overview.html) to control the firing of this tag in concert with your consent management platform.

Integrations with consent managers (such as OneTrust) can set and track the consent cookies for customers, which can then be used in the rule builder.

## Audience Manager

DIL is currently set to fire automatically if it is placed on a customer page. Please consider using the [Adobe opt-in object](https://experienceleague.adobe.com/docs/id-service/using/implementation/opt-in-service/optin-overview.html) to control the firing of this tag in concert with your consent management platform.

[!DNL Adobe] recommends that you use server-side forwarding within [!DNL Analytics].

## Visitor ID Service {#experience-cloud-id}

[!DNL Visitor ID Service] currently fires automatically if it is placed on a customer page. 

Please consider using the [Adobe opt-in object](https://experienceleague.adobe.com/docs/id-service/using/implementation/opt-in-service/optin-overview.html) to control the firing of this tag in concert with your consent management platform.

## Target

Adobe Experience Platform does not fire [!DNL Target] automatically. [!DNL Target] fires only if you specifically tell it to in a rule action. Use the rule conditions to determine when and what to fire. For example, to use cookies to determine opt-in status, set a data element to read that cookie and use it as a condition in the rule to determine when to fire the Load [!DNL Target] action. 

Separately, you could consider using the [Adobe opt-in object](https://experienceleague.adobe.com/docs/id-service/using/implementation/opt-in-service/optin-overview.html) to control the firing of this tag in concert with your consent management platform.

Integrations with consent managers (such as OneTrust) can set and track the consent cookies for customers, which can then be used in the rule builder.
