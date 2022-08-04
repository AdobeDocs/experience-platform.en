---
title: Query Service Packages
description: The following document outlines the packages of capabilites and products available for Query Service and highlights the differences for ad hoc and batch queries.
---
# Query Service packages

Query Service consists of two capabilities based on the query patterns that can be executed: 

- **Ad hoc queries** are SQL queries used to explore ingested datasets for the purpose of verification, validation, experimentation, and so on. These queries do not write data back into the Adobe Experience Platform data lake.
- **Batch queries** are SQL queries used to perform the post-ingestion processing of ingested datasets. This involves cleaning, shaping, manipulating, and enriching data. The query results are written back to the Adobe Experience Platform data lake. These queries can be scheduled, managed, and monitored as batch jobs

Query Service capabilities are packaged with the following products/add-ons:  

- Adobe Experience Platform-based applications such as Real-Time Customer Data Platform, Customer Journey Analytics, and Adobe Journey Optimizer, provide a pre-configured setup for Query Service to execute ad hoc queries with all types and tiers of Platform based applications. 
- Data Distiller is included as an add-on package that can be purchased with Adobe Real-Time CDP, Customer Journey Analytics and Adobe Journey Optimizer. Query Service access to execute batch queries is also provided by default with Data Distiller.

The following table outlines the key Query Service entitlements based on where they are packaged:

<!-- Q) Does Data Distiller provide access to ad hoc queries? -->
<!-- Q) are those approved branding acronyms -->
<!-- Q) compute or computational? -->

| Query Service Entitlement | Platform-based Applications | Packaged with Data Distiller |
|---|---|---|
| Maximum Execution Time  | 10 minutes  | 24 hours |
| Query Pattern Supported | Ad hoc query only | Batch query |
| Use Case Supported | <ul><li>Exploration​</li><li>Data Discovery​</li><li>Data Validation</li><li>Experimentation</li></ul> | <ul><li>Cleaning</li><li>Shaping</li><li>Manipulating</li><li>Enriching</li></ul> |
| License Metric | **Query User Concurrency**: <ul><li>1 conc. user (RTCDP, AJO)​</li><li>5 conc. user (CJA)​</li></ul> **Query Concurrency**: <ul><li>1 conc. running query (all apps)​</li></ul> **Additional Ad hoc query users pack add-on** can be purchased to increase customer’s authorized ad hoc query entitlements. <ul><li>+5 additional conc. users per pack</li><li>+1 additional conc. running query per pack</li></ul> | **Compute Hours**: <ul><li>Variable (scoped based on customer's application entitlements)</li></ul> **Compute Hours** is a measure of the amount of time taken by the Query Service engine to read, process, and write data back into the data lake when a batch query is executed. |
| Query Results Returned Via | Client UI | Derived dataset stored in data lake |
| Result Limit |   |   |
|   |   |   |
|   |   |   |
|   |   |   |
|   |   |   |
|   |   |   |
|   |   |   |
|   |   |   |

 		
		
	


	






		


	
Query UI - 100 rows
3rd party client - 50,000
Postgres SQL client - 50,000
Query UI (no upper limit to rows)
3rd party clients  (no upper limit to rows)
Postgres SQL client  (no upper limit to rows)
REST APIs (no upper limit to rows)
Query Execution Interface	
Query Service UI 
3rd party client UI 
Postgres SQL client UI
Query UI 
3rd party client UI 
Postgres SQL client UI
REST APIs
Read Dataset Capacity	Yes	Yes
Write Dataset Capacity	No	Yes
Scheduling Capacity	No	Yes
Monitoring Capacity	Yes	Yes
Query Alert Setup Capacity	No	Yes
Semantics Supported	
“Select” queries
“CTAS” or ITAS queries

<ul><li>Coffee</li><li>Tea</li><li>Milk</li><li>Milk</li></ul>







