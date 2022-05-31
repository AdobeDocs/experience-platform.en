---
keywords: Experience Platform;home;popular topics;map csv;map csv file;map csv file to xdm;map csv to xdm;ui guide;mapper;mapping;data prep;data preparation;preparing data;
solution: Experience Platform
title: Handling data formats with Data Prep
topic-legacy: overview
description: This document gives an overview of how different data types are handled in Data Prep.
exl-id: 4ad253b7-3f83-48cd-9c46-8b5ba627c09e
---
# Handling data formats with Data Prep

Data Prep can robustly handle different formats of data ingested into Adobe Experience Platform. This document outlines how different data formats are treated with Data Prep.

## Booleans {#booleans}

If the source type is a string and the target type is a boolean, Data Prep can automatically parse the value and convert the source value to a boolean.

The values `y`, `yes`, `Y`, `YES`, `on`, `ON`, `true`, and `TRUE` are automatically be parsed to be `true`.

The values `n`, `N`, `no`, `NO`, `off`, `OFF`, `false`, and `FALSE` are automatically be parsed to be `false`.

## Dates {#dates}

Data Prep supports date functions, both as strings and as datetime objects. 

### Date function format

The date function converts strings and datetime objects to become an ISO 8601 formatted ZonedDateTime object.

**Format**

```http
date({DATE}, {FORMAT}, {DEFAULT_DATE})
```

| Parameter | Description |
| --------- | ----------- |
| `{DATE}` | Required. The string that represents the date. |
| `{FORMAT}` | Optional. The string representing the format of the source date. More information on string formatting can be found in the [date/time format string section](#format). |
| `{DEFAULT_DATE}` | Optional. The default date to be returned if the provided date is null. |

For example, the expression `date(orderDate, "yyyy-MM-dd")` will convert an `orderDate` value of "December 31st, 2020" into a datetime value of "2020-12-31".

### Date function conversions

When string fields from incoming data are mapped to date fields in schemas using Experience Data Model (XDM), the date format should be explicitly mentioned. If not explicitly mentioned, Data Prep will attempt to convert the input data by matching it to the following formats. Once a matching format is found, it will stop evaluating any subsequent formats.

```console
"yyyy-MM-dd HH:mm:ssZ",
"yyyy-MM-dd HH:mm:ss.SSSZ",
"yyyy-MM-dd HH:mm:ss.SSS",
"yyyy-MM-dd'T'HH:mm:ss.SSSX",
"yyyy-MM-dd'T'HH:mm:ss'Z'",
"yyyy-MM-dd",
"yyyy/MM/dd",
"yyyy.MM.dd",
"yyyy-MMM-dd",
"yyyyMMdd",
"MM-dd-yyyy",
"MMddyyyy",
"M/dd/yyyy",
"dd.M.yyyy",
"M/dd/yyyy hh:mm:ss a",
"dd.M.yyyy hh:mm:ss a",
"dd.MMM.yyyy",
"dd-MMM-yyyy"
```

>[!IMPORTANT]
>
> Data Prep will try to convert strings to dates as best as possible. However, these conversions can lead to undesirable results. For example, the string value "12112020" matches the pattern "MMddyyyy", but the user may have intended for the date to be read with the pattern "ddMMyyyy". As a result, users should explicitly mention the date format for strings.

### Date/time format strings {#format}

The following table shows which pattern letters are defined for format strings. Please note that the letters are case sensitive.

| Symbol | Meaning | Presentation | Example |
| ------ | ------- | ------------ | ------- |
| G | The era | Text | AD; Anno Domini; A |
| Y | Year, based on the ISO Week | Number | 1996; 96 |
| y | The year | Number | 2004; 04 |
| M/L | Month of the year | Number/Text | 7; 07; Jul; July; J |
| w | Week in the year | Number | 27 |
| W | Week of the month | Number | 3 |
| D | Day of the year | Number | 189 |
| d | Day of the month | Number | 10 |
| F | Day of the week in a month | Number | 2 |
| E | Name of the day of the week | Text | Tuesday; Tue |
| u | Day of the week, as a number. 1 represents Monday, ..., 7 represents Sunday | Number | 1 |
| a | AM/PM marker | Text | PM |
| H | Hour in day (0-23) | Number | 0 |
| k | Hour in day (1-24) | Number | 24 |
| K | Hour in AM/PM (0-11) | Number | 0 |
| h | Hour in AM/PM (1-12) | Number | 12 | 
| m | Minute in the hour | Number | 38 | 
| s | Second in the minute | Number | 44 | 
| S | Millisecond | Number | 245 |
| z | Time zone | General time zone | Pacific Standard Time; PST; GMT-08:00 |
| Z | Time zone | RFC 822 time zone | -0800 |
| X | Time zone | ISO 8601 time zone | -08; -0800; -08:00 |
| V | Time zone ID | Text | America/Los_Angeles |
| O | Time zone offset | Text | GMT+8 |
| Q/q | Quarter of the year | Number/Text | 3; 03; Q3; 3rd quarter |

## Maps {#maps}

Maps are currently not supported in [!DNL Data Prep].
