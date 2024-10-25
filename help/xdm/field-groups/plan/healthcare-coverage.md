---
title: Coverage Schema Field Group
description: Learn about the Coverage schema field group.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
---
# [!UICONTROL Coverage] schema field group

[!UICONTROL Coverage] is a standard schema field group for the [[!DNL Plan] class](../../classes/plan.md). It provides a single object-type field `healthcareCoverage` which is intended to provide the high-level identifiers and descriptors of an insurance plan, typically the information which would appear on an insurance card, which may be used to pay, in part or in whole, for the provision of health care products and services.

![Field group structure](../../images/field-groups/coverage.png)

| Property | Data type | Description |
| --- | --- | --- |
| `beneficiary` | ?? | ?? |
| `class`| ?? | ?? |
| `contract` | ?? | ?? |
| `costToBeneficiary` | ?? | ??|
| `identifier` | ?? | ?? |
| `insurancePlan` | ?? | ?? |
| `insurer` | ?? | ?? |
| `paymentBy` | ?? | ?? |
| `period` | ?? | ?? |
| `policyHolder` | ?? | ?? |
| `relationship` | ?? | ?? |
| `subscriber` | ?? | ?? |
| `subscriberId` | ?? | ?? |
| `type` | ?? | ?? |
| `dependent` | String | ?? |
| `kind` | String | ?? |
| `network` | String | ?? |
| `order` | Integer | ?? |
| `status` | String | ?? |
| `subrogation` | Boolean | ?? |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/coverage.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/coverage.schema.json)
