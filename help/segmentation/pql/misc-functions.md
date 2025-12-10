---
solution: Experience Platform
title: PQL Miscellaneous Functions
description: The following function is a miscellaneous function for Profile Query Language (PQL).
exl-id: a6ed31a2-a649-4dc8-89b1-48c1170b7f16
---
# Miscellaneous functions

The following function is a miscellaneous function for [!DNL Profile Query Language] (PQL). More information about other PQL functions can be found in the [[!DNL Profile Query Language] overview](./overview.md).

## Let

The `let` function allows an expression to be stored as a variable to be used later in a query.

**Format**

```sql
let {VARIABLE} = {EXPRESSION}
```

**Example**

The following PQL query gets all sums of product totals with the transaction in USD where the sum is greater than $100 and less than $1000.

```sql
let S = (sum X.commerce.order.priceTotal over X from xEvent where X.commerce.order.currencyCode = "USD") in (S > 100 and S < 1000)
```

## Next steps

Now that you have learned about miscellaneous functions, you can use them within your PQL queries. For more information about other PQL functions, please read the [Profile Query Language overview](./overview.md).
