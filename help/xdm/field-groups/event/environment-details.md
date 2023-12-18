---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;ExperienceEvent;fields;schemas;Schemas;Schema design;field group;field group;environment;environment details;
solution: Experience Platform
title: Environment Details Schema Field Group
description: Learn about the ExperienceEvent Environment Details schema field group.
exl-id: 1d25b98f-66ac-443f-9b1c-dfd20a168c59
---

# [!UICONTROL Environment Details] schema field group

>[!NOTE]
>
>The names of several schema field groups have changed. See the document on [field group name updates](../name-updates.md) for more information.

[!UICONTROL Environment Details] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md) used to capture information regarding environment details related to an Experience Event such as device details, browser information, local time, and other geographical information.

<img src='../../images/field-groups/environment-details.png' width=500 /><br />

| Property | Data type | Description |
| --- | --- | --- |
| `device` | [Device](../../data-types/device.md)  | Describes an identified device, application or device browser instance that is trackable across sessions, normally by cookies. |
| `environment` | [Environment](../../data-types/environment.md) | Describes information about the situational context of the event observation, specifically detailing transitory information such as the network or software versions. |
| `placeContext` | [Place context](../../data-types/place-context.md) | Describes the transient circumstances related to the event observation. Examples include locale-specific information such as weather, local time, traffic, day of the week, workday vs. holiday, and working hours. |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-environment-details.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-environment-details.schema.json)
