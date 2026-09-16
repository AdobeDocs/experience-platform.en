---
title: Release Notes for the Common Analytics Plugins Extension
description: The latest release notes for the Common Analytics Plugins tag extension in Adobe Experience Platform.
exl-id: 5ea4b709-4e21-4f5d-be99-e72e4889ed99
TQID: https://experienceleague.adobe.com/94sa-1F-LVCY4pzDc4wdQ6okxEjupdZB1ddN0lLHbgE
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: d9830f6f-ceb6-4faa-9744-f281fe4439f9
    internal-label: Tags
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
---
# Common Analytics Plugins release notes

## June 03, 2022

### Common Analytics Plugins Extension 3.0.7

#### Features

* Plugins that set cookies now use the secure flag

## June 23, 2021

### Common Analytics Plugins Extension 3.0.6

#### Bug Fixes

* Fixed issue where getPercentPageViewed would break when using special characters

## May 20, 2021

### Common Analytics Plugins Extension 3.0.5

#### Bug Fixes

* Fixed issue where getTimeParting would not correctly initialize when using the generic initialize action

## March 26, 2021

### Common Analytics Plugins Extension 3.0.4

#### Bug Fixes

* Fixed issue where getPageLoadTime was incorrectly setting variables on the window object
* Fixed an issue where getQueryParam was returning undefined instead of "" if the queryParam was not present in the query string
* Fixed an issue where the incorrect version numbers were displaying in the initialize action

## March 19, 2021

### Common Analytics Plugins Extension 3.0.2

#### Features

* All plugins updated to automatically include version information as context data
* Added getPercentPageViewed plugin
* Added data elements for the following plugins
  * getGeoCoordinates
  * getNewRepeat
  * getPageName
  * getResponsiveLayout
  * getTimeParting
  * getTimeSinceLastVisit
  * getVisitDuration
  * getVisitNum
* Updated Styles

## April 9, 2020

### Common Analytics Plugins Extension 2.2.0

#### Bug Fixes

* Fixed wording in extension views

#### Features

* Updated documentation in the initialize action

## December 5, 2019

### Common Analytics Plugins Extension 2.1.1

#### Bug Fixes

* Fixed an issue that prevented backwards compatibility with versions 2.0.X
* Fixed an issue where documentation links pointed to the wrong documentation
* Fixed an issue where `getTimeSinceLastVisit` appeared twice in the initialize action

## November 15, 2019

### Common Analytics Plugins Extension 2.1.0

#### Bug Fixes

* Reintroduced individual plugin actions to support backwards compatibility
* Fixed an issue with the `cleanStr` plugin
* Fixed an issue with the `getResponsiveLayout` plugin
* Fixed an issue with the `getPageName` plugin

#### Features

* Version update for `getTimeParting`
* Version update for `numberSuite`
* Version update for `getNewRepeat`
* Updated documentation for all plugins

## October 30, 2019

### Common Analytics Plugins Extension 2.0.3

#### Bug Fixes

* Fixed an issue where documentation links were broken

## October 11, 2019

### Common Analytics Plugins Extension 2.0.2

#### Features

* Added 15 plugins to the extension
* Created new initialize action to support better ease of implementation

## July 11, 2019

### Common Analytics Plugins Extension 1.0.4

#### Features

* Extension released with seven plugins
* Individual actions to initialize each plugin
