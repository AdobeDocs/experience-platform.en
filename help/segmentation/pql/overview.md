---
solution: Experience Platform
title: Profile Query Language (PQL) Overview
description: This guide provides a general overview of PQL, covering formatting guidelines and providing example PQL expressions.
exl-id: 4f7ab50e-89a3-42db-b74a-c6f2d86c9bcb
---
# [!DNL Profile Query Language] (PQL) overview

[!DNL Profile Query Language] (PQL) is an [!DNL Experience Data Model] (XDM) compliant query language which is designed to support the definition and execution of segmentation queries for [!DNL Real-Time Customer Profile] data.

This guide provides a general overview of PQL, covering formatting guidelines and providing example PQL expressions.

## PQL query formatting

PQL queries have the following signature:

```sql
({INPUT_PARAMETER_1}, {INPUT_PARAMETER_2}, ...) => {RESULT_TYPE}
```

The input parameter can be a simple primitive, such as a boolean or a string, or a more complex type, such as an object, array, or map.

There are three different ways to refer to input parameters within the body of a PQL expression:

### Implicit reference to the first parameter

In the example below, since the first parameter is always in context, a property reference (`homeAddress`) can be made directly to it.

```sql
homeAddress.stateProvince = workAddress.stateProvince
```

### Explicit reference to the first parameter

In the example below, `$1` refers to the first parameter. As a result, `$2` would refer to the second parameter, etc.

```sql
$1.homeAddress.stateProvince = $1.homeAddress.stateProvince
```

### Usage of named variables, using the lambda notation

In the example below, `Profile` is a variable name, which can be chosen by the query author.

```sql
(Profile) => Profile.homeAddress.stateProvince = Profile.workAddress.stateProvince
```

## PQL literals

PQL provides support for the following literal types:

| Literal | Definition | Example |
| ------- | ---------- | ------- |
| String | A data type comprised of characters surrounded by double quotes. | `"pizza"`, `"jobs"`, `"antidisestablishmentarianism"` |
| Boolean | A data type that is either true or false. | `true`, `false` |
| Integer | A data type representing a whole number. It can be positive, negative, or zero. | `-201`, `0`, `412` |
| Double | A data type representing any real number. It can be positive, negative, or zero. | `-51.24`, `3.14`, `0.6942058` | 
| Date | A data type that can be used to create dates based on the year, month, and day as integer parameters. It is formatted as `date(year, month, day)` | `date(2020, 3, 14)` |
| Array | A data type that is comprised as a group of other literal values. It uses square brackets to group and commas to delimit between different values. <br> **Note:** You cannot directly access properties of items within an array. So, if you need to access a property within an array, the supported method is `select X from array where X.item = ...`. <br> PQL reserves the word `xEvent` to refer to an array of experience events linked to a profile. | `[1, 4, 7]`, `["US", "CA"]` |  
| Relative time references | Reserved words that can be used to form timestamp and time interval references. <ul><li>now, today, yesterday, tomorrow</li><li>this, last, next</li><li>before, after, from</li><li>millisecond(s), second(s), minute(s), hour(s), day(s), week(s), month(s), year(s), decade(s), century/centuries, millennium/millennia</li></ul>| `X.timestamp occurs before today`, `X.timestamp occurs last month`, `X.timestamp occurs <= 3 days before now` |

## PQL functions

The following table outlines the different categories of supported PQL functions, including links to further documentation for more information.

| Category | Definition |
| -------- | ---------- |
| Boolean | Used to implement boolean algebra within PQL. More information about these functions can be found in the [boolean functions document](./boolean-functions.md). |
| Comparison | Used to compare between different PQL elements. More information about these functions can be found in the [comparison functions document](./comparison-functions.md). |
| Array, list, and set | Used to interact with arrays, lists, and sets. More information about these functions can be found in the [array, list, and set functions document](./array-functions.md). |
| Map | Used to interact with maps. More information about these functions can be found in the [map functions document](./map-functions.md). |
| String | Used to interact with strings. More information about these functions can be found in the [string functions document](./string-functions.md). |
| Object | Used to interact with objects. More information about these functions can be found in the [object functions document](./object-functions.md). |
| Arithmetic | Used to perform basic arithmetic on PQL elements. More information about these functions can be found in the [arithmetic functions document](./arithmetic-functions.md) |
| Aggregation | Used to combine results of an array into a singular result. More information about aggregation functions can be found in the [aggregation functions document](./aggregation-functions.md). |
| Date and time | Used in conjunction with date, time, and datetime objects. More information about these functions can be found in the [date/time functions document](./datetime-functions.md). |
| Filter | Ued to filter data within arrays. More information about these functions can be found in the [filter functions document](./filter-functions.md). |
| Logical quantifiers | Used to assert conditions within an array. More information can be found in the [logical quantifiers document](./logical-quantifiers.md). |
| Miscellaneous | Functions that do not fit in any of the above categories can be found in the [miscellaneous functions document](./misc-functions.md). |

## Next steps

Now that you've learned how to use [!DNL Profile Query Language], you can use PQL when creating and modifying segment definitions. For more information on segmentation, please read the [segmentation overview](../home.md).
