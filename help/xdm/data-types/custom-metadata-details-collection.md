---
title: Custom Metadata Details Collection Data Type
description: Learn about the Custom Metadata Details Collection Experience Data Model (XDM) data type.
exl-id: e2fa65ea-b738-43c6-90f1-1968dd83b963
TQID: https://experienceleague.adobe.com/hYfRmp81jY1jrSqnXT9yEh-bXRHl6ordf3HtU25emuM
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
# [!UICONTROL Custom Metadata Details] Collection data type

[!UICONTROL Custom Metadata Details] Collection is a standard Experience Data Model (XDM) data type that defines a structure for storing custom metadata. Use the [!UICONTROL Custom Metadata Details] Collection data type to capture details such as the name and value of custom metadata associated with content or interactions.

+++Select to display a diagram of the [!UICONTROL Custom Metadata Details] Collection data type.
![A diagram of the Custom Metadata Details Collection data type.](../images/data-types/the-custom-metadata-collection.png)
+++

>[!NOTE]
>
>This data type belongs to the `mediaCollection` schema — fields that your implementation sends to the streaming media backend. Adobe processes this data and produces the corresponding `mediaReporting` fields, which are ingested into Platform datasets. See [Streaming media XDM reporting schema](https://experienceleague.adobe.com/en/docs/media-analytics/using/implementation/edge/reporting-schema) for details.

| Display name | Property | Data type | Required | Description |
|---|---|---|---|---|
| [!UICONTROL Custom Metadata Field Name] | `name` | string | No | The name of the custom field. |
| [!UICONTROL Custom Metadata Field Value] | `value` | string | No | The value of the custom field. |
