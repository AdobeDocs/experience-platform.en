---
title: Codeable Reference Data Type
description: Learn about the Codeable Reference Experience Data Model (XDM) data type.
badgePrivateBeta: label="Private Beta" type="Informative"
hide: yes
---
# [!UICONTROL Codeable Reference] data type

[!UICONTROL Codeable Reference] is a standard Experience Data Model (XDM) data type that describes a reference to a resource or a concept. This data type is created as per HL7 FHIR Release 5 specifications.

![Codeable Reference data type structure](../../images/data-types/healthcare/codeable-reference.png)

| Display Name | Property | Data type | Description |
| --- | --- | --- | --- |
| [!UICONTROL Concept] | `concept` | [[!UICONTROL Codeable Concept]](../healthcare/codeable-concept.md) | A reference to a concept (by class). |
| [!UICONTROL Reference] |`reference` | [[!UICONTROL Reference]](../healthcare/reference.md) | A reference to a resource. |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/codeablereference.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/extensions/industry/healthcare/fhir/datatypes/codeablereference.schema.json)
