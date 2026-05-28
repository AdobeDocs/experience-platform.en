---
solution: Experience Platform
title: PQL Filter Functions
description: Filter functions are used to filter data within arrays in Profile Query Language (PQL).
exl-id: 09d66be3-30dc-4488-84a1-cfd09c44470d
TQID: https://experienceleague.adobe.com/GeQYYItaeubvmw814w0Ecn0A0sc9M-1ehl1zGbcoTeM
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
subfeature_v2:
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
---
# Filter functions

Filter functions are used to filter data within arrays in [!DNL Profile Query Language] (PQL). More information about other PQL functions can be found in the [[!DNL Profile Query Language] overview](./overview.md).

## Filter 

The `[]` (filter) function allows filters to be applied to an array and return a subset of the array which match the specified condition. As a result, this function returns an array.

**Format**

```sql
{ARRAY}[filter]
```

**Example**

The following PQL query gets all events which have at least one product item with an SKU equal to "PS".

```sql
xEvent[productListItems[SKU="PS"]]
```

## Up operator

The `^` (up) operator allows you to refer to properties in upper levels of filters.

**Format**

```sql
{ARRAY}[{FILTER_1}[{FILTER_2} or ^{PROPERTY}]]
```

| Argument | Description |
| -------- | ----------- |
| `{ARRAY}` | The array that is being filtered. |
| `{FILTER_1}` | The outer layer of filtering. |
| `{FILTER_2}` | The inner layer of filtering |
| `^{PROPERTY}` | The property that is also being filtered on. Due to the `^`, it is checking a property based on filter1. |

**Example**

The following PQL query gets all events which have at least one product item with an SKU equal to "PS" **or** have a person whose gender is female.

```sql
xEvent[productListItems[SKU="PS" or ^^.person.gender="female"]]
```

## Next steps

Now that you have learned about filter functions, you can use them within your PQL queries. For more information about other PQL functions, please read the [Profile Query Language overview](./overview.md).
