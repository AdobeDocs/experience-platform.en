---
title: Adobe Commerce Destination Connector
description: Learn how Adobe Commerce and Real-Time CDP merchants can personalize the shopping experience by delivering highly relevant site content and promotions, customized to customer audiences built and managed within Real-Time CDP.
exl-id: f7aa3c6c-ba7a-440c-a4d7-5d7b50dbbc0d
TQID: https://experienceleague.adobe.com/b1Bq5LRQiqzMfhdhh7xfhxzKX2ILNwAHoR4kA3RPWns
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
  - id: e08599ea-8888-4294-ba74-3ba0a7762a46
    internal-label: Data collection
subfeature_v2:
  - id: acc16deb-1d7f-4ec9-9ce3-6cdf355afde6
    internal-label: XDM
  - id: ae2cba0e-54f2-464b-a3b3-ad371e8a886a
    internal-label: Catalog
  - id: ca3d6bf4-a4af-4944-936b-8de1eb09f149
    internal-label: Datastreams
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
topic_v2:
  - id: c7d04a2c-412a-4c9d-9d7a-4456eaa5adeb
    internal-label: Governance
  - id: d3cdead0-685a-4489-9250-4bb709942f66
    internal-label: Data collection
  - id: e0eb8757-182f-49f3-94a4-1587d16f5094
    internal-label: Personalization
---
# Adobe Commerce Connection {#adobe-commerce}

## Overview {#overview}

Use the [!DNL Adobe Commerce] destination connector to select one or more [!DNL Real-Time CDP] audiences to activate to your [!DNL Adobe Commerce] account to deliver a dynamic personalized experience for your shoppers. Within [!DNL Adobe Commerce], you can then select those [!DNL Real-Time CDP] audiences to personalize unique offers in the cart such as 'buy 2 get 1 free,'. You can also display hero banners and modify product pricing through promotional offers, all customized to Adobe [!DNL Real-Time CDP] audiences.

## Prerequisites {#prerequisites}

This connector is available in the destinations catalog for customers who have purchased [!DNL Real-Time CDP] Prime or Ultimate and Adobe Commerce.

To use this destination connection, make sure that you have access to:

