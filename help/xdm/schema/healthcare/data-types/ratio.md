---
title: Ratio Data Type
description: Learn about the Ratio Experience Data Model (XDM) data type.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: true
exl-id: 8b530af6-0e64-4c30-a7d7-eb221b0b6181
TQID: https://experienceleague.adobe.com/23kAL-Qjyp4NGy-HPUhoNwv--dX1O3NHn9h8B9VHuFI
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Ratio] data type

[!UICONTROL Ratio] is a standard Experience Data Model (XDM) data type that provides a ratio of two [[!UICONTROL Quantity]](../data-types/quantity.md) values through a numerator and a denominator. This data type is created as per the HL7 FHIR Release 5 specifications.

![Ratio data type structure](../../../images/healthcare/data-types/ratio.png)

| Display Name | Property | Data type | Description |
| --- | --- | --- | --- |
| [!UICONTROL Denominator] | `denominator` | [[!UICONTROL Simple Quantity]](../data-types/simple-quantity.md) | The value of the denominator. |
| [!UICONTROL Numerator] | `numerator` | [[!UICONTROL Quantity]](../data-types/quantity.md) | The value of the numerator. |

>[!NOTE]
>
> The `denominator` and `numerator` have different data types due to the specification created as per the HL7 FHIR Release 5.

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/ratio.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/ratio.schema.json)
