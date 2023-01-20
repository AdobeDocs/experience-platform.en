---
keywords: Experience Platform;publish a model;Data Science Workspace;popular topics;score a service
solution: Experience Platform
title: Publish a Model as a Service in the Data Science Workspace UI
type: Tutorial
description: Adobe Experience Platform Data Science Workspace allows you to publish your trained and evaluated Model as a Service, enabling users within your IMS Organization to score data without the need for creating their own Models.
exl-id: ebbec1b1-20d3-43b5-82d3-89c79757625a
---
# Publish a model as a service in the Data Science Workspace UI

Adobe Experience Platform Data Science Workspace allows you to publish your trained and evaluated Model as a Service, enabling users within your IMS Organization to score data without the need for creating their own Models.

## Getting started

In order to complete this tutorial, you must have access to [!DNL Experience Platform]. If you do not have access to an IMS Organization in [!DNL Experience Platform], please speak to your system administrator before proceeding.

This tutorial requires an existing Model with a successful training run. If you do not have a publishable Model, follow the [Train and evaluate a Model in the UI](./train-evaluate-model-ui.md) tutorial before continuing.

If you prefer to publish a Model by using Sensei Machine Learning APIs, refer to the [API tutorial](./publish-model-service-api.md).

## Publish a Model {#publish-a-model}

In Adobe Experience Platform, select **[!UICONTROL Models]** located in the left navigation column, then select the **[!UICONTROL Browse]** tab to list all existing Models. Select the name of the Model you wish to be published as a Service.

![](../images/models-recipes/publish-model/browse_model.png)

Select **[!UICONTROL Publish]** near the top right of the Model overview page to start a Service creation process.

![](../images/models-recipes/publish-model/view_training.png)

Input a desired name for the Service and optionally provide a Service description, select **[!UICONTROL Next]** when finished.

![](../images/models-recipes/publish-model/configure_training.png)

All successful training runs for to the Model are listed. The new Service will inherit training and scoring configurations from the selected training run. 

![](../images/models-recipes/publish-model/select_training_run.png)

Select **[!UICONTROL Finish]** to create the Service and redirect to the **[!UICONTROL Service Gallery]** to show all available Services, including the newly created Service.

![](../images/models-recipes/publish-model/service_gallery.png)

## Score using a Service {#access-a-service}

In Adobe Experience Platform, select the **[!UICONTROL Services]** tab located in the left navigation column to access the **[!UICONTROL Service Gallery]**. Find the Service that you wish to use and select **[!UICONTROL Open]**.

![](../images/models-recipes/publish-model/open_service.png)

Within the service overview page, select **[!UICONTROL Score]**.

![](../images/models-recipes/publish-model/score_service.png)

Select an appropriate input dataset for the scoring run, then select **[!UICONTROL Next]**. You are asked to do the same step for the scoring dataset. Once you have selected the input and output dataset, you can update the configurations.

![](../images/models-recipes/publish-model/select_datasets.png)

When a Service is created, it inherits default scoring configurations. You can review these configurations and adjust them as needed by double-clicking on the values. Once you are satisfied with the configurations, select **[!UICONTROL Finish]** to begin the scoring run.

![](../images/models-recipes/publish-model/scoring_configs.png)

On the Service's **Overview** page, details of the new scoring job and its progress is shown. Once the job completes, the **[!UICONTROL Most Recent]** header within the **[!UICONTROL Scoring]** container  is updated.

![](../images/models-recipes/publish-model/pending_scoring.png)

## Next steps {#next-steps}

By following this tutorial, you have successfully published a Model as an accessible Service, and scored data using the new Service through the [!UICONTROL Service Gallery]. Continue to the next tutorial to learn how you can [schedule automated training and scoring runs on a Service](./schedule-models-ui.md).
