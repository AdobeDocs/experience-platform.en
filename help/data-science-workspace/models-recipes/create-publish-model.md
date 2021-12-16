---
keywords: Experience Platform;machine learning model;Data Science Workspace;popular topics;create and publish a model
solution: Experience Platform
title: Create and Publish a Machine Learning Model
topic-legacy: tutorial
type: Tutorial
description: The following guide describes the steps required to create and publish a machine learning model.
exl-id: f71e5a17-9952-411e-8e6a-aab46bc4c006
---

# Create and publish a machine learning model

The following guide describes the steps required to create and publish a machine learning model. Each section contains a description of what you will do and a link to the UI and API documentation to preform the described step.

## Getting started

Before starting this tutorial, you must have the following prerequisites:

-   Access to [!DNL Adobe Experience Platform]. If you do not have access to an IMS Organization in [!DNL Experience Platform], please speak to your system administrator before proceeding.

-  All Data Science Workspace tutorials use the Luma propensity model. In order to follow along, you must have created the [Luma propenstiy model schemas and datasets](./create-luma-data.md).

### Explore the data and understand the schemas

Log in to [Adobe Experience Platform](https://platform.adobe.com/) and select **[!UICONTROL Datasets]** to list all existing datasets and select the dataset that you would like to explore. In this case, the **Luma web data** dataset.

<!-- need new image for the dataset -->

The dataset activity page opens, listing information relating to your dataset. You can select **[!UICONTROL Preview Dataset]** near the top-right to examine sample records. You can also view the schema for the selected dataset. Select the schema link in the right-rail. A popover appears, selecting the link under **[!UICONTROL schema name]** opens the schema in a new tab.

<!-- dataset preview image -->

You can further explore the data using the provided Exploratory Data Analysis (EDA) notebook. This notebook can be used to help understand patterns in the Luma data, check data sanity, and summarizes the relevant data for the predictive propensity model. To learn more about Exploratory Data Analysis, visit the [EDA documenation](../jupyterlab/eda-notebook.md).

## Create the Luma propensity recipe {#author-your-model}

A main component of the [!DNL Data Science Workspace] lifecycle involves authoring Recipes and Models. The Luma Propensity model is designed to generate a prediction on whether customers have a high propensity to purchase a product from Luma.

To create the Luma propensity model, the recipe builder template is used. Recipes are the basis for a Model as they contain machine learning algorithms and logic designed to solve specific problems. More importantly, Recipes empower you to democratize machine learning across your organization, enabling other users to access a Model for disparate use cases without writing any code.

Follow the [create a model using JupyterLab Notebooks](../jupyterlab/create-a-model.md) tutorial to create the Luma propensity model recipe which is used in subsequent tutorials.

## Import and package a recipe from external sources (*optional*)

If you wish to import and package a recipe for use in Data Science Workspace, you must package your source files into an archive file. Follow the [Package source files into a recipe](./package-source-files-recipe.md) tutorial. This tutorial shows you how to package source files into a recipe which is the prerequisite step for importing a recipe into Data Science Workspace. Once the tutorial is complete, you are provided a Docker image in a Azure Container Registry along with the corresponding image URL. In other words, an archive file.

This archive file can be used to create a recipe in Data Science Workspace by following the recipe import workflow using the [UI](./import-packaged-recipe-ui.md) or the [API](./import-packaged-recipe-api.md).

## Train and evaluate a model {#train-and-evaluate-your-model}

Now that your data is prepared and a recipe is ready, you have the ability to create, train, and evaluate your machine learning model further. While using the recipe builder, you should have already trained, scored, and evaluated your model before packaging it into a recipe. 

The Data Science Workspace UI and API allow you to publish your recipe as a model. Additionally, you can further fine-tune specific aspects of your model such as adding, removing, and changing Hyperparameters.

### Create a Model

To learn more about creating a model using the UI, visit the [Train and evaluate a model in the Data Science Workspace UI](./train-evaluate-model-ui.md) tutorial. This tutorial provides an example on how to create, train, and update hyperparameters to fine tune your model.

>[!NOTE]
>
> Hyperparameters cannot be learned, therefore they must be assigned before training runs occur. Adjusting hyperparameters may change the accuracy of your trained model. Since optimizing a model is an iterative process, multiple training runs may be required before a satisfactory evaluation is achieved.

### Evaluate the Model 

Each time a training run completes, you can view the resulting evaluation metrics to determine how well the Model performed.

To review the evaluation metrics (Precision and Recall) for each completed training run, select the training run.

![](../images/models-recipes/model-walkthrough/select-training-run.png)

You can explore the information provided for each evaluation metric. The higher these metrics, the better the model performed.

![](../images/models-recipes/model-walkthrough/metrics.png)

You can see the dataset, schema, and configuration parameters used for each training run on the right rail. Navigate back to the Model page and identify the top performing training run by observing their evaluation metrics.

## Operationalize your Model {#operationalize-your-model}

The final step in the Data Science workflow is to operationalize your model in order to score and consume insights from your data store.

### Score and generate insights

On the product recommendations model overview page, select the name of the best-performing training run, with the highest recall and precision values.

![score the best run](../images/models-recipes/model-walkthrough/select-training-run.png)

Then, on the top-right of the training run details page, select **[!UICONTROL Score]**.

![select score](../images/models-recipes/model-walkthrough/select-score.png)

Next, select the **[!UICONTROL Recommendations Input Dataset]** as the scoring input dataset, which is the same dataset you used when you created the Model and executed its training runs. Then, select **[!UICONTROL Next]**.

![](../images/models-recipes/model-walkthrough/score-input.png)

Once you have your input dataset, select the **[!UICONTROL Recommendations Output Dataset]** as the scoring output dataset. Scoring results are stored in this dataset as a batch.

![](../images/models-recipes/model-walkthrough/score-output.png)

Finally, review the scoring configurations. These parameters contain the input and output datasets you selected earlier along with the appropriate schemas. Select **[!UICONTROL Finish]** to begin the scoring run. The run may take several minutes to complete.

![](../images/models-recipes/model-walkthrough/score-finish.png)

### View scored insights

Once the scoring run has successfully completed, you are able to preview the results and view the insights generated.

On the scoring runs page, select the completed scoring run, then select **[!UICONTROL Preview Scoring Results Dataset]** on the right rail.

![](../images/models-recipes/model-walkthrough/preview-scores.png)

In the preview table, each row contains product recommendations for a particular customer, labeled as [!UICONTROL recommendations] and [!UICONTROL userId] respectively. Since the [!UICONTROL num_recommendations] hyperparameter was set to 10 in the sample screenshots, each row of recommendations can contain up to 10 product identities delimited by a number sign (#).

![](../images/models-recipes/model-walkthrough/preview_score_results.png)

## Next steps {#next-steps}

This tutorial introduced you to the workflow of [!DNL Data Science Workspace], demonstrating how raw unprocessed data can be turned into useful information through machine learning. To learn more about using the [!DNL Data Science Workspace], continue to the next guide on [creating the retail sales schema and dataset](./create-retails-sales-dataset.md).
