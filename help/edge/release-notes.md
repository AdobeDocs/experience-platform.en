---
title: Adobe Experience Platform Web SDK Release Notes
description: The latest release notes for the Adobe Experience Platform Web SDK.
keywords: Adobe Experience Platform Web SDK;Platform Web SDK;Web SDK;release notes;
exl-id: efd4e866-6a27-4bd5-af83-4a97ca8adebd
---
# Release notes

## Version 2.4.0, March 2021

* The SDK can now be [installed as an npm package](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/installing-the-sdk.html).
* Added support for an `out` option when [configuring default consent](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/configuring-the-sdk.html#default-consent), which drops all events until consent is received (the existing `pending` option queues events and sends them once consent is received). 
* The [onBeforeEventSend callback](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/configuring-the-sdk.html#onbeforeeventsend) can now be used to prevent an event from being sent.
* Now uses an XDM schema field group instead of `meta.personalization` when sending events about personalized content being rendered or clicked.
* The [getIdentity command](https://experienceleague.adobe.com/docs/experience-platform/edge/identity/overview.html#retrieving-the-visitor-id) now returns the edge region ID alongside the identity.
* Warnings and errors received from the server have been improved and are handled in a more appropriate fashion. 
* Added support for [Adobe's Consent 2.0 standard](https://experienceleague.adobe.com/docs/experience-platform/edge/consent/supporting-consent.html?communicating-consent-preferences-via-the-adobe-standard).
* Consent preferences, when received, are hashed and stored in local storage for an optimized integration among CMPs, Platform Web SDK, and Platform Edge Network. If you are collecting consent preferences, we now encourage you to call `setConsent` on every page load.
* Two [monitoring hooks](https://github.com/adobe/alloy/wiki/Monitoring-Hooks), `onCommandResolved` and `onCommandRejected`, have been added.
* Bug Fix: Personalization interaction notification events would contain duplicate information about the same activity when a user navigated to a new single-page app view, back to the original view, and clicked an element qualifying for conversion.
* Bug Fix: If the first event sent by the SDK had `documentUnloading` set to `true`, [`sendBeacon`](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon) would be used to send the event, resulting in an error regarding an identity not being established.  

## Version 2.3.0, November 2020

* Added nonce support to allow for stricter content security policies.
* Added personalization support for single-page applications.
* Improved compatibility with other on-page JavaScript code that may be overwriting `window.console` APIs.
* Bug Fix: `sendBeacon` was not being used when `documentUnloading` was set to `true` or when link clicks were automatically tracked.
* Bug Fix: A link wouldn't be automatically tracked if the anchor element contained HTML content.
* Bug Fix: Certain browser errors containing a read-only `message` property were not handled appropriately, resulting in a different error being exposed to the customer.
* Bug Fix: Running the SDK within an iframe would result in an error if the iframe's HTML page was from a different subdomain than the parent window's HTML page. 

## Version 2.2.0, October 2020

* Bug Fix: The Opt-in object was blocking Alloy from making calls when `idMigrationEnabled` is `true`.
* Bug Fix: Make Alloy aware of requests that should return personalization offers to prevent a flickering issue.

## Version 2.1.0, August 2020

* Remove the `syncIdentity` command and support passing those IDs in the `sendEvent` command.
* Support IAB 2.0 Consent Standard.
* Support passing additional IDs in the `setConsent` command.
* Support overriding the `datasetId` in the `sendEvent` command.
* Support Alloy Monitors ([Read more](https://github.com/adobe/alloy/wiki/Monitoring-Hooks))
* Pass `environment: browser` in the implementation details context data.
