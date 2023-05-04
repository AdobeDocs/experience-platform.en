---
title: Release Notes for the Core Extension
description: The latest release notes for the Core extension in Adobe Experience Platform.
exl-id: a049b2d5-7a00-435d-bcc7-112658a53a1e
---
# Core Extension release notes

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../../term-updates.md) for a consolidated reference of the terminology changes.

## March 29, 2023

v3.4.1

* Adds new web native delegate events:
  * Keydown
  * KeyUp
* Adds the ability to test against many values ("Add Another" options) against the following delegates:
  * Events
    * Change
  * Conditions
    * Cookie
    * Landing Page
    * Query String Parameter
    * Traffic Source
    * Variable
* Changes the events/EntersViewport delegate to use the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) instead of manual detection of elements entering the viewport.
* Removes code that was migrating DTM cookies to LocalStorage.
* Logs a warning to the console when the LocalStorage and SessionStorage APIs are unavailable.

## January 4, 2022

v3.3.0

* Alters the [Trigger Direct Call action](./overview.md#direct-call-action) so that you can supply custom event information to send to direct call rules.

## October 8, 2021

v3.2.2

* Fix the conditional value data element JSON schema for all the available operators.
* Fix https://github.com/adobe/reactor-extension-core/issues/64.

## September 23, 2021

v3.2.1

* Fixed an error where the conditional value data element view initialization was not working properly when the field values were 0.

## September 23, 2021

v3.2.0

The following changes were introduced in the Conditional Value data element:

* Add a checkbox for the conditional and fallback values that allows the user to choose if they want undefined to be the returned value.
* Number values are exposed as numbers in the settings object.
* Conditional value is no longer required so that it can behave in the same way like the fallback value.

## September 17, 2021

v3.1.1

* Fix a JS error that was preventing the date range condition view to be loaded.

## September 16, 2021

v3.1.0

New data elements were added:

* Merged Object - Select multiple data elements that will each provide an object. These objects will be deeply (recursively) merged together to produce a new object.
* Conditional Value - Return one of two values (conditionalValue or fallbackValue) based on the result of the comparison.
* Runtime Environment - Return one of the following Launch environment variables: environment stage, library build date, property name, property ID, rule name, rule id, event type, event detail payload, direct call identifier.
* JavaScript Tools - Wrapper for common JavaScript operations: basic string manipulation (replace, substring, regex match, first and last index, split, slice), basic array operations (slice, join, pop, shift) and basic universal operations (slice, length).
* Device Attributes - Return device attributes like window size or screen size.

## August 11, 2021

v3.0.0

* PDCL-6153: Adds support to reliably pull the fully qualified URL for cached custom code actions.

v3.0.0 of the Core extension is coupled with changes in [v27.2.0 of the Turbine web runtime](https://github.com/adobe/reactor-turbine/releases/tag/v27.2.0), which allows users to load their library amongst many Adobe-managed hosting regions if the user's company supports Premium CDN.

This upgrade is optional and backwards compatible for users without Premium CDN, and mandatory for customers that have Premium CDN enabled on their company.

## May 20, 2021

v2.0.7

* Fixes an issue where mouse interactions on Text Inputs were no longer working correctly.
* Deprecates the usage of the Browser and Operating System conditions.

## May 4, 2021

v2.0.6

* Minor update to fix icons that become distorted when the screen size changes.

## March 11, 2021

v2.0.5

* Updated code in the runtime evaluation for events and actions that have a delay option, which now support data element values added in the v2.0.4 release, to properly coerce strings to numbers.

## March 9, 2021

v2.0.4

* Added Data Element Support for various fields - Data Element support has been added to the following events: 'Time on Page', 'Enters Viewport', 'Hover' and 'Media Time Played'. As well as the following Conditions: 'Time on Site' and 'Value Comparison'
* Adds support for default behavior for ctrl/cmd + click, and middle mouse click when using Link Delay
* **Marked link delay on the click event as “no longer supported”.** - more information can be found on the [Data Collection Blog](https://experienceleaguecommunities.adobe.com/t5/adobe-experience-platform-launch/explainer-link-delay/ba-p/398403) for Adobe Experience Platform

## January 6, 2021

v1.9.0

* **New “Trigger Direct Call” Action** - The Core extension now includes a new action type called `Trigger Direct Call`.  This can be used when you want to trigger a direct call rule via an action from a different rule. It maps directly to the `_satellite.track()` method. Many thanks to [Jan Exner](https://twitter.com/jexner) for this contribution.

## December 8, 2020

v1.8.4

* Fixed a bug where a user was unable to clear or unset the CSP nonce.

## July 28, 2020

v1.8.3

* Fixed a bug where the CSP nonce was read only once upon extension startup instead of being pulled fresh during custom code action invocation.

## July 13th, 2020

v1.8.2

* Fixed a bug where the custom code action was throwing an error for HTML code that contains tokens without a tag name (eg. comments).

## July 10th, 2020

v1.8.1

* Fixed a bug where custom HTML entities inside attributes of `script` and `style` tags were not correctly decoded before being written to the page."
* Fixed a bug where an error happens when an external custom code action has no content. External custom code action is the action that is loaded from a different file than the library (this happens when the event triggering the rule is not libraryLoaded or pageBottom)

## July 6th, 2020

v1.8.0

* **Promises in Custom Code** - Custom Code conditions and JavaScript actions that do not execute in the global scope can now return Promises.  You can use them to have subsequent conditions and actions wait for the completion of an asynchronous process in your Custom Code before moving on to the next item.
* **Callbacks in HTML Custom Code Actions** - You can achieve the same thing in HTML Custom Code actions using the `onCustomCodeSuccess()` and `onCustomCodeFailure()` callbacks.

Please refer to the [Core Extension reference](./overview.md) in the Conditions > Custom Code and Actions > Custom Code for more detailed information.

## April 7th, 2020

v1.7.3

* **Text field length increase** - Text input fields were changed to a flex layout in order to better utilize the user’s screen width, and give more space for longer text strings.

## November 1st, 2019

v1.7.0

* **Access to `event` Variable Within Custom Code Data Element** - You can now reference the event from within a custom code data element when run within the context of a rule. The object will contain useful information about the event that triggered the rule. Many thanks to [Stewart Schilling](https://twitter.com/sdi_stewart) for this contribution.

## October 7th, 2019

v1.6.2

* **New “Constant” Data Element Type** - The Core extension now includes a new data element type called `Constant`.  This can be used when you need to store a constant value that will be referenced in various conditions, actions or custom code. Many thanks to [Jan Exner](https://twitter.com/jexner) for this contribution.

## September 11, 2019

v1.6.1

* **Support for CSP Nonce** - The Core extension now has an optional configuration parameter. You can add a data element that references a nonce. If configured, all inline scripts that a tag adds to the page use the nonce that you’ve configured. This change supports the use of a Content Security Policy with a nonce so that tag scripts can still load in a CSP environment. You can read more about using tags with a CSP [here](../../../ui/client-side/content-security-policy.md).

## June 18, 2019

v1.5.0

* **Direct Call Logging** - Browser logging for direct call rules will now provide additional details when it is passed.

## May 8, 2019

v1.4.3

* **Input Fields** - Input fields are much longer now!
* **Custom Event** - Custom event type can now be used with events dispatched off of window.
* **Bug Fix** - fixed a bug where the Value Comparison Condition wouldn’t hold a 0 value.
* **Bug Fix** - exchange\_url field has been updated, so you can now see the Core Extension listing in Adobe Exchange.

## January 8, 2019

v1.4.2

* **Enters Viewport event** - Previously the Enters Viewport event would only trigger one time per page. This behavior can now be configured to trigger each time the element enters the viewport.
* **Custom Event event** - Custom Events can now contain contextual data that can be used inside of conditions and actions.
* **Click event** - When you set a link delay on the Click event, that will now register properly for descendants of the anchor and not just on the anchor itself.

## November 8, 2018

* **Persist Cohort option** - The option to persist a cohort has been added to the Sampling condition. This has the effect of keeping a user in or out of the sample cohort across sessions. For example, if the “persist cohort” checkbox is checked and the condition returns true the first time it is run for a given visitor, it will return true on all subsequent runs of the condition for the same visitor. Similarly, if the “persist cohort” checkbox is checked and the condition returns false the first time it is run for a given visitor, it will return false on all subsequent runs of the condition for the same visitor.
* **Bug Fix** - Fixed an issue where a rule using a Page Bottom event and a Custom Code action on a page where tags were being loaded synchronously but improperly installed (no call to `_satellite.pageBottom()`) would clear website content.
* **Bug Fix** - Fixed an issue where the Enters Viewport would not function if the tag library was loaded asynchronously and finished loading after the browser’s DOMContentLoaded event was fired.

## May 24, 2018

* **Feature** - Added a Value Comparison condition, this compares two values using any of several available operators. This replaces the functionality of several older conditions that were far too specific.
* **Feature** - Added a Max Frequency condition, this condition allows you to specify the number of times the condition should return true within a time period or event occurrence. Examples: 5 times per Day, 2 times per Visit.

## April 11, 2018

* **Feature** - Data elements can now reference other data elements.

## March 20, 2018

* **Bug fix** - Custom code windows were throwing `document.write` errors and not executing in async deployments
* **Bug fix** - Main modules were not included in a library
* **Bug fix** - Problems occurred with min and max values on the Random Number data element

## January 10, 2018

* **Feature** - Random Number Data Element
* **Feature** - Page Info Data Element
* **Feature** - Date Condition
* **Feature** - Sampling Condition
