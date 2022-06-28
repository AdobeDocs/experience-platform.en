---
title: Anonymous Block in Query Service
description: The anonymous block is an SQL syntax supported by Adobe Experience Platform Query Service, which allows you to efficiently execute a sequence of queries
exl-id: ec497475-9d2b-43aa-bcf4-75a430590496
---
# Anonymous block in Query Service

Adobe Experience Platform Query Service supports anonymous blocks. The anonymous block feature allows you to chain one or more SQL statements that are executed in sequence. They also allow for the option of exception-handling.

The anonymous block feature is an efficient way to perform a sequence of operations or queries. The chain of queries within the block can be saved as a template and scheduled to run at a particular time or interval. These queries can be used to write and append data to create a new data set and are typically used where you have a dependency.

>[!IMPORTANT]
>
>Scheduling queries using anonymous blocks is currently only possible through the [!DNL Query Service] API. See the documentation for [complete instructions on scheduling queries through the API](../api/scheduled-queries.md). 

The table provides a breakdown of the block's main sections: execution, and exception-handling. The sections are defined by the keywords `BEGIN`, `END`, and `EXCEPTION`. 

| section  | description |
|---|---|
| execution  | An executable section starts with the keyword `BEGIN` and ends with the keyword `END`. Any set of statements included within the `BEGIN` and `END` keywords will be executed in sequence and ensures that subsequent queries will not execute until the previous query in the sequence has been completed. |
| exception-handling  | The optional exception-handling section starts with the keyword `EXCEPTION`. It contains the code to catch and handle exceptions should any of the SQL statements in the execution section fail. If any of the queries fail, the entire block is stopped. |

It is worth noting that a block is an executable statement and can therefore be nested within other blocks.

>[!NOTE]
>
> It is strongly recommended to test your queries on smaller datasets and ensure that they work as expected. If a query has a syntax error then the exception will be thrown and the entire block will be aborted. Once you have verified the integrity of the queries you may begin to chain them. This ensures that the block works as expected before you put them into operation.

## Sample anonymous block queries 

The following query shows an example of chaining SQL statements. See the [SQL syntax in Query Service](../sql/syntax.md) document for more information on any of the SQL syntax used.

```SQL
$$ BEGIN
    CREATE TABLE ADLS_TABLE_A AS SELECT * FROM ADLS_TABLE_1....;
    ....
    CREATE TABLE ADLS_TABLE_D AS SELECT * FROM ADLS_TABLE_C....; 
    EXCEPTION WHEN OTHER THEN SET @ret = SELECT 'ERROR';
END
$$;
```

In the example below, `SET` persists the result of a `SELECT` query in the specified local variable. The variable is scoped to the anonymous block.

The snapshot ID is stored as a local variable (`@current_sid`). It is then used in the next query to return results based on the SNAPSHOT from the same dataset/table.

A database snapshot is a read-only, static view of a SQL Server database. For more [information on the snapshot clause](../sql/syntax.md#SNAPSHOT-clause) see the SQL syntax documentation.

```SQL
$$ BEGIN                                             
  SET @current_sid = SELECT parent_id  FROM (SELECT history_meta('your_table_name')) WHERE  is_current = true;
  CREATE temp table abcd_temp_table AS SELECT count(1) FROM your_table_name  SNAPSHOT SINCE @current_sid;                                                                                           
END
$$;
```

## Next steps

By reading this document, you now have a clear understanding of anonymous blocks and how they are structured. [For more information on query execution](./writing-queries.md), please read the guide on query execution in Query Service.

You should also read about [how anonymous block is used with the incremental load design pattern](./incremental-load.md) to increase query efficiency.
