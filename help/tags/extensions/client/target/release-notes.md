---
title: Release Notes for the Adobe Target Extension
description: The latest release notes for the Adobe Target tag extension in Adobe Experience Platform.
exl-id: ba29f614-c3cd-4e0b-b043-2b1c17567def
TQID: https://experienceleague.adobe.com/BNYIC9e-tm16Vv2ODMD2E0gMwSUXU-21aJxmyIE9HLk
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: e43347a8-f2c5-4aa4-8623-6f13875d7e3a
    internal-label: Target
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c93393a4-e558-47e1-992e-c91ed4d480ce
    internal-label: Implementation
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: eb9732ab-8232-4b21-bc4c-89de86dbe4d7
    internal-label: Integrations
  - id: ed0d8d0e-04b9-4326-be72-a0fbca265377
    internal-label: Integrations
  - id: f7c7de77-382f-4f48-8b36-61a170f06d3d
    internal-label: Integrations
  - id: fc7979f3-56c3-43ca-9784-f1ea3dc69c4b
    internal-label: Integrations
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
  - id: fd0ff162-b6d3-4a11-8aeb-e165a01c0f0a
    internal-label: at.js
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Adobe Target release notes

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
