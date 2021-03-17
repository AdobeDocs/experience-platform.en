---
keywords: Experience Platform;data prep;data prep api;troubleshooting;API
title: Data Prep API Overview
topic: guide
description: The Data Prep API lets you 
---

# Mapping Service API guide

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM). Data Prep appears as a "Map" step in the Data Ingestion processes, including CSV Ingestion workflow. 

The Mapping Service API, also known as the Data Prep API, includes multiple endpoints outlined below. Please visit the individual endpoint guides for details and refer to the [getting started guide](getting-started.md) for important information on required headers, reading sample API calls, and more.

## Functions

Mapping-set functions allow you to transform your data between source and destination schemas. You can use the `/languages/el` endpoint to validate your expressions as well as get a list of all the available mapping-set functions.

For detailed information on how to use mapping-set functions, please read the [functions endpoint guide](./functions.md).

## Mapping set

Mapping sets can be used to define how data in a source schema maps to that of a destination schema. You can use the `/mappingSets` endpoint in the Data Prep API to programmatically retrieve, create, update, and validate mapping sets. 

For detailed information on how to use mapping sets, please read the [mapping set endpoint guide](./mapping-set.md).

## Sample data

Sample data can be used when creating a schema for a mapping set. You can use the `/samples` endpoint in the Data Prep API to programmatically retrieve, create, and update sample data.

For detailed information on how to use sample data, please read the [sample data endpoint guide](./sample-data.md).

## Schemas

Schemas can be used with Mapper to ensure the data you've ingested into Adobe Experience Platform matches what you want to ingest. You can use the `/schemas` endpoint to programmatically create, list, and get custom schemas for use with Mapper in Platform. 

For detailed information on how to use schemas within the Mapping Service API, please read the [schemas endpoint guide](./schemas.md).

## Next steps

To begin making calls using the Mapping Service API, please read the [getting started guide](./getting-started.md) then select one of the endpoint guide to learn how to use the specific endpoints. 