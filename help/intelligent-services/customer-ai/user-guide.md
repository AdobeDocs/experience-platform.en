---
keywords: Experience Platform;user guide;customer ai;popular topics
solution: Experience Platform
title: Customer AI user guide
topic: User guide
---

# Customer AI user guide

Customer AI in Adobe Experience Platform Intelligent Services enables you to generate custom propensity scores without having to worry about machine learning.

This guide covers steps for working with Customer AI using the Experience Platform user interface. Steps are provided for the following topics:

*   [Configure an instance](#configure-an-instance)
*   [Create customer segments with predicted scores](#create-customer-segments-with-predicted-scores)

In addition, the appendix to this tutorial provides information regarding the [output of Customer AI](#customer-ai-output-data).

## Configure an instance

Experience Platform provides Customer AI as a simple-to-use Adobe Sensei service that can be configured for different use cases. The following sections provide steps for configuring an instance of Customer AI.

### Setup your instance

In the Platform UI, click **Services** in the left navigation. The **Services** browser appears and displays all available services at your disposal. In the container for Customer AI, click **Open**.

![](./images/user-guide/navigate-to-service.png)

The *Customer AI* screen displays all existing Customer AI instances. Click **Create instance**.

![](./images/user-guide/dashboard.png)

The instance creation workflow appears, starting on the *Setup* step.

Below are important information on values for which you must provide the instance with:

*   The instance's name is be used in all places where Customer AI score is displayed. Hence names should describe what the prediction scores represent, for example, "Likelihood to cancel magazine subscription".

*   The propensity type determines the intent of the score and metric polarity. You can either choose **Churn** or **Conversion**.

*   Data source refers to the input dataset which is be used to predict scores. By design, Customer AI uses Consumer Experience Event data to calculate propensity scores. When selecting a dataset from the dropdown selector, only ones that are compatible with Customer AI are listed.

*   By default, propensity scores are generated for all profiles unless an eligible population is specified. You can specify an eligible population by defining conditions to include or exclude profiles based on events.

Provide the required values and then click **Next**.

![](./images/user-guide/setup.png)

### Define a goal

The *Define goal* step appears and it provides an interactive environment for you to visually define a goal. A goal is composed of one or more events, where each event's occurrence is based on the condition it holds. The objective of a Customer AI instance is to determine the likeliness of achieving its goal within a given time frame.

Click **Enter Field Name** and select a field from the dropdown list. Click the second input and select a clause for the event's condition, then provide target value to complete the event. Additional events can be configured by clicking **Add event**. Lastly, complete the goal by applying a prediction time frame in number of days, then click **Next**.

![](./images/user-guide/goal.png)

### Configure a schedule *(optional)*

The *advanced* step appears. This optional step allows you to configure a schedule to automate prediction runs, define prediction exclusions to filter certain events, or click **Finish** if nothing is needed. 

Setup a scoring schedule by configuring the *Scoring Frequency*. Automated prediction runs can be scheduled to run on either a weekly or a monthly basis.

![](./images/user-guide/schedule.png)

Below the schedule configuration, you have the ability to define prediction exclusions to prevent events that meet certain conditions from being evaluated when generating scores. This feature can be used to filter out irrelevant data inputs.

To exclude certain events, click **Add exclusion** and define the event in the same fashion as to how the goal is defined. To remove an exclusion, click the ellipses (**...**) to the top-right of the event container and then click **Remove Container**.

![](./images/user-guide/exclusion.png)

Exclude events as needed and then click **Finish** to create the instance.

![](./images/user-guide/advanced.png)

If the instance is created successfully, a prediction run is immediately triggered and subsequent runs execute according to your defined schedule.

>   **Note:** Depending on the size of the input data, prediction runs can take up to 24 hours to complete.

By following this section, you have configured an instance of Customer AI and a prediction run was executed. Upon the run's successful completion, scored insights automatically populate profiles with predicted scores. Please wait up to 24 hours before continuing to the next section of this tutorial.

## Create customer segments with predicted scores

When a prediction run completes, predicted propensity scores are automatically consumed by Profiles. Enriching Profiles with Customer AI scores allows for the creation of customer segments to find audiences based on their propensity scores. This section provides steps for creating segments using the Segment Builder. For a more robust tutorial on creating segments, please see the [Segment Builder user guide](../../segmentation/tutorials/create-a-segment.md).

In the Platform UI, click **Segments** in the left navigation, and then click **Create segment**. 

![](./images/user-guide/segments.png)

The *Segment Builder* appears. From the left *Fields* column and under the *Attributes* tab, click the folder named **XDM Individual Profile** and then click the folder with the namespace of your organization. The folder named **Customer AI** contains the results of prediction runs and are named after the instance the scores belong to. Click an instance folder to access its results of the desired instance.

![](./images/user-guide/results.png)

Located in the center of Segment Builder, drag and drop the **Score** attribute onto the *rule builder canvas* to define a rule.

Under the right-hand *Segment properties* column, provide a name for the segment.

![](./images/user-guide/properties.png)

Above the left-hand *Fields* column, click the **gear** icon and select a **Merge policy**. Click **Save** to create the segment.

![](./images/user-guide/merge_policy.png)

## Next steps

By following this tutorial, you have successfully configured an instance of Customer AI, generated propensity scores, and found audiences based on their propensity scores using the Segment Builder. You can now target your audiences by activating them to destinations. See the [destinations overview](https://docs.adobe.com/content/help/en/experience-platform/rtcdp/destinations/destinations-overview.html) for more information.

## Appendix

The following section provides additional information regarding the output of Customer AI.

### Customer AI output data

Customer AI generates several attributes for individual profiles that are deemed eligible. These values are consumed by Real-time Customer Profile which can be used to create and define segments. The table below describes the various attributes found in the output of Customer AI:

| Attribute | Description |
| ----- | ----------- |
| Score | The relative likelihood for a customer to achieve the predicted goal within the defined time frame. This value is not to be treated as a probability percentage but rather the likelihood of an individual compared to the overall population. This score ranges from 0 to 100. |
| Probability | This attribute is the true probability of a profile for achieving the predicted goal within the defined time frame. When comparing outputs across different goals, it is recommended that you consider probability over percentile or score. Probability should always be used when determining the average probability across the eligible population, as the probability tends to be on the lower side for events that do not occur frequently. Values for probability range between 0 and 1. |
| Percentile | This value provides information regarding the performance of a profile relative to other similarly scored profiles. For example, a profile with a percentile rank of 99 for churn indicates that it is at a higher risk of churning compared to 99% of all other profiles that were scored. Percentiles range from 1 to 100. |
| Propensity type | The selected propensity type. |
| Score date | The date on which scoring occurred. |
| Influential factors | Predicted reasons on why a profile is likely to convert or churn. Factors are comprised of the following attributes:<ul><li>Code: The profile or behavioral attribute which positively influences a profile's predicted score. </li><li>Value: The value of the profile or behavioral attribute.</li><li>Importance: Indicates the weight of the profile or behavioral attribute has on the predicted score (low, medium, high)</li></ul> |