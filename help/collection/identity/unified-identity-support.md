---
title: Unified identity support in Data Collection
description: Learn how unified identity support brings first-party persistence and supported third-party activation together in web data collection.
exl-id: 8a755b61-6280-47f9-87a1-2d1da331a1c6
---
# Unified identity support in Data Collection

Unified identity support lets the Edge Network work across both first-party and third-party identity contexts. It brings together durable first-party identification on your owned properties with third-party activation workflows in browsers that support third-party cookies. For background on how the Web SDK handles ECIDs, FPIDs, and other identity signals, see [Identity in Data Collection](./overview.md).

With unified identity support, you can:

* **Maximize audience reach**: Activate your Experience Platform audiences on third-party destinations (DSPs, SSPs, ad networks) for a larger share of your traffic.
* **Maintain measurement accuracy**: Keep consistent visitor identification across your owned properties and advertising platforms.
* **Future-proof your implementation**: Use first-party device IDs as your foundation while maintaining compatibility with third-party activation workflows.

When a visitor without an ECID lands on a site, the Edge Network evaluates the available identity signals and seeds the ECID from the highest-priority one. Browsers that block third-party cookies continue to operate in first-party mode with no disruption to your implementation.

## How it works

When a visitor has no ECID, the Edge Network seeds one by evaluating identity signals in this priority order:

| Priority | Source | Context | Behavior |
| --- | --- | --- | --- |
| 1 | **Demdex ID** | Third-party | If a Demdex ID is present, the ECID is seeded from it. This seed produces a consistent ECID across domains that share the same third-party cookie. In a third-party context, the Demdex ID takes priority over the FPID. |
| 2 | **FPID** | First-party | If no Demdex ID is present but an FPID exists, the ECID is seeded from the FPID and a Demdex ID is derived from it. |
| 3 | **Random** | First-party | If neither a Demdex ID nor an FPID is available, a new random ECID is generated and a Demdex ID is derived from it. |

This priority applies only to visitors who do not yet have an ECID. An existing ECID is never replaced or re-seeded.

ECIDs and Demdex IDs are cryptographically linked through a deterministic algorithm, meaning one can be derived from the other. This relationship is what allows the Edge Network to translate between first-party and third-party identity contexts without requiring separate visitor handling logic in your implementation.

Because the relationship is deterministic, audiences built on first-party ECIDs can be activated through third-party infrastructure when the corresponding Demdex ID is available.

Third-party audience activation relies on ID synchronization (ID sync). When the Edge Network establishes or refreshes a third-party identity, it returns ID sync instructions in the response. These instructions direct the browser to synchronize the visitor's identity with partner domains (DSPs, ad networks, and other activation platforms), so that your Experience Platform audiences can be matched and delivered on those platforms.

## Prerequisites

Unified identity support requires all of the following:

* Your site uses first-party data collection on a domain you control.
* Your implementation uses FPIDs or another first-party persistence strategy as the foundation.
* Third-party cookies are enabled in your Web SDK configuration.
* Third-party ID sync is enabled for the datastream.
* The visitor uses a browser that allows third-party cookies (see [Browser compatibility](#browser-compatibility) below).

## Configuration

1. **Enable third-party cookies in Web SDK**: Enable the **Use third-party cookies** setting in your Web SDK implementation. If using the tag extension, enable **[!UICONTROL Use third-party cookies]** in [Identity configuration settings](/help/tags/extensions/client/web-sdk/configure/identity.md#use-third-party-cookies). If using the JavaScript library, set [`thirdPartyCookiesEnabled`](/help/collection/js/commands/configure/thirdpartycookiesenabled.md) to `true`.

1. **Enable third-party ID sync in the datastream**: Enable the **[!UICONTROL Third-Party ID Sync]** option in your datastream's advanced settings. See [Create and configure datastreams](/help/datastreams/configure.md#advanced-options).

1. **Ensure that first-party persistence is in place**: Confirm that your first-party persistence strategy (such as FPIDs) is already deployed on your owned domain. See [First-party device IDs in Data Collection](fpid.md).

## Validation

To verify that unified identity support is working:

1. Open your browser's developer tools and navigate to the **Network** tab.
1. Clear existing requests and trigger a Web SDK event (page load or custom event) in a new or incognito session.
1. Find the Edge Network response (look for calls to `adobedc.demdex.net` and your first-party collection endpoint).
1. Inspect the response payload for ID sync instructions.

When ID sync instructions are present, the response includes an `identity:exchange` handle similar to the following:

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
            "url": "https://example.com/...",
            "hideReferrer": false,
            "ttlMinutes": 10080
          }
        },
        {
          "type": "url",
          "id": 89,
          "spec": {
            "url": "https://example.org/...",
            "hideReferrer": true,
            "ttlMinutes": 10080
          }
        }
      ]
    }
  ]
}
```

| Element | Description |
| --- | --- |
| `type: "identity:exchange"` | Indicates ID sync instructions are present. |
| `payload` array | List of partner ID sync URLs. |
| `url` values | Redirect URLs to partner domains for ID synchronization. |
| `id` values | Partner identifiers. |

>[!TIP]
>
>If you don't see the `identity:exchange` handle in the response:
>
>* Ensure you're testing with a new or incognito browser session. Existing identities don't trigger new syncs.
>* Verify that both the datastream and Web SDK settings are correctly configured.
>* Confirm that you're using a browser that supports third-party cookies (see the table below).

After confirming ID sync activity, validate that:

* First-party identity persists as expected across page loads on your owned domain.
* Activation and reporting flows behave as expected in the environments you support.

## Browser compatibility {#browser-compatibility}

Third-party identity features depend on browser support for third-party cookies. The following table summarizes the expected behavior:

| Browser | Third-party cookie support | Demdex available | Identity behavior |
| --- | --- | --- | --- |
| Google Chrome | Supported | Yes | Demdex &rarr; ECID (consistent across domains) |
| Microsoft Edge | Supported by default | Yes | Demdex &rarr; ECID (consistent across domains) |
| Mozilla Firefox | Blocked by default (ETP) | No (by default) | FPID &rarr; ECID (per domain) |
| Apple Safari | Blocked (ITP) | No | FPID &rarr; ECID (per domain) |

For browsers that block third-party cookies, first-party identification continues to work normally. Third-party activation features are only available where the browser allows third-party cookies.

## Limitations

* Third-party identity behavior depends entirely on the visitor's browser allowing third-party cookies. There is no fallback for third-party activation in browsers that block them.
* The ECID seeding priority applies only to new visitors. Visitors who already have an FPID-derived ECID keep it, so their eligibility for third-party activation does not change.
