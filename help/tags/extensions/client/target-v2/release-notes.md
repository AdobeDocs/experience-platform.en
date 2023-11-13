---
title: Release Notes for the Adobe Target v2 Extension
description: The latest release notes for the Adobe Target v2 tag extension in Adobe Experience Platform.
exl-id: c1a04e62-026d-4b16-aa70-bc6d5dbe6b2d
---
# Adobe Target v2 extension release notes

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

## v0.20.1 (November 3, 2023)

- Updated to support `at.js` 2.11.2.
- Fixed a bug that caused inconsistencies in the response tokens sent on custom events.

## v0.20.0 (October 9, 2023)

- Updated to support `at.js` 2.11.0.
- Added support for setting custom Adobe Experience Platform sandboxId and sandboxName in targetGlobalSettings, which will be passed to Delivery API on getOffer/getOffers calls.
- Shadow DOM fix for chaining :eq() in selector.

## v0.19.3 (September 18, 2023)

- Updated to support `at.js` v2.10.3.
- Fixed an issue that incorrectly triggered the at-content-rendering-succeeded custom event when no offers are rendered. The correct event, at-content-rendering-no-offers, is now triggered.
- Added eventToken and responseTokens to error object for the at-content-rendering-failed custom event.

## v0.19.2 (February 14, 2023)

- Fixed an issue with allowing timeout to be set to a data element.

## v0.19.1 (February 3, 2023)

- Updated to support `at.js` v2.10.1
- Client custom Mbox parameters now correctly support dot notation
- Delivery calls no longer made in VEC

## v0.19.0 (September 19, 2022)

- Updated to support `at.js` v2.10.0
- Added cross-domain tracking support.

## v0.18.0 (June 1, 2022)

- Updated to support `at.js` v2.9.0
- Added User Agent Client Hints support.

## v0.17.1 (January 28, 2022)

- Updated to support `at.js` v2.8.1
- Fixed `pageLoad` not being mapped to `target-global-mbox` in ODD hybrid execution mode
- Fixed an issue with analytics details for `mbox` request
- Upgraded dev dependencies to fix security vulnerabilities

## v0.17.0 (January 7, 2022)

- Updated to support `at.js` v2.8.0, which is now collecting feature usage and performance telemetry data.  Personal data is not collected. To opt out of this feature, set `telemetryEnabled` to `false` in `targetGlobalSettings`. 

## v0.16.0 (October 28, 2021)

- Updated to support `at.js` v2.7.0, now available for download from Adobe Target.

## v0.15.2 (August 16, 2021)

- Updated to support `at.js` 2.6.1.
- Initialize On-Device decisioning on start up independent of Page Load event.
- On-Device decisioning can now be used on first visit after the artifact has downloaded.

## v0.15.1 (July 20, 2021)

- Fixed an issue with a `stringify` function name clash, which led to incorrect UUID values being generated for `sessionId`, `requestId`, and so on.

## v0.15.0 (July 16, 2021)

- Add secure attribute to cookies whenever `at.js` settings secureOnly is set to true
- Response tokens are now available when using `triggerView()`
- Fixed a bug related to `CONTENT_RENDERING_NO_OFFERS` event. Now it is triggered correctly whenever there is not content returned from Target
- A4T click metrics details are correctly returned when using prefetch requests
- UUID generation no longer uses `Math.random()`, but relies on `window.crypto`
- `sessionId` cookie expiry is correctly extended on every network call
- SPA view cache initialization is now correctly handled and it honors `viewsEnable` settings

## v0.14.2 (June 2, 2021)

- Fix a bug where the final bundle contains two `at.js` versions, one with On-Device Decisioning and one without.

## v0.14.1 (May 19, 2021)

- Fix regression introduced with v0.14 release where Load Target action was firing global mbox calls

## v0.14 (May 14, 2021)

- Added a new action Load Target with [On-Device Decisioning](./overview.md#load-target-with-on-device-decisioning), which loads `at.js` 2.5 with On-Device Decisioning capabilities
- Updated `at.js` to 2.5


## v0.13.7 (March 25, 2021)

- Fixed an issue with `targetPageParams` being included in mbox requests. `targetPageParams` should only be included in `pageLoad` requests.
- Fixed an issue with document and window global objects in the tag extension by replacing global object dependencies with direct references to them. 
- Updated `at.js` to 2.4.1.

## v0.13.6 (January 25, 2021)

- Adds support for unified profile/platform ID to delivery API customerIds
- Fixes invalid style tag injection
- Updated at.s to 2.4.0
- Resolved issue where undefined params can result in bad delivery requests

## v0.13.4 (November 25, 2020)

- Fixed a bug where mbox parameters were not displaying in the UI
- Branding updates
- Updated the `at.js` version to 2.3.3

## v0.13.3 (July 24, 2020)

- Fixed a bug that caused QA mode links not to work for inactive activities
- Fixed a bug when the extension fails if a script or code adds `default` property to the `window` or `document`

## v0.13.2 (June 15, 2020)

- Fixed an issue when using CNAME and edge override, where `at.js` 1.x might incorrectly create the server domain, resulting in the Target request failing
- Fixed an issue where, when using the v2 tag extension for Target and Adobe Analytics tag extension, Target delayed the Analytics sendBeacon call
- Improved the `deviceIdLifetime` setting by making it overridable via `targetGlobalSettings`

## v0.13.0 (March 25, 2020)

- Updated `at.js` to v2.3.
- Added Target Global Mbox support in adobe.target.getOffer API
- Fixed an issue where params and page load params were not processed correctly

## v0.12.0 (October 10, 2019)

- Updated `at.js` to v2.2.
- Improved performance for integrations between Experience Cloud ID library (ECID) v4.4 and `at.js` 2.2.
- Previously, the ECID library made two blocking calls before `at.js` could fetch experiences. This has been reduced to a single call, which significantly improves performance.

>[!NOTE]
>Please upgrade your ECID tag extension to v4.4.1 to take advantage of this performance enhancement.

## v0.11.1 (July 31, 2019)

- Updated extension version to use `at.js` 2.1.1
- Added a fix for handling parameters

## v0.11.0 (June 3, 2019)

- New tag extension to support `at.js` 2.1
