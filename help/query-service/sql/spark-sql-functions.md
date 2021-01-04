---
keywords: Experience Platform;home;popular topics;query service;Query service;spark sql;Spark sql;spark;spark sql functions;functions;
solution: Experience Platform
title: Spark SQL functions
topic: spark sql functions
description: This documentation contains information on Spark SQL functions that extend SQL functionality.
---

# [!DNL Spark] SQL functions

Adobe Experience Platform Query Service provides several built-in Spark SQL functions to extend SQL functionality. This document lists the Spark SQL functions that are supported by Query Service.

For more detailed information about the functions, including their syntax, usage, and examples, please read the [Spark SQL function documentation](https://spark.apache.org/docs/latest/api/sql/index.html).

>[!NOTE]
>
>Not all functions in the external documentation are supported. 

## Categories

- [Math and statistical operators and functions](#math)
- [Logical operators](#logical-operators)
- [Date/time functions](#datetime-functions)
- [Arrays](#arrays)
- [Datatype casting functions](#datatype-casting)
- [Conversion and formatting functions](#conversion)
- [Data evaluation](#data-evaluation)
- [Current Information](#current-information)
- [Higher order functions](#higher-order)

## Math and statistical operators and functions {#math}

| Operator | Function description |
| -------- | -------------------- |
| [`%`](https://spark.apache.org/docs/latest/api/sql/index.html#_2) | Modulo |
| [`*`](https://spark.apache.org/docs/latest/api/sql/index.html#_4) | Multiply |
| [`+`](https://spark.apache.org/docs/latest/api/sql/index.html#_5) | Addition |
| [`-`](https://spark.apache.org/docs/latest/api/sql/index.html#_6) | Subtract | 
| [`/`](https://spark.apache.org/docs/latest/api/sql/index.html#_7) | Divide |
| [`abs`](https://spark.apache.org/docs/latest/api/sql/index.html#abs) | Absolute value |
| [`acos`](https://spark.apache.org/docs/latest/api/sql/index.html#acos) | Inverse cosine |
| [`approx_count_distinct`](https://spark.apache.org/docs/latest/api/sql/index.html#approx_count_distinct) | Estimated cardinality |
| [`approx_percentile`](https://spark.apache.org/docs/latest/api/sql/index.html#approx_percentile) | Approximate percentile |
| [`asin`](https://spark.apache.org/docs/latest/api/sql/index.html#asin) | Inverse sine |
| [`atan`](https://spark.apache.org/docs/latest/api/sql/index.html#atan) | Inverse tangent |
| [`atan2`](https://spark.apache.org/docs/latest/api/sql/index.html#atan2) | Two argument inverse tangent |
| [`cardinality`](https://spark.apache.org/docs/latest/api/sql/index.html#cardinality) | Cardinality |
| [`avg`](https://spark.apache.org/docs/latest/api/sql/index.html#avg) | Average |
| [`cbrt`](https://spark.apache.org/docs/latest/api/sql/index.html#cbrt) | Cube root |
| [`ceil`](https://spark.apache.org/docs/latest/api/sql/index.html#ceil) or [`ceiling`](https://spark.apache.org/docs/latest/api/sql/index.html#ceiling) | Ceiling | 
| [`conv`](https://spark.apache.org/docs/latest/api/sql/index.html#conv) | Convert from one base to another |
| [`corr`](https://spark.apache.org/docs/latest/api/sql/index.html#corr) | Pearson coefficient |
| [`cos`](https://spark.apache.org/docs/latest/api/sql/index.html#cos) | Cosine |
| [`cosh`](https://spark.apache.org/docs/latest/api/sql/index.html#cosh) | Hyperbolic cosine |
| [`cot`](https://spark.apache.org/docs/latest/api/sql/index.html#cot) | Cotangent |
| [`dense_rank`](https://spark.apache.org/docs/latest/api/sql/index.html#dense_rank) | Rank of rows |
| [`e`](https://spark.apache.org/docs/latest/api/sql/index.html#e) | Euler's number |
| [`expr`](https://spark.apache.org/docs/latest/api/sql/index.html#expr) | Natural exponential function |
| [`expm1`](https://spark.apache.org/docs/latest/api/sql/index.html#expm1) | Natural exponential function minus 1 |
| [`factorial`](https://spark.apache.org/docs/latest/api/sql/index.html#factorial) | Factorial |
| [`floor`](https://spark.apache.org/docs/latest/api/sql/index.html#floor) | Floor |
| [`greatest`](https://spark.apache.org/docs/latest/api/sql/index.html#greatest) | Greatest |
| [`hypot`](https://spark.apache.org/docs/latest/api/sql/index.html#hypot) | Hypotenuse |
| [`kurtosis`](https://spark.apache.org/docs/latest/api/sql/index.html#kurtosis) | Kurtosis |
| [`least`](https://spark.apache.org/docs/latest/api/sql/index.html#least) | Least |
| [`levenshtein`](https://spark.apache.org/docs/latest/api/sql/index.html#levenshtein) | Levenshtein distance |
| [`ln`](https://spark.apache.org/docs/latest/api/sql/index.html#ln) | Natural logarithm |
| [`log`](https://spark.apache.org/docs/latest/api/sql/index.html#log) | Logarithm |
| [`log10`](https://spark.apache.org/docs/latest/api/sql/index.html#log10) | Base 10 logarithm | 
| [`log1p`](https://spark.apache.org/docs/latest/api/sql/index.html#log1p) | Logarithm + 1 |
| [`log2`](https://spark.apache.org/docs/latest/api/sql/index.html#log2) | Base 2 logarithm |
| [`max`](https://spark.apache.org/docs/latest/api/sql/index.html#max) | Maximum value |
| [`mean`](https://spark.apache.org/docs/latest/api/sql/index.html#mean) | Mean value |
| [`min`](https://spark.apache.org/docs/latest/api/sql/index.html#min) | Minimum value |
| [`monotonically_increasing_id`](https://spark.apache.org/docs/latest/api/sql/index.html#monotonically_increasing_id) | Monotonically increasing IDs |
| [`negative`](https://spark.apache.org/docs/latest/api/sql/index.html#negative) | Negation |
| [`percent_rank`](https://spark.apache.org/docs/latest/api/sql/index.html#percent_rank) | Percentage ranking |
| [`percentile`](https://spark.apache.org/docs/latest/api/sql/index.html#percentile) | Percentile |
| [`percentile_approx`](https://spark.apache.org/docs/latest/api/sql/index.html#percentile_approx) | Approximate percentile |
| [`pi`](https://spark.apache.org/docs/latest/api/sql/index.html#pi) | Pi | 
| [`pmod`](https://spark.apache.org/docs/latest/api/sql/index.html#pmod) | Positive modulo |
| [`positive`](https://spark.apache.org/docs/latest/api/sql/index.html#positive) | Positive |
| [`pow`](https://spark.apache.org/docs/latest/api/sql/index.html#pow), [`power`](https://spark.apache.org/docs/latest/api/sql/index.html#power) | To the power of |
| [`radians`](https://spark.apache.org/docs/latest/api/sql/index.html#radians) | Convert to radians |
| [`rand`](https://spark.apache.org/docs/latest/api/sql/index.html#rand) | Random number between 0 and 1 |
| [`randn`](https://spark.apache.org/docs/latest/api/sql/index.html#randn) | Random value |
| [`rint`](https://spark.apache.org/docs/latest/api/sql/index.html#rint) | Closest double value |
| [`round`](https://spark.apache.org/docs/latest/api/sql/index.html#round) | Closest rounded value |
| [`sign`](https://spark.apache.org/docs/latest/api/sql/index.html#sign), [`signum`](https://spark.apache.org/docs/latest/api/sql/index.html#signum) | Returns the number's sign |
| [`sin`](https://spark.apache.org/docs/latest/api/sql/index.html#sin) | Sine | 
| [`sinh`](https://spark.apache.org/docs/latest/api/sql/index.html#sinh) | Hyperbolic sine |
| [`sqrt`](https://spark.apache.org/docs/latest/api/sql/index.html#sqrt) | Square root |
| [`stddev`](https://spark.apache.org/docs/latest/api/sql/index.html#stddev) | Standard deviation |
| [`sttdev_pop`](https://spark.apache.org/docs/latest/api/sql/index.html#sttdev_pop) | Population standard deviation |
| [`stddev_samp`](https://spark.apache.org/docs/latest/api/sql/index.html#stddev_samp) | Sample standard deviation |
| [`sum`](https://spark.apache.org/docs/latest/api/sql/index.html#sum) | Sum |
| [`tan`](https://spark.apache.org/docs/latest/api/sql/index.html#tan) | Tangent |
| [`tanh`](https://spark.apache.org/docs/latest/api/sql/index.html#tanh) | Hyperbolic tangent |
| [`var_pop`](https://spark.apache.org/docs/latest/api/sql/index.html#var_pop) | Population variance |
| [`var_samp`](https://spark.apache.org/docs/latest/api/sql/index.html#var_samp), [`variance`](https://spark.apache.org/docs/latest/api/sql/index.html#variance) | Sample variance |

### Logical operators {#logical-operators}

| Operator | Function description |
| -------- | -------------------- |
| [`!`](https://spark.apache.org/docs/latest/api/sql/index.html#_1) | Logical not |
| [`<`](https://spark.apache.org/docs/latest/api/sql/index.html#_7) | Less than |
| [`<=`](https://spark.apache.org/docs/latest/api/sql/index.html#_8) | Less than or equal to |
| [`=`](https://spark.apache.org/docs/latest/api/sql/index.html#_10) | Equal to |
| [`>`](https://spark.apache.org/docs/latest/api/sql/index.html#_12) | Greater than |
| [`>=`](https://spark.apache.org/docs/latest/api/sql/index.html#_13) | Greater than or equal to |
| [`^`](https://spark.apache.org/docs/latest/api/sql/index.html#_14) | Bitwise exclusive or |
| [`and`](https://spark.apache.org/docs/latest/api/sql/index.html#and) | Logical and |
| [`arrays_overlap`](https://spark.apache.org/docs/latest/api/sql/index.html#arrays_overlap) | Shares common element |
| [`assert_true`](https://spark.apache.org/docs/latest/api/sql/index.html#assert_true) | Assert if true |
| [`if`](https://spark.apache.org/docs/latest/api/sql/index.html#if) | If |
| [`ifnull`](https://spark.apache.org/docs/latest/api/sql/index.html#ifnull) | If null |
| [`in`](https://spark.apache.org/docs/latest/api/sql/index.html#in) | In | 
| [`isnan`](https://spark.apache.org/docs/latest/api/sql/index.html#isnan) | If not a number | 
| [`isnotnull`](https://spark.apache.org/docs/latest/api/sql/index.html#isnotnull) | If not null |
| [`isnull`](https://spark.apache.org/docs/latest/api/sql/index.html#isnull) | If null |
| [`nanvl`](https://spark.apache.org/docs/latest/api/sql/index.html#nanvl) | If not a number, return expression |
| [`not`](https://spark.apache.org/docs/latest/api/sql/index.html#not) | Logical not |
| [`or`](https://spark.apache.org/docs/latest/api/sql/index.html#or) | Logical or |
| [`when`](https://spark.apache.org/docs/latest/api/sql/index.html#when) | When |
| [`xpath_boolean`](https://spark.apache.org/docs/latest/api/sql/index.html#xpath_boolean) | If xpath boolean |

### Date/time functions {#datetime-functions}

| Operator | Function description |
| -------- | -------------------- |
| [`add_months`](https://spark.apache.org/docs/latest/api/sql/index.html#add_months) | Add months to date |
| [`date_add`](https://spark.apache.org/docs/latest/api/sql/index.html#date_add) | Add days to date |
| [`date_format`](https://spark.apache.org/docs/latest/api/sql/index.html#date_format) | Modify date format |
| [`date_sub`](https://spark.apache.org/docs/latest/api/sql/index.html#date_sub) | Subtract days from date |
| [`date_trunc`](https://spark.apache.org/docs/latest/api/sql/index.html#date_trunc) | Truncate date |
| [`datediff`](https://spark.apache.org/docs/latest/api/sql/index.html#datediff) | Difference between dates in days |
| [`day`](https://spark.apache.org/docs/latest/api/sql/index.html#day), [`dayofmonth`](https://spark.apache.org/docs/latest/api/sql/index.html#dayofmonth) | Day of the month |
| [`dayofweek`](https://spark.apache.org/docs/latest/api/sql/index.html#dayofweek) | Day of week (1-7) |
| [`dayofyear`](https://spark.apache.org/docs/latest/api/sql/index.html#dayofyear) | Day of year |
| [`from_unixtime`](https://spark.apache.org/docs/latest/api/sql/index.html#from_unixtime) | Returns date in Unix time |
| [`from_utc_timestamp`](https://spark.apache.org/docs/latest/api/sql/index.html#from_utc_timestamp) | Returns date in UTC time |
| [`hour`](https://spark.apache.org/docs/latest/api/sql/index.html#hour) | Hour |
| [`last_day`](https://spark.apache.org/docs/latest/api/sql/index.html#last_day) | Last day of the month |
| [`minute`](https://spark.apache.org/docs/latest/api/sql/index.html#minute) | Minute | 
| [`month`](https://spark.apache.org/docs/latest/api/sql/index.html#month) | Month |
| [`months_between`](https://spark.apache.org/docs/latest/api/sql/index.html#months_between) | Number of months between |
| [`next_day`](https://spark.apache.org/docs/latest/api/sql/index.html#next_day) | Next day |
| [`quarter`](https://spark.apache.org/docs/latest/api/sql/index.html#quarter) | Quarter |
| [`second`](https://spark.apache.org/docs/latest/api/sql/index.html#second) | Second |
| [`to_date`](https://spark.apache.org/docs/latest/api/sql/index.html#to_date) | Convert to date |
| [`to_timestamp`](https://spark.apache.org/docs/latest/api/sql/index.html#to_timestamp) | Convert to timestamp |
| [`to_unix_timestamp`](https://spark.apache.org/docs/latest/api/sql/index.html#to_unix_timestamp) | Convert to Unix timestamp |
| [`to_utc_timestamp`](https://spark.apache.org/docs/latest/api/sql/index.html#to_utc_timestamp) | Convert to UTC timestamp |
| [`trunc`](https://spark.apache.org/docs/latest/api/sql/index.html#trunc) | Truncate date |
| [`unix_timestamp`](https://spark.apache.org/docs/latest/api/sql/index.html#unix_timestamp) | Unix timestamp |
| [`weekday`](https://spark.apache.org/docs/latest/api/sql/index.html#weekday) | Day of the week (0-6) |
| [`week_of_year`](https://spark.apache.org/docs/latest/api/sql/index.html#week_of_year) | Week of the year |
| [`year`](https://spark.apache.org/docs/latest/api/sql/index.html#year) | Year |

### Arrays {#arrays}

| Operator | Function description |
| -------- | -------------------- |
| [`array`](https://spark.apache.org/docs/latest/api/sql/index.html#array) | Array | 
| [`array_contains`](https://spark.apache.org/docs/latest/api/sql/index.html#array_contains) | Contains |
| [`array_distinct`](https://spark.apache.org/docs/latest/api/sql/index.html#array_distinct) | Distinct | 
| [`array_except`](https://spark.apache.org/docs/latest/api/sql/index.html#array_except) | Except |
| [`array_intersect`](https://spark.apache.org/docs/latest/api/sql/index.html#array_intersect) | Intersection |
| [`array_join`](https://spark.apache.org/docs/latest/api/sql/index.html#array_join) | Join |
| [`array_max`](https://spark.apache.org/docs/latest/api/sql/index.html#array_max) | Maximum |
| [`array_min`](https://spark.apache.org/docs/latest/api/sql/index.html#array_min) | Minimum |
| [`array_position`](https://spark.apache.org/docs/latest/api/sql/index.html#array_position) | Position |
| [`array_remove`](https://spark.apache.org/docs/latest/api/sql/index.html#array_remove) | Remove |
| [`array_repeat`](https://spark.apache.org/docs/latest/api/sql/index.html#array_repeat) | Repeat |
| [`array_sort`](https://spark.apache.org/docs/latest/api/sql/index.html#array_sort) | Sort |
| [`array_union`](https://spark.apache.org/docs/latest/api/sql/index.html#array_union) | Union |
| [`array_zip`](https://spark.apache.org/docs/latest/api/sql/index.html#array_zip) | Zip |
| [`element_at`](https://spark.apache.org/docs/latest/api/sql/index.html#element_at) | Return the element at position |
| [`explode`](https://spark.apache.org/docs/latest/api/sql/index.html#explode) | Separate elements of array into multiple rows, excluding null |
| [`explode_outer`](https://spark.apache.org/docs/latest/api/sql/index.html#explode_outer) | Separate elements of array into multiple rows, including null |
| [`find_in_set`](https://spark.apache.org/docs/latest/api/sql/index.html#find_in_set) | 1-based position of array |
| [`flatten`](https://spark.apache.org/docs/latest/api/sql/index.html#flatten) | Flatten array of arrays |
| [`inline`](https://spark.apache.org/docs/latest/api/sql/index.html#inline) | Separate array of structs into a table, excluding null |
| [`inline_outer`](https://spark.apache.org/docs/latest/api/sql/index.html#inline_outer) | Separate array of structs into a table, including null |
| [`posexplod`](https://spark.apache.org/docs/latest/api/sql/index.html#posexplod) | Separate elements of array into multiple rows with positions, excluding null |
| [`posexplod`](https://spark.apache.org/docs/latest/api/sql/index.html#posexplod) | Separate elements of array into multiple rows with positions, including null |
| [`reverse`](https://spark.apache.org/docs/latest/api/sql/index.html#reverse) | Reverse elements of the array |
| [`shuffle`](https://spark.apache.org/docs/latest/api/sql/index.html#shuffle) | Return a random permutation of the array |
| [`slice`](https://spark.apache.org/docs/latest/api/sql/index.html#slice) | Subset |
| [`sort_array`](https://spark.apache.org/docs/latest/api/sql/index.html#sort_array) | Sort given an order |
| [`zip_with`](https://spark.apache.org/docs/latest/api/sql/index.html#zip_with) | Zip, given a function |

### Datatype casting functions {#datatype-casting}

| Operator | Function description |
| -------- | -------------------- |
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

| Operator | Function description |
| -------- | -------------------- |
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

| Operator | Function description |
| -------- | -------------------- |
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

| Operator | Function description |
| -------- | -------------------- |
| [`current_database`](https://spark.apache.org/docs/latest/api/sql/index.html#current_database) | Returns current database |
| [`current_date`](https://spark.apache.org/docs/latest/api/sql/index.html#current_date) | Returns current date |
| [`current_timestamp`](https://spark.apache.org/docs/latest/api/sql/index.html#current_timestamp), [`now`](https://spark.apache.org/docs/latest/api/sql/index.html#now) | Returns current timestamp |

### Higher order functions {#higher-order}

| Operator | Function description |
| -------- | -------------------- |
| [`transform`](https://spark.apache.org/docs/latest/api/sql/index.html#transform) | Transform elements in an array |
| [`exists`](https://spark.apache.org/docs/latest/api/sql/index.html#exists) | Check if element exists |
| [`filter`](https://spark.apache.org/docs/latest/api/sql/index.html#filter) | Filter the input array |
| [`aggregate`](https://spark.apache.org/docs/latest/api/sql/index.html#aggregate) | Apply a binary operator to all elements |