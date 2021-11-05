---
keywords: RTCDP;CDP;B2B Edition;Real-time Customer Data Platform;real time customer data platform;real time cdp;b2b;cdp
solution: Experience Platform
title: Getting Started with Real-time Customer Data Platform B2B Edition (Beta)
description: Use this sample scenario as an example when setting up your implementation of Real-time Customer Data Platform B2B Edition.
exl-id: edcce353-338a-440e-99eb-a64e2abca579
---
# Getting Started with Real-time Customer Data Platform B2B Edition (Beta)

This tutorial workflow relies on several Adobe Experience Platform services to demonstrate how to get started with Real-time Customer Data PLatform (CDP) B2B Edition. If you want to follow along it is recommended to have a good understanding of the following services:

- [Sources](../sources/home.md)
- [XDM](../xdm/home.md)
- [Segmentation](../segmentation/home.md)
- Destinations

Additionally, to make calls to a Platform API you must first complete the [Authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). This tutorial helps you gather your access credentials to be used in required headers.

## Ingest your data into Experience Platform

You can ingest your data by using one of the [various sources provided by Platform](../sources/home.md). In this example Bodea uses the [Marketo Engage connector](../sources/connectors/adobe-applications/marketo/marketo.md).

In order to access your Marketo account on Platform, you must acquire your authentication credentials which include: `munchkinId`, `clientId`, and  `clientSecret`. See the [authenticate your Marketo source connector](../sources/connectors/adobe-applications/marketo/marketo-auth.md) documentation for instructions. 

## Create Schemas for your data

Next use this guide to [connect your Marketo Account through the Platfrom UI](https://experienceleague.adobe.com/docs/experience-platform/sources/ui-tutorials/create/adobe-applications/marketo.html).

- Use XDM standards during the connection process to establish a source connection between Marketo and Platform (this must be done before you can ingest data for use in downsteam services)

By creating a dataflow to bring in Marketo data. Incoming data can now be used by downstream Platform services

## Create a segment to evaluate your data

After ingesting your data into Platform through the Marketo Engage source connector, you can evaluate your data by using the Segmentation Service.

### Evaluate a segment job

### Monitor the segment job

## Export your evaluated data

## Next steps

ending