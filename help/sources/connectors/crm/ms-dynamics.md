---
keywords: Experience Platform;home;popular topics;Microsoft Dynamics;microsoft dynamics;dynamics;Dynamics
solution: Experience Platform
title: Microsoft Dynamics Source Connector Overview
description: Learn how to connect Microsoft Dynamics to Adobe Experience Platform using APIs or the user interface.
exl-id: 6ca162ce-2016-4270-b741-301cf4230233
---
# [!DNL Microsoft Dynamics] source

[!DNL Microsoft Dynamics] is a suite of business applications that you can use to manage your operations more effectively. Whether you're overseeing customer relationships, finances, or supply chains, [!DNL Microsoft Dynamics] gives you the tools to streamline your workflows and make smarter decisions. The platform is built to support both enterprise resource planning and customer relationship management (CRM), allowing you to unify your business processes in one integrated system.

You can use the [!DNL Microsoft Dynamics] source to ingest data from your [!DNL Microsoft Dynamics] account to Adobe Experience Platform.

## IP address allowlist 

You must add region-specific IP addresses to your allowlist prior to connecting your sources to Experience Platform. Read the guide on [allowlisting IP addresses to connect to Experience Platform](../../ip-address-allow-list.md) for more information.

## Field mapping from [!DNL Microsoft Dynamics] to XDM

To establish a source connection between [!DNL Microsoft Dynamics] and Experience Platform, the [!DNL Microsoft Dynamics] source data fields must be mapped to their appropriate target XDM fields prior to being ingested into Experience Platform.

See the following for detailed information on the field mapping rules between [!DNL Microsoft Dynamics] datasets and Experience Platform:

- [Contacts](../adobe-applications/mapping/dynamics.md#contacts)
- [Leads](../adobe-applications/mapping/dynamics.md#leads)
- [Accounts](../adobe-applications/mapping/dynamics.md#accounts)
- [Opportunities](../adobe-applications/mapping/dynamics.md#opportunities)
- [Opportunity contact roles](../adobe-applications/mapping/dynamics.md#opportunity-contact-roles)
- [Campaigns](../adobe-applications/mapping/dynamics.md#campaigns)
- [Marketing ist](../adobe-applications/mapping/dynamics.md#marketing-list)
- [Marketing list members](../adobe-applications/mapping/dynamics.md#marketing-list-members)

The documentation below provides information on how to connect [!DNL Microsoft Dynamics] to [!DNL Experience Platform] using APIs or the user interface:

## Connect [!DNL Microsoft Dynamics] to [!DNL Experience Platform] using APIs

- [Create a Microsoft Dynamics base connection using the Flow Service API](../../tutorials/api/create/crm/ms-dynamics.md)
- [Explore data tables using the Flow Service API](../../tutorials/api/explore/tabular.md)
- [Create a dataflow for a CRM source using the Flow Service API](../../tutorials/api/collect/crm.md)

## Connect [!DNL Microsoft Dynamics] to [!DNL Experience Platform] using the UI

- [Create a Microsoft Dynamics source connection in the UI](../../tutorials/ui/create/crm/dynamics.md)
- [Create a dataflow for a CRM connection in the UI](../../tutorials/ui/dataflow/crm.md)
