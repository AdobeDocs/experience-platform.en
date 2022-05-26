---
keywords: Experience Platform;query service;Query service;nested data structures;nested data;flatten;flatten nested data;
title: Flatten Nested Data Structures For Use With BI Tools
description: This document explains how to flatten XDM schemas for all tables and views during a session when using third-party BI tools with Query Service.
---
# Flatten Nested Data Structures for use with third-party BI tools

Adobe Experience Platform Query Service supports the `FLATTEN` setting when connecting to a database through third-party BI tools. This feature flattens nested data structures in third-party BI tools to improve their usability and reduce the required workload to retrieve, analyze, transform and report data.

Many BI tools like Tableau and Power BI do not natively support nested data structures. The `FLATTEN` setting removes the need to create SQL views on top of your data to provide a flat version, or to use Query Service `CTAS` or `INSERT INTO` jobs to duplicate your datasets into flat versions when using ad hoc schemas.

The `FLATTEN` setting pulls each leaf field structure into the root of the table and names the field after the original. This allows you to use dot notation to match a field to its XDM path while preserving the field's context.

## Prerequisites

Using the `FLATTEN` setting requires a working understanding of the following components of Adobe Experience Platform:

* [XDM system overview](../../xdm/home.md): A high-level overview of XDM and its implementation in Experience Platform.
  
  * [Create an ad hoc schema](../../xdm/tutorials/ad-hoc.md): Experience Data Model (XDM) schema with fields that are namespaced for usage only by a single dataset are referred to as an “ad-hoc” schema. Ad-hoc schemas are used in various data ingestion workflows for Experience Platform and creating certain kinds of source connections.

* [Sandboxes](../../sandboxes/home.md): Experience Platform provides virtual sandboxes that partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

* [Nested data structures](./nested-data-structures.md): The complexity of enterprise data structures can make transforming or processing this data complicated. This document provides examples of how to create, process, or transform datasets with complex data types including nested data structures.

## Connect to a database using the FLATTEN setting

Append the `FLATTEN` setting to the database name when connecting. The database name will contain:

* The sandbox name
* A colon followed by "all" or a specific dataset ID, view ID, or database
* A question mark (?) followed by the `FLATTEN` setting

```terminal
{sandbox_name}:{all/ID/database_name}?FLATTEN
```

## Example {#example}

This document uses the Commerce field group that utilizes the "commerce" structure and the "productListItems" array as an example. a representation of the schema structure can be seen in the image below.

![A schema diagram of the commerce and productListItems structures.]()

If your BI tool does not support nested data structures, it can be difficult to reference nested fields should they contain serialized values (such as commerce and productListItems in the example schema). These values may appear in an unusable way as demonstrated below. 

```terminal
("(3018.0,c9b5aff9-25de-450b-98f4-4484a2170180)","(1.0)")
```

By using the `FLATTEN` setting you can access separate fields within your schema or whole sections of the nested data structure by using dot notation and their original pathname. An example of this format using the Commerce field group is given below. 

```terminal
commerce.order.priceTotal
commerce.order.purchaseID
commerce.purchases.value
```

The `FLATTEN` setting has certain limitations when dealing with other data structures. Full details are provided in the [limitations section](#limitations).

### Use quotation marks for fields in queries

The flattened root fields now use dot notation to match their XDM paths. When used in a query the fields need to be enclosed in quotation marks (" ").

The SQL example below displays the original state of the nested query.

```sql
SELECT YEAR(timestamp) AS year,
       SUM(commerce.order.priceTotal) AS revenue
FROM purchase_events_dataset
WHERE commerce.purchases.value > 0
GROUP BY 1;
```

When using the flattened data fields, the query is written using dot notation and enclosed in quotation marks as seen below.

```sql
SELECT YEAR(timestamp) AS year,
       SUM("commerce.order.priceTotal") AS revenue
FROM purchase_events_dataset
WHERE "commerce.purchases.value" > 0
GROUP BY 1;
```

## Limitations {#limitations}

The `FLATTEN` setting does not currently latten the following data structures.

| Data structure  | Limitation |
|---|---|
| Arrays | Use an explicit array index or the EXPLODE function to access arrays. |
| Maps | Use the string key to access a value under a map to access maps. |

## Next steps

By reading this document you better understand how to flatten nested data structures for use with third-party BI tools. If you have not already connected your client, see [the client connection overview](../clients/overview.md) for a list of supported third-party clients. 
