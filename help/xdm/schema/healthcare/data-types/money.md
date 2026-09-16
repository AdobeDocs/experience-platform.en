---
title: Money Data Type
description: Learn about the Money Experience Data Model (XDM) data type.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: true
exl-id: 8b910a45-01d5-404b-9710-a2fad9885452
TQID: https://experienceleague.adobe.com/O7o4ZZ6hTKN7xtOwkMLXiYrsqoO-X1-iFdefmPXL3rA
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Money] data type

[!UICONTROL Money] is a standard Experience Data Model (XDM) data type that provides an amount of economic utility in some recognized currency. This data type is created as per the HL7 FHIR Release 5 specifications.

![Money data type structure](../../../images/healthcare/data-types/money.png)

| Display Name | Property | Data type | Description |
| --- | --- | --- | --- |
| [!UICONTROL Currency] | `currency` | String | The ISO 4217 currency code. |
| [!UICONTROL Value] | `value` | Double | The numerical value. |

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/money.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/money.schema.json)
