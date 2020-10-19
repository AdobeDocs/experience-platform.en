---
keywords: Experience Platform;home;popular topics;map csv;map csv file;map csv file to xdm;map csv to xdm;ui guide;mapper;mapping;mapping fields;mapping functions;
solution: Experience Platform
title: Data Prep functions
topic: overview
description: This document introduces the mapping functions used with Data Prep.
---

# Data Prep functions

Data Prep functions can be used to compute and calculate values based on what is entered in source fields.

## Fields

A field name can be any legal identifier - an unlimited-length sequence of Unicode letters and digits, beginning with a letter, the dollar sign (`$`), or the underscore character (`_`). Variable names are also case sensitive.

If a field name does not follow this convention, the field name must be wrapped with `${}`. So, for example, if the field name is "First Name" or "First.Name", then the name must be wrapped like `${First Name}` or `${First.Name}` respectively.

Additionally, field names is **any** of the following reserved keywords, it must be wrapped with `${}`:

```console
new, mod, or, break, var, lt, for, false, while, eq, gt, div, not, null, continue, else, and, ne, true, le, if, ge, return
```

Data within sub-fields can be accessed by using the dot notation. For example, if there was a `name` object, to access the `firstName` field, use `name.firstName`.

## List of functions

The following tables list all supported mapping functions, including sample expressions and their resulting outputs.

