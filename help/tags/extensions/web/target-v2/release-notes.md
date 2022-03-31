---
title: Release Notes for the Adobe Target v2 Extension
description: The latest release notes for the Adobe Target v2 tag extension in Adobe Experience Platform.
exl-id: c1a04e62-026d-4b16-aa70-bc6d5dbe6b2d
---
# Adobe Target v2 extension release notes

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

## January 28, 2022

### Adobe Target v2 Extension 0.17.1

- Updated to support `at.js` v2.8.1
- Fixed `pageLoad` not being mapped to `target-global-mbox` in ODD hybrid execution mode
- Fixed an issue with analytics details for `mbox` request
- Upgraded dev dependencies to fix security vulnerabilities

## January 7, 2022

### Adobe Target v2 Extension 0.17.0

- Updated to support `at.js` v2.8.0, which is now collecting feature usage and performance telemetry data.  Personal data is not collected. To opt out of this feature, set `telemetryEnabled` to `false` in `targetGlobalSettings`. 

## October 28, 2021

### Adobe Target v2 Extension 0.16.0

- Updated to support `at.js` v2.7.0, now available for download from Adobe Target.

## July 20, 2021

### Adobe Target v2 Extension 0.15.1

- Fixed an issue with a `stringify` function name clash, which led to incorrect UUID values being generated for `sessionId`, `requestId`, and so on.

## July 16, 2021

### Adobe Target v2 Extension 0.15.0

- Add secure attribute to cookies whenever `at.js` settings secureOnly is set to true
- Response tokens are now available when using `triggerView()`
- Fixed a bug related to `CONTENT_RENDERING_NO_OFFERS` event. Now it is triggered correctly whenever there is not content returned from Target
- A4T click metrics details are correctly returned when using prefetch requests
- UUID generation no longer uses `Math.random()`, but relies on `window.crypto`
- `sessionId` cookie expiry is correctly extended on every network call
- SPA view cache initialization is now correctly handled and it honors `viewsEnable` settings

## June 2, 2021

### Adobe Target v2 Extension 0.14.2

- Fix a bug where the final bundle contains two `at.js` versions, one with On-Device Decisioning and one without.

## May 19, 2021

### Adobe Target v2 Extension 0.14.1

- Fix regression introduced with v0.14 release where Load Target action was firing global mbox calls

## May 14, 2021

### Adobe Target v2 Extension 0.14

- Added a new action Load Target with [On-Device Decisioning](./overview.md#load-target-with-on-device-decisioning), which loads `at.js` 2.5 with On-Device Decisioning capabilities
- Updated `at.js` to 2.5


## March 25, 2021

### Adobe Target v2 Extension 0.13.7

- Fixed an issue with `targetPageParams` being included in mbox requests. `targetPageParams` should only be included in `pageLoad` requests.
- Fixed an issue with document and window global objects in the tag extension by replacing global object dependencies with direct references to them. 
- Updated `at.js` to 2.4.1.

## January 25, 2021

### Adobe Target v2 Extension 0.13.6

- Adds support for unified profile/platform ID to delivery API customerIds
- Fixes invalid style tag injection
- Updated at.s to 2.4.0
- Resolved issue where undefined params can result in bad delivery requests

## November 25, 2020

### Adobe Target v2 Extension 0.13.4

- Fixed a bug where mbox parameters were not displaying in the UI
- Branding updates
- Updated the `at.js` version to 2.3.3

## July 24, 2020

### Adobe Target v2 Extension 0.13.3

- Fixed a bug that caused QA mode links not to work for inactive activities
- Fixed a bug when the extension fails if a script or code adds `default` property to the `window` or `document`

## June 15, 2020

### Adobe Target v2 Extension 0.13.2

- Fixed an issue when using CNAME and edge override, where `at.js` 1.x might incorrectly create the server domain, resulting in the Target request failing
- Fixed an issue where, when using the v2 tag extension for Target and Adobe Analytics tag extension, Target delayed the Analytics sendBeacon call
- Improved the `deviceIdLifetime` setting by making it overridable via `targetGlobalSettings`

## March 25, 2020

### Adobe Target v2 Extension 0.13.0

- Updated `at.js` to v2.3.
- Added Target Global Mbox support in adobe.target.getOffer API
- Fixed an issue where params and page load params were not processed correctly

## October 10, 2019

### Adobe Target v2 Extension 0.12.0

- Updated `at.js` to v2.2.
- Improved performance for integrations between Experience Cloud ID library (ECID) v4.4 and `at.js` 2.2.
- Previously, the ECID library made two blocking calls before `at.js` could fetch experiences. This has been reduced to a single call, which significantly improves performance.

>[!NOTE]
>Please upgrade your ECID tag extension to v4.4.1 to take advantage of this performance enhancement.

## July 31, 2019

### Adobe Target v2 Extension 0.11.1

- Updated extension version to use `at.js` 2.1.1
- Added a fix for handling parameters

## June 3, 2019

### Adobe Target v2 Extension 0.11.0

- New tag extension to support `at.js` 2.1
