---
title: idMigrationEnabled (Web SDK)
description: Allows the Web SDK to read AMCV cookies.
exl-id: 33b9d645-0fbe-4fe4-8847-e6f9e78557b6
TQID: 'https://experienceleague.adobe.com/hbyGQRiwdHakLAJboWijFbU7V7rdNb64W2-jJqwGB-s'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: df80eeb1-8d72-467e-b0df-9d51c7d3a0a1
    internal-label: Audience Manager
  - id: e1971122-7081-4556-9222-8a31bd71800c
    internal-label: Experience Cloud Services
feature_v2:
  - id: d5947817-d24b-4ba3-8126-2c3d66e9422b
    internal-label: Web SDK
  - id: a50ad69b-1331-40e9-b634-531a085a6a54
    internal-label: Identities
  - id: 6f307efa-2798-5b6d-8079-f765b66875c1
    internal-label: Cookies
level_v2:
  - id: b5a62a22-46f7-4f0d-b151-3fc640bef588
    internal-label: Intermediate
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
---
# `idMigrationEnabled` (Web SDK)

>[!BEGINSHADEBOX]

*This page describes `idMigrationEnabled` in the Web SDK `configure` command. For the Server SDK, see [`idMigrationEnabled`](/help/collection/server-js/methods/configure/idmigrationenabled.md).*

>[!ENDSHADEBOX]

The `idMigrationEnabled` property allows the Web SDK to read AMCV cookies set by previous Adobe Visitor ID Service. If your organization upgrades your implementation to the Web SDK, this setting allows a smoother transition to the Web SDK. This setting is valuable so that you don't see a sharp increase in unique visitors when upgrading to the Web SDK.

If your organization runs a fresh Web SDK implementation, enabling this setting has no impact on data collection or visitor identification. There are no downsides to leaving it enabled for all implementations.

## How identity migration works {#how-it-works}

The Visitor ID Service stores the ECID in a cookie called `AMCV_<ORG_ID>`. When `idMigrationEnabled` is `true` (the default), the Web SDK automatically reads the ECID from the AMCV cookie and uses it as the visitor's identity on the first Edge Network request.

1. A visitor arrives on a page that now uses the Web SDK instead of the Visitor ID Service.
1. The Web SDK checks for an existing `kndctr_` identity cookie (its own cookie format). If none is found, it looks for an `AMCV_` cookie.
1. If an `AMCV_` cookie is found, the Web SDK extracts the ECID and uses it to initialize the visitor's identity.
1. The Web SDK sets a new `kndctr_` identity cookie with the same ECID.
1. On subsequent visits, the Web SDK uses the `kndctr_` cookie directly. The `AMCV_` cookie is no longer needed.

For migration to work, the Web SDK must be configured with the same [`orgId`](/help/collection/js/commands/configure/orgid.md) that the Visitor ID Service used, and must be deployed on the same domain (or a subdomain of the same parent domain) where the AMCV cookie was set.

## Supported migration scenarios

ID migration supports the following transition patterns:

* **Some pages still use the Visitor ID Service while other pages use Web SDK**: The SDK reads existing AMCV cookies and writes a new cookie with the existing ECID. It also writes AMCV cookies so that pages still using Visitor ID Service continue to recognize the same visitor.
* **Web SDK and Visitor ID Service are both present on the same page**: If the AMCV cookie is not set, the SDK looks for the Visitor ID Service on the page and uses it to get the ECID.
* **The site has moved fully to Web SDK**: You can leave migration enabled for a period of time so existing AMCV-based visitors retain continuity while their cookies are transitioned.

>[!IMPORTANT]
>
>Do not load the Visitor ID Service and the Web SDK on the same page at the same time unless you have confirmed that the AMCV cookie is already set. Running both libraries on a single page can cause race conditions where each library attempts to manage identity independently, potentially generating duplicate or conflicting ECIDs.

## Turning off migration {#turn-off-migration}

After your entire site runs on the Web SDK and no visitors carry only an `AMCV_` cookie without a corresponding `kndctr_` cookie, you can safely disable identity migration by setting `idMigrationEnabled` to `false`. This update is a minor performance optimization and reduces the surface area of your identity logic.

As a guideline, wait until the AMCV cookie's maximum lifetime has elapsed after the last page was migrated. If your AMCV cookies have a two-year expiration, wait two years after the final page was cut over to the Web SDK. In practice, most organizations disable migration sooner (after a few months) and accept a negligible amount of inflation from the small number of visitors who return for the first time after a long absence.

## Audience Manager trait updates

When XDM-formatted data is sent into Audience Manager during migration, that data must be converted into signals. Your traits must be updated to reflect the new keys provided by XDM. This process is made easier by using the [BAAAM tool](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/bulk-management-tools/bulk-management-intro.html#getting-started-with-bulk-management).

## Third-party ID migration {#third-party-id}

If your Visitor ID Service implementation used third-party IDs (the `demdex.net` cookie), the Web SDK can also migrate them. Configure [`thirdPartyCookiesEnabled`](/help/collection/js/commands/configure/thirdpartycookiesenabled.md) to `true` in your Web SDK configuration. The Web SDK reads the existing Demdex cookie and includes the third-party identity in its Edge Network requests, following the same migration pattern as the AMCV cookie.

## Validation {#validation}

To verify that identity migration is working correctly:

1. Open a page that previously used the Visitor ID Service (now using the Web SDK) in a browser that has an existing `AMCV_` cookie.
2. In the developer tools, verify that a `kndctr_` identity cookie has been set and that the ECID matches the one in the `AMCV_` cookie.
3. After deployment, compare unique visitor counts before and after the migration for the same time period. A significant spike in unique visitors can indicate that migration is not carrying identities forward.

>[!TIP]
>
>Use `getIdentity` to programmatically retrieve the ECID for comparison:
>
>```js
>alloy("getIdentity", { namespaces: ["ECID"] }).then(function(result) {
>  console.log("ECID:", result.identity.ECID);
>});
>```

## Configure `idMigrationEnabled` {#configure}

Set the `idMigrationEnabled` boolean when running the `configure` command. If you omit this property when configuring the Web SDK, it defaults to `true`. Set this property if you want to disable the ability to read AMCV cookies set by the Visitor ID Service. Most organizations do not need to set this property.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  idMigrationEnabled: false
});
```

## Enable ECID migration using the Web SDK tag extension {#enable-visitor-id-migration-using-the-web-sdk-tag-extension}

These settings can be configured in the Web SDK tag extension using [Identity configuration settings](/help/tags/extensions/client/web-sdk/configure/identity.md).
