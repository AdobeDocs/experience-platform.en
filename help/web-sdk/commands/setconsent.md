---
title: setConsent
description: Used on each page to track the user's consent.
---
# setConsent

The `setConsent` command tells the Web SDK if it should send data (opt in), discard data (opt out), or use [`defaultConsent`](configure/defaultconsent.md) (consent unknown).

The Web SDK supports following standards:

* **[Adobe standard](/help/landing/governance-privacy-security/consent/adobe/overview.md)**: Both 1.0 and 2.0 standards are supported.
* **[IAB Transparency & Consent Framework](/help/landing/governance-privacy-security/consent/iab/overview.md)**: If you use this standard, the visitor's Real-Time Customer Profile is updated with the consent information if your implementation is correctly configured:
  1. The XDM individual profile schema contains the [IAB TCF 2.0 Consent field group](/help/xdm/field-groups/profile/iab.md).
  1. The Experience Event schema contains the [IAB TCF 2.0 Consent field group](/help/xdm/field-groups/event/iab.md).
  1. You include the IAB consent information in the event [XDM object](sendevent/xdm.md). The Web SDK does not automatically include the consent information when sending event data.

After using this command, the Web SDK writes the user's preferences to a cookie. The next time the user loads your website in the browser, the SDK retrieves these persisted preferences to determine if events can be sent to Adobe.

Adobe recommends that you store any consent dialog preferences separately from Web SDK consent. The Web SDK does not offer a way to retrieve consent. To make sure that the user preferences stay in sync with the SDK, you can call the `setConsent` command on every page load. The Web SDK only makes a server call when consent changes.

## Set consent using the Web SDK tag extension

Setting consent is performed as an action within a rule in the Adobe Experience Platform Data Collection tags interface.

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Rules]**, then select the desired rule.
1. Under [!UICONTROL Actions], select an existing action or create an action.
1. Set the [!UICONTROL Extension] dropdown field to **[!UICONTROL Adobe Experience Platform Web SDK]**, and set the [!UICONTROL Action Type] to **[!UICONTROL Set consent]**.
1. Set the desired fields on the right, including **[!UICONTROL Standard]** and **[!UICONTROL General consent]**.
1. Click **[!UICONTROL Keep Changes]**, then run your publishing workflow.

You can include multiple consent objects within this action.

## Set consent using the Web SDK JavaScript library

Run the `setConsent` command when calling your configured instance of the Web SDK. You can include the following objects in this command:

* **`consent[]`**: An array of `consent` objects. The consent object is formatted differently depending on the standard and version that you choose.
* **`identityMap`**: An object that controls how an ECID is generated and which IDs consent information is tied to. Adobe recommends including this object when `setConsent` is run before other commands, such as [`sendEvent`](sendevent/overview.md).
* **`edgeConfigOverrides`**: An object that contains [datastream configuration overrides](datastream-overrides.md).

>[!BEGINTABS]

>[!TAB Adobe 2.0]

### Adobe 2.0 standard `consent` object

* **`standard`**: The consent standard that you choose. Set this property to `"Adobe"` for the Adobe 2.0 standard.
* **`version`**: A string representing the version of the consent standard. Set this property to `"2.0"` for the Adobe 2.0 standard.
* **`value`**: An object containing consent values.
  * **`value.collect.val`**: The consent value. Valid values are `"y"` (opt in) and `"n"` (opt out).
  * **`value.metadata.time`**: The timestamp that the user set the consent value.

```js
alloy("setConsent", {
  "consent": [{
    "standard": "Adobe",
    "version": "2.0",
    "value": {
      "collect": {
        "val": "y"
      },
      "metadata": {
        "time": "YYYY-03-17T15:48:42-07:00"
      }
    }
  }]
});
```

>[!TAB IAB TCF 2.0]

### IAB TCF 2.0 standard `consent` object

* **`standard`**: The consent standard that you choose. Set this property to `"IAB TCF"` for the IAB TCF 2.0 standard.
* **`version`**: A string representing the version of the consent standard. Set this property to `"2.0"` for the IAB TCF 2.0 standard.
* **`value`**: A string containing the consent value.
* **`gdprApplies`**: A boolean that determines if GDPR applies to this consent value. Its default value is `true`.
* **`gdprContainsPersonalData`**: A boolean that determines if the event data associated with this user contains personal data. Its default value is `false`.

```js
alloy("setConsent", {
  consent: [{
    "standard": "IAB TCF",
    "version": "2.0",
    "value": "CO052l-O052l-DGAMBFRACBgAIBAAAAABIYgEawAQEagAAAA",
    "gdprApplies": true,
    "gdprContainsPersonalData": true
  }]
});
```

>[!TAB Adobe 1.0]

### Adobe 1.0 standard `consent` object

* **`standard`**: The consent standard that you choose. Set this property to `"Adobe"` for the Adobe 1.0 standard.
* **`version`**: A string representing the version of the consent standard. Set this property to `"1.0"` for the Adobe 1.0 standard.
* **`value.general`**: The consent value. Valid values are `"in"` (opt in) and `"out"` (opt out).

```js
// Set consent using the Adobe 1.0 standard
alloy("setConsent", {
  "consent": [{
    "standard": "Adobe",
    "version": "1.0",
    "value": {
      "general": "in"
    }
  }]
});
```

>[!ENDTABS]
