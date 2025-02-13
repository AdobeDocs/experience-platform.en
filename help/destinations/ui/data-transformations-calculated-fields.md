---
title: Perform transformations on data exported to cloud storage destinations using calculated fields
type: Tutorial
description: Understand how to use the calculated fields functionality to perform transformations on data exported to cloud storage destinations
---
# Perform transformations on data exported to cloud storage destinations using calculated fields {#data-transformation-calculated-fields}

>[!CONTEXTUALHELP]
>id="platform_destinations_export_arrays_flat_files"
>title="Add calculated fields"
>abstract="<p>Use the **Add calculated field** control to perform various data transformations on data exported to cloud storage destinations. For example, you can apply hashing to data, concatenate arrays into strings, and more."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/activate/export-arrays-calculated-fields.html#examples" text="Examples"
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/activate/export-arrays-calculated-fields.html#known-limitations" text="Known limitations"

>[!AVAILABILITY]
>
>The functionality to perform transformations on data exported to cloud storage destinations is generally available for the following destinations: [[!DNL Azure Data Lake Storage Gen2]](../../destinations/catalog/cloud-storage/adls-gen2.md), [[!DNL Data Landing Zone]](../../destinations/catalog/cloud-storage/data-landing-zone.md), [[!DNL Google Cloud Storage]](../../destinations/catalog/cloud-storage/google-cloud-storage.md), [[!DNL Amazon S3]](../../destinations/catalog/cloud-storage/amazon-s3.md), [[!DNL Azure Blob]](../../destinations/catalog/cloud-storage/azure-blob.md), [[!DNL SFTP]](../../destinations/catalog/cloud-storage/sftp.md), as well as any custom partner-authored cloud storage destiations authored through [Destination SDK](/help/destinations/destination-sdk/overview.md).

To peform various transformations on data exported to cloud storage destinations, you must use the calculated fields functionality in the mapping step of the export workflow. For detailed information about calculated fields, visit the pages linked below. These include an introduction to calculated fields in Data Prep and more information about all the available functions: 

