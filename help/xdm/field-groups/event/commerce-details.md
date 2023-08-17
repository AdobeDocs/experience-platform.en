---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;ExperienceEvent;fields;schemas;Schemas;Schema design;field group;field group;
solution: Experience Platform
title: Commerce Details Schema Field Group
description: This document provides an overview of the Commerce Details schema field group.
exl-id: 36aba186-fadb-4abb-a94f-7e151ff3f744
---
# [!UICONTROL Commerce Details] schema field group

>[!NOTE]
>
>The names of several schema field groups have changed. See the document on [field group name updates](../name-updates.md) for more information.

[!UICONTROL Commerce Details] is a standard schema field group for the [[!DNL XDM ExperienceEvent] class](../../classes/experienceevent.md), used to describe commerce data such as product information (SKU, name, quantity), and standard cart operations (order, checkout, abandon).

![](../../images/field-groups/commerce-details.png)

| Property | Data type | Description |
| --- | --- | --- |
| `commerce` | [Commerce](../../data-types/commerce.md)  | An object that describes product returns, warranty registration, and shopping cart/order processes. |
| `productListItems` | Array of [Product list items](../../data-types/product-list-item.md)  | A list of items representing the product(s) selected by a customer, with specific options and pricing at a specific point of time (which may differ from the product record). |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-commerce.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/fieldgroups/experience-event/experienceevent-commerce.schema.json)
