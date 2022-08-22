---
title: Dataset Samples 
description: 
---


## Dataset samples

Dataset samples are part of Query Service's approximate query processing capabilities and allows you to create uniform random samples from existing Azure data lake storage datasets. 

A sample dataset contains only a small subset of the data from the original dataset which enables you to conduct exploratory queries on big data as they trade query accuracy for an improved response time. A sample dataset is created by using a percentage of records from the original dataset. This percentage is the sampling rate.


 When users don't want an exact answer for an aggregate operation over a dataset, they will be issuing an approximate query to get an approximate answer, where the trade-off is of the read time. By giving the approximate answer instead of exact one, we will return results much faster than the original query, with an extended scope to have error bound answers. Query Service does this with Dataset Samples. 
 
 As the sample dataset contains only a percentage of the data from the original dataset, at read time Query Service needs to scan much fewer number of rows, resulting in faster results.

 that the user can create using the Analyze Table Command. Uniform Random samples will have a certain percentage of the size of the original data, sample percentage is called sampling rate.  
