---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;ExperienceEvent;fields;schemas;Schemas;Schema design;field group;field group;enduserids;end-user;end user;ids;
solution: Experience Platform
title: End User ID Details Schema Field Group
description: Learn about the End User ID Details schema field group.
exl-id: ff5b74f4-7700-4d10-821e-b50f80ea8c05
TQID: 'https://experienceleague.adobe.com/GmusYQqnB5f07fzVpdB4UeZNDAtqbp7SjxJVBbCV-7Q'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
---
# [!UICONTROL End User ID Details] schema field group

>[!NOTE]
>
>The names of several schema field groups have changed. See the document on [field group name updates](../name-updates.md) for more information.

[!UICONTROL End User ID Details] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md), used to describe an individual's identity information across several Adobe applications. The field group provides a root-level `endUserIDs` object, which itself contains a read-only `_experience` field whose values are automatically updated as data is ingested.

![](../../images/field-groups/enduserids.png){width=700}

| Property | Data type | Description |
| --- | --- | --- |
| `aacustomid` | [Identity](../../data-types/identity.md)  | Custom end user IDs for Adobe Analytics Cloud. |
| `aaid` | [Identity](../../data-types/identity.md) | End user IDs for Adobe Analytics Cloud. |
| `acid` | [Identity](../../data-types/identity.md) | End user IDs for Adobe Campaign. |
| `adcloud` | [Identity](../../data-types/identity.md) | End user IDs for Adobe Advertising. |
| `emailid` | [Identity](../../data-types/identity.md) | Email address IDs. |
| `mcid` | [Identity](../../data-types/identity.md) | Adobe Marketing Cloud ID (MCID). The MCID is now known as the Experience Cloud ID (ECID). |
| `phonenumberid` | [Identity](../../data-types/identity.md) | Phone number IDs. |
| `tntid` | [Identity](../../data-types/identity.md) | End user IDs for Adobe Target. |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-enduserids.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-enduserids.schema.json)
