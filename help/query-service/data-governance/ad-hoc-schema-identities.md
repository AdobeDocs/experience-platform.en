---
title: Set Primary Identities in an Ad Hoc Dataset
description: Adobe Experience Platform Query Service allows you to set an identity or a primary identity for ad hoc schema dataset fields directly through the SQL ALTER TABLE command. The document explains how to use the ALTER TABLE command to set a primary identity or secondary identity.
exl-id: b8e6b87e-c6e5-4688-a936-a3a1510a3c5b
---
# Set primary identities in an ad hoc dataset

Adobe Experience Platform Query Service allows you to mark dataset columns as either primary or secondary identities using constraints for the SQL `ALTER TABLE` command. You can use this feature to ensure that flagged fields are consistent with data privacy requirements. This command allows you to add or delete constraints for both primary and secondary identity table columns directly through SQL.

## Getting started 

Labelling dataset columns as primary or secondary identity requires an understanding of the `ALTER TABLE` SQL command and a good understanding of data privacy requirements. Before continuing with this document, please review the following documentation:

* [The SQL syntax guide for the `ALTER TABLE` command](../sql/syntax.md). 
* [The Data Governance overview](../../data-governance/home.md) for more information.

## Add constraints {#add-constraints}

The `ALTER TABLE` command allows you to label a dataset column as a person's identity and then use that label as a primary identity by updating the associated metadata using SQL. This is especially useful when datasets are created through SQL rather than directly from a schema through the Platform UI. The command can be used to ensure that your data operations within Platform are compliant with data usage policies.

**Examples**

The following example adds a constraint to the existing `t1` table. The values of the `id` column are now marked as primary identities under the `IDFA` namespace. An identity namespace is a keyword that declares the type of identity data that the field represents.

```sql
ALTER TABLE t1 ADD CONSTRAINT PRIMARY IDENTITY (id) NAMESPACE 'IDFA';
```

The second example ensures that the `id` column is marked as a secondary identity.

```sql
ALTER TABLE t1 ADD CONSTRAINT IDENTITY(id) NAMESPACE 'IDFA';
```

## Drop constraints {#drop-constraints}

Constraints can also be removed from table columns using the `ALTER TABLE` command.

**Examples**

The following example removes the requirement that the `c1` column be labeled a primary identity in the existing `t1` table.

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

An example of a returned table is displayed below.

```console
 tableName | columnName | datatype | namespace | ifPrimary
-----------+------------+----------+-----------+----------
(0 rows)
```

## XDM limitations {#limitations}

The following list explains important considerations for updating identities in existing datasets when using XDM.

* To specify a column as an identity, you **must** also define the namespace to be preserved as metadata for the column.
* XDM does not support specifying a column name in the namespace attribute.
* If your schema uses the `identityMap` XDM field, the root or top-level `identityMap` object **must** be labeled as an identity or primary identity.
