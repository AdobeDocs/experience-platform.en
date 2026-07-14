---
solution: Experience Platform
title: PQL Comparison Functions
description: Comparison functions are used to compare between different expressions and values, returning "true" or "false" accordingly.
exl-id: 15f106c7-b88b-4042-b925-703e2a309573
TQID: https://experienceleague.adobe.com/tlSxTCl0xpwnAHz-O1PaJl8wowkiBg5WNuZClccB4W4
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
# Comparison functions

Comparison functions are used to compare between different expressions and values, returning `true` or `false` accordingly. More information about other PQL functions can be found in the [[!DNL Profile Query Language] overview](./overview.md).

## Equals

The `=` (equals) function checks whether one value or expression is equal to another value or expression. 

**Format**

```sql
{EXPRESSION} = {VALUE}
```

**Example**

The following PQL query checks if the home address country is in Canada.

```sql
homeAddress.countryISO = "CA"
```

## Not equal

The `!=` (not equal) function checks whether one value or expression is **not** equal to another value or expression.

**Format**

```sql
{EXPRESSION} != {VALUE}
```

**Example**

The following PQL query checks if the home address country is not in Canada.

```sql
homeAddress.countryISO != "CA"
```

## Greater than

The `>` (greater than) function is used to check if the first value is greater than the second value.

**Format**

```sql
{EXPRESSION} > {EXPRESSION} 
```

**Example**

The following PQL query defines people whose birthdays do not fall in January or February.

```sql
person.birthMonth > 2
```

## Greater than or equal to

The `>=` (greater than or equal to) function is used to check if the first value is greater than or equal to the second value.

**Format**

```sql
{EXPRESSION} >= {EXPRESSION} 
```

**Example**

The following PQL query defines people whose birthdays do not fall in January or February.

```sql
person.birthMonth >= 3
```

## Less than

The `<` (less than) comparison function is used to check if the first value is less than the second value.

**Format**

```sql
{EXPRESSION} < {EXPRESSION} 
```

**Example**

The following PQL query defines people whose birthday is in January.

```sql
person.birthMonth < 2
```

## Less than or equal to

The `<=` (less than or equal to) comparison function is used to check if the first value is less than or equal to the second value.

**Format**

```sql
{EXPRESSION} <= {EXPRESSION} 
```

**Example**

The following PQL query defines people whose birthday is in January or February.

```sql
person.birthMonth <= 2
```

## Next steps

Now that you have learned about comparison functions, you can use them within your PQL queries. For more information about other PQL functions, please read the [Profile Query Language overview](./overview.md).
