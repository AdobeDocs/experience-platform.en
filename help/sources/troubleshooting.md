---
keywords: Experience Platform;home;popular topics;sources;ingestion;troubleshooting;sources troubleshooting;sources faq;faq;source connectors;source connector;source connectors faqs;source connectors troubleshooting;
solution: Experience Platform
title: Sources troubleshooting
topic-legacy: troubleshooting
description: This document provides answers to frequently asked questions about sources on Adobe Experience Platform.
exl-id: 94875121-7d4d-4eb2-8760-aa795933dd7e
---
# Sources troubleshooting guide

This document provides answers to frequently asked questions about sources on Adobe Experience Platform. For questions and troubleshooting related to other [!DNL Platform] services, including those that are encountered across all [!DNL Platform] APIs, please refer to the [Experience Platform troubleshooting guide](../landing/troubleshooting.md).

## Frequently asked questions

The following is a list of answers to frequently asked questions about sources.

### Do I have to make changes to our network security settings in order to enable sources?

You may need to allowlist certain IP addresses in order to enable sources. For more information, please read the documentation on your specific source connector.

### What authentication types are supported by sources?

Sources can be authenticated by using connection strings, usernames and passwords, or access tokens and keys. Specific details about supported authentication types can be found in the documentation of the specified source connector.

### Why are all my recent flow runs failing?

If you are noticing that all your recent flow runs are failing, your credentials may have either changed or expired. To fix that problem, try updating your connection with the latest credentials.

### Which file types are supported?

Currently the supported file types are delimited files, JSON, and Parquet.

### What are the constraints on file names and sizes?

The following is a list of constraints you must account for files in sources.

- Directory and file component names cannot exceed 255 characters.
- Directory and file names cannot end with a forward slash (`/`). If provided, it will be automatically removed.
- The following reserved URL characters must be properly escaped: `! ' ( ) ; @ & = + $ , % # [ ]`
- The following characters are not allowed: `" \ / : | < > * ?`.
- Illegal URL path characters not allowed. Code points like `\uE000`, while valid in NTFS filenames, are not valid Unicode characters. In addition, some ASCII or Unicode characters, like control characters (0x00 to 0x1F, \u0081, etc.), are also not allowed. For rules governing Unicode strings in HTTP/1.1 see [RFC 2616, Section 2.2: Basic Rules](https://www.ietf.org/rfc/rfc2616.txt) and [RFC 3987](https://www.ietf.org/rfc/rfc3987.txt).
- The following file names are not allowed: LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, PRN, AUX, NUL, CON, CLOCK$, dot character (.), and two dot characters (..).
- The maximum number of files per batch is 1500, with a maximum batch size being 100 GB.
- The maximum number of properties or fields per row is 10,000.
- The maximum number of batches that can be sent per user, per minute is 138.

### What data types are supported?

Supported data types include integers, strings, booleans, datetime objects, arrays, and objects.

### What date and time formats are supported?

Sources supports a wide variety of datetime formats while ingesting data. More information about supported datetime formats can be found in the dates section of the [data format handling guide](../data-prep/data-handling.md#dates) in the Data Prep documentation.

### How do I format arrays in CSV, JSON, and Parquet files?

JSON and Parquet files natively support arrays. For flat structures, such as CSVs, arrays are not supported. However, strings with multiple values can be broken up into an array, using data prep functions such as explode and join. More information about these data prep functions can be found in the [data prep functions guide](../data-prep/functions.md#string)

### What sources support partial ingestion?

All batch ingestion sources support partial ingestion. However, streaming ingestion sources do not support partial ingestion.

### When should I use partial ingestion?

Partial ingestion should be used if you do **not** have constraints, such as having the entire file being ingested into Platform. Alternatively, partial ingestion should be used if you do not mind ingesting data that may contain errors within it.

### What is the typical partial ingestion error threshold?

There is no "typical error threshold" for partial ingestion. Instead, this value can vary from use case to use case. By default, the error threshold is set to 5%.

### How long does it take for a flow run status to update after the creation of a new dataflow?

Flow runs are not generated instantaneously and can take around two to three minutes to update after its designated `startTime`. Checking the status of a flow run, immediately after the creation of a new dataflow does not return information on the flow run's `lastRunDetails` as it has not yet happened. It is recommended to allow the dataflow a few minutes to generate before checking the status of the flow run.