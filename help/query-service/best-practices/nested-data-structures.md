---
title: Working with nested data structures in Query Service
description: This document provides a working example for processing and transforming nested data fields using CTAS and INSERT INTO statements.
---
# Working with nested data structures in Query Service

Adobe Experience Platform Query Service supports the use of nested data fields. The complexity of enterprise data structures can make transforming or processing this data complicated. This document provides examples of how to create, process, or transform datasets with complex data types including nested data structures. This is important for use with third-party clients connected to Query Service that do not support nested data types.

Query Service provides a PostgreSQL interface to run SQL queries on all datasets managed by Experience Platform. Platform supports the use of either primitive or complex data types in table columns, such as struct or arrays. Datasets can also contain nested structures where the column data type can be as complex as an array of nested structures, or a map of maps wherein the value of a key-value pair can be a structure with multiple levels of nesting. 

## Getting started

This tutorial requires an understanding of the Query Editor tool to write, validate, and run queries within the Experience Platform user interface (UI). Full information on how to run queries through the UI can be found in the [Query Editor UI guide](../ui/user-guide.md).

You are recommended to have a good understanding of the INSERT INTO and CTAS syntax. Specific information on their use can be found in the [INSERT INTO](../sql/syntax#insert-into) and [CTAS](../sql/syntax.md#create-table-as-select) sections of the [SQL syntax reference documentation](../sql/syntax.md).

## Create a dataset

Adobe Experience Platform Query service provides the Create Table As Select (CTAS) functionality to create a table based on the output of a SELECT statement. CTAS is the simplest and fastest way to create a copy of a table. The new dataset is a copy of `Final_subscription`.

The schema for the dataset to be created is seen in the image below.

![A diagram of the final_subscription schema.](../images/best-practices/final-subscription-schema.png)

The following example demonstrates the SQL used to create the `final_subscription_test2` dataset.

```sql
CREATE TABLE final_subscription_test2 with(schema='Final_subscription') AS (
        SELECT struct(userid, collect_set(subscription) AS subscription) AS _americasprofessionalservices3 FROM(
            SELECT user AS userid,
                   struct( last(eventtime) AS last_eventtime,
                           last(status) AS last_status,
                           offer_id, 
                           subsid AS subscription_id)
                   AS subscription
             FROM (
                   SELECT _americasprofessionalservices3.msftidentities.userid user
                        , _americasprofessionalservices3.subscription.subscription_id subsid
                        , _americasprofessionalservices3.subscription.subscription_status status
                        , _americasprofessionalservices3.subscription.offer_id offer_id
                        , TIMESTAMP eventtime
 
                   FROM
                        xbox_subscription_event
                   UNION   
                   SELECT _americasprofessionalservices3.msftidentities.userid user
                        , _americasprofessionalservices3.subscription.subscription_id subsid
                        , _americasprofessionalservices3.subscription.subscription_status status
                        , _americasprofessionalservices3.subscription.offer_id offer_id
                        , TIMESTAMP eventtime
                   FROM
                        office365_subscription_event
             ) 
             GROUP BY user,subsid,offer_id
             ORDER BY user ASC
       ) GROUP BY userid)
```

In the initial dataset `final_subscription_test2`, the struct datatype is used to contain both the `subscription` field and the `userid` which is unique to each user. The `subscription` field describes the product subscriptions for a user. There can be multiple subscriptions but a table can only contain the information for one subscription per row. 

## Use INSERT INTO to update nested data fields

After the `final_subscription_test2` dataset has been created, the INSERT INTO SELECT statement is used to copy data from one table and insert it into another table. The INSERT INTO SELECT statement requires that the data types in source and target tables match. The incremental data is then added into the target dataset using the following SQL.

```sql
INSERT INTO final_subscription_test
      SELECT struct(userid, collect_set(subscription) AS subscription) AS _americasprofessionalservices3 FROM(
            SELECT user AS userid,
                   struct( last(eventtime) AS last_eventtime,
                           last(status) AS last_status,
                           offer_id, 
                           subsid AS subscription_id)
                   AS subscription
             FROM  SELECT _americasprofessionalservices3.msftidentities.userid user
                        , _americasprofessionalservices3.subscription.subscription_id subsid
                        , _americasprofessionalservices3.subscription.subscription_status status
                        , _americasprofessionalservices3.subscription.offer_id offer_id
                        , TIMESTAMP eventtime
 
                   FROM
                        xbox_subscription_event
                   UNION   
                   SELECT _americasprofessionalservices3.msftidentities.userid user
                        , _americasprofessionalservices3.subscription.subscription_id subsid
                        , _americasprofessionalservices3.subscription.subscription_status status
                        , _americasprofessionalservices3.subscription.offer_id offer_id
                        , timestamp eventtime
                   FROM
                        office365_subscription_event
             ) 
             GROUP BY user,subsid,offer_id
             ORDER BY user ASC
       ) GROUP BY userid)
```

The INSERT INTO example follows this format:

```sql
INSERT INTO [dataset]
SELECT
      struct(
      [source field1] as [target field in schema],
      [source field2] as [target field in schema],
      [source field3] as [target field in schema],
      [source field4]as [target field in schema]
      )
      [tenant name]
FROM [dataset]
GROUP BY [source field1],[source field2],[source field3]
ORDER BY [source field1] ASC.
```

## Process data from a nested dataset

To find out the list of a user's active subscriptions from a dataset, you must write a query that separates the elements of an array into multiple rows and columns. To do this, you must first understand the shape of the data model as the subscription information is kept inside an array nested within the dataset.  

The following tables illustrate the structure of the `final_subscription_test2` dataset level by level, to get to the required subscription data. Complex data types can be recognized at a glance because they are not typical type values such as text, boolean, timestamp, etc.   

| Column | Type  |
|--------|-------|
| `_americasprofessionalservices3`  | final_subscription_test2__americasprofessionalservices3 |

By examining the next column `final_subscription_test2__americasprofessionalservices3` the available fields are shown below.

| Column  | Type  |
|---------|-------|
| `userid`  | text  |
| `subscription`  | _americasprofessionalservices3_subscription_e[] |

`subscription` is another complex data type. By examining the `_americasprofessionalservices3_subscription_e[]` array the following columns are exposed.

| Column  | Type  |
|---------|-------|
| `last_eventtime`  |  timestamp  |
| `last_status` |  text  |
| `offer_id` |  text  |
| `subscription_id` | text  |

To query the nested fields of the subscription, you must first separate the elements of the `_americasprofessionalservices3_subscription_e[]` array into multiple rows and return the results. The following SQL example returns the active subscription for a user based on `userid`. 

```sql
SELECT userid, subs AS active_subscription FROM (
    SELECT _americasprofessionalservices3.userid AS userid, explode(_americasprofessionalservices3.subscription) AS subs 
    FROM final_subscription_test2
)
WHERE subs.last_status='Active';
```

The problem with this example is that it only allows for one active user subscription. Realistically, there can be many active subscriptions for a single user. The following example modifies the previous query to allow for multiple simultaneous active subscriptions.

```sql
SELECT userid, collect_list(subs) AS active_subscriptions FROM (
     SELECT
          _americasprofessionalservices3.userid AS userid,
          explode(_americasprofessionalservices3.subscription) AS subs
     FROM final_subscription_test2
     )
WHERE subs.last_status='Active' 
GROUP BY userid ;
```

However, the `collect_list` for active subscriptions in this example does not guarantee that the output will be in the same order as the source. To create a list of active subscriptions for a user, you must use GROUP BY or shuffling to aggregate the results of the list.

## Next Steps

By reading this document, you now understand how to use the INSERT INTO statement to process or transform datasets that use complex data types. Please see the [queries execution guidance](./writing-queries.md) for more information about running SQL queries on datasets within the Data Lake. 
