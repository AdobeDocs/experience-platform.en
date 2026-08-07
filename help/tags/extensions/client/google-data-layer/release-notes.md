---
title: Google Data Layer Extension Release Notes
description: The latest release notes for the Google Data Layer tag extension in Adobe Experience Platform.
exl-id: 740b6e3a-d469-475d-9523-03b0b48b11c8
TQID: https://experienceleague.adobe.com/mgFSNSvx-Gg1syMdsf6yv-YUbHvIRPXRUUo1s-503KA
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
  - id: dc5cf79d-43c4-4731-bffa-1df5d7549cb1
    internal-label: Acrobat Sign
  - id: e55547f1-a1ff-40c6-8978-026e40ab7fa4
    internal-label: Analytics
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
  - id: f002a92a-b99f-47a4-90c8-65e0e415bc7a
    internal-label: Pass
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
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
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
