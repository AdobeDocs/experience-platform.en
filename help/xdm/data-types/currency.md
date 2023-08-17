---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;device;datatype;data-type;data type;currency;
solution: Experience Platform
title: Currency Data Type
description: This document provides an overview of the Currency XDM data type.
exl-id: eaf4812e-32ec-4b07-82ef-60777f03623d
---
# [!UICONTROL Currency] data type

[!UICONTROL Currency] is a standard XDM data type that describes an amount of currency, including the currency type and conversion date.

![](../images/data-types/currency.png)

| Property | Data type | Description |
| --- | --- | --- |
| `amount` | Double | The amount of currency as defined by the `currencyCode`. |
| `conversionDate` | DateTime | A timestamp of when the currency conversion was made. |
| `currencyCode` | String | An ISO 4217 code indicating the type of currency that `amount` represents. |

{style="table-layout:auto"}

For more details on the field group, refer to the public XDM repository:

* [Populated example](https://github.com/adobe/xdm/blob/master/components/datatypes/currency.example.1.json)
* [Full schema](https://github.com/adobe/xdm/blob/master/components/datatypes/currency.schema.json)
