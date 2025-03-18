---
title: Bombora Intent
description: Learn about the Bombora Intent source on Experience Platform.
---
# [!DNL Bombora Intent]

[!DNL Bombora] is a comprehensive audience solution that specializes in B2B intent data. [!DNL Bombora Intent] is an Adobe Experience Platform source that you can use to connect your [!DNL Bombora] account to Experience Platform and integrate your account intent data.

With the [!DNL Bombora Intent] source, you can integrate [!DNL Bombora's] company surge intent data to identify accounts actively researching your products or services. Use [!DNL Bombora] to prioritize in-market accounts to create precise segments and execute hyper-targeted ABM campaigns, ensuring your marketing efforts focus on those account most likely to convert. Additionally, you can leverage intent-driven strategies to optimize ad spend, boost engagement, and maximize ROI.

Read this document for prerequisite information on the [!DNL Bombora] source.

## Prerequisites {#prerequisites}

Read the following sections for prerequisite steps before connecting [!DNL Bombora] to Experience Platform.

### IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

### Configure permissions on Experience Platform

You must have both **[!UICONTROL View Sources]** and **[!UICONTROL Manage Sources]** permissions enabled for your account in order to connect your [!DNL Bombora] account to Experience Platform. Contact your product administrator to obtain the necessary permissions. For more information, read the [access control UI guide](../../../access-control/abac/ui/permissions.md).

### Naming constraints for files and directories

The restrictions listed below must be taken into consideration when naming your cloud storage file or directory:

* Directory and file component names cannot exceed 255 characters.
* Directory and file names cannot end with a forward slash (`/`). If provided, it will be automatically removed.
* The following reserved URL characters must be properly escaped: `! ' ( ) ; @ & = + $ , % # [ ]`
* The following characters are not allowed: `" \ / : | < > * ?`.
* Illegal URL path characters are not allowed. Code points like `\uE000`, while valid in NTFS filenames, are not valid Unicode characters. In addition, some ASCII or Unicode characters, like control characters (0x00 to 0x1F, \u0081, etc.), are also not allowed. For rules governing Unicode strings in HTTP/1.1 see [RFC 2616, Section 2.2: Basic Rules](https://www.ietf.org/rfc/rfc2616.txt) and [RFC 3987](https://www.ietf.org/rfc/rfc3987.txt).
* The following file names are not allowed: LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, PRN, AUX, NUL, CON, CLOCK$, dot character (.), and two dot characters (..).

### Gather required credentials

[!DNL Bombora] on Experience Platform is hosted by [!DNL Google Cloud Storage]. In order to successfully authenticate your [!DNL Bombora] account, you must provide the appropriate values for the following credentials:

| Credential | Description |
| --- | --- |
| Access key ID | The [!DNL Bombora] access key ID. This is a 61-character alphanumeric string that is required to authenticate your account to Experience Platform. |
| Secret access key | The [!DNL Bombora] secret access key. This is a 40-character, base-64-encoded string that is required to authenticate your account to Experience Platform. |
| Bucket name | The [!DNL Bombora] bucket from which data will be pulled from. |
| Folder path | The path to the folder that you want to provide access to. |

For more information on these credentials, read the [[!DNL Google Cloud Storage] HMAC keys guide](https://cloud.google.com/storage/docs/authentication/hmackeys#overview). For steps on how to generate your own access key, read the [prerequisite guide in the [!DNL Google Cloud Storage] source overview](../cloud-storage/google-cloud-storage.md#prerequisite-setup-for-connecting-your-google-cloud-storage-account).

## [!DNL Bombora] schema

Read this section for information on the [!DNL Bombora] schema and data structure. 

The [!DNL Bombora] schema is called **Account Intent Weekly**. It is the weekly intent information (anonymous B2B buyer research and content consumption) on specified accounts and topics. The data is in parquet format.

| Field name | Datatype | Required | Business key | Notes |
| --- | --- | --- | --- | --- |
| `Account_Name` | STRING | TRUE | YES | The canonical name of the company. |
| `domain` | STRING | TRUE | YES | The domain of the identified account that is showing intent. |
| `Topic_Id` | STRING | TRUE | YES | The [!DNL Bombora] topic ID. |
| `Topic_Name` | STRING | TRUE | | The [!DNL Bombora] topic name. |
| `Cluster_Name` | STRING | TRUE | | The cluster name on [!DNL Bombora] for a given topic. |
| `Cluster_Id` | STRING | TRUE | | The cluster ID associated with a given topic.
| `Composite_Score` | INTEGER | TRUE | | The composite score represents a domain's consumption pattern for a given topic over a specified time period. The composite score is measured between 0 and 100, where 100 represents the highest possible score and 0 represents the lowest possible score. A composite score of over 60 represents an increase in interest in a particular topic by a domain. This is also referred to as a "surge". |
| `Partition_Date` | DATE | TRUE | | The calendar date of a snapshot. This is done weekly, at the end-of-week, in `mm/dd/yyyy` format. |

{style="table-layout:auto"}

>[!TIP]
>
>Any changes to the schema will be communicated to Adobe in advance. To support seamless schema evolution, maintaining backward compatibility is essential. Experience Platform enforces an additive-only versioning approach, ensuring that any updates to the schema are non-destructive. This means that breaking changes are strictly prohibited, and only changes that enhance or extend the existing schema are allowed. 

## Connect your [!DNL Bombora] account to Experience Platform in the UI

Once you have completed your prerequisite setup, read the tutorial on [connecting your [!DNL Bombora] account to Experience Platform](../../tutorials/ui/create/data-partners/bombora.md) to start your integration.