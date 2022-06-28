---
title: Develop an Extension
description: This document provides a general overview of the tag extension development process with links to further documentation for more detailed processes.
exl-id: fb2f7275-a5da-4a41-b915-822c71c02e5c
---
# Develop an extension

>[!NOTE]
>
>Adobe Experience Platform Launch has been rebranded as a suite of data collection technologies in Adobe Experience Platform. Several terminology changes have rolled out across the product documentation as a result. Please refer to the following [document](../../term-updates.md) for a consolidated reference of the terminology changes.

A tag extension should be thought of as a (small) product with its own requirements. Determining how an Adobe Experience Platform user will want to use your extension can help you sort the functionality into what event types, condition types, action types, and data element types your extension should provide.

With that knowledge, you can plan out what components should be provided in your extension.

## Guides

With a plan in place, these guides can help you understand the extension development process:

* The [getting started guide](../getting-started.md) and other documents under **Extension development** in the left navigation are great reference material for understanding extensions. They include details on what extensions can do, how user information is stored and passed between your extension and Adobe Experience Platform, how your code is bundled into libraries, and how your extension code is interpreted and used at runtime in the browser.
* The [extension tutorial video](https://youtu.be/rxjtC9o4rl0) is a great place to start.
* The [Introduction to Extensions](https://www.youtube.com/playlist?list=PLOdw8u2F8CIgynzKrPEwCPuDxzHW1WP5m) YouTube playlist walks through the process of creating extension packages.
* [Understanding JSON Schema](https://spacetelescope.github.io/understanding-json-schema/index.html#) article.
* [JSON Lint/Validator](https://jsonlint.com/).
* [JSON Viewer](https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh) Chrome extension to highlight & print JSON & JSONP.
* [jsonschema.net](https://jsonschema.net/#/editor) editor to help create JSON schema from your object.
* [JSON Schema Validator](https://www.jsonschemavalidator.net) An online, interactive JSON Schema validator.

## Tools

There are also a number of npm tools to help you with your extension package development:

* [Tag Extension Scaffold Tool](https://www.npmjs.com/package/@adobe/reactor-scaffold) helps you easily create a starter project on your local machine.
* [Tag Extension Sandbox](https://www.npmjs.com/package/@adobe/reactor-sandbox) helps you validate your extension views and modules on your local machine.
* [Tag Extension Packager](https://www.npmjs.com/package/@adobe/reactor-packager) is a command-line utility for packaging a tag extension into a zip file.
* [Tag Extension Uploader](https://www.npmjs.com/package/@adobe/reactor-uploader) is an interactive command line tool to help you input your technical account credentials and upload your extension package to tags.
* [Tag Extension Releaser](https://www.npmjs.com/package/@adobe/reactor-releaser) is an interactive command line tool to help you release your extension to private availability.

## Example extensions

There are example extensions on GitHub you can review or use as starter projects:

* [Hello World example extension](https://github.com/adobe/reactor-helloworld-extension)
* [Facebook example extension](https://github.com/Adobe-Marketing-Cloud-Activation/extension-facebookpixel)
* [Typekit example extension](https://github.com/jeffchasin/extension-typekit)
* [Pinterest example extension](https://github.com/jeffchasin/extension-pinterest)

## Slack workspace

You can request access to the Slack community workspace where extension authors can support each other using this [request form](https://docs.google.com/forms/d/e/1FAIpQLScq1m63YkDrRpvPLhzUqtfoleWiDDTTXZsSivIXRfFdlSMzpQ/viewform).

**Please note**: while there are members of Adobe in this Slack workspace, it is a community resource not sponsored by or moderated by Adobe.
