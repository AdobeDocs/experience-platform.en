---
title: Getting Started with Extension Development
description: Get started with developing your own tag extensions in Adobe Experience Platform.
exl-id: 3925b928-0180-4a4f-aaa6-42f342089560
---
# Getting started with extension development

To get you up and running and building extensions, we will be using the open-source scaffolding tool, provided by Adobe engineers to create the necessary files and file structure for your extension package, so all you have left to do is the valuable part: actually write the code.

## Prerequisites

* Install [Node.js](https://nodejs.org/en/download/).

## Extension Setup

Create a directory where your extension files will live.

```shell
mkdir example && cd example
```

This guide utilizes the extension scaffolding tool to build out the initial extension structure so developers can quickly begin coding. This process can be done manually without the scaffold tool, if desired.

Run the scaffold tool.

```shell
npx @adobe/reactor-scaffold
```

The scaffold tool will prompt for some initial configuration options as follows:

* Display name - The visible name of the extension
* Platform - Specifies whether the extension is developed for web, mobile, or edge
* Version - The version of the extension
* Description - A short description of the extension's purpose
* Author - The name of the extension's author

>[!NOTE]
> For mobile extensions, several questions will be asked regarding the structure of your Android and iOS applications.

The scaffold tool will then provide options for building the extension structure:

* [Extension configuration view](./configuration.md): The view, HTML file, through which an extension gathers global settings from an user.
* [Event types](./web/event-types.md): Defines an activity for observation. For example, know when a user scrolls rapidly, or a user interacted with a page element. Events can then be utilized in rules to perform actions.
* [Condition types](./web/condition-types.md): Condition types evaluate whether something is true or false.
For example, this can return if the user's browser is Chrome, if they're using an iPad, or if the user is on a specific domain.
* [Action types](./web/action-types.md): The action to perform when an event occurs. For example, send an analytics beacon, show an offer, save a cookie, or open a support chat.
* [Data element types](./web/data-element-types.md): A data element type retrieves a piece of data. This data could be in local storage, in a cookie, in a DOM element, or in a custom location.
* [Shared modules](./web/shared.md) (web only): A shared module is a mechanism by which extensions may communicate with other extensions.
* [Views](./web/views.md): Each event, condition, action, or data element type may provide a view allowing a user to supply settings.
* Exchange URL (web and edge only): When an extension is published to Adobe's public catalog, provide the listing URL here.
* Icon Path: A path to an icon file for the extension.

>[!NOTE]
>
>* Subsequent runs of the scaffolding tool will skip over the initial configuration.
>* More than one of each event, condition, action, may be added.
>* Only one configuration view may exist.
 
## Next Steps

* Follow the [Submission Process Overview](./submit/overview.md) and prepare to [validate](./submit/upload-and-test.md#validate) and [upload](./submit/upload-and-test.md#integration) your extension for testing within the Tag ecosystem.
