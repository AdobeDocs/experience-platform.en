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

| Function | Operator |
| -------- | -------- |
| `%` | Modulo |
| `*` | Multiply 
| `+` | Addition |
| `-` | Subtract | 
| `/` | Divide |
| `abs` | Absolute value |
| `acos` | Inverse cosine |
| `approx_count_distinct` | Estimated cardinality |
| `approx_percentile` | Approximate percentile |
| `asin` | Inverse sine |
| `atan` | Inverse tangent |
| `atan2` | Two argument inverse tangent |
| `cardinality` | Cardinality |
| `avg` | Average |
| `cbrt` | Cube root |
| `ceil` or `ceiling` | Ceiling | 
| `conv` | Convert from one base to another |
| `corr` | Pearson coefficient |
| `cos` | Cosine |
| `cosh` | Hyperbolic cosine |
| `cot` | Cotangent |
| `dense_rank` | Rank of rows |
| `e` | Euler's number |
| `expr` | Natural exponential function |
| `expm1` | Natural exponential function minus 1 |
| `factorial` | Factorial |
| `floor` | Floor |
| `greatest` | Greatest |
| `hypot` | Hypotenuse |
| `kurtosis` | Kurtosis |
| `least` | Least |
| `levenshtein` | Levenshtein distance |
| `ln` | Natural logarithm |
| `log` | Logarithm |
| `log10` | Base 10 logarithm | 
| `log1p` | Logarithm + 1 |
| `log2` | Base 2 logarithm |
| `max` | Maximum value |
| `mean` | Mean value |
| `min` | Minimum value |
| `monotonically_increasing_id` | Monotonically increasing IDs |
| `negative` | Negation |
| `percent_rank` | Percentage ranking |
| `percentile` | Percentile |
| `percentile_approx` | Approximate percentile |
| `pi` | Pi | 
| `pmod` | Positive modulo |
| `positive` | Positive |
| `pow`, `power` | To the power of |
| `radians` | Convert to radians |
| `rand` | Random number between 0 and 1 |
| `randn` | Random value |
| `rint` | Closest double value |
| `round` | Closest rounded value |
| `sign`, `signum` | Returns the number's sign |
| `sin` | Sine | 
| `sinh` | Hyperbolic sine |
| `sqrt` | Square root |
| `stddev` | Standard deviation |
| `sttdev_pop` | Population standard deviation |
| `stddev_samp` | Sample standard deviation |
| `sum` | Sum |
| `tan` | Tangent |
| `tanh` | Hyperbolic tangent |
| `var_pop` | Population variance |
| `var_samp`, `variance` | Sample variance |

### Logical operators {#logical-operators}

| Function | Operator |
| -------- | -------- |
| `!` | Logical not |
| `<` | Less than |
| `<=` | Less than or equal to |
| `=` | Equal to |
| `>` | Greater than |
| `>=` | Greater than or equal to |
| `^` | Bitwise exclusive or |
| `and` | Logical and |
| `arrays_overlap` | Shares common element |
| `assert_true` | Assert if true |
| `if` | If |
| `ifnull` | If null |
| `in` | In | 
| `isnan` | If not a number | 
| `isnotnull` | If not null |
| `isnull` | If null |
| `nanvl` | If not a number, return expression |
| `not` | Logical not |
| `or` | Logical or |
| `when` | When |
| `xpath_boolean` | If xpath boolean |

### Date/time functions {#datetime-functions}

| Function | Operator |
| -------- | -------- |
| `add_months` | Add months to date |
| `date_add` | Add days to date |
| `date_format` | Modify date format |
| `date_sub` | Subtract days from date |
| `date_trunc` | Truncate date |
| `datediff` | Difference between dates in days |
| `day`, `dayofmonth` | Day of the month |
| `dayofweek` | Day of week (1-7) |
| `dayofyear` | Day of year |
| `from_unixtime` | Returns date in Unix time |
| `from_utc_timestamp` | Returns date in UTC time |
| `hour` | Hour |
| `last_day` | Last day of the month |
| `minute` | Minute | 
| `month` | Month |
| `months_between` | Number of months between |
| `next_day` | Next day |
| `quarter` | Quarter |
| `second` | Second |
| `to_date` | Convert to date |
| `to_timestamp` | Convert to timestamp |
| `to_unix_timestamp` | Convert to Unix timestamp |
| `to_utc_timestamp` | Convert to UTC timestamp |
| `trunc` | Truncate date |
| `unix_timestamp` | Unix timestamp |
| `weekday` | Day of the week (0-6) |
| `week_of_year` | Week of the year |
| `year` | Year |

### Arrays {#arrays}

| Function | Operator |
| -------- | -------- |
| `array` | Array | 
| `array_contains` | Contains |
| `array_distinct` | Distinct | 
| `array_except` | Except |
| `array_intersect` | Intersection |
| `array_join` | Join |
| `array_max` | Maximum |
| `array_min` | Minimum |
| `array_position` | Position |
| `array_remove` | Remove |
| `array_repeat` | Repeat |
| `array_sort` | Sort |
| `array_union` | Union |
| `array_zip` | Zip |
| `element_at` | Return the element at position |
| `explode` | Separate elements of array into multiple rows, excluding null |
| `explode_outer` | Separate elements of array into multiple rows, including null |
| `find_in_set` | 1-based position of array |
| `flatten` | Flatten array of arrays |
| `inline` | Separate array of structs into a table, excluding null |
| `inline_outer` | Separate array of structs into a table, including null |
| `posexplod` | Separate elements of array into multiple rows with positions, excluding null |
| `posexplod` | Separate elements of array into multiple rows with positions, including null |
| `reverse` | Reverse elements of the array |
| `shuffle` | Return a random permutation of the array |
| `slice` | Subset |
| `sort_array` | Sort given an order |
| `zip_with` | Zip, given a function |

