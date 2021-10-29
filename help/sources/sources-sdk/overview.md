---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
solution: Experience Platform
title: Sources SDK Overview
topic-legacy: overview
description:
---
# (Beta) Sources SDK overview

>[!IMPORTANT]
>
>Sources SDK is currently in beta and your organization may not have access to it yet. The functionality described in this documentation is subject to change.

Adobe Experience Platform Sources SDK is a set of configuration APIs that allow you to integrate a REST API-based source using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/) to bring your data to Experience Platform.

With Sources SDK, you can:

* Configure a new source to the Platform catalog, complete with create, read, update, and delete functionalities using the [!DNL Flow Service] API.
* Define specifications for your source, including information pertaining to supported authentication types and how resource data is fetched.
* Create user-facing documentation for your new source.

## Understanding sources

Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

For more information on sources, and to see a list of different sources currently supported on Platform, see the [sources overview](../home.md).

## Create a source

Through Sources SDK, you can integrate your own REST API-based source and bring your data to Platform with [!DNL Flow Service]. Sources SDK allows you to integrate a new source with Platform, by creating a and submitting new connection specification through the [!DNL Flow Service] API.

See the guide on [creating a new connection specification](./api/overview.md) for information on how to integrate a new source to Platform.

## Document your source

Once your source is created, see the [documentation guide](./documentation/overview.md) for instructions on how to document your source through the [!DNL GitHub] web interface or through your own text editor.
