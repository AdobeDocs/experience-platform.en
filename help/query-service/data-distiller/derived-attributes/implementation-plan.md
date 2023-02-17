---
title: Derived Attributes Implementation Plan
description: This process doc describes step by step, how to create a decile bucket of your profiles. - a runbook (Runbooks are a set of standardized written procedures for completing repetitive information technology (IT) processes)
---
# Derived attributes implementation plan

Use Query Service to complete all the necessary steps required to generate derived attributes such as deciles, quartiles, and rankings. This provides an efficient alternative method to create derived attributes for your business use cases. 

This documents explains how you can avoid the many steps typically taken to create derived attributes from your data and enable enable that data for Profile. These steps can be completed through various APIs or the Platform UI

Typically the process requires that you:

* Create a namespace, although an existing namespaces can be used.
* Create the datatype to store the derived attribute.
* Create a field group with that data type to store the derived attribute information.
* Assign the primary identity using that namespace.
* Create the decile schema using the field group and datatype mentioned above.
* Create an empty dataset using your new schema.
* Mark the dataset as profile enabled.

<!-- 
1.Creating the namespace ( through API or UI) (one-time effort per imsOrg + sandbox) or the already existing namespaces can be used.
2.Creating the datatype ( to store derived Attribute) (It can be done through API)
3. Creating a field group with that data types (Steps 2 and 3 can be merged into one) to store derived attribute information
4. Assigning the primary identity using the namespace already created. (needs to be done once per schema)
5. Creating the Decile Schema using the field group/ datatype defined above. This schema should be marked as profile Schema so that the schema can be part of the UNION profile schema and the same can be used in segmentation.
6. Create an empty dataset using the above schema
7. Mark the dataset as profile enabled.
8. Populate the dataset regularly using a Scheduled job.
9. Create the segment and Populate the segment either manually or the job will run overnight.
 -->

This derived attributes implementation plan provides a detailed plan of all the steps you need to take in order to create decile-based derived attributes for use with your Real-Time Customer Profile data.

## Prerequisites

The steps listed below will use the schema registry API. See the documentation on how to [create a schema](https://experienceleague.adobe.com/docs/experience-platform/xdm/api/schemas.html?lang=en#create) with the [schema registry API reference documents](https://developer.adobe.com/experience-platform-apis/references/schema-registry/#tag/Schemas/operation/createSchema).


## Create a table

>[!NOTE]
>
>The SQL query provided below assumes the use of a pre existing namespace.

Use a CTAS query to create a dataset, assign datatypes, and mark it as profile enabled. Your SQL query will follow the format shown in the example below:

```sql
CREATE TABLE your_table_name [IF NOT EXISTS]  (fieldname <data_type> primary identity namespace <namespace>, [filed_name2 >data_type>]) [ WITH(LABEL='PROFILE') ];
```

Profiles can be enabled for profile through the PLatform UI. For more information on marking a dataset as enabled for profile, see the documentation.

<!-- Need link to Profile enablement docs. -->

The example SQL query below, demonstrates how you can leverage Query Service capabilities to perform a variety of tasks in a few lines of SQL. 

```sql
CREATE TABLE decile_table (id text PRIMARY KEY NAMESPACE 'IDFA', 
            decile1Month map<text, integer>, 
            decile3Month map<text, integer>,
            decile6Month map<text, integer>,
            decile9month map<text, integer>,
            decile12month map<text, integer>,
            decilelifetime map<text, integer>) WITH (label='PROFILE');
```

The dataset ID is returned to the console.

```console
Created Table DataSet Id
>
637db88999ba291b62bfa79f
(1 row)
```

Through the use of `label='PROFILE'`, Query Service enables you to do the following steps without any effort on your part.

>[!NOTE]
>
>When the profile enabled dataset is created using Query Service, the `isUpsert` flag is turned **on** by default. This can be overridden using the command `ALTER TABLE <tablename> DROP label Upsert`
>Please see the documentation for more information on the use of the [ALTER TABLE](../../sql/syntax.md#alter-table) command and [label as part of a CTAS query](../../sql/syntax.md#create-table-as-select).

### Step A Create field groups

Looks like a POST request to the Schema Registry API: 
`https://platform.adobe.io/data/foundation/schemaregistry/tenant/fieldgroups`
More info: https://developer.adobe.com/experience-platform-apis/references/schema-registry/#tag/Field-groups/operation/createFieldGroup



### Step B Create a schema 

Looks like a POST request to the Schema Registry API:
`https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas`
More info: https://developer.adobe.com/experience-platform-apis/references/schema-registry/#tag/Schemas/operation/createSchema



### Step C Create a primary identity in the schema

Looks like a POST request to the Schema Registry API:
`https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors`
More info: https://developer.adobe.com/experience-platform-apis/references/schema-registry/#tag/Descriptors/operation/createDescriptor
<!-- More info ExL: /Users/jordanh/Documents/GitHub/Adobe/ens32110/experience-platform.en/help/ingestion/tutorials/streaming-time-series-data.md (Set a primary identity descriptor) -->



### Step D Mark the Schema as profile enabled

Schemas are enabled for use in Real-Time Customer Profile through the addition of a "union" tag within the `meta:immutableTags` attribute of the schema. Enabling a schema for use with Profile can be done using the API or the user interface.

The request must include an `allOf` attribute which references the `$id` of a class. This attribute defines the "base class" that the schema will implement.

I think you can PATCH the schema created in Step B with the Schema Registry API
`https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas/{SCHEMA_ID}` 
<!-- More info at https://developer.adobe.com/experience-platform-apis/references/schema-registry/#tag/Schemas/operation/patchSchema -->

### Step E Create a Dataset that is profile enabled.

Make a POST request to the Catalog Service API `/datasets`. 
This looks like a POST request to: 
`https://platform.adobe.io/data/foundation/catalog/dataSets`
<!-- More info https://developer.adobe.com/experience-platform-apis/references/catalog/#tag/Datasets -->

## Change existing datasets to be enabled for profile {#enable-existing-dataset-for-profile}

The ALTER TABLE SQL construct can be used to make existing datasets enabled for profile. This requires that a profile-enabled tag is added to both the schema and the corresponding dataset. 

```sql
ALTER TABLE your_decile_table ADD label 'PROFILE';
```

>[!NOTE]
>
>On successful execution of the `ALTER TABLE` command, the console returns `ALTER SUCCESS`.

### Add a primary key to an existing dataset {#add-primary-key}

This command requires there to be a primary key set on the dataset, otherwise it results in an error. To set a primary identity using sql, use the query format displayed below.

```sql
ALTER TABLE your_table_name ADD CONSTRAINT <col1> primary identity NAMESPACE <namespace>
```

A practical example might appear similar the one seen below.

```sql
ALTER TABLE test1_dataset ADD CONSTRAINT PRIMARY KEY(id2) NAMESPACE 'IDFA';
```

## Disable a dataset for profile {#disable-dataset-for-profile}

If you want to disable your table for profile uses, you must use the DROP command. An example SQL statement that USES `DROP` is seen below

```sql
ALTER TABLE table_name DROP LABEL 'PROFILE';
```

A practical example might appear similar the one seen below.

```sql
ALTER TABLE decile_table DROP label 'PROFILE';
```

## Use the UPSERT command to allow update and insert functionality

to insert a new record or update existing data into a table. An 
