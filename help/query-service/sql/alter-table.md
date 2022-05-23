---
title: Use the ALTER TABLE Command to Set an Identity or a Primary Identity
description: The functionality of the ALTER TABLE command has been expanded in Adobe Experience Platform Query Service to allow users to set an identity or a primary identity to existing tables. The document explains how to use the ALTER TABLE command to set a primary identity or secondary identity.
---
# Use the ALTER TABLE command to set an identity or a primary identity

Adobe Experience Platform Query Service has added new constraints for the `ALTER TABLE` command that allows you to mark dataset columns as either primary or secondary identities. This feature can be used to ensure that flagged fields are consistent with data privacy requirements. With this command you can mark columns as an identity or primary identity, and add or delete constraints for both primary and secondary identity table columns directly through SQL.

## Getting started 

Labelling dataset columns as primary or secondary identiy requires an understanding of the `ALTER TABLE` SQL command and a good understanding of data privacy requirements. Before continuing with this document, please review the following documentation:

* [The SQL syntax guide for the `ALTER TABLE` command](../sql/syntax.md). 
* [The Data Governance overview](../../data-governance/home.md) for more information.

## Add constraints {#add-constraints}

The `ALTER TABLE` command allows you to label a dataset column as a person's identity and then use that label as a primary identity by updating the associated metadata using SQL. This is especially useful when datasets are created through SQL rather than directly from a schema through the Platform UI. The command can be used to ensure that your data operations within Platform are compliant with data usage policies.

**Examples**

The following example adds a constraint to the existing `t1` table. The values of the `id` column are now marked as primary IDs with the namespace of `IDFA`.

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

## XDM limitations {#limitations}

The following list explains important considerations for updating identities in existing datasets when using XDM.

1. To specify a column as an identity, you **must** also define the namespace to be preserved as metadata for the column.
1. XDM does not support specifying a column name in the namespace attribute.
1. If your schema uses the `identityMap` XDM field, the root or top-level **must** be labeled as an identity or primary identity.
