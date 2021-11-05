---
keywords: RTCDP;CDP;B2B Edition;Real-time Customer Data Platform;real time customer data platform;real time cdp;b2b;cdp
solution: Experience Platform
title: Getting Started with Real-time Customer Data Platform B2B Edition (Beta)
description: Use this sample scenario as an example when setting up your implementation of Real-time Customer Data Platform B2B Edition.
exl-id: edcce353-338a-440e-99eb-a64e2abca579
---
# Getting Started with Real-time Customer Data Platform B2B Edition (Beta)

This tutorial workflow relies on several Adobe Experience Platform services to demonstrate how to get started with Real-time Customer Data Platform (CDP) B2B Edition. If you want to follow along it is recommended to have a good understanding of the following services:

- [Sources](../sources/home.md)
- [XDM](../xdm/home.md)
- [Segmentation](../segmentation/home.md)
- [Destinations](../destinations/home.md)

Additionally, to make calls to a Platform API you must first complete the [Authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). This tutorial helps you gather your access credentials to be used in required headers.

## Ingest your data into Experience Platform

You can ingest your data by using one of the [various sources provided by Platform](../sources/home.md). In this example Bodea uses the [Marketo Engage connector](../sources/connectors/adobe-applications/marketo/marketo.md).

In order to access your Marketo account on Platform, you must acquire your authentication credentials which include: `munchkinId`, `clientId`, and  `clientSecret`. See the [authenticate your Marketo source connector](../sources/connectors/adobe-applications/marketo/marketo-auth.md) documentation for instructions. 

## Create Schemas for your data

- Next, use this guide to [connect your Marketo Account through the Platform UI](https://experienceleague.adobe.com/docs/experience-platform/sources/ui-tutorials/create/adobe-applications/marketo.html).

Use XDM standards during the connection process to establish a source connection between Marketo and Platform (this must be done before you can ingest data for use in downstream services). New standard classes are available to capture essential B2B data entities allowing for advanced segmentation use cases.

- [Create relationships between your XDM B2B Schemas](../xdm/tutorials/relationship-b2b.md)

Ingest data using datasets based on your B2B schemas. By creating a dataflow to bring in Marketo data. Incoming data can now be used by downstream Platform services.

<!-- >[!NOTE]
>
>B2B classes and their attributes are appended with a `B2B` label within the Segmentation workspace to differentiate them from those available as standard within Real-time Customer Data Platform. -->

## Create a segment to evaluate your data

After ingesting your data into Platform through the Marketo Engage source connector, you can evaluate your data by using the [Segmentation Service Segment Builder](https://experienceleague.adobe.com/docs/experience-platform/segmentation/ui/segment-builder.html?lang=en).

- Create a marketable audience from Real-time Customer Profile B2B data and view estimates of your prospective audience based on the combination of attributes, events, and existing audiences you defined. 
  
### Evaluate a segment job

Once you have developed, tested, and saved your segment definition, you can then evaluate the segment through either scheduled evaluation or on-demand evaluation.

See the segmentation documentation on [scheduled or on-demand segment evaluation for more information](../segmentation/tutorials/evaluate-a-segment.md#evaluate-a-segment)

## Export your evaluated data

After your segmentation job has successfully completed, you can export your audience to a dataset where it can be accessed and acted upon.

- [Create a target dataset in the UI](../segmentation/ui/overview.md)

- [Push the audience created in Experience Platform out to the Marketo Engage destination](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/smart-lists-and-static-lists/static-lists/push-an-adobe-experience-cloud-segment-to-a-marketo-static-list.html?lang=en).

## Next steps

By following this tutorial you have successfully leveraged the various Adobe Experience Platform services used by Real-time CDP B2B Edition. As a result, you have learned to ingest, segment, evaluate, and export your B2B data into precise specific audiences and engage those audiences across different channels. 
