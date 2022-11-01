---
keywords: Experience Platform;home;popular topics;dule;DULE
solution: Experience Platform
title: Data Usage Policies Overview
topic-legacy: policies
description: In order for data usage labels to effectively support data compliance, data usage policies must be implemented. Data usage policies are rules that describe the kinds of marketing actions that you are allowed to, or restricted from, performing on data within Experience Platform.
exl-id: 1b372aa5-3e49-4741-82dc-5701a4bc8469
---
# Data usage policies overview

In order for data usage labels to effectively support data compliance, data usage policies must be implemented. Data usage policies are rules that describe the kinds of marketing actions that you are allowed to, or restricted from, performing on data within [!DNL Experience Platform].

There are two types of policies available:

* **[!UICONTROL Data governance policy]**: Restrict data activation based on the marketing action being performed and the data usage labels carried by the data in question.
* **[!UICONTROL Consent policy]**: Filter the profiles that can be activated to [destinations](../../destinations/home.md) based on your customers' consent or preferences

This document provides a high-level overview of data usage policies, and provides links to further documentation for working with policies in the UI or API.

## Marketing actions {#marketing-actions}

Marketing actions, (also called marketing use cases) in the context of the data governance framework, are actions that an [!DNL Experience Platform] data consumer can take, for which your organization wants to restrict data usage. As such, a data usage policy is defined by the following:

1. A specific marketing action
2. The conditions under which that action is restricted from being performed

An example of a marketing action might be the desire to export a dataset to a third-party service. If there is a policy in place saying that specific types of data (such as Personally Identifiable Information (PII)) cannot be exported, and you attempt to export a dataset that contains an "I" label (Identity data), you will receive a response from the [!DNL Policy Service] telling you that a data usage policy has been violated.

>[!NOTE]
>
>Marketing actions by themselves do not restrict data usage. They must be included in enabled data usage policies in order for those actions to be evaluated for policy violations.

When data usage happens in your organization's service, relevant marketing actions should be indicated so that any policy violations can be identified. You can then use the [Policy Service API](https://www.adobe.io/experience-platform-apis/references/policy-service/) to check for policy violations in your integration.

>[!NOTE]
>
>You can set up marketing use cases on destinations to automate policy enforcement. See the [destinations documentation](../../destinations/home.md) for more information on the configuration options for your particular destination.

See the appendix to this document for a list of [available Adobe-defined marketing actions](#core-actions). You can also define your own custom marketing actions using the [!DNL Policy Service] API or the [!DNL Experience Platform] user interface. More information on working with marketing actions and policies is provided in the next section.

<!-- (Add after AAM DEC mapping doc is published)
### Inheritance from Adobe Audience Manager Data Export Controls

Experience Platform has the ability to share segments with Adobe Audience Manager. Any Data Export Controls that have been applied to Audience Manager segments are translated to equivalent marketing use cases recognized by Experience Platform Data Governance.

For a reference on how specific Data Export Controls map to marketing actions in Platform, please refer to the [Audience Manager documentation](https://experienceleague.adobe.com/docs/audience-manager/user-guide/features/data-export-controls.html).
-->

## Managing data usage policies {#manage}

Once data usage labels have been applied, data stewards can use the [!DNL Policy Service] API or the [!DNL Experience Platform] UI to manage and evaluate policies related to marketing actions being taken on data containing data usage labels. You can create and update policies, determine the status of a policy, and work with marketing actions to evaluate whether a specific action violates a data usage policy.

>[!IMPORTANT]
>
>All data usage policies (including core policies provided by Adobe) are disabled by default. In order for an individual policy to be considered for enforcement, you must manually enable that policy through the API or UI.

For step-by-step instructions on working with marketing actions and data usage policies in the API, see the tutorial on [creating and evaluating data usage policies](create.md). For more information the key operations provided by the [!DNL Policy Service] API, see the [Policy Service developer guide](../api/getting-started.md).

For information on how to work with marketing actions and policies in the [!DNL Platform] UI, see the [data usage policy user guide](./user-guide.md).

## Next steps

This document provided an introduction to data usage policies within the Data Governance framework. You can now continue to read the process documentation linked to throughout this guide to learn more about how to work with policies in the API and UI.

## Appendix

The following section provides additional information about data usage policies.

### Adobe-defined marketing actions {#core-actions}

The table below describes the core marketing actions that are provided out-of-the-box by Adobe.

>[!NOTE]
>
>The core marketing actions should be seen as a starting point to help you identify what usage policies to create and check for violations. The definitions and how they are interpreted depend on your organization's needs and policies.

| Marketing action | Description |
| --- | --- |
| Analytics | An action that uses data for analytics purposes, such as measuring, analyzing, and reporting on customers' usage of your organization's sites or apps. |
| Combine with directly identifiable data | An action that combines any Personally Identifiable Information (PII) with anonymous data. Contracts for data sourced from ad networks, ad servers, and third-party data providers often include specific contractual prohibitions on the use of such data with directly identifiable data. |
| Cross Site Targeting | An action that uses data for cross-site ad targeting. The combination of data from several sites, including a combination of on-site data and off-site data or a combination of data from several off-site sources, is referred to as cross-site data. Cross-site data is typically collected and processed to make inferences about users' interests. |
| Data Science | An action that uses data for data science workflows. Some contracts include explicit prohibitions on data use for data science. Sometimes these are phrased in terms that prohibit the use of data for Artificial Intelligence (AI), machine learning (ML), or modeling. |
| Email Targeting | An action that uses data in email targeting campaigns. |
| Export to Third Party | An action that exports data to processors and entities that do not have direct relationships with customers. Many data providers have terms in the contracts that prohibit the export of data from where it was originally collected. For example, social network contracts often restrict the transfer of data you receive from them. |
| Onsite Advertising | An action that uses data for onsite ads, including the selection and delivery of advertisements on your organization's websites or apps, or to measure the delivery and effectiveness of such advertisements. |
| Onsite Personalization | An action that uses data for onsite content personalization. Onsite personalization is any data that is used to make inferences about users' interests, and is used to select which content or ads are served based on those inferences. |
| Segment Match | An action that uses data for Adobe Experience Platform Segment Match, which allows for two or more Platform users to exchange segment data. By enabling policies that reference this action, you can restrict what data is used for Segment Match. For example, if the core policy "Restrict data sharing" is enabled, any data with a [C11 label](../labels/reference.md#c11) cannot be used for Segment Match. |
| Single Identity Personalization | An action that requires that a single identity be used for personalization purposes instead of stitching identities from multiple sources. |
