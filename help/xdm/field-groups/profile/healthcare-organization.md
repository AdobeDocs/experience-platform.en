---
title: Organization Schema Field Group
description: Learn about the Organization schema field group.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
---
# [!UICONTROL Organization] schema field group

[!UICONTROL Organization] is a standard schema field group for the [[!DNL XDM Individual Profile] class](../../classes/individual-profile.md) and the [[!DNL Provider class]](../../classes/provider.md). It provides a single object-type field `healthcareOrganization` which is contains information regarding groupings of people or organizations with a common purpose.

![Field group structure](../../images/field-groups/organization.png)

| Property | Data type | Description |
| --- | --- | --- |
| `contact` | ExtendedContactDetails | The contact details of communication devices available for the specific organization. This can include addresses, phone numbers, fax numbers, mobile numbers, email addresses and web sites. |
| `endpoint`| Reference | Technical endpoints providing access to services operated for the organization. |
| `indentifier` | Identifier | The identifier used to identify the organization across multiple disparate systems. |
| `partOf` | Reference | The organization this organization is part of. |
| `qualification` | Array of objects | The official certifications, accreditations, training, designations, and licenses that authorize and/or otherwise endorse the provision of care by the organization. See the [section below](#qualification) for more information. |
| `type` | CodeableConcept | The kind(s) of organization it is. |
| `active` | Boolean | Whether the organization's record is still in active use. |
| `alias` | Array of Strings | A list of alternate names that the organization is known as, or was known as in the past. |
| `description` | String | The description of the organization which helps provide general context to ensure the correct organization is selected. |
| `name` | String | The name associated with the organization. |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/coverage.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/coverage.schema.json)

## `qualification` {#qualification}

`qualification` is provided as an array of objects. The structure of each object is described below.

![qualification structure](../../images/field-groups/healthcare-account/qualification.png)

| Property | Data type | Description |
| --- | --- | --- |
| `code` | CodeableConcept | Coded representation of the qualification. |
| `identifier`| Identifier | An identifier allocated to this qualification for this organization. |
| `issuer` | Reference | Organization that regulates and issues the qualification. |
| `period`| Period | Period during which the qualification is valid. |

{style="table-layout:auto"}
