---
title: Derived Attributes Implementation Plan
description: This process doc describes step by step, how to create a decile bucket of your profiles. - a runbook (Runbooks are a set of standardized written procedures for completing repetitive information technology (IT) processes)
---
# Derived attributes implementation plan

This derived attributes implementation plan provides a detailed plan of all the steps you need to take in order to ...

create decile-based derived attributes for use with your Real-Time Customer Profile data.

## Prerequisites

The steps listed below will use the schema registry API. See the documentation on how to [create a schema](https://experienceleague.adobe.com/docs/experience-platform/xdm/api/schemas.html?lang=en#create) with the [schema registry API reference documents](https://developer.adobe.com/experience-platform-apis/references/schema-registry/#tag/Schemas/operation/createSchema).

## Create a table

Use a CTAS query to create a dataset, assign datatypes, and mark it as profile enabled. Your SQL query will follow the format shown in teh example below:

```sql
CREATE TABLE your_table_name [IF NOT EXISTS]  (fieldname <data_type> primary identity namespace <namespace>, [filed_name2 >data_type>]) [ WITH(LABEL='PROFILE') ];
```

Profiles can be enabed for profile through the PLatform UIFor more information on marking a dataset as enabled for profile, see the documentation.

An exanple SQL query


```sql
CREATE TABLE decile_table (id text PRIMARY KEY NAMESPACE 'IDFA', 
            decile1Month map<text, integer>, 
            decile3Month map<text, integer>,
            decile6Month map<text, integer>,
            decile9month map<text, integer>,
            decile12month map<text, integer>,
            decilelifetime map<text, integer>) WITH (label='PROFILE');
```

```console
Created Table DataSet Id
>
637db88999ba291b62bfa79f
(1 row)
```


## Step A Create field groups

Looks like a POST request to the Schema Registry API: 
`https://platform.adobe.io/data/foundation/schemaregistry/tenant/fieldgroups`
More info: https://developer.adobe.com/experience-platform-apis/references/schema-registry/#tag/Field-groups/operation/createFieldGroup



## Step B Create a schema 

Looks like a POST request to the Schema Registry API:
`https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas`
More info: https://developer.adobe.com/experience-platform-apis/references/schema-registry/#tag/Schemas/operation/createSchema



## Step C Create a primary identity in the schema

Looks like a POST request to the Schema Registry API:
`https://platform.adobe.io/data/foundation/schemaregistry/tenant/descriptors`
More info: https://developer.adobe.com/experience-platform-apis/references/schema-registry/#tag/Descriptors/operation/createDescriptor
<!-- More info ExL: /Users/jordanh/Documents/GitHub/Adobe/ens32110/experience-platform.en/help/ingestion/tutorials/streaming-time-series-data.md (Set a primary identity descriptor) -->



## Step D Mark the Schema as profile enabled

Schemas are enabled for use in Real-Time Customer Profile through the addition of a "union" tag within the `meta:immutableTags` attribute of the schema. Enabling a schema for use with Profile can be done using the API or the user interface.

The request must include an `allOf` attribute which references the `$id` of a class. This attribute defines the "base class" that the schema will implement.

I think you can PATCH the schema created in Step B with the Schema Registry API
`https://platform.adobe.io/data/foundation/schemaregistry/tenant/schemas/{SCHEMA_ID}` 
<!-- More info at https://developer.adobe.com/experience-platform-apis/references/schema-registry/#tag/Schemas/operation/patchSchema -->

## Step E Create a Dataset that is profile enabled.

Make a POST request to the Catalog Service API `/datasets`. 
This looks like a POST request to: 
`https://platform.adobe.io/data/foundation/catalog/dataSets`
<!-- More info https://developer.adobe.com/experience-platform-apis/references/catalog/#tag/Datasets -->

