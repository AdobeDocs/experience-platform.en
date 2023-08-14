---
title: Create a Marketo Engage Source Connection and Dataflow for Custom Activity data in the UI
description: This tutorial provides steps for creating a Marketo Engage source connection and dataflow in the UI to bring custom activities data into Adobe Experience Platform.
exl-id: 05a7b500-11d2-4d58-be43-a2c4c0ceeb87
---
# Create a [!DNL Marketo Engage] source connection and dataflow for custom activity data in the UI

>[!NOTE]
>
>This tutorial provides specific steps on how to set up and bring **custom activity** data from [!DNL Marketo] to Experience Platform. For steps on how to bring **standard activity** data, read the [[!DNL Marketo] UI guide](./marketo.md).

In addition to [standard activities](../../../../connectors/adobe-applications/mapping/marketo.md#activities), you can also use the [!DNL Marketo] source to bring custom activities data to Adobe Experience Platform. This document provides steps on how to create a source connection and dataflow for custom activity data using the [!DNL Marketo] source in the UI.

## Getting started

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

* [B2B namespaces and schema auto-generation utility](../../../../connectors/adobe-applications/marketo/marketo-namespaces.md): The B2B namespaces and schema auto-generation utility allows you to use [!DNL Postman] to auto-generate values for your B2B namespaces and schemas. You must complete your B2B namespaces and schemas first, before creating a [!DNL Marketo] source connection and dataflow.
* [Sources](../../../../home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.
* [Experience Data Model (XDM)](../../../../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
  * [Create and edit schemas in the UI](../../../../../xdm/ui/resources/schemas.md): Learn how to create and edit schemas in the UI.
* [Identity namespaces](../../../../../identity-service/namespaces.md): Identity namespaces are a component of [!DNL Identity Service] that serve as indicators of the context to which an identity relates. A fully qualified identity includes an ID value and a namespace.
* [[!DNL Real-Time Customer Profile]](/help/profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [Sandboxes](../../../../../sandboxes/home.md): Experience Platform provides virtual sandboxes which partition a single Platform instance into separate virtual environments to help develop and evolve digital experience applications.

## Retrieve your custom activity details

The first step to bringing custom activity data from [!DNL Marketo] to Experience Platform is to retrieve the API name and the display name of your custom activity.

Login to your account using the [[!DNL Marketo]](https://app-sjint.marketo.com/#MM0A1) interface. In the left navigation, under [!DNL Database Management], select **Marketo Custom Activities**.

The interface updates to a display of your custom activities, including information on their respective display names and API names. You can also use the right-rail to select and view other custom activities from your account.

![The Custom Activities interface in the Adobe Marketo Engage UI.](../../../../images/tutorials/create/marketo-custom-activities/marketo-custom-activity.png)

Select **Fields** from the top header to view the fields associated with your custom activity. In this page, you can view the names, API names, descriptions, and data types of the fields in your custom activity. Details regarding individual fields will be used in a later step, when creating a schema.

![The Marketo Custom Activity Fields Details page in the Marketo Engage UI.](../../../../images/tutorials/create/marketo-custom-activities/marketo-custom-activity-fields.png)

## Set up field groups for custom activities in the B2B activities schema

In the *[!UICONTROL Schemas]* dashboard of the Experience Platform UI, select **[!UICONTROL Browse]** and then select **[!UICONTROL B2B Activity]** from the list of schemas.

>[!TIP]
>
>Use the search bar to expedite your navigation through the list of schemas.

![The schemas workspace in the Experience Platform UI with the B2B Activity schema selected.](../../../../images/tutorials/create/marketo-custom-activities/b2b-activity.png)

### Create a new field group for custom activity

Next, add a new field group to the [!DNL B2B Activity] schema. This field group should correspond with the custom activity that you want to ingest and should use the custom activity's display name that you retrieved earlier.

To add a new field group, select **[!UICONTROL + Add]** beside the *[!UICONTROL Field groups]* panel under *[!UICONTROL Composition]*.

![The schema structure.](../../../../images/tutorials/create/marketo-custom-activities/add-new-field-group.png)

The *[!UICONTROL Add field groups]* window appears. Select **[!UICONTROL Create new field group]** and then provide the same display name for the custom activity that you retrieved in an earlier step and provide an optional description for your new field group. When finished, select **[!UICONTROL Add field groups]**.

![The window for labeling and creating a new field group.](../../../../images/tutorials/create/marketo-custom-activities/create-new-field-group.png)

Once created, your new field group for custom activity appears in the [!UICONTROL Field groups] catalog.

![The schema structure with a new field group added under the field group panel.](../../../../images/tutorials/create/marketo-custom-activities/new-field-group-created.png)

### Add a new field to your schema structure

Next, add a new field to your schema. This new field must be set to `type: object` and will contain the individual fields of the custom activity.

To add a new field, select the plus sign (`+`) beside the schema name. An entry for *[!UICONTROL Untitled Field | Type]* appears. Next, configure properties of your field using the *[!UICONTROL Field properties]* panel. Set the field name to be your custom activity's API name and set the display name to be your custom activity's display name. Then, set the type as `object` and assign the field group to the custom activity field group that you created in the previous step. When finished, select **[!UICONTROL Apply]**.

![The schema structure with the plus (`+`) sign selected so that a new field can be added.](../../../../images/tutorials/create/marketo-custom-activities/add-new-object.png)

The new field appears in your schema.

![A new field added to the schema.](../../../../images/tutorials/create/marketo-custom-activities/new-object-field-added.png)

### Add sub-fields to the object field {#add-sub-fields-to-the-object-field}

The last step in preparing your schema is to add individual fields inside the field that you created in the previous step.

![A group of sub-fields added to a field within the schema.](../../../../images/tutorials/create/marketo-custom-activities/add-sub-fields.png)

## Create a dataflow 

With your schema setup complete, you can now proceed to create a dataflow for your custom activity data.

In the Platform UI, select **[!UICONTROL Sources]** from the left navigation bar to access the [!UICONTROL Sources] workspace. The [!UICONTROL Catalog] screen displays a variety of sources with which you can create an account.

You can select the appropriate category from the catalog on the left-hand side of your screen. Alternatively, you can find the specific source you wish to work with using the search bar.

Under the [!UICONTROL Adobe applications] category, select **[!UICONTROL Marketo Engage]**. Then, select **[!UICONTROL Add data]** to create a new [!DNL Marketo] dataflow.

![The sources catalog on Experience Platform UI with the Marketo Engage source selected.](../../../../images/tutorials/create/marketo/catalog.png)

### Select data

Select **[!UICONTROL Activities]** from the list of [!DNL Marketo] datasets and then select **[!UICONTROL Next]**.

![The select data step in the sources workflow with the activities dataset selected.](../../../../images/tutorials/create/marketo-custom-activities/select-data.png)

### Dataflow detail

Next, [provide information for your dataflow](./marketo.md#provide-dataflow-details), including names and descriptions for your dataset and dataflow, the schema that you will be using, and configurations for [!DNL Profile] ingestion, error diagnostics, and partial ingestion.

![The dataflow detail step.](../../../../images/tutorials/create/marketo-custom-activities/dataflow-detail.png)

### Mapping

Mappings for standard activity fields are auto-populated, but custom activity fields must be mapped to their corresponding target fields manually. 

To start mapping your custom activity fields, select **[!UICONTROL New field type]** and then select **[!UICONTROL Add new field]**.

![The mapping step with the dropdown menu to add a new field.](../../../../images/tutorials/create/marketo-custom-activities/add-new-mapping-field.png)

Navigate through the source data structure and find the custom activity field that you want to ingest. When finished, select **[!UICONTROL Select]**.

>[!TIP]
>
>To avoid confusion and handle duplicate field names, custom activity fields are prefixed with the API name.

![The source data structure.](../../../../images/tutorials/create/marketo-custom-activities/select-new-mapping-field.png)

To add a target field, select the schema icon ![schema icon](../../../../images/tutorials/create/marketo-custom-activities/schema-icon.png) and then select the custom activity fields from the target schema.

![The target schema structure.](../../../../images/tutorials/create/marketo-custom-activities/add-target-mapping-field.png)

Repeat the steps to add the rest of your custom activity mapping fields. When finished, select **[!UICONTROL Next]**.

![All of the mappings for source and target data.](../../../../images/tutorials/create/marketo-custom-activities/all-mappings.png)

### Review

The *[!UICONTROL Review]* step appears, allowing you to review your new dataflow before it is created. Details are grouped within the following categories:

* **[!UICONTROL Connection]**: Shows the source type, the relevant path of the chosen source entity, and the amount of columns within that source entity.
* **[!UICONTROL Assign dataset & map fields]**: Shows which dataset the source data is being ingested into, including the schema that the dataset adheres to.

Once you have reviewed your dataflow, select **[!UICONTROL Save & ingest]** and allow some time for the dataflow to be created.

![The final review step that summarizes information on the connection, dataset, and mapping fields.](../../../../images/tutorials/create/marketo-custom-activities/review.png)

### Add custom activities to an existing activities dataflow {#add-to-existing-dataflows}

To add custom activity data to an existing dataflow, modify the mappings of an existing activities dataflow with the custom activity data that you want to ingest. This allows you to ingest custom activity into the same existing activities dataset. For more information on how to update the mappings of an existing dataflow, read the guide on [updating dataflows in the UI](../../update-dataflows.md).

### Use [!DNL Query Service] to filter activities for custom activities {#query-service-filter}

Once your dataflow is complete, you can use [Query Service](../../../../../query-service/home.md) to filter activities for your custom activity data. 

When custom activities are ingested into Platform, the API name of the custom activity automatically becomes its `eventType`. Use `eventType={API_NAME}` to filter for custom activity data.

```sql
SELECT * FROM with_custom_activities_ds_today WHERE eventType='aepCustomActivityDemo1' 
```

Use the `IN` clause to filter multiple custom activities:

```sql
SELECT * FROM $datasetName WHERE eventType='{API_NAME}'
SELECT * FROM $datasetName WHERE eventType IN ('aepCustomActivityDemo1', 'aepCustomActivityDemo2')
```

The image below shows an example SQL statement in the [Query Editor](../../../../../query-service/ui/user-guide.md) that filters for custom activity data.

![Platform UI displaying a query example for custom activities.](../../../../images/tutorials/create/marketo-custom-activities/queries.png)

## Next steps

By following this tutorial, you have set up a Platform schema for [!DNL Marketo] custom activity data and created a dataflow to bring that data to Platform. For general information on the [!DNL Marketo] source, read the [[!DNL Marketo] source overview](../../../../connectors/adobe-applications/marketo/marketo.md).
