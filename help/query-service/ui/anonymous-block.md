---
title: Overview of the Anonymous Block Feature
description: The Anonymous Block is a tool provided by Adobe Experience Platform Query Service, which allows you to schedule the execution of a sequence of queries on a to efficently 
---
# Anonymous block

https://jira.corp.adobe.com/browse/PLAT-104217


so we've got the beginning and the end clause you can put in a bunch of a batch queries in there. Essentially see tests queries that right or append datasets in sequence. Any of them fails. You can stop the execution. You can create templates, query templates out of this query like you know, begin and end, you save it as a query template and you can schedule it and you can schedule it based on whatever the schedule is and it will execute on schedule and the advantage of executing these queries in sequence is that first of all their executive one after the other.

Secondly, execution can be stopped if there is an exception clause and thirdly from a resource point of view, the queries as a chain will be more efficient than you executing the queries one after the other because we reuse the cluster resources

The cluster of resources helps Because every query what we do, every batch query that we get Jordan what we do is that we spin up a cluster, will load the query we execute the query and then we spin down the cluster.
