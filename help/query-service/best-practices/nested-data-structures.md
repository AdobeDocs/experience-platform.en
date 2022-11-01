---
keywords: Experience Platform;query service;Query service;nested data structures;nested data;
title: Working with nested data structures in Query Service
description: This document provides a working example for processing and transforming nested data fields using CTAS and INSERT INTO statements.
exl-id: 593379fb-88ad-4b14-8d2e-aa6d18129974
---
# Working with nested data structures in Query Service

Adobe Experience Platform Query Service supports the use of nested data fields. The complexity of enterprise data structures can make transforming or processing this data complicated. This document provides examples of how to create, process, or transform datasets with complex data types including nested data structures.

Query Service provides a [!DNL PostgreSQL] interface to run SQL queries on all datasets managed by Experience Platform. Platform supports the use of either primitive or complex data types in table columns such as struct, arrays, maps, and deeply nested struct, arrays, and maps. Datasets can also contain nested structures where the column data type can be as complex as an array of nested structures, or a map of maps wherein the value of a key-value pair can be a structure with multiple levels of nesting. 

## Getting started

This tutorial requires the use of a third-party PSQL client or the Query Editor tool to write, validate, and run queries within the Experience Platform user interface (UI). Full details on how to run queries through the UI can be found in the [Query Editor UI guide](../ui/user-guide.md). For a detailed list on which third-party desktop clients can connect to Query Service, see the [client connections overview](../clients/overview.md).

You should also have a good understanding of the `INSERT INTO` and `CTAS` syntax. Specific information on their use can be found in the [`INSERT INTO`](../sql/syntax.md#insert-into) and [`CTAS`](../sql/syntax.md#create-table-as-select) sections of the [SQL syntax reference documentation](../sql/syntax.md).

## Create a dataset

Query service provides the Create Table As Select (`CTAS`) functionality to create a table based on the output of a `SELECT` statement, or as in this case, by using a reference to an existing XDM schema in Adobe Experience Platform. Displayed below is the XDM schema for `Final_subscription` created for this example.

![A diagram of the final_subscription schema.](../images/best-practices/final-subscription-schema.png)

The following example demonstrates the SQL used to create the `final_subscription_test2` dataset. `final_subscription_test2` is created using the `Final_subscription` schema. Data is extracted from the source using a `SELECT` clause to populate some rows.

```sql
CREATE TABLE final_subscription_test2 with(schema='Final_subscription') AS (
        SELECT struct(userid, collect_set(subscription) AS subscription) AS _lumaservices3 FROM(
            SELECT user AS userid,
                   struct( last(eventtime) AS last_eventtime,
                           last(status) AS last_status,
                           offer_id, 
                           subsid AS subscription_id)
                   AS subscription
             FROM (
                   SELECT _lumaservices3.msftidentities.userid user
                        , _lumaservices3.subscription.subscription_id subsid
                        , _lumaservices3.subscription.subscription_status status
                        , _lumaservices3.subscription.offer_id offer_id
                        , TIMESTAMP eventtime
 
                   FROM
                        xbox_subscription_event
                   UNION   
                   SELECT _lumaservices3.msftidentities.userid user
                        , _lumaservices3.subscription.subscription_id subsid
                        , _lumaservices3.subscription.subscription_status status
                        , _lumaservices3.subscription.offer_id offer_id
                        , TIMESTAMP eventtime
                   FROM
                        office365_subscription_event
             ) 
             GROUP BY user,subsid,offer_id
             ORDER BY user ASC
       ) GROUP BY userid)
```

In the initial dataset `final_subscription_test2`, the struct data type is used to contain both the `subscription` field and the `userid` which is unique to each user. The `subscription` field describes the product subscriptions for a user. There can be multiple subscriptions but a table can only contain the information for one subscription per row. 

## Use INSERT INTO to update nested data fields

After the `final_subscription_test2` dataset has been created, the `INSERT INTO` statement is used to append additional data to the table. When copying data, the data types in source and target must match. Alternatively, the source data type must be `CAST` to the target data type. The incremental data is then added into the target dataset using the following SQL.

```sql
INSERT INTO final_subscription_test
      SELECT struct(userid, collect_set(subscription) AS subscription) AS _lumaservices3 FROM(
            SELECT user AS userid,
                   struct( last(eventtime) AS last_eventtime,
                           last(status) AS last_status,
                           offer_id, 
                           subsid AS subscription_id)
                   AS subscription
             FROM  SELECT _lumaservices3.msftidentities.userid user
                        , _lumaservices3.subscription.subscription_id subsid
                        , _lumaservices3.subscription.subscription_status status
                        , _lumaservices3.subscription.offer_id offer_id
                        , TIMESTAMP eventtime
 
                   FROM
                        xbox_subscription_event
                   UNION   
                   SELECT _lumaservices3.msftidentities.userid user
                        , _lumaservices3.subscription.subscription_id subsid
                        , _lumaservices3.subscription.subscription_status status
                        , _lumaservices3.subscription.offer_id offer_id
                        , timestamp eventtime
                   FROM
                        office365_subscription_event
             ) 
             GROUP BY user,subsid,offer_id
             ORDER BY user ASC
       ) GROUP BY userid)
```

## Process data from a nested dataset

To find out the list of a user's active subscriptions from a dataset, you must write a query that separates the elements of an array into multiple rows and columns. To do this, you must first understand the shape of the data model as the subscription information is kept inside an array nested within the dataset.  

The PSQL `\d` command is used to navigate level by level to the required subscription data. The tables illustrate the structure of the `final_subscription_test2` dataset. Complex data types can be recognized at a glance because they are not typical type values such as text, boolean, timestamp, etc.   

| Column | Type  |
|--------|-------|
| `_lumaservices3`  | final_subscription_test2__lumaservices3 |

The next column's fields are displayed using the `\d final_subscription_test2__lumaservices3` command.

| Column  | Type  |
|---------|-------|
| `userid`  | text  |
| `subscription`  | _lumaservices3_subscription_e[] |

`subscription` is an array of struct elements. Its fields are displayed using the `\d _lumaservices3_subscription_e[]` command.

| Column  | Type  |
|---------|-------|
| `last_eventtime`  |  timestamp  |
| `last_status` |  text  |
| `offer_id` |  text  |
| `subscription_id` | text  |

To query the nested fields of the subscription, you must first separate the elements of the `subscription` array into multiple rows and return the results by using the explode function. The following SQL example returns the active subscription for a user based on `userid`. 

```sql
SELECT userid, subs AS active_subscription FROM (
    SELECT _lumaservices3.userid AS userid, explode(_lumaservices3.subscription) AS subs 
    FROM final_subscription_test2
)
WHERE subs.last_status='Active';
```

This simplified example solution only allows for one active user subscription. Realistically, there can be many active subscriptions for a single user. The following example modifies the previous query to allow for multiple simultaneous active subscriptions.

```sql
SELECT userid, collect_list(subs) AS active_subscriptions FROM (
     SELECT
          _lumaservices3.userid AS userid,
          explode(_lumaservices3.subscription) AS subs
     FROM final_subscription_test2
     )
WHERE subs.last_status='Active' 
GROUP BY userid ;
```

Despite the growing complexity of this SQL example, the `collect_list` for active subscriptions does not guarantee that the output will be in the same order as the source. To create a list of active subscriptions for a user, you must use GROUP BY or shuffling to aggregate the results of the list.

## Next steps

By reading this document, you now understand how to process or transform datasets that use complex data types in Adobe Experience Platform Query Service. Please see the [queries execution guidance](./writing-queries.md) for more information about running SQL queries on datasets within the Data Lake.
