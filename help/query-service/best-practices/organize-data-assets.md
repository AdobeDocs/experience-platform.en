---
title: Best Practices for Data Asset Organization in Query Service
description: This document outlines a logical means of organizing data for ease of use with Query Service.
---
# Organize data assets in Query Service

This document provides guidance on best practices for organizing data assets for use with Adobe Experience Platform Query Service. It covers how to structure your data as well as information on how to access, update and delete this information.

## Getting started

Before continuing with this document, it is recommended to have a good understanding of [Query Service](../home.md) features and have completed the [authentication tutorial](../../landing/api-authentication.md).

## Organizing data in Query Service

Use SQL to create a container for the logical organization of data.

**example**

## Associating data assets to a schema

Once a schema has been created to act as a container for the data assets,...

## Accessing data assets from the data container

By appropriately qualifying the database name, any [!DNL PostgreSQL] client one can connect to any of the data organization they have created.

## Updating/Removing data assets from a data container

Individual assets can be removed from the organization container by referencing the appropriate database and schema name.

### Removing data assets

The DROP TABLE syntax only physically removes the data asset from the data lake if and only a single reference remains in all logical container.

### Removing logical data asset container

The database and schema acting as the logical data asset containers can be removed using standard sql functions.
