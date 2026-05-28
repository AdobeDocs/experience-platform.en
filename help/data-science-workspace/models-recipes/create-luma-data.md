---
keywords: Experience Platform;luma web data;Data Science Workspace;popular topics;recipes;demo data;demo web data;luma data
solution: Experience Platform
title: Create the Luma web schemas and datasets
type: Tutorial
description: This tutorial provides you with the prerequisites and assets required for the Luma demo propensity model.
exl-id: a791e532-1116-4407-b745-fd6c2ac0d8f7
TQID: https://experienceleague.adobe.com/DlhzBQXCTsTdFlEKmLqtPAypSWSL8uU5wOyf2beQ1Zc
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: eb30f47f-d87a-400f-8f78-63ce7979ff56
    internal-label: Machine learning
  - id: ebde5b41-29c9-4f5e-9ef6-1197e85409e3
    internal-label: Data management
---
# Create the Luma propensity model schemas and datasets

>[!NOTE]
>
>Data Science Workspace is no longer available for purchase.
>
>This documentation is intended for existing customers with prior entitlements to Data Science Workspace.

This tutorial provides you with the prerequisites and assets required for all other [!DNL Adobe Experience Platform] [!DNL Data Science Workspace] tutorials. Once complete, the following schemas and datasets will be available to you and your organization.

**Schemas:**

- Luma web data schema
- Propensity model scoring results schema

**Datasets:**

- Luma web dataset
- Propensity model training dataset
- Propensity model scoring dataset
- Propensity model scoring results dataset

## Download the assets {#assets}

The following tutorial uses a custom Luma purchase propensity model. Before proceeding, [download the required assets](../assets/DSW-course-sample-assets.7z) zip folder. This folder contains:

- The purchase propensity model notebook
- A notebook used to ingest data to a training and scoring dataset (a subset of the Luma web data)
- A demo JSON file containing the web data of 730,000 Luma users
- An optional Python 3 EDA (exploratory data analysis) Notebook which can be used to assist in understanding the web data and model.

>[!NOTE]
>
> You can use your own schema and data for any of the tutorials. However, the demo model provided in the assets does not work unless it's provided the proper configuration files and requirements file. This demo propensity model was designed to work with Luma web data.

### Create the Luma web data schema and ingest the data

In order to create a model, you must have a dataset in Experience Platform which is used to train and score your model. The following video tutorial from the [Data Science Workspace course](https://experienceleague.adobe.com/?recommended=ExperiencePlatform-U-1-2021.1.dsw) walks you through creating the Luma schema and ingesting the data used by the purchase propensity model.

>[!VIDEO](https://video.tv.adobe.com/v/333312)

### Create the training, scoring, and scoring results datasets

In order to run the recipe builder notebook or use the API to train and score a model, you need to specify the dataset(s) and schema(s) that are used for training/scoring. The following video tutorial walks you through setting up the training, scoring, and scoring results datasets, as well as, the scoring results schema used in the Luma purchase propensity model.

>[!VIDEO](https://video.tv.adobe.com/v/333426)

## Next steps

By following this tutorial, you have successfully created the required schemas and datasets for the Luma propensity model. You're now ready to continue to the next tutorial and create the model using the [recipe builder notebook](../jupyterlab/create-a-model.md) tutorial.

Additionally, you can explore the data using the provided Exploratory Data Analysis (EDA) notebook. This notebook can be used to help understand patterns in the Luma data, check data sanity, and summarizes the relevant data for the predictive propensity model. To learn more about Exploratory Data Analysis, visit the [EDA documenation](../jupyterlab/eda-notebook.md).
