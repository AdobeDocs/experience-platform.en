---
keywords: Experience Platform;home;popular topics;map csv;map csv file;map csv file to xdm;map csv to xdm;ui guide;mapper;mapping;data prep;data preparation;preparing data;
title: Data Prep UI Guide
description: Learn how to use data prep functions in the Experience Platform UI to map CSV files to an XDM schema.
exl-id: fafa4aca-fb64-47ff-a97d-c18e58ae4dae
---
# Data Prep UI Guide

Read this guide to learn how to use [data prep](../home.md) mapping functions in the Adobe Experience Platform user interface to map CSV files to an [Experience Data Model (XDM) schema](../../xdm/home.md).

## Get Started

This tutorial requires a working understanding of the following Platform components:

* [[!DNL Experience Data Model (XDM)] System](../../xdm/home.md): The standardized framework by which Platform organizes customer experience data.
  * [Basics of schema composition](../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas, including key principles and best practices in schema composition.
  * [Schema Editor tutorial](../../xdm/tutorials/create-schema-ui.md): Learn how to create custom schemas using the Schema Editor UI.
* [Identity Service](../../identity-service/home.md): Gain a better view of individual customers and their behavior by bridging identities across devices and systems.
* [[!DNL Real-Time Customer Profile]](../../profile/home.md): Provides a unified, real-time consumer profile based on aggregated data from multiple sources.
* [Sources](../../sources/home.md): Experience Platform allows data to be ingested from various sources while providing you with the ability to structure, label, and enhance incoming data using Platform services.

## Access the mapping interface in the UI

You can access the mapping interface in the UI through two different pathways.

1. In the Experience Platform UI, select **[!UICONTROL Workflows]** from the left-navigation and then select **[!UICONTROL Map CSV to XDM schema]**. Next, provide your dataflow details and select the data that you want to ingest. When finished, you are taken to the mapping interface where you can configure mapping between your source data and an XDM schema.
2. You can also access the mapping interface through the sources workspace.

## Map CSV files into an XDM schema

Use the mapping interface and the comprehensive toolset that it provides to successfully map data fields from your source schema to their appropriate target XDM fields in the target schema.

![The mapping interface in the Experience Platform UI.](../images/ui/mapping/base_mapping.png)

### Understanding the mapping interface {#mapping-interface}

Refer to the dashboard at the top of the interface for information on thea health of your mapping fields within the context of the ingestion workflow. The dashboard displays the following details regarding your mapping fields:

| Property | Description |
| --- | --- |
| [!UICONTROL Mapped fields] | Displays the total number of source fields that have been mapped to a target XDM field, regardless of errors. |
| [!UICONTROL Required fields] | Displays the number of required mapping fields. |
| [!UICONTROL Identity fields] | Displays the total number of mapping fields defined as identity. These mapping fields are represented by a fingerprint icon. |
| [!UICONTROL Errors] | Displays the number of erroneous mapping fields. |

{style="table-layout:auto"}

Next, you can use the options listed in the header to better interact or filter through your mapping fields.

| Option | Description |
| --- | --- |
| [!UICONTROL Search source fields] | Use the search bar to navigate to a specific source field. |
| [!UICONTROL All fields] | Select **[!UICONTROL All fields]** to view a dropdown menu of options to filter your mappings by. The available filtering options include:<ul><li>**[!UICONTROL Required fields]**: Filters the interface to display only fields required to complete the workflow.</li><li> **[!UICONTROL Identity fields]**: Filters the interface to display only fields marked as identities.</li><li>**[!UICONTROL Mapped fields]**: Filters the interface to display only fields that have already been mapped.</li><li>**[!UICONTROL Unmapped fields]**: Filters the interface to display only fields that have yet to be mapped.</li><li>**[!UICONTROL Fields with errors]**: Filters the interface to display only fields that have errors.</li></ul> |
| [!UICONTROL New field type] | Select **[!UICONTROL New field type]** to either add a new field or a calculated field. For more information, read the section on [adding a new field type](#add-a-new-field-type). |
| [!UICONTROL Import mappings] | Select **[!UICONTROL Import mappings]** to import mappings from an existing file or dataflow. For more information, read the esection on [importing mappings](#import-mapping). |
| [!UICONTROL Validate] | Select **[!UICONTROL Validate]** to check for errors in your mappings. |
| [!UICONTROL Download template] | Select **[!UICONTROL Download template]** to export and download a CSV file of your mappings. |
| [!UICONTROL Preview data] | Select **[!UICONTROL Preview data]** to use the preview panel and inspect the structure and contents of your source dataset. |
| [!UICONTROL Clear all] | Select **[!UICONTROL Clear all]** to delete all mappings in the interface. |

{style="table-layout:auto"}

### Add a new field type {#add-a-new-field-type}

You can add a new mapping field or a calculated field by selecting **[!UICONTROL New field type]**.

#### New mapping field

To add a new mapping field, select **[!UICONTROL New field type]** and then select **[!UICONTROL Add new field]** from the dropdown menu that appears.

![The mapping interface with the "add new field" button selected.](../images/ui/mapping/add_new_field.png)

Next, select the source field you would like to add from the source schema tree that appears and then select **[!UICONTROL Select]**.

![The source schema with "country" selected as an additional new field.](../images/ui/mapping/source_field.png)

The mapping interface updates with the source field you selected and an empty target field. Select **[!UICONTROL Map target field]** to start mapping the new source field to its appropriate target XDM field.

![The mapping interface with a new and unmapped source field.](../images/ui/mapping/new_field_added.png)

An interactive target schema tree appears, allowing you to manually traverse through the target schema and find the appropriate target XDM field for your source field.

![The interactive target scheme tree with a new target field selected.](../images/ui/mapping/add_target_field.png)

#### Calculated fields {#calculated-fields}

Calculated fields allow for values to be created based on the attributes in the input schema. These values can then be assigned to attributes in the target schema and be provided a name and description to allow for easier reference. Calculated fields have a maximum length of 4096 characters.

To create a calculated field, select **[!UICONTROL New field type]** and then select **[!UICONTROL Add calculated field]**

![The mapping interface with the "add calculated field" button selected.](../images/ui/mapping/new_calculated_field.png)

The **[!UICONTROL Create calculated field]** window appears. Use the interface to input your calculated fields and refer to the dialog box on the left for supported fields, functions, and operators. 

| Tab | Description |
| --- | ----------- |
| [!UICONTROL Function] | The functions tab lists the functions available to transform the data. To learn more about the functions you can use within calculated fields, please read the guide on [using Data Prep (Mapper) functions](../functions.md). |
| [!UICONTROL Field] | The fields tab lists fields and attributes available in the source schema. |
| [!UICONTROL Operator] | The operators tab lists the operators that are available to transform the data. |

![The calculated field interface](../images/ui/mapping/calculated_field.png)

You can manually add fields, functions, and operators using the expression editor at the center. Select the editor to start creating an expression. Once you are finished, select **[!UICONTROL Save]** to proceed.

### Import mapping {#import-mapping}

You can reduce the manual configuration time of your data ingestion process and limit mistakes by using the import mapping functionality of data prep. You can import mappings from an existing flow or from an exported file.

>[!BEGINTABS]

>[!TAB Import mapping from flow]

To import mapping from an existing dataflow, select **[!UICONTROL Import mappings]** and then select **[!UICONTROL Import mapping from flow]**.

![import mapping from flow]

![select dataflow from import mapping window]

>[!TAB Import mapping from file]

To import mapping from an existing dataflow, select **[!UICONTROL Import mappings]** and then select **[!UICONTROL Import mapping from file]**.

![import mapping from file]

>[!ENDTABS]


![import-mapping](../images/ui/mapping/)

The [!UICONTROL Import mapping] window appears, providing you with a list of dataflows to choose from. 

Select the preview icon to preview the mapping of the dataflow you selected.

![list-mapping](../images/ui/mapping/)

The preview window allows you to inspect existing mapping before importing to your dataflow. Once you verify the mapping, you can select **[!UICONTROL Back]** to return to the list of dataflows and inspect another set of mapping, or you can select **[!UICONTROL Select]** to proceed.

![preview-mapping](../images/ui/mapping/)

Alternatively, you can select the mapping you want to import from the list of dataflows window. Select the dataflow that contains the mapping you want to import and then select **[!UICONTROL Select]** to proceed.

![select-mapping](../images/ui/mapping/)

The interface updates with the mapping you imported.

>[!NOTE]
>
>Any existing mapping sets that you establish or ML mapping recommendations are replaced by the mapping that you imported from an existing dataflow.

![mapping-imported](../images/ui/mapping/)

Select **[!UICONTROL Preview data]** to see mapping results of up to 100 rows of sample data from the selected dataset.

![preview-data](../images/ui/mapping/)

During the preview, the identity column is prioritized as the first field, as it is the key information necessary when validating mapping results. When finished, select **[!UICONTROL Close]**.

![preview-screen](../images/ui/mapping/)

To remove all mapping fields, select **[!UICONTROL Clear all mappings]**.

![clear-all](../images/ui/mapping/)

### Using the mapping interface

Platform automatically provides intelligent recommendations for auto-mapped fields based on the target schema or dataset that you selected. You can manually adjust mapping rules to suit your use cases or fix any duplicated mapping fields to clear any errors.

![mapping-interface](../images/ui/mapping/)

Select the lightbulb icon in the target field that you want to adjust.

![mapping-recc](../images/ui/mapping/)

The [!UICONTROL Mapping recommendations] pop up panel appears, displaying a list of recommended target fields that can be mapped to a particular source field. By default the first recommendation is automatically applied.

Sometimes, more than one recommendation is available for the source schema. When this happens, the mapping card displays the most prominent recommendation, followed by an icon  that contains the number of additional recommendations available. Selecting the light bulb icon will show a list of the additional recommendations. You can choose one of the alternate recommendations by selecting the checkbox next to the recommendation you want to map to instead.

From here, you can change the selected target field to fix an error or match your use case.

Alternatively, you can select **[!UICONTROL Select manually]** to manually use the interactive target schema mapping tree.

![recc-panel](../images/ui/mapping/)

The target schema mapping interface appears in the same view as your mapping fields, allowing you to modify mapping pairs within the same screen. Select the target field that fits your use case or fixes your errors.

![select-target-field](../images/ui/mapping/)

When finished, select **[!UICONTROL Finish]** to proceed.

![finish](../images/ui/mapping/)

## Next steps

By reading this document, you have successfully mapped a CSV file to a target XDM schema using the mapping interface in Platform UI. See the following documents for more information:

* [Data Prep overview](../home.md)
* [Sources overview](../../sources/home.md)
* [Monitor sources dataflows in the UI](../../dataflows/ui/monitor-sources.md)
