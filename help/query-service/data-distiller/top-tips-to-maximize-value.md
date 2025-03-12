---
title: Top Tips to Maximize Value with Adobe Experience Platform Data Distiller
description: Learn to maximize value with Adobe Experience Platform Data Distiller by enriching Real-Time Customer Profile data and leveraging behavioral insights to build targeted audiences. This resource includes a sample dataset and a case study demonstrating how to apply the Recency, Frequency, Monetary (RFM) model for customer segmentation.
hide: true
hidefromtoc: true
exl-id: f3af4b9a-5024-471a-b740-a52fd226a985
---
# Top tips to maximize value with Adobe Experience Platform Data Distiller

This page contains the sample dataset for you to apply what you learned in the session "OS656 - Top Tips to Maximize Value with Adobe Experience Platform Data Distiller". You will learn how to accelerate implementations of Adobe Real-Time Customer Data Platform and Journey Optimizer by enriching Real-Time Customer Profile data. This enrichment leverages deep insights into customer behavior patterns to build audiences for experience delivery and optimization.

Through the Luma case study, you will analyze user behavioral data and create a Recency, Frequency, Monetary (RFM) model—a marketing analysis technique for customer segmentation based on purchasing patterns.

<!-- [Select the link to download the sample CSV data](../resources/movie-data.csv) -->

## Prerequisite

To execute this use case, your Adobe Experience Platform instance must be licensed for [Data Distiller](./overview.md). Contact your Adobe representative for more information.

## Overview of the RFM model

RFM, short for Recency (R), Frequency (F), and Monetary (M), is a data-driven approach to customer segmentation and analysis. This methodology evaluates three key aspects of customer behavior: how recently a customer made a purchase, how often they engage, and how much they spend. By quantifying these factors, businesses can gain actionable insights into customer segments and develop targeted marketing strategies that better meet individual customer needs.

## Understanding customer behavior with the RFM model

<!-- ## How the RFM model defines customer value -->

The RFM model segments customers based on transactional behavior using three key parameters.

- **Recency** measures the time since a customer's last purchase, indicating engagement levels and future buying potential.
- **Frequency** tracks how often a customer interacts, serving as a clear indicator of loyalty and sustained engagement.
- **Monetary value** assesses the total spending by customers, highlighting their overall value to the business.

By combining these factors, businesses assign numerical scores (typically on a scale from `1` to `4`) to each customer. Lower scores indicate more favorable outcomes. For example, a customer scoring `1` in all categories is considered among the best, demonstrating recent activity, high engagement, and significant spending.

## Benefits and limitations of the RFM model

Every marketing modeling technique involves trade-offs, offering both benefits and limitations. RFM modeling is a valuable tool for understanding customer behavior and refining marketing strategies. Its advantages include segmenting customers to personalize messaging, optimize revenue, and improve response rates, retention, satisfaction, and Customer Lifetime Value (CLTV).

However, RFM modeling has limitations. It assumes uniformity within segments based on recency, frequency, and monetary value, which may oversimplify customer behavior. The model also assigns equal weight to these factors, potentially misrepresenting customer value. Additionally, it does not account for context, such as product-specific traits or customer preferences, which can lead to misinterpretations of purchasing behavior.

## Steps to build a dynamic RFM score-based SQL audience

Before starting the Luma case study, you need to ingest a sample dataset. First, [select the link to download the `luma_web_data.csv` dataset locally](../resources/luma_web_data.csv).

The sample dataset is provided in CSV format to align with the use case. In practice, you would typically source data from Adobe Analytics, Adobe Commerce, or Adobe Web/Mobile SDK.

Throughout this tutorial, you will use Data Distiller to extract relevant events and fields into a standardized CSV format. The goal is to include only essential fields while maintaining a flat data structure for efficiency and practicality.

### Ingest the sample Luma web data

Load the CSV Data into Adobe Experience Platform

1. Name the dataset as "luma_web_data" and follow the steps outlined here:

a. Navigate to Adobe Experience Platform UI->Workflows->Create Dataset from CSV File.

![The Platform UI with "Workflow" and "Create dataset from CSV file" highlighted.]()

b. Configure the name of the dataset as luma_web_data

c. Drag and drop the CSV file into the Add data box. You can also navigate to the file by using the "Choose File" button as well.

![The "Add data" section of the "Create dataset from CSV file" workflow.]()

d. Once the data is loaded, you will see a data preview.

e. Select Finish to complete the upload.

f. Navigate to AEP UI->Datasets to locate the dataset "luma_web_data". You will notice that the manual upload of the CSV file by you has caused the file to be ingested in batch with a Batch ID and 1000 records are ingested. On the right side panel, observe the table name that shows it as luma_web_data. The SQL engine in Data Distiller will be using this table name to query against the data, not the Dataset name.

![The "Dataset activity" tab for the newly created "luma_web_data" dataset.]()

g. To preview the dataset, select Preview dataset in the top right corner. You will get a dataset preview that looks like this:

![The "Dataset activity" tab with "Preview dataset" highlighted.]()

![The dataset preview of the "luma_web_data" dataset.]()

2. Since we are loading the CSV file directly, there is no need to create an XDM schema (whether it's record, event, or other B2B styles). Instead, we will be working with an Ad Hoc schema. While Data Distiller can work with any schema, when we prepare the final dataset for hydration into the Real-Time Customer Profile, we will use a Record XDM schema.
   