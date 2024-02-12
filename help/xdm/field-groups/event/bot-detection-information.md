---
title: Bot Detection Field Group
description: Learn about the Bot Detection field group (XDM) schema field group.
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
 