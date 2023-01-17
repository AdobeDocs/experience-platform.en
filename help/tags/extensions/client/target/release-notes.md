---
title: Release Notes for the Adobe Target Extension
description: The latest release notes for the Adobe Target tag extension in Adobe Experience Platform.
exl-id: ba29f614-c3cd-4e0b-b043-2b1c17567def
---
# Adobe Target release notes

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

## September 16, 2021

### Adobe Target Extension 0.11.4

* Updated to at.js v1.8.3
* Added `SameSite=None` and `Secure` attributes when setting cookies

## July 24, 2020

### Adobe Target Extension 0.11.3

* Fixed a bug when the extension fails if a script or code adds `default` property to the `window` or `document`

## June 15, 2020

### Adobe Target Extension 0.11.2

* Fixed an issue when using CNAME and edge override, where at.js 1.x might incorrectly create the server domain, resulting in the Target request failing

## March 25, 2020

### Adobe Target Extension 0.11.1

* Updated at.js to v1.8.1
* Fixed an issue where params and page load params were not processed correctly

## October 10, 2019

### Adobe Target Extension 0.11.0

* Updated at.js to v1.8.
* Improved performance for integrations between Experience Cloud ID library (ECID) v4.4 and at.js 1.8.
* Previously, the ECID library made two blocking calls before at.js could fetch experiences. This has been reduced to a single call, which significantly improves performance.

>[!NOTE]
>Please upgrade your ECID tag extension for Adobe Experience Platform to v4.4.1 to take advantage of this performance enhancement.

## July 31, 2019

### Adobe Target Extension 0.10.1

* Hotfix for parameters handling the tag extension for Adobe Target

## May 4, 2019

### Adobe Target Extension 0.10.0

* Fixed a data elements issue caused by the latest Google Chrome changes

## March 14, 2019

### Adobe Target Extension 0.9.3

* Updated extension version to use at.js 1.7.1

## February 20, 2019

### Adobe Target Extension 0.9.2

* Fixed race conditions between Target and Analytics extensions

## February 12, 2019

### Adobe Target Extension 0.9.1

#### **Features**

* Updated Extension to use at.js 1.7.0 that has Opt-in privacy functionality supported via tags to control how and when the Target tag is fired. Please check tags documentation on how to setup your implementation of Opt-in. Added possibility to customize if an mbox parameter that has an empty value should be sent to Target or not.

## January 23, 2019

### Adobe Target Extension 0.8.4

* Updated at.js to version 1.6.4
* Extension UI migrated to Adobe Spectrum

## November 15, 2018

### Adobe Target Extension 0.8.2

* Updated at.js to version 1.6.3

## October 24, 2018

### Adobe Target Extension 0.8.1

* Updated at.js to version 1.6.2

## August 23, 2018

### Adobe Target Extension 0.8.0

* Updated at.js to version 1.6.0

## August 10, 2018

### Adobe Target Extension 0.7.2

* Minor changes
* Updated the `exchangeUrl` property in the `extension.json` file

## August 1, 2018

### Adobe Target Extension 0.7.1

* Minor fixes

## June 18, 2018

### Adobe Target Extension 0.7.0

* Updated at.js version to 1.5.0
* Fixed an issue where Media Optimizer threw a null reference error in IE 11

## June 15, 2018

### Adobe Target Extension 0.6.0

#### **Features**

* Target Extension has been updated to use at.js v1.3.1. When you deploy Target with Analytics, we now wait until all Target calls have resolved (including redirect offers) before Analytics fires, resolving the race condition that previously existed.

## February 22, 2018

### Adobe Target Extension 0.4.1

#### **Features**

* Added Adobe Exchange listing to extension.json
* Added checks to see if Target is disabled and if Authoring is enabled

#### **Bug fixes**

* Fixed an error in the Adobe Target Extension that prevented the Visual Experience Composer from unhiding the page when deployed through tags.

## February 8, 2018

### Adobe Target Extension 0.4.0

#### **Features**

* Updated views in extension configuration screens
* at.js has been updated to version 1.2.3 (adds support for JSON offers)
