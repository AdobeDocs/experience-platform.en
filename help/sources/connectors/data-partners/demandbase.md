---
title: Demandbase Intent
description: Learn about the Demandbase Intent source on Experience Platform.
badge: Beta
---
# [!DNL Demandbase Intent]

[!DNL Demandbase] is an account-based marketing platform that you can use for B2B sales and marketing success. [!DNL Demandbase Intent] is an Adobe Experience Platform source that you can use to connect your [!DNL Demandbase] account to Experience Platform and integrate your account intent data.

With the [!DNL Demandbase] source,  you can identify high-interest accounts based on real-time engagements. By prioritizing the strongest intent signals, you can can create precise segments and deliver hyper-targeted campaigns, ensuring your marketing efforts focus on the accounts most likely to convert. Activating intent-driven strategies enables optimization of ad spend, increased engagement, and higher ROI.

Read this document for prerequisite information on the [!DNL Demandbase] source.

## Prerequisites {#prerequisites}

### IP address allow list

A list of IP addresses must be added to an allow list prior to working with source connectors. Failing to add your region-specific IP addresses to your allow list may lead to errors or non-performance when using sources. See the [IP address allow list](../../ip-address-allow-list.md) page for more information.

### Configure permissions on Experience Platform

You must have both **[!UICONTROL View Sources]** and **[!UICONTROL Manage Sources]** permissions enabled for your account in order to connect your [!DNL Demandbase] account to Experience Platform. Contact your product administrator to obtain the necessary permissions. For more information, read the [access control UI guide](../../../access-control/abac/ui/permissions.md).

### Naming constraints for files and directories

The restrictions listed below must be taken into consideration when naming your cloud storage file or directory:

- Directory and file component names cannot exceed 255 characters.
- Directory and file names cannot end with a forward slash (`/`). If provided, it will be automatically removed.
- The following reserved URL characters must be properly escaped: `! ' ( ) ; @ & = + $ , % # [ ]`
- The following characters are not allowed: `" \ / : | < > * ?`.
- Illegal URL path characters are not allowed. Code points like `\uE000`, while valid in NTFS filenames, are not valid Unicode characters. In addition, some ASCII or Unicode characters, like control characters (0x00 to 0x1F, \u0081, etc.), are also not allowed. For rules governing Unicode strings in HTTP/1.1 see [RFC 2616, Section 2.2: Basic Rules](https://www.ietf.org/rfc/rfc2616.txt) and [RFC 3987](https://www.ietf.org/rfc/rfc3987.txt).
- The following file names are not allowed: LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, PRN, AUX, NUL, CON, CLOCK$, dot character (.), and two dot characters (..).

### Gather required credentials

[!DNL Demandbase] on Experience Platform is hosted by [!DNL Google Cloud Storage]. In order to successfully authenticate your [!DNL Demandbase] account, you must provide the appropriate values for the following credentials:

| Credential | Description |
| --- | --- |
| Access key ID | The [!DNL Demandbase] access key ID. This is a 61-character alphanumeric string that is required to authenticate your account to Experience Platform. |
| Secret access key | The [!DNL Demandbase] secret access key. This is a 40-character, base-64-encoded string that is required to authenticate your account to Experience Platform. |
| Bucket name | The [!DNL Demandbase] bucket from which data will be pulled from. |
| Folder path | The path to the folder that you want to provide access to. |

For more information on these credentials, read the [[!DNL Google Cloud Storage] HMAC keys guide](https://cloud.google.com/storage/docs/authentication/hmackeys#overview). For steps on how to generate your own access key, read the [prerequisite guide in the [!DNL Google Cloud Storage] source overview](../cloud-storage/google-cloud-storage.md#prerequisite-setup-for-connecting-your-google-cloud-storage-account).

## [!DNL Demandbase] schema

Read this section for information on the [!DNL Demandbase] schema and data structure. 

The [!DNL Demandbase] schema is called **Company Intent Weekly**. It is the weekly intent information (anonymous B2B buyer research and content consumption) on specified account and keywords. The data is in parquet format.

| Field name | Datatype | Required | Business key | Notes |
| --- | --- | --- | --- | --- |
| `company_id` | STRING | true | yes | The canonical company ID. |
| `domain` | STRING | true | yes | The identified domain of the account showing intent. |
| `start_date` | DATE | true | yes | The start date of when the intent activity occurred in the duration period. |
| `end_date` | DATE | true | yes | The end date of when the intent activity occurred in the duration period. |
| `duration_type` | STRING | true | yes | The type of duration. Generally, this value may be daily, weekly, or monthly depending on the chosen roll-up duration. For this data sample, this value is `week`.
| `keyword_set_id` | STRING | true | yes | The keyword set ID. This is unique per given customer. |
| `keyword_set` | STRING | true | yes | The keyword set name. |
| `is_trending` | STRING | true | | The current state of a given trend. Trending state is measured as a burst in intent activity in the last week relative to averages for the prior seven weeks. |
| `intent_strength` | ENUM[STRING] | true | | A quantified measure of the intent strength. Accepted values include: `HIGH`, `MED`, and `LOW`. |
| `num_people_researching` | INTEGER | true | | The count of people belonging to the `company_id` researching the keyword in the last seven days. |
| `num_trending_days` | INTEGER | true | | The number of days that the keyword was trending in a given duration. |
| `trending_score` | INTEGER | true | | The trending score. |
| `record_id` | STRING | true | | The unique primary record ID. |
| `partition_date` | DATE | true | | The calendar date of the snapshot. This is done weekly, at the end-of-week. |

{style="table-layout:auto"}

>[!TIP]
>
>Any changes to the schema will be communicated to Adobe in advance. To support seamless schema evolution, maintaining backward compatibility is essential. Experience Platform enforces an additive-only versioning approach, ensuring that any updates to the schema are non-destructive. This means that breaking changes are strictly prohibited, and only changes that enhance or extend the existing schema are allowed. 
 
 ## Next steps

