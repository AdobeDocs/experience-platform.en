---
keywords: Experience Platform;home;popular topics
solution: Experience Platform
title: Configure a dataset to capture consent and preference data
topic: getting started
description: Configure a dataset to capture consent and preference data
---

# Configure a dataset to capture consent and preference data

In order for Adobe Experience Platform to process customer consent data, that data must be sent to a dataset whose schema contains consent-related fields. Specifically, this dataset must be based on the [!DNL XDM Individual Profile] class, and enabled for use in [!DNL Real-time Customer Profile].

This document provides steps for configuring a dataset to collect consent data in Experience Platform. For an overview of the full workflow for collecting consent data in Platform, refer to the [consent collection overview](./overview.md).

>[!IMPORTANT]
>
>The examples in this guide use a standardized set of fields to represent customer consent values, as defined by the [Consents & Preferences XDM data type](../../../xdm/data-types/consents.md). The structure of these fields is intended to provide an efficient data model to cover many common consent-collection use cases.
>
>However, you can also define your own mixins to represent consent according to your own data models. Please consult with your legal team to get approval for a consent data model that fits your business needs, based on the following options:
>
>* The standardized consent mixin
>* A custom consent mixin created by your organization
>* A combination of the standardized consent mixin and additional fields provided by a custom consent mixin

## Prerequisites

This tutorial requires a working understanding of the following components of Adobe Experience Platform:

* [Experience Data Model (XDM)](../../../xdm/home.md): The standardized framework by which [!DNL Experience Platform] organizes customer experience data.
    * [Basics of schema composition](../../../xdm/schema/composition.md): Learn about the basic building blocks of XDM schemas.
* [Real-time Customer Profile](../../../profile/home.md): Consolidates customer data from disparate sources into a complete, unified view while offering an actionable, timestamped account of every customer interaction.

