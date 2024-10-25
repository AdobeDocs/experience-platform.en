---
title: Medication Request Schema Field Group
description: Learn about the Medication Request schema field group.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
---
# [!UICONTROL Medication Request] schema field group

[!UICONTROL Medication Request] is a standard schema field group for the [[!DNL Medication] class](../../classes/location.md), the [[!DNL XDM Individual Profile] Class](../../classes/individual-profile.md), and the [[!DNL Provider class]](../../classes/provider.md). It provides a single object-type field `healthcareMedicationDispense` which captures an order or request for both supply of the medication and the instructions for administration of the medication to a patient.

![Field group structure](../../images/field-groups/medication-request.png)

| Property | Data type | Description |
| --- | --- | --- |
| `basedOn` | ?? | ?? |
| `category`| ?? | ?? |
| `courseOfTherapyType` | ?? | ?? |
| `device` | ?? | ??|
| `dispenseRequest` | ?? | ?? |
| `dosageInstructions` | ?? | ?? |
| `effectiveDosePeriod` | ?? | ?? |
| `encounter` | ?? | ?? |
| `eventHistory` | ?? | ?? |
| `groupIdentifier` | ?? | ?? |
| `identifier` | ?? | ?? |
| `informationSource` | ?? | ?? |
| `insurance` | ?? | ?? |
| `medication` | ?? | ?? |
| `note` | ?? | ?? |
| `performer` | ?? | ?? |
| `performerType` | ?? | ?? |
| `priorPrescription` | ?? | ?? |
| `reason` | ?? | ?? |
| `recorder` |?? | ?? |
| `requester` | ?? | ?? |
| `statusReason` | ?? | ?? |
| `subject` | ?? | ?? |
| `substitution` | ?? | ?? |
| `supportingInformation` | ?? | ?? |
| `authoredOn` | DateTime | ?? |
| `doNotPerform` | Boolean | ?? |
| `intent` | String | ?? |
| `priority` | String | ?? |
| `renderedDosageInstruction` | String | ?? |
| `reported` | Boolean | ?? |
| `status` | String | ?? |
| `statusChanged` | DateTime | ?? |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/medicationrequest.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/medicationrequest.schema.json)
