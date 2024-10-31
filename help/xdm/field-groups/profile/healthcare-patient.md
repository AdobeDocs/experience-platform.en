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
| `address` | Address | The address information for the patient. |
| `communication`| Array of objects | A language which may be used to communicate with the patient about his or her health. See the [section below](#communication) for more information. |
| `contact` | Array of objects | A patient's contact party (e.g. guardian, partner, or friend). See the [section below](#contact) for more information. |
| `generalPractioner` | Reference | The patient's primary care provider. |
| `identifier` | Identifier | An identifier for the patient. |
| `link` | Array of objects | A link to a patient or related person's resource that concerns the same individual. See the [section below](#link) for more information. |
| `managingOrganization` | Reference | The custodial organization of the patient's record. |
| `maritalStatus` | CodeableConcept | The marital status of the patient. |
| `name` | HumanName | The name associated with the patient. |
| `telecom` | ContactPoint | A contact detail (e.g. a telephone number or an email address) by which the patient may be contacted. |
| `active` | Boolean | Indicates whether the patient's record is in active use. |
| `birthDate` | Date | The date of birth for the patient. |
| `deceasedBoolean` | Boolean | Indicates if the patient is deceased or not. |
| `deceasedDateTime` | DateTime | The DateTime if the patient is deceased. |
| `gender` | String | The gender identity of the person. The value of this property must be equal to one of the following known enum values. <li> `female` </li> <li> `male` </li> <li> `other` </li> <li> `unknown`</li> |
| `multipleBirthBoolean` | Boolean | Indicates if the patient is part of a multiple birth|
| `multipleBirthInteger` | Integer | Birth number in the sequence. |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/patient.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/patient.schema.json)

## `communication` {#communication}

`communication` is provided as an array of objects. The structure of each object is described below.

![communication structure](../../images/field-groups/healthcare-patient/communication.png)

| Property | Data type | Description |
| --- | --- | --- |
| `language` | CodeableConcept | The language which can be used to communicate with the person about his or her health. |
| `preferred`| Boolean | Indicates if the language is their preferred language or not. |

{style="table-layout:auto"}

## `contact` {#contact}

`contact` is provided as an array of objects. The structure of each object is described below.

![contact structure](../../images/field-groups/healthcare-patient/contact.png)

| Property | Data type | Description |
| --- | --- | --- |
| `address` | Address | The address of the contact person. |
| `name`| HumanName | The name of the contact person. |
| `organization` | Reference | The organization that is associated with the contact person. |
| `period`| period | The time period when the contact was or is in use. |
| `relationship` | CodeableConcept | The relationship between the patient and the contact person. |
| `telecom`| Array of objects | The contact details for the contact person. See the [section below](#telecom) for more information. |
| `gender` | String | The gender identity of the person. The value of this property must be equal to one of the following known enum values. <li> `female` </li> <li> `male` </li> <li> `other` </li> <li> `unknown`</li> |

{style="table-layout:auto"}

### `telecom` {#telecom}

`telecom` is provided as an array of objects. The structure of each object is described below.

![telecom structure](../../images/field-groups/healthcare-patient/telecom.png)

| Property | Data type | Description |
| --- | --- | --- |
| `contactPoint` | ContactPoint | Contact details for the person. |

{style="table-layout:auto"}

## `link` {#link}

`link` is provided as an array of objects. The structure of each object is described below.

![link structure](../../images/field-groups/healthcare-patient/link.png)

| Property | Data type | Description |
| --- | --- | --- |
| `other` | Reference | A link to a patient or related person's resource that concerns the same individual. |
| `type` | String | The type of link between the two patient resources. |

{style="table-layout:auto"}
