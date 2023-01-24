---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segmentation Service;pql;PQL;Profile Query Language;filter functions;filter;
solution: Experience Platform
title: PQL Filter Functions
description: Filter functions are used to filter data within arrays in Profile Query Language (PQL).
exl-id: 09d66be3-30dc-4488-84a1-cfd09c44470d
---
# Filter functions

Filter functions are used to filter data within arrays in [!DNL Profile Query Language] (PQL). More information about other PQL functions can be found in the [[!DNL Profile Query Language] overview](./overview.md).

## Filter 

The `[]` (filter) function allows filters to be applied to an array and return a subset of the array which match the specified condition. 

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
