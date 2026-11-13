---
title: Adobe Client Data Layer extension release notes
description: The latest release notes for the Adobe Client Data Layer tag extension in Adobe Experience Platform.
exl-id: 8fa3a210-6c85-4162-84cf-15c6e3cfcb9e
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
level_v2:
  - id: e8ccd51f-da0d-4e3b-939b-e30d5ebb1ea5
    internal-label: Beginner
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Adobe Client Data Layer extension release notes

## Version 2.1.1

Version 2.1.1 updates the extension to ACDL 3.x and redesigns its settings. Existing rules, data elements, and settings keep working after you upgrade. See [Upgrade from version 2.0.x](overview.md#upgrade).

* **ACDL library**:
  * The extension now includes ACDL 3.0.1 instead of ACDL 2.0.2. ACDL 3.x has [higher browser requirements](/help/collection/acdl/overview.md#browser-requirements) and some [behavior changes](/help/collection/acdl/install.md#upgrade).
  * The extension loads ACDL as a separate file after the tag library loads, and only when the page doesn't already load ACDL. This change reduces the size of the tag library. See [Load the Adobe Client Data Layer library if absent](configure.md#load-library).
* **Configuration**:
  * A custom **[!UICONTROL Data layer name]** now works even if the page hasn't created that variable. The custom name and `adobeDataLayer` always refer to the same array, computed state, and listeners. See [Data layer name](configure.md#data-layer-name).
  * The library option is now named **[!UICONTROL Load the Adobe Client Data Layer library if absent]**.
* **[!UICONTROL Data layer push]** event (formerly **[!UICONTROL Data Pushed]**):
  * **[!UICONTROL Specific named events]** accepts several event names, or a data element that returns a name or an array of names. See [Event names](event-types.md#event-names).
  * Event names are trimmed, and duplicate names are used once.
* **[!UICONTROL Push to data layer]** action:
  * Choose a data element, build the object field by field, or edit the JSON directly. See [Push to data layer](action-types.md#push-to-data-layer).
  * The object is stored as an object instead of JSON text, so values from data elements keep their types.
* **[!UICONTROL Clear data layer history]** action (formerly **[!UICONTROL Reset Data Layer]**):
  * Clearer options for keeping a snapshot of the computed state or leaving the array empty.
  * If ACDL hasn't loaded yet, the action now waits for it. Previously, the action failed or removed queued items.
* **[!UICONTROL Data layer computed state]** data element: Choose explicitly between **[!UICONTROL Entire computed state]** and **[!UICONTROL Specific path]**.
* Updated the extension's views, labels, and descriptions.

## Version 2.0.3

* Updated documentation and extension wording to clarify event and action types and increase usability.

## Version 2.0.2

* Loading the ACDL core library (version 2.0.2)
* Version 2.0.0 of the ACDL core library removed the ability to leverage event.beforeState and event.afterState. As such, we have modified these objects to always return empty objects. Implementations that rely on this functionality will need to be updated when moving to this version.

## Version 1.1.3

* Loading the ACDL core library (version 1.1.3)

## Version 1.1.2

The following functionality is provided by the extension on initial release:

* Loading the ACDL core library (version 1.1.1)
* Renaming the Adobe Data Layer
* Events:
  * Listening to all events
  * Listening to all data pushed
  * Listening to a specific event pushed
  * All events can be listened to on different scopes
* Data elements:
  * Computed State: Global or Specific state
  * Data Layer Size
* Actions:
  * Reset the data layer size (keeping the latest Computed State)
  * Push object to the Data Layer
