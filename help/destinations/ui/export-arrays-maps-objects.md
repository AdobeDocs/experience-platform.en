---
title: Export arrays, maps, and objects from Real-Time CDP
type: Tutorial
description: Learn how to export arrays, maps, and objects from Real-Time CDP to cloud storage destinations.
exl-id: ff13d8b7-6287-4315-ba71-094e2270d039
---
# Export arrays, maps, and objects from Real-Time CDP {#export-arrays-cloud-storage}

>[!AVAILABILITY]
>
>The functionality to export arrays and other complex objects to cloud storage destinations is generally available for the following destinations: [[!DNL Azure Data Lake Storage Gen2]](../../destinations/catalog/cloud-storage/adls-gen2.md), [[!DNL Data Landing Zone]](../../destinations/catalog/cloud-storage/data-landing-zone.md), [[!DNL Google Cloud Storage]](../../destinations/catalog/cloud-storage/google-cloud-storage.md), [[!DNL Amazon S3]](../../destinations/catalog/cloud-storage/amazon-s3.md), [[!DNL Azure Blob]](../../destinations/catalog/cloud-storage/azure-blob.md), [[!DNL SFTP]](../../destinations/catalog/cloud-storage/sftp.md).
>
>Additionally, you can export map-type fields to the following destinations: [Amazon Kinesis](/help/destinations/catalog/cloud-storage/amazon-kinesis.md), [HTTP API](/help/destinations/catalog/streaming/http-destination.md), [Azure Event Hubs](/help/destinations/catalog/cloud-storage/azure-event-hubs.md), [Adobe Target](/help/destinations/catalog/personalization/adobe-target-connection.md).