>[!IMPORTANT]
>
>This tutorial assumes that you know the [!DNL Profile] schema in Platform that you want to use to capture customer attribute information. Regardless of the method you use to collect consent data, this schema must be [enabled for Real-time Customer Profile](../../../xdm/ui/resources/schemas.md#profile). In addition, the schema's primary identity cannot be a directly identifiable field that is prohibited from use in interest-based advertising, such as an email address. Consult your legal counsel if you are unsure which fields are restricted.

## Consents & Preferences mixin structure {#structure}

The [!UICONTROL Privacy/Personalization/Marketing Preferences (Consents)] mixin (hereinafter referred to as the "Consents & Preferences mixin") provides standardized consent fields to a schema. Currently, this mixin is only compatible with schemas based on the [!DNL XDM Individual Profile] class.

The mixin provides a single object-type field, `xdm:consents`, whose sub-properties capture a set of standardized consent fields. The following JSON is an example of the kind of data `xdm:consents` expects upon data ingestion:

```json
{
  "xdm:consents": {
    "xdm:collect": {
      "xdm:val": "y",
    },
    "xdm:adID": {
      "xdm:val": "VI"
    },
    "xdm:share": {
      "xdm:val": "y",
    },
    "xdm:personalize": {
      "xdm:content": {
        "xdm:val": "y"
      }
    },
    "xdm:marketing": {
      "xdm:preferred": "email",
      "xdm:any": {
        "xdm:val": "y"
      },
      "xdm:push": {
        "xdm:val": "n",
        "xdm:reason": "Too Frequent",
        "xdm:time": "2019-01-01T15:52:25+00:00"
      }
    },
    "xdm:idSpecific": {
      "email": {
        "jdoe@example.com": {
          "xdm:marketing": {
            "xdm:email": {
              "xdm:val": "n"
            }
          }
        }
      }
    }
  },
  "xdm:metadata": {
    "xdm:time": "2019-01-01T15:52:25+00:00"
  }
}
```

>[!NOTE]
>
>For more information on the structure and meaning of the sub-properties in `xdm:consents`, see the overview on the [Consents & Preferences data type](../../../xdm/data-types/consents.md).

## Add the Consents & Preferences mixin to your [!DNL Profile] schema {#add-mixin}

In the Platform UI, select **[!UICONTROL Schemas]** in the left navigation, then select the **[!UICONTROL Browse]** tab to display a list of existing schemas. From here, select the name of the [!DNL Profile]-enabled schema that you want to add consent fields to. The screenshots in this section use the "Loyalty Members" schema built in the [schema creation tutorial](../../../xdm/tutorials/create-schema-ui.md) as an example.

![](../../images/governance-privacy-security/consent/dataset-prep/select-schema.png)

>[!TIP]
>
>You can use the workspace's search and filtering capabilities to help find your schema easier. See the guide on [exploring XDM resources](../../../xdm/ui/explore.md) for more information.

The [!DNL Schema Editor] appears, showing the structure of the schema in the canvas. On the left side of the canvas, select **[!UICONTROL Add]** under the **[!UICONTROL Mixins]** section.

![](../../images/governance-privacy-security/consent/dataset-prep/add-mixin.png)

The **[!UICONTROL Add mixin]** dialog appears. From here, select **[!UICONTROL Privacy/Personalization/Marketing Preferences (Consents)]** from the list. You can optionally use the search bar to narrow down results to locate the mixin easier. Once the mixin is selected, select **[!UICONTROL Add mixin]**.

![](../../images/governance-privacy-security/consent/dataset-prep/mixin-dialog.png)

The canvas reappears, showing that the `consents` field has been added to the schema structure. Select **[!UICONTROL Save]** to finalize the changes to the schema.

![](../../images/governance-privacy-security/consent/dataset-prep/save-schema.png)

If the schema you edited is used by the [!UICONTROL Profile Dataset] specified in your Platform Web SDK edge configuration, that dataset will now include the new consent fields. You can now return to the [consent collection guide](./overview.md#merge-policies) to continue the process of configuring Experience Platform to collect consent data.

If you have not created a dataset for this schema, follow the steps in the next section.

## Create a dataset based on your consent schema {#dataset}

Once you have created a schema with consent fields, you must create a dataset that will ultimately ingest your customers' consent data. This dataset must be enabled for [!DNL Real-time Customer Profile].

To begin, select **[!UICONTROL Datasets]** in the left navigation, then select **[!UICONTROL Create dataset]** in the top-right corner.

![](../../images/governance-privacy-security/consent/dataset-prep/create-dataset.png)

On the next page, select **[!UICONTROL Create dataset from schema]**.

![](../../images/governance-privacy-security/consent/dataset-prep/from-schema.png)

The **[!UICONTROL Create dataset from schema]** workflow appears, starting at the **[!UICONTROL Select schema]** step. In the provided list, locate one of the consent schemas that you created earlier. You can optionally use the search bar to narrow down results and locate your schema easier. Select the radio button next to the desired schema, then select **[!UICONTROL Next]** to continue.

![](../../images/governance-privacy-security/consent/dataset-prep/select-dataset-schema.png)

The **[!UICONTROL Configure dataset]** step appears. Provide a unique, easily identifiable name and description for the dataset before selecting **[!UICONTROL Finish]**.

![](../../images/governance-privacy-security/consent/dataset-prep/dataset-details.png)

The details page for the newly created dataset appears. If the dataset is based on your time-series schema, then the process is complete. If the dataset is based on your record schema, the final step in the process is to enable the dataset for use in [!DNL Real-time Customer Profile].

In the right rail, select the **[!UICONTROL Profile]** toggle.

![](../../images/governance-privacy-security/consent/dataset-prep/profile-toggle.png)

Finally, select **[!UICONTROL Enable]** in the confirmation popover to enable the schema for [!DNL Profile].

![](../../images/governance-privacy-security/consent/dataset-prep/enable-dataset.png)

The dataset is now saved and enabled for use in [!DNL Profile]. If you are planning using the Platform Web SDK to collect consent data, you must select this dataset as the [!UICONTROL Profile Dataset] when setting up your [edge configuration](../../../edge/fundamentals/edge-configuration.md).

## Next steps

By following this tutorial, you have added consent fields to a [!DNL Profile]-enabled schema, whose dataset will be used to ingest consent data using the Platform Web SDK or direct XDM ingestion.

You can now return to the [consent collection overview](./overview.md#merge-policies) to continue the process of configuring Experience Platform to collect consent data.