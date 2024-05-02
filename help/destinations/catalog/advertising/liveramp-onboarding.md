---
title: LiveRamp - Onboarding connection
description: Learn how to use the LiveRamp connector to onboard audiences from Adobe Real-Time Customer Data Platform to LiveRamp Connect.
last-substantial-update: 2023-07-26
exl-id: b8ce7ec2-7af9-4d26-b12f-d38c85ba488a
---
# [!DNL LiveRamp - Onboarding] connection {#liveramp-onboarding}

Use the [!DNL LiveRamp - Onboarding] connection to onboard audiences from Adobe Real-Time Customer Data Platform to [!DNL LiveRamp Connect].

## Use cases {#use-cases}

To help you better understand how and when you should use the [!DNL LiveRamp - Onboarding] destination, here is a sample use case that Adobe Experience Platform customers can solve by using this destination.

As a marketer, I want to send audiences from Adobe Experience Platform to onboard identities into [!DNL LiveRamp Connect] so that I can target users on mobile, open web, social, and [!DNL CTV] platforms, using the [!DNL Ramp ID] identifier. 

## Prerequisites {#prerequisites}

The [!DNL LiveRamp - Onboarding] connection exports files using [LiveRamp's SFTP](https://docs.liveramp.com/connect/en/upload-a-file-via-liveramp-s-sftp.html) storage.

Before you can send data from Experience Platform to [!DNL LiveRamp - Onboarding], you need your [!DNL LiveRamp] credentials. Please reach out to your [!DNL LiveRamp] representative to obtain your credentials, if you don't already have them.

## Supported identities {#supported-identities}

[!DNL LiveRamp - Onboarding] supports the activation of identities such as PII-based identifiers, known identifiers, and custom IDs, described in the official [LiveRamp documentation](https://docs.liveramp.com/connect/en/identity-and-identifier-terms-and-concepts.html#known-identifiers).

In the [mapping step](#map) of the activation workflow, you must define the target mappings as custom attributes.

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

| Audience origin | Supported | Description | 
---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| Custom uploads | ✓ | Audiences [imported](../../../segmentation/ui/overview.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Audience export]** | You are exporting all members of an audience with the identifiers (name, phone number, or others) used in the [!DNL LiveRamp - Onboarding] destination.|
| Export frequency | **[!UICONTROL Daily batch]** | As profiles are updated in Experience Platform based on audience evaluation, the profiles (identities) are updated once a day downstream to the destination platform. Read more about [batch file-based destinations](/help/destinations/destination-types.md#file-based).|

{style="table-layout:auto"}

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

**SFTP authentication with password** {#sftp-password}

![Sample screenshot showing how to authenticate to the destination using SFTP with password](../../assets/catalog/advertising/liveramp-onboarding/liveramp-sftp-password.png)

* **[!UICONTROL Port]**: The port used for your [!DNL LiveRamp - Onboarding] storage location.  Use the port that corresponds to your geographical location, as described below:
  * **[!UICONTROL NA]**: Use port `22`
  * **[!UICONTROL AU]**: Use port `2222`    
* **[!UICONTROL Username]**: The username for your [!DNL LiveRamp - Onboarding] storage location.
* **[!UICONTROL Password]**: The password for your [!DNL LiveRamp - Onboarding] storage location.
* **[!UICONTROL PGP/GPG encryption key]**: Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. View an example of a correctly formatted encryption key in the image below.
    ![Image showing an example of a correctly formatted PGP key in the UI](../../assets/catalog/advertising/liveramp-onboarding/pgp-key.png)
* **[!UICONTROL Subkey ID]**:If you provide an encryption key, you must also provide an encryption **[!UICONTROL Subkey ID]**. See the [!DNL LiveRamp] [encryption documentation](https://docs.liveramp.com/connect/en/encrypting-files-for-uploading.html#downloading-the-current-encryption-key) to learn how to obtain the subkey ID.

**SFTP with SSH key authentication** {#sftp-ssh}

![Sample screenshot showing how to authenticate to the destination using SSH key](../../assets/catalog/advertising/liveramp-onboarding/liveramp-sftp-ssh.png)

* **[!UICONTROL Port]**: The port used for your [!DNL LiveRamp - Onboarding] storage location.  Use the port that corresponds to your geographical location, as described below:
  * **[!UICONTROL EU]**: Use port `4222` 
* **[!UICONTROL Username]**: The username for your [!DNL LiveRamp - Onboarding] storage location.
* **[!UICONTROL SSH Key]**: The private [!DNL SSH] key used to log in to your [!DNL LiveRamp - Onboarding] storage location. The private key must be formatted as a [!DNL Base64]-encoded string and must not be password protected.

    * To connect your [!DNL SSH] key to the [!DNL LiveRamp - Onboarding] server, you must submit a ticket through [!DNL LiveRamp]'s technical support portal, and provide your public key. See more information in the [LiveRamp documentation](https://docs.liveramp.com/connect/en/upload-a-file-via-liveramp-s-sftp.html#upload-with-an-sftp-client).

* **[!UICONTROL PGP/GPG encryption key]**: Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. View an example of a correctly formatted encryption key in the image below.
    ![Image showing an example of a correctly formatted PGP key in the UI](../../assets/catalog/advertising/liveramp-onboarding/pgp-key.png)
* **[!UICONTROL Subkey ID]**:If you provide an encryption key, you must also provide an encryption **[!UICONTROL Subkey ID]**. See the [!DNL LiveRamp] [encryption documentation](https://docs.liveramp.com/connect/en/encrypting-files-for-uploading.html#downloading-the-current-encryption-key) to learn how to obtain the subkey ID.

### Fill in destination details {#destination-details}

>[!CONTEXTUALHELP]
>id="platform_destinations_liveramp_subkey"
>title="Encryption subkey ID"
>abstract="The subkey ID used for encryption, based on the LiveRamp public encryption key. This field is required if you provided an encryption key in the authentication step."
>additional-url="https://docs.liveramp.com/connect/en/encrypting-files-for-uploading.html#downloading-the-current-encryption-key" text="Learn how to obtain the subkey ID"

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Platform UI screenshot showing how to fill in details for your destination](../../assets/catalog/advertising/liveramp-onboarding/liveramp-sftp-destination-details.png)

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Region]**: Geographic region for your instance of the LiveRamp SFTP storage.
*  **[!UICONTROL Folder path]**: The path to the [!DNL LiveRamp] `uploads` subfolder that will host the exported files. The `uploads` prefix is automatically added to the folder path. [!DNL LiveRamp] recommends creating a dedicated subfolder for deliveries from Adobe Real-Time CDP to keep the files separate from any other existing feeds and to ensure all automation runs smoothly. 
    *  For example, if you want to export your files to `uploads/my_export_folder`, type in `my_export_folder` in the **[!UICONTROL Folder path]** field.
*  **[!UICONTROL Compression format]**: Select the compression type that Experience Platform should use for the exported files. Available options are **[!UICONTROL GZIP]** or **[!UICONTROL None]**.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, read the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate audience data to batch profile export destinations](/help/destinations/ui/activate-batch-profile-destinations.md) for instructions on activating audiences to this destination.

### Scheduling {#scheduling}

In the [!UICONTROL Scheduling] step, create an export schedule for each audience, with the settings shown below.

* **[!UICONTROL File export options]**: [!UICONTROL Export full files]. [Incremental file exports](../../ui/activate-batch-profile-destinations.md#export-incremental-files) are currently not supported for the [!DNL LiveRamp] destination.
* **[!UICONTROL Frequency]**: [!UICONTROL Daily]
* **[!UICONTROL Date]**: Select the export start and end times as you wish.

![Platform UI screenshot showing the audience scheduling step.](../../assets/catalog/advertising/liveramp-onboarding/liveramp_scheduling_screenshot.png)

The exported file name is currently not user-configurable. All files exported to the [!DNL LiveRamp - Onboarding] destination are automatically named based on the following template:

`%ORGANIZATION_NAME%_%DESTINATION%_%DESTINATION_INSTANCE_ID%_%DATETIME%`

![Platform UI screenshot showing the exported file name template.](../../assets/catalog/advertising/liveramp-onboarding/liveramp-file-name.png)

For example, the name of an exported file for an organization named [!DNL Luma] could look similar to this:

```json
Luma_LiveRamp_52137231-4a99-442d-804c-39a09ddd005d_20230330_153857.csv
```

### Map attributes and identities {#map}

In the **[!UICONTROL Mapping]** step, you can select which attributes and identities you want to export for your profiles.

>[!IMPORTANT]
>
>This destination supports the activation of one source identity namespace per activation flow. If you need to export multiple identity namespaces, like `Email` and `Phone`, you must [create a separate activation flow](../../ui/activate-batch-profile-destinations.md) for each identity.

In the **[!UICONTROL Mapping]** step, the **[!UICONTROL Target field]** mapping defines the name of the column header in the exported CSV file. You can change the CSV column headers in the exported file to any friendly name that you want, by providing a custom name for the **[!UICONTROL Target field]**.

>[!IMPORTANT]
>
>For any changes made to the target fields after your initial file delivery to [!DNL LiveRamp], please notify your [!DNL LiveRamp] account team or [submit a ticket to LiveRamp Support](https://docs.liveramp.com/connect/en/considerations-when-uploading-the-first-file-to-an-audience.html#creating-a-support-case) to ensure the changes are reflected in the automation process.

1. In the **[!UICONTROL Mapping]** step, select **[!UICONTROL Add new mapping]**. You will see a new mapping row on the screen.

    ![Experience Platform UI screeshot showing the Mapping screen.](../../assets/catalog/advertising/liveramp-onboarding/liveramp-add-new-mapping.png)

2. In the **[!UICONTROL Select source field]** window, choose the **[!UICONTROL Select attributes]** category and select the XDM attribute that you want to map, or choose the **[!UICONTROL Select identity namespace]** category and select an identity to map to your destination.
    
    ![Experience Platform UI screeshot showing the source Mapping screen.](../../assets/catalog/advertising/liveramp-onboarding/liveramp-source-mapping.png)

3. In the **[!UICONTROL Select target field]** window, enter the attribute name that you want to map the selected source field to. The attribute name defined here will reflect in the exported CSV file as a column header.

    ![Experience Platform UI screeshot showing the target Mapping screen.](../../assets/catalog/advertising/liveramp-onboarding/liveramp-target-mapping.png)
    
    You can also input the attribute name by typing it directly into the **[!UICONTROL Target field]**.
    
    ![Experience Platform UI screeshot showing the target Mapping screen.](../../assets/catalog/advertising/liveramp-onboarding/liveramp-target-field.png)

Once you've added all your desired mappings, select **[!UICONTROL Next]** and finish the activation workflow.

## Exported data / Validate data export {#exported-data}

Your data is exported to the [!DNL LiveRamp - Onboarding] storage location that you configured, as CSV files.

Exported files have a maximum size of 10 million rows. Experience Platform generates multiple files per delivery if the selected audiences exceed 10 million rows. If you expect to exceed the single file limit, contact your [!DNL LiveRamp] representative and ask them to configure batch ingestion for you.

When exporting files to the [!DNL LiveRamp - Onboarding] destination, Platform generates one CSV file for each [merge policy ID](../../../profile/merge-policies/overview.md).

For example, let's consider the following audiences:

* Audience A (Merge policy 1)
* Audience B (Merge policy 2)
* Audience C (Merge policy 1)
* Audience D (Merge policy 1)

Platform will export two CSV files to [!DNL LiveRamp - Onboarding]:

* One CSV file containing audiences A, C, and D;
* One CSV file containing audience B.

Exported CSV files contain profiles with the selected attributes and the corresponding audience status, on separate columns, with the attribute name, and `audience_namespace:audience_ID` pairs as column headers, as shown in the example below:

`ATTRIBUTE_NAME, AUDIENCE_NAMESPACE_1_AUDIENCE_ID_1, AUDIENCE_NAMESPACE_2_AUDIENCE_ID_2,..., AUDIENCE_NAMESPACE_X_AUDIENCE_ID_X`

The profiles included in the exported files can match one the following audience qualification statuses:

* `Active`: The profile is currently qualified for the audience.
* `Expired`: The profile is no longer qualified for the audience, but has qualified in the past.
* `""`(empty string): The profile never qualfied for the audience.

For instance, an exported CSV file with one `email` attribute, two audiences originating from the Experience Platform [Segmentation Service](../../../segmentation/home.md), and one [imported](../../../segmentation/ui/overview.md#importing-an-audience) external audience, could look like this:

```csv
email,ups_aa2e3d98-974b-4f8b-9507-59f65b6442df,ups_45d4e762-6e57-4f2f-a3e0-2d1893bcdd7f,CustomerAudienceUpload_7729e537-4e42-418e-be3b-dce5e47aaa1e
abc117@testemailabc.com,active,,
abc111@testemailabc.com,,,active
abc102@testemailabc.com,,,active
abc116@testemailabc.com,active,,
abc107@testemailabc.com,active,expired,active
abc101@testemailabc.com,active,active,
```

In the example above, the `ups_aa2e3d98-974b-4f8b-9507-59f65b6442df` and `ups_45d4e762-6e57-4f2f-a3e0-2d1893bcdd7f` sections describe audiences originating from the Segmentation Service, while `CustomerAudienceUpload_7729e537-4e42-418e-be3b-dce5e47aaa1e` describes an audience imported into Platform as a [custom upload](../../../segmentation/ui/overview.md#importing-an-audience).

Since Platform generates one CSV file for each [merge policy ID](../../../profile/merge-policies/overview.md), it also generates a separate dataflow run for each merge policy ID.

This means that the **[!UICONTROL Identities activated]** and **[!UICONTROL Profiles received]** metrics in the [dataflow runs](../../../dataflows/ui/monitor-destinations.md#dataflow-runs-for-batch-destinations) page are aggregated for each group of audiences that use the same merge policy, instead of being displayed for each audience.

As a consequence of dataflow runs being generated for a group of audiences that use the same merge policy, the audience names are not displayed in the [monitoring dashboard](../../../dataflows/ui/monitor-destinations.md#dataflow-runs-for-batch-destinations).

![Experience Platform UI screeshot showing the identities activated metric.](../../assets/catalog/advertising/liveramp-onboarding/liveramp-metrics.png)

## Upload exported data to LiveRamp {#upload-to-liveramp}

After your data was successfully exported to the [!DNL LiveRamp - Onboarding] storage, you must upload the data to the [!DNL LiveRamp] platform.

For more information on how to upload your files from the [!DNL LiveRamp - Onboarding] storage to a [!DNL LiveRamp] audience, see the following documentation: [Considerations When Uploading the First File to an Audience](https://docs.liveramp.com/connect/en/considerations-when-uploading-the-first-file-to-an-audience.html#considerations-when-uploading-the-first-file-to-an-audience).

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).

## Additional resources {#additional-resources}

For more details on how to configure your [!DNL LiveRamp - Onboarding] storage, see the [official documentation](https://docs.liveramp.com/connect/en/upload-a-file-via-liveramp-s-sftp.html).

## Changelog {#changelog}

This section captures the functionality and significant documentation updates made to this destination connector.

+++ View changelog

|Release month|Update type|Description|
|---|---|---|
|March 2024|Functionality and documentation update|<ul><li>Added support for deliveries to Europe and Australia [!DNL LiveRamp] [!DNL SFTP] instances.</li><li>Updated documentation to describe specific configurations for newly supported regions.</li><li>Increased maximum file size to 10 million rows (from 5 million, previously).</li><li>Updated documentation to reflect increased file sizes.</li></ul>|
|July 2023|Initial release|Initial destination release and documentation published.|

{style="table-layout:auto"}

+++
