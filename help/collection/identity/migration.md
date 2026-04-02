---
title: Migrate identity from the Visitor API to the Web SDK
description: Learn how to migrate from the Experience Cloud ID Service (Visitor API) to the Web SDK while preserving existing visitor identities and avoiding reporting disruption.
---
# Migrate identity from the Visitor API to the Web SDK

If your implementation currently uses the Experience Cloud ID Service (also known as the Visitor API or `visitor.js`) and you are upgrading to the Web SDK, you need to carry existing visitor identities forward. Without a proper migration, returning visitors receive new ECIDs and appear as new people in reporting, which inflates visitor counts and breaks continuity in analytics, audiences, and personalization.

This page walks through the identity migration process, explains what happens under the hood, and provides guidance for phased rollouts where both libraries run side by side.

## How identity migration works {#how-it-works}

The Visitor API stores the Experience Cloud ID (ECID) in a cookie called `AMCV_<ORG_ID>`. When the Web SDK is configured with [`idMigrationEnabled`](/help/collection/js/commands/configure/idmigrationenabled.md) set to `true` (the default), the Web SDK automatically reads the ECID from the AMCV cookie and uses it as the visitor's identity on the first Edge Network request. This ensures that the visitor retains the same ECID after the transition.

The migration flow works as follows:

1. A visitor arrives on a page that now uses the Web SDK instead of the Visitor API.
2. The Web SDK checks for an existing `kndctr_` identity cookie (its own cookie format). If none is found, it looks for an `AMCV_` cookie.
3. If an `AMCV_` cookie is found, the Web SDK extracts the ECID and uses it to initialize the visitor's identity.
4. The Web SDK sets a new `kndctr_` identity cookie with the same ECID.
5. On subsequent visits, the Web SDK uses the `kndctr_` cookie directly. The `AMCV_` cookie is no longer needed.

>[!NOTE]
>
>The `idMigrationEnabled` setting is `true` by default. If you are migrating from the Visitor API, you do not need to explicitly set this property unless you want to disable migration intentionally.

## Prerequisites {#prerequisites}

Before you begin the migration:

* **Same `orgId`**: The Web SDK must be configured with the same Experience Cloud organization ID ([`orgId`](/help/collection/js/commands/configure/orgid.md)) that the Visitor API used. A mismatched `orgId` causes the Web SDK to skip the AMCV cookie and generate a new ECID.
* **Same domain scope**: The Web SDK must be deployed on the same domain (or a subdomain of the same parent domain) where the AMCV cookie was set. If the cookie is not accessible to the Web SDK, migration cannot occur.
* **Web SDK installed**: The Web SDK ([JavaScript library](/help/collection/js/js-overview.md) or [tag extension](/help/tags/extensions/client/web-sdk/overview.md)) must be installed on the pages where the Visitor API is being replaced.

## Migration strategies {#strategies}

### Full cutover {#full-cutover}

In a full cutover, you replace the Visitor API with the Web SDK across all pages at once. This is the simplest approach and is recommended when your deployment process supports a single coordinated release.

