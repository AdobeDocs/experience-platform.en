---
title: Address Data Type
description: Learn about the Address Experience Data Model (XDM) data type.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
hidefromtoc: yes
exl-id: 21213bd5-00f4-43cc-80cf-2c0dcf878a23
---
# [!UICONTROL Address] data type

[!UICONTROL Address] is a standard Experience Data Model (XDM) data type that describes an address expressed using postal conventions (as opposed to GPS or other location definition formats). This data type is created as per the HL7 FHIR Release 5 specifications.

![Address data type structure](../../../images/healthcare/data-types/address.png)

| Display Name | Property | Data type | Description |
| --- | --- | --- | --- |
| [!UICONTROL Period] | `period` | [[!UICONTROL Period]](../data-types/period.md) | Time period when the address was/is in use. |
| [!UICONTROL City] |`city` | String | Name of the city. |
| [!UICONTROL Country] |`country` | String | The country code described in the ISO 3166 international standard. The code may be either alpha-2 or alpha-3. |
| [!UICONTROL District] | `district` | String | The district name. |
| [!UICONTROL Line ] |`line` | String | The street name, number, direction, P.O. Box, or similar. |
| [!UICONTROL Postal Code] |`postalCode` | String | The postal code. |
| [!UICONTROL State] |`state` | String | The sub-unit of a country. Abbreviations are acceptable. |
| [!UICONTROL Text] |`text` | String | The text representation of the address. |
| [!UICONTROL Type] | `type` | String | The address type. The value of this property must be equal to one of the following known enum values. <li> `postal` </li> <li> `physical` </li> <li> `both` </li> |
| [!UICONTROL Use] | `use` | String | The purpose of the address. The value of this property must be equal to one of the following known enum values. <li> `home` </li> <li> `work` </li> <li> `temp` </li> <li> `old`</li> <li> `billing`</li> |

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/address.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/address.schema.json)
