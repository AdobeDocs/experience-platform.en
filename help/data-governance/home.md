---
keywords: Experience Platform;home;popular topics;DULE;dule
solution: Experience Platform
title: Data Governance Overview
topic-legacy: overview
description: Adobe Experience Platform Data Governance allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. It plays a key role within Experience Platform at various levels, including cataloging, data lineage, data usage labeling, data usage policies, and controlling usage of data for marketing actions
exl-id: 00ca6bc2-1c58-4ea2-8bb5-30fd3fa5944a
---
# Data Governance overview

One of the core capabilities of Adobe Experience Platform is to bring data from multiple enterprise systems together to better allow marketers to identify, understand, and engage customers. This data may be subject to usage restrictions defined by your organization or by legal regulations. It is therefore important to ensure that your data operations within [!DNL Platform] are compliant with data usage policies. 

Adobe Experience Platform Data Governance allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. It plays a key role within [!DNL Experience Platform] at various levels, including cataloging, data lineage, data usage labeling, data usage policies, and controlling usage of data for marketing actions.

>[!NOTE]
>
>In Experience Platform, data governance is only concerned with how data is used or activated, regardless of the user performing the action. For information on how to control access to specific data fields for certain Platform users within your organization, see the documentation on [attribute-based access control](../access-control/abac/overview.md) instead.

## Data governance roles

As a concept, data governance is neither automatic, nor does it occur in a vacuum. What began as a role for one individual, typically recognized as a data steward, has grown considerably as the data governance ecosystem has expanded. Today, data governance requires continual management and monitoring in order to be successful and relies on data stewards having tools with which data can be properly labeled, usage policies can be created, and compliance with those policies can be enforced.

While data governance should be the responsibility of every individual in the organization, here are some of the essential roles within the data governance cycle:

![Data Governance Roles](./images/overview/roles.png)

### Data steward

Data stewards are the heart of data governance. This role is responsible for interpreting regulations, contractual restrictions, and policies, and applying them directly to the data. Informed by their understanding of these regulations, restrictions, and policies, the role of a data steward includes:

* Reviewing data, datasets, and data samples to apply and manage metadata usage labeling.
* Creating data policies and applying them to datasets and fields.
* Communicating data policies to the organization.

### Marketer

Marketers are the end point of data governance. They request data from the data governance infrastructure created by data stewards, scientists, and engineers. Marketers encompass a number of different specialties under the marketing umbrella, including the following:

* Marketing Analysts request data to enable understanding of customers, both as individuals and in groups (also known as segments).
* Marketing Specialists and Experience Designers use data to design new customer experiences. 


## Data Governance framework

The Data Governance framework simplifies and streamlines the process of categorizing data and creating data usage policies. Once data labels have been applied and data usage policies are in place, marketing actions can be evaluated to ensure the correct use of data.

There are three key elements to the Data Governance framework: Labels, Policies, and Enforcement.

1. **Labels:** Classify data that reflects privacy-related considerations and contractual conditions to be compliant with regulations and organization policies.
1. **Policies:** Describe what kind(s) of marketing actions are allowed or not allowed to be taken on specific data.
1. **Enforcement:** Uses the policy framework to advise and enforce policies across different data access patterns. 

## Data usage labels

Data Governance enables data stewards to apply usage labels at the dataset and field level to categorize data according to the type of policies that apply.

The Data Governance framework includes predefined data usage labels that can be used to categorize data in three ways:

![Data Usage Label Categories](./images/overview/label-categories.png)

* **Contract "C" Data Labels:** Label and categorize data that has contractual obligations or is related to customer data governance policies. 
* **Identity "I" Data Labels:** Label and categorize data that can identify or contact a specific person.
* **Sensitive "S" Data Labels:** Label and categorize data related to sensitive data such as geographic data.

>[!NOTE]
>
>See the guide on [supported data usage labels](labels/reference.md) for a complete list of available labels, as well as definitions for each label type.

Labels can be applied at any time, providing flexibility in how you choose to govern data. Best practice encourages labeling data as soon as it is ingested into [!DNL Experience Platform], or as soon as data becomes available in [!DNL Platform].

