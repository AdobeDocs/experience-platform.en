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
>Sources SDK is in beta. The feature and documentation are subject to change.

Adobe Experience Platform Sources SDK is a set of configuration APIs that allow you to integrate a REST API-based source to bring your data to Experience Platform.

With Sources SDK, you can:

* Configure a new source to the Platform catalog, complete with create, read, update, and delete functionalities, as well as abilities to test and publish the source through API-driven `connectionSpec` access;
* Define authentication types for your source;
* Publish your source to one or all IMS Organizations;
* Create user-facing documentation for your source.

## Understanding sources

Adobe Experience Platform can ingest data from external sources while allowing you to structure, label, and enhance that data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, third-party software, and your CRM system.

For more information on sources, and to see a list of different sources currently supported on Platform, see the [sources overview](../home.md).

## Create a source

See the [sources SDK API guide](./api/getting-started.md) to start creating a new source to bring your data to Platform.

## Document your source

Once your source is created, see the [documentation guide](./documentation/overview.md) to start documenting your new source.

## Known limitations