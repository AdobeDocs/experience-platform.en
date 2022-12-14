---
keywords: Experience Platform;home;popular topics;data governance;data usage label;policy service;data usage labels user guide
solution: Experience Platform
title: Manage Data Usage Labels in the UI
topic-legacy: labels
description: This guide covers steps for working with data usage labels within the Adobe Experience Platform user interface.
exl-id: aa44d5cc-416a-4ef2-be14-b4f32aec162c
---
# Manage data usage labels in the UI

This user guide covers steps for working with data usage labels within the [!DNL Experience Platform] user interface.

## Manage labels at the dataset level

>[!IMPORTANT]
>
>Applying labels at the dataset level is only supported for data governance use cases. If you are trying to create access policies for the data, you must [apply labels to the schema](../../xdm/tutorials/labels.md) that the dataset is based on. See the overview on [attribute-based access control](../../access-control/abac/overview.md) for more information.

In order to manage data usage labels at the dataset level, you must select an existing dataset or create a new one. After logging into Adobe Experience Platform, select **[!UICONTROL Datasets]** on the left-navigation to open the **[!UICONTROL Datasets]** workspace. This page lists all created datasets belonging to your organization, along with useful details related to each dataset. 

![Dataset Tab within Data Workspace](../images/labels/datasets-tab.png)

