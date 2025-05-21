---
title: Schedule Schema Field Group
description: Learn about the Schedule schema field group.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
exl-id: fcabef50-203c-4239-81b4-210aaf5b26ca
---
# [!UICONTROL Schedule] schema field group

[!UICONTROL Schedule] is a standard schema field group for the [[!DNL XDM Individual Profile] class](../../../classes/individual-profile.md) and the [[!DNL Provider class]](../../../classes/provider.md). It provides a single object-type field `healthcareSchedule` which is a container for slots of time that may be available for booking appointments.

![Field group structure](../../../images/healthcare/field-groups/schedule.png)

| Display Name | Property | Data type | Description |
| --- | --- | --- | --- |
| [!UICONTROL Actor] | `actor` | Array of [[!UICONTROL Reference]](../data-types/reference.md) | The slots that reference this schedule providing the availability details to these referenced resource(s). |
| [!UICONTROL Identifier] | `identifier`| Array of [[!UICONTROL Identifier]](../data-types/identifier.md) | The external identifiers for the schedule. |
| [!UICONTROL Planning Horizon] | `planningHorizon` | [[!UICONTROL Period]](../data-types/period.md) | The period of time that the slots that reference this schedule cover, even if none exist. |
| [!UICONTROL Service Category] | `serviceCategory` | Array of [[!UICONTROL Codeable Concept]](../data-types/codeable-concept.md) | A broad categorization of the service that is to be performed during the appointment. |
| [!UICONTROL Service Type] | `serviceType` | Array of [[!UICONTROL Codeable Reference]](../data-types/codeable-reference.md) | The specific service that is to be performed during the appointment. |
| [!UICONTROL Speciality] | `specialty` | Array of [[!UICONTROL Codeable Concept]](../data-types/codeable-concept.md) | The specialty of the practitioner that would be required to perform the service requested in the appointment. |
| [!UICONTROL Active] | `active` | Boolean | Indicates whether the schedule record is in active use. |
| [!UICONTROL Comment] | `comment` | String | Comments on the availability with the purpose of describing any extended information, such as custom constraints on the slots. |
| [!UICONTROL Name] | `name` | String | The description of the schedule as it would be presented to a consumer while searching. |

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/schedule.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/schedule.schema.json)
