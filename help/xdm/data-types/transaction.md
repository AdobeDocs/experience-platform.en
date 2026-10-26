---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;transaction;datatype;data-type;data type;
title: Transaction Data Type
description: Learn about the Transaction Experience Data Model (XDM) data type.
exl-id: 47b7152f-a853-44f0-8962-e902631ad8a4
TQID: 'https://experienceleague.adobe.com/zlfRiaf0UxV3PPvE7LP-7zdXBPOaTLRsu7OxA7zR7cA'
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
