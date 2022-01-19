---
title: Best Practices for Data Asset Organization in Query Service
description: This document outlines a logical means of organizing data for ease of use with Query Service.
---
# Organize data assets in Query Service

This document provides guidance on best practices for organizing data assets for use with Adobe Experience Platform Query Service. It covers how to structure your data as well as information on how to access, update and delete this information.

Query Service provides for the logical organization of Experience Platform data by using database and schema constructs. Tables are used to define the relations between data-points meaning that the data is not physically moved but the system still allows for data sharing. A key benefit of this approach is that the same data asset is thereby available in various schemas without physically moving data assets.

## Getting started

Before continuing with this document, it is recommended to have a good understanding of [Query Service](../home.md) features and have completed the [authentication tutorial](../../landing/api-authentication.md).

## Organizing data in Query Service

Use standard SQL syntax to create a database to act as a container for the logical organization of your data. A database can contain one or more schemas and each schema can then have one or more references to a physical dataset. These references include any relationships or associations between the datasets. The following example (slightly truncated for brevity) demonstrates this methodology where `databaseA` contains schema `schema1`. 

```SQL
CREATE DATABASE databaseA;
CREATE SCHEMA databaseA.schema1;
CREATE table t1 ...;
CREATE view v1 ...;
ALTER TABLE t1 ADD PRIMARY KEY (c1) NOT ENFORCED;
ALTER TABLE t2 ADD FOREIGN KEY (c1) REFERENCES t1(c1) NOT ENFORCED;
```

## Associating data assets to a schema

Once a schema has been created to act as a container for the data assets, each dataset can be associated with any schema using standard SQL ALTER TABLE syntax.
The following example demonstrates how to add data assets to the logical container `databaseA.schema1` created in the previous example.

```SQL
ALTER TABLE dataset1 SET SCHEMA databaseA.schema1;
 
ALTER TABLE dataset2 SET SCHEMA databaseA.schema1;
 
ALTER TABLE dataset3 SET SCHEMA databaseA.schema1;
 
ALTER VIEW v1  SET SCHEMA databaseA.schema1;
```

## Accessing data assets from the data container

By appropriately qualifying the database name, any [!DNL PostgreSQL] client can connect to any of the data organization you have created using the SHOW keyword. For more information on the SHOW keyword please see the [SQL Syntax SHOW documetation](../sql/syntax.md#show).

When you make a [!DNL PostgreSQL] connection using `dbname="all"`, you can access any database and schema that you have created to logically organize your data.

The following examples demonstrate the accessibility of this organizational structure.

Listing all databases under `dbname="all"` displays three available databases.

```sql
SHOW DATABASES;
  
name     
---------
databaseA
databaseB
databaseC
```

Listing all schema under  `dbname="all"` displays three schema related to two databases.

```SQL
SHOW SCHEMAS;
  
database       | schema
----------------------
databaseA      | schema1
databaseA      | schema2
databaseB      | schema3
```

## Updating/Removing data assets from a data container

Individual assets can be removed from the organization container by referencing the appropriate database and schema name.

### Removing data assets

The DROP TABLE syntax only physically removes the data asset from the data lake if and only a single reference remains in all logical container.

### Removing logical data asset container

The database and schema acting as the logical data asset containers can be removed using standard sql functions.
