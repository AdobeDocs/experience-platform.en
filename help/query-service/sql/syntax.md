---
keywords: Experience Platform;home;popular topics;query service;Query service;sql syntax;sql;ctas;CTAS;Create table as select
solution: Experience Platform
title: SQL Syntax in Query Service
topic: syntax
description: This document shows SQL syntax supported by Adobe Experience Platform Query Service.
---

# SQL syntax in Query Service

Adobe Experience Platform Query Service provides the ability to use standard ANSI SQL for `SELECT` statements and other limited commands. This document shows SQL syntax supported by [!DNL Query Service].

## SELECT queries {#select-queries}

The following syntax defines a `SELECT` query supported by [!DNL Query Service]:

```sql
[ WITH with_query [, ...] ]
SELECT [ ALL | DISTINCT [( expression [, ...] ) ] ]
    [ * | expression [ [ AS ] output_name ] [, ...] ]
    [ FROM from_item [, ...] ]
    [ SNAPSHOT { SINCE start_snapshot_id | AS OF end_snapshot_id | BETWEEN start_snapshot_id AND end_snapshot_id } ]
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

### SNAPSHOT clause

This clause can be used to read data on a table incrementally based on snapshot ids. A snapshot id is a checkpoint marker identified by a number, of type Long, on a datalake table every time data is written to it. The SNAPSHOT clause attaches itself to the table relation it is used next to.

```sql
    [ SNAPSHOT { SINCE start_snapshot_id | AS OF end_snapshot_id | BETWEEN start_snapshot_id AND end_snapshot_id } ]
``` 

#### Example 

```sql
SELECT * FROM Customers SNAPSHOT SINCE 123;

SELECT * FROM Customers SNAPSHOT AS OF 345;

SELECT * FROM Customers SNAPSHOT BETWEEN 123 AND 345;

SELECT * FROM (SELECT id FROM CUSTOMERS BETWEEN 123 AND 345) C 

SELECT * FROM Customers SNAPSHOT SINCE 123 INNER JOIN Inventory AS OF 789 ON Customers.id = Inventory.id;
```

Please note that a SNAPSHOT clause works with a table or table alias but not on top of a sub-query or view. A SNAPHOST clause will work anywhere a SELECT query on a table can be applied.

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

CREATE TABLE Chairs AS (SELECT color FROM Inventory SNAPSHOT SINCE 123)
```

>[!NOTE]
>
>The `SELECT` statement must have an alias for the aggregate functions such as `COUNT`, `SUM`, `MIN`, and so on. Additionally, the `SELECT` statement can be provided with or without parentheses (). You can provide a `SNAPSHOT` clause to read incremental deltas into the target table.

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

INSERT INTO Customers AS (SELECT * from OnlineCustomers SNAPSHOT AS OF 345)
```

>[!NOTE] 
> The `SELECT` statement **must not** be enclosed in parentheses (). Additionally, the schema of the result of the `SELECT` statement must conform to that of the table defined in the `INSERT INTO` statement. You can provide a `SNAPSHOT` clause to read incremental deltas into the target table.

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

**Parameters**

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
DECLARE name CURSOR FOR query
```

**Parameters**

- `name`: The name of the cursor to be created.
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

**Parameters**

- `num_of_rows`: The number of rows to fetch. 
- `cursor_name`: The name of the cursor you're retrieving information from.

### PREPARE {#prepare}

The `PREPARE` command lets you create a prepared statement. A prepared statement is a server-side object that can be used to templatize similar SQL statements.

Prepared statements can take parameters, which are values that are substituted into the statement when it is executed. Parameters are referred by position, using $1, $2, etc, when using prepared statements. 

Optionally, you can specify a list of parameter data types. If a parameter's data type isn't listed, the type can be inferred from the context.

```sql
PREPARE name [ ( data_type [, ...] ) ] AS SELECT
```

**Parameters**

- `name`: The name for the prepared statement.
- `data_type`: The data types of the prepared statement's parameters. If a parameter's data type isn't listed, the type can be inferred from the context. If you need to add multiple data types, you can add them in a comma separated list.

### ROLLBACK

The `ROLLBACK` command undoes the current transaction and discards all the updates made by the transaction.

```sql
ROLLBACK
ROLLBACK WORK
```

### SELECT INTO

