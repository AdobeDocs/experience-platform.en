---
title: defaultConsent
description: Set the default consent collection method for your web property.
exl-id: 2a22fa8b-a234-4d3e-9b55-c7482a928fe6
---

# `defaultConsent`

The `defaultConsent` property determines how you handle data collection consent before you call the [`setConsent`](../setconsent.md) command. This property is valuable when you don't want to accidentally collect data from individuals who reside in areas where consent is required before collecting data.

By default, users are opted in to all purposes, and the Web SDK is allowed to perform the following tasks:

* Send data to and from Adobe's servers.
* Read and write cookies or web storage items.

If users opt out of all purposes, the Web SDK does not perform any of these tasks.

The `defaultConsent` property supports three values:

* **`in`**: Data collection proceeds as normal, until the user opts out.
* **`out`**: Data is permanently discarded until the user opts in.
* **`pending`**: Data is stored locally until the user opts in using the [`setConsent`](../setconsent.md) command. When the default consent for the general purpose is set to `pending`, attempting to execute any commands that depend on user opt-in preferences (for example, the [`sendEvent`](../sendevent/overview.md) command) results in the command being queued in the Web SDK. Queued commands are not processed until you have communicated the user's opt-in preferences to the Web SDK.

>[!NOTE]
>
> Consent data does not persist between page loads.

If you have a visitor that is not within the jurisdiction of General Data Protection Regulation (GDPR), the default consent could be set to `in`. Visitors inside the jurisdiction of GDPR could have their default consent set to `pending`. Your Consent Management Platform (CMP) can detect the customer's region and provide the flag `gdprApplies` to IAB TCF 2.0. This flag can be used to set the default consent.

If you do not want to collect events that occurred before the user's opt-in preferences are set, you can pass `"defaultConsent": "out"` during Web SDK configuration. Attempting to execute any commands that depend on user opt-in preferences will have no effect until you have communicated the user's opt-in preferences to the Web SDK.

>[!NOTE]
>
>Currently, Web SDK supports only a single all-or-nothing purpose. Although we plan to build out a more robust set of purposes or categories that will correspond to the different Adobe capabilities and product offerings, the current implementation is an all-or-nothing approach to opt-in.  This only applies to [!DNL Web SDK] and NOT other Adobe JavaScript libraries.

## Using `defaultConsent` together with `setConsent` {#using-consent}

The Web SDK offers two complementary consent configuration commands:

* [`defaultConsent`](defaultconsent.md): This command is meant to capture the consent preferences of Adobe customers using Web SDK.
* [`setConsent`](../setconsent.md): This command is meant to capture the consent preferences of your site visitors.

When used together, these settings can lead to different data collection and cookie setting results, depending on their configured values.

See the table below to understand when data collection occurs and when cookies are set, based on consent settings.

|defaultConsent | setConsent | Data collection occurs | Web SDK sets browser cookies |
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

The following cookies are set when the consent configuration allows:

| Name | Max age | Description |
|---|---|---|
| **AMCV_###@AdobeOrg** | 34128000 (395 days) | Present when [`idMigrationEnabled`](../configure/idmigrationenabled.md) is enabled. It helps when transitioning to Web SDK while some parts of the site are still using `visitor.js`. |
| **Demdex cookie** | 15552000 (180 days) | Present if ID synchronization is enabled. Audience Manager sets this cookie to assign a unique ID to a site visitor. The demdex cookie helps Audience Manger perform basic functions, such as visitor identification, ID synchronization, segmentation, modeling, reporting, and so on.|
| **kndctr_orgid_cluster** | 1800 (30 minutes) | Stores the Edge Network region that serves the current user's requests. The region is used in the URL path so that the Edge Network can route the request to the correct region. If a user connects with a different IP address or in a different session, the request is again routed to the closest region. |
| **kndct_orgid_identity** | 34128000 (395 days) | Stores the ECID, as well as other information related to the ECID. |
| **kndctr_orgid_consent** | 15552000 (180 days) | Stores the users consent preference for the website. |
|**s_ecid**|63115200 (2 years)|Contains a copy of the Experience Cloud ID ([!DNL ECID]) or MID. The MID is stored in a key-value pair that follows this syntax, `s_ecid=MCMID\|<ECID>`.|

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
  datastreamId: "ebebf826-a01f-4458-8cec-ef61de241c93",
  orgId: "ADB3LETTERSANDNUMBERS@AdobeOrg",
  defaultConsent: "pending"
});
```
