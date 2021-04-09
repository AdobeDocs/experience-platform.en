---
keywords: Experience Platform;user guide;customer ai;popular topics;configure instance;create instance;
solution: Experience Platform, Intelligent Services, Real-time Customer Data Platform
title: Configure a Customer AI Instance
topic: Instance creation
description: Intelligent Services provide Customer AI as a simple-to-use Adobe Sensei service that can be configured for different use cases. The following sections provide steps for configuring an instance of Customer AI.
exl-id: 78353dab-ccb5-4692-81f6-3fb3f6eca886
---
# Configure a Customer AI instance

Customer AI, as part of Intelligent Services enables you to generate custom propensity scores without having to worry about machine learning.

Intelligent Services provide Customer AI as a simple-to-use Adobe Sensei service that can be configured for different use cases. The following sections provide steps for configuring an instance of Customer AI.

## Set up your instance {#set-up-your-instance}

In the Platform UI, select **[!UICONTROL Services]** in the left navigation. The **[!UICONTROL Services]** browser appears and displays all available services at your disposal. In the container for Customer AI, select **[!UICONTROL Open]**.

![](../images/user-guide/navigate-to-service.png)

The **Customer AI** UI appears and displays all your service instances.

- You can find the **[!UICONTROL Total profiles scored]** metric located in the bottom-right side of the **[!UICONTROL Create instance]** container. This metric tracks the total number of profiles scored by Customer AI for the current calendar year including all sandbox environments and any deleted service instances. 

![](../images/user-guide/total-profiles.png)

Service instances can be edited, cloned, and deleted by using the controls on the right-hand side of the UI. To display these controls, select an instance from your existing **[!UICONTROL Service instances]**. The controls contain the following:

- **[!UICONTROL Edit]**: Selecting **[!UICONTROL Edit]** allows you to modify an existing service instance. You can edit the name, description, and scoring frequency of the instance.
- **[!UICONTROL Clone]**: Selecting **[!UICONTROL Clone]** copies the currently selected service instance setup. You can then modify the workflow to make minor tweaks and rename it as a new instance.
- **[!UICONTROL Delete]**: You can delete a service instance including any historical runs.
- **[!UICONTROL Data source]**: A link to the dataset used by this instance.
- **[!UICONTROL Last run details]**: This is only displayed when a run fails. Information on why the run failed, such as error codes are displayed here.
- **[!UICONTROL Score definition]**: A quick overview of the goal you configured for this instance.

![](../images/user-guide/service-instance-panel.png)

To create a new instance, select **[!UICONTROL Create instance]**.

![](../images/user-guide/dashboard.png)

The instance creation workflow appears, starting on the **[!UICONTROL Setup]** step.

Below is important information on values that you must provide the instance with:

-   The instance's name is used in all places where Customer AI scores are displayed. Hence, names should describe what the prediction scores represent, for example, "Likelihood to cancel magazine subscription".

-   The propensity type determines the intent of the score and metric polarity. You can either choose **[!UICONTROL Churn]** or **[!UICONTROL Conversion]**. Please see the note under [scoring summary](./discover-insights.md#scoring-summary) in the discovering insights document for more information on how the propensity type affects your instance.

-   Data source is where the data is located. Dataset is the input dataset which is used to predict scores. By design, Customer AI uses Consumer Experience Event, Adobe Analytics, and Adobe Audience Manager data to calculate propensity scores. When selecting a dataset from the dropdown selector, only ones that are compatible with Customer AI are listed.

-   By default, propensity scores are generated for all profiles unless an eligible population is specified. You can specify an eligible population by defining conditions to include or exclude profiles based on events.

Provide the required values and then select **[!UICONTROL Next]**.

![](../images/user-guide/setup.png)

### Define a goal {#define-a-goal}

The **[!UICONTROL Define goal]** step appears and it provides an interactive environment for you to visually define a prediction goal. A goal is composed of one or more events, where each event's occurrence is based on the condition it holds. The objective of a Customer AI instance is to determine the likeliness of achieving its goal within a given time frame.

To create a goal, select **[!UICONTROL Enter Field Name]** and select a field from the dropdown list. Select the second input and select a clause for the event's condition, then provide the target value to complete the event. Additional events can be configured by selecting **[!UICONTROL Add event]**. Lastly, complete the goal by applying a prediction time frame in number of days, then select **[!UICONTROL Next]**.

![](../images/user-guide/goal.png)

#### Will occur and will not occur

While defining your goal, you have the option to select **[!UICONTROL Will occur]** or **[!UICONTROL Will not occur]**. Selecting **[!UICONTROL Will occur]** means that the event conditions you define need to be met for a customer's event data to be included in the insights UI. 

For example, if you would like to set up an app to predict whether a customer will make a purchase, you can select **[!UICONTROL Will occur]** followed by **[!UICONTROL All of]** and then enter **commerce.purchases.id** and **exists** as the operator.

![will occur](../images/user-guide/occur.png)

However, there may be cases when you are interested in predicting whether some event will not happen in a certain timeframe. To configure a goal with this option, select **[!UICONTROL Will not occur]** from the top-level dropdown.

For example, if you are interested in predicting which customers become less engaged and do not visit your account login page in the next month. Select **[!UICONTROL Will not occur]** followed by **[!UICONTROL All of]** and then enter **web.webInteraction.URL** and **[!UICONTROL equals]** as the operator with **account-login** as the value.

![will not occur](../images/user-guide/not-occur.png)

#### All of and any of

In some cases, you may want to predict whether a combination of events will occur and in other cases, you may want to predict the occurrence of any event from a pre-defined set. In order to predict whether a customer will have a combination of events, select the **[!UICONTROL All of]** option from the second-level drop-down on the **[!UICONTROL Define Goal]** page.

For example, you may want to predict whether a customer purchases a particular product. This prediction goal is defined by two conditions: a `commerce.order.purchaseID` **exists** and the `productListItems.SKU` **equals** some specific value.

![All of example](../images/user-guide/all-of.png)

In order to predict whether a customer will have any event from a given set, you can use the **[!UICONTROL Any of]** option.

For example, you may want to predict whether a customer visits a certain URL or a web page with a particular name. This prediction goal is defined by two conditions: `web.webPageDetails.URL` **starts with** a particular value and `web.webPageDetails.name` **starts with** a particular value.

![Any of example](../images/user-guide/any-of.png)

### Configure a schedule *(optional)* {#configure-a-schedule}

The **[!UICONTROL Advanced]** step appears. This optional step allows you to configure a schedule to automate prediction runs, define prediction exclusions to filter certain events, or select **[!UICONTROL Finish]** if nothing is needed. 

Setup a scoring schedule by configuring the **[!UICONTROL Scoring Frequency]**. Automated prediction runs can be scheduled to run on either a weekly or a monthly basis.

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
