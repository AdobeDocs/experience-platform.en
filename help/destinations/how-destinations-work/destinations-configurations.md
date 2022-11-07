---
title: Configurable and common export settings in destinations
description: Learn which export settings in destinations are configurable on a destination level and which are fixed and cannot be edited.
---
# Configurable and common settings in destinations

Some of the settings related to profile export behavior and configuration settings are common across all destinations. Other settings are particular and can be customized on a destination level by the destination developers authoring destinations using Destination SDK.

This page lists all the common and the configurable export settings for destinations.

![Diagram showing the interplay between common and configurable export settings for destinations](/help/destinations/assets/how-destinations-work/profile-export-behavior-diagram.png)

## Common export settings across destination types

Destination export behavior is consistent across destination types with regard to what triggers a destination export and what is included in the destination exports. Read more about the common behavior patterns: 



## Customizable export settings

Destination developers using Destination SDK have great flexibility to configure destinations based on downstream capabilities of the API endpoints and file reception systems. Based on the downstream capabilities, destination developers have the following configuration options available:

### Batch destinations

File name configurations
File formatting configurations


### Streaming destinations

**Aggregation behavior**. Destination developers can configure different aggregation types to determine how many profiles should be included in outgoing HTTP messages and how long Experience Platform should wait until dispatching the HTTP message. Find extensive information about the [aggregation policy configuration options](/help/destinations/destination-sdk/destination-configuration.md#aggregation) available to destination developers in the Destination SDK documentation:

## Next steps

After reading this document, you now know which export settings for destinations are common across destination types and which can be configured on an individual destination level by developers. You can read 