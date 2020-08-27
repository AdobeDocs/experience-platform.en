---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Spark SQL functions
topic: spark sql functions
---

# [!DNL Spark] SQL functions

The [!DNL Spark] SQL helpers provide built-in [!DNL Spark] SQL functions to extend SQL functionality.

Reference: [Spark SQL function documentation](https://spark.apache.org/docs/2.4.0/api/sql/index.html)

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

### Math and statistical operators and functions {#math}

#### Modulo

`expr1 % expr2`: Returns the remainder after `expr1`/`expr2`.

Examples:

```sql
> SELECT 2 % 1.8;
 0.2
> SELECT MOD(2, 1.8);
 0.2
```

#### Multiply

`expr1 * expr2`: Returns `expr1`*`expr2`.

Example:

```sql
> SELECT 2 * 3;
 6
```

#### Add

`expr1 + expr2`: Returns `expr1`+`expr2`.

Example:

```sql
> SELECT 1 + 2;
 3
```

#### Subtract 

`expr1 - expr2`: Returns `expr1`-`expr2`.

Example:

```sql
> SELECT 2 - 1;
 1
```

#### Divide

`expr1 / expr2`: Returns `expr1`/`expr2`. It always performs floating point division.

Examples: 

```sql
> SELECT 3 / 2;
 1.5
> SELECT 2L / 2L;
 1.0
```

#### abs

`abs(expr)`: Returns the absolute value of the numeric value. 

Example:

```sql
> SELECT abs(-1);
  1
```

#### acos

`acos(expr)`: Returns the inverse cosine (also known as arc cosine) of `expr`, as if computed by `java.lang.Math.acos`.

Examples:

```sql
> SELECT acos(1);
 0.0
> SELECT acos(2);
 NaN
```

#### approx_percentile

`approx_percentile(col, percentage [, accuracy])`: Returns the approximate percentile value of numeric column `col` at the given percentage. The value of percentage must be between 0.0 and 1.0. The `accuracy` parameter (default: 10000) is a positive numeric literal which controls approximation accuracy at the cost of memory. Higher value of `accuracy` yields better accuracy, `1.0/accuracy` is the relative error of the approximation. When `percentage` is an array, each value of the percentage array must be between 0.0 and 1.0. In this case, the approximate percentile array of column `col` at the given percentage array is returned.

Examples:

```sql
> SELECT approx_percentile(10.0, array(0.5, 0.4, 0.1), 100);
 [10.0,10.0,10.0]
> SELECT approx_percentile(10.0, 0.5, 100);
 10.0
```

#### asin

`asin(expr)`: Returns the inverse sine (also known as arc sine), the arc sine of `expr`, as if computed by `java.lang.Math.asin`.

Examples:

```sql
> SELECT asin(0);
 0.0
> SELECT asin(2);
 NaN
```

#### atan

`atan(expr)`: Returns the inverse tangent (also known as arc tangent) of `expr`, as if computed by `java.lang.Math.atan`

Example:

```sql
> SELECT atan(0);
 0.0
```

#### atan2

`atan2(exprY, exprX)`: Returns the angle in radians between the positive x-axis of a plane and the point given by the coordinates (`exprX`, `exprY`), as if computed by `java.lang.Math.atan2`.

Arguments:

`exprY`: Coordinate on y-axis
`exprX`: Coordinate on x-axis

Example:

```sql
> SELECT atan2(0, 0);
 0.0
```

#### avg

`avg(expr)`: Returns the mean calculated from values of a group.

#### cardinality

`cardinality(expr)`: Returns the size of an array or a map. The function returns -1 if its input is null and `spark.sql.legacy.sizeOfNull` is set to true (default). If `spark.sql.legacy.sizeOfNull` is set to false, the function returns null for null input.

Examples:

```sql
> SELECT cardinality(array('b', 'd', 'c', 'a'));
 4
> SELECT cardinality(map('a', 1, 'b', 2));
 2
> SELECT cardinality(NULL);
 -1
```

#### cbrt

`cbrt(expr)`: Returns the cube root of `expr`.

Example: 

```sql
> Select cbrt(27.0);
 3.0
```

#### ceil

`ceil(expr)`: Returns the smallest integer not smaller than `expr`.

Examples:

```sql
> SELECT ceil(-0.1);
 0
> SELECT ceil(5);
 5
```

#### ceiling

`ceiling(expr)`: Returns the smallest integer not smaller than `expr`.

Examples:

```sql
> SELECT ceiling(-0.1);
 0
> SELECT ceiling(5);
 5
```

#### conv

`conv(num, from_base, to_base)`: Convert `num` from `from_base` to `to_base`

Examples:

```sql
> SELECT conv('100', 2, 10);
 4
> SELECT conv(-10, 16, -10);
 -16
```

#### corr

`corr(expr1, expr2)`: Returns Pearson coefficient of correlation between a set of number pairs.

#### cos

`cos(expr)`: Returns the cosine of `expr`, as if computed by `java.lang.Math.cos`.

Example:

```sql
> SELECT cos(0);
 1.0
```

#### cosh

`cosh(expr)`: Returns the hyperbolic cosine of `expr`, as if computed by `java.lang.Math.cosh`.

Arguments:
- `expr`: Hyperbolic angle

Example:

```
> SELECT cosh(0);
 1.0
```

#### cot 

`cot(expr)`: Returns the cotangent of `expr`, as if computed by `1/java.lang.Math.cot`.

Arguments:
- `expr`: Angle in radians

Example:

```sql
> SELECT cot(1);
 0.6420926159343306
```

#### dense_rank

`dense_rank()`: Computes the rank of a value in a group of values. The result is one plus the previously assigned rank value. Unlike the function `rank`, `dense_rank` does not produce gaps in the ranking sequence.

#### e

`e()`: Returns Euler's number, e.

Example:

```sql
> SELECT e();
 2.718281828459045
```

#### exp

`exp(expr)`: Returns e to the power of `expr`.

Example:

```sql
> SELECT exp(0);
 1.0
```

#### expml

`expm1(expr)`: Returns exp(`expr`) - 1.

Example:

```sql
> SELECT expm1(0);
 0.0
```

#### factorial

`factorial(expr)`: Returns the factorial of `expr`. `expr` is [0..20]. Otherwise, null.

Example:

```
> SELECT factorial(5);
 120
```

#### floor

`floor(expr)`: Returns the largest integer not greater than `expr`.

Examples:

```sql
> SELECT floor(-0.1);
 -1
> SELECT floor(5);
 5
```

#### greatest

`greatest(expr, ...)`: Returns the greatest value of all parameters, skipping null values.

Example:

```sql
> SELECT greatest(10, 9, 2, 4, 3);
 10
```

#### hypot

`hypot(expr1, expr2)`: Returns sqrt(`expr1`<sup>2</sup> + `expr2`<sup>2</sup>).

Example:

```sql
> SELECT hypot(3, 4);
 5.0
```

#### kurtosis

`kurtosis(expr)`: Returns the kurtosis value calculated from values of a group.


#### least

`least(expr, ...)`: Returns the least value of all parameters, skipping null values.

Example:

```sql
> SELECT least(10, 9, 2, 4, 3);
 2
```

#### levenshtein

`levenshtein(str1, str2)`: Returns the Levenshtein distance between the two given strings.

Examples:

```sql
> SELECT levenshtein('kitten', 'sitting');
 3
```

#### ln

`ln(expr)`: Returns the natural logarithm (base e) of `expr`.

Example:

```sql
> SELECT ln(1);
 0.0
```

#### log

`log(base, expr)`: Returns the logarithm of `expr` with `base`.

Example:

```sql
> SELECT log(10, 100);
 2.0
```

#### log10

`log10(expr)`: Returns the logarithm of `expr` with base 10.

Example:

```sql
> SELECT log10(10);
 1.0
```

#### log1p

`log1p(expr)`: Returns `log(1 + expr)`.

Example:

```sql
> SELECT log1p(0);
 0.0
```

#### log2

`log2(expr)`: Returns the logarithm of `expr` with base 2.

Example:

```sql
> SELECT log2(2);
 1.0
```

#### max

`max(expr)`: Returns the maximum value of `expr`.

#### mean

`mean(expr)`: Returns the mean calculated from values of a group.

#### min 

`min(expr)`: Returns the minimum value of `expr`.

#### monotonically_increasing_id

`monotonically_increasing_id()`: Returns monotonically increasing 64-bit integers. The generated ID is guaranteed to be monotonically increasing and unique, but not consecutive. The current implementation puts the partition ID in the upper 31 bits, and the lower 33 bits represent the record number within each partition. The assumption is that the data frame has less than 1 billion partitions, and each partition has less than 8 billion records. The function is non-deterministic because its result depends on partition IDs.

#### negative

`negative(expr)`: Returns the negated value of `expr`.

Example:

```sql
> SELECT negative(1);
 -1
```

#### percent_rank

`percent_rank()`: Computes the percentage ranking of a value in a group of values.

#### percentile

`percentile(col, percentage [, frequency])`: Returns the exact percentile value of numeric column `col` at the given percentage. The value of `percentage` must be between 0.0 and 1.0. The value of `frequency` should be positive integral.

`percentile(col, array(percentage1 [, percentage2]...) [, frequency])`: Returns the exact percentile value array of numeric column `col` at the given percentages. Each value of the percentage array must be between 0.0 and 1.0. The value of `frequency` should be positive integral.

#### percentile_approx

`percentile_approx(col, percentage [, accuracy])`: Returns the approximate percentile value of numeric column `col` at the given percentage. The value of `percentage` must be between 0.0 and 1.0. The `accuracy` parameter (default: 10000) is a positive numeric literal which controls approximation accuracy at the cost of memory. Higher value of `accuracy` yields better accuracy, `1.0/accuracy` is the relative error of the approximation. When `percentage` is an array, each value of the percentage array must be between 0.0 and 1.0. In this case, returns the approximate percentile array of column `col` at the given percentage array.

Examples:

```sql
> SELECT percentile_approx(10.0, array(0.5, 0.4, 0.1), 100);
 [10.0,10.0,10.0]
> SELECT percentile_approx(10.0, 0.5, 100);
 10.0
```

#### pi

`pi()`: Returns pi.

Example:

```sql
> SELECT pi();
 3.141592653589793
```

#### pmod

`pmod(expr1, expr2)`: Returns the positive value of `expr1` mod `expr2`.

Examples:

```sql
> SELECT pmod(10, 3);
 1
> SELECT pmod(-10, 3);
 2
```

#### positive

`positive(expr)`: Returns the positive value of `expr`

#### pow

`pow(expr1, expr2)`: Raises `expr1` to the power of `expr2`.

Example:

```sql
> SELECT pow(2, 3);
 8.0
```

#### power 

`power(expr1, expr2)`: Raises `expr1` to the power of `expr2`.

Examples:

```sql
> SELECT power(2, 3);
 8.0
```

#### radians

`radians(expr)`: Converts degrees to radians.

Arguments:

- `expr`: Angle in degrees

Example:

```sql
> SELECT radians(180);
 3.141592653589793
```

#### rand

`rand([seed])`: Returns a random value with independent and identically distributed (i.i.d.) uniformly distributed values in (0, 1).

Examples:

```sql
> SELECT rand();
 0.9629742951434543
> SELECT rand(0);
 0.8446490682263027
> SELECT rand(null);
 0.8446490682263027
```

>[!NOTE]
>
>This function is non-deterministic in general case. 

#### randn

`randn([seed])`: Returns a random value with independent and identically distributed (i.i.d.) values drawn from the standard normal distribution.

Examples:

```sql
> SELECT randn();
 -0.3254147983080288
> SELECT randn(0);
 1.1164209726833079
> SELECT randn(null);
 1.1164209726833079
```

>[!NOTE]
>
>This function is non-deterministic in general case. 

#### rint

`rint(expr)`: Returns the double value that is closest in value to the argument and is equal to a mathematical integer.

Examples:

```sql
> SELECT rint(12.3456);
 12.0
```

#### round

`round(expr, d)`: Returns `expr` rounded to `d` decimal places using the HALF_UP rounding mode.

Example:

```sql
> SELECT round(2.5, 0);
 3.0
``` 

#### sign

`sign(expr)`: Returns -1.0, 0.0 or 1.0 as `expr` is negative, 0 or positive.

Example:

```sql
> SELECT sign(40);
 1.0
```

#### signum

`signum(expr)`: Returns -1.0, 0.0 or 1.0 as `expr` is negative, 0, or positive.

Example:

```sql
> SELECT signum(40);
 1.0
```

#### sin

`sin(expr)`: Returns the sine of `expr`, as if computed by `java.lang.Math.sin`.

Arguments:

- `expr`: Angle in radians

Example:

```sql
> SELECT sin(0);
 0.0
```

#### sinh

`sinh(expr)`: Returns hyperbolic sine of `expr`, as if computed by `java.lang.Math.sinh`.

Arguments:

- `expr`: Hyperbolic angle

Example:

```sql
> SELECT sinh(0);
 0.0
```

#### sqrt

`sqrt(expr)`: Returns the square root of `expr`.

Example:

```sql
> SELECT sqrt(4);
 2.0
```

#### stddev

`stddev(expr)`: Returns the sample standard deviation calculated from values of a group.

#### stddev_pop

`sttdev_pop(expr)`: Returns the population standard deviation calculated from values of a group.

#### stddev_samp

`stddev_samp(expr)`: Returns the sample standard deviation calculated from values of a group.

#### sum

`sum(expr)`: Returns the sum calculated from values of a group.

#### tan

`tan(expr)`: Returns the tangent of `expr`, as if computed by `java.lang.Math.tan`.

Arguments:

- `expr`: Angle in radians

Example:

```sql
> SELECT tan(0);
 0.0
```

#### tanh

`tanh(expr)`: Returns the hyperbolic tangent of `expr`, as if computed by `java.lang.Math.tanh`.

Arguments:

- `expr`: Hyperbolic angle

Example:

```sql
> SELECT tanh(0);
 0.0
```

#### Var_pop

`var_pop(expr)`: Returns the population variance calculated from values of a group.

#### Var_samp

`var_samp(expr)`: Returns the sample variance calculated from values of a group.

#### variance

`variance(expr)`: Returns the sample variance calculated from values of a group.

### Logical operators {#logical-operators}

#### Logical not

`! expr`: Logical not.

#### Less than

`expr1 < expr2`: Returns true if `expr1` is less than `expr2`.

Arguments:

- `expr1, expr2`: The two expressions must be the same type or they can be casted to a common type, and must be a type that can be ordered. For example, map type is not orderable, so it is not supported. For complex types such as array/struct, the data types of fields must be orderable.

Examples:

```sql
> SELECT 1 < 2;
 true
> SELECT 1.1 < '1';
 false
> SELECT to_date('2009-07-30 04:17:52') < to_date('2009-07-30 04:17:52');
 false
> SELECT to_date('2009-07-30 04:17:52') < to_date('2009-08-01 04:17:52');
 true
> SELECT 1 < NULL;
 NULL
```

#### Less than or equal to

`expr1 <= expr2`: Returns true if `expr1` is less than or equal to `expr2`.

Arguments:

- `expr1, expr2`: The two expressions must be same type or can be casted to a common type, and must be a type that can be ordered. For example, map type is not orderable, so it is not supported. For complex types such array/struct, the data types of fields must be orderable.

Examples:

```sql
> SELECT 2 <= 2;
 true
> SELECT 1.0 <= '1';
 true
> SELECT to_date('2009-07-30 04:17:52') <= to_date('2009-07-30 04:17:52');
 true
> SELECT to_date('2009-07-30 04:17:52') <= to_date('2009-08-01 04:17:52');
 true
> SELECT 1 <= NULL;
 NULL
```

#### Equal to

`expr1 = expr2`: Returns true if `expr1` equals `expr2`, or false otherwise.

Arguments:

- `expr1, expr2`: The two expressions must be the same type or they can be casted to a common type, and must be a type that can be used in equality comparison. Map type is not supported. For complex types such as array/struct, the data types of fields must be orderable.

Examples:

```sql
> SELECT 2 = 2;
 true
> SELECT 1 = '1';
 true
> SELECT true = NULL;
 NULL
> SELECT NULL = NULL;
 NULL
```

#### Greater than

`expr1 > expr2`: Returns true if `expr1` is greater than `expr2`.

Arguments:

- `expr1, expr2`: The two expressions must be the same type or they can be casted to a common type, and must be a type that can be ordered. For example, map type is not orderable, so it is not supported. For complex types such as array/struct, the data types of fields must be orderable.

Examples:

```sql
> SELECT 2 > 1;
 true
> SELECT 2 > '1.1';
 true
> SELECT to_date('2009-07-30 04:17:52') > to_date('2009-07-30 04:17:52');
 false
> SELECT to_date('2009-07-30 04:17:52') > to_date('2009-08-01 04:17:52');
 false
> SELECT 1 > NULL;
 NULL
```

#### Greater than or equal to

`expr1 >= expr2`: Returns true if `expr1` is greater than or equal to `expr2`.

Arguments:

- `expr1, expr2`: The two expressions must be the same type or they can be casted to a common type, and must be a type that can be ordered. For example, map type is not orderable, so it is not supported. For complex types such as array/struct, the data types of fields must be orderable.

Examples:

```sql
> SELECT 2 >= 1;
 true
> SELECT 2.0 >= '2.1';
 false
> SELECT to_date('2009-07-30 04:17:52') >= to_date('2009-07-30 04:17:52');
 true
> SELECT to_date('2009-07-30 04:17:52') >= to_date('2009-08-01 04:17:52');
 false
> SELECT 1 >= NULL;
 NULL
```

#### Bitwise exclusive or

`expr1 ^ expr2`: Returns the result of bitwise exclusive OR of `expr1` and `expr2`.

Example:

```sql
> SELECT 3 ^ 5;
 2
```

#### and

`expr1 and expr2`: Logical AND.

#### arrays_overlap

`arrays_overlap(a1, a2)`: Returns true if a1 contains at least a non-null element present also in a2. If the arrays have no common element and they are both non-empty and either of them contains a null element, null is returned. Otherwise, false is returned.

Example:

```sql
> SELECT arrays_overlap(array(1, 2, 3), array(3, 4, 5));
 true
```

Since: 2.4.0

#### assert_true

`assert_true(expr)`: Throws an exception if `expr` is not true.

Example:

```sql
> SELECT assert_true(0 < 1);
 NULL
```

#### if

`if(expr1, expr2, expr3)`: If `expr1` evaluates to true, then returns `expr2`; otherwise returns `expr3`.

Example:

```sql
> SELECT if(1 < 2, 'a', 'b');
 a
```

#### ifnull

`ifnull(expr1, expr2)`: Returns `expr2` if `expr1` is null, or `expr1` otherwise.

Example:

```sql
> SELECT ifnull(NULL, array('2'));
 ["2"]
```

#### in

`expr1 in(expr2, expr3, ...)`: Returns true if `expr` equals to any valN.

Arguments:
- `expr1, expr2, expr3, ...`: The arguments must be same type.

Examples:

```sql
> SELECT 1 in(1, 2, 3);
 true
> SELECT 1 in(2, 3, 4);
 false
> SELECT named_struct('a', 1, 'b', 2) in(named_struct('a', 1, 'b', 1), named_struct('a', 1, 'b', 3));
 false
> SELECT named_struct('a', 1, 'b', 2) in(named_struct('a', 1, 'b', 2), named_struct('a', 1, 'b', 3));
 true
```

#### isnan

`isnan(expr)`: Returns true if `expr` is NaN, or false otherwise.

Example:

```sql
> SELECT isnan(cast('NaN' as double));
 true
```

#### isnotnull

`isnotnull(expr)`: Returns true if `expr` is not null, or false otherwise.

Examples:

```sql
> SELECT isnotnull(1);
 true
```

#### isnull

`isnull(expr)`: Returns true if `expr` is null, or false otherwise.

Example:

```sql
> SELECT isnull(1);
 false
```

#### nanvl

`nanvl(expr1, expr2)`: Returns `expr1` if it's not NaN, or `expr2` otherwise.

Example:

```sql
> SELECT nanvl(cast('NaN' as double), 123);
 123.0
``` 

#### not

`not expr`: Logical not.

#### or

`expr1 or expr2`: Logical or.

#### xpath_boolean

`xpath_boolean(xml, xpath)`: Returns true if the XPath expression evaluates to true, or if a matching node is found.

Example:

```sql
> SELECT xpath_boolean('<a><b>1</b></a>','a/b');
 true
```

### Date/time functions {#datetime-functions}

#### add_months

`add_months(start_date, num_months)`: Returns the date that is `num_months` after `start_date`.

Example:

```sql
> SELECT add_months('2016-08-31', 1);
 2016-09-30
```

Since: 1.5.0

#### date_add

`date_add(start_date, num_days)`: Returns the date that is `num_days` after `start_date`.

Example:

```sql
> SELECT date_add('2016-07-30', 1);
 2016-07-31
```

Since: 1.5.0

#### date_format

`date_format(timestamp, fmt)`: Converts `timestamp` to a value of string in the format specified by the date format `fmt`.

Example:

```sql
> SELECT date_format('2016-04-08', 'y');
 2016
```

Since: 1.5.0

#### date_sub

`date_sub(start_date, num_days)`: Returns the date that is `num_days` before `start_date`.

Example:

```sql
> SELECT date_sub('2016-07-30', 1);
 2016-07-29
```

Since: 1.5.0

#### date_trunc

`date_trunc(fmt, ts)`: Returns timestamp ts truncated to the unit specified by the format model `fmt`. `fmt` should be one of ["YEAR", "YYYY", "YY", "MON", "MONTH", "MM", "DAY", "DD", "HOUR", "MINUTE", "SECOND", "WEEK", "QUARTER"]

Examples:

```sql
> SELECT date_trunc('YEAR', '2015-03-05T09:32:05.359');
 2015-01-01 00:00:00
> SELECT date_trunc('MM', '2015-03-05T09:32:05.359');
 2015-03-01 00:00:00
> SELECT date_trunc('DD', '2015-03-05T09:32:05.359');
 2015-03-05 00:00:00
> SELECT date_trunc('HOUR', '2015-03-05T09:32:05.359');
 2015-03-05 09:00:00
```

Since: 2.3.0

#### datediff

`datediff(endDate, startDate)`: Returns the number of days from `startDate` to `endDate`.

Examples:

```sql
> SELECT datediff('2009-07-31', '2009-07-30');
 1

> SELECT datediff('2009-07-30', '2009-07-31');
 -1
```

Since: 1.5.0

#### day

`day(date)`: Returns the day of month of the date/timestamp.

Example:

```sql
> SELECT day('2009-07-30');
 30
```

Since: 1.5.0

#### dayofmonth

`dayofmonth(date)`: Returns the day of month of the date/timestamp.

Example:

```sql
> SELECT dayofmonth('2009-07-30');
 30
```

Since: 1.5.0

#### dayofweek

`dayofweek(date)`: Returns the day of the week for date/timestamp (1 = Sunday, 2 = Monday, ..., 7 = Saturday).

Example:

```sql
> SELECT dayofweek('2009-07-30');
 5
```

Since: 2.3.0

#### dayofyear

`dayofyear(date)`: Returns the day of year of the date/timestamp.

Example:

```sql
> SELECT dayofyear('2016-04-09');
 100
```

Since: 1.5.0

#### from_unixtime

`from_unixtime(unix_time, format)`: Returns `unix_time` in the specified `format`.

Example:

```sql
> SELECT from_unixtime(0, 'yyyy-MM-dd HH:mm:ss');
 1970-01-01 00:00:00
```

Since: 1.5.0

#### from_utc_timestamp

`from_utc_timestamp(timestamp, timezone)`: Interprets a timestamp like '2017-07-14 02:40:00.0' as a time in UTC, and renders that time as a timestamp in the given time zone. For example, 'GMT+1' would yield '2017-07-14 03:40:00.0'.

Example:

```sql
> SELECT from_utc_timestamp('2016-08-31', 'Asia/Seoul');
 2016-08-31 09:00:00
```

Since: 1.5.0

#### hour

`hour(timestamp)`: Returns the hour component of the string/timestamp.

Example:

```sql
> SELECT hour('2009-07-30 12:58:59');
 12
```

Since: 1.5.0

#### last_day

`last_day(date):` Returns the last day of the month which the date belongs to.

Example:

```sql
> SELECT last_day('2009-01-12');
 2009-01-31
```

Since: 1.5.0

#### minute

`minute(timestamp)`: Returns the minute component of the string/timestamp.

Example:

```sql
> SELECT minute('2009-07-30 12:58:59');
 58
```

Since: 1.5.0

#### month

`month(date)` Returns the month component of the date/timestamp.

Example:

```sql
> SELECT month('2016-07-30');
 7
```

Since: 1.5.0

#### months_between

`months_between(timestamp1, timestamp2[, roundOff])`: If `timestamp1` is later than `timestamp2`, then the result is positive. If `timestamp1` and `timestamp2` are on the same day of month, or both are the last day of month, time of day will be ignored. Otherwise, the difference is calculated based on 31 days per month, and rounded to 8 digits unless `roundOff=false`.

Examples:

```sql
> SELECT months_between('1997-02-28 10:30:00', '1996-10-30');
 3.94959677
> SELECT months_between('1997-02-28 10:30:00', '1996-10-30', false);
 3.9495967741935485
```

Since: 1.5.0

#### next_day

`next_day(start_date, day_of_week)`: Returns the first date which is later than `start_date` and named as indicated.

Example:

```sql
> SELECT next_day('2015-01-14', 'TU');
 2015-01-20
```

Since: 1.5.0

#### quarter

`quarter(date)`: Returns the quarter of the year for date, in the range 1 to 4.

Example:

```sql
> SELECT quarter('2016-08-31');
 3
```

Since: 1.5.0

#### second

`second(timestamp)`: Returns the second component of the string/timestamp.

Example:

```sql
> SELECT second('2009-07-30 12:58:59');
 59
```

Since: 1.5.0

#### to_date

`to_date(date_str[, fmt])`: Parses the `date_str` expression with the `fmt` expression to a date. Returns null with invalid input. By default, it follows casting rules to a date if the `fmt` is omitted.

Examples:

```sql
> SELECT to_date('2009-07-30 04:17:52');
 2009-07-30
> SELECT to_date('2016-12-31', 'yyyy-MM-dd');
 2016-12-31
```

Since: 1.5.0

#### to_timestamp

`to_timestamp(timestamp[, fmt])`: Parses the `timestamp` expression with the `fmt` expression to a timestamp. Returns null with invalid input. By default, it follows casting rules to a timestamp if the `fmt` is omitted.

Examples:

```sql
> SELECT to_timestamp('2016-12-31 00:12:00');
 2016-12-31 00:12:00
> SELECT to_timestamp('2016-12-31', 'yyyy-MM-dd');
 2016-12-31 00:00:00
``` 

Since: 2.2.0

#### to_unix_timestamp

`to_unix_timestamp(expr[, pattern])`: Returns the UNIX timestamp of the given time.

Example:

```sql
> SELECT to_unix_timestamp('2016-04-08', 'yyyy-MM-dd');
 1460041200
```

Since: 1.6.0

#### to_utc_timestamp

`to_utc_timestamp(timestamp, timezone)`: Interprets a timestamp like '2017-07-14 02:40:00.0' as a time in the given time zone, and renders that time as a timestamp in UTC. For example, 'GMT+1' would yield '2017-07-14 01:40:00.0'.

Example:

```sql
> SELECT to_utc_timestamp('2016-08-31', 'Asia/Seoul');
 2016-08-30 15:00:00
```

Since: 1.5.0

#### trunc

`trunc(date, fmt)`: Returns date with the time portion of the day truncated to the unit specified by the format model `fmt`. `fmt` is one of ["year", "yyyy", "yy", "mon", "month", "mm"]

Examples:

```sql
> SELECT trunc('2009-02-12', 'MM');
 2009-02-01
> SELECT trunc('2015-10-27', 'YEAR');
 2015-01-01
```

Since: 1.5.0

#### unix_timestamp

`unix_timestamp([expr[, pattern]])`: Returns the UNIX timestamp of current or specified time.

Examples:

```sql
> SELECT unix_timestamp();
 1476884637
> SELECT unix_timestamp('2016-04-08', 'yyyy-MM-dd');
 1460041200
```

Since: 1.5.0

#### weekday

`weekday(date)`: Returns the day of the week for date/timestamp (0 = Monday, 1 = Tuesday, ..., 6 = Sunday).

Example:

```sql
> SELECT weekday('2009-07-30');
 3
```

Since: 2.4.0

#### week_of_year

`weekofyear(date)`: Returns the week of the year of the given date. A week is considered to start on a Monday and week 1 is the first week with >3 days.

Example:

```sql
> SELECT weekofyear('2008-02-20');
 8
```

Since: 1.5.0

#### when

`CASE WHEN expr1 THEN expr2 [WHEN expr3 THEN expr4]* [ELSE expr5] END`: When `expr1` = true, returns `expr2`; else when `expr3` = true, returns `expr4`; else returns `expr5`.

Arguments:

- `expr1`, `expr3`: The branch condition expressions should all be boolean type.
- `expr2`, `expr4`, `expr5`: The branch value expressions and else value expression should all be same type or coercible to a common type.

Examples:

```sql
> SELECT CASE WHEN 1 > 0 THEN 1 WHEN 2 > 0 THEN 2.0 ELSE 1.2 END;
 1
> SELECT CASE WHEN 1 < 0 THEN 1 WHEN 2 > 0 THEN 2.0 ELSE 1.2 END;
 2
> SELECT CASE WHEN 1 < 0 THEN 1 WHEN 2 < 0 THEN 2.0 END;
 NULL
```

#### year

`year(date)`: Returns the year component of the date/timestamp.

Example:

```sql
> SELECT year('2016-07-30');
 2016
```

Since: 1.5.0

### Aggregate functions {#aggregate-functions}

#### approx_count_distinct

`approx_count_distinct(expr[, relativeSD])`: Returns the estimated cardinality by HyperLogLog++. `relativeSD` defines the maximum estimation error allowed.

### Arrays {#arrays}

#### array

`array(expr, ...)`: Returns an array with the given elements.

Example:

```sql
> SELECT array(1, 2, 3);
 [1,2,3]
```

#### array_contains

`array_contains(array, value)`: Returns true if the array contains the value.

Example:

```sql
> SELECT array_contains(array(1, 2, 3), 2);
 true
```

#### array_distinct

`array_distinct(array)`: Removes duplicate values from the array.

Example:

```sql
> SELECT array_distinct(array(1, 2, 3, null, 3));
 [1,2,3,null]
```

Since: 2.4.0

#### array_except

`array_except(array1, array2)`: Returns an array of the elements in `array1` but not in `array2`, without duplicates.

Example:

```sql
> SELECT array_except(array(1, 2, 3), array(1, 3, 5));
 [2]
```

Since: 2.4.0

#### array_intersect

`array_intersect(array1, array2)`: Returns an array of the elements in the intersection of `array1` and `array2`, without duplicates.

Example:

```sql
> SELECT array_intersect(array(1, 2, 3), array(1, 3, 5));
 [1,3]
```

Since: 2.4.0

#### array_join

`array_join(array, delimiter[, nullReplacement])`: Concatenates the elements of the given array using the delimiter and an optional string to replace nulls. If no value is set for `nullReplacement`, any null value is filtered.

Examples:

```sql
> SELECT array_join(array('hello', 'world'), ' ');
 hello world
> SELECT array_join(array('hello', null ,'world'), ' ');
 hello world
> SELECT array_join(array('hello', null ,'world'), ' ', ',');
 hello , world
```

Since: 2.4.0

#### array_max

`array_max(array)`: Returns the maximum value in the array. Null elements are skipped.

Example:

```sql
> SELECT array_max(array(1, 20, null, 3));
 20
```

Since: 2.4.0

#### array_min

`array_min(array)`: Returns the minimum value in the array. Null elements are skipped.

Example:

```sql
> SELECT array_min(array(1, 20, null, 3));
 1
```

Since: 2.4.0

#### array_position

`array_position(array, element)`: Returns the (1-based) index of the first element of the array as long.

Example:

```sql
> SELECT array_position(array(3, 2, 1), 1);
 3
```

Since: 2.4.0

#### array_remove

`array_remove(array, element)`: Remove all elements that equal to element from array.

Example:

```sql
> SELECT array_remove(array(1, 2, 3, null, 3), 3);
 [1,2,null]
```

Since: 2.4.0

#### array_repeat

`array_repeat(element, count)`: Returns the array containing element count times.

Example:

```sql
> SELECT array_repeat('123', 2);
 ["123","123"]
```

Since: 2.4.0

#### array_sort

`array_sort(array)`: Sorts the input array in ascending order. The elements of the input array must be orderable. Null elements are placed at the end of the returned array.

Example:

```sql
> SELECT array_sort(array('b', 'd', null, 'c', 'a'));
 ["a","b","c","d",null]
```

Since: 2.4.0

#### array_union

`array_union(array1, array2)`: Returns an array of the elements in the union of `array1` and `array2`, without duplicates.

Example:

```sql
> SELECT array_union(array(1, 2, 3), array(1, 3, 5));
 [1,2,3,5]
```

Since: 2.4.0

#### array_zip

`arrays_zip(a1, a2, ...)`: Returns a merged array of structs in which the N-th struct contains all N-th values of input arrays.

Examples:

```sql
> SELECT arrays_zip(array(1, 2, 3), array(2, 3, 4));
 [{"0":1,"1":2},{"0":2,"1":3},{"0":3,"1":4}]
> SELECT arrays_zip(array(1, 2), array(2, 3), array(3, 4));
 [{"0":1,"1":2,"2":3},{"0":2,"1":3,"2":4}]
```

Since: 2.4.0

#### element_at

`element_at(array, index)`: Returns element of array at given (1-based) index. If `index < 0`, accesses elements from the last to the first. Returns NULL if the index exceeds the length of the array.

`element_at(map, key)`: Returns value for given key, or NULL if the key is not contained in the map

Examples:

```sql
> SELECT element_at(array(1, 2, 3), 2);
 2
> SELECT element_at(map(1, 'a', 2, 'b'), 2);
 b
```

Since: 2.4.0

#### explode

`explode(expr)`: Separates the elements of array `expr` into multiple rows, or the elements of map `expr` into multiple rows and columns.

Examples:

```sql
> SELECT explode(array(10, 20));
 10
 20
```

#### explode_outer

`explode_outer(expr)`: Separates the elements of array `expr` into multiple rows, or the elements of map `expr` into multiple rows and columns.

Example:

```sql
> SELECT explode_outer(array(10, 20));
 10
 20
```

#### find_in_set

`find_in_set(str, str_array)`: Returns the index (1-based) of the given string (`str`) in the comma-delimited list (`str_array`). Returns 0, if the string was not found or if the given string (`str`) contains a comma.

Example:

```sql
> SELECT find_in_set('ab','abc,b,ab,c,def');
 3
```

#### flatten

`flatten(arrayOfArrays)`: Transforms an array of arrays into a single array.

Example:

```sql
> SELECT flatten(array(array(1, 2), array(3, 4)));
 [1,2,3,4]
```

Since: 2.4.0

#### inline

`inline(expr)`: Explodes an array of structs into a table.

Example:

```sql
> SELECT inline(array(struct(1, 'a'), struct(2, 'b')));
 1  a
 2  b
```

#### inilne_outer

`inline_outer(expr)`: Explodes an array of structs into a table.

Example:

```sql
> SELECT inline_outer(array(struct(1, 'a'), struct(2, 'b')));
 1  a
 2  b
```

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
- `step`: An optional expression. The step of the range. By default `step` is 1 if `start` is less than or equal to `stop`, otherwise -1. For the temporal sequences it's 1 day and -1 day respectively. If `start` is greater than `stop`, the `step` must be negative, and vice versa.

Examples:

```sql
> SELECT sequence(1, 5);
 [1,2,3,4,5]
> SELECT sequence(5, 1);
 [5,4,3,2,1]
> SELECT sequence(to_date('2018-01-01'), to_date('2018-03-01'), interval 1 month);
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