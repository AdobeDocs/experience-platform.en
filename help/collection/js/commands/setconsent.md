---
title: setConsent
description: Used on each page to track your users' consent preferences.
exl-id: d01a6ef1-4fa7-4a60-a3a1-19568b4e0d23
---

# `setConsent`

The `setConsent` command tells the Web SDK if it should send data (opt in), discard data (opt out), or use [`defaultConsent`](configure/defaultconsent.md) (consent unknown).

The Web SDK supports following standards:

* **[Adobe standard](/help/landing/governance-privacy-security/consent/adobe/overview.md)**: Both 1.0 and 2.0 standards are supported.
* **[IAB Transparency & Consent Framework](/help/landing/governance-privacy-security/consent/iab/overview.md)**: If you use this standard, the visitor's Real-Time Customer Profile is updated with the consent information if your implementation is correctly configured:
  1. The XDM individual profile schema contains the [IAB TCF 2.0 Consent field group](/help/xdm/field-groups/profile/iab.md).
  1. The Experience Event schema contains the [IAB TCF 2.0 Consent field group](/help/xdm/field-groups/event/iab.md).
  1. You include the IAB consent information in the event [XDM object](sendevent/xdm.md). The Web SDK does not automatically include the consent information when sending event data.

After using this command, the Web SDK writes the user's preferences to a cookie. The next time the user loads your website in the browser, the SDK retrieves these persisted preferences to determine if events can be sent to Adobe.

Adobe recommends that you store any consent dialog preferences separately from Web SDK consent. The Web SDK does not offer a way to retrieve consent. To make sure that the user preferences stay in sync with the SDK, you can call the `setConsent` command on every page load. The Web SDK only makes a server call when consent changes.

## Identity sync considerations {#identity-considerations}

The `setConsent` command only uses the `ECID` from the identity map, as the command operates at device level. Other identities from the identity map are not taken into consideration by the `setConsent` command.

## Using `defaultConsent` together with `setConsent` {#using-consent}

The Web SDK offers two complementary consent configuration commands:

* [`defaultConsent`](configure/defaultconsent.md): This command is meant to capture the consent preferences of Adobe customers using Web SDK.
* [`setConsent`](setconsent.md): This command is meant to capture the consent preferences of your site visitors.

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
| **AMCV_###@AdobeOrg** | 34128000 (395 days) | Present when [`idMigrationEnabled`](configure/idmigrationenabled.md) is enabled. It helps when transitioning to Web SDK while some parts of the site are still using `visitor.js`. |
| **Demdex cookie** | 15552000 (180 days) | Present if ID synchronization is enabled. Audience Manager sets this cookie to assign a unique ID to a site visitor. The demdex cookie helps Audience Manger perform basic functions, such as visitor identification, ID synchronization, segmentation, modeling, reporting, and so on.|
| **kndctr_orgid_cluster** | 1800 (30 minutes) | Stores the Edge Network region that serves the current user's requests. The region is used in the URL path so that the Edge Network can route the request to the correct region. If a user connects with a different IP address or in a different session, the request is again routed to the closest region. |
| **kndct_orgid_identity** | 34128000 (395 days) | Stores the ECID, as well as other information related to the ECID. |
| **kndctr_orgid_consent** | 15552000 (180 days) | Stores the users consent preference for the website. |
|**s_ecid**|63115200 (2 years)|Contains a copy of the Experience Cloud ID ([!DNL ECID]) or MID. The MID is stored in a key-value pair that follows this syntax, `s_ecid=MCMID\|<ECID>`.|

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

* **`consent[]`**: An array of `consent` objects. The consent object is formatted differently depending on the standard and version that you choose. See the tabs below for examples of each consent object, depending on the consent standard.
* **`identityMap`**: An object that controls how an ECID is generated and which IDs consent information is tied to. Adobe recommends including this object when `setConsent` is run before other commands, such as [`sendEvent`](sendevent/overview.md).
* **`edgeConfigOverrides`**: An object that contains [datastream configuration overrides](datastream-overrides.md).

>[!BEGINTABS]

>[!TAB Adobe 2.0]

### Adobe 2.0 standard `consent` object