1. Remove the Visitor API (`visitor.js`) and any associated configuration from all pages.
2. Deploy the Web SDK with `idMigrationEnabled` set to `true` (or leave it at the default).
3. Validate that returning visitors retain their ECIDs (see [Validation](#validation) below).

### Phased rollout {#phased-rollout}

In a phased rollout, the Visitor API and the Web SDK run on different pages of the same site during the transition period. This is common when the migration is scoped by page type, team, or release cycle.

During the coexistence phase:

* Pages using the Visitor API continue to read and write the `AMCV_` cookie.
* Pages using the Web SDK read the `AMCV_` cookie (via `idMigrationEnabled`) and write the `kndctr_` cookie.
* Both cookies contain the same ECID, so the visitor is recognized consistently regardless of which library is running on the current page.

>[!IMPORTANT]
>
>Do not load the Visitor API and the Web SDK on the same page at the same time. Running both libraries on a single page can cause race conditions where each library attempts to manage identity independently, potentially generating duplicate or conflicting ECIDs.

**Phased rollout steps**:

1. Identify the first set of pages to migrate (for example, a product area or a single page template).
2. Deploy the Web SDK on those pages and remove the Visitor API from them.
3. Validate that visitors who navigate between migrated (Web SDK) and non-migrated (Visitor API) pages retain the same ECID.
4. Repeat for the next set of pages until migration is complete.
5. Once all pages are on the Web SDK, proceed to [Turning off migration](#turn-off-migration).

## Turning off migration {#turn-off-migration}

After your entire site runs on the Web SDK and you are confident that no visitors carry only an `AMCV_` cookie without a corresponding `kndctr_` cookie, you can safely disable identity migration:

```js
alloy("configure", {
  orgId: "YOUR_ORG_ID@AdobeOrg",
  edgeDomain: "data.example.com",
  idMigrationEnabled: false
});
```

Disabling migration stops the Web SDK from checking for AMCV cookies. This is a minor performance optimization and reduces the surface area of your identity logic.

**When is it safe to disable?** As a guideline, wait until the AMCV cookie's maximum lifetime has elapsed after the last page was migrated. If your AMCV cookies have a two-year expiration, wait two years after the final page was cut over to the Web SDK. In practice, most organizations disable migration sooner — after a few months — and accept a negligible amount of inflation from the small number of visitors who return for the first time after a very long absence.

## Validation {#validation}

Use the following steps to verify that identity migration is working correctly:

1. **Check for ECID continuity**: Open a page that previously used the Visitor API (now using the Web SDK) in a browser that has an existing `AMCV_` cookie.
   * In the developer tools, verify that a `kndctr_` identity cookie has been set.
   * Compare the ECID in the `kndctr_` cookie with the ECID in the `AMCV_` cookie. They should match.
2. **Inspect Edge Network requests**: In the Network tab, find the first Edge Network request (`interact` or `collect`). Confirm that the request payload does not contain a brand-new ECID that differs from the one in the `AMCV_` cookie.
3. **Monitor reporting**: After deployment, compare unique visitor counts before and after the migration for the same time period. A significant spike in unique visitors can indicate that migration is not carrying identities forward. Small fluctuations are expected due to normal traffic variation.
4. **Test cross-page navigation** (phased rollout only): Navigate from a Web SDK page to a Visitor API page and back. Verify that the ECID remains the same throughout the journey.

>[!TIP]
>
>Use `getIdentity` on the Web SDK pages to programmatically retrieve the ECID for comparison:
>
>```js
>alloy("getIdentity", { namespaces: ["ECID"] }).then(function(result) {
>  console.log("ECID:", result.identity.ECID);
>});
>```

## Troubleshooting {#troubleshooting}

| Issue | Cause | Resolution |
| --- | --- | --- |
| ECID changes after migration | The Web SDK is not reading the AMCV cookie. This usually means `idMigrationEnabled` was set to `false`, the `orgId` does not match, or the AMCV cookie is not accessible on the current domain. | Verify that `idMigrationEnabled` is `true`, the `orgId` matches, and the AMCV cookie's domain is accessible from the Web SDK page. |
| Both libraries are loading on the same page | The Visitor API was not fully removed from a page that also loads the Web SDK. | Remove all references to `visitor.js` and associated configuration on pages that use the Web SDK. Check tag managers for rules that may inject the Visitor API globally. |
| Visitor inflation after migration | Some visitors are receiving new ECIDs instead of carrying forward their existing AMCV identity. | Confirm that the AMCV cookie is present in the browser before the Web SDK initializes. Use the Network tab to verify that the first Edge Network request uses the existing ECID. |
| AMCV cookie not present | The visitor is new (no prior visit with the Visitor API) or the AMCV cookie has expired. | No action needed. The Web SDK generates a new ECID for genuinely new visitors. This is expected behavior, not a migration issue. |

## Additional considerations {#additional-considerations}

### Third-party ID migration {#third-party-id}

If your Visitor API implementation used third-party IDs (the `demdex.net` cookie), the Web SDK can also migrate these. Configure [`thirdPartyCookiesEnabled`](/help/collection/js/commands/configure/thirdpartycookiesenabled.md) to `true` in your Web SDK configuration. The Web SDK reads the existing Demdex cookie and includes the third-party identity in its Edge Network requests, following the same migration pattern as the AMCV cookie.

### Adobe Analytics s_vi cookie {#analytics-s-vi}

If your site also uses the legacy `s_vi` cookie from Adobe Analytics, the Web SDK does not directly read this cookie. The `s_vi` cookie is specific to the Analytics tracking server. During migration, the Analytics service on the Edge Network handles any needed mapping between the ECID and the `s_vi` identifier. No additional configuration is required in the Web SDK.