- [Adobe Experience Platform](https://experience.adobe.com/)
- [Adobe Developer Console](https://developer.adobe.com/developer-console/docs/guides/getting-started/). With access to the developer console, you can view service account and credential information that is needed to [complete the configuration](https://experienceleague.adobe.com/docs/commerce-admin/customers/customers-menu/audience-activation.html#configure-the-extension) of the extension in Adobe Commerce. 
- [Adobe Commerce version 2.4.4 or higher](https://business.adobe.com/products/commerce.html)

In Experience Platform, create the following:

- [Schema](../../../xdm/schema/composition.md). The schema you create represents the data you plan to ingest from Adobe Commerce. [Learn more](https://experienceleague.adobe.com/docs/commerce-merchant-services/data-connection/fundamentals/update-xdm.html) about how to create a schema that contains Commerce-specific field groups.
- [Dataset](../../../catalog/datasets/user-guide.md#create). A dataset is a storage and management construct for a collection of data. You create this dataset from the schema that you created above.
- [Datastream](../../../datastreams/configure.md#create). ID that allows data to flow from [!DNL Adobe Experience Platform] to other Adobe DX products. This ID must be associated to a specific website within your specific Adobe Commerce instance. When you create this datastream, specify the XDM schema you created above.

After you complete the prerequisites, connect to the [!DNL Commerce] destination.

## Supported audiences {#supported-audiences}

This section describes which types of audiences you can export to this destination.

| Audience origin | Supported | Description |
|---------|----------|----------|
| [!DNL Segmentation Service] | Yes | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| All other audience origins | Yes | This category includes all audience origins outside of audiences generated through the [!DNL Segmentation Service]. Read about the [various audience origins](/help/segmentation/ui/audience-portal.md#customize). Some examples include: <ul><li> custom upload audiences [imported](../../../segmentation/ui/audience-portal.md#import-audience) into Experience Platform from CSV files,</li><li> look-alike audiences, </li><li> federated audiences, </li><li> audiences generated in other Experience Platform apps such as [!DNL Adobe Journey Optimizer], </li><li> and more. </li></ul> |

{style="table-layout:auto"}



Supported audiences by audience data type:

| Audience data type | Supported | Description | Use cases |
|--------------------|-----------|-------------|-----------|
| [People audiences](/help/segmentation/types/people-audiences.md) | Yes | Based on customer profiles, allowing you to target specific groups of people for marketing campaigns. | Frequent buyers, cart abandoners |
| [Account audiences](/help/segmentation/types/account-audiences.md) | No | Target individuals within specific organizations for account-based marketing strategies. | B2B marketing |
| [Prospect audiences](/help/segmentation/types/prospect-audiences.md) | No | Target individuals who are not yet customers but share characteristics with your target audience. | Prospecting with third-party data |
| [Dataset exports](/help/catalog/datasets/overview.md) | No | Collections of structured data stored in the [!DNL Adobe Experience Platform] Data Lake. | Reporting, data science workflows |

{style="table-layout:auto"}


## Connect to the destination {#connect}

>[!IMPORTANT]
>
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to the [!DNL Adobe Commerce] destination:

1. In the [Experience Platform interface](https://experience.adobe.com/platform/), go to **[!UICONTROL Destinations]** > **[!UICONTROL Catalog]**.
1. Select **[!UICONTROL Personalization]**.
1. Select the Adobe Commerce destination to highlight it, then select **[!UICONTROL Set up]**.
1. Follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md).

### Connection parameters {#parameters}

While [setting up](../../ui/connect-destination.md) this destination, you must provide the following information:

- **[!UICONTROL Name]**: Fill in the preferred name for this destination.
- **[!UICONTROL Description]**: Enter a description for your destination. For example, you can mention which campaign you are using this destination for. This field is optional.
- **[!UICONTROL Integration alias]**: This value is sent to the Experience Platform Web SDK as a JSON object name. 
- **[!UICONTROL Datastream ID]**: This determines which Data Collection datastream contains the audiences that are included in the response to the page. The drop-down menu shows only datastreams that have the destination configuration enabled. See [Configuring a datastream](../../../datastreams/overview.md) for more details.

### Enable alerts {#enable-alerts}

You can enable alerts to receive notifications on the status of the dataflow to your destination. Select an alert from the list to subscribe to receive notifications on the status of your dataflow. For more information on alerts, see the guide on [subscribing to destinations alerts using the UI](../../ui/alerts.md).

When you are finished providing details for your destination connection, select **[!UICONTROL Next]**.

## Activate audiences to the [!DNL Commerce] destination {#activate}

>[!IMPORTANT]
>
>To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

Read [Activate profiles and audiences to profile request destinations](../../ui/activate-edge-personalization-destinations.md) for instructions on activating audiences to the [!DNL Commerce] destination.

## Next steps in [!DNL Adobe Commerce] {#next-steps-adobe-commerce}

Now that you have configured the [!DNL Commerce] destination within Experience Platform, you need to install the [!DNL Audience Activation] extension in [!DNL Commerce] and configure the [!DNL Commerce Admin] to import the [!DNL Real-Time CDP] audiences you created. See the [[!DNL Commerce] documentation](https://experienceleague.adobe.com/docs/commerce-admin/customers/customers-menu/audience-activation.html) to learn more.

## Validate audience activation in Commerce {#exported-data}

After you activate [!DNL Real-Time CDP] audiences to your [!DNL Adobe Commerce] account, you will see those audiences available when you go to the _Admin_ sidebar, then go to **[!UICONTROL Customers]** > **[!UICONTROL Real-Time CDP Audience]**.

![Real-Time CDP Audiences Dashboard](../../assets/catalog/personalization/adobe-commerce/audience-library.png)

## Data usage and governance {#data-usage-governance}

All [!DNL Adobe Experience Platform] destinations are compliant with data usage policies when handling your data. For detailed information on how [!DNL Adobe Experience Platform] enforces data governance, read the [Data Governance overview](/help/data-governance/home.md).
