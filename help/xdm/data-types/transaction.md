---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;transaction;datatype;data-type;data type;
title: Transaction Data Type
description: Learn about the Transaction Experience Data Model (XDM) data type.
exl-id: 47b7152f-a853-44f0-8962-e902631ad8a4
TQID: https://experienceleague.adobe.com/zlfRiaf0UxV3PPvE7LP-7zdXBPOaTLRsu7OxA7zR7cA
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!UICONTROL Transaction] data type

[!UICONTROL Transaction] is a standard Experience Data Model (XDM) data type that describes the details of a monetary transaction.

![Transaction structure](../images/data-types/transaction.png)

| Property | Data type | Description |
| --- | --- | --- |
| `transactionAmount` | [[!UICONTROL Currency]](./currency.md) | Describes the amount of currency exchanged as part of the transaction. |
| `transactionDate` | [!UICONTROL DateTime] | A timestamp of when the transaction occurred. |
| `transactionId` | [!UICONTROL String] | A unique identifier for the transaction. |
| `transactionType` | [!UICONTROL String] | The type of transaction used by the visitor. |

{style="table-layout:auto"}
