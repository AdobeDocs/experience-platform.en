---
title: Simple Quantity Data Type
description: Learn about the Simple Quantity Experience Data Model (XDM) data type.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: true
exl-id: 92d3d6a8-1d0f-43a4-a93f-8df79605c4e6
TQID: https://experienceleague.adobe.com/zmB81Wk3qkrFy3pHXKJtviQuNEvtbTLTsN0m9EDWpaY
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Simple Quantity] data type

[!UICONTROL Simple Quantity] is a standard Experience Data Model (XDM) data type that provides a measured or measurable amount. This data type is created as per the HL7 FHIR Release 5 specifications.

![Simple Quantity data type structure](../../../images/healthcare/data-types/simple-quantity.png)

| Display Name | Property | Data type | Description |
| --- | --- | --- | --- |
| [!UICONTROL Code] | `code` | String | The coded form of the unit. |
| [!UICONTROL System] | `system` | String | The system that defines coded unit form, represented as a URI. |
| [!UICONTROL Unit] | `unit` | String | The representation of the unit. |
| [!UICONTROL Value] | `value` | Double | The numerical value. |

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/simplequantity.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/simplequantity.schema.json)
