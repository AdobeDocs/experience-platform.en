---
title: Medication Schema Field Group
description: Learn about the Medication schema field group.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
---
# [!UICONTROL Immunization] schema field group

[!UICONTROL Immunization] is a standard schema field group for the [[!DNL Medication] class](../../classes/medication.md). It provides a single object-type field `healthcareMedication` which captures a medication's information.

![Field group structure](../../images/field-groups/medication.png)

| Property | Data type | Description |
| --- | --- | --- |
| `batch` | ?? | ?? |
| `code`| ?? | ?? |
| `definition` | ?? | ?? |
| `doseForm` | ?? | ??|
| `identifier` | ?? | ?? |
| `ingredient` | ?? | ?? |
| `marketingAuthorizationHolder` | ?? | ?? |
| `totalVolume` | ?? | ?? |
| `status` | String | ?? |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/medication.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/medication.schema.json)
