---
title: Activate audiences to batch profile export destinations
type: Tutorial
description: Learn how to activate the audiences you have in Adobe Experience Platform by sending them to batch profile-based destinations.
exl-id: 82ca9971-2685-453a-9e45-2001f0337cda
---

# Activate audiences to batch profile export destinations

>[!IMPORTANT]
> 
> * To activate audiences and enable the [mapping step](#mapping) of the workflow, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions).
> * To activate audiences without going through the [mapping step](#mapping) of the workflow, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Segment without Mapping]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions).
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}
> 
> Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

## Overview {#overview}

This article explains the workflow required to activate audiences in Adobe Experience Platform to batch profile file-based destinations, such as cloud storage and email marketing destinations.

## Prerequisites {#prerequisites}

To activate audiences to destinations, you must have successfully [connected to a destination](./connect-destination.md). If you haven't done so already, go to the [destinations catalog](../catalog/overview.md), browse the supported destinations, and configure the destination that you want to use.

## Supported file formats for export {#supported-file-formats-export}

The following file formats are supported when exporting audiences:

* CSV
* JSON
* Parquet

Note that exporting CSV files gives you greater flexibility in terms of how you want to structure your exported files. Read more about [file formatting configuration for CSV files](/help/destinations/ui/batch-destinations-file-formatting-options.md#file-configuration).

Select your desired file format for export when [creating a connection to the file-based destination](/help/destinations/ui/connect-destination.md).

## Select your destination {#select-destination}

1. Go to **[!UICONTROL Connections > Destinations]**, and select the **[!UICONTROL Catalog]** tab.
    
    ![Image highlighting how to get to the destinations catalog tab.](../assets/ui/activate-batch-profile-destinations/catalog-tab.png)

1. Select **[!UICONTROL Activate audiences]** on the card corresponding to the destination where you want to activate your audiences, as shown in the image below.

    ![Activate audiences control highlighted in the catalo page.](../assets/ui/activate-batch-profile-destinations/activate-audiences-button.png)

1. Select the destination connection that you want to use to activate your audiences, then select **[!UICONTROL Next]**.

    ![Checkboxes highlighted to select one or multiple destinations to activate audiences to.](../assets/ui/activate-batch-profile-destinations/select-destination.png)

1. Move to the next section to [select your audiences](#select-audiences).

## Select your audiences {#select-audiences}

To select the audiences that you want to activate to the destination, use the check boxes to the left of the audience names, then select **[!UICONTROL Next]**.

You can select from multiple types of audiences, depending on their origin:

* **[!UICONTROL Segmentation Service]**: Audiences generated within Experience Platform by the Segmentation Service. See the [segmentation documentation](../../segmentation/ui/overview.md) for more details.
* **[!UICONTROL Custom upload]**: Audiences generated outside of Experience Platform, and uploaded into Experience Platform as CSV files. To learn more about external audiences, see the documentation on [importing an audience](../../segmentation/ui/audience-portal.md#import-audience). Selecting audiences originating from **[!UICONTROL Custom uploads]** automatically enables the [Select enrichment attributes](#select-enrichment-attributes) step.
* Other types of audiences, originating from other Adobe solutions, such as [!DNL Audience Manager].

>[!IMPORTANT]
>
>When activating custom upload audiences to batch file-based destinations, there is a limit of 10 such audiences that you can activate in a dataflow.

![Checkboxes shown when selecting one or multiple audiences to activate.](../assets/ui/activate-batch-profile-destinations/select-audiences.png)

>[!TIP]
>
>To remove audiences from existing activation flows, use the **[!UICONTROL Activation data]** page. Read the section on how to [remove multiple audiences from activation flows](../ui/destination-details-page.md#bulk-remove) for details.

## Schedule audience export {#scheduling}

>[!CONTEXTUALHELP]
>id="platform_destinations_activate_schedule"
>title="Schedule"
>abstract="Use the pencil icon to set the file export type (full files or incremental files) and the export frequency."

>[!CONTEXTUALHELP]
>id="platform_destinations_activate_schedule_weekly_messaging"
>title="Weekly exports"
>abstract="<sup>*</sup> Select the start date and subsequent exports will occur on that day of the week until the selected end date."

>[!CONTEXTUALHELP]
>id="platform_destinations_activate_schedule_monthly_messaging"
>title="Monthly exports"
>abstract="<sup>*</sup> Select the start date and subsequent exports will occur on that date of the month until the selected end date. For months with fewer than 30 or 31 days, the export occurs on the last day of the month."

[!DNL Adobe Experience Platform] exports data for email marketing and cloud storage destinations as [different file types](#supported-file-formats-export). In the **[!UICONTROL Scheduling]** page, you can configure the schedule and the file names for each audience you are exporting.

Experience Platform automatically sets a default schedule for each file export. You can modify the default schedule according to your needs, by selecting the pencil icon next to each schedule, and defining a custom schedule.

![Edit schedule control highlighted in the Scheduling step.](../assets/ui/activate-batch-profile-destinations/edit-default-schedule.png)

To edit multiple schedules at the same time, select the audiences by using the check boxes on the left side of the screen, then select **[!UICONTROL Edit schedule]**. The schedule you configure will then be applied to all the exported files for the selected audiences.

![Image of the Experience Platform user interface showing the edit schedule option for multiple selected audiences.](../assets/ui/activate-batch-profile-destinations/edit-schedule.png)

>[!TIP]
>
>You can edit audience activation schedules for existing activation flows from the **[!UICONTROL Activation data]** page. See the documentation on [bulk editing activation schedules](../ui/destination-details-page.md#bulk-edit-schedule) for details.

>[!IMPORTANT]
>
>[!DNL Adobe Experience Platform] automatically splits the export files at 5 million records (rows) per file. Each row represents one profile.
>
>Split file names are appended with a number that indicates the file is part of a larger export, as such: `filename.csv`, `filename_2.csv`, `filename_3.csv`.

### Export full files {#export-full-files}

>[!CONTEXTUALHELP]
>id="platform_destinations_activate_exportoptions"
>title="File export options"
>abstract="Select **Export full files** to export a complete snapshot of all the profiles that qualify for the audience. Select **Export incremental files** to export only the profiles which qualified for the audience since the last export. <br> The first incremental file export includes all profiles that qualify for the audience, acting as a backfill. Future incremental files include only the profiles which qualified for the audience since the first incremental file export."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/destinations/ui/activate/activate-batch-profile-destinations.html#export-incremental-files" text="Export incremental files"

>[!CONTEXTUALHELP]
>id="platform_destinations_activationchaining_aftersegmentevaluation"
>title="Activate after audience evaluation"
>abstract="<p>Activation runs immediately after the daily segmentation job completes. This ensures that the most up-to-date profiles are exported.</p><p>The option to export profiles after audience evaluation is <i>not</i> available for the weekly and monthly export frequency.</p>"

>[!CONTEXTUALHELP]
>id="platform_destinations_activationchaining_scheduled"
>title="Scheduled activation"
>abstract="Activation runs at a fixed time of the day."

Select **[!UICONTROL Export full files]** to trigger the export of a file containing a full snapshot of all profile qualifications for the selected audience.

![Export full files toggle selected.](../assets/ui/activate-batch-profile-destinations/export-full-files.png)

1. Use the **[!UICONTROL Frequency]** selector to select the export frequency:
    
    * **[!UICONTROL Once]**: schedule a one time on-demand full file export.
    * **[!UICONTROL Daily]**: schedule full file exports once a day, every day, at the time you specify.
    * **[!UICONTROL Weekly]**: select the start date and subsequent exports will occur on that day of the week until the selected end date.
    * **[!UICONTROL Monthly]**: select the start date and subsequent exports will occur on that date of the month until the selected end date. For months with fewer than 30 or 31 days, the export occurs on the last day of the month.

    >[!NOTE]
    >
    > Weekly and monthly scheduling options are currently supported only for the following file-based cloud storage destinations, and only when activating [people audiences](../../segmentation/types/overview.md#people-audience) and [prospect audiences](../../segmentation/types/overview.md#prospect-audience).
    > 
    > * [Amazon S3](../catalog/cloud-storage/amazon-s3.md)
    > * [Azure Blob Storage](../catalog/cloud-storage/azure-blob.md)
    > * [Data Landing Zone](../catalog/cloud-storage/data-landing-zone.md)
    > * [Google Cloud Storage](../catalog/cloud-storage/google-cloud-storage.md)
    > * [SFTP](../catalog/cloud-storage/sftp.md)
    > 
    > Weekly and monthly scheduling options are not available for other destination types.

2. Use the **[!UICONTROL Time]** toggle to select whether the export should happen immediately after audience evaluation or on a scheduled basis, at a specified time. When selecting the **[!UICONTROL Scheduled]** option, you can use the selector to choose the time of day, in [!DNL UTC] format, when the export should take place.

    Use the **[!UICONTROL After segment evaluation]** option to have the activation job run immediately after the daily Experience Platform batch segmentation job completes. This option ensures that when the activation job runs, the most up-to-date profiles are exported to your destination. This might result in an audience being exported multiple times a day, based on your actions.
    
    >[!IMPORTANT]
    >
    >If you run [flexible audience evaluation](../../segmentation/ui/audience-portal.md#flexible-audience-evaluation) on audiences which are already set to be activated after segment evaluation, the audiences will be activated as soon as the flexible audience evaluation job finishes, regardless of any previous daily activation jobs. This might result in audiences being exported multiple times a day, based on your actions.

    <!-- Batch segmentation currently runs at {{insert time of day}} and lasts for an average {{x hours}}. Adobe reserves the right to modify this schedule. -->

    ![Image highlighting the After segment evaluation option in the activation flow for batch destinations.](../assets/ui/activate-batch-profile-destinations/after-segment-evaluation-option.png)
    Use the **[!UICONTROL Scheduled]** option to have the activation job run at a fixed time. This option ensures that Experience Platform profile data is exported at the same time each day. However, the profiles you export may not be the most up to date, depending on whether the batch segmentation job has completed before the activation job kicks off.

    ![Image highlighting the Scheduled option in the activation flow for batch destinations and showing the time selector.](../assets/ui/activate-batch-profile-destinations/scheduled-option.png)

      >[!IMPORTANT]
      >
      >When mapping an audience which was created within the last 24 hours and evaluated through [batch segmentation](../../segmentation/methods/batch-segmentation.md), set your daily export schedule to start the following day at the earliest. This assures that the daily batch evaluation job runs first and you are exporting complete audience data.

3. Use the **[!UICONTROL Date]** selector to choose the day or interval when the export should take place. For daily exports, best practice is to set your start and end date to line up with the duration of your campaigns in your downstream platforms.

      >[!IMPORTANT]
      >
      > When selecting an export interval, the last day of the interval is not included in the exports. For example, if you select an interval of January 4 - 11, the last file export will take place on January 10.

4. Select **[!UICONTROL Create]** to save the schedule.

### Export incremental files

>[!CONTEXTUALHELP]
>id="platform_destinations_activate_something"
>title="Configure file name"
>abstract="For file-based destinations, a unique file name is generated per audience. Use the file name editor to create and edit a unique file name or keep the default name."

Select **[!UICONTROL Export incremental files]** to trigger an export where the first file is a full snapshot of all profile qualifications for the selected audience, and subsequent files are incremental profile qualifications since the previous export.

>[!IMPORTANT]
>
>The first exported incremental file includes all profiles that qualify for an audience, functioning as a backfill.

![Export incremental files toggle selected.](../assets/ui/activate-batch-profile-destinations/export-incremental-files.png)

1. Use the **[!UICONTROL Frequency]** selector to select the export frequency:
    
    * **[!UICONTROL Daily]**: schedule incremental file exports once a day, every day, at the time you specify.
    * **[!UICONTROL Hourly]**: schedule incremental file exports every 3, 6, 8, or 12 hours.
    

2. Use the **[!UICONTROL Time]** selector to choose the time of day, in [!DNL UTC] format, when the export should take place.

3. Use the **[!UICONTROL Date]** selector to choose the interval when the export should take place. Best practice is to set your start and end date to line up with the duration of your campaigns in your downstream platforms.

      >[!IMPORTANT]
      >
      >The last day of the interval is not included in the exports. For example, if you select an interval of January 4 - 11, the last file export will take place on January 10.

4. Select **[!UICONTROL Create]** to save the schedule.

### Configure file names {#configure-file-names}

>[!CONTEXTUALHELP]
>id="platform_destinations_activate_filename"
>title="Configure file name"
>abstract="For file-based destinations, a unique file name is generated per audience. Use the file name editor to create and edit a unique file name or keep the default name."

For most destinations, the default file names consist of destination name, audience ID, and a date and time indicator. For example, you can edit your exported file names to distinguish between different campaigns or to have the data export time appended to the files. Note that some destination developers might select to have different default file name append options shown for their destinations.

To open a modal window and edit the file names, select the pencil icon. File names are limited to 255 characters.

>[!NOTE]
>
>The image below shows how file names can be edited for [!DNL Amazon S3] destinations but the process is identical for all batch destinations (for example SFTP, [!DNL Azure Blob Storage], or [!DNL Google Cloud Storage]).

![Image highlighting the pencil icon, which is used to configure file names.](../assets/ui/activate-batch-profile-destinations/configure-name.png)

In the file name editor, you can select different components to add to the file name. 

![Image displaying all the available file name options.](../assets/ui/activate-batch-profile-destinations/activate-workflow-configure-step-2.png)

The destination name and audience ID cannot be removed from file names. In addition to these options, you can add the following options:

|File name option | Description |
|---------|----------|
| **[!UICONTROL Audience name]** | The name of the exported audience. |
| **[!UICONTROL Date and time]** | Select between adding a `MMDDYYYY_HHMMSS` format or a UNIX 10-digit timestamp of the time when the files are generated. Choose one of these options if you would like your files to have a dynamic file name generated with each incremental export. |
| **[!UICONTROL Custom text]** | Any custom text that you want to add to the file names. |
| **[!UICONTROL Destination ID]** | The ID of the destination dataflow you use to export the audience.  |
| **[!UICONTROL Destination name]** | The name of the destination dataflow you use to export the audience.  |
| **[!UICONTROL Organization name]** | Your organization name within Experience Platform. |
| **[!UICONTROL Sandbox name]** | The ID of the sandbox you use to export the audience. |

{style="table-layout:auto"}

To edit multiple file names at the same time, select the audiences by using the check boxes on the left side of the screen, then select **[!UICONTROL Edit file name]**. The file name options you configure will then be applied to all the exported files for the selected audiences.

![Image of the Experience Platform user interface showing the edit file name option for multiple selected audiences.](../assets/ui/activate-batch-profile-destinations/edit-file-name.png)

Select **[!UICONTROL Apply changes]** to confirm your selection.

>[!IMPORTANT] 
> 
>If you don't select the **[!UICONTROL Date and Time]** component, the file names will be static and the new exported file will overwrite the previous file in your storage location with each export. When running a recurring import job from a storage location into an email marketing platform, this is the recommended option.

Once you have finished configuring all your audiences, select **[!UICONTROL Next]** to continue.

## Mapping {#mapping}

In this step, you must select the profile attributes that you want to add to the files exported to the target destination. To select profile attributes and identities for export: 

1. In the **[!UICONTROL Mapping]** page, select **[!UICONTROL Add new mapping]**.
    
    ![Add new field control highlighted in the mapping workflow.](../assets/ui/activate-batch-profile-destinations/add-new-field-mapping.png)

1. Select the arrow to the right of the **[!UICONTROL Source field]** entry.

    ![Select source field control highlighted in the mapping workflow.](../assets/ui/activate-batch-profile-destinations/select-source-field.png)

1. In the **[!UICONTROL Select source field]** page, select the profile attributes and identities that you want to include in the exported files to the destination, then choose **[!UICONTROL Select]**.

    >[!TIP] 
    > 
    >You can use the search field to narrow down your selection, as shown in the image below.

    Use the **[!UICONTROL Show only fields with data]** toggle to only display schema fields populated with values. By default, only populated schema fields are shown.

    ![Modal window showing profile attributes that can be exported to the destination.](../assets/ui/activate-batch-profile-destinations/select-source-field-modal.png)


1. The field you selected for export now appears in the mapping view. If you wish, you can edit the name of the header in the exported file. To do this, select the icon on the target field.

    >[!NOTE]
    >
    >Dots (`.`) are not supported in field names in exported files. If a field name includes dots (such as `person.name.firstName`), each dot will be replaced with an underscore (`_`) in the exported column name. For example, `person.name.firstName` will become `person_name_firstName` in your exported file.

    ![Modal window showing profile attributes that can be exported to the destination.](../assets/ui/activate-batch-profile-destinations/mapping-step-select-target-field.png)

1. In the **[!UICONTROL Select target field]** page, type in the desired name of the header in your exported file, then choose **[!UICONTROL Select]**.

    ![Modal window showing a typed-in friendly name for a header.](../assets/ui/activate-batch-profile-destinations/select-target-field-mapping.png)

1. The field you selected for export now appears in the mapping view and shows the edited header in the exported file.

    ![Modal window showing profile attributes that can be exported to the destination.](../assets/ui/activate-batch-profile-destinations/select-target-field-updated.png)

1. (Optional) The order of the mapped fields in the UI reflects in the order of the columns in the exported CSV file, from top to bottom, with the top row being the leftmost column in the CSV file. You can reorder the mapped fields in any way you want, by dragging and dropping the mapping rows, as shown below. 

    >[!NOTE]
    >
    >This feature is in beta and only available to select customers. To request access to this feature, contact your Adobe representative.
    
    ![Recording showing the mapping fields reordering by drag and drop.](../assets/ui/activate-batch-profile-destinations/reorder-fields.gif)

1. (Optional) You can select your exported field to be a [mandatory key](#mandatory-keys) or a [deduplication key](#deduplication-keys).

    ![Modal window showing profile attributes that can be exported to the destination.](../assets/ui/activate-batch-profile-destinations/select-mandatory-deduplication-key.png)

1. To add more fields for exporting, repeat the steps above.

### Mandatory attributes {#mandatory-attributes}

>[!CONTEXTUALHELP]
>id="platform_destinations_activate_mandatorykey"
>title="About mandatory attributes"
>abstract="Select the XDM schema attributes that all exported profiles should include. Profiles without the mandatory key are not exported to the destination. Not selecting a mandatory key export all qualified profiles regardless of their attributes."

A mandatory attribute is a user-enabled checkbox which ensures all profile records contain the selected attribute. For example: all exported profiles contain an email address.​

You can mark attributes as mandatory to ensure that [!DNL Experience Platform] exports only the profiles that include the specific attribute. As a result, it can be used as an additional form of filtering. Marking an attribute as mandatory is **not** required.

Not selecting a mandatory attribute exports all qualified profiles regardless of their attributes.

It is recommended that one of the attributes is a [unique identifier](../../destinations/catalog/email-marketing/overview.md#identity) from your schema. For more information about mandatory attributes, see the identity section in the [Email marketing destinations](../../destinations/catalog/email-marketing/overview.md#identity) documentation. 

### Deduplication keys {#deduplication-keys}

>[!CONTEXTUALHELP]
>id="platform_destinations_activate_deduplicationkey"
>title="About deduplication keys"
>abstract="Eliminate multiple records of the same profile in the export files by selecting a deduplication key. Select a single namespace or up to two XDM schema attributes as a deduplication key. Not selecting a deduplication key may lead to duplicate profile entries in the export files."

A deduplication key is a user-defined primary key which determines the identity by which users want their profiles to be deduplicated.​

Deduplication keys eliminate the possibility of having multiple records of the same profile in one export file.

There are three ways you can use deduplication keys in [!DNL Experience Platform]:

* Using a single identity namespace as a [!UICONTROL deduplication key]
* Using a single profile attribute from an [!DNL XDM] profile as a [!UICONTROL deduplication key]
* Using a combination of two profile attributes from an [!DNL XDM] profile as a composite key

>[!IMPORTANT]
>
> You can export a single identity namespace to a destination, and the namespace is automatically set as deduplication key. Sending multiple namespaces to a destination is not supported.
> 
> You cannot use a combination of identity namespaces and profile attributes as deduplication keys.

### Deduplication example {#deduplication-example}

This example illustrates how deduplication works, depending on the selected deduplication keys.

Let's consider the following two profiles.

**Profile A**

```json
{
  "identityMap": {
    "Email": [
      {
        "id": "johndoe@example.com"
      },
      {
        "id": "doejohn_1@example.com"
      }
    ]
  },
  "segmentMembership": {
    "ups": {
      "fa5c4622-6847-4199-8dd4-8b7c7c7ed1d6": {
        "status": "realized",
        "lastQualificationTime": "2021-03-10 10:03:08"
      }
    }
  },
  "person": {
    "name": {
      "lastName": "Doe",
      "firstName": "John"
    }
  },
  "personalEmail": {
    "address": "johndoe@example.com"
  }
}
```

**Profile B**

```json
{
  "identityMap": {
    "Email": [
      {
        "id": "johndoe@example.com"
      },
      {
        "id": "doejohn_2@example.com"
      }
    ]
  },
  "segmentMembership": {
    "ups": {
      "fa5c4622-6847-4199-8dd4-8b7c7c7ed1d6": {
        "status": "realized",
        "lastQualificationTime": "2021-04-10 11:33:28"
      }
    }
  },
  "person": {
    "name": {
      "lastName": "D",
      "firstName": "John"
    }
  },
  "personalEmail": {
    "address": "johndoe@example.com"
  }
}
```

### Deduplication use case 1: no deduplication {#deduplication-use-case-1}

Using no deduplication, the export file would contain the following entries.

|personalEmail|firstName|lastName|
|---|---|---|
|johndoe@example.com|John|Doe|
|johndoe@example.com|John|D|


### Deduplication use case 2: deduplication based on identity namespace {#deduplication-use-case-2}

Assuming deduplication by the [!DNL Email] namespace, the export file would contain the following entries. Profile B is the latest one that qualified for the audience, so it is the only one getting exported.

|Email*|personalEmail|firstName|lastName|
|---|---|---|---|
|johndoe@example.com|johndoe@example.com|John|D|
|doejohn_2@example.com|johndoe@example.com|John|D|

### Deduplication use case 3: deduplication based on a single profile attribute {#deduplication-use-case-3}

Assuming deduplication by the `personal Email` attribute, the export file would contain the following entry. Profile B is the latest one that qualified for the audience, so it is the only one getting exported.

|personalEmail*|firstName|lastName|
|---|---|---|
|johndoe@example.com|John|D|


### Deduplication use case 4: deduplication based on two profile attributes {#deduplication-use-case-4}

Assuming deduplication by the composite key `personalEmail + lastName`, the export file would contain the following entries.

|personalEmail*|lastName*|firstName|
|---|---|---|
|johndoe@example.com|D|John|
|johndoe@example.com|Doe|John|

Adobe recommends selecting an identity namespace such as a [!DNL CRM ID] or email address as a deduplication key, to ensure all profile records are uniquely identified.

### Deduplication behavior for profiles with the same timestamp {#deduplication-same-timestamp}

When exporting profiles to file-based destinations, deduplication ensures that only one profile is exported when multiple profiles share the same deduplication key and the same reference timestamp. This timestamp represents the moment a profile's audience membership or identity graph was last updated. For more information on how profiles are updated and exported, see the [profile export behavior](https://experienceleague.adobe.com/en/docs/experience-platform/destinations/how-destinations-work/profile-export-behavior#what-determines-a-data-export-and-what-is-included-in-the-export-2) document.

#### Key considerations

* **Deterministic selection**: When multiple profiles have identical deduplication keys and the same reference timestamp, the deduplication logic determines which profile to export by sorting the values of other selected columns (excluding complex types such as arrays, maps, or objects). The sorted values are evaluated in lexicographical order, and the first profile is selected.

* **Example scenario**

Consider the following data, where the deduplication key is the `Email` column:

|Email*|first_name|last_name|timestamp|  
|---|---|---|---|  
|`test1@test.com`|John|Morris|2024-10-12T09:50|  
|`test1@test.com`|John|Doe|2024-10-12T09:50|  
|`test2@test.com`|Frank|Smith|2024-10-12T09:50|  

{style="table-layout:auto"}

After deduplication, the export file will contain:

|Email*|first_name|last_name|timestamp|  
|---|---|---|---|  
|`test1@test.com`|John|Doe|2024-10-12T09:50|  
|`test2@test.com`|Frank|Smith|2024-10-12T09:50|  

{style="table-layout:auto"}

**Explanation**: For `test1@test.com`, both profiles share the same deduplication key and timestamp. The algorithm sorts the `first_name` and `last_name` column values lexicographically. Since the first names are identical, the tie is resolved using the `last_name` column, where "Doe" comes before "Morris."

**Improved reliability**: This updated deduplication process ensures that successive runs with the same coordinates will always produce the same results, improving consistency.

### Perform data transformations through calculated fields {#calculated-fields}

You can use the [Calculated fields](/help/destinations/ui/data-transformations-calculated-fields.md) control to perform various data transformations on the data exported to file-based destinations. 

### Known limitations {#known-limitations}

The new **[!UICONTROL Mapping]** page has the following known limitations:

#### Audience membership attribute cannot be selected through the mapping workflow

Due to a known limitation, you cannot currently use the **[!UICONTROL Select field]** window to add `segmentMembership.seg_namespace.seg_id.status` to your file exports. Instead, you need to manually paste the value `xdm: segmentMembership.seg_namespace.seg_id.status` into the schema field, as shown below.

![Screen recording showing the audience membership workaround in the mapping step of the activation workflow.](../assets/ui/activate-batch-profile-destinations/segment-membership-mapping-step.gif)


>[!NOTE]
>
>For cloud storage destinations, the following attributes are added to the mapping by default:
>
>* `segmentMembership.seg_namespace.seg_id.status`
>* `segmentMembership.seg_namespace.seg_id.lastQualificationTime`

File exports will vary in the following ways, depending on whether `segmentMembership.seg_namespace.seg_id.status` is selected:

* If the `segmentMembership.seg_namespace.seg_id.status` field is selected, exported files include **[!UICONTROL Active]** members in the initial full snapshot and newly **[!UICONTROL Active]** and **[!UICONTROL Expired]** members in subsequent incremental exports.
* If the `segmentMembership.seg_namespace.seg_id.status` field is not selected, exported files include only **[!UICONTROL Active]** members in the initial full snapshot and in subsequent incremental exports.

Read more about [profile export behavior for file-based destinations](/help/destinations/how-destinations-work/profile-export-behavior.md#file-based-destinations).

#### Identity namespaces cannot currently be selected for exports

Selecting identity namespaces for export, as shown in the image below, is currently not supported. Selecting any identity namespaces for export will result in an error in the **[!UICONTROL Review]** step.

![Unsupported mapping showing identity exports.](../assets/ui/activate-batch-profile-destinations/unsupported-identity-mapping.png)

As a temporary workaround if you need to add identity namespaces to your exported files during the beta, you can either:
* Use the legacy cloud storage destinations for the dataflows where you want to include identity namespaces in the exports
* Upload identities as attributes into Experience Platform, to then export them to your cloud storage destinations.

## Select profile attributes {#select-attributes}

>[!IMPORTANT] 
> 
>All cloud storage destinations in the catalog can view an improved [[!UICONTROL Mapping] step](#mapping) which replaces the **[!UICONTROL Select attributes]** step described in this section. 
>
>This **[!UICONTROL Select attributes]** step is still displayed for the Adobe Campaign, Oracle Responsys, Oracle Eloqua, and Salesforce Marketing Cloud email marketing destinations.

For profile-based destinations, you must select the profile attributes that you want to send to the target destination.

1. In the **[!UICONTROL Select attributes]** page, select **[!UICONTROL Add new field]**.
    
    ![Image highlighting the Add new field button.](../assets/ui/activate-batch-profile-destinations/add-new-field.png)

2. Select the arrow to the right of the **[!UICONTROL Schema field]** entry.

    ![Image highlighting how to select a source field.](../assets/ui/activate-batch-profile-destinations/select-source-field.png)

3. In the **[!UICONTROL Select field]** page, select the XDM attributes or identity namespaces that you want to send to the destination, then choose **[!UICONTROL Select]**.

    ![Image showing the various fields available as source fields.](../assets/ui/activate-batch-profile-destinations/target-field-page.png)

4. To add more mappings, repeat steps one to three.

>[!NOTE] 
>
> Adobe Experience Platform prefills your selection with four recommended, commonly used attributes from your schema: `person.name.firstName`, `person.name.lastName`, `personalEmail.address`, `segmentMembership.seg_namespace.seg_id.status`.

![Image showing prefilled recommended attributes in the mapping step of the audience activation workflow.](../assets/ui/activate-batch-profile-destinations/prefilled-fields.png) 

>[!IMPORTANT] 
>
>Due to a known limitation, you cannot currently use the **[!UICONTROL Select field]** window to add `segmentMembership.seg_namespace.seg_id.status` to your file exports. Instead, you must manually paste the value `xdm: segmentMembership.seg_namespace.seg_id.status` into the schema field, as shown below.
>
>![Screen recording showing the audience membership workaround in the mapping step of the activation workflow.](../assets/ui/activate-batch-profile-destinations/segment-membership.gif)

File exports vary in the following ways, depending on whether `segmentMembership.seg_namespace.seg_id.status` is selected:

* If the `segmentMembership.seg_namespace.seg_id.status` field is selected, exported files include **[!UICONTROL Active]** members in the initial full snapshot and **[!UICONTROL Active]** and **[!UICONTROL Expired]** members in subsequent incremental exports.
* If the `segmentMembership.seg_namespace.seg_id.status` field is not selected, exported files include only **[!UICONTROL Active]** members in the initial full snapshot and in subsequent incremental exports.

## Select enrichment attributes {#select-enrichment-attributes}

>[!CONTEXTUALHELP]
>id="platform_destinations_activate_exclude_enrichment_attributes"
>title="Exclude enrichment attributes"
>abstract="Enable this option to export the profiles from the selected custom uploaded audiences to your destination, while excluding all of their attributes."

>[!IMPORTANT]
>
>This step is displayed only if you selected **[!UICONTROL Custom upload]** audiences during the [audience selection](#select-audiences) step.

Enrichment attributes correspond to custom uploaded audiences ingested in Experience Platform as **[!UICONTROL Custom uploads]**. In this step, you can select which attributes you would like to export to your destination, for each selected external audience.

![UI image showing the enrichment attributes selection step.](../assets/ui/activate-batch-profile-destinations/select-enrichment-attributes-step.png)

Follow the steps below to select enrichment attributes for each external audience:

1. In the **[!UICONTROL Enrichment attributes]** column, select the ![Edit button](/help/images/icons/edit.png) (Edit) button.
1. Select **[!UICONTROL Add enrichment attribute]**. A new empty schema field is shown.
  ![UI image showing the enrichment attributes modal screen.](../assets/ui/activate-batch-profile-destinations/add-enrichment-attribute.png)
1. Select the button to the right of the empty field to open the field selection screen.
1. Select the attributes that you want to export for the audience.
  ![UI image showing the enrichment attributes list.](../assets/ui/activate-batch-profile-destinations/select-enrichment-attributes.png)
1. After you have added all the attributes that you want to export, select **[!UICONTROL Save and close]**.
1. Repeat these steps for each external audience.

If you want to activate external audiences to your destinations without exporting any attribute, enable the **[!UICONTROL Exclude enrichment attributes]** toggle. This option exports the profiles from the external audiences, but none of their corresponding attributes are sent to your destination.

![UI image showing the exclude enrichment attributes toggle.](../assets/ui/activate-batch-profile-destinations/exclude-enrichment-attributes.png)

Select **[!UICONTROL Next]** to move to the [Review](#review) step.

## Review {#review}

>[!NOTE] 
> 
>If any data usage labels have been applied to certain fields within a dataset (rather than the entire dataset), enforcement of those field-level labels on activation occurs under the following conditions:
>
>* The fields are used in the audience definition.
>* The fields are configured as projected attributes for the target destination.
>
> For example, if the field `person.name.firstName` has certain data usage labels that conflict with the destination's marketing action, you would be shown a data usage policy violation in the review step. For more information, see [Data Governance in Adobe Experience Platform](../../rtcdp/privacy/data-governance-overview.md#destinations).

On the **[!UICONTROL Review]** page, you can see a summary of your selection. Select **[!UICONTROL Cancel]** to break up the flow, **[!UICONTROL Back]** to modify your settings, or **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination.

![Selection summary displayed in the review step.](../assets/ui/activate-batch-profile-destinations/review.png)

### Consent policy evaluation {#consent-policy-evaluation}

>[!CONTEXTUALHELP]
>id="platform_governance_policies_viewApplicableConsentPolicies"
>title="View applicable consent policies"
>abstract="If your organization purchased **Adobe Healthcare Shield** or **Adobe Privacy & Security Shield**, select **[!UICONTROL View applicable consent policies]** to see which consent policies are applied and how many profiles are included in the activation as a result of them. This control is disabled if your company does not have access to the SKUs mentioned above."

If your organization purchased **Adobe Healthcare Shield** or **Adobe Privacy & Security Shield**, select **[!UICONTROL View applicable consent policies]** to see which consent policies are applied and how many profiles are included in the activation as a result of them. Read about [consent policy evaluation](/help/data-governance/enforcement/auto-enforcement.md#consent-policy-evaluation) for more information.

### Data usage policy checks {#data-usage-policy-checks}

In the **[!UICONTROL Review]** step, Experience Platform also checks for any data usage policy violations. Shown below is an example where a policy is violated. You cannot complete the audience activation workflow until you have resolved the violation. For information on how to resolve policy violations, read about [data usage policy violations](/help/data-governance/enforcement/auto-enforcement.md#data-usage-violation) in the data governance documentation section.
 
![A data policy violation example shown in the activation workflow.](../assets/common/data-policy-violation.png)

### Filter audiences {#filter-audiences}

Also in this step you can use the available filters on the page to display only the audiences whose schedule or mapping has been updated as part of this workflow. You can also toggle which table columns you want to see. 

![Screen recording showing the available audience filters in the review step.](../assets/ui/activate-batch-profile-destinations/filter-audiences-batch-review.gif)

If you are satisfied with your selection and no policy violations have been detected, select **[!UICONTROL Finish]** to confirm your selection and start sending data to the destination. 

## Verify audience activation {#verify}

When exporting audiences to cloud storage destinations, Adobe Experience Platform creates a `.csv`, `.json`, or `.parquet` file in the storage location that you provided. Expect a new file to be created in your storage location according to the schedule you set in the workflow. The default file format is shown below, but you can [edit the components of the file name](#configure-file-names):
`<destinationName>_segment<segmentID>_<timestamp-yyyymmddhhmmss>.csv`

For example, if you selected a daily export frequency, the files you would receive on three consecutive days could look like this:

```console
Salesforce_Marketing_Cloud_segment12341e18-abcd-49c2-836d-123c88e76c39_20200408061804.csv
Salesforce_Marketing_Cloud_segment12341e18-abcd-49c2-836d-123c88e76c39_20200409052200.csv
Salesforce_Marketing_Cloud_segment12341e18-abcd-49c2-836d-123c88e76c39_20200410061130.csv
```

The presence of these files in your storage location is confirmation of successful activation. To understand how the exported files are structured, you can [download a sample .csv file](../assets/common/sample_export_file_segment12341e18-abcd-49c2-836d-123c88e76c39_20200408061804.csv). This sample file includes the profile attributes `person.firstname`, `person.lastname`, `person.gender`, `person.birthyear`, and `personalEmail.address`.
