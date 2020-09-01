---
keywords: Experience Platform;home;popular topics;query service;Query service;Power BI;power bi;connect to query service;
solution: Experience Platform
title: Connect with Power BI
topic: connect
---

# Connect with [!DNL Power BI] (PC)

PC users can install [!DNL Power BI] from [https://powerbi.microsoft.com/en-us/desktop/](https://powerbi.microsoft.com/en-us/desktop/).

## Set up [!DNL Power BI]

After you have [!DNL Power BI] installed, you need to set up the necessary components to support the PostgreSQL connector. Follow these steps:

- Find and install `npgsql`, a .NET driver package for PostgreSQL that is the official way for PowerBI to connect.

- Select v4.0.10 (newer versions currently result in an error).

- Under "Npgsql GAC Installation" on the Custom Setup screen, select **[!UICONTROL Will be installed on local hard drive]**. Not installing the GAC will cause Power BI to fail later.

- Restart Windows.

- Find the [!DNL PowerBI] Desktop evaluation version.

## Connect [!DNL Power BI] to [!DNL Query Service]

After performing those preparatory steps, you can connect [!DNL Power BI] to [!DNL Query Service]:

- Open [!DNL Power BI].

- Click **[!UICONTROL Get Data]** in the top menu ribbon.

- Choose **[!UICONTROL PostgreSQL database]**, then click **[!UICONTROL Connect]**.

- Enter values for the Server and Database. **[!UICONTROL Server]** is the Host found under the connection details. For production, add port `:80` to the end of the Host string. **[!UICONTROL Database]** can be either "all" or a dataset table name. (Try one of the CTAS-derived datasets.)

- Click **[!UICONTROL Advanced options]**, and then uncheck **[!UICONTROL include relationship columns]**. Do not check **[!UICONTROL Navigate using full hierarchy]**.

- *(Optional but recommended when "all" is declared for the database)* Enter a SQL statement. 

>[!NOTE]
>
>If a SQL statement is not provided, then [!DNL Power BI] will preview all of the tables in database. For hierarchical data, a custom SQL statement should be used. If the table schema is flat, it will work with or without a custom SQL statement. Compound types are yet not supported by [!DNL Power BI] - to get primitive types from compound types, you will need to write SQL statements to derive them.

```sql
SELECT web.webPageDetails.name AS Page_Name, 
SUM(web.webPageDetails.pageviews.value) AS Page_Views 
FROM _TABLE_ 
WHERE _ACP_YEAR=2018 AND _ACP_MONTH=11 AND _ACP_DAY=20 
GROUP BY web.webPageDetails.name 
ORDER BY SUM(web.webPageDetails.pageviews.value) DESC 
LIMIT 10
``` 

- Select either **[!UICONTROL DirectQuery]** or **[!UICONTROL Import]** mode. In **[!UICONTROL Import]** mode, data will be imported in [!DNL Power BI]. In **[!UICONTROL DirectQuery]** mode, all the queries will be sent to [!DNL Query Service] for execution.

- Click **[!UICONTROL OK]**. Now, [!DNL Power BI] connects to the [!DNL Query Service] and produces a preview if there are no errors. There is a known issue with the Preview rendering numeric columns. Proceed to the next step.

- Click **[!UICONTROL Load]** to bring the dataset into [!DNL Power BI].
