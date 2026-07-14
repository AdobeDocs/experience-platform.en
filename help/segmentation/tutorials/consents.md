---
solution: Experience Platform
title: Honoring Consent in Segment Definitions
description: Learn how to honor customer consent preferences for personal data collection and sharing in segmentation operations.
exl-id: fe851ce3-60db-4984-a73c-f9c5964bfbad
TQID: https://experienceleague.adobe.com/k-0Hlwpmsutz75q0X8fNal2bFtnFig6JvlqIO118uGY
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: a37e4ecd-c740-426a-addf-cb1b483c5c5a
    internal-label: Segmentation
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: abc02dd6-664f-446a-9aaa-675bc0f2fe4a
    internal-label: Sources
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
  - id: b784da9a-7978-4766-bf1f-5ab2b23d894a
    internal-label: Federated Audience Composition
  - id: cbd4a8d8-97a6-4ac9-b8d6-b6c1f28d3342
    internal-label: Segments
  - id: d1823595-9241-4128-8a33-e4ac3bf08773
    internal-label: Audiences
  - id: de9975b2-c43a-4287-9698-4f4cad92b83f
    internal-label: Schemas
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
topic_v2:
  - id: bce87dde-a4ab-44c9-8a18-ad66e4ddb377
    internal-label: Customer experience
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d095671a-1355-40aa-8b5f-06c33c68080b
    internal-label: Security
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: f4e6943a-c91a-4134-a2c7-f4f20cfff2f0
    internal-label: Privacy
---
# Honoring consent in segment definitions

>[!NOTE]
>
>This guide explains how to honor consents within **segment definitions**. 

Legal privacy regulations such as the [!DNL California Consumer Privacy Act] (CCPA) provide consumers the right to opt out of having their personal data collected or shared with third parties. Adobe Experience Platform provides standard Experience Data Model (XDM) components that are intended to capture these customer consent preferences in Real-Time Customer Profile data.

If a customer has withdrawn or withheld consent for having their personal data shared, it is important that your organization honors that preference when generating audiences for marketing activities. This document describes how to integrate customer consent values in your segment definitions using the Experience Platform user interface.

## Getting started

Honoring customer consent values requires an understanding of the various [!DNL Adobe Experience Platform] services involved. Before starting this tutorial, ensure that you are familiar with the following services:

* [[!DNL Experience Data Model (XDM)]](../../xdm/home.md): The standardized framework by which Experience Platform organizes customer experience data.
* [[!DNL Real-Time Customer Profile]](../../profile/home.md): Provides a unified, customer profile in real time based on aggregated data from multiple sources.
* [[!DNL Adobe Experience Platform Segmentation Service]](../home.md): Allows you to build audiences from [!DNL Real-Time Customer Profile] data.

## Consent schema fields

In order to honor customer consents and preferences, one of the schemas that is a part of your [!UICONTROL XDM Individual Profile] union schema must contain the standard field group **[!UICONTROL Consents and Preferences]**.

For details on the structure and intended use case of each of the attributes provided by the field group, see the [consents and preferences reference guide](../../xdm/field-groups/profile/consents.md). For step-by-step instructions on how to add a field group to a schema, refer to the [XDM UI guide](../../xdm/ui/resources/schemas.md#add-field-groups).

Once the field group has been added to a [Profile-enabled schema](../../xdm/ui/resources/schemas.md#profile) and its fields have been used to ingest consent data from your experience application, you can use the collected consent attributes in your segment rules.

## Handling consent in segmentation 

In order to ensure that opted-out profiles are not included in segment definitions, special fields must be added to existing segment definitions and included when creating any new segment definitions.

The steps below demonstrate how to add the appropriate fields for two types of opt-out flags:

1. [!UICONTROL Data Collection]
1. [!UICONTROL Share Data]

>[!NOTE]
>
>While this guide focuses on the two opt-out flags above, you can configure your segment definitions to incorporate additional consent signals as well. The [consents and preferences reference guide](../../xdm/field-groups/profile/consents.md) provides more information on each of these options and their intended use cases.

When building a segment definition in the UI, under **[!UICONTROL Attributes]**, navigate to **[!UICONTROL XDM Individual Profile]**, then select **[!UICONTROL Consents and Preferences]**, followed by **[!UICONTROL Id Specific]**. From here, you can see the options for **[!UICONTROL Data Collection]** and **[!UICONTROL Share Data]**.

![](../images/tutorials/opt-outs/consents.png)

Start by selecting the **[!UICONTROL Data Collection]** category, then drag **[!UICONTROL Choice Value]** into the segment builder. When adding the attribute to the segment definition, you can specify the [consent values](../../xdm/field-groups/profile/consents.md#choice-values) that must be included or excluded.

![](../images/tutorials/opt-outs/consent-values.png)

One approach is to exclude any customers who have opted out of having their data collected. To do this, set the operator to **[!UICONTROL does not equal]**, and choose the following values:

* **[!UICONTROL No (opt-out)]**
* **[!UICONTROL Default of No (opt-out)]**
* **[!UICONTROL Unknown]** (if consent is assumed to be withheld if otherwise unknown)

![](../images/tutorials/opt-outs/collect.png)

Under **[!UICONTROL Attributes]** in the left rail, navigate back to the **[!UICONTROL Consents and Preferences]** section, then select **[!UICONTROL Share Data]**. Drag its corresponding **[!UICONTROL Choice Value]** into the canvas, and select the same values as those for the [!UICONTROL Data Collection] choice value. Ensure that an **[!UICONTROL Or]** relationship is established between the two attributes.

![](../images/tutorials/opt-outs/share.png)

With both the **[!UICONTROL Data Collection]** and **[!UICONTROL Share Data]** consent values added to the segment definition, any customers that have opted out of having their data used will be excluded from the resulting audience. From here, you can continue customizing the segment definition before selecting **[!UICONTROL Save]** to finish the process.

## Next steps

By following this tutorial, you should now have a better understanding of how to honor customer consents and preferences when building segment definitions in Experience Platform.

For more information on managing consent in Experience Platform, refer to the following documentation:

* [Consent processing using the Adobe standard](../../landing/governance-privacy-security/consent/adobe/overview.md)
* [Consent processing using the IAB TCF 2.0 standard](../../landing/governance-privacy-security/consent/iab/overview.md)