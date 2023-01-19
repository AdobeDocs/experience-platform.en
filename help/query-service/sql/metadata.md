---
keywords: Experience Platform;home;popular topics;PSQL;psql;Query service;query service;metadata;commands;metadata commands;
solution: Experience Platform
title: Metadata PostgreSQL Commands in Query Service
description: A list of PostgreSQL commands that are currently supported for querying metadata in Adobe Experience Platform Query Service.
exl-id: bfcbad55-3086-44c9-9938-6ba0504e747b
---
# Metadata [!DNL PostgreSQL] commands in Query Service

For metadata on your dataset, the following [!DNL PostgreSQL] commands are currently supported for querying:

>[!NOTE]
>
>The commands listed below are case sensitive.

|Command | Description|
|------- | ------------|
|`\conninfo` | Outputs information about the current database connection.|
|`\d` | Displays a list of all visible tables, views, materialized views, sequences, and foreign tables.|
|`\dE` | Displays a list of foreign tables.|
|`\df or \df+` | Displays a list of functions.|
|`\di` | Displays a list of indexes.|
|`\dm` | Displays a list of materialized views.|
|`\dn` | Displays a list of schemas (namespaces).|
|`\ds` | Displays a list of sequences.|
|`\dS` | Displays a list of PostgreSQL-defined tables.|
|`\dt` | Displays a list of tables.|
|`\dT` | Displays a list of data types.|
|`\dv` | Displays a list of views.|
|`\encoding` | Lists the current  client character set encoding.|
|`\errverbose` | Repeats the most recent server error message at maximum verbosity.|
|`\l or \list` | Displays a list of databases in the server.|
|`\set` | Displays the names and values of all current psql variables.|
|`\showtables` | Shows the following information: <br>name: The name by which the table will be referred to.<br>datasetId: The ID of the dataset which is stored.<br>dataset: The name of the dataset which is stored.<br>description: A description of the dataset.<br>resolved: A boolean value which states whether or not the dataset is resolved in the current session.|
|`\timing` | Toggles the display between on and off. The display is in milliseconds. Intervals longer than one second are shown in minutes:seconds format, with hours and days fields added when needed.|

All of the commands that start with `\d` can be combined. For example, you can issue `\dtsn` to display a list of all tables, sequences, and schemas. `\d` by itself shows all visible tables, views, materialized views, and sequences.

For additional information about the commands listed above, please refer to the documentation at [postgresql.org](https://www.postgresql.org/docs/10/app-psql.html). However, please be aware that not all the options shown in the [!DNL PostgreSQL] documentation are supported by [!DNL Experience Platform].
