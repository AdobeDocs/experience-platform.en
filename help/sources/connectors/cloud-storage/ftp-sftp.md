---
keywords: Experience Platform;home;popular topics;FTP;SFTP;ftp;sftp
solution: Experience Platform
title: FTP and SFTP connector
topic: overview
description: The documentation below provides information on how to connect an FTP or an STFP server to Platform using APIs or the user interface.
---

# (Beta) FTP and SFTP connector

>[!NOTE]
>
>The FTP and SFTP connectors are in beta. See the [Sources overview](../../home.md#terms-and-conditions) for more information on using beta-labelled connectors.

Adobe Experience Platform provides native connectivity for cloud providers like AWS, [!DNL Google Cloud Platform], and [!DNL Azure], allowing you to bring your data from these systems.

Cloud storage sources can bring your own data into [!DNL Platform] without the need to download, format, or upload. Ingested data can be formatted as XDM JSON, XDM parquet, or delimited. Every step of the process is integrated into the Sources workflow. [!DNL Platform] allows you to bring in data from an FTP or an SFTP server through batches.

## IP address allow list

The following IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources.

### East US region

- `20.41.2.0/23`
- `20.41.4.0/26`
- `20.44.17.80/28`
- `20.49.102.16/29`
- `40.70.148.160/28`
- `52.167.107.224/28`

### West Europe region

- `13.69.67.192/28`
- `13.69.107.112/28`
- `13.69.112.128/28`
- `40.74.24.192/26`
- `40.74.26.0/23`
- `40.113.176.232/29`
- `52.236.187.112/28`

### Australia East

- `13.70.74.144/28`
- `20.37.193.0/25`
- `20.37.193.128/26`
- `20.37.198.224/29`
- `40.79.163.80/28`
- `40.79.171.160/28`

## Naming constraints for files and directories

The following is a list of constraints you must account for when naming your cloud storage file or directory.

- Directory and file component names cannot exceed 255 characters.
- Directory and file names cannot end with a forward slash (`/`). If provided, it will be automatically removed.
- The following reserved URL characters must be properly escaped: `! * ' ( ) ; : @ & = + $ , / ? % # [ ]`
- The following characters are not allowed: `" \ / : | < > * ?`.
- Illegal URL path characters not allowed. Code points like `\uE000`, while valid in NTFS filenames, are not valid Unicode characters. In addition, some ASCII or Unicode characters, like control characters (0x00 to 0x1F, \u0081, etc.), are also not allowed. For rules governing Unicode strings in HTTP/1.1 see [RFC 2616, Section 2.2: Basic Rules](https://www.ietf.org/rfc/rfc2616.txt) and [RFC 3987](https://www.ietf.org/rfc/rfc3987.txt).
- The following file names are not allowed: LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, PRN, AUX, NUL, CON, CLOCK$, dot character (.), and two dot characters (..).

## Connect FTP and SFTP to [!DNL Platform]

> [!IMPORTANT]: Users are required to disable **Keyboard Interactive Authentication** in the SFTP server configuration prior to connecting. Disabling the setting will allow passwords to be entered manually, as opposed to inputting through a service or a program. See the [Component Pro document](https://doc.componentpro.com/ComponentPro-Sftp/authenticating-with-a-keyboard-interactive-authentication) for more information on Keyboard Interactive Authentication.

The documentation below provides information on how to connect an FTP or an SFTP server to [!DNL Platform] using APIs or the user interface:

### Using the APIs

- [Create an FTP or SFTP connector using the Flow Service API](../../tutorials/api/create/cloud-storage/sftp.md)
- [Explore a cloud storage system using the Flow Service API](../../tutorials/api/explore/cloud-storage.md)
- [Collect cloud storage data using the Flow Service API](../../tutorials/api/collect/cloud-storage.md)

### Using the UI

- [Create an FTP or SFTP source connector in the UI](../../tutorials/ui/create/cloud-storage/ftp-sftp.md)
- [Configure a dataflow for a cloud storage connector in the UI](../../tutorials/ui/dataflow/batch/cloud-storage.md)