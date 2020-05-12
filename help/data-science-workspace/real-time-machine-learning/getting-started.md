---
keywords: Experience Platform;developer guide;Data Science Workspace;popular topics;Real time machine learning;
solution: Experience Platform
title: Getting started with real time machine learning
topic: Getting started
---

# Getting started with Real-time Machine Learning

>[!IMPORTANT]
>Real-time Machine Learning is not available to all users yet. This feature is in alpha and still being tested. This document is subject to change.

In order to utilize Real-time Machine Learning, you need to have access to an organization provisioned with Adobe Experience Platform and Data Science Workspace. Additionally, you need to have a dataset in Adobe Experience Platform. 

The guides for Real-time Machine Learning require a working understanding of Python 3, [Jupyter notebooks](../jupyterlab/overview.md), data science, and machine learning.

Key Terms:

- **DSL:** Domain Specific Language
- **Node:** 
- **Edge:** Real-time Machine Learning scoring service can be run on edge clusters closer to your activations and applications.
- **Hub:** The current alpha is running the Real-time Machine Learning scoring service on the Adobe Experience Platform Hub while the Experience Edge Network is in development.

## Datasets in Adobe Experience Platform

To start using Real-time Machine Learning, you must have a populated dataset within Experience Platform. You have the option to use an external dataset and upload it to your JupyterLab environment or create a new dataset within Platform if you have not done so already.

>[!NOTE]
>If you already have a dataset you wish to use, you can skip the following two steps.

### Use an external dataset

To learn more about using an external dataset such as uploading data to your JupyterLab environment, visit the tutorial on [analyzing your data using notebooks](../jupyterlab/analyze-your-data.md#external-data).

### Create a new dataset

To create a new dataset for use in Real-time Machine Learning, you need a data-schema for your dataset. Next, you need to ingest data using the schema you created. Use the following tutorials to create and populate a dataset for Platform:

- [Create and populate a dataset in the API](../../catalog/datasets/create.md)
- [Create and populate a dataset in the UI](../../ingestion/tutorials/ingest-batch-data.md)

## Git and Docker

If you plan on training a model using the Data Science Workplace recipe workflow, Git and Docker are required. 

>[!NOTE]
>You do not need to download Git and Docker if you plan on training a model using a Python notebook or if you are using your own ONNX model.

- [Git installation guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Docker installation guide](https://docs.docker.com/get-docker/)

## Next steps

Once you have prepared your data for Real-time Machine Learning, start by following the tutorial on [training a model](./training-ml-model.md) to learn how to create and upload an ONNX model to the Real-time Machine Learning model store.

