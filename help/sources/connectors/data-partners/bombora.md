---
title: Bombora Intent
description: Learn about the Bombora Intent source on Experience Platform.
last-substantial-update: 2025-03-26
exl-id: d2e81207-8ef5-4e52-bbac-a2fa262d8d08
---
# [!DNL Bombora Intent]

[!DNL Bombora] is a comprehensive audience solution that specializes in B2B intent data. [!DNL Bombora Intent] is an Adobe Experience Platform source that you can use to connect your [!DNL Bombora] account to Experience Platform and integrate your account intent data.

With the [!DNL Bombora Intent] source, you can integrate [!DNL Bombora's] company surge intent data to identify accounts actively researching your products or services. Use [!DNL Bombora] to prioritize in-market accounts to create precise segments and execute hyper-targeted ABM campaigns, ensuring your marketing efforts focus on those account most likely to convert. Additionally, you can leverage intent-driven strategies to optimize ad spend, boost engagement, and maximize ROI.

Read this document for prerequisite information on the [!DNL Bombora] source.

## Use cases {#use-cases}

Read the following for use case examples that you can apply to the [!DNL Bombora] source.

### Demand-Side Platform (DSP) integration

As a B2B marketer, you can create an account list in Real-Time CDP, identify companies that show high intent for your products, then activate this list in [!DNL Bombora], which integrates directly with DSPs, allowing you to run targeted programmatic ad campaigns using [!DNL Bombora's] data. This ensures that your ad spend is focused on companies most likely to convert.

### Account-Based Marketing (ABM) Capabilities

As a B2B marketer, you can build an account list based on first and third-party intent signals. You can then activate this list in [!DNL Bombora], where ABM capabilities allow you to target employees at these accounts specifically, ensuring your ads reach decision-makers rather than a broad audience.

### Multi-Channel ABM Activation

As a B2B marketer, you can create an account list in Real-Time CDP, identifying companies with high intent and activate it in [!DNL Bombora] to run targeted campaigns across multiple channels. On paid social media, you can serve personalized ads to professionals at target accounts on platforms like [!DNL Linkedin] and [!DNL Facebook]. 

Using native ad platforms, you can ensure your content reaches decision-makers in relevant contexts. You can also extend campaigns to advanced TV, delivering ads to key accounts. This multi-channel approach ensures consistent messaging across platforms, maximizing engagement and conversion rates.

## Prerequisites {#prerequisites}

Read the following sections for prerequisite steps before connecting [!DNL Bombora] to Experience Platform.

### IP address allowlist

A list of IP addresses must be added to an allowlist prior to working with source connectors. Failing to add your region-specific IP addresses to your allowlist may lead to errors or non-performance when using sources. See the [IP address allowlist](../../ip-address-allow-list.md) page for more information.

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

For more information on these credentials, read the [[!DNL Google Cloud Storage] HMAC keys guide](https://cloud.google.com/storage/docs/authentication/hmackeys#overview). For steps on how to generate your own access key, read the [prerequisite guide in the [!DNL Google Cloud Storage] source overview](../cloud-storage/google-cloud-storage.md#prerequisite-setup-for-connecting-your-google-cloud-storage-account).

## [!DNL Bombora] schema {#schema}

Read this section for information on the [!DNL Bombora] schema and data structure. 

The [!DNL Bombora] schema is called **B2B Bombora Account Intent**. It is the weekly intent information (anonymous B2B buyer research and content consumption) on specified accounts and topics. The data is in parquet format.

* Class - XDM [!DNL Bombora Account Intent]
* Namespace - B2B [!DNL Bombora Account Intent]
* Primary identity - `intentID`
* Relationships - B2B Account

| Field name             | Data type | Description                                                                            |
|------------------------|-----------|----------------------------------------------------------------------------------------|
| `extSourceSystemAudit` | OBJECT    | This field is used by the system for source system auditing.                           |
| `_id`                  | STRING    | This field is used by the system as a unique identifier.                               |
| `accountDomain`        | STRING    | This field contains the account domain.                                                |
| `accountID`            | STRING    | This field contains the B2B Account ID that this intent record is associated with.     |
| `bomboraAccountName`   | STRING    | This field contains the company's ID in Bombora.                                       |
| `clusterID`            | STRING    | This field contains the cluster ID.                                                    |
| `clusterName`          | STRING    | This field contains the cluster name.                                                  |
| `compositeScore`       | INTEGER   | This field contains the composite score of intent.                                     |
| `intentID`             | STRING    | This field contains a system-generated unique value.                                   |
| `partitionDate`        | DATE      | This field contains the partition date. This is done weekly, at the end-of-week, in `mm/dd/yyyy` format. |
| `topicID`              | STRING    | This field contains the intent topic ID from Bombora.                                  |
| `topicName`            | STRING    | This field contains the intent topic name from Bombora.                                |

{style="table-layout:auto"}

>[!TIP]
>
>Any changes to the schema will be communicated to Adobe in advance. To support seamless schema evolution, maintaining backward compatibility is essential. Experience Platform enforces an additive-only versioning approach, ensuring that any updates to the schema are non-destructive. This means that breaking changes are strictly prohibited, and only changes that enhance or extend the existing schema are allowed. 

## Connect your [!DNL Bombora] account to Experience Platform in the UI

Once you have completed your prerequisite setup, read the tutorial on [connecting your [!DNL Bombora] account to Experience Platform](../../tutorials/ui/create/data-partners/bombora.md) to start your integration.

## Frequently asked questions {#faq}

Read this section for answers to frequently asked questions regarding the [!DNL Bombora] source.

### Do I need to have need to have an existing contract with [!DNL Bombora] to use their account intent data in Real-Time CDP B2B Edition?

+++Answer

Yes, you must have an active contract with [!DNL Bombora] to access and utilize their intent data within Experience Platform and Real-Time CDP B2B Edition. The integration leverages your existing agreement with the [!DNL Bombora] to ingest and activate account intent signals in Experience Platform and Real-Time CDP. 

+++

### Are custom fields from [!DNL Bombora] supported in this integration?

+++Answer

Currently, you can only use standard [!DNL Bombora] fields for ingestion and activation. To view the list of supported fields, read the [[!DNL Bombora] schema guide](#schema) for the details on field availability.

+++

### Can I ingest data from [!DNL Bombora] to Experience Platform on an ad-hoc basis?

+++Answer

Yes, you can ingest data from [!DNL Bombora] on an ad-hoc basis. You can create a new dataflow to ingest the latest intent data, as long as there is new data from [!DNL Bombora]. However, you can only have one active dataflow at a time. Therefore, ensure that you delete the existing dataflow, before creating a new one.

+++

### What is the validation process for intent data and how can I check which intent data is linked to a specific account?

+++Answer

To validate intent data and determine which intent signals are linked to specific accounts, use [Adobe Experience Platform Query Service](../../../query-service/home.md) by AccountID.

+++

### How can I look up an intent for a specific company?

+++Answer

Execute an SQL query in [Query Service](../../../query-service/home.md) to search for intent data using the company name or AccountID. To view all intent data for a specific company, you can run an SQL query in Query Service using the company name or AccountID to fetch all associated intent signals.

+++


### I found an issue with the account matching process in Experience Platform, what should I do?

+++Answer

The resolution depends on the specific issue:

* **Incorrect or missing company domain in Experience Platform**: If the issue stems from an incorrect company domain value in the account data, update the company domain field in Experience Platform to ensure accurate matching.
* **Incorrect field mapping in dataflow**: If the issue is due to an incorrect company domain field path in the dataflow, update the dataflow configuration to reference the correct field path. 

+++

### How do I delete intent data in Experience Platform?

+++Answer

You must [delete the dataset](../../../catalog/datasets/user-guide.md#delete-a-dataset) in order to delete intent data in Experience Platform.

+++

### What field is used to match accounts from [!DNL Bombora] to Experience Platform?

+++Answer

The `accountOrganization.domain` field is used for matching accounts. If your organization uses a different custom field to store the website name, ensure that you provide the correct field path for accurate mapping.

+++

### What happens when a company domain is updated in Experience Platform?

+++Answer

When a company domain is updated, the new domain value will be applied in the next dataflow run. This ensures that:

* Future intent data ingestion use the updated domain for account matching.
* Any previously mismatched intent signals may now align correctly with the intended account.
* No retroactive changes are made to past ingested data-only new and incoming data will reflect the update.

+++

### What is the domain matching process?

+++Answer

Domain matching in Experience Platform is based on an exact match of the scrubbed domain field value. Experience Platform automatically removes prefixes (e.g., https:/<span>/www.) and retains the top-level domain (e.g., adobe.com). Matching requires an exact domain value, with no support for fuzzy matching or subdomains.

+++

### Where can I use intent data?

+++Answer

Intent data can be utilized in [Account Audiences](../../../segmentation/types/account-audiences.md) to enhance targeting, segmentation, and personalization. By leveraging intent signals, businesses can identify and engage with accounts showing high interest in specific topics, optimizing marketing and sales outreach.

+++
