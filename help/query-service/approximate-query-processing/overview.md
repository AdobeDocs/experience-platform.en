---
title: Approximate Query Processing in Query Service
description: Approximate query processing returns an approximate answer to a query using similar information to the source data that would normally be used to answer the query. Query approximations are a faster and more cost effective means to summarize massive amounts of data by trading accuracy in the results.
---
# Approximate query processing in [!DNL Query Service]

Adobe Experience Platform Query service enables you to mange dataset samples through approximate query processing. Approximate query processing returns an approximate answer to a query using similar information to the source data that would normally be used to answer the query. Query approximations are a faster and more cost effective means to summarize massive amounts of data by trading accuracy in the results.

The three distinctive use cases for approximate query processing are as follows:

- **Speed up interactive queries**: Typically, when [!DNL PostgreSQL] users run ad hoc exploratory queries, the speed of the returned result is more important than the accuracy of the results. Approximate query processing allows you to conduct fast exploration of massive data lake datasets while keeping computational costs and end-to-end latency low.

- **Provide quick insights on large datasets in the data lake**: This approach is typically directed towards dimension discovery and data modeling as they require fast interactive style reporting on large datasets which do not require high accuracy of data.

- **Preview and analyze unpublished content**: The Data Access API is often used to preview data lake datasets via non-standard APIs with custom handling. Sampled datasets can be used to meet this requirement.

## Sampling methods

Dataset sampling can be done either online or offline. The benefits and drawbacks of both are discussed in the following section.

### Online sampling

Online sampling estimates the results at runtime. This means that they do not require a prior sample collection or sample caching and can potentially sample any dataset at any time and with any SQL query. Although online sampling techniques can add significant computational resource requirements, they require extremely low-level handling of data at runtime. Online sampling is the method used by other solutions such as [!DNL BlinkDB] and [!DNL Google BigQuery].

### Offline sampling

Offline sampling estimates results based on alternate datasets or structures. These alternate datasets and structures are created earlier during a separate extract, transform, and load (ETL) process and must be prepared for sampling prior to the query runtime. At the query runtime, these newly created structures are queried instead of the actual dataset. The query runtime requires some reformulation and translation to be able to redirect the original SQL to the sample datasets and structures. The majority of the required workload is conducted offline at the time of the sample's creation.

## Types of sample techniques
 
Multiple sample datasets can be made for the original dataset. This allows one sample dataset for each sampling technique or for each identified column set to be stratified. At query runtime, the query engine selects the correct sample version based on the supplied parameters and query conditions.

There are three commonly used sampling techniques:

- **Uniform Random Sampling**: A technique that is used as a baseline when there is no additional context of how a dataset is queried. Any dataset can be sampled using this technique with very few to no assumptions about query patterns. The drawback to this technique is that it can have a higher error rate than the alternatives.
- **Uniform Stratified Sampling**: A technique of sampling from a population that can be partitioned into sub-populations or sub-groups. It captures the variations between sub-populations by sampling each population independently. This technique performs better than random sampling and with a lower error rate but it requires additional context on how to pick the sub-populations. They typically use the column sets that are frequently queried on a dataset.
- **Systematic Sampling**: A method where a sampling interval is used to pick a sample after the initial random sample. `K = N/n` where `N` is the population size and `n` is the sample size. This also requires information about query patterns to be able to stratify the samples according to the groups.

## Build a sample

You are recommended to pre-compute an offline sample when creating approximate samples from an Experience Event dataset. The sampled rows must have the same schema as the original dataset and additional columns for the confidence interval calculation. To return queries faster, the sample dataset will have fewer rows than the original.

Sample creation can be achieved in two ways:  **Ad Hoc Sample Creation** and **Automatic Sample Creation**.

## Next steps

Now that you better understand the role of approximate query processing within Experience Platform, you are ready to start composing your own sample datasets. See the documentation to learn how to [create and manage your sample datasets](./manage-samples.md) for approximate query processing.  
