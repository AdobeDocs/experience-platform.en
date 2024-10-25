---
title: Schedule Schema Field Group
description: Learn about the Schedule schema field group.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
---
# [!UICONTROL Schedule] schema field group

[!UICONTROL Schedule] is a standard schema field group for the [[!DNL XDM Individual Profile] class](../../classes/individual-profile.md) and the [[!DNL Provider class]](../../classes/provider.md). It provides a single object-type field `healthcareSchedule` which is a container for slots of time that may be available for booking appointments.

![Field group structure](../../images/field-groups/schedule.png)

| Property | Data type | Description |
| --- | --- | --- |
| `actor` | ?? | ?? |
| `identifier`| ?? | ?? |
| `planningHorizon` | ?? | ?? |
| `serviceCategory` | ?? | ??|
| `serviceType` | ?? | ?? |
| `specialty` | ?? | ?? |
| `active` | Boolean | ?? |
| `comment` | String | ?? |
| `name` | String | ?? |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/schedule.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/schedule.schema.json)
