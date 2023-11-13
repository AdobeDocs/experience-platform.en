---
title: Adobe Experience Platform Web SDK Release Notes
description: The latest release notes for the Adobe Experience Platform Web SDK.
keywords: Adobe Experience Platform Web SDK;Platform Web SDK;Web SDK;release notes;
exl-id: efd4e866-6a27-4bd5-af83-4a97ca8adebd
---

# Release notes

This document covers the release notes for the Adobe Experience Platform Web SDK.
For the latest release notes on the Web SDK tag extension, see the [Web SDK tag extension release notes](../tags/extensions/client/web-sdk/web-sdk-ext-release-notes.md).

## Version 2.19.0 - November 1, 2023

**New features**

* Added support for rendering in-app messages from Adobe Journey Optimizer.
* Added support for top and bottom of page events.
* Added "defaultPersonalizationEnabled" option to the sendEvent command to control requesting the page-wide scope and default surface.

**Fixes and improvements**

* Combined personalization display events together when rendering multiple types of personalization.
* Fixed an issue where single page application view names were case-sensitive.
* Fixed an issue with shadow DOM personalized offer selectors.

## Version 2.18.0 - July 31, 2023

**New features**

* Added support for [per-command overrides of the datastream ID](../datastreams/overrides.md).

**Fixes and improvements**

* Fixed issue where exit links failed to qualify due to domain being part of query.
* Deprecated `edgeConfigId` in favor of `datastreamId` in the Web SDK configuration.

## Version 2.17.0 - May 17, 2023

**Fixes and improvements**

