---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Data Landing Zone Source
topic-legacy: overview
description: Learn how to connect Data Landing Zone to Adobe Experience Platform
---
# [!DNL Data Landing Zone]

Adobe Experience Platform provides native connectivity for cloud providers like AWS, [!DNL Google Cloud Platform], and [!DNL Azure]. You can bring your data from these systems into Platform. Platform allows you to bring in data from a [!DNL Data Landing Zone] container through batches.

[!DNL Data Landing Zone] is a Platform-provisioned [!DNL Azure Blob] storage, allowing you access to a secure container to ingest and egress files in and out of Platform through Sources and Destinations. You have access to one [!DNL Data Landing Zone] container per sandbox, and the total data volume across all containers is limited to the total data provided with your Platform Produces and Services license.

[!DNL Data Landing Zone] supports SAS-based authentication and its data is protected with standard [!DNL Azure Blob] storage security mechanisms in both rest and transit. SAS-based authentication allows you to securely access your [!DNL Data Landing Zone] container through a public internet connection. There are no network changes required for you to access your [!DNL Data Landing Zone] container, which means you do not need to configure any allow lists or cross region set ups for your net work. Platform enforces a strict seven-day time-to-live on all files uploaded to a [!DNL Data Landing Zone] container. All files are deleted after seven days.

## Naming constraints for files and directories

The following is a list of constraints you must account for when naming your cloud storage file or directory.

- Directory and file component names cannot exceed 255 characters.
- Directory and file names cannot end with a forward slash (`/`). If provided, it will be automatically removed.
- The following reserved URL characters must be properly escaped: `! ' ( ) ; @ & = + $ , % # [ ]`
- The following characters are not allowed: `" \ / : | < > * ?`.
- Illegal URL path characters not allowed. Code points like `\uE000`, while valid in NTFS filenames, are not valid Unicode characters. In addition, some ASCII or Unicode characters, like control characters (0x00 to 0x1F, \u0081, etc.), are also not allowed. For rules governing Unicode strings in HTTP/1.1 see [RFC 2616, Section 2.2: Basic Rules](https://www.ietf.org/rfc/rfc2616.txt) and [RFC 3987](https://www.ietf.org/rfc/rfc3987.txt).
- The following file names are not allowed: LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, PRN, AUX, NUL, CON, CLOCK$, dot character (.), and two dot characters (..).

## Connect [!DNL Data Landing Zone] to [!DNL Platform]

The documentation below provides information on how to bring data from your [!DNL Data Landing Zone] container to Adobe Experience Platform using APIs or the user interface:

### Using APIs

- [Create a [!DNL Data Landing Zone] source connection using the Flow Service API](../../tutorials/api/create/cloud-storage/data-landing-zone.md)
- [Create a dataflow for a cloud storage source using the Flow Service API](../../tutorials/api/collect/cloud-storage.md)

### Using the UI

- [Connect [!DNL Data Landing Zone] to Platform using the UI](../../tutorials/ui/create/cloud-storage/data-landing-zone.md)
- [Create a dataflow for a cloud storage connection in the UI](../../tutorials/ui/dataflow/batch/cloud-storage.md)
