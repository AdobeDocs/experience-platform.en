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

## Library components

Libraries are a collection of individual components, including conditions, actions, data elements, and more. Each library component is a piece of reusable code (provided by an extension) that is emitted inside the tag runtime. Depending on whether you are developing a web extension or an edge extension, the available types of components and their use cases will differ.

Refer to the subsections below for an overview of which components are available for each extension type.

### Components for web extensions {#web}

In web extensions, rules are triggered through events, which may then execute specific actions if a given set of conditions are met. See the overview on [module flow in web extensions](./web/flow.md) for more information.

In addition to the [core modules](./web/core.md) provided by Adobe, you can define the following library components in your web extensions:

* [Events](./web/event-types.md)
* [Conditions](./web/condition-types.md)
* [Actions](./web/action-types.md)
* [Data elements](./web/data-element-types.md)
* [Shared modules](./web/shared.md)

>[!NOTE]
>
>For details on the required format for implementing library components in web extensions, see the [module format overview](./web/format.md).

### Components for edge extensions {#edge}

In edge extensions, rules are triggered through condition checks, which then execute specific actions if those checks pass. See the overview on the [edge extension flow](./edge/flow.md) for more information.

You can define your own library components in your edge extensions. These can be categorized into the following types:

* [Conditions](./edge/condition-types.md)
* [Actions](./edge/action-types.md)
* [Data elements](./edge/data-element-types.md)

>[!NOTE]
>
>For details on the required format for implementing library modules in edge extensions, see the [module format overview](./edge/format.md).

## Extension configuration

An extension's configuration refers to the manner by which it gathers global settings from a user. For example, consider an extension that allows the user to send a beacon using a Send Beacon action and the beacon must always contain an account ID. We don't want to trouble users by asking them for the account ID each time they configure a Send Beacon action. Instead, the extension should ask for the account ID once from the extension configuration view. Each time a beacon is to be sent, the Send Beacon action library module can pull the account ID from the extension configuration and add it to the beacon.

When users install an extension to a tag property, they will be shown the extension configuration view. They cannot complete the installation of the extension without completing the extension configuration.

The extension configuration consists of a view component that will export settings that are then emitted within the tag runtime library as a plain object.

[Learn more](./configuration.md)

## Extension structure

An extension consists of a directory of files. An overview of how these files should be structured is as follows. Details on file content can be found in other sections.

An [`extension.json`](./manifest.md) file must exist at the root of the directory. This file will, among other things, describe the makeup of the extension and where certain files are located within the directory. This has some similarities to a [`package.json`](https://docs.npmjs.com/files/package.json) file in [npm](https://www.npmjs.com/).

Each library module (the logic to be emitted within the tag runtime library) must be its own file whose content follows the [CommonJS module standard](http://wiki.commonjs.org/wiki/Modules/1.1.1). For example, if you are building a "send beacon" action type, you must have a file that contains the logic that sends the beacon. The content of this file will be emitted within the tag runtime library. You might call it `sendBeacon.js`. The location of the file in the directory is not important since `extension.json` will describe where it is located.

Each view must be an HTML file capable of being loaded into an iframe within the tags application. The view must include a script provided by tags and conform to a small API in order to communicate with the application. There are no restrictions as to what libraries are used within your views. In other words, you may use jQuery, Underscore, React, Angular, Bootstrap, or other libraries. We do, however, hope that you will make your extension have a similar look and feel to the application.

It is recommended that you put all view-related files (HTML, CSS, JavaScript) within a single subdirectory that is isolated from the library module files. In `extension.json` you will describe where this view subdirectory is located. Platform will then serve this subdirectory (and only this subdirectory) from its web servers.
