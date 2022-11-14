---
title: Configurable and common export settings in destinations
description: Learn which export settings in destinations are configurable on a destination level and which are fixed and cannot be edited.
---

# Configurable and common export settings in destinations

When thinking about the export behavior to Experience Platform destinations, you need to consider three separate levels on which configurations act.

* On a first level, some of the settings related to profile export behavior and configuration settings are common across all destinations belonging to a destination type. These cannot be edited by destination developers or Real-time CDP users.
* On a second level, other settings can be customized on a destination level by the destination developer when authoring destinations using Destination SDK. 
* On a third level, there are the configuration settings that Real-time CDP users can set in the activation workflows.

![Diagram showing the interplay between common and configurable export settings for destinations](/help/destinations/assets/how-destinations-work/profile-export-behavior-diagram.png)

This page lists all the common and the configurable export settings for destinations.

## Common export settings across destination types

Destination export behavior is consistent across destination types with regard to what triggers a destination export and what is included in the destination exports. Destination exports are triggered by notifications that the destinations service receives from the Profile service upstream. What is included in the destination exports varies slightly between destination types. Read more about the [common export behavior patterns](/help/destinations/how-destinations-work/profile-export-behavior.md). These settings cannot be edited by destination developers or users.

## Customizable export settings by destination developers

Destination developers using Destination SDK have great flexibility to configure destinations based on the downstream capabilities of the API endpoints and file reception systems. Based on the downstream capabilities, destination developers have the following configuration options available when configuring a destination using Destination SDK:

* Determine which attributes and identities can be exported out of Experience Platform to the destination.
* Set an aggregation policy, which determines how long Experience Platform should wait when aggregating HTTP messages to be sent to API integrations. Destination developers can configure different aggregation types to determine how many profiles should be included in outgoing HTTP messages and how long Experience Platform should wait until dispatching the HTTP message. Find extensive information about the [aggregation policy configuration options](/help/destinations/destination-sdk/destination-configuration.md#aggregation) available to destination developers in the Destination SDK documentation.
* Determine if HTTP message exports should include profiles that qualify for segments, that are removed from segments, or both.
* Determine which file name and file formatting configurations should be available to users when exporting files.

## Settings on a dataflow level customizable by users 

On top of the non-editable settings that depend on destination type and the settings configured by the destination developer, there are certain export settings that users can configure in the activation workflow. These settings relate to the export schedule for a certain dataflow, the attributes and identity fields that should be exported in a dataflow, or the file formatting options for exported files.

The settings that are available to users when connecting to a destination depend on how the destination was configured by the destination developer and which settings they made available to users.

For example, for streaming destinations, a destination developer may configure which identities their destination accepts and only those identities will be displayed to the user in the activation workflow. 

Similarly, for file-based destinations, the destination developer may determine which filename append options they want to make available for their destination, or which file formatting options they want to make available, and the user will be able to select from these options only.

Read more about the different options and steps available in the activation workflow:

* [Activate audience data to batch profile export destinations](/help/destinations/ui/activate-batch-profile-destinations.md)
* [Activate audience data to enterprise destinations](/help/destinations/ui/activate-streaming-profile-destinations.md)
* [Activate audience data to streaming segment export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md)
* [Export files on-demand to batch destinations](/help/destinations/ui/export-file-now.md)
* [(Beta) Export datasets to cloud storage destinations](/help/destinations/ui/export-datasets.md)

## Next steps

After reading this document, you now know which export settings for destinations are common across destination types, which can be configured on an individual destination level by developers, and which settings are available to users in the activation workflow. For destination developers, you can get started with [Destination SDK](/help/destinations/destination-sdk/overview.md). For users looking to activate data, you can check out all the available destinations in the [catalog](/help/destinations/catalog/overview.md).