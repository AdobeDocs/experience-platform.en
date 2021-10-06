---
keywords: Experience Platform;home;popular topics;map csv;map csv file;map csv file to xdm;map csv to xdm;ui guide;mapper;mapping;data prep;data preparation;preparing data;
solution: Experience Platform
title: Data Prep Overview
topic-legacy: overview
description: This document introduces Data Prep within Adobe Experience Platform.
exl-id: f15eeb50-a531-4560-a524-1a670fbda706
---

# Data Prep overview

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM). Data Prep appears as a "Map" step in the Data Ingestion processes, including CSV Ingestion workflow. Data engineers can use Data Prep to perform the following data manipulation during ingestion:

- Define simple pass-through mappings to assign input attributes to XDM attributes
- Create calculated fields to perform in-row calculations that can be assigned to XDM attributes
- Transform the data by applying string, numeric, or date manipulation functions
- Construct XDM hierarchies using hierarchical functions
- Preview the data as it is manipulated within the Data Prep

Data Prep also applies several intrinsic data validations to ensure that the data integrity is maintained as it is ingested. Where possible, Data Prep automatically maps the incoming data schemas to XDM. Data engineers can change, correct, and delete the suggested mappings and replace them with the mappings as appropriate.

>[!NOTE]
>
>Unless the resulting message will be invalid XDM, any transformation errors in Data Prep will result in those attributes being set to `null`, while the rest of the row will be ingested. If the row does resolve to invalid XDM, the row will **not** be ingested. In both of these cases, the error will be documented.
 
## Mapping

A mapping is an association of an input attribute or calculated field to one XDM attribute. A single attribute can be mapped to multiple XDM attributes by creating individual mappings.

To learn more about the different mapping functions, please read the [mapping functions guide](./functions.md).

### Calculated fields

Calculated fields allow for values to be created based on the attributes in the input schema. These values can then be assigned to attributes in the target schema and be provided a name and description to allow for easier reference.

To learn more about calculated fields, please read the [calculated fields guide guide](./functions.md#calculated-fields).

## Mapping set

A set of mappings that transform one schema to another are collectively known as a mapping set. A single mapping set is created as part of each data flow. A mapping set is an integral part of the data flows and is created, edited, and monitored as part of the data flows.

To learn more about mapping sets, including how to use the fields within a mapping set, please read the [mapping set guide](./mapping-set.md). To learn how to create a mapping set and use other API calls related to mapping sets, please read the mapping set section in the [developer guide](./api/mapping-set.md).

## Data format handling

Data Prep can robustly handle different formats of data ingested into Platform. To learn more about how Data Prep handles different data types, please read the [data format handling overview](./data-handling.md).

## Next steps

This document covered the basics on Data Prep in Adobe Experience Platform. To learn more about different mapping functions, please read the [mapping functions guide](./functions.md). To learn more about how Data Prep handles different data types, please read the [data format handling guide](./data-handling.md#dates). To learn how to use the Data Prep API, please read the [Data Prep developer guide](api/overview.md).
