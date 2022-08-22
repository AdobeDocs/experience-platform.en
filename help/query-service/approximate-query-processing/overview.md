---
title: Approximate Query Processing in Query Service
description: Approximate query processing returns an approximate answer to a query using similar information to the source data that would normally be used to answer the query. Query approximations are a faster and more cost effective means to summarize massive amounts of data by trading accuracy in the results.
---
# Approximate query processing in [!DNL Query Service]

Adobe Experience Platform Query service enables you to mange dataset samples through approximate query processing. Approximate query processing returns an approximate answer to a query using similar information to the source data that would normally be used to answer the query. Query approximations are a faster and more cost effective means to summarize massive amounts of data by trading accuracy in the results.

<!-- This feature is primarily intended for use with aggregate queries such as count, sum, and avg, etc. Any tradeoffs made to reduce latency and diminish resource costs are logged. This ensures that the SQL client can inspect the log to return feedback on the approximate query's efficiency.

## Approaches to approximate query processing -->

The three distinctive use cases for approximate query processing are as follows:

- To speed up interactive queries. Typically, when [!UICONTROL PostgreSQL] users run ad hoc exploratory queries, the speed of the returned result is more important than the accuracy of the results. Approximate query processing allows you to conduct fast exploration of massive data lake datasets while keeping computational costs and end-to-end latency low.

- To provide quick insights on large datasets in the data lake. This approach is typically directed towards dimension discovery and data modeling as they require fast interactive style reporting on large datasets which don't require high accuracy of data.

- To gain a quick understanding of unpublished content as though it were published. The Data Access API is often used to preview data lake datasets via non-standard APIs with custom handling. Sampled datasets can be used to meet this requirement.

## Sampling methods

Dataset sampling can be done either online or offline. The benefits and drawbacks of both are discussed in the following section.

### Online sampling

Online sampling estimates the results at runtime. This means that they do not require a prior sample collection or sample caching and can potentially sample any dataset at any time and with any SQL query. Although online sampling techniques can add significant computational resource requirements, they require extremely low-level handling of data at runtime. Online sampling is the method used by other solutions such as [!DNL BlinkDB] and [!DNL Google BigQuery].

### Offline sampling

Offline sampling estimates results based on alternate datasets or structures. These alternate datasets and structures are created earlier during a separate extract, transform, and load (ETL) process and must be prepared for sampling prior to the query runtime. At the query runtime, these newly created structures are queried instead of the actual dataset. The query runtime requires some reformulation and translation to be able to redirect the original SQL to the sample datasets and structures. The majority of the required workload is conducted offline at the time of the sample's creation.

<!-- 
Although there are benefits to both approaches, offline sampling is the recommended approach.
Q) Why is offline sampling recommended?
 -->

## Types of sample techniques
 
Multiple sample datasets can be made for the original dataset. This allows one sample dataset for each sampling technique or for each identified column set to be stratified. At query runtime, the query engine selects the correct sample version based on the supplied parameters and query conditions.

There are three commonly used sampling techniques:

- **Uniform Random Sampling**: A technique that is used as a baseline when there is no additional context of how a dataset is queried. Any dataset can be sampled using this technique with very few to no assumptions about query patterns. The drawback to this technique is that it can have a higher error rate than the alternatives.
- **Uniform Stratified Sampling**: A technique of sampling from a population that can be partitioned into sub-populations or sub-groups. It captures the variations between sub-populations by sampling each population independently. This technique performs better than random sampling and with a lower error rate but it requires additional context on how to pick the sub-populations. They typically use the column sets that are frequently queried on a dataset.
- **Systematic Sampling**: A method where a sampling interval is used to pick a sample after the initial random sample. `K = N/n` where `N` is the population size and `n` is the sample size. This also requires information about query patterns to be able to stratify the samples according to the groups.

## Build a sample

You are recommended to pre-compute an offline sample when creating approximate samples from an Experience Event dataset. The sampled rows must have the same schema as the original dataset and additional columns for the confidence interval calculation. To return queries faster, the sample dataset will have fewer rows than the original.

Sample creation can be achieved in two ways:  **Ad Hoc Sample Creation** and **Automatic Sample Creation**.

## Limitations



<!-- WHY? What is their reasoning? "Given the initial use cases for custom dashboards we have prioritized Offline Sampling as initial approach."  -->

<!-- Moving forwards: -->

<!-- "This is so that we can focus on ..."  wiki is missing information -->

<!-- Is this possible through the UI or just in the API? -->

<!-- Need query examples on its use. -->

<!-- Is 'QS interactive' the [!DNL Query Editor]? -->
