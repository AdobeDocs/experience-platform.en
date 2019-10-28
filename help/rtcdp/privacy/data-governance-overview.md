---
title: Data Governance overview
seo-title: Data Governance in Real-time Customer Data Platform
description: Data Governance allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. 
seo-description: Data Governance allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. 
---

# Data Governance in Real-time CDP

Real-time Customer Data Platform (Real-time CDP) brings data from multiple enterprise systems together, allowing marketers to better identify, understand, and engage their customers. This data may be subject to usage restrictions defined by your organization or by legal regulations. Therefore, it is important to ensure that Real-time CDP is compliant with usage policies when handling your data.

Adobe Experience Platform Data Governance allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. It plays a key role within Real-time CDP, allowing you to define usage policies, categorize your data based on those policies, and check for policy violations when performing certain marketing actions.

Real-time CDP is built on top of Adobe Experience Platform, and therefore the majority of Data Governance capabilities are covered in the Experience Platform documentation. This document is intended to compliment the [Data Governance overview](https://www.adobe.io/apis/experienceplatform/home/dule/duleservices.html#!api-specification/markdown/narrative/technical_overview/data_governance/dule_overview.md) for Experience Platform, and outlines the Governance features that are available in Real-time CDP. The following topics are covered:

* [Apply usage labels to your data](#apply-usage-labels-to-your-data)
* [Set restrictions on destinations](#set-restrictions-on-destinations)
* [Manage data usage policies](#manage-data-usage-policies)
* [Enforce data usage compliance](#enforce-data-usage-compliance)

## Apply usage labels to your data

Data Governance allows you to apply usage labels to your data, either at the dataset or dataset-field level. Data usage labels allow you to categorize data according to usage policies that apply to that data. 

For detailed information on working with data usage labels, see the [data usage labels user guide](https://www.adobe.io/apis/experienceplatform/home/dule/duleservices.html#!api-specification/markdown/narrative/tutorials/dule/dule_working_with_labels.md) for Adobe Experience Platform.

> **Note:** The data usage labels guide linked above includes instructions for applying labels to connections. However, **connection-level labels are not available in Real-time CDP**. Please refer only to the sections for applying labels to datasets and dataset fields.

## Set restrictions on destinations

You can set data usage restrictions on a destination by defining the marketing use cases for that destination. Defining use cases for destinations allows you to check for usage policy violations and ensure that any profiles or segments sent to that destination are compatible with Data Governance rules.

Marketing use cases can be defined during the _Setup_ phase for the _Edit Destination_ workflow. See the [destination documentation] for more information.

<!-- Link to destination docs to be added after they are merged. -->

## Manage data usage policies

In order for data usage labels to effectively support data compliance, data usage policies must be defined and enabled. Data usage policies are rules that describe the kinds of marketing actions that you are allowed to, or restricted from, performing on data within Real-time CDP. See the "Data usage policies" section in the Experience Platform [Data Governance overview](https://www.adobe.io/apis/experienceplatform/home/dule/duleservices.html#!api-specification/markdown/narrative/technical_overview/data_governance/dule_overview.md) for more information.

Real-time CDP provides several **core policies** for common customer experience use cases. These policies can be viewed by making a request to the [DULE Policy Service API](https://www.adobe.io/apis/experienceplatform/home/api-reference.html#!acpdr/swagger-specs/dule-policy-service.yaml), as shown in the "List all policies" section in the [Policy Service developer guide](https://www.adobe.io/apis/experienceplatform/home/dule/duleservices.html#!api-specification/markdown/narrative/technical_overview/data_governance/dule_policy_service_developer_guide.md). You can also create your own **custom policies** to model custom usage restrictions, as shown in the "Create a policy" section in the developer guide.

## Enforce data usage compliance

Once data is labeled and usage policies are defined, you can enforce data usage compliance with policies. See the "Policy evaluation" section in the [Policy Service developer guide](https://www.adobe.io/apis/experienceplatform/home/dule/duleservices.html#!api-specification/markdown/narrative/technical_overview/data_governance/dule_policy_service_developer_guide.md) for more information.

## Next steps

Now that you have been introduced to the key Data Governance features on Real-time CDP and how Experience Platform enables them, please continue to the [documentation for Data Governance on Adobe Experience Platform](https://www.adobe.io/apis/experienceplatform/home/dule/duleservices.html). The documentation provides overviews of essential Data Governance concepts, as well as step-by-step workflows for managing data usage labels and policies.