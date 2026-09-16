---
title: Commerce Scope Data Type
description: Learn about the Commerce Scope Experience Data Model (XDM) data type.
exl-id: c2888c3a-a49c-43c4-8d36-0a485cb76a58
TQID: https://experienceleague.adobe.com/PDBCsaYP6y57O9XzKCrAnDFG58lRZpR2qNkqNQ8p-0U
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
# [!UICONTROL Commerce Scope] data type

[!UICONTROL Commerce Scope] is a standard Experience Data Model (XDM) data type that defines identifiers for where an event occurred within a commerce ecosystem. It distinguishes environments, websites, stores, and store views.

![A diagram of the  Commerce Scope data type.](../images/data-types/commerce-scope.png)

| Display name                    | Property            | Data type | Description                                           |
|---------------------------------|-------------------|-----------|-------------------------------------------------------|
| [!UICONTROL Environment ID]     | `environmentID`   | string    | The environment ID. A 32-digit alphanumeric ID.        |
| [!UICONTROL Website Code]       | `websiteCode`     | string    | The unique website code within an environment.              |
| [!UICONTROL Store Code]         | `storeCode`       | string    | The unique store code within a website.                    |
| [!UICONTROL Store View Code]    | `storeViewCode`   | string    | The unique store view code within a store.                 |

{style="table-layout:auto"}

For more details on the data type, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/commercescope.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/commercescope.schema.json)
