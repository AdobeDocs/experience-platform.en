---
keywords: Experience Platform;home;popular topics;schema;Schema;XDM;fields;schemas;Schemas;person;datatype;data-type;data type;
solution: Experience Platform
title: Application data type
topic: overview
description: This document provides an overview of the Application XDM data type.
---

# [!UICONTROL Application] data type

[!UICONTROL Application] is a standard XDM data type that describes an individual person. This datatype can represent a person acting in various roles, such as a customer, contact, or owner.

<img src='../images/data-types/application.PNG' width=500 /><br />

| Property | Data type | Description |
| --- | --- | --- |
| `applicationCloses` | [[!UICONTROL Measure]](./measure.md) | Describes details on the termination of an application. |
| `crashes` | [[!UICONTROL Measure]](./measure.md) | Triggers when the application does not exit as intended. |
| `featureUsages` | [[!UICONTROL Measure]](./measure.md) | Activation of an application feature that is being measured. |
| `firstLaunches` | [[!UICONTROL Measure]](./measure.md) | Contains data on the first launch. This property is triggered on first launch after an installation. |
| `installs` | [[!UICONTROL Measure]](./measure.md) | Records the installation of an application on a device when a specific installation event is available. |
| `launches` | [[!UICONTROL Measure]](./measure.md) | Describes a value associated with the launch of an application. This is triggered on every run, including crashes, installs, and resuming from background when the session timeout has been exceeded. |
| `upgrades` | [[!UICONTROL Measure]](./measure.md) | Contains data on the upgrade of an application that has previously been installed. Triggered on the first launch after an upgrade. |
| `id` | String | Identifier of the application. |
| `name` | String | Name of the application. |
| `userPerspective` | String | The perspective or physical relationship between the user and the app or brand at the time an event happened. Understanding the perspective of the user in relation to the app helps with accurately generating sessions as the majority of the time you will not want to include `background` and `detached` events as part of an "active" session. The value of this property must be equal to one of the enum values listed below. <li> `foreground`: The user and app are directly interacting with one another. </li> <li> `background`: The app and user are indirectly interacting with one another. For example, the app could measure a value and refresh while the screen is locked or another app is being used in the foreground.  </li> <li> `detached`: Detached means the event was related to the app but didn't come directly from the app, such as the sending of an email or push notification from an external system. |
| `version` | String | The version of the application. |

For more details on the mixin, refer to the public XDM repository:

* [JSON example](https://github.com/adobe/xdm/blob/63a4a825b2acb0a8cb661d6e02ae952711fc4da6/docs/reference/datatypes/person.schema.json)
* [Full schema](https://github.com/adobe/xdm/blob/63a4a825b2acb0a8cb661d6e02ae952711fc4da6/docs/reference/datatypes/person.schema.md#xdmgender-known-values)