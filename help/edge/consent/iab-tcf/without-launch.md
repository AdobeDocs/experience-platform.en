---
title: Integrate IAB TCF 2.0 Support Using the Adobe Experience Platform Web SDK
description: Learn how to set up IAB TCF 2.0 support for your website without using tags.
seo-description: Learn how to set up IAB TCF 2.0 consent with Adobe Experience Platform Web SDK
exl-id: 14f1802a-0f8d-487f-ae17-5daaaab05162
---
# Integrate IAB TCF 2.0 support with the Platform Web SDK

This guide shows how to integrate the Interactive Advertising Bureau Transparency & Consent Framework, version 2.0 (IAB TCF 2.0) with Adobe Experience Platform Web SDK without using tags. For an overview of integrating with IAB TCF 2.0, read the [overview](./overview.md). For a guide on how to integrate with tags, read the [IAB TCF 2.0 guide for tags](./with-launch.md).

## Getting started

This guide uses the `__tcfapi` interface for accessing the consent information. It might be easier for you to integrate directly with your cloud management provider (CMP). However, the information in this guide might still be useful because the CMPs generally provide similar functionality to the TCF API.

>[!NOTE]
>
>These examples assume that by the time the code is run, `window.__tcfapi` is defined on the page. CMPs can provide a hook where you could run these functions when the `__tcfapi` object is ready.

To use IAB TCF 2.0 with tags and the Adobe Experience Platform Web SDK extension, you need to have an XDM schema available. If you have not set either of these up, start by viewing this page before proceeding.

Additionally, this guide requires you to have a working understanding of Adobe Experience Platform Web SDK. For a quick refresher, please read the [Adobe Experience Platform Web SDK overview](../../home.md) and the [Frequently asked questions](../../web-sdk-faq.md) documentation.

## Enabling default consent

If you want to treat all unknown users the same, you can set the default consent to `pending` or `out`. This queues or discards Experience Events until consent preferences are received.

For more information on default consent, refer to the [default consent section](../../fundamentals/configuring-the-sdk.md#default-consent) in the Platform Web SDK configuration documentation.

### Setting the default consent based on `gdprApplies`

Some CMPs provide the ability to determine whether General Data Protection Regulation (GDPR) applies to the customer. If you want to assume consent for customers where GDPR does not apply, you can use the `gdprApplies` flag in the TCF API call.

The following example shows one way to do this:

```javascript
var alloyConfiguration = { ... };
window.__tcfapi('getTCData', 2, function (tcData, success) {
  if (success) {
    alloyConfiguration.defaultConsent = tcData.gdprApplies ? "pending" : "in";
    window.alloy("configure", alloyConfiguration);
  }
});
```

In this example, the `configure` command is called after the `tcData` is obtained from the TCF API. If `gdprApplies` is true, default consent is set to `pending`. If `gdprApplies` is false, default consent is set to `in`. Be sure to fill in the `alloyConfiguration` variable with your configuration.

>[!NOTE]
>
>When default consent is set to `in`, the `setConsent` command can still be used to record your customers consent preferences.

## Using the setConsent event

IAB TCF 2.0 API provides an event for when the consent is updated by the customer. This occurs when the customer initially sets their preferences and when the customer updates their preferences.

The following example shows one way to do this:

```javascript
const identityMap = { ... };
window.__tcfapi('addEventListener', 2, function (tcData, success) {
  if (success && tcData.eventStatus === 'useractioncomplete') {
    window.alloy("setConsent", {
      identityMap,
      consent: [
        {
          standard: "IAB TCF",
          version: "2.0",
          value: tcData.tcString,
          gdprApplies: tcData.gdprApplies
        }
      ]
    });
  }
});
```

This code block listens for the `useractioncomplete` event and then sets the consent, passing the consent string and the `gdprApplies` flag. If you have custom identities for your customers, be sure to fill in the `identityMap` variable. Refer to the guide on [supporting consent](../../consent/supporting-consent.md) for more information on calling `setConsent`.

## Including consent information in sendEvent

Within XDM schemas, you can store consent preference information from Experience Events. There are two ways to add this information to every event.

First, you can provide the relevant XDM schema on every `sendEvent` call. The following example shows one way to do this:

```javascript
var sendEventOptions = { ... };
window.__tcfapi('getTCData', 2, function (tcData, success) {
  if (success) {
    sendEventOptions.xdm.consentStrings = [{
      consentStandard: "IAB TCF"
      consentStandardVersion: "2.0"
      consentStringValue: tcData.tcString,
      gdprApplies: tcData.gdprApplies
    }];
    window.alloy("sendEvent", sendEventOptions);
  }
});
```

This example gets the consent information for the TCF API, and then sends an event with the consent information added to the XDM schema. See the [tracking events](../../fundamentals/tracking-events.md) guide to understand what should be in the `sendEvent` command options.

The other way to add the consent information to every request is with the `onBeforeEventSend` callback. Read the section on [modifying events globally](../../fundamentals/tracking-events.md#modifying-events-globally) from within the tracking events documentation for more information on how to do this.

## Next steps

Now that you have learned how to use IAB TCF 2.0 with the Platform Web SDK extension, you can also choose to integrate with other Adobe solutions such as Adobe Analytics or Adobe Real-Time Customer Data Platform. See the [IAB Transparency & Consent Framework 2.0 overview](./overview.md) for more information.
