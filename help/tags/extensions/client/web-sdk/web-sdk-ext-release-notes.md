---
title: Adobe Experience Platform Web SDK Extension Release Notes
description: Adobe Experience Platform Web SDK Tag Extension
exl-id: 91de8c91-023a-45b6-9f67-ac75ee471e50
---

# Web SDK extension release notes

This document covers the release notes for the Adobe Experience Platform Web SDK tag extension. For the latest release notes on the SDK itself, see the [Experience Platform Web SDK release notes](/help/web-sdk/release-notes.md).

## Version 2.31.0 - July 24, 2025

**New features**

- Contains [version 2.28.0](../../../../web-sdk/release-notes.md#2-28-0) of the Adobe Experience Platform Web SDK.

**Fixes and improvements**

- Fixed an issue where an error is thrown when a datastream override is enabled via a data element.
- Fixed an issue where empty `idSyncContainerId` overrides would throw an error.
- When resolving media data elements, the event object is now included.

## Version 2.30.1 - May 27, 2025

**Fixes and improvements**

- Fixed an issue where the update variable view was crashing when an organization had no default sandbox set.

## Version 2.30.0 - May 21, 2025

**New features**

- You can now specify a data element when enabling third party cookies.
- Added clear buttons to code fields.
- Contains [version 2.27.0](../../../../web-sdk/release-notes.md#2-27-0) of the Adobe Experience Platform Web SDK.

**Fixes and improvements**

- Added validation to prevent setting `onBeforeLinkClickSend` when event grouping is enabled.

## Version 2.29.1 - May 8, 2025

**Fixes and improvements**

- Fixed an issue where settings were not saved when immediately clicking "save" after editing.

## Version 2.29.0 - March 5, 2025

**New features**

- You can now create custom Web SDK builds and choose the components that you need from the tag extension user interface. This can result in smaller builds by excluding unused components. See the documentation on [creating a custom Web SDK build](web-sdk-extension-configuration.md#custom-build).
- Contains [version 2.26.0](../../../../web-sdk/release-notes.md#2-26-0) of the Adobe Experience Platform Web SDK.

**Fixes and improvements**

- Added graceful handling of missing data elements in [update variable](action-types.md#update-variable) actions. Previously, editing an update variable action with a missing data element showed an error message. Now, you can choose a different data element and all the settings for the update variable action are still applied. Data elements can be missing if they are deleted or if a Tags property is duplicated.
- Added support for opening a new tab with the [redirect with identity](action-types.md#redirect-with-identity) action. Now, when using the action, the `target` attribute of the anchor tag is used when redirecting the browser.
- Fixed an issue where Adobe Audience Manager could not be disabled in configuration overrides.

## Version 2.28.0 - January 23, 2025

**Fixes and improvements**

- Fixed an issue where ID Sync Container overrides could not be set without enabling Audience Manager.
- Fixed an issue where datastream config overrides were disabled when upgrading to the latest version.
- Fixed an issue where users were unable to save Target auto click collection settings.

**New features**

- Added a new feature to toggle between technical names and display names in the XDM Object.
- Contains [version 2.25.0](../../../../web-sdk/release-notes.md#2-25-0) of the Adobe Experience Platform Web SDK.

## Version 2.27.0 - October 31, 2024

**New features**

- [Datastream overrides](../web-sdk/web-sdk-extension-configuration.md#datastream-overrides) now includes settings to disable Experience Cloud solutions and Adobe Experience Platform services.
- You can now create [datastream overrides](../web-sdk/web-sdk-extension-configuration.md) for media sessions.

Contains version 2.24.0 of the Adobe Experience Platform Web SDK.

## Version 2.26.1 - September 19, 2024

**Fixes and improvements**

- Fixed an issue where cookies were not written correctly when running the Web SDK locally.

Contains version 2.23.0 of the Adobe Experience Platform Web SDK.

## Version 2.26.0 - August 22, 2024

**New features**

- Added monitoring hook `triggered` event.
- [Guided events](action-types.md#instance), [Request default personalization](action-types.md#personalization), [Subscribe ruleset items](event-types.md#subscribe-ruleset-items), and [evaluate rulesets](action-types.md#evaluate-rulesets) are now generally available.

**Fixes and improvements**

- Fixed an issue where duplicated variable data elements could overwrite each other.
- When using the [Request default personalization](action-types.md#personalization) guided event, visual personalization decisions are now automatically enabled.

Contains version 2.22.0 of the Adobe Experience Platform Web SDK.

## Version 2.25.0 - July 18, 2024

**New features**

- Added support for auto-tracking personalization in Adobe Journey Optimizer.
- Introduced new settings to manage improved click collection.

Contains version 2.21.1 of the Adobe Experience Platform Web SDK.

## Version 2.24.0 - June 5, 2024

**Fixes and improvements**

- Fixed an error that occurred when modifying the extension configuration when config overrides were defined.
- Allow setting empty values for media collection ping intervals.
- Fixed an error that occurred when modifying an update variable action.
- Allow reset of ID sync container in config overrides.

Contains version 2.20.0 of the Adobe Experience Platform Web SDK.

## Version 2.23.1 - May 28, 2024

**New features**

- Added support for the [`Streaming Media Collection`](web-sdk-extension-configuration.md#streaming-media) component in the extension configuration.
- Added the [`Send Media Event`](action-types.md#send-media-event) action for the [!DNL Streaming Media Collection] functionality.
- Added the [`Media: Quality of Experience`](data-element-types.md#quality-experience) data element for the [!DNL Streaming Media Collection] functionality.

Contains version 2.20.0 of the Adobe Experience Platform Web SDK.

**Fixes and improvements**

- Fixed an error that occurred when searching for data elements in the [Update variable](action-types.md#update-variable) action.
- Removed [!UICONTROL Media] event types from the event types suggested to be used in the `sendEvent` action.

## Version 2.22.0 - May 3, 2024

**New features**

- Extend variable data element to support data objects.
- Update variable action now supports modifying pass-through Adobe Analytics, Adobe Audience Manager, and Adobe Target data.

Contains version 2.19.2 of the Adobe Experience Platform Web SDK.

## Version 2.21.4 - January 10, 2024

**Fixes and improvements**

- Fixed an issue where saving Config Overrides without all 3 environments set would crash the extension UI.
- Fixed an issue where the root clear existing value checkbox did not populate when editing an update variable action.

Contains version 2.19.2 of the Adobe Experience Platform Web SDK.

## Version 2.21.3 - November 10, 2023

Contains version 2.19.1 of the Adobe Experience Platform Web SDK.

**Fixes and improvements**

- Fixed an issue where the propositions array available in `Send event complete` events was always empty.

## Version 2.21.2 - November 1, 2023

**New features**

- Added `Request default personalization` option to send event action.
- Added support for top and bottom of page events in the send event action.
- Added `Apply propositions` action.
- Added `Evaluate rulesets` action and `Subscribe ruleset items` event for in-app messages.
- Added `Decision context` to send event action.

**Fixes and improvements**

- Contains version 2.19.0 of the Adobe Experience Platform Web SDK.

## Version 2.20.3 - August 8, 2023

**Fixes and improvements**

- Fixed issue where data elements could not be saved in ID sync container ID override field.

## Version 2.20.1 - August 3, 2023

**Fixes and improvements**

- Improved the validation of saved datastream override settings.

## Version 2.20.0 - July 31, 2023

**New features**

- Added support for [per-command overrides of the datastream ID](../../../../datastreams/overrides.md).

**Fixes and improvements**

- Deprecated `edgeConfigId` in favor of `datastreamId` in the SDK configuration.
- Multiple user experience enhancements for the datastream configuration overrides user interface.

## Version 2.19.0 - June 21, 2023

- The **[!UICONTROL Variable]** data element and **[!UICONTROL Update Variable]** actions are now generally available.

## Version 2.18.0 - May 18, 2023

- Contains version 2.17.0 of the Adobe Experience Platform Web SDK.

## Version 2.17.0 - April 25, 2023

**New features**

- Contains version 2.16.0 of the Adobe Experience Platform Web SDK.
- Added support for [datastream configuration overrides](/help/datastreams/overrides.md).
- Add deprecation notice to the `datasetId` option on the `sendEvent` command.

**Fixes and improvements**

- Fixed an issue where scrolling in Safari would close the datastream selector.

## Version 2.16.1 - April 14, 2023

- Fixed an issue with XDM Object and Variable data elements where you could not select a schema from a non-default sandbox.

## Version 2.16.0 - March 30, 2023

**New features**

- (Beta) Added **[!UICONTROL Update variable]** action and **[!UICONTROL Variable]** data element.
- Added configuration for [`onBeforeLinkClickSend`](/help/web-sdk/commands/configure/onbeforelinkclicksend.md) callback function.

**Fixes and improvements**

- Fixed an issue causing clicking on elements within an anchor tag to not work when the **[!UICONTROL Redirect with identity]** action was used.
- Fixed an issue where XDM object data elements did not work when there was only one schema present.
- Contains version 2.15.0 of Adobe Experience Platform Web SDK.

## Version 2.15.1 - January 26, 2023

- Fixed an issue where users without access to datastreams could not edit the extension configuration.
- Added support for surfaces in the `sendEvent` action.

Contains version 2.14.0 of Adobe Experience Platform Web SDK.

## Version 2.14.1 - October 13, 2022

- Fixed an issue where the Web SDK does not honor the ID from the Experience Cloud ID Service.

Contains version 2.13.1 of the Adobe Experience Platform Web SDK Library.

## Version 2.14.0 - September 28, 2022

- Added new `targetMigrationEnabled` configuration that enables page by page full migration.
- Added an apply response action to enable hybrid server-client implementations.
- Added high entropy user-agent client hints context option.

Contains version 2.13.0 of the Adobe Experience Platform Web SDK Library.

## Version 2.13.0 - June 29, 2022

- Fixed the sort order of numerical properties in the XDM Object data element such as eVars.

Contains version 2.12.0 of the Adobe Experience Platform Web SDK Library.

## Version 2.12.0 - June 13, 2022

- Updated the `identityMap` data element to populate the namespace options based on the sandboxes defined by the extension settings.
- Added **[!UICONTROL Redirect with identity]** action to allow cross-domain identity sharing.
- Added documentation links to the `sendEvent` action.
- Upgraded React Spectrum UI library.
- Multiple user interface enhancements.

Contains version 2.11.0 of the Adobe Experience Platform Web SDK Library.

## Version 2.11.2 - May 3, 2022

Contains version 2.10.1 of the Adobe Experience Platform Web SDK Library.

## Version 2.11.1 - April 22, 2022

- Fixed configure command error from version 2.11.0.

Contains version 2.10.0 of the Adobe Experience Platform Web SDK Library.

## Version 2.11.0 - April 22, 2022

- Improved Tags UI performance.
- Add sandbox selectors to datastreams extension configuration.

Contains version 2.10.0 of the Adobe Experience Platform Web SDK Library.

## Version 2.10.0 - March 10, 2022

- Update the prehiding snippet that is available to copy on the configuration page to work with the updated Adobe Target VEC editor.

Contains version 2.9.0 of the Adobe Experience Platform Web SDK library.

## Version 2.9.0 - January 19, 2022

Contains version 2.8.0 of the Adobe Experience Platform Web SDK library.

## Version 2.8.0 - October 26, 2021

Contains version 2.7.0 of the Adobe Experience Platform Web SDK library.

- Additional information from the Edge Network are available in the Send Event Complete event, including `inferences` and `destinations`. The format of these properties may change as these features are currently rolling out as part of a Beta.

## Version 2.7.3 - September 7, 2021

Contains version 2.6.4 of the Adobe Experience Platform Web SDK library.

- There's no longer a deprecation warning for `container.buildInfo.environment.`

## Version 2.7.0 - August 16, 2021

Contains version 2.6.3 of the Adobe Experience Platform Web SDK library.

- When using the Identity Map data element type, identifiers whose IDs resolve to values that are not populated strings are now automatically removed from the identity map.
- Fixed an error that would occur when attempting to save a data element using the XDM Object data element type and no schema was selected.
- Improved user interface typography.

## Version 2.6.2 - August 4, 2021

Contains version 2.6.2 of the Adobe Experience Platform Web SDK library.

## Version 2.6.1 - July, 29, 2021

Contains version 2.6.1 of the Adobe Experience Platform Web SDK library.

## Version 2.6.0 - July 27, 2021

Contains version 2.6.0 of the Adobe Experience Platform Web SDK library.

- Labels, descriptions, and error messages using the term "edge configuration" have been changed to use the term "datastream" to align with the latest Adobe Experience Platform terminology.
- In the extension configuration view, support was added for handling large numbers of datastreams and datastream environments.
- In the XDM Object data element view, support was added for handling large numbers of schemas.
- A Send Event Complete event type has been added, which can be used to run a rule after an event has been sent to the server and a response received. More documentation will be available soon.
- The Decisions Received event type has been deprecated. Please use the Send Event Complete event type instead.
- The user interface and error handling has been generally improved.

## Version 2.5.0 - June 1, 2021

Contains version 2.5.0 of the Adobe Experience Platform Web SDK library.

- Added a `data` field to the Send Event action. Upcoming documentation will describe how this can be used in certain scenarios.
- On the XDM Object data element view, an issue was fixed where an error was thrown if the user had access to Adobe Experience Platform sandboxes but not to the sandbox configured as the default for the organization.
- On the XDM Object data element view, an issue was fixed where a required schema field would be considered invalid even if the parent object contained no values.

## Version 2.4.0 - March 9, 2021

Contains version 2.4.0 of the Adobe Experience Platform Web SDK library.

- Added ["Document unloading"](/help/web-sdk/commands/sendevent/documentunloading.md) checkbox to Send Event action UI.
- Added support for an `out` option when [configuring default consent](/help/web-sdk/commands/configure/defaultconsent.md) which drops all events until consent is received (the existing `pending` option queues events and sends them once consent is received).
- Added a tooltip to the default consent field.
- Added support for Adobe's Consent 2.0 standard when using the [`setConsent`](/help/web-sdk/commands/setconsent.md) command.
- A better error now displays in the XDM Object data element UI if the user's access token is invalid or improperly provisioned.
- Fixed a cross-origin error (which does not affect the operation of the extension) that showed up on the browser developer console when viewing an XDM Object data element.

## Version 2.3.0 - November 4, 2020

Contains version 2.3.0 of the Adobe Experience Platform Web SDK library.

- Added support for using a data element when configuring default consent.
- Added ability to search for XDM schemas with the XDM Object data element type.
- Added cloning of XDM data within the Send Event action type to ensure any subsequent changes to the XDM data object will not be reflected in the request.

## Version 2.2.0 - October 1, 2020

- When customers tried to create an XDM object from sandbox schemas, they were running into authentication issues. The API that calls Experience Platform is now aware of environments so users are only presented with those schemas that they have access to edit.
- When using the `identityMap` data element, the namespaces is now pre-populated in a dropdown so you don't have to fill this in manually.
- Revamped the UI for the `xdmObject` data element. In the new UI, you can see which fields have been populated without having to enter each item in the object.

## Version 2.1.1 - August 26, 2020

- Fixes an issue where Adobe Experience Platform sandboxes on the XDM Object view displayed incorrectly. If, when using this version of the extension, an expected sandbox is not displayed in the list, the user should check with their Adobe Experience Platform administrator to ensure access permissions are set correctly.

## Version 2.1.0 - August 5, 2020

- Breaking Change: Remove the `syncIdentity` action and support passing those IDs in the `sendEvent` action instead. Please disable any existing rule using this action before upgrading your extension.
- Update to Alloy v. 2.1.0 ([Release Notes](/help/web-sdk/release-notes.md))
- Support IAB 2.0 Consent Standard in the `setConsent` action.
- Support overriding the dataset ID in the `sendEvent` action.
- Add a new Data Element of type `IdentityMap` which can be used to populate the `identityMap` entry in the XDM Object Data Element which is now enabled, and in the `setConsent` action.
- Support passing an identity map in the `setConsent` action.
- Support choosing an Experience Platform sandbox in the XDM Object Data Element.

## Version 1.0.0 - May 26, 2020

- Support selecting the environment from the Configuration Service.

## Version 0.1.2 - May 4, 2020

- Renamed `configId` to `edgeConfigId`.
- Renamed `viewStart` to `renderDecisions`, set to false by default. If set to true, Personalization offers are fetched and auto-rendered.
- Changes related to `Get Decisions`:
  - Removed the `getDecisions` command.
  - Added a `scopes` option to the `sendEvent` command. Decisions are returned in the `sendEvent` resolved promise.
  - Added a built-in `__view__` scope which will result in returning page/view wide offers. (VEC offers in Target for example.)
    Those decisions return from the `sendEvent` command only if `renderDecisions` is set to false.
  - Added a `Decisions Received` event, which fires when decisions become available.
- Combined multiple Personalization notifications under a single server call.
- Fixed issue in Event Merge ID where it was being reset every time the data element was referenced.
- Renamed the `setCustomerIds` action to `syncIdentity`.
- Added a `getIdentity` command. This can be consumed via custom code only for now.
- Enabling debug using `_satellite` now enables debugging in the Adobe Experience Platform Web SDK.
- Added support for typed values in the XDM Object: Booleans, Numbers and Decimals.

## Version 0.0.10 - March 16, 2020

- Combined the concepts of Opt-In & Opt-Out under `Consent`, and added a new `setConsent` command.
- Added a new Data Element of type `XDM Object` which allows mapping from JavaScript/JSON to XDM.

## Version 0.0.7 - February 18, 2020

- Removed idSyncContainerId, datasetId, schemaId, urlDestinationsEnabled, and cookieDestinationsEnabled options
- Added support for hyphens in edgeDomain option value
- Request made during ID migration is sent to demdex endpoint to improve cross-domain identification when demdex cookie is not set
- Request made during ID migration always expects a response to ensure identity cookie gets set
- When executing an invalid command, a list of valid command names will be logged in the console
- Added checkbox for toggling third-party cookie support to the tag extension. This disables calls to demdex.net

## Version 0.0.5 - December 20, 2019

- Add Activity Tracker configs to tag extension
- Expose EventType and EventMergeId on event command
- Add onBeforeEventSend config to tag extension
- Add edgeBasePath config to tag extension

## Version 0.0.3 - November 25, 2019

- New Merge ID and Type fields on the Send Event action. Merge ID maps to `xdm.eventMergeID` in the XDM schema and Type maps to `xdm.eventType` in the XDM schema.

## Version 0.0.2 - November 18, 2019

- Initial release
