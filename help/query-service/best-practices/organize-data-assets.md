---
title: Best Practices for Data Asset Organization in Query Service
description: This document outlines a logical means of organizing data for ease of use with Query Service.
exl-id: 12d6af99-035a-4f80-b7c0-c6413aa50697
---
# Organize data assets in Query Service

This document provides guidance on best practices for organizing data assets including, datasets, views, and temporary tables for use with Adobe Experience Platform Query Service. It covers how to structure your data as well as information on how to access, update, and delete this information.

It is important to logically organize your data assets within the Platform [!DNL Data Lake] as they grow. Query Service extends SQL constructs that enable you to logically group data assets within a sandbox. This method of organization allows for the sharing of data assets between schemas without the need to move them physically.

## Getting started

Before continuing with this document, you should have a good understanding of [Query Service](../home.md) features and have read the [user interface guide](../ui/user-guide.md).

## Organizing data in Query Service

The following examples demonstrate the constructs available to you through Adobe Experience Platform Query Service to logically organize your data using standard SQL syntax. You should start by creating a database to act as a container for your data points. A database can contain one or more schemas, and each schema can then have one or more references to a data asset (datasets, views, temporary tables, etc). These references include any relationships or associations between the datasets. 

See the [Query Editor user guide](../ui/user-guide.md) for detailed guidance on how to use the Query Service UI to create SQL queries. 

The following SQL constructs to logically organize datasets in a sandbox are supported.

```SQL
CREATE DATABASE databaseA;
CREATE SCHEMA databaseA.schema1;
CREATE table t1 ...;
CREATE view v1 ...;
ALTER TABLE t1 ADD PRIMARY KEY (c1) NOT ENFORCED;
ALTER TABLE t2 ADD FOREIGN KEY (c1) REFERENCES t1(c1) NOT ENFORCED;
```

The example (slightly truncated for brevity) demonstrates this methodology where `databaseA` contains schema `schema1`. 

## Associating data assets to a schema

Once a schema has been created to act as a container for the data assets, each dataset can be associated with one or more schemas in the database by using standard SQL ALTER TABLE syntax.

The following example adds `dataset1`, `dataset2`, `dataset3` and `v1` to the `databaseA.schema1` container created in the previous example.

```SQL
ALTER TABLE dataset1 ADD SCHEMA databaseA.schema1;
 
ALTER TABLE dataset2 ADD SCHEMA databaseA.schema1;
 
ALTER TABLE dataset3 ADD SCHEMA databaseA.schema1;
 
ALTER VIEW v1  ADD SCHEMA databaseA.schema1;
```

## Accessing data assets from the data container

By appropriately qualifying the database name, any [!DNL PostgreSQL] client can connect to any of the data structures you have created using the SHOW keyword. For more information on the SHOW keyword please see the [SHOW section within the SQL syntax documentation](../sql/syntax.md#show).

"all" is the default database name that contains every database and schema container in a sandbox. When you make a [!DNL PostgreSQL] connection using `dbname="all"`, you can access **any** database and schema that you have created to logically organize your data. 

Listing all databases under `dbname="all"` displays three available databases.

```sql
SHOW DATABASES;
  
name     
---------
databaseA
databaseB
databaseC
```

Listing all schema under `dbname="all"` displays the three schemas related to every database in the sandbox.

```SQL
SHOW SCHEMAS;
  
database       | schema
----------------------
databaseA      | schema1
databaseA      | schema2
databaseB      | schema3
```

When you make a [!DNL PostgreSQL] connection using `dbname="databaseA"`, you can access any schema associated with that specific database, as shown in the example below.

```sql
SHOW DATABASES;
  
name     
---------
databaseA
 

SHOW SCHEMAS;
  
database       | schema
----------------------
databaseA      | schema1
databaseA      | schema2
```

Dot notation allows you to access every table associated with a specific schema connected to your chosen database. By connecting to `DBNAME = databaseA.schema1;`, all tables associated with that specific schema (`schema1`) are shown. This provides information on which dataset contains which table.

```sql
SHOW DATABASES;
  
name     
---------
databaseA


SHOW SCHEMAS;
  
database       | schema
----------------------
databaseA      | schema1


SHOW tables;
name       | type
----------------------
dataset1| table
dataset2| table
dataset3| table
```

## Update or remove data assets from a data container

As the amount of data assets in your organization (or sandbox) grows, it becomes necessary to update or remove data assets from a data container. Individual assets can be removed from the organization container by referencing the appropriate database and schema name using dot notation. The table and view (`t1` and `v1` respectively) added to `databaseA.schema1` in the first example, are removed using the syntax in the following example.

```sql
ALTER TABLE databaseA.schema2.t1 REMOVE SCHEMA databaseA.schema2;
ALTER VIEW databaseA.schema2.v1 REMOVE SCHEMA databaseA.schema2;
```

### Remove data assets

The [DROP TABLE](../sql/syntax.md#drop-table) function only physically removes a data asset from the [!DNL Data Lake] when a single reference to the table exists across all databases in your organization.

```sql
DROP TABLE databaseA.schema2.t1;
```

### Remove a data asset container

Both the database and schema can also be removed using standard SQL functions. 

#### Remove a database

If there are other references to data assets associated with the database, the function will throw an error when attempting to remove the database.

```sql
DROP DATABASE databaseA;
```

#### Remove a schema

There are three important considerations to note when removing a schema:

- Removing a schema does not physically delete any data assets such as tables, views or temporary tables.
- If there are any data assets referenced in the target schema and the mode is RESTRICT, an exception will be thrown. 
- If there are any data assets referenced in the target schema and the mode is CASCADE, the system removes all data assets referenced by the schema container and then deletes the schema container. 

```sql
DROP SCHEMA databaseA.schema2;
```

## Next steps

By reading this document, you now have a better understanding of the best practices regarding the organization and structure of your data assets for use with Adobe Experience Platform Query Service. It is recommended to continue learning about Query Service best practices by reading about [data deduplication documentation](../essential-concepts/deduplication.md).
