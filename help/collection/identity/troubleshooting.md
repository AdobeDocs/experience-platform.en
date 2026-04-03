---
title: Troubleshooting identity in Data Collection
description: Diagnose common identity issues in Web SDK implementations, including visitor inflation, ECID inconsistencies, cookie conflicts, and FPID problems.
exl-id: c569b1a1-1171-4264-872c-87e15779bd28
---
# Troubleshooting identity in Data Collection

Identity problems often surface as symptoms in downstream reporting (inflated visitor counts, fragmented profiles, or broken personalization) rather than as errors in the implementation itself. This page helps you diagnose and resolve the most common identity issues in Web SDK implementations. For background on how identity works in Data Collection, see the [identity overview](./overview.md).

## Inspect identity values {#inspect-identity}

Before troubleshooting a specific issue, retrieve the current identity values that the Web SDK is using. Use the [`getIdentity`](/help/collection/js/commands/getidentity.md) command to view the ECID and other identity signals:

```js
alloy("getIdentity", { namespaces: ["ECID", "CORE"] }).then(function(result) {
  console.log("ECID:", result.identity.ECID);
  console.log("CORE ID:", result.identity.CORE);
  console.log("Edge region:", result.edge.regionID);
});
```

You can also inspect identity values in your browser's developer tools:

1. Open the **Application** tab (Chrome/Edge) or **Storage** tab (Firefox/Safari).
2. Look for cookies prefixed with `kndctr_` on your domain. The `kndctr_<ORG_ID>_AdobeOrg_identity` cookie contains the ECID.
3. Open the **Network** tab and find an `interact` or `collect` request to the Edge Network. Inspect the request payload for `identityMap` and the response payload for identity handles.

## Common issues {#common-issues}

+++**Visitor count inflation**

**Symptom**: Analytics reports show more unique visitors than expected, or the same person appears as multiple visitors across sessions.

**Possible causes**:

| Cause | How to identify | Resolution |
| --- | --- | --- |
| Short cookie lifetime | Check the expiration of `kndctr_` cookies in the browser. If they expire in 7 days or less, browser policies are likely restricting cookie duration. | Implement [first-party device IDs (FPIDs)](./fpid.md) set from a server using a DNS A/AAAA record for longer cookie persistence. |
| Missing FPID on first request | Inspect the first Edge Network request on page load. If no FPID cookie is present, the Edge Network generates a new ECID. If the FPID is set after the first request, the ECID generated on that first request is orphaned. | Set the FPID cookie before the Web SDK sends its first request. See [When to set the cookie](./fpid.md#when-to-set-cookie). |
| `orgId` mismatch across domains | Compare the `orgId` configuration value across your domains. Mismatched values cause separate identity scopes. | Use the same [`orgId`](/help/collection/js/commands/configure/orgid.md) on all domains within your organization. |
| Consent banner deleting cookies | If your consent implementation clears all cookies before consent is granted and then the Web SDK initializes, a new ECID is generated. | Configure your consent banner to preserve `kndctr_` cookies or delay Web SDK initialization until consent is established. See also [Consent and identity](./consent.md). |
| JavaScript-set FPID cookies | Cookies set using `document.cookie` are subject to browser restrictions (ITP, ETP) that cap their lifetime, sometimes to as little as 24 hours. | Set FPID cookies from the server using a DNS A/AAAA record, not from JavaScript. |

+++

+++**ECID changes unexpectedly between pages**

**Symptom**: The ECID is different on different pages of the same domain, or changes on every page load.

**Diagnostic steps**:

1. Confirm that the `kndctr_` identity cookie is present on both pages. If it is missing on one page, check that the Web SDK is configured on that page.
2. Verify that the cookie domain is set broadly enough. A cookie set on `shop.example.com` is not available on `www.example.com`. Ensure that first-party collection and cookie-setting infrastructure use the same domain scope.
3. Check for JavaScript that clears cookies on navigation (for example, aggressive cookie-consent scripts or privacy tools).
4. If using a single-page application, verify that the Web SDK is configured once at app initialization, not re-initialized on every route change. Re-initialization can generate a new ECID.

+++

+++**FPID is not seeding the ECID**

**Symptom**: You have set an FPID cookie, but `getIdentity` returns an ECID that is not consistent across visits, or the FPID does not appear in Edge Network request payloads.

**Diagnostic steps**:

1. **Verify the FPID cookie format**: The FPID must be a valid [UUIDv4](https://datatracker.ietf.org/doc/html/rfc4122). Open your browser's developer tools, find the FPID cookie, and confirm that the value matches the pattern `xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`.
2. **Check the cookie name in the datastream**: If you are using the [datastream cookie method](./fpid.md#setting-cookie-datastreams), the cookie name configured in the datastream must exactly match the name of the cookie that your server sets.
3. **Confirm that the cookie is sent on the request**: In the Network tab, inspect the `Cookie` header on the Edge Network request. The FPID cookie must be included.
4. **Check identity priority**: If an existing ECID is already stored in a `kndctr_` cookie, it takes precedence over the FPID. The FPID only seeds a new ECID when no existing ECID is present. See [How FPIDs work](./fpid.md#how-fpids-work) for the full priority order.
5. **Validate the CNAME**: If using the datastream cookie method, confirm that your first-party collection CNAME is correctly configured and that requests are routed through it.

+++

+++**Cross-domain identity is not working**

**Symptom**: A visitor who clicks from one of your domains to another is treated as a new visitor on the destination domain.

**Diagnostic steps**:

1. **Check the URL**: Inspect the destination URL when the visitor clicks the link. It must contain an `adobe_mc` query-string parameter. If the parameter is missing, the source domain is not appending it. See [Implement cross-domain sharing](./cross-domain-sharing.md#implement-cross-domain-sharing).
2. **Check the timing**: The `adobe_mc` parameter expires after five minutes. If the destination page takes too long to load (for example, due to redirects or slow network), the parameter can expire before the Web SDK can read it.
3. **Verify `orgId` match**: Both domains must use the same [`orgId`](/help/collection/js/commands/configure/orgid.md). Mismatched organization IDs cause the destination domain to reject the handed-off identity.
4. **Confirm Web SDK is on the destination**: The destination page must have the Web SDK installed and configured. Without it, the `adobe_mc` parameter is ignored.
5. **Check for URL stripping**: Some redirect services, CDNs, or server-side logic strip unknown query-string parameters. Verify that `adobe_mc` survives any intermediate redirects between the source and destination pages.

+++

+++**Mobile-to-web identity handoff is failing**

**Symptom**: A visitor who starts in the mobile app and opens a WebView or mobile browser is treated as a new visitor on the web side.

**Diagnostic steps**:

1. **Verify the URL**: Log the URL being passed to the WebView. It must contain an `adobe_mc` parameter generated by [`getUrlVariables`](https://developer.adobe.com/client-sdks/edge/identity-for-edge-network/api-reference/#geturlvariables).
2. **Check SDK versions**: The mobile Identity for Edge Network extension must be version 1.1.0 or later, and the Web SDK must be version 2.11.0 or later.
3. **Check the timing**: Like cross-domain sharing, the `adobe_mc` parameter expires after five minutes. Ensure the WebView loads promptly after the URL is constructed.
4. **Confirm `orgId` match**: The Experience Cloud organization ID must be the same in both the mobile SDK and Web SDK configurations.

+++
