---
keywords: Experience Platform;home;popular topics;query service;Query service;sql syntax;sql;ctas;CTAS;Create table as select
solution: Experience Platform
title: SQL syntax
topic: syntax
description: This document shows SQL syntax supported by Adobe Experience Platform Query Service.
---

# SQL syntax

Adobe Experience Platform Query Service provides the ability to use standard ANSI SQL for `SELECT` statements and other limited commands. This document shows SQL syntax supported by [!DNL Query Service].

## SELECT queries {#select-queries}

The following syntax defines a `SELECT` query supported by [!DNL Query Service]:

```sql
[ WITH with_query [, ...] ]
SELECT [ ALL | DISTINCT [( expression [, ...] ) ] ]
    [ * | expression [ [ AS ] output_name ] [, ...] ]
    [ FROM from_item [, ...] ]
    [ WHERE condition ]
    [ GROUP BY grouping_element [, ...] ]
    [ HAVING condition [, ...] ]
    [ WINDOW window_name AS ( window_definition ) [, ...] ]
    [ { UNION | INTERSECT | EXCEPT | MINUS } [ ALL | DISTINCT ] select ]
    [ ORDER BY expression [ ASC | DESC | USING operator ] [ NULLS { FIRST | LAST } ] [, ...] ]
    [ LIMIT { count | ALL } ]
    [ OFFSET start ]
```

where `from_item` can be one of:

```sql
table_name [ * ] [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
    [ LATERAL ] ( select ) [ AS ] alias [ ( column_alias [, ...] ) ]
    with_query_name [ [ AS ] alias [ ( column_alias [, ...] ) ] ]
    from_item [ NATURAL ] join_type from_item [ ON join_condition | USING ( join_column [, ...] ) ]
```

and `grouping_element` can be one of:

```sql
( )
    expression
    ( expression [, ...] )
    ROLLUP ( { expression | ( expression [, ...] ) } [, ...] )
    CUBE ( { expression | ( expression [, ...] ) } [, ...] )
    GROUPING SETS ( grouping_element [, ...] )
```

and `with_query` is:

```sql
 with_query_name [ ( column_name [, ...] ) ] AS ( select | values )
 
TABLE [ ONLY ] table_name [ * ]
```

### WHERE ILIKE clause

The key word `ILIKE` can be used instead of `LIKE` to make matches on the WHERE clause of the SELECT query case-insensitive.

```sql
    [ WHERE condition { LIKE | ILIKE | NOT LIKE | NOT ILIKE } pattern ]
```

The logic of LIKE and ILIKE clauses are as follows:
- `WHERE condition LIKE pattern`, `~~` is equivalent to pattern
- `WHERE condition NOT LIKE pattern`, `!~~` is equivalent to pattern
- `WHERE condition ILIKE pattern`, `~~*` equivalent to pattern
- `WHERE condition NOT ILIKE pattern`, `!~~*` equivalent to pattern

**Example**

```sql
SELECT * FROM Customers
WHERE CustomerName ILIKE 'a%';
```

This query returns customers with names beginning in "A" or "a".

### JOIN

A `SELECT` query that uses joins has the following syntax:

```sql
SELECT statement
FROM statement
[JOIN | INNER JOIN | LEFT JOIN | LEFT OUTER JOIN | RIGHT JOIN | RIGHT OUTER JOIN | FULL JOIN | FULL OUTER JOIN]
ON join condition
```

### UNION, INTERSECT, and EXCEPT

The `UNION`, `INTERSECT`, and `EXCEPT` clauses are supported to combine or exclude like rows from two or more tables:

```sql
SELECT statement 1
[UNION | UNION ALL | UNION DISTINCT | INTERSECT | EXCEPT | MINUS]
SELECT statement 2
```

### CREATE TABLE AS SELECT

The following syntax defines a `CREATE TABLE AS SELECT` (CTAS) query supported by [!DNL Query Service]:

