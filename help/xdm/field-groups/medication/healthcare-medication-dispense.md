---
title: Medication Dispense Schema Field Group
description: Learn about the Medication Dispense schema field group.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
---
# [!UICONTROL Medication Dispense] schema field group

[!UICONTROL Medication Dispense] is a standard schema field group for the [[!DNL Medication] class](../../classes/location.md), the [[!DNL XDM Individual Profile] Class](../../classes/individual-profile.md), and the [[!DNL Provider class]](../../classes/provider.md). It provides a single object-type field `healthcareMedicationDispense` which captures information about a medication that is to be or has been dispensed for a named person/patient.

![Field group structure](../../images/field-groups/medication-dispense.png)

| Property | Data type | Description |
| --- | --- | --- |
| `authorizingPrescription` | ?? | ?? |
| `basedOn`| ?? | ?? |
| `category` | ?? | ?? |
| `daysSupply` | ?? | ??|
| `destination` | ?? | ?? |
| `dosageInstructions` | ?? | ?? |
| `encounter` | ?? | ?? |
| `eventHistory` | ?? | ?? |
| `identifier` | ?? | ?? |
| `location` | ?? | ?? |
| `medication` | ?? | ?? |
| `notPerformedReason` | ?? | ?? |
| `note` | ?? | ?? |
| `partOf` | ?? | ?? |
| `performer` | ?? | ?? |
| `quantity` | ?? | ?? |
| `receiver` | ?? | ?? |
| `subject` | ?? | ?? |
| `substitution` | ?? | ?? |
| `supportingInformation` |?? | ?? |
| `type` | ?? | ?? |
| `recorded` | DateTime | ?? |
| `renderedDosageInstruction` | String | ?? |
| `status` | String | ?? |
| `statusChanged` | DateTime | ?? |
| `whenHandedOver` | DateTime | ?? |
| `whenPrepared` | DateTime | ?? |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/medicationdispense.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/medicationdispense.schema.json)
