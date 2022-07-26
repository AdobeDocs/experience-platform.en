---
keywords: Experience Platform;query service;Query service;nested data structures;nested data;flatten;flatten nested data;
title: Flatten Nested Data Structures For Use With BI Tools
description: This document explains how to flatten XDM schemas for all tables and views during a session when using third-party BI tools with Query Service.
exl-id: 7e534c0a-db6c-463e-85da-88d7b2534ece
---
# Flatten nested data structures for use with third-party BI tools

Adobe Experience Platform Query Service supports the `FLATTEN` setting when connecting to a database through third-party BI tools. This feature flattens nested data structures in third-party BI tools to improve their usability and reduce the required workload to retrieve, analyze, transform, and report data.

Many BI tools like [!DNL Tableau] and [!DNL Power BI] do not natively support nested data structures. The `FLATTEN` setting removes the need to create SQL views on top of your data to provide a flat version, or to use Query Service `CTAS` or `INSERT INTO` jobs to duplicate your datasets into flat versions when using ad hoc schemas.

The `FLATTEN` setting pulls the structure of each leaf field into the root of the table and names the field after the original namespace. This allows you to use dot notation to match a field to its Experience Data Model (XDM) path while preserving the field's context.

## Prerequisites

Using the `FLATTEN` setting requires a working understanding of the following components of Adobe Experience Platform:

* [XDM System](../../xdm/home.md): A high-level overview of XDM and its implementation in Experience Platform.
  
  * [Create an ad hoc schema](../../xdm/tutorials/ad-hoc.md): An XDM schema with fields that are namespaced for usage only by a single dataset, is referred to as an ad hoc schema. Ad hoc schemas are used in various data ingestion workflows for Experience Platform and creating certain kinds of source connections.

* [Sandboxes](../../sandboxes/home.md): Experience Platform provides virtual sandboxes that partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

* [Nested data structures](./nested-data-structures.md): This document provides examples of how to create, process, or transform datasets with complex data types including nested data structures.

## Connect to a database using the FLATTEN setting {#connect-with-flatten}

The `FLATTEN` setting flattens nested data structures into separate columns where the attribute name becomes the column name that holds the row values. When working with data in BI tools that do not support nested data structures, this setting improves the usability of ad hoc schemas and reduces the necessary workload. 

When connecting to Query Service with your chosen third-party client, append the `FLATTEN` setting to the database name. For information on how to connect a specific BI tool, please see its respective documentation in the [connect clients to Query Service overview](../clients/overview.md). The connection string should contain:

* The sandbox name.
* A colon followed by `all` or a specific dataset ID, view ID, or database name.
* A question mark (?) followed by the `FLATTEN` keyword.

The input should take the following format:

```terminal
{sandbox_name}:{all/ID/database_name}?FLATTEN
```

An example connection string might look as below:

```terminal
prod:all?FLATTEN
```

## Example {#example}

The example schema used in this guide employs the standard field group [!UICONTROL Commerce Details], which utilizes the `commerce` object structure and the `productListItems` array. See the XDM documentation for [more information on the [!UICONTROL Commerce Details] field group](../../xdm/field-groups/event/commerce-details.md). A representation of the schema structure can be seen in the image below.

![A schema diagram of the Commerce Details field group including the `commerce` and `productListItems` structures.](../images/best-practices/flatten-nested-data/commerce-details.png)

If your BI tool does not support nested data structures, it can be difficult to reference nested fields should they contain serialized values (such as `commerce` and `productListItems` in the example schema). These values may appear as parts of a single encoded `commerce` string field and are not realistically unusable. 

The following values represent `commerce.order.priceTotal` (3018.0), `commerce.order.purchaseID` (c9b5aff9-25de-450b-98f4-4484a2170180), and `commerce.purchases.value`(1.0) in poorly formatted nested fields. 

```terminal
("(3018.0,c9b5aff9-25de-450b-98f4-4484a2170180)","(1.0)")
```

By using the `FLATTEN` setting, you can access separate fields within your schema or whole sections of the nested data structure by using dot notation and their original pathname. An example of this format using the `commerce` field group is given below. 

```terminal
commerce.order.priceTotal
commerce.order.purchaseID
commerce.purchases.value
```

The `FLATTEN` setting has certain limitations when dealing with other data structures. Full details are provided in the [limitations section](#limitations).

### Use quotation marks for fields in queries {#quotation-marks}

The flattened root fields now use dot notation to match their XDM paths. When used in a query the fields need to be enclosed in quotation marks (" ").

The SQL example below displays the original state of the nested query:

```sql
SELECT YEAR(timestamp) AS year,
       SUM(commerce.order.priceTotal) AS revenue
FROM purchase_events_dataset
WHERE commerce.purchases.value > 0
GROUP BY 1;
```

When using the flattened data fields, the query is written using dot notation and enclosed in quotation marks as seen below:

```sql
SELECT YEAR(timestamp) AS year,
       SUM("commerce.order.priceTotal") AS revenue
FROM purchase_events_dataset
WHERE "commerce.purchases.value" > 0
GROUP BY 1;
```

## Limitations {#limitations}

The `FLATTEN` setting does not currently flatten the following data structures:

| Data structure  | Limitation |
|---|---|
| Arrays | Use an explicit array index or the `EXPLODE` function to access arrays. |
| Maps | Use the string key to access a value under a map to access maps. |

To resolve both Map and Array limitations you need to use the BI tools raw SQL editing like the Advanced Options -> SQL Statement in Power BI.

BI tools such as raw SQL editing are necessary to resolve both map and array limitations. See the guide on how to [use Power BI advanced options to enter a custom SQL query](https://experienceleague.adobe.com/docs/experience-platform/query/clients/power-bi.html#import-tables-using-custom-sql) in the SQL statement section.

## Next steps

This document covered how to flatten nested data structures for use with third-party BI tools. If you have not already connected your client, see [the client connection overview](../clients/overview.md) for a list of supported third-party clients.
