---
title: Release Notes for the Adobe Experience Cloud Identity Service Extension
description: The latest release notes for the Adobe Experience Cloud Identity Service tag extension in Adobe Experience Platform.
---
# Adobe Experience Cloud Identity Service extension release notes

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

For release notes on the Experience Cloud Identity Service itself and not just the Adobe Experience Platform tag extension, please reference: [https://experienceleague.adobe.com/docs/id-service/using/release-notes/release-notes.html](https://experienceleague.adobe.com/docs/id-service/using/release-notes/release-notes.html)

## Nov 3, 2020

### Experience Cloud ID Extension 5.2.1

#### **Features**

* This patch contains a fix for writing cookies from an iFrame with attribute `SameSite=None` in Google Chrome browser.

## Jan 12, 2021

### Experience Cloud ID Extension 5.2.0

#### **Features**

* Updating to VisitorJS 5.2.0 patch with a fix for ECID DataElement could not get updated when receive consent.

## Oct 27, 2020

### Experience Cloud ID Extension 5.1.0

#### **Features**

* Adding `sameSiteCookie` config to specify the `SameSite` attribute of the `AMCV` cookie.
This config supports the following values for `SameSite` attribute:

  * `Strict`
  * `Lax`
  * `None`

Details of these attribute values are on [web.dev](https://web.dev/samesite-cookies-explained/) and [chromium](https://www.chromium.org/updates/same-site)


## Aug 13, 2020

### Experience Cloud ID Extension 5.0.1

#### **Features**

* Updating to VisitorJS 5.0.1 patch with a fix for adding d_cf flag when the IAB consent string has changed.

## June 15, 2020

### Experience Cloud ID Extension 5.0.0

#### **Features**

* Adding support for `IAB TCF` – Transparency & Consent Framework – `Version 2.0`.

## April 13, 2020

### Experience Cloud ID Extension 4.6.0

#### **Features**

* Made `loadSSL` flag on by default. All calls to Identity Service will be on `https` by default. Customers can set it to false if they want to call Identity Services on http from their non-ssl pages.
* Updated the function used to detect Internet-Explorer (IE) version, to fix an issue reported by ESLint.
* Bug fix for a performance issue on Internet-Explorer (IE) 11 when ECID is given optIn pre-approval and updated later.

## January 22, 2020

### Experience Cloud ID Extension 4.5.2

#### **Features**

* Updated visitor.js to 4.5.2
* Visitor 4.5.1 includes a bug fix for IAB plugin for Optin
* Updated `setCustomerIDs` method to reject any empty IDs sent.

## January 7, 2020

### Experience Cloud ID Extension 4.4.2

#### **Features**

* Updated visitor.js to 4.4.2
* Improvements for `getVisitorValues` method to fetch values faster


## September 19, 2019

### Experience Cloud ID Extension 4.4.1

#### **Features**

* Updated visitor.js to 4.4.1
* Fixed a bug for get Opt-In preApprovals Input
* Renamed VIDEO_ANALYTICS to MEDIA_ANALYTICS in preOptInApprovals

  ![](../../../images/ecid-media-analytics.png)

## July 17, 2019

### Experience Cloud ID Extension 4.4.0

#### **Features**

* Updated visitor.js to 4.4.0
* Added SHA256 hashing support for setCustomerIDs

  ![](../../../images/ecid-setCustomerIDs-hash.png)

## May 13, 2019

### Experience Cloud ID Extension 4.3.1

#### **Features**

* Updated visitor.js to 4.3
* Added data element type for ECID as part of the tag extension

  ![](../../../images/ecid-data-element.png)

## April 9, 2019

### Experience Cloud ID Extension 4.2.0

#### **Features**

* Updated visitor.js to 4.2 which included support for Audience Manager IAB TCF Plug-in

## February 25, 2019

### Experience Cloud ID Extension 4.1.0

#### **Features**

* Updated visitor.js to 4.1 which updated publishDestinations per new API change. With this update the referrer information of the page can be exposed during ID - sync if desired.

## February 15, 2019

### Experience Cloud ID Extension 4.0.0

#### **Features**

* Updated visitor.js to 4.0
* Added a configuration options for the new built-in Opt-In Object. Opti-In settings can be used to suppress cookie and beacon calls of Adobe Solutions to better support regulations such as GDPR

  ![](../../../images/ext-mcid-opt-in.png)

## March 20, 2018

### Experience Cloud ID Extension 3.1.0

#### **Features**

* Updated visitor.js to 3.1
* Adds two configuration properties: `resetBeforeVersion` and `serverState`