* [UI guide and overview](/help/data-prep/ui/mapping.md#calculated-fields)
* [Data Prep functions](/help/data-prep/functions.md)

## Prerequisites {#prerequisites}

[Connect](/help/destinations/ui/connect-destination.md) to a desired cloud storage destination, progress through the [activation steps for cloud storage destinations](/help/destinations/ui/activate-batch-profile-destinations.md) and get to the [mapping](/help/destinations/ui/activate-batch-profile-destinations.md#mapping) step. 
 
## How to work with calculated fields {#how-to-export-calculated-fields}

>[!CONTEXTUALHELP]
>id="platform_destinations_export_arrays_control"
>title="Enable hierarchical output schema"
>abstract="Toggle this setting on to enable the export of arrays, maps, and objects to JSON or Parquet files."

>[!CONTEXTUALHELP]
>id="platform_destinations_export_arrays_calculated_field_disabled"
>title="Add calculated fields disabled"
>abstract="This control is disabled because you selected the **Export arrays, maps, objects** toggle *on* when setting up this destination connection. To use calculated fields and the functions available within, set up a new destination connection with the **Export arrays, maps, objects** toggle *off*."

In the mapping step of the activation workflow for cloud storage destinations, select **[!UICONTROL Add calculated field]**.

>[!TIP]
>
>The add calculated field control is disabled for destination connections where the **[!UICONTROL Export arrays, maps, and objects]** control was toggled off. [Read more](/help/destinations/ui/export-arrays-calculated-fields.md#export-arrays-maps-objects-toggle).

![Add calculated field highlighted in the mapping step of the batch activation workflow.](/help/destinations/assets/ui/export-arrays-calculated-fields/add-calculated-fields.png)

This opens a modal window where you can select functions and fields to export attributes out of Experience Platform.

![Modal window of the calculated field functionality with no function selected yet.](/help/destinations/assets/ui/export-arrays-calculated-fields/add-calculated-fields-2.png)

For example, use the `array_to_string` function on the `organizations` field as shown below to export the organizations array as a string in a CSV file. View [more information about this and other examples further below](#array-to-string-function-export-arrays). 

![Modal window of the calculated field functionality with the array-to-string function selected.](/help/destinations/assets/ui/export-arrays-calculated-fields/add-calculated-fields-3.png)

Select **[!UICONTROL Save]** to keep the calculated field and return to the mapping step.

![Modal window of the calculated field functionality with the array-to-string function selected and the Save control highlighted.](/help/destinations/assets/ui/export-arrays-calculated-fields/save-calculated-field.png)

Back in the mapping step of the workflow, fill in the **[!UICONTROL Target field]** with a value of the column header you want for this field in the exported files.

![Mapping step with the target field highlighted.](/help/destinations/assets/ui/export-arrays-calculated-fields/fill-in-target-field.png)

![Select target field 2](/help/destinations/assets/ui/export-arrays-calculated-fields/target-field-filled-in.png)

When ready, select **[!UICONTROL Next]** to proceed to the next step of the activation workflow.

![Mapping step with the target field highlighted and a target value filled in.](/help/destinations/assets/ui/export-arrays-calculated-fields/select-next-to-proceed.png)

## Sample supported functions to perform data transfomations {#supported-functions}

All the documented [Data Prep functions](/help/data-prep/functions.md) are supported when activating data to file-based destinations. 

The functions below, specific to handling exports of arrays, are documented along with examples.

* `array_to_string`
* `flattenArray`
* `filterArray`
* `transformArray`
* `coalesce`
* `size_of`
* `iif`
* `index-based array access`
* `add_to_array`
* `to_array`
* `first`
* `last`

## Examples of functions used to perform data transformations {#examples}

See examples and further information in the sections below for some of the functions listed above. For the rest of the listed functions, refer to the [general functions documentation in the Data Prep section](/help/data-prep/functions.md).

### `array_to_string` function to export arrays {#array-to-string-function-export-arrays}

Use the `array_to_string` function to concatenate the elements of an array into a string, using a desired separator, such as `_` or `|`.

For example, you can combine the following XDM fields below as shown in the mapping screenshot by using an `array_to_string('_',organizations)` syntax:

* `organizations` array 
* `person.name.firstName` string 
* `person.name.lastName` string
* `personalEmail.address` string

![Mapping example including the array_to_string function.](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-array-to-string-function.png)

In this case, your output file looks like below. Notice how the elements of the array are concatenated into a single string using the `_` character.

```
First_Name,Last_Name,Personal_Email,Organization
John,Doe,johndoe@acme.org, "{'id':123,'orgName':'Acme Inc','founded':1990,'latestInteraction':1708041600000}_{'id':456,'orgName':'Superstar Inc','founded':2004,'latestInteraction':1692921600000}_{'id':789,'orgName':'Energy Corp','founded':2021,'latestInteraction':1725753600000}"
```

### `filterArray` function to export filtered arrays

Use the `filterArray` function to filter the elements of an exported array. You can combine this function with the `array_to_string` function described further above.

Continuing with the `organizations` array object from above, you can write a function like `array_to_string('_', filterArray(organizations, org -> org.founded > 2021))`, returning the organizations with a value for `founded` in the year 2021 or more recent.

![Example of the filterArray function.](/help/destinations/assets/ui/export-arrays-calculated-fields/filter-array-function.png)

In this case, your output file looks like below. Notice how the two elements of the array that meet the criterion are concatenated into a single string using the `_` character.

```
John,Doe,johndoe@acme.org, "{'id':123,'orgName':'Acme Inc','founded':1990,'latestInteraction':1708041600000}_{'id':789,'orgName':'Energy Corp','founded':2021,'latestInteraction':1725753600000}"
```

### `transformArray` function to export transformed arrays

Use the `transformArray` function to transform the elements of an exported array. You can combine this function with the `array_to_string` function described further above.

Continuing with the `organizations` array object from above, you can write a function like `array_to_string('_', transformArray(organizations, org -> ucase(org.orgName)))`, returning the names of the organizations converted to all uppercase.

![Example of the transformArray function.](/help/destinations/assets/ui/export-arrays-calculated-fields/transform-array-function.png)

In this case, your output file looks like below. Notice how the three elements of the array are transformed and concatenated into a single string using the `_` character.

```
John,Doe,johndoe@acme.org,ACME INC_SUPERSTAR INC_ENERGY CORP
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

Use the `add_to_array` function to add elements to an exported array. You can combine this function with the `array_to_string` function described further above.

Continuing with the `organizations` array object from above, you can write a function like `source: array_to_string('_', add_to_array(organizations,"2023"))`, returning the organizations that a person is a member of in the year 2023.

![Mapping example including the add_to_array function.](/help/destinations/assets/ui/export-arrays-calculated-fields/mapping-add-to-array-function.png)

In this case, your output file looks like below. Notice how the three elements of the array are concatenated into a single string using the `_` character and 2023 is also appended at the end of the string.

```
`First_Name,Last_Name,Personal_Email,Organization_Member_2023
John,Doe, johndoe@acme.org,"Marketing_Sales_Finance_2023"
```

### `flattenArray` function to export flattened arrays

Use the `flattenArray` function to flatten an exported multidimensional array. You can combine this function with the `array_to_string` function described further above.

Continuing with the `organizations` array object from above, you can write a function like `array_to_string('_', flattenArray(organizations))`. Note that the `array_to_string` function flattens the input array by default into a string.

The resulting output is the same as for the `array_to_string` function described further above.

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

>[!IMPORTANT]
>
>Unlike the other functions described on this page, to export individual elements of an array, you *do not need* to use the **[!UICONTROL Calculated fields]** control in the UI.

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

Other available functions are specific for exporting arrays or elements from an array. You can use hashing functions to hash attributes in the exported files. For example, if you have any personally identifiable information in attributes, you can hash those fields when exporting them. 

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
