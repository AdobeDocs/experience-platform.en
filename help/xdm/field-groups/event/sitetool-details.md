---
title: Sitetool Details Schema Field Group
description: Learn about the Sitetool Details schema field group.
exl-id: 472c0a3f-efda-49af-9490-f2de90b348c0
TQID: 'https://experienceleague.adobe.com/eqrrxNcRy42Irfxj23Ua-jL2Pflf-bMBD3z-40brqXo'
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
# [!UICONTROL Sitetool Details] schema field group

[!UICONTROL Sitetool Details] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md). The field group provides a single `sitetool` object to a schema, which captures information collected by a sitetool.

![Field group structure](../../images/field-groups/sitetool-details.png)

| Property | Data type | Description |
| --- | --- | --- |
| `dataGatheringEvent` | Object | Indicates whether this event is a data-gathering event along with other related details. Contains the following properties:<ul><li>`data`: (Map) Contains the JSON data that is collected and submitted as part of quiz, survey, or poll submit event.</li><li>`isTrue`: (Boolean) Indicates whether this event is a data-gathering event like quiz, survey, or poll.</li><li>`score`: (Integer) The score secured by the actor based on event responses.</li></ul> |
| `actor` | String | A person/member who did the action. |
| `actorID` | String | A unique identifier for person/member who did the action. |
| `isKeyEvent` | Boolean | Indicates whether this event is a key event. |
| `name` | String | The name of the sitetool, such as chatbot, survey, and so on. |
| `section` | String | The relevant section of the sitetool like main or sub. |

{style="table-layout:auto"}

For more details on the field group, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/industry-verticals/experienceevent-healthcare-sitetool.schema.json).
