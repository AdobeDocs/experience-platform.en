---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;individual profile;fields;schemas;Schemas;personal details;Schema design;field group;Field group;
solution: Experience Platform
title: Personal Contact Details Schema Field Group
description: Learn about the Personal Contact Details schema field group.
exl-id: a78d9aee-ecf6-45a9-b270-cdad5b800a86
TQID: https://experienceleague.adobe.com/gU25SitmtH-ON-x0PqZqk1aPIAoVcz8d-G3FT8VxYFg
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
# [!UICONTROL Personal Contact Details] schema field group

>[!NOTE]
>
>The names of several schema field groups have changed. See the document on [field group name updates](../name-updates.md) for more information.

[!UICONTROL Personal Contact Details] is a standard schema field group for the [[!DNL XDM Individual Profile] class](../../classes/individual-profile.md) which describes the contact information for an individual person.

![](../../images/field-groups/personal-contact-details.png)

| Property | Data type | Description |
| --- | --- | --- |
| `faxPhone` | [Phone number](../../data-types/phone-number.md) | Describes the person's fax number. |
| `homeAddress` | [Postal address](../../data-types/postal-address.md) | Describes the person's residential address. |
| `homePhone` | [Phone number](../../data-types/phone-number.md) | Describes the person's home phone number. |
| `mobilePhone` | [Phone number](../../data-types/phone-number.md) | Describes the person's mobile phone number. |
| `personalEmail` | [Email address](../../data-types/email-address.md) | Describes the person's email address. |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/fieldgroups/profile/profile-personal-details.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/fieldgroups/profile/profile-personal-details.schema.json)
