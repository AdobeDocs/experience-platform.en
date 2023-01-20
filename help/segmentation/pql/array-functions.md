---
keywords: Experience Platform;home;popular topics;segmentation;Segmentation;Segmentation Service;pql;PQL;Profile Query Language;array functions;array;
solution: Experience Platform
title: Array, List, and Set PQL Functions
description: Profile Query Language (PQL) offers functions to make interaction with arrays, lists, and strings easier.
exl-id: 5ff2b066-8857-4cde-9932-c8bf09e273d3
---
# Array, list, and set functions

[!DNL Profile Query Language] (PQL) offers functions to make interaction with arrays, lists, and strings easier. More information about other PQL functions can be found in the [[!DNL Profile Query Language] overview](./overview.md).

## In

The `in` function is used to determine if an item is a member of an array or list.

**Format**

```sql
{VALUE} in {ARRAY}
```

**Example**

The following PQL query defines people with birthdays in March, June, or September.

```sql
person.birthMonth in [3, 6, 9]
```

## Not in

The `notIn` function is used to determine if an item is not a member of an array or list.

>[!NOTE]
>
>The `notIn` function *also* ensures that neither value is equal to null. Therefore, the results are not an exact negation of the `in` function.

**Format**

```sql
{VALUE} notIn {ARRAY}
```

**Example**

The following PQL query defines people with birthdays that are not in March, June, or September.

```sql
person.birthMonth notIn [3, 6, 9]
```

## Intersects

The `intersects` function is used to determine if two arrays or lists have at least one common member.

**Format**

```sql
{ARRAY}.intersects({ARRAY})
```

**Example**

The following PQL query defines people whose favorite colors include at least one of red, blue, or green.

```sql
person.favoriteColors.intersects(["red", "blue", "green"])
```

## Intersection

The `intersection` function is used to determine the common members of two arrays or lists.

**Format**

```sql
{ARRAY}.intersection({ARRAY})
```

**Example**

The following PQL query defines if person 1 and person 2 both have favorite colors of red, blue, and green.

```sql
person1.favoriteColors.intersection(person2.favoriteColors) = ["red", "blue", "green"]
```

## Subset of

The `subsetOf` function is used to determine if a specific array (array A) is a subset of another array (array B). In other words, that all elements in array A are elements of array B.

**Format**

```sql
{ARRAY}.subsetOf({ARRAY})
```

**Example**

The following PQL query defines people who have visited all of their favorite cities.

```sql
person.favoriteCities.subsetOf(person.visitedCities)
```

## Superset of

The `supersetOf` function is used to determine if a specific array (array A) is a superset of another array (array B). In other words, that array A contains all elements in array B.

**Format**

```sql
{ARRAY}.supersetOf({ARRAY})
```

**Example**

The following PQL query defines people who have eaten sushi and pizza at least once.

```sql
person.eatenFoods.supersetOf(["sushi", "pizza"])
```

## Includes

The `includes` function is used to determine if an array or list contains a given item.

**Format**

```sql
{ARRAY}.includes({ITEM})
```

**Example**

The following PQL query defines people whose favorite color includes red.

```sql
person.favoriteColors.includes("red")
```

## Distinct

The `distinct` function is used to remove duplicate values from an array or list.

**Format**

```sql
{ARRAY}.distinct()
```

**Example**

The following PQL query specifies people who have placed orders in more than one store.

```sql
person.orders.storeId.distinct().count() > 1
```

## Group by

The `groupBy` function is used to partition values of an array or list into a group based on the value of the expression.

**Format**

```sql
{ARRAY}.groupBy({EXPRESSION)
```

| Argument | Description |
| --------- | ----------- |
| `{ARRAY}` | The array or list that is to be grouped. |
| `{EXPRESSION}` | An expression which maps each item in the array or list returned. |

**Example**

The following PQL query groups all the orders by which store the order was placed at.

```sql
orders.groupBy(storeId)
```

## Filter

The `filter` function is used to filter an array or list based on an expression.

**Format**

```sql
{ARRAY}.filter({EXPRESSION})
```

| Argument | Description |
| --------- | ----------- |
| `{ARRAY}` | The array or list that is to be filtered. |
| `{EXPRESSION}` | An expression to filter by. |

**Example**

The following PQL query defines all people who are 21 or older.

```sql
person.filter(age >= 21)
```

## Map

The `map` function is used to create a new array by applying an expression to each item in a given array.

**Format**

```sql
array.map(expression)
```

**Example**

The following PQL query creates a new array of numbers and squares the value of the original numbers.

```sql
numbers.map(square)
```

## First `n` in array {#first-n}

The `topN` function is used to return the first `N` items in an array, when sorted in ascending order based on the given numerical expression.

**Format**

```sql
{ARRAY}.topN({VALUE}, {AMOUNT})
```

| Argument | Description |
| --------- | ----------- |
| `{ARRAY}` | The array or list that is to be sorted. |
| `{VALUE}` | The property in which to sort the array or list. |
| `{AMOUNT}` | The number of items to be returned. |

**Example**

The following PQL query returns the top five orders with the highest price.

```sql
orders.topN(price, 5)
```

## Last `n` in array

The `bottomN` function is used to return the last `N` items in an array, when sorted in ascending order based on the given numerical expression.

**Format**

```sql
{ARRAY}.bottomN({VALUE}, {AMOUNT})
```

| Argument | Description |
| --------- | ----------- | 
| `{ARRAY}` | The array or list that is to be sorted. |
| `{VALUE}` | The property in which to sort the array or list. |
| `{AMOUNT}` | The number of items to be returned. |

**Example**

The following PQL query returns the top five orders with the lowest price.

```sql
orders.bottomN(price, 5)
```

## First item

The `head` function is used to return the first item in the array or list.

**Format**

```sql
{ARRAY}.head()
```

**Example**

The following PQL query returns the first of the top five orders with the highest price. More information about the `topN` function can be found in the [first `n` in array](#first-n) section.

```sql
orders.topN(price, 5).head()
```

## Next steps

Now that you have learned about array, list, and set functions, you can use them within your PQL queries. For more information about other PQL functions, please read the [Profile Query Language overview](./overview.md).
