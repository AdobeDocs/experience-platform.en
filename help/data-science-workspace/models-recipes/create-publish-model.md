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

If you wish to import and package a recipe for use in Data Science Workspace, you must package your source files into an archive file. Follow the [Package source files into a recipe]() tutorial. This tutorial shows you how to package source files into a recipe which is the prerequisite step for importing a recipe into Data Science Workspace. Once the tutorial is complete, you are provided a Docker image in a Azure Container Registry along with the corresponding image URL. In other words, an archive file.

This archive file can be used to create a recipe in Data Science Workspace by following the recipe import workflow using the [UI](./import-packaged-recipe-ui.md) or the [API](./import-packaged-recipe-api.md).

## Train and evaluate a model {#train-and-evaluate-your-model}

Now that your data is prepared and a recipe is ready, you have the option to create, train, and evaluate your machine learning model further. While using the recipe builder you should have already trained, scored, and evaluated your model before packaging it into a recipe. 

The Data Science Workspace UI and API allow you to publish your recipe as a model. Additionally, you can further fine-tune specific aspects of your model such as adding, removing, and changing Hyperparameters.

### Create a Model

A Model is an instance of a Recipe, enabling you to train and score with data at scale.

In Experience Platform, navigate to **[!UICONTROL Models]** from the left navigation column, then select **[!UICONTROL Recipes]** in the top navigation. tThis displays a list of available recipes for your organization.Select the product recommendation recipe.

![](../images/models-recipes/model-walkthrough/recipe-tab.png)

From the recipe page, select **[!UICONTROL Create Model]**.

![create model](../images/models-recipes/model-walkthrough/create-model-recipe.png)

The create model workflow begins by selecting a recipe. Select the **[!UICONTROL Recommendations Recipe]** , then select **[!UICONTROL Next]** in the top-right corner.

![](../images/models-recipes/model-walkthrough/create-model.png)

Next, provide a model name. Available configurations for the model are listed containing settings for the model's default training and scoring behaviors. Review the configurations and select **[!UICONTROL Finish]**.

![](../images/models-recipes/model-walkthrough/configure-model.png)

You are redirected your models overview page with a newly generated training run. A training run is generated by default when a Model is created.

![](../images/models-recipes/model-walkthrough/model-overview.png)

You can choose to wait for the training run to finish, or continue to create a new training run in the following section.

### Train the Model using custom Hyperparameters

On the **Model Overview** page, select **[!UICONTROL Train]** near the top right to create a new training run. Select the same input dataset you used when creating the model and select **[!UICONTROL Next]**.

![](../images/models-recipes/model-walkthrough/select-train.png)

The **[!UICONTROL Configuration]** page appears. Here you can configure the training runs `num_recommendations` value, also known as a hyperparameter. A trained and optimized model will utilize the best-performing hyperparameters based on the results of the training run.

Hyperparameters cannot be learned, therefore they must be assigned before training runs occur. Adjusting hyperparameters may change the accuracy of the trained model. Since optimizing a model is an iterative process, multiple training runs may be required before a satisfactory evaluation is achieved.

>[!TIP]
>
>Set `num_recommendations` to 10. 

![](../images/models-recipes/model-walkthrough/training-configuration.png)

Additional data points appear on the model evaluation chart. It can take up to several minutes for this to appear once a run is complete.

![](../images/models-recipes/model-walkthrough/training-graphs.png)

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
