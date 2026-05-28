---
solution: Experience Platform
title: Array, List, and Set PQL Functions
description: Profile Query Language (PQL) offers functions to make interaction with arrays, lists, and strings easier.
exl-id: 5ff2b066-8857-4cde-9932-c8bf09e273d3
TQID: https://experienceleague.adobe.com/AQ915GAYiqzEfneHPsInm60px86cSCkZg-iOXYvxznE
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
# Array, list, and set functions

[!DNL Profile Query Language] (PQL) offers functions to make interaction with arrays, lists, and strings easier. More information about other PQL functions can be found in the [[!DNL Profile Query Language] overview](./overview.md).

## In

The `in` function is used to determine if an item is a member of an array or list as a boolean.

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

The `notIn` function is used to determine if an item is not a member of an array or list as a boolean.

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

The `intersects` function is used to determine if two arrays or lists have at least one common member as a boolean.

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

The `intersection` function is used to determine the common members of two arrays or lists as a list.

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

The `subsetOf` function is used to determine if a specific array (array A) is a subset of another array (array B). In other words, that all elements in array A are elements of array B as a boolean.

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

The `supersetOf` function is used to determine if a specific array (array A) is a superset of another array (array B). In other words, that array A contains all elements in array B as a boolean.

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

The `includes` function is used to determine if an array or list contains a given item as a boolean.

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

The `distinct` function is used to remove duplicate values from an array or list as an array.

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

The `groupBy` function is used to partition values of an array or list into a group based on the value of the expression as a map from unique values of the grouping expression to arrays which are partitions of the value of the array expression.

**Format**

```sql
{ARRAY}.groupBy({EXPRESSION})
```

| Argument | Description |
| --------- | ----------- |
| `{ARRAY}` | The array or list that is to be grouped. |
| `{EXPRESSION}` | An expression which maps each item in the array or list returned. |

**Example**

The following PQL query groups all the orders by which store the order was placed at.

```sql
xEvent[type="order"].groupBy(storeId)
```

## Filter

The `filter` function is used to filter an array or list based on an expression as an array or list, depending on the input.

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

The `map` function is used to create a new array by applying an expression to each item in a given array as an array.

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

The `topN` function is used to return the first `N` items in an array, when sorted in ascending order based on the given numerical expression as an array.

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

The `bottomN` function is used to return the last `N` items in an array, when sorted in ascending order based on the given numerical expression as an array.

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

The `head` function is used to return the first item in the array or list as an object.

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
