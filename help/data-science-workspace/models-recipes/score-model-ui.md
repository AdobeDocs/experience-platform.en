---
keywords: Experience Platform;score a model;Data Science Workspace;popular topics;ui;scoring run;scoring results
solution: Experience Platform
title: Score a model (UI)
topic: tutorial
type: Tutorial
description: Scoring in Adobe Experience Platform Data Science Workspace can be achieved by feeding input data into an existing trained Model. Scoring results are then stored and viewable in a specified output dataset as a new batch. 
---

# Score a model (UI)

Scoring in Adobe Experience Platform [!DNL Data Science Workspace] can be achieved by feeding input data into an existing trained Model. Scoring results are then stored and viewable in a specified output dataset as a new batch. 

This tutorial demonstrates the steps required to score a Model in the [!DNL Data Science Workspace] user interface.

## Getting started

In order to complete this tutorial, you must have access to [!DNL Experience Platform]. If you do not have access to an IMS Organization in [!DNL Experience Platform], please speak to your system administrator before proceeding.

This tutorial requires a trained Model. If you do not have a trained Model, follow the [train and evaluate a Model in the UI](./train-evaluate-model-ui.md) tutorial before continuing.

## Create a new scoring run

A scoring run is created using optimized configurations from a previously completed and evaluated training run. The set of optimal configurations for a Model are typically determined by reviewing training run evaluation metrics.

1. Find the most optimal training run to use its configurations for scoring. Open the desired Training run by clicking on its name.

2. From the Training Run **[!UICONTROL Evaluation]** tab, click on the **[!UICONTROL Score]** button on the top right of the screen. This will initiate a new **Run Scoring** workflow.
![](../images/models-recipes/score/training_run_overview.png)

3. Select the input scoring dataset and click **[!UICONTROL Next]**.
![](../images/models-recipes/score/scoring_input.png)

4. Select the output scoring dataset, this is the dedicated output dataset where the scoring results are stored. Confirm your selection and click **[!UICONTROL Next]**.
![](../images/models-recipes/score/scoring_results.png)

5. The final step in the workflow prompts you to configure your scoring run. These configurations are used by the Model for the scoring run.
Note that you will not be able to remove inherited parameters that were set during the Model creation. You can edit or revert non-inherited parameters by double clicking the value or clicking on the revert icon while hovering over the entry. 
![](../images/models-recipes/score/configuration.png) 
Review and confirm the scoring configurations and click **[!UICONTROL Finish]**  to create and execute the scoring run. You will be directed to the **[!UICONTROL Scoring Runs]** tab and the new scoring run will show a status.
![](../images/models-recipes/score/scoring_runs_tab.png)
A scoring run will display either of the four following statuses: Pending, Complete, Failed, or Running, and are updated automatically. Proceed to the next step if the status is either "Completed" or "Failed".

## View scoring results

1. Find the training run that was used for the scoring run, and click on the name to view its **[!UICONTROL Evaluation]** page.

2. Near the top of the training run evaluation page, click the **[!UICONTROL Scoring Runs]** tab to view a listing of existing scoring runs. Click on the scoring listing to view its details in the right column.
![](../images/models-recipes/score/view_details.png)

3. If the selected scoring run has a status of either "Complete" or "Failed", the **[!UICONTROL View Activity Logs]** link found in the right column will be active. Click on the link to view or download the execution logs. If a scoring run had failed, the execution logs can provide useful information in determining the reason for failure.
![](../images/models-recipes/score/activity_logs.png)

4. Click on **[!UICONTROL Preview Scoring Results Dataset]** link found in the right column. You will be able to see a preview of the output dataset from the scoring run.
![](../images/models-recipes/score/preview_results.png)

5. For the complete set of scoring results, click on the **[!UICONTROL Scoring Results Dataset]** link found in the right column.

## Next steps

This tutorial walked you through the steps to score data using a trained Model in [!DNL Data Science Workspace]. Follow the tutorial on [publishing a Model as a Service in the UI](./publish-model-service-ui.md) to allow users within your organization to score data by providing easy access to a machine learning Service.
