---
title: Extension development overview
description: Learn about the primary components of different tag extension types and the extension development process in Adobe Experience Platform.
---
# Extension development overview

>[!NOTE]
>
>Adobe Experience Platform Launch is being rebranded as a suite of data collection technologies in Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../term-updates.md) for a consolidated reference of the terminology changes.

One of the primary goals of Adobe Experience Platform is to create an open ecosystem where engineers outside of the core engineering team can expose additional functionality through tags. This is done through Reactor extensions. Once an extension has been installed on a tag property by a user, that extension's functionality then becomes available for use by all users of the property.

This document outlines the primary components of different extension types and provides links for further documentation to guide you on the extension development process.

## Library modules

Library modules are pieces of reusable code provided by an extension that are emitted inside the tag runtime library. Depending on whether you are developing a web extension or an edge extension, the available module types and their use cases will differ. Refer to the following subsections for an overview of the modules for each extension type:

* [Modules for web extensions](#web-modules)
* [Modules for edge extensions](#edge-modules)

### Modules for web extensions {#web-modules}

In web extensions, rules are triggered through events, which may then execute specific actions if a given set of conditions are met. See the overview on [module flow in web extensions](./web/flow.md) for more information.

In addition to the [core modules](./web/core.md) provided by Adobe, you can define the following library module types in your web extensions:

* [Event types](#web-event)
* [Condition types](#web-condition)
* [Action types](#web-action)
* [Data element types](#web-data-element)
* [Shared modules](#shared)

>[!NOTE]
>
>For details on the required format for implementing library modules in web extensions, see the [module format overview](./web/format.md).

#### Event types {#web-event}

A rule event is some activity that must occur before a rule fires.

As an example, an extension could provide a "gesture" event type that watches for a certain mouse or touch gesture to occur. Once the gesture occurs, the event logic would fire the rule.

Event types typically consist of (1) a view shown within the Data Collection UI that allows users to modify settings for the event and (2) a library module emitted within the tag runtime library to interpret the settings and watch for a certain activity to occur.

[Learn more](./web/event-types.md)

#### Condition types {#web-condition}

A rule condition is evaluated after a rule event has occurred. All conditions must return true in order for the rule to continue processing. The exception is when users explicitly place conditions into an "exception" bucket in which case all conditions within the bucket must return false for the rule to continue processing.

As an example, an extension could provide a "viewport contains" condition type wherein the user could specify a CSS selector. When the condition is evaluated on the client's website, the extension would be able to find elements matching the CSS selector and return whether any of them are contained within the user's viewport.

Condition types typically consist of (1) a view shown within the Data Collection UI that allows users to modify settings for the condition and (2) a library module emitted within the tag runtime library to interpret the settings and evaluate a condition.

[Learn more](./web/condition-types.md)

#### Action types {#web-action}

A rule action is something that is performed after the rule event has occurred and conditions have passed evaluation.

As an example, an extension could provide a "show support chat" action type which could display a support chat dialog to help users who may be struggling while checking out.

Action types typically consist of (1) a view shown within the Data Collection UI that allows users to modify settings for the action and (2) a library module emitted within the tag runtime library to interpret the settings and perform an action.

[Learn more](./web/action-types.md)

#### Data element types {#web-data-element}

Data elements are essentially aliases to pieces of data on a page regardless of whether that data is found in query string parameters, cookies, DOM elements, or some other place. A data element can be referenced by rules and acts as an abstraction for accessing these pieces of data. When the location of the data changes in the future (for example, from a DOM element's `innerHTML` to a JavaScript variable's value), a single data element can be reconfigured while all the rules referencing that data element can remain unchanged.

A data element type enables users to configure data elements to access a piece of data in a particular way. As an example, an extension could provide a "local storage item" data element type wherein the user could specify a local storage item name. When the data element is referenced by a rule, the extension would be able to look up the local storage item value by using the local storage item name that the user had provided when configuring the data element.

Data element types typically consist of (1) a view shown within the Data Collection UI that allows users to modify settings for the data element and (2) a library module emitted within the tag runtime library to interpret the settings and retrieve pieces of data.

[Learn more](./web/data-element-types.md)

#### Shared modules {#shared}

A shared module is a module exposed by one extension to be accessed by another. This can be a very useful mechanism for communicating between extensions. For example, Extension A may load a piece of data asynchronously and make it available to Extension B via a [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

Shared modules are included in the library even when they are never called from inside other extensions. In order to not increase the library size unnecessarily, you should be careful about what you expose as a shared module.

Shared modules do not have a view component.

[Learn more](./web/shared.md)

### Modules for edge extensions {#edge-modules}

In edge extensions, rules are triggered through condition checks, which then execute specific actions if those checks pass. See the overview on [module flow in edge extensions](./edge/flow.md) for more information.

You can define your own library modules in your edge extensions. These can be categorized into the following types:

* [Condition types](#condition)
* [Action types](#action)
* [Data element types](#data-element)

>[!NOTE]
>
>For details on the required format for implementing library modules in edge extensions, see the [module format overview](./edge/format.md).

#### Condition types {#condition}

A rule condition is evaluated after a rule event has occurred. All conditions must return true in order for the rule to continue processing. The exception is when users explicitly place conditions into an "exception" bucket in which case all conditions within the bucket must return false for the rule to continue processing.

As an example, an extension could provide a "viewport contains" condition type wherein the user could specify a CSS selector. When the condition is evaluated on the client's website, the extension would be able to find elements matching the CSS selector and return whether any of them are contained within the user's viewport.

Condition types typically consist of (1) a view shown within the Data Collection UI that allows users to modify settings for the condition and (2) a library module emitted within the tag runtime library to interpret the settings and evaluate a condition.

[Learn more](./web/condition-types.md)

#### Action types {#action}

A rule action is something that is performed after the rule conditions have passed evaluation.

As an example, an extension could provide a "show support chat" action type which could display a support chat dialog to help users who may be struggling while checking out.

Action types typically consist of (1) a view shown within the Data Collection UI that allows users to modify settings for the action and (2) a library module emitted within the tag runtime library to interpret the settings and perform an action.

[Learn more](./web/action-types.md)

#### Data element types {#data-element}

Data elements are essentially aliases to pieces of data on a page regardless of where that data is found inside the event received by the server. A data element can be referenced by rules and acts as an abstraction for accessing these pieces of data. When the location of the data changes in the future (for example, the event key that contains the value is changed), a single data element can be reconfigured while all the rules referencing that data element can remain unchanged.

Data element types typically consist of (1) a view shown within the Data Collection UI that allows users to modify settings for the data element and (2) a library module emitted within the tag runtime library to interpret the settings and retrieve pieces of data.

[Learn more](./web/data-element-types.md)

## Extension configuration

An extension's configuration refers to the manner by which it gathers global settings from a user. For example, consider an extension that allows the user to send a beacon using a Send Beacon action and the beacon must always contain an account ID. We don't want to trouble users by asking them for the account ID each time they configure a Send Beacon action. Instead, the extension should ask for the account ID once from the extension configuration view. Each time a beacon is to be sent, the Send Beacon action library module can pull the account ID from the extension configuration and add it to the beacon.

When users install an extension to a tag property, they will be shown the extension configuration view. They cannot complete the installation of the extension without completing the extension configuration.

The extension configuration consists of a view component that will export settings that are then emitted within the tag runtime library as a plain object.

[Learn more](./configuration.md)

## Extension structure

An extension consists of a directory of files. An overview of how these files should be structured is as follows. Details on file content can be found in other sections.

An [`extension.json`](./manifest.md) file must exist at the root of the directory. This file will, among other things, describe the makeup of the extension and where certain files are located within the directory. This has some similarities to a [`package.json`](https://docs.npmjs.com/files/package.json) file in [npm](https://www.npmjs.com/).

Each library module (the logic to be emitted within the tag runtime library) must be its own file whose content follows the [CommonJS module standard](http://wiki.commonjs.org/wiki/Modules/1.1.1). For example, if we're building a "send beacon" action type, we must have a file that contains the logic that sends the beacon. The content of this file will be emitted within the tag runtime library. You might call it `sendBeacon.js`. The location of the file in the directory is not important since `extension.json` will describe where it is located.

Each view must be an HTML file capable of being loaded into an iframe within the tags application. The view must include a script provided by tags and conform to a small API in order to communicate with the application. There are no restrictions as to what libraries are used within your views. In other words, you may use jQuery, Underscore, React, Angular, Bootstrap, or other libraries. We do, however, hope that you will make your extension have a similar look and feel to the application.

It is recommended that you put all view-related files (HTML, CSS, JavaScript) within a single subdirectory that is isolated from the library module files. In `extension.json` you will describe where this view subdirectory is located. Platform will then serve this subdirectory (and only this subdirectory) from its web servers.
