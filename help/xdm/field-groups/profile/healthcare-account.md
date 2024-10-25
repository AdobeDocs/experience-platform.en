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
| `balance` | ?? | ?? |
| `billingStatus`| ?? | ?? |
| `coverage` | ?? | ?? |
| `currency` | ?? | ??|
| `diagnosis` | ?? | ?? |
| `guarantor` | ?? | ?? |
| `identifier` | ?? | ?? |
| `owner` | ?? | ?? |
| `procedure` | ?? | ?? |
| `relatedAccount` | ?? | ?? |
| `servicePeriod` | ?? | ?? |
| `subject` | ?? | ?? |
| `type` | ?? | ?? |
| `calculatedAt` | DateTime | ?? |
| `description` | String | ?? |
| `status` | String | ?? |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/account.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/account.schema.json)
