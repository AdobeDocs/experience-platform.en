---
keywords: Experience Platform;home;popular topics;map csv;map csv file;map csv file to xdm;map csv to xdm;ui guide;
solution: Experience Platform
title: Map a CSV File to an Existing XDM Schema
topic-legacy: tutorial
type: Tutorial
description: This tutorial covers how to map a CSV file to an existing XDM schema using the Adobe Experience Platform user interface.
exl-id: 15f55562-269d-421d-ad3a-5c10fb8f109c
---
# Map a CSV file to an existing XDM schema

>[!NOTE]
>
>This document covers how to map a CSV file to an existing XDM schema. For information on how to use the AI-generated schema recommendation tool (currently in beta), see the document on [mapping a CSV file using machine-learning recommendations](./recommendations.md).

In order to ingest CSV data into [!DNL Adobe Experience Platform], the data must be mapped to an [!DNL Experience Data Model] (XDM) schema. This tutorial covers how to map a CSV file to an XDM schema using the [!DNL Platform] user interface.

## Getting started

This tutorial requires a working understanding of the following components of [!DNL Platform]:

- [[!DNL Experience Data Model (XDM System)]](../../../xdm/home.md): The standardized framework by which [!DNL Platform] organizes customer experience data.
- [Batch ingestion](../../batch-ingestion/overview.md): The method by which [!DNL Platform] ingests data from user-supplied datafiles.
- [Adobe Experience Platform Data Prep](../../batch-ingestion/overview.md): A suite of capabilities that allow you to map and transform ingested data to conform to XDM schemas. The documentation on [Data Prep functions](../../../data-prep/functions.md) is particularly relevant for schema mapping.

This tutorial also requires that you have already created a dataset to ingest your CSV data into. For steps on creating a dataset in the UI, see the [data ingest tutorial](../ingest-batch-data.md).

## Choose a destination

Log in to [[!DNL Adobe Experience Platform]](https://platform.adobe.com) and then select **[!UICONTROL Workflows]** from the left navigation bar to access the **[!UICONTROL Workflows]** workspace.

From the **[!UICONTROL Workflows]** screen, select **[!UICONTROL Map CSV to XDM schema]** under the **[!UICONTROL Data ingestion]** section and then select **[!UICONTROL Launch]**.

![](../../images/tutorials/map-a-csv-file/workflows.png)

The **[!UICONTROL Map CSV to XDM schema]** workflow appears, starting on the **[!UICONTROL Destination]** step. Choose a dataset for inbound data to be ingested into. You can either use an existing dataset or create a new one.

**Use an existing dataset**

To ingest your CSV data into an existing dataset, select **[!UICONTROL Use existing dataset]**. You can either retrieve an existing dataset using the search function or by scrolling through the list of existing datasets in the panel.

![](../../images/tutorials/map-a-csv-file/use-existing-dataset.png)

To ingest your CSV data into a new dataset, select **[!UICONTROL Create new dataset]** and enter a name and description for the dataset in the fields provided. Select a schema by using either the search function or by scrolling through the list of schemas provided. Select **[!UICONTROL Next]** to proceed.

![](../../images/tutorials/map-a-csv-file/create-new-dataset.png)

## Add data

The **[!UICONTROL Add data]** step appears. Drag-and-drop your CSV file into the space provided, or select **[!UICONTROL Choose files]** to manually input your CSV file.

![](../../images/tutorials/map-a-csv-file/add-data.png)

The **[!UICONTROL Sample data]** section appears once the file is uploaded, showing the first ten rows of data. Once you have confirmed that the data has uploaded as expected, select **[!UICONTROL Next]**.

![](../../images/tutorials/map-a-csv-file/sample-data.png)

## Map CSV fields to XDM schema fields

The **[!UICONTROL Mapping]** step appears. The columns of the CSV file are listed under **[!UICONTROL Source Field]**, with their corresponding XDM schema fields listed under **[!UICONTROL Target Field]**. 

[!DNL Platform] automatically provides intelligent recommendations for auto-mapped fields based on the target schema or dataset that you selected. You can manually adjust mapping rules to suit your use cases.

![](../../images/tutorials/map-a-csv-file/mapping-with-suggestions.png)

To accept all the auto-generating mapping values, select the checkbox labelled "[!UICONTROL Accept all target fields]".

![](../../images/tutorials/map-a-csv-file/filled-mapping-with-suggestions.png)

Sometimes, more than one recommendation is available for the source schema. When this happens, the mapping card displays the most prominent recommendation, followed by a blue circle that contains the number of additional recommendations available. Selecting the light bulb icon will show a list of the additional recommendations. You can choose one of the alternate recommendations by selecting the checkbox next to the recommendation you want to map to instead.

![](../../images/tutorials/map-a-csv-file/multiple-recommendations.png)

Alternatively, you can choose to manually map your source schema to your target schema. Hover over the source schema you want to map, then select the plus icon. 

![](../../images/tutorials/map-a-csv-file/mapping-with-suggestions-and-buttons.png)

The **[!UICONTROL Map source to target field]** popover appears. From here, you can select which field you want to be mapped, followed by **[!UICONTROL Save]** to add your new mapping.

![](../../images/tutorials/map-a-csv-file/manual-mapping.png)

If you want to remove one of the mappings, hover over that mapping, then select the minus icon.

### Add calculated field {#add-calculated-field}

Calculated fields allow for values to be created based on the attributes in the input schema. These values can then be assigned to attributes in the target schema and be provided a name and description to allow for easier reference.

Select the **[!UICONTROL Add calculated field]** button to proceed.

![](../../images/tutorials/map-a-csv-file/add-calculated-field.png)

The **[!UICONTROL Create calculated field]** panel appears. The left dialog box contains the fields, functions, and operators supported in calculated fields. Select one of the tabs to start adding functions, fields, or operators to the expression editor.

![](../../images/tutorials/map-a-csv-file/create-calculated-fields.png)

| Tab | Description |
| --------- | ----------- |
| Fields | The fields tab lists fields and attributes available in the source schema. |
| Functions | The functions tab lists the functions available to transform the data. To learn more about the functions you can use within calculated fields, please read the guide on [using Data Prep (Mapper) functions](../../../data-prep/functions.md). |
| Operators | The operators tab lists the operators that are available to transform the data. |

You can manually add fields, functions, and operators using the expression editor at the center. Select the editor to start creating an expression.

![](../../images/tutorials/map-a-csv-file/create-calculated-field.png)

Select **[!UICONTROL Save]** to proceed.

The mapping screen reappears with your newly created source field. Apply the appropriate corresponding target field and select **[!UICONTROL Finish]** to complete the mapping.

![](../../images/tutorials/map-a-csv-file/new-calculated-field.png)

## Monitor data ingestion

Once your CSV file is mapped and created, you can monitor the data that is being ingested through it. For more information on monitoring data ingestion, see the tutorial on [monitoring data ingestion](../../../ingestion/quality/monitor-data-ingestion.md).

## Next steps

By following this tutorial, you have successfully mapped a flat CSV file to an XDM schema and ingested it into [!DNL Platform]. This data can now be used by downstream [!DNL Platform] services such as [!DNL Real-Time Customer Profile]. See the overview for [[!DNL Real-Time Customer Profile]](../../../profile/home.md) for more information.
