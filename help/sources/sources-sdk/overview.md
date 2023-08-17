---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
solution: Experience Platform
title: Self-Serve Sources (Batch SDK) Overview
description: Adobe Experience Platform Self-Serve Sources (Batch SDK) is a set of configuration APIs that allow you to integrate a REST API-based source using the Flow Service API to bring your data to Experience Platform.
exl-id: 5d5449ad-a1ba-402b-a281-0b2d8b704f32
---
# Self-Serve Sources (Batch SDK) overview

Adobe Experience Platform Self-Serve Sources (Batch SDK) is a framework that allows you to integrate a REST API-based source to the Experience Platform sources catalog using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/). Self-Serve Sources (Batch SDK) provides with a set of configuration APIs to build your own source and bring your batch data to Experience Platform.

With Self-Serve Sources (Batch SDK), you can:

* Configure and integrate a new source to the Experience Platform catalog using the [!DNL Flow Service] API.
* Define specifications for your source, including information pertaining to supported authentication types and how resource data is fetched.
* Create user-facing documentation for your new source.

The Self-Serve Sources documentation provides instructions to configure, test, and release a REST API-based source integration with Experience Platform, and have your source become part of the ever-growing sources catalog.

![catalog](./assets/catalog.png)

## Understanding sources

Experience  Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Experience Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

For more information on sources, and to see a list of different sources currently supported on Experience Platform, see the [sources overview](../home.md).

## Create a source

Through Self-Serve Sources, you can integrate your own REST API-based source and bring your data to Experience Platform with [!DNL Flow Service]. You can integrate a source to the Experience Platform sources catalog by creating, configuring, and submitting new connection specification through the [!DNL Flow Service] API.

See the guide on [creating a new connection specification](./api/api-overview.md) for information on how to integrate a new source to Experience Platform.

## Document your source

Once your source is created, see the [documentation guide](./documentation/doc-overview.md) for instructions on how to document your source through the [!DNL GitHub] web interface or through your own text editor.

## High-level process

The step-by-step process to configure your source in Experience Platform is outlined below:

* Read the [Self-Serve Sources (Batch SDK) API guide](./api/api-overview.md).
  * Read the [getting started guide](./api/getting-started.md).
  * Follow the tutorial on [creating a new connection specification](./api/create.md).
  * Follow the tutorial on [updating your connection specification](./api/update-connection-specs.md).
  * Follow the tutorial on [adding your new connection specification ID to a flow specification](./api/update-flow-specs.md)
  * [Submit your new source](./api/submit.md).
* To gain a better understanding of the structure and properties of a connection specification, read the guide on [configuration options for Self-Serve Sources (Batch SDK)](./config/config.md).
  * Read the guide on [configuring your authentication specifications](./config/authspec.md) to gain a better understanding of the different authentication types that you can use for your source.
  * Read the guide on [configuring your source specifications](./config/sourcespec.md) for information on the different pagination types, scheduling formats, and custom schemas that can be configured for your source.
  * Read the guide on [configuring your explore specifications](./config/explorespec.md) for information on how to define the parameters required for exploring and inspecting objects contained in your source.
* To start documenting your source, read the [overview on creating documentation for Self-Serve Sources](./documentation/doc-overview.md)
  * You can use this [sources API documentation template](./documentation/template.md) to structure your API documentation.
  * You can use this [sources UI documentation template](./documentation/ui-template.md) to structure your UI documentation.
  * See the guide on [using the GitHub web interface](./documentation/github.md) for steps on how to create documentation using GitHub.
  * See the guide on [using a text editor](./documentation/text-editor.md) for steps on how to create documentation using your local machine.
