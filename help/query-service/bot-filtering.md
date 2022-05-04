---
title: Bot Filtering in Query Service with Machine Learning
description: This document provides an overview of how to use Query Service and machine learning to determine bot activity and filter their actions from genuine online website visitor traffic.
---
# Bot Filtering in Query Service with Machine Learning

Adobe Experience Platform Query Service can be used to maintain your data quality through the process of bot filtering. 

## what is bot filtering

Bot filtering allows you to maintain your data quality by largely removing data contamination that results from non human interaction with your website. 

This is achieved through ML and SQL

## Use QS to detect bots through spikes in traffic

Bot filtering can be successfully achieved using QS alone. This document describes the process involved in implementing bot filtering with your datasets and provides example queries for this purpose.
To improve the efficacy of QS bot filtering capabilities you are recommended to use Machine learning to optimize the thresholds that identify activity as bot activity.

## Prerequsites

Jupiter notebook. [Download from here](https://jupyter.org/)

## Identify bot activity within your data

Marketing Cloud ID (MCID) 

