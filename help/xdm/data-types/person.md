---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;person;datatype;data-type;data type;
solution: Experience Platform
title: Person data type
topic: overview
description: This document provides an overview of the Person XDM data type.
---

# [!UICONTROL Person] data type

[!UICONTROL Person] is a standard XDM data type that describes an individual person. This datatype can represent a person acting in various roles, such as a customer, contact, or owner.

<img src='../images/data-types/person.png' width=500 /><br />

| Property | Data type | Description |
| --- | --- | --- |
| `name` | [[!UICONTROL Person name]](./person-name.md) | Describes details about the person's full name. |
| `birthDate` | Date | The full date a person was born. The date format (without time) should follow the [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339#section-5.6) standard. |
| `birthDayAndMonth` | String | The day and month a person was born, in the format MM-DD. This field should be used when the day and month of a person's birth is known, but not the year. The format of this property must conform to this regular expression `[0-1][0-9]-[0-9][0-9]`. |
| `birthYear` | Integer | The year a person was born including the century, for example, 1983. This field should be used when only the person's age is known, not the full birth date. The values must be between 1 and 32767. |
| `gender` | String | The gender identity of the person. The value of this property must be equal to one of the following known enum values. <li> `female` </li> <li> `male` </li> <li> `not_specified` </li> <li> `non_specific` </li> The default for this value is `not_specified`. |
| `maritalStatus` | String | Describes a person's relationship with a significant other. The value of this property must be equal to one of the following enum values. <li> `married` </li> <li> `single` </li> <li> `divorced` </li> <li> `widowed` </li> <li> `not_specified` </li> The default for this value is `not_specified`. |
| `nationality` | String | The legal relationship between a person and their state represented using the ISO 3166-1 Alpha-2 code. The format of this property must conform to this regular expression `^[A-Z]{2}$`. |
| `taxId` | String | The Tax or Fiscal ID of the person. For example: The Taxpayer Identification Number (TIN) in the US or the Certificado de Identificación Fiscal (CIF/NIF) in Spain. |

For more details on the mixin, refer to the public XDM repository:

* [JSON example](https://github.com/adobe/xdm/blob/63a4a825b2acb0a8cb661d6e02ae952711fc4da6/docs/reference/datatypes/person.schema.json)
* [Full schema](https://github.com/adobe/xdm/blob/63a4a825b2acb0a8cb661d6e02ae952711fc4da6/docs/reference/datatypes/person.schema.md#xdmgender-known-values)