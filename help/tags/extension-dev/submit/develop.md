---
title: Develop an Extension
description: This document provides a general overview of the tag extension development process with links to further documentation for more detailed processes.
exl-id: fb2f7275-a5da-4a41-b915-822c71c02e5c
TQID: https://experienceleague.adobe.com/Sqk2e7n7DRJ-wWn5HZT53eUbO0Eg380NcpZVr1gjWWA
product_v2:
  - id: a829a185-511f-4bf8-8dcf-9e684f8011cf
    internal-label: Advertising
  - id: d0a3eab4-7b10-4d96-a71e-6c0f8e7b7c87
    internal-label: CX Enterprise
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
