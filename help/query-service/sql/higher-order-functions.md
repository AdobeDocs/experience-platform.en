---
title: Manage array and maps data types with higher-order functions
description: Learn how to manage array and maps data types with higher-order functions in Query Service. Practical examples are provided with common use cases.
---
# Manage array and maps data types with higher-order functions

Use this guide to learn how higher order functions can process complex data types such as arrays and maps. These functions remove the need to explode the array, perform a function, and then combine the result. This makes them particularly useful for analytics or time series datasets, that are commonly comprised of complex nested structures, arrays, and maps, and a variety of common use cases.

The following list of use cases contain examples of hider-order array and map manipulation functions.

## Use transform to adjust the price total by n {#adjust-price-total}

`transform(array<T>, function<T, U>): array<U>`

The snippet above, applies a function to each element of the array and returns a new array of transformed elements. Specifically, the `transform` function takes an array of type T, and converts each element from type T to type U. It then returns an array of type U. The actual types T and U depend on the specific use of the transform function.

`transform(array<T>, function<T, Int, U>): array<U>`

This array transformation function is similar to the previous example, but there are two arguments for the function. The second argument in this function also receives the index of the element in the array in addition to being transformed.

**Example**

The SQL example below demonstrates this use case. The query retrieves a limited set of rows from the specified table, transforming the `productlistitems` array by multiplying the `pricetotal` attribute of each item by 73. The result includes the `_id`, `productlistitems`, and the transformed `price_in_inr` columns. The selection is based on a specific timestamp range.

```sql
SELECT _id,
       productlistitems,
       Transform(productlistitems, value -> value.pricetotal * 73) AS
       price_in_inr
FROM   geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE  timestamp > To_timestamp('2017-11-01 00:00:00')
       AND timestamp < To_timestamp('2017-11-02 00:00:00')
LIMIT  10;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
 productlistitems | price_in_inr
-------------------+----------------
(8376, NULL, NULL) | 611448.0
{(Burbank Hills Jeans, NULL, NULL), (Thermomax Steel, NULL, NULL), (Bruin Point Shearling Boots, NULL, NULL), (Uintas Pro Ski Gloves, NULL, NULL), (Timberline Survival Knife, NULL, NULL), (Thermomax Steel, NULL, NULL), (Timpanogos Scarf, NULL, NULL), (Lost Prospector Beanie, NULL, NULL), (Timpanogos Scarf, NULL, NULL), (Uintas Pro Ski Gloves, NULL, NULL)} | {0.0,0.0.0.0,0,0,0,0,0,0,0,0,0,0,0,0,0.0}
(84763,NULL, NULL) | 6187699.0
(843765, NULL, NULL) | 6.1594845E7
(199684, NULL, NULL) | 1.4576932E7

(10 rows)
```

## Use exists to discover whether a product with a specific SKU exists {#confirm-product-exists}

`exists(array<T>, function<T, Boolean>): Boolean`

In the snippet above, the `exists` function is applied to each element of the array and returns a Boolean value. The Boolean indicates if there is one or more elements in the array that satisfies a specified condition. In this case, it confirms whether a product with a specific SKU exists.

**Example**

In the SQL example below, the query fetches `productlistitems` from the `geometrixxx_999_xdm_pqs_1batch_10k_rows` table and evaluates whether an element with an SKU equal to `123679` in the `productlistitems` array exists. It then filters the results based on a specific range of timestamps and limits the final results to ten rows.

```sql
SELECT productlistitems
FROM geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE EXISTS( productlistitems, value -> value.sku == 123679)
AND timestamp > to_timestamp('2017-11-01 00:00:00')
AND timestamp < to_timestamp('2017-11-02 00:00:00')limit 10;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
productlistitems
-----------------
{(123679, NULL,NULL)}
{(123679, NULL, NULL)}
{(123679, NULL, NULL), (150196, NULL, NULL)}
{(123679, NULL, NULL), (150196, NULL, NULL)}
{(123679, NULL, NULL), (150196, NULL, NULL)}
{(123679, NULL, NULL)}
{(123679, NULL, NULL)}
{(123679, NULL, NULL)}
{(123679, NULL,NULL)}
{(123679,NULL, NULL)}

(10 rows)
```

## use filter to find products where the SKU > 100000

