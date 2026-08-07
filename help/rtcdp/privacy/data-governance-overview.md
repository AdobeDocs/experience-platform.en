---
keywords: data governance rtcdp;rtcdp data governance;real time customer data profile data governance
title: Data Governance overview
description: Data Governance allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use.
feature: Get Started, Data Governance
exl-id: eb501d85-cabd-4667-a1cd-2210ec83fb71
TQID: https://experienceleague.adobe.com/N4ACtqYycPiJntA0uAwVTnKSg4hpxkjIgNy-m-85da8
product_v2:
  - id: fdddec33-c9cb-4459-b8b6-2664395a6f10
    internal-label: Real-Time Customer Data Platform
feature_v2:
  - id: ba929a52-9339-4154-9487-317dc875a3c7
    internal-label: Use cases
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
  - id: fd2e3797-f2ea-4b36-a9af-52acf5e90513
    internal-label: Customer profiles
---
# Data Governance in Real-Time CDP

[!DNL Adobe Real-Time Customer Data Platform] (Real-Time CDP) brings data from multiple enterprise systems together, allowing marketers to better identify, understand, and engage their customers. This data may be subject to usage restrictions defined by your organization or by legal regulations. Therefore, it is important to ensure that Real-Time CDP is compliant with usage policies when handling your data.

Adobe Experience Platform Data Governance allows you to manage customer data and ensure compliance with regulations, restrictions, and policies applicable to data use. It plays a key role within Real-Time CDP, allowing you to define usage policies, categorize your data based on those policies, and check for policy violations when performing certain marketing actions.

Real-Time CDP is built on top of Adobe Experience Platform, and therefore the majority of Data Governance capabilities are covered in the [!DNL Experience Platform] documentation. This document is intended to complement the [Data Governance overview](../../data-governance/home.md) for [!DNL Experience Platform], and outlines the Governance features that are available in Real-Time CDP. The following topics are covered:

* [Apply usage labels to your data](#labels)
* [Manage data usage policies](#policies)
* [Enforce data usage compliance](#enforce)

## Apply usage labels to your data {#labels}

Data Governance allows you to apply usage labels to your data, either at the dataset or dataset-field level. Data usage labels allow you to categorize data according to usage policies that apply to that data. 

For detailed information on working with data usage labels, see the [data usage labels user guide](../../data-governance/labels/overview.md) for Adobe Experience Platform.

## Configure marketing actions for destinations {#destinations}

You can set data usage restrictions on a destination by defining marketing actions (also called marketing use cases) for that destination. A marketing action for a destination indicates the intent of the data that will be exported to that destination.

>[!NOTE]
>
>For more information on marketing actions and their use in data usage policies, see the [data usage policies overview](../../data-governance/policies/overview.md) in the [!DNL Experience Platform] documentation.

Defining marketing actions on destinations allows you to ensure that any profiles or audiences sent to those destinations are compliant with data usage policies. You should therefore add appropriate marketing actions to your destinations based on your organization's needs to enforce policy restrictions on activation.

Marketing actions can only be selected when setting up a destination for the first time. Depending on the type of destination you are working with, the opportunity to configure marketing actions will appear at different points in the setup workflow. See the [destinations documentation](../destinations/overview.md) for steps on how to configure your particular destination.

## Manage data usage policies {#policies}

In order for data usage labels to effectively support data compliance, data usage policies must be defined and enabled. Data usage policies are rules that describe the kinds of marketing actions that you are allowed to, or restricted from, performing on data within Real-Time CDP. See the "Data usage policies" section in the [!DNL Experience Platform] [Data Governance overview](../../data-governance/home.md) for more information.

Adobe Experience Platform provides several core policies for common customer experience use cases. These policies can be viewed in the UI by navigating to the **[!UICONTROL Policies]** workspace and selecting the **[!UICONTROL Browse]** tab. See the [policies user guide](../../data-governance/policies/user-guide.md) in the [!DNL Experience Platform] documentation for more detailed steps on working with policies in the UI, including how to make your own custom policies.

## Enforce data usage compliance {#enforce}

Once data is labeled and usage policies are defined, you can enforce data usage compliance with policies. When activating audiences to destinations in Real-Time CDP, Data Governance automatically enforces usage policies should any violations occur.

See the document on [automatic policy enforcement](../../data-governance/enforcement/auto-enforcement.md) for more information.

## Next steps

Now that you have been introduced to the key Data Governance features on Real-Time CDP and how [!DNL Experience Platform] enables them, please continue to the [documentation for Data Governance on Adobe Experience Platform](../../data-governance/home.md). The documentation provides overviews of essential Data Governance concepts, as well as step-by-step workflows for managing data usage labels and policies.

The following video provides an overview of Data Governance in Real-Time CDP, including the use of marketing use-cases on destinations and example workflows for different scenarios:

>[!VIDEO](https://video.tv.adobe.com/v/33631?quality=12&learn=on)
