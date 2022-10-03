---
title: Activate datasets to cloud storage destinations
type: Tutorial
description: Learn how to activate datasets from Adobe Experience Platform to your preferred cloud storage location.

---
# Activate datasets to destinations

This article explains the workflow required to export [datasets](/help/catalog/datasets/overview.md) from Adobe Experience Platform to your preferred cloud storage or email marketing location, such as Amazon S3, SFTP locations, or Oracle Eloqua.

## Activate segments or export data

Difference between exporting datasets and exporting segments. If you are looking to activate *segments* to cloud storage of email marketing destinations, read [Activate audience data to batch profile export destinations](/help/destinations/ui/activate-batch-profile-destinations.md).

You could export datasets instead of segments when you want to have a full set of data, not filtered by segments. 

## Prerequisites {#prerequisites}

To export datasets to cloud storage destinations, you must have successfully [connected to a destination](./connect-destination.md). If you haven't done so already, go to the [destinations catalog](../catalog/overview.md), browse the supported destinations, and configure the destination that you want to use.

### Required permissions {#permissions}

To activate datasets, you need the INSERT REQUIRED PERMISSIONS **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

When browsing the destinations catalog, you should see an **[!UICONTROL Activate]** control for a destination. This means that you have the necessary permissions to export datasets and that the destination supports exporting datasets.

## Select your destination {#select-destination}

To select the destination where to export datasets: 

1. Go to **[!UICONTROL Connections > Destinations]**, and select the **[!UICONTROL Catalog]** tab.
    
    ![Image showing the destination catalog tab.](/help/destinations/assets/ui/activate-datasets/catalog-tab.png)

2. Select **[!UICONTROL Activate]** on the card corresponding to the destination where you want to export datasets, as shown in the image below.

    ![Image highlighting the activate control in the destinations catalog tab.](/help/destinations/assets/ui/activate-datasets/activate-button.png)

3. Select **[!UICONTROL Data type Datasets]** and select the destination connection where you want to export datasets, then select **[!UICONTROL Next]**.

  >[!TIP]
  > 
  >If you want to set up a new destination to export datasets, select **[!UICONTROL Configure new destination]** to trigger the [Connect to destination](/help/destinations/ui/connect-destination.md) workflow. 

  ![Image showing a selection of two destinations that you can connect to.](/help/destinations/assets/ui/activate-datasets/select-datatype-datasets.png)

4. Move to the next section to [select your segments](#select-segments).

## Select your datasets {#select-datasets}

Use the check boxes to the left of the dataset names to select the datasets that you want to export to the destination, then select **[!UICONTROL Next]**.

![Image highlighting the checkboxes selection in the Select datasets step of the activation workflow.](/help/destinations/assets/ui/activate-datasets/select-datasets.png)

## Schedule dataset export {#scheduling}

>[!CONTEXTUALHELP]
>id="platform_destinations_activate_datasets_exportoptions"
>title="File export options for datasets"
>abstract="Select **Export incremental files** to export only the data which was added to the dataset since the last export. <br> The first incremental file export includes all the data in the dataset, acting as a backfill. Future incremental files include only the data which was added to the dataset since the first export."

Select **[!UICONTROL Export incremental files]** to trigger an export where the first file is a full snapshot of the dataset, and subsequent files are incremental additions to the dataset since the previous export.

>[!IMPORTANT]
>
>The first exported incremental file includes all existing data in the dataset, functioning as a backfill.

![Image of the UI with the Export incremental files toggle selected.](/help/destinations/assets/ui/activate-datasets/export-incremental-datasets.png)

1. Use the **[!UICONTROL Frequency]** selector to select the export frequency:
    
    * **[!UICONTROL Daily]**: schedule incremental file exports once a day, every day, at the time you specify.
    * **[!UICONTROL Hourly]**: schedule incremental file exports every 3, 6, 8, or 12 hours.

2. Use the **[!UICONTROL Time]** selector to choose the time of day, in [!DNL UTC] format, when the export should take place.

3. Use the **[!UICONTROL Date]** selector to choose the interval when the export should take place. Best practice is to set your start and end date to line up with the duration of your campaigns in your downstream platforms.

      >[!IMPORTANT]
      >
      >The last day of the interval is not included in the exports. For example, if you select an interval of January 4 - 11, the last file export will take place on January 10th.

4. Select **[!UICONTROL Next]** to save the schedule and proceed to the **[!UICONTROL Review]** step.

>[!NOTE] 
> 
>For dataset exports, the files have a preset, default format, which cannot be modified. See the section [Verify successful dataset export](#verify) for examples of exported files.

## Review {#review}

On the **[!UICONTROL Review]** page, you can see a summary of your selection. Select **[!UICONTROL Cancel]** to break up the flow, **[!UICONTROL Back]** to modify your settings, or **[!UICONTROL Finish]** to confirm your selection and start exporting datasets to the destination.

>[!IMPORTANT]
>
>In this step, Adobe Experience Platform checks for data usage policy violations. Shown below is an example where a policy is violated. You cannot complete the segment activation workflow until you have resolved the violation. For information on how to resolve policy violations, see [Policy enforcement](../../rtcdp/privacy/data-governance-overview.md#enforcement) in the data governance documentation section.
 
![Image showing a data policy violation in the review step.](../assets/common/data-policy-violation.png)

If no policy violations have been detected, select **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination. 

![Image showing the review step of the dataset export workflow.](/help/destinations/assets/ui/activate-datasets/review.png)

## Verify successful dataset export {#verify}

For email marketing destinations and cloud storage destinations, Adobe Experience Platform creates a `.json` or `.parquet` file in the storage location that you provided. Expect a new file to be deposited in your storage location according to the export schedule you provided. The default file format is:
`<destinationName>_dataset<datasetID>_<timestamp-yyyymmddhhmmss>.csv`

For example, if you selected daily export and file type json, the files you would receive on three consecutive days could look like this:

```console
Amazon_S3_dataset12341e18-abcd-49c2-836d-123c88e76c39_20220408061804.csv
Amazon_S3_dataset12341e18-abcd-49c2-836d-123c88e76c39_20220409052200.csv
Amazon_S3_dataset12341e18-abcd-49c2-836d-123c88e76c39_20220410061130.csv
```

In another example, if you selected hourly export every four hours and file type parquet, the files you would receive in three consecutive exports could look like this:

```console
Amazon_S3_dataset12341e18-abcd-49c2-836d-123c88e76c39_20220408061804.csv
Amazon_S3_dataset12341e18-abcd-49c2-836d-123c88e76c39_20220409052200.csv
Amazon_S3_dataset12341e18-abcd-49c2-836d-123c88e76c39_20220410061130.csv
```

### Sample dataset files

The presence of these files in your storage location is confirmation of successful activation. To understand how the exported files are structured, you can download a sample [.parquet file](../assets/common/sample_export_file_segment12341e18-abcd-49c2-836d-123c88e76c39_20200408061804.csv) or [.json file](../assets/common/sample_export_file_segment12341e18-abcd-49c2-836d-123c88e76c39_20200408061804.csv). This sample file includes the profile attributes `person.firstname`, `person.lastname`, `person.gender`, `person.birthyear`, and `personalEmail.address`.
