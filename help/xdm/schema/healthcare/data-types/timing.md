---
title: Timing Data Type
description: Learn about the Timing Experience Data Model (XDM) data type.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: true
exl-id: e1bc16ed-4dd8-4316-b3c8-88d49d393859
TQID: 'https://experienceleague.adobe.com/dQjdUh7cZkhp0mKxO1xqMqYJJCWMnNeN5q-6MZOIIIk'
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
