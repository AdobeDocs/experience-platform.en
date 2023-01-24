---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segmentation Service;pql;PQL;Profile Query Language;boolean functions;boolean;
solution: Experience Platform
title: PQL Boolean Functions
description: Boolean functions are used to perform boolean logic on different elements in Profile Query Language (PQL).
exl-id: 68a4a8cc-88ad-41b1-b9fc-c2b4ab7d0122
---
# Boolean functions

Boolean functions are used to perform boolean logic on different elements in [!DNL Profile Query Language] (PQL).  More information about other PQL functions can be found in the [[!DNL Profile Query Language] overview](./overview.md).

## And

The `and` function is used to create a logical conjunction.

**Format**

```sql
{QUERY} and {QUERY}
```

**Example**

The following PQL query will return all people with home country as Canada and birth year of 1985.

```sql
homeAddress.countryISO = "CA" and person.birthYear = 1985
```

## Or

The `or` function is used to create a logical disjunction.

**Format**

```sql
{QUERY} or {QUERY}
```

**Example**

The following PQL query will return all people with home country as Canada or birth year of 1985.

```sql
homeAddress.countryISO = "CA" or person.birthYear = 1985
```

## Not

The `not` (or `!`) function is used to create a logical negation.

**Format**

```sql
not ({QUERY})
!({QUERY})
```

**Example**

The following PQL query will return all people who do not have their home country as Canada.

```sql
not (homeAddress.countryISO = "CA")
```

## If

The `if` function is used to resolve an expression depending on whether a specified condition is true.

**Format**

```sql
if ({TEST_EXPRESSION}, {TRUE_EXPRESSION}, {FALSE_EXPRESSION})
```

| Argument | Description |
| --------- | ----------- |
| `{TEST_EXPRESSION}` | The boolean expression which is being tested. |
| `{TRUE_EXPRESSION}` | The expression whose value will be used if `{TEST_EXPRESSION}` is true. |
| `{FALSE_EXPRESSION}` | The expression whose value will be used if `{TEST_EXPRESSION}` is false. |

**Example**

The following PQL query will set the value as `1` if the home country is Canada and `2` if the home country is not Canada.

```sql
if (homeAddress.countryISO = "CA", 1, 2)
```

## Next steps

Now that you have learned about boolean functions, you can use them within your PQL queries. For more information about other PQL functions, please read the [Profile Query Language overview](./overview.md).
