---
title: Consent and identity in Data Collection
description: Understand how consent choices affect identity behavior in Web SDK implementations, including ECID generation, cookie persistence, and visitor continuity.
exl-id: aee0ca1f-b846-4984-917f-8dfbcd6d3388
---
# Consent and identity in Data Collection

Consent and identity are closely connected in Web SDK implementations. How and when you collect consent directly affects when and whether the Web SDK generates an ECID, sets identity cookies, and sends data to the Edge Network. When consent is not handled carefully, the result is often unexpected visitor inflation, gaps in identity continuity, or both.

This page explains how consent choices interact with identity behavior and provides guidance for configuring your implementation to avoid common pitfalls. For background on how the Web SDK handles ECIDs, FPIDs, and other identity signals, see [Identity in Data Collection](./overview.md).

## How consent affects identity {#how-consent-affects-identity}

The Web SDK uses both the [`defaultConsent`](/help/collection/js/commands/configure/defaultconsent.md) configuration variable and the [`setConsent`](/help/collection/js/commands/setconsent.md) command to control if it sends data to the Edge Network. Consent status directly determines when an ECID is generated and when identity cookies are set.

The following table shows the combined effect of `defaultConsent` and `setConsent` on data collection, cookie setting, and identity behavior.

| `defaultConsent` | `setConsent` | Data collection occurs | Browser cookies set | Identity behavior |
| --- | --- | --- | --- | --- |
| `in` | Not set | Yes | Yes | An ECID is generated immediately on the first request. Identity cookies are set on page load. |
| `in` | `in` | Yes | Yes | The visitor's existing ECID is preserved. Identity behavior is unchanged. |
| `in` | `out` | No | Yes | Data collection stops. The existing ECID and `kndctr_` identity cookies remain in the browser until they expire. |
| `pending` | Not set | No | No | No ECID is generated. No cookies are set. Events are queued locally until `setConsent` is called. |
| `pending` | `in` | Yes | Yes | Queued events are sent. An ECID is generated on the first request and identity cookies are set. |
| `pending` | `out` | No | Yes | Queued events are discarded. No ECID is generated. The consent cookie is set to record the visitor's preference. |
| `out` | Not set | No | No | No ECID is generated. No cookies are set. No events are sent. |
| `out` | `in` | Yes | Yes | An ECID is generated on the first request and identity cookies are set. |
| `out` | `out` | No | Yes | No ECID is generated. The consent cookie is set to record the visitor's preference. |

>[!NOTE]
>
>Identity and consent cookies are set even when a visitor opts out. These cookies are necessary to honor the visitor's data collection preferences. See [Web SDK cookies](https://experienceleague.adobe.com/en/docs/core-services/interface/data-collection/cookies/web-sdk) for a full list of cookies that the Web SDK sets.

When a visitor re-grants consent after previously revoking it (by calling `setConsent` with `"general": "in"` after `"general": "out"`), the Web SDK resumes sending events and uses the existing ECID from the cookie if it has not expired. The visitor's identity is preserved.

After a visitor grants or denies consent, the Web SDK persists their preference in a `kndctr_` consent cookie. On subsequent page loads, the SDK reads this cookie and applies the stored preference automatically — you do not need to call `setConsent` again unless the visitor's preference changes. Note that the `defaultConsent` configuration value does not persist between page loads, but the visitor's resolved consent (set through `setConsent`) does.

>[!NOTE]
>
>Events queued while consent is `pending` are held in memory and do not survive page reloads. If a visitor navigates to a new page before consent is resolved, queued events from the previous page are lost.

## Implementation patterns {#implementation-patterns}

### Opt-in model (consent required before collection) {#opt-in}

Use this pattern when regulations (such as GDPR) require explicit consent before collecting any data.

```js
alloy("configure", {
  orgId: "YOUR_ORG_ID@AdobeOrg",
  edgeDomain: "data.example.com",
  defaultConsent: "pending"
});

// When the visitor grants consent:
alloy("setConsent", {
  consent: [{
    standard: "Adobe",
    version: "1.0",
    value: { general: "in" }
  }]
});
```

