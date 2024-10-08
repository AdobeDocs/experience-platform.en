---
solution: Experience Platform
title: PQL Logical Quantifiers
description: Logical quantifiers can be used to assert conditions with arrays in Profile Query Language (PQL).
exl-id: 8b1c9560-02e2-46e0-9646-c64dd4a15df1
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
