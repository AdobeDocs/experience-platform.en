---
title: Quote Request Details Schema Field Group
description: Learn about the Quote Request Details schema field group.
exl-id: 19be76fa-d212-4b00-815a-d3869c1054e2
---
# [!UICONTROL Quote Request Details] schema field group

[!UICONTROL Quote Request Details] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md). The field group provides a single `quotes` object to a schema, which captures the request process details for various types of quotes, including insurance policies, healthcare, manufacturing orders, and high-tech orders.

![](../../images/field-groups/quote-request-details.png)

| Property | Data type | Description |
| --- | --- | --- |
| `discount` | [[!UICONTROL Currency]](../../data-types/currency.md) | The discount amount for a quote displayed to a visitor. |
| `premium` | [[!UICONTROL Currency]](../../data-types/currency.md) | The premium amount for a quote displayed to a visitor. |
| `location` | [!UICONTROL String] | The postal code used for finding retailers near the visitor's location. |
| `requestID` | [!UICONTROL String] | A unique identifier for the quote request. |
| `selectedRetailer` | [!UICONTROL String] | The selected retailer for the quote request, if applicable. |

{style="table-layout:auto"}

For more details on the field group, refer to the [public XDM repository](https://github.com/adobe/xdm/blob/master/docs/reference/fieldgroups/experience-event/experienceevent-quote-request-details.schema.json).
