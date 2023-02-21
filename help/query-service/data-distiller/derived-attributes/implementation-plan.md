---
title: Derived Attributes Implementation Plan
description: Learn how to create a decile bucket of your profiles and enable them for use with Real-Time Customer Profile only with the use of SQL.
---
# Derived attributes implementation plan

<!-- Perhaps: uninterupted / seamless /coherent Derived Attributes SQL workflow / Seamless SQL flow for derived attributes -->

Use a single SQL statement to generate a profile and upsert-enabled dataset created with decile-based derived attributes for use with Real-Time Customer Profile. This provides an efficient alternative method to create derived attributes such as deciles, quartiles, and rankings for your Real-Time Customer Profile business use cases.

This document explains how you can avoid the many steps typically taken to create derived attributes from your data and enable that data for Profile. Previously, this process would have to be completed through various API calls or Platform UI interactions.

Typically the process requires that you:

* Create a namespace, although an existing namespace can be used.
* Create the datatype to store the derived attribute.
* Create a field group with that datatype to store the derived attribute information.
* Assign the primary identity using that namespace.
* Create the decile schema using the field group and datatype mentioned above.
* Create an empty dataset using your new schema.
* Mark the dataset as profile-enabled.

After completing the steps mentioned above, you are ready to populate the dataset and create segments to produce insights from your data. Query Service allows you to perform all of those actions with a single query and make changes to your datasets and field groups with SQL.

## Create a table, datatype, field group, primary identity, and decile schema, and enable it for profile with SQL {#all-with-sql}

>[!NOTE]
>
>The SQL query provided below assumes the use of a pre-existing namespace.

Use a CTAS query to create a dataset, assign datatypes, set a primary identity, create a decile schema, and mark it as profile-enabled. With this example SQL statement below, you can perform all the steps required to use decile-based attributes with Real-Time Customer Data Profile (Real-Time CDP). Your SQL query will follow the format shown in the example below:

```sql
CREATE TABLE your_table_name [IF NOT EXISTS]  (fieldname <data_type> primary identity namespace <namespace>, [filed_name2 >data_type>]) [ WITH(LABEL='PROFILE') ];
```

