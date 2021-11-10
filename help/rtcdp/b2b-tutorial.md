---
keywords: RTCDP;CDP;B2B Edition;Real-time Customer Data Platform;real time customer data platform;real time cdp;b2b;cdp
solution: Experience Platform
title: Getting Started with Real-time Customer Data Platform B2B Edition (Beta)
description: Use this sample scenario as an example when setting up your implementation of Real-time Customer Data Platform B2B Edition.
---
# Getting Started with Real-time Customer Data Platform B2B Edition (Beta)

The technology company Bodea wants to combine person and account data from different siloed data sources in order to effectively target customers with an email and a LinkedIn advertisement campaign for its new product. This document provides a high-level end-to-end workflow for getting started with Real-time Customer Data Platform (CDP) B2B Edition.

Bodea uses Marketo Engage as its marketing automation platform and needs to segment a B2B-specific audience from multiple CRMs containing customer data.

## Getting Started

This tutorial workflow relies on several Adobe Experience Platform services as part of the demonstration. If you want to follow along it is recommended to have a good understanding of the following services:

- [Experience Data Modal (XDM)](../xdm/home.md)
- [Sources](../sources/home.md)
- [Segmentation](../segmentation/home.md)
- [Destinations](../destinations/home.md)

Additionally, to make calls to a Platform API you must first complete the [authentication tutorial](https://www.adobe.com/go/platform-api-authentication-en). This tutorial helps you gather your access credentials to be used in required headers.

## Create schemas for your data

As part of the initial setup, Bodea's IT department needs to create an XDM schema to ensure data standardization and allow its use across different applications and Experience Platform services (such as Adobe Analytics or Target). Both Marketo Engage and Salesforce CRMs provide an auto-generation namespace and schema creator. This tool ensures that the schemas created describe the data in a structured reusable way. 

Follow the [B2B namespaces and schema auto-generation utility documentation](../sources/connectors/adobe-applications/marketo/marketo-namespaces.md) for a complete reference to the setup process.
<!-- https://experienceleague.adobe.com/docs/experience-platform/sources/connectors/adobe-applications/marketo/marketo-namespaces.html -->
<!-- [Experience Platform Postman scripts](https://github.com/adobe/experience-platform-postman-samples) can be downloaded from the Adobe GitHub repository for convenience. The [CDP namespaces and schemas auto-generation utility script and the CDP Environment.postman_environment.json](https://github.com/adobe/experience-platform-postman-samples/tree/master/Postman%20Collections/CDP%20Namespaces%20and%20Schemas%20Utility) are found within this Adobe GitHub repo.  -->

>[!NOTE]
> 
>If you are not using Marketo Engage or Salesforce as a data source, you can [follow these steps to create an empty schema using the API](https://experienceleague.adobe.com/docs/platform-learn/getting-started-for-data-architects-and-data-engineers/model-data-in-schemas.html%3Flang%3Dko#create-crm-schema-via-api) and configure the schema manually through the Platform UI.
<!-- Before schemas can be created using either the API or the Experience Platform UI, the system administrator must grant user permissions from Adobe’s Admin Console. See the documentation for full instructions on how to [configure permissions](https://experienceleague.adobe.com/docs/platform-learn/getting-started-for-data-architects-and-data-engineers/configure-permissions.html) -->

Within the Adobe Experience Platfrom UI, the Bodea marketer selects **Schemas** in the left rail of Experience Platform UI, followed by the **Browse** tab. The new empty schemas created by the auto-generation utility all have the prefix of `B2B` and are visible in the Platform Schema workspace.

![Schema workspace browse tab](./assets/b2b-tutorial/empty-b2b-schemas.png)

The auto-generation utility defined the data model structure for the schemas using [standard XDM B2B classes](https://experienceleague.adobe.com/docs/experience-platform/xdm/classes/b2b/business-account.html). These XDM classes capture fundamental B2B data entities such as accounts and opportunities which allow for advanced segmentation use cases. Any required customizations to the data structure can easily be made here through the UI. See the [Schema Builder UI tutorial](../xdm/tutorials/create-schema-ui.md) for more information on adding custom field groups.

The combination of data from different siloed data sources requires the use of union schemas. However as union schemas can only contain data fields from schemas of the same class, it is necessary for relationships between the multiple schemas to be created. These relationships describe how these business entities relate to one another.

The auto-generation utility sets up relationships between schemas automatically based on the most common business use cases. As a result, the Bodea team is now ready to ingest data using datasets based on their B2B schemas.

Default identity namespaces, primary keys, and relationships created for the schemas by the auto-generation utility are easily discoverable within the Schema workspace.

![default schema identity and relationship UI display](./assets/b2b-tutorial/schema-identity-relationship.png)

>[!NOTE]
> 
>If you are not using the auto-generator utility or should a new relationship need to be created, there is detailed documentation on how to [create relationships between your XDM B2B schemas](../xdm/tutorials/relationship-b2b.md).

## Ingest your data into Experience Platform

Next, the Bodea marketer uses the [Marketo Engage connector](../sources/connectors/adobe-applications/marketo/marketo.md) to ingest data into Platform for use in downstream services.

You can also ingest data by using one of the [various sources provided by Platform](../sources/home.md).

In order to create a connection between your Marketo account and Platform, you must acquire your authentication credentials which include: `munchkinId`, `clientId`, and  `clientSecret`. These required credentials are acquired within the Marketo UI and configured through the Platform UI in the sources workspace. See the [authenticate your Marketo source connector](../sources/connectors/adobe-applications/marketo/marketo-auth.md) documentation for guidance on attaining authentication credentials. 

Next follow this [guide on how to connect your Marketo Account through the Platform UI](../sources/tutorials/ui/create/adobe-applications/marketo.md).

The Marketo Engage source connector provides an auto-mapping feature to make the process of mapping all of your data fields to those of the newly created schemas much easier. 

>[!NOTE]
> 
>If you have made custom field groups in your XDM schemas you may have unconnected fields at this stage of the process. Make sure to check all the values that are populating your custom field groups.

The Bodea marketer checks that all field groups are appropriately mapped and continues the sources setup process by initializing a dataflow. By creating a dataflow to bring in Marketo data, incoming data can be used by downstream Platform services. The initial ingestion from Marketo Engage into Experience Platform is a batch ingestion, subsequent ingested data is then streamed into Profile with near real-time updates.

## Create a segment to evaluate your data

The next task is to create an audience for Bodea's new email marketing campaign based on specific attributes of related entities from the source data. Within the Platform UI, the Bodea marketer first selects [!UICONTROL**Segments**] in the left navigation, then [!UICONTROL**Create segment**].

In this example, the segment finds all the people who work in the sales department and are related to any account that has at least one open opportunity. This segment requires a link between the XDM Individual Profile class, XDM Business Account class, and XDM Business Opportunity class.

![Use case segment](./assets/b2b-tutorial/use-case-segment.png) 

For instructions on how to create segments to evaluate your data see the [Segment Builder UI guide](../segmentation/ui/segment-builder.md), or for more specific B2B use cases and information refer to the [segmentation overview for Real-time CDP B2B Edition](./segmentation/b2b.md).

<!-- https://experienceleague.adobe.com/docs/experience-platform/rtcdp/segmentation/b2b.html -->

The Segment Builder allows you to create a marketable audience from Real-time Customer Profile B2B data and view estimates of your prospective audience based on the combination of attributes, events, and existing audiences you defined. 

## Export your evaluated data

After the segment is successfully created, a summary is provided in the [!UICONTROL Details] section of the workspace. 

As no destinations are currently activated for the segment, the next step is to export your audience to a dataset where it can be accessed and acted upon.

Within the Segments workspace of the Platform UI, the Bodea marketer selects [!UICONTROL**Activate to destination**].

![Activate the segment to a destination](./assets/b2b-tutorial/activate-to-destination.png)

Follow the comprehensive steps detailing [how to activate your segment to a destination](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/smart-lists-and-static-lists/static-lists/push-an-adobe-experience-cloud-segment-to-a-marketo-static-list.html). 

Once the destination is activated you can push segments from Experience Platform to Marketo Engage in the form of a static list. See the documentation for [more information on the Marketo Destination](https://experienceleague.adobe.com/docs/experience-platform/destinations/catalog/adobe/marketo-engage.html).

## Next steps

By following this tutorial you have successfully leveraged the various Adobe Experience Platform services used by Real-time CDP B2B Edition. As a result, you have learned to ingest, segment, evaluate, and export your B2B data into precise specific audiences and engage those audiences across different channels. 
