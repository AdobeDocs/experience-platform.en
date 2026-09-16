---
title: Release Notes for the Adobe Experience Platform Cloud Connector Extension
description: The latest release notes for the Cloud Connector extension in Adobe Experience Platform.
exl-id: 5ee85d9f-71f4-46ee-9064-4ceee1cf90e7
TQID: https://experienceleague.adobe.com/zQaZrzZhVrNIxoCn9FJa743AjDIuVEZdnxNHzAxV9wg
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Adobe Experience Platform Cloud Connector Extension release notes

## January 17, 2023

v1.0.1

* Fix an issue where a valid JSON pasted in the Body Raw textarea was saved as a string instead of a JSON.
* Do not allow Body to be set on GET or HEAD requests.
* Fix a bug where saving a response larger than 5kb would make the rule execution fail.
