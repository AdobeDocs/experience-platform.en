---
title: defaultConsent
description: Set the default consent collection method.
exl-id: 2a22fa8b-a234-4d3e-9b55-c7482a928fe6
---
# `defaultConsent`

The `defaultConsent` property determines how you handle data collection consent before you call the [`setConsent`](../setconsent.md) command. This property is valuable when you don't want to accidentally collect data from individuals who reside in areas where consent is required before collecting data.

This property allows three values:

* **In**: Data collection proceeds as normal, until the user opts out.
* **Out**: Data is permanently discarded until the user opts in.
* **Pending**: Data is stored locally until the user opts in using the [`setConsent`](../setconsent.md) command. Data does not persist between page loads.

If you have a visitor that is not within the jurisdiction of General Data Protection Regulation (GDPR), the default consent could be set to `in`. Visitors inside the jurisdiction of GDPR could have their default consent set to `pending`. Your Consent Management Platform (CMP) can detect the customer's region and provide the flag `gdprApplies` to IAB TCF 2.0. This flag can be used to set the default consent.

## Set default consent using the Web SDK tag extension

Select the desired radio button under **[!UICONTROL Default consent]** when [configuring the tag extension](/help/tags/extensions/client/web-sdk/web-sdk-extension-configuration.md).

1. Log in to [experience.adobe.com](https://experience.adobe.com) using your Adobe ID credentials.
1. Navigate to **[!UICONTROL Data Collection]** > **[!UICONTROL Tags]**.
1. Select the desired tag property.
1. Navigate to **[!UICONTROL Extensions]**, then click **[!UICONTROL Configure]** on the [!UICONTROL Adobe Experience Platform Web SDK] card.
1. Scroll down to the [!UICONTROL Privacy] section, then select the desired **[!UICONTROL Default consent]**.
1. Click **[!UICONTROL Save]**, then publish your changes.

## Set default consent using the Web SDK JavaScript library

Set the `defaultConsent` string property to the desired consent level when running the `configure` command. This property is case-sensitive, and supports only the following three values: `"in"`, `"out"`, and `"pending"`. If you attempt to use any other value, the library throws an error.

```js
alloy("configure", {
  "edgeConfigId": "ebebf826-a01f-4458-8cec-ef61de241c93",
  "orgId": "ADB3LETTERSANDNUMBERS@AdobeOrg",
  "defaultConsent": "pending"
});
```
