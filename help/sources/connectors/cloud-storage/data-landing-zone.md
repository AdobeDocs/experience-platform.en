---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Data Landing Zone Source
description: Learn how to connect Data Landing Zone to Adobe Experience Platform
exl-id: bdc10095-7de4-4183-bfad-a7b5c89197e3
---
# [!DNL Data Landing Zone]

>[!IMPORTANT]
>
>This page is specific to the [!DNL Data Landing Zone] *source* connector in Experience Platform. For information on connecting to the [!DNL Data Landing Zone] *destination* connector, refer to the [[!DNL Data Landing Zone] destination documentation page](/help/destinations/catalog/cloud-storage/data-landing-zone.md).

[!DNL Data Landing Zone] is an [!DNL Azure Blob] storage interface provisioned by Adobe Experience Platform, granting you to access a secure, cloud-based file storage facility to bring files into Platform. You have access to one [!DNL Data Landing Zone] container per sandbox, and the total data volume across all containers is limited to the total data provided with your Platform Products and Services license. All customers of Platform and its application services such as [!DNL Customer Journey Analytics], [!DNL Journey Orchestration], [!DNL Intelligent Services], and [!DNL Adobe Real-Time Customer Data Platform] are provisioned with one [!DNL Data Landing Zone] container per sandbox. You can read and write file(s) to your container through [!DNL Azure Storage Explorer] or your command-line interface.

[!DNL Data Landing Zone] supports SAS-based authentication and its data is protected with standard [!DNL Azure Blob] storage security mechanisms at rest and in transit. SAS-based authentication allows you to securely access your [!DNL Data Landing Zone] container through a public internet connection. There are no network changes required for you to access your [!DNL Data Landing Zone] container, which means you do not need to configure any allow lists or cross-region setups for your network. Platform enforces a strict seven-day expiration time on all files uploaded to a [!DNL Data Landing Zone] container. All files are deleted after seven days.

## Naming constraints for files and directories

The following is a list of constraints that you must account for when naming your cloud storage files or directories.

