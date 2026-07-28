---
keywords: Experience Platform;insights;customer ai;popular topics;customer ai segments
solution: Experience Platform, Real-Time Customer Data Platform
feature: Customer AI
title: Create Audiences with Predicted Scores
description: When a prediction run completes, predicted propensity scores are automatically consumed by Profiles. Enriching Profiles with Customer AI scores allows for the creation of audiences to find audiences based on their propensity scores. This section provides steps for creating audiences using Segment Builder.
exl-id: ac81f798-f599-4a8d-af25-c00c92e74b4e
TQID: https://experienceleague.adobe.com/PxH6ueD8AhgcHy8Jy6a-itezQ-p543PLPInSBp205Xo
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: fdddec33-c9cb-4459-b8b6-2664395a6f10
    internal-label: Real-Time Customer Data Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
topic_v2:
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
---
# Create audiences with predicted scores

When a prediction run completes, predicted propensity scores are automatically consumed by Profiles. Enriching Profiles with Customer AI scores allows for the creation of audiences to find audiences based on their propensity scores. This section provides steps for creating audiences using Audience Builder. For a more robust tutorial on creating audiences, please see the [Audience Builder user guide](../../../segmentation/ui/segment-builder.md).

>[!IMPORTANT]
>
>In order to utilize this method, Real-Time Customer Profile needs to be enabled for the dataset.

In the Experience Platform UI, select **[!UICONTROL Audiences]** in the left navigation, followed by **[!UICONTROL Create audience]**. 

![Screenshot of the Audiences page in the Experience Platform UI, showing the option to create a new audience.](../images/user-guide/segments_new.png)

**Segment Builder** appears. From the left **[!UICONTROL Fields]** column and under the **[!UICONTROL Attributes]** tab, select the folder named **[!UICONTROL XDM Individual Profile]** and then select the folder with the namespace of your organization. The folder named **[!UICONTROL Customer AI]** contains the results of prediction runs and are named after the instance the scores belong to. Click an instance folder to access its results of the desired instance.

![](../images/user-guide/results_new.png)

Located in the center of Segment Builder, drag and drop the **[!UICONTROL Score]** attribute onto the *rule builder canvas* to define a rule.

Under the right-hand *Audience properties* column, provide a name for the audience.

![](../images/user-guide/properties_new.png)

Above the left-hand *Fields* column, select the **gear** icon and select a *Merge policy* from the drop-down. Select **[!UICONTROL Save]** to create the audience.

![](../images/user-guide/merge_policy_new.png)

## Next steps

By following this tutorial, you have successfully found audiences based on their propensity scores using Segment Builder. You can now target your audiences by activating them to destinations. See the [destinations overview](../../../destinations/home.md) for more information.