The next section provides steps for creating a new dataset to apply labels to. If you wish to edit labels for an existing dataset, select the dataset from the list and skip ahead to [adding data usage labels to the dataset](#add-labels).

### Create a new dataset

>[!NOTE]
>
>In this example, a dataset is created using a pre-configured [!DNL Experience Data Model] (XDM) schema. For more information on XDM schemas, see the [XDM System overview](../../xdm/home.md) and [basics of schema composition](../../xdm/schema/composition.md).

To create a new dataset, select **[!UICONTROL Create Dataset]** in the top-right corner of the **[!UICONTROL Datasets]** workspace.

![](../images/labels/create-dataset.png)

The **[!UICONTROL Create Dataset]** screen appears. From here, select **[!UICONTROL Create Dataset from Schema]**. 

![Create Dataset from Schema](../images/labels/create-from-dataset.png)

The **[!UICONTROL Select Schema]** screen appears, which lists all available schemas that you can use for creating a dataset. Select the radio button next to a schema to select it. The **[!UICONTROL Schemas]** section on the right-hand side displays additional details about the selected schema. Once you have selected a schema, select **[!UICONTROL Next]**.

![Select Dataset Schema](../images/labels/select-schema.png)

The **[!UICONTROL Configure Dataset]** screen appears. Provide a name (required) and description (optional, but recommended) for your new dataset, then select **[!UICONTROL Finish]**.

![Configure Dataset with Name and Description](../images/labels/configure-dataset.png)

The **[!UICONTROL Dataset Activity]** page appears, displaying information about the newly created dataset. In this example, the dataset is named "Loyalty Members", therefore the top-navigation shows **Datasets > Loyalty Members**. 

![Dataset Activity page](../images/labels/dataset-created.png)

### Add data usage labels to the dataset {#add-labels}

After creating a new dataset or selecting an existing dataset from the list in the **[!UICONTROL Datasets]** workspace, select **[!UICONTROL Data Governance]** to open the **[!UICONTROL Data Governance]** workspace. The workspace allows you to manage data usage labels at the dataset level and field level.

![Dataset Data Governance Tab](../images/labels/dataset-governance.png)

To edit data usage labels at the dataset level, start by selecting the pencil icon next to the dataset name.

![Edit dataset-level labels](../images/labels/dataset-level-edit.png)

The **[!UICONTROL Edit Governance Labels]** dialog opens. Within the dialog, check the boxes next to the labels you wish to apply to the dataset. Remember that these labels will be inherited by all fields within the dataset. The **[!UICONTROL Applied Labels]** header updates as you check each box, showing the labels you have chosen. Once you have selected the desired labels, select **[!UICONTROL Save Changes]**.

![Apply Governance Labels at the Dataset Level](../images/labels/apply-labels-dataset.png)

The **[!UICONTROL Data Governance]** workspace reappears, showing the labels that you have applied at the dataset level. You can also see that the labels are inherited down to each of the fields within the dataset.

![Dataset Labels inherited by fields](../images/labels/dataset-labels-applied.png)

Notice that an "x" appears next to the labels at the dataset level, allowing you to remove the labels. The inherited labels beside each field do not have an "x" next to them and appear "greyed out" with no ability to remove or edit. This is because **inherited fields are read-only**, meaning they cannot be removed at the field level.

The **[!UICONTROL Show Inherited Labels]** toggle is on by default, which allows you to see any labels inherited down from the dataset to its fields. Switching the toggle off hides any inherited labels within the dataset.

![Hide inherited labels](../images/labels/inherited-labels.png)

## Manage labels at the dataset field level

>[!IMPORTANT]
>
>Applying labels at the dataset field level is only supported for data governance use cases. If you are trying to create access policies for the data, you must [apply labels to the schema](../../xdm/tutorials/labels.md) that the dataset is based on. See the overview on [attribute-based access control](../../access-control/abac/overview.md) for more information.

Continuing the workflow for [adding and editing data usage labels at the dataset level](#add-labels), you can also manage field-level labels within the **[!UICONTROL Data Governance]** workspace for that dataset. 

To apply data usage labels to an individual field, select the checkbox next to the field name, then select **[!UICONTROL Edit Governance Labels]**.  

![Edit Field Labels](../images/labels/field-label-edit.png)

The **[!UICONTROL Edit Governance Labels]** dialog appears. The dialog displays headers showing selected fields, applied labels, and inherited labels. Notice that the inherited labels (C2 and C5) are greyed out in the dialog. They are read-only labels inherited from the dataset level and are therefore only editable at the dataset level.  

![Edit governance labels for an individual field](../images/labels/field-label-inheritance.png)

Select field-level labels by selecting the checkbox next to each label you wish to use. As you select labels, the **[!UICONTROL Applied Labels]** header updates to show labels applied to the fields shown in the **[!UICONTROL Selected Fields]** header. Once you have finished selecting field-level labels, select **[!UICONTROL Save Changes]**.

![Apply field-level labels](../images/labels/apply-labels-field.png)

The **[!UICONTROL Data Governance]** workspace reappears, which now displays the selected field-level label(s) in the row next to the field name. Notice that the field-level label has an "x" next to it, allowing you to remove the label.  

![Field showing field-level labels](../images/labels/field-labels-applied.png)

You can repeat these steps to continue adding and editing field-level labels for additional fields, including selecting multiple fields to apply field-level labels simultaneously.  

![Select multiple fields to apply field-level labels simultaneously.](../images/labels/multiple-fields.png)

It is important to remember that inheritance moves from the top-level down only (dataset → fields), meaning that labels applied at the field level are not propagated to other fields or datasets.

## Manage labels at the schema level

You can add labels directly to a schema or fields within that schema. Any fields applied at the schema level will propagate to all datasets based on that schema.

See the tutorial on [managing schema-level labels](../../xdm/tutorials/labels.md) for more information.

## Manage custom labels {#manage-custom-labels}

>[!CONTEXTUALHELP]
>id="platform_governance_createlabels"
>title="Create labels"
>abstract="Labels allow you to categorize datasets and fields according to usage policies that apply to that data. Platform provides a standard set of labels for you to use, but you can also create custom labels that are specific to your organization."

You can create your own custom usage labels within the **[!UICONTROL Policies]** workspace in the [!DNL Experience Platform] UI. Select **[!UICONTROL Policies]** in the left-navigation, then select **[!UICONTROL Labels]** to view a list of existing labels. From here, select **[!UICONTROL Create label]**.

![](../images/labels/create-label-btn.png)

The **[!UICONTROL Create label]** dialog appears. From here, provide the following information for the new label:

* **[!UICONTROL Identifier]**: A unique identifier for the label. This value is used for lookup purposes and should therefore be short and concise.
* **[!UICONTROL Name]**: A friendly display name for the label.
* **[!UICONTROL Description]**: (Optional) A description for the label to provide further context.

When finished, select **[!UICONTROL Create]**.

![](../images/labels/create-label.png)

The dialog closes, and the newly created custom label appears in the list under the **[!UICONTROL Labels]** tab.

![](../images/labels/label-created.png)

The label can now be selected under **[!UICONTROL Custom Labels]** when editing usage labels for datasets and fields, or when creating data usage policies.

<img src="../images/labels/add-custom-label.png" width=600 /><br>

## Next steps

Now that you have added data usage labels at the dataset and field level, you can begin to ingest data into [!DNL Experience Platform]. To learn more, start by reading the [data ingestion documentation](../../ingestion/home.md).

You can also now define data usage policies based on the labels you have applied. For more information, see the [data usage policies overview](../policies/overview.md).

## Additional resources

The following video is intended to support your understanding of Data Governance, and outlines how to apply labels to a dataset and individual fields.

>[!VIDEO](https://video.tv.adobe.com/v/29709?quality=12&enable10seconds=on&speedcontrol=on)
