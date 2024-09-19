---
title: Build Audiences using SQL
description: Learn how to use the SQL audience extension in Adobe Experience Platform's Data Distiller to create, manage, and publish audiences using SQL commands. This guide covers the entire audience lifecycle from creation, profile additions and deletions, to targeting file-based destinations with data-driven audience definitions.
---
# Build Audiences using SQL

This document covers how to use the SQL audience extension in Adobe Experience Platform's Data Distiller to create, manage, and publish audiences using SQL commands.

Use the SQL audience extension to build audiences with data from the data lake, including any existing dimension entities. This extension allows you to define audience segments directly using SQL, offering flexibility without needing raw data in your profiles. Audiences created using this method are automatically registered in the Audience workspace, where you can further target them to file-based destinations.

![Infographic showing the SQL audience extension workflow. The stages include; building audiences with the Query Service using SQL commands, managing them in the Platform UI, to activating them in file-based destinations.](../../images/data-distiller/sql-audiences/sql-audience-extension-workflow.png)

<!-- Up to here -->

## Audience creation lifecycle in Data Distiller {#audience-creation-lifecycle}

Follow these steps to effectively manage your audiences. Created audiences integrate seamlessly into the audience flow, allowing you to build segments from these base audiences and target file-based destinations for customer targeting. Use the following SQL commands to [create](#create-audience), [modify](#add-profiles-to-audience), and [delete](#delete-audience) audiences within Adobe Experience Platform.

### Create an audience {#create-audience}

Use the `CREATE AUDIENCE AS SELECT` command to define a new audience. The created audience is saved in a dataset and registered in the Audience workspace under Data Distiller.

```sql
CREATE AUDIENCE table_name  
WITH (primary_identity='IdentitycolName', identity_namespace='Namespace for the identity used', [schema='target_schema_title']) 
AS (select_query)
```

**Parameters:**

- `schema`: Optional. Defines the XDM schema for the dataset created by the query.
- `table_name`: Name of the table and audience.
- `primary_identity`: Specifies the primary identity column for the audience.
- `identity_namespace`: Namespace of the identities.
- `select_query`: A SELECT statement defining the audience.

**Example:**

```sql
CREATE Audience aud_test 
WITH (primary_identity=month, identity_namespace=queryService) 
AS SELECT month FROM profile_dim_date LIMIT 5;
```

**Limitations:**

- Primary identity column must be at the root level.
- New batches overwrite existing datasets; append functionality is currently unsupported.
- Nested attributes are not supported yet.

### Add Profiles to an existing audience {#add-profiles-to-audience}

Use the `INSERT INTO` command to add profiles to an existing audience.

```sql
INSERT INTO table_name 
SELECT select_query
```

**Example:**

```sql
INSERT INTO Audience aud_test 
SELECT month FROM profile_dim_date LIMIT 10;
```

### Delete an audience {#delete-audience}

Use the `DROP AUDIENCE` command to delete an existing audience. If the audience does not exist, an exception occurs unless `IF EXISTS` is specified.

```sql
DROP AUDIENCE [IF EXISTS] [db_name.]table_name
```

**Example:**

```sql
DROP AUDIENCE IF EXISTS aud_test;
```

### Auto-Publish audiences

Audiences created using the SQL extension automatically register under Data Distiller in the Audience workspace. Once registered, these audiences are available for targeting and can be used in file-based destinations, enhancing your segmentation and targeting strategies.

![The Audience workspace in Adobe Experience Platform, showing Data Distiller audiences automatically published and ready for use.](../../images/data-distiller/sql-audiences/audiences.png)

## Use Data Distiller Audiences in Destinations

Activate your audiences by targeting them to any file-based destination, such as Amazon S3, SFTP, or Azure Blob. The enriched audience attributes are available for further refinement and filtering as needed.

![Flowchart of Adobe Experience Platform destination types, showing public and private/custom destinations, including batch and streaming options.](../../images/data-distiller/sql-audiences/destination-types.png)

## Next steps

After reading this document, you have learned how to use the SQL audience extension in Data Distiller to effectively create, manage, and publish audiences using SQL commands. You can now customize audience definitions based on your unique business requirements and activate them across various destinations, optimizing your marketing strategies and data-driven decisions.

<!-- Add next step -->