### String functions

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| concat | Concatenates the given strings. | <ul><li>STRING: The strings that will be concatenated.</li></ul> | concat(STRING_1, STRING_2) | concat("Hi, ", "there", "!") | `"Hi, there!"` |
| explode | Splits the string based on a regex and returns an array of parts. Can optionally include regex to split the string. By default, the splitting resolves to ",". | <ul><li>STRING: **Required** The string that needs to be split.</li><li>REGEX: *Optional* The regular expression that can be used to split the string.</li></ul> | explode(STRING, REGEX) | explode("Hi, there!", " ") | `["Hi,", "there"]` |
| instr | Returns the location/index of a substring.| <ul><li>INPUT: **Required** The string that is being searched.</li><li>SUBSTRING: **Required** The substring that is being searched for within the string.</li><li>START_POSITION: *Optional* The location of where to start looking in the string.</li><li>OCCURRENCE: *Optional* The nth occurrence to look for from the start position. By default, it is 1. </li></ul> | instr(INPUT, SUBSTRING, START_POSITION, OCCURRENCE) | instr("adobe`<span>`.com", "com") | 6 |
| replacestr | Replaces the search string if present in original string. | <ul><li>INPUT: **Required** The input string.</li><li>TO_FIND: **Required** The string to look up within the input.</li><li>TO_REPLACE: **Required** The string that will replace the value within "TO_FIND".</li></ul> | replacestr(INPUT, TO_FIND, TO_REPLACE) | replacestr("This is a string re test", "re", "replace") | "This is a string replace test" |
| substr| Returns a substring of a given length. | <ul><li>INPUT: **Required** The input string.</li><li>START_INDEX: **Required** The index of the input string where the substring starts.</li><li>LENGTH: **Required** The length of the substring.</li></ul> | substr(INPUT, START_INDEX, LENGTH) | substr("This is a substring test", 7, 8) | " a subst" |
| lower /<br>lcase | Converts a string to lowercase. | <ul><li>INPUT: **Required** The string that will be converted to lowercase.</li></ul> | lower(INPUT) | lower("HeLLo")<br>lcase("HeLLo") | "hello" |
| upper /<br>ucase | Converts a string to uppercase. | <ul><li>INPUT: **Required** The string that will be converted to uppercase.</li></ul> | upper(INPUT) | upper("HeLLo")<br>ucase("HeLLo") | "HELLO" |
| split | Splits an input string on a separator. | <ul><li>INPUT: **Required** The input string that is going to be split.</li><li>SEPARATOR: **Required** The string that is used to split the input.</li></ul> | split(INPUT, SEPARATOR) | split("Hello world", " ") | `["Hello", "world"]` |
| join | Joins a list of objects using the separator. | <ul><li>SEPARATOR: **Required** The string that will be used to join the objects.</li><li>OBJECTS: **Required** An array of strings that will be joined.</li></ul> | `join(SEPARATOR, [OBJECTS])` | `join(" ", ["Hello", "world"])` | "Hello world" |
| lpad | Pads the left side of a string with the other given string. | <ul><li>INPUT: **Required** The string that is going to be padded out. This string can be null.</li><li>COUNT: **Required** The size of the string to be padded out.</li><li>PADDING: **Required** The string to pad the input with. If null or empty, it will be treated as a single space.</li></ul> | lpad(INPUT, COUNT, PADDING) | lpad("bat", 8, "yz") | "yzyzybat" | 
| rpad | Pads the right side of a string with the other given string. | <ul><li>INPUT: **Required** The string that is going to be padded out. This string can be null.</li><li>COUNT: **Required** The size of the string to be padded out.</li><li>PADDING: **Required** The string to pad the input with. If null or empty, it will be treated as a single space.</li></ul> | rpad(INPUT, COUNT, PADDING) | rpad("bat", 8, "yz") | "batyzyzy" | 
| left | Gets the first "n" characters of the given string. | <ul><li>STRING: **Required** The string you are getting the first "n" characters for.</li><li>COUNT: **Required**The "n" characters you want to get from the string.</li></ul> | left(STRING, COUNT) | left("abcde", 2) | "ab" |
| right | Gets the last "n" characters of the given string. | <ul><li>STRING: **Required** The string you are getting the last "n" characters for.</li><li>COUNT: **Required**The "n" characters you want to get from the string.</li></ul> | right(STRING, COUNT) | right("abcde", 2) | "de" |
| ltrim | Removes the whitespace from the beginning of the string. | <ul><li>STRING: **Required** The string you want to remove the whitespace from.</li></ul> | ltrim(STRING) | ltrim(" hello") | "hello" |
| rtrim | Removes the whitespace from the end of the string. | <ul><li>STRING: **Required** The string you want to remove the whitespace from.</li></ul> | rtrim(STRING) | rtrim("hello ") | "hello" |
| trim | Removes the whitespace from the beginning and the end of the string. | <ul><li>STRING: **Required** The string you want to remove the whitespace from.</li></ul> | trim(STRING) | trim(" hello ") | "hello" |
| equals | Compares two strings to confirm if they are equal. This function is case sensitive. | <ul><li>STRING1: **Required** The first string you want to compare.</li><li>STRING2: **Required** The second string you want to compare.</li></ul> | STRING1.equals(STRING2) | "string1".equals("STRING1) | false |
| equalsIgnoreCase | Compares two strings to confirm if they are equal. This function is **not** case sensitive. | <ul><li>STRING1: **Required** The first string you want to compare.</li><li>STRING2: **Required** The second string you want to compare.</li></ul> | STRING1.equalsIgnoreCase(STRING2) | "string1".equalsIgnoreCase("STRING1) | true |

### Hashing functions

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| sha1 | Takes an input and produces a hash value using Secure Hash Algorithm 1 (SHA-1). | <ul><li>INPUT: **Required** The plain text to be hashed.</li><li>CHARSET: *Optional* The name of the character set. Possible values include UTF-8, UTF-16, ISO-8859-1, and US-ASCII.</li></ul> | sha1(INPUT, CHARSET) | sha1("my text", "UTF-8") | c3599c11e47719df18a24​48690840c5dfcce3c80 |
| sha256 | Takes an input and produces a hash value using Secure Hash Algorithm 256 (SHA-256). | <ul><li>INPUT: **Required** The plain text to be hashed.</li><li>CHARSET: *Optional* The name of the character set. Possible values include UTF-8, UTF-16, ISO-8859-1, and US-ASCII.</li></ul> | sha256(INPUT, CHARSET) | sha256("my text", "UTF-8") | 7330d2b39ca35eaf4cb95fc846c21​ee6a39af698154a83a586ee270a0d372104 |
| sha512 | Takes an input and produces a hash value using Secure Hash Algorithm 512 (SHA-512). | <ul><li>INPUT: **Required** The plain text to be hashed.</li><li>CHARSET: *Optional* The name of the character set. Possible values include UTF-8, UTF-16, ISO-8859-1, and US-ASCII.</li></ul> | sha512(INPUT, CHARSET) | sha512("my text", "UTF-8") | a3d7e45a0d9be5fd4e4b9a3b8c9c2163c21ef​708bf11b4232bb21d2a8704ada2cdcd7b367dd0788a89​a5c908cfe377aceb1072a7b386b7d4fd2ff68a8fd24d16 |
| md5 | Takes an input and produces a hash value using MD5. | <ul><li>INPUT: **Required** The plain text to be hashed.</li><li>CHARSET: *Optional* The name of the character set. Possible values include UTF-8, UTF-16, ISO-8859-1, and US-ASCII. </li></ul>| md5(INPUT, CHARSET) | md5("my text", "UTF-8") | d3b96ce8c9fb4​e9bd0198d03ba6852c7 |
| crc32 | Takes an input uses a cyclic redundancy check (CRC) algorithm to produce a 32-bit cyclic code. | <ul><li>INPUT: **Required** The plain text to be hashed.</li><li>CHARSET: *Optional* The name of the character set. Possible values include UTF-8, UTF-16, ISO-8859-1, and US-ASCII.</li></ul> | crc32(INPUT, CHARSET) | crc32("my text", "UTF-8") | 8df92e80 |

### URL functions

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| get_url_protocol | Returns the protocol from the given URL. If the input is invalid, it returns null. | <ul><li>URL: **Required** The URL from which the protocol needs to be extracted.</li></ul> | get_url_protocol(URL) | get_url_protocol("https://platform.adobe.com/home") | https |
| get_url_host | Returns the host of the given URL. If the input is invalid, it returns null. | <ul><li>URL: **Required** The URL from which the host needs to be extracted.</li></ul> | get_url_host(URL) | get_url_host("https://platform.adobe.com/home") | platform.adobe.com |
| get_url_port | Returns the port of the given URL. If the input is invalid, it returns null. | <ul><li>URL: **Required** The URL from which the port needs to be extracted.</li></ul> | get_url_port(URL) | get_url_port("sftp://example.com//home/joe/employee.csv") | 22 |
| get_url_path | Returns the path of the given URL. By default, the full path is returned. | <ul><li>URL: **Required** The URL from which the path needs to be extracted.</li><li>FULL_PATH: *Optional* A boolean value that determines if the full path is returned. If set to false, only the end of the path is returned.</li></ul> | get_url_path(URL, FULL_PATH) | get_url_path("sftp://example.com//home/joe/employee.csv") | "//home/joe/employee.csv" |
| get_url_query_str | Returns the query string of a given URL. | <ul><li>URL: **Required** The URL that you are trying to get the query string from.</li><li>ANCHOR: **Required** Determines what will be done with the anchor in the query string. Can be one of three values: "retain", "remove", or "append".<br><br>If the value is "retain", the anchor will be attached to the returned value.<br>If the value is "remove", the anchor will be removed from the returned value.<br>If the value is "append", the anchor will be returned as a separate value.</li></ul> | get_url_query_str(URL, ANCHOR) | get_url_query_str("foo://example.com:8042/over/there?name=ferret#nose", "retain")<br>get_url_query_str("foo://example.com:8042/over/there?name=ferret#nose", "remove")<br>get_url_query_str("foo://example.com:8042/over/there?name=ferret#nose", "append") | `{"name": "ferret#nose"}`<br>`{"name": "ferret"}`<br>`{"name": "ferret", "_anchor_": "nose"}` |

### Date and time functions

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| now | Retrieves the current time. | | now() | now() | `2020-09-23T10:10:24.556-07:00[America/Los_Angeles]` |
| timestamp | Retrieves the current Unix time. | | timestamp() | timestamp() | 1571850624571 |
| format | Formats the input date according to a specified format. | <ul><li>DATE: **Required** The input date, as a ZonedDateTime object, that you want to format.</li><li>FORMAT: **Required** The format that you want the date to be changed to.</li></ul> | format(DATE, FORMAT)  | format(2019-10-23T11:24:00+00:00, "yyyy-MM-dd HH:mm:ss") | "2019-10-23 11:24:35" |
| dformat | Converts a timestamp to a date string according to a specified format. | <ul><li>TIMESTAMP: **Required** The timestamp you want to format. This is written in milliseconds.</li><li>FORMAT: **Required** The format that you want the timestamp to be changed to.</li></ul> | dformat(TIMESTAMP, FORMAT) | dformat(1571829875, "dd-MMM-yyyy hh:mm") | "23-Oct-2019 11:24" |
| date | Converts a date string into a ZonedDateTime object (ISO 8601 format). | <ul><li>DATE: **Required** The string that represents the date.</li><li>FORMAT: **Required** The string representing the format of the date.</li><li>DEFAULT_DATE: **Required** The default date returned, if the date provided is null.</li></ul> | date(DATE, FORMAT, DEFAULT_DATE) | date("23-Oct-2019 11:24", "yyyy-MM-dd HH:mm", now()) | "2019-10-23T11:24:00+00:00" |
| date | Converts a date string into a ZonedDateTime object (ISO 8601 format). | <ul><li>DATE: **Required** The string that represents the date.</li><li>FORMAT: **Required** The string representing the format of the date.</li></ul> | date(DATE, FORMAT) | date("23-Oct-2019 11:24", "yyyy-MM-dd HH:mm") | "2019-10-23T11:24:00+00:00" |
| date | Converts a date string into a ZonedDateTime object (ISO 8601 format). | <ul><li>DATE: **Required** The string that represents the date.</li></ul> | date(DATE) | date("23-Oct-2019 11:24") | "2019-10-23T11:24:00+00:00" |
| date_part | Retrieves the parts of the date. The following component values are supported: <br><br>"year"<br>"yyyy"<br>"yy"<br><br>"quarter"<br>"qq"<br>"q"<br><br>"month"<br>"mm"<br>"m"<br><br>"dayofyear"<br>"dy"<br>"y"<br><br>"day"<br>"dd"<br>"d"<br><br>"week"<br>"ww"<br>"w"<br><br>"weekday"<br>"dw"<br>"w"<br><br>"hour"<br>"hh"<br>"hh24"<br>"hh12"<br><br>"minute"<br>"mi"<br>"n"<br><br>"second"<br>"ss"<br>"s"<br><br>"millisecond"<br>"ms" | <ul><li>COMPONENT: **Required** A string representing the part of the date. </li><li>DATE: **Required** The date, in a standard format.</li></ul> | date_part(COMPONENT, DATE) | date_part("MM", date("2019-10-17 11:55:12")) | 10 |
| set_date_part | Replaces a component in a given date. The following components are accepted: <br><br>"year"<br>"yyyy"<br>"yy"<br><br>"month"<br>"mm"<br>"m"<br><br>"day"<br>"dd"<br>"d"<br><br>"hour"<br>"hh"<br><br>"minute"<br>"mi"<br>"n"<br><br>"second"<br>"ss"<br>"s" | <ul><li>COMPONENT: **Required** A string representing the part of the date. </li><li>VALUE: **Required** The value to set for the component for a given date.</li><li>DATE: **Required** The date, in a standard format.</li></ul> | set_date_part(COMPONENT, VALUE, DATE) | set_date_part("m", 4, date("2016-11-09T11:44:44.797") | "2016-04-09T11:44:44.797" |
| make_date_time | Creates a date from parts. This function can also be induced using make_timestamp. | <ul><li>YEAR: **Required** The year, written in four digits.</li><li>MONTH: **Required** The month. The allowed values are 1 to 12.</li><li>DAY: **Required** The day. The allowed values are 1 to 31.</li><li>HOUR: **Required** The hour. The allowed values are 0 to 23.</li><li>MINUTE: **Required** The minute. The allowed values are 0 to 59.</li><li>NANOSECOND: **Required** The nanosecond values. The allowed values are 0 to 999999999.</li><li>TIMEZONE: **Required** The timezone for the date time.</li></ul> | make_date_time(YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, NANOSECOND, TIMEZONE) |make_date_time(2019, 10, 17, 11, 55, 12, 999, "America/Los_Angeles") | `2019-10-17T11:55:12.0​00000999-07:00[America/Los_Angeles]` |
| zone_date_to_utc | Converts a date in any timezone to a date in UTC. | <ul><li>DATE: **Required** The date that you are trying to convert.</li></ul> | zone_date_to_utc(DATE) | `zone_date_to_utc(2019-10-17T11:55:12.000000999-07:00[America/Los_Angeles])` | `2019-10-17T18:55:12.000000999Z[UTC]` |
| zone_date_to_zone | Converts a date from one timezone to another timezone. | <ul><li>DATE: **Required** The date that you are trying to convert.</li><li>ZONE: **Required** The timezone that you are trying to convert the date to.</li></ul> | zone_date_to_zone(DATE, ZONE) | `zone_date_to_utc(2019-10-17T11:55:12.000000999-07:00[America/Los_Angeles], "Europe/Paris")` | `2019-10-17T20:55:12.000000999+02:00[Europe/Paris]` |

### Hierarchies - Objects

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| size_of | Returns the size of the input. | <ul><li>INPUT: **Required** The object that you're trying to find the size of.</li></ul> | size_of(INPUT) | `size_of([1, 2, 3, 4])` | 4 |
| is_empty | Checks whether or not an object is empty. | <ul><li>INPUT: **Required** The object that you're trying to check is empty.</li></ul> | is_empty(INPUT) | `is_empty([1, 2, 3])` | false |
| arrays_to_object | Creates a list of objects. | <ul><li>INPUT: **Required** A grouping of key and array pairs.</li></ul> | arrays_to_object(INPUT) | need sample | need sample |
| to_object | Creates an object based on the flat key/value pairs given. | <ul><li>INPUT: **Required** A flat list of key/value pairs.</li></ul> | to_object(INPUT) | to_object("firstName", "John", "lastName", "Doe") | `{"firstName": "John", "lastName": "Doe"}` |
| str_to_object | Creates an object from the input string. | <ul><li>STRING: **Required** The string that is being parsed to create an object.</li><li>VALUE_DELIMITER: *Optional* The delimiter that separates a field from the value. The default delimiter is `:`.</li><li>FIELD_DELIMITER: *Optional* The delimiter that separates field value pairs. The default delimiter is `,`.</li></ul> | str_to_object(STRING, VALUE_DELIMITER, FIELD_DELIMITER) | str_to_object("firstName - John | lastName - | phone - 123 456 7890", "-", "|") | `{"firstName": "John", "lastName": "Doe", "phone": "123 456 7890"}` |
| is_set | Checks if the object exists within the source data. | <ul><li>INPUT: **Required** The path to be checked if it exists within the source data.</li></ul> | is_set(INPUT) | is_set("evars.evar.field1") | true |

### Hierarchies - Arrays

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| coalesce | Returns the first non-null object in a given array. | <ul><li>INPUT: **Required** The array you want to find the first non-null object of.</li></ul> | coalesce(INPUT) | coalesce(null, null, null, "first", null, "second") | "first" |
| first | Retrieves the first element of the given array. | <ul><li>INPUT: **Required** The array you want to find the first element of.</li></ul> | first(INPUT) |  first("1", "2", "3") | "1" |
| last | Retrieves the last element of the given array. | <ul><li>INPUT: **Required** The array you want to find the last element of.</li></ul> | last(INPUT) |  last("1", "2", "3") | "3" |
| to_array | Takes a list of inputs and converts it to an array. | <ul><li>INCLUDE_NULLS: **Required** A boolean value to indicate whether or not to include nulls in the response array.</li><li>VALUES: **Required** The elements that are to be converted to an array.</li></ul> | to_array(INCLUDE_NULLS, VALUES) | to_array(false, 1, null, 2, 3) | `[1, 2, 3]` |

### Logical operators

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| decode | Given a key and a list of key value pairs flattened as an array, the function returns the value if key is found or return a default value if present in the array. | <ul><li>KEY: **Required** The key to be matched.</li><li>OPTIONS: **Required** A flattened array of key/value pairs. Optionally, a default value can be put at the end.</li></ul> | decode(KEY, OPTIONS) | decode(stateCode, "ca", "California", "pa", "Pennsylvania", "N/A") | If the stateCode given is "ca", "California".<br>If the stateCode given is "pa", "Pennsylvania".<br>If the stateCode doesn't match the following, "N/A". |
| iif | Evaluates a given boolean expression and returns the specified value based on the result. | <ul><li>BOOLEAN_EXPRESSION: **Required** The boolean expression that is being evaluated.</li><li>TRUE_VALUE: **Required** The value that is returned if the expression evaluates to true.</li><li>FALSE_VALUE: **Required** The value that is returned if the expression evaluates to false.</li></ul> | iif(BOOLEAN_EXPRESSION, TRUE_VALUE, FALSE_VALUE) | iif("s".equalsIgnoreCase("S"), "True", "False") | "True" |

### Aggregation

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| min | Returns the minimum of the given arguments. Uses natural ordering. | <ul><li>OPTIONS: **Required** One or more objects that can be compared to each other.</li></ul> | min(OPTIONS) | min(3, 1, 4) | 1 |
| max | Returns the maximum of the given arguments. Uses natural ordering. | <ul><li>OPTIONS: **Required** One or more objects that can be compared to each other.</li></ul> | max(OPTIONS) | max(3, 1, 4) | 4 |

### Type conversions

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| to_bigint | Converts a string to a BigInteger. | <ul><li>STRING: **Required** The string that is to be converted to a BigInteger.</li></ul> | to_bigint(STRING) | to_bigint("1000000.34") | 1000000.34 |
| to_decimal | Converts a string to a Double. | <ul><li>STRING: **Required** The string that is to be converted to a Double.</li></ul> | to_decimal(STRING) | to_decimal("20.5") | 20.5 |
| to_float | Converts a string to a Float. | <ul><li>STRING: **Required** The string that is to be converted to a Float.</li></ul> | to_float(STRING) | to_float("12.3456") | 12.34566 |
| to_integer | Converts a string to an Integer. | <ul><li>STRING: **Required** The string that is to be converted to a Integer.</li></ul> | to_integer(STRING) | to_integer("12") | 12 |

### JSON functions

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| json_to_object | Deserialize JSON content from the given string. | <ul><li>STRING: **Required** The JSON string to be deserialized.</li></ul> | json_to_object(STRING) | json_to_object({"info":{"firstName":"John","lastName" : "Doe"}}) | An object representing the JSON. |

### Special operations

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| uuid /<br>guid | Generates a pseudo-random ID. | | uuid()<br>guid() | uuid()<br>guid() | 7c0267d2-bb74-4e1a-9275-3bf4fccda5f4<br>c7016dc7-3163-43f7-afc7-2e1c9c206333 |

### User agent functions

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| ua_os_name | Extracts the operating system name from the user agent string. | <ul><li>USER_AGENT: **Required** The user agent string.</li></ul> | ua_os_name(USER_AGENT) | ua_os_name("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3") | iOS |
| ua_os_version_major | Extracts the operating system's major version from the user agent string. | <ul><li>USER_AGENT: **Required** The user agent string.</li></ul> | ua_os_version_major(USER_AGENT) | ua_os_version_major("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3") | iOS 5 |
| ua_os_version | Extracts the operating system's version from the user agent string. | <ul><li>USER_AGENT: **Required** The user agent string.</li></ul> | ua_os_version(USER_AGENT) | ua_os_version("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3") | 5.1.1 |
| ua_os_name_version | Extracts the operating system's name and version from the user agent string. | <ul><li>USER_AGENT: **Required** The user agent string.</li></ul> | ua_os_name_version(USER_AGENT) | ua_os_name_version("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3") | iOS 5.1.1 |
| ua_agent_version | Extracts the agent version from the user agent string. | <ul><li>USER_AGENT: **Required** The user agent string.</li></ul> | ua_agent_version(USER_AGENT) | ua_agent_version("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3") | 5.1 |
| ua_agent_version_major | Extracts the agent name and major version from the user agent string. | <ul><li>USER_AGENT: **Required** The user agent string.</li></ul> | ua_agent_version_major(USER_AGENT) | ua_agent_version_major("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3") | Safari 5 |
| ua_agent_name | Extracts the agent name from the user agent string. | <ul><li>USER_AGENT: **Required** The user agent string.</li></ul> | ua_agent_name(USER_AGENT) | ua_agent_name("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3") | Safari |
| ua_device_class| Extracts the device class from the user agent string. | <ul><li>USER_AGENT: **Required** The user agent string.</li></ul> | ua_device_class(USER_AGENT) | ua_device_class("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3") | Phone |