---
title: Range Data Type
description: Learn about the Range Experience Data Model (XDM) data type.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: true
exl-id: 66f8b574-04d9-435f-8743-4ff89c4c0079
TQID: https://experienceleague.adobe.com/wBFhJ7IX7jlGNWui41-hD6eNRcwQK0cwZghxV9dlWnQ
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Range] data type

[!UICONTROL Range] is a standard Experience Data Model (XDM) data type that provides a set of values bound by low and high values. This data type is created as per the HL7 FHIR Release 5 specifications.

![Range data type structure](../../../images/healthcare/data-types/range.png)

| Display Name | Property | Data type | Description |
| --- | --- | --- | --- |
| [!UICONTROL High] | `high` | [[!UICONTROL Simple Quantity]](../data-types/simple-quantity.md) | The highest limit. |
| [!UICONTROL Low] | `low` | [[!UICONTROL Simple Quantity]](../data-types/simple-quantity.md) | The lowest limit. |

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/range.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/range.schema.json)
