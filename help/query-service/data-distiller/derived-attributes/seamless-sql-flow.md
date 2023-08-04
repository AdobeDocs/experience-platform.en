---
title: Seamless SQL Flow for Derived Attributes
description: Query Service SQL has been extended to provide seamless support for derived attributes. Learn how to use this SQL extension to create a derived attribute that is enabled for profile, and how to use the attribute for Real-Time Customer Profile and Segmentation Service.
exl-id: bb1a1d8d-4662-40b0-857a-36efb8e78746
---
# Seamless SQL flow for derived attributes

Query Service SQL has been extended to provide seamless support for derived attributes. This provides an efficient alternative method to create derived attributes for your Real-Time Customer Profile business use cases.

This document outlines various convenient SQL extensions that generate a derived attribute for use with Real-Time Customer Profile. The workflow simplifies the process that you would otherwise have to complete through various API calls or Platform UI interactions.

Typically, generating and publishing an attribute for Real-Time Customer Profile would involve the following steps:

* Create an identity namespace, if one does not already exist.
* Create the datatype to store the derived attribute, if necessary.
* Create a field group with that datatype to store the derived attribute information.
* Create or assign a primary identity column with the namespace created earlier.
* Create a schema using the field group and datatype created earlier.
* Create a new dataset using your schema and enable it for profile, if needed.
* Optionally mark a dataset as profile-enabled.

After completing the steps mentioned above, you are ready to populate the dataset. If you enabled the dataset for profile, you can also create segments that refer to the new attribute and begin producing insights.

Query Service allows you to perform all of the actions listed above using SQL queries. This includes making changes to your datasets and field groups if needed.

## Create a table with an option to enable it for profile {#enable-dataset-for-profile}

>[!NOTE]
>
>The SQL query provided below assumes the use of a pre-existing namespace.

Use a Create Table as Select (CTAS) query to create a dataset, assign datatypes, set a primary identity, create a schema, and mark it as profile-enabled. The example SQL statement below creates attributes and makes it available for Real-Time Customer Data Profile (Real-Time CDP). Your SQL query will follow the format shown in the example below:

```sql
CREATE TABLE <your_table_name> [IF NOT EXISTS] (fieldname <your_data_type> primary identity namespace <your_namespace>, [field_name2 <your_data_type>]) [WITH(LABEL='PROFILE')];
```

The data types supported are: boolean, date, datetime, text, float, bigint, integer, map, array, and struct/row.

The SQl codeblock below provides examples to define struct/row, map, and array datatypes. Line one demonstrates row syntax. Line two demonstrates map syntax, and line three, array syntax.

```sql {line-numbers="true"}
ROW (Column_name <data_type> [, column name <data_type> ]*)
MAP <data_type, data_type>
ARRAY <data_type>
```

Alternatively, datasets can also be enabled for profile through the Platform UI. For more information on marking a dataset as enabled for profile, see the [enable a dataset for Real-Time Customer Profile documentation](../../../catalog/datasets/user-guide.md#enable-profile).

In the example query below, the `decile_table` dataset is created with `id` as the primary identity column and has the namespace `IDFA`. It also has a field named `decile1Month` of the map data type. The table created (`decile_table`) is enabled for profile.

```sql
CREATE TABLE decile_table (id text PRIMARY KEY NAMESPACE 'IDFA', 
            decile1Month map<text, integer>) WITH (label='PROFILE');
```

On successful execution of the query, the dataset ID is returned to the console, as seen in the example below. 

```console
Created Table DataSet Id
>
637fd84969ba291e62dba79f
(1 row)
```

Use `label='PROFILE'` on a `CREATE TABLE` command to create a profile-enabled dataset. The `upsert` capability is turned on by default. The `upsert` capability can be overwritten using the `ALTER` command, as demonstrated in the example below.

```sql
ALTER TABLE <your_table_name> DROP label upsert;
```

See the SQl syntax documentation for more information on the use of the [ALTER TABLE](../../sql/syntax.md#alter-table) command and [label as part of a CTAS query](../../sql/syntax.md#create-table-as-select).

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

### Add a primary identity to an existing dataset {#add-primary-identity}

Mark an existing column in a dataset as a primary identity set, otherwise, it results in an error. To set a primary identity using SQL, use the query format displayed below.

```sql
ALTER TABLE <your_table_name> ADD CONSTRAINT primary identity NAMESPACE
```

For example:

```sql
ALTER TABLE test1_dataset ADD CONSTRAINT PRIMARY KEY(id2) NAMESPACE 'IDFA';
```

In the example provided, `id2` is an existing column in `test1_dataset`.

### Disable a dataset for profile {#disable-dataset-for-profile}

If you want to disable your table for profile uses, you must use the DROP command. An example SQL statement that USES `DROP` is seen below.

```sql
ALTER TABLE table_name DROP LABEL 'PROFILE';
```

For example:

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

For example:

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

For example:

```sql
ALTER TABLE table_with_a_decile DROP label 'UPSERT';
```

### Show additional table information associated with each table {#show-labels-for-tables}

Additional metadata is kept for profile-enabled datasets. Use the `SHOW TABLES` command to display an extra `labels` column that provides information on any labels associated with tables.

An example of this command's output can be seen below:

```sql
       name          |        dataSetId         |     dataSet    | description | labels 
---------------------+--------------------------+----------------+-------------+----------
 luma_midvalues      | 5bac030c29bb8d12fa992e58 | Luma midValues |             | false
 luma_postvalues     | 5c86b896b3c162151785b43c | Luma midValues |             | false
 table_with_a_decile | 5c86b896b3c162151785b43c | Luma midValues |             | 'UPSERT', 'PROFILE'
(3 rows)
```

You can see from the example that `table_with_a_decile` has been enabled for profile and applied with labels such as ['UPSERT'](#enable-upsert-functionality-for-dataset), ['PROFILE'](#enable-existing-dataset-for-profile) as described earlier.

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
CREATE FIELDGROUP field_group_for_test123 (decile1Month map<text, integer>, decile3Month map<text, integer>, decile6Month map<text, integer>, decile9Month map<text, integer>, decile12Month map<text, integer>, decilelietime map<text, integer>) WITH (LABEL-'PROFILE');
```

Successful execution of this statement returns the created field group ID. For example `c731a1eafdfdecae1683c6dca197c66ed2c2b49ecd3a9525`.

See the documentation on how to [create a new field group in the Schema Editor](../../../xdm/ui/resources/field-groups.md#create) or using the [schema registry API](../../../xdm/api/field-groups.md#create) for more information on alternative methods.

### Drop a field group

It may occasionally be necessary to remove a field group from the Schema Registry. This is done by executing the `DROP FIELDGROUP` command with the field group ID.

```sql
DROP FIELDGROUP [IF EXISTS] <your_field_group_id>;
```

For example:

```sql
DROP FIELDGROUP field_group_for_test123;
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
