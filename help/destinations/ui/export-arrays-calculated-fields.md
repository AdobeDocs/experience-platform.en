---
title: (Beta) Use calculated fields to export arrays in flat schema files
type: Tutorial
description: Learn how to use calculated fields to export arrays in flat schema files from Real-Time CDP to cloud storage destinations.
badge: Beta
exl-id: ff13d8b7-6287-4315-ba71-094e2270d039
---
# (Beta) Use calculated fields to export arrays in flat schema files {#use-calculated-fields-to-export-arrays-in-flat-schema-files} 

>[!CONTEXTUALHELP]
>id="platform_destinations_export_arrays_flat_files"
>title="(Beta) Export arrays support"
>abstract="Use the **Add calculated field** control to export simple arrays of int, string, or boolean values from Experience Platform to your desired cloud storage destination. Some limitations apply. View the documentation for extensive examples and supported functions."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/activate/export-arrays-calculated-fields.html#examples" text="Examples"
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/activate/export-arrays-calculated-fields.html#known-limitations" text="Known limitations"

>[!AVAILABILITY]
>
>* The functionality to export arrays through calculated fields is currently in Beta. The documentation and the functionality are subject to change.

Learn how to export arrays through calculated fields from Real-Time CDP in flat schema files to [cloud storage destinations](/help/destinations/catalog/cloud-storage/overview.md). Read this document to understand the use cases enabled by this functionality.

Get extensive information about calculated fields - what these are and why they matter. Read the pages linked below for an introduction to calculated fields in Data Prep and more information about all the available functions: 