With this pattern:
* No ECID is generated until consent is granted.
* Events triggered before consent (such as the initial page view) are queued and sent after consent is granted.
* Identity cookies are set only after the first successful Edge Network request.

### Opt-out model (collection by default, stop on denial) {#opt-out}

Use this pattern when regulations allow data collection by default with an option to opt out.

```js
alloy("configure", {
  orgId: "YOUR_ORG_ID@AdobeOrg",
  edgeDomain: "data.example.com",
  defaultConsent: "in"
});

// If the visitor opts out:
alloy("setConsent", {
  consent: [{
    standard: "Adobe",
    version: "1.0",
    value: { general: "out" }
  }]
});
```

With this pattern:
* An ECID is generated immediately on the first page load.
* All events are sent until the visitor opts out.
* After opt-out, the Web SDK stops sending events but existing cookies remain.

## Consent with first-party device IDs {#consent-with-fpids}

If your implementation uses [first-party device IDs (FPIDs)](./fpid.md), the FPID cookie is set by your server independently of the Web SDK's consent state. The FPID cookie is an identifier you manage on your own infrastructure. However, the FPID is only sent to the Edge Network when the Web SDK makes a request (which is gated by consent):

* With `defaultConsent: "pending"`, the FPID exists in the browser but is not used to seed an ECID until consent is granted.
* With `defaultConsent: "in"`, the FPID is used on the first request and seeds the ECID immediately.

If your consent implementation requires that no identifier be set before consent, delay setting the FPID cookie until after consent is communicated. The Web SDK's consent gating alone does not prevent the FPID cookie from being set, since it is managed by your server.

## Common pitfalls {#common-pitfalls}

+++**Consent banner clears identity cookies**

**Problem**: Some consent management platforms (CMPs) clear all cookies — including `kndctr_` identity cookies — when presenting the consent banner, before the visitor makes a choice. When the visitor grants consent, the Web SDK generates a new ECID because the previous one was deleted. The visitor appears as a new person in reporting.

**Symptoms**:
* A spike in unique visitor counts after deploying a consent banner.
* Returning visitors are counted as new visitors every time their consent expires and they interact with the banner again.

**Solution**: Configure your CMP to preserve `kndctr_` cookies. These cookies are identity cookies, not tracking cookies — they identify the device and do not contain behavioral data. If your CMP requires clearing cookies, add `kndctr_` prefixed cookies to an exclusion list. Alternatively, delay clearing cookies until after the visitor explicitly denies consent rather than clearing them preemptively.

+++

+++**Delayed consent causes duplicate identity**

**Problem**: When `defaultConsent` is set to `pending`, the Web SDK waits for consent before sending any data. If consent is granted late in the page lifecycle (for example, after a banner interaction that triggers a page reload), the following sequence can cause issues:

1. Page loads. `defaultConsent: "pending"`. Web SDK does not send requests.
2. Visitor grants consent. CMP triggers a page reload.
3. Page loads again. Web SDK initializes with consent now granted and generates an ECID.

This flow is normal and works correctly. The issue arises when the CMP or your implementation inadvertently clears cookies between steps 2 and 3, or when the Web SDK is configured differently on the reload.

**Solution**: Ensure that the Web SDK configuration (especially `orgId` and `defaultConsent`) is identical on every page load. If your CMP triggers a reload after consent, verify that identity cookies survive the reload.

+++

+++**Using `defaultConsent: "in"` with a consent banner**

**Problem**: Some implementations set `defaultConsent: "in"` and then call `setConsent` with `"general": "out"` if the visitor declines. This approach generates an ECID and sends at least one request before consent is denied. Depending on your regulatory requirements, this initial data collection might not align with your organization's privacy policy.

**Solution**: If your regulatory environment requires consent before any data collection or ECID generation, use `defaultConsent: "pending"` instead. This setting ensures that the Web SDK does not communicate with the Edge Network until consent is explicitly granted.

+++
