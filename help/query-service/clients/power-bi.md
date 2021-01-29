---
keywords: Experience Platform;home;popular topics;query service;Query service;Power BI;power bi;connect to query service;
solution: Experience Platform
title: Connect Power BI to Query Service
topic: connect
description: This document walks through the steps for connecting Power BI with Adobe Experience Platform Query Service.
---

# Connect [!DNL Power BI] to Query Service (PC)

This document covers the steps for connecting Power BI with Adobe Experience Platform Query Service.

>[!NOTE]
>
> This guide assumes you already have access to [!DNL Power BI] and are familiar with how to navigate its interface. More information about [!DNL Power BI] can be found in the [official [!DNL Power BI] documentation](https://docs.looker.com/).
>
> Additionally, Power BI is **only** available on Windows devices.

## Set up [!DNL Power BI]

After installing Power BI, you will need to install `Npgsql`, a .NET driver package for PostgreSQL. More information about Npgsql can be found in the [Npgsql documentation](https://www.npgsql.org/doc/index.html).

>[!IMPORTANT]
>
>You must download v4.0.10 or lower, as newer versions result in errors.

Under "[!DNL Npgsql GAC Installation]" on the custom setup screen, select **[!DNL Will be installed on local hard drive]**. 

To ensure that npgsql has properly installed, please restart your computer before proceeding to the next steps.

## Connect [!DNL Power BI] to [!DNL Query Service]

To connect [!DNL Power BI] to [!DNL Query Service], open [!DNL Power BI] and select **[!DNL Get Data]** in the top menu ribbon.

![](../images/clients/power-bi/open-power-bi.png)

Select **[!DNL PostgreSQL database]**, followed by **[!DNL Connect]**.

![](../images/clients/power-bi/get-data.png)

You can now enter values for the server and database. For more information on finding your database name, host, port, and login credentials, visit the [credentials page on Platform](https://platform.adobe.com/query/configuration). To find your credentials, log in to [!DNL Platform], then select **[!UICONTROL Queries]**, followed by **[!UICONTROL Credentials]**.

**[!DNL Server]** is the host found under the connection details. For production, add port `:80` to the end of the host string. **[!DNL Database]** can be either "all" or a dataset table name. 

Additionally, you can select your **[!DNL Data Connectivity mode]**. Select **[!DNL Import]** to display a list of all available tables, or select **[!DNL DirectQuery]** to directly create a query. 

To learn more about **[!DNL Import]** mode, please read the section on [previewing and importing a table](#preview). To learn more about **[!DNL DirectQuery]** mode, please read the section on [creating SQL statements](#create). Select **[!DNL OK]** after confirming your database details.

![](../images/clients/power-bi/connectivity-mode.png)

A prompt asking for your username, password, and application settings appears. Fill in these details, then select **[!DNL Connect]** to continue to the next step.

![](../images/clients/power-bi/import-mode.png)

## Preview and import a table {#preview}

If you've selected **[!DNL Import]** mode, a dialog appears, displaying a list of all the available tables. Select the table you want to preview, followed by **[!DNL Load]** to bring the dataset into [!DNL Power BI].

![](../images/clients/power-bi/preview-table.png)

The table is now imported into Power BI. 

![](../images/clients/power-bi/import-table.png)

## Create SQL statements {#create}

If you've selected **[!DNL DirectQuery]** mode, you will need to fill out the Advanced options section with the SQL query you want to create.

Under **[!DNL SQL statement]**, insert the SQL query you want to create. Ensure that the checkbox labelled **[!DNL Include relationship columns]** is selected. Once you've written your query, select **[!DNL OK]** to continue.

![](../images/clients/power-bi/direct-query-mode.png)

A preview of your query appears. Select **[!DNL Load]** to see the results of the query.

![](../images/clients/power-bi/preview-direct-query.png)

## Next steps

Now that you've connected with [!DNL Query Service], you can use [!DNL Power BI] to write queries. For more information on how to write and run queries, please read the guide on [running queries](../best-practices/writing-queries.md).