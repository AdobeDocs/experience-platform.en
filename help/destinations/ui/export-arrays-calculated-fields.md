---
title: (Beta) Use calculated fields to export arrays in flat files 
type: Tutorial
description: Learn how to export arrays and calculated fields from Real-Time CDP to batch profile-based destinations.
badge: "Beta"
---

# (Beta) Use calculated fields to export arrays in flat schema files 

>[!CONTEXTUALHELP]
>id="platform_destinations_export_arrays_flat_files"
>title="(Beta) Export arrays support"
>abstract="Export simple arrays of int, string, or boolean values from Experience Platform to your desired cloud storage destination. Some limitations apply. View the documentation for extensive examples and supported functions.
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/activate/export-arrays-calculated-fields.html#examples" text="Examples"
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/activate/export-arrays-calculated-fields.html#known-limitations" text="Known limitations"

>[!AVAILABILITY]
>
>* The functionality to export arrays through calculated fields is currently in Beta. The documentation and the functionality are subject to change.

Learn how to export arrays through calculated fields from Real-Time CDP in flat schema files to cloud storage destinations. Read this document to understand the use cases enabled by this functionality.

Get extensive information about calculated fields - what these are and why they matter. Read the pages linked below for an introduction to calculated fields in Data Prep and more information about all the available functions: 

