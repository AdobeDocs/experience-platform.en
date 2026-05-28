---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;ExperienceEvent;fields;schemas;Schemas;Schema design;field group;field group;iab;tcf;consent;
solution: Experience Platform
title: IAB TCF 2.0 Consent Field Group for Event Schemas
description: Learn about the IAB TCF 2.0 Consent schema field group for the XDM ExperienceEvent class.
exl-id: c236d0d4-27bd-45d7-a912-d0e93a609254
TQID: https://experienceleague.adobe.com/fGy0-F-1JQuZFhBhMU9A2DFVtcxQfvp9njdb8-fcNXw
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
# [!UICONTROL IAB TCF 2.0 Consent] field group for event schemas

>[!IMPORTANT]
>
>This document covers the [!UICONTROL IAB TCF 2.0 Consent] schema field group for the XDM ExperienceEvent class. This field group should only be used if you intend to track consent change events over time.
>
>Note that consent values recorded in event data are not honored in automatic enforcement workflows. In order for automatic enforcement to take place, consent values must be ingested into the XDM Individual Profile class and enabled for Real-Time Customer Profile.
>
>For the field group intended for the XDM Individual Profile class, refer to the following [document](../profile/iab.md) instead.

[!UICONTROL IAB TCF 2.0 Consent] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md) used to capture a timestamped series IAB consent strings, in order to track consent-change patterns over time.

![](../../images/field-groups/iab-event.png)

| Property | Data type | Description |
| --- | --- | --- |
| `consentStrings` | Array of [Consent Strings](../../data-types/consent-string.md)  | An array of consent string values associated with the event. |

{style="table-layout:auto"}

See the guide on [IAB TCF 2.0 support in Experience Platform](../../../landing/governance-privacy-security/consent/iab/overview.md) for more information on the use case of this field group. For more details on the field group itself, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-privacy.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-privacy.schema.json)
