---
title: Release Notes for the Adobe Analytics Extension
description: The latest release notes for the Adobe Analytics tag extension in Adobe Experience Platform.
exl-id: 3c7b4ec0-4b81-4ef4-b15f-6ad102525840
TQID: https://experienceleague.adobe.com/hM87YY9d3csuhb-guwwPs0oTDCWh5eJUwL3hkI5tBGQ
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: df80eeb1-8d72-467e-b0df-9d51c7d3a0a1
    internal-label: Audience Manager
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: eadea719-cf89-469b-a6fd-a236a7138047
    internal-label: Commerce
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a8b0238e-1d43-4679-a3b4-5ba1bad83baa
    internal-label: Implementation
  - id: b89b323a-1e91-40b1-8d20-96b5b726d55a
    internal-label: Audience management
  - id: c814092e-2730-45e8-a12d-e084529f52cb
    internal-label: Destinations
  - id: dac87252-6066-4d6e-a9d2-f6d84c323de7
    internal-label: Configuration
  - id: daec7ead-f475-492a-a3b3-02ae08565d6f
    internal-label: Implementation
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
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: c2be0313-b3ae-45e0-b454-d20bf54b23f2
    internal-label: Measurement
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
---
# Adobe Analytics extension release notes

The following is a list of release notes for the Adobe Analytics tag extension.

