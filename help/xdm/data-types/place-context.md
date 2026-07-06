---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;place context;placeContext;datatype;data-type;data type;
solution: Experience Platform
title: Place Context Data Type
description: Learn about the Place Context XDM data type.
exl-id: d7cf7366-0136-49ee-84d2-ec663db66eb4
TQID: https://experienceleague.adobe.com/fDSEqraUtNlCosMh-AOWlaRtU2Qt3kyvuJw3tAu4st4
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c20d46e7-1c7d-476c-a50e-3961d4dce35f
    internal-label: Reporting
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
---
# [!UICONTROL Place context] data type

[!UICONTROL Place context] is a standard XDM data type that describes the location of an observed event, including point-of-interest information and geographical coordinates.

![](../images/data-types/place-context.png){width=500}

| Property | Data type | Description |
| --- | --- | --- |
| `POIinteraction` | [[!UICONTROL Point of interest interaction]](./poi-interaction.md) | Describes details about the point-of-interest (POI) interaction. |
| `activePOIs` | Array of [[!UICONTROL Point of interest details]](./poi-details.md) | Describes the POIs that caused the event. |
| `geo` | [[!UICONTROL Geo]](./geo.md) | Describes the geographic location where the experience was delivered. |
| `localTime` | DateTime | The event's local time, as an [ISO 8601](https://datatracker.ietf.org/doc/html/rfc3339#section-5.6) timestamp with no time zone offset (`yyyy-MM-dd'T'HH:mm:ss`). If a time zone offset is included, the value is converted to UTC at ingestion and the offset is not retained. To keep the offset, record it in `localTimezoneOffset` instead. |
| `localTimezoneOffset` | Integer | The local time zone offset in minutes from UTC, following the same convention as JavaScript's [`Date.getTimezoneOffset()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset). Time zones ahead of UTC are negative (for example, UTC+5:30 is `-330`). This value includes the current DST offset where applicable. |

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/placecontext.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/placecontext.schema.json)
