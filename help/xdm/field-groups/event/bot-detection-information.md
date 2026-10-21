---
title: Bot Detection Field Group
description: Learn about the Bot Detection field group (XDM) schema field group.
exl-id: 8ade14a8-9a34-4060-95b2-812d1a21deeb
TQID: 'https://experienceleague.adobe.com/Vz2-I-KoJ-hFWNKbazTS752eSJWhq4uIQLbzMlL-Glk'
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
# [!UICONTROL Bot Detection] field group

[!UICONTROL Bot Detection] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md). The field group provides information about bot-generated traffic. 

![A diagram of the [!UICONTROL Bot Detection] field group.](../../images/field-groups/bot-detection-information.png)

| Display name               | Property        | Data type | Description                                             |
|----------------------------|-----------------|-----------|---------------------------------------------------------|
|[!UICONTROL Bot Detection]  | `botDetection`  | object    | Provides information about bot-generated traffic.        |
|[!UICONTROL Score]          | `score`         | number    | The bot probability score from zero through one. A score of zero means that the traffic is not a bot. |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-bot-detection.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-bot-detection.schema.json)
