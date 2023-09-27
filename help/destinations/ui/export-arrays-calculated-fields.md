---
title: (Beta) Export arrays and calculated fields
type: Tutorial
description: Learn how to export arrays and calculated fields from Real-Time CDP to batch profile-based destinations.
badge: "Beta"
---

# (Beta) Use calculated fields to export arrays to flat files 

>[!AVAILABILITY]
>
>* The functionality to export arrays through calculated fields is currently in Beta. The documentation and the functionality are subject to change.

Learn how to export arrays through calculated fields from Real-Time CDP in flat files to cloud storage destinations. Read this document to understand the use cases enabled by this functionality.

>[!IMPORTANT]
>
>At this time, *you can only export simple arrays (or arrays of primitive values) to cloud storage destinations*. This means that you can export array objects which include string, int, or boolean values. You cannot export maps or arrays of maps or objects which include other array objects. The calculated fields modal window only displays the arrays that you can export.

Get extensive information about calculated fields - what these are and why they matter. Read the pages linked below for an introduction to calculated fields and more information about all the supported functions: 

* [UI guide and overview](help/data-prep/ui/mapping.md#calculated-fields)
* [Supported functions](/help/data-prep/functions.md)

>[!IMPORTANT]
>
>Not all functions listed above are supported *when exporting fields to cloud storage destinations*. See the [supported functions section](#supported-functions) further below for more information.

## Arrays and other object types in Platform {#arrays-strings-other-objects}

You can use XDM schemas to manage different object types in Platform. Previously, you were able to export simple key-value pair type objects out of Experience Platform to your desired destinations. An example of such a field that was supported for export previously is `personalEmail.address`:`johndoe@acme.org`.

In addition to that, you can now export array objects, such as for example: `organization:[marketing, sales, engineering]`. See further below [extensive examples](#examples) of how you can use various functions to access elements of arrays, join array elements into a string, and more.  

## Prerequisites {#prerequisites}

Progress through the [activation steps for cloud storage destinations](/help/destinations/ui/activate-batch-profile-destinations.md) and get to the [mapping](/help/destinations/ui/activate-batch-profile-destinations.md#mapping) step. 

## How to export calculated fields {#how-to-export-calculated-fields}

In the mapping step, select **[!UICONTROL Add calculated field]**.

![Add calculated field to export](/help/destinations/assets/ui/export-arrays-calculated-fields/add-calculated-fields.png)

This opens a modal window where you can select functions, fields, and operators that you can use to export fields and objects out of Experience Platform.

>[!IMPORTANT]
>
>Only some of the fields from your XDM schema are available in the **[!UICONTROL Field]** view. You can see string values and arrays of string, int, and boolean values. For example, the `segmentMembership` array is not displayed, as it includes other array values.

![Modal window 1](/help/destinations/assets/ui/export-arrays-calculated-fields/add-calculated-fields-2.png)

For example, use the `join` function on the `loyaltyID` field as shown below to export an array of loyalty IDs as a string concatenated with an underscore in a CSV file. View [more information about this and other examples further below](#join-function-export-arrays). 

![Modal window 2](/help/destinations/assets/ui/export-arrays-calculated-fields/add-calculated-fields-3.png)

Select **[!UICONTROL Save]** to keep the calculated field and return to the mapping step.

![Modal window 3](/help/destinations/assets/ui/export-arrays-calculated-fields/save-calculated-field.png)

Back in the mapping step of the workflow, fill in the **[!UICONTROL Target field]** with a value of the column header you want for this field in the exported files.

![Select target field 1](/help/destinations/assets/ui/export-arrays-calculated-fields/fill-in-target-field.png)

![Select target field 2](/help/destinations/assets/ui/export-arrays-calculated-fields/target-field-filled-in.png)

When ready, select **[!UICONTROL Next]** to proceed to the next step of the activation workflow.

![Select next to proceed](/help/destinations/assets/ui/export-arrays-calculated-fields/select-next-to-proceed.png)

## Supported functions {#supported-functions}

Note that only the following functions are supported in the beta release of calculated fields and array support for destinations: 

* join
* size_of
* coalesce
* iif
* index-based array access
* sha256
* add_to_array
* first
* md5
* last

## Examples of functions used to export arrays {#examples}

See examples and further information in the sections below for some of the functions listed above. For the rest of the listed functions, refer to the [general functions documentation in the Data Prep section](/help/data-prep/functions.md).

### `join` function to export arrays {#join-function-export-arrays}

Use the `join` function to concatenate the elements of an array into a string, using a desired separator, such as `_` or `|`.

For example, you can combine the following XDM fields below as shown in the mapping screenshot by using a `join('_',loyalty.loyaltyID)` syntax:

* `"organization": ["Marketing","Sales,"Finance"]` array 
* `person.name.firstName` string 
* `person.name.lastName` string
* `personalEmail.address` string

![Mapping screenshot](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-join-function.png)

In this case, your output file looks like:

```
`First_Name,Last_Name,Organization
John,Doe,"Marketing_Sales_Finance"
```


### `size_of` function to export arrays {#sizeof-function-export-arrays}

Use the `size_of` function to indicate how many elements exist in an array. For example if you have an `purchaseTime` array object with multiple timestamps, you can use the `size_of` function to indicate how many separate purchases were made by a person. 

For example, you can combine the following XDM fields below as shown in the mapping screenshot
* `"purchaseTime": ["1538097126","1569633126,"1601255526","1632791526","1664327526"]` array 
* `personalEmail.address` string

![Mapping screenshot for size_of function](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-size-of-function.png)

In this case, your output file looks like:

```
`Personal_Email,Times_Purchased
johndoe@acme.org,"5"
```


<!--

Here are some examples of how you could use the `join` function to access and export arrays and other fields:

|Input value| Function | Output |
|---------|----------|---------|
| `"loyalty":{... "loyaltyID":["1110001", "1110002", "1110003", "1110004"] ...}` | `join('_',loyalty.loyaltyID)` | `"1110001_1110002_1110003_1110004"` |
| another object with arrays | display function | output | 
| yet object with arrays  | display function | output | 

### `coalesce` function to export arrays {#coalesce-function-export-arrays}

Here are some examples of how you could use the `coalesce` function to access and export arrays and other fields:

|Input value| Function | Output |
|---------|----------|---------|
| `"loyalty":{... "loyaltyID":["1110001", "1110002", "1110003", "1110004"] ...}` | `coalesce(loyalty.loyaltyID)` | `"1110001"` |
| another object with arrays | display function | output | 
| yet object with arrays  | display function | output | 

-->


### Index-based array access {#index-based-array-access}

You can access an index of an array to export a single item from the array. For example, similar to the example above for the `size_of` function, if you are looking to indicate and export only the first time that a customer has purchased a certain product, you can use `purchaseTime[0]` to access the first element of the timestamp.

![Mapping screenshot for accessing index](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-index.png)

In this case, your output file looks like:

```
`Personal_Email,First_Purchase
johndoe@acme.org,"1538097126"
```

### `iif` function to export arrays {#iif-function-export-arrays}

Here are some examples of how you could use the `iif` function to access and export arrays and other fields:

## Known limitations

Note the following known limitations for the beta release of this functionality:

Export to JSON files is not supported at this time. You can export arrays to flat CSV files only.
TODO: Add other limitations.

