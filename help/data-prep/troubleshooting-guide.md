---
keywords: Experience Platform;home;popular topics;
title: Data Prep Troubleshooting Guide
topic-legacy: troubleshooting
description: This document provides answers to frequently asked questions about Adobe Experience Platform Data Prep, as well as a troubleshooting guide for common errors.
---
# [!DNL Data Prep] troubleshooting guide

This document provides answers to frequently asked questions about Adobe Experience Platform [!DNL Data Prep], as well as a troubleshooting guide for common errors. For questions and troubleshooting regarding [!DNL Platform] APIs in general, see the [Adobe Experience Platform API troubleshooting guide](../landing/troubleshooting.md).

## FAQ

The following is a list of answers to frequently asked questions about [!DNL Data Prep].

### How can I resolve transformation errors?

[!DNL Data Prep] localizes all transformation errors to the column in which they occurred. As a result, that column is nullified and the rest of the row will continue to be processed. These transformation issues are logged as **Warnings**. It is recommended that you review the warnings periodically and adjust the transformation logic to account for the transformation issues. This will increase the quality of the data ingested into Experience Platform. 

If the columns marked as **Required** are nullified due to transformation issues, then the row will not be ingested. When partial data ingestion is enabled, you can set the threshold of such rejections before entire flow is failed. If the nullified attribute did not impact any schema level validations, the row will continue to be ingested. 

Any rows that are invalid even without any transformation errors, will also be rejected. For example, a data ingestion flow may have a pass through mapping (no transformation logic) to a required field and there is no incoming value for that attribute. This row will be rejected.