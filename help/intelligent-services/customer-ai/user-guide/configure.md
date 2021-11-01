---
keywords: Experience Platform;user guide;customer ai;popular topics;configure instance;create instance;
solution: Experience Platform, Intelligent Services, Real-time Customer Data Platform
feature: Customer AI
title: Configure a Customer AI Instance
topic-legacy: Instance creation
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
- **[!UICONTROL Data source]**: A link to the dataset used by this instance. If multiple datasets are being used, selecting the hyperlink text opens the dataset preview popover.
- **[!UICONTROL Last run details]**: This is only displayed when a run fails. Information on why the run failed, such as error codes are displayed here.
- **[!UICONTROL Score definition]**: A quick overview of the goal you configured for this instance.

![](../images/user-guide/service-instance-panel.png)

To create a new instance, select **[!UICONTROL Create instance]**.

![](../images/user-guide/dashboard.png)

## Setup

<!-- Get new Go URLs for CAI UI -->

The instance creation workflow appears, starting on the **[!UICONTROL Setup]** step.

Below is important information on values that you must provide the instance with:

-   **Name:** The instance's name is used in all places where Customer AI scores are displayed. Hence, names should describe what the prediction scores represent, for example, "Likelihood to cancel magazine subscription".

-   **Description:** A description indicating what you are trying to predict.