Datasets can also be enabled for profile through the Platform UI. For more information on marking a dataset as enabled for profile, see the [enable a dataset for Real-Time Customer Profile documentation](../../../catalog/datasets/user-guide.md#enable-profile).

The example SQL query below demonstrates how you can leverage Query Service capabilities to perform a variety of tasks in a few lines of SQL. 

```sql
CREATE TABLE decile_table (id text PRIMARY KEY NAMESPACE 'IDFA', 
            decile1Month map<text, integer>, 
            decile3Month map<text, integer>,
            decile6Month map<text, integer>,
            decile9month map<text, integer>,
            decile12month map<text, integer>,
            decilelifetime map<text, integer>) WITH (label='PROFILE');
```

On successful execution of the query, the dataset ID is returned to the console.

```console
Created Table DataSet Id
>
637db88999ba291b62bfa79f
(1 row)
```

Through the use of `label='PROFILE'`, Query Service enables you to do the following steps without any effort on your part.

>[!NOTE]
>
>When the profile-enabled dataset is created using Query Service, the `isUpsert` flag is turned **on** by default. This can be overridden using the command `ALTER TABLE <tablename> DROP label Upsert`
>Please see the documentation for more information on the use of the [ALTER TABLE](../../sql/syntax.md#alter-table) command and [label as part of a CTAS query](../../sql/syntax.md#create-table-as-select).

## Constructs to help with managing derived attributes through SQL

The features described below are of great benefit when managing derived attributes through SQL.

### Change existing datasets to be enabled for profile {#enable-existing-dataset-for-profile}

The ALTER TABLE SQL construct can be used to make existing datasets enabled for profile. This requires that a profile-enabled tag is added to both the schema and the corresponding dataset. 

```sql
ALTER TABLE your_decile_table ADD label 'PROFILE';
```

>[!NOTE]
>
>On successful execution of the `ALTER TABLE` command, the console returns `ALTER SUCCESS`.

### Add a primary key to an existing dataset {#add-primary-key}

This command requires there to be a primary key set on the dataset, otherwise, it results in an error. To set a primary identity using SQL, use the query format displayed below.

```sql
ALTER TABLE your_table_name ADD CONSTRAINT <col1> primary identity NAMESPACE <namespace>
```

A practical example might appear similar to the one seen below.

```sql
ALTER TABLE test1_dataset ADD CONSTRAINT PRIMARY KEY(id2) NAMESPACE 'IDFA';
```

### Disable a dataset for profile {#disable-dataset-for-profile}

If you want to disable your table for profile uses, you must use the DROP command. An example SQL statement that USES `DROP` is seen below.

```sql
ALTER TABLE table_name DROP LABEL 'PROFILE';
```

A practical example might appear similar to the one seen below.

```sql
ALTER TABLE decile_table DROP label 'PROFILE';
```

This SQL statement provides an efficient alternative method to using an API call. For more information, see the documentation on how to [disable a dataset for use with Real-Time CDP using the datasets API](../../../catalog/datasets/enable-upsert.md#disable-the-dataset-for-profile). 

### Allow update and insert functionality for your dataset {#enable-upsert-functionality-for-dataset}

The UPSERT command allows you to insert a new record or update existing data in a table. Specifically, it allows you to update an existing row if a specified value already exists in a table, or insert a new row if the specified value doesn't already exist.

An example statement that uses the correct format is seen below.

```sql
ALTER TABLE table_name ADD LABEL 'UPSERT';
```

A practical example might appear similar to the one seen below.

```sql
ALTER TABLE table_with_a_decile ADD label 'UPSERT';
```

This SQL statement provides an efficient alternative method to using an API call. For more information, see the documentation on how to [enable a dataset for use with Real-Time CDP and UPSERT using the datasets API](../../../catalog/datasets/enable-upsert.md#enable-the-dataset).

### Disable update and insert functionality for your dataset {#disable-upsert-functionality-for-dataset}

This command disables the ability to update and insert rows into your dataset.

An example statement that uses the correct format is seen below.

```sql
ALTER TABLE table_name DROP LABEL 'UPSERT';
```

A practical example might appear similar to the one seen below.

```sql
ALTER TABLE table_with_a_decile DROP label 'UPSERT';
```

### Show additional table information associated with each table {#show-labels-for-tables}

The `SHOW TABLES` command now displays an extra `labels` column to provide information on any labels associated with tables.

An example of this command's output can be seen below:

```sql
       name          |        dataSetId         |     dataSet    | description | labels 
---------------------+--------------------------+----------------+-------------+----------
 luma_midvalues      | 5bac030c29bb8d12fa992e58 | Luma midValues |             | false
 luma_postvalues     | 5c86b896b3c162151785b43c | Luma midValues |             | false
 table_with_a_decile | 5c86b896b3c162151785b43c | Luma midValues |             | 'UPSERT', 'PROFILE'
(3 rows)
```

### Create a field group with SQL

Field groups can now be created through the use of SQL. This provides an alternative to using the Schema Editor within the Platform UI or making an API call to the schema registry. 

An example statement to create a field group can be seen below.

```sql
CREATE FIELDGROUP <field_group_name> [IF NOT EXISTS]  (field_name <data_type> primary identity namespace <namespace>, [field_name_2 >data_type>]) [ WITH(LABEL='PROFILE') ];
```

>[!IMPORTANT]
>
>Field group creation through SQL will fail if the `label` flag is not supplied in the statement or if the field group already exists. 
>Ensure that the query includes an `IF NOT EXISTS` clause to avoid the query failing because the field group already exists.

A real-world example might appear similar to the one seen below.

```sql
CREATE FIELDGROUP field_group_for_decile (decile<sup>1</sup>Month map<text, integer>, decile3Month map<text, integer>, decile6Month map<text, integer>, decile9Month map<text, integer>, decile12Month map<text, integer>, decilelietime map<text, integer>) WITH (LABEL-'PROFILE');
```

Successful execution of this statement returns the created field group ID. For example `c731a1eafdfdecae1683c6dca197c66ed2c2b49ecd3a9525`.

See the documentation on how to [create a new field group in the Schema Editor](../../../xdm/ui/resources/field-groups.md#create) or using the [schema registry API](../../../xdm/api/field-groups.md#create) for more information on alternative methods.

### Drop a field group

It may occasionally be necessary to remove a field group from the Schema Registry. This is done by executing the `DROP FIELDGROUP` command with the field group ID.

```sql
DROP FIELDGROUP your_field_group_id;
```

A practical example might appear similar to the one seen below.

```sql
DROP FIELDGROUP field_group_for_decile;
```

>[!IMPORTANT]
>
>Deleting a field group through SQL will fail if the field group does not exist. Ensure that the statement includes an `IF EXISTS` clause to avoid the query failing.

### Show all the field group names and IDs for your tables

The `SHOW FIELDGROUPS` command returns a table that contains the name, fieldgroupId, and owner of the tables.

An example of this command's output can be seen below:

```sql
       name                      |        fieldgroupId                             |     owner      |
---------------------------------+-------------------------------------------------+-----------------
 AEP Mobile Lifecycle Details    | _experience.aep-mobile-lifecycle-details        | Luma midValues |
 AEP Web SDK ExperienceEvent     | _experience.aep-web-sdk-experienceevent         | Luma midValues |
 AJO Classification Fields       | _experience.journeyOrchestration.classification | Luma midValues |
 AJO Entity Fields               | _experience.customerJourneyManagement.entities  | Luma midValues |
(4 rows)
```

## Next steps

After reading this document, you have a better understanding of how to use SQL to create a profile and upsert-enabled dataset based on derived attributes. You are now ready to use this dataset with batch ingestion workflows to make updates to your profile data. To learn more about ingesting data into Adobe Experience Platform, please begin by reading the [data ingestion overview](../../../ingestion/home.md).
