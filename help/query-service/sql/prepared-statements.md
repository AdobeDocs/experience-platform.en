---
keywords: Experience Platform;home;popular topics;query service;Query service;prepared statements;prepared;sql;
solution: Experience Platform
title: Prepared Statements in Query Service
description: In SQL, prepared statements are used to template similar queries or updates. Adobe Experience Platform Query Service supports prepared statements by using a parameterized query.
exl-id: 7ee4a10e-2bfe-487f-a8c5-f03b5b1d77e3
---
# Prepared statements

In SQL, prepared statements are used to templatize similar queries or updates. Adobe Experience Platform [!DNL Query Service] supports prepared statements by using a parameterized query. This can optimize performance, as you no longer need to repetitiously re-parse a query.

## Using prepared statements

When using prepared statements, the following syntaxes are supported:

- [PREPARE](#prepare)
- [EXECUTE](#execute)
- [DEALLOCATE](#deallocate)

### Prepare a prepared statement {#prepare}

This SQL query saves the written SELECT query with the name given as `PLAN_NAME`. You can use variables, such as `$1` in lieu of actual values. This prepared statement will be saved during the current session. Please note that plan names are **not** case sensitive.

#### SQL format

```sql
PREPARE {PLAN_NAME} AS {SELECT_QUERY}
``` 

#### Sample SQL

```sql
PREPARE test AS SELECT * FROM table WHERE country = $1 AND city = $2;
```

### Execute a prepared statement {#execute}

This SQL query uses the prepared statement which was created earlier. 

#### SQL format

```sql
EXECUTE {PLAN_NAME}('{PARAMETERS}')
```

#### Sample SQL

```sql
EXECUTE test('canada', 'vancouver');
```

### Deallocate a prepared statement {#deallocate}

This SQL query is used to delete the named prepared statement.

#### SQL format

```sql
DEALLOCATE {PLAN_NAME}
```

#### Sample SQL

```sql
DEALLOCATE test;
```

## Example flow using prepared statements

Initially, you can have an SQL query, such as the one below:

```sql
SELECT * FROM table WHERE id >= 10000 AND id <= 10005;
```

The SQL query above will return the following response:

|id | firstname | lastname | birthdate | email  | city | country|
|--- | --------- | -------- | --------- | ----- | ------- | ---- |
|10000 | alexander | davis | 1993-09-15 | example@example.com | Vancouver | Canada |
|10001 | antoine | dubois | 1967-03-14 | example2@example.com | Paris | France|
|10002 | kyoko | sakura | 1999-11-26 | example3@example.com | Tokyo | Japan|
|10003 | linus | pettersson | 1982-06-03 | example4@example.com | Stockholm | Sweden|
|10004 | aasir | waithaka | 1976-12-17 | example5@example.com | Nairobi | Kenya|
|10005 | fernando | rios | 2002-07-30 | example6@example.com | Santiago | Chile|

This SQL query can be parameterized by using the following prepared statement:

```sql
PREPARE getIdRange AS SELECT * FROM table WHERE id >= $1 AND id <= $2; 
```

Now, the prepared statement can be executed by using the following call:

```sql
EXECUTE getIdRange(10000, 10005);
```

When this is called, you will see the exact same results as before:

|id | firstname | lastname | birthdate | email  | city | country|
|--- | --------- | -------- | --------- | ----- | ------- | ---- |
|10000 | alexander | davis | 1993-09-15 | example@example.com | Vancouver | Canada |
|10001 | antoine | dubois | 1967-03-14 | example2@example.com | Paris | France|
|10002 | kyoko | sakura | 1999-11-26 | example3@example.com | Tokyo | Japan|
|10003 | linus | pettersson | 1982-06-03 | example4@example.com | Stockholm | Sweden|
|10004 | aasir | waithaka | 1976-12-17 | example5@example.com | Nairobi | Kenya|
|10005 | fernando | rios | 2002-07-30 | example6@example.com | Santiago | Chile|

After you have finished using the prepared statement, you can deallocate it by using the following call:

```sql
DEALLOCATE getIdRange;
```
