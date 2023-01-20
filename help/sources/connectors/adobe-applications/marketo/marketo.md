---
keywords: Experience Platform;home;popular topics;Marketo Engage;marketo engage;marketo
solution: Experience Platform
title: Marketo Engage connector
description: This document provides an overview of the Marketo Engage source connector, including information about its authentication, mapping, and data latency.
exl-id: 063ec5d9-d643-4141-bf6d-878273f22b33
---
# [!DNL Marketo Engage] connector

Adobe Experience Platform allows data to be ingested from external sources while providing you with the ability to structure, label, and enhance incoming data using Platform services. You can ingest data from a variety of sources such as Adobe applications, cloud-based storage, databases, and many others.

[[!DNL Marketo Engage]](https://www.marketo.com/software/) (hereinafter referred to as "[!DNL Marketo]") is a complete solution for lead management and B2B marketers looking to transform customer experiences by engaging across every stage of complex buying journeys.

With the [!DNL Marketo] source connector, you can bring B2B data from [!DNL Marketo] to Platform and keep this data up to date using Platform-connected applications.

>[!IMPORTANT]
>
>You must have access to [Adobe Real-Time Customer Data Platform B2B Edition](../../../../rtcdp/b2b-overview.md) to use all Marketo datasets for segmentation with the [Real-Time Customer Profile](../../../../profile/home.md). Without Real-Time CDP B2B Edition, you can still use the Marketo source to bring data from the people and activities datasets to Real-Time Customer Profile for segmentation.

This document provides an overview of the [!DNL Marketo] source connector, including information about how to authenticate the connector, how to map [!DNL Marketo] fields to Experience Data Model (XDM), and the connector's data latency.

## Authenticate your [!DNL Marketo] connector

In order to connect [!DNL Marketo] to Platform, you must first retrieve values for your `munchkinId`, `clientId`, and `clientSecret`.

See the steps outlined in the [Authenticate your Marketo source connector](./marketo-auth.md) document to retrieve your credentials.

## Set up Adobe Organization Mapping

Before you can establish mapping sets for [!DNL Marketo], you must first set up Adobe Organization Mapping. For detailed steps on how to complete this, see the guide on [setting up Adobe Organization Mapping for [!DNL Marketo]](https://experienceleague.adobe.com/docs/marketo/using/product-docs/core-marketo-concepts/miscellaneous/set-up-adobe-organization-mapping.html).

## Set up B2B namespaces and schema auto-generation utility

Next, use the B2B namespace and schema auto-generation utility to set up your Platform developer console and Postman environment. This allows you to auto-populate your B2B namespaces and schemas. For detailed instructions, see the guide on [setting up your B2B namespaces and schema auto-generation utility](./marketo-namespaces.md)

## Experience Data Model (XDM)

XDM is a publicly documented specification that provides common structures and definitions that allow you to ingest data from third-party sources for use in downstream Platform services.

Adhering to XDM standards allows data to be uniformly incorporated into the Platform ecosystem, making it easier to deliver data and gather information.

To learn more about XDM and its role in Platform, please see the [XDM System overview](../../../../xdm/home.md).

## Field mapping from [!DNL Marketo] to XDM

To establish a source connection between [!DNL Marketo] and Platform, the Marketo source data fields must be mapped to their appropriate target XDM fields prior to being ingested into Platform.

See the following for detailed information on the field mapping rules between [!DNL Marketo] datasets and Platform:

* [Activities](../mapping/marketo.md#activities)
* [Programs](../mapping/marketo.md#programs)
* [Program memberships](../mapping/marketo.md#program-memberships)
* [Companies](../mapping/marketo.md#companies)
* [Static lists](../mapping/marketo.md#static-lists)
* [Static list memberships](../mapping/marketo.md#static-list-memberships)
* [Named Accounts](../mapping/marketo.md#named-accounts)
* [Opportunities](../mapping/marketo.md#opportunities)
* [Opportunity contact roles](../mapping/marketo.md#opportunity-contact-roles)
* [Persons](../mapping/marketo.md#persons)

## Expected latency of [!DNL Marketo] data on Platform

The following table outlines the expected latency for bringing [!DNL Marketo] data into Platform, based on the nature of ingestion and the desired destination:

| Destination | Expected Latency |
| ----------- | ---------------- |
| [!DNL Real-Time Customer Profile] | < 1 minute |
| Data Lake | < 60 minutes |

## Next steps and additional resources

The following documentation provides further information on creating a [!DNL Marketo] source connection:

* For information on how to connect your [!DNL Marketo] data to Platform, see the tutorial on [creating a Marketo source connector in the UI](../../../tutorials/ui/create/adobe-applications/marketo.md).
* For information on the underlying setup for the B2B namespaces and schemas used with [!DNL Marketo], see the documentation for [B2B namespaces and schemas](./marketo-namespaces.md).
* For information on finding your [!DNL Marketo] munchkin ID and generating your credentials, see the [[!DNL Marketo] authentication guide](./marketo-auth.md).
* For information on the specific mapping rules that apply to [!DNL Marketo] datasets, see the documentation on [[!DNL Marketo] field mappings](../mapping/marketo.md).
* For general information on [!DNL Real-Time Customer Data Platform B2B Edition] and its features, see the documentation on [[!DNL Real-Time Customer Data Platform B2B Edition]](../../../../rtcdp/b2b-overview.md).
