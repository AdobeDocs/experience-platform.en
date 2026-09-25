---
title: Demandbase
description: Learn about the Demandbase source connector and how it ingests key B2B account data into Adobe Experience Platform for use in Real-Time Customer Profile.
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
---
# [!DNL Demandbase]

The [!DNL Demandbase] source connector empowers you to connect your [!DNL Demandbase] account with Adobe Experience Platform, enabling automated and scalable ingestion of key B2B account data, such as firmographic, technographic, and intent attributes, directly into your [!DNL Real-Time Customer Profile].

Use this source connector to configure secure authentication, select the [!DNL Demandbase] entities you need, and map them to standardized Experience Data Model (XDM) schemas, such as the B2B Account class. Flexible scheduling options let you configure both one-time backfills and recurring, incremental syncs so your account data stays current.

Read this document for prerequisite information on the [!DNL Demandbase] source.

## Prerequisites {#prerequisites}

Read the following sections for prerequisite steps before connecting [!DNL Demandbase] to Experience Platform.

### Configure permissions on Experience Platform

You must have both **[!UICONTROL View Sources]** and **[!UICONTROL Manage Sources]** permissions enabled for your account in order to connect your [!DNL Demandbase] account to Experience Platform. Contact your product administrator to obtain the necessary permissions. For more information, read the [access control UI guide](../../../access-control/abac/ui/permissions.md).

### Gather required credentials

Before you begin, obtain the following from your [!DNL Demandbase] administrator:

| Credential | Description |
| --- | --- |
| Client ID | The [!DNL Demandbase] client ID that is required to authenticate your account to Experience Platform. |
| Client secret | The [!DNL Demandbase] client secret that is required to authenticate your account to Experience Platform. |

These credentials are provided under **[!UICONTROL Account authentication]** when you create a new source connection.

## [!DNL Demandbase] and the B2B Account schema

[!DNL Demandbase] account data maps to the standard B2B Account XDM schema. The `accountKey.sourceKey` identity field must uniquely represent each [!DNL Demandbase] account. Rather than mapping this field to a single raw source field, use [Data Prep's calculated field editor](../../../data-prep/ui/mapping.md#calculated-fields) to build a composite key that concatenates the source account ID, the source type, and your [!DNL Demandbase] instance ID.

For steps on how to build this calculated field during mapping, read the section on [mapping fields](../../tutorials/ui/create/data-partners/demandbase-b2b.md#mapping) in the connection tutorial.

## Connect your [!DNL Demandbase] account to Experience Platform in the UI

Once you have completed your prerequisite setup, read the tutorial on [connecting your [!DNL Demandbase] account to Experience Platform](../../tutorials/ui/create/data-partners/demandbase-b2b.md) to start your integration.
