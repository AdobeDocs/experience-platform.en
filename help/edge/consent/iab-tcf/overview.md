---
title: IAB TCF 2.0 Support in the Adobe Experience Platform Web SDK
description: Learn how to support IAB TCF 2.0 consent preferences using the Adobe Experience Platform Web SDK
keywords: consent;setConsent;Profile Privacy Field group;Experience Event Privacy Field group;Privacy Field group;IAB TCF 2.0;Real-Time CDP;
exl-id: 78e728f4-1604-40bf-9e21-a056024bbc98
---
# IAB TCF 2.0 support in the Adobe Experience Platform Web SDK

The Adobe Experience Platform Web SDK has support for the Interactive Advertising Bureau Transparency & Consent Framework, version 2.0 (IAB TCF 2.0). This guide shows the requirements for supporting IAB TCF 2.0 through Adobe Experience Platform Web SDK integrating with Adobe Real-Time Customer Data Platform, Audience Manager, Experience Events, Adobe Analytics, and Experience Edge.

Additionally, the following guides are available to assist in learning how to integrate IAB TCF 2.0 with and without tags.

- [With tags](./with-launch.md)
- [Without tags](./without-launch.md)

## Getting started

In order to implement the Web SDK with IAB TCF 2.0, you are required to have a working understanding of the Experience Data Model (XDM) and Experience Events. Before you start, please review the following document:

- [Experience Data Model (XDM) System overview](../../../xdm/home.md): Standardization and interoperability are key concepts behind Adobe Experience Platform. [!DNL Experience Data Model (XDM)], driven by Adobe, is an effort to standardize customer experience data and define schemas for customer experience management.

## Experience Platform integration

To send consent data to Adobe Experience Platform using the SDK, the following is required:

- A dataset whose schema is based on the [!DNL XDM Individual Profile] class and contains TCF 2.0 consent fields, enabled for use in [!DNL Real-Time Customer Profile].
- A datastream set up with Platform and the Profile-enabled dataset mentioned above.

Please refer to the guide on [TCF 2.0 compliance](../../../landing/governance-privacy-security/consent/iab/overview.md) for instructions on creating the required datasets and datastream.

## Audience Manager integration

Adobe Audience Manager (AAM) includes support for IAB TCF 2.0, which enables you to evaluate, honor, and forward customer privacy choices to downstream partners. <!--For more information, read the documentation on [Sending Data to Audience Manager](../audience-manager/audience-manager-overview.md).-->

>[!TIP]
>
>To integrate with Audience Manager through Adobe Experience Platform Web SDK, make sure you have a datastream set up to forward to Adobe Audience Manager.

## Experience Events and Adobe Analytics integration

Whereas the Real-Time CDP and Audience Manager's audiences keep track of a customer's current consent preferences, Experience Events can hold a customer's consent preferences that were active when the event was collected.

To collect consent information on events, the following is required:

- A dataset based on the [!DNL XDM Experience Event] class, with the [!DNL Experience Event] privacy schema field group.
- A datastream set up with the [!DNL XDM Experience Event] dataset above.

For more information on how to convert an XDM Experience Event to an Analytics hit, start by reading the [Analytics overview](../../data-collection/adobe-analytics/analytics-overview.md) documentation.

## Adobe Experience Platform Web SDK integration

The sections below describe the main integration points between IAB TCF 2.0 and Adobe Experience Platform Web SDK.

>[!NOTE]
>
>Even without Real-Time CDP or Audience Manager set up, you can still integrate IAB TCF 2.0 with the Web SDK. The consent preferences can be used to control the collection of Experience Events and setting an identity cookie.

### Default consent

Default consent is used when there is no consent preference already saved for a customer. This means the default consent options can control the behavior of Adobe Experience Platform Web SDK and change based on a customer's region.

For example, if you have a customer that is not within the jurisdiction of General Data Protection Regulation (GDPR), the default consent could be set to `in`, but inside the jurisdiction of GDPR, the default consent could be set to `pending`. Your Consent Management Platform (CMP) might detect the customer's region and provide the flag `gdprApplies` to IAB TCF 2.0. This flag can be used to set the default consent.

For more information on default consent, refer to the [default consent section](../../fundamentals/configuring-the-sdk.md#default-consent) in the SDK configuration documentation.

### Setting consent when it changes

Adobe Experience Platform Web SDK has a `setConsent` command, which communicates your customer's consent preferences to all the Adobe services using IAB TCF 2.0. If you are integrating with Real-Time CDP, this updates your customer's profile. If you are integrating with Audience Manager, this updates your customer's information. Calling this also sets a cookie with an all-or-nothing consent preference that controls whether future Experience Events are allowed to be sent. It is intended that this action is called whenever consent changes. On future page loads, the Experience Edge consent cookie will be read to determine whether Experience Events can be sent, and whether an identity cookie can be set.

Similar to Audience Manager's IAB TCF 2.0 integration, Experience Edge gives consent when a customer has provided their explicit consent to the following purposes:

- **Purpose 1:** Store and/or access information on a device
- **Purpose 10:** Develop and improve products
- **Special Purpose 1:** Ensure security, prevent fraud, and debug. (Per IAB TCF regulations, this is always consented to)
- **Adobe Vendor Permission:** Consent for Adobe (Vendor 565)

For more information on the `setConsent` command, read the documentation on [Supporting Consent](../../consent/supporting-consent.md).

### Adding Consent to Experience Events

Adobe Experience Platform Web SDK has a `sendEvent` command that collects an Experience Event. If you are integrating with Experience Events or Adobe Analytics and would like the consent preferences on every Experience Event, you should add the consent information to every `sendEvent` command.

For more information on the `sendEvent` command, read the documentation on [tracking events](../../fundamentals/tracking-events.md).

## Next steps

Now that you have a basic understanding of the IAB Transparency & Consent Framework 2.0, please refer to either of the guides on using IAB TCF 2.0 [with tags](./with-launch.md) or [without tags](./without-launch.md).
