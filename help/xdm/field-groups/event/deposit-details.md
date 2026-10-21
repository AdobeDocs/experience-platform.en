---
title: Deposit Details Schema Field Group
description: Learn about the Deposit Details schema field group.
exl-id: a40d17b3-cb76-4b63-9328-735fc7c55672
TQID: 'https://experienceleague.adobe.com/th7pPsJEEuH5ZzBw89JUgxQ05BeEGTRIN9S1CvqcIPI'
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
# [!UICONTROL Deposit Details] schema field group

[!UICONTROL Deposit Details] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md). The field group provides a single `personalFinances.deposits` field to a schema, which captures details about a financial deposit.

![](../../images/field-groups/deposit-details.png)

| Property | Data type | Description |
| --- | --- | --- |
| `account` | [[!UICONTROL Financial Account]](../../data-types/financial-account.md) | Describes the financial account associated with the deposit. |
| `transaction` | [[!UICONTROL Transaction]](../../data-types/transaction.md) | Describes the financial transaction associated with the deposit. |
| `mobileDeposit` | [!UICONTROL Boolean] | Indicates whether the deposit was done through a mobile platform. |

{style="table-layout:auto"}

For more details on the field group, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/docs/reference/fieldgroups/experience-event/industry-verticals/experienceevent-deposit-details.schema.json).
