---
title: Payer Class
description: Learn about the Payer class in Experience Data Model (XDM).
exl-id: 8d3e0a6d-41eb-4ffe-81dd-c7b7d532a531
TQID: https://experienceleague.adobe.com/4ltQCVMSsInFFLCH6GcxTLEpFUvGIHHM-NT30z12JY0
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Payer] class

In Experience Data Model (XDM), the [!UICONTROL Payer] class captures the minimum set of properties that define a payer business entity that collects data pertaining to insurance companies (such as health insurance).

![Class structure](../images/classes/payer.png)

| Property | Data type | Description |
| --- | --- | --- |
| `_id` | [!UICONTROL String] | A unique, system-generated string identifier for the record. This field is used to track the uniqueness of an individual record, prevent duplication of data, and to look up that record in downstream services.<br><br>Since this field is system-generated, it does not be supplied an explicit value during data ingestion. However, you can still opt to supply your own unique ID values if you wish. |
| `payerId` | [!UICONTROL String] | A unique identifier for the payer. |
| `payerName` | [!UICONTROL String] | The name of the payer. |

{style="table-layout:auto"}
