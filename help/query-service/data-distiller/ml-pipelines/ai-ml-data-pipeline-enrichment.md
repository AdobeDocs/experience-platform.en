---
title: AI/ML Data Pipeline Enrichment
description: Learn how to create a training and scoring a propensity model to predict subscription conversions from Adobe Experience Platform data.  
---
# AI/ML data pipeline enrichment

Use Data Distiller to enrich your machine learning pipelines with high-value customer experience data that has been collected and curated in Adobe Experience Platform. 

From Python notebooks in their machine learning environments, data scientists can leverage Data Distiller capabilities to explore, curate, and access customer data from Adobe Experience Platform to enrich and enhance their AI/ML models.

This guide illustrates how to use your preferred machine learning tools to build custom models that support your marketing use cases in Adobe Experience Platform. The document provides instructions for getting started with certain [!DNL Python] notebooks that illustrate data pipeline enrichment.

## Prerequisites 

## Getting started

This tutorial requires a working understanding of the various aspects of Adobe Experience Platform. Before beginning this tutorial, please review the documentation for the following concepts:

- How to [Authenticate and access Experience Platform APIs](../../../landing/api-authentication.md)
- Sandboxes: [Attribute-based access control permissions](../../../access-control/abac/overview.md) and how to create and manage roles, as well as assign the desired resource permissions for these roles.
- Data Governance: How to [apply data usage labels to datasets and fields, categorizing each](../../../data-governance/labels/overview.md) according to related data governance policies and access control policies.

<!-- ABAC uses (notes):
label Experience Data Model (XDM) schema fields with labels that define organizational or data usage scopes.
use the user and role administration interface to define access policies surrounding XDM schema fields
manage access to specific segments -->

Data Distiller Story:

- Use Python Notebooks, SWL editors
- Treat AEP as Experience System of Record
    - Source of truth for 
- ML pipeline to stage data in 
- Prototype 

Overview TODO:

- Adapt Akin's diagram from DD enablement deck
- Pre-requisites
    - Query Service credential (recommend non-expiring for governance reasons)
    - Experience platform API credential
    - Get credential permissions from Sys Admin
- Best practices for credential management
    - Read it from a config file, don't put it in your code
    - If using git, add config file to .gitignore

Pages:

1. Connect to DD from a Jupyter notebooks (adapt exisiting page)
    1. Install psycopg2
    2. Install aepp
    3. Connect to Data Distiller
2. Exploratory data analysis
3. Feature engineering
4. Export training data to cloud storage
5. End-to-end propensity model example
    5.1 Overview of use case, end-to-end flow, recommended use
    5.2 Link to repository and summary of each notebook
    5.3 ML platform-specific versions of the end-to-end example 

This repository provides sample notebooks that demonstrate an end-to-end workflow for using customer data from the Adobe Experience Platform (AEP) with cloud-based machine learning tools. The notebooks serve as a template to help data science teams take advantage of their organization's AEP data and services within their modeling workflow to develop custom models to support their organization's marketing and experience activities.

README contents:

