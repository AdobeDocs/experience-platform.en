---
keywords: Experience Platform;home;IAB;IAB 2.0;
solution: Experience Platform
title: IAB TCF 2.0 support in Real-time Customer Data Platform
topic: privacy events
---

# Create a dataset for capturing IAB TCF 2.0 consent data

In order for [!DNL Real-time Customer Data Platform] to collect customer consent data in compliance with the IAB [!DNL Transparency & Consent Framework] (TCF) 2.0, that data must be sent to a dataset whose schema contains IAB consent fields and is enabled for use in [!DNL Real-time Customer Profile].

This document provides steps for setting up a dataset to collect IAB TCF 2.0 consent data. For an overview of the full workflow to configure [!DNL Real-time CDP] for TCF 2.0 compliance, refer to the [IAB TCF 2.0 compliance overview](./overview.md).

## Prerequisites

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

* [Experience Data Model (XDM)](../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    * [Basics of schema composition](../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas.
    * [Create a schema in the UI](../../../xdm/tutorials/create-schema-ui.md): A tutorial covering the basics of working with the Schema Editor.
* [Identity Service](../../../identity-service/home.md): Bridges customer identities from disparate data sources across devices and systems.
* [Real-time Customer Profile](../../../profile/home.md): Leverages [!DNL Identity Service] to create detailed customer profiles from your datasets in real-time. [!DNL Real-time Customer Profile] pulls data from the Data Lake and persists customer profiles in its own separate data store.

## Consent schema structure {#structure}

There are two XDM mixins that provide customer consent fields that are required for TCF 2.0 compliance: one for record-based data, and another for time-series-based data.

| Schema | Description |
| --- | --- |
| [!DNL Profile privacy] mixin | This mixin captures the current consent preferences of a customer. When used in a [!DNL Profile]-enabled schema, the values provided in this mixin are taken as the source of truth for how consent enforcement should apply to a customer's data.<br><br>This mixin must be manually added to a [!DNL Profile]-enabled schema in order for IAB enforcement to occur. |
| [!DNL Experience Event privacy] mixin | This mixin captures the consent preferences of a customer at a given point in time. The data captured by this mixin can be used to track changes in a customer's consent preferences over time.<br><br>This mixin is used automatically once the [!DNL Profile privacy] mixin is used to capture consent data, and does not need to be manually added to a schema. |

While the use case of each mixin is different, the specific fields that they provide are roughly the same. These fields are explained further in the next section.

### Consent mixin fields {#privacy-mixin}

While each privacy mixin varies in structure and the types of fields they contain, they both provide the `xdm:consentString` attribute, whose subfields are required for TCF 2.0 enforcement to take place. The structure of these fields is shown below, along with the types of values they expect:

```json
{
  "xdm:consentString": {
    "xdm:consentStandard": "IAB TCF",
    "xdm:consentStandardVersion": "2.0",
    "xdm:consentStringValue": "BObdrPUOevsguAfDqFENCNAAAAAmeAAA.PVAfDObdrA.DqFENCAmeAENCDA",
    "xdm:gdprApplies": true,
    "xdm:containsPersonalData": false
  }
}
```

| Property | Description |
| --- | --- |
| `xdm:consentString` | Contains the customer's updated consent data and other contextual information. |
| `xdm:consentStandard` | The consent framework that the data applies to. For TCF compliance, the value should be "IAB TCF". |
| `xdm:consentStandardVersion` | The version number of the consent framework indicated by `xdm:consentStandard`. For TCF 2.0 compliance, the value should be "2.0". |
| `xdm:consentStringValue` | The consent string that was generated based on the customer's selected consent settings. |
| `xdm:gdprApplies` | A boolean value indicating whether or not the GDPR applies to this customer. The value must be set to "true" in order for TCF 2.0 enforcement to occur. Defaults to "false" if not included. |
| `xdm:containsPersonalData` | A boolean value indicating whether or not the consent update contains personal data. Defaults to "false" if not included. |

## Create a customer consent schema {#create-schema}

In the [!DNL Platform] UI, click **[!UICONTROL Schemas]** in the left navigation to open the *[!UICONTROL Schemas] workspace*. From the **[!UICONTROL Browse]** tab, create a new schema based on the **[!DNL XDM Individual Profile] class**.

>[!NOTE]
>
>If you have an existing [!DNL XDM Individual Profile] schema that you want to use to capture consent data instead, you can edit that schema instead of creating a new one.

Within the Schema Editor for your [!DNL XDM Individual Profile] schema, click **[!UICONTROL Add]** within the *[!UICONTROL Mixins]* section on the left side of the canvas.

![](../assets/iab/add-mixin-profile.png)

The *[!UICONTROL Add mixin]* dialog appears. From here, select **[!UICONTROL Profile privacy]** from the list. You can optionally use the search bar to narrow down results to locate the mixin easier. Once the mixin is selected, click **[!UICONTROL Add mixin]**.

![](../assets/iab/add-profile-privacy.png)

The Schema Editor canvas reappears, allowing you to review the structure of the added consent string fields.

![](../assets/iab/profile-privacy-structure.png)

If you are editing an existing schema that has already been enabled for use in [!DNL Real-time Customer Profile], click **[!UICONTROL Save]** to confirm your changes before skipping ahead to the section on [creating a dataset based on your consent schema](#dataset). If you are creating a new schema, continue following the steps outlined in the subsection below.

### Enable the schema for use in [!DNL Real-time Customer Profile]

In order for [!DNL Real-time CDP] to associate the consent data it receives to specific customer profiles, the consent schema must be enabled for use in [!DNL Real-time Customer Profile].

To enable the schema for [!DNL Profile], you must first choose a **primary identity** for the schema. Depending on the types of data you collect from your customers, you may need to add additional mixins to the schema in order to represent the customer's unique identity.

>[!NOTE]
>
>If you require further guidance on which field to set as a primary identity, review the [!DNL Identity Service] documentation. In particular, the overview on [identity namespaces](../../../identity-service/namespaces.md) provides important information on different accepted identity types.

In this example, an email address field is set as the primary identity. Select the field from the canvas, then select the **[!UICONTROL Identity]** and **[!UICONTROL Primary identity]** checkboxes in the right-hand rail. Next, select the appropriate identity namespace in the provided dropdown menu before clicking **[!UICONTROL Apply]**.

![](../assets/iab/profile-primary-id.png)

Once you have applied a primary namespace to the schema, click the schema's name in the left-hand rail to open the *[!UICONTROL Schema properties]* dialog in the right-hand rail. From here, click the **[!UICONTROL Profile]** toggle button to enable the schema. Finally, click **[!UICONTROL Save]** to confirm your changes.

![](../assets/iab/profile-enable-profile.png)

## Create a [!DNL Profile]-enabled dataset based on your consent schema {#dataset}

Once you have created a schema that includes consent mixins, you must create a dataset based on that schema which will ultimately ingest your customers' consent data.

Select **[!UICONTROL Datasets]** in the left navigation, then click **[!UICONTROL Create dataset]** in the top-right corner.

![](../assets/iab/dataset-create.png)

On the next page, select **[!UICONTROL Create dataset from schema]**.

![](../assets/iab/dataset-create-from-schema.png)

The _[!UICONTROL Create dataset from schema]_ workflow appears, starting at the _[!UICONTROL Select schema]_ step. In the provided list, locate the consent schema that you created earlier. You can optionally use the search to narrow down results and locate your schema easier. Click the radio button next to the schema to select it, then click **[!UICONTROL Next]** to continue.

![](../assets/iab/dataset-select-schema.png)

The _[!UICONTROL Configure dataset]_ step appears. Provide a unique, easily identifiable name and description for the dataset before clicking **[!UICONTROL Finish]**.

![](../assets/iab/dataset-configure.png)

The details page for the newly created dataset appears. The final step in the process is to enable the dataset for use in [!DNL Real-time Customer Profile]. In the right-hand rail, click the **[!UICONTROL Profile]** toggle button enable the dataset.

![](../assets/iab/dataset-enable-profile.png)

## Next steps

By following this tutorial, you have created a [!DNL Profile]-enabled dataset that can now be used to collect customer consent data. You can now return to the IAB TCF 2.0 overview to continue to the next step of [configuring your merge policies](./overview.md#merge-policies) to include your newly created dataset in the precedence list.