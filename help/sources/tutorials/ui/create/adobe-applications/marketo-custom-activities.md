---
title: Create a Marketo Engage Source Connection and Dataflow for Custom Activity data in the UI
description: This tutorial provides steps for creating a Marketo Engage source connection and dataflow in the UI to bring custom activities data into Adobe Experience Platform.
---
# Create a [!DNL Marketo Engage] source connection and dataflow for custom activity data in the UI

>[!NOTE]
>
>This tutorial provides specific steps on how to set up and bring custom activity data from [!DNL Marketo] to Experience Platform. For generic steps on how to create a [!DNL Marketo] source connection and dataflow, read the [[!DNL Marketo] UI guide](./marketo.md).

In addition to [standard activities](../../../../connectors/adobe-applications/mapping/marketo.md#activities), you can also use the [!DNL Marketo] source to bring custom activities data to Adobe Experience Platform. This document provides steps on how to create a source connection and dataflow for custom activity data using the [!DNL Marketo] source in the UI.

## Retrieve your custom activity details

The first step to bringing custom activity data from [!DNL Marketo] to Experience Platform is to retrieve the API name and the display name of your custom activity.

Login to your account using the [[!DNL Marketo]](https://app-sjint.marketo.com/#MM0A1) interface. In the left navigation, under [!DNL Database Management], select **Marketo Custom Activities**.

The interface updates to a display of your custom activities, including information on their respective display names and API names. You can also use the right-rail to select and view other custom activities from your account.

![The Custom Activities interface in the Adobe Marketo Engage UI.]

Select **Fields** from the top header to view the fields associated with your custom activity. In this page, you can view the names, API names, descriptions, and data types of the fields in your custom activity.

![The Marketo Custom Activity Fields Details page in the Marketo Engage UI.]

## Set up field groups for custom activities in the B2B activities schema

In the *[!UICONTROL Schemas]* dashboard of the Experience Platform UI, select **[!UICONTROL Browse]** and then select **[!UICONTROL B2B Activity]** from the list of schemas that appear.

>[!TIP]
>
>Use the search bar to expedite your navigation through the list of schemas.

![The B2B Activity schema selected from the list of schemas in Experience Platform UI.]

### Create a new field group for custom activity

Next, add a new field group to the [!DNL B2B Activity] schema. This field group should correspond with the custom activity that you want to ingest and should use the custom activity's display name that you retrieved earlier.

To add a new field group, select **[!UICONTROL + Add]** beside the *[!UICONTROL Field groups]* panel under *[!UICONTROL Composition]*.

![]

The *[!UICONTROL Add field groups]* window appears. In this step, provide the same display name for the custom activity that you retrieved in an earlier step and provide an optional description for your new field group. When finished, select **[!UICONTROL Add field groups]**.

![]

### Add a new object-type field

Once you have created a new field group, you must now add a new object field to the schema. This new field will act as the object that holds the individual fields of the custom activity.

To add a new field, select the plus sign (`+`) beside the schema name. An entry for *[!UICONTROL Untitled Field | Type]* appears and the right-rail updates into a panel allowing you to configure properties for your new field. Set the field name to be your custom activity's API name and set the display name to be your custom activity's display name. Then, set the type as `object` and assign the field group to the custom activity field group that you created in the previous step. When finished, select **[!UICONTROL Apply]**.

### Add individual fields inside the object field

The last step in preparing your schema is to add individual fields inside the object-type field that you created in the previous step.

## Create a dataflow 

With your schema setup complete, you can now proceed to create a dataflow for your custom activity data.

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search bar.

Under the [!UICONTROL Adobe applications] category, select **[!UICONTROL Marketo Engage]**. Then, select **[!UICONTROL Add data]** to create a new [!DNL Marketo] dataflow.

![]

### Authentication

### Select data

### Dataflow detail

### Mapping

### Review