`filter(array<T>, function<T, Boolean>): array<T>`

This function filters an array of elements based on a given condition that evaluates each element as a Boolean value. It then returns a new array that only includes elements where the condition returned a true value.

**Example**

The query below selects the `productlistitems` column, applies a filter to include only elements with SKU greater than 100000, and restricts the result set to rows within a specific timestamp range. The filtered array is then aliased as `_filter` in the output.

```sql
SELECT productlistitems,
    Filter(productlistitems, value -> value.sku > 100000) AS _filter
FROM geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE timestamp > To_timestamp('2017-11-01 00:00:00')
AND timestamp < To_timestamp('2017-11-02 00:00:00')
LIMIT 10; 
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
productlistitems | _filter
-----------------+---------
(123679, NULL, NULL) (123679, NULL, NULL)
(1346, NULL, NULL) |
(98347, NULL, NULL) |
(176015, NULL, NULL) | (176015, NULL, NULL)

(10 rows)
```

## Use aggregate to sum the SKUs of all product list items associated with a specific ID, and double the resulting total

`aggregate(array<T>, A, function<A, T, A>[, function<A, R>]): R`

This aggregate operation applies a binary operator to an initial state and all elements in the array, and reduces multiple values to a single state. After this reduction, the final state is then converted into the ultimate result by using a finish function. The finish function takes the last state obtained after applying the binary operator to all array elements and does something with it to produce the final result.

**Example**

This query example, calculates the maximum SKU value from the `productlistitems` array within the given timestamp range and doubles the result. The output includes the original `productlistitems` array and the computed `max_value`.

```sql
SELECT productlistitems,
aggregate(productlistitems, 0, (acc, value) ->
case
WHEN (
value.sku > acc) THEN cast(value.sku AS int)
ELSE cast(acc AS int)
END, acc -> acc * 2) AS max_value
FROM geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE timestamp > to_timestamp('2017-11-01 00:00:00')
AND timestamp < to_timestamp('2017-11-02 00:00:00')
LIMIT 50;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
productlistitems | max_value
-----------------+---------
(123679, NULL, NULL) | 247358
(1346,NULL, NULL) | 2692
(98347, NULL, NULL) | 196694
(176015, NULL, NULL) | 352030

(10 rows)
```

## Use zip_with to assign a sequence number to all the items in the product list

`zip_with(array<T>, array<U>, function<T, U, R>): array<R>`

This snippet combines the elements of two arrays into a single new array. The operation is performed independently on each element of the array and generates pairs of values. If one array is shorter, null values are added to match the length of the longer array. This happens before the function is applied.

**Example**

The following query uses the `zip_with` function to create pairs of values from two arrays. It does this by combining a sequence of integers, generated using the `Sequence` function, with the SKU values from the `productlistitems` array. The result is selected alongside the original `productlistitems` column and is limited based on a timestamp range."

```sql
SELECT productlistitems,
zip_with(Sequence(1,5), Transform(productlistitems, p -> p.sku), (x,y) -> struct(x, y)) AS zip_with
FROM geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE timestamp > to_timestamp('2017-11-01 00:00:00')
AND timestamp < to_timestamp('2017-11-02 00:00:00')
limit 10;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
productlistitems     | zip_with
---------------------+---------
                     | {(1,NULL), (2,NULL), (3,NULL),(4,NULL), (5,NULL)}
(123679, NULL, NULL) | {(1,123679), (2,NULL), (3,NULL), (4,NULL), (5,NULL)}
                     | {(1,NULL), (2,NULL),(3,NULL),(4,NULL), (5,NULL)}
                     | {(1,NULL), (2,NULL), (3, NULL),(4,NULL), (5,NULL)}
(1346,NULL, NULL)    | {(1,1346), (2,NULL),(3,NULL),(4,NULL), (5,NULL)}
                     | {(1,NULL), (2,NULL), (3,NULL),(4,NULL), (5,NULL)}
(98347, NULL, NULL)  | {(1,98347), (2,NULL), (3,NULL), (4,NULL), (5,NULL)}
                     | {(1,NULL), (2,NULL), (3,NULL), (4,NULL), (5,NULL)}
(176015, NULL, NULL) | {(1,176015),(2,NULL), (3,NULL), (4,NULL), (5,NULL)}
                     | {(1,NULL), (2,NULL), (3,NULL), (4,NULL), (5,NULL)}

(10 rows)
```

