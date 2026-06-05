---
title: Deploy JavaScript Tags to Manage Customer Consent
description: Learn how to manage customer opt-in and opt-out signals for various Adobe solutions in Adobe Experience Platform.
exl-id: 7762c42f-71c8-4f29-a96b-c6c04b838a91
TQID: https://experienceleague.adobe.com/PkcvM2FHjglClEhm6zvl8hkMAgcjPgDngniEMTANFeo
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: df80eeb1-8d72-467e-b0df-9d51c7d3a0a1
    internal-label: Audience Manager
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a8b0238e-1d43-4679-a3b4-5ba1bad83baa
    internal-label: Implementation
  - id: b82b475d-1e7d-46c6-9172-1f9c73004b11
    internal-label: Integrations
  - id: c93393a4-e558-47e1-992e-c91ed4d480ce
    internal-label: Implementation
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: e9dbdbc5-3e52-40f0-a7bc-e18542967b7a
    internal-label: Implementations
  - id: eb9732ab-8232-4b21-bc4c-89de86dbe4d7
    internal-label: Integrations
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
  - id: f7c7de77-382f-4f48-8b36-61a170f06d3d
    internal-label: Integrations
  - id: fc7979f3-56c3-43ca-9784-f1ea3dc69c4b
    internal-label: Integrations
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: df312454-73c4-43f6-a90e-18f5043f074c
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Deploy JavaScript tags to manage customer consent

Legal privacy regulations like the General Data Protection Regulation (GDPR) require companies to be able to manage consent for their users. Adobe customers may require visitors to opt-in before Adobe solutions execute for any given visitor. Visitors should have the ability to manage their opt-in and opt-out status.

Adobe Experience Cloud customers require a variety of implementations of these requirements. Some use enterprise-level consent managers and others build their own.

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

## Experience Cloud ID

[!DNL Experience Cloud ID] currently fires automatically if it is placed on a customer page. 

Please consider using the [Adobe opt-in object](https://experienceleague.adobe.com/docs/id-service/using/implementation/opt-in-service/optin-overview.html) to control the firing of this tag in concert with your consent management platform.

## Target

Adobe Experience Platform does not fire [!DNL Target] automatically. [!DNL Target] fires only if you specifically tell it to in a rule action. Use the rule conditions to determine when and what to fire. For example, to use cookies to determine opt-in status, set a data element to read that cookie and use it as a condition in the rule to determine when to fire the Load [!DNL Target] action. 

Separately, you could consider using the [Adobe opt-in object](https://experienceleague.adobe.com/docs/id-service/using/implementation/opt-in-service/optin-overview.html) to control the firing of this tag in concert with your consent management platform.

Integrations with consent managers (such as OneTrust) can set and track the consent cookies for customers, which can then be used in the rule builder.
