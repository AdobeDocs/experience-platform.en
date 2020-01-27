# Connect with Power BI (PC)

PC users can install Power BI from [https://powerbi.microsoft.com/en-us/desktop/](https://powerbi.microsoft.com/en-us/desktop/).

## Set up Power Bi

After you have Power BI installed, you need to set up the necessary components to support the PostgreSQL connector. Follow these steps:

1. Find and install `npgsql`, a .NET driver package for PostgresSQL that is the official way for PowerBI to connect.

2. Select v4.0.10 (newer versions currently result in an error).

3. Under "Npgsql GAC Installation" on the Custom Setup screen, select **Will be installed on local hard drive**. 

Not installing the GAC will cause Power BI to fail later.

4. Restart Windows.

5. Find the PowerBI Desktop evaluation version.

## Connect Power BI to Query Service

After performing those preparatory steps, you can connect Power BI to Query Service:

1. Open Power BI.

2. Click **Get Data** in the top menu ribbon.

3. Choose **PostgreSQL database**, then click **Connect**.

4. Enter values for the Server and Database.

 - **Server** is the Host found under the connection details. For production, add port `:80` to the end of the Host string.
 - **Database** can be either "all" or a dataset table name. (Try one of the CTAS-derived datasets.)

5. Click **Advanced options**, and then uncheck **include relationship columns**. Do not check **Navigate using full hierarchy**.

6. (Optional but recommended when "all" is declared for the database) Enter a SQL statement.

```sql
SELECT web.webPageDetails.name AS Page_Name, 
SUM(web.webPageDetails.pageviews.value) AS Page_Views 
FROM _TABLE_ 
WHERE _ACP_YEAR=2018 AND _ACP_MONTH=11 AND _ACP_DAY=20 
GROUP BY web.webPageDetails.name 
ORDER BY SUM(web.webPageDetails.pageviews.value) DESC 
LIMIT 10
``` 
> **Note:** If a SQL statement is not provided, then Power BI will preview all the tables in database. For hierarchical data, a custom SQL statement should be used. If the table schema is flat, it will work with or without a custom SQL statement. Compound types are yet not supported by Power BI - to get primitive types from compound types, you will need to write SQL statements to derive them.

7. Select either **DirectQuery** or **Import** mode.

> **Note:** In **Import** mode, data will be imported in power BI. In **DirectQuery** mode, all the queries will be sent to Query Service for execution.

8. Click **OK**. Now, Power BI connects to the Query Service and produces a preview if there are no errors.

> **Note:** There is a known issue with the Preview rendering numeric columns. Proceed to the next step.

9. Click **Load** to bring the dataset into Power BI.