## Use map_from_entries to assign a sequence number to each item in the product list, and obtain the final result as a map

`map_from_entries(array<struct<K, V>>): map<K, V>`

This snippet converts an array of key-value pairs into a map. It is useful when dealing with key-value pair data that could benefit from a more organized and efficient structure.

**Example**

The following query creates pairs of values from a sequence and the productlistitems array, converts these pairs into a map using map_from_entries, and then selects the original productlistitems column along with the newly created map_from_entries column. The result is filtered and limited based on the specified timestamp range.

```sql
SELECT productlistitems,      map_from_entries(zip_with(Sequence(1,Size(productlistitems)), productlistitems, (x,y) -> struct(x, y))) AS map_from_entries
FROM   geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE  timestamp > to_timestamp('2017-11-01 00:00:00')
AND    timestamp < to_timestamp('2017-11-02 00:00:00')
LIMIT 10;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
productlistitems     | map_from_entries
---------------------+------------------
(123679, NULL, NULL) | [1 -> "(123679,NULL,NULL)"]
(1346, NULL, NULL)   | [1 -> "(1346, NULL, NULL)"]
(98347, NULL, NULL)  | [1 -> "(98347, NULL, NULL)"]
(176015, NULL, NULL) | [1 -> "(176015, NULL, NULL)"]
(92763, NULL, NULL)  | [1 -> "(92763, NULL, NULL)"] 
(48576, NULL, NULL)  | [1 -> "(48576, NULL, NULL)"] 
(135778, NULL, NULL) | [1 -> "(135778, NULL, NULL)"] 
(123679, NULL, NULL) | [1 -> "(123679, NULL, NULL)"] 
(98347, NULL, NULL)  | [1 -> "(98347, NULL, NULL)"]
(167753, NULL, NULL) | [1 -> "(167753, NULL, NULL)"] 

(10 rows)
```

## Use map_form_arrays to assign sequence numbers to items in the product list and return the result as a map

`map_form_arrays(array<K>, array<V>): map<K, V>`

The `map_form_arrays` function creates a map using paired values from two arrays. 

>[!IMPORTANT]
>
>No elements in keys should be null.

**Example**

The SQL below, creates a map where the keys are sequenced numbers generated using the `Sequence` function, and the values are elements from the `productlistitems` array. The query selects the `productlistitems` column and uses the `Map_from_arrays` function to create the map based on the generated sequence of numbers and the elements of the array. The result is limited to ten rows and filtered based on a timestamp range.

```sql
SELECT productlistitems,
       Map_from_arrays(Sequence(1, Size(productlistitems)), productlistitems) AS
       map_from_arrays
FROM   geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE  Size(productlistitems) > 0
       AND timestamp > To_timestamp('2017-11-01 00:00:00')
       AND timestamp < To_timestamp('2017-11-02 00:00:00')
LIMIT  10;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
productlistitems     | map_from_entries
---------------------+------------------
(123679, NULL, NULL) | [1 -> "(123679,NULL,NULL)"]
(1346, NULL, NULL)   | [1 -> "(1346, NULL, NULL)"]
(98347, NULL, NULL)  | [1 -> "(98347, NULL, NULL)"]
(176015, NULL, NULL) | [1 -> "(176015, NULL, NULL)"]
(92763, NULL, NULL)  | [1 -> "(92763, NULL, NULL)"] 
(48576, NULL, NULL)  | [1 -> "(48576, NULL, NULL)"] 
(135778, NULL, NULL) | [1 -> "(135778, NULL, NULL)"] 
(123679, NULL, NULL) | [1 -> "(123679, NULL, NULL)"] 
(98347, NULL, NULL)  | [1 -> "(98347, NULL, NULL)"]
(167753, NULL, NULL) | [1 -> "(167753, NULL, NULL)"] 

(10 rows)
```

## Use map_concat to concatenate two maps into as single map

`map_concat(map<K, V>, ...): map<K, V>`

The `map_concat` function in the snippet above, takes multiple maps as arguments and returns a new map that combines all the key-value pairs from the input maps. The function concatenates multiple maps into a single map, and the resulting map includes all the key-value pairs from the input maps.

**Example**

