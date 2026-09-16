---
keywords: Experience Platform;data prep;data prep api;troubleshooting;API
title: Data Prep API Overview
description: The Data Prep API lets you programatically create mapping sets and functions, allowing you to transform your data between source and destination schemas.
exl-id: 740944ae-93ba-4099-a65e-18d6b384c307
TQID: https://experienceleague.adobe.com/JpzLOlv1jQi5do37wo7bnU9IHBGJL-8c1zHdtxFech4
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
role_v2:
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
topic_v2:
  - id: c1579802-ddd4-4214-8a91-97b2066abe11
    internal-label: Troubleshooting
---
# Mapping Service API guide

Data Prep allows data engineers to map, transform, and validate data to and from Experience Data Model (XDM). Data Prep appears as a "Map" step in the Data Ingestion processes, including CSV Ingestion workflow. 

The Mapping Service API, also known as the Data Prep API, includes multiple endpoints outlined below. Please visit the individual endpoint guides for details and refer to the [getting started guide](./getting-started.md) for important information on required headers, reading sample API calls, and more.

## Functions

Mapping-set functions allow you to transform your data between source and destination schemas. You can use the `/languages/el` endpoint to validate your expressions as well as get a list of all the available mapping-set functions and operations.

For detailed information on how to use mapping-set functions, please read the [functions endpoint guide](./functions.md).

## Mapping set

Mapping sets can be used to define how data in a source schema maps to that of a destination schema. You can use the `/mappingSets` endpoint in the Data Prep API to programmatically retrieve, create, update, and validate mapping sets. 

For detailed information on how to use mapping sets, please read the [mapping set endpoint guide](./mapping-set.md).

## Next steps

To begin making calls using the Mapping Service API, please read the [getting started guide](./getting-started.md) then select one of the endpoint guide to learn how to use the specific endpoints.
