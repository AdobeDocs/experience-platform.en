---
title: Unified identity support in Data Collection (Beta)
description: Learn how unified identity support brings first-party persistence and supported third-party activation together in web data collection.
hide: yes
hidefromtoc: yes
badge: Beta
---
# Unified identity support in Data Collection (Beta)

>[!AVAILABILITY]
>
>This feature is currently in beta. Availability, behavior, and documentation can change.

Unified identity support lets the Edge Network work across first-party and third-party identity contexts. It is intended for implementations that want first-party durability on owned properties while still supporting third-party activation flows in browsers that allow third-party cookies.

## Why this capability exists

First-party data collection is the foundation for durable identity on owned properties, but some activation and destination use cases still rely on third-party identity infrastructure. Unified identity support brings those contexts together by allowing the Edge Network to generate and link identities using the best available source.

## Identity sources and priority

When the Edge Network evaluates identity, it prioritizes available sources in this order:

1. **Demdex ID** when a supported third-party identity is already available
1. **FPID** when no demdex-based identity is available but your first-party identifier is present
1. **Random identity generation** when neither of the above is available

This means the Edge Network can keep first-party persistence as the foundation while still linking into third-party identity context where supported.

## How first-party and third-party identities work together

At a high level:

```text
Visitor arrives on an owned property
  -> Edge evaluates available identity signals
  -> ECID is generated from demdex, FPID, or a random source
  -> the visitor continues in first-party context on the owned domain
  -> when the browser allows it, first-party and third-party contexts can be linked automatically
  -> supported activation and measurement flows can use the linked identity state
```

The relationship between ECIDs and demdex-based identity allows the Edge Network to connect first-party and third-party identity contexts without requiring separate visitor handling logic in your implementation.

## Automatic linking behavior

For visitors who already have an FPID-derived ECID, the Edge Network can automatically link first-party identity to third-party identity context when browser conditions support it.

This helps:

* preserve existing first-party continuity
* reduce identity cliffing during adoption
* gradually increase eligibility for supported third-party activation use cases

## Supported conditions

Unified identity support is relevant when the following conditions are in place:

* your site uses first-party data collection on a domain you control
* your implementation uses FPIDs or another first-party persistence strategy as the foundation
* third-party cookies are enabled in your Web SDK configuration
* third-party ID sync is enabled for the datastream
* the visitor uses a browser that allows third-party cookies

## Configuration

To enable the technical prerequisites for this capability:

1. Enable third-party cookie support in the implementation.
1. Enable third-party ID sync in the datastream.
1. Ensure your first-party persistence strategy is already in place on the owned domain.

See the following technical docs:

* [`thirdPartyCookiesEnabled`](/help/collection/js/commands/configure/thirdpartycookiesenabled.md)
* [Identity configuration settings](/help/tags/extensions/client/web-sdk/configure/identity.md#use-third-party-cookies)
* [Create and configure datastreams](/help/datastreams/configure.md#advanced-options)
* [First-party device IDs in Data Collection](./first-party-device-ids.md)

## Validation

To validate unified identity support:

1. Open the browser developer tools.
1. Trigger a Web SDK request on a new or isolated session.
1. Inspect the Edge Network response.
1. Look for third-party ID sync activity when the browser supports it.

When ID sync instructions are present, the response can include an `identity:exchange` handle similar to the following:

```json
{
  "handle": [
    {
      "type": "identity:exchange",
      "payload": [
        {
          "type": "url",
          "id": 411,
          "spec": {
            "url": "https://idsync.rlcdn.com/...",
            "hideReferrer": false,
            "ttlMinutes": 10080
          }
        }
      ]
    }
  ]
}
```

When validating, confirm that:

* first-party continuity behaves as expected on the owned domain
* third-party ID sync activity appears where browser support exists
* activation and reporting flows behave as expected in the environments you support

## Limitations and browser caveats

* Third-party identity behavior still depends on browsers that allow third-party cookies.
* Browsers that block third-party cookies continue to operate in first-party mode only.
* This page does not replace the technical docs for specific commands or datastream settings.

## Use case: first-party persistence with third-party activation {#use-case}

Unified identity support is for teams that want durable first-party identity on owned properties without giving up supported third-party activation use cases in browsers that allow third-party cookies.

### Business problem

Browser restrictions make first-party persistence increasingly important, but some activation and destination workflows still rely on third-party identity infrastructure. This use case is for teams that need both:

* durable first-party identity on owned properties
* supported third-party activation use cases where the browser allows them

### What it enables

At a high level, unified identity support enables:

* a first-party identity foundation for owned-property continuity
* automatic linking between first-party and third-party identity contexts when conditions support it
* broader activation and measurement continuity than a first-party-only approach

### When to use this pattern

This beta is most relevant when:

* you use first-party data collection on domains you own
* you want first-party persistence to remain your foundation
* you enable the third-party identity capabilities needed for supported activation flows
* the visitor uses a browser that allows third-party cookies

### Validation summary

At a high level, validate that:

* first-party identity persists as expected on your owned domains
* third-party identity activity is present where the browser supports it
* activation and reporting behave as expected in the environments you support
