---
title: Export datasets to cloud storage destinations
type: Tutorial
description: Learn how to export datasets from Adobe Experience Platform to your preferred cloud storage location.

---
# (Beta) Export datasets to destinations

>[!IMPORTANT]
>
>* The functionality to export datasets is currently in Beta and is not available to all users. The documentation and the functionality are subject to change.
>* This functionality is only available to customers who have purchased the xxxxxx package. Please contact your Adobe representative for more information. 

This article explains the workflow required to export [datasets](/help/catalog/datasets/overview.md) from Adobe Experience Platform to your preferred cloud storage or email marketing location, such as Amazon S3, SFTP locations, or Google Cloud Storage.

## When to activate segments or export datasets

Some destinations in the Experience Platform catalog support both segment activation and dataset export. 

* Consider activating segments when you want your data structured into profiles grouped by audience interests or qualifications. 
* On the other hand, consider dataset exports when you are looking to export raw dataset data, which is not grouped or structured by audience interests or qualifications. You could use this data for reporting, data science tasks, to satisfy compliance requirements, and many other use cases.

If you are looking to export datasets, this document has all the information you need. If you are looking to activate segments to cloud storage or email marketing destinations, read [Activate audience data to batch profile export destinations](/help/destinations/ui/activate-batch-profile-destinations.md).

## Prerequisites {#prerequisites}

To export datasets to cloud storage destinations, you must have successfully [connected to a destination](./connect-destination.md). If you haven't done so already, go to the [destinations catalog](../catalog/overview.md), browse the supported destinations, and configure the destination that you want to use.

### Required permissions {#permissions}

To export datasets, you need the INSERT REQUIRED PERMISSIONS **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate and Manage Datasets]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

When browsing the destinations catalog, you should see an **[!UICONTROL Activate]** or an **[!UICONTROL Export datasets]** control for a destination. This means that you have the necessary permissions to export datasets and that the destination supports exporting datasets.

## Select your destination {#select-destination}

To select the destination where to export datasets: 

1. Go to **[!UICONTROL Connections > Destinations]**, and select the **[!UICONTROL Catalog]** tab.
    
    ![Image showing the destination catalog tab.](/help/destinations/assets/ui/export-datasets/catalog-tab.png)

2. Select **[!UICONTROL Activate]** or **[!UICONTROL Export datasets]** on the card corresponding to the destination where you want to export datasets, as shown in the image below.

    ![Image highlighting the activate control in the destinations catalog tab.](/help/destinations/assets/ui/export-datasets/activate-button.png)

3. Select **[!UICONTROL Data type Datasets]** and select the destination connection where you want to export datasets, then select **[!UICONTROL Next]**.

  >[!TIP]
  > 
  >If you want to set up a new destination to export datasets, select **[!UICONTROL Configure new destination]** to trigger the [Connect to destination](/help/destinations/ui/connect-destination.md) workflow. 

  ![Image showing a selection of two destinations that you can connect to.](/help/destinations/assets/ui/export-datasets/select-datatype-datasets.png)

