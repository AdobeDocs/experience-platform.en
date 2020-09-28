---
title: IAB Transparency & Consent Framework 2.0 overview
seo-title: Supporting Adobe Experience Platform Web SDK consent preferences from the Interactive Advertising Bureau Transparency & Consent Framework 2.0
description: Learn how to support IAB TCF 2.0 consent preferences with Experience Platform Web SDK
seo-description: Learn how to support IAB TCF 2.0 consent preferences with Experience Platform Web SDK
keywords: consent;setConsent;Profile Privacy Mixin;Experience Event Privacy Mixin;Privacy Mixin;IAB TCF 2.0;Real-time CDP;Real-time Customer Data Profile
---

# IAB Transparency & Consent Framework 2.0 overview

The Adobe Experience Platform Web SDK (AEP Web SDK) has support for the Interactive Advertising Bureau Transparency & Consent Framework, version 2.0 (IAB TCF 2.0). This guide shows the requirements for supporting IAB TCF 2.0 through the AEP Web SDK integrating with Real-time Customer Data Platform, Audience Manager, Experience Events, Analytics, and Experience Edge.

Additionally, the following guides are available to assist in learning how to integrate IAB TCF 2.0 with and without Adobe Experience Platform Launch.

- [With Adobe Experience Platform Launch](./with-launch.md)
- [Without Adobe Experience Platform Launch](./without-launch.md)

## Getting started

In order to implement the AEP Web SDK with IAB TCF 2.0, it is required that you have a working understanding of the Experience Data Model (XDM) and Experience Events. Before you start, please review the following document:

- [Experience Data Model (XDM) System overview](../../../xdm/home.md): Standardization and interoperability are key concepts behind Adobe Experience Platform. [!DNL Experience Data Model] (XDM), driven by Adobe, is an effort to standardize customer experience data and define schemas for customer experience management.

## Real-time Customer Data Platform integration

Built on Adobe Experience Platform, Adobe Real-time Customer Data Platform (Real-time CDP) helps you bring together known and anonymous data from multiple enterprise sources. This allows you to create customer profiles that can be used to provide personalized customer experiences across all channels and devices in real time. To send consent data to Real-time CDP through the AEP Web SDK, the following is required:

- A dataset based on the [!DNL XDM Individual Profile] class, enabled for use in [!DNL Real-time Customer Profile], with the Profile privacy mixin.
- An edge configuration setup with Real-time CDP, and the profile dataset mentioned above.

Please refer to the tutorial on [creating datasets for capturing TCF 2.0 consent](../../../rtcdp/privacy/dataset-preparation.md) for how to create the required dataset. 

Refer to the [IAB TCF 2.0 compliance overview](../../../rtcdp/privacy/overview.md) for instructions on creating the edge configuration.

## Audience Manager integration

Adobe Audience Manager (AAM) also has support for IAB TCF 2.0 which enables you to evaluate, honor, and forward customer privacy choices to downstream partners. For more information, read the documentation on [Sending Data to Audience Manager](../audience-manager/audience-manager-overview.md).

>[!TIP]
>
>To integrate with Audience Manager through the AEP Web SDK, make sure you have an edge configuration set up to forward to Adobe Audience Manager.

## Experience Events and Adobe Analytics integration

Whereas the Real-time CDP and Audience Manager's audiences keep track of a customers current consent preferences, Experience Events can hold a customers consent preferences that were active when the event was collected.

To collect consent information on events, the following is required:

- A dataset based on the [!DNL XDM Experience Event] class, with the [!DNL Experience Event] privacy mixin.
- An edge configuration set up with the [!DNL XDM Experience Event] dataset above.

For more information on how to convert an XDM Experience Event to an Analytics hit, start by reading the [Analytics overview](../analytics/analytics-overview.md) documentation.

## AEP Web SDK integration

The following sections below describe the main integration points between the IAB TCF 2.0 and the AEP Web SDK.

>[!NOTE]
>
>Even without Real-time CDP or Audience Manager set up, you can still integrate IAB TCF 2.0 with the Web SDK. The consent preferences can be used to control the collection of Experience Events and setting an identity cookie.

### Default consent

Default consent is used when there is no consent preference already saved for a customer. This means the default consent options can control the behavior of the AEP Web SDK and change based on a customers region.

For example, if you have a customer that is not within the jurisdiction of General Data Protection Regulation (GDPR), the default consent could be set to "in," but inside the jurisdiction of GDPR, the default consent could be set to "pending." Your cloud management platform (CMP) may detect the customers region and provide the flag `gdprApplies` to the IAB TCF 2.0. This flag can be used to set the default consent.

For more information on default consent, refer to the [default consent section](../../fundamentals/configuring-the-sdk.md#default-consent) in the SDK configuration documentation.

### Setting consent when it changes

The AEP Web SDK has a `setConsent` command, which communicates your customers consent preferences to all the Adobe services using IAB TCF 2.0. If you are integrating with Real-time CDP, this updates the your customers profile. If you are integrating with Audience Manager, this updates your customers information. Calling this also sets a cookie with an all-or-nothing consent preference that controls whether future Experience Events are allowed to be sent. It is intended that this action is called whenever consent changes. On future page loads, the Experience Edge consent cookie will be read to determine whether Experience Events can be sent, and whether an identity cookie can be set.

Similar to Audience Manager's IAB TCF 2.0 integration, Experience Edge gives consent when a customer has provided their explicit consent to the following purposes:

- **Purpose 1:** Store and/or access information on a device
- **Purpose 10:** Develop and improve products
- **Special Purpose 1:** Ensure security, prevent fraud, and debug. (Per IAB TCF regulations, this is always consented to)
- **Adobe Vendor Permission:** Consent for Adobe (Vendor 565)

For more information on the `setConsent` command, read the documentation on [Supporting Consent](../../fundamentals/supporting-consent.md).

### Adding Consent to Experience Events

AEP Web SDK has a `sendEvent` command that collects an Experience Event. If you are integrating with Experience Events or Adobe Analytics and would like the consent preferences on every Experience Event, you should add the consent information to every `sendEvent` command.

For more information on the `sendEvent` command, read the documentation on [tracking events](../../fundamentals/tracking-events.md).

## Next steps

Now that you have a basic understanding of the IAB Transparency & Consent Framework 2.0, please refer to either of the guides on using IAB TCF 2.0 [with Adobe Experience Platform Launch](./with-launch.md) or [without Adobe Experience Platform Launch](./without-launch.md).
