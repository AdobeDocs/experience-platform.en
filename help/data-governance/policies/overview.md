---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Data usage policies overview
topic: policies
---

# Data usage policies overview

In order for data usage labels to effectively support data compliance, data usage policies must be implemented. Data usage policies are rules that describe the kinds of marketing actions that you are allowed to, or restricted from, performing on data within [!DNL Experience Platform].

An example of a marketing action might be the desire to export a dataset to a third-party service. If there is a policy in place saying that specific types of data, such as Personally Identifiable Information (PII), cannot be exported and an "I" label (Identity data) has been applied to the dataset, you will receive a response from the Policy Service telling you that a data usage policy has been violated.

## How to create and work with data usage policies

Once data usage labels have been applied, data stewards can create policies using the [DULE Policy Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/dule-policy-service.yaml).

As a data steward, you can use the [!DNL Policy Service] API to manage and evaluate policies related to marketing actions being taken on data containing DULE labels. Using the API, you can create and update policies, determine the status of a policy, and work with marketing actions to evaluate whether a specific action violates a data usage policy.

Within the [!DNL Policy Service] API, all policies and marketing actions are referred to as either `core` or `custom` resources. `core` resources are defined and maintained by Adobe, whereas `custom` resources are created and maintained by individual customers. The `custom` resources are therefore unique and visible solely to the organization that created them.

For more information on performing the key operations provided by the DULE [!DNL Policy Service] API, see the [Policy Service developer guide](../api/getting-started.md). For step-by-step instructions on working with DULE policies, see the tutorial on [creating and evaluating DULE policies](create.md).