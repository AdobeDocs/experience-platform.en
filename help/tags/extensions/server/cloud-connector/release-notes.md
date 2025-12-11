---
title: Release Notes for the Adobe Experience Platform Cloud Connector Extension
description: The latest release notes for the Cloud Connector extension in Adobe Experience Platform.
exl-id: 5ee85d9f-71f4-46ee-9064-4ceee1cf90e7
---
# Adobe Experience Platform Cloud Connector Extension release notes

## January 17, 2023

v1.0.1

* Fix an issue where a valid JSON pasted in the Body Raw textarea was saved as a string instead of a JSON.
* Do not allow Body to be set on GET or HEAD requests.
* Fix a bug where saving a response larger than 5kb would make the rule execution fail.
