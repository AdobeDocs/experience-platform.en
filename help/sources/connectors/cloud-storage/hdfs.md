---
keywords: Experience Platform;home;popular topics;HDFS;hdfs;Apache HDFS;apache hdfs
solution: Experience Platform
title: Apache HDFS Source Connector Overview
description: Learn how to connect Apache HDFS to Adobe Experience Platform using APIs or the user interface.
exl-id: 1f156f7b-a19d-4dcf-a51d-ab6cb396d8f7
---
# (Beta) [!DNL Apache] HDFS connector

>[!NOTE]
>
>The Apache HDFS connector is in beta. See the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Adobe Experience Platform provides native connectivity for cloud providers like AWS, [!DNL Google Cloud Platform], and [!DNL Azure], allowing you to bring your data from these systems. Ingested data can be formatted as JSON, Parquet, or delimited. Support for cloud storage providers include [!DNL Apache] HDFS.

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

## Naming constraints for files and directories

The following is a list of constraints you must account for when naming your cloud storage file or directory.

- Directory and file component names cannot exceed 255 characters.
- Directory and file names cannot end with a forward slash (`/`). If provided, it will be automatically removed.
- The following reserved URL characters must be properly escaped: `! ' ( ) ; @ & = + $ , % # [ ]`
- The following characters are not allowed: `" \ / : | < > * ?`.
- Illegal URL path characters not allowed. Code points like `\uE000`, while valid in NTFS filenames, are not valid Unicode characters. In addition, some ASCII or Unicode characters, like control characters (0x00 to 0x1F, \u0081, etc.), are also not allowed. For rules governing Unicode strings in HTTP/1.1 see [RFC 2616, Section 2.2: Basic Rules](https://www.ietf.org/rfc/rfc2616.txt) and [RFC 3987](https://www.ietf.org/rfc/rfc3987.txt).
- The following file names are not allowed: LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, PRN, AUX, NUL, CON, CLOCK$, dot character (.), and two dot characters (..).

## Connect [!DNL Apache] HDFS to [!DNL Platform]

The documentation below provides information on how to connect [!DNL Apache] HDFS to [!DNL Platform] using APIs or the user interface:

### Using APIs

- [Create an HDFS base connection using the Flow Service API](../../tutorials/api/create/cloud-storage/hdfs.md)
- [Explore the data structure and contents of a cloud storage source using the Flow Service API](../../tutorials/api/explore/cloud-storage.md)
- [Create a dataflow for a cloud storage source using the Flow Service API](../../tutorials/api/collect/cloud-storage.md)

### Using the UI

- [Create an Apache HDFS source connection in the UI](../../tutorials/ui/create/cloud-storage/hdfs.md)
- [Create a dataflow for a cloud storage connection in the UI](../../tutorials/ui/dataflow/batch/cloud-storage.md)
