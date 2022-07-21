---
keywords: Experience Platform;query;query service;troubleshooting;guardrails;guidelines;limit;
title: Guardrails for Query Service
description: This document provides information on use and rate limits for Query Service data to help you optimize your query use.
---
# Guardrails for Query Service data

This document provides default use and rate limits for Query Service data to help you optimize system performance when querying data. When reviewing the following guardrails, it is assumed that you have modeled the data correctly. If you have questions on how to model your data, please contact your customer service representative.

>[!NOTE]
>
>Most customers do not exceed these default limits. If you would like to learn about custom limits, please contact your customer care representative.

## Getting started

<!-- The following Experience Platform services are involved with modeling Query Service data: -->

The two key Query service capabilities are as follows:

1. Ad hoc Queries:  For executing SELECT queries (to explore, experiment and validate data) where the result of the query is not written back to the data lake.

1. Batch Query - for executing ITAS and CTAS queries (to clean, shape, manipulate and enrich data) where the result of the query will be written back to the data lake. The metric for measuring the consumption of this functionality is compute hours
