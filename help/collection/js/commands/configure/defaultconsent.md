---
title: defaultConsent
description: Set the default consent collection method for your web property.
exl-id: 2a22fa8b-a234-4d3e-9b55-c7482a928fe6
TQID: https://experienceleague.adobe.com/1bc7KJIMEOri1ExqjmpCXB9MoRIYKuZS8CEGJqtVvFU
product_v2:
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# `defaultConsent`

The `defaultConsent` property determines how you handle data collection consent before you call the [`setConsent`](../setconsent.md) command. This property is valuable when you don't want to accidentally collect data from individuals who reside in areas where consent is required before collecting data.

If you have a visitor that is not within the jurisdiction of General Data Protection Regulation (GDPR), the default consent could be set to `in`. Visitors inside the jurisdiction of GDPR could have their default consent set to `pending`. Your Consent Management Platform (CMP) can detect the customer's region and provide the flag `gdprApplies` to IAB TCF 2.0. This flag can be used to set the default consent.

Set the `defaultConsent` string property to the desired consent level when running the `configure` command. This property is case-sensitive, and supports only the following three values: `"in"`, `"out"`, and `"pending"`. If you attempt to use any other value, the library throws an error. If not set in the `configure` command, the default value is **`in`**.

>[!IMPORTANT]
>
>The `defaultConsent` value does not persist between page loads. Make sure that you set the desired default consent every time that you call the `configure` command. In contrast, a visitor's resolved consent (set through [`setConsent`](../setconsent.md)) is persisted in a cookie and applied automatically on subsequent page loads.

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

When used together, `defaultConsent` and `setConsent` produce different data collection, cookie setting, and identity results depending on their configured values. See [Consent and identity in Data Collection](/help/collection/identity/consent.md#how-consent-affects-identity) for a complete interaction table.

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
