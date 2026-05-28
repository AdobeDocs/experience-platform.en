---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;device;datatype;data-type;data type;currency;
solution: Experience Platform
title: Currency Data Type
description: Learn about the Currency XDM data type.
exl-id: eaf4812e-32ec-4b07-82ef-60777f03623d
TQID: https://experienceleague.adobe.com/SRDNwAGpkD5T6kIDBUijO07vfyk8-CRf1ASBXVCdKoE
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: a004cc84-67b9-4a33-a3a7-8ec7273ef4dc
    internal-label: Metadata
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
