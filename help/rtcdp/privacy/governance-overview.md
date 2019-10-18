---
title: Governance overview
seo-title: Governance in Real-time Customer Data Platform
description: Governance allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. 
seo-description: Governance allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. 
---

# Governance overview

Real-time Customer Data Platform brings data from multiple enterprise systems together, allowing marketers to better identify, understand, and engage their customers. This data may be subject to usage restrictions defined by your organization or by legal regulations. It is therefore important to ensure that Real-time CDP is compliant with usage policies when handling your data.

Adobe Experience Platform Data Governance allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. It plays a key role within Real-time CDP, allowing you to define usage policies, categorize your data based on those policies, and check for policy violations when performing certain marketing actions.

This document provides a high-level overview of Governance in Real-time CDP, covering the following topics:

* [Data governance roles](#data-governance-roles)
* [DULE framework](#dule)
* [Data usage labels](#data-usage-labels)
* [Marketing actions](#marketing-actions)
* [Data usage policies](#data-usage-policies)

## Data governance roles

As a concept, data governance is neither automatic, nor does it occur in a vacuum.

## DULE framework

Governance in Real-time CDP uses Data Usage Labeling and Enforcement (DULE) to simplify and streamline the process of categorizing data and creating data usage policies. Once data labels have been applied and data usage policies are in place, marketing actions can be evaluated to ensure that your data is being used for the right marketing needs.

There are two key elements to the DULE framework:

1. **Labels:** Classify data that reflects privacy-related or contractual conditions that restrict it from being used for certain marketing actions.
1. **Policies:** Describe what kinds of marketing actions are allowed or not allowed to be taken on data with specific labels.

## Data usage labels

Governance in Real-time CDP allows you label your data according to specific usage policies that apply to that data. Labels can be applied to sets of data, or specific fields within those datasets.

The DULE framework includes predefined data usage labels that can be used to categorize data in three ways:

* **Contract "C" data labels:** Categorize data that has contractual obligations or is related to customer data governance policies.
* **Identity "I" data labels:** Categorize data that can identify or contact a specific person.
* **Sensitive "S" data labels:** Categorize data related to sensitive information such as geographic data.

For a complete list of available labels, as well as definitions for each label type, see the guide on [supported data usage labels](https://www.adobe.io/apis/experienceplatform/home/dule/duleservices.html#!api-specification/markdown/narrative/technical_overview/data_governance/dule_supported_labels.md) in the Adobe Experience Platform documentation.

### When and how to apply usage labels

Data usage labels can be applied to entire datasets, or specific fields (column headers) within those datasets. Labels can be applied at any time, providing flexibility in how you choose to govern data. Best practice encourages labeling data as soon as it is ingested into Real-time CDP.

For step-by-step instructions on how to manage DULE labels, see the sections on managing labels [at the dataset level](https://www.adobe.io/apis/experienceplatform/home/tutorials/alltutorials.html#!api-specification/markdown/narrative/tutorials/dule/dule_working_with_labels.md#managing-data-usage-labels-at-the-dataset-level) and [at the dataset field level](https://www.adobe.io/apis/experienceplatform/home/tutorials/alltutorials.html#!api-specification/markdown/narrative/tutorials/dule/dule_working_with_labels.md#managing-data-usage-labels-at-the-dataset-field-level) in the DULE labels user guide for Adobe Experience Platform.

> **Note:** The user guide linked above also provides instructions for applying labels to data connections. However, this feature is not available in Real-time CDP.

## Data usage policies

In order for data usage labels to effectively support data compliance, data usage policies must be implemented. Data usage policies are rules that describe the kinds of marketing actions that you are allowed to, or restricted from, performing on data within Experience Platform.

In the context of data governance, a marketing action is any action a Real-time CDP data consumer takes for which there is a need to check for violations of data usage policies. An example of a marketing action might be the desire to export a dataset to a third-party service. If there is a policy in place saying that specific types of data, such as Personally Identifiable Information (PII), cannot be exported and an "I" label (Identity data) has been applied to the dataset, you will receive a response from the Policy Service telling you that a data usage policy has been violated.

### How to create and work with data usage policies

Once data usage labels have been applied, 

### Core policies

## Next steps