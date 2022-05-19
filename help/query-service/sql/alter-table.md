---
title: Use the ALTER TABLE Command to Set an Identity or a Primary Identity
description: The functionality of the ALTER TABLE command has been expanded in Adobe Experience Platform Query Service to allow users to set an identity or a primary identity to existing tables. The document explains how to use the ALTER TABLE command to set a primary identity or secondary identity.
---
# Use the ALTER TABLE Command to Set an Identity or a Primary Identity

Adobe Experience Platform Query Service has added new constraints for the `ALTER TABLE` command that allows you to mark dataset columns as either primary or secondary identities. This feature can be used to ensure that flagged fields are consistent with data privacy requirements. With this command you can mark columns as an identity or primary identity, and add or delete constraints for both primary and secondary identity table columns directly through SQL.

## Getting started 

See the SQL syntax guide for [full instructions on the use of the `ALTER TABLE` command](../sql/syntax.md). You are also recommended to have a good understanding of data privacy requirements before improving your datasets to comply with data privacy regulations. If you have not done so already, you should read the [Data Governance overview](../../data-governance/home.md) for more information.

## Add constraints {#add-constraints}

The `ALTER TABLE` command allows you to label a dataset column as a person's identity and then use that label as a primary identity. It does this by updating the associated metadata using SQL. This is especially useful when datasets are created through SQL rather than directly from a schema through the Platform UI. The command can be used to ensure that your data operations within Platform are compliant with data usage policies.

The following example adds a constraint to the existing `t1` table. The values of the "id" column are now marked as primary IDs with the namespace of 'IDFA'.

**examples**

```sql
ALTER TABLE t1 ADD CONSTRAINT PRIMARY IDENTITY (id) NAMESPACE 'IDFA';
```

The second example ensures that the `id` column is marked as a secondary identity.

```sql
ALTER TABLE t1 ADD CONSTRAINT IDENTITY(id) NAMESPACE 'IDFA';
```

## Drop Constraints {#drop-constraints}

The following example removes the requirement that the `c1` column be labeled a primary identity in the existing `t1` table.

**examples**

```sql
ALTER TABLE t1 DROP CONSTRAINT PRIMARY IDENTITY (c1) ;
```

As seen below, the same syntax is used to when removing an identity constraint.

```sql
ALTER TABLE t1 DROP CONSTRAINT IDENTITY (c1) ;
```

## Show identities

Use the metadata command `show identities` from the command line interface to display a table with every attributes that is assigned as an identity.

```shell
> show identities;
```

## XDM limitations {#limitations}

The list below explains important considerations for updating identities in existing datasets when using XDM.

1. To specify a column as an identity, you **must** also define the namespace to be preserved as metadata for the column.
1. XDM does not support specifying a column name in the namespace attribute.
1. If your schema uses the `identityMap` XDM field, the root or top-level **must** be labeled as an identity or primary identity.


## Supported data types

The following table lists the accepted data types for PSQL, XDM, and the accelerated store.

<!-- Are these data types the corresponding equivalents in their respective areas?  -->

<!-- How can I elaborate on the above sentence? Why are these data types relevant to the reader?-->

|--|PSQL client|XDM|DWH|
|1|bigint|int8|bigint|
|2|smallint|int2|smallint|
|3|integer|int4|integer|
|4|tinyint|int1|tinyint|
|5|varchar(len)|string|varchar(len)|
|6|double|float8|double precision|
|7|double precision|float8|double precision|
|8|date|date|date|
|9|datetime|datetime|datetime|
|10|char(len)|string|char(len)|
