---
keywords: Experience Platform;developer guide;Data Science Workspace;popular topics;Real time machine learning;
solution: Experience Platform
title: Getting Started with Real-time Machine Learning
description: The following document outlines the steps that are required to create a Real-time Machine Learning model in Adobe Experience Platform.
exl-id: 90a1c580-f6e7-4517-aa1e-da5092fbc4a2
---
# Getting started with Real-time Machine Learning (Alpha)

>[!IMPORTANT]
>
>Real-time Machine Learning is not available to all users yet. This feature is in alpha and still being tested. This document is subject to change.

In order to utilize Real-time Machine Learning, you need to have access to an organization provisioned with Adobe Experience Platform and [!DNL Data Science Workspace]. Additionally, you need to have a complete dataset for use in training and scoring.

The guides for Real-time Machine Learning require a working understanding of Python 3, [Jupyter Notebooks](../jupyterlab/overview.md), data science, and machine learning.

**Key Terms:**

- **DSL:** Domain Specific Language.
- **Edge:** Real-time Machine Learning scoring service can be run on Edge clusters closer to your activations and applications.
- **Hub:** The current alpha is running the Real-time Machine Learning scoring service on the Adobe Experience Platform Hub while the Edge Network is in development.
- **Node:** A Node is the fundamental unit of which graphs are formed. Each node performs a specific task and they can be chained together using links to form a graph that represents an ML pipeline. The task performed by a node represents an operation on input data such as a transformation of data or schema, or a machine learning inference. The node outputs the transformed or inferred value to the next node(s).
  
## Datasets in Adobe Experience Platform

To start using Real-time Machine Learning, you must have access to a dataset. You have the option to use an external dataset and upload it to your [!DNL JupyterLab] environment or create a new dataset within Platform if you have not done so already.

>[!NOTE]
>
>If you already have a dataset you wish to use, you can skip to [Next steps](#next-steps).

### Use an external dataset

To learn more about using an external dataset such as uploading data to your [!DNL JupyterLab] environment, visit the tutorial on [analyzing your data using notebooks](../jupyterlab/analyze-your-data.md#external-data).

### Create a new dataset

To create a new dataset for use in Real-time Machine Learning, you need a data-schema for your dataset. Next, you need to ingest data using the schema you created. Use the following tutorials to create and populate a dataset for [!DNL Platform]:

- [Create and populate a dataset in the API](../../catalog/datasets/create.md)
- [Create and populate a dataset in the UI](../../ingestion/tutorials/ingest-batch-data.md)

## Next steps {#next-steps}

Once you have prepared your data for Real-time Machine Learning, start by following the [Real-time Machine Learning notebook user guide](./rtml-authoring-notebook.md) to learn how to create and upload an ONNX model to the Real-time Machine Learning model store.
