---
title: Adobe Experience Platform Web SDK Release Notes
description: The latest release notes for the Adobe Experience Platform Web SDK.
keywords: Adobe Experience Platform Web SDK;Platform Web SDK;Web SDK;release notes;
---

# Release notes

## Version 2.3.0

* Added nonce support to allow for stricter content security policies.
* Added personalization support for single-page applications.
* Improved compatibility with other on-page JavaScript code that may be overwriting `window.console` APIs.
* Bug Fix: `sendBeacon` was not being used when `documentUnloading` was set to `true` or when link clicks were automatically tracked.
* Bug Fix: A link wouldn't be automatically tracked if the anchor element contained HTML content.
* Bug Fix: Certain browser errors containing a read-only `message` property were not handled appropriately, resulting in a different error being exposed to the customer.
* Bug Fix: Running the SDK within an iframe would result in an error if the iframe's HTML page was from a different subdomain than the parent window's HTML page. 

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