If you are using Adobe Experience Platform, you will need include a privacy schema field group in your profile schema. See [Governance, privacy, and security in Adobe Experience Platform](../../landing/governance-privacy-security/overview.md) for more information on the Adobe 2.0 standard. You can add data inside the value object below corresponding to the schema of the `consents` field of the [!UICONTROL Consents and Preferences] profile field group.

* **`standard`**: The consent standard that you choose. Set this property to `"Adobe"` for the Adobe 2.0 standard.
* **`version`**: A string representing the version of the consent standard. Set this property to `"2.0"` for the Adobe 2.0 standard.
* **`value`**: An object containing consent values.
  * **`value.collect.val`**: The consent value. Set this to `"y"` when users opt in and to `"n"` when users opt out.
  * **`value.metadata.time`**: The timestamp when users last updated their consent settings.

```js
// Set consent using the Adobe 2.0 standard
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
  }],
});
```

>[!TAB IAB TCF 2.0]

### IAB TCF 2.0 standard `consent` object

To record user consent preferences provided through the Interactive Advertising Bureau Europe (IAB) Transparency and Consent Framework (TCF) standard, set the consent string as shown below.

When the consent is set in this way, the Real-Time Customer Profile is updated with the consent information. For this to work, the profile XDM schema needs to contain the [Profile Privacy schema field group](https://github.com/adobe/xdm/blob/master/docs/reference/mixins/profile/profile-privacy.schema.md). When sending events, the IAB consent information needs to be added manually to the event XDM object. The Web SDK does not automatically include the consent information in the events.

To send the consent information in events, you must add the Experience Event Privacy field group to your [!DNL Profile]-enabled [!DNL XDM ExperienceEvent] schema. See the section on [updating the ExperienceEvent schema](../../landing/governance-privacy-security/consent/iab/dataset.md#event-schema) in the dataset preparation guide for steps on how to configure this.

* **`standard`**: The consent standard that you choose. Set this property to `"IAB TCF"` for the IAB TCF 2.0 standard.
* **`version`**: A string representing the version of the consent standard. Set this property to `"2.0"` for the IAB TCF 2.0 standard.
* **`value`**: A string containing the consent value.
* **`gdprApplies`**: A boolean that determines if GDPR applies to this consent value. Its default value is `true`.
* **`gdprContainsPersonalData`**: A boolean that determines if the event data associated with this user contains personal data. Its default value is `false`.

```js
// Set consent using the IAB TCF 2.0 standard
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
* **`value.general`**: The consent value. Set this to `"in"` when users opt in and to `"out"` when users opt out.

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

### Sending multiple standards in one request {#multiple-standards}

The Web SDK also supports sending more than one consent object in a request, as shown in the example below.

```js
alloy("setConsent", {
    consent: [{
        standard: "Adobe",
        version: "2.0",
        value: {
            collect: {
                val: "y"
            },
            metadata: {
                time: "2021-03-17T15:48:42-07:00"
            }
        }
    }, {
        standard: "IAB TCF",
        version: "2.0",
        value: "CO1Z4yuO1Z4yuAcABBENArCsAP_AAH_AACiQGCNX_T5eb2vj-3Zdt_tkaYwf55y3o-wzhhaIse8NwIeH7BoGP2MwvBX4JiQCGBAkkiKBAQdtHGhcCQABgIhRiTKMYk2MjzNKJLJAilsbe0NYCD9mnsHT3ZCY70--u__7P3fAwQgkwVLwCRIWwgJJs0ohTABCOICpBwCUEIQEClhoACAnYFAR6gAAAIDAACAAAAEEEBAIABAAAkIgAAAEBAKACIBAACAEaAhAARIEAsAJEgCAAVA0JACKIIQBCDgwCjlACAoAAAAA.YAAAAAAAAAAA",
        gdprApplies: true
    }]
});
```

## Persistence of consent preferences {#persistence}

After you have communicated user preferences to the Web SDK using the `setConsent` command, the SDK persists user preferences to a cookie. The next time the user loads your website in the browser, the Web SDK will retrieve and use these persisted preferences to determine whether or not events can be sent to Adobe.

You will need to store the user preferences independently to be able to show the consent dialog with the current preferences. There is no way to retrieve the user preferences from the Web SDK. To make sure that the user preferences stay in sync with the SDK, you can call the `setConsent` command on every page load. The Web SDK will only make a server call if the preferences have changed.
