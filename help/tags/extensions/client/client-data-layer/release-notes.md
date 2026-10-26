---
title: Release Notes for the Adobe Client Data Layer Extension
description: The latest release notes for the Adobe Client Data Layer tag extension in Adobe Experience Platform.
exl-id: 8fa3a210-6c85-4162-84cf-15c6e3cfcb9e
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: f8a45b24-4be7-4f1b-909b-60d06b483a20
    internal-label: Leader
---
# Adobe Client Data Layer extension release notes

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
