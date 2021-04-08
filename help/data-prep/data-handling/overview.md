---
keywords: Experience Platform;home;popular topics;map csv;map csv file;map csv file to xdm;map csv to xdm;ui guide;mapper;mapping;data prep;data preparation;preparing data;
solution: Experience Platform
title: Data Prep Overview
topic: overview
description: This document gives an overview of how different data types are handled in Data Prep.
---

# Data format overview

Data Prep can robustly handles different formats of data ingested into Platform. This document outlines how different data formats are treated with Data Prep.

## Booleans

If the source is a string, Data Prep can automatically parse the value and convert that value to a boolean.

The values `y`, `yes`, `Y`, `YES`, `on`, `ON`, `true`, and `TRUE` will automatically be parsed to be `true`.

The values `n`, `N`, `no`, `NO`, `off`, `OFF`, `false`, and `FALSE` will automatically be parsed to be `false`.

## Dates

Data Prep supports date functions, both as strings and as datetime objects. More detailed information on how Data Prep deals with dates can be found in the [date function guide](./dates.md).