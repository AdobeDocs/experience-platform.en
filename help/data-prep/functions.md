---
keywords: Experience Platform;home;popular topics;map csv;map csv file;map csv file to xdm;map csv to xdm;ui guide;mapper;mapping;mapping fields;mapping functions;
solution: Experience Platform
title: Data Prep Mapping Functions
description: This document introduces the mapping functions used with Data Prep.
exl-id: e95d9329-9dac-4b54-b804-ab5744ea6289
---
# Data Prep mapping functions

Data Prep functions can be used to compute and calculate values based on what is entered in source fields.

## Fields

A field name can be any legal identifier - an unlimited-length sequence of Unicode letters and digits, beginning with a letter, the dollar sign (`$`), or the underscore character (`_`). Variable names are also case sensitive.

If a field name does not follow this convention, the field name must be wrapped with `${}`. So, for example, if the field name is "First Name" or "First.Name", then the name must be wrapped like `${First Name}` or `${First\.Name}` respectively.

>[!TIP]
>
>When interacting with hierarchies, if a child attribute has a period (`.`), you must use a backslash (`\`) to escape special characters. For more information, read the guide on [escaping special characters](home.md#escape-special-characters).

Additionally, if a field name is **any** of the following reserved keywords, it must be wrapped with `${}`:

```console
new, mod, or, break, var, lt, for, false, while, eq, gt, div, not, null, continue, else, and, ne, true, le, if, ge, return, _errors
```

Data within sub-fields can be accessed by using the dot notation. For example, if there was a `name` object, to access the `firstName` field, use `name.firstName`.

## List of functions

The following tables list all supported mapping functions, including sample expressions and their resulting outputs.

### String functions {#string}

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| concat | Concatenates the given strings. | <ul><li>STRING: The strings that will be concatenated.</li></ul> | concat(STRING_1, STRING_2) | concat("Hi, ", "there", "!") | `"Hi, there!"` |
| explode | Splits the string based on a regex and returns an array of parts. Can optionally include regex to split the string. By default, the splitting resolves to ",". The following delimiters **need** to be escaped with `\`: `+, ?, ^, \|, ., [, (, {, ), *, $, \` If you include multiple characters as the delimiter, the delimiter will be treated as a multi-character delimiter. | <ul><li>STRING: **Required** The string that needs to be split.</li><li>REGEX: *Optional* The regular expression that can be used to split the string.</li></ul> | explode(STRING, REGEX) | explode("Hi, there!", " ") | `["Hi,", "there"]` |
| instr | Returns the location/index of a substring.| <ul><li>INPUT: **Required** The string that is being searched.</li><li>SUBSTRING: **Required** The substring that is being searched for within the string.</li><li>START_POSITION: *Optional* The location of where to start looking in the string.</li><li>OCCURRENCE: *Optional* The nth occurrence to look for from the start position. By default, it is 1. </li></ul> | instr(INPUT, SUBSTRING, START_POSITION, OCCURRENCE) | instr("adobe.com", "com") | 6 |
| replacestr | Replaces the search string if present in original string. | <ul><li>INPUT: **Required** The input string.</li><li>TO_FIND: **Required** The string to look up within the input.</li><li>TO_REPLACE: **Required** The string that will replace the value within "TO_FIND".</li></ul> | replacestr(INPUT, TO_FIND, TO_REPLACE) | replacestr("This is a string re test", "re", "replace") | "This is a string replace test" |
| substr | Returns a substring of a given length. | <ul><li>INPUT: **Required** The input string.</li><li>START_INDEX: **Required** The index of the input string where the substring starts.</li><li>LENGTH: **Required** The length of the substring.</li></ul> | substr(INPUT, START_INDEX, LENGTH) | substr("This is a substring test", 7, 8) | " a subst" |
| lower /<br>lcase | Converts a string to lowercase. | <ul><li>INPUT: **Required** The string that will be converted to lowercase.</li></ul> | lower(INPUT) | lower("HeLLo")<br>lcase("HeLLo") | "hello" |
| upper /<br>ucase | Converts a string to uppercase. | <ul><li>INPUT: **Required** The string that will be converted to uppercase.</li></ul> | upper(INPUT) | upper("HeLLo")<br>ucase("HeLLo") | "HELLO" |
| split | Splits an input string on a separator. The following separator **needs** to be escaped with `\`: `\`. If you include multiple delimiters, the string will split on **any** of the delimiters present in the string. | <ul><li>INPUT: **Required** The input string that is going to be split.</li><li>SEPARATOR: **Required** The string that is used to split the input.</li></ul> | split(INPUT, SEPARATOR) | split("Hello world", " ") | `["Hello", "world"]` |
| join | Joins a list of objects using the separator. | <ul><li>SEPARATOR: **Required** The string that will be used to join the objects.</li><li>OBJECTS: **Required** An array of strings that will be joined.</li></ul> | `join(SEPARATOR, [OBJECTS])` | `join(" ", to_array(true, "Hello", "world"))` | "Hello world" |
| lpad | Pads the left side of a string with the other given string. | <ul><li>INPUT: **Required** The string that is going to be padded out. This string can be null.</li><li>COUNT: **Required** The size of the string to be padded out.</li><li>PADDING: **Required** The string to pad the input with. If null or empty, it will be treated as a single space.</li></ul> | lpad(INPUT, COUNT, PADDING) | lpad("bat", 8, "yz") | "yzyzybat" |
| rpad | Pads the right side of a string with the other given string. | <ul><li>INPUT: **Required** The string that is going to be padded out. This string can be null.</li><li>COUNT: **Required** The size of the string to be padded out.</li><li>PADDING: **Required** The string to pad the input with. If null or empty, it will be treated as a single space.</li></ul> | rpad(INPUT, COUNT, PADDING) | rpad("bat", 8, "yz") | "batyzyzy" |
| left | Gets the first "n" characters of the given string. | <ul><li>STRING: **Required** The string you are getting the first "n" characters for.</li><li>COUNT: **Required**The "n" characters you want to get from the string.</li></ul> | left(STRING, COUNT) | left("abcde", 2) | "ab" |
| right | Gets the last "n" characters of the given string. | <ul><li>STRING: **Required** The string you are getting the last "n" characters for.</li><li>COUNT: **Required**The "n" characters you want to get from the string.</li></ul> | right(STRING, COUNT) | right("abcde", 2) | "de" |
| ltrim | Removes the whitespace from the beginning of the string. | <ul><li>STRING: **Required** The string you want to remove the whitespace from.</li></ul> | ltrim(STRING) | ltrim(" hello") | "hello" |
| rtrim | Removes the whitespace from the end of the string. | <ul><li>STRING: **Required** The string you want to remove the whitespace from.</li></ul> | rtrim(STRING) | rtrim("hello ") | "hello" |
| trim | Removes the whitespace from the beginning and the end of the string. | <ul><li>STRING: **Required** The string you want to remove the whitespace from.</li></ul> | trim(STRING) | trim(" hello ") | "hello" |
| equals | Compares two strings to confirm if they are equal. This function is case sensitive. | <ul><li>STRING1: **Required** The first string you want to compare.</li><li>STRING2: **Required** The second string you want to compare.</li></ul> | STRING1.​equals(​STRING2) | "string1".​equals​("STRING1") | false |
| equalsIgnoreCase | Compares two strings to confirm if they are equal. This function is **not** case sensitive. | <ul><li>STRING1: **Required** The first string you want to compare.</li><li>STRING2: **Required** The second string you want to compare.</li></ul> | STRING1.​equalsIgnoreCase​(STRING2) | "string1".​equalsIgnoreCase​("STRING1) | true |

{style="table-layout:auto"}

### Regular expression functions

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| extract_regex | Extracts groups from the input string, based on a regular expression. | <ul><li>STRING: **Required** The string that you are extracting the groups from.</li><li>REGEX: **Required** The regular expression that you want the group to match.</li></ul> | extract_regex(STRING, REGEX) | extract_regex​("E259,E259B_009,1_1"​, "([^,]+),[^,]*,([^,]+)") | ["E259,E259B_009,1_1", "E259", "1_1"] |
| matches_regex | Checks to see if the string matches against the inputted regular expression. | <ul><li>STRING: **Required** The string that you are checking matches the regular expression.</li><li>REGEX: **Required** The regular expression that you are comparing against.</li></ul> | matches_regex(STRING, REGEX) | matches_regex("E259,E259B_009,1_1", "([^,]+),[^,]*,([^,]+)") | true |

{style="table-layout:auto"}

### Hashing functions {#hashing}

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

{style="table-layout:auto"}

### URL functions {#url}

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| get_url_protocol | Returns the protocol from the given URL. If the input is invalid, it returns null. | <ul><li>URL: **Required** The URL from which the protocol needs to be extracted.</li></ul> | get_url_protocol​(URL) | get_url_protocol("https://platform​.adobe.com/home") | https |
| get_url_host | Returns the host of the given URL. If the input is invalid, it returns null. | <ul><li>URL: **Required** The URL from which the host needs to be extracted.</li></ul> | get_url_host​(URL) | get_url_host​("https://platform​.adobe.com/home") | platform.adobe.com |
| get_url_port | Returns the port of the given URL. If the input is invalid, it returns null. | <ul><li>URL: **Required** The URL from which the port needs to be extracted.</li></ul> | get_url_port(URL) | get_url_port​("sftp://example.com//home/​joe/employee.csv") | 22 |
| get_url_path | Returns the path of the given URL. By default, the full path is returned. | <ul><li>URL: **Required** The URL from which the path needs to be extracted.</li><li>FULL_PATH: *Optional* A boolean value that determines if the full path is returned. If set to false, only the end of the path is returned.</li></ul> | get_url_path​(URL, FULL_PATH) | get_url_path​("sftp://example.com//​home/joe/employee.csv") | "//home/joe/​employee.csv" |
| get_url_query_str | Returns the query string of a given URL as a map of query string name and query string value. | <ul><li>URL: **Required** The URL that you are trying to get the query string from.</li><li>ANCHOR: **Required** Determines what will be done with the anchor in the query string. Can be one of three values: "retain", "remove", or "append".<br><br>If the value is "retain", the anchor will be attached to the returned value.<br>If the value is "remove", the anchor will be removed from the returned value.<br>If the value is "append", the anchor will be returned as a separate value.</li></ul> | get_url_query_str​(URL, ANCHOR) | get_url_query_str​("foo://example.com:8042​/over/there?name=​ferret#nose", "retain")<br>get_url_query_str​("foo://example.com:8042​/over/there?name=​ferret#nose", "remove")<br>get_url_query_str​("foo://example.com​:8042/over/there​?name=ferret#nose", "append") | `{"name": "ferret#nose"}`<br>`{"name": "ferret"}`<br>`{"name": "ferret", "_anchor_": "nose"}` |
| get_url_encoded | This function takes a URL as input and replaces or encodes the special characters with ASCII characters. For more information on special characters, please read the [list of special characters](#special-characters) in the appendix of this document. | <ul><li>URL: **Required** The input URL with special characters that you want to replace or encode with ASCII characters.</li></ul> | get_url_encoded(URL) | get_url_encoded("https</span>://example.com/partneralliance_asia-pacific_2022") | https%3A%2F%2Fexample.com%2Fpartneralliance_asia-pacific_2022 |
| get_url_decoded | This function takes a URL as input and decodes the ASCII characters into special characters.  For more information on special characters, please read the [list of special characters](#special-characters) in the appendix of this document. | <ul><li>URL: **Required** The input URL with ASCII characters that you want to decode into special characters.</li></ul> | get_url_decoded(URL) | get_url_decoded("https%3A%2F%2Fexample.com%2Fpartneralliance_asia-pacific_2022") | https</span>://example.com/partneralliance_asia-pacific_2022 |

{style="table-layout:auto"}

### Date and time functions {#date-and-time}

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table. More information about the `date` function can be found in the dates section of the [data format handling guide](./data-handling.md#dates).

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| now | Retrieves the current time. | | now() | now() | `2021-10-26T10:10:24Z` |
| timestamp | Retrieves the current Unix time. | | timestamp() | timestamp() | 1571850624571 |
| format | Formats the input date according to a specified format. | <ul><li>DATE: **Required** The input date, as a ZonedDateTime object, that you want to format.</li><li>FORMAT: **Required** The format that you want the date to be changed to.</li></ul> | format(DATE, FORMAT)  | format(2019-10-23T11:24:00+00:00, "yyyy-MM-dd HH:mm:ss") | `2019-10-23 11:24:35` |
| dformat | Converts a timestamp to a date string according to a specified format. | <ul><li>TIMESTAMP: **Required** The timestamp you want to format. This is written in milliseconds.</li><li>FORMAT: **Required** The format that you want the timestamp to become.</li></ul> | dformat(TIMESTAMP, FORMAT) | dformat(1571829875000, "yyyy-MM-dd'T'HH:mm:ss.SSSX") | `2019-10-23T11:24:35.000Z` |
| date | Converts a date string into a ZonedDateTime object (ISO 8601 format). | <ul><li>DATE: **Required** The string that represents the date.</li><li>FORMAT: **Required** The string representing the format of the source date.**Note:** This does **not** represent the format you want to convert the date string into. </li><li>DEFAULT_DATE: **Required** The default date returned, if the date provided is null.</li></ul> | date(DATE, FORMAT, DEFAULT_DATE) | date("2019-10-23 11:24", "yyyy-MM-dd HH:mm", now()) | `2019-10-23T11:24:00Z` |
| date | Converts a date string into a ZonedDateTime object (ISO 8601 format). | <ul><li>DATE: **Required** The string that represents the date.</li><li>FORMAT: **Required** The string representing the format of the source date.**Note:** This does **not** represent the format you want to convert the date string into. </li></ul> | date(DATE, FORMAT) | date("2019-10-23 11:24", "yyyy-MM-dd HH:mm") | `2019-10-23T11:24:00Z` |
| date | Converts a date string into a ZonedDateTime object (ISO 8601 format). | <ul><li>DATE: **Required** The string that represents the date.</li></ul> | date(DATE) | date("2019-10-23 11:24") | "2019-10-23T11:24:00Z" |
| date_part | Retrieves the parts of the date. The following component values are supported: <br><br>"year"<br>"yyyy"<br>"yy"<br><br>"quarter"<br>"qq"<br>"q"<br><br>"month"<br>"mm"<br>"m"<br><br>"dayofyear"<br>"dy"<br>"y"<br><br>"day"<br>"dd"<br>"d"<br><br>"week"<br>"ww"<br>"w"<br><br>"weekday"<br>"dw"<br>"w"<br><br>"hour"<br>"hh"<br>"hh24"<br>"hh12"<br><br>"minute"<br>"mi"<br>"n"<br><br>"second"<br>"ss"<br>"s"<br><br>"millisecond"<br>"SSS" | <ul><li>COMPONENT: **Required** A string representing the part of the date. </li><li>DATE: **Required** The date, in a standard format.</li></ul> | date_part​(COMPONENT, DATE) | date_part("MM", date("2019-10-17 11:55:12")) | 10 |
| set_date_part | Replaces a component in a given date. The following components are accepted: <br><br>"year"<br>"yyyy"<br>"yy"<br><br>"month"<br>"mm"<br>"m"<br><br>"day"<br>"dd"<br>"d"<br><br>"hour"<br>"hh"<br><br>"minute"<br>"mi"<br>"n"<br><br>"second"<br>"ss"<br>"s" | <ul><li>COMPONENT: **Required** A string representing the part of the date. </li><li>VALUE: **Required** The value to set for the component for a given date.</li><li>DATE: **Required** The date, in a standard format.</li></ul> | set_date_part​(COMPONENT, VALUE, DATE) | set_date_part("m", 4, date("2016-11-09T11:44:44.797") | "2016-04-09T11:44:44Z" |
| make_date_time | Creates a date from parts. This function can also be induced using make_timestamp. | <ul><li>YEAR: **Required** The year, written in four digits.</li><li>MONTH: **Required** The month. The allowed values are 1 to 12.</li><li>DAY: **Required** The day. The allowed values are 1 to 31.</li><li>HOUR: **Required** The hour. The allowed values are 0 to 23.</li><li>MINUTE: **Required** The minute. The allowed values are 0 to 59.</li><li>NANOSECOND: **Required** The nanosecond values. The allowed values are 0 to 999999999.</li><li>TIMEZONE: **Required** The timezone for the date time.</li></ul> | make_date_time​(YEAR, MONTH, DAY, HOUR, MINUTE, SECOND, NANOSECOND, TIMEZONE) |make_date_time​(2019, 10, 17, 11, 55, 12, 999, "America/Los_Angeles") | `2019-10-17T11:55:12Z` |
| zone_date_to_utc | Converts a date in any timezone to a date in UTC. | <ul><li>DATE: **Required** The date that you are trying to convert.</li></ul> | zone_date_to_utc​(DATE) | `zone_date_to_utc​(2019-10-17T11:55:​12 PST` | `2019-10-17T19:55:12Z` |
| zone_date_to_zone | Converts a date from one timezone to another timezone. | <ul><li>DATE: **Required** The date that you are trying to convert.</li><li>ZONE: **Required** The timezone that you are trying to convert the date to.</li></ul> | zone_date_to_zone​(DATE, ZONE) | `zone_date_to_utc​(now(), "Europe/Paris")` | `2021-10-26T15:43:59Z` |

{style="table-layout:auto"}

### Hierarchies - Objects {#objects}

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| is_empty | Checks whether or not an object is empty. | <ul><li>INPUT: **Required** The object that you're trying to check is empty.</li></ul> | is_empty(INPUT) | `is_empty([1, null, 2, 3])` | false |
| arrays_to_object | Creates a list of objects. | <ul><li>INPUT: **Required** A grouping of key and array pairs.</li></ul> | arrays_to_object(INPUT) | `arrays_to_objects('sku', explode("id1\|id2", '\\\|'), 'price', [22.5,14.35])` | ```[{ "sku": "id1", "price": 22.5 }, { "sku": "id2", "price": 14.35 }]``` |
| to_object | Creates an object based on the flat key/value pairs given. | <ul><li>INPUT: **Required** A flat list of key/value pairs.</li></ul> | to_object(INPUT) | to_object​("firstName", "John", "lastName", "Doe") | `{"firstName": "John", "lastName": "Doe"}` |
| str_to_object | Creates an object from the input string. | <ul><li>STRING: **Required** The string that is being parsed to create an object.</li><li>VALUE_DELIMITER: *Optional* The delimiter that separates a field from the value. The default delimiter is `:`.</li><li>FIELD_DELIMITER: *Optional* The delimiter that separates field value pairs. The default delimiter is `,`.</li></ul> | str_to_object​(STRING, VALUE_DELIMITER, FIELD_DELIMITER) **Note**: You can use the `get()` function along with `str_to_object()` to retrieve values for the keys in the string. | <ul><li>Example #1: str_to_object("firstName - John ; lastName - ; - 123 345 7890", "-", ";")</li><li>Example #2: str_to_object("firstName - John ; lastName - ; phone - 123 456 7890", "-", ";").get("firstName")</li></ul> | <ul><li>Example #1:`{"firstName": "John", "lastName": "Doe", "phone": "123 456 7890"}`</li><li>Example #2: "John"</li></ul> |
| contains_key | Checks if the object exists within the source data. **Note:** This function replaces the deprecated `is_set()` function. | <ul><li>INPUT: **Required** The path to be checked if it exists within the source data.</li></ul> | contains_key(INPUT) | contains_key("evars.evar.field1") | true |
| nullify | Sets the value of the attribute to `null`. This should be used when you do not want to copy the field to the target schema. | | nullify() | nullify() | `null`  |
| get_keys | Parses the key/value pairs and returns all the keys. | <ul><li>OBJECT: **Required** The object where the keys will be extracted from.</li></ul> | get_keys(OBJECT) | get_keys({"book1": "Pride and Prejudice", "book2": "1984"}) | `["book1", "book2"]` |
| get_values | Parses the key/value pairs and returns the value of the string, based on the given key. | <ul><li>STRING: **Required** The string that you want to parse.</li><li>KEY: **Required** The key for which the value has to be extracted.</li><li>VALUE_DELIMITER: **Required** The delimiter that separates the field and the value. If either a `null` or an empty string are provided, this value is `:`.</li><li>FIELD_DELIMITER: *Optional* The delimiter that separates field and value pairs. If either a `null` or an empty string are provided, this value is `,`.</li></ul> | get_values(STRING, KEY, VALUE_DELIMITER, FIELD_DELIMITER) | get_values(\"firstName - John , lastName - Cena , phone - 555 420 8692\", \"firstName\", \"-\", \",\") | John |

{style="table-layout:auto"}

For information on the object copy feature, see the section [below](#object-copy).

### Hierarchies - Arrays {#arrays}

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| coalesce | Returns the first non-null object in a given array. | <ul><li>INPUT: **Required** The array you want to find the first non-null object of.</li></ul> | coalesce(INPUT) | coalesce(null, null, null, "first", null, "second") | "first" |
| first | Retrieves the first element of the given array. | <ul><li>INPUT: **Required** The array you want to find the first element of.</li></ul> | first(INPUT) |  first("1", "2", "3") | "1" |
| last | Retrieves the last element of the given array. | <ul><li>INPUT: **Required** The array you want to find the last element of.</li></ul> | last(INPUT) |  last("1", "2", "3") | "3" |
| add_to_array | Adds elements to the end of the array. | <ul><li>ARRAY: **Required** The array that you are adding elements to.</li><li>VALUES: The elements that you want to append to the array.</li></ul> | add_to_array​(ARRAY, VALUES) | add_to_array​(['a', 'b'], 'c', 'd') | ['a', 'b', 'c', 'd'] |
| join_arrays | Combines the arrays with each other. | <ul><li>ARRAY: **Required** The array that you are adding elements to.</li><li>VALUES: The array(s) you want to append to the parent array.</li></ul> | join_arrays​(ARRAY, VALUES) | join_arrays​(['a', 'b'], ['c'], ['d', 'e']) | ['a', 'b', 'c', 'd', 'e'] |
| to_array | Takes a list of inputs and converts it to an array. | <ul><li>INCLUDE_NULLS: **Required** A boolean value to indicate whether or not to include nulls in the response array.</li><li>VALUES: **Required** The elements that are to be converted to an array.</li></ul> | to_array​(INCLUDE_NULLS, VALUES) | to_array(false, 1, null, 2, 3) | `[1, 2, 3]` |
| size_of | Returns the size of the input. | <ul><li>INPUT: **Required** The object that you're trying to find the size of.</li></ul> | size_of(INPUT) | `size_of([1, 2, 3, 4])` | 4 |
| upsert_array_append | This function is used to append all elements in the entire input array to the end of the array in Profile. This function is **only** applicable during updates. If used in the context of inserts, this function returns the input as is. | <ul><li>ARRAY: **Required** The array to append the array in the Profile.</li></ul> | upsert_array_append(ARRAY) | `upsert_array_append([123, 456])` | [123, 456] |
| upsert_array_replace | This function is used to replace elements in an array. This function is **only** applicable during updates. If used in the context of inserts, this function returns the input as is. | <ul><li>ARRAY: **Required** The array to replace the array in the Profile.</li></li> | upsert_array_replace(ARRAY) | `upsert_array_replace([123, 456], 1)` | [123, 456] |

{style="table-layout:auto"}

### Logical operators {#logical-operators}

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| decode | Given a key and a list of key value pairs flattened as an array, the function returns the value if key is found or return a default value if present in the array. | <ul><li>KEY: **Required** The key to be matched.</li><li>OPTIONS: **Required** A flattened array of key/value pairs. Optionally, a default value can be put at the end.</li></ul> | decode(KEY, OPTIONS) | decode(stateCode, "ca", "California", "pa", "Pennsylvania", "N/A") | If the stateCode given is "ca", "California".<br>If the stateCode given is "pa", "Pennsylvania".<br>If the stateCode doesn't match the following, "N/A". |
| iif | Evaluates a given boolean expression and returns the specified value based on the result. | <ul><li>EXPRESSION: **Required** The boolean expression that is being evaluated.</li><li>TRUE_VALUE: **Required** The value that is returned if the expression evaluates to true.</li><li>FALSE_VALUE: **Required** The value that is returned if the expression evaluates to false.</li></ul> | iif(EXPRESSION, TRUE_VALUE, FALSE_VALUE) | iif("s".equalsIgnoreCase("S"), "True", "False") | "True" |

{style="table-layout:auto"}

### Aggregation {#aggregation}

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| min | Returns the minimum of the given arguments. Uses natural ordering. | <ul><li>OPTIONS: **Required** One or more objects that can be compared to each other.</li></ul> | min(OPTIONS) | min(3, 1, 4) | 1 |
| max | Returns the maximum of the given arguments. Uses natural ordering. | <ul><li>OPTIONS: **Required** One or more objects that can be compared to each other.</li></ul> | max(OPTIONS) | max(3, 1, 4) | 4 |

{style="table-layout:auto"}

### Type conversions {#type-conversions}

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| to_bigint | Converts a string to a BigInteger. | <ul><li>STRING: **Required** The string that is to be converted to a BigInteger.</li></ul> | to_bigint(STRING) | to_bigint​("1000000.34") | 1000000.34 |
| to_decimal | Converts a string to a Double. | <ul><li>STRING: **Required** The string that is to be converted to a Double.</li></ul> | to_decimal(STRING) | to_decimal("20.5") | 20.5 |
| to_float | Converts a string to a Float. | <ul><li>STRING: **Required** The string that is to be converted to a Float.</li></ul> | to_float(STRING) | to_float("12.3456") | 12.34566 |
| to_integer | Converts a string to an Integer. | <ul><li>STRING: **Required** The string that is to be converted to an Integer.</li></ul> | to_integer(STRING) | to_integer("12") | 12 |

{style="table-layout:auto"}

### JSON functions {#json}

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| json_to_object | Deserialize JSON content from the given string. | <ul><li>STRING: **Required** The JSON string to be deserialized.</li></ul> | json_to_object​(STRING) | json_to_object​({"info":{"firstName":"John","lastName": "Doe"}}) | An object representing the JSON. |

{style="table-layout:auto"}

### Special operations {#special-operations}

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| uuid /<br>guid | Generates a pseudo-random ID. | | uuid()<br>guid() | uuid()<br>guid() | 7c0267d2-bb74-4e1a-9275-3bf4fccda5f4<br>c7016dc7-3163-43f7-afc7-2e1c9c206333 |
| fpid_to_ecid | This function takes an FPID string and converts it into an ECID to be used in Adobe Experience Platform and Adobe Experience Cloud applications. | <ul><li>STRING: **Required** The FPID string to be converted into ECID.</li></ul> | fpid_to_ecid(STRING) | fpid_to_ecid("4ed70bee-b654-420a-a3fd-b58b6b65e991") | "28880788470263023831040523038280731744" |

{style="table-layout:auto"}

### User agent functions {#user-agent}

Any of the user agent functions contained in the table below can return either of the following values:

* Phone - A mobile device with a small screen (commonly < 7")
* Mobile - A mobile device that is yet to be identified. This mobile device can be an eReader, a tablet, a phone, a watch, etc.

>[!NOTE]
>
>Please scroll left/right to view the full contents of the table.

| Function | Description | Parameters | Syntax | Expression | Sample output |
| -------- | ----------- | ---------- | -------| ---------- | ------------- |
| ua_os_name | Extracts the operating system name from the user agent string. | <ul><li>USER_AGENT: **Required** The user agent string.</li></ul> | ua_os_name​(USER_AGENT) | ua_os_name​("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3") | iOS |
| ua_os_version_major | Extracts the operating system's major version from the user agent string. | <ul><li>USER_AGENT: **Required** The user agent string.</li></ul> | ua_os_version_major​(USER_AGENT) | ua_os_version_major​s("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3") | iOS 5 |
| ua_os_version | Extracts the operating system's version from the user agent string. | <ul><li>USER_AGENT: **Required** The user agent string.</li></ul> | ua_os_version​(USER_AGENT) | ua_os_version​("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3") | 5.1.1 |
| ua_os_name_version | Extracts the operating system's name and version from the user agent string. | <ul><li>USER_AGENT: **Required** The user agent string.</li></ul> | ua_os_name_version​(USER_AGENT) | ua_os_name_version​("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3") | iOS 5.1.1 |
| ua_agent_version | Extracts the agent version from the user agent string. | <ul><li>USER_AGENT: **Required** The user agent string.</li></ul> | ua_agent_version​(USER_AGENT) | ua_agent_version​("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3") | 5.1 |
| ua_agent_version_major | Extracts the agent name and major version from the user agent string. | <ul><li>USER_AGENT: **Required** The user agent string.</li></ul> | ua_agent_version_major​(USER_AGENT) | ua_agent_version_major​("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3") | Safari 5 |
| ua_agent_name | Extracts the agent name from the user agent string. | <ul><li>USER_AGENT: **Required** The user agent string.</li></ul> | ua_agent_name​(USER_AGENT) | ua_agent_name​("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3") | Safari |
| ua_device_class | Extracts the device class from the user agent string. | <ul><li>USER_AGENT: **Required** The user agent string.</li></ul> | ua_device_class​(USER_AGENT) | ua_device_class​("Mozilla/5.0 (iPhone; CPU iPhone OS 5_1_1 like Mac OS X) AppleWebKit/534.46 (KHTML, like Gecko) Version/5.1 Mobile/9B206 Safari/7534.48.3") | Phone |

{style="table-layout:auto"}

### Object copy {#object-copy}

>[!TIP]
>
>The object copy feature is automatically applied when an object in the source is mapped to an object in the XDM. No additional action needed from users.

You can use the object copy feature to automatically copy attributes of an object without making changes to the mapping. For example, if your source data has a structure of:

```json
address{
        line1: 4191 Ridgebrook Way,
        city: San Jose,
        state: California
        }
```

and an XDM structure of:

```json
addr{
    addrLine1: 4191 Ridgebrook Way,
    city: San Jose,
    state: California
    }
```

Then the mapping becomes:

```json
address -> addr
address.line1 -> addr.addrLine1
```

In the example above, the `city` and `state` attributes are also ingested automatically at runtime because the `address` object is mapped to `addr`. If you were to create a `line2` attribute in the XDM structure and your input data also contains a `line2` in the `address` object, then it will also be automatically ingested without any need to manually alter the mapping.

To ensure that the automatic mapping works, the following prerequisites must be met:

* Parent-level objects should be mapped;
* New attributes must have been created in the XDM schema;
* New attributes should have matching names in the source schema and the XDM schema.

If any of the prerequisites are not met, then you must manually map the source schema to the XDM schema using data prep.

## Appendix

The following provides additional information on using Data Prep mapping functions

### Special characters {#special-characters}

The table below outlines a list of reserved characters and their corresponding encoded characters.

| Reserved character | Encoded character |
| --- | --- |
| space | %20 |
| ! | %21 |
| " | %22 |
| # | %23 |
| $ | %24 |
| % | %25 |
| & | %26 |
| ' | %27 |
| ( | %28 |
| ) | %29 |
| * | %2A |
| + | %2B |
| , | %2C |
| / | %2F |
| : | %3A |
| ; | %3B |
| < | %3C |
| = | %3D |
| > | %3E |
| ? | %3F |
| @ | %40 |
| &#91; | %5B |
| &#124; | %5C |
| &#93; | %5D |
| ^ | %5E |
| &#96; | %60 |
| ~ | %7E |

{style="table-layout:auto"}