---
title: Quantity Data Type
description: Learn about the Quantity Experience Data Model (XDM) data type.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: true
exl-id: 881fe8a4-0253-4b75-9833-b97bb50cc87e
TQID: https://experienceleague.adobe.com/BVN3txQTtu8hga-gsZzWYKWt3FUFvsQLWxcptLTCwus
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Quantity] data type

[!UICONTROL Quantity] is a standard Experience Data Model (XDM) data type that provides a measured or measurable amount. This data type is created as per the HL7 FHIR Release 5 specifications.

![Quantity data type structure](../../../images/healthcare/data-types/quantity.png)

| Display Name | Property | Data type | Description |
| --- | --- | --- | --- |
| [!UICONTROL Code] | `code` | String | The coded form of the unit. |
| [!UICONTROL Comparator] | `comparator` | String | The comparison operator. The value of this property must be equal to one of the following known enum values. <li> `<` </li> <li> `<=` </li> <li> `>=` </li> <li> `>`</li> <li> `ad`</li>  |
| [!UICONTROL System] | `system` | String | The system that defines the coded unit form, represented as a URI. |
| [!UICONTROL Unit] | `unit` | String | The unit representation. |
| [!UICONTROL Value] | `value` | Double | The numerical value. |

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/quantity.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/quantity.schema.json)
