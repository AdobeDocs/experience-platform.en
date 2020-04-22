---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Data usage labels overview
topic: labels
---

# Data usage labels overview

Data Usage Labeling and Enforcement (DULE) is the core mechanism of Adobe Experience Platform Data Governance. DULE features enable you to apply data usage labels to datasets and fields, categorizing each according to related data usage policies.

This document provides an overview of data usage labels (also known as DULE labels) in Experience Platform. Before reading this guide, please see the [Data Governance overview](../home.md) for a more robust introduction to the DULE framework.

## Understanding data usage labels

Data usage labels allow you to categorize datasets and fields according to usage policies that apply to that data. Labels can be applied at any time, providing flexibility in how you choose to govern data. Best practices encourage labeling data as soon as it is ingested into Experience Platform, or as soon as data becomes available for use in Platform.

Data usage labels that are applied at the dataset level are propagated to all fields within the dataset. Labels can also be applied directly to individual fields (column headers) in a dataset, without propagation.

For more information on available data usage labels in Experience Platform and the usage policies they represent, see the guide on [supported data usage labels](reference.md).

## Next steps

Now that you have been introduced data usage labels, you can continue to the read the [user guide](user-guide.md) to learn how to manage labels in the Experience Platform UI. For steps on how to manage labels using APIs, see the appropriate section in the [Catalog Service developer guide](../../catalog/api/labels.md).