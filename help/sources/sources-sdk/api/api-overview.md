---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Self-Serve Sources (Batch SDK) API Guide
description: This document provides an overview of the process of creating a new source, including steps on how to retrieve, write, and submit a new connection specification using the Flow Service API.
exl-id: 7e827989-207b-41e2-84d6-5ecb754bebb6
---
# Self-Serve Sources (Batch SDK) API Guide

This document provides an overview of the process of creating a new source, including steps on how to write and submit a new connection specification using the [[!DNL Flow Service] API](https://www.adobe.io/experience-platform-apis/references/flow-service/).

[!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Platform. The service provides a user interface and RESTful API that lets you set up source connections to various data providers with ease. These source connections enable you to authenticate your third-party systems, set times for ingestion runs, and manage data ingestion throughput.

The [!DNL Flow Service] API provides several endpoints that allow you to programmatically manage the connection and flow specifications for a new source that you are integrating through Self-Serve Sources (Batch SDK).

## Create a new connection specification

The first step in configuring a new source is to create a new connection specification. 

Connection specifications return a source's connector properties. They include authentication specifications related to creating the base and source connections and a fixed connection specification ID that is assigned to a particular source. Connection specifications are tenant and organization agnostic. A typical connection specification contains basic information on a given source, as well as three distinct sections: `authSpec`, `sourceSpec`, and `exploreSpec`.

For detailed instructions, see the guide on [creating a new connection specification](./create.md). For information on the properties and values used for a connection specification, including details on configuring authentication, source, and explore specifications, see the [configuration options document](../config/config.md).

## Update flow specifications

Once you successfully create a connection specification, you must then append the `RestStorageToAEP` flow specification to enable your source to create a dataflow. 

Flow specifications contain information that defines a flow, including the source and target connection IDs that it supports, transformation specifications that are needed to be applied to the data, and scheduling parameters required to generate a flow.

For detailed instructions, see the guide on [updating flow specifications](./update-flow-specs.md).

## Update your connection specification

You can make updates to your connection specification by making a PUT request to the [!DNL Flow Service] API. See the guide on [updating your connection specifications](./update-connection-specs.md) for more information.

## Submit your source

To submit your source for integration to Experience Platform, you must first complete the entire [!DNL Flow Service] API workflow for sources to ensure that your source works successfully. If your source runs successfully, then you can proceed and contact your Adobe representative for verification and promotion. See the guide on [testing and submitting your source](./submit.md) for more information

## Next steps

To begin using the [!DNL Flow Service] API and create a new source through Self-Serve Sources (Batch SDK), read the [getting started guide](./getting-started.md) then select one of the endpoint guides to learn how to use specific endpoints.