- Directory and file component names cannot exceed 255 characters.
- Directory and file names cannot end with a forward slash (`/`). If provided, it will be automatically removed.
- The following reserved URL characters must be properly escaped: `! ' ( ) ; @ & = + $ , % # [ ]`
- The following characters are not allowed: `" \ / : | < > * ?`.
- Illegal URL path characters not allowed. Code points like `\uE000`, while valid in NTFS filenames, are not valid Unicode characters. In addition, some ASCII or Unicode characters, like control characters (such as `0x00` to `0x1F`, `\u0081`, and so on), are also not allowed. For rules governing Unicode strings in HTTP/1.1 see [RFC 2616, Section 2.2: Basic Rules](https://www.ietf.org/rfc/rfc2616.txt) and [RFC 3987](https://www.ietf.org/rfc/rfc3987.txt).
- The following file names are not allowed: LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, PRN, AUX, NUL, CON, CLOCK$, dot character (.), and two dot characters (..).

## Manage the contents of your Data Landing Zone{#manage-the-contents-of-your-data-landing-zone}

You can use [[!DNL Azure Storage Explorer]](https://azure.microsoft.com/en-us/features/storage-explorer/) to manage the contents of your [!DNL Data Landing Zone] container. 

In the [!DNL Azure Storage Explorer] UI, select the connection icon in the left-navigation. The **Select Resource** window appears, providing you with options to connect to. Select **[!DNL Blob container]** to connect to [!DNL Data Landing Zone].

![select-resource](../../images/tutorials/create/dlz/select-resource.png)

Next, select **Shared access signature URL (SAS)** as your connection method, and then select **Next**.

![select-connection-method](../../images/tutorials/create/dlz/select-connection-method.png)

After selecting your connection method, you must next provide a **display name** and the **[!DNL Blob] container SAS URL** that corresponds with your [!DNL Data Landing Zone] container.

>[!TIP]
>
>You can retrieve your [!DNL Data Landing Zone] credentials from the sources catalog in the Platform UI.

Provide your [!DNL Data Landing Zone] SAS URL and then select **Next**

![enter-connection-info](../../images/tutorials/create/dlz/enter-connection-info.png)

The **Summary** window appears, providing you with an overview of your settings, including information on your [!DNL Blob] endpoint and permissions. When ready, select **Connect**.

![summary](../../images/tutorials/create/dlz/summary.png)

A successful connection updates your [!DNL Azure Storage Explorer] UI with your [!DNL Data Landing Zone] container.

![dlz-user-container](../../images/tutorials/create/dlz/dlz-user-container.png)

With your [!DNL Data Landing Zone] container connected to [!DNL Azure Storage Explorer], you can now start uploading files to your [!DNL Data Landing Zone] container. To upload, select **Upload** and then select **Upload Files**.

![upload](../../images/tutorials/create/dlz/upload.png)

Once you have selected the file you want to upload, you must then identify the [!DNL Blob] type that you want to upload it as and your desired destination directory. When finished, select **Upload**.

| [!DNL Blob] types | Description |
| --- | --- |
| Block [!DNL Blob] | Block [!DNL Blobs] are optimized for uploading large amounts of data in an efficient manner. Block [!DNL Blobs] are the default option for [!DNL Data Landing Zone]. |
| Append [!DNL Blob] | Append [!DNL Blobs] are optimized for appending data to the end of the file. |

![upload-files](../../images/tutorials/create/dlz/upload-files.png)

## Upload files to your [!DNL Data Landing Zone] using the command line interface

You can also use the command line interface of your device and access upload files to your [!DNL Data Landing Zone].

### Upload a file using Bash

The following example uses Bash and cURL to upload a file to a [!DNL Data Landing Zone] with the [!DNL Azure Blob Storage] REST API:

```shell
# Set Azure Blob-related settings
DATE_NOW=$(date -Ru | sed 's/\+0000/GMT/')
AZ_VERSION="2018-03-28"
AZ_BLOB_URL="<URL TO BLOB ACCOUNT>"
AZ_BLOB_CONTAINER="<BLOB CONTAINER NAME>"
AZ_BLOB_TARGET="${AZ_BLOB_URL}/${AZ_BLOB_CONTAINER}"
AZ_SAS_TOKEN="<SAS TOKEN, STARTING WITH ? AND ENDING WITH %3D>"

# Path to the file we wish to upload
FILE_PATH="</PATH/TO/FILE>"
FILE_NAME=$(basename "$FILE_PATH")

# Execute HTTP PUT to upload file (remove '-v' flag to suppress verbose output)
curl -v -X PUT \
   -H "Content-Type: application/octet-stream" \
   -H "x-ms-date: ${DATE_NOW}" \
   -H "x-ms-version: ${AZ_VERSION}" \
   -H "x-ms-blob-type: BlockBlob" \
   --data-binary "@${FILE_PATH}" "${AZ_BLOB_TARGET}/${FILE_NAME}${AZ_SAS_TOKEN}"
```

### Upload a file using Python

The following example uses [!DNL Microsoft's] Python v12 SDK to upload a file to a [!DNL Data Landing Zone]:

>[!TIP]
>
>While the example below uses the full SAS URI to connect to an [!DNL Azure Blob] container, you can use other methods and operations to authenticate. See this [[!DNL Microsoft] document on Python v12 SDK](https://docs.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-python) for more information.

```py
import os
from azure.storage.blob import ContainerClient

try:
    # Set Azure Blob-related settings
    sasUri = "<SAS URI>"
    srcFilePath = "<FULL PATH TO FILE>" 
    srcFileName = os.path.basename(srcFilePath)

    # Connect to container using SAS URI
    containerClient = ContainerClient.from_container_url(sasUri)

    # Upload file to Data Landing Zone with overwrite enabled
    with open(srcFilePath, "rb") as fileToUpload:
        containerClient.upload_blob(srcFileName, fileToUpload, overwrite=True)

except Exception as ex:
    print("Exception: " + ex.strerror)
```

### Upload a file using [!DNL AzCopy]

The following example uses [!DNL Microsoft's] [!DNL AzCopy] utility to upload a file to a [!DNL Data Landing Zone]:

>[!TIP]
>
>While the example below is using the `copy` command, you can use other commands and options to upload a file to your [!DNL Data Landing Zone], using [!DNL AzCopy]. See this [[!DNL Microsoft AzCopy] document](https://docs.microsoft.com/en-us/azure/storage/common/storage-ref-azcopy?toc=/azure/storage/blobs/toc.json) for more information.

```bat
set sasUri=<FULL SAS URI, PROPERLY ESCAPED>
set srcFilePath=<PATH TO LOCAL FILE(S); WORKS WITH WILDCARD PATTERNS>

azcopy copy "%srcFilePath%" "%sasUri%" --overwrite=true --recursive=true
```

## Connect [!DNL Data Landing Zone] to [!DNL Platform]

The documentation below provides information on how to bring data from your [!DNL Data Landing Zone] container to Adobe Experience Platform using APIs or the user interface.

### Using APIs

- [Create a [!DNL Data Landing Zone] source connection using the Flow Service API](../../tutorials/api/create/cloud-storage/data-landing-zone.md)
- [Create a dataflow for a cloud storage source using the Flow Service API](../../tutorials/api/collect/cloud-storage.md)

### Using the UI

- [Connect [!DNL Data Landing Zone] to Platform using the UI](../../tutorials/ui/create/cloud-storage/data-landing-zone.md)
- [Create a dataflow for a cloud storage connection in the UI](../../tutorials/ui/dataflow/batch/cloud-storage.md)

## Limitations {#limitations}

This section outlines the current known limitations for the [!DNL Data Landing Zone].

- Private links are currently not supported when connecting to Experience Platform using the [!DNL Data Landing Zone]. The only supported methods for access are the methods listed [here](#manage-the-contents-of-your-data-landing-zone).

