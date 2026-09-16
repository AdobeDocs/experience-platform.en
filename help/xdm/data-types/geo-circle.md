---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;geo;circle;datatype;data-type;data type;
solution: Experience Platform
title: Geo Circle Data Type
description: Learn about the Geo Circle XDM data type.
exl-id: fa041f4f-9955-44e9-b235-a643e07d402c
TQID: https://experienceleague.adobe.com/HyRugrJeTrQHUiCVGvvXlzt91lQebXNttDx7ye4dohs
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
---
# [!UICONTROL Geo Circle] data type

[!UICONTROL Geo Circle] is a standard XDM data type that describes circular geographic region, given a particular radius centered on a specific set of coordinates. This data type is based on the public specification documented on [schema.org](https://schema.org/GeoCircle).

![](../images/data-types/geo-circle.png){width=400}

| Property | Data type | Description |
| --- | --- | --- |
| `_schema.coordinates` | [[!UICONTROL Geo Coordinates]](./geo-coordinates.md) | Describes the geographic coordinates of the center of the circle. |
| `_schema.description` | String | A description of what the circle contains. |
| `_schema.radius` | Double | The length of the radius of the circle. This value conforms to the [WGS84](https://gisgeography.com/wgs84-world-geodetic-system/) datum and is measured in meters. |
| `_id` | String | A unique, system-generated ID for the circle. |
