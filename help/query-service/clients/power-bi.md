---
keywords: Experience Platform;home;popular topics;query service;Query service;Power BI;power bi;connect to query service;
solution: Experience Platform
title: Connect Power BI to Query Service
description: This document walks through the steps for connecting Power BI with Adobe Experience Platform Query Service.
exl-id: 8fcd3056-aac7-4226-a354-ed7fb8fe9ad7
---
# Connect [!DNL Power BI] to Query Service

This document covers the steps for connecting [!DNL Power BI] Desktop with Adobe Experience Platform Query Service.

## Getting started

This guide requires that you already have access to the [!DNL Power BI] desktop app and are familiar with how to navigate its interface. To download [!DNL Power BI] Desktop or for more information, see the [official [!DNL Power BI] documentation](https://docs.microsoft.com/en-us/power-bi/).

>[!IMPORTANT]
>
> The [!DNL Power BI] desktop application is **only** available on Windows devices.

To acquire the necessary credentials for connecting [!DNL Power BI] to Experience Platform, you must have access to the Queries workspace in the Platform UI. Please contact your organization administrator if you do not currently have access to the queries workspace. 

After installing [!DNL Power BI], you will need to install `Npgsql`, a .NET driver package for PostgreSQL. More information about Npgsql can be found in the [Npgsql documentation](https://www.npgsql.org/doc/index.html).

>[!IMPORTANT]
>
>You must download v4.0.10 or lower, as newer versions result in errors.

Under "[!DNL Npgsql GAC Installation]" on the custom setup screen, select **[!DNL Will be installed on local hard drive]**. 

To ensure that Npgsql has been properly installed, please restart your computer before proceeding to the next steps.

## Connect [!DNL Power BI] to Query Service {#connect-power-bi}

To connect [!DNL Power BI] to Query Service, open [!DNL Power BI] and select **[!DNL Get Data]** in the top menu ribbon. Next, enter "[!DNL PostgreSQL]" in the search bar to narrow the list of data sources. From the results that appear, select **[!DNL PostgreSQL database]**, followed by **[!DNL Connect]**.

<!-- ![The [!DNL Power BI] dashboard Home tab with Get data highlighted.](../images/clients/power-bi/open-power-bi.png) -->


<!-- ![The Get data dialog with [!DNL PostgreSQL] database and Connect highlighted.](../images/clients/power-bi/get-data.png) -->

The [!DNL PostgreSQL] database dialog appears, requesting values for your server and database. Additional instructions on how to [connect to a PostgreSQL database from Power Query Desktop](https://learn.microsoft.com/en-us/power-query/connectors/postgresql#connect-to-a-postgresql-database-from-power-query-desktop) can be found in the official [!DNL PowerBI] documentation.

These required values are taken from your Adobe Experience Platform credentials. To find your credentials, log in to the Platform UI and select **[!UICONTROL Queries]** from the left navigation, followed by **[!UICONTROL Credentials]**. For more information on finding your database name, host, port, and login credentials, please read the [credentials guide](../ui/credentials.md). 

![The Experience Platform Queries workspace with the Credentials tab and Expiring credentials highlighted.](../images/clients/power-bi/query-service-credentials-page.png)

In the **[!DNL Server]** field of the [!DNL PostgreSQL database] dialog, enter the value for the host found in the Query Service [!UICONTROL Credentials] section. For production, add port `:80` to the end of the host string. For example, `made-up.platform-query.adobe.io:80`.

The **[!DNL Database]** field can be either "all" or a dataset table name. For example, `prod:all`.

>[!IMPORTANT]
>
>Nested data structures in third-party BI tools can be flattened to improve their usability and reduce the required workload to retrieve, analyze, transform and report data. See the documentation on the[`FLATTEN` feature](../best-practices/flatten-nested-data.md) for instructions on how to activate this setting when connecting to a database.

<!-- ![The [!DNL Power BI] dashboard with the server and database input fields highlighted.](../images/clients/power-bi/postgresql-database-dialog.png) -->

### Data Connectivity mode {#data-connectivity-mode} 

Next, you can select your **[!DNL Data Connectivity mode]**. In the [!DNL PostgreSQL database] dialog, select **[!DNL Import]** followed by **[!DNL OK]** to display a list of all available tables, or select **[!DNL DirectQuery]** to query the data source directly without importing or copying data directly into [!DNL Power BI]. 

To learn more about the **[!DNL Import]** mode, please read the section on [importing a table](#import). To learn more about **[!DNL DirectQuery]** mode, please read the section on [querying a dataset without importing data](#direct-query). 

Select **[!DNL OK]** after confirming your database details.

### Authentication {#authentication}

After confirming your data connectivity mode, a prompt asking for your username, password, and application settings appears. The username in this case is your Organization ID and the password is your authentication token. Both can be found on the Query Service credentials page.

Fill in these details, then select **[!DNL Connect]** to continue to the next step. 

<!-- ![The database dialog with Username, Password, and application settings dropdown menu highlighted.](../images/clients/power-bi/import-mode.png) -->

## Import a table {#import}

By selecting the **[!DNL Import]** [!DNL Data Connectivity mode], the full dataset is imported which allows you to use the selected tables and columns within the [!DNL Power BI] desktop application as-is.

>[!IMPORTANT]
>
>To see data changes that have occurred since the initial import, you must refresh the data within [!DNL Power BI] by importing the full dataset again.

To import a table, enter the server and database details [as described above](#connect-power-bi) and select the **[!DNL Import]** [!DNL Data Connectivity mode], followed by **[!DNL OK]**. The [!DNL Navigator] dialog appears, displaying a list of all the available tables. Select the table you want to preview, followed by **[!DNL Load]** to bring the dataset into Power BI. The table is now imported into [!DNL Power BI].

[General information on connecting to data in the PowerBi desktop](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-quickstart-connect-to-data#connect-to-data) app can be found in the official documentation. 

<!-- ![The Navigator dialog with a table and Load highlighted.](../images/clients/power-bi/preview-table.png) -->

<!-- ![The [!DNL Power BI] dashboard with instructions on creating custom visualizations highlighted.](../images/clients/power-bi/import-table.png) -->

### Import tables using custom SQL

[!DNL Power BI] and other third-party tools like [!DNL Tableau] do not currently allow users to import nested objects, such as XDM objects in Platform. To account for this, [!DNL Power BI] allows you to use custom SQL to access these nested fields and create a flattened view of the data. [!DNL Power BI] then loads this flattened view of the previously nested data as a normal table.

From the [!DNL PostgreSQL database] dialog, select **[!DNL Advanced options]** to enter a custom SQL query in the **[!DNL SQL statement]** section. This custom query should be used to flatten your JSON name-value pairs into a table format. The official documentation also provides information on how to [connect PowerBI using an SQL statement in the advanced options](https://learn.microsoft.com/en-us/power-query/connectors/postgresql#connect-using-advanced-options).

<!-- ![The [!DNL PostgreSQL] database dialog with the data connectivity mode advanced options highlighted. These allow you to create a custom SQL statement.](../images/clients/power-bi/custom-sql-statement.png) -->

After you have entered your customized query, select **[!DNL OK]** to continue with connecting your database. See the [authentication](#authentication) section above for guidance on connecting a database from this part of the workflow.

Once authentication is complete, a preview of the flattened data appears in the [!DNL Power BI] Desktop dashboard as a table. The server and database name are listed at the top of the dialog. Select **[!DNL Load]** to complete the import process.

<!-- ![A visualization of a flattened, imported table in the [!DNL Power BI] dashboard.](../images/clients/power-bi/imported-table-preview.png) -->

The visualizations are now available for editing and exporting from the [!DNL Power BI] Desktop app. 

## Query the dataset without importing data {#direct-query}
 
The **[!DNL DirectQuery]** [!DNL Data Connectivity mode] queries the data source directly without importing or copying data into the [!DNL Power BI] Desktop. Using this connection mode, you can refresh all visualizations with current data through the UI. However, the time required to produce or refresh the visualization will vary depending on the performance of the underlying data source.

More information on [the use of [!DNL DirectQuery]](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-use-directquery) as well as a comprehensive discussion about its [connectivity options, use cases, and limitations](https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-directquery-about) can be found in the official [!DNL PowerBI] documentation.

To use this [!DNL Data Connectivity mode], select the **[!DNL DirectQuery]** toggle then **[!DNL Advanced options]** to enter a custom SQL query in the **[!DNL SQL statement]** section. Ensure that **[!DNL Include relationship columns]** is selected. Once you have completed your query, select **[!DNL OK]** to continue.

<!-- ![The [!DNL PostgreSQL] database dialog with the settings required to use the Data Connectivity mode highlighted.](../images/clients/power-bi/direct-query-mode.png) -->

A preview of your query appears. Select **[!DNL Load]** to see the results of the query.

<!-- ![A preview of the tabularized results from the example query.](../images/clients/power-bi/preview-direct-query.png) -->

## Next steps

By reading this document, you should now understand how to connect to the [!DNL Power BI] Desktop app and the different data connection modes available. For more information on how to write and run queries, refer to the [guidance for query execution](../best-practices/writing-queries.md).
