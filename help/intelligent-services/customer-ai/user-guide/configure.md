---
keywords: Experience Platform;user guide;customer ai;popular topics;configure instance;create instance;
solution: Experience Platform
title: Configuring a Customer AI instance
topic: Instance creation
description: Intelligent Services provide Customer AI as a simple-to-use Adobe Sensei service that can be configured for different use cases. The following sections provide steps for configuring an instance of Customer AI.
---

# Configuring a Customer AI instance

Customer AI, as part of Intelligent Services enables you to generate custom propensity scores without having to worry about machine learning.

Intelligent Services provide Customer AI as a simple-to-use Adobe Sensei service that can be configured for different use cases. The following sections provide steps for configuring an instance of Customer AI.

## Set up your instance {#set-up-your-instance}

In the Platform UI, select **[!UICONTROL Services]** in the left navigation. The **[!UICONTROL Services]** browser appears and displays all available services at your disposal. In the container for Customer AI, select **[!UICONTROL Open]**.

![](../images/user-guide/navigate-to-service.png)

The **Customer AI** UI appears and displays all your service instances.

- You can find a **[!UICONTROL Total profiles scored]** metric located in the bottom-right side of the **[!UICONTROL Create instance]** container. This metric tracks the total number of profiles scored by Customer AI for the current calendar year including all sandbox environments and any deleted service instances. 

![](../images/user-guide/total-profiles.png)

Service instances can be edited, cloned, and deleted by using the controls on the right-hand side of the UI. To display these controls, select an instance from your existing **[!UICONTROL Service instances]**. The controls contain the following:

- **[!UICONTROL Edit]**: Selecting **[!UICONTROL Edit]** allows you to modify an existing service instance. You can edit the name, description and scoring frequency of the instance.
- **[!UICONTROL Clone]**: Selecting Clone copies the currently selected service instance set up. You can then modify the workflow to make minor tweaks and rename it as a new instance.
- **[!UICONTROL Delete]**: You can Delete a service instance including any historical runs.
- **[!UICONTROL Data source]**: A link to the dataset being used by this instance.
- **[!UICONTROL Last run details]**: This is only displayed when a run fails. Information on why the run failed such as error codes are displayed here.
- **[!UICONTROL Score definition]**: A quick overview of the goal you configured for this instance.

![](../images/user-guide/service-instance-panel.png)

To begin, select **[!UICONTROL Create instance]**.

![](../images/user-guide/dashboard.png)

The instance creation workflow appears, starting on the **Setup** step.

Below is important information on values that you must provide the instance with:

*   The instance's name is be used in all places where Customer AI scores are displayed. Hence, names should describe what the prediction scores represent, for example, "Likelihood to cancel magazine subscription".

*   The propensity type determines the intent of the score and metric polarity. You can either choose **[!UICONTROL Churn]** or **[!UICONTROL Conversion]**. Please see the note under [scoring summary](./discover-insights.md#scoring-summary) in the discovering insights document for more information on how the propensity type affects your instance.

*   Data source is where the data is located. Dataset is the input dataset which is used to predict scores. By design, Customer AI uses Consumer Experience Event data to calculate propensity scores. When selecting a dataset from the dropdown selector, only ones that are compatible with Customer AI are listed.

*   By default, propensity scores are generated for all profiles unless an eligible population is specified. You can specify an eligible population by defining conditions to include or exclude profiles based on events.

Provide the required values and then select **[!UICONTROL Next]**.

![](../images/user-guide/setup.png)

### Define a goal {#define-a-goal}

The *Define goal* step appears and it provides an interactive environment for you to visually define a goal. A goal is composed of one or more events, where each event's occurrence is based on the condition it holds. The objective of a Customer AI instance is to determine the likeliness of achieving its goal within a given time frame.

While defining your goal you have the option to select **[!UICONTROL Will occur]** or **[!UICONTROL Will not occur]**. Selecting **[!UICONTROL Will occur]** means that the event conditions you define need to be met for a customers event data to be included in the insights UI. For example, if you wanted all the customers who purchased a specific item by following an email link. You can select **[!UICONTROL Will occur]** followed by defining your goal.

Selecting **[!UICONTROL Will not occur]** means any conditions outside the one you define are captured. This option should be used in churn cases to specify non-events. For example, you can have a use case looking at loyal customers were sent a promotion but did not redirect from it.

![](../images/user-guide/occur.png)

To create a goal, select **[!UICONTROL Enter Field Name]** and select a field from the dropdown list. Select the second input and select a clause for the event's condition, then provide target value to complete the event. Additional events can be configured by selecting **[!UICONTROL Add event]**. Lastly, complete the goal by applying a prediction time frame in number of days, then select **[!UICONTROL Next]**.

![](../images/user-guide/goal.png)

### Configure a schedule *(optional)* {#configure-a-schedule}

The *advanced* step appears. This optional step allows you to configure a schedule to automate prediction runs, define prediction exclusions to filter certain events, or select **[!UICONTROL Finish]** if nothing is needed. 

Setup a scoring schedule by configuring the *Scoring Frequency*. Automated prediction runs can be scheduled to run on either a weekly or a monthly basis.

![](../images/user-guide/schedule.png)

Below the schedule configuration, you have the ability to define prediction exclusions to prevent events that meet certain conditions from being evaluated when generating scores. This feature can be used to filter out irrelevant data inputs.

To exclude certain events, select **[!UICONTROL Add exclusion]** and define the event in the same fashion as to how the goal is defined. To remove an exclusion, select the ellipses (**[!UICONTROL ...]**) to the top-right of the event container and then select **[!UICONTROL Remove Container]**.

![](../images/user-guide/exclusion.png)

Exclude events as needed and then select **[!UICONTROL Finish]** to create the instance.

![](../images/user-guide/advanced.png)

If the instance is created successfully, a prediction run is immediately triggered and subsequent runs execute according to your defined schedule.

>[!NOTE]
>
>Depending on the size of the input data, prediction runs can take up to 24 hours to complete.

By following this section, you have configured an instance of Customer AI and a prediction run was executed. Upon the run's successful completion, scored insights automatically populate profiles with predicted scores. Please wait up to 24 hours before continuing to the next section of this tutorial.

## Next steps {#next-steps}

By following this tutorial, you have successfully configured an instance of Customer AI and generated propensity scores. You can now choose to use the Segment builder to [create customer segments with predicted scores](./create-segment.md) or [discover insights with Customer AI](./discover-insights.md).

## Additional resources

The following video is designed to support your understanding of the configuration workflow for Customer AI. Additionally, best practices and use case examples are provided.

>[!VIDEO](https://video.tv.adobe.com/v/32665?learn=on&quality=12)

