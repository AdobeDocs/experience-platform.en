---
solution: Experience Platform
title: PQL Logical Quantifiers
description: Logical quantifiers can be used to assert conditions with arrays in Profile Query Language (PQL).
exl-id: 8b1c9560-02e2-46e0-9646-c64dd4a15df1
TQID: https://experienceleague.adobe.com/KPXb1sXk5v43oMhjaf09uV3HvadvmKZcba9WjXTSq-s
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
# Logical quantifier functions

Logical quantifiers can be used to assert conditions with arrays in [!DNL Profile Query Language] (PQL). More information about other PQL functions can be found in the [[!DNL Profile Query Language] overview](./overview.md).

## Exists

The `exists` function determines the existence of an item in an array, provided it satisfies the provided condition.

**Format**

```sql
exists {VARIABLE} from {EXPRESSION} where {CONDITION}
exists {VARIABLE} from {EXPRESSION} : {CONDITION}
```

| Argument | Description |
| ---------- | ----------- |
| `{VARIABLE}` | A name of a variable. |
| `{EXPRESSION}` | The array which is being checked. |
| `{CONDITION}` | An optional expression which filters the values in the array returned. |

**Example**

The following PQL query gets all events which has a price greater than $50 or has a SKU of "PS".

```sql
exists E from xEvent where (E.commerce.item.price > 50), I from E.productListItems where I.SKU = "PS"
```

## For all

The `forall` function determines all items in an array that satisfy all the given conditions. 

**Format**

```sql
forall {VARIABLE} from {EXPRESSION} where {CONDITION}
forall {VARIABLE} from {EXPRESSION} : {CONDITION}
```

| Argument | Description |
| ---------- | ----------- |
| `{VARIABLE}` | A name of a variable. |
| `{EXPRESSION}` | The array which is being checked. |
| `{CONDITION}` | An optional expression which filters the values in the array returned. |

**Example**

The following PQL query gets all events which has a price greater than $50 and has a SKU of "PS".

```sql
forall E from xEvent where (E.commerce.item.price > 50), I from E.productListItems where I.SKU = "PS"
```

## Next steps

Now that you have learned about logical quantifiers, you can use them within your PQL queries. For more information about other PQL functions, please read the [Profile Query Language overview](./overview.md).
