---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;ExperienceEvent;fields;schemas;Schemas;Schema design;field group;field group;
solution: Experience Platform
title: Campaign Marketing Details Schema Field Group
description: This document provides an overview of the Campaign Marketing Details schema field group.
exl-id: be08b38b-68a0-4a74-9b8f-0344a0637395
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