### Datatype casting functions {#datatype-casting}

| Function | Operator |
| -------- | -------- |
| `bigint` | Change the data type to bigint |
| `binary` | Change the data type to binary |
| `boolean` | Change the data type to boolean |
| `type` | Change the data type to the specified type |
| `date` | Change the data type to date |
| `decimal` | Change the data type to decimal |
| `double` | Change the data type to double |
| `float` | Change the data type to float |
| `int` | Change the data type to int |
| `smallint` | Change the data type to smallint |
| `str_to_map` | Create a map from a string |
| `string` | Change the data type to string |
| `struct` | Create a struct |
| `tinyint` | Change the data type to tinyint |

### Conversion and formatting functions {#conversion}

| Function | Operator |
| -------- | -------- |
| `ascii` | Return the numeric (ASCII) value |
| `base64` | Change the argument to a base64 string |
| `bin` | Change the argument to a binary value |
| `bit_length` | Return the bit length |
| `char`, `chr` | Return the ASCII character |
| `char_length`, `character_length` | Return the string length |
| `crc32` | Returns the cyclic redundancy check value |
| `degrees` | Convert radians to degrees |
| `format_number` | Change the number's format |
| `from_json`, `get_json_object` | Get data from JSON |
| `hash` | Return the hash value |
| `hex` | Convert the argument to a hexadecimal value |
| `initcap` | Changes the string to be title cased |
| `lcase`, `lower` | Changes the string to be all lowercase |
| `lpad` | Pads the left side of a string |
| `map` | Create a map |
| `map_from_arrays` | Create a map from an array |
| `map_from_entries` | Create a map from an array of structs |
| `md5` | Return the md5 value |
| `rpad` | Pads the right side of a string |
| `rtrim` | Removes trailing spaces |
| `sha`, `sha1` | Return the SHA1 value |
| `sha2` | Return the SHA2 value |
| `soundex` | Return the soundex code |
| `stack` | Separate values into rows |
| `substr`, `substring` | Return the substring |
| `to_json` | Returns a JSON string |
| `translate` | Replace values within string |
| `trim` | Remove leading and trailing characters |
| `ucase`, `upper` | Change the string to be all uppercase |
| `unbase64` | Convert the base64 string to binary |
| `unhex` | Convert the hexadecimal to binary |
| `uuid` | Return a UUID |

### Data evaluation {#data-evaluation}

| Function | Operator |
| -------- | -------- |
| `coalesce` | Return the first non-null argument | 
| `collect_list` | Return a list of non-unique elements |
| `collect_set` | Return a set of unique elements |
| `concat` | Concatenation |
| `concat_ws` | Concatenation with separator |
| `count` | Returns the total count for rows |
| `decode` | Decode using a character set |
| `elt` | Return the `n`th input |
| `encode` | Encode using a character set |
| `first`, `first_value` | Returns the first value |
| `grouping` | Indicates if a column is grouped |
| `grouping_id` | Returns the level of grouping |
| `instr` | Returns a 1-based index of character occurrence |
| `json_tuple` | Returns a tuple from a JSON input |
| `lag`, `lead` | Returns the value before the offset |
| `last`, `last_value` | Returns the last value |
| `left` | Returns the first `n` characters |
| `length` | Returns the length of the string |
| `locate`, `position` | Returns the position of the first occurrence of a substring |
| `map_concat` | Concatenate a map |
| `map_keys` | Return a map's keys |
| `map_values` | Return a map's values |
| `ntile` | Divide rows into partitions |
| `nullif` | Returns null if true |
| `nvl` | Returns value if null |
| `nvl2` | Returns value if not null |
| `parse_url` | Extracts part of a URL |
| `rank` | Computes rank of a value |
| `regexp_extract` | Extracts something that matches the regex |
| `regex_replace` | Replaces something that matches the regex |
| `repeat` | Returns a string that repeats |
| `replace` | Replace all instances of a string |
| `rollup` | Create a multi-dimensional rollup |
| `row_number` | Assigns a unique row number |
| `schema_of_json` | Returns the schema of the JSON |
| `sentences` | Splits string into an array of words |
| `sequence` | Generates an array of elements |
| `shiftleft` | Signed bitwise shift left |
| `shiftright` | Signed bitwise shift right |
| `shiftrightunsigned` | Unsigned bitwise shift right |
| `size` | Return the size of the array |
| `space` | Return a string with `n` spaces |
| `split` | Split string |
| `substring_index` | Return index of substring |
| `window` | Window |
| `xpath` | Parse XML nodes |
| `xpath_double`, `xpath_number` | Parse XML nodes for double |
| `xpath_float` | Parse XML nodes for float |
| `xpath_int` | Parse XML nodes for integer |
| `xpath_long` | Parse XML nodes for long |
| `xpath_short` | Parse XML nodes for short integer |
| `xpath_string` | Parse XML nodes for string |

### Current information {#current-information}

| Function | Operator |
| -------- | -------- |
| `current_database` | Returns current database |
| `current_date` | Returns current date |
| `current_timestamp`, `now` | Returns current timestamp |

### Higher order functions {#higher-order}

| Function | Operator |
| -------- | -------- |
| `transform` | Transform elements in an array |
| `exists` | Check if element exists |
| `filter` | Filter the input array |
| `aggregate` | Apply a binary operator to all elements |