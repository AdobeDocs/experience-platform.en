---
keywords: Experience Platform;home;popular topics;dsw;DSW
solution: Experience Platform
title: Data Science Workspace tutorials
topic: tutorial
description: Adobe Experience Platform Data Science Workspace uses machine learning and artificial intelligence to create insights from your data. Integrated into Adobe Experience Platform, Data Science Workspace helps you make predictions using your content and data assets across Adobe solutions.
---

# [!DNL Data Science Workspace] tutorials

Adobe Experience Platform [!DNL Data Science Workspace] uses machine learning and artificial intelligence to create insights from your data. Integrated into Adobe Experience Platform, [!DNL Data Science Workspace] helps you make predictions using your content and data assets across Adobe solutions. Data scientists of all skill levels have sophisticated, easy-to-use tools that support rapid development, training, and tuning of machine learning recipes - all the benefits of AI technology, without the complexity. 

To learn more, begin by reading the [Data Science Workspace overview](../data-science-workspace/home.md).

## [!DNL Sensei Machine Learning] API

The [!DNL Sensei Machine Learning] API provides a mechanism for data scientists to organize and manage machine learning services, from algorithm onboarding through experimentation and to service deployment. 

**The following API developer guides are available:**
- [Engines](../data-science-workspace/api/engines.md) - Learn how to look up your [!DNL Docker] registry, create an Engine, create a feature pipeline Engine, retrieve the information for an Engine, update an Engine, and delete an Engine.
- [MLInstances (recipes)](../data-science-workspace/api/mlinstances.md) - Learn how to create an MLInstance, retrieve the information for an MLInstance, update an MLInstance, and delete an MLInstance.
- [Experiments](../data-science-workspace/api/experiments.md) - Learn how to create an Experiment, retrieve an Experiment or Experiment runs information, update an Experiment, and delete an Experiment.
- [Models](../data-science-workspace/api/models.md) - Learn how to register your own Model, retrieve the information for a Model, update a Model, delete a Model, create a new transcoding for a Model, and retrieve a transcoded Model's details.
- [MLServices](../data-science-workspace/api/mlservices.md) - Learn how to create an MLService, retrieve the information for an MLService, update an MLService, and delete an MLService.
- [Insights](../data-science-workspace/api/insights.md) - Learn how to retrieve the information for an Insight, add a new Model Insight, and retrieve a list of default metrics for algorithms.

To learn more and get the required values for performing CRUD operations with the Sensei Machine Learning API, visit the [getting started guide](../data-science-workspace/api/getting-started.md).

## How to use [!DNL JupyterLab] Notebooks

[!DNL JupyterLab] is a web-based user interface for [!DNL Project Jupyter] and is tightly integrated into Adobe Experience Platform. It provides an interactive development environment for data scientists to work with [!DNL Jupyter notebooks], code, and data. This document provides an overview of [!DNL JupyterLab] and its features as well as instructions to perform common actions.

**This guide will help you:**
- Access and understand the [!DNL JupyterLab] interface.
- Understand code cells and the available kernels within [!DNL JupyterLab].
- Understand GPU and memory server configuration in [!DNL Python]/R.

 To learn more, visit the [JupyterLab user guide](../data-science-workspace/jupyterlab/overview.md).

## Data Access in JupyterLab Notebooks

Currently JupyterLab in Adobe Experience Platform Data Science Workspace supports notebooks for [!DNL Python], R, PySpark, and Scala. Each supported kernel provides built-in functionalities that allow you to read Platform data from a dataset within a notebook. However, support for paginating data is limited to [!DNL Python] and R notebooks. This guide focuses on how to use JupyterLab notebooks to access your data.

**This guide will help you:**
- Read, Write, and query Platform data using Python, R, PySpark, or Scala Notebooks.
- Understand the read limitations of each notebook type.

to learn more, visit the [JupyterLab Notebook data access developer guide](../data-science-workspace/jupyterlab/access-notebook-data.md)

## Package source files for [!DNL Docker] recipe authoring

A [!DNL Docker] image allows you to package up an application with all the parts it needs. This includes libraries and other dependencies all in one package. The built [!DNL Docker] image is pushed to the [!DNL Azure Container Registry] using credentials supplied to you during the recipe creation workflow. 

**This tutorial will help you:**
- Download the required prerequisites for recipe creation.
- Understand [!DNL Docker] based model authoring.
- Build a [!DNL Docker] image for [!DNL Python], R, PySpark, or Scala ([!DNL Spark]).
- Obtain a [!DNL Docker] source file URL.

To learn more, follow the [package source files into a recipe tutorial](../data-science-workspace/models-recipes/package-source-files-recipe.md).

## Import a recipe

>[!NOTE]
>
>This tutorial requires you to have a [!DNL Docker] source file URL. Visit the [package source files into a recipe tutorial](../data-science-workspace/models-recipes/package-source-files-recipe.md) if you do not have a [!DNL Docker] source file URL.

