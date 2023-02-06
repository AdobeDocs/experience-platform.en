---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;geo;coordinates;datatype;data-type;data type;
solution: Experience Platform
title: Geo Coordinates Data Type
description: This document provides an overview of the Geo Coordinates XDM data type.
exl-id: 3c80eb44-852f-4a95-bd13-b6197ffe62da
---
# [!UICONTROL Geo Coordinates] data type

[!UICONTROL Geo Coordinates] is a standard XDM data type that describes the geographic coordinates of a place. This data type is based on the public specification documented on [schema.org](https://schema.org/GeoCoordinates).

<img src='../images/data-types/geo-coordinates.png' width=400 /><br />

| Property | Data type | Description |
| --- | --- | --- |
| `_schema.description` | String | A description of what the coordinates identify. |
| `_schema.elevation` | Double | The specific elevation of the defined coordinate. The value must conform to the [WGS84](https://gisgeography.com/wgs84-world-geodetic-system/) datum and is measured in meters. |
| `_schema.latitude` | Double | The signed vertical coordinate of the geographic point. |
| `_schema.longitude` | Double | The signed horizontal coordinate of the geographic point. |
|  `_id` | String | A unique, system-generated ID for the coordinates. |
