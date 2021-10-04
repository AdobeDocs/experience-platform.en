---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
solution: Experience Platform
title: Flow Specifications API Endpoint
topic-legacy: developer guide
description: The /flowSpecs endpoint in the Flow Service API allows you to create, view, and update flow specifications and integrate new sources through Sources SDK.
---
# Flow specifications endpoint

>[!IMPORTANT]
>
>Sources SDK is currently in beta and your organization may not have access to it yet. The functionality described in this documentation is subject to change.

Flow specifications contain information that define a flow, including the source and target connection IDs that it supports, transformation specifications that are needed to be applied to the data, and scheduling parameters required to generate a flow. You can create, view, and edit flow specifications by using the `/flowSpecs` endpoint.

The following document provides steps on how to retrieve, create, and update flow specifications using the [!DNL Flow Service] API for Sources SDK.

## Getting started

Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Look up a flow specification

You can look up a specific flow specification by making a GET request that include's the connection specification's ID in the path.

## Create a flow specification

## Update a flow specification

You can update the fields of a connection specification through a PUT operation. When updating a connection specification through a PUT request, the body must include all of the fields that would be required when creating a new connection specification in a POST request.

>[!IMPORTANT]
>
>You must update the list of `sourceConnectionSpecIds` of the flow specification that corresponds to a new source, every time a new source is created. This ensures that your new source is supported by an existing flow specification, thus allowing your complete the dataflow creation process with your new source.