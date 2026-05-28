---
title: Codeable Reference Data Type
description: Learn about the Codeable Reference Experience Data Model (XDM) data type.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: true
exl-id: 5ac4bc82-3c8e-4622-8a4e-c954bd6e6411
TQID: https://experienceleague.adobe.com/ClRmOQ-uJWM0p3tiTtL8npCbgkY0O3p9q99nSkREsic
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Codeable Reference] data type

[!UICONTROL Codeable Reference] is a standard Experience Data Model (XDM) data type that describes a reference to a resource or a concept. This data type is created as per the HL7 FHIR Release 5 specifications.

![Codeable Reference data type structure](../../../images/healthcare/data-types/codeable-reference.png)

| Display Name | Property | Data type | Description |
| --- | --- | --- | --- |
| [!UICONTROL Concept] | `concept` | [[!UICONTROL Codeable Concept]](../data-types/codeable-concept.md) | A reference to a concept (by class). |
| [!UICONTROL Reference] |`reference` | [[!UICONTROL Reference]](../data-types/reference.md) | A reference to a resource. |

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/codeablereference.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/codeablereference.schema.json)
