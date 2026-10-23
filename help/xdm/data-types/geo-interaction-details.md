---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;beacon;interaction details;datatype;data-type;data type;
solution: Experience Platform
title: Geo Interaction Details Data Type
description: Learn about the Geo Interaction Details XDM data type.
exl-id: c05b098b-3f12-4283-a6d5-5ebf96b9828d
TQID: 'https://experienceleague.adobe.com/eZFOzS1giUeQzb-33mLYEVIwd-9qmDsDdvwiZ3AgGSQ'
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
# [!UICONTROL Geo interaction details] data type

[!UICONTROL Geo interaction details] is a standard XDM data type that describes the current state of inclusion in a geographically defined area.

![](../images/data-types/geo-interaction-details.png){width=400}

| Property | Data type | Description |
| --- | --- | --- |
| `geoShape` | [[!UICONTROL Geo Shape]](./geo-shape.md) | Describes the geo shape of the area being interacted with. This field can describe a box, a circle, or a polygon. |
| `deviceGeoAccuracy` | Double | The accuracy of the geo measuring device or mechanism, measured in meters. |
| `distanceToCenter` | Double | The distance to the center of geo in the case of a geo circle, measured in meters. |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/geo-interaction-details.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/geo-interaction-details.schema.json)
