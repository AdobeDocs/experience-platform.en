---
title: Period Data Type
description: Learn about the Period Experience Data Model (XDM) data type.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: true
exl-id: aecd09e4-2797-4d2d-be62-acad28fb7bba
TQID: 'https://experienceleague.adobe.com/JW-PbFNMBjczn0Dk2-FnlM1-qUjFfzZO7Wpdd0fdG34'
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
---
# [!UICONTROL Period] data type

[!UICONTROL Period] is a standard Experience Data Model (XDM) data type that provides a time period defined by a start and end date/time. This data type is created as per the HL7 FHIR Release 5 specifications.

![Period data type structure](../../../images/healthcare/data-types/period.png)

| Display Name | Property | Data type | Description |
| --- | --- | --- | --- |
| [!UICONTROL End] | `end` | DateTime | The end date and time. |
| [!UICONTROL Start] | `start` | DateTime | The start date and time. |

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/period.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/period.schema.json)
