---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Data Governance and Privacy tutorials
topic-legacy: tutorial
type: Tutorial
description: This document provides an overview of the different available tutorials related to Adobe Experience Platform Data Governance and Adobe Experience Platform Privacy Service.
exl-id: c3cef447-b343-445b-a3ed-54f873f6dfb9
---
# [!DNL Data Governance] and [!DNL Privacy] Tutorials

Adobe Experience Platform Data Governance enables you to apply data usage labels to datasets and fields, categorizing each according to related data usage policies, and evaluate for policy violations when certain actions are performed on those datasets and/or fields. Before getting started with the tutorials listed in this document, please see the [[!DNL Data Governance] overview](../data-governance/home.md) for a more robust introduction to the framework.

Adobe Experience Platform [!DNL Privacy Service] provides a RESTful API and user interface that allow you to coordinate privacy and compliance requests across various solutions. To learn more, please begin by reading the [Privacy Service overview](../privacy-service/home.md).

## Add data usage labels

Data usage labels allow you to categorize datasets and fields according to usage policies that apply to that data. Labels can be applied at any time, providing flexibility in how you choose to govern data. Best practices encourage labeling data as soon as it is ingested into [!DNL Experience Platform], or as soon as data becomes available for use in [!DNL Platform]. Data usage labels that are applied at the dataset level are propagated to all fields within the dataset. Labels can also be applied directly to individual fields (column headers) in a dataset, without propagation. To learn how to apply data usage labels to your data, please visit the [data usage labels overview](../data-governance/labels/overview.md).

## Create data usage policies

The [!DNL Policy Service] API allows you to create and manage data usage policies to determine what marketing actions can be taken against data that contains certain usage labels. To get started, read the [data usage policies overview](../data-governance/policies/overview.md).

## Enforce data usage policies

Once you have added usage labels for your data, and have created policies for marketing actions against those labels, you can use the [!DNL Policy Service API] to evaluate whether a marketing action constitutes a policy violation when performed on a dataset or an arbitrary group of usage labels. You can then set up your own internal protocols to handle policy violations based on the API response. To get started, visit the [policy enforcement overview](../data-governance/enforcement/overview.md).

## Enforce data usage compliance for an audience segment

Segments that are enabled for use in [!DNL Real-time Customer Profile] contain a merge policy ID within their segment definition. This merge policy contains information about which datasets are to be included in the segment, which in turn contain any applicable data usage labels. For specific steps covering enforcing data usage compliance for an audience segment, please follow the [data usage compliance enforcement tutorial for segments](../segmentation/tutorials/governance.md).

## Get started with [!DNL Privacy Service]

[!DNL Privacy Service] provides a RESTful API and user interface that allow you to manage the personal data of your data subjects (customers) across Adobe Experience Cloud applications. [!DNL Privacy Service] also provides a central audit and logging mechanism that allows you to access the status and results of jobs involving [!DNL Experience Cloud] applications. For instructions showing how to create and monitor [!DNL Privacy Service] jobs, follow the steps provided in the [Privacy Service developer guide](../privacy-service/api/getting-started.md) or the [Privacy Service user guide](../privacy-service/ui/overview.md).
