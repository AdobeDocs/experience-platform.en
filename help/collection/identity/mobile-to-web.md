---
title: Share identity from mobile apps to mobile web/WebViews
description: Pass identity from a mobile app into mobile web content or a WebView so reporting and personalization can continue in the web context.
---
# Share identity from mobile apps to mobile web/WebViews

When a visitor moves from a mobile app into a WebView or mobile web page, the app and web contexts each maintain their own identity. Without an explicit handoff, the web experience treats the visitor as a new, unknown person, which fragments reporting and restarts personalization.

Mobile-to-web identity sharing solves this by passing the visitor's [Experience Cloud ID (ECID)](./overview.md) from the mobile app to the web destination through an `adobe_mc` query-string parameter. The parameter carries the ECID, your Experience Cloud organization ID, and a timestamp. When the web destination loads with a valid `adobe_mc` parameter, the Web SDK automatically reads it and applies the handed-off identity on its first Edge Network request, so both contexts share the same visitor.

Use this pattern when your mobile app opens a WebView or mobile web page that your organization controls and you want app activity and web activity to remain tied to the same visitor. If your goal is identity continuity between websites on different domains, use [cross-domain sharing](cross-domain-sharing.md) instead.

## Prerequisites

Before you begin, make sure that your implementation meets the following requirements:

* **Mobile app**: The Adobe Experience Platform Mobile SDK with the [Identity for Edge Network](https://developer.adobe.com/client-sdks/edge/identity-for-edge-network/) extension version **1.1.0 or later** (iOS and Android).
* **Web destination**: The [Web SDK](/help/collection/js/js-overview.md) version **2.11.0 or later**, or the Web SDK tag extension.
* **URL control**: Your code controls the URL that the app passes to the WebView or browser so that you can append query-string parameters to it.
* **Matching configuration**: The same Experience Cloud organization ID is configured in both the mobile and web implementations.

## Retrieve identity from the mobile app {#retrieve-identity}

Use the [`getUrlVariables`](https://developer.adobe.com/client-sdks/edge/identity-for-edge-network/api-reference/#geturlvariables) API from the Identity for Edge Network extension to retrieve the visitor's identity as a query string. You can then append that string to the URL before opening the WebView or browser.

The returned string contains the following URL-encoded parameters:

| Parameter | Description |
| --- | --- |
| `MCID` | The Experience Cloud ID (ECID). |
| `MCORGID` | Your Experience Cloud organization ID. This parameter must match the organization configured in the Web SDK on the destination page. |
| `TS` | A timestamp. The destination must receive this value within **five minutes** or the handoff is rejected. |

The following code examples show what a handoff might look like in your mobile app:

>[!BEGINTABS]

>[!TAB Swift (iOS)]

```swift
Identity.getUrlVariables { (urlVariables, error) in
    if let error = error {
        // Handle the error
        return
    }

    guard let urlVariables = urlVariables else { return }

    // Construct the full URL by appending the identity query string
    if let url = URL(string: "https://example.com/webapp?\(urlVariables)") {
        // Open the URL in a WebView or browser
        let request = URLRequest(url: url)
        webView.load(request)
    }
}
```

>[!TAB Kotlin (Android)]

```kotlin
Identity.getUrlVariables { urlVariables ->
    if (urlVariables != null) {
        // Construct the full URL by appending the identity query string
        val url = "https://example.com/webapp?$urlVariables"

        // Open the URL in a WebView or browser
        webView.loadUrl(url)
    }
}
```

>[!ENDTABS]

## Receive identity on the web side {#receive-identity}

No additional code is required on the web destination. When the Web SDK is present on the page and the URL contains a valid `adobe_mc` parameter, the SDK automatically extracts the ECID and applies it to the visitor's identity map on the first Edge Network request.

If your web destination uses the Web SDK tag extension and you need to redirect the visitor to another page while preserving identity, use the [Redirect with identity](/help/tags/extensions/client/web-sdk/actions/redirect-with-identity.md) action to forward the `adobe_mc` parameter to the next page.

>[!NOTE]
>
>The `adobe_mc` parameter expires after **five minutes**. Make sure the web destination loads and sends its first Edge Network request promptly after the URL is opened.