-   **Propensity type:** The propensity type determines the intent of the score and metric polarity. You can either choose **[!UICONTROL Churn]** or **[!UICONTROL Conversion]**. Please see the note under [scoring summary](./discover-insights.md#scoring-summary) in the discovering insights document for more information on how the propensity type affects your instance.

![Setup screen](../images/user-guide/create-instance.png)

Provide the required values and then select **[!UICONTROL Next]** to continue.

## Select data {#select-data}

By design, Customer AI uses Adobe Analytics, Adobe Audience Manager, Experience event, and Consumer Experience Event data to calculate propensity scores. When selecting a dataset only ones that are compatible with Customer AI are listed. To select a dataset select the (**+**) symbol next to the dataset name or select the checkbox to add multiple datasets at once. Use the search option to quickly find the datasets you're interested in.

![Select and search for dataset](../images/user-guide/configure-dataset-page.png)

After selecting the datasets you wish to use, select the **[!UICONTROL Add]** button to add the datasets to the the dataset preview pane.

![Select datasets](../images/user-guide/select-datasets.png)

Selecting the info icon ![info icon]() next to the dataset opens the dataset preview popover.

![Select and search for dataset](../images/user-guide/dataset-info-2.png)

The dataset preview contains data such as the last update time, source schema, and a preview of the first ten columns.

### Dataset completeness {#dataset-completeness}

<!-- https://www.adobe.com/go/cai-dataset-completeness -->

In the dataset preview is a dataset completeness percentage value. This value provides a quick snapshot of how many columns in your dataset are empty/null. If a dataset contains a lot of missing values and these values are captured elsewhere, it is highly recommended you include the dataset containing the missing values. In this example Person ID is empty, however, Person ID is captured in a separate dataset that can be included.

>[!NOTE]
>
>Dataset completeness is calculated using the maximum lookback window for Customer AI (one year). This means data that is more than one year old is not taken into account when displaying your dataset completeness value.

![Dataset completeness](../images/user-guide/dataset-info.png)

### Select an identity namespace {#dataset-key}

In order for multiple datasets to join on one another, you must select a identity namespace and a value within that namespace you wish to use for each dataset. The same namespace must be used for every dataset you select.

![namespace selected](../images/user-guide/namespace.png)

In the event that more than one identity is available within a namespace, make sure to select the correct identity field. For example, two email identities are available within the email namespace, a work and personal email. Depending on the use case, a personal email is more common to be filled in and more useful in individual predictions.

![Dataset key not selected](../images/user-guide/select-namespace.png)

>[!NOTE]
>
> If no valid identity namespace exists for a dataset, you must set a primary identity and assign it to an identity namespace using the schema editor. To learn more about namespaces and identities, visit the [Identity Service namespaces documenation](../../identity-service/namespaces.md).


## Define a goal {#define-a-goal}

<!-- https://www.adobe.com/go/cai-define-a-goal -->

The **[!UICONTROL Define goal]** step appears and it provides an interactive environment for you to visually define a prediction goal. A goal is composed of one or more events, where each event's occurrence is based on the condition it holds. The objective of a Customer AI instance is to determine the likeliness of achieving its goal within a given time frame.

To create a goal, select **[!UICONTROL Enter Field Name]** and select a field from the dropdown list. Select the second input and select a clause for the event's condition, then optionally provide the target value to complete the event. Additional events can be configured by selecting **[!UICONTROL Add event]**. Lastly, complete the goal by applying a prediction time frame in number of days, then select **[!UICONTROL Next]**.

![](../images/user-guide/define-a-goal.png)

### Will occur and will not occur

While defining your goal, you have the option to select **[!UICONTROL Will occur]** or **[!UICONTROL Will not occur]**. Selecting **[!UICONTROL Will occur]** means that the event conditions you define need to be met for a customer's event data to be included in the insights UI. 

For example, if you would like to set up an app to predict whether a customer will make a purchase, you can select **[!UICONTROL Will occur]** followed by **[!UICONTROL All of]** and then enter **commerce.purchases.id** (or a similar field) and **exists** as the operator.

![will occur](../images/user-guide/occur.png)

However, there may be cases when you are interested in predicting whether some event will not happen in a certain timeframe. To configure a goal with this option, select **[!UICONTROL Will not occur]** from the top-level dropdown.

For example, if you are interested in predicting which customers become less engaged and do not visit your account login page in the next month. Select **[!UICONTROL Will not occur]** followed by **[!UICONTROL All of]** and then enter **web.webInteraction.URL** (or a similar field) and **[!UICONTROL equals]** as the operator with **account-login** as the value.

![will not occur](../images/user-guide/not-occur.png)

### All of and any of

In some cases, you may want to predict whether a combination of events will occur and in other cases, you may want to predict the occurrence of any event from a pre-defined set. In order to predict whether a customer will have a combination of events, select the **[!UICONTROL All of]** option from the second-level drop-down on the **[!UICONTROL Define Goal]** page.

For example, you may want to predict whether a customer purchases a particular product. This prediction goal is defined by two conditions: a `commerce.order.purchaseID` **exists** and the `productListItems.SKU` **equals** some specific value.

![All of example](../images/user-guide/all-of.png)

In order to predict whether a customer will have any event from a given set, you can use the **[!UICONTROL Any of]** option.

For example, you may want to predict whether a customer visits a certain URL or a web page with a particular name. This prediction goal is defined by two conditions: `web.webPageDetails.URL` **starts with** a particular value and `web.webPageDetails.name` **starts with** a particular value.

![Any of example](../images/user-guide/any-of.png)

### Eligible population *(optional)*

By default, propensity scores are generated for all profiles unless an eligible population is specified. You can specify an eligible population by defining conditions to include or exclude profiles based on events.

![eligible population](../images/user-guide/eligible-population.png)

### Custom events (*optional*) {#custom-events}

If you have additional information in addition to the [standard event fields](../input-output.md#standard-events) used by Customer AI to generate propensity scores, a custom events option is provided. Using this option allows you add additional events that you deem influential which may improve the quality of your model and help to provide more accurate results. If the dataset you selected includes custom events defined in your schema, you can add them to your instance.

![event feature](../images/user-guide/event-feature.png)

To add a custom event, select **[!UICONTROL Add custom event]**. Next, input a custom event name then map it to the event field in your schema. Custom event names are displayed in place of the fields value when looking at influential factors and other insights. This means user id's, reservation id's, device info, and other custom values are listed with the custom event name instead of the ID/value of the event. These additional custom events are used by Customer AI to improve the quality of your model and provide more accurate results.

![Custom Event field](../images/user-guide/custom-event.png)

Next, select the operator you wish to use from the available operators drop-down. Only operators compatible with the event are listed.

![Custom Event operator](../images/user-guide/custom-operator.png)

Lastly, enter the field value(s) if the operator selected requires one. In this example, we only need to see if a hotel or restaurant reservation exists. However, if we wanted to be more exact we could use the equals operator and enter an exact value in the value prompt.

![Custom Event field value](../images/user-guide/custom-value.png)

Once complete, select **[!UICONTROL Next]** in the top-right to continue.

### Custom profile attributes (*optional*)

You can define important Profile dataset fields (with timestamps) in your data in addition to the [standard event fields](../input-output.md#standard-events) used by Customer AI to generate propensity scores. Using this option allows you to add additional profile attributes that you deem influential which may improve the quality of your model and provide more accurate results. Additionally, adding custom profile attributes allows Customer AI to better showcase how particular profiles ended up in a propensity bucket.

>[!NOTE]
>
>Adding a custom Profile attribute follows the same workflow as adding a custom event.

<!-- Need updated UI to be live in order to add this screen -->
![add a custom profile attribute]()

### Configure a schedule *(optional)* {#configure-a-schedule}

The **[!UICONTROL Advanced]** step appears. This optional step allows you to configure a schedule to automate prediction runs, define prediction exclusions to filter certain events, or select **[!UICONTROL Finish]** if nothing is needed. 

Setup a scoring schedule by configuring the **[!UICONTROL Scoring Frequency]**. Automated prediction runs can be scheduled to run on either a weekly or a monthly basis.

![](../images/user-guide/schedule.png)

### Prediction exclusions

If your dataset contained any columns added as test data, you can add that column or event to an exclusion list by selecting **Add Exclusion** followed by entering the field you wish to exclude. This prevents events that meet certain conditions from being evaluated when generating scores. This feature can be used to filter out irrelevant data inputs or certain promotions.

To exclude an event, select **[!UICONTROL Add exclusion]** and define the event. To remove an exclusion, select the ellipses (**[!UICONTROL ...]**) to the top-right of the event container, then select **[!UICONTROL Remove Container]**.

![](../images/user-guide/exclusion.png)

### Profile toggle

The Profile toggle allows Customer AI to export the scoring results into Real-time Customer Profile. Disabling this toggle prevents the models scoring results from being added to Profile. Customer AI scoring results are still available with this feature disabled.

When using Customer AI for the first time ,it is recommended that you toggle this feature off until you are happy with the model output results. This prevents you from uploading multiple scoring datasets to Real-time Customer Profile while fine tuning your model.

![Profile toggle](../images/user-guide/advanced-workflow.png)

Once you have your scoring schedule set, prediction exclusions included, and the profile toggle where you want it to be, select **[!UICONTROL Finish]** in the top-right to create your Customer AI instance.

If the instance is created successfully, a prediction run is immediately triggered and subsequent runs execute according to your defined schedule.

>[!NOTE]
>
>Depending on the size of the input data, prediction runs can take up to 24 hours to complete.

By following this section, you have configured an instance of Customer AI and a prediction run was executed. Upon the run's successful completion, scored insights automatically populate profiles with predicted scores if the profile toggle is enabled. Please wait up to 24 hours before continuing to the next section of this tutorial.

## Next steps {#next-steps}

By following this tutorial, you have successfully configured an instance of Customer AI and generated propensity scores. You can now choose to use the Segment builder to [create customer segments with predicted scores](./create-segment.md) or [discover insights with Customer AI](./discover-insights.md).

## Additional resources

The following video is designed to support your understanding of the configuration workflow for Customer AI. Additionally, best practices and use case examples are provided.

>[!IMPORTANT]
>
> The following video is out of date. For the most up-to-date information refer to the documentation.

>[!VIDEO](https://video.tv.adobe.com/v/32665?learn=on&quality=12)