The `SELECT INTO` command creates a new table and fills it with data computed by a query. The data is not returned to the client, as it is with a normal `SELECT` command. The new table's columns have the names and data types associated with the output columns of the `SELECT` command.

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

More information about the standard SELECT query parameters can be found in the [SELECT query section](#select-queries). This section will only list parameters that are exclusive to the `SELECT INTO` command.

- `TEMPORARY` or `TEMP`: An optional parameter. If specified, the table that is created will be a temporary table.
- `UNLOGGED`: An optional parameter. If specified, the table that is created as will be an unlogged table. More information about unlogged tables can be found in the [PostgreSQL documentation](https://www.postgresql.org/docs/current/sql-createtable.html).
- `new_table`: The name of the table to be created. 

**Example**

The following query creates a new table `films_recent` consisting of only recent entries from the table `films`:

```sql
SELECT * INTO films_recent FROM films WHERE date_prod >= '2002-01-01';
```

### SHOW

The `SHOW` command displays the current setting of run-time parameters. These variables can be set using the `SET` statement, by editing the postgresql.conf configuration file, through the `PGOPTIONS` environmental variable (when using libpq or a libpq-based application), or through command-line flags when starting the postgres server.

```sql
SHOW name
SHOW ALL
```

**Parameters**

- `name`: The name of the run-time parameter you want information about. Possible values for the run-time parameter include the following values:
    - `SERVER_VERSION`: This parameter shows the server's version number.
    - `SERVER_ENCODING`: This parameter shows the server-side character set encoding.
    - `LC_COLLATE`: This parameter shows the database's locale setting for collation (text ordering). 
    - `LC_CTYPE`: This parameter shows the database's locale setting for character classification.
    `IS_SUPERUSER`: This parameter shows if the current role has superuser privileges.
- `ALL`: Show the values of all configuration parameters with descriptions.

**Example**

The following query shows the current setting of the parameter `DateStyle`.

```sql
SHOW DateStyle;
```

```console
 DateStyle
-----------
 ISO, MDY
(1 row)
```

### COPY

The `COPY` command dumps the output of any `SELECT` query to a specified location. The user must have access to this location for this command to succeed.

```sql
COPY query
    TO '%scratch_space%/folder_location'
    [  WITH FORMAT 'format_name']
```

**Parameters**

- `query`: The query that you want to copy.
- `format_name`: The format that you want to copy the query in. The `format_name` can be one of `parquet`, `csv`, or `json`. By default, the value is `parquet`.

>[!NOTE]
>
>The complete output path will be `adl://<ADLS_URI>/users/<USER_ID>/acp_foundation_queryService/folder_location/<QUERY_ID>`

### ALTER TABLE

The `ALTER TABLE` command lets you add or drop primary or foreign key constraints to the table.

```sql
ALTER TABLE table_name ADD CONSTRAINT constraint_name PRIMARY KEY ( column_name )

ALTER TABLE table_name ADD CONSTRAINT constraint_name FOREIGN KEY ( column_name ) REFERENCES referenced_table_name ( primary_column_name )

ALTER TABLE table_name ADD CONSTRAINT constraint_name PRIMARY KEY column_name NAMESPACE namespace

ALTER TABLE table_name DROP CONSTRAINT constraint_name PRIMARY KEY ( column_name )

ALTER TABLE table_name DROP CONSTRAINT constraint_name FOREIGN KEY ( column_name )
```

**Parameters**

- `table_name`: The name of the table which you are editing.
- `constraint_name`: The name of the constraint that you want to add or delete.
- `column_name`: The name of the column that you are adding a constraint to.
- `referenced_table_name`: The name of the table that is referenced by the foreign key.
- `primary_column_name`: The name of the column that is referenced by the foreign key.

>[!NOTE]
>
>The table schema should be unique and not shared among multiple tables. Additionally, the namespace is mandatory.

### SHOW PRIMARY KEYS

The `SHOW PRIMARY KEYS` command lists all the primary key constraints for the given database.

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

The `SHOW FOREIGN KEYS` command lists all the foreign key constraints for the given database.

```sql
SHOW FOREIGN KEYS
```

```console
    tableName   |     columnName      | datatype | referencedTableName | referencedColumnName | namespace 
------------------+---------------------+----------+---------------------+----------------------+-----------
 table_name_1   | column_name1        | text     | table_name_3        | column_name3         |  "ECID"
 table_name_2   | column_name2        | text     | table_name_4        | column_name4         |  "AAID"
```
