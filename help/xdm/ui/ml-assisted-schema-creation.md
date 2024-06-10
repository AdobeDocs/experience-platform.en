---
title: Machine Learning Assisted Schema Creation
description: Learn how to create a schemas in the Experience Platform user interface.
---
# Machine Learning assisted schema creation

Use ML algorithms to generate a schema from sample CSV data. This process saves time and increases accuracy when defining the structure, fields, and data types for large complex datasets.

With ML schema generation you can quickly integrate new data sources and reduce the mistakes from manual creation. Non-technical users can use it to  generate schemas or manage large and complex datasets without any extra effort. This speeds up the process from getting data to gaining insights, as makes it easier to combine new data sources and perform data analysis.

## Getting started

This tutorial requires a working understanding of the requirements for schema creation. Before continuing with this guide, you should read the [UI guide to creating and editing schemas](./resources/schemas.md). 

This guide explains how to create schemas using machine learning (ML) algorithms to generate a schema from sample CSV data. See the [manual schema creation workflow guide](https://experienceleague.adobe.com/en/docs/experience-platform/xdm/ui/resources/schemas#add-field-groups) for information on creating schemas or the document on [field-based workflows in the Schema Editor](https://experienceleague.adobe.com/en/docs/experience-platform/xdm/ui/field-based-workflows) to enhance your understanding of the schema creation process.

>[!NOTE]
>
>You can also compose a schema using the [!DNL Schema Registry] API. To manually create a schema using the API, first read the [[!DNL Schema Registry] developer guide](../api/getting-started.md) before attempting the tutorial on [creating a schema using the API](create-schema-api.md).


## Navigate to the Create schema workflow {#navigate-to-schema-creation-workflow}

From the left navigation of the Platform UI, select the **[!UICONTROL Schemas]** workspace.

![The Platform UI with Schemas highlighted.](../images/ui/schema-workspace/schemas-workspace.png)

The **[!UICONTROL Schemas]** workspace appears. Select **[!UICONTROL Create schema]** to add a new schema to start a schema creation workflow.

![The Schemas workspace with Create schema highlighted.](../images/ui/schema-workspace/create-schema.png)

## Create a Schema

The [!UICONTROL Create a schema] dialog appears. Select the **[Use sample CSV]** schema creation option, followed by **[!UICONTROL Select]** to confirm your choice.

![The [!UICONTROL Create a schema] dialog with [!UICONTROL Use Sample CSV] highlighted.](../images/ui/schema-workspace/use-sample-csv.png)

### Select a base class

The [!UICONTROL Create schema] workflow appears. Select a base class for your schema followed by **[UICONTROL Next]**

![Select Base Class](../images/ui/schema-workspace/select-base-class.png)

5. **Upload CSV File**
   - The **[UICONTROL Select data]** stage of the creation workflow appears. From the **[Upload files]** section, select **[Choose files]**. Select a .csv file from your computer to generate a schema.
   ![Upload CSV File](../images/ui/schema-workspace/upload-files.png)

6. **Preview Data**
   - The **[UICONTROL Preview]** section displays sample data from the file you uploaded. Select **[Next]** to continue the workflow.
   ![Preview Data](../images/ui/schema-workspace/preview-data.png)

7. **Review and Edit Schema**
   - The **[UICONTROL Review and edit]** stage of the creation workflow appears. This view displays the **[UICONTROL Schema recommendation]**. This recommended schema is generated using a machine learning model. You can edit, add, or remove fields as needed.
     1. **Remove a Field**
        - Select the minus icon next to the field you wish to remove. (A confirmation dialog appears to confirm the removal.)
        ![Remove Field](../images/ui/schema-workspace/remove-field.png)
     2. **Edit a Field**
        - Select the pencil icon next to the field you wish to edit. A details panel appears to the right where you can edit the custom field mapping. The details panel contains the Target field, Display Name, Data Type, and Field Group. Make any necessary changes and select **[Apply]** to confirm.
        ![Edit Field](../images/ui/schema-workspace/edit-field.png)
     3. **Add a Field**
        - Select **[Add new field]**. The select field dialog appears, containing a diagram of the schema as it currently exists. Select the desired field and **[Add]** it to the schema. Select **[Cancel]** to close the dialog if needed.
        ![Add New Field](../images/ui/schema-workspace/add-new-field.png)
     4. **Proceed to the Next Step**
        - Select **[Next]** to continue the **[UICONTROL Create schema]** workflow.
        ![Next Button](../images/ui/schema-workspace/next-button.png)

8. **Name and Save Schema**
   - The **[UICONTROL Name and save]** stage of the creation workflow appears.
     1. The **[Schema generated]** section provides a diagram of the ML-generated schema. Enter a **[Schema display name]**. Then select **[Finish]** to complete the schema creation workflow.
     ![Name and Save Schema](../images/ui/schema-workspace/name-and-save.png)

9. **View Schema in Editor**
   - The Schema Editor appears with your newly created schema displayed in the canvas.
   ![Schema Editor](../images/ui/schema-workspace/schema-editor.png)

## Next Steps

After creating your schema, you can use the Schema Editor to make further modifications, if necessary. Your new schema is now ready to be integrated with your data sources and used for data analysis.

For more information on managing schemas and integrating data sources, please refer to the [Schema Management Guide](./schema-management.md).

<!-- 

1. Select the "Schemas" workspace from the left navigation menu.
2. Select the "Add Schema" button.

## Use sample CSV {#use-sample-CSV}

3. Select the "Create schema" option.
    1. The Create a schema dialog appears. Select the **[Use sample CSV]** schema creation option, followed by **[Select]** to confirm your choice.
    2. The [UICONTROL Create schema] workflow appears. Select a base class for your schema followed by **[UICONTROL Next]**
4. The  [UICONTROL Select data] stage of the creation workflow appears. From the [UICONTROL Upload files] select **[Choose files]**. Select a .csv file from your computer to generate a schema.
5. The [UICONTROL Preview] section displays sample data from the file you uploaded. Select [UICONTROL Next] to continue the workflow.  
6. The  [UICONTROL Review and edit] stage of the creation workflow appears. This view displays the   [UICONTROL Schema recommendation]. This recommended schema is generated using a machine learning model. You can edit, add, or remove fields as you need.
    1. To remove a field select the minus icon. [NEEDS MORE INFO ON HOW IT WORKS. MISSING FROM DEMO]. (- I assume a confirmation dialog appears?)
    2. To edit a field select the pencil icon. A details panel  appears to the right where you can edit the custom field mapping. The details panel contains the Target field, Display Name, Data Type, and Field Group. Make any necessary changes and select **[!UICONTROL Apply]** to confirm.
    3. To add a field select [!UICONTROL Add new field]. The select field dialog appears. This dialog contains a diagram of the schema as it currently exits. [NEEDS MORE INFO ON HOW IT WORKS. MISSING FROM DEMO]. Select **[!UICONTROL Cancel]** to close the dialog.
    4. Select **[!UICONTROL Next]** to continue the  [UICONTROL Create schema] workflow. 
7. The  [UICONTROL Name and save] stage of the creation workflow appears. 
    1. The [!UICOTROL Schema generated] section provides a diagram of the ML generated schema. Enter a [!UICONTROL Schema display name]. Then select [!UICONTROL Finish] to complete the schema creation workflow.
8. The Schema Editor appears with your newly created schema displayed in the canvas. -->

