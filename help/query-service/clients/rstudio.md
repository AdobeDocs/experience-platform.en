# Connect with RStudio

This document walks through the steps for connecting R Studio with Adobe Experience Platform Query Service.

After installing RStudio, on the *Console* screen that appears, you will first need to prepare your R script to use PostgreSQL.

```r
install.packages("RPostgreSQL")
install.packages("rstudioapi")
require("RPostgreSQL")
require("rstudioapi")
```

Once you have prepared your R script to use PostgreSQL, you can now connect RStudio to Query Service by loading the PostgreSQL driver.

```r
drv <- dbDriver("PostgreSQL")
con <- dbConnect(drv, 
 dbname = "{DATABASE_NAME}",
 host="{HOST_NUMBER}",
 port={PORT_NUMBER},
 user="{USERNAME}",
 password="{PASSWORD}")
```

- **dbname:** The name of the database that will be used.
- **Host and Port**: The host endpoint and its port for Query Service. 
- **User and Password**: The login credentials that will be used. The username takes the form of `ORG_ID@AdobeOrg`.

>**Note:** For more information on finding your database name, host, port, and login credentials, visit the [credentials page on Platform][credentials]. To find your credentials, log in to Platform, click **Queries**, then click **Credentials**.

## Next Steps

Now that you have connected to Query Service, you can write queries to execute and edit SQL statements. For example, you can use `dbGetQuery(con, sql)` to execute queries, where `sql` is the SQL query you want to run.

The following query uses a dataset containing [ExperienceEvents][experience-event] and creates a histogram of page views of a website, given the device's screen height.

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

For more information on how to write and run queries, please read the [running queries guide][running-queries].

[credentials]: https://platform.adobe.com/query/configuration
[running-queries]: ../queries-and-ui/running-queries.md
[experience-event]: ../queries-and-ui/experience-event-queries.md