---
keywords: Experience Platform;home;popular topics;query service;Query service;spark sql;Spark sql;spark;spark sql functions;functions;
solution: Experience Platform
title: Spark SQL Functions in Query Service
description: This documentation contains information on Spark SQL functions that extend SQL functionality.
exl-id: 59e6d82b-3317-456d-8c56-3efd5978433a
---
# [!DNL Spark] SQL functions

Adobe Experience Platform Query Service provides several built-in Spark SQL functions to extend SQL functionality. This document lists the Spark SQL functions that are supported by Query Service.

For more detailed information about the functions, including their syntax, usage, and examples, please read the [Spark SQL function documentation](https://spark.apache.org/docs/latest/api/sql/index.html).

>[!NOTE]
>
>Not all functions in the external documentation are supported. 

## Math and statistical operators and functions {#math}

| Operator/Function | Description |
| ----------------- | ----------- |
| [`%`](https://spark.apache.org/docs/latest/api/sql/index.html#_3) | Returns the remainder of the two numbers |
| [`*`](https://spark.apache.org/docs/latest/api/sql/index.html#_5) | Multiplies the two numbers |
| [`+`](https://spark.apache.org/docs/latest/api/sql/index.html#_6) | Adds the two numbers |
| [`-`](https://spark.apache.org/docs/latest/api/sql/index.html#_7) | Subtracts the two numbers | 
| [`/`](https://spark.apache.org/docs/latest/api/sql/index.html#_8) | Divides the two numbers |
| [`abs`](https://spark.apache.org/docs/latest/api/sql/index.html#abs) | Returns the absolute value of the input |
| [`acos`](https://spark.apache.org/docs/latest/api/sql/index.html#acos) | Returns the inverse cosine value |
| [`approx_count_distinct`](https://spark.apache.org/docs/latest/api/sql/index.html#approx_count_distinct) | Returns the estimated cardinality by HyperLogLog++ |
| [`approx_percentile`](https://spark.apache.org/docs/latest/api/sql/index.html#approx_percentile) | Returns the approximate percentile value at the given percentage |
| [`asin`](https://spark.apache.org/docs/latest/api/sql/index.html#asin) | Returns the inverse sine value |
| [`atan`](https://spark.apache.org/docs/latest/api/sql/index.html#atan) | Returns the inverse tangent value |
| [`atan2`](https://spark.apache.org/docs/latest/api/sql/index.html#atan2) | Returns the angle between the positive x-axis plane and the points given by the coordinates |
| [`avg`](https://spark.apache.org/docs/latest/api/sql/index.html#avg) | Returns the average value |
| [`cbrt`](https://spark.apache.org/docs/latest/api/sql/index.html#cbrt) | Returns the cube root |
| [`ceil`](https://spark.apache.org/docs/latest/api/sql/index.html#ceil) or [`ceiling`](https://spark.apache.org/docs/latest/api/sql/index.html#ceiling) | Returns the smallest integer not larger than the inputted value | 
| [`conv`](https://spark.apache.org/docs/latest/api/sql/index.html#conv) | Convert from one base to another |
| [`corr`](https://spark.apache.org/docs/latest/api/sql/index.html#corr) | Returns the Pearson coefficient between the numbers |
| [`cos`](https://spark.apache.org/docs/latest/api/sql/index.html#cos) | Returns the cosine value |
| [`cosh`](https://spark.apache.org/docs/latest/api/sql/index.html#cosh) | Returns the hyperbolic cosine value |
| [`cot`](https://spark.apache.org/docs/latest/api/sql/index.html#cot) | Returns the cotangent value |
| [`dense_rank`](https://spark.apache.org/docs/latest/api/sql/index.html#dense_rank) | Returns the rank of a value in a group of values |
| [`e`](https://spark.apache.org/docs/latest/api/sql/index.html#e) | Returns Euler's number |
| [`exp`](https://spark.apache.org/docs/latest/api/sql/index.html#exp) | Returns e to the power of the value |
| [`expm1`](https://spark.apache.org/docs/latest/api/sql/index.html#expm1) | Returns e to the power of the value minus 1 |
| [`factorial`](https://spark.apache.org/docs/latest/api/sql/index.html#factorial) | Returns the factorial of the value |
| [`floor`](https://spark.apache.org/docs/latest/api/sql/index.html#floor) | Returns the largest integer not smaller than the value |
| [`greatest`](https://spark.apache.org/docs/latest/api/sql/index.html#greatest) | Returns the largest value of all the parameters |
| [`hypot`](https://spark.apache.org/docs/latest/api/sql/index.html#hypot) | Returns the hypotenuse of the two values given  |
| [`kurtosis`](https://spark.apache.org/docs/latest/api/sql/index.html#kurtosis) | Returns the kurtosis value from the group |
| [`least`](https://spark.apache.org/docs/latest/api/sql/index.html#least) | Returns the smallest value of all the parameters |
| [`ln`](https://spark.apache.org/docs/latest/api/sql/index.html#ln) | Returns the natural logarithm of the value |
| [`log`](https://spark.apache.org/docs/latest/api/sql/index.html#log) | Returns the logarithm of the value |
| [`log10`](https://spark.apache.org/docs/latest/api/sql/index.html#log10) | Returns the logarithm, in base 10, of the value  | 
| [`log1p`](https://spark.apache.org/docs/latest/api/sql/index.html#log1p) | Returns the logarithm of the value plus 1 |
| [`log2`](https://spark.apache.org/docs/latest/api/sql/index.html#log2) | Returns the logarithm, in base 2, of the value |
| [`max`](https://spark.apache.org/docs/latest/api/sql/index.html#max) | Returns the maximum value of the expression |
| [`mean`](https://spark.apache.org/docs/latest/api/sql/index.html#mean) | Returns the mean calculated from the values |
| [`min`](https://spark.apache.org/docs/latest/api/sql/index.html#min) | Returns the minimum value of the expression |
| [`monotonically_increasing_id`](https://spark.apache.org/docs/latest/api/sql/index.html#monotonically_increasing_id) | Returns monotonically increasing IDs |
| [`negative`](https://spark.apache.org/docs/latest/api/sql/index.html#negative) | Returns the negated value |
| [`percent_rank`](https://spark.apache.org/docs/latest/api/sql/index.html#percent_rank) | Returns the percentage ranking of a value |
| [`percentile`](https://spark.apache.org/docs/latest/api/sql/index.html#percentile) | Returns the exact percentile at a given percentage |
| [`percentile_approx`](https://spark.apache.org/docs/latest/api/sql/index.html#percentile_approx) | Returns the approximate percentile at a given percentage |
| [`pi`](https://spark.apache.org/docs/latest/api/sql/index.html#pi) | Returns pi | 
| [`pmod`](https://spark.apache.org/docs/latest/api/sql/index.html#pmod) | Returns the positive modulo between two values |
| [`positive`](https://spark.apache.org/docs/latest/api/sql/index.html#positive) | Returns the positive balue |
| [`pow`](https://spark.apache.org/docs/latest/api/sql/index.html#pow), [`power`](https://spark.apache.org/docs/latest/api/sql/index.html#power) | Returns the first value to the power of the second value |
| [`radians`](https://spark.apache.org/docs/latest/api/sql/index.html#radians) | Converts the value to radians |
| [`rand`](https://spark.apache.org/docs/latest/api/sql/index.html#rand) | Returns a random number between 0 and 1 |
| [`randn`](https://spark.apache.org/docs/latest/api/sql/index.html#randn) | Returns a random value |
| [`rint`](https://spark.apache.org/docs/latest/api/sql/index.html#rint) | Returns the closest double value |
| [`round`](https://spark.apache.org/docs/latest/api/sql/index.html#round) | Returns the closest rounded value |
| [`sign`](https://spark.apache.org/docs/latest/api/sql/index.html#sign), [`signum`](https://spark.apache.org/docs/latest/api/sql/index.html#signum) | Returns the number's sign |
| [`sin`](https://spark.apache.org/docs/latest/api/sql/index.html#sin) | Returns sine of the value | 
| [`sinh`](https://spark.apache.org/docs/latest/api/sql/index.html#sinh) | Returns hyperbolic sine of the value |
| [`sqrt`](https://spark.apache.org/docs/latest/api/sql/index.html#sqrt) | Returns the square root of the value |
| [`stddev`](https://spark.apache.org/docs/latest/api/sql/index.html#stddev) | Returns the standard deviation of the value |
| [`sttdev_pop`](https://spark.apache.org/docs/latest/api/sql/index.html#sttdev_pop) | Returns the population standard deviation of the value |
| [`stddev_samp`](https://spark.apache.org/docs/latest/api/sql/index.html#stddev_samp) | Returns the sample standard deviation of the value |
| [`sum`](https://spark.apache.org/docs/latest/api/sql/index.html#sum) | Returns the sum of the values |
| [`tan`](https://spark.apache.org/docs/latest/api/sql/index.html#tan) | Returns tangent of the value |
| [`tanh`](https://spark.apache.org/docs/latest/api/sql/index.html#tanh) | Returns hyperbolic tangent of the value |
| [`var_pop`](https://spark.apache.org/docs/latest/api/sql/index.html#var_pop) | Returns the calculated population variance |
| [`var_samp`](https://spark.apache.org/docs/latest/api/sql/index.html#var_samp), [`variance`](https://spark.apache.org/docs/latest/api/sql/index.html#variance) | Returns the calculated sample variance |

### Logical operators and functions {#logical-operators}

| Operator/Function | Description |
| ----------------- | ----------- |
| [`!`](https://spark.apache.org/docs/latest/api/sql/index.html#_1) or [`not`](https://spark.apache.org/docs/latest/api/sql/index.html#not)| Logical not |
| [`<`](https://spark.apache.org/docs/latest/api/sql/index.html#_8) | Less than |
| [`<=`](https://spark.apache.org/docs/latest/api/sql/index.html#_9) | Less than or equal to |
| [`=`](https://spark.apache.org/docs/latest/api/sql/index.html#_12) | Equal to |
| [`>`](https://spark.apache.org/docs/latest/api/sql/index.html#_14) | Greater than |
| [`>=`](https://spark.apache.org/docs/latest/api/sql/index.html#_15) | Greater than or equal to |
| [`^`](https://spark.apache.org/docs/latest/api/sql/index.html#_16) | Bitwise exclusive or |
| [`\|`](https://spark.apache.org/docs/latest/api/sql/index.html#_17) | Bitwise or |
| [`~`](https://spark.apache.org/docs/latest/api/sql/index.html#_19) | Bitwise not |
| [`arrays_overlap`](https://spark.apache.org/docs/latest/api/sql/index.html#arrays_overlap) | Returns the common elements |
| [`assert_true`](https://spark.apache.org/docs/latest/api/sql/index.html#assert_true) | Asserts if the expression is true |
| [`if`](https://spark.apache.org/docs/latest/api/sql/index.html#if) | If the expression evaluates to true, return the second expression. Otherwise, return the third expression. |
| [`ifnull`](https://spark.apache.org/docs/latest/api/sql/index.html#ifnull) | If the expression is null, it returns the second expression. Otherwise, it returns the first expression. |
| [`in`](https://spark.apache.org/docs/latest/api/sql/index.html#in) | Returns true if the first expression is in any of the subsequent expressions. | 
| [`isnan`](https://spark.apache.org/docs/latest/api/sql/index.html#isnan) | Returns true if the value is not a number | 
| [`isnotnull`](https://spark.apache.org/docs/latest/api/sql/index.html#isnotnull) | Returns true if the value is not null |
| [`isnull`](https://spark.apache.org/docs/latest/api/sql/index.html#isnull) | Returns true if the value is null |
| [`nanvl`](https://spark.apache.org/docs/latest/api/sql/index.html#nanvl) | Returns the first expression if not a number, returns the second expression otherwise |
| [`or`](https://spark.apache.org/docs/latest/api/sql/index.html#or) | Logical or |
| [`when`](https://spark.apache.org/docs/latest/api/sql/index.html#when) | When can be used to create branch conditions for comparison |
| [`xpath_boolean`](https://spark.apache.org/docs/latest/api/sql/index.html#xpath_boolean) | Returns true if the XPath expression evaluates to true or if a matching node is found |

### Date/time functions {#datetime-functions}

| Function | Description |
| -------- | ----------- |
| [`add_months`](https://spark.apache.org/docs/latest/api/sql/index.html#add_months) | Add months to date |
| [`date_add`](https://spark.apache.org/docs/latest/api/sql/index.html#date_add) | Add days to date |
| [`date_format`](https://spark.apache.org/docs/latest/api/sql/index.html#date_format) | Modify date format |
| [`date_sub`](https://spark.apache.org/docs/latest/api/sql/index.html#date_sub) | Subtract days from date |
| [`date_trunc`](https://spark.apache.org/docs/latest/api/sql/index.html#date_trunc) | Returns the date truncated to the specified unit |
| [`datediff`](https://spark.apache.org/docs/latest/api/sql/index.html#datediff) | Returns the difference between dates in days |
| [`day`](https://spark.apache.org/docs/latest/api/sql/index.html#day), [`dayofmonth`](https://spark.apache.org/docs/latest/api/sql/index.html#dayofmonth) | Returns the day of the month |
| [`dayofweek`](https://spark.apache.org/docs/latest/api/sql/index.html#dayofweek) | Returns the day of week (1-7) |
| [`dayofyear`](https://spark.apache.org/docs/latest/api/sql/index.html#dayofyear) | Returns the day of year |
| [`from_unixtime`](https://spark.apache.org/docs/latest/api/sql/index.html#from_unixtime) | Returns date in Unix time |
| [`from_utc_timestamp`](https://spark.apache.org/docs/latest/api/sql/index.html#from_utc_timestamp) | Returns date in UTC time |
| [`hour`](https://spark.apache.org/docs/latest/api/sql/index.html#hour) | Returns the hour of the input |
| [`last_day`](https://spark.apache.org/docs/latest/api/sql/index.html#last_day) | Returns the last day of the month the date belongs to |
| [`minute`](https://spark.apache.org/docs/latest/api/sql/index.html#minute) | Returns the minute of the input | 
| [`month`](https://spark.apache.org/docs/latest/api/sql/index.html#month) | Returns the month of the input |
| [`months_between`](https://spark.apache.org/docs/latest/api/sql/index.html#months_between) | Number of months between |
| [`next_day`](https://spark.apache.org/docs/latest/api/sql/index.html#next_day) | Returns the first day later than the input |
| [`quarter`](https://spark.apache.org/docs/latest/api/sql/index.html#quarter) | Returns the quarter of the input |
| [`second`](https://spark.apache.org/docs/latest/api/sql/index.html#second) | Returns the second of the string |
| [`to_date`](https://spark.apache.org/docs/latest/api/sql/index.html#to_date) | Converts the string to a date. **Note:** The string **must** be in the format `yyyy-mm-ddTHH24:MM:SS`. |
| [`to_timestamp`](https://spark.apache.org/docs/latest/api/sql/index.html#to_timestamp) | Converts the string to a timestamp. **Note:** The string **must** be in the format `yyyy-mm-ddTHH24:MM:SS`. |
| [`to_unix_timestamp`](https://spark.apache.org/docs/latest/api/sql/index.html#to_unix_timestamp) | Converts the string to a Unix timestamp |
| [`to_utc_timestamp`](https://spark.apache.org/docs/latest/api/sql/index.html#to_utc_timestamp) | Converts the string to a UTC timestamp |
| [`trunc`](https://spark.apache.org/docs/latest/api/sql/index.html#trunc) | Truncates the date |
| [`unix_timestamp`](https://spark.apache.org/docs/latest/api/sql/index.html#unix_timestamp) | Returns the Unix timestamp |
| [`weekday`](https://spark.apache.org/docs/latest/api/sql/index.html#weekday) | Day of the week (0-6) |
| [`weekofyear`](https://spark.apache.org/docs/latest/api/sql/index.html#weekofyear) | Returns the week of the year for a given date |
| [`year`](https://spark.apache.org/docs/latest/api/sql/index.html#year) | Returns the year of the string |

### Arrays {#arrays}

| Function | Description |
| -------- | ----------- |
| [`array`](https://spark.apache.org/docs/latest/api/sql/index.html#array) | Creates an array with the given elements | 
| [`array_contains`](https://spark.apache.org/docs/latest/api/sql/index.html#array_contains) | Checks if the array contains the value |
| [`array_distinct`](https://spark.apache.org/docs/latest/api/sql/index.html#array_distinct) | Removes duplicate values from the array | 
| [`array_except`](https://spark.apache.org/docs/latest/api/sql/index.html#array_except) | Returns an array of the elements in the first array, but not the second |
| [`array_intersect`](https://spark.apache.org/docs/latest/api/sql/index.html#array_intersect) | Returns the intersection of the two arrays |
| [`array_join`](https://spark.apache.org/docs/latest/api/sql/index.html#array_join) | Joins two arrays together |
| [`array_max`](https://spark.apache.org/docs/latest/api/sql/index.html#array_max) | Returns the maximum value of the array |
| [`array_min`](https://spark.apache.org/docs/latest/api/sql/index.html#array_min) | Returns the minimum value of the array |
| [`array_position`](https://spark.apache.org/docs/latest/api/sql/index.html#array_position) | Returns the 1-based position of the element |
| [`array_remove`](https://spark.apache.org/docs/latest/api/sql/index.html#array_remove) | Removes all elements that are equal to the element |
| [`array_repeat`](https://spark.apache.org/docs/latest/api/sql/index.html#array_repeat) | Creates an array containing the value counted times |
| [`array_sort`](https://spark.apache.org/docs/latest/api/sql/index.html#array_sort) | Sorts the array |
| [`array_union`](https://spark.apache.org/docs/latest/api/sql/index.html#array_union) | Joins the array together, without any duplicates |
| [`arrays_zip`](https://spark.apache.org/docs/latest/api/sql/index.html#array_zip) | Combines the values of given arrays with the values of original collection at a given index |
| [`cardinality`](https://spark.apache.org/docs/latest/api/sql/index.html#cardinality) | Return the size of the array |
| [`element_at`](https://spark.apache.org/docs/latest/api/sql/index.html#element_at) | Return the element at position |
| [`explode`](https://spark.apache.org/docs/latest/api/sql/index.html#explode) | Separate elements of array into multiple rows, excluding null |
| [`explode_outer`](https://spark.apache.org/docs/latest/api/sql/index.html#explode_outer) | Separate elements of array into multiple rows, including null |
| [`find_in_set`](https://spark.apache.org/docs/latest/api/sql/index.html#find_in_set) | Returns the 1 based position of array |
| [`flatten`](https://spark.apache.org/docs/latest/api/sql/index.html#flatten) | Flattens an array of arrays |
| [`inline`](https://spark.apache.org/docs/latest/api/sql/index.html#inline) | Separate array of structs into a table, excluding null |
| [`inline_outer`](https://spark.apache.org/docs/latest/api/sql/index.html#inline_outer) | Separate array of structs into a table, including null |
| [`posexplode`](https://spark.apache.org/docs/latest/api/sql/index.html#posexplode) | Separate elements of array into multiple rows with positions, excluding null |
| [`reverse`](https://spark.apache.org/docs/latest/api/sql/index.html#reverse) | Reverse elements of the array |
| [`shuffle`](https://spark.apache.org/docs/latest/api/sql/index.html#shuffle) | Return a random permutation of the array |
| [`slice`](https://spark.apache.org/docs/latest/api/sql/index.html#slice) | Subsets an array |
| [`sort_array`](https://spark.apache.org/docs/latest/api/sql/index.html#sort_array) | Sort an array, given an order |
| [`zip_with`](https://spark.apache.org/docs/latest/api/sql/index.html#zip_with) | Merges the two arrays into a single array, before applying a function |

### Datatype casting functions {#datatype-casting}

| Function | Description |
| -------- | ----------- |
| [`bigint`](https://spark.apache.org/docs/latest/api/sql/index.html#bigint) | Change the data type to bigint |
| [`binary`](https://spark.apache.org/docs/latest/api/sql/index.html#binary) | Change the data type to binary |
| [`boolean`](https://spark.apache.org/docs/latest/api/sql/index.html#boolean) | Change the data type to boolean |
| [`type`](https://spark.apache.org/docs/latest/api/sql/index.html#type) | Change the data type to the specified type |
| [`date`](https://spark.apache.org/docs/latest/api/sql/index.html#date) | Change the data type to date |
| [`decimal`](https://spark.apache.org/docs/latest/api/sql/index.html#decimal) | Change the data type to decimal |
| [`double`](https://spark.apache.org/docs/latest/api/sql/index.html#double) | Change the data type to double |
| [`float`](https://spark.apache.org/docs/latest/api/sql/index.html#float) | Change the data type to float |
| [`int`](https://spark.apache.org/docs/latest/api/sql/index.html#int) | Change the data type to int |
| [`smallint`](https://spark.apache.org/docs/latest/api/sql/index.html#smallint) | Change the data type to smallint |
| [`str_to_map`](https://spark.apache.org/docs/latest/api/sql/index.html#str_to_map) | Create a map from a string |
| [`string`](https://spark.apache.org/docs/latest/api/sql/index.html#string) | Change the data type to string |
| [`struct`](https://spark.apache.org/docs/latest/api/sql/index.html#struct) | Create a struct |
| [`tinyint`](https://spark.apache.org/docs/latest/api/sql/index.html#tinyint) | Change the data type to tinyint |

### Conversion and formatting functions {#conversion}

| Function | Description |
| -------- | ----------- |
| [`ascii`](https://spark.apache.org/docs/latest/api/sql/index.html#ascii) | Return the numeric (ASCII) value |
| [`base64`](https://spark.apache.org/docs/latest/api/sql/index.html#base64) | Change the argument to a base64 string |
| [`bin`](https://spark.apache.org/docs/latest/api/sql/index.html#bin) | Change the argument to a binary value |
| [`bit_length`](https://spark.apache.org/docs/latest/api/sql/index.html#bit_length) | Return the bit length |
| [`char`](https://spark.apache.org/docs/latest/api/sql/index.html#char), [`chr`](https://spark.apache.org/docs/latest/api/sql/index.html#chr) | Return the ASCII character |
| [`char_length`](https://spark.apache.org/docs/latest/api/sql/index.html#char_length), [`character_length`](https://spark.apache.org/docs/latest/api/sql/index.html#character_length) | Return the string length |
| [`crc32`](https://spark.apache.org/docs/latest/api/sql/index.html#crc32) | Returns the cyclic redundancy check value |
| [`degrees`](https://spark.apache.org/docs/latest/api/sql/index.html#degrees) | Convert radians to degrees |
| [`format_number`](https://spark.apache.org/docs/latest/api/sql/index.html#format_number) | Change the number's format |
| [`from_json`](https://spark.apache.org/docs/latest/api/sql/index.html#from_json), [`get_json_object`](https://spark.apache.org/docs/latest/api/sql/index.html#get_json_object) | Get data from JSON |
| [`hash`](https://spark.apache.org/docs/latest/api/sql/index.html#hash) | Return the hash value |
| [`hex`](https://spark.apache.org/docs/latest/api/sql/index.html#hex) | Convert the argument to a hexadecimal value |
| [`initcap`](https://spark.apache.org/docs/latest/api/sql/index.html#initcap) | Changes the string to be title cased |
| [`lcase`](https://spark.apache.org/docs/latest/api/sql/index.html#lcase), [`lower`](https://spark.apache.org/docs/latest/api/sql/index.html#lower) | Changes the string to be all lowercase |
| [`lpad`](https://spark.apache.org/docs/latest/api/sql/index.html#lpad) | Pads the left side of a string |
| [`map`](https://spark.apache.org/docs/latest/api/sql/index.html#map) | Create a map |
| [`map_from_arrays`](https://spark.apache.org/docs/latest/api/sql/index.html#map_from_arrays) | Create a map from an array |
| [`map_from_entries`](https://spark.apache.org/docs/latest/api/sql/index.html#map_from_entries) | Create a map from an array of structs |
| [`md5`](https://spark.apache.org/docs/latest/api/sql/index.html#md5) | Return the md5 value |
| [`rpad`](https://spark.apache.org/docs/latest/api/sql/index.html#rpad) | Pads the right side of a string |
| [`rtrim`](https://spark.apache.org/docs/latest/api/sql/index.html#rtrim) | Removes trailing spaces |
| [`sha`](https://spark.apache.org/docs/latest/api/sql/index.html#sha), [`sha1`](https://spark.apache.org/docs/latest/api/sql/index.html#sha1) | Return the SHA1 value |
| [`sha2`](https://spark.apache.org/docs/latest/api/sql/index.html#sha2) | Return the SHA2 value |
| [`soundex`](https://spark.apache.org/docs/latest/api/sql/index.html#soundex) | Return the soundex code |
| [`stack`](https://spark.apache.org/docs/latest/api/sql/index.html#stack) | Separate values into rows |
| [`substr`](https://spark.apache.org/docs/latest/api/sql/index.html#substr), [`substring`](https://spark.apache.org/docs/latest/api/sql/index.html#substring) | Return the substring |
| [`to_json`](https://spark.apache.org/docs/latest/api/sql/index.html#to_json) | Returns a JSON string |
| [`translate`](https://spark.apache.org/docs/latest/api/sql/index.html#translate) | Replace values within string |
| [`trim`](https://spark.apache.org/docs/latest/api/sql/index.html#trim) | Remove leading and trailing characters |
| [`ucase`](https://spark.apache.org/docs/latest/api/sql/index.html#ucase), [`upper`](https://spark.apache.org/docs/latest/api/sql/index.html#upper) | Change the string to be all uppercase |
| [`unbase64`](https://spark.apache.org/docs/latest/api/sql/index.html#unbase64) | Convert the base64 string to binary |
| [`unhex`](https://spark.apache.org/docs/latest/api/sql/index.html#unhex) | Convert the hexadecimal to binary |
| [`uuid`](https://spark.apache.org/docs/latest/api/sql/index.html#uuid) | Return a UUID |

### Data evaluation {#data-evaluation}

| Function | Description |
| -------- | ----------- |
| [`coalesce`](https://spark.apache.org/docs/latest/api/sql/index.html#coalesce) | Return the first non-null argument | 
| [`collect_list`](https://spark.apache.org/docs/latest/api/sql/index.html#collect_list) | Return a list of non-unique elements |
| [`collect_set`](https://spark.apache.org/docs/latest/api/sql/index.html#collect_set) | Return a set of unique elements |
| [`concat`](https://spark.apache.org/docs/latest/api/sql/index.html#concat) | Concatenation |
| [`concat_ws`](https://spark.apache.org/docs/latest/api/sql/index.html#concat_ws) | Concatenation with separator |
| [`count`](https://spark.apache.org/docs/latest/api/sql/index.html#count) | Returns the total count for rows |
| [`decode`](https://spark.apache.org/docs/latest/api/sql/index.html#decode) | Decode using a character set |
| [`elt`](https://spark.apache.org/docs/latest/api/sql/index.html#elt) | Return the [`n`](https://spark.apache.org/docs/latest/api/sql/index.html#n)th input |
| [`encode`](https://spark.apache.org/docs/latest/api/sql/index.html#encode) | Encode using a character set |
| [`first`](https://spark.apache.org/docs/latest/api/sql/index.html#first), [`first_value`](https://spark.apache.org/docs/latest/api/sql/index.html#first_value) | Returns the first value |
| [`grouping`](https://spark.apache.org/docs/latest/api/sql/index.html#grouping) | Indicates if a column is grouped |
| [`grouping_id`](https://spark.apache.org/docs/latest/api/sql/index.html#grouping_id) | Returns the level of grouping |
| [`instr`](https://spark.apache.org/docs/latest/api/sql/index.html#instr) | Returns a 1-based index of character occurrence |
| [`json_tuple`](https://spark.apache.org/docs/latest/api/sql/index.html#json_tuple) | Returns a tuple from a JSON input |
| [`lag`](https://spark.apache.org/docs/latest/api/sql/index.html#lag), [`lead`](https://spark.apache.org/docs/latest/api/sql/index.html#lead) | Returns the value before the offset |
| [`last`](https://spark.apache.org/docs/latest/api/sql/index.html#last), [`last_value`](https://spark.apache.org/docs/latest/api/sql/index.html#last_value) | Returns the last value |
| [`left`](https://spark.apache.org/docs/latest/api/sql/index.html#left) | Returns the first [`n`](https://spark.apache.org/docs/latest/api/sql/index.html#n) characters |
| [`length`](https://spark.apache.org/docs/latest/api/sql/index.html#length) | Returns the length of the string |
| [`levenshtein`](https://spark.apache.org/docs/latest/api/sql/index.html#levenshtein) | Returns the Levenshtein distance between strings |
| [`locate`](https://spark.apache.org/docs/latest/api/sql/index.html#locate), [`position`](https://spark.apache.org/docs/latest/api/sql/index.html#position) | Returns the position of the first occurrence of a substring |
| [`map_concat`](https://spark.apache.org/docs/latest/api/sql/index.html#map_concat) | Concatenate a map |
| [`map_keys`](https://spark.apache.org/docs/latest/api/sql/index.html#map_keys) | Return a map's keys |
| [`map_values`](https://spark.apache.org/docs/latest/api/sql/index.html#map_values) | Return a map's values |
| [`ntile`](https://spark.apache.org/docs/latest/api/sql/index.html#ntile) | Divide rows into partitions |
| [`nullif`](https://spark.apache.org/docs/latest/api/sql/index.html#nullif) | Returns null if true |
| [`nvl`](https://spark.apache.org/docs/latest/api/sql/index.html#nvl) | Returns value if null |
| [`nvl2`](https://spark.apache.org/docs/latest/api/sql/index.html#nvl2) | Returns value if not null |
| [`parse_url`](https://spark.apache.org/docs/latest/api/sql/index.html#parse_url) | Extracts part of a URL |
| [`rank`](https://spark.apache.org/docs/latest/api/sql/index.html#rank) | Computes rank of a value |
| [`regexp_extract`](https://spark.apache.org/docs/latest/api/sql/index.html#regexp_extract) | Extracts something that matches the regex |
| [`regex_replace`](https://spark.apache.org/docs/latest/api/sql/index.html#regex_replace) | Replaces something that matches the regex |
| [`repeat`](https://spark.apache.org/docs/latest/api/sql/index.html#repeat) | Returns a string that repeats |
| [`replace`](https://spark.apache.org/docs/latest/api/sql/index.html#replace) | Replace all instances of a string |
| [`rollup`](https://spark.apache.org/docs/latest/api/sql/index.html#rollup) | Create a multi-dimensional rollup |
| [`row_number`](https://spark.apache.org/docs/latest/api/sql/index.html#row_number) | Assigns a unique row number |
| [`schema_of_json`](https://spark.apache.org/docs/latest/api/sql/index.html#schema_of_json) | Returns the schema of the JSON |
| [`sentences`](https://spark.apache.org/docs/latest/api/sql/index.html#sentences) | Splits string into an array of words |
| [`sequence`](https://spark.apache.org/docs/latest/api/sql/index.html#sequence) | Generates an array of elements |
| [`shiftleft`](https://spark.apache.org/docs/latest/api/sql/index.html#shiftleft) | Signed bitwise shift left |
| [`shiftright`](https://spark.apache.org/docs/latest/api/sql/index.html#shiftright) | Signed bitwise shift right |
| [`shiftrightunsigned`](https://spark.apache.org/docs/latest/api/sql/index.html#shiftrightunsigned) | Unsigned bitwise shift right |
| [`size`](https://spark.apache.org/docs/latest/api/sql/index.html#size) | Return the size of the array |
| [`space`](https://spark.apache.org/docs/latest/api/sql/index.html#space) | Return a string with [`n`](https://spark.apache.org/docs/latest/api/sql/index.html#n) spaces |
| [`split`](https://spark.apache.org/docs/latest/api/sql/index.html#split) | Split string |
| [`substring_index`](https://spark.apache.org/docs/latest/api/sql/index.html#substring_index) | Return index of substring |
| [`window`](https://spark.apache.org/docs/latest/api/sql/index.html#window) | Window |
| [`xpath`](https://spark.apache.org/docs/latest/api/sql/index.html#xpath) | Parse XML nodes |
| [`xpath_double`](https://spark.apache.org/docs/latest/api/sql/index.html#xpath_double), [`xpath_number`](https://spark.apache.org/docs/latest/api/sql/index.html#xpath_number) | Parse XML nodes for double |
| [`xpath_float`](https://spark.apache.org/docs/latest/api/sql/index.html#xpath_float) | Parse XML nodes for float |
| [`xpath_int`](https://spark.apache.org/docs/latest/api/sql/index.html#xpath_int) | Parse XML nodes for integer |
| [`xpath_long`](https://spark.apache.org/docs/latest/api/sql/index.html#xpath_long) | Parse XML nodes for long |
| [`xpath_short`](https://spark.apache.org/docs/latest/api/sql/index.html#xpath_short) | Parse XML nodes for short integer |
| [`xpath_string`](https://spark.apache.org/docs/latest/api/sql/index.html#xpath_string) | Parse XML nodes for string |

### Current information {#current-information}

| Function | Description |
| -------- | ----------- |
| [`current_database`](https://spark.apache.org/docs/latest/api/sql/index.html#current_database) | Returns current database |
| [`current_date`](https://spark.apache.org/docs/latest/api/sql/index.html#current_date) | Returns current date |
| [`current_timestamp`](https://spark.apache.org/docs/latest/api/sql/index.html#current_timestamp), [`now`](https://spark.apache.org/docs/latest/api/sql/index.html#now) | Returns current timestamp |

### Higher order functions {#higher-order}

| Function | Description |
| -------- | ----------- |
| [`transform`](https://spark.apache.org/docs/latest/api/sql/index.html#transform) | Transform elements in an array |
| [`exists`](https://spark.apache.org/docs/latest/api/sql/index.html#exists) | Check if element exists |
| [`filter`](https://spark.apache.org/docs/latest/api/sql/index.html#filter) | Filter the input array |
| [`aggregate`](https://spark.apache.org/docs/latest/api/sql/index.html#aggregate) | Apply a binary operator to all elements |
