---
title: Release Notes for the Adobe Experience Cloud Identity Service Extension
description: The latest release notes for the Adobe Experience Cloud Identity Service tag extension in Adobe Experience Platform.
exl-id: f9bfbed7-1eec-4916-9235-a75b5e2efcf8
TQID: https://experienceleague.adobe.com/EgQQOzGQ6-G5So513F-YTlTLFLj56DmCeOscpe429EY
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: df80eeb1-8d72-467e-b0df-9d51c7d3a0a1
    internal-label: Audience Manager
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c814092e-2730-45e8-a12d-e084529f52cb
    internal-label: Destinations
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
  - id: fd307ce7-56f5-4ee3-af68-a7833ff6e85e
    internal-label: API
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e1e0219c-f879-479f-8427-888ed2a6e9c2
    internal-label: Insights
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Adobe Experience Cloud Identity Service extension release notes

This document covers the release notes for the Adobe Experience Cloud Identity Service tag extension. For release notes on Experience Cloud Identity Service itself, please refer to the [Identity Service documentation](https://experienceleague.adobe.com/docs/id-service/using/release-notes/release-notes.html).

## Oct 17, 2022

### Experience Cloud ID Extension 5.5.0

* The extension now supports version 5.5.0 of the [Visitor JS Client](https://github.com/Adobe-Marketing-Cloud/id-service). Refer to the [Visitor release notes](https://github.com/Adobe-Marketing-Cloud/id-service/releases/tag/5.5.0) for specific updates.

## Mar 9, 2022

### Experience Cloud ID Extension 5.4.0

* This version contains the latest Visitor 5.4.0, which has the following updates:

  * Ability to configure the lifetime of the `s_ecid` cookie using cookieLifetime config
  * Update for a Firefox browser issue that occurs when a page is loaded in a child iFrame

## Oct 10, 2021

### Experience Cloud ID Extension 5.3.1

* This version contains the latest Visitor 5.3.0, which has the following new updates:

  * Updated algorithm to generate local ECID
  * Latest Opt-In with `Secure` and `SameSite` flags for the privacy cookie
  * Fix for a Firefox browser issue when a page is loaded in a child iFrame

## Jan 12, 2021

### Experience Cloud ID Extension 5.2.0

* Updating to VisitorJS 5.2.0 patch with a fix for ECID DataElement could not get updated when receive consent.

## Nov 3, 2020

### Experience Cloud ID Extension 5.2.1

* This patch contains a fix for writing cookies from an iFrame with attribute `SameSite=None` in Google Chrome browser.

## Oct 27, 2020

### Experience Cloud ID Extension 5.1.0

* Adding `sameSiteCookie` config to specify the `SameSite` attribute of the `AMCV` cookie.
This config supports the following values for `SameSite` attribute:

  * `Strict`
  * `Lax`
  * `None`

Details of these attribute values are on [web.dev](https://web.dev/samesite-cookies-explained/) and [chromium](https://www.chromium.org/updates/same-site)


## Aug 13, 2020

### Experience Cloud ID Extension 5.0.1

* Updating to VisitorJS 5.0.1 patch with a fix for adding d_cf flag when the IAB consent string has changed.

## June 15, 2020

### Experience Cloud ID Extension 5.0.0

* Adding support for `IAB TCF` – Transparency & Consent Framework – `Version 2.0`.

## April 13, 2020

### Experience Cloud ID Extension 4.6.0

* Made `loadSSL` flag on by default. All calls to Identity Service will be on `https` by default. Customers can set it to false if they want to call Identity Services on http from their non-ssl pages.
* Updated the function used to detect Internet-Explorer (IE) version, to fix an issue reported by ESLint.
* Bug fix for a performance issue on Internet-Explorer (IE) 11 when ECID is given optIn pre-approval and updated later.

## January 22, 2020

### Experience Cloud ID Extension 4.5.2

* Updated visitor.js to 4.5.2
* Visitor 4.5.1 includes a bug fix for IAB plugin for Optin
* Updated `setCustomerIDs` method to reject any empty IDs sent.

## January 7, 2020

### Experience Cloud ID Extension 4.4.2

* Updated visitor.js to 4.4.2
* Improvements for `getVisitorValues` method to fetch values faster


## September 19, 2019

### Experience Cloud ID Extension 4.4.1

* Updated visitor.js to 4.4.1
* Fixed a bug for get Opt-In preApprovals Input
* Renamed VIDEO_ANALYTICS to MEDIA_ANALYTICS in preOptInApprovals

  ![](../../../images/ecid-media-analytics.png)

## July 17, 2019

### Experience Cloud ID Extension 4.4.0

* Updated visitor.js to 4.4.0
* Added SHA256 hashing support for setCustomerIDs

  ![](../../../images/ecid-setCustomerIDs-hash.png)

## May 13, 2019

### Experience Cloud ID Extension 4.3.1

* Updated visitor.js to 4.3
* Added data element type for ECID as part of the tag extension

  ![](../../../images/ecid-data-element.png)

## April 9, 2019

### Experience Cloud ID Extension 4.2.0

* Updated visitor.js to 4.2 which included support for Audience Manager IAB TCF Plug-in

## February 25, 2019

### Experience Cloud ID Extension 4.1.0

* Updated visitor.js to 4.1 which updated publishDestinations per new API change. With this update the referrer information of the page can be exposed during ID - sync if desired.

## February 15, 2019

### Experience Cloud ID Extension 4.0.0

* Updated visitor.js to 4.0
* Added a configuration options for the new built-in Opt-In Object. Opti-In settings can be used to suppress cookie and beacon calls of Adobe Solutions to better support regulations such as GDPR

  ![](../../../images/ext-mcid-opt-in.png)

## March 20, 2018

### Experience Cloud ID Extension 3.1.0

* Updated visitor.js to 3.1
* Adds two configuration properties: `resetBeforeVersion` and `serverState`
