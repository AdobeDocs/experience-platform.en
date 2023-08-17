---
keywords: Experience Platform;schedule a model;Data Science Workspace;popular topics;schedule scoring;schedule training
solution: Experience Platform
title: Schedule a Model in the Data Science Workspace UI
type: Tutorial
description: Adobe Experience Platform Data Science Workspace allows you to set up scheduled scoring and training runs on a machine learning service. Automating the training and scoring process can help maintain and improve a Service's efficiency through time by keeping up with patterns within your data.
exl-id: 51f6f328-7c63-4de1-9184-2ba526bb82e2
---
# Schedule a model in the Data Science Workspace UI

Adobe Experience Platform [!DNL Data Science Workspace] allows you to set up scheduled scoring and training runs on a machine learning service. Automating the training and scoring process can help maintain and improve a service's efficiency through time by keeping up with patterns within your data.

This tutorial walks through the steps to configure training and scoring schedules on an existing service through the [!UICONTROL Service Gallery]. It is broken into the following main sections:

-   [Configure scheduled scoring](#configure-scheduled-scoring)
-   [Configure scheduled training](#configure-scheduled-training)

## Getting started

In order to complete this tutorial, you must have access to [!DNL Experience Platform]. If you do not have access to an organization in [!DNL Experience Platform], please speak to your system administrator before proceeding.

This tutorial requires an existing service. If you do not have an accessible service to work with, you can create one by following the tutorial for [publishing a model as a service](./publish-model-service-ui.md).

## Configure scheduled scoring {#configure-scheduled-scoring}

Model scoring can be configured to be an automated process on a scheduled basis. Once a service is created, you can follow the steps below to configure and apply a scoring schedule:

In Adobe Experience Platform, select the **[!UICONTROL Services]** tab located in the left navigation column to access the **[!DNL Service Gallery]**. Find the service you wish to schedule scoring runs on and select **[!UICONTROL Open]** to view its **[!UICONTROL Overview]** page.

![](../images/models-recipes/schedule/select_service.png)

The Overview page displays the Service's scoring information. Select the **[!UICONTROL Update Schedule]** link to configure a scoring schedule.

![](../images/models-recipes/schedule/update_scoring.png)

Configure the frequency, start date, end date, input dataset, and output dataset for the scoring schedule. Once you are satisfied with the configurations, select **[!UICONTROL Create]** to update the service's scoring schedule.

![](../images/models-recipes/schedule/set_scoring_schedule.png)

Your updated scoring schedule is shown in the service's **[!UICONTROL Overview]** page.

![](../images/models-recipes/schedule/scoring_set.png)

## Configure scheduled training {#configure-scheduled-training}

Configuring scheduled training runs on a service ensures that the machine learning model is updated to the most recent data patterns. Whenever a scheduled training run completes, the resulting trained model is used to power the service until the next scheduled training run. 

Once a service is created, you can follow the steps below to configure and apply a training schedule:

In Adobe Experience Platform, select the **[!UICONTROL Services]** tab located in the left navigation column to access the **[!UICONTROL Service Gallery]**. Find the service you wish to schedule training runs on and select **[!UICONTROL Open]** to view its **[!UICONTROL Overview]** page.

![](../images/models-recipes/schedule/select_service.png)

The Overview page displays the service's training information. Select the **[!UICONTROL Update Schedule]** link to configure a training schedule.

![](../images/models-recipes/schedule/update_training.png)

Configure the frequency, start date, end date, and input dataset used for the training schedule. Once you are satisfied with the configurations, select **[!UICONTROL Create]** to update the service's training schedule.

![](../images/models-recipes/schedule/set_training_schedule.png)

Your updated training schedule is shown in the service's **[!UICONTROL Overview]** page.

![](../images/models-recipes/schedule/training_set.png)

## Next steps

By following this tutorial, you have successfully scheduled automated training and scoring runs on a service, and completed the [!DNL Data Science Workspace] tutorial UI workflow. If you have not done so already, consider [restarting the tutorial](./create-retails-sales-dataset.md) and follow the API workflow to create, train, score, and publish a model.
