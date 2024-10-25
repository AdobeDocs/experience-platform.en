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
| `contact` | ?? | ?? |
| `endpoint`| ?? | ?? |
| `indentifier` | ?? | ?? |
| `partOf` | ?? | ??|
| `qualification` | ?? | ?? |
| `type` | ?? | ?? |
| `active` | Boolean | ?? |
| `alias` | Array of Strings | ?? |
| `description` | String | ?? |
| `name` | String | ?? |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/coverage.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/fieldgroups/coverage.schema.json)
