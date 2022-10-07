---
keywords: Experience Platform;home;popular topics;sources;connectors;source connectors;sources sdk;sdk;SDK
title: Configuration options in Self-Serve Sources (Batch SDK)
topic-legacy: overview
description: This document provides an overview of the configurations you need to prepare in order to use Self-Serve Sources (Batch SDK).
exl-id: a41b3b80-599a-47ed-a391-419721be5aa2
---
# Configuration options in Self-Serve Sources (Batch SDK)

This document provides an overview of the configurations you need to prepare in order to use Self-Serve Sources (Batch SDK).

## Connection specification

Connection specifications return a source's connector properties. They include authentication specifications related to creating the base and source connections and a fixed connection specification ID that is assigned to a particular source. Connection specifications are tenant and organization agnostic. A typical connection specification contains basic information on a given source, as well as three distinct sections: `authSpec`, `sourceSpec`, and `exploreSpec`.

| Specs | Description |
| --- | --- |
| `authSpec` | The `authSpec` array contains information on the authentication parameters required to connect a source to Platform. Any given source can support multiple different types of authentication. |
| `sourceSpec` | The `sourceSpec` array contains general information pertaining to a source, including information on attributes required to present the source in the UI, documentation link, and parameters regarding pagination, header, body, and scheduling. Furthermore, `sourceSpec` describes the schema of the parameters required to create a source connection from a base connection, and is necessary in order to create a source connection. |
| `exploreSpec` | The `exploreSpec` array defines the parameters required for exploring and inspecting objects contained in your source. The `exploreSpec` also defines the response format returned when objects are explored and inspected. |

{style="table-layout:auto"}

## Populate connection specification values

A connection specification can be divided into three distinct parts: the authentication specifications, the source specifications, and the explore specifications. 

See the following documents for instructions on how to populate the values of each part of a connection specification:

* [Configure your authentication specification](./authspec.md)
* [Configure your source specification](./sourcespec.md)
* [Configure your explore specification](./explorespec.md)
