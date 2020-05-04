---
keywords: Experience Platform;developer guide;Data Science Workspace;popular topics;Real time machine learning;
solution: Experience Platform
title: Getting started with real time machine learning
topic: Getting started
---

# Getting started with Real-time Machine Learning

>[!IMPORTANT]
>Real-time Machine Learning is not available to all users yet. This feature is in alpha and still being tested. This document is subject to change.

In order to utilize Real-time Machine Learning, you need to have access to an organization provisioned with Adobe Experience Platform and Data Science Workspace. Additionally, you need to have a dataset in Platform. 

The guides for Real-time Machine Learning require a working understanding Python 3, [Jupyter notebooks](../jupyterlab/overview.md), data science, and machine learning.

## Datasets in Adobe Experience Platform

Datasets are used in Real-time Machine Learning. You have the option to use an external dataset and upload it to your JupyterLab environment or create a new dataset within Platform if you have not done so already.

To learn more about using an external dataset such as uploading data to your JupyterLab environment, visit the [analyze your data using notebooks](../jupyterlab/analyze-your-data.md#external-data) tutorial.

>[!NOTE]
>If you already have a dataset you wish to use, you can skip this step.

To create a new dataset for use in Real-time Machine Learning, you need a data-schema for your dataset. Follow the create a schema using the schema editor [UI](../../xdm/tutorials/create-schema-ui.md) or [API](../../xdm/tutorials/create-schema-api.md) tutorial.

Next, you need to ingest data using the schema you created. Follow the ingest data into AEP [UI](../../ingestion/batch-ingestion/ui.md) or [API](../../ingestion/batch-ingestion/api-overview.md) tutorial to finish creating your dataset in Platform.

## Git and Docker

If you plan on training a model using the Data Science Workplace recipe workflow, Git and Docker are required. 

>[!NOTE]
>You do not need to download Git and Docker if you plan on training a model using a Python notebook or if you are using your own ONNX model.

- [Git installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Docker installation guide](https://docs.docker.com/get-docker/)

## Next steps

Once you have prepared your data for Real-time Machine Learning, start by following the [training a model](./training-ml-model.md) tutorial. This document provides a tutorial for creating and uploading an ONNX model to the Real-time Machine Learning model store. 

