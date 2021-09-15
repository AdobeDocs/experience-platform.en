---
title: Supported use cases with the Adobe Experience Platform Web SDK
description: Learn which use cases are supported with the Adobe Experience Platform Web SDK.
keywords: web sdk;use cases
exl-id: e0643c2c-ceb3-4ea2-aafa-1e18e0c66453
---
# Supported use cases

This page lists the supported use cases for Web SDK, with links to additional information.

## General

| Use Case | More Information |
| --- | --- |
| Single streamlined SDK | |
| Global data collection network |  |
| Course grained consent |  |
| Collect customer consent under various standards | <ul><li>[Adobe Consent 2.0 Support](../../landing/governance-privacy-security/consent/adobe/overview.md)</li><li>[IAB TCF 2.0 Support](../../landing/governance-privacy-security/consent/iab/overview.md)</li><li>[Integrate the SDK to sent consent signals to Edge Network](../../landing/governance-privacy-security/consent/sdk.md)</li></ul> |
| ECID support | For information on retrieving the ECID see our documentation [here](https://experienceleague.adobe.com/docs/experience-platform/edge/identity/overview.html?lang=en#first-party-identity) and [here](https://experienceleague.adobe.com/docs/experience-platform/edge/extension/accessing-the-ecid.html?lang=en#extension) |
| Collect multiple entities |  |
| Device Graph support (Public/Private) | [Documentation](https://experienceleague.adobe.com/docs/analytics/components/cda/device-graph.html?lang=en) |
| Send data to multiple orgs on the page | [Documentation](./interacting-with-multiple-properties.md) |
| Detailed error reporting and logs |  |
| Trace requests client side and server side |  |
| tag extension | [Web SDK extension docs](../../tags/extensions/web/sdk/overview.md) |
| Debugging tools available | [Debugger extension](https://experienceleague.adobe.com/docs/debugger-learn/tutorials/experience-platform-debugger/introduction-to-the-experience-platform-debugger.html?lang=en) and [Griffon](https://aep-sdks.gitbook.io/docs/beta/project-griffon) |

{style="table-layout:auto"}

## Adobe Experience Platform

| Use Case | More Information |
| --- | --- |
| Send Experience events |  |
| Offer Decisioning | [Documentation](../personalization/offer-decisioning/offer-decisioning-overview.md) |
| If dataset is enabled for profile, ability to send data to Real-time Customer Data Profile in real-time |  |  
| Send data to Customer Journey Analytics in real-time |  |
| Write consent to profile | [Documentation](../../landing/governance-privacy-security/consent/sdk.md) |
| Forward data server-side in real-time to third-parties| [Documentation](../../tags/ui/event-forwarding/overview.md) |
| Identity namespace support |  |

{style="table-layout:auto"}

## Adobe Analytics

| Use Case | More Information |
| --- | --- |
| Analytics for Target (A4T) |  |
| No Analytics for Target (A4T) latency |  |
| Multi-suite tagging |  |
| Bot filtering |  |
| Props, eVars, and events |  |
| ListVar support for Adobe Analytics |  |
| OS and browser version |  |
| Out-of-the-box variables | [Automatically mapped variables](../data-collection/adobe-analytics/automatically-mapped-vars.md) |
| VISTA rules/processing rules |  |
| Visitor attributes support |  |
| Exit link support |  |
| Custom links/download links |  |
| State and action tracking |  |
| Event serialization for standard events |  |
| Products variable | [Documentation](../data-collection/collect-commerce-data.md#actions-related-to-products) |

{style="table-layout:auto"}

## Adobe Target

| Use Case | More Information |
| --- | --- |
| All activity types |  |
| Native and SPA Visual Experience Composer support | [Documentation](../personalization/adobe-target/spa-implementation.md) |
| Form-based Composer |  |
| Support for global mbox | [Documentation](../personalization/rendering-personalization-content.md#automatically-rendering-content) |
| Custom mboxes | [Documentation](../personalization/rendering-personalization-content.md#manually-rendering-content) |
| Analytics for Target (A4T) |  |
| Environment support |  |
| Workspace support |  |
| QA links in Adobe Target |  |
| Target based on geo/device in Adobe Target|  |
| Visitor attributes support |  |
| Profile scripts |  |
| XDM become mbox parameters |  |
| Redirect offers supported with A4T reporting | [Documentation](https://experienceleague.adobe.com/docs/target/using/experiences/offers/offer-redirect.html?lang=en) |
| Updating the Target profile | [Documentation](../personalization/adobe-target/target-overview.md#single-profile-update) |
| Recommendations |  |
| mBox 3rd party ID |  | 
| Response tokens | [Documentation](../personalization/adobe-target/accessing-response-tokens.md) |

{style="table-layout:auto"}

## Adobe Audience Manager

| Use Case | More Information |
| --- | --- |
| Audience Analytics |  |
| Segment sharing to Adobe Analytics |  |
| Visitor attributes support |  |
| Partner syncs |  |
| URL destinations |  |
| Cookie destinations |  |
| Environment support |  |
| Sync Adobe Experience Platform namespaces to Audience Manager data sources |  |
| Authenticated or known IDs |  |

{style="table-layout:auto"}
