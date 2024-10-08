---
solution: Experience Platform
title: PQL Date and Time Functions
description: Date and time functions are used to perform date and time operations on values within Profile Query Language (PQL).
exl-id: 8cbffcb6-1c25-454f-8f02-eca602318e5e
---
# Date and time functions

Date and time functions are used to perform date and time operations on values within [!DNL Profile Query Language] (PQL). More information about other PQL functions can be found in the [[!DNL Profile Query Language] overview](./overview.md).

## Current month

The `currentMonth` function returns the current month as an integer. 

**Format**

```sql
currentMonth()
```

**Example**

The following PQL query checks if the person's birth month is the current month.

```sql
person.birthMonth = currentMonth()
```

## Get month

The `getMonth` function returns the month, as an integer, based on a given timestamp.

**Format**

```sql
{TIMESTAMP}.getMonth()
```

**Example**

The following PQL query checks if the person's birth month is in June.

```sql
person.birthdate.getMonth() = 6
```

## Current year

The `currentYear` function returns the current year as an integer.

**Format**

```sql
currentYear()
```

**Example**

The following PQL query checks if the product was sold in the current year.

```sql
product.saleYear = currentYear()
```

## Get year

The `getYear` function returns the year, as an integer, based on a given timestamp.

**Format**

```sql
{TIMESTAMP}.getYear()
```

**Example**

The following PQL query checks if the person's birth year falls in 1991, 1992, 1993, 1994, or 1995.

```sql
person.birthday.getYear() in [1991, 1992, 1993, 1994, 1995]
```

## Current day of month

The `currentDayOfMonth` function returns the current day of the month as an integer.

**Format**

```sql
currentDayOfMonth()
```

**Example**

The following PQL query checks if the person's birth day matches the current day of the month.

```sql
person.birthDay = currentDayOfMonth()
```

## Get day of month

The `getDayOfMonth` function returns the day, as an integer, based on a given timestamp.

**Format**

```sql
{TIMESTAMP}.getDayOfMonth()
```

**Example**

The following PQL query checks if the item was sold within the first 15 days of the month.

```sql
product.sale.getDayOfMonth() <= 15
```

## Occurs

The `occurs` function compares the given timestamp function with a fixed period of time.

**Format**

The `occurs` function can be written using any of the following formats:

```sql
{TIMESTAMP} occurs {COMPARISON} {INTEGER} {TIME_UNIT} {DIRECTION} {TIME}
{TIMESTAMP} occurs {DIRECTION} {TIME}
{TIMESTAMP} occurs (on) {TIME}
{TIMESTAMP} occurs between {TIME} and {TIME}
``` 

| Argument | Description |
| --------- | ----------- |
| `{COMPARISON}` | A comparison operator. Can be any of the following operators: `>`, `>=`, `<`, `<=`, `=`, `!=`. More information about the comparison functions can be found in the [comparison functions document](./comparison-functions.md). |
| `{INTEGER}` | A non-negative integer. |
| `{TIME_UNIT}` | A unit of time. Can be any of the following words: `millisecond(s)`, `second(s)`, `minute(s)`, `hour(s)`, `day(s)`, `week(s)`, `month(s)`, `year(s)`, `decade(s)`, `century`, `centuries`, `millennium`, `millennia`. |
| `{DIRECTION}` | A preposition describing when to compare the date to. Can be any of the following words: `before`, `after`, `from`. |
| `{TIME}` | Can be a timestamp literal (`today`, `now`, `yesterday`, `tomorrow`), a relative time unit (one of `this`, `last`, or `next` followed by a time unit), or a timestamp attribute. |

>[!NOTE]
>
>Usage of the word `on` is optional. It is there to improve readability for some combinations, such as `timestamp occurs on date(2019,12,31)`.

**Example**

The following PQL query checks if the item was sold last week.

```sql
product.saleDate occurs last week
```

The following PQL query checks if an item was sold between January 8th, 2015 and July 1st, 2017.

```sql
product.saleDate occurs between date(2015, 1, 8) and date(2017, 7, 1)
```

## Now

`now` is a reserved word that represents the timestamp of the PQL execution.

**Example**

The following PQL query checks if an item was sold exactly three hours before.

```sql
product.saleDate occurs = 3 hours before now
```

## Today

`today` is a reserved word that represents the timestamp of the start of the day of the PQL execution.

**Example**

The following PQL query checks if a person's birthday was three days ago.

```sql
person.birthday occurs = 3 days before today
```

## Next steps

Now that you have learned about date and time functions, you can use them within your PQL queries. For more information about other PQL functions, please read the [Profile Query Language overview](./overview.md).
