---
title: Using IAB TCF 2.0 without Launch
seo-title: Setting up IAB TCF 2.0 consent with the Adobe Experience Platform Web SDK
description: Learn how to set up IAB TCF 2.0 consent with the Adobe Experience Platform Web SDK
seo-description: Learn how to set up IAB TCF 2.0 consent with the Adobe Experience Platform Web SDK
---

# Supporting IAB TCF 2.0 without Experience Platform Launch

This guide shows how to integrate IAB TCF 2.0 with the Adobe Experience Platform Web SDK without using Experience Platform Launch. For an overview of integrating with IAB TCF 2.0, read the [overview](./overview.md). For a guide on how to integrate with Experience Platform Launch, read the [IAB TCF guide for Experience Platform Launch](./with-launch.md). 

This guide uses the `__tcfapi` interface for accessing the consent information. It might be easier for you to integrate directly with your CMP. The information in this guide might be useful because the CMPs generally provide similar functionality to the TCF API.

>[!NOTE]
>
>These examples assume that by the time the code is run, `window.__tcfapi` is defined on the page. CMPs may provide a hook where you could run these functions when the `__tcfapi` object is ready.
## Enabling consent

If you want to treat all unknown users the same, you can set the default consent to "pending." This queues experience events until consent and preferences are received. See [Configuring the SDK](../../fundamentals/configuring-the-sdk.md) for a sample on how to do this.

### Setting the default consent based on `gdprApplies`

Some CMPs provide the ability to determine whether GDPR applies to the user. If you want to assume consent for those users where GDPR doesn't apply, you can use the `gdprApplies` flag in the TCF API call. The following example shows one way to do this:

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
>When default consent is set to `in`, the `setConsent` command can still be used to record the user's consent and preferences.
## SetConsent

The IAB TCF 2.0 API provides an event for when the consent is updated by the user. This occurs when the user initially sets their preferences and when the user updates their preferences. The following example shows one way to do this:

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

This code block listens for the `useractioncomplete` event and then sets the consent, passing the consent string and the `gdprApplies` flag. If you have custom identities for the user, be sure to fill in the `identityMap` variable. Refer to the guide on [Supporting Consent](../../fundamentals/supporting-consent.md) for more information on calling `setConsent`.

## Including consent information in SendEvent

Finally, there is a place within XDM to store the consent and preference information on the experience events. There are two ways to add this information to every event.

First, you can provide the relevant XDM on every `sendEvent` call. The following example shows one way to do this:

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

This example gets the consent information for the TCF API, and then sends an event with the consent information added to the XDM. See the [Tracking Events](../../fundamentals/tracking-events.md) guide to understand what should be in the `sendEvent` command options.

The other way to add the consent information to every request is with the `onBeforeEventSend` callback. Read the section on [Modifying Events Globally](../../fundamentals/tracking-events.md#modifying-events-globally) for more information on how to do this.