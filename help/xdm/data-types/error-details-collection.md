---
title: Error Details Collection Data Type
description: Learn about the Error Details Collection Experience Data Model (XDM) data type.
exl-id: 54b03147-9bca-46af-86c8-90e42b4de26b
TQID: https://experienceleague.adobe.com/KtHPa-G4F0I0GXeTg7XfgRdwQv33y8Yy2xSlTh0fjwE
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Error Details] Collection data type

[!UICONTROL Error Details] Collection is a standard Experience Data Model (XDM) data type that describes error details. Use the [!UICONTROL Error Details] Collection data type to capture details for the error source and identification. The error ID identifies the error and the error source specifies whether it originates from the player or an external source. 

![A diagram of the  Error Details Information data type.](../images/data-types/error-details-collection.png)

| Display name               | Property     | Data type | Required | Description                                   |
|----------------------------|--------------|-----------|----------|-----------------------------------------------|
| [!UICONTROL Error ID]      | `name`       | string    |    No    | The error ID.                                 |
| [!UICONTROL Error Source]  | `source`     | string    |    No    | The error source. Enumerated: "player", "external" with respective meanings.  |

{style="table-layout:auto"}
