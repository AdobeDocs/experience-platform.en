---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;individual profile;fields;schemas;Schemas;Schema design;mixin;mixins;work details;profile work;
solution: Experience Platform
title: Work Contact Details Schema Field Group
description: Learn about the Work Contact Details schema field group.
exl-id: 0133622c-e95f-4833-b2f8-3694d41751b4
TQID: https://experienceleague.adobe.com/jiX9U9BNZ5HGzcVFyCrc9IV5Vq9QDBvRQAW-zIl8Pz8
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
# [!UICONTROL Work Contact Details] schema field group

>[!NOTE]
>
>The names of several schema field groups have changed. See the document on [field group name updates](../name-updates.md) for more information.

[!UICONTROL Work Contact Details] is a standard schema field group for the [[!DNL XDM Individual Profile] class](../../classes/individual-profile.md). The field group provides several fields that capture occupational information regarding an individual person, such as work address, work email, work phone number, and organizations to which the person belongs.

![](../../images/field-groups/work-contact-details.png)

| Property | Data type | Description |
| --- | --- | --- |
| `workAddress` | [Postal address](../../data-types/postal-address.md) | Describes the person's work address. |
| `workEmail` | [Email address](../../data-types/email-address.md) | Describes the person's work email address. |
| `workPhone` | [Phone number](../../data-types/phone-number.md) | Describes the person's work phone number. |
| `organizations` | String (Array) | An array of free-form strings that represent the organizations the person is a member of. |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/fieldgroups/profile/profile-work-details.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/fieldgroups/profile/profile-work-details.schema.json)
