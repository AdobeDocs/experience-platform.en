---
title: idMigrationEnabled
description: Allows the Web SDK to read AMCV cookies.
exl-id: 33b9d645-0fbe-4fe4-8847-e6f9e78557b6
---
# `idMigrationEnabled`

The `idMigrationEnabled` property allows the Web SDK to read AMCV cookies set by previous Adobe Experience Cloud implementations. If your organization upgrades your implementation to the Web SDK, this setting allows a smoother transition to the current Adobe Experience Cloud ID service. This setting is valuable so that you don't see a sharp increase in unique visitors when upgrading to the Web SDK.

If your organization runs a fresh Web SDK implementation, enabling this setting has no impact on data collection or visitor identification. There are no downsides to leaving it enabled for all implementations.

## How identity migration works {#how-it-works}

The Visitor API stores the Experience Cloud ID (ECID) in a cookie called `AMCV_<ORG_ID>`. When `idMigrationEnabled` is `true` (the default), the Web SDK automatically reads the ECID from the AMCV cookie and uses it as the visitor's identity on the first Edge Network request.

1. A visitor arrives on a page that now uses the Web SDK instead of the Visitor API.
1. The Web SDK checks for an existing `kndctr_` identity cookie (its own cookie format). If none is found, it looks for an `AMCV_` cookie.
1. If an `AMCV_` cookie is found, the Web SDK extracts the ECID and uses it to initialize the visitor's identity.
1. The Web SDK sets a new `kndctr_` identity cookie with the same ECID.
1. On subsequent visits, the Web SDK uses the `kndctr_` cookie directly. The `AMCV_` cookie is no longer needed.

For migration to work, the Web SDK must be configured with the same [`orgId`](/help/collection/js/commands/configure/orgid.md) that the Visitor API used, and must be deployed on the same domain (or a subdomain of the same parent domain) where the AMCV cookie was set.

## Supported migration scenarios

ID migration supports the following transition patterns:

* **Some pages still use Visitor API while other pages use Web SDK**: The SDK reads existing AMCV cookies and writes a new cookie with the existing ECID. It also writes AMCV cookies so that pages still using Visitor API continue to recognize the same visitor.
* **Web SDK and Visitor API are both present on the same page**: If the AMCV cookie is not set, the SDK looks for Visitor API on the page and uses it to get the ECID.
* **The site has moved fully to Web SDK**: You can leave migration enabled for a period of time so existing AMCV-based visitors retain continuity while their cookies are transitioned.

>[!IMPORTANT]
>
>Do not load the Visitor API and the Web SDK on the same page at the same time unless you have confirmed that the AMCV cookie is already set. Running both libraries on a single page can cause race conditions where each library attempts to manage identity independently, potentially generating duplicate or conflicting ECIDs.

## Turning off migration {#turn-off-migration}

After your entire site runs on the Web SDK and no visitors carry only an `AMCV_` cookie without a corresponding `kndctr_` cookie, you can safely disable identity migration by setting `idMigrationEnabled` to `false`. This is a minor performance optimization and reduces the surface area of your identity logic.

As a guideline, wait until the AMCV cookie's maximum lifetime has elapsed after the last page was migrated. If your AMCV cookies have a two-year expiration, wait two years after the final page was cut over to the Web SDK. In practice, most organizations disable migration sooner (after a few months) and accept a negligible amount of inflation from the small number of visitors who return for the first time after a long absence.

## Audience Manager trait updates

When XDM-formatted data is sent into Audience Manager during migration, that data must be converted into signals. Your traits must be updated to reflect the new keys provided by XDM. This process is made easier by using the [BAAAM tool](https://experienceleague.adobe.com/docs/audience-manager/user-guide/reference/bulk-management-tools/bulk-management-intro.html#getting-started-with-bulk-management).

## Third-party ID migration {#third-party-id}

If your Visitor API implementation used third-party IDs (the `demdex.net` cookie), the Web SDK can also migrate them. Configure [`thirdPartyCookiesEnabled`](/help/collection/js/commands/configure/thirdpartycookiesenabled.md) to `true` in your Web SDK configuration. The Web SDK reads the existing Demdex cookie and includes the third-party identity in its Edge Network requests, following the same migration pattern as the AMCV cookie.

## Validation {#validation}

To verify that identity migration is working correctly:

1. Open a page that previously used the Visitor API (now using the Web SDK) in a browser that has an existing `AMCV_` cookie.
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

Set the `idMigrationEnabled` boolean when running the `configure` command. If you omit this property when configuring the Web SDK, it defaults to `true`. Set this property if you want to disable the ability to read AMCV cookies set by the Visitor API. Most organizations do not need to set this property.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  idMigrationEnabled: false
});
```

## Enable Visitor ID migration using the Web SDK tag extension

These settings can be configured in the Web SDK tag extension using [Identity configuration settings](/help/tags/extensions/client/web-sdk/configure/identity.md).
