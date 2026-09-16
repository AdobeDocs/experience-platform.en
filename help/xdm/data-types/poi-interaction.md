---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;poi;interaction;point of interest;point-of-interest;datatype;data-type;data type;
solution: Experience Platform
title: Point of Interest Interaction Data Type
description: Learn about the Point Of Interest Interaction XDM data type.
exl-id: 398f56d9-1802-458d-b565-4096beb5b014
TQID: https://experienceleague.adobe.com/95b6EcI-H5-Js0aj8GAvV2XguCGUqv-TgCLZwasEeao
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Point of interest interaction] data type

[!UICONTROL Point of interest interaction] is a standard XDM data type that describes the wireless device that communicates identity information to mobile applications as mobile devices come within range.

![](../images/data-types/poi-interaction.png){width=400}

| Property | Data type | Description |
| --- | --- | --- |
| `poiDetail` | [[!UICONTROL Point of interest details]](./poi-details.md) | Describes the details of the POI that caused the event. |
| `poiEntries` | Object | Describes the number of times a person has entered the POI. Contains two properties: <ul><li>`id`: A unique identifier for the measure.</li><li>`value`: The quantifiable value of the measure.</li></ul> |
| `poiExits` | Object | Describes the number of times a person has exited the POI. Contains two properties: <ul><li>`id`: A unique identifier for the measure.</li><li>`value`: The quantifiable value of the measure.</li></ul> |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/deprecated/poi-interaction.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/deprecated/poi-interaction.schema.json)
