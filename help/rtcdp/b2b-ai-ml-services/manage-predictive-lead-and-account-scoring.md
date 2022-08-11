---
title: Manage predictive lead and account scoring in Real-time CDP B2B
type: Documentation
description: This document provides information on managing the predictive lead and account scoring feature in Experience Platform CDP B2B.
---
# Manage predictive lead and account scoring in Real-time Customer Data Platform, B2B Edition

This tutorial walks you through the steps to manage a score as part of the predictive lead and account scoring feature. Scores can be managed for either an account profile or person profile.

## Create a new score 

To create a new score, select the **[!UICONTROL Services]** in the sidebar and select **[!UICONTROL Create score]**.

![plas-new-score](../assets/../b2b-ai-ml-services/assets/plas-create-score.png)

The **[!UICONTROL Basic information]** screen appears, prompting you to select a profile type, enter a name, and an optional description. When finished, select **[!UICONTROL Next]**.

![plas-enter-basic-information](../assets/../b2b-ai-ml-services/assets/plas-basic-information.png)

The **[!UICONTROL Define your goal]** screen appears. Select the dropdown arrow and then select a goal from the dropdown window that appears.

![plas-select-a-goal](../assets/../b2b-ai-ml-services/assets/plas-define-goal.png)

The **[!UICONTROL Goal specifics]** dialogue opens. Select the dropdown arrow and then select goal field name from the dropdown window that appears..

![plas-select-a-goal-field-name](../assets/../b2b-ai-ml-services/assets/plas-goal-specifics-field-name.png)

The **[!UICONTROL Goal conditions]** selection appears. Select the dropdown arrow and then select condition from the dropdown window that appears..

![plas-goal-specifics-condition](../assets/../b2b-ai-ml-services/assets/plas-goal-specidics-condition.png)

The **[!UICONTROL Goal value]** field appears. Next, configure your [!UICONTROL Goal specifics]. Select the [!UICONTROL Enter Field Value] panel and enter your goal value.

>[!NOTE]
>
>Multiple goal values can be added.

![plas-goal-specifics-field-value](../assets/../b2b-ai-ml-services/assets/plas-goal-specifics-field-value.png)

To add additional events, select **[!UICONTROL Add event]**.

![plas-goal-specifics-add-event](../assets/../b2b-ai-ml-services/assets/plas-goal-specifics-add-event.png)

To configure the prediction timeframe, select the dropdown arrow and then select your timeframe of choice and then select **[!UICONTROL Finish]**.

![plas-prediction-timeframe](../assets/../b2b-ai-ml-services/assets/plas-prediction-timeframe.png)

The **[!UICONTROL Scoring setup is complete]** dialogue appears confirming the new score has been created. Select **[!UICONTROL OK]**.

![plas-score-complete](../assets/../b2b-ai-ml-services/assets/plas-score-complete.png)

>[!NOTE]
>
> It can take up to 24 hours for each scoring process to complete.

You are returned to the **[!UICONTROL Services]** tab where you can see the new score created in the list of scores.

![plas-score-created](../assets/../b2b-ai-ml-services/assets/plas-score-created.png)

Select the score to view details and additional information about the last run details.

![plas-score-additional-information](../assets/../b2b-ai-ml-services/assets/plas-score-info.png)

## Edit a score

To edit a score, select a score from the **[!UICONTROL Services]** tab and select **[!UICONTROL Edit]** from the additional details panel on the right side of the screen.

![plas-edit-score](../assets/../b2b-ai-ml-services/assets/plas-edit-score.png)

The **[!UICONTROL Edit instance]** dialogue appears, where you can edit the description for the score. Make your changes and select **[!UICONTROL Save]**.

![plas-edit-save](../assets/../b2b-ai-ml-services/assets/plas-edit-save.png)

>[!NOTE]
>
> To edit the configuration of the score, you will need to clone this score or create a new score.

You are returned to the **[!UICONTROL Services]** tab. Select the score to view the updated description details in the additional details panel on the right side of the screen.

## Clone a score

To clone a score, select a score from the **[!UICONTROL Services]** tab and select **[!UICONTROL Clone]** from the additional details panel on the right side of the screen.

![plas-clone-score](../assets/../b2b-ai-ml-services/assets/plas-clone-score.png)

The **[!UICONTROL Basic information]** screen appears. The profile type, name, and description is cloned from the original score. Amend these details and select **[!UICONTROL Next]**.

![plas-clone-basic-info](../assets/../b2b-ai-ml-services/assets/plas-clone-basic-info.png)

The **[!UICONTROL Define your goal]** screen appears. Complete the goals section as you would when creating a new score and select **[!UICONTROL Finish]**. 

You are returned to the **[!UICONTROL Services]** tab where you can see the newly cloned score in the list.

>[!NOTE]
>
> The **[!UICONTROL Define your goal]** section is not cloned from the original score.

## Delete a score

To delete a score, select a score from the **[!UICONTROL Services]** tab and select **[!UICONTROL Delete]** from the additional details panel on the right side of the screen.

![plas-delete-score](../assets/../b2b-ai-ml-services/assets/plas-delete-score.png)

The **[!UICONTROL Delete documentation]** confirmation dialog appears. Select **[!UICONTROL Delete]**.

![plas-delete-score-confirmation](../assets/../b2b-ai-ml-services/assets/plas-delete-score-confirmation.png)

You are returned to the **[!UICONTROL Services]** tab where you can no longer see the score in the list.

## Next steps

By following this tutorial, you can now successfully create and manage scores. See the following documents for more details:

* [Predictive lead and account scoring](/help/rtcdp/b2b-ai-ml-services/predictive-lead-and-account-scoring.md)
* [Monitor profile enrichment for predictive lead and account scoring](/help/dataflows/ui/b2b/monitor-profile-enrichment.md)
