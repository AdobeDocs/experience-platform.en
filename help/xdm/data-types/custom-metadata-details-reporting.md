---
title: Custom Metadata Details Reporting Data Type
description: Learn about the Custom Metadata Details Reporting Experience Data Model (XDM) data type.
exl-id: d82d42fb-c725-4a81-9b2a-f6434020ab49
TQID: https://experienceleague.adobe.com/tev17tpO-WDik-ZUh4MgAnBXaHNbZYz4bWU2wXl7J6k
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
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
  - id: aa2f3246-cb95-4b30-8899-fdf7d73550cc
    internal-label: Reporting
---
# [!UICONTROL Custom Metadata Details] Reporting data type

[!UICONTROL Custom Metadata Details] Reporting is a standard Experience Data Model (XDM) data type that defines a structure for storing custom metadata. The [!UICONTROL Custom Metadata Details] Reporting data type captures details such as the name and value of custom metadata associated with content or interactions.

+++Select to display a diagram of the [!UICONTROL Custom Metadata Details] Reporting data type.
![A diagram of the Custom Metadata Details Reporting data type.](../images/data-types/the-custom-metadata-reporting.png)
+++

>[!NOTE]
>
>This data type belongs to the `mediaReporting` schema — fields computed by the streaming media backend from `mediaCollection` data sent by your implementation. These are the fields that Adobe ingests into Platform datasets. See [Streaming media XDM reporting schema](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/edge/reporting-schema) for details.

| Display name | Property | Data type | Description |
|---|---|---|---|
| [!UICONTROL Custom Metadata Field Name] | `name` | string | The name of the custom field. |
| [!UICONTROL Custom Metadata Field Value] | `value` | string | The value of the custom field. |

See [custommetadatadetails.schema.json](https://github.com/adobe/xdm/blob/master/components/datatypes/custommetadatadetails.schema.json) in the public XDM repository for the full schema definition.
