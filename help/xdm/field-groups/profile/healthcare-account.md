---
title: Account Schema Field Group
description: Learn about the Account schema field group.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
---
# [!UICONTROL Account] schema field group

[!UICONTROL Account] is a standard schema field group for the [[!DNL XDM Individual Profile] class](../../classes/individual-profile.md) and the [[!DNL Provider class]](../../classes/provider.md). It provides a single object-type field `healthcareAccount` which is used to record transactions, services, and other financial information related to healthcare services provided to a patient or a group of individuals (such as for an insurance policy or billing purposes).

![Field group structure](../../images/field-groups/account.png)

| Property | Data type | Description |
| --- | --- | --- |
| `balance` | Array of objects | The account balances which are calculated and processed by the finance system. See the [section-below](#balances) for more information.|
| `billingStatus`| CodeableConcept | This tracks the lifecycle of the account through the billing process. It indicates how transactions are treated when they are allocated to the account. |
| `coverage` | Array of objects | The party(s) responsible for covering the costs of this account, and in what order should they be applied. See the [section below](#coverage) for more information. |
| `currency` | CodeableConcept | The default currency for the account. |
| `diagnosis` | Array of objects | The set of diagnoses that are relevant for billing are stored here on the account where they are able to be sequenced appropriately prior to processing to produce claim(s). See the [section below](#diagnosis) for more information. |
| `guarantor` | Array of objects | The parties responsible for balancing the account if other payment options fall short. See the [section below](#guarantor) for more information. |
| `identifier` | Identifier | A unique identifier used to reference the account. It may or may not be intended for human use (e.g. credit card number). |
| `owner` | Reference | Indicates the service area, hospital, department, etc. with responsibility for managing the account. |
| `procedure` | Array of objects | The set of procedures relevant for billing are stored here on the account where they are able to be sequenced appropriately prior to processing to produce claim(s). See the [section below](#procedure) for more information. |
| `relatedAccount` | Array of objects | Other associated accounts related to this account. See the [section below](#related-account) for more information. |
| `servicePeriod` | Period | The date range of services associated with this account. |
| `subject` | Reference | Identifies the entity which incurs the expenses. While the immediate recipients of services or goods might be entities related to the subject, the expenses were ultimately incurred by the subject of the account. |
| `type` | CodeableConcept | Categorizes the account for reporting and searching purposes. |
| `calculatedAt` | DateTime | The time the balance was calculated. |
| `description` | String | Provides additional information about what the account tracks and how it is used. |
| `name` | String | The account's name. |
| `status` | String | The status of the account. The value of this property must be equal to one of the following known enum values. <li> `active` </li> <li> `inactive` </li> <li> `entered-in-error` </li> <li> `on-hold` </li> <li> `unknown`</li> |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/account.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/account.schema.json)

## `balances` {#balances}

`balances` is provided as an array of objects. The structure of each object is described below.

![balances structure](../../images/field-groups/healthcare-account/balances.png)

| Property | Data type | Description |
| --- | --- | --- |
| `aggregate` | CodeableConcept | Who is expected to pay this part of the balance. |
| `amount`| Money | The actual balance calculated for the age defined in the term property. |
| `term` | CodeableConcept | The term of the account. |
| `estimate`| Boolean | If the amount is an estimated value. |

{style="table-layout:auto"}

## `coverage` {#coverage}

`coverage` is provided as an array of objects. The structure of each object is described below.

![coverage structure](../../images/field-groups/healthcare-account/coverage.png)

| Property | Data type | Description |
| --- | --- | --- |
| `coverage` | Reference | The party(s) responsible for covering the costs of this account, and in what order should they be applied. |
| `priority`| Integer | The priority of the coverage in the context of this account. |

{style="table-layout:auto"}

## `diagnosis` {#diagnosis}

`diagnosis` is provided as an array of objects. The structure of each object is described below.

![diagnosis structure](../../images/field-groups/healthcare-account/guarantor.png)

| Property | Data type | Description |
| --- | --- | --- |
| `party` | Reference | The entity who is responsible. |
| `period`| Period | The timeframe during which the guarantor accepts responsibility for the account. |
| `onHold`| Boolean | A guarantor may be placed on credit hold or otherwise have their role temporarily suspended. |

{style="table-layout:auto"}

## `guarantor` {#guarantor}

`guarantor` is provided as an array of objects. The structure of each object is described below.

![guarantor structure](../../images/field-groups/healthcare-account/guarantor.png)

| Property | Data type | Description |
| --- | --- | --- |
| `condition` | CodeableReference | The diagnosis relevant to the account. |
| `packageCode`| CodeableConcept | The package code can be used to group diagnoses that may be priced or delivered as a single product (such as DRGs). |
| `type`| CodeableConcept | Type that this diagnosis has relevant to the account (e.g. admission, billing, discharge …). |
| `dateOfDiagnosis` | DateTime | Date of the diagnosis (when coded diagnosis). |
| `onAdmission`| Boolean | Whether the diagnosis was present on admission. |
| `sequence`| Integer | Ranking of the diagnosis (for each type). |

{style="table-layout:auto"}

## `procedure` {#procedure}

`procedure` is provided as an array of objects. The structure of each object is described below.

![procedure structure](../../images/field-groups/healthcare-account/procedure.png)

| Property | Data type | Description |
| --- | --- | --- |
| `code` | CodeableReference | The procedure relevant to the account. |
| `device`| Reference | Any devices that were associated with the procedure relevant to the account. |
| `type`| CodeableConcept | How the procedure value should be used in charging the account. |
| `packageCode` | CodeableConcept | The package code can be used to group procedures that may be priced or delivered as a single product (such as DRGs). |
| `type`| Boolean | Whether the diagnosis was present on admission. |
| `dateOfService`| DateTime | The date when using a coded procedure. If using a reference to a procedure, then the date of the procedure should be used. |
| `sequence`| Integer | anking of the procedure (for each type). |

{style="table-layout:auto"}

## `relatedAccount` {#related-account}

`relatedAccount` is provided as an array of objects. The structure of each object is described below.

![relatedAccount structure](../../images/field-groups/healthcare-account/related-account.png)

| Property | Data type | Description |
| --- | --- | --- |
| `account` | Reference | Reference to an associated account. |
| `relationship`| CodeableConcept | Relationship of the associated account. |

{style="table-layout:auto"}

