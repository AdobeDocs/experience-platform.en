---
keywords: Experience Platform;home;popular topics;map csv;map csv file;map csv file to xdm;map csv to xdm;ui guide;mapper;mapping;data prep;data preparation;preparing data;
title: Data Prep UI Guide
description: This document provides directions on how to use data prep functions in the Platform UI to map CSV files to an XDM schema.
exl-id: fafa4aca-fb64-47ff-a97d-c18e58ae4dae
---
# Data Prep UI Guide

This document provides directions on how to use data prep functions in the Adobe Experience Platform user interface to map CSV files to an XDM schema.

## Getting started

This tutorial requires a working understanding of the following Platform components:

* [[!DNL Experience Data Model (XDM)] System](../../xdm/home.md): The standardized framework by which Platform organizes customer experience data.
  * [Basics of schema composition](../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [Identity Service](../../identity-service/home.md): Gain a better view of individual customers and their behavior by bridging identities across devices and systems.
* [[!DNL Real-Time Customer Profile]](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [Sources](../../sources/home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.

## Dataflow detail

>[!TIP]
>
>You can access dataflow detail by selecting any source from the sources catalog. For more information, see the [sources overview](../../sources/home.md).

Before you can map your CSV data to an XDM schema, you must first establish the details of your dataflow.

The [!UICONTROL Dataflow detail] page allows you to select whether you want to ingest your CSV data into an existing target dataset or a new target dataset. An existing dataset comes with a pre-built target schema to map your data to, while a new dataset requires you to select an existing schema, or create a new schema, to map your data to.

### Use an existing target dataset

To ingest your CSV data into an existing dataset, select **[!UICONTROL Existing dataset]**. You can either retrieve an existing dataset using the [!UICONTROL Advanced search] option or by scrolling through the list of existing datasets in the dropdown menu.

With a dataset selected, provide a name for your dataflow and an optional description.

During this process, you can also enable [!UICONTROL Error diagnostics] and [!UICONTROL Partial ingestion]. [!UICONTROL Error diagnostics] enables detailed error message generation for any erroneous records that occur in your dataflow, while [!UICONTROL Partial ingestion] allows you to ingest data containing errors, up to a certain threshold that you manually define. See the [partial batch ingestion overview](../../ingestion/batch-ingestion/partial.md) for more information.

![existing-dataset](../images/ui/mapping/existing-dataset.png)

### Use a new target dataset

To ingest your CSV data into a new dataset, select **[!UICONTROL New dataset]** and then provide an output dataset name and an optional description. Next, select a schema to map to using the [!UICONTROL Advanced search] option or by scrolling through the list of existing schemas in the dropdown menu.

With a schema selected, provide a name for your dataflow and an optional description, and then apply the [!UICONTROL Error diagnostics] and [!UICONTROL Partial ingestion] settings you want for your dataflow. When finished, select **[!UICONTROL Next]**.

![new-dataset](../images/ui/mapping/new-dataset.png)

## Select Data

The [!UICONTROL Select data] step appears, providing you an interface to upload your local files and preview their structure and contents. Select **[!UICONTROL Choose files]** to upload a CSV file from your local system. Alternatively, you can drag and drop the CSV file you want to upload into the [!UICONTROL Drag and drop files] panel.

>[!TIP]
>
>Only CSV files are currently supported by local file upload. The maximum file size for each file is 1 GB.

![choose-files](../images/ui/mapping/choose-files.png)

Once your file is uploaded, the preview interface updates to display the contents and structure of the file.

![preview-sample-data](../images/ui/mapping/preview-sample-data.png)

Depending on your file, you can select a column delimiter such as tabs, commas, pipes, or a custom column delimiter for your source data. Select the **[!UICONTROL Delimiter]** dropdown arrow and then select the appropriate delimiter from the menu.

When finished, select **[!UICONTROL Next]**.

![delimiter](../images/ui/mapping/delimiter.png)

## Mapping

The **[!UICONTROL mapping]** interface provides you with a comprehensive tool to map source fields from your source schema to their appropriate target XDM fields in the target schema.

![map-csv-to-xdm](../images/ui/mapping/map-csv-to-xdm.png)

### Understanding the mapping interface {#mapping-interface}

The mapping interface includes a dashboard that provides information on the health of your mapping fields within the context of the ingestion workflow. The dashboard displays the following details regarding your mapping fields:

| Property | Description |
| --- | --- |
| [!UICONTROL Mapped fields] | Displays the total number of source fields that have been mapped to a target XDM field, regardless of errors. |
| [!UICONTROL Required fields] | Displays the number of required mapping fields. |
| [!UICONTROL Identity fields] | Displays the total number of mapping fields defined as identity. These mapping fields are represented by a fingerprint icon. |
| [!UICONTROL Errors] | Displays the number of erroneous mapping fields. |

![top-panel](../images/ui/mapping/top-panel.png)

The mapping interface also provides a panel of options that you can choose from to better interact or filter through your mapping fields.

![second-panel](../images/ui/mapping/second-panel.png)

To search for a particular mapping set, select **[!UICONTROL Search source fields]** and enter the name of the source data that you want to isolate.

![search](../images/ui/mapping/search.png)

Select **[!UICONTROL All source fields]** to see a dropdown menu of filtering options to better narrow down your view of the mapping interface.

The filtering options are:

| Source fields | Description |
| --- | --- |
| [!UICONTROL All source fields] | This option displays all of the source fields of your source schema. This option is displayed by default. |
| [!UICONTROL Required fields] | This option filters the source schema to only display the fields required to complete the mapping. |
| [!UICONTROL Identity fields] | This option filters the source schema to only display the fields marked for Identity. |
| [!UICONTROL Mapped fields] | This option filters the source schema to only display the fields that have already been mapped. |
| [!UICONTROL Unmapped fields] | This option filters the source schema to only display the fields that have yet to be mapped. |
| [!UICONTROL Fields with recommendation] | This option filters the source schema to only display the fields that contain mapping recommendations. |

Select **[!UICONTROL Fields with errors]** to see all mapping fields with errors.

![filter](../images/ui/mapping/filter.png)

An isolated view of erroneous mapping fields appears, allowing you to address errors through intelligent mapping recommendations or through the manual mapping tree.

![fields-with-errors](../images/ui/mapping/fields-with-errors.png)

### Add a new field type

You can add a new mapping field or a calculated field by selecting **[!UICONTROL New field type]**.

#### New mapping field

To add a new mapping field, select **[!UICONTROL New field type]** and then select **[!UICONTROL Add new field]** from the dropdown menu that appears.

![add-new-field](../images/ui/mapping/add-new-field.png)

Next, select the source field you would like to add from the source schema tree that appears and then select **[!UICONTROL Select]**.

![select-new-field](../images/ui/mapping/select-new-field.png)

The mapping interface updates with the source field you selected and an empty target field. Select **[!UICONTROL Map target field]** to start mapping the new source field to its appropriate target XDM field.

![map-target-field](../images/ui/mapping/map-target-field.png)

An interactive target schema tree appears, allowing you to manually traverse through the target schema and find the appropriate target XDM field for your source field.

![manual-mapping](../images/ui/mapping/manual-mapping.png)

When finished, select the schema icon to close the target schema interface. 

![schema-tree](../images/ui/mapping/schema-tree.png)

#### Calculated fields {#calculated-fields}

Calculated fields allow for values to be created based on the attributes in the input schema. These values can then be assigned to attributes in the target schema and be provided a name and description to allow for easier reference. Calculated fields have a maximum length of 4096 characters.

To create a calculated field, select **[!UICONTROL New field type]** and then select **[!UICONTROL Add calculated field]**

![add-calculated-field](../images/ui/mapping/add-calculated-field.png)

The **[!UICONTROL Create calculated field]** panel appears. The left dialog box contains the fields, functions, and operators supported in calculated fields. Select one of the tabs to start adding functions, fields, or operators to the expression editor.

| Tab | Description |
| --- | ----------- |
| [!UICONTROL Function] | The functions tab lists the functions available to transform the data. To learn more about the functions you can use within calculated fields, please read the guide on [using Data Prep (Mapper) functions](../functions.md). |
| [!UICONTROL Field] | The fields tab lists fields and attributes available in the source schema. |
| [!UICONTROL Operator] | The operators tab lists the operators that are available to transform the data. |

![tabs](../images/ui/mapping/tabs.png)

You can manually add fields, functions, and operators using the expression editor at the center. Select the editor to start creating an expression. Once you are finished, select **[!UICONTROL Save]** to proceed.

![create-calculated-field](../images/ui/mapping/create-calculated-field.png)

### Import mapping {#import}

You can reuse the mapping of an existing dataflow to reduce the manual configuration time of your data ingestion and limit mistakes. Select **[!UICONTROL Import mapping]** to reuse an existing mapping.

![import-mapping](../images/ui/mapping/import-mapping.png)

The [!UICONTROL Import mapping] window appears, providing you with a list of dataflows to choose from. 

Select the preview icon to preview the mapping of the dataflow you selected.

![list-mapping](../images/ui/mapping/list-mapping.png)

The preview window allows you to inspect existing mapping before importing to your dataflow. Once you verify the mapping, you can select **[!UICONTROL Back]** to return to the list of dataflows and inspect another set of mapping, or you can select **[!UICONTROL Select]** to proceed.

![preview-mapping](../images/ui/mapping/preview-mapping.png)

Alternatively, you can select the mapping you want to import from the list of dataflows window. Select the dataflow that contains the mapping you want to import and then select **[!UICONTROL Select]** to proceed.

![select-mapping](../images/ui/mapping/select-mapping.png)

The interface updates with the mapping you imported.

>[!NOTE]
>
>Any existing mapping sets that you establish or ML mapping recommendations are replaced by the mapping that you imported from an existing dataflow.

![mapping-imported](../images/ui/mapping/mapping-imported.png)

Select **[!UICONTROL Preview data]** to see mapping results of up to 100 rows of sample data from the selected dataset.

![preview-data](../images/ui/mapping/preview-data.png)

During the preview, the identity column is prioritized as the first field, as it is the key information necessary when validating mapping results. When finished, select **[!UICONTROL Close]**.

![preview-screen](../images/ui/mapping/preview-screen.png)

To remove all mapping fields, select **[!UICONTROL Clear all mappings]**.

![clear-all](../images/ui/mapping/clear-all.png)

### Using the mapping interface

Platform automatically provides intelligent recommendations for auto-mapped fields based on the target schema or dataset that you selected. You can manually adjust mapping rules to suit your use cases or fix any duplicated mapping fields to clear any errors.

![mapping-interface](../images/ui/mapping/mapping-interface.png)

Select the lightbulb icon in the target field that you want to adjust.

![mapping-recc](../images/ui/mapping/mapping-recc.png)

The [!UICONTROL Mapping recommendations] pop up panel appears, displaying a list of recommended target fields that can be mapped to a particular source field. By default the first recommendation is automatically applied.

Sometimes, more than one recommendation is available for the source schema. When this happens, the mapping card displays the most prominent recommendation, followed by an icon  that contains the number of additional recommendations available. Selecting the light bulb icon will show a list of the additional recommendations. You can choose one of the alternate recommendations by selecting the checkbox next to the recommendation you want to map to instead.

From here, you can change the selected target field to fix an error or match your use case.

Alternatively, you can select **[!UICONTROL Select manually]** to manually use the interactive target schema mapping tree.

![recc-panel](../images/ui/mapping/recc-panel.png)

The target schema mapping interface appears in the same view as your mapping fields, allowing you to modify mapping pairs within the same screen. Select the target field that fits your use case or fixes your errors.

![select-target-field](../images/ui/mapping/select-target-field.png)

When finished, select **[!UICONTROL Finish]** to proceed.

![finish](../images/ui/mapping/finish.png)

## Next steps

By reading this document, you have successfully mapped a CSV file to a target XDM schema using the mapping interface in Platform UI. See the following documents for more information:

* [Data Prep overview](../home.md)
* [Sources overview](../../sources/home.md)
* [Monitor sources dataflows in the UI](../../dataflows/ui/monitor-sources.md)
