---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Data usage policies overview
topic: policies
---

# Data usage policies overview

In order for data usage labels to effectively support data compliance, data usage policies must be implemented. Data usage policies are rules that describe the kinds of marketing actions that you are allowed to, or restricted from, performing on data within Experience Platform.

This document provides a high-level overview of data usage policies, and provides links to further documentation 

## Marketing actions

Marketing actions, in the context of the data governance framework, are actions that an Experience Platform data consumer can take, for which there is a need to check for violations of data usage policies.

An example of a marketing action might be the desire to export a dataset to a third-party service. If there is a policy in place saying that specific types of data, such as Personally Identifiable Information (PII), cannot be exported and an "I" label (Identity data) has been applied to the dataset, you will receive a response from the Policy Service telling you that a data usage policy has been violated.

### Adobe-defined marketing actions

The following table describes the core marketing actions that are provided out-of-the-box by Adobe:

| Marketing action | Description |
| --- | --- |
| Analytics | An action that sends data to Adobe Analytics. |
| Combine with PII | An action that combines Personally Identifiable Information (PII) with anonymous data. |
| Cross Site Targeting | An action that uses data for cross-site ad targeting. |
| Data Science | An action that uses data for data science or machine learning workflows. |
| Email Targeting | An action that uses data in email targeting campaigns. |
| Export to Third Party | An action that exports data to processors and entities that do not have direct relationships with customers. |
| Onsite Advertising | An action that uses data for targeted onsite ads. |
| Onsite Personalization | An action that uses data for onsite content personalization. |
| Single Identity Personalization | An action that uses identity stitching to form customer journey profiles from disparate sources. |

## How to create and work with data usage policies

Once data usage labels have been applied, data stewards can create policies using the [DULE Policy Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/dule-policy-service.yaml).

As a data steward, you can use the Policy Service API to manage and evaluate policies related to marketing actions being taken on data containing DULE labels. Using the API, you can create and update policies, determine the status of a policy, and work with marketing actions to evaluate whether a specific action violates a data usage policy.

Within the Policy Service API, all policies and marketing actions are referred to as either `core` or `custom` resources. `core` resources are defined and maintained by Adobe, whereas `custom` resources are created and maintained by individual customers. The `custom` resources are therefore unique and visible solely to the organization that created them.

For more information on performing the key operations provided by the DULE Policy Service API, see the [Policy Service developer guide](../api/getting-started.md). For step-by-step instructions on working with DULE policies, see the tutorial on [creating and evaluating DULE policies](create.md).

## Next steps

This document provided an introduction to data usage policies within the DULE framework. You can now continue to read the process documentation linked to throughout this guide to learn more about how to work with policies in the Experience Platform UI and API.