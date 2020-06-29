---
keywords: Experience Platform;home;IAB;IAB 2.0;
solution: Experience Platform
title: IAB TCF 2.0 support in Real-time Customer Data Platform
topic: privacy events
---

# Create datasets for capturing IAB TCF 2.0 consent data

In order for Real-time Customer Data Platform to collect customer consent data in compliance with the IAB Transparency & Consent Framework (TCF) 2.0, that data must be sent to datasets whose schemas contain IAB consent fields and are enabled for use in Real-time Customer Profile.

This document provides steps for setting up datasets to collect IAB TCF 2.0 consent data. For higher-level guidance on how to configure Real-time CDP for TCF 2.0 compliance, refer to the [IAB TCF 2.0 compliance overview](./overview.md).

## Schema structure

The following example shows the schema fields provided by the mixin, and the types of values they expect:

```json
{
  "xdm:optOutConsentLevel": {
    "xdm:privacyOptOuts": [
      {
        "xdm:optOutType": "general_opt_out",
        "xdm:optOutValue": "out",
        "xdm:timestamp": "2019-01-01T15:52:25+00:00"
      }
    ]
  },
  "xdm:identityPrivacyInfo": {
    "ECID": {
      "24162382913728446": {
        "xdm:identityIABConsent": {
          "xdm:consentTimestamp": "2020-04-11T05:05:05Z",
          "xdm:consentString": {
            "xdm:consentStandard": "IAB TCF",
            "xdm:consentStandardVersion": "2.0",
            "xdm:consentStringValue": "BObdrPUOevsguAfDqFENCNAAAAAmeAAA.PVAfDObdrA.DqFENCAmeAENCDA",
            "xdm:gdprApplies": true,
            "xdm:containsPersonalData": false
          }
        }
      }
    }
  }
}
```

| Property | Description |
| --- | --- |
| `xdm:optOutConsentLevel` | Contains an array of opt-out objects, used for general and sale opt-outs. While included in the Profile Privacy mixin, these are not required for TCF 2.0 compliance. |
| `xdm:identityPrivacyInfo` | Contains privacy information for individual customers, organized by identity namespace and value. In the above example, a single customer is identified under the `ECID` namespace, with a value of `24162382913728446`. |
| `xdm:identityIABConsent` | Each customer identity within `xdm:identityPrivacyInfo` must contain this field its associated subfields in order to update those customers' consent settings in [!DNL Profile]. |
| `xdm:consentTimestamp` | The datetime of when the consent update occurred, in ISO 8601 format. |
| `xdm:consentString` | Contains the customer's updated consent data and other contextual information. |
| `xdm:consentStandard` | The consent framework that the data applies to. For TCF compliance, the value should be "IAB TCF". |
| `xdm:consentStandardVersion` | The version number of the consent framework indicated by `xdm:consentStandard`. For TCF 2.0 compliance, the value should be "2.0". |
| `xdm:consentStringValue` | The consent string that was generated based on the customer's selected consent settings. |
| `xdm:gdprApplies` | A boolean value indicating whether or not the GDPR applies to this customer. Defaults to false if not included. |
| `xdm:containsPersonalData` | A boolean value indicating whether or not the consent update contains personal data. Defaults to false if not included. |

In addition to a 

### Add privacy mixins to schemas

In the Platform UI, click **[!UICONTROL Schemas]** in the left navigation to open the *[!UICONTROL Schemas] workspace*. From the **[!UICONTROL Browse]** tab, create a new schema based on the **XDM ExperienceEvent class**, or select an existing ExperienceEvent-based schema to modify.

>[!NOTE] If you have not created or edited an XDM schema before, follow the tutorial on [creating a schema](../../../xdm/tutorials/create-schema-ui.md) to familiarize yourself with the process before returning to this guide.

#### Add privacy mixin to an [!DNL XDM Individual Profile] schema

Within the Schema Editor for your [!DNL XDM Individual Profile] schema, click **[!UICONTROL Add]** within the *[!UICONTROL Mixins]* section on the left side of the canvas.

#### Add privacy mixin to an XDM ExperienceEvent schema

Within the Schema Editor for your XDM ExperienceEvent schema, click **[!UICONTROL Add]** within the *[!UICONTROL Mixins]* section on the left side of the canvas.

![](../assets/iab/add-mixin-event.png)

The *[!UICONTROL Add mixin]* dialog appears. From here, select **[!UICONTROL Experience event privacy mixin]** from the list. You can optionally use the search bar to narrow down results to locate the mixin easier. Once the mixin is selected, click **[!UICONTROL Add mixin]**.

![](../assets/iab/add-event-privacy.png)

The Schema Editor canvas reappears, showing the added consent string fields. Review the structure of the schema before clicking **[!UICONTROL Save]** to confirm your changes.

![](../assets/iab/event-privacy-structure.png)

### Create [!DNL Profile]-enabled datasets based on your privacy schemas

Once you have created schemas that include privacy mixins, you must create datasets based on those schemas which will ultimately ingest your customers' consent data.