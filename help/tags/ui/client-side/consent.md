---
title: Deploy JavaScript Tags to Manage Customer Consent
description: Learn how to manage customer opt-in and opt-out signals for various Adobe solutions in Adobe Experience Platform.
exl-id: 7762c42f-71c8-4f29-a96b-c6c04b838a91
---
# Deploy JavaScript tags to manage customer consent

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

Legal privacy regulations like the General Data Protection Regulation (GDPR) require companies to be able to manage consent for their users. Adobe customers may require visitors to opt-in before Adobe solutions execute for any given visitor. Visitors should have the ability to manage their opt-in and opt-out status.

Adobe Experience Cloud customers require a variety of implementations of these requirements. Some use enterprise-level consent managers and others build their own.

Adobe Experience Platform extension developers use extensions and the rule builder to define opt-in and opt-out solutions.

This document contains information about how to prevent Adobe tags from firing until consent is acquired.

## Advertising Cloud

Adobe Experience Platform does not fire [!DNL Advertising Cloud] automatically. [!DNL Advertising Cloud] only fires if you specifically tell it to in a rule action. Use the rule conditions to determine when and what to fire. For example, to use cookies to determine opt-in status, set a data element to read that cookie and use it as a condition in the rule to determine when to fire the Track Conversion action.

Integrations with consent managers (such as OneTrust) can set and track the consent cookies for customers, which can then be used in the rule builder.

## Analytics

In the Link Tracking section of the [!DNL Analytics] extension's configuration settings, make sure the following are *not* selected:

* Track download links
* Track outbound links

When these settings are not selected, Platform does not fire [!DNL Adobe Analytics] automatically. [!DNL Analytics] fires only if you specifically tell it to in a rule action. Use the rule conditions to determine when and what to fire. For example, to use cookies to determine opt-in status, set a data element to read that cookie and use it as a condition in the rule to determine when to fire the Send Beacon action. 

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
