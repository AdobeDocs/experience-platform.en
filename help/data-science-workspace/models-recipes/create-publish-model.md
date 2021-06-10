---
keywords: Experience Platform;machine learning model;Data Science Workspace;popular topics;create and publish a model
solution: Experience Platform
title: Create and Publish a Machine Learning Model
topic-legacy: tutorial
type: Tutorial
description: Adobe Experience Platform Data Science Workspace provides the means to achieve your goal using the prebuilt Product Recommendations Recipe. Follow this tutorial to see how you can access and understand your retail data, create and optimize a machine learning Model, and generate insights in Data Science Workspace.
exl-id: f71e5a17-9952-411e-8e6a-aab46bc4c006
---
# Create and publish a machine learning model

![](../images/models-recipes/model-walkthrough/objective.png)

Pretend you own an online retail website. When your customers shop at your retail website, you want to present them with personalized product recommendations to expose a variety of other products your business offers. Over the span of your website's existence, you have continuously gathered customer data and want to somehow use this data towards generating personalized product recommendations. 

[!DNL Adobe Experience Platform] [!DNL Data Science Workspace] provides the means to achieve your goal using the prebuilt [Product Recommendations Recipe](../pre-built-recipes/product-recommendations.md). Follow this tutorial to see how you can access and understand your retail data, create and optimize a machine learning Model, and generate insights in [!DNL Data Science Workspace].

This tutorial reflects the workflow of [!DNL Data Science Workspace], and covers the following steps for creating a machine learning Model:

1.  [Prepare your data](#prepare-your-data)
2.  [Author your Model](#author-your-model)
3.  [Train and evaluate your Model](#train-and-evaluate-your-model)
4.  [Operationalize your Model](#operationalize-your-model)

## Getting started

Before starting this tutorial, you must have the following prerequisites:

-   Access to [!DNL Adobe Experience Platform]. If you do not have access to an IMS Organization in [!DNL Experience Platform], please speak to your system administrator before proceeding.

-   Enablement assets. Please reach out to your account representative to have the following items provisioned for you.
    -   Recommendations Recipe
    -   Recommendations Input Dataset
    -   Recommendations Input Schema
    -   Recommendations Output Dataset
    -   Recommendations Output Schema
    -   Golden Data Set postValues
    -   Golden Data Set Schema

-   Download the three required [!DNL Jupyter Notebook] files from the [Adobe public [!DNL Git] repository](https://github.com/adobe/experience-platform-dsw-reference/tree/master/Summit/2019/resources/Notebooks-Thurs), these will be used to demonstrate the [!DNL JupyterLab] workflow in [!DNL Data Science Workspace].

A working understanding of the following key concepts used in this tutorial:
-   [[!DNL Experience Data Model]](../../xdm/home.md): The standardization effort led by Adobe to define standard schemas such as [!DNL Profile] and ExperienceEvent, for Customer Experience Management. 
-  Datasets: A storage and management construct for actual data. A physical instantiated instance of an [XDM Schema](../../xdm/schema/field-dictionary.md).
-  Batches: Datasets are made up of batches. A batch is a set of data collected over a period of time and processed together as a single unit.
-   [!DNL JupyterLab]: [[!DNL JupyterLab]](https://blog.jupyter.org/jupyterlab-is-ready-for-users-5a6f039b8906) is an open-source web-based interface for Project [!DNL Jupyter] and is tightly integrated into [!DNL Experience Platform].

## Prepare your data {#prepare-your-data}

To create a machine learning Model that makes personalized product recommendations to your customers, previous customer purchases on your website must be analyzed. This section explores how this data is ingested into [!DNL Platform] through [!DNL Adobe Analytics], and how that data is transformed into a Feature dataset to be used by your machine learning Model.

### Explore the data and understand the schemas

Log in to [Adobe Experience Platform](https://platform.adobe.com/) and select **[!UICONTROL Datasets]** to list all existing datasets and select the dataset that you would like to explore. In this case, the [!DNL Analytics] dataset **Golden Data Set postValues**.

![](../images/models-recipes/model-walkthrough/dataset-browse.png)

The dataset activity page opens, listing information relating to your dataset. You can select **[!UICONTROL Preview Dataset]** near the top-right to examine sample records. You can also view the schema for the selected dataset. Select the schema link in the right-rail. A popover appears, selecting the link under **[!UICONTROL schema name]** opens the schema in a new tab.

![](../images/models-recipes/model-walkthrough/dataset-activity.png)


![](../images/models-recipes/model-walkthrough/schema-view.png)

The other datasets have been pre-populated with batches for previewing purposes. You can view these datasets by repeating the above steps.

| Dataset name | Schema | Description |
| ----- | ----- | ----- |
| Golden Data Set postValues | Golden Data Set schema | [!DNL Analytics] source data from your website |
| Recommendations Input Dataset | Recommendations Input Schema | The [!DNL Analytics] data is transformed into a training dataset using a feature pipeline. This data is used to train the Product Recommendations machine learning Model. `itemid` and `userid` correspond to a product purchased by that customer. |
| Recommendations Output Dataset | Recommendations Output Schema | The dataset for which scoring results are stored, it will contain the list of recommended products for each customer. |

## Author your Model {#author-your-model}

The second component of the [!DNL Data Science Workspace] lifecycle involves authoring Recipes and Models. The Product Recommendations Recipe is designed to generate product recommendations at scale by utilizing past purchase data and machine learning. 

Recipes are the basis for a Model as they contain machine learning algorithms and logic designed to solve specific problems. More importantly, Recipes empower you to democratize machine learning across your organization, enabling other users to access a Model for disparate use cases without writing any code.

### Explore the Product Recommendations Recipe

In Experience Platform, navigate to **[!UICONTROL Models]** from the left navigation column, then select **[!UICONTROL Recipes]** in the top navigation to view a list of available recipes for your organization.

![](../images/models-recipes/model-walkthrough/recipe-tab.png)

Next, locate and open the provided **[!UICONTROL Recommendations Recipe]** by selecting its name. The Recipe overview page appears.

![](../images/models-recipes/model-walkthrough/Recipe-view.png)

Then, in the right-hand rail, select **[!UICONTROL Recommendations Input Schema]** to view the schema powering the recipe. The schema fields "[!UICONTROL itemId]" and "[!UICONTROL userId]" correspond to a product purchased ([!UICONTROL interactionType]) by that customer at a specific time ([!UICONTROL timestamp]). Follow the same steps to review the fields for the **[!UICONTROL Recommendations Output Schema]**.

![](../images/models-recipes/model-walkthrough/input-output.png)

You have now reviewed the input and output schemas required by the Product Recommendations Recipe. Continue to the next section to learn how to create, train, and evaluate a Product Recommendations Model.

## Train and evaluate your Model {#train-and-evaluate-your-model}

Now that your data is prepared and the Recipe is ready, you can create, train, and evaluate your machine learning model.

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
