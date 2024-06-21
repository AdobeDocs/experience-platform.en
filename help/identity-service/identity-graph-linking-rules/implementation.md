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

## Set permissions

Before you can access and configure your identity data, you must first ensure that your Experience Platform account is added to a role that is provisioned with the following permissions:

* manage-identity-settings
* view-identity-dashboard
* view-identity-simulation

For more information on permissions, read the [permissions guide](../../access-control/abac/ui/permissions.md).

## Create namespaces that you need in your sandbox

Next, once your permissions are configured you must then create your custom namespaces for your data in your sandbox. For steps on how to create a custom namespace, read the guide to [creating a custom namespace](../features/namespaces.md#create-custom-namespaces).

## Use the graph simulation tool

With your namespaces established, you can now proceed and use the [graph simulation tool](./graph-simulation.md) to learn about the identity optimization algorithm and how certain configurations can affect your identity graphs.

## Configure identity settings

## Ingest your data