- [Intended use](#intended-use)
- [Overview of CMLE notebooks](#overview-of-cmle-notebooks)
    - [Generate synthetic data](#generate-synthetic-data)
    - [EDA and Featurization](#eda-and-featurization-with-query-service)
    - [Export training data](#export-training-data)
    - [Train a propensity model](#train-a-propensity-model)
    - [Score the propensity model](#score-the-propensity-model)
    - [Ingest scores to AEP](#ingest-scores-to-aep)
    - [Create and activate audiences from code](#create-and-activate-audiences-from-code)
- [Getting started with the CMLE notebooks](#getting-started-with-the-cmle-notebooks)
- [Troubleshooting](#troubleshooting)
- [Helpful resources](#helpful-resources)

## Intended use {#intended-use}

The sample notebooks in this repository provide a stylized **example of training and scoring a propensity model to predict subscription conversions from AEP data**. The first notebook will generate synthetic datasets in an AEP sandbox that will be used in subsequent notebooks to illustrate an end-to-end flow that includes:

- Exploring and featurizing data from AEP
- Making the prepared training data available in your machine learning environment (we use Databricks ML as an example, but you can modify the sample notebooks to use your own ML environment)
- Training and scoring the propensity model
- Enriching AEP profiles with the computed propensity scores, and using those scores to create and activate an audience

The sample notebooks are intended to be used in one of two ways:

1. As a tutorial for using AEP data in ML workflows
    - Ideally, use a dedicated AEP sandbox for completing the tutorial, to avoid mixing synthetic data with real customer data. You can reset or delete the sandbox after completing the tutorial to free it up for other use.
    - Clone or download this repository to create a copy in your ML environment.
    - Follow the instructions in [Getting started with the CMLE notebooks](#getting-started-with-the-cmle-notebooks) to get an AEP API credential with the required permissions and update the [config.ini](</conf/config.ini>) file with the required values.
    - Review and execute the cells in each notebook, in order to demonstrate and validate the workflow in your environment
    - Modify the code in the notebooks as needed to adapt to your environment
2. As a template for AEP-related ML projects for your organization
    - Fork the CMLE repository as a starting template for a new ML project
    - Alternatively, simply reference the code in these notebooks as helpful examples to start a new project from scratch

> [!WARNING]  
> The workflow illustrated in these notebooks involves exporting datasets from AEP to a cloud storage destination, where it can be read and processed using external machine learning tools. As such, there is some risk of sensitive personal data leaving the Experience Platform and being used inappropriately outside of the Platform.  
>   
> Experience Platform provides data governance tools for you to manage your data usage obligations and help minimize this risk. You are responsible ensuring that data in the Experience Platform is properly labeled before querying or exporting that data. This includes manually re-applying labels to derived datasets created from query output.  Derived datasets from queries do not support the processing of sensitive personal data. You are responsible for understanding the limitations and obligations of your data and how you use that data in Experience Platform and the destination platform, which may have its own rules and obligations for incoming and outgoing data.  Learn more about [data governance tools](https://experienceleague.adobe.com/docs/experience-platform/data-governance/home.html?lang=en) in Experience Platform.

## Overview of CMLE notebooks {#overview-of-cmle-notebooks}

![CMLE workflow and notebooks](<img/CMLE Notebooks.png>)

The end-to-end workflow can be divided into 3 broad phases based on the services used to implement the workflow. Initial exploration and preparation of AEP data relies on AEP services. Model training and scoring leverages tooling in the user's cloud-based ML environment (typically a ML platform such as Databricks ML, AWS Sagemaker, DataRobot, etc). Ingesting scores back into AEP and any code-based audience creation and activation based on those scores would again rely on AEP services. However, all of these phases can be executed in one or more notebooks from the user's ML environment without the user needing to switch contexts between AEP and their cloud-based ML tools.

We have divided the typical steps of this end-to-end flow into a set of modular notebooks which together demonstrate the steps involved in typical machine learning project involving AEP data. This makes it easier to use the notebooks as a reference for implementing specific activities, and to select and adapt code from the relevant notebooks to implement a real-world use case. In practice, a data scientist may prepare a single notebook the implements the end-to-end pipeline for their ML project. Alternatively, a data scientist may simply adapt the sample code for querying AEP data and making it available in their ML environment before continuing the project use UI-based features in their ML platform.

The sample notebooks included in this repository are briefly described below. Detailed documentation for each notebook is interspersed with the code in the notebooks themselves


### Generate synthetic data {#generate-synthetic-data}

<!-- Need access to the notebook: https://adobe-my.sharepoint.com/notebooks/SyntheticData.ipynb is restricted.  -->

This notebook provides code for generating datsets of synthetic profiles and experience events in your AEP that will be used to illustrate the CMLE workflow.

### EDA and Featurization with Query Service {#eda-and-featurization-with-query-service}

This notebook includes examples of exploratory analysis on AEP datasets using interactive queries via AEP Query Service. These are followed with examples of featurization queries to create a training dataset for the example propensity model.

### Export training data {#export-training-data}

This notebook illustrates exporting the training dataset to cloud storage that can be read by the user's ML tools.

### Train a propensity model {#train-a-propensity-model}

This notebook illustrates training a propensity model. It assumes Databricks ML as the user's ML environment, but is written generically (i.e. without heavy use of Databricks-specific features/APIs) so that it can be adapted to other platforms.

### Score the propensity model

This notebook illustrates scoring the trained propensity model to produce a dataset of propensity scores for each AEP customer profile.

### Ingest scores to AEP

This brief notebook illustrates ingesting the dataset of propensity scores to enrich the customer profiles in AEP.

### Create and activate audiences from code

This notebook illustrate how the user can create audiences from the scores and activate those audiences through AEP apps from their notebook code.

## Getting started with the CMLE notebooks

The CMLE notebooks make use of the [aepp](https://github.com/adobe/aepp/tree/main) package, which provides functions for making requests to [AEP APIs](https://developer.adobe.com/experience-platform-apis/). The following steps are required to set up access to AEP APIs through `aepp` (if you wish to code requests to AEP APIs yourself rather than use `aepp`, you will still need to complete these steps to get a credential with the necessary permissions and store it safely):

### Step 1: Create an API credential in the Adobe Developer Console

API credentials may be created by anyone with Developer access to AEP in your organization. If you are a data scientist without Developer access, ask your manager or Adobe Admin to create a credential for you in the [Adobe Developer Console](https://developer.adobe.com/console/home). Alternatively, they can grant you Developer access to create one yourself.

We recommend creating an Oauth2 API credential specifically for Cloud ML workflows with appropriate permissions and labels (as described below in "Grant permissions to credentials for Cloud ML).

See [Authenticate and access Experience Platform APIs](https://experienceleague.adobe.com/docs/experience-platform/landing/platform-apis/api-authentication.html) detailed instructions instructions on creating an API credential.

### Step 2: Get the necessary attribute-based access control permissions for your credential.

An API credential will not be able to access AEP APIs without explicit permissions granted by your organization's Adobe System Admin for specific AEP services and data. A System Admin can assign the API credential to a Role and manage permissions for Role in the [Permissions](https://experience.adobe.com/admin/permissions) UI in AEP. 

You will need to provide your system admin with the name and technical account email of your API credential. System admins can find more details about managing permissions for API credentials [here](https://experienceleague.adobe.com/docs/experience-platform/landing/platform-apis/api-authentication.html#get-abac-permissions) and [here](https://experienceleague.adobe.com/docs/experience-platform/access-control/abac/permissions-ui/permissions.html?lang=en#manage-api-credentials-for-role).

The minimum permissions required to execute these notebooks include:

- Sandbox(es) that will be used for data science (usually prod)
- Data modeling: Manage Schemas
- Data management: Manage Datasets
- Data ingestion: View Sources
- Destinations: Manage and Activate Dataset Destinations
- Query Service: Manage Queries

#### Label access

By default, a Role (and API credentials assigned to that role) is blocked from accessing any labeled data. Given the organization's data governance policies, a System Admin may grant the Role access to certain labeled data that is deemed appropriate for data science usage. 

We recommend that any API credential used for CMLE workflows **NOT** have access to data labeled `C9` (No Data Science), `PSPD` (Permitted Sensitive Personal Data), or `RHD` (PHI/Regulated Health Data). AEP customers are responsible to manage label access and policies appropriately in order to comply with relevant regulations and organizational policies.

### Step 3: Update the [config.ini](</conf/config.ini>) file with credential and environment information

Once you have an API credential with the required permissions, you'll need to add the credntial and environment values to the [config.ini](</conf/config.ini>) file.

The [config.ini](</conf/config.ini>) file should look like the following after copying the CMLE repository:

```ini
[Platform]
ims_org_id=
sandbox_name=
environment=prod

[Synthetic]
fieldgroup_id=
events_schema=
events_dataset=
profile_schema=
profile_dataset=

[Authentication]
client_id=
client_secret=
scopes=openid, AdobeID, read_organizations, additional_info.projectedProductContext, session
tech_acct_id=

[Cloud]
export_path=cmle/egress
import_path=cmle/ingress
data_format=parquet
compression_type=gzip
model_name=cmle_propensity_model
```

You will need to update the file with values for the following fields:

- `ims_org_id`: You can easily find the IMS Org ID by clicking `CTRL+i` anywhere in the AEP UI
- `sandbox_name`: Refer to [Sandboxes](https://experience.adobe.com/platform/sandbox/browse?limit=50&page=1&sortField=title) in the AEP UI to find the name (not the title) of the sandbox you will be using
- `client_id`: The Client ID for the API credential obtained in [Step 1](#step-1-create-an-api-credential-in-the-adobe-developer-console)
- `client_secret`: The Client Secret for the API credential obtained in [Step 1](#step-1-create-an-api-credential-in-the-adobe-developer-console)
- `tech_acct_id`: The Technical Account Email for the API credential obtained in [Step 1](#step-1-create-an-api-credential-in-the-adobe-developer-console)

If you are an Adobe employee using the CMLE notebooks in an internal stage IMS Org, change the value for `environment` from "prod" to "stage".

The `[Synthetic]` section stores ID references to the schema and dataset objects that are created in the `SyntheticData` notebook. These will be populated and referenced by the code in the notebooks, so you may leave them blank to start.

The `[Cloud]` section is pre-populated for the example use case illustrated in the notebooks and can be left as is, or modified as needed if you are adapting the notebooks for your own project.

If you are using git with your copy of the CMLE directory, be sure to add the config.ini file to `.gitignore` to avoid accidentally publishing your credential information to a remote repository.

### Step 4: Configure `aepp` to authenticate with AEP APIs

To use the `aepp` package in your code you will need to read the [config.ini](</conf/config.ini>) file using the standard `configparser` package and configure the connection to the AEP APIs. The following cell from the [Synthetic data generation](../notebooks/SyntheticData.ipynb) notebook provides an example:

```python
import os
from configparser import ConfigParser
import aepp

os.environ["ADOBE_HOME"] = os.path.dirname(os.getcwd())

if "ADOBE_HOME" not in os.environ:
    raise Exception("ADOBE_HOME environment variable needs to be set.")

config = ConfigParser()
config_file = "config.ini"
config_path = os.path.join(os.environ["ADOBE_HOME"], "conf", config_file)

if not os.path.exists(config_path):
    raise Exception(f"Looking for configuration under {config_path} but config not found, please verify path")

config.read(config_path)

aepp.configure(
  org_id=config.get("Platform", "ims_org_id"),
  tech_id=config.get("Authentication", "tech_acct_id"), 
  secret=config.get("Authentication", "client_secret"),
  scopes=config.get("Authentication", "scopes"),
  client_id=config.get("Authentication", "client_id"),
  environment=config.get("Platform", "environment"),
  sandbox=config.get("Platform", "sandbox_name")
)
```

If necessary, modify the `config_path` in your code with the actual location of your config.ini file.

You can test the connection to AEP APIs by executing the following lines:

```python
from aepp import schema
schema.Schema().getTenantId()
```

If successful, your organization's AEP tenant ID will be displayed in the cell output.

## Troubleshooting

If the connection test above is unsuccessful, you will likely get `KeyError: 'tenantId'`. This usually means that the API credential you are using to connect to AEP does not have the required permissions (the "Data modeling: Manage Schemas" permission in this case). Try the following to resolve the error:

- Confirm with your Adobe System Admin that your API credential has been added to a Role that has the permissions specified above.
- Check your `config.ini` file and make sure that your environment and credential information is correct.

If your configuration is correct and you are able to successfully make calls to `aepp` methods, you may sometimes get an unsuccessful response from the AEP server. This may happen if you try to create an object in AEP that already exists, or get an object that does not exist, or attempt to send a malformed payload with a request. Most `aepp` methods make a request to an AEP API endpoint and return the response from the server. Print the response and review it to get error message from the API. This will usually give you enough information to understand the problem with the request and fix it.

## Helpful resources

- [aepp](https://github.com/adobe/aepp/tree/main)
- [Authenticate and access Experience Platform APIs](https://experienceleague.adobe.com/docs/experience-platform/landing/platform-apis/api-authentication.html) 
- [Adobe Experience Platform APIs](https://developer.adobe.com/experience-platform-apis/)
- [Query Service Guide](https://experienceleague.adobe.com/docs/experience-platform/query/home.html?lang=en)