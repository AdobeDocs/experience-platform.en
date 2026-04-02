---
title: Consent and identity in Data Collection
description: Understand how consent choices affect identity behavior in Web SDK implementations, including ECID generation, cookie persistence, and visitor continuity.
---
# Consent and identity in Data Collection

Consent and identity are closely connected in Web SDK implementations. The timing and method of how you collect consent directly affects when and whether the Web SDK generates an ECID, sets identity cookies, and sends data to the Edge Network. When consent is not handled carefully, the result is often unexpected visitor inflation, gaps in identity continuity, or both.

This page explains how consent choices interact with identity behavior and provides guidance for configuring your implementation to avoid common pitfalls.

## How consent affects identity {#how-consent-affects-identity}

The Web SDK uses the [`defaultConsent`](/help/collection/js/commands/configure/defaultconsent.md) configuration and the [`setConsent`](/help/collection/js/commands/setconsent.md) command to control whether it sends data to the Edge Network. Consent status directly determines when an ECID is generated and when identity cookies are set.

### Consent states and identity behavior {#consent-states}

| `defaultConsent` | Visitor action | Identity behavior |
| --- | --- | --- |
| `in` | No consent interaction needed | The Web SDK sends requests and sets identity cookies immediately on page load. An ECID is generated on the first request. This is the default behavior for implementations that do not require explicit consent before data collection. |
| `pending` | Visitor grants consent | The Web SDK queues events until consent is granted. Once [`setConsent`](/help/collection/js/commands/setconsent.md) is called with `"general": "in"`, the queued events are sent and an ECID is generated on the first request. Identity cookies are set at this point. |
| `pending` | Visitor denies consent | The Web SDK does not send any requests and does not set identity cookies. No ECID is generated. Queued events are discarded. |
| `out` | No consent interaction needed | The Web SDK does not send any requests and does not generate an ECID. This configuration is used when you need to collect consent before any data processing occurs. |

>[!NOTE]
>
>When `defaultConsent` is set to `pending`, the Web SDK does not communicate with the Edge Network at all until consent is explicitly set. This means no ECID is generated, no cookies are set, and no events are sent — even page views — until your consent logic calls `setConsent`.

### Consent withdrawal {#consent-withdrawal}

When a visitor revokes consent after previously granting it (by calling `setConsent` with `"general": "out"`):

* The Web SDK stops sending events to the Edge Network.
* Existing `kndctr_` identity cookies remain in the browser until they expire. The Web SDK does not delete them.
* If the visitor later re-grants consent, the Web SDK resumes sending events and uses the existing ECID from the cookie (if it has not expired). The visitor's identity is preserved.

## Common pitfalls {#common-pitfalls}

### Consent banner clears identity cookies {#banner-clears-cookies}

**Problem**: Some consent management platforms (CMPs) clear all cookies — including `kndctr_` identity cookies — when presenting the consent banner, before the visitor makes a choice. When the visitor grants consent, the Web SDK generates a new ECID because the previous one was deleted. The visitor appears as a new person in reporting.

**Symptoms**:
* A spike in unique visitor counts after deploying a consent banner.
* Returning visitors are counted as new visitors every time their consent expires and they interact with the banner again.

**Solution**: Configure your CMP to preserve `kndctr_` cookies. These cookies are identity cookies, not tracking cookies — they identify the device and do not contain behavioral data. If your CMP requires clearing cookies, add `kndctr_` prefixed cookies to an exclusion list. Alternatively, delay clearing cookies until after the visitor explicitly denies consent rather than clearing them preemptively.

### Delayed consent causes duplicate identity {#delayed-consent}

**Problem**: When `defaultConsent` is set to `pending`, the Web SDK waits for consent before sending any data. If consent is granted late in the page lifecycle (for example, after a banner interaction that triggers a page reload), the following sequence can cause issues:

1. Page loads. `defaultConsent: "pending"`. Web SDK does not send requests.
2. Visitor grants consent. CMP triggers a page reload.
3. Page loads again. Web SDK initializes with consent now granted and generates an ECID.

This flow is normal and works correctly. The issue arises when the CMP or your implementation inadvertently clears cookies between steps 2 and 3 (see above), or when the Web SDK is configured differently on the reload.

**Solution**: Ensure that the Web SDK configuration (especially `orgId` and `defaultConsent`) is identical on every page load. If your CMP triggers a reload after consent, verify that identity cookies survive the reload.

### Using `defaultConsent: "in"` with a consent banner {#default-in-with-banner}

**Problem**: Some implementations set `defaultConsent: "in"` and then call `setConsent` with `"general": "out"` if the visitor declines. This approach generates an ECID and sends at least one request before consent is denied. Depending on your regulatory requirements, this initial data collection may not be permissible.

**Solution**: If your regulatory environment requires consent before any data collection or ECID generation, use `defaultConsent: "pending"` instead. This ensures that the Web SDK does not communicate with the Edge Network until consent is explicitly granted.

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
* Events sent before consent (such as the initial page view) are queued and sent after consent is granted.
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

If your implementation uses [first-party device IDs (FPIDs)](./first-party-device-ids.md), the FPID cookie is set by your server independently of the Web SDK's consent state. The FPID cookie is an identifier you manage on your own infrastructure.

However, the FPID is only sent to the Edge Network when the Web SDK makes a request — which is gated by consent. This means:

* With `defaultConsent: "pending"`, the FPID exists in the browser but is not used to seed an ECID until consent is granted.
* With `defaultConsent: "in"`, the FPID is used on the first request and seeds the ECID immediately.

If your consent implementation requires that no identifier be associated with a visitor before consent, you may need to delay setting the FPID cookie on your server until after consent is communicated, rather than relying solely on the Web SDK's consent gating.

## Validation {#validation}

To verify that consent and identity are working together correctly:

1. **Test the pending state**: Load a page with `defaultConsent: "pending"`. Confirm that no Edge Network requests are sent and no `kndctr_` cookies are set.
2. **Grant consent**: Call `setConsent` with `"general": "in"`. Confirm that queued events are sent and an ECID is generated.
3. **Test cookie survival**: After granting consent, reload the page. Confirm that the same ECID persists (check the `kndctr_` cookie).
4. **Test consent withdrawal**: Call `setConsent` with `"general": "out"`. Confirm that subsequent `sendEvent` calls do not generate Edge Network requests.
5. **Test re-consent**: After withdrawal, call `setConsent` with `"general": "in"` again. Confirm that the original ECID is used (if the cookie has not expired).
6. **Test your CMP flow end to end**: Walk through the full consent banner interaction. Verify that ECID continuity is maintained across consent grant, page reload, and subsequent visits.
