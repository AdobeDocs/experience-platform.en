---
keywords: Experience Platform;home;popular topics;Oracle Object Storage;oracle object storage
solution: Experience Platform
title: Oracle Object Storage Source Connector Overview
description: Learn how to connect Oracle Object Storage to Adobe Experience Platform using APIs or the user interface.
exl-id: 5e8b85c8-9f01-49a6-9556-7b9c7518fb4b
---
# Oracle Object Storage connector

Adobe Experience Platform provides native connectivity for cloud providers like AWS, [!DNL Google Cloud Platform], allowing you to bring data from these systems into Platform for use in downstream services and destinations.

Cloud storage sources can bring your data into Platform without the need to download, format, or upload. Ingested data can be formatted as XDM JSON, XDM Parquet, or delimited. Every step of the process is integrated into the sources workflow. Platform allows you to bring in data from [!DNL Oracle Object Storage] through batches.

## IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) document for more information.

## Naming constraints for files and directories

The following is a list of constraints you must account for when naming your cloud storage file or directory:

- Directory and file component names cannot exceed 255 characters.
- Directory and file names cannot end with a forward slash (`/`). If provided, it will be automatically removed.
- The following reserved URL characters must be properly escaped: `! ' ( ) ; @ & = + $ , % # [ ]`
- The following characters are not allowed: `" \ / : | < > * ?`.
- Illegal URL path characters not allowed. Code points like `\uE000`, while valid in NTFS filenames, are not valid Unicode characters. In addition, some ASCII or Unicode characters are also not allowed, such as control characters (0x00 to 0x1F, \u0081, etc.). For rules governing Unicode strings in HTTP/1.1 see [RFC 2616, Section 2.2: Basic Rules](https://www.ietf.org/rfc/rfc2616.txt) and [RFC 3987](https://www.ietf.org/rfc/rfc3987.txt).
- The following file names are not allowed: LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, PRN, AUX, NUL, CON, CLOCK$, dot character (.), and two dot characters (..).

## Connect [!DNL Oracle Object Storage] to Platform

The documentation below provides information on how to connect Oracle Object Storage to Adobe Experience Platform using APIs or the user interface:

### Using APIs

- [Create an Oracle Object Storage base connection using the Flow Service API](../../tutorials/api/create/cloud-storage/oracle-object-storage.md)
- [Explore the data structure and contents of a cloud storage source using the Flow Service API](../../tutorials/api/explore/cloud-storage.md)
- [Create a dataflow for a cloud storage source using the Flow Service API](../../tutorials/api/collect/cloud-storage.md)

### Using the UI

- [Create an Oracle Object Storage source connection in the UI](../../tutorials/ui/create/cloud-storage/oracle-object-storage.md)
- [Create a dataflow for a cloud storage connection in the UI](../../tutorials/ui/dataflow/batch/cloud-storage.md)