```sql
CREATE TABLE table_name [ WITH (schema='target_schema_title', rowvalidation='false') ] AS (select_query)
```

 - `schema`: The title of XDM schema. Use this clause only if you wish to use an existing XDM schema for the new dataset created by the CTAS query.
 - `rowvalidation`: (Optional) Specifies if the user wants row level validation of every new batches ingested for the newly created dataset. The default value is `true`.
- `select_query`: A `SELECT` statement. The syntax of the `SELECT` query can be found in the [SELECT queries section](#select-queries).

**Example**

```sql
CREATE TABLE Chairs AS (SELECT color, count(*) AS no_of_chairs FROM Inventory i WHERE i.type=="chair" GROUP BY i.color)
CREATE TABLE Chairs WITH (schema='target schema title') AS (SELECT color, count(*) AS no_of_chairs FROM Inventory i WHERE i.type=="chair" GROUP BY i.color)
```

>[!NOTE]
>
>The `SELECT` statement must have an alias for the aggregate functions such as `COUNT`, `SUM`, `MIN`, and so on. Additionally, the `SELECT` statement can be provided with or without parentheses ().

## INSERT INTO

The `INSERT INTO` command is defined as follows:

```sql
INSERT INTO table_name select_query
```

**Parameters**

- `table_name`: The name of the table that you want to insert the query into.
- `select_query`: A `SELECT` statement. The syntax of the `SELECT` query can be found in the [SELECT queries section](#select-queries).

**Example**

```sql
INSERT INTO Customers SELECT SupplierName, City, Country FROM OnlineCustomers;
```

>[!NOTE] 
> The `SELECT` statement **must not** be enclosed in parentheses (). Additionally, the schema of the result of the `SELECT` statement must conform to that of the table defined in the `INSERT INTO` statement.

## DROP TABLE

The `DROP TABLE` command drops an existing table and deletes the directory associated with the table from the file system if it is not an external table. If the table does not exist, an exception occurs.

```sql
DROP TABLE [IF EXISTS] [db_name.]table_name
```

**Parameters**

-  `IF EXISTS`: If this is specified, no exception is thrown if the table does **not** exist.

## CREATE VIEW

The following syntax defines a `CREATE VIEW` query.

```sql
CREATE VIEW view_name AS select_query
```

**Parameters**

- `view_name`: The name of view to be created.
- `select_query`: A `SELECT` statement. The syntax of the `SELECT` query can be found in the [SELECT queries section](#select-queries).

**Example**

```sql
CREATE VIEW V1 AS SELECT color, type FROM Inventory
CREATE OR REPLACE VIEW V1 AS SELECT model, version FROM Inventory
```

## DROP VIEW

The following syntax defines a `DROP VIEW` query.

```sql
DROP VIEW [IF EXISTS] view_name
```

**Parameter**

-  `IF EXISTS`: If this is specified, no exception is thrown if the view does **not** exist.
- `view_name`: The name of view to be deleted.

**Example**

```sql
DROP VIEW v1
DROP VIEW IF EXISTS v1
```

## [!DNL Spark] SQL commands 

The following Spark SQL command is supported. 

### SET

The `SET` command sets a property and either returns the value of an existing property or lists all the existing properties. If a value is provided for an existing property key, the old value is overridden.

```sql
SET property_key = property_value
```

**Properties**

- `property_key`: The name of the property that you want to list or alter.
- `property_value`: The value that you want the property to be set as.

To return the value for any setting, use `SET [property key]` without a `property_value`.

## PostgreSQL commands

The following PostgreSQL commands are supported.

### BEGIN

The `BEGIN` command, or alternatively the `BEGIN WORK` or `BEGIN TRANSACTION` command, initiates a transaction block. Any statements that are inputted after the begin command will be executed in a single transaction until an explicit COMMIT or ROLLBACK command is given. This command is the same as `START TRANSACTION`.

```sql
BEGIN
BEGIN WORK
BEGIN TRANSACTION
```

### CLOSE

The `CLOSE` command frees the resources associated with an open cursor. After the cursor is closed, no subsequent operations are allowed on it. A cursor should be closed when it is no longer needed.

```sql
CLOSE name
CLOSE ALL
```

If `CLOSE name` is used, `name` represents the name of an open cursor that needs to be closed. If `CLOSE ALL` is used, all open cursors will be closed.

### COMMIT

The `COMMIT` command, or alternatively the `COMMIT WORK` or `COMMIT TRANSACTION` command, commits the current transaction. 

```sql
COMMIT
COMMIT WORK
COMMIT TRANSACTION
```

### DEALLOCATE

The `DEALLOCATE` command allows you to deallocate a previously prepared SQL statement. If you do not explicitly deallocate a prepared statement, it is deallocated when the session ends. More information about prepared statements can be found in the [PREPARE command](#prepare) section.

```sql
DEALLOCATE name
DEALLOCATE ALL
```

If `DEALLOCATE name` is used, `name` represents the name of the prepared statement that needs to be deallocated. If `DEALLOCATE ALL` is used, all the prepared statements will be deallocated.

### DECLARE

The `DECLARE` command allows a user to create a cursor, which can be used to retrieve a small number of rows out of a larger query. After the cursor is created, rows are fetched from it using `FETCH`.

```sql
DECLARE name CURSOR WITH HOLD FOR query
DECLARE name CURSOR WITHOUT HOLD FOR query
```

**Parameters**

- `name`: The name of the cursor to be created.
- `WITH HOLD`: Specifies that the cursor can continue to be used after the transaction that created it successfully commits.
- `WITHOUT HOLD`: Specifies that the cursor can only be used within the transaction that created it.
- `query`: A `SELECT` or `VALUES` command which provides the rows to be returned by the cursor. 

### EXECUTE

The `EXECUTE` command is used to execute a previously prepared statement. Since prepared statements only exist for the duration of a session, the prepared statement must have been created by a `PREPARE` statement executed earlier in the current session. More information about using prepared statements can be found in the [`PREPARE` command](#prepare) section.

If the `PREPARE` statement that created the statement specified some parameters, a compatible set of parameters must be passed to the `EXECUTE` statement. If these parameters are not passed in, an error will be raised. 

```sql
EXECUTE name [ ( parameter ) ]
```

**Parameters**

- `name`: The name of the prepared statement to execute.
- `parameter`: The actual value of a parameter to the prepared statement. This must be an expression yielding a value that is compatible with the data type of this parameter, as determined when the prepared statement was created.  If there are multiple parameters for the prepared statement, they are separated by commas.

### EXPLAIN

The `EXPLAIN` command displays the execution plan for the supplied statement. The execution plan shows how the tables referenced by the statement will be scanned.  If multiple tables are referenced, it will show what join algorithms are used to bring together the required rows from each input table.

```sql
EXPLAIN option statement
```

Where `option` can be one of:

```sql
ANALYZE
FORMAT { TEXT | JSON }
```

**Parameters**

- `ANALYZE`: If the `option` contains `ANALYZE`, the run times and other statistics are shown. 
- `FORMAT`: If the `option` contains `FORMAT`, it specifies the output format, which can be TEXT or JSON. Non-text output contains the same information as the text output format, but is easier for programs to parse. This parameter defaults to `TEXT`.
- `statement`: Any `SELECT`, `INSERT`, `UPDATE`, `DELETE`, `VALUES`, `EXECUTE`, `DECLARE`, `CREATE TABLE AS`, or `CREATE MATERIALIZED VIEW AS` statement, whose execution plan you want to see.

>[!IMPORTANT]
>
>Keep in mind that the statement is actually executed when the `ANALYZE` option is used. Although `EXPLAIN` discards any output that a `SELECT` returns, other side effects of the statement happen as usual. 

**Example**

To show the plan for a simple query on a table with a single `integer` column and 10000 rows:

```sql
EXPLAIN SELECT * FROM foo;
```

```console

                       QUERY PLAN
---------------------------------------------------------
 Seq Scan on foo  (cost=0.00..155.00 rows=10000 width=4)
(1 row)
```

### FETCH

The `FETCH` command retrieves rows using a previously-created cursor.

```sql
FETCH num_of_rows [ IN | FROM ] cursor_name
```

Do we not have FIRST/NEXT?

**Parameters**

- `num_of_rows`: The number of rows to fetch. 
- `cursor_name`: The name of the cursor you're retrieving information from.

### PREPARE {#prepare}

The `PREPARE` command lets you create a prepared statement. A prepared statement is a server-side object that can be used to optimize performance. When the `PREPARE` statement is executed, the specified statement is parsed, analyzed, and rewritten. 

Prepared statements can take parameters, values that are substituted into the statement when it is executed. Parameters are referred by position, using $1, $2, etc, when using prepared statements. Optionally, you can specify a list of parameter data types. 

When a parameter's data type is not specified or is declared as unknown, the type is inferred from the context in which the parameter is first referenced, if possible. When executing the statement, specify the actual values for these parameters in the `EXECUTE` statement.

Prepared statements only last for the duration of the current database session. When the session ends, the prepared statement is forgotten, so it must be re-created before being used again. This also means that a single prepared statement cannot be used by multiple simultaneous database clients. However, each client can create their own prepared statement to use. Prepared statements can be manually cleaned up using the `DEALLOCATE` command.

Prepared statements potentially have the largest performance advantage when a single session is being used to execute a large number of similar statements. The performance difference is particularly significant if the statements are complex to plan or rewrite, for example if the query involves a join of many tables or requires the application of several rules. If the statement is relatively simple to plan and rewrite but relatively expensive to execute, the performance advantage of prepared statements is less noticeable.

```sql
PREPARE name [ ( data_type [, ...] ) ] AS SELECT
```

**Parameters**

- `name`: The name given to the prepared statement. The name must be unique within a single session and this name is used to execute or deallocate a previously prepared statement.
- `data-type`: The data type of a parameter to the prepared statement. If the data type of a particular parameter is unspecified or is specified as unknown, it is inferred from the context in which the parameter is first referenced. To refer to the parameters in the prepared statement itself, use $1, $2, and so on.

### ROLLBACK

`ROLLBACK` rolls back the current transaction and causes all the updates made by the transaction to be discarded.

```sql
ROLLBACK [ WORK ]
```

**Parameters**

- `WORK`

### SELECT INTO

`SELECT INTO` creates a new table and fills it with data computed by a query. The data is not returned to the client, as it is with a normal `SELECT`. The new table's columns have the names and data types associated with the output columns of the `SELECT`.

```sql
[ WITH [ RECURSIVE ] with_query [, ...] ]
SELECT [ ALL | DISTINCT [ ON ( expression [, ...] ) ] ]
    * | expression [ [ AS ] output_name ] [, ...]
    INTO [ TEMPORARY | TEMP | UNLOGGED ] [ TABLE ] new_table
    [ FROM from_item [, ...] ]
    [ WHERE condition ]
    [ GROUP BY expression [, ...] ]
    [ HAVING condition [, ...] ]
    [ WINDOW window_name AS ( window_definition ) [, ...] ]
    [ { UNION | INTERSECT | EXCEPT } [ ALL | DISTINCT ] select ]
    [ ORDER BY expression [ ASC | DESC | USING operator ] [ NULLS { FIRST | LAST } ] [, ...] ]
    [ LIMIT { count | ALL } ]
    [ OFFSET start [ ROW | ROWS ] ]
    [ FETCH { FIRST | NEXT } [ count ] { ROW | ROWS } ONLY ]
    [ FOR { UPDATE | SHARE } [ OF table_name [, ...] ] [ NOWAIT ] [...] ]
```

**Parameters**

- `TEMPORARAY` or `TEMP`: If specified, the table is created as a temporary table.
- `UNLOGGED:` if specified, the table is created as an unlogged table.
- `new_table` The name (optionally schema-qualified) of the table to be created. 

**Example**

Create a new table `films_recent` consisting of only recent entries from the table `films`:

```sql
SELECT * INTO films_recent FROM films WHERE date_prod >= '2002-01-01';
```

### SHOW

`SHOW` displays the current setting of run-time parameters. These variables can be set using the `SET` statement, by editing the postgresql.conf configuration file, through the `PGOPTIONS` environmental variable (when using libpq or a libpq-based application), or through command-line flags when starting the postgres server.

```sql
SHOW name
```

**Parameters**

- `name`:
    - `SERVER_VERSION`: Shows the server's version number.
    - `SERVER_ENCODING`: Shows the server-side character set encoding. At present, this parameter can be shown but not set, because the encoding is determined at database creation time.
    - `LC_COLLATE`: Shows the database's locale setting for collation (text ordering). At present, this parameter can be shown but not set, because the setting is determined at database creation time.
    - `LC_CTYPE`: Shows the database's locale setting for character classification. At present, this parameter can be shown but not set, because the setting is determined at database creation time.
    `IS_SUPERUSER`: True if the current role has superuser privileges.
- `ALL`: Show the values of all configuration parameters with descriptions.

**Example**

Show the current setting of the parameter `DateStyle`

```sql
SHOW DateStyle;
```

```console
 DateStyle
-----------
 ISO, MDY
(1 row)
```

### START TRANSACTION

This command is parsed and sends the completed command back to client. This is the same as the `BEGIN` command.

```sql
START TRANSACTION [ transaction_mode [, ...] ]

where transaction_mode is one of:

    ISOLATION LEVEL { SERIALIZABLE | REPEATABLE READ | READ COMMITTED | READ UNCOMMITTED }
    READ WRITE | READ ONLY
```

### COPY

This command dumps the output of any SELECT query to a specified location. The user must have access to this location for this command to succeed.

```sql
COPY  query
    TO '%scratch_space%/folder_location'
    [  WITH FORMAT 'format_name']

where 'format_name' is be one of:
    'parquet', 'csv', 'json'

'parquet' is the default format.
```

>[!NOTE]
>
>The complete output path will be `adl://<ADLS_URI>/users/<USER_ID>/acp_foundation_queryService/folder_location/<QUERY_ID>`
>

### ALTER

This command helps in adding or dropping primary or foreign key constraints to the table.

```sql
Alter TABLE table_name ADD CONSTRAINT Primary key ( column_name )

Alter TABLE table_name ADD CONSTRAINT Foreign key ( column_name ) references referenced_table_name ( primary_column_name )

Alter TABLE table_name ADD CONSTRAINT Foreign key ( column_name ) references referenced_table_name Namespace 'namespace'

Alter TABLE table_name DROP CONSTRAINT Primary key ( column_name )

Alter TABLE table_name DROP CONSTRAINT  Foreign key ( column_name )
```

>[!NOTE]
>The table schema should be unique and not shared among multiple tables. Additionally, the namespace is mandatory.

### SHOW PRIMARY KEYS

This command lists all the primary key constraints for the given database.

```sql
SHOW PRIMARY KEYS
```

```console
    tableName | columnName    | datatype | namespace
------------------+----------------------+----------+-----------
 table_name_1 | column_name1  | text     | "ECID"
 table_name_2 | column_name2  | text     | "AAID"
```

### SHOW FOREIGN KEYS

This command lists all the foreign key constraints for the given database.

```sql
SHOW FOREIGN KEYS
```

```console
    tableName   |     columnName      | datatype | referencedTableName | referencedColumnName | namespace 
------------------+---------------------+----------+---------------------+----------------------+-----------
 table_name_1   | column_name1        | text     | table_name_3        | column_name3         |  "ECID"
 table_name_2   | column_name2        | text     | table_name_4        | column_name4         |  "AAID"
```