>[!NOTE]
>
>The Analytics tag extension if often updated in response to updates to the [AppMeasurement JavaScript library](https://experienceleague.adobe.com/docs/analytics/implementation/js/overview.html). Refer to the [AppMeasurement release notes](https://experienceleague.adobe.com/docs/analytics/implementation/appmeasurement-updates.html) for details on the specific versions mentioned below.

## October 28, 2024

**Adobe Analytics Extension 1.9.6**

**Features**:

* Added a new feature to allow users to view and edit a JSON version of the [Set Variables Action](https://experienceleague.adobe.com/en/docs/experience-platform/tags/extensions/client/analytics/overview#set-variables). The Adobe Web SDK Extension also includes an action to [populate an analytics variable](https://experienceleague.adobe.com/en/docs/experience-platform/tags/extensions/client/web-sdk/data-element-types) by providing JSON. By copying JSON data from the AA Extension to the Web SDK Extension, migrating customers can easily transfer several settings at once instead of adding each variable manually.

## August 12, 2024

**Adobe Analytics Extension 1.9.5**

**Features**:

* Upgraded to [AppMeasurement to v2.27.0](https://github.com/adobe/appmeasurement/releases/tag/v2.27.0).

## March 4, 2024

**Adobe Analytics Extension 1.9.4**

**Features**:

* Upgraded to [AppMeasurement to v2.26.0](https://github.com/adobe/appmeasurement/releases/tag/v2.26.0).

## September 15, 2023

**Adobe Analytics Extension 1.9.3**

**Features**:

* Upgraded to [AppMeasurement to v2.25.0](https://github.com/adobe/appmeasurement/releases/tag/v2.25.0).


## July 19, 2023

**Adobe Analytics Extension 1.9.2**

**Features**:

* Upgraded to [AppMeasurement v2.24.0](https://github.com/adobe/appmeasurement/releases/tag/v2.24.0).
* Added an optional configuration (`decodeLinkParameters` default `false`) that decodes link URL's that includes double byte encoded characters.

**Bug fixes**:

* Added additional error handling for browsers with faulty high-entropy [User-Agent client hints](https://experienceleague.adobe.com/docs/analytics/technotes/client-hints.html) API's.
* Changed [POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST) Content-Type header to use `x-www-form-urlencoded` by default.

## September 23, 2022

**Adobe Analytics Extension 1.9.1**

**Features**:

* Upgraded to AppMeasurement v2.23.0.
* The extension can now collect high-entropy [user-agent client hints](https://developer.mozilla.org/en-US/docs/Web/HTTP/Client_hints#user-agent_client_hints) as supported by the latest version of AppMeasurement.

## February 28, 2022

**Adobe Analytics Extension 1.9.0**

**Bug fixes**:

* Removed some debug statements in AppMeasurement.

## November 29, 2021

**Adobe Analytics Extension 1.8.8**

**Bug fixes**:

* Upgraded AppMeasurement to v2.22.3.

## September 16, 2021

**Adobe Analytics Extension 1.8.7**

**Bug fixes**:

* Upgraded AppMeasurement to v2.22.2.
* Removed deprecated buildInfo.environment

## August 24, 2021

**Adobe Analytics Extension 1.8.6**

**Bug fixes**:

* Upgraded [AppMeasurement to v2.22.1](https://experienceleague.adobe.com/docs/analytics/implementation/appmeasurement-updates.html).
* Updated fallback linkName to mirror Activity Map logic instead of using innerHTML.

## August 6, 2020

**Adobe Analytics Extension 1.8.5**

**Bug fixes**:

* The incorrect cookie name in the AAM module settings was being set when the this field was left blank. This has now been corrected. 

**Features**:

* Updated [AppMeasurement to 2.22.0](https://experienceleague.adobe.com/docs/analytics/implementation/appmeasurement-updates.html).
* Small UI change so the additional setting now appear collapsed in an accordion instead of a checkbox.

## June 2, 2020

**Adobe Analytics Extension 1.8.4**

**Bug fixes**:

* Fixed a bug where the shopping cart events (prodView, scAdd, scView, etc) were not showing up on the events dropdown. All of these should now be selectable from the dropdown. 

**Features**:

* You can now turn off the activity map in the extension without having to use custom code. The activity map loads as a separate module (much like the AAM module) and you can turn it off if you want.
* Cleaned up the UI by minimizing hierarchy variables and other options.
* Added a field to set purchase IDs from the extension configuration UI.

## March 10, 2020

**Adobe Analytics Extension 1.8.3**

**Bug fixes**:

* Fixed a bug affecting the rule configuration that would throw an error when you tried to set variables if you were using a custom library and your report suites weren't configured in Analytics.
* When creating an eVar, there was a bug that would not show you the option to "duplicate from" a prop or vice versa. This has now been fixed to mirror the behavior in previous versions. 

**Features**:

* Updated [AppMeasurement to 2.20.0](https://experienceleague.adobe.com/docs/analytics/implementation/appmeasurement-updates.html)

## March 2, 2020

**Adobe Analytics Extension 1.8.2**

**Bug fixes**:

* Fixed an issue where the incorrect syntax was being used for numeric events and serialized currency

**Features**:

* Updated [AppMeasurement to 2.18.0](https://experienceleague.adobe.com/docs/analytics/implementation/appmeasurement-updates.html)
* Updated the DIL library in the Audience Manager module to 9.4
* Increased the length of input fields in the extension
* eVars and props in the extension and action configurations now show the friendly name from Analytics
* Added a checkbox in the 'Cookies' section of the extension configuration that allows you to write secure cookies
* Added three new configurations to the Audience Manager module. Added a setting for enabling logging, for enabling URL destinations, and for enabling cookie destinations

## November 13, 2019

**Adobe Analytics Extension 1.8.1**

**Bug fixes**:

* Fixed a bug where premium evars and props would not save.

## November 1, 2019

**Adobe Analytics Extension 1.8.0**

**Bug fixes**:

* Fixed a bug where a small number of customers could not see report suite options in drop down
* Fixed a bug where some variables were not setting correctly when using ECID

**Features**:

* Numerically sorts evars, props, and events in Extension view
* Made backend schema changes to support Magento context data

## September 6, 2019

**Adobe Analytics Extension 1.7.8**

**Bug fixes**:

* Fixed a bug where some users were not seeing report suite options in the dropdown
* Fixed a bug where events were not firing correctly

## September 5, 2019

**Adobe Analytics Extension 1.7.7**

**Features**:

* Updated AppMeasurement to 2.17
* Updated Audience Management module to support DIL 9.3
* Updated field widths to give you more space

**Bug fixes**:

* Fixed a bug for setting opt-in/opt-out
* Fixed a bug where variables were not being set correctly when using ECID

## July 18, 2019

**Adobe Analytics Extension 1.7.6**

**Features**:

* Updated the Adobe Analytics extension to support DIL 9.2 for Audience Manager

* Updated extension to support [AppMeasurement 2.15.0](https://experienceleague.adobe.com/docs/analytics/implementation/appmeasurement-updates.html#version-2.15.0)    
* Removed the following checkbox since it's not supported anymore: "Do not attach the destination publishing IFRAME to the DOM or fire destinations"
 
## June 4, 2019

**Adobe Analytics Extension 1.7.5**

**Features**:

* Updated the Adobe Analytics Extension to [AppMeasurement 2.14.0](https://experienceleague.adobe.com/docs/analytics/implementation/appmeasurement-updates.html#version-2.14.0) which includes a fix to a known clearVars issue
* Added an Exchange link to the extension. The Exchange listing can be reached by selecting the dropdown and choosing "extension info"

**Bug fixes**:

* Fixed a bug in the UI that showed the incorrect evar being deleted from a list
* Fixed a bug that was requiring an SSL tracking server when trying to add multiple report suites. When adding multiple report suites a tracking server is required but the SSL tracking server field is optional. 

## April 15, 2019

**Adobe Analytics Extension 1.7.4**

**Bug fixes**:

* Rolled extension back after a bug was found in appMeasurement 2.13.0. appMeasurement 2.13.0 was causing an issue that wasn't sending the ECID, so if you installed 1.7.3 we recommend upgrading to 1.7.4 to avoid this problem. Note that the clearVars will continue until an updated version of appMeasurement is released

## April 12, 2019

**Adobe Analytics Extension 1.7.3**

**Bug fixes**:

* Updated the Adobe Analytics Extension to appMeasurement 2.13.0 which includes a fix to a known clearVars issue.

## March 21, 2019

**Adobe Analytics Extension 1.7.2**

**Features**:

* Updated the Adobe Analytics extension to DIL 9.1.
* Updated the Adobe Analytics extension to appMeasurement 2.12.
* Upgraded the Adobe Analytics extension view to React-Spectrum.
* When configuring your report suites in the configuration page you will now see a dropdown to all of the report suites in your company to make it easier for you to select the appropriate report suite.

## March 7, 2019

**Adobe Analytics Extension 1.7.1**

**Bug fixes**:

* Rolled back the extension to version 1.6 after a bug was found in 1.7.

## February 11, 2019

**Adobe Analytics Extension 1.6**

**Features**:

* Updated the Adobe Analytics extension to DIL 9.0, which will support opt-in.
* Updated the Adobe Analytics extension to AppMeasurement 2.11 to support opt-in.

**Bug fixes**:

* Fixed a conflict with Prototype JS. The Analytics extension will now support standard prototype.js libraries.

## November 9, 2018

**Adobe Analytics Extension 1.5.1**

**Bug fixes**:

* Downgraded the DIL module to 7.0 to fix an issue that was causing problems with analytics beacons not firing

## November 5, 2018

**Adobe Analytics Extension 1.5**

**Features**:

* Updated the Adobe Analytics extension to support DIL 8.0 in Audience Manager
* Separated the "Serialize from value" field into two, "Event ID" and "Event Value". This will fix the issue that was assigning a value instead of serializing an event
  * Please note: if you are using the current field to add an ID by using a string (ex. Event7=3:abc123) you will need to update your input to reflect the ID in the "Event ID" field

**Bug fixes**:

* Fixed a bug that wasn't allowing the currency code to populate correctly

## October 11, 2018

**Adobe Analytics Extension 1.4**

**Features**:

* Migrated the tracking cookie name to the extension configuration.

**Bug fixes**:

* Fixed a bug so set variables don't crash when no trackerProperties object is available.

## June 5, 2018

**Adobe Analytics Extension 1.3**

**Features**:

* Updated Adobe Analytics extension to support AppMeasurement 2.9.
* Added "Make tracker globally accessible" feature in the Adobe Analytics extension, which enables the tracker to be scoped globally under `windows.s`.

**Bug fixes**:

* Fixed a bug that caused list view to reset when returning from detail view
* Fixed a few bugs to improve loading of resources in the revision selector
* Fixed a bug where multiple rules were overwriting s.events in the Adobe Analytics extension

## March 20, 2018

**Adobe Analytics Extension 1.2**

**Features**:

* Updates AppMeasurement.js to 2.8.0
* Adds support for server-side forwarding

## February 8, 2018

**Adobe Analytics Extension 1.1**

**Features**:

* AppMeasurement has been updated to version 2.6
* The initialized Analytics tracker is now exposed through a shared module in the Adobe Experience Platform tag extension so other extensions can include code to interact with it.

**Bug fixes**:

* Fixed an error in the Adobe Analytics Extension that caused "Error, missing Report Suite ID in AppMeasurement initialization" to appear in the browser console.
