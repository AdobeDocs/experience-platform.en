---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;ExperienceEvent;fields;schemas;Schemas;Schema design;field group;field group;
solution: Experience Platform
title: Web Details Schema Field Group
description: Learn about the Web Details schema field group.
exl-id: eb42606b-ade4-4d72-b601-c560009c98e8
TQID: https://experienceleague.adobe.com/ro1cdG-u-GHTcyT-gZAo2OTFumHboyqBmB1aID9vORs
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Web Details] schema field group

>[!NOTE]
>
>The names of several schema field groups have changed. See the document on [field group name updates](../name-updates.md) for more information.

[!UICONTROL Web Details] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md), used to describe information regarding web details events such as interaction, page details, and referrer.

![](../../images/field-groups/web-details.png)

| Property | Data type | Description |
| --- | --- | --- |
| `web` | [Web information](../../data-types/web-information.md)  | Describes link clicks, web page details, referrer information, and browser details. |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-web.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-web.schema.json)
