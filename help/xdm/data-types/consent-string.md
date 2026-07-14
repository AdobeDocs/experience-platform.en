---
solution: Experience Platform
title: Consent String Data Type
description: Learn about the Consent String XDM data type.
exl-id: 288ec79e-074a-4d72-9c5f-e9cd8485b804
TQID: https://experienceleague.adobe.com/2HaTtDeP-lJSF25z7wqRfUjPSHhXPEZV9vD9gPBhGvk
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Consent String] data type

[!UICONTROL Consent String] is a standard XDM data type that describes a string value that represents a customer's consent. It includes contextual information such as the standard for the consent string (for example, the [IAB Transparency and Consent Framework (TCF) 2.0](../field-groups/profile/iab.md)).

![](../images/data-types/consent-string.png)

| Property | Data type | Description |
| --- | --- | --- |
| `consentStandard` | String | The standard for the consent string. This helps determine the format of the consent string as set by consent management services. |
| `consentStandardVersion` | String | The version of the consent standard, used to accurately define the format of the consent string as set by consent management services. |
| `consentStringValue` | String | The full consent string as provided by the consent management service. `consentStandard` and `consentStandardVersion` help define how to parse this string. |
| `containsPersonalData` | Boolean | When this field is true, it means this consent string needs to be processed for consent enforcement. |
| `gdprApplies` | Boolean | When this field is true, it means consent is coming with personal data. |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/consent/consentstring.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/consent/consentstring.schema.json)
