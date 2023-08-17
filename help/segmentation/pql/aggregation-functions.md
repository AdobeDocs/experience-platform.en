---
solution: Experience Platform
title: PQL Aggregation Functions
description: Aggregation functions are used to group together multiple values within Profile Query Language (PQL) arrays to form a single summary value.
exl-id: 6c0c0f6d-98c5-4b5d-b440-3e5e18c0f34b
---
# Aggregation functions

Aggregation functions are used to group together multiple values within [!DNL Profile Query Language] (PQL) arrays to form a single summary value. More information about other PQL functions can be found in the [[!DNL Profile Query Language] overview](./overview.md).

## Count

The `count` function returns the number of elements within the given array.

**Format**

```sql
{ARRAY}.count()
```

**Example**

The following PQL query returns the number of orders in the array.

```sql
orders.count()
```

## Sum

The `sum` function returns the sum of all the selected values within the array.

**Format**

```sql
{ARRAY}.sum()
```

**Example**

The following PQL query returns the sum of all the orders' prices.

```sql
orders.sum(order.price)
```

## Average

The `average` function returns the arithmetic mean of all the selected values within the array.

**Format**

```sql
{ARRAY}.average()
```

**Example**

The following PQL query returns the average price of all the orders.

```sql
orders.average(order.price)
```

## Minimum

The `min` function returns the smallest of all the selected values within the array.

**Format**

```sql
{ARRAY}.min()
```

**Example**

The following PQL query returns the lowest price of all the orders.

```sql
orders.min(order.price)
```

## Maximum

The `max` function returns the largest of all the selected values within the array.

**Format**

```sql
{ARRAY}.max()
```

**Example**

The following PQL query returns the highest price of all the orders.

```sql
orders.max(order.price)
```

## Next steps

Now that you have learned about aggregation functions, you can use them within your PQL queries. For more information about other PQL functions, please read the [Profile Query Language overview](./overview.md).
