---
title: Identifier Data Type
description: Learn about the Identifier Experience Data Model (XDM) data type.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
---
# [!UICONTROL Identifier] data type

[!UICONTROL Identifier] is a standard Experience Data Model (XDM) data type that provides an identifier intended for computation. This data type is created as per HL7 FHIR Release 5 specifications.

![Identifier data type structure](../../images/data-types/healthcare/identifier.png)

| Display Name | Property | Data type | Description |
| --- | --- | --- | --- |
| [!UICONTROL Period] | `period` | [[!UICONTROL Period]](../healthcare/period.md) | The time period when id is/was valid for use. |
| [!UICONTROL Assigner] | `assigner` | String | The organization that issued the id. |
| [!UICONTROL System] | `system` | String(URI) | The namespace for the identifier value, in URI format. |
| [!UICONTROL Use] | `use` | String | The use of the identifier. The values of this property must be equal to one or more of the following known enum values. <li> `usual` </li> <li> `offical` </li> <li> `temp` </li> <li> `secondary` </li> <li> `old` </li> |
| [!UICONTROL Value] | `value` | String | The unique value of the id. |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/identifier.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/identifier.schema.json)
