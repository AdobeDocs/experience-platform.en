---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;geo;coordinates;datatype;data-type;data type;
solution: Experience Platform
title: Geo Coordinates Data Type
description: Learn about the Geo Coordinates XDM data type.
exl-id: 3c80eb44-852f-4a95-bd13-b6197ffe62da
TQID: 'https://experienceleague.adobe.com/rgrantL-dNZVgLYOWDfADMDANh9Ambta-yK5UprSI4U'
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
# [!UICONTROL Geo Coordinates] data type

[!UICONTROL Geo Coordinates] is a standard XDM data type that describes the geographic coordinates of a place. This data type is based on the public specification documented on [schema.org](https://schema.org/GeoCoordinates).

![](../images/data-types/geo-coordinates.png){width=400}

| Property | Data type | Description |
| --- | --- | --- |
| `_schema.description` | String | A description of what the coordinates identify. |
| `_schema.elevation` | Double | The specific elevation of the defined coordinate. The value must conform to the [WGS84](https://gisgeography.com/wgs84-world-geodetic-system/) datum and is measured in meters. |
| `_schema.latitude` | Double | The signed vertical coordinate of the geographic point. |
| `_schema.longitude` | Double | The signed horizontal coordinate of the geographic point. |
|  `_id` | String | A unique, system-generated ID for the coordinates. |
