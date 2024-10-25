---
title: Immunization Schema Field Group
description: Learn about the Immunization schema field group.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
---
# [!UICONTROL Immunization] schema field group

[!UICONTROL Immunization] is a standard schema field group for the [[!DNL XDM Experience Event] class](../../classes/experienceevent.md). It provides a single object-type field `healthcareImmunization` which captures immunization event information.

![Field group structure](../../images/field-groups/immunization.png)

| Property | Data type | Description |
| --- | --- | --- |
| `administeredProduct` | ?? | ?? |
| `basedOn`| ?? | ?? |
| `doseQuantity` | ?? | ?? |
| `encounter` | ?? | ??|
| `fundingSource` | ?? | ?? |
| `identifier` | ?? | ?? |
| `informationSource` | ?? | ?? |
| `location` | ?? | ?? |
| `manufacturer` | ?? | ?? |
| `note` | ?? | ?? |
| `patient` | ?? | ?? |
| `performer` | ?? | ?? |
| `programEligibility` | ?? | ?? |
| `protocolApplied` | ?? | ?? |
| `reaction` | ?? | ?? |
| `reason` | ?? | ?? |
| `route` | ?? | ?? |
| `site` | ?? | ?? |
| `statusReason` | ?? | ?? |
| `subpotentReason` | ?? | ?? |
| `supportingInformation` | ?? | ?? |
| `vaccineCode` | ?? | ?? |
| `expirationDate` | Date | ?? |
| `isSubpotent` | Boolean | ?? |
| `lotNumber` | String | ?? |
| `occurenceDateTime` | DateTime | ?? |
| `occurenceString` | String | ?? |
| `primarySource` | Boolean | ?? |
| `status` | String | ?? |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/immunization.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/immunization.schema.json)