* [UI guide and overview](/help/data-prep/ui/mapping.md#calculated-fields)
* [Data Prep functions](/help/data-prep/functions.md)

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

[Connect](/help/destinations/ui/connect-destination.md) to a desired cloud storage destination, progress through the [activation steps for cloud storage destinations](/help/destinations/ui/activate-batch-profile-destinations.md) and get to the [mapping](/help/destinations/ui/activate-batch-profile-destinations.md#mapping) step. 

## How to export calculated fields {#how-to-export-calculated-fields}

In the mapping step of the activation workflow for cloud storage destinations, select **[!UICONTROL (Beta) Add calculated field]**.

![Add calculated field highlighted in the mapping step of the batch activation workflow.](/help/destinations/assets/ui/export-arrays-calculated-fields/add-calculated-fields.png)

This opens a modal window where you can select attributes that you can use to export attributes out of Experience Platform.

>[!IMPORTANT]
>
>Only some of the fields from your XDM schema are available in the **[!UICONTROL Field]** view. You can see string values and arrays of string, int, and boolean values. For example, the `segmentMembership` array is not displayed, as it includes other array values.

![Modal window of the calculated field functionality with no function selected yet.](/help/destinations/assets/ui/export-arrays-calculated-fields/add-calculated-fields-2.png)

For example, use the `join` function on the `loyaltyID` field as shown below to export an array of loyalty IDs as a string concatenated with an underscore in a CSV file. View [more information about this and other examples further below](#join-function-export-arrays). 

![Modal window of the calculated field functionality with the join function selected.](/help/destinations/assets/ui/export-arrays-calculated-fields/add-calculated-fields-3.png)

Select **[!UICONTROL Save]** to keep the calculated field and return to the mapping step.

![Modal window of the calculated field functionality with the join function selected and the Save control highlighted.](/help/destinations/assets/ui/export-arrays-calculated-fields/save-calculated-field.png)

Back in the mapping step of the workflow, fill in the **[!UICONTROL Target field]** with a value of the column header you want for this field in the exported files.

![Mapping step with the target field highlighted.](/help/destinations/assets/ui/export-arrays-calculated-fields/fill-in-target-field.png)

![Select target field 2](/help/destinations/assets/ui/export-arrays-calculated-fields/target-field-filled-in.png)

When ready, select **[!UICONTROL Next]** to proceed to the next step of the activation workflow.

![Mapping step with the target field highlighted and a target value filled in.](/help/destinations/assets/ui/export-arrays-calculated-fields/select-next-to-proceed.png)

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

![Mapping example including the join function.](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-join-function.png)

In this case, your output file looks like below. Notice how the three elements of the array are concatenated into a single string using the `_` character.

```
`First_Name,Last_Name,Personal_Email,Organization
John,Doe,johndoe@acme.org, "Marketing_Sales_Finance"
```

### `iif` function to export arrays {#iif-function-export-arrays}

Use the `iif` function to export elements of an array under certain conditions. For example, continuing with the `organizations` array object from above, you can write a simple conditional function like `iif(organizations[0].equals("Marketing"), "isMarketing", "isNotMarketing")`.

![Mapping example including the iif function.](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-iif-function.png)

In this case, your output file looks like below. In this case, the first element of the array is Marketing, so the person is a member of the marketing department. 

```
`First_Name,Last_Name, Personal_Email, Is_Member_Of_Marketing_Dept
John,Doe, johndoe@acme.org, "isMarketing"
```

### `add_to_array` function to export arrays {#add-to-array-function-export-arrays}

Use the `add_to_array` function to add elements to an exported array. You can combine this function with the `join` function described further above.

Continuing with the `organizations` array object from above, you can write a function like `source: join('_', add_to_array(organizations,"2023"))`, returning the organizations that a person is a member of in the year 2023.

![Mapping example including the add_to_array function.](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-add-to-array-function.png)

In this case, your output file looks like below. Notice how the three elements of the array are concatenated into a single string using the `_` character and 2023 is also appended at the end of the string.

```
`First_Name,Last_Name,Personal_Email,Organization_Member_2023
John,Doe, johndoe@acme.org,"Marketing_Sales_Finance_2023"
```

### `coalesce` function to export arrays {#coalesce-function-export-arrays}

Use the `coalesce` function to access and export the first non-null element of an array into a string.

For example, you can combine the following XDM fields below as shown in the mapping screenshot by using a `coalesce(subscriptions.hasPromotion)` syntax to return the first `true` of `false` value in the array:

* `"subscriptions.hasPromotion": [null, true, null, false, true]` array 
* `person.name.firstName` string 
* `person.name.lastName` string
* `personalEmail.address` string

![Mapping example including the coalesce function.](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-coalesce-function.png)

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

![Mapping example including the size_of function.](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-size-of-function.png)

In this case, your output file looks like below. Notice how the second column indicates the number of elements in the array, corresponding with the number of separate purchases made by the customer.

```
`Personal_Email,Times_Purchased
johndoe@acme.org,"5"
```

### Index-based array access {#index-based-array-access}

You can access an index of an array to export a single item from the array. For example, similar to the example above for the `size_of` function, if you are looking to access and export only the first time that a customer has purchased a certain product, you can use `purchaseTime[0]` to export the first element of the timestamp, `purchaseTime[1]` to export the second element of the timestamp, `purchaseTime[2]` to export the third element of the timestamp, and so on.

![Mapping example showing how an element of an array can be accessed.](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-index.png)

In this case, your output file looks like below, exporting the first time that the customer has made a purchase:

```
`Personal_Email,First_Purchase
johndoe@acme.org,"1538097126"
```

### `first` and `last` functions to export arrays {#first-and-last-functions-export-arrays}

Use the `first` and `last` functions to export the first or last element in an array. For example, continuing with the `purchaseTime` array object with multiple timestamps from the previous examples, you can use these to functions to export the first or the last purchase time made by a person. 

![Mapping example including the first and last functions.](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-first-last-functions.png)

In this case, your output file looks like below, exporting the first and the last time that the customer has made a purchase:

```
`Personal_Email,First_Purchase, Last_Purchase
johndoe@acme.org,"1538097126","1664327526"
```

### Hashing functions {#hashing-functions}

In addition to the functions specific for exporting arrays or elements from an array, you can use hashing functions to hash attributes in the exported files. For example, if you have any personally identifiable information in attributes, you can hash those fields when exporting them. 

You can hash string values directly, for example `md5(personalEmail.address)`. If desired, you can also hash individual elements of array fields, assuming elements in the array are strings, like this: `md5(purchaseTime[0])`

The supported hashing functions are:

|Function | Sample expression |
|---------|----------|
| `sha1` | `sha1(organizations[0])` |
| `sha256` | `sha256(organizations[0])` |
| `sha512` | `sha512(organizations[0])` |
| `hash` | `hash("crc32", organizations[0], "UTF-8")` |
| `md5` |  `md5(organizations[0], "UTF-8")` |
| `crc32` | `crc32(organizations[0])` |

{style="table-layout:auto"}