See the overview on [data usage labels](./labels/overview.md) for more information.

## Data usage policies

In order for data usage labels to effectively support data compliance, data usage policies must be implemented. Data usage policies are rules that describe the kinds of marketing actions that you are allowed to, or restricted from, performing on data within [!DNL Experience Platform].

An example of a marketing action might be the desire to export a dataset to a third-party service. If there is a policy in place saying that Personally Identifiable Information (PII) cannot be exported, and an "I" label (identity data) has been applied to the dataset, [!DNL Policy Service] prevents any action that would export this dataset to a third-party destination. Should one of these action attempts occur, Policy Service sends a message telling you that a data usage policy has been violated.

There are two types of policies available:

* **[!UICONTROL Data governance policy]**: Restrict data activation based on the marketing action being performed and the data usage labels carried by the data in question.
* **[!UICONTROL Consent policy]**: Filter the profiles that can be activated to [destinations](../destinations/home.md) based on your customers' consent or preferences.

Once data usage labels have been applied, data stewards can create policies using the [!DNL Policy Service] API or the [!DNL Experience Platform] user interface. For more information on data usage policies and marketing actions, see the [policies overview](./policies/overview.md).

>[!IMPORTANT]
>
>All data usage policies (including core policies provided by Adobe) are disabled by default. In order for an individual policy to be considered for enforcement, you must manually enable that policy.

## Next steps

This document provided a high-level introduction to Data Governance and theData Governance framework. You can now continue to the [data usage labels user guide](labels/user-guide.md) and start adding usage labels to your experience data.

## Appendix

The following section provides additional information regarding Data Governance.

### Data Governance terminology

The following table outlines key terms related to Data Governance and theData Governance framework.

|Term|Definition |
|---|---|
|**Contract labels**|Contract "C" labels are used to categorize data that has contractual obligations or is related to your organization's data governance policies.|
|**Cross-site data**|Cross-site data is the combination of data from several sites, including a combination of on-site data and off-site data or a combination of data from several off-site sources.|
|**Data governance**|Data governance encompasses the strategies and technologies used to ensure data is in compliance with regulations and corporate policies with respect to data usage.|
|**Data steward**|The data steward is the person responsible for the management, oversight, and enforcement of an organization's data assets. A data steward also ensures data governance policies are safeguarded and maintained to be compliant with government regulations and organization policies.|
|**Data usage labels**|Data usage labels provide users the ability to categorize data that reflects privacy-related considerations and contractual conditions to be compliant with regulations and corporate policies.|
|**Dataset labels**|Labels can be added to a dataset. All fields within a dataset inherit the dataset's labels.|
|**Field labels**|Field labels are data governance labels that are either inherited from a dataset or applied directly to a field.  Data governance labels applied to a field are not inherited up to a dataset.|
|**Geofence**| A geofence is a virtual geographic boundary, defined by GPS or RFID technology, that enables software to trigger a response when a mobile device enters or leaves a particular area.|
|**Identity labels**|Identity "I" labels are used to categorize data that can identify or contact a specific person.|
|**Interest-based targeting**|Interest-based targeting, also known as personalization, occurs if the following three conditions are met: data collected on-site is, used to make inferences about a users' interest, is used in another context, such as on another site or app (off-site) and is used to select which content or ads are served based on those inferences.|
|**Marketing action**|A marketing action, in the context of the data governance framework, is an action that an [!DNL Experience Platform] data consumer takes, for which there is a need to check for violations of data usage policies|
|**Policy**|In the data governance framework, a policy is a rule that describes what kind of marketing actions are allowed or not allowed to be taken on specific data.|
|**Sensitive Labels**|Sensitive "S" labels are used to categorize data that you, and your organization, consider sensitive.|

## Additional resources

The following video is intended to support your understanding of the Data Governance framework.

>[!VIDEO](https://video.tv.adobe.com/v/29708?quality=12&enable10seconds=on&speedcontrol=on)

The following video provides an introduction to various Data Governance features in Experience Platform.

>[!VIDEO](https://video.tv.adobe.com/v/36653?quality=12&enable10seconds=on&speedcontrol=on)
