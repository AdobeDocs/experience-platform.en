---
title: Azure Data Lake Storage Gen2 Source Connector Overview
description: Learn how to connect Azure Data Lake Storage Gen2 to Adobe Experience Platform using APIs or the user interface.
exl-id: 424d7278-44d9-4653-82c0-eb21cbb9b623
---
# Azure Data Lake Storage Gen2 connector

Adobe Experience Platform provides native connectivity for cloud providers like AWS, [!DNL Google Cloud Platform], and [!DNL Azure], allowing you to bring your data from these systems.

Cloud storage sources can bring your own data into Experience Platform without the need to download, format, or upload. Ingested data can be formatted as XDM JSON, XDM Parquet, or delimited. Every step of the process is integrated into the Sources workflow. Experience Platform allows you to bring in data from [!DNL Azure Data Lake Storage Gen2] (ADLS Gen2) through batches.

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

>[!IMPORTANT]
>
>The [!DNL Azure Data Lake Storage Gen2] source does not support same-region connectivity to Experience Platform. If your Azure instance is using the same network region as Experience Platform, then a connection to Experience Platform sources cannot be established. Please do not use the Azure East US 2, Azure West Europe, and Azure Australia East regions when setting up your [!DNL Azure Data Lake Storage Gen2] source. Currently, only cross-region connectivity is supported.

## Naming constraints for files and directories

The following is a list of constraints you must account for when naming your cloud storage file or directory.

- Directory and file component names cannot exceed 255 characters.
- Directory and file names cannot end with a forward slash (`/`). If provided, it will be automatically removed.
- The following reserved URL characters must be properly escaped: `! ' ( ) ; @ & = + $ , % # [ ]`
- The following characters are not allowed: `" \ / : | < > * ?`.
- Illegal URL path characters not allowed. Code points like `\uE000`, while valid in NTFS filenames, are not valid Unicode characters. In addition, some ASCII or Unicode characters, like control characters (0x00 to 0x1F, \u0081, etc.), are also not allowed. For rules governing Unicode strings in HTTP/1.1 see [RFC 2616, Section 2.2: Basic Rules](https://www.ietf.org/rfc/rfc2616.txt) and [RFC 3987](https://www.ietf.org/rfc/rfc3987.txt).
- The following file names are not allowed: LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, PRN, AUX, NUL, CON, CLOCK$, dot character (.), and two dot characters (..).

## Connect [!DNL Azure Data Lake Storage Gen2] to Experience Platform

>[!NOTE]
>
>The service principal used in creating an [!DNL Azure Data Lake Storage Gen2] account should have at least the **Storage Blob Data Reader** role assigned from access control (IAM)

The documentation below provides information on how to connect [!DNL Azure Data Lake Storage Gen2] to Experience Platform using APIs or the user interface:

### Using APIs

- [Create an [!DNL Azure Data Lake Storage Gen2] base connection using the Flow Service API](../../tutorials/api/create/cloud-storage/adls-gen2.md)
- [Explore the data structure and contents of a cloud storage source using the Flow Service API](../../tutorials/api/explore/cloud-storage.md)
- [Create a dataflow for a cloud storage source using the Flow Service API](../../tutorials/api/collect/cloud-storage.md)

### Using the UI

- [Create an [!DNL Azure Data Lake Storage Gen2] source connection in the UI](../../tutorials/ui/create/cloud-storage/adls-gen2.md)
- [Create a dataflow for a cloud storage connection in the UI](../../tutorials/ui/dataflow/batch/cloud-storage.md)
