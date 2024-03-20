---
title: Amazon S3 connection
description: Create a live outbound connection to your Amazon Web Services (AWS) S3 storage to periodically export CSV data files from Adobe Experience Platform into your own S3 buckets.
exl-id: 6a2a2756-4bbf-4f82-88e4-62d211cbbb38
---
# [!DNL Amazon S3] connection {#s3-connection}

## Destination changelog {#changelog}

+++ View changelog

 
|Release month|Update type|Description|
|---|---|---|
|January 2024| Functionality and documentation update | The Amazon S3 destination connector now supports a new assumed role authentication type. Read more about it in the [authentication section](#assumed-role-authentication). |
|July 2023|Functionality and documentation update| With the July 2023 Experience Platform release, the [!DNL Amazon S3] destination provides new functionality, as listed below: <br><ul><li>[Dataset export support](/help/destinations/ui/export-datasets.md)</li><li>Additional [file naming options](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling).</li><li>Ability to set custom file headers in your exported files via the [improved mapping step](/help/destinations/ui/activate-batch-profile-destinations.md#mapping).</li><li>[Ability to customize the formatting of exported CSV data files](/help/destinations/ui/batch-destinations-file-formatting-options.md).</li></ul> |

{style="table-layout:auto"}

+++

## Connect to your [!DNL Amazon S3] storage through API or UI {#connect-api-or-ui}

* To connect to your [!DNL Amazon S3] storage location using the Platform user interface, read the sections [Connect to the destination](#connect) and [Activate audiences to this destination](#activate) below.
* To connect to your [!DNL Amazon S3] storage location programmatically, read the guide on how to [activate audiences to file-based destinations by using the Flow Service API tutorial](../../api/activate-segments-file-based-destinations.md).

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
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen in the select profile attributes screen of the [destination activation workflow](../../ui/activate-batch-profile-destinations.md#select-attributes).|
| Export frequency | **[!UICONTROL Batch]** | Batch destinations export files to downstream platforms in increments of three, six, eight, twelve, or twenty-four hours. Read more about [batch file-based destinations](/help/destinations/destination-types.md#file-based).|

{style="table-layout:auto"}

![Amazon S3 profile-based export type highlighted in the UU.](../../assets/catalog/cloud-storage/amazon-s3/catalog.png)

## Export datasets {#export-datasets}

This destination supports dataset exports. For complete information on how to set up dataset exports, read the tutorials: 

* How to [export datasets using the Platform user interface](/help/destinations/ui/export-datasets.md). 
* How to [export datasets programmatically using the Flow Service API](/help/destinations/api/export-datasets.md).

## File format of the exported data {#file-format}

When exporting *audience data*, Platform creates a `.csv`, `parquet`, or `.json` file in the storage location that you provided. For more information about the files, see the [supported file formats for export](../../ui/activate-batch-profile-destinations.md#supported-file-formats-export) section in the audience activation tutorial.

When exporting *datasets*, Platform creates a `.parquet` or `.json` file in the storage location that you provided. For more information about the files, see the [verify successful dataset export](../../ui/export-datasets.md#verify) section in the export datasets tutorial.

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the destination configuration workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

>[!CONTEXTUALHELP]
>id="platform_destinations_connect_s3_rsa"
>title="RSA public key"
>abstract="Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. View an example of a correctly formatted key in the documentation link below."

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**. The Amazon S3 destination supports two authentication methods: 

* Access key and secret key authentication
* Assumed role authentication

#### Access key and secret key authentication

Use this authentication method when you want to input your Amazon S3 access key and secret key to allow Experience Platform to export data to your Amazon S3 properties.

![Image of the required fields when selecting access key and secret key authentication.](/help/destinations/assets/catalog/cloud-storage/amazon-s3/access-key-secret-key-authentication.png)

* **[!DNL Amazon S3] access key** and **[!DNL Amazon S3] secret key**: In [!DNL Amazon S3], generate an `access key - secret access key` pair to grant Platform access to your [!DNL Amazon S3] account. Learn more in the [Amazon Web Services documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html).
* **[!UICONTROL Encryption key]**: Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. View an example of a correctly formatted encryption key in the image below.

    ![Image showing an example of a correctly formatted PGP key in the UI.](../../assets/catalog/cloud-storage/sftp/pgp-key.png)

#### Assumed role {#assumed-role-authentication}

>[!CONTEXTUALHELP]
>id="platform_destinations_connect_s3_assumed_role"
>title="Assumed role authentication"
>abstract="Use this authentication type if you prefer not to share account keys and secret keys with Adobe. Instead, Experience Platform connects to your Amazon S3 location using role-based access. Paste the ARN of the role that you created in AWS for the Adobe user. The pattern is similar to `arn:aws:iam::800873819705:role/destinations-role-customer` "

![Image of the required fields when selecting assumed role authentication.](/help/destinations/assets/catalog/cloud-storage/amazon-s3/assumed-role-authentication.png)

Use this authentication type if you prefer not to share account keys and secret keys with Adobe. Instead, Experience Platform connects to your Amazon S3 location using role-based access. 

To do this, you need to create in the AWS console an assumed user for Adobe with the [right required permissions](#required-s3-permission) to write to your Amazon S3 buckets. Create a **[!UICONTROL Trusted entity]** in AWS with the Adobe account **[!UICONTROL 670664943635]**. For more information, refer to the [AWS documentation on creating roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html). 

* **[!DNL Role]**: Paste the ARN of the role that you created in AWS for the Adobe user. The pattern is similar to `arn:aws:iam::800873819705:role/destinations-role-customer`.
* **[!UICONTROL Encryption key]**: Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. View an example of a correctly formatted encryption key in the image below.

### Fill in destination details {#destination-details}

>[!CONTEXTUALHELP]
>id="platform_destinations_connect_s3_bucket"
>title="Bucket name"
>abstract="Must be between 3 and 63 characters long. Must begin and end with a letter or number. Must contain only lowercase letters, numbers, or hyphens ( - ). Must not be formatted as an IP address (for example, 192.100.1.1)."

>[!CONTEXTUALHELP]
>id="platform_destinations_connect_s3_folderpath"
>title="Folder path"
>abstract="Must contain only characters A-Z, a-z, 0-9 and can include the following special characters: `/!-_.'()"^[]+$%.*"`. To create a folder per audience file, insert the macro `/%SEGMENT_NAME%` or `/%SEGMENT_ID%` or `/%SEGMENT_NAME%/%SEGMENT_ID%` into the text field. Macros can only be inserted at the end of the folder path. View macro examples in the documentation."
>additional-url="https://experienceleague.adobe.com/docs/experience-platform/destinations/catalog/cloud-storage/overview.html#use-macros" text="Use macros to create a folder in your storage location"

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

* **[!UICONTROL Name]**: Enter a name that will help you identify this destination.
* **[!UICONTROL Description]**: Enter a description of this destination.
* **[!UICONTROL Bucket name]**: Enter the name of the [!DNL Amazon S3] bucket to be used by this destination.
* **[!UICONTROL Folder path]**: Enter the path to the destination folder that will host the exported files.
* **[!UICONTROL File type]**: Select the format Experience Platform should use for the exported files. When selecting the [!UICONTROL CSV] option, you can also [configure the file formatting options](../../ui/batch-destinations-file-formatting-options.md).
* **[!UICONTROL Compression format]**: Select the compression type that Experience Platform should use for the exported files.
* **[!UICONTROL Include manifest file]**: Toggle this option on if you'd like the exports to include a manifest JSON file that contains information about the export location, export size, and more. The manifest is named using the format `manifest-<<destinationId>>-<<dataflowRunId>>.json`. View a [sample manifest file](/help/destinations/assets/common/manifest-d0420d72-756c-4159-9e7f-7d3e2f8b501e-0ac8f3c0-29bd-40aa-82c1-f1b7e0657b19.json). The manifest file includes the following fields:
  * `flowRunId`: The [dataflow run](/help/dataflows/ui/monitor-destinations.md#dataflow-runs-for-batch-destinations) which generated the exported file. 
  * `scheduledTime`: The time in UTC when the file was exported. 
  * `exportResults.sinkPath`: The path in your storage location where the exported file is deposited. 
  * `exportResults.name`: The name of the exported file.
  * `size`: The size of the exported file, in bytes.

>[!TIP]
>
>In the connect destination workflow, you can create a custom folder in your Amazon S3 storage per exported audience file. Read [Use macros to create a folder in your storage location](overview.md#use-macros) for instructions.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

### Required [!DNL Amazon S3] permissions {#required-s3-permission}

To successfully connect and export data to your [!DNL Amazon S3] storage location, create an Identity and Access Management (IAM) user for [!DNL Platform] in [!DNL Amazon S3] and assign permissions for the following actions:

* `s3:DeleteObject`
* `s3:GetBucketLocation`
* `s3:GetObject`
* `s3:ListBucket`
* `s3:PutObject`
* `s3:ListMultipartUploadParts`

<!--

Commenting out this note, as write permissions are assigned through the s3:PutObject permission.

>[!IMPORTANT]
>
>Platform needs `write` permissions on the bucket object where the export files will be delivered.

-->

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

See [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md) for instructions on activating audiences to this destination.

## Validate successful data export {#exported-data}

To verify if data has been exported successfully, check your [!DNL Amazon S3] storage and make sure that the exported files contain the expected profile populations.

## IP address allowlist {#ip-address-allow-list}

Refer to the [IP address allowlist](ip-address-allow-list.md) article if you need to add Adobe IPs to an allowlist.