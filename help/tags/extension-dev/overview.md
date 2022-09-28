---
title: Extension development overview
description: Learn about the primary components of different tag extension types and the extension development process in Adobe Experience Platform.
exl-id: b72df3df-f206-488d-a690-0f086973c5b6
---
# Extension development overview

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../term-updates.md) for a consolidated reference of the terminology changes.

One of the primary goals of tags in Adobe Experience Platform is to create an open ecosystem where engineers outside of Adobe can expose additional functionalities on their websites and mobile applications. This is accomplished through tag extensions. Once an extension has been installed on a tag property, that extension's functionality then becomes available for use by all users of the property.

This document outlines the primary components of an extension, and provides links to further documentation to help guide you on the extension development process.

## Extension structure

An extension consists of a directory of files. Specifically, an extension consists of a manifest file, library modules, and views.

### Manifest file

A manifest file ([`extension.json`](./manifest.md)) must exist at the root of the directory. This file describes the makeup of the extension and where certain files are located within the directory. The manifest functions similarly to a [`package.json`](https://docs.npmjs.com/files/package.json) file in an [npm](https://www.npmjs.com/) project.

### Library modules

Library modules are the files that describe the different [components](#components) that an extension provides (in other words, the logic to be emitted within the tag runtime library). The content of each library module file must follow the [CommonJS module standard](https://nodejs.org/api/modules.html#modules-commonjs-modules).

For example, if you are building an action type called "send beacon", you must have a file that contains the logic that sends the beacon. If using JavaScript, the file could be called `sendBeacon.js`. The content of this file will be emitted within the tag runtime library.

You can put library module files in anywhere you like within the extension directory, provided that you describe their locations in `extension.json`.

### Views

A view is an HTML file capable of being loaded into an [`iframe` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) within the tags application, specifically through the Platform UI and Data Collection UI. The view must include a script provided by the extension and conform to a small API in order to communicate with the application.

The most important view file for any extension is its configuration. See the section on [extension configurations](#configuration) for more information.

There are no restrictions as to what libraries are used within your views. In other words, you may use jQuery, Underscore, React, Angular, Bootstrap, or others. However, it is still recommended to make your extension have a similar look and feel to the UI.

It is recommended that you put all view-related files (HTML, CSS, JavaScript) within a single subdirectory that is isolated from the library module files. In `extension.json`, you can describe where this view subdirectory is located. Platform will then serve this subdirectory (and only this subdirectory) from its web servers.

## Library components {#components}

Each extension defines a set of functionalities. These functionalities are implemented by being included in a [library](../ui/publishing/libraries.md) that is deployed to your website or app. Libraries are a collection of individual components, including conditions, actions, data elements, and more. Each library component is a piece of reusable code (provided by an extension) that is emitted inside the tag runtime.

Depending on whether you are developing a web extension or an edge extension, the available types of components and their use cases differ. Refer to the subsections below for an overview of which components are available for each extension type.

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

You can define the following library components in your edge extensions:

* [Conditions](./edge/condition-types.md)
* [Actions](./edge/action-types.md)
* [Data elements](./edge/data-element-types.md)

>[!NOTE]
>
>For details on the required format for implementing library modules in edge extensions, see the [module format overview](./edge/format.md).

## Extension configuration {#configuration}

An extension's configuration refers to the manner by which it gathers global settings from a user. The configuration consists of a view component that exports and emits settings within the tag runtime library as a plain object.

For example, consider an extension that allows the user to send a beacon using a "Send Beacon" action, and the beacon must always contain an account ID. Rather than asking users for an account ID each time they configure a "Send Beacon" action, the extension should ask for the account ID once from the extension configuration view. Each time a beacon is to be sent, the "Send Beacon" action can pull the account ID from the extension configuration and add it to the beacon.

When users install an extension to a property in the UI, they are shown the extension configuration view, which they must complete in order to finish the installation.

To learn more, see the guide on [extension configurations](./configuration.md).

## Submitting extensions

Once you have finished building your extension, you can submit it to be listed in the extension catalog in Platform. See the [extension submission process overview](./submit/overview.md) for more information.