4. Proceed to the next section to [select your datasets](#select-datasets) for export.

## Select your datasets {#select-datasets}

Use the check boxes to the left of the dataset names to select the datasets that you want to export to the destination, then select **[!UICONTROL Next]**.

![Image highlighting the checkboxes selection in the Select datasets step of the activation workflow.](/help/destinations/assets/ui/export-datasets/select-datasets.png)

## Schedule dataset export {#scheduling}

>[!CONTEXTUALHELP]
>id="platform_destinations_activate_datasets_exportoptions"
>title="File export options for datasets"
>abstract="Select **Export incremental files** to export only the data which was added to the dataset since the last export. <br> The first incremental file export includes all the data in the dataset, acting as a backfill. Future incremental files include only the data which was added to the dataset since the first export."

In the **[!UICONTROL Scheduling]** step, you can set a start date as well as an export cadence for your dataset exports.

The **[!UICONTROL Export incremental files]** option is automatically selected. This triggers an export where the first file is a full snapshot of the dataset and subsequent files are incremental additions to the dataset since the previous export.

>[!IMPORTANT]
>
>The first exported incremental file includes all existing data in the dataset, functioning as a backfill.

![Image of the UI with the Export incremental files toggle selected.](/help/destinations/assets/ui/export-datasets/export-incremental-datasets.png)

1. Use the **[!UICONTROL Frequency]** selector to select the export frequency:
    
    * **[!UICONTROL Daily]**: schedule incremental file exports once a day, every day, at the time you specify.
    * **[!UICONTROL Hourly]**: schedule incremental file exports every 3, 6, 8, or 12 hours.

2. Use the **[!UICONTROL Time]** selector to choose the time of day, in [!DNL UTC] format, when the export should take place.

3. Use the **[!UICONTROL Date]** selector to choose the interval when the export should take place. Note that in the beta version of the feature, it is not possible to set an end data for the exports. For more information, view the [known limitations](#known-limitations) section.

4. Select **[!UICONTROL Next]** to save the schedule and proceed to the **[!UICONTROL Review]** step.

>[!NOTE] 
> 
>For dataset exports, the files have a preset, default format, which cannot be modified. See the section [Verify successful dataset export](#verify) for examples of exported files.

## Review {#review}

On the **[!UICONTROL Review]** page, you can see a summary of your selection. Select **[!UICONTROL Cancel]** to break up the flow, **[!UICONTROL Back]** to modify your settings, or **[!UICONTROL Finish]** to confirm your selection and start exporting datasets to the destination.

<!--

>[!IMPORTANT]
>
>In this step, Adobe Experience Platform checks for data usage policy violations. Shown below is an example where a policy is violated. You cannot complete the segment activation workflow until you have resolved the violation. For information on how to resolve policy violations, see [Policy enforcement](../../rtcdp/privacy/data-governance-overview.md#enforcement) in the data governance documentation section.
 
![Image showing a data policy violation in the review step.](../assets/common/data-policy-violation.png)

If no policy violations have been detected, select **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination. 

-->

![Image showing the review step of the dataset export workflow.](/help/destinations/assets/ui/export-datasets/review.png)

## Verify successful dataset export {#verify}

When exporting datasets, Experience Platform creates a `.json` or `.parquet` file in the storage location that you provided. Expect a new file to be deposited in your storage location according to the export schedule you provided. The default file format is:
`<destinationName>_dataset<datasetID>_<timestamp-yyyymmddhhmmss>.csv`

Experience Platform creates a folder structure in the storage location you specified, where it will deposit exported dataset files. 

```
https://your-aws-bucket/testbucket/61008328d507a618a3a2a356/exportTime=20210913220707/part-00000-tid-5271363778445977593-ddb8f635-d35d-49df-9a12-0150c6a4cc9b-4-1-c000.snappy.parquet
```

/datasetID/exportTime/actualFile(s)

For example, if you selected a daily export and the file type `.json`, the files and the folder structure that you would receive on three consecutive days could look like this:

```console
/61008328d507a618a3a2a356/exportTime=20221120184500/part-00000-tid-5271363778445977593-ddb8f635-d35d-49df-9a12-0150c6a4cc9b-4-1-c000.snappy.json
/61008328d507a618a3a2a356/exportTime=20221121184500/part-00000-tid-5271363778445977593-ddb8f635-d35d-49df-9a12-0150c6a4cc9b-4-1-c000.snappy.json
/61008328d507a618a3a2a356/exportTime=20221121184500/part-00000-tid-5271363778445977593-ddb8f635-d35d-49df-9a12-0150c6a4cc9b-4-1-c000.snappy.json
```

In another example, if you selected an hourly export every four hours and the file type `.parquet`, the files that you would receive in three consecutive exports could look like this:

```console
Amazon_S3_dataset12341e18-abcd-49c2-836d-123c88e76c39_20220408061804.csv
Amazon_S3_dataset12341e18-abcd-49c2-836d-123c88e76c39_20220409052200.csv
Amazon_S3_dataset12341e18-abcd-49c2-836d-123c88e76c39_20220410061130.csv
```

Alongside these files, Experience Platform also deposits a manifest file for each export in the storage location. 

### Sample dataset files {#sample-files}

The presence of these files in your storage location is confirmation of successful export. To understand how the exported files are structured, you can download a sample [.parquet file](../assets/common/sample_export_file_segment12341e18-abcd-49c2-836d-123c88e76c39_20200408061804.csv) or [.json file](../assets/common/sample_export_file_segment12341e18-abcd-49c2-836d-123c88e76c39_20200408061804.csv). This sample file includes xxxx. 

## Remove dataset from destination {#remove-dataset}

To remove a dataset from an existing dataflow, follow the steps below:

1. Log in to the [Experience Platform UI](https://platform.adobe.com/) and select **[!UICONTROL Destinations]** from the left navigation bar. Select **[!UICONTROL Browse]** from the top header to view your existing destination dataflows.

    ![Browse destinations](../assets/ui/export-datasets/browse-dataset-connections.png)

    >[!TIP] 
    > 
    >Select the filter icon ![Filter-icon](../assets/ui/edit-activation/filter.png) on the top left to launch the sort panel. The sort panel provides a list of all your destinations. You can select more than one destination from the list to see a filtered selection of dataflows associated with the selected destination.

1. From the **[!UICONTROL Activation data]** column, select the datasets control to view all datasets mapped to this export dataflow.

    ![Select datasets control to view all datasets mapped to dataflow](../assets/ui/export-datasets/go-to-datasets-data.png)

1. The **[!UICONTROL Activation data]** page for the destination appears. Select **[!UICONTROL Remove dataset]** in the right rail to trigger the remove dataset confirmation dialog. 

    ![Select Remove dataset control in the right rail.](../assets/ui/export-datasets/remove-dataset-control.png)

1. In the confirmation dialog, select **[!UICONTROL Remove]** to immediately remove the dataset from exports to the destination. 

    ![Confirm dataset removal from dataflow.](../assets/ui/export-datasets/remove-dataset-confirm.png)

## Known limitations {#known-limitations}

Keep in mind the following limitations:

* There is currently a single permission that includes Manage and Activate permissions on datasets. These controls will be split up in the future to miror whats in Profile Activation
* Currently, you can only export incremental files and an end date cannot be selected for your dataset exports. 
* Exported filenames are currently not customizable
* The UI does not currently block you from deleting a dataset that is being exported to a destination. Do not delete any datasets that are being exported to destinations. [Remove the dataset](#remove-dataset) from a destination dataflow before deleting it.
* Monitoring numbers -- need to clarify monitoring known limitations