The SQL below creates a map where each item in `productlistitems` is associated with a sequence number, and then concatenates it with another map where keys are generated in a specific sequence range. 

```sql
SELECT productlistitems,
      map_concat(           
         map_from_entries(zip_with(Sequence(1,Size(productlistitems)), productlistitems, (x,y) -> struct(x, y))),
         map_from_arrays(sequence(size(productlistitems) + 1, size(productlistitems) + size(productlistitems)), productlistitems) )
FROM geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE size(productlistitems) > 0
AND timestamp > to_timestamp('2017-11-01 00:00:00')
AND timestamp < to_timestamp('2017-11-02 00:00:00')
limit 10;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
productlistitems     | map_from_entries
---------------------+------------------
(123679, NULL, NULL) | [1 -> "(123679,NULL,NULL)",2 -> "(123679, NULL, NULL)"]
(1346, NULL, NULL)   | [1 -> "(1346, NULL, NULL)",2 -> "(1346, NULL, NULL)"]
(98347, NULL, NULL)  | [1 -> "(98347, NULL, NULL)",2 -> "(98347, NULL, NULL)"]
(176015, NULL, NULL) | [1 -> "(176015, NULL, NULL)",2 -> "(176015, NULL, NULL)"]
(92763, NULL, NULL)  | [1 -> "(92763, NULL, NULL)",2 -> "(92763, NULL, NULL)"] 
(48576, NULL, NULL)  | [1 -> "(48576, NULL, NULL)",2 -> "(48576, NULL, NULL)"] 
(135778, NULL, NULL) | [1 -> "(135778, NULL, NULL)",2 -> "(135778, NULL, NULL)"] 
(123679, NULL, NULL) | [1 -> "(123679, NULL, NULL)",2 -> "(123679, NULL, NULL)"] 
(98347, NULL, NULL)  | [1 -> "(98347, NULL, NULL)",2 -> "(98347, NULL, NULL)"]
(167753, NULL, NULL) | [1 -> "(167753, NULL, NULL)",2 -> "(167753, NULL, NULL)"] 

(10 rows)
```

## Retrieve a value corresponding to 'AAID' in the identity map for further computation

`element_at(array<T>, Int): T / element_at(map<K, V>, K): V`

For arrays, the snippet returns the element at a specified (1-based) index, or the value associated with a key in a map. If the index < 0, it accesses elements from the last to the first and returns null if the index exceeds the length of the array. 

For maps, it either returns a value for the given key, or null if the key is not contained in the map.

**Example**

The query selects the `identitymap` column from the table `geometrixxx_999_xdm_pqs_1batch_10k_rows` and extracts the value associated with the key `AAID` for each row. The results are restricted to rows that fall within the specified timestamp range, and the query limits the output to ten rows.

```sql
SELECT identitymap,
              Element_at(identitymap, 'AAID')
FROM geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE timestamp > To_timestamp('2017-11-01 00:00:00')
AND timestamp < To_timestamp('2017-11-02 00:00:00')
LIMIT 10; 
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
                                                                  identitymap                                            |  element_at(identitymap, AAID) 
-------------------------------------------------------------------------------------------------------------------------+-------------------------------------
[AAID -> "(3617FBB942466D79-5433F727AD6A0AD, false)",ECID -> "(67383754798169392543508586197135045866,true)"]            | (3617FBB942466D79-5433F727AD6A0AD, false) 
[AAID -> "[AAID -> "(533F56A682C059B1-396437F68879F61D, false)",ECID -> "(91989370462250197735311833131353001213,true)"] | (533F56A682C059B1-396437F68879F61D, false) 
[AAID -> "(22E195F8A8ECCC6A-A39615C93B72A9F, false)",ECID -> "(57699241367342030964647681192998909474,true)"]            | (22E195F8A8ECCC6A-A39615C93B72A9F, false) 
[AAID -> "(6A60527B9D66CCB9-29638A632B45E9, false)",ECID -> "(50117234882064422833184021414056250576,true)"]             | (6A60527B9D66CCB9-29638A632B45E9, false) 
[AAID -> "(64FB4DC317E21B59-2A23602D234647E7, false)",ECID -> "(79785479785408621882908938960039330887,true)"]           | (64FB4DC317E21B59-2A23602D234647E7, false) 
[AAID -> "(2E70E8CF6DB1DE86-270E55BBBA58B9C1, false)",ECID -> "(80073674009951685326146914344189474476,true)"]           | (2E70E8CF6DB1DE86-270E55BBBA58B9C1, false) 
[AAID -> "(22E195F8A8ECCC6A-A39615C93B72A9F, false)",ECID -> "(57699241367342030964647681192998909474,true)"]            | (22E195F8A8ECCC6A-A39615C93B72A9F, false) 
[AAID -> "(1CFB3297C3146F2F-28D6902A610BA3B1, false)",ECID -> "(88251082790399360979074868101758236669,true)"]           | (1CFB3297C3146F2F-28D6902A610BA3B1, false) 
[AAID -> "(533F56A682C059B1-396437F68879F61D, false)",ECID -> "(91989370462250197735311833131353001213,true)"]           | (533F56A682C059B1-396437F68879F61D, false) 
(10 rows)
```

