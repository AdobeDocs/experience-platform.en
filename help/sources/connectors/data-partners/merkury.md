---
title: Merkury Enterprise Identity Resolution Source Overview
description: Learn how to connect Merkury Enterprise Identity Resolution to Adobe Experience Platform using the user interface.
---
# Merkury Enterprise Identity Resolution

Merkury, by Merkle, helps you recognize more digital visitors - even without cookies - so you can deliver the relevant, personalized experiences your customer\'s demand.The **person ID** combines everything your organization knows about an individual -- digital behaviors, buying preferences, and identifying information like a name, email address, physical address, or device ID -- into one single profile. Ingested data can be formatted as XDM JSON, XDM Parquet, or delimited. Every step of the process is integrated into the Sources workflow.

![](./merkury-enterprise-identity-resolution-assets/52053a98cb5b8f163c1711ba58cbbb00b468fb0e.png){width="6.624365704286964in"
height="2.71875in"}

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

## Prerequisites

- Merkury setup completed with your Merkury team. 
- Obtained key, secret and bucket name from Merkury team. 

A file path like `myBucket/folder/subfolder/subsubfolder/abc.csv` may lead you to only access `subsubfolder/abc.csv`. If you want to access the subfolder, you can specify the bucket parameter as myBucket and the folderPath as folder/subfolder to ensure that file exploration starts at subfolder as opposed to `subsubfolder/abc.csv`.

## Connect Merkury to Platform

The documentation below provides information on how to connect Merkury to Experience Platform using the user interface.