Learn how to export arrays, maps, and objects from Real-Time CDP to [cloud storage destinations](/help/destinations/catalog/cloud-storage/overview.md). Additionally, you can export map-type fields to [enterprise destinations](/help/destinations/destination-types.md#advanced-enterprise-destinations) and limited [edge personalization destinations](/help/destinations/destination-types.md#edge-personalization-destinations). Read this document to understand the export workflow, the use cases enabled by this functionality, and known limitations. View the table below to understand the functionality available per destination type.

| Type of destination | Ability to export arrays, maps, and other custom objects |
|---|---|
| Adobe-authored cloud storage destinations (Amazon S3, Azure Blob, Azure Data Lake Storage Gen2, Data Landing Zone, Google Cloud Storage, SFTP) | Yes, with the Enable export of arrays, maps, and objects toggle turned ON when setting up a destination connection. |
| File-based email marketing destinations (Adobe Campaign, Oracle Eloqua, Oracle Responsys, Salesforce Marketing Cloud) | No |
| Existing custom partner-built cloud storage destinations (custom file-based destinations built via Destination SDK) | No |
| Enterprise destinations (Amazon Kinesis, Azure Event Hubs, HTTP API) | Partially. You can select and export map-type objects in the mapping step of the activation workflow. |
| Streaming destinations (for example: Facebook, Braze, Google Customer Match, and more) | No |
| Edge personalization destinations (Adobe Target) | Partially. You can select and export map-type objects in the mapping step of the activation workflow. |

{style="table-layout:auto"}

Consider this page your go-to place for anything that you want to know about exporting arrays, maps, and other object types from Experience Platform.

## Bottom line up front

Get the most important information about the functionality in this section, and continue below to the other sections in the document for detailed information.

* For cloud storage destinations, the ability to export arrays, maps, and objects depends on your selection of the **Export arrays, maps, objects** toggle. Read more about it [further down on the page](#export-arrays-maps-objects-toggle).
* You can export arrays, maps, and objects to cloud storage destinations in `JSON` and `Parquet` files. For enterprise and edge personalization destinations, the exported data type is `JSON`. People and prospect audiences are supported, account audiences are not.
* For file-based cloud storage destinations, you *can* export arrays, maps, and objects to CSV files, but only by using the calculated fields functionality and concatenating them into a string by using the `array_to_string` function.

## Arrays and other object types in Experience Platform {#arrays-strings-other-objects}

In Experience Platform, you can use [XDM schemas](/help/xdm/home.md) to manage different field types. Before support for array exports was added, you were able to export simple key-value pair type fields such as strings out of Experience Platform to your desired destinations. An example of such a field that was supported for export previously is `personalEmail.address`:`johndoe@acme.org`.

Other field types in Experience Platform include array fields. Read more about [managing array fields in the Experience Platform UI](/help/xdm/ui/fields/array.md). You can now export array objects such as the example below.

``` 
organizations = [{
  id: 123,
  orgName: "Acme Inc",
  founded: 1990,
  latestInteraction: "2024-02-16"
}, {
  id: 456,
  orgName: "Superstar Inc",
  founded: 2004,
  latestInteraction: "2023-08-25"
}, {
  id: 789,
  orgName: 'Energy Corp',
  founded: 2021,
  latestInteraction: "2024-09-08"
}]
```

In addition to arrays, you can also export maps and objects from Experience Platform to your desired cloud storage destination. Read more about [maps](/help/xdm/ui/fields/map.md) and [objects](/help/xdm/ui/fields/object.md) in Experience Platform.

## Prerequisites {#prerequisites}

[Connect](/help/destinations/ui/connect-destination.md) to a desired cloud storage destination, progress through the [activation steps for cloud storage destinations](/help/destinations/ui/activate-batch-profile-destinations.md) and get to the [mapping](/help/destinations/ui/activate-batch-profile-destinations.md#mapping) step. When connecting to the desired cloud destination, you must select the **[!UICONTROL Export arrays, maps, objects]** toggle on. Get more information in the section below.

>[!NOTE]
>
>For enterprise and edge personalization destinations, export support for map-type fields is available without the need to select an **[!UICONTROL Export arrays, maps, objects]** toggle on. This toggle is not available or required when connecting to these types of destinations.

## Export arrays, maps, objects toggle {#export-arrays-maps-objects-toggle}

>[!CONTEXTUALHELP]
>id="platform_destinations_export_arrays_maps_objects"
>title="Export arrays, maps, and objects"
>abstract="<p> Toggle this setting <b>on</b> to enable the export of arrays, maps, and objects to JSON or Parquet files. You can select these object types in the source field view of the mapping step. With the toggle on, you cannot use the calculated fields option in the mapping step.</p><p>With this toggle <b>off</b>, you can use the calculated fields option and apply various data transformation functions when activating audiences. However, you can <i>not</i> export arrays, maps, and objects to JSON or Parquet files and must configure a separate destination for that purpose.</p>"

When connecting to a file-based cloud storage destination, you can set the **[!UICONTROL Export arrays, maps, objects]** toggle on or off.

![Export arrays, maps, objects toggle shown with an on or off setting, as well as highlighting the popover.](/help/destinations/assets/ui/export-arrays-calculated-fields/export-objects-toggle.gif)

Toggle this setting **on** to enable the export of arrays, maps, and objects to JSON or Parquet files. You can select these object types in the source field view of the [mapping step](/help/destinations/ui/activate-batch-profile-destinations.md#mapping) when activating audiences to cloud storage destinations. However, with this setting on, you cannot use the calculated fields option to transform data on activation.

With this toggle **off**, you can use the calculated fields option and apply various data transformation functions when activating audiences. However, you can not export arrays, maps, and objects to JSON or Parquet files and must configure a separate destination for that purpose.

## Export arrays, maps, objects toggle *on* {#export-arrays-maps-objects-toggle-on}

With this setting on, you can export entire objects (for example `person.name`) and arrays by selecting them via the source field selector in the mapping step of the activation workflow.

![Select objects via source field selector in the mapping step of the activation workflow.](/help/destinations/assets/ui/export-arrays-calculated-fields/select-object.gif)

With this option selected, the user interface blocks users from using calculated fields, and the **[!UICONTROL Add calculated fields]** control is disabled, as shown below. To use calculated fields for data transformations, set up a destination connection with the toggle off.

![Calculated fields control disabled.](/help/destinations/assets/ui/export-arrays-calculated-fields/calculated-fields-disabled.png)

## Export arrays, maps, objects toggle *off* {#export-arrays-maps-objects-toggle-off}

With this option set to *off*, you can use the calculated fields option and apply various data transformation functions when activating audiences. However, you can not export arrays, maps, and objects to JSON or Parquet files and must configure a separate destination for that purpose.

You *can* export arrays, maps, and objects to CSV files by using the calculated fields functionality and concatenate them into a string by using the `array_to_string` function. [Read more](#array-to-string-function-export-arrays) about using that function.

Read more about working with calculated fields to [perform transformations on data exported to cloud storage destinations](/help/destinations/ui/data-transformations-calculated-fields.md).

## Sample exported files {#sample-exported-files}

By using this functionality, you can export Parquet and JSON files where the data preserves the structure from Experience Platform. View below an example of an exported JSON file.

+++ Select to view exported JSON file.

```json

{
  "person_name_firstName": "John",
  "person_name_lastName": "Smith",
  "_acmeinc_customer_hs_main_address_scalar": "Oak Avenue No 12",
  "_acmeinc_customer_hs_locations_array": [
    "home address 12",
    "office address 12"
  ],
  "_acmeinc_customer_hs_date_array": [
    "2024-11-14",
    "2024-11-15"
  ],
  "_acmeinc_customer_hs_customer_obj_emails_array0": "john.smith@example.com",
  "_acmeinc_customer_hs_customer_obj": {
    "emails_array": [
      "john.smith@example.com",
      "j.smith@example.com"
    ],
    "name_scalar": "John Smith"
  },
  "_acmeinc_customer_hs_addresses_array_obj": [
    {
      "is_primary": true,
      "streetName_scalar": "Maple Street",
      "streetNo_int": 12
    },
    {
      "is_primary": false,
      "streetName_scalar": "Pine Road",
      "streetNo_int": 45
    }
  ],
  "_acmeinc_customer_hs_addresses_array_obj0": {
    "is_primary": true,
    "streetName_scalar": "Maple Street",
    "streetNo_int": 12
  }
}

```

+++