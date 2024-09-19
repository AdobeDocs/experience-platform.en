---
title: Build Audiences using SQL
description: Learn how to use the SQL audience extension in Adobe Experience Platform's Data Distiller to create, manage, and publish audiences using SQL commands. This guide covers the entire audience lifecycle from creation, profile additions and deletions, to targeting file-based destinations with data-driven audience definitions.
---
# Build Audiences using SQL

This document covers how to use the SQL audience extension in Adobe Experience Platform's Data Distiller to create, manage, and publish audiences using SQL commands.

Use the SQL audience extension to build audiences with data from the data lake, including any existing dimension entities. This extension allows you to define audience segments directly using SQL, offering flexibility without needing raw data in your profiles. Audiences created using this method are automatically registered in the Audience workspace, where you can further target them to file-based destinations.

![Infographic showing the SQL audience extension workflow. The stages include; building audiences with the Query Service using SQL commands, managing them in the Platform UI, to activating them in file-based destinations.](../../images/data-distiller/sql-audiences/sql-audience-extension-workflow.png)

## Audience creation lifecycle in Data Distiller {#audience-creation-lifecycle}

Follow these steps to effectively manage your audiences. Created audiences integrate seamlessly into the audience flow, allowing you to build segments from these base audiences and target file-based destinations for customer targeting. Use the following SQL commands to [create](#create-audience), [modify](#add-profiles-to-audience), and [delete](#delete-audience) audiences within Adobe Experience Platform.

### Create an audience {#create-audience}

Use the `CREATE AUDIENCE AS SELECT` command to define a new audience. The created audience is saved in a dataset and registered in the [!UICONTROL Audiences] workspace under Data Distiller.

```sql
CREATE AUDIENCE table_name  
WITH (primary_identity='IdentitycolName', identity_namespace='Namespace for the identity used', [schema='target_schema_title']) 
AS (select_query)
```

**Parameters**

Use these parameters to define your SQL audience creation query:

| Parameter          | Description                                                      |
|--------------------|------------------------------------------------------------------|
| `schema`           | Optional. Defines the XDM schema for the dataset created by the query. |
| `table_name`       | Name of the table and audience.                                  |
| `primary_identity` | Specifies the primary identity column for the audience.          |
| `identity_namespace` | Namespace of the identities.                                   |
| `select_query`     | A SELECT statement defining the audience. The syntax of the SELECT query can be found in the [SELECT queries](../../sql/syntax.md#select-queries) section. |

{style="table-layout:auto"}

**Example:**

The following example demonstrates how to structure your SQL audience creation query:

```sql
CREATE Audience aud_test 
WITH (primary_identity=month, identity_namespace=queryService) 
AS SELECT month FROM profile_dim_date LIMIT 5;
```

**Limitations:**

Be aware of the following limitations when using SQL for audience creation:

- The primary identity column **must** be at the root level.
- New batches overwrite existing datasets; append functionality is currently unsupported.
- Nested attributes are not supported yet.

### Add Profiles to an existing audience {#add-profiles-to-audience}

Use the `INSERT INTO` command to add profiles to an existing audience.

```sql
INSERT INTO table_name 
SELECT select_query
```

**Parameters**

The table below explains the parameters required for the `INSERT INTO` command:

| Parameter      | Description                                                                    |
|----------------|--------------------------------------------------------------------------------|
| `table_name`   | The name of the table that was created as part of the create audience command. |
| `select_query` | A SELECT statement. The syntax of the SELECT query can be found in the SELECT queries section. |

{style="table-layout:auto"}

**Example:**

The following example demonstrates how to add profiles to an existing audience with the INSERT INTO command:

```sql
INSERT INTO Audience aud_test 
SELECT month FROM profile_dim_date LIMIT 10;
```

### Delete an audience (DROP AUDIENCE) {#delete-audience}

Use the `DROP AUDIENCE` command to delete an existing audience. If the audience does not exist, an exception occurs unless `IF EXISTS` is specified.

```sql
DROP AUDIENCE [IF EXISTS] [db_name.]table_name
```

**Parameters**

The table contains the parameters required for the `DROP AUDIENCE` command:

| Parameter      | Description                                                                            |
|----------------|----------------------------------------------------------------------------------------|
| `IF EXISTS`    | Optional. If specified, no exception is thrown if the table does not exist.            |
| `db_name`      | Specifies the data group used to qualify the audience dataset.                         |
| `table_name`   | The name of the table that was created as part of the create audience command.         |

{style="table-layout:auto"}

**Example:**

The following example demonstrates how to delete an audience using the DROP AUDIENCE command:

```sql
DROP AUDIENCE IF EXISTS aud_test;
```

### Auto-publish audiences {#auto-publish-audiences}

Audiences created using the SQL extension automatically register under Data Distiller in the Audience workspace. Once registered, these audiences are available for targeting and can be used in file-based destinations, enhancing your segmentation and targeting strategies.

![The Audience workspace in Adobe Experience Platform, showing Data Distiller audiences automatically published and ready for use.](../../images/data-distiller/sql-audiences/audiences.png)

## Activate audiences to destinations {#activate-audiences}

Activate your audiences by targeting them to any file-based destination, such as [!DNL Amazon S3], [!DNL SFTP], or [!DNL Azure Blob]. The enriched audience attributes are available for further refinement and filtering as needed.

![Flowchart of Adobe Experience Platform destination types, showing public and private/custom destinations, including batch and streaming options.](../../images/data-distiller/sql-audiences/destination-types.png)

## Feature clarifications {#faqs}

This section addresses frequently asked questions about creating and managing external audiences using SQL in Data Distiller.

+++Select to reveal questions 

- Are only flat datasets supported for audience creation?
N/A

- Does audience creation result in a single dataset, multiple datasets, or does it vary depending on the configuration?
N/A

- Is the dataset created during audience creation marked for Profile?
N/A

- Is the dataset created on the data lake?                                                                               
N/A

- Can attributes in the audience be used in segmentation within the rule builder? (Yes or No)                               
N/A

- Are attributes in the audience restricted to use only in enterprise batch file-based destinations? (Yes or No)             
N/A

- Can I create an audience of audiences that uses a Data Distiller audience?                                         
N/A

- Do these audiences appear in Adobe Journey Optimizer? If not, what happens when I create a new audience in the rule builder that includes all members of this audience? 
N/A

- How should I create two Data Distiller audiences with different schedules? How many datasets are created, and are they marked for Profile? 
N/A

- How do I delete an audience?                                                                                         
N/A

- When I publish an audience to Profile, how soon is it available in the segment builder UI, and when does it become available in Destinations? 
N/A

- Are Data Distiller audiences processed in batch segmentation by Profile Store? Or are they ad hoc?                 
N/A

- Are Data Distiller audiences deleted every 30 days since they are external audiences?                              
N/A

- Can I apply data usage labels to segment attributes in the Data Governance tab within Segment Browse for Data Distiller audiences?
N/A

- Do Data Distiller Audiences appear in Segment Browse?                                                              
N/A

- Does the segment dashboard display charts for these new audiences?
N/A

+++

## Next steps

After reading this document, you have learned how to use the SQL audience extension in Data Distiller to effectively create, manage, and publish audiences using SQL commands. You can now customize audience definitions based on your unique business requirements and activate them across various destinations, optimizing your marketing strategies and data-driven decisions.

Next, you could read the following documentation to further develop and optimize your Platform audience management strategies:

- **Explore Audience Evaluation**: Learn about the [audience evaluation methods in Adobe Experience Platform](../../../segmentation/home.md#evaluate-segments): streaming segmentation for real-time updates, batch segmentation for scheduled or on-demand processing, and edge segmentation for instant evaluation on the Edge Network.
- **Integrate with Destinations**: Read the guide on how to [export files on-demand to batch destinations](../../../destinations/ui/export-file-now.md) using the Platform Destinations UI.
- **Review Audience Performance**: Analyze how your SQL-defined audiences perform across different channels. Use data insights to adjust and improve your audience definitions and targeting strategies. Read the document on [Audience insights](../../../dashboards/insights/audiences.md) to learn how to access and adapt the SQL queries for audience insights in Adobe Real-time Customer Data Platform. You can then create your own insights and transform raw data into actionable information by customizing the Audiences dashboard to effectively visualize and use these insights for better decision-making.
