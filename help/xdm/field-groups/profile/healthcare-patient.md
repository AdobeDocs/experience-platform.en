---
title: Patient Schema Field Group
description: Learn about the Patient schema field group.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
---
# [!UICONTROL Patient] schema field group

[!UICONTROL Patient] is a standard schema field group for the [[!DNL XDM Individual Profile] class](../../classes/individual-profile.md). It provides a single object-type field `healthcarePatient` which captures the demographics and other administrative details about an individual or animal receiving care or other health-related services.

![Field group structure](../../images/field-groups/patient.png)

| Property | Data type | Description |
| --- | --- | --- |
| `address` | [[!UICONTROL Address]](../../data-types/address.md) | The patient's shipping address. |
| `communication`| ?? | ?? |
| `contact` | ?? | ?? |
| `generalPractioner` | ?? | ??|
| `identifier` | ?? | ?? |
| `link` | ?? | ?? |
| `managingOrganization` | ?? | ?? |
| `maritalStatus` | ?? | ?? |
| `name` | ?? | ?? |
| `telecom` | ?? | ?? |
| `active` | ?? | ?? |
| `birthDate` | Date | The date of birth for the patient. |
| `deceasedBoolean` | Boolean | Indicates if the patient is deceased or not. |
| `deceasedDateTime` | DateTime | Date Time if the patient is deceased. |
| `gender` | String | The gender identity of the person. The value of this property must be equal to one of the following known enum values. <li> `female` </li> <li> `male` </li> <li> `other` </li> <li> `unknown`</li> |
| `multipleBirthBoolean` | Boolean | Indicates if the patient is part of a multiple birth|
| `multipleBirthInteger` | Integer | Birth number in the sequence. |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/patient.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/patient.schema.json)
