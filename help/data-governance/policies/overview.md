---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Data usage policies overview
topic: policies
---

# Data usage policies overview

In order for data usage labels to effectively support data compliance, data usage policies must be implemented. Data usage policies are rules that describe the kinds of marketing actions that you are allowed to, or restricted from, performing on data within Experience Platform.

This document provides a high-level overview of data usage policies, and provides links to further documentation for working with policies in the UI or API.

## Marketing actions

**Marketing actions**, (also called **marketing use cases**) in the context of the data governance framework, are actions that an Experience Platform data consumer can take, for which there is a need to check for violations of data usage policies. As such, each data usage policy is defined by the following:

1. A specific marketing action
2. The data usage label(s) that action is restricted from being performed against

An example of a marketing action might be the desire to export a dataset to a third-party service. If there is a policy in place saying that specific types of data (such as Personally Identifiable Information (PII)) cannot be exported, and you attempt to export a dataset that contains an "I" label (Identity data), you will receive a response from the Policy Service telling you that a data usage policy has been violated.

See the appendix to this document for a list of [available Adobe-defined marketing actions](#core-actions). You can also define your own custom marketing actions using the [DULE Policy Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/dule-policy-service.yaml) or the Experience Platform user interface. More information on working with marketing actions and policies is provided in the next section.

## Managing data usage policies

Once data usage labels have been applied, data stewards can use the DULE Policy Service API or the Experience Platform UI to manage and evaluate policies related to marketing actions being taken on data containing data usage labels. You can create and update policies, determine the status of a policy, and work with marketing actions to evaluate whether a specific action violates a data usage policy.

All data usage policies (including core policies provided by Adobe) are disabled by default. In order for an individual policy to be considered for enforcement, you must manually enable that policy through the API or UI.

For step-by-step instructions on working with marketing actions and data usage policies in the API, see the tutorial on [creating and evaluating data usage policies](create.md). For more information the key operations provided by the Policy Service API, see the [Policy Service developer guide](../api/getting-started.md).

For information on how to work with marketing actions and policies in the Platform UI, see the [data usage policy user guide](./user-guide.md).

## Next steps

This document provided an introduction to data usage policies within the DULE framework. You can now continue to read the process documentation linked to throughout this guide to learn more about how to work with policies in the API and UI.

## Appendix

The following section provides additional information about data usage policies.

### Adobe-defined marketing actions {#core-actions}

The following table describes the core marketing actions that are provided out-of-the-box by Adobe:

| Marketing action | Description |
| --- | --- |
| Analytics | An action that sends data to Adobe Analytics. |
| Combine with PII | An action that combines any Personally Identifiable Information (PII) with anonymous data. Contracts for data sourced from ad networks, ad servers, and third-party data providers often include specific contractual prohibitions on the use of such data with directly identifiable data. |
| Cross Site Targeting | An action that uses data for cross-site ad targeting. The combination of data from several sites, including a combination of on-site data and off-site data or a combination of data from several off-site sources, is referred to as cross-site data. Cross-site data is typically collected and processed to make inferences about users' interests. |
| Data Science | An action that uses data for data science workflows. Some contracts include explicit prohibitions on data use for data science. Sometimes these are phrased in terms that prohibit the use of data for Artificial Intelligence (AI), machine learning (ML), or modeling. |
| Email Targeting | An action that uses data in email targeting campaigns. |
| Export to Third Party | An action that exports data to processors and entities that do not have direct relationships with customers. Many data providers have terms in the contracts that prohibit the export of data from where it was originally collected. For example, social network contracts often restrict the transfer of data you receive from them. |
| Onsite Advertising | An action that uses data for targeted onsite ads. Ads are messages or notifications, including text and images, appearing on a website or app that are primarily intended to promote the sale of goods or services. |
| Onsite Personalization | An action that uses data for onsite content personalization. Onsite personalization is any data that is used to make inferences about users' interests, and is used to select which content or ads are served based on those inferences. |
| Single Identity Personalization | An action that uses identity stitching to form customer journey profiles from disparate sources. |