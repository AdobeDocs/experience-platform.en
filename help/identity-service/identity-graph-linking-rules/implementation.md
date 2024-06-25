---
title: 
description:
hide: true
hidefromtoc: true
badge: Beta
---
# Implementation guide

Read this document for a step-by-step implementation guide... 

Step-by-step outline:

1. Set permissions
2. Create the necessary identity namespaces
3. Use the graph simulation tool to familiarize yourself with the identity optimization algorithm
4. Use the identity settings tool to designate your unique namespaces and configure priority rankings for your namespaces
5. Create an Experience Data Model (XDM) schema
6. Create a dataset
7. Ingest your data to Experience Platform


* Set permissions
  * manage-identity-settings
  * view-identity-dashboard
  * view-identity-simulation
* Create namespaces that you need in your sandbox
  * For simulation and settings
* Learn about the algorithm through simulation
  * Expectation -> define a namespace to be unique and each profile should contain one identity with that namespace. Otherwise, the system cannot detect a person entity
* Configure your settings in the identity settings UI
* Ingest data
  * Authenticated events must always contain a person identifier
  * Configure namespace in schema:
    * You can only mark a field as namespace stores attributes/events, or links disparate datasets
  * Create schema and dataset
  * Once ingested, XDM raw data payload does not change. Primary = true/false will still be visible in the UI, but will be ignored.
* Use feedback tool for any feedback

## Pre-implementation prerequisites

Before you can get started, you must first ensure that authenticated events in your system always contain a person identifier.

## Set permissions

The first step in the implementation process for Identity Service is to ensure that your Experience Platform account is added to a role that is provisioned with the necessary permissions. Your administrator can configure permissions for your account by navigating to the Permissions UI in Adobe Experience Cloud. From there, your account must be added to a role with the following permissions:

* manage-identity-settings
* view-identity-dashboard
* view-identity-simulation

For more information on permissions, read the [permissions guide](../../access-control/abac/ui/permissions.md).

## Create your identity namespaces

Once your permissions are configured and you have acquired access to Identity Service, you must then create the appropriate namespaces for  your data. For steps on how to create a custom namespace, read the guide on [creating a custom namespace in the UI](../features/namespaces.md#create-custom-namespaces).

## Use graph simulation tool

Next, navigate to the [graph simulation tool](./graph-simulation.md) in the Identity Service UI workspace. You can use the graph simulation tool to simulate identity graphs, built with a variety of different unique namespace and namespace priority configurations. 

By creating different configurations, you can use the graph simulation tool to learn and better understand how the identity optimization algorithm and certain configurations can affect how your graph behaves.

## Configure identity settings

Once you have a better idea of how you want your graph to behave, navigate to the [identity settings  tool](./identity-settings-ui.md) in the Identity Service UI workspace. 

Use the identity settings tool to designate your unique namespaces and configure your namespaces by order of priority. Once you are finished with applying your settings, you must wait at least six hours before you can proceed to ingest data, as it takes at least six hours for new settings to be reflected in Identity Service.

## Create an XDM schema

With your unique namespaces and namespace priorities established, you can now proceed to required set up in order to ingest your data. First, you must create an XDM schema. Depending on your data, you may need to create a schema for both XDM Individual Profile and XDM ExperienceEvent.

To ingest data into Real-Time Customer Profile, you must ensure that your schema contains at least one field that has been designated as the primary identity. By setting a primary identity, you can enable a given schema for Profile ingestion.

For instructions on how to create a schema, read the guide on [creating an XDM schema in the UI](../../xdm/tutorials/create-schema-ui.md).

## Create a dataset

Next, create a dataset to provide a structure for the data that you are going to ingest. A dataset is a storage and management construct for a collection of data, typically a table, that contains a schema (columns) and fields (rows). Datasets work in tandem with schemas, and to ingest data to Real-Time Customer Profile, your dataset must be enabled for Profile ingestion. In order for your dataset to be enabled for Profile, it must reference a schema that is enabled for Profile ingestion.

For instructions on how to create a dataset, read the [dataset UI guide](../../catalog/datasets/user-guide.md).

## Ingest your data

