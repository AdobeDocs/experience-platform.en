---
title: Identity graph linking rules configuration guide
description: Learn the recommended steps to follow when implementing your data with identity graph linking rules configurations.
badge: Beta
---
# Identity graph linking rules configuration guide

Read this document for a step-by-step by guide that you can follow when implementing your data with Adobe Experience Platform Identity Service.

Step-by-step outline:

1. [Create the necessary identity namespaces](#namespace)
2. [Use the graph simulation tool to familiarize yourself with the identity optimization algorithm](#graph-simulation)
3. [Use the identity settings tool to designate your unique namespaces and configure priority rankings for your namespaces](#identity-settings)
4. [Create an Experience Data Model (XDM) schema](#schema)
5. [Create a dataset](#dataset)
6. [Ingest your data to Experience Platform](#ingest)

## Pre-implementation prerequisites

Before you can get started, you must first ensure that authenticated events in your system always contain a person identifier.

## Set permissions {#set-permissions}

The first step in the implementation process for Identity Service is to ensure that your Experience Platform account is added to a role that is provisioned with the necessary permissions. Your administrator can configure permissions for your account by navigating to the Permissions UI in Adobe Experience Cloud. From there, your account must be added to a role with the following permissions:

* [!UICONTROL View Identity Settings]: apply this permission to be able to view unique namespaces and namespace priority in the identity namespace browse page.
* [!UICONTROL Edit Identity Settings]: apply this permission to be able to edit and save your identity settings.

For more information on permissions, read the [permissions guide](../../access-control/abac/ui/permissions.md).

## Create your identity namespaces {#namespace}

If your data requires it, you must first create the appropriate namespaces for your organization. For steps on how to create a custom namespace, read the guide on [creating a custom namespace in the UI](../features/namespaces.md#create-custom-namespaces).

## Use graph simulation tool {#graph-simulation}

Next, navigate to the [graph simulation tool](./graph-simulation.md) in the Identity Service UI workspace. You can use the graph simulation tool to simulate identity graphs, built with a variety of different unique namespace and namespace priority configurations. 

By creating different configurations, you can use the graph simulation tool to learn and better understand how the identity optimization algorithm and certain configurations can affect how your graph behaves.

## Configure identity settings {#identity-settings}

Once you have a better idea of how you want your graph to behave, navigate to the [identity settings  tool](./identity-settings-ui.md) in the Identity Service UI workspace. 

Use the identity settings tool to designate your unique namespaces and configure your namespaces by order of priority. Once you are finished with applying your settings, you must wait at least six hours before you can proceed to ingest data, as it takes at least six hours for new settings to be reflected in Identity Service.

## Create an XDM schema {#schema}

With your unique namespaces and namespace priorities established, you can now proceed to required set up in order to ingest your data. First, you must create an XDM schema. Depending on your data, you may need to create a schema for both XDM Individual Profile and XDM ExperienceEvent.

To ingest data into Real-Time Customer Profile, you must ensure that your schema contains at least one field that has been designated as the primary identity. By setting a primary identity, you can enable a given schema for Profile ingestion.

For instructions on how to create a schema, read the guide on [creating an XDM schema in the UI](../../xdm/tutorials/create-schema-ui.md).

## Create a dataset {#dataset}

Next, create a dataset to provide a structure for the data that you are going to ingest. A dataset is a storage and management construct for a collection of data, typically a table, that contains a schema (columns) and fields (rows). Datasets work in tandem with schemas, and to ingest data to Real-Time Customer Profile, your dataset must be enabled for Profile ingestion. In order for your dataset to be enabled for Profile, it must reference a schema that is enabled for Profile ingestion.

For instructions on how to create a dataset, read the [dataset UI guide](../../catalog/datasets/user-guide.md).

## Ingest your data {#ingest}

>[!WARNING]
>
>* During your pre-implementation process, you must ensure that the authenticated events that your system will send to Experience Platform always contain a person identifier, such as CRM ID.
>* During implementation, you must ensure that the unique namespace with the highest priority is always present in every profile.

By this point, you should have the following:

* The necessary permissions to access Identity Service features.
* Namespaces for your data.
* Designated unique namespaces and configured priorities for your namespaces.
* At least one XDM schema. (Depending on your data and specific use case, you may need to create both profile and experience event schemas.)
* A dataset that is based off of your schema.

Once you have all of the items listed above, then you can begin ingesting your data to Experience Platform. You can perform data ingestion through several different ways. You can use the following services to bring your data to Experience Platform:

* [Batch and streaming ingestion](../../ingestion/home.md) 
* [Data collection in Experience Platform](../../collection/home.md)
* [Experience Platform sources](../../sources/home.md)

>[!TIP]
>
>Once your data is ingested, the XDM raw data payload does not change. You may still see your primary identity configurations iin the UI. However, these configurations will be overridden by identity settings.

For any feedback, use the **[!UICONTROL Beta feedback]** option in the Identity Service UI workspace.