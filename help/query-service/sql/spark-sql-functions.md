---
keywords: Experience Platform;home;popular topics;query service;Query service;spark sql;Spark sql;spark;spark sql functions;functions;
solution: Experience Platform
title: Spark SQL functions
topic: spark sql functions
description: This documentation contains information on Spark SQL helpers which provide built-in Spark SQL functions to extend SQL functionality.
---

# [!DNL Spark] SQL functions

The [!DNL Spark] SQL helpers provide built-in [!DNL Spark] SQL functions to extend SQL functionality. This document lists the Spark SQL functions that are supported by Adobe Experience Platform Query Service.

For more detailed information about the functions, including its syntax, usage, and examples, please read the [Spark SQL function documentation](https://spark.apache.org/docs/latest/api/sql/index.html).

>[!NOTE]
>
>Not all functions in the external documentation are supported. 

## Categories

- [Math and statistical operators and functions](#math)
- [Logical operators](#logical-operators)
- [Date/time functions](#datetime-functions)
- [Aggregate functions](#aggregate-functions)
- [Arrays](#arrays)
- [Datatype casting functions](#datatype-casting)
- [Conversion and formatting functions](#conversion)
- [Data evaluation](#data-evaluation)
- [Current Information](#current-information)
- [Higher order functions](#higher-order)

## Math and statistical operators and functions {#math}

- Modulo (`%`)
- Multiply (`*`)
- Addition (`+`)
- Subtract (`-`)
- Divide (`/`)
- Absolute value (`abs`)
- Inverse cosine (`acos`)
- Estimated cardinality (`approx_count_distinct`)
- Approximate percentile (`approx_percentile`)
- Inverse sine (`asin`)
- Inverse tangent (`atan`)
- Two argument inverse tangent (`atan2`)
- Cardinality (`cardinality`)
- Average (`avg`)
- Cube root (`cbrt`)
- Ceiling (`ceil` or `ceiling`)
- Convert from one base to another (`conv`)
- Pearson coefficient (`corr`)
- Cosine (`cos`)
- Hyperbolic cosine (`cosh`)
- Cotangent (`cot`)
- Rank of rows (`dense_rank`)
- Euler's number (`e`)
- Natural exponential function (`expr`)
- Natural exponential function minus 1 (`expm1`)
- Factorial (`factorial`)
- Floor (`floor`)
- Greatest (`greatest`)
- Hypotenuse (`hypot`)
- Kurtosis (`kurtosis`)
- Least (`least`)
- Levenshtein distance (`levenshtein`)
- Natural logarithm (`ln`)
- Logarithm (`log`)
- Base 10 logarithm (`log10`)
- Logarithm + 1 (`log1p`)
- Base 2 logarithm (`log2`)
- Maximum value (`max`)
- Mean value (`mean`)
- Minimum value (`min`)
- Monotonically increasing IDs (`monotonically_increasing_id`)
- Negation (`negative`)
- Percentage ranking (`percent_rank`)
- Percentile (`percentile`)
- Approximate percentile (`percentile_approx`)
- Pi (`pi`)
- Positive modulo (`pmod`)
- Positive (`positive`)
- To the power of (`pow`, `power`)
- Convert to radians (`radians`)
- Random number between 0 and 1 (`rand`)
- Random value (`randn`)
- Closest double value (`rint`)
- Closest rounded value (`round`)
- Returns the number's sign (`sign`, `signum`)
- Sine (`sin`)
- Hyperbolic sine (`sinh`)
- Square root (`sqrt`)
- Standard deviation (`stddev`)
- Population standard deviation (`sttdev_pop`)
- Sample standard deviation (`stddev_samp`)
- Sum (`sum`)
- Tangent (`tan`)
- Hyperbolic tangent (`tanh`)
- Population variance (`var_pop`)
- Sample variance (`var_samp`, `variance`)

### Logical operators {#logical-operators}

- Logical not (`!`)
- Less than (`<`)
- Less than or equal to (`<=`)
- Equal to (`=`)
- Greater than (`>`)
- Greater than or equal to (`>=`)
- Bitwise exclusive or (`^`)
- Logical and (`and`)
- Shares common element (`arrays_overlap`)
- Assert if true (`assert_true`)
- If (`if`)
- If null (`ifnull`)
- In (`in`)
- If not a number (`isnan`)
- If not null (`isnotnull`)
- If null (`isnull`)
- If not a number, return expression (`nanvl`)
- Logical not (`not`)
- Logical or (`or`)
- When (`when`)
- If xpath boolean (`xpath_boolean`)

### Date/time functions {#datetime-functions}

- Add months to date (`add_months`)
- Add days to date (`date_add`)
- Modify date format (`date_format`)
- Subtract days from date (`date_sub`)
- Truncate date (`date_trunc`)
- Difference between dates in days (`datediff`)
- Day of the month (`day`, `dayofmonth`)
- Day of week (1-7) (`dayofweek`)
- Day of year (`dayofyear`)
- Returns date in Unix time (`from_unixtime`)
- Returns date in UTC time (`from_utc_timestamp`)
- Hour (`hour`)
- Last day of the month (`last_day`)
- Minute (`minute`)
- Month (`month`)
- Number of months between (`months_between`)
- Next day (`next_day`)
- Quarter (`quarter`)
- Second (`second`)
- Convert to date (`to_date`)
- Convert to timestamp (`to_timestamp`)
- Convert to Unix timestamp (`to_unix_timestamp`)
- Convert to UTC timestamp (`to_utc_timestamp`)
- Truncate date (`trunc`)
- Unix timestamp (`unix_timestamp`)
- Day of the week (0-6) (`weekday`)
- Week of the year (`week_of_year`)
- Year (`year`)

### Arrays {#arrays}

- Array (`array`)
- Contains (`array_contains`)
- Distinct (`array_distinct`)
- Except (`array_except`)
- Intersection (`array_intersect`)
- Join (`array_join`)
- Maximum (`array_max`)
- Minimum (`array_min`)
- Position (`array_position`)
- Remove (`array_remove`)
- Repeat (`array_repeat`)
- Sort (`array_sort`)
- Union (`array_union`)
- Zip (`array_zip`)
- Return the element at position (`element_at`)
- Separate elements of array into multiple rows, excluding null (`explode`)
- Separate elements of array into multiple rows, including null (`explode_outer`)
- 1-based position of array (`find_in_set`)
- Flatten array of arrays (`flatten`)
- Explode array of structs into a table, excluding null (`inline`)
- Explode array of structs into a table, including null (`inline_outer`)


#### posexplode

`posexplode(expr)`: Separates the elements of array `expr` into multiple rows with positions, or the elements of map `expr` into multiple rows and columns with positions.

Example:

```sql
> SELECT posexplode(array(10,20));
 0  10
 1  20
```

#### posexplode_outer

`posexplode_outer(expr)`: Separates the elements of array `expr` into multiple rows with positions, or the elements of map `expr` into multiple rows and columns with positions.

Example:

```sql
> SELECT posexplode_outer(array(10,20));
 0  10
 1  20
```

#### reverse

`reverse(array)`: Returns a reversed string or an array with reverse order of elements.

Examples:

```sql
> SELECT reverse('Spark SQL');
 LQS krapS
> SELECT reverse(array(2, 1, 4, 3));
 [3,4,1,2]
```

Since: 1.5.0

>[!NOTE]
>
>rse logic for arrays is available since 2.4.0.

#### shuffle

`shuffle(array)`: Returns a random permutation of the given array.

Examples:

```sql
> SELECT shuffle(array(1, 20, 3, 5));
 [3,1,5,20]
> SELECT shuffle(array(1, 20, null, 3));
 [20,null,3,1]
```

Since: 2.4.0

>[!NOTE]
>
>function is non-deterministic.

#### slice

`slice(x, start, length)`: Subsets array x starting from index start (or starting from the end if start is negative) with the specified length.

Examples:

```sql
> SELECT slice(array(1, 2, 3, 4), 2, 2);
 [2,3]
> SELECT slice(array(1, 2, 3, 4), -2, 2);
 [3,4]
```

Since: 2.4.0

#### sort_array

`sort_array(array[, ascendingOrder])`: Sorts the input array in ascending or descending order according to the natural ordering of the array elements. Null elements are placed at the beginning of the returned array in ascending order or at the end of the returned array in descending order.

Examples:

```sql
> SELECT sort_array(array('b', 'd', null, 'c', 'a'), true);
 [null,"a","b","c","d"]
```

#### zip_with

`zip_with(left, right, func)`: Merges the two given arrays, element-wise, into a single array using function. If one array is shorter, nulls are appended at the end to match the length of the longer array, before applying function.

Examples:

```sql
> SELECT zip_with(array(1, 2, 3), array('a', 'b', 'c'), (x, y) -> (y, x));
 [{"y":"a","x":1},{"y":"b","x":2},{"y":"c","x":3}]
> SELECT zip_with(array(1, 2), array(3, 4), (x, y) -> x + y);
 [4,6]
> SELECT zip_with(array('a', 'b', 'c'), array('d', 'e', 'f'), (x, y) -> concat(x, y));
 ["ad","be","cf"]
```

Since: 2.4.0

### Datatype casting functions {#datatype-casting}

#### bigint

`bigint(expr)`: Casts the value `expr` to the target data type `bigint`.

#### binary

`binary(expr)`: Casts the value `expr` to the target data type `binary`.

#### boolean

`boolean(expr)`: Casts the value `expr` to the target data type `boolean`.

#### cast

`cast(expr AS type)`: Casts the value `expr` to the target data type `type`.

Example:

```sql
> SELECT cast('10' as int);
 10
```

#### date

`date(expr)`: Casts the value `expr` to the target data type `date`.

#### decimal

`decimal(expr)`: Casts the value `expr` to the target data type `decimal`.

#### double

`double(expr)`: Casts the value `expr` to the target data type `double`.

#### float

`float(expr)`: Casts the value `expr` to the target data type `float`.

#### int

`int(expr)`: Casts the value `expr` to the target data type `int`.

#### map

`map(key0, value0, key1, value1, ...)`: Creates a map with the given key/value pairs.

Example:

```sql
> SELECT map(1.0, '2', 3.0, '4');
 {1.0:"2",3.0:"4"}
```

#### smallint

`smallint(expr)`: Casts the value `expr` to the target data type `smallint`.

#### str_to_map

`str_to_map(text[, pairDelim[, keyValueDelim]])`: Creates a map after splitting the text into key/value pairs using delimiters. Default delimiters are ',' for `pairDelim` and ':' for `keyValueDelim`.

Examples:

```sql
> SELECT str_to_map('a:1,b:2,c:3', ',', ':');
 map("a":"1","b":"2","c":"3")
> SELECT str_to_map('a');
 map("a":null)
```

#### string

`string(expr)`: Casts the value `expr` to the target data type `string`.

#### struct

`struct(col1, col2, col3, ...)`: Creates a struct with the given field values.

#### tinyint

`tinyint(expr)`: Casts the value `expr` to the target data type `tinyint`.

### Conversion and formatting functions {#conversion}

#### ascii

`ascii(str)`: Returns the numeric value of the first character of `str`.

Examples:

```sql
> SELECT ascii('222');
 50
> SELECT ascii(2);
 50
```

#### base64

`base64(bin)`: Converts the argument from a binary `bin` to a base 64 string.

Example:

```sql
> SELECT base64('Spark SQL');
 U3BhcmsgU1FM
```

#### bin

`bin(expr)`: Returns the string representation of the long value `expr` represented in binary.

Examples:

```sql
> SELECT bin(13);
 1101
> SELECT bin(-13);
 1111111111111111111111111111111111111111111111111111111111110011
> SELECT bin(13.3);
 1101
```

#### bit_length

`bit_length(expr)`: Returns the bit length of string data or number of bits of binary data.

Example:

```sql
> SELECT bit_length('Spark SQL');
 72
```

#### char

`char(expr)`: Returns the ASCII character having the binary equivalent to `expr`. If n is larger than 256 the result is equivalent to `chr(n % 256)`.

Example:

```sql
> SELECT char(65);
 A
```

#### char_length

`char_length(expr)`: Returns the character length of string data or number of bytes of binary data. The length of string data includes the trailing spaces. The length of binary data includes binary zeros.

Examples:

```sql
> SELECT char_length('Spark SQL ');
 10
> SELECT CHAR_LENGTH('Spark SQL ');
 10
> SELECT CHARACTER_LENGTH('Spark SQL ');
 10
``` 

#### character_length

`character_length(expr)`: Returns the character length of string data or number of bytes of binary data. The length of string data includes the trailing spaces. The length of binary data includes binary zeros.

Examples:

```sql
> SELECT character_length('Spark SQL ');
 10
> SELECT CHAR_LENGTH('Spark SQL ');
 10
> SELECT CHARACTER_LENGTH('Spark SQL ');
 10
``` 

#### chr

`chr(expr)`: Returns the ASCII character having the binary equivalent to expr. If n is larger than 256 the result is equivalent to `chr(n % 256)`

Example:

```sql
> SELECT chr(65);
 A
```

#### degrees

`degrees(expr)`: Converts radians to degrees.

Arguments:
- `expr`: Angle in radians

Example:

```sql
> SELECT degrees(3.141592653589793);
 180.0
```

#### format_number

`format_number(expr1, expr2)`: Formats the number `expr1` like '#,###,###.##', rounded to `expr2` decimal places. If `expr2` is 0, the result has no decimal point or fractional part. `expr2` also accepts a user-specified format. This is intended to function like MySQL's `FORMAT`.

Examples:

```sql
> SELECT format_number(12332.123456, 4);
 12,332.1235
> SELECT format_number(12332.123456, '##################.###');
 12332.123
```

#### from_json

`from_json(jsonStr, schema[, options])`: Returns a struct value with the given `jsonStr` and `schema`.

Examples:

```sql
> SELECT from_json('{"a":1, "b":0.8}', 'a INT, b DOUBLE');
 {"a":1, "b":0.8}
> SELECT from_json('{"time":"26/08/2015"}', 'time Timestamp', map('timestampFormat', 'dd/MM/yyyy'));
 {"time":"2015-08-26 00:00:00.0"}
```

Since: 2.2.0

#### hash

`hash(expr1, expr2, ...)`: Returns a hash value of the arguments.

Example:

```sql
> SELECT hash('Spark', array(123), 2);
 -1321691492
```

#### hex

`hex(expr)`: Converts `expr` to hexadecimal.

Examples:

```sql
> SELECT hex(17);
 11
> SELECT hex('Spark SQL');
 537061726B2053514C
```

#### initcap

`initcap(str)`: Returns `str` with the first letter of each word in uppercase. All other letters are in lowercase. Words are delimited by white space.

Example:

```sql
> SELECT initcap('sPark sql');
 Spark Sql
```

#### lcase

`lcase(str)`: Returns `str` with all characters changed to lowercase.

Example:

```sql
> SELECT lcase('SparkSql');
 sparksql
```

#### lower

`lower(str)`: Returns `str` with all characters changed to lowercase.

Example:

```sql
> SELECT lower('SparkSql');
 sparksql
```

#### lpad

`lpad(str, len, pad)`: Returns `str`, left-padded with `pad` to a length of `len`. If `str` is longer than `len`, the return value is shortened to `len` characters.

Examples:

```sql
> SELECT lpad('hi', 5, '??');
 ???hi
> SELECT lpad('hi', 1, '??');
 h
```

#### map

`map(key0, value0, key1, value1, ...)`: Creates a map with the given key/value pairs.

Example:

```
> SELECT map(1.0, '2', 3.0, '4');
 {1.0:"2",3.0:"4"}
``` 

#### map_from_arrays

`map_from_arrays(keys, values)`: Creates a map with a pair of the given key/value arrays. Elements in keys cannot be null. 

Example:

```sql
> SELECT map_from_arrays(array(1.0, 3.0), array('2', '4'));
 {1.0:"2",3.0:"4"}
```

Since: 2.4.0

#### map_from_entries

`map_from_entries(arrayOfEntries)`: Returns a map created from the given array of entries.

Example:

```sql
> SELECT map_from_entries(array(struct(1, 'a'), struct(2, 'b')));
 {1:"a",2:"b"}
```

Since: 2.4.0

#### md5

`md5(expr)`: Returns an MD5 128-bit checksum as a hex string of `expr`.

Example:

```sql
> SELECT md5('Spark');
 8cde774d6f7333752ed72cacddb05126
```

#### rpad

`rpad(str, len, pad)`: Returns `str`, right-padded with `pad` to a length of `len`. If `str` is longer than `len`, the return value is shortened to `len` characters.

Examples:

```sql
> SELECT rpad('hi', 5, '??');
 hi???
> SELECT rpad('hi', 1, '??');
 h
```

#### rtrim

`rtrim(str)`: Removes the trailing space characters from `str`.

`rtrim(trimStr, str)`: Removes the trailing string, which contains the characters from the trim string from the `str`.

Arguments:
- `str`: A string expression
- `trimStr`: The trim string characters to trim. The default value is a single space

Examples:

```sql
> SELECT rtrim('    SparkSQL   ');
 SparkSQL
> SELECT rtrim('LQSa', 'SSparkSQLS');
 SSpark
```

#### sha

`sha(expr)`: Returns a `sha1` hash value as a hex string of the `expr`.

Example:

```sql
> SELECT sha('Spark');
 85f5955f4b27a9a4c2aab6ffe5d7189fc298b92c
```

#### sha1

`sha1(expr)`: Returns a `sha1` hash value as a hex string of the `expr`.

Example:

```sql
> SELECT sha1('Spark');
 85f5955f4b27a9a4c2aab6ffe5d7189fc298b92c
```

#### sha2

`sha2(expr, bitLength)`: Returns a checksum of SHA-2 family as a hex string of `expr`. SHA-224, SHA-256, SHA-384, and SHA-512 are supported. Bit length of 0 is equivalent to 256.

Example:

```sql
> SELECT sha2('Spark', 256);
 529bc3b07127ecb7e53a4dcf1991d9152c24537d919178022b2c42657f79a26b
```

#### soundex

`soundex(str)`: Returns Soundex code of the string.

Example:

```sql
> SELECT soundex('Miller');
 M460
```

#### stack

`stack(n, expr1, ..., exprk)`: Separates `expr1`, ..., `exprk` into `n` rows.

Example:

```sql
> SELECT stack(2, 1, 2, 3);
 1  2
 3  NULL
```

#### substr

`substr(str, pos[, len])`: Returns the substring of `str` that starts at `pos` and is of length `len`, or the slice of byte array that starts at `pos` and is of length `len`.

Examples:

```sql
> SELECT substr('Spark SQL', 5);
 k SQL
> SELECT substr('Spark SQL', -3);
 SQL
> SELECT substr('Spark SQL', 5, 1);
 k
```

#### substring

`substring(str, pos[, len])`: Returns the substring of `str` that starts at `pos` and is of length `len`, or the slice of byte array that starts at `pos` and is of length `len`.

Examples:

```sql
> SELECT substring('Spark SQL', 5);
 k SQL
> SELECT substring('Spark SQL', -3);
 SQL
> SELECT substring('Spark SQL', 5, 1);
 k
```

#### to_json

`to_json(expr[, options])`: Returns a JSON string with a given struct value.

Examples:

```sql
> SELECT to_json(named_struct('a', 1, 'b', 2));
 {"a":1,"b":2}
> SELECT to_json(named_struct('time', to_timestamp('2015-08-26', 'yyyy-MM-dd')), map('timestampFormat', 'dd/MM/yyyy'));
 {"time":"26/08/2015"}
> SELECT to_json(array(named_struct('a', 1, 'b', 2)));
 [{"a":1,"b":2}]
> SELECT to_json(map('a', named_struct('b', 1)));
 {"a":{"b":1}}
> SELECT to_json(map(named_struct('a', 1),named_struct('b', 2)));
 {"[1]":{"b":2}}
> SELECT to_json(map('a', 1));
 {"a":1}
> SELECT to_json(array((map('a', 1))));
 [{"a":1}]
```

Since: 2.2.0

#### translate

`translate(input, from, to)`: Translates the `input` string by replacing the characters present in the `from` string with the corresponding characters in the `to` string.

Example:

```sql
> SELECT translate('AaBbCc', 'abc', '123');
 A1B2C3
```

#### trim

`trim(str)`: Removes the leading and trailing space characters from `str`.

`trim(BOTH trimStr FROM str)`: Remove the leading and trailing `trimStr` characters from `str`.

`trim(LEADING trimStr FROM str)`: Remove the leading `trimStr` characters from `str`.

`trim(TRAILING trimStr FROM str)`: Remove the trailing `trimStr` characters from `str`.

Arguments:
- `str`: A string expression
- `trimStr`: The trim string characters to trim, the default value is a single space
- `BOTH`, `FROM`: These are keywords to specify trimming string characters from both ends of the string
- `LEADING`, `FROM`: These are keywords to specify trimming string characters from the left end of the string
- `TRAILING`, `FROM`: These are keywords to specify trimming string characters from the right end of the string

Examples:

```sql
> SELECT trim('    SparkSQL   ');
 SparkSQL
> SELECT trim('SL', 'SSparkSQLS');
 parkSQ
> SELECT trim(BOTH 'SL' FROM 'SSparkSQLS');
 parkSQ
> SELECT trim(LEADING 'SL' FROM 'SSparkSQLS');
 parkSQLS
> SELECT trim(TRAILING 'SL' FROM 'SSparkSQLS');
 SSparkSQ
```

#### ucase

`ucase(str)`: Returns `str` with all characters changed to uppercase.

Example:

```sql
> SELECT ucase('SparkSql');
 SPARKSQL
```

#### unbase64

`unbase64(str)`: Converts the argument from a base 64 string `str` to a binary.

Example:

```sql
> SELECT unbase64('U3BhcmsgU1FM');
 Spark SQL
```

#### unhex

`unhex(expr)`: Converts hexadecimal `expr` to binary.

Example:

```sql
> SELECT decode(unhex('537061726B2053514C'), 'UTF-8');
 Spark SQL
```

#### upper

`upper(str)`: Returns `str` with all characters changed to uppercase.

Example:

```sql
> SELECT upper('SparkSql');
 SPARKSQL
```

#### uuid

`uuid()`: Returns an universally unique identifier (UUID) string. The value is returned as a canonical UUID 36-character string.

Example:

```sql
> SELECT uuid();
 46707d92-02f4-4817-8116-a4c3b23e6266
```

>[!NOTE]
>
>Function is non-deterministic. 

### Data evaluation {#data-evaluation}

#### coalesce

`coalesce(expr1, expr2, ...)`: Returns the first non-null argument if exists. Otherwise, null.

Example:

```sql
> SELECT coalesce(NULL, 1, NULL);
 1
```

#### collect_list

`collect_list(expr)`: Collects and returns a list of non-unique elements.

#### collect_set

`collect_set(expr)`: Collects and returns a set of unique elements.

#### concat

`concat(col1, col2, ..., colN)`: Returns the concatenation of col1, col2, ..., colN.

Examples:

```sql
> SELECT concat('Spark', 'SQL');
 SparkSQL
> SELECT concat(array(1, 2, 3), array(4, 5), array(6));
 [1,2,3,4,5,6]
```

>[!NOTE]
>
>`concat` logic for arrays is available since 2.4.0. 

#### concat_ws

`concat_ws(sep, [str | array(str)]+)`: Returns the concatenation of the strings separated by `sep`.

Example:

```sql
> SELECT concat_ws(' ', 'Spark', 'SQL');
  Spark SQL
```

#### count

`count(*)`: Returns the total number of retrieved rows, including rows containing null.

`count(expr[, expr...])`: Returns the number of rows for which the supplied expressions are all non-null.

`count(DISTINCT expr[, expr...])`: Returns the number of rows for which the supplied expressions are unique and non-null.

#### crc32

`crc32(expr)`: Returns a cyclic redundancy check value of the `expr` as a bigint.

Example:

```sql
> SELECT crc32('Spark');
 1557323817
```

#### decode

`decode(bin, charset)`: Decodes the first argument using the second argument character set.

Example:

```sql
> SELECT decode(encode('abc', 'utf-8'), 'utf-8');
 abc
```

#### elt

`elt(n, input1, input2, ...)`: Returns the `n`-th input, e.g., returns `input2` when `n` is 2.

Example:

```sql
> SELECT elt(1, 'scala', 'java');
 scala
```

#### encode

`encode(str, charset)`: Encodes the first argument using the second argument character set.

Example:

```sql
> SELECT encode('abc', 'utf-8');
 abc
```

#### first

`first(expr[, isIgnoreNull])`: Returns the first value of `expr` for a group of rows. If `isIgnoreNull` is true, returns only non-null values.

#### first_value

`first_value(expr[, isIgnoreNull])`: Returns the first value of `expr` for a group of rows. If `isIgnoreNull` is true, returns only non-null values.

#### get_json_object

`get_json_object(json_txt, path)`: Extracts a json object from `path`.

Example:

```sql
> SELECT get_json_object('{"a":"b"}', '$.a');
 b
```

#### grouping

<!-- was blank -->

#### grouping_id

<!-- was blank -->

#### instr

`instr(str, substr)`: Returns the (1-based) index of the first occurrence of `substr` in `str`.

Example:

```sql
> SELECT instr('SparkSQL', 'SQL');
 6
```

#### json_tuple

`json_tuple(jsonStr, p1, p2, ..., pn)`: Returns a tuple like the function `get_json_object`, but it takes multiple names. All the input parameters and output column types are string.

Example:

```sql
> SELECT json_tuple('{"a":1, "b":2}', 'a', 'b');
 1  2
```

#### lag

`lag(input[, offset[, default]])`: Returns the value of `input` at the `offset`th row before the current row in the window. The default value of `offset` is 1 and the default value of `default` is null. If the value of `input` at the `offset`th row is null, null is returned. If there is no such offset row (for example, when the offset is 1, the first row of the window does not have any previous row), and `default` is returned.

#### last

`last(expr[, isIgnoreNull])`: Returns the last value of `expr` for a group of rows. If `isIgnoreNull` is true, returns only non-null values.

#### last_value

`last_value(expr[, isIgnoreNull])`: Returns the last value of `expr` for a group of rows. If `isIgnoreNull` is true, returns only non-null values.

#### lead

`lead(input[, offset[, default]])`: Returns the value of `input` at the `offset`th row after the current row in the window. The default value of `offset` is 1 and the default value of `default` is null. If the value of `input` at the `offset`th row is null, null is returned. If there is no such an offset row (e.g., when the offset is 1, the last row of the window does not have any subsequent row), and `default` is returned.


#### left

`left(str, len)`: Returns the leftmost `len` (`len` can be string type) characters from the string `str`. If `len` is less than or equal to 0 the result is an empty string.

Example:

```sql
> SELECT left('Spark SQL', 3);
 Spa
```

#### length

`length(expr)`: Returns the character length of string data or number of bytes of binary data. The length of string data includes the trailing spaces. The length of binary data includes binary zeros.

Examples:

```sql
> SELECT length('Spark SQL ');
 10
> SELECT CHAR_LENGTH('Spark SQL ');
 10
> SELECT CHARACTER_LENGTH('Spark SQL ');
 10
``` 

#### locate

`locate(substr, str[, pos])`: Returns the position of the first occurrence of `substr` in `str` after position `pos`. The given `pos` and return value are 1-based.

Examples:

```sql
> SELECT locate('bar', 'foobarbar');
 4
> SELECT locate('bar', 'foobarbar', 5);
 7
> SELECT POSITION('bar' IN 'foobarbar');
 4
```

#### map_concat

`map_concat(map, ...)`: Returns the union of all the given maps.

Example:

```sql
> SELECT map_concat(map(1, 'a', 2, 'b'), map(2, 'c', 3, 'd'));
 {1:"a",2:"c",3:"d"}
```

Since: 2.4.0

#### map_keys

`map_keys(map)`: Returns an unordered array containing the keys of the map.

Example:

```sql
> SELECT map_keys(map(1, 'a', 2, 'b'));
 [1,2]
```

#### map_values

`map_values(map)`: Returns an unordered array containing the values of the map.

Example:

```sql
> SELECT map_values(map(1, 'a', 2, 'b'));
 ["a","b"]
```

#### ntile

`ntile(n)`: Divides the rows for each window partition into `n` buckets ranging from 1 to at most `n`.

#### nullif

`nullif(expr1, expr2)`: Returns null if `expr1` equals to `expr2`, or `expr1` otherwise.

Example:

```sql
> SELECT nullif(2, 2);
 NULL
```

#### nvl

`nvl(expr1, expr2)`: Returns `expr2` if `expr1` is null, or `expr1` otherwise.

Example:

```sql
> SELECT nvl(NULL, array('2'));
 ["2"]
```

#### nvl2

`nvl2(expr1, expr2, expr3)`: Returns `expr2` if `expr1` is not null, or `expr3` otherwise.

Example:

```sql
> SELECT nvl2(NULL, 2, 1);
 1
```

#### parse_url

`parse_url(url, partToExtract[, key])`: Extracts a part from a URL.

Examples:

```sql
> SELECT parse_url('http://spark.apache.org/path?query=1', 'HOST')
 spark.apache.org
> SELECT parse_url('http://spark.apache.org/path?query=1', 'QUERY')
 query=1
> SELECT parse_url('http://spark.apache.org/path?query=1', 'QUERY', 'query')
 1
```

#### position

`position(substr, str[, pos])`: Returns the position of the first occurrence of `substr` in `str` after position `pos`. The given `pos` and return value are 1-based.

Examples:

```sql
> SELECT position('bar', 'foobarbar');
 4
> SELECT position('bar', 'foobarbar', 5);
 7
> SELECT POSITION('bar' IN 'foobarbar');
 4
```

#### rank

`rank()`: Computes the rank of a value in a group of values. The result is one plus the number of rows preceding or equal to the current row in the ordering of the partition. The values produce gaps in the sequence.

#### regexp_extract

`regexp_extract(str, regexp[, idx])`: Extracts a group that matches `regexp`.

Example:

```sql
> SELECT regexp_extract('100-200', '(\\d+)-(\\d+)', 1);
 100
```

#### regex_replace

`regexp_replace(str, regexp, rep)`: Replaces all substrings of `str` that match `regexp` with `rep`.

Example:

```sql
> SELECT regexp_replace('100-200', '(\\d+)', 'num');
 num-num
```

#### repeat

`repeat(str, n)`: Returns the string which repeats the given string value n times.

Example:

```sql
> SELECT repeat('123', 2);
 123123
```

#### replace

`replace(str, search[, replace])`: Replaces all occurrences of `search` with `replace`.

Arguments:
- `str`: A string expression
- `search`: A string expression. If `search` is not found in `str`, `str` is returned unchanged.
- `replace`: A string expression. If `replace` is not specified or is an empty string, nothing replaces the string that is removed from `str`.

Example:

```sql
> SELECT replace('ABCabc', 'abc', 'DEF');
 ABCDEF
```

#### rollup

<!-- was blank -->

#### row_number

`row_number()`: Assigns a unique, sequential number to each row, starting with one, according to the ordering of rows within the window partition.

#### schema_of_json

`schema_of_json(json[, options])`: Returns schema in the DDL format of JSON string.

Example:

```sql
> SELECT schema_of_json('[{"col":0}]');
 array<struct<col:int>>
```

Since: 2.4.0

#### sentences

`sentences(str[, lang, country])`: Splits `str` into an array of array of words.

Example:

```sql
> SELECT sentences('Hi there! Good morning.');
 [["Hi","there"],["Good","morning"]]
```

#### sequence

`sequence(start, stop, step)`: Generates an array of elements from start to stop (inclusive), incrementing by step. The type of the returned elements is the same as the type of argument expressions.

Supported types are: byte, short, integer, long, date, timestamp.

The `start` and `stop` expressions must resolve to the same type. If `start` and `stop` expressions resolve to the 'date' or 'timestamp' type, then the `step` expression must resolve to the 'interval' type; otherwise, it resolves to the same type as the `start` and `stop` expressions.

Arguments:
- `start`: An expression. The start of the range.
- `stop`: An expression. The end the range (inclusive).
- `step`: An optional expression. The step of the range. By default `step` is '1' if `start` is less than or equal to `stop`, otherwise '-1'. For the temporal sequences it's '1' day and '-1' day respectively. If `start` is greater than `stop`, the `step` must be negative, and vice versa.

Examples:

```sql
> SELECT sequence(1, 5);
 [1,2,3,4,5]
> SELECT sequence(5, 1);
 [5,4,3,2,1]
> SELECT sequence(to_date('2018-01-01'), to_date('2018-03-01'), interval '1' month);
 [2018-01-01,2018-02-01,2018-03-01]
```

Since: 2.4.0

#### shiftleft

`shiftleft(base, expr)`: Bitwise left shift.

Example:

```sql
> SELECT shiftleft(2, 1);
 4
```

#### shiftright

`shiftright(base, expr)`: Bitwise (signed) right shift.

Example:

```sql
> SELECT shiftright(4, 1);
 2
```

#### shiftrightunsigned

`shiftrightunsigned(base, expr)`: Bitwise unsigned right shift.

Example:

```sql
> SELECT shiftrightunsigned(4, 1);
 2
```

#### size

`size(expr)`: Returns the size of an array or a map. The function returns -1 if its input is null and `spark.sql.legacy.sizeOfNull` is set to true. If `spark.sql.legacy.sizeOfNull` is set to false, the function returns null for null input. By default, the `spark.sql.legacy.sizeOfNull` parameter is set to true.

Examples:

```sql
> SELECT size(array('b', 'd', 'c', 'a'));
 4
> SELECT size(map('a', 1, 'b', 2));
 2
> SELECT size(NULL);
 -1
```

#### space

`space(n)`: Returns a string consisting of `n` spaces.

Example:

```sql
> SELECT concat(space(2), '1');
   1
```

#### split

`split(str, regex)`: Splits `str` around occurrences that match `regex`.

Example:

```sql
> SELECT split('oneAtwoBthreeC', '[ABC]');
 ["one","two","three",""]
```

#### substring_index

`substring_index(str, delim, count)`: Returns the substring from `str` before `count` occurrences of the delimiter `delim`. If `count` is positive, everything to the left of the final delimiter (counting from the left) is returned. If `count` is negative, everything to the right of the final delimiter (counting from the right) is returned. The function `substring_index` performs a case-sensitive match when searching for `delim`.

Example:

```sql
> SELECT substring_index('www.apache.org', '.', 2);
 www.apache
```

#### window

<!-- was blank -->

#### xpath

`xpath(xml, xpath)`: Returns a string array of values within the nodes of xml that match the XPath expression.

Example:

```sql
> SELECT xpath('<a><b>b1</b><b>b2</b><b>b3</b><c>c1</c><c>c2</c></a>','a/b/text()');
 ['b1','b2','b3']
```

#### xpath_double

`xpath_double(xml, xpath)`: Returns a double value, the value zero if no match is found, or NaN if a match is found but the value is non-numeric.

Example:

```sql
> SELECT xpath_double('<a><b>1</b><b>2</b></a>', 'sum(a/b)');
 3.0
```

#### xpath_float

`xpath_float(xml, xpath)`: Returns a float value, the value zero if no match is found, or NaN if a match is found but the value is non-numeric.

Example:

```sql
> SELECT xpath_float('<a><b>1</b><b>2</b></a>', 'sum(a/b)');
 3.0
```

#### xpath_int

`xpath_int(xml, xpath)`: Returns an integer value, or the value zero if no match is found, or a match is found but the value is non-numeric.

Example:

```sql
> SELECT xpath_int('<a><b>1</b><b>2</b></a>', 'sum(a/b)');
 3
```

#### xpath_long

`xpath_long(xml, xpath)`: Returns a long integer value, or the value zero if no match is found, or a match is found but the value is non-numeric.

Example:

```sql
> SELECT xpath_long('<a><b>1</b><b>2</b></a>', 'sum(a/b)');
 3
```

#### xpath_number

`xpath_number(xml, xpath)`: Returns a double value, the value zero if no match is found, or NaN if a match is found but the value is non-numeric.

Example:

```sql
> SELECT xpath_number('<a><b>1</b><b>2</b></a>', 'sum(a/b)');
 3.0
```

#### xpath_short

`xpath_short(xml, xpath)`: Returns a short integer value, or the value zero if no match is found, or a match is found but the value is non-numeric.

Example:

```sql
> SELECT xpath_short('<a><b>1</b><b>2</b></a>', 'sum(a/b)');
 3
```

#### xpath_string

`xpath_string(xml, xpath)`: Returns the text contents of the first xml node that matches the XPath expression.

Example:

```sql
> SELECT xpath_string('<a><b>b</b><c>cc</c></a>','a/c');
 cc
```

### Current information {#current-information}

#### current_database

`current_database()`: Returns the current database.

Example:

```sql
> SELECT current_database();
 default
```

#### current_date

`current_date()`: Returns the current date at the start of query evaluation.

Since: 1.5.0

#### current_timestamp

`current_timestamp()`: Returns the current timestamp at the start of query evaluation.

Since: 1.5.0

#### now

`now()`: Returns the current timestamp at the start of query evaluation.

Since: 1.5.0

### Higher order functions {#higher-order}

#### transform

`transform(array, lambdaExpression): array`

Transform elements in an array using the function.

If there are two arguments for the lambda function, the second argument means the index of the element.

Example:

```sql
> SELECT transform(array(1, 2, 3), x -> x + 1);
  [2,3,4]
> SELECT transform(array(1, 2, 3), (x, i) -> x + i);
  [1,3,5]
```


#### exists

`exists(array, lambdaExpression returning Boolean): Boolean`

Test whether a predicate holds for one or more elements in the array.

Example:

```sql
> SELECT exists(array(1, 2, 3), x -> x % 2 == 0);
  true
```

#### filter

`filter(array, lambdaExpression returning Boolean): array`

Filter the input array using the given predicate.

Example:

```sql
> SELECT filter(array(1, 2, 3), x -> x % 2 == 1);
 [1,3]
```


#### aggregate

`aggregate(array, <initial accumulator value>, lambdaExpression to accumulate the value): array`

Apply a binary operator to an initial state and all elements in the array, and reduces this to a single state. The final state is converted into the final result by applying a finish function.

Example:

```sql
> SELECT aggregate(array(1, 2, 3), 0, (acc, x) -> acc + x);
  6
> SELECT aggregate(array(1, 2, 3), 0, (acc, x) -> acc + x, acc -> acc * 10);
  60
```