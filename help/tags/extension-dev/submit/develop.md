---
title: Develop an Extension
description: This document provides a general overview of the tag extension development process with links to further documentation for more detailed processes.
exl-id: fb2f7275-a5da-4a41-b915-822c71c02e5c
TQID: 'https://experienceleague.adobe.com/Sqk2e7n7DRJ-wWn5HZT53eUbO0Eg380NcpZVr1gjWWA'
feature_v2:
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection tags
subfeature_v2:
  - id: 1a2b3c4d-0003-4003-8003-000000000003
    internal-label: Data collection tags extensions
level_v2:
  - id: d378ca77-2da1-4f39-ad92-1917fe974a38
    internal-label: Experienced
topic_v2:
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: b5ce8718-c3af-4fdb-a1a9-fca32f83a87c
    internal-label: Implementation
autotag-review: '2026-11-05T22:08:57.077Z'
---
# Develop an extension

A tag extension should be thought of as a (small) product with its own requirements. Determining how an Adobe Experience Platform user will want to use your extension can help you sort the functionality into what event types, condition types, action types, and data element types your extension should provide.

With that knowledge, you can plan out what components should be provided in your extension.

## Guides

With a plan in place, these guides can help you understand the extension development process:

* The [getting started guide](../getting-started.md) and other documents under **Extension development** in the left navigation are great reference material for understanding extensions. They include details on what extensions can do, how user information is stored and passed between your extension and Adobe Experience Platform, how your code is bundled into libraries, and how your extension code is interpreted and used at runtime in the browser.
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

You can review or use example extensions from GitHub, such as the [Hello World example extension](https://github.com/adobe/reactor-helloworld-extension), as starter projects.

## Slack workspace

You can request access to the Slack community workspace where extension authors can support each other using this [request form](https://docs.google.com/forms/d/e/1FAIpQLScq1m63YkDrRpvPLhzUqtfoleWiDDTTXZsSivIXRfFdlSMzpQ/viewform).

**Please note**: while there are members of Adobe in this Slack workspace, it is a community resource not sponsored by or moderated by Adobe.
