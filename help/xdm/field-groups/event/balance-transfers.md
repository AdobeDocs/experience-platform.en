---
title: Balance Transfers Schema Field Group
description: Learn about the Balance Transfers schema field group.
exl-id: be0d2ed6-6547-432a-af2f-409c33e268d4
TQID: 'https://experienceleague.adobe.com/lDicLKYOQvOOPKBURFIUm5267guI6HuDijYuFflMoUs'
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
# [!UICONTROL Balance Transfers] schema field group

[!UICONTROL Balance Transfers] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md). The field group provides a single `personalFinances.balanceTransfers` object to a schema, which captures details about a financial balance transfer between accounts.

![](../../images/field-groups/balance-transfers.png)

| Property | Data type | Description |
| --- | --- | --- |
| `accountFrom` | [[!UICONTROL Financial Account]](../../data-types/financial-account.md) | Describes the financial account that balance is being transferred from. |
| `accountTo` | [[!UICONTROL Financial Account]](../../data-types/financial-account.md) | Describes the financial account that balance is being transferred to. |
| `transaction` | [[!UICONTROL Transaction]](../../data-types/transaction.md) | Describes the financial transaction associated with the balance transfer. |

{style="table-layout:auto"}

For more details on the field group, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/docs/reference/fieldgroups/experience-event/industry-verticals/experienceevent-balance-transfers.schema.json).
