---
keywords: Experience Platform;home;IAB;IAB 2.0;
solution: Experience Platform
title: IAB TCF 2.0 support in Real-time Customer Data Platform
topic: privacy events
---

# Create datasets for capturing IAB TCF 2.0 consent data

In order for Real-time Customer Data Platform to collect customer consent data in compliance with the IAB Transparency & Consent Framework (TCF) 2.0, that data must be sent to datasets whose schemas contain IAB consent fields and are enabled for use in Real-time Customer Profile.

This document provides steps for setting up datasets to collect IAB TCF 2.0 consent data. For higher-level guidance on how to configure Real-time CDP for TCF 2.0 compliance, refer to the [IAB TCF 2.0 compliance overview](./overview.md).

## Prerequisites

This tutorial uses the Schema Editor in the Adobe Experience Platform UI to create and edit Experience Data Model (XDM) schemas. Before starting, it is strongly recommended that you review the [basics of schema composition](../../../xdm/schema/composition.md) to learn more about the basic building blocks of schemas. After that, review the tutorial on [creating a schema in the UI](../../../xdm/tutorials/create-schema-ui.md) to familiarize yourself with the full schema creation process before following the steps outlined below.

## Consent schema structure {#structure}

There are two XDM mixins that provide customer consent fields that are required for TCF 2.0 compliance: one for record-based data, and another for time-series-based data.

| Schema | Description |
| --- | --- |
| Profile privacy mixin (**required**) | This mixin captures the current consent preferences of a customer. When used in a Profile-enabled schema, the values provided in this mixin are taken as the source of truth for how consent enforcement should apply to a customer's data. The use of this mixin in a Profile-enabled schema is **required** in order for consent enforcement to occur. |
| Experience Event privacy mixin (*optional*) | This mixin captures the consent preferences of a customer at a given point in time. When used in a Profile-enabled schema, the data captured in these fields can be used to track changes in a customer's consent preferences over time. The use of this mixin is optional. |

While the use case of each mixin is different, the specific fields that they provide are roughly the same. These fields are explained further in the following section.

### Consent mixin fields {#privacy-mixin}

The example below shows the schema fields provided by both consent mixins, and the types of values they expect:

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

## Create customer consent schemas {#create-schemas}

In the Platform UI, click **[!UICONTROL Schemas]** in the left navigation to open the *[!UICONTROL Schemas] workspace*. From the **[!UICONTROL Browse]** tab, create a new schema based on the **XDM Individual Profile class**. If you wish to track consent preference changes over time, you must also create a separate schema based on the **XDM ExperienceEvent class**.

>[!NOTE] If you have existing XDM schemas that you want to use to capture consent data instead, you can edit those schemas instead of creating new ones.

The sections below explain how to add the appropriate consent mixins for each schema.

### Add privacy mixin to an [!DNL XDM Individual Profile] schema {#add-profile-mixin}

Within the Schema Editor for your [!DNL XDM Individual Profile] schema, click **[!UICONTROL Add]** within the *[!UICONTROL Mixins]* section on the left side of the canvas.

### Add privacy mixin to an XDM ExperienceEvent schema {#add-event-mixin}

>[!NOTE] This step is optional. If you do not wish to track customer consent changes over time, you can skip to the next section on [creating datasets based on your privacy schemas](#datasets).

Within the Schema Editor for your XDM ExperienceEvent schema, click **[!UICONTROL Add]** within the *[!UICONTROL Mixins]* section on the left side of the canvas.

![](../assets/iab/add-mixin-event.png)

The *[!UICONTROL Add mixin]* dialog appears. From here, select **[!UICONTROL Experience event privacy mixin]** from the list. You can optionally use the search bar to narrow down results to locate the mixin easier. Once the mixin is selected, click **[!UICONTROL Add mixin]**.

![](../assets/iab/add-event-privacy.png)

The Schema Editor canvas reappears, showing the added consent string fields. Review the structure of the schema before clicking **[!UICONTROL Save]** to confirm your changes.

![](../assets/iab/event-privacy-structure.png)

## Create [!DNL Profile]-enabled datasets based on your privacy schemas {#datasets}

Once you have created schemas that include privacy mixins, you must create datasets based on those schemas which will ultimately ingest your customers' consent data.

## Next steps