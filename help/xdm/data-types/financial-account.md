---
title: Financial Account Data Type
description: Learn about the Financial Account XDM data type.
exl-id: badf9b20-d397-4b46-b045-19c69806fe8e
TQID: 'https://experienceleague.adobe.com/0875971XiCjyzYMWUQR6m5eWRB4yKjaW2aJPKVep7EE'
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
# [!UICONTROL Financial Account] data type

[!UICONTROL Financial Account] is a standard XDM data type that describes the details of a financial account including its type, owner, and current balance.

![](../images/data-types/financial-account.png)

| Property | Data type | Description |
| --- | --- | --- |
| `currentAccountBalance` | [[!UICONTROL Currency]](./currency.md) | The current balance of the account. |
| `financialAccountId` | [!UICONTROL String] | A unique ID for the account. |
| `financialAccountName` | [!UICONTROL String] | The name assigned to the account. |
| `financialAccountType` | [!UICONTROL String] | The type of financial account, such as checking, savings, or retirement. |

{style="table-layout:auto"}

For more details on the data type, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/docs/reference/datatypes/financial-account.schema.json).
