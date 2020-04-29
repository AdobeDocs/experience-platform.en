---
keywords: Experience Platform;developer guide;Data Science Workspace;popular topics;Real time machine learning;
solution: Experience Platform
title: Getting started with real time machine learning
topic: Getting started
---

# Getting started with real time machine learning

In order to utilize real time machine learning, you need to have access to an organization provisioned with Adobe Experience Platform and Data Science Workspace. Additionally, you need to have a dataset on Platform. 

## Datasets in Adobe Experience Platform

Datasets are used in real time machine learning. You have the option to use an external dataset and upload it to your JupyterLab environment or create a new dataset within Platform if you have not done so already.

To learn more about using an external dataset by uploading data to your JupyterLab environment visit the [analyze your data using notebooks](../jupyterlab/analyze-your-data.md#external-data) tutorial.

To create a new dataset for use in real time machine learning, you need a data-schema for your dataset. Follow the create a schema using the schema editor [UI](../../xdm/tutorials/create-schema-ui.md) or [API](../../xdm/tutorials/create-schema-api.md) tutorial. Next you need to ingest data using the schema you created. Follow the ingest data into AEP [UI](../../ingestion/batch-ingestion/ui.md) or [API](../../ingestion/batch-ingestion/api-overview.md) tutorial to finish creating your dataset in Platform.

