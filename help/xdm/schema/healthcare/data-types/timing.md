---
title: Timing Data Type
description: Learn about the Timing Experience Data Model (XDM) data type.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
exl-id: e1bc16ed-4dd8-4316-b3c8-88d49d393859
---
# [!UICONTROL Timing] data type

[!UICONTROL Timing] is a standard Experience Data Model (XDM) data type that describes a timing schedule that provides information on an event that may occur multiple times. This data type is created as per the HL7 FHIR Release 5 specifications.

![Timing data type structure](../../../images/healthcare/data-types/timing.png)

| Display Name | Property | Data type | Description |
| --- | --- | --- | --- |
| [!UICONTROL Event] | `event` | Array of DateTime | When the event occurs. |
| [!UICONTROL Repeat] | `repeat` | [[!UICONTROL Repeat]](../data-types/repeat.md) | Information about when the event occurs. |
| [!UICONTROL Code] | `code` | [[!UICONTROL Codeable Concept]](../data-types/codeable-concept.md) | The code relating to the event. |

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/timing.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/timing.schema.json)
