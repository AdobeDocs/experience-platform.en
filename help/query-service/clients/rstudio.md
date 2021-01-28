---
keywords: Experience Platform;home;popular topics;Query service;query service;RStudio;rstudio;connect to query service;
solution: Experience Platform
title: Connect RStudio to Query Service
topic: connect
description: This document walks through the steps for connecting R Studio with Adobe Experience Platform Query Service.
---

# Connect [!DNL RStudio] to Query Service

This document walks through the steps for connecting R Studio with Adobe Experience Platform [!DNL Query Service].

After installing [!DNL RStudio], on the *Console* screen that appears, you will first need to prepare your R script to use [!DNL PostgreSQL].

```r
install.packages("RPostgreSQL")
install.packages("rstudioapi")
require("RPostgreSQL")
require("rstudioapi")
```

Once you have prepared your R script to use [!DNL PostgreSQL], you can now connect [!DNL RStudio] to [!DNL Query Service] by loading the [!DNL PostgreSQL] driver.

```r
drv <- dbDriver("PostgreSQL")
con <- dbConnect(drv, 
 dbname = "{DATABASE_NAME}",
 host="{HOST_NUMBER}",
 port={PORT_NUMBER},
 user="{USERNAME}",
 password="{PASSWORD}")
```

| Property | Description |
| -------- | ----------- |
| `{DATABASE_NAME}` | The name of the database that will be used. |
| `{HOST_NUMBER` and `{PORT_NUMBER}` | The host endpoint and its port for Query Service. | 
| `{USERNAME}` and `{PASSWORD}` | The login credentials that will be used. The username takes the form of `ORG_ID@AdobeOrg`. |

>[!NOTE]
>
>For more information on finding your database name, host, port, and login credentials, visit the [credentials page on Platform](https://platform.adobe.com/query/configuration). To find your credentials, log in to [!DNL Platform], click **[!UICONTROL Queries]**, then click **[!UICONTROL Credentials]**.

## Next steps

Now that you have connected to [!DNL Query Service], you can write queries to execute and edit SQL statements. For example, you can use `dbGetQuery(con, sql)` to execute queries, where `sql` is the SQL query you want to run.

The following query uses a dataset containing [ExperienceEvents](../creating-queries/experience-event-queries.md) and creates a histogram of page views of a website, given the device's screen height.

```sql
df_pageviews <- dbGetQuery(con,
"SELECT t.range AS buckets, 
 Count(*) AS pageviews 
FROM (SELECT CASE 
 WHEN device.screenheight BETWEEN 0 AND 99 THEN '0 - 99' 
 WHEN device.screenheight BETWEEN 100 AND 199 THEN '100-199' 
 WHEN device.screenheight BETWEEN 200 AND 299 THEN '200-299' 
 WHEN device.screenheight BETWEEN 300 AND 399 THEN '300-399' 
 WHEN device.screenheight BETWEEN 400 AND 499 THEN '400-499' 
 WHEN device.screenheight BETWEEN 500 AND 599 THEN '500-599' 
 ELSE '600-699' 
 end AS range 
 FROM aa_post_vals_3) t 
GROUP BY t.range 
ORDER BY buckets 
LIMIT 1000000")
```

A successful response returns the results of the query: 

```r
df_pageviews
 buckets pageviews
1 0 - 99 198985
2 500-599 67138
3 300-399 2147
4 200-299 354
5 400-499 6947
6 100-199 4415
7 600-699 3097040
```

For more information on how to write and run queries, please read the [running queries guide](../creating-queries/creating-queries.md).