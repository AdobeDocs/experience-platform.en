---
title: Adobe Experience Platform Web SDK Extension Release Notes
description: Adobe Experience Platform Web SDK Tag Extension
exl-id: 91de8c91-023a-45b6-9f67-ac75ee471e50
---

# Adobe Experience Platform Web SDK extension release notes

This document covers the release notes for the Adobe Experience Platform Web SDK tag extension. For the latest release notes on the SDK itself, see the [Platform Web SDK release notes](https://experienceleague.adobe.com/docs/experience-platform/edge/release-notes.html).

## Version 2.16.0 - March 30, 2023

**New features**

* (Beta) Added **[!UICONTROL Update variable]** action and **[!UICONTROL Variable]** data element.
* Added configuration for [`onBeforeLinkClickSend`](fundamentals/configuring-the-sdk.md#onBeforeLinkClickSend) callback function.

**Fixes and improvements**

* Fixed an issue causing clicking on elements within an anchor tag to not work when the **[!UICONTROL Redirect with identity]** action was used.
* Fixed an issue where XDM object data elements did not work when there was only one schema present.
* Contains version 2.15.0 of Adobe Experience Platform Web SDK.


## Version 2.15.1 - January 26, 2023

* Fixed an issue where users without access to datastreams could not edit the extension configuration.
* Added support for surfaces in the `sendEvent` action.

Contains version 2.14.0 of Adobe Experience Platform Web SDK.


## Version 2.14.1 - October 13, 2022

* Fixed an issue where the Web SDK does not honor the ID from the Experience Cloud ID Service.

Contains version 2.13.1 of the Adobe Experience Platform Web SDK Library.

## Version 2.14.0 - September 28, 2022

* Added new `targetMigrationEnabled` configuration that enables page by page full migration.
* Added an apply response action to enable hybrid server-client implementations.
* Added high entropy user-agent client hints context option.

Contains version 2.13.0 of the Adobe Experience Platform Web SDK Library.

## Version 2.13.0 - June 29, 2022

* Fixed the sort order of numerical properties in the XDM Object data element such as eVars.

Contains version 2.12.0 of the Adobe Experience Platform Web SDK Library.

## Version 2.12.0 - June 13, 2022

* Updated the `identityMap` data element to populate the namespace options based on the sandboxes defined by the extension settings.
* Added **[!UICONTROL Redirect with identity]** action to allow cross-domain identity sharing.
* Added documentation links to the `sendEvent` action.
* Upgraded React Spectrum UI library.
* Multiple user interface enhancements.

Contains version 2.11.0 of the Adobe Experience Platform Web SDK Library.

## Version 2.11.2 - May 3, 2022

Contains version 2.10.1 of the Adobe Experience Platform Web SDK Library.

## Version 2.11.1 - April 22, 2022

* Fixed configure command error from version 2.11.0.

Contains version 2.10.0 of the Adobe Experience Platform Web SDK Library.

## Version 2.11.0 - April 22, 2022

* Improved Tags UI performance.
* Add sandbox selectors to datastreams extension configuration.

Contains version 2.10.0 of the Adobe Experience Platform Web SDK Library.

## Version 2.10.0 - March 10, 2022

* Update the prehiding snippet that is available to copy on the configuration page to work with the updated Adobe Target VEC editor.

Contains version 2.9.0 of the Adobe Experience Platform Web SDK library.

## Version 2.9.0 - January 19, 2022

Contains version 2.8.0 of the Adobe Experience Platform Web SDK library.

## Version 2.8.0 - October 26, 2021

Contains version 2.7.0 of the Adobe Experience Platform Web SDK library.

* Additional information from Experience Edge are available in the Send Event Complete event, including `inferences` and `destinations`. The format of these properties may change as these features are currently rolling out as part of a Beta. For more information, see [Tracking Events.](../fundamentals/tracking-events.md)

## Version 2.7.3 - September 7, 2021

Contains version 2.6.4 of the Adobe Experience Platform Web SDK library.

* There's no longer a deprecation warning for `container.buildInfo.environment.`

## Version 2.7.0 - August 16, 2021

Contains version 2.6.3 of the Adobe Experience Platform Web SDK library.

* When using the Identity Map data element type, identifiers whose IDs resolve to values that are not populated strings are now automatically removed from the identity map.
* Fixed an error that would occur when attempting to save a data element using the XDM Object data element type and no schema was selected.
* Improved user interface typography.

## Version 2.6.2 - August 4, 2021

Contains version 2.6.2 of the Adobe Experience Platform Web SDK library.

## Version 2.6.1 - July, 29, 2021

Contains version 2.6.1 of the Adobe Experience Platform Web SDK library.

## Version 2.6.0 - July 27, 2021

Contains version 2.6.0 of the Adobe Experience Platform Web SDK library.

* Labels, descriptions, and error messages using the term "edge configuration" have been changed to use the term "datastream" to align with the latest Adobe Experience Platform terminology.
* In the extension configuration view, support was added for handling large numbers of datastreams and datastream environments.
* In the XDM Object data element view, support was added for handling large numbers of schemas.
* A Send Event Complete event type has been added, which can be used to run a rule after an event has been sent to the server and a response received. More documentation will be available soon.
* The Decisions Received event type has been deprecated. Please use the Send Event Complete event type instead.
* The user interface and error handling has been generally improved.

## Version 2.5.0 - June 1, 2021

Contains version 2.5.0 of the Adobe Experience Platform Web SDK library.

* Added a `data` field to the Send Event action. Upcoming documentation will describe how this can be used in certain scenarios.
* On the XDM Object data element view, an issue was fixed where an error was thrown if the user had access to Adobe Experience Platform sandboxes but not to the sandbox configured as the default for the organization.
* On the XDM Object data element view, an issue was fixed where a required schema field would be considered invalid even if the parent object contained no values.

## Version 2.4.0 - March 9, 2021

Contains version 2.4.0 of the Adobe Experience Platform Web SDK library.

* Added ["document unloading"](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/tracking-events.html?lang=en#using-the-sendbeacon-api) checkbox to Send Event action UI.
* Added support for an `out` option when [configuring default consent](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/configuring-the-sdk.html#default-consent) which drops all events until consent is received (the existing `pending` option queues events and sends them once consent is received).
* Added a tooltip to the default consent field.
* Added support for [Adobe's Consent 2.0 standard](https://experienceleague.adobe.com/docs/experience-platform/edge/consent/supporting-consent.html?communicating-consent-preferences-via-the-adobe-standard).
* A better error now displays in the XDM Object data element UI if the user's access token is invalid or improperly provisioned.
* Fixed a cross-origin error (which does not affect the operation of the extension) that showed up on the browser developer console when viewing an XDM Object data element.

## Version 2.3.0 - November 4, 2020

Contains version 2.3.0 of the Adobe Experience Platform Web SDK library.

* Added support for using a data element when configuring default consent.
* Added ability to search for XDM schemas with the XDM Object data element type.
* Added cloning of XDM data within the Send Event action type to ensure any subsequent changes to the XDM data object will not be reflected in the request.

## Version 2.2.0 - October 1, 2020

* When customers tried to create an XDM object from sandbox schemas, they were running into authentication issues. The API that calls Platform is now aware of environments so users are only presented with those schemas that they have access to edit.
* When using the `identityMap` data element, the namespaces is now pre-populated in a dropdown so you don't have to fill this in manually.
* Revamped the UI for the `xdmObject` data element. In the new UI, you can see which fields have been populated without having to enter each item in the object.

## Version 2.1.1 - August 26, 2020

* Fixes an issue where Adobe Experience Platform sandboxes on the XDM Object view displayed incorrectly. If, when using this version of the extension, an expected sandbox is not displayed in the list, the user should check with their Adobe Experience Platform administrator to ensure access permissions are set correctly.

## Version 2.1.0 - August 5, 2020

* Breaking Change: Remove the `syncIdentity` action and support passing those IDs in the `sendEvent` action instead. Please disable any existing rule using this action before upgrading your extension.
* Update to Alloy v. 2.1.0 ([Release Notes](https://experienceleague.adobe.com/docs/experience-platform/edge/release-notes.html))
* Support IAB 2.0 Consent Standard in the `setConsent` action.
* Support overriding the dataset ID in the `sendEvent` action.
* Add a new Data Element of type `IdentityMap` which can be used to populate the `identityMap` entry in the XDM Object Data Element which is now enabled, and in the `setConsent` action.
* Support passing an identity map in the `setConsent` action.
* Support choosing an Platform sandbox in the XDM Object Data Element.

## Version 1.0.0 - May 26, 2020

* Support selecting the environment from the Configuration Service.

## Version 0.1.2 - May 4, 2020

* Renamed `configId` to `edgeConfigId`.
* Renamed `viewStart` to `renderDecisions`, set to false by default. If set to true, Personalization offers are fetched and auto-rendered.
* Changes related to `Get Decisions`:
  * Removed the `getDecisions` command.
  * Added a `scopes` option to the `sendEvent` command. Decisions are returned in the `sendEvent` resolved promise.
  * Added a built-in `__view__` scope which will result in returning page/view wide offers. (VEC offers in Target for example.)
Those decisions return from the `sendEvent` command only if `renderDecisions` is set to false.
  * Added a `Decisions Received` event, which fires when decisions become available.
* Combined multiple Personalization notifications under a single server call.
* Fixed issue in Event Merge ID where it was being reset every time the data element was referenced.
* Renamed the `setCustomerIds` action to `syncIdentity`.
* Added a `getIdentity` command. This can be consumed via custom code only for now.
* Enabling debug using `_satellite` now enables debugging in the Adobe Experience Platform Web SDK.
* Added support for typed values in the XDM Object: Booleans, Numbers and Decimals.

## Version 0.0.10 - March 16, 2020

* Combined the concepts of Opt-In & Opt-Out under `Consent`, and added a new `setConsent` command.
* Added a new Data Element of type `XDM Object` which allows mapping from JavaScript/JSON to XDM.

## Version 0.0.7 - February 18, 2020

* Removed idSyncContainerId, datasetId, schemaId, urlDestinationsEnabled, and cookieDestinationsEnabled options
* Added support for hyphens in edgeDomain option value
* Request made during ID migration is sent to demdex endpoint to improve cross-domain identification when demdex cookie is not set
* Request made during ID migration always expects a response to ensure identity cookie gets set
* When executing an invalid command, a list of valid command names will be logged in the console
* Added checkbox for toggling third-party cookie support to the tag extension. This disables calls to demdex.net

## Version 0.0.5 - December 20, 2019

* Add Activity Tracker configs to tag extension
* Expose EventType and EventMergeId on event command
* Add onBeforeEventSend config to tag extension
* Add edgeBasePath config to tag extension

## Version 0.0.3 - November 25, 2019

* New Merge ID and Type fields on the Send Event action. Merge ID maps to `xdm.eventMergeID` in the XDM schema and Type maps to `xdm.eventType` in the XDM schema.

## Version 0.0.2 - November 18, 2019

* Initial release
