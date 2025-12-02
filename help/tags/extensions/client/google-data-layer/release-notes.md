---
title: Google Data Layer Extension Release Notes
description: The latest release notes for the Google Data Layer tag extension in Adobe Experience Platform.
exl-id: 740b6e3a-d469-475d-9523-03b0b48b11c8
---
# Google Data Layer extension release notes

## Version 1.0.4

* Public beta release of the extension.

## Version 1.0.6

* Addition of action to reset the data layer to the computed state.
* Fix bugs in data element that prevent the fetching of values from the computed state.

## Version 1.1.1

A significant enhancement and bug fix release resulting from beta testing feedback.

* Fixes an issue in which an empty Google Data Layer Extension data element used in a non-data layer rule (e.g. Library Loaded), returned the data layer object, not the computed state.
* Fixes an issue in which the data layer computed state was not passed from the helper in events at the time of the event firing, but rather at the time of rule execution.
* Adds a toggle to the data element dialog that allows a user to choose if only values from events should be returned.
* Fixes an issue in which the event history was not correctly caught by rule event listeners.
* Minor code clarity improvements.

## Version 1.2.0

* Adds an action to push to the data layer using a key-value multifield dialog.
* Fixes a bug that prevented the extension loading when Tags was deployed synchronously.
* Fixes a bug that caused an error when saving a data element in some circumstances.
* Adds documentation to the event dialog explaining the use of the Tags event object.
* Adds a warning about infinite loops to event dialog.

## Version 1.2.2

* Adds support for Google Analytics gtag() events.
