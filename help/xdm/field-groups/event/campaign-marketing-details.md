---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;ExperienceEvent;fields;schemas;Schemas;Schema design;field group;field group;
solution: Experience Platform
title: Campaign Marketing Details Schema Field Group
description: Learn about the Campaign Marketing Details schema field group.
exl-id: be08b38b-68a0-4a74-9b8f-0344a0637395
TQID: 'https://experienceleague.adobe.com/UO1uSSTvQO3oEPwe-hMltpyDFTdMq1A0NWLfNFgPQI8'
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
# [!UICONTROL Campaign Marketing Details] schema field group

>[!NOTE]
>
>The names of several schema field groups have changed. See the document on [field group name updates](../name-updates.md) for more information.

[!UICONTROL Campaign Marketing Details] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md), used to describe marketing campaign information such as campaign group, name, and tracking code.

![](../../images/field-groups/campaign-marketing-details.png)

| Property | Data type | Description |
| --- | --- | --- |
| `marketing` | [Marketing](../../data-types/marketing.md)  | An object that describes marketing campaign information such as campaign group, name, and tracking code. |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-marketing.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-marketing.schema.json)
