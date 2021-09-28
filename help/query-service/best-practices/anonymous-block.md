---
title: Sample Anonymous Block Queries
description: The Anonymous Block is a tool provided by Adobe Experience Platform Query Service, which allows you to schedule the execution of a sequence of queries on a to efficently 
---
# Sample queries for Anonymous block

Adobe Experience Platform Query Service supports anonymous blocks. The anonymous block feature allows you to chain one or more SQL statements that are executed in sequence. They also allow for optional declaration and exception-handling.

The anonymous block feature is an efficient way to perform a sequence of operations or queries. The chain of queries within the block can be saved as a template and scheduled to run at a particular time or interval. These queries can be used to write and append data to create a new data set and are typically used where you have a dependency.

The table provides a breakdown of the block's three sections: declaration, execution, and exception-handling. The sections are defined by the keywords `DECLARE`, `BEGIN`, `EXCEPTION`, and `END`. 

| section  | description |
|---|---|
| declaration  | The optional declaration section starts with the keyword `DECLARE`. This is where variables are declared, data types are defined, and memory is allocated.   |
| execution  | An executable section starts with the keyword `BEGIN` and ends with the keyword `END`. Any set of statements included within the `BEGIN` and `END` keywords will be executed in sequence and ensures that subsequent queries will not execute until the previous query in the sequence has been completed. |
| exception-handling  | The optional exception-handling section starts with the keyword `EXCEPTION`. It contains the code to catch and handle exceptions should any of the SQL statements in the execution section fail. If any of the queries fail, the entire block is stopped. |

It is worth noting that a block is an executable statement and can therefore be nested within other blocks.

>[!NOTE]
>
> It is strongly recommended to test your queries on smaller datasets and ensure that they work as expected. If a query has a syntax error then the exception will be thrown and the entire block will be aborted. Once you have verified the integrity of the queries you may begin to chain them. This ensures that the block works as expected before you put them into operation.

See the [SQL syntax in Query Service](../sql/syntax.md) document for more information on any of the SQL syntax used.

## Sample anonymous block queries 

The following query shows an example of chaining events. 

```SQL
$$BEGIN
     
    CREATE TABLE ADLS_TABLE_A AS SELECT * FROM ADLS_TABLE_1....;
    ....
    CREATE TABLE ADLS_TABLE_D AS SELECT * FROM ADLS_TABLE_C....;
     
    EXCEPTION WHEN OTHER THEN SET @ret = SELECT 'ERROR';
     
END$$;
```

The block below uses `SET` to persist the result of a select query with a variable. It is used in the anonymous block to store the response from a query as a local variable for use with the `SNAPSHOT` feature.

```SQL
$$BEGIN                                             
  SET @current_sid = SELECT parent_id  FROM (SELECT history_meta('your_table_name')) WHERE  is_current = true;
  CREATE temp table abcd_temp_table AS SELECT count(1) FROM your_table_name  SNAPSHOT SINCE @current_sid;                                                                                                     
END$$;
```

### Next steps

By reading this document you now have a clear understanding of what the anonymous block feature is and how they are structured. For more [general guidance on query execution](./writing-queries.md), please read the guide on query execution in Query Service.

For more samples of queries that can be used within Query Service, please read the guides on [Adobe Analytics sample queries](./adobe-analytics.md), [Adobe Target sample queries](./adobe-target.md), or [ExperienceEvent sample queries](./experience-event-queries.md).
