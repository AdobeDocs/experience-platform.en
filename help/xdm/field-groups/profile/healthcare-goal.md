---
title: Goal Schema Field Group
description: Learn about the Goal schema field group.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
---
# [!UICONTROL Goal] schema field group

[!UICONTROL Goal] is a standard schema field group for the [[!DNL XDM Individual Profile] class](../../classes/individual-profile.md) and the [[!DNL Provider class]](../../classes/provider.md). It provides a single object-type field `healthcareGoal` which describes the intended objective(s) for a patient, group, or organization care. Examples include weight loss, restoring an activity of daily living, obtaining herd immunity via immunization, meeting a process improvement objective, etc 

![Field group structure](../../images/field-groups/goal.png)

| Property | Data type | Description |
| --- | --- | --- |
| `achievementStatus` | ?? | ?? |
| `addresses`| ?? | ?? |
| `category` | ?? | ?? |
| `description` | ?? | ??|
| `identifier` | ?? | ?? |
| `note` | ?? | ?? |
| `outcome` | ?? | ?? |
| `priority` | ?? | ?? |
| `source` | ?? | ?? |
| `startCodeableConcept` | ?? | ?? |
| `subject` | ?? | ?? |
| `target` | ?? | ?? |
| `continous` | Boolean | ?? |
| `lifecycleStatus` | String | ?? |
| `startDate` | Date | ?? |
| `statusDate` | Date | ?? |
| `statusReason` | String | ?? |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/goal.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/goal.example.1.json)
