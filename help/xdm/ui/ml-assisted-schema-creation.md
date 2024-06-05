---
title: Machine Learning Assisted Schema Creation
description: Learn how to create a schemas in the Experience Platform user interface.
---
# Machine Learning assisted schema creation

Use ML algorithms to generate a schema from sample CSV data. This process saves time and increases accuracy when defining the structure, fields, and data types for large complex datasets.

With ML schema generation you can quickly integrate new data sources and reduce the mistakes from manual creation. Non-technical users can use it to  generate schemas or manage large and complex datasets without any extra effort. 

This speeds up the process from getting data to gaining insights, as makes it easier to combine new data sources and perform data analysis.

## Getting started

This tutorial requires a working understanding of the Schema Editor. Before continuing with this guide, you should reference the [UI guide to creating and editing schemas](./resources/schemas.md) to become familiar with the requirements for schema creation. 

>[!NOTE]
>
>You can also compose a schema using the [!DNL Schema Registry] API. To manually create a schema using the API, first read the [[!DNL Schema Registry] developer guide](../api/getting-started.md) before attempting the tutorial on [creating a schema using the API](create-schema-api.md).

## Navigate to the Create schema workflow {#navigate-to-schema-creation-workflow}

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
8. The Schema Editor appears with your newly created schema displayed in the canvas.