* The Web SDK now encodes the Audience Manager cookie destination values, similar to the [Data Integration Library (DIL)](https://experienceleague.adobe.com/docs/audience-manager/user-guide/dil-api/dil-overview.html).

## Version 2.16.0 - April 25, 2023

**New features**

* Added support for [datastream configuration overrides](../datastreams/overrides.md).

## Version 2.15.0 - March 30, 2023

**New features**

* Added support for [`onBeforeLinkClickSend`](fundamentals/configuring-the-sdk.md#onBeforeLinkClickSend) link click callback.
* Added support for Adobe Journey Optimizer click tracking.

**Fixes and improvements**

* Link collection now includes link name and visitor region.
* Removed console error for failed URL destinations.

## Version 2.14.0 - January 25, 2023

* (Beta) Added support for Adobe Journey Optimizer surfaces and propositions.

**Fixes and improvements**

* Fixed an issue with Adobe Target VEC custom code actions where the code was injected into an alternate location than with [!DNL at.js].
* Fixed an issue where in some edge cases the "referer" header was not set properly on requests to the Edge Network.
* Fixed an issue where [user agent client hint](fundamentals/user-agent-client-hints.md) properties could be set to an incorrect type.
* Fixed an issue where `placeContext.localTime` did not match the schema.

## Version 2.13.1 - October 13, 2022

* Fixed an issue where visitor migration does not work if window.Visitor is defined after configure. This is especially an issue when running with Adobe Tags.
* Fixed an issue where `device.screenWidth` and `device.screenHeight` were populated as strings in some environments.

## Version 2.13.0 - September 28, 2022

**New features**

* Added support for [Page by Page Full Migration](home.md#migrating-to-web-sdk). The Adobe Target profile will now be preserved as a visitor moves between at.js and Web SDK pages.
* Added configurable support for [high entropy User-Agent Client Hints](fundamentals/user-agent-client-hints.md#high-entropy).
* Added support for the new `applyResponse` command. This enables hybrid personalization via the [Edge Network Server API](../server-api/overview.md).
* QA mode links now work across multiple pages.

**Fixes and improvements**

* Fixed an issue where personalization click tracking metrics were not updated when link tracking was disabled.
* Updated commands to throw a validation error when unknown options are specified.
* The `_experience.decisioning.propositionEventType` property is now populated when automatically sending display and interaction personalization events.
* Added duplicated namespace validation for the `getIdentity` command.
* Added duplicated decision scope validation for the `sendEvent` command.

## Version 2.12.0 - June 29, 2022

* Change the requests to the Edge Network to use the `cluster` cookie location hint as part of the URL. This ensures that users who change their location (e.g. through a VPN or driving with mobile devices, etc) mid session hit the same edge and have the same personalization profile.
* Stringify configured functions in the getLibraryInfo command response.

## Version 2.11.0 - June 13, 2022

**New features**

* You can now deliver personalized experiences more accurately, by sharing visitor IDs between mobile apps and mobile web content, and across domains. See the [dedicated documentation](identity/id-sharing.md) to learn more.
* You can now render or execute an array of propositions from [!DNL Adobe Target] into single-page applications, without incrementing the analytics metrics. This reduces reporting errors and increases analytics accuracy. See the [dedicated documentation](personalization/rendering-personalization-content.md#applypropositions) to learn more.
* Added additional information to the `getLibraryInfo` command including available commands and the final configuration for the instance.

**Fixes and improvements**

* Updated cookie settings to use `sameSite="none"` and `secure` flag on [!DNL HTTPS] pages.
* Fixed an issue where personalized content was not applied correctly when using the `eq` pseudo selector.
* Fixed an issue where `localTimezoneOffset` could fail Experience Platform validation.

## Version 2.10.1 - May 3, 2022

* Fixed an issue where multiple persistent iframes were created for ID syncs and segment destinations.

## Version 2.10.0 - April 22, 2022

* Use a persistent iframe for all ID syncs and segment destinations.
* Fixed an issue where merged metrics propositions were duplicated in the `sendEvent` result.

## Version 2.9.0 - March 10, 2022

* Added support for tracking [!DNL control (default)] Adobe Target experiences.
* Optimized the view-change events for single page applications. The display notification is now included with the view-change event when personalized experiences are rendered.
* Removed console warning when no `eventType` is present.
* Fixed an issue where the `propositions` property was only returned from a `sendEvent` command when experiences were requested or retrieved from the cache. The `propositions` property will now always be defined as an array.
* Fixed an issue where hidden containers were not shown when there was an error returned from the Edge Network.
* Fixed an issue where the interact events were not being counted in Adobe Target. This was fixed by adding the view name to the XDM at web.webPageDetails.viewName.
* Fix broken documentation links in console messages.

## Version 2.8.0 - January 19, 2022

* Support shadow DOM selectors for personalization.
* Renamed personalization event types. (`display` and `click` become `decisioning.propositionDisplay` and `decisioning.propositionInteract`)
* Fixed an issue where HTML offers with inline script tags added the script tags twice to the page even though the script was only run once.

## Version 2.7.0 - October 26, 2021

* Expose additional information from the Edge Network in the return value from `sendEvent`, including `inferences` and `destinations`. The format of these properties may change as these features are currently rolling out as part of a Beta. For more information, see [Tracking Events.](fundamentals/tracking-events.md)

## Version 2.6.4 - September 7, 2021

* Fixed an issue where set HTML Adobe Target actions applied to the `head` element were replacing the entire `head` content. Now set HTML actions applied to the `head` element are changed to append HTML.

## Version 2.6.3 - August 16, 2021

* Fixed an issue where objects not intended for public use were exposed through the resolved promise from the `configure` command.

## Version 2.6.2 - August 4, 2021

* Fixed an issue where a warning about the deprecation of `result.decisions` (provided by the `sendEvent` command) would be logged to the console even when the `result.decisions` property wasn't being accessed. No warning will be logged when accessing the `result.decisions` property, but the property is still deprecated.

## Version 2.6.1 - July 29, 2021

* Fixed an issue where rendering personalization for a single-page app view that has no personalization content would throw an error and cause the promise returned from the `sendEvent` command to be rejected.

## Version 2.6.0 - July 27, 2021

* Provides more personalization content in the `sendEvent` resolved promise, including Adobe Target response tokens. When the `sendEvent` command is executed, a promise is returned, which is eventually resolved with a `result` object containing information received from the server. Previously, this result object included a property named `decisions`. This `decisions` property has been deprecated. A new property, `propositions`, has been added. This new property provides customers with access to more personalization content, including [response tokens](https://experienceleague.adobe.com/docs/experience-platform/edge/personalization/adobe-target/accessing-response-tokens.html).

## Version 2.5.0 - June 2021

* Added support for redirect personalization offers.
* Automatically collected viewport widths and heights that are negative values will no longer be sent to the server.
* When an event is canceled by returning `false` from an `onBeforeEventSend` callback, a message is now logged.
* Fixed an issue where specific pieces of XDM data intended for a single event was included across multiple events.

## Version 2.4.0 - March 2021

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

## Version 2.3.0 - November 2020

* Added nonce support to allow for stricter content security policies.
* Added personalization support for single-page applications.
* Improved compatibility with other on-page JavaScript code that may be overwriting `window.console` APIs.
* Bug Fix: `sendBeacon` was not being used when `documentUnloading` was set to `true` or when link clicks were automatically tracked.
* Bug Fix: A link wouldn't be automatically tracked if the anchor element contained HTML content.
* Bug Fix: Certain browser errors containing a read-only `message` property were not handled appropriately, resulting in a different error being exposed to the customer.
* Bug Fix: Running the SDK within an iframe would result in an error if the iframe's HTML page was from a different subdomain than the parent window's HTML page.

## Version 2.2.0 - October 2020

* Bug Fix: The Opt-in object was blocking Alloy from making calls when `idMigrationEnabled` is `true`.
* Bug Fix: Make Alloy aware of requests that should return personalization offers to prevent a flickering issue.

## Version 2.1.0 - August 2020

* Remove the `syncIdentity` command and support passing those IDs in the `sendEvent` command.
* Support IAB 2.0 Consent Standard.
* Support passing additional IDs in the `setConsent` command.
* Support overriding the `datasetId` in the `sendEvent` command.
* Support Alloy Monitors ([Read more](https://github.com/adobe/alloy/wiki/Monitoring-Hooks))
* Pass `environment: browser` in the implementation details context data.
