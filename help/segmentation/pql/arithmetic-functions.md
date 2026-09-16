---
solution: Experience Platform
title: PAL Arithmetic Functions
description: Arithmetic functions are used to perform basic calculations on values in Profile Query Language (PQL).
exl-id: 3540ef7c-dbe4-4302-a414-3cf85618f870
TQID: https://experienceleague.adobe.com/aJnwR9-ZH5bTzU9VetyC8mIOnYvjzOBaK9V52XMvJc0
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
# Arithmetic functions

Arithmetic functions are used to perform basic calculations on values in [!DNL Profile Query Language] (PQL). More information about other PQL functions can be found in the [[!DNL Profile Query Language] overview](./overview.md).

## Add

The `+` (addition) function is used to find the sum of two argument expressions as a number.

**Format**

```sql
{NUMBER} + {NUMBER}
```

**Example**

The following PQL query sums the price of two different products.

```sql
product1.price + product2.price
```

## Multiply

The `*` (multiplication) function is used to find the product of two argument expressions as a number.

**Format**

```sql
{NUMBER} * {NUMBER}
```

**Example**

The following PQL query finds the product of the inventory and the price of a product to find the gross value of the product.

```sql
product.inventory * product.price
```

## Subtract

The `-` (subtraction) function is used to find the difference of two argument expressions as a number.

**Format**

```sql
{NUMBER} - {NUMBER}
```

**Example**

The following PQL query finds the difference in price between two different products.

```sql
product1.price - product2.price
```

## Divide

The `/` (division) function is used to find the quotient of two argument expressions as a number.

**Format**

```sql
{NUMBER} / {NUMBER}
```

**Example**

The following PQL query finds the quotient between the total products sold and total money earned to see the average cost per item.

```sql
totalProduct.price / totalProduct.sold
```

## Remainder

The `%` (modulo/remainder) function is used to find the remainder after dividing the two argument expressions as a number.

**Format**

```sql
{NUMBER} % {NUMBER}
```

**Example**

The following PQL query checks if the person's age is divisible by five.

```sql
person.age % 5 = 0
```

## Next steps

Now that you have learned about arithmetic functions, you can use them within your PQL queries. For more information about other PQL functions, please read the [Profile Query Language overview](./overview.md).
