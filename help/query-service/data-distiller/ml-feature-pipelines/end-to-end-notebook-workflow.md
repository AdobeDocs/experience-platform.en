---
title: AI/ML Data Pipeline Enrichment end-to-end workflow
description: Use cloud-based machine learning environment notebooks to create a training and scoring a propensity model that predicts subscription conversions from Adobe Experience Platform data.
hide: true
hidefromtoc: true
exl-id: 2853e7c7-cab8-4e1b-b73f-622c937fbbaf
---
<!-- 
title: Cloud Machine Learning Environment Notebooks
Cloud machine learning environment notebooks
Old title: 
# AI/ML data pipeline enrichment end-to-end workflow
-->

# AI/ML data pipeline enrichment end-to-end workflow

Use Data Distiller to enrich your machine learning pipelines with high-value customer experience data that has been collected and curated in Adobe Experience Platform. 

This document provides a series of cloud-based machine learning environment notebooks that demonstrate an end-to-end workflow. The workflow uses your preferred machine learning tools to build custom data models that support your marketing use cases with Experience Platform data. 

This workflow requires the use of [!DNL Python] notebooks in your machine learning environments. Instructions for getting started with these [!DNL Python] notebooks are included in their respective readme files.

Before you continue with this guide, follow the steps outlined in the [AI/ML feature pipelines overview](./overview.md) to enable the use of the sample Python notebooks used in this AI/ML feature pipeline use case.

## Cloud machine learning environment notebooks {#cmle-notebooks}

The end-to-end workflow can be divided into three broad phases based on the services used to implement the workflow. 

- Initial exploration and preparation of Platform data relies on Platform services. 
- Model training and scoring leverages tooling in your cloud-based ML environment. Common choices for ML platforms include: Databricks ML, AWS Sagemaker, DataRobot, and so on. 
- Ingesting scores back into Platform and any code-based audience creation and activation based on those scores would again rely on Platform services. 

However, all of these phases can be executed in one or more notebooks from your ML environment without the user needing to switch contexts between Platform and their cloud-based ML tools.

The typical steps of this end-to-end flow have been divided into a set of modular notebooks which, taken together, demonstrate the steps involved in typical machine learning project involving Platform data. This makes it easier to use the notebooks as a reference for implementing specific activities, and to select and adapt code from the relevant notebooks to implement a real-world use case. In practice, a data scientist may prepare a single notebook the implements the end-to-end pipeline for their ML project. Alternatively, a data scientist may simply adapt the sample code for querying Platform data and making it available in their ML environment before continuing the project use UI-based features in their ML platform.

The sample notebooks included in the linked repository are briefly described below. Detailed documentation for each notebook is interspersed with the code in the notebooks themselves.

<!-- Below is the meat - the how to (but without links or details) -->

### Generate synthetic data {#generate-synthetic-data}

This notebook provides code for generating datsets of synthetic profiles and Experience Events in your Platform that will be used to illustrate the CMLE workflow.

### EDA and Featurization with Query Service {#eda-and-featurization-with-query-service}

This notebook includes examples of exploratory analysis on Platform datasets using interactive queries via Platform Query Service. These are followed with examples of featurization queries to create a training dataset for the example propensity model.

### Export training data {#export-training-data}

This notebook illustrates exporting the training dataset to cloud storage that can be read by your ML tools.

### Train a propensity model {#train-a-propensity-model}

This notebook illustrates training a propensity model. It assumes Databricks ML as your ML environment, but is written generically (that is, without heavy use of Databricks-specific features/APIs) so that it can be adapted to other platforms.

### Score the propensity model

This notebook illustrates scoring the trained propensity model to produce a dataset of propensity scores for each Platform customer profile.

### Ingest scores to AEP

This brief notebook illustrates ingesting the dataset of propensity scores to enrich the customer profiles in AEP.

### Create and activate audiences from code

This notebook illustrates how the user can create audiences from the scores and activate those audiences through Platform apps from their notebook code.
