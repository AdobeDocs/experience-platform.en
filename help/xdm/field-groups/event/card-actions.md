---
title: Card Actions Schema Field Group
description: Learn about the Card Actions schema field group.
exl-id: 49851544-9118-4b73-b1d1-4cf49b3f1dee
TQID: 'https://experienceleague.adobe.com/yEkB4QzAstJgzhhroOYGcURFJFbdpS55WOp-I2NeNXI'
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
# [!UICONTROL Card Actions] schema field group

[!UICONTROL Card Actions] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md). The field group provides a single `personalFinances.cardActions` field to a schema, which captures details about a card action such as card type, activation status, and lock status.

![](../../images/field-groups/card-actions.png)

| Property | Data type | Description |
| --- | --- | --- |
| `cardActivated` | Integer | Tracks when the card has been successfully activated. |
| `cardActivationStart` | Integer | Tracks when the card activation process has been started. |
| `cardCancelled` | Integer | Tracks when a card has been cancelled. |
| `cardControlsLocked` | Integer | Tracks when a card's controls have been locked. |
| `cardControlsUnlocked` | Integer | Tracks when a card's controls have been unlocked. |
| `cardID` | String | The identifier for the card being activated. This value might be different from the card number. |
| `cardLocked` | Integer | Tracks when a card has been locked. |
| `cardOrderNew` | Integer | Tracks when a card has been requested. |
| `cardOrderType` | String | The type of card order associated with a card order event.|
| `cardType` | String | The type of card. |
| `cardUnlocked` | Integer | Tracks when a card has been unlocked. |

{style="table-layout:auto"}

For more details on the field group, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/docs/reference/fieldgroups/experience-event/experienceevent-card-actions.schema.json).
