---
title: (Beta) Export arrays and calculated fields
type: Tutorial
description: Learn how to export arrays and calculated fields from Real-Time CDP to batch profile-based destinations.
badge: "Beta"
---

# (Beta) Use calculated fields to export arrays to flat files 

>[!AVAILABILITY]
>
>* The functionality to export arrays through calculated fields is currently in Beta and is not available to all users. The documentation and the functionality are subject to change.

Learn how to export arrays through calculated fields from Real-Time CDP to cloud storage destinations.

>[!IMPORTANT]
>
>At this time, *you can only export arrays of primitive values to cloud storage destinations*. This means that you can export array objects which include string, int, or boolean values. You cannot export array objects which include other array objects. The UI only displays the arrays that can be exported.

Get extensive information about calculated fields - what these are and why they matter. Read the pages linked below for an introduction to calculated fields and more information about all the supported functions: 

* [UI guide and overview](help/data-prep/ui/mapping.md#calculated-fields)
* [Supported functions](/help/data-prep/functions.md)

>[!IMPORTANT]
>
>Not all functions listed above are supported *when exporting fields to cloud storage destinations*. See the [supported functions section](#supported-functions) further below for more information.

## Prerequisites {#prerequisites}

Progress through the [activation steps for cloud storage destinations](/help/destinations/ui/activate-batch-profile-destinations.md) and get to the [mapping](/help/destinations/ui/activate-batch-profile-destinations.md#mapping) step. 

## How to export calculated fields {#how-to-export-calculated-fields}

In the mapping step, select **[!UICONTROL Add calculated field]**.

![Add calculated field to export](/help/destinations/assets/ui/export-arrays-calculated-fields/add-calculated-fields.png)

This opens a modal window where you can select functions, fields, and operators that you can use to export fields and objects out of Experience Platform.

>[!IMPORTANT]
>
>Only some of the fields from your XDM schema are available in the **[!UICONTROL Field]** view. You can see string values and arrays of string, int, and boolean values. 

![Modal window 1](/help/destinations/assets/ui/export-arrays-calculated-fields/add-calculated-fields-2.png)

For example, use the `join` function on the `loyaltyID` field as shown below to export an array of loyalty IDs as a string concatenated with an underscore in a CSV file. View [more information about this example further below](#join-function-export-arrays). 

![Modal window 2](/help/destinations/assets/ui/export-arrays-calculated-fields/add-calculated-fields-3.png)

Select **[!UICONTROL Save]** to keep the calculated field and return to the mapping step.

![Modal window 3](/help/destinations/assets/ui/export-arrays-calculated-fields/save-calculated-field.png)

Back in the mapping step of the workflow, fill in the **[!UICONTROL Target field ]** with a value of how you want to export this field in the files.

![Select target field 1](/help/destinations/assets/ui/export-arrays-calculated-fields/fill-in-target-field.png)

![Select target field 2](/help/destinations/assets/ui/export-arrays-calculated-fields/target-field-filled-in.png)

When ready, select **[!UICONTROL Next]** to proceed to the next step of the activation workflow.

![Select next to proceed](/help/destinations/assets/ui/export-arrays-calculated-fields/select-next-to-proceed.png)

## Supported functions {#supported-functions}

Note that only the following functions are supported in the beta release of calculated fields and array support for destinations: 

* join
* coalesce
* iif
* index-based array access
* sha256
* add_to_array
* size_of
* first
* md5
* last

See examples and further information in the sections below for the first four functions listed above. For the rest of the listed functions, refer to the [general functions documentation in the Data Prep section](/help/data-prep/functions.md).

### `join` function to export arrays {#join-function-export-arrays}

Here are some examples of how you could use the `join` function to access and export arrays and other fields:

|Input value| Function | Output |
|---------|----------|---------|
| `"loyalty":{... "loyaltyID":["1110001", "1110002", "1110003", "1110004"] ...}` | `join('_',loyalty.loyaltyID)` | `"1110001_1110002_1110003_1110004"` |
| another object with arrays | display function | output | 
| yet object with arrays  | display function | output | 

### `coalesce` function to export arrays {#coalesce-function-export-arrays}

Here are some examples of how you could use the `coalesce` function to access and export arrays and other fields:


### `iif` function to export arrays {#iif-function-export-arrays}

Here are some examples of how you could use the `iif` function to access and export arrays and other fields:


### Index-based array access {#index-based-array-access}

## Known limitations

Export to JSON files is not supported at this time. 
TODO: Add other limitations.