The import recipe tutorials provide insights on how to configure and import a packaged recipe. By the end of this tutorial, you can create, train, and evaluate a Model in Adobe Experience Platform [!DNL Data Science Workspace].

**This tutorial will help you:**
- Create a set of configurations for a recipe.
- Import a [!DNL Docker] based recipe for [!DNL Python], R, PySpark, or Scala ([!DNL Spark]).

To learn more, follow the import a packaged recipe [UI tutorial](../data-science-workspace/models-recipes/import-packaged-recipe-ui.md) or the [API tutorial](../data-science-workspace/models-recipes/import-packaged-recipe-api.md).

## Train and evaluate a model

In Adobe Experience Platform [!DNL Data Science Workspace], a machine learning Model is created by incorporating an existing Recipe that is appropriate for the Model's intent. The Model is then trained and evaluated to optimize its operating efficiency and efficacy by fine-tuning its associated Hyperparameters. Recipes are reusable, meaning that multiple Models can be created and tailored to specific purposes with a single Recipe.

**This tutorial will help you:**
- Create a new Model.
- Create a training run for your Model.
- Evaluate your Model training runs.

To get started, follow the training and evaluating a model [API tutorial](../data-science-workspace/models-recipes/train-evaluate-model-api.md) or the [UI tutorial](../data-science-workspace/models-recipes/train-evaluate-model-ui.md).

## Optimize a Model using the Model Insights framework

The Model Insights Framework provides the data scientist with tools in Adobe Experience Platform [!DNL Data Science Workspace] to make quick and informed choices for optimal machine learning models based on experiments. The framework will improve the speed and effectiveness of the machine learning workflow as well as improving ease of use for data scientists. This is done by providing a default template for each machine learning algorithm type to assist with model tuning. The end result allows data scientists and citizen data scientists to make better model optimization decisions for their end customers.

**This tutorial will help you:**
- Configure recipe code.
- Define custom metrics.
- Use pre-built evaluation metrics and visualization charts.

To get started, follow the tutorial on [optimizing a model](../data-science-workspace/models-recipes/optimize-model.md).

## Score a model

Scoring in Adobe Experience Platform [!DNL Data Science Workspace] can be achieved by feeding input data into an existing trained Model. Scoring results are then stored and viewable in a specified output dataset as a new batch.

**This tutorial will help you:**
- Create a new scoring run.
- View your scoring results.

To get started, follow the score a model [API tutorial](../data-science-workspace/models-recipes/score-model-api.md) or the [UI tutorial](../data-science-workspace/models-recipes/score-model-ui.md).

## Publish a model as a service

Adobe Experience Platform [!DNL Data Science Workspace] allows you to publish your Model as a service, enabling users within your IMS Organization to score data without the need for creating their own Models. This can be done using the [!DNL Platform] user interface or the [!DNL Sensei Machine Learning] API.

**This tutorial will help you:**
- Publish a Model as a service.
- Score data using a service via the [!DNL Platform] [!UICONTROL Service Gallery].

To get started, follow the publish a model as a service [API tutorial](../data-science-workspace/models-recipes/publish-model-service-api.md) or the [UI tutorial](../data-science-workspace/models-recipes/publish-model-service-ui.md).

## Schedule training and scoring for a Model

Adobe Experience Platform [!DNL Data Science Workspace] allows you to set up scheduled scoring and training runs on a machine learning service. Automating the training and scoring process can help maintain and improve a service's efficiency through time by keeping up with patterns within your data. 

**This tutorial will help you:**
- Configure scheduled scoring
- Configure scheduled training

To get started, follow the [schedule a model UI tutorial](../data-science-workspace/models-recipes/schedule-models-ui.md).

## Create a feature pipeline

>[!NOTE]
>
>Currently, feature pipelines are only available via API.

Adobe Experience Platform allows you to build and create custom feature pipelines to perform feature engineering at scale through the [!DNL Sensei Machine Learning Framework Runtime].

**This guide will help you:**
- Implement feature pipeline classes.
- Create a feature pipeline Engine using the API.

To learn more, visit the tutorial for [creating a feature pipeline](../data-science-workspace/authoring/feature-pipeline.md).

## Build a [!DNL Real-Time Machine Learning] application (alpha)

A combination of seamless computation on both the Hub and the [!DNL Edge] dramatically reduces the latency that is traditionally involved in powering hyper-personalized experiences that are both relevant and responsive. Hence, [!DNL Real-time Machine Learning] provides inferences with incredibly low latency for synchronous decision-making. Examples include rendering personalized web page content, surfacing of an offer, and discounts to reduce churn while increasing conversions on a web store.

**This guide will help you:**
- Understand the [!DNL Real-time Machine Learning] architecture.
- Understand the [!DNL Real-time Machine Learning] workflow.
- Understand the current functionality for [!DNL Real-time Machine Learning].
- Provide the next steps for creating your own [!DNL Real-time Machine Learning model].

To learn more, visit the [Real-time Machine Learning overview](../data-science-workspace/real-time-machine-learning/home.md).