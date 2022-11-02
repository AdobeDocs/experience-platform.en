---
keywords: SFTP;sftp
title: SFTP connection
description: Create a live outbound connection to your SFTP server to periodically export delimited data files from Adobe Experience Platform.
exl-id: 27abfc38-ec19-4321-b743-169370d585a0
---
# SFTP connection

## Destination changelog {#changelog}

>[!IMPORTANT]
>
>With the beta release of the export datasets functionality and the improved file export functionality, you may now be seeing two [!DNL SFTP] cards in the destinations catalog.
>* If you are already exporting files to the **[!UICONTROL SFTP]** destination: Please create new dataflows to the new **[!UICONTROL SFTP beta]** destination.
>* If you have not yet created any dataflows to the **[!UICONTROL SFTP]** destination, please use the new **[!UICONTROL SFTP beta]** card to export files to **[!UICONTROL SFTP]**.

![Image of the two SFTP destination cards in a side-by-side view.](/help/destinations/assets/catalog/cloud-storage/sftp/two-sftp-destination-cards.png)

Improvements in the new [!DNL SFTP] destination card include:

* [Dataset export support](/help/destinations/ui/export-datasets.md).
* Additional [file naming options](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling).
* Ability to set custom file headers in your exported files via the [improved mapping step](/help/destinations/ui/activate-batch-profile-destinations.md#mapping).
* [Ability to customize the formatting of exported CSV data files](/help/destinations/ui/batch-destinations-file-formatting-options.md).

## Overview {#overview}

Create a live outbound connection to your SFTP server to periodically export delimited data files from Adobe Experience Platform.

>[!IMPORTANT]
>
> While Experience Platform supports data exports to SFTP servers, the recommended cloud storage locations to export data are [!DNL Amazon S3] and [!DNL SFTP].

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
>abstract="Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. Your public key must be written as a Base64 encoded string."

>[!CONTEXTUALHELP]
>id="platform_destinations_connect_sftp_ssh"
>title="Private SSH key"
>abstract="The private SSH key must be formatted as a Base64-encoded string and must not be password-protected."

If you select the **[!UICONTROL Basic authentication]** type to connect to your SFTP location:

![SFTP destination basic authentication](../../assets/catalog/cloud-storage/sftp/stfp-basic-authentication.png)

* **[!UICONTROL Host]**: The address of your SFTP storage location;
* **[!UICONTROL Username]**: The username to log into your SFTP storage location;
* **[!UICONTROL Password]**: The password to log into your SFTP storage location.
* **[!UICONTROL Encryption key]**: Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. Your public key must be written as a [!DNL Base64-encoded] string. View an example of a correctly formatted, base64-encoded key in the documentation link below. The middle part is shortened for brevity.

![Image showing an example of a correctly formatted and base64-encrypted PGP key in the UI](../../assets/catalog/cloud-storage/sftp/pgp-key.png)


If you select the **[!UICONTROL SFTP with SSH key]** authentication type to connect to your SFTP location:

![SFTP destination SSH key authentication](../../assets/catalog/cloud-storage/sftp/sftp-ssh-key-authentication.png)

* **[!UICONTROL Domain]**: Fill in the IP address or the domain name of your SFTP account
* **[!UICONTROL Port]**: The port used by your SFTP storage location;
* **[!UICONTROL Username]**: The username to log into your SFTP storage location;
* **[!UICONTROL SSH Key]**: The private SSH key used to log into your SFTP storage location. The private key must be formatted as a Base64-encoded string and must not be password-protected.
* **[!UICONTROL Encryption key]**: Optionally, you can attach your RSA-formatted public key to add encryption to your exported files. Your public key must be written as a [!DNL Base64] encoded string.
  * Example: `----BEGIN PGP PUBLIC KEY BLOCK---- {Base64-encoded string} ----END PGP PUBLIC KEY BLOCK----`. See below an example of a correctly formatted PGP key, with the middle part shortened for brevity.

    ![PGP key](../../assets/catalog/cloud-storage/sftp/pgp-key.png)
    
### Destination details {#destination-details}

After establishing the authentication connection to the SFTP location, provide the following information for the destination:

![Available Destination details for SFTP destination](../../assets/catalog/cloud-storage/sftp/sftp-destination-details.png)

* **[!UICONTROL Name]**: enter a name that will help you identify this destination in the Experience Platform user interface;
* **[!UICONTROL Description]**: enter a description for this destination;
* **[!UICONTROL Folder path]**: enter the path to the folder in your SFTP location where the files will be exported.

## Activate segments to this destination {#activate}

>[!IMPORTANT]
> 
>To activate data, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

See [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md) for instructions on activating audience segments to this destination.

## (Beta) Export datasets {#export-datasets}

This destination supports dataset exports. For complete information on how to set up dataset exports, read the [export datasets tutorial](/help/destinations/ui/export-datasets.md).

## Exported data {#exported-data}

For [!DNL SFTP] destinations, Platform creates a `.csv` file in the storage location that you provided. For more information about the files, see [Activate audience data to batch profile export destinations](../../ui/activate-batch-profile-destinations.md) in the segment activation tutorial.

## IP address allow list

Refer to [IP address allow list for cloud storage destinations](ip-address-allow-list.md) if you need to add Adobe IPs to an allow list.
