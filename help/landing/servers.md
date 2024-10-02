---
solution: Experience Platform
title: Servers on Adobe Experience Platform
description: Learn about the different server types on Adobe Experience Platform.
---

# Servers on Adobe Experience Platform

some sort of introduction blurb

## Server types

On Adobe Experience Platform, data is serviced by two different types of servers - hub servers and edge servers.

### Hub server

A hub server is a main data center that is centrally located. These larger data centers contain all the data you've ingested into Platform through methods including streaming ingestion, batch ingestion, and sources.

Hub servers allow you to send and receive more robust and complete data to your downstream services. As a result, Platform automatically uses hub servers when running services such as batch and streaming segmentation.

### Edge server

An edge server is a secondary data center that is physically located closer to different geographic locations. These data centers contain all the data that you've ingested through Data Collection as well as hub data that becomes eventually consistent.

Edge servers allow you to more quickly send and receive data to your customers due to their closer proximity to the end user.

