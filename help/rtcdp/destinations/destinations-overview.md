---
title: Destinations Overview
seo-title: Destinations Overview
description: Use Destinations in the Adobe Real-time Customer Data Platform to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.
seo-description: Use Destinations in the Adobe Real-time Customer Data Platform to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.
---

# Destinations Overview

Use **Destinations** in the Adobe Real-time Customer Data Platform to activate your known and unknown data for cross-channel marketing campaigns, email campaigns, targeted advertising, and many other use cases.

## Destinations and Sources

One of the core functionalities of Real-time CDP is ingesting data from your first-party data and activating your data for your business needs. Use **[!UICONTROL Sources]** to ingest data into Real-time CDP and **[!UICONTROL Destinations]** to export data from Real-time CDP. 

## Destinations steps

* Use **[!UICONTROL Destinations]** to [activate](/help/rtcdp/destinations/activate-destinations.md) and send profiles or segments to marketing automation platforms, digital advertising platforms, and more.
* Choose from a [self-service catalog](/help/rtcdp/destinations/destinations-catalog.md) of all the destinations available in Real-time CDP.
* Schedule data exports to your preferred destinations at regular times.

## Controls

The controls in the [Destinations workspace](/help/rtcdp/destinations/destinations-workspace.md) allow you to:

* Browse the catalog of destination platforms where you can activate your data;
* Create, edit, activate, and disable data flows to the destinations in the catalog;
* Create an account in a storage location or link Real-time CDP to the account in the destination platform;
* Select which segments should be activated to destinations;
* Select which [Experience Data Model (XDM) fields](https://www.adobe.io/apis/experienceplatform/home/xdm/xdmservices.html#!api-specification/markdown/narrative/technical_overview/schema_registry/xdm_system/xdm_system_in_experience_platform.md) to export when activating segments to email marketing destinations.

## Destination types and categories

In Adobe Real-time CDP, there are two types of destinations, Profile Export destinations and Segment Export destinations.

![Representation of Profile Export and Segment Export destinations](/help/rtcdp/destinations/assets/segment-and-profile-export.png)

### Profile export destinations

Profile export destinations generate a file containing profiles and/or attributes. These destinations use raw data, often with email address as the primary key.

### Segment export destinations

Segment export destinations send the profiles and segments they qualified for. These destinations use segment ID or user IDs.

### Destination categories

The destinations in the [Destinations catalog](/help/rtcdp/destinations/destinations-catalog.md) are grouped by destination category (Advertising or Email marketing). For more information on each of them, see the [Destinations catalog](/help/rtcdp/destinations/destinations-catalog.md).