---
title: Adobe Experience Platform Debugger Release Notes
description: The latest release notes for Adobe Experience Platform Debugger.
keywords: debugger;experience Platform Debugger extension;chrome;extension;release notes
uuid: 47a5d6f3-c074-4ad5-ad4b-e6030496689b
exl-id: 3eed44da-5f85-413e-a783-3a0df03a2baf
---
# Adobe Experience Platform Debugger release notes

## Version 1.4.0 - October 3, 2022

* Added AEP Assurance debugging support for Web SDK hybrid implementations.
* Added support multiple tabs within the same AEP Assurance session.
* Fixed issue where users cannot switch profiles/organizations after logging in.
  * For some accounts, logging out and logging back in is required to switch organizations.
* Added error message when enabling Target Trace fails.
* Updated dependencies.

## Version 1.3.3 - June 20, 2022

* Fixed issue that prevented opening popups from network event tables.
* Fixed issue that prevented the loading of on-page Alloy information.

## Version 1.3.2 - June 9, 2022

* Added a default avatar when the user is logged in.
* Added syntax highlighting to JSON objects in logs. 

## Version 1.3.1 - May 24, 2022

* Updated dependencies.
* Fixed Analytics issue where post-process hits could not be enabled.
* Fixed issue where debugger would attach to Adobe login window.
* Fixed AT.js issue where log messages would not show up in Debugger.

## Version 1.3.0 - January 28, 2022

* Added About link to show current release version and notes.
* Added toggle to view post processed hits for Analytics requests. The toggle is available in the Analytics section.
* Fixed remote debugging session issue when session was closed outside of the debugger.
* Fixed error notification that was visible in the Web SDK Edge Transactions tab.
* Fixed Adobe Tags on page deprecation warning when the debugger accessed the _satellite object.
* Fixed some cases where an AppMeasurement instance was not found on the page.
* Fixed page connection issue which occurred when first opening the debugger window.

## Version 1.2.0 - October 26, 2021

* Show events from all browser tabs in the network view. To only see the events from the current tab, select the lock icon in the lower right corner of the debugger.
* Updated branding.

## Version 1.1.0 - October 5, 2021

* Remote debugging visualization - Organize the remote debugging events into a visual flow chart in the Adobe Experience Platform Web SDK > Edge Transactions section.
* Require the Adobe Experience Platform Web SDK organization used on the page match the logged in org when starting a new remote debugging session.
* Only show the edge transactions for the connected tab. Target trace logs are still available in the Logs > Edge section.
* Allow separate data stream ID config override for each instance of the Adobe Experience Platform Web SDK on the page. Add debug enabled toggle.
* Fixed an issue where the Adobe Target trace token was not always sent with remote debugging sessions for the Adobe Experience Platform Web SDK.

## Version 1.0.0 May 5, 2021

* First main release of the Experience Platform Debugger. Intended to replace the Experience Cloud Debugger.
