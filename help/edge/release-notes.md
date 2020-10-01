---
title: Adobe Experience Platform Web SDK release notes
seo-title: Adobe Experience Platform Web SDK release notes
description: Adobe Experience Platform Web SDK release notes.
seo-description: Adobe Experience Platform Web SDK release notes.
keywords: Adobe Experience Platform Web SDK;Platform Web SDK;Web SDK;release notes;
---

# Release Notes

## Version 2.2.0

* Bug Fix: The Opt-in object was blocking Alloy from making calls when `idMigrationEnabled` is `true`.
* Bug Fix: Make Alloy aware of requests that should return personalization offers to prevent a flickering issue.

## Version 2.1.0

* Remove the `syncIdentity` command and support passing those IDs in the `sendEvent` command.
* Support IAB 2.0 Consent Standard.
* Support passing additional IDs in the `setConsent` command.
* Support overriding the `datasetId` in the `sendEvent` command.
* Support Alloy Monitors ([Read more](https://github.com/adobe/alloy/wiki/Monitoring-Hooks))
* Pass `environment: browser` in the implementation details context data.
