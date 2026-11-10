---
title: Release Notes for the Adobe Experience Platform Cloud Connector Extension
description: The latest release notes for the Cloud Connector extension in Adobe Experience Platform.
exl-id: 5ee85d9f-71f4-46ee-9064-4ceee1cf90e7
TQID: 'https://experienceleague.adobe.com/zQaZrzZhVrNIxoCn9FJa743AjDIuVEZdnxNHzAxV9wg'
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
  - id: dc6ebdf7-9a94-43eb-9184-759cfdd0cf1c
    internal-label: Event forwarding
subfeature_v2:
  - id: e1f2a3b4-4027-4027-9027-400000000027
    internal-label: Event forwarding extensions
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Adobe Experience Platform Cloud Connector Extension release notes

## January 17, 2023

v1.0.1

* Fix an issue where a valid JSON pasted in the Body Raw textarea was saved as a string instead of a JSON.
* Do not allow Body to be set on GET or HEAD requests.
* Fix a bug where saving a response larger than 5kb would make the rule execution fail.
