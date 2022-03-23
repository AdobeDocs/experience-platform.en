---
keywords: Experience Platform;home;popular topics;query service;Query service;generate datasets;generate dataset;create dataset;
solution: Experience Platform
title: Generate Datasets from Results in Query Service
topic-legacy: queries
type: Tutorial
description: Adobe Experience Platform Query Service allows the creation of datasets from the UI. After a dataset is created, it can be accessed like any other dataset in the Data Lake and used for a variety of use cases.
exl-id: 6f6c049d-f19f-4161-aeb4-3a01eca7dc75
---
# Generate datasets from results in [!DNL Query Service]

[!DNL Query Service] allows you to use queries to generate datasets in the [!DNL Data Lake] in order to use these datasets as input into more queries or in other services such as [!DNL Data Science Workspace], [!DNL Real-time Customer Profile], or [!DNL Analysis Workspace].

## Generate datasets from the [!DNL Experience Platform] user interface

To create datasets from the [!DNL Experience Platform] user interface (UI), follow these steps:

1. Write your query using a connected client and validate the output.

2. Log in to the [!DNL Platform] UI and go to **[!UICONTROL Queries]**.

3. Find your query in the list and hover over the row.

4. Select **[!UICONTROL Output Dataset]**.

    ![Select Output dataset](../images/ui/create-datasets/output-dataset.png)

5. Enter a dataset name, prepended with your LDAP ID (it does not have to be unique or SQL-safe; the system generates a "table name" based on the name given here).

6. Enter a dataset description and select **[!UICONTROL Run query]**.

    ![Run query](../images/ui/create-datasets/run-query.png)

7. Once the query is complete, navigate to **[!UICONTROL Datasets]** to view the dataset you have just created.

After a dataset is created, it can be accessed like any other dataset in the [!DNL Data Lake] and used for a variety of use cases. 

>[!NOTE]
>
>In a live implementation, you must apply Data Governance labels after the dataset is created. 

## Generate datasets with a pre-defined [!DNL Experience Data Model] schema

Use the SQL syntax to generate a dataset with a pre-defined [!DNL Experience Data Model] (XDM) schema. For more information about the syntax that is supported by [!DNL Query Service], please read the [SQL Syntax guide](../sql/syntax.md#create-table-as-select).

## Output datasets

Datasets created through this functionality are generated with an ad hoc schema that matches the structure of the output data as defined in the SQL statement. Some downstream services require datasets with particular XDM schemas. Verify the data formatting requirements for downstream services prior to writing your queries.

## Next steps

After reading this document, you should now understand how to use [!DNL Query Service] to generate datasets from the Platform UI. For more information on how to access, write, and execute queries within the Platform UI, see the [[!DNL Query Service] UI overview](./overview.md).
