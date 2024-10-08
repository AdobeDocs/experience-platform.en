---
title: Upsell Details Schema Field Group
description: Learn about the Upsell Details schema field group.
exl-id: 6b69805d-03bc-489b-945a-03e61b99842e
---
# [!UICONTROL Upsell Details] schema field group

[!UICONTROL Upsell Details] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md) used to capture information regarding an upsell marketing event, including details about the transaction and the different ways the offer was displayed to a customer.

The field group provides a single object-type field, `upsells`. The properties contained in this object are explained below.

![Upsell Details structure](../../images/field-groups/upsell-details.png)

| Property | Data type | Description |
| --- | --- | --- |
| `upsellImpressions` | Array of [Impressions](../../data-types/impressions.md) | An array that lists the recorded impressions (digital views or engagements with the upsell offer) for the customer. |
| `upsellTransaction` | [Transaction](../../data-types/transaction.md) | Describes the currency transaction for the upsell. |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/industry-verticals/experienceevent-upsell-details.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/industry-verticals/experienceevent-upsell-details.schema.json)
