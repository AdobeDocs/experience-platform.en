---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Data Science Workspace tutorials
topic: tutorial
---

# Data Science Workspace tutorials

Adobe Experience Platform Data Science Workspace uses machine learning and artificial intelligence to create insights from your data. Integrated into Adobe Experience Platform, Data Science Workspace helps you make predictions using your content and data assets across Adobe solutions. Data scientists of all skill levels have sophisticated, easy-to-use tools that support rapid development, training, and tuning of machine learning recipes - all the benefits of AI technology, without the complexity. To learn more, begin by reading the [Data Science Workspace overview](../data-science-workspace/home.md).

## Sensei Machine Learning API

The Sensei Machine Learning API provides a mechanism for data scientists to organize and manage machine learning services, from algorithm onboarding through experimentation and to service deployment. To learn more, visit the [getting started guide](../data-science-workspace/api/getting-started.md).

## How to use JupyterLab Notebooks

JupyterLab is a web-based user interface for Project Jupyter and is tightly integrated into Adobe Experience Platform. It provides an interactive development environment for data scientists to work with Jupyter notebooks, code, and data.
This document provides an overview of JupyterLab and its features as well as instructions to perform common actions. To learn more, visit the [JupyterLab user guide](../data-science-workspace/jupyterlab/overview.md).

## Package source files for Docker recipe authoring

A Docker image allows you to package up an application with all the parts it needs. This includes libraries and other dependencies all in one package. The built Docker image is pushed to the Azure Container Registry using credentials supplied to you during the recipe creation workflow. To learn more, follow the [package source files into a recipe tutorial](../data-science-workspace/models-recipes/package-source-files-recipe.md).

## Import a recipe

The import recipe tutorials provide insights on how to configure and import a packaged recipe. By the end of this tutorial, you can create, train, and evaluate a Model in Adobe Experience Platform Data Science Workspace. To learn more, follow the [import a packaged recipe (UI)](../data-science-workspace/models-recipes/import-packaged-recipe-ui.md) or the [import a packaged recipe (API)](../data-science-workspace/models-recipes/import-packaged-recipe-api.md) tutorial.

## Train and evaluate a model

In Adobe Experience Platform Data Science Workspace, a machine learning Model is created by incorporating an existing Recipe that is appropriate for the Model's intent. The Model is then trained and evaluated to optimize its operating efficiency and efficacy by fine-tuning its associated Hyperparameters. Recipes are reusable, meaning that multiple Models can be created and tailored to specific purposes with a single Recipe. This tutorial walks through the steps to create, train, and evaluate a Model. To learn more, follow the [train and evaluate a model using the UI](../data-science-workspace/models-recipes/train-evaluate-model-ui.md) or the [train and evaluate a model using the API](../data-science-workspace/models-recipes/train-evaluate-model-api.md) tutorial.

## Score a model

Scoring in Adobe Experience Platform Data Science Workspace can be achieved by feeding input data into an existing trained Model. Scoring results are then stored and viewable in a specified output dataset as a new batch. To learn more, follow the [score a model using the UI](../data-science-workspace/models-recipes/score-model-ui.md) or the [score a model using the API](../data-science-workspace/models-recipes/score-model-api.md) tutorial.

## Enrich profiles and segments with machine learning insights

Data Science Workspace provides the tools and resources to create, evaluate, and utilize machine learning models to generate data predictions and insights. When machine learning insights are ingested into a Real-time Customer Profile-enabled dataset, that same data is also ingested as profile records which can then be segmented into subsets of related elements by using Adobe Experience Platform Segmentation Service. To learn more, follow the [enrich Profile with machine learning insights tutorial](../data-science-workspace/models-recipes/enrich-profile.md).

## Publish a model as a service

Data Science Workspace allows you to publish your trained and evaluated Model as a Service, enabling users within your IMS Organization to score data without the need for creating their own Models. This can be done using the Platform user interface or the Sensei Machine Learning API. To get started, follow the publish a model as a service [API tutorial](../data-science-workspace/models-recipes/publish-model-service-api.md) or the [UI tutorial](../data-science-workspace/models-recipes/publish-model-service-ui.md).

## Schedule training and scoring for a Model

Data Science Workspace allows you to set up scheduled scoring and training runs on a machine learning Service. Automating the training and scoring process can help maintain and improve a Service's efficiency through time by keeping up with patterns within your data. To learn more, visit the tutorial for [scheduling a model using the UI](../data-science-workspace/models-recipes/schedule-models-ui.md).

## Create a feature pipeline

Adobe Experience Platform allows you to build and create custom feature pipelines to perform feature engineering at scale through the Sensei Machine Learning Framework Runtime. To learn more, visit the tutorial for [creating a feature pipeline](../data-science-workspace/authoring/feature-pipeline.md).

## Build a Real-Time Machine Learning application (alpha)

A combination of seamless computation on both the Hub and the Edge dramatically reduces the latency that is traditionally involved in powering hyper-personalized experiences that are both relevant and responsive. Hence, Real-time Machine Learning provides inferences with incredibly low latency for synchronous decision-making. Examples include rendering personalized web page content, surfacing of an offer, and discounts to reduce churn while increasing conversions on a web store. To learn more, visit the [Real-time Machine Learning overview](../data-science-workspace/real-time-machine-learning/home.md).