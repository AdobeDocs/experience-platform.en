---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;fullName;xdm:fullName;person name;name;datatype;data-type;data type;
solution: Experience Platform
title: Person Name Data Type
description: Learn about the Person Name XDM data type.
exl-id: 5cf55fb1-b6b0-4d1c-93c3-7e2b7766599e
TQID: 'https://experienceleague.adobe.com/9m-caim56fk6RIJgUXSb-SZiKsWF-9UDhuhDevWMAtQ'
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
# [!UICONTROL Person name] data type

[!UICONTROL Person name] is a standard XDM data type that describes the full name of a person. As conventions for name structures differ widely across languages and cultures, names should always be modeled using this datatype.

In addition, the data type provides a number of optional properties that can be used in situations that require using only a fragment of the full name, such as creating a formal or informal greeting.

![](../images/data-types/person-name.png){width=500}

| Property | Description |
| --- | --- |
| `courtesyTitle` | An abbreviation of a person's title, honorific, or salutation (such as `Mr.`, `Miss.`, or `Dr.`). |
| `firstName` | The first segment of the name in the writing order most commonly accepted in the language of the name. |
| `fullName` | The full name of the person, in the writing order most commonly accepted in the language of the name. |
| `lastName` | The last segment of the name in the writing order most commonly accepted in the language of the name. |
| `middleName` | Middle, alternative, or additional names supplied between the first name and last name. |
| `suffix` | A group of letters provided after a person's name to provide additional information (such as `Jr.`, `Sr.`, `M.D.`, `PhD`, `I`, `II`, `III`, and so on). |

{style="table-layout:auto"}

For more details on the person name data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/person/person-name.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/person/person-name.schema.json)