## Use cardinality to find the number of identities in the identity map

`cardinality(array<T>): Int / cardinality(map<K, V>): Int`

This snippet returns the size of a given array or map, and provides an alias. It returns -1 if the value is null.

**Example**

The query below retrieves the `identitymap` column and the `Cardinality` function calculates the number of elements in each map within the `identitymap`. The results are limited to ten rows and are filtered based on a specified timestamp range.

```sql
SELECT identitymap,
       Cardinality(identitymap)
FROM   geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE timestamp > To_timestamp('2017-11-01 00:00:00')
AND timestamp < To_timestamp('2017-11-02 00:00:00')
LIMIT  10;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
                                                                  identitymap                                            |  size(identitymap) 
-------------------------------------------------------------------------------------------------------------------------+-------------------------------------
[AAID -> "(3617FBB942466D79-5433F727AD6A0AD, false)",ECID -> "(67383754798169392543508586197135045866,true)"]            |      2  
[AAID -> "[AAID -> "(533F56A682C059B1-396437F68879F61D, false)",ECID -> "(91989370462250197735311833131353001213,true)"] |      2  
[AAID -> "(22E195F8A8ECCC6A-A39615C93B72A9F, false)",ECID -> "(57699241367342030964647681192998909474,true)"]            |      2  
[AAID -> "(6A60527B9D66CCB9-29638A632B45E9, false)",ECID -> "(50117234882064422833184021414056250576,true)"]             |      2  
[AAID -> "(64FB4DC317E21B59-2A23602D234647E7, false)",ECID -> "(79785479785408621882908938960039330887,true)"]           |      2  
[AAID -> "(2E70E8CF6DB1DE86-270E55BBBA58B9C1, false)",ECID -> "(80073674009951685326146914344189474476,true)"]           |      2  
[AAID -> "(22E195F8A8ECCC6A-A39615C93B72A9F, false)",ECID -> "(57699241367342030964647681192998909474,true)"]            |      2  
[AAID -> "(1CFB3297C3146F2F-28D6902A610BA3B1, false)",ECID -> "(88251082790399360979074868101758236669,true)"]           |      2  
[AAID -> "(533F56A682C059B1-396437F68879F61D, false)",ECID -> "(91989370462250197735311833131353001213,true)"]           |      2  
(10 rows)
```

## Use array_distinct to find the distinct elements in productListItems

`array_distinct(array<T>): array<T>`

The snippet above removes duplicate values from the given array.

**Example**

The query below selects the `productlistitems` column, removes any duplicate items from the arrays, and limits the output to ten rows based on a specified timestamp range.

```sql
SELECT productlistitems,
              Array_distinct(productlistitems)
FROM geometrixxx_999_xdm_pqs_1batch_10k_rows
WHERE timestamp > To_timestamp('2017-11-01 00:00:00')
AND timestamp < To_timestamp('2017-11-02 00:00:00')
LIMIT 10;
```

**Result**

Results for this SQL would appear similar to those seen below.

```console
productlistitems     | array_distinct(productlistitems)
---------------------+---------------------------------
                     |
(123679, NULL, NULL) | (123679, NULL, NULL)
                     |
                     |
(1346,NULL, NULL)    | (1346,NULL, NULL)
                     |
(98347, NULL, NULL)  | (98347, NULL, NULL)
                     |
(176015, NULL, NULL) | (176015, NULL, NULL)
                     |

(10 rows)
```
