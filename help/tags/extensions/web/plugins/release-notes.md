---
title: Release Notes for the Common Analytics Plugins Extension
description: The latest release notes for the Common Analytics Plugins tag extension in Adobe Experience Platform.
exl-id: 5ea4b709-4e21-4f5d-be99-e72e4889ed99
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
