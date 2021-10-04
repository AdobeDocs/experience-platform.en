---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
solution: Experience Platform
title: Sources SDK API Guide
topic-legacy: overview
description:
---
# Sources SDK API guide

>[!IMPORTANT]
>
>Sources SDK is currently in beta and your organization may not have access to it yet. The functionality described in this documentation is subject to change.

This document provides an overview of the process of creating a new source, including steps on how to retrieve, write, and submit a new connection specification using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Platform. The service provides a user interface and RESTful API that lets you set-up source connections to various data providers with ease. These source connections enable you to authenticate your third-party systems, set times for ingestion runs, and manage data ingestion throughput.

The [!DNL Flow Service] API provides several endpoints that allow you to programmatically manage connection and flow specifications for a new source that you are integrating through Sources SDK. These endpoints are outlined below.

To view all available endpoints and CRUD operations, visit the [[!DNL Flow Service] API reference](https://www.adobe.io/experience-platform-apis/references/flow-service/).

## Connection specifications

Connection specifications return a source's connector properties, including authentication specifications related to creating the base and source connections and a fixed connection specification ID that is assigned to a particular source. Connection specifications are tenant and IMS Organization agnostic. A typical connection specification contains basic information on a given source, as well as three distinct sections: `authSpec`, `sourceSpec`, and `exploreSpec`. You can create, view, and edit connection specifications using the `/connectionSpecs` endpoint.

See the [connection specifications endpoint guide](./connection-specs.md) for more information on the use of this endpoint.

## Flow specifications

Flow specifications contain information that define a flow, including the source and target connection IDs that it supports, transformation specifications that are needed to be applied to the data, and scheduling parameters required to generate a flow. You can create, view, and edit flow specifications by using the `/flowSpecs` endpoint.

See the [flow specifications endpoint guide](./flow-specs.md) for more information on the use of this endpoint.

## Next steps

To begin using the [!DNL Flow Service] API and create a new source through Sources SDK, read the [getting started guide](./getting-started.md) then select one of the endpoint guides to learn how to use specific endpoints.