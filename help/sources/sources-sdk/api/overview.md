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

This document provides a high-level overview of the process of creating a new source, from authoring connection specification information, to testing, and to promoting your source globally or to a specific IMS Organization.

Sources SDK utilizes two separate APIs:

* [[!DNL Flow Service] API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/flow-service.yaml) - [!DNL Flow Service] is used to collect and centralize customer data from various disparate sources within Platform. The service provides a user interface and RESTful API that lets you set-up source connections to various data providers with ease. These source connections enable you to authenticate your third-party systems, set times for ingestion runs, and manage data ingestion throughput. 
* [!DNL Authoring Service] API

## Getting started

Before continuing, please review the [getting started guide](./getting-started.md) for links to related documentation, a guide to reading the sample API calls in this document, and important information regarding required headers that are needed to successfully make calls to any Experience Platform API.

## Create

The first steps in creating a new source is to collect your artifacts and to author a new connection specification.

For a step-by-step guide on how to create a new connection specification, including steps on how to retrieve a generic connection specification, see the tutorial on [creating a new source](./create.md).

## Promote

Once your connection specification is created and validated, you can proceed to promote the new source to Platform globally, or to specific IMS organizations using the [!DNL Flow Service] API. For a step-by-step guide on how to promote your source, see the tutorial on [promoting a new source](./promote.md)
