---
title: defaultConsent
description: Set the default consent collection method for your web property.
exl-id: 2a22fa8b-a234-4d3e-9b55-c7482a928fe6
---

# `defaultConsent`

The `defaultConsent` property determines how you handle data collection consent before you call the [`setConsent`](../setconsent.md) command. This property is valuable when you don't want to accidentally collect data from individuals who reside in areas where consent is required before collecting data.

If you have a visitor that is not within the jurisdiction of General Data Protection Regulation (GDPR), the default consent could be set to `in`. Visitors inside the jurisdiction of GDPR could have their default consent set to `pending`. Your Consent Management Platform (CMP) can detect the customer's region and provide the flag `gdprApplies` to IAB TCF 2.0. This flag can be used to set the default consent.

Set the `defaultConsent` string property to the desired consent level when running the `configure` command. This property is case-sensitive, and supports only the following three values: `"in"`, `"out"`, and `"pending"`. If you attempt to use any other value, the library throws an error. If not set in the `configure` command, the default value is **`in`**.

>[!IMPORTANT]
>
>The `defaultConsent` value does not persist between page loads. Make sure that you set the desired default consent every time that you call the `configure` command.

```js
alloy("configure", {
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  defaultConsent: "pending"
});
```

* **`in`**: Data collection operates normally until the user opts out.
* **`out`**: Data is permanently discarded until the user opts in.
* **`pending`**: Data is stored locally until the user opts in using the [`setConsent`](../setconsent.md) command.

>[!NOTE]
>
>Although Adobe plans to build a more robust set of purposes or categories that correspond to Adobe capabilities and product offerings, the current implementation is an all-or-nothing approach to opt-in. This limitation only applies to the Web SDK and not other Adobe JavaScript libraries.

## Using `defaultConsent` together with `setConsent` {#using-consent}

The Web SDK offers two complementary consent options:

* `defaultConsent` (this page): Determines the default consent preferences.
* [`setConsent`](../setconsent.md): Capture the consent preferences of visitors.

When used together, these settings can lead to different data collection and cookie setting results, depending on their configured values.

See the table below to understand when data collection occurs and when cookies are set, based on consent settings.

| `defaultConsent` | `setConsent` | Data collection occurs | Web SDK sets browser cookies |
|---------|----------|---------|---------|
| `in` | `in` | Yes |  Yes |
| `in` | `out` | No | Yes |
| `in` | Not set | Yes | Yes |
| `pending` | `in` | Yes | Yes |
| `pending` | `out` | No | Yes |
| `pending` | Not set | No | No |
| `out` | `in` | Yes | Yes |
| `out` | `out` | No | Yes |
| `out` | Not set | No | No |

See [Adobe Experience Platform Web SDK cookies](https://experienceleague.adobe.com/en/docs/core-services/interface/data-collection/cookies/web-sdk) for a list of cookies that the library sets.

>[!NOTE]
>
>Identity and consent cookies are set even if a visitor opts out of tracking. These cookies are necessary to honor their data collection preferences.

## Setting default consent based on `gdprApplies`

Some CMPs provide the ability to determine whether General Data Protection Regulation (GDPR) applies to the customer. If you want to assume consent for customers where GDPR does not apply, you can use the `gdprApplies` flag in a TCF API call. For example:

```js
var alloyConfiguration = { ... };
window.__tcfapi('getTCData', 2, function (tcData, success) {
  if (success) {
    alloyConfiguration.defaultConsent = tcData.gdprApplies ? "pending" : "in";
    window.alloy("configure", alloyConfiguration);
  }
});
```

In the above code block, the `configure` command is called after the `tcData` is obtained from the TCF API. If `gdprApplies` is true, default consent is set to `pending`. If `gdprApplies` is false, default consent is set to `in`. Be sure to fill in the `alloyConfiguration` variable with your configuration.

## Default consent using the Web SDK tag extension

See [Consent settings](/help/tags/extensions/client/web-sdk/configure/consent.md) in the Web SDK tag extension documentation to learn how to perform these actions using tags.