* [UI guide and overview](help/data-prep/ui/mapping.md#calculated-fields)
* [Data prep functions](/help/data-prep/functions.md)

>[!IMPORTANT]
>
>Not all functions listed above are supported *when exporting fields to cloud storage destinations* using the calculated fields functionality. See the [supported functions section](#supported-functions) further below for more information.

## Arrays and other object types in Platform {#arrays-strings-other-objects}

In Experience Platform, you can use [XDM schemas](/help/xdm/home.md) to manage different field types. Previously, you were able to export simple key-value pair type fields such as strings out of Experience Platform to your desired destinations. An example of such a field that was supported for export previously is `personalEmail.address`:`johndoe@acme.org`.

Other field types in Experience Platform include array fields. Read more about [managing array fields in the Experience Platform UI](/help/xdm/ui/fields/array.md). In addition to the previously supported field types, you can now export array objects such as: `organizations:[marketing, sales, engineering]`. See further below [extensive examples](#examples) of how you can use various functions to access elements of arrays, join array elements into a string, and more.  

## Known limitations {#known-limitations}

Note the following known limitations for the beta release of this functionality:

* Export to JSON or Parquet files with hierarchical schemas is not supported at this time. You can export arrays to flat schema CSV, JSON, and Parquet files only.
* At this time, *you can only export simple arrays (or arrays of primitive values) to cloud storage destinations*. This means that you can export array objects which include string, int, or boolean values. You cannot export maps or arrays of maps or objects The calculated fields modal window only displays the arrays that you can export.

## Prerequisites {#prerequisites}

Progress through the [activation steps for cloud storage destinations](/help/destinations/ui/activate-batch-profile-destinations.md) and get to the [mapping](/help/destinations/ui/activate-batch-profile-destinations.md#mapping) step. 

## How to export calculated fields {#how-to-export-calculated-fields}

In the mapping step of the activation workflow for cloud storage destinations, select **[!UICONTROL (Beta) Add calculated field]**.

![Add calculated field to export](/help/destinations/assets/ui/export-arrays-calculated-fields/add-calculated-fields.png)

This opens a modal window where you can select attributes that you can use to export attributes out of Experience Platform.

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

* `join`
* `coalesce`
* `size_of`
* `iif`
* `index-based array access`
* `add_to_array`
* `to_array`
* `first`
* `last`
* `sha256`
* `md5`

## Examples of functions used to export arrays {#examples}

See examples and further information in the sections below for some of the functions listed above. For the rest of the listed functions, refer to the [general functions documentation in the Data Prep section](/help/data-prep/functions.md).

### `join` function to export arrays {#join-function-export-arrays}

Use the `join` function to concatenate the elements of an array into a string, using a desired separator, such as `_` or `|`.

For example, you can combine the following XDM fields below as shown in the mapping screenshot by using a `join('_',loyalty.loyaltyID)` syntax:

* `"organizations": ["Marketing","Sales,"Finance"]` array 
* `person.name.firstName` string 
* `person.name.lastName` string
* `personalEmail.address` string

![Mapping screenshot](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-join-function.png)

In this case, your output file looks like below. Notice how the three elements of the array are concatenated into a single string using the `_` character.

```
`First_Name,Last_Name,Organization
John,Doe,"Marketing_Sales_Finance"
```

### `coalesce` function to export arrays {#coalesce-function-export-arrays}

Use the `coalesce` function to access and export the first non-null element of an array into a string.

For example, you can combine the following XDM fields below as shown in the mapping screenshot by using a `coalesce(subscriptions.hasPromotion)` syntax to return the first true of false value in the array:

* `"subscriptions.hasPromotion": [null, true, null, false, true]` array 
* `person.name.firstName` string 
* `person.name.lastName` string
* `personalEmail.address` string

![Mapping screenshot for coalesce function](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-coalesce-function.png)

In this case, your output file looks like below. Notice how the first non-null `true` value in the array is exported in the file.

```
First_Name,Last_Name,hasPromotion
John,Doe,true
```


### `size_of` function to export arrays {#sizeof-function-export-arrays}

Use the `size_of` function to indicate how many elements exist in an array. For example, if you have a `purchaseTime` array object with multiple timestamps, you can use the `size_of` function to indicate how many separate purchases were made by a person. 

For example, you can combine the following XDM fields below as shown in the mapping screenshot.

* `"purchaseTime": ["1538097126","1569633126,"1601255526","1632791526","1664327526"]` array indicating five separate purchase times by the customer
* `personalEmail.address` string

![Mapping screenshot for size_of function](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-size-of-function.png)

In this case, your output file looks like below. Notice how the second column indicates the number of elements in the array, corresponding with the number of separate purchases made by the customer.

```
`Personal_Email,Times_Purchased
johndoe@acme.org,"5"
```

### Index-based array access {#index-based-array-access}

You can access an index of an array to export a single item from the array. For example, similar to the example above for the `size_of` function, if you are looking to access and export only the first time that a customer has purchased a certain product, you can use `purchaseTime[0]` to export the first element of the timestamp, `purchaseTime[1]` to export the second element of the timestamp, `purchaseTime[2]` to export the third element of the timestamp, and so on.

![Mapping screenshot for accessing index](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-index.png)

In this case, your output file looks like:

```
`Personal_Email,First_Purchase
johndoe@acme.org,"1538097126"
```

### `first` and `last` functions to export arrays {#first-and-last-functions-export-arrays}

Use the `first` and `last` functions to export the first or last element in an array. For example, continuing with the `purchaseTime` array object with multiple timestamps from the previous examples, you can use these to functions to export the first or the last purchase time made by a person. 

![Mapping screenshot for the first and last functions](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-first-last-functions.png)

In this case, your output file looks like:

```
`Personal_Email,First_Purchase, Last_Purchase
johndoe@acme.org,"1538097126","1664327526"
```

<!--

### `iif` function to export arrays {#iif-function-export-arrays}

Here are some examples of how you could use the `iif` function to access and export arrays and other fields: (STILL TO DO)

-->

### `md5` and `sha256` hashing functions {#hashing-functions}

In addition to the functions specific for exporting arrays or elements from an array, you can use hashing functions to hash attributes. For example, if you have any personally identifiable information in attributes, you can hash those fields when exporting them. 

You can hash string values directly, for example `md5(personalEmail.address)`. If desired, you can also hash individual elements of array fields, like this: `md5(purchaseTime[0])`



