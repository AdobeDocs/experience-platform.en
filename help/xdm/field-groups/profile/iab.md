---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;individual profile;fields;schemas;Schemas;Schema design;field group;field group;iab;tcf;consent;
solution: Experience Platform
title: IAB TCF 2.0 Consent Field Group for Profile Schemas
description: Learn about the IAB TCF 2.0 Consent schema field group for the XDM Individual Profile class.
exl-id: 52a4fee8-d7f4-4f27-8e26-0c132985eb84
TQID: https://experienceleague.adobe.com/McCw6O5c1l-WVvFvtsX9d7v4XWjSI7if2uiz9KMSGns
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# [!UICONTROL IAB TCF 2.0 Consent] field group for profile schemas

>[!NOTE]
>
>This document covers the [!UICONTROL IAB TCF 2.0 Consent] schema field group for the XDM Individual Profile class. For the field group intended for the XDM ExperienceEvent class, refer to the following [document](../event/iab.md) instead.

[!UICONTROL IAB TCF 2.0 Consent] is a standard schema field group for the [[!DNL XDM Individual Profile] class](../../classes/individual-profile.md) used to capture a timestamped series IAB consent strings, in order to track consent-change patterns over time.

![](../../images/field-groups/iab-profile.png)

| Property | Data type | Description |
| --- | --- | --- |
| `identityPrivacyInfo` | Map  | A map-type object that associates a customer's individual identity values with different TCF consent strings. An example of this object's structure is provided below. |

{style="table-layout:auto"}

The following JSON demonstrates the structure of the `identityPrivacyInfo` map. 

```json
{
  "identityPrivacyInfo": {
    "ECID": {
      "13782522493631189": {
        "identityIABConsent": {
          "consentTimestamp": "2020-04-11T05:05:05Z",
          "consentString": {
            "consentStandard": "IAB TCF",
            "consentStandardVersion": "2.0",
            "consentStringValue": "BObdrPUOevsguAfDqFENCNAAAAAmeAAA.PVAfDObdrA.DqFENCAmeAENCDA",
            "gdprApplies": true,
            "containsPersonalData": false
          }
        }
      }
    }
  }
}
```

As the example shows, each root-level key of `xdm:identityPrivacyInfo` corresponds with an identity namespace recognized by Identity Service. In turn, each namespace property must have at least one sub-property whose key matches the customer's corresponding identity value for that namespace. In this example, the customer is identified with an Experience Cloud ID (`ECID`) value of `13782522493631189`.

>[!NOTE]
>
>While the above example uses a single namespace/value pair to represent the customer's identity, you can add additional keys for other namespaces, and each namespace can have multiple identity values, each with their own set of TCF consent preferences.

For each identity value, an `identityIABConsent` property must provided, which provides the TCF consent value for the identity. The value for this property must conform to the [[!UICONTROL Consent String] data type](../../data-types/consent-string.md).

See the guide on [IAB TCF 2.0 support in Experience Platform](../../../landing/governance-privacy-security/consent/iab/overview.md) for more information on the use case of this field group. For more details on the field group itself, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/fieldgroups/profile/profile-privacy.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/fieldgroups/profile/profile-privacy.schema.json)
