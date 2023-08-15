---
title: SFTP connection
description: Create a live outbound connection to your SFTP server to periodically export delimited data files from Adobe Experience Platform.
exl-id: 27abfc38-ec19-4321-b743-169370d585a0
---
# SFTP connection

## Destination changelog {#changelog}

With the July 2023 Experience Platform release, the SFTP destination provides new functionality, as listed below:

* [!BADGE Beta]{type=Informative} [Dataset export support](/help/destinations/ui/export-datasets.md).
* Additional [file naming options](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling).
* Ability to set custom file headers in your exported files via the [improved mapping step](/help/destinations/ui/activate-batch-profile-destinations.md#mapping).
* [Ability to customize the formatting of exported CSV data files](/help/destinations/ui/batch-destinations-file-formatting-options.md).

## Overview {#overview}

Create a live outbound connection to your SFTP server to periodically export delimited data files from Adobe Experience Platform.

>[!IMPORTANT]
>
> While Experience Platform supports data exports to SFTP servers, the recommended cloud storage locations to export data are [!DNL Amazon S3] and [!DNL SFTP].

## Connect to SFTP through API or UI {#connect-api-or-ui}

* To connect to your SFTP storage location using the Platform user interface, read the sections [Connect to the destination](#connect) and [Activate audiences to this destination](#activate) below.
* To connect to your SFTP storage location programmatically, read the [Activate audiences to file-based destinations by using the Flow Service API tutorial](../../api/activate-segments-file-based-destinations.md).

## Supported audiences {#supported-audiences}

This section describes all the audiences that you can export to this destination.

This destination supports the activation of all audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).

*Additionally*, this destination also supports the activation of the audiences described in the table below.

| Audience type | Description | 
---------|----------|
| Custom uploads | Audiences [imported](../../../segmentation/ui/overview.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-frequency}

Refer to the table below for information about the destination export type and frequency.

| Item | Type | Notes |
---------|----------|---------|
| Export type | **[!UICONTROL Profile-based]** | You are exporting all members of a segment, together with the desired schema fields (for example: email address, phone number, last name), as chosen in the select profile attributes screen of the [destination activation workflow](../../ui/activate-batch-profile-destinations.md#select-attributes).|
| Export frequency | **[!UICONTROL Batch]** | Batch destinations export files to downstream platforms in increments of three, six, eight, twelve, or twenty-four hours. Read more about [batch file-based destinations](/help/destinations/destination-types.md#file-based).|

{style="table-layout:auto"}

![SFTP profile-based export type](../../assets/catalog/cloud-storage/sftp/catalog.png)

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authentication information {#authentication-information}

>[!CONTEXTUALHELP]
>id="platform_destinations_connect_sftp_rsa"
>title="RSA public key"
>abstract="Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. View an example of a correctly formatted key in the documentation link below."

>[!CONTEXTUALHELP]
>id="platform_destinations_connect_sftp_ssh"
>title="Private SSH key"
>abstract="The private SSH key must be an RSA-formatted, Base64-encoded string, and must not be password-protected."

If you select the **[!UICONTROL SFTP with password]** authentication type to connect to your SFTP location:

![SFTP destination basic authentication](../../assets/catalog/cloud-storage/sftp/stfp-basic-authentication.png)

* **[!UICONTROL Domain]**: The address of your SFTP storage location;
* **[!UICONTROL Username]**: The username to log into your SFTP storage location;
* **[!UICONTROL Port]**: The port used by your SFTP storage location;
* **[!UICONTROL Password]**: The password to log into your SFTP storage location.
* **[!UICONTROL Encryption key]**: Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. View an example of a correctly formatted encryption key in the image below.

  ![Image showing an example of a correctly formatted PGP key in the UI](../../assets/catalog/cloud-storage/sftp/pgp-key.png)


If you select the **[!UICONTROL SFTP with SSH key]** authentication type to connect to your SFTP location:

![SFTP destination SSH key authentication](../../assets/catalog/cloud-storage/sftp/sftp-ssh-key-authentication.png)

* **[!UICONTROL Domain]**: Fill in the IP address or the domain name of your SFTP account
* **[!UICONTROL Port]**: The port used by your SFTP storage location;
* **[!UICONTROL Username]**: The username to log into your SFTP storage location;
* **[!UICONTROL SSH Key]**: The private SSH key used to log into your SFTP storage location. The private key must be an RSA-formatted, Base64-encoded string, and must not be password-protected.
* **[!UICONTROL Encryption key]**: Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. View an example of a correctly formatted encryption key in the image below.

    ![Image showing an example of a correctly formatted PGP key in the UI](../../assets/catalog/cloud-storage/sftp/pgp-key.png)
    
### Destination details {#destination-details}

After establishing the authentication connection to the SFTP location, provide the following information for the destination:

![Available Destination details for SFTP destination](../../assets/catalog/cloud-storage/sftp/sftp-destination-details.png)

* **[!UICONTROL Name]**: enter a name that helps you identify this destination in the Experience Platform user interface;
* **[!UICONTROL Description]**: enter a description for this destination;
* **[!UICONTROL Folder path]**: enter the path to the folder in your SFTP location where the files will be exported.
* **[!UICONTROL File type]**: select the format Experience Platform should use for the exported files. When selecting the [!UICONTROL CSV] option, you can also [configure the file formatting options](../../ui/batch-destinations-file-formatting-options.md).
* **[!UICONTROL Compression format]**: select the compression type that Experience Platform should use for the exported files.
* **[!UICONTROL Include manifest file]**: toggle this option on if you'd like the exports to include a manifest JSON file that contains information abut the export location, export size, and more.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

See [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md) for instructions on activating audiences to this destination.

## (Beta) Export datasets {#export-datasets}

This destination supports dataset exports. For complete information on how to set up dataset exports, read the tutorials: 

* How to [export datasets using the Platform user interface](/help/destinations/ui/export-datasets.md). 
* How to [export datasets programmatically using the Flow Service API](/help/destinations/api/export-datasets.md).

## Exported data {#exported-data}

For [!DNL SFTP] destinations, Platform creates a `.csv` file in the storage location that you provided. For more information about the files, see [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md) in the audience activation tutorial.

## IP address allow list {#ip-address-allow-list}

Refer to [IP address allow list for SFTP destinations](ip-address-allow-list.md) if you need to add Adobe IPs to an allow list.
