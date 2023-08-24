---

title: Activate prospect audiences to destinations
type: Tutorial
description: Learn how to activate prospect audiences to destinations
---

# Activate prospect audiences

>[!AVAILABILITY]
>
>This functionality is available to customers who have purchased the Real-Time CDP Prime and Ultimate package. Contact your Adobe representative for more information. 

This article explains the workflow required to export [prospect audiences](/help/segmentation/ui/prospect-audience.md) from Adobe Experience Platform to your preferred destination. 

## Supported destinations {#supported-destinations}

Go to **[!UICONTROL Connections]** > **[!UICONTROL Destinations]**, and select the **[!UICONTROL Catalog]** tab. Use the **[!UICONTROL Data types]** filter and select **[!UICONTROL Prospects]** to see the destinations which support the activation of prospect audiences. Currently, exporting prospect audiences is available only to the [[!DNL Amazon S3]](../../destinations/catalog/cloud-storage/amazon-s3.md#changelog) destination.  

![Destinations which support dataset exports](/help/destinations/assets/ui/activate-prospect-audiences/data-types-filter.png)

## Prerequisites {#prerequisites}

* You must first ingest [prospect profiles](/help/profile/ui/prospect-profile.md) and create [prospect audiences](/help/segmentation/ui/prospect-audience.md) before you can activate them to downstream destinations.
* To activate prospect audiences to destinations, you must have successfully connected to a destination. If you haven't done so already, go to the [destinations catalog](../catalog/overview.md), browse the supported destinations, and configure the destination that you want to use. Read the UI tutorial on [connecting to destinations](./connect-destination.md) for more information.

### Required permissions {#permissions}

To activate prospect audiences, you need the **[!UICONTROL Manage Destinations]**, **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To ensure that you have the necessary permissions to activate prospect audiences, browse the destinations catalog. If a destination has an **[!UICONTROL Activate]** control, then you have the appropriate permissions.

## Select your destination {#select-destination}

Follow the instructions to select a destination where you can export your datasets:

1. Go to **[!UICONTROL Connections > Destinations]**, and select the **[!UICONTROL Catalog]** tab.
    
    ![Destination catalog tab with Catalog control highlighted.](/help/destinations/assets/ui/export-datasets/catalog-tab.png)

2. Select **[!UICONTROL Activate]** on the card corresponding to the destination that you want to export datasets to. 

  >[!TIP]
  >
  >The destinations that can export profile audiences are indicated with an icon in the upper right corner of the card, similar to the destination highlighted below, or you can use the data type filter to only display destinations that can export prospect audiences, as [shown higher on the page](#supported-destinations).

  ![Amazon S3 destination page that can export profile audiences highlighted.](/help/destinations/assets/ui/activate-prospect-audiences/amazon-s3-icon-activate-prospect-audiences.png)

1. Select **[!UICONTROL Data type Prospects]**, followed by the destination connection that you want to export datasets to, then select **[!UICONTROL Next]**.

  >[!TIP]
  > 
  >If you want to set up a new destination to activate prospect audiences, select **[!UICONTROL Configure new destination]** to trigger the [Connect to destination](/help/destinations/ui/connect-destination.md) workflow. 

  ![Destination activation workflow with Prospects control highlighted.](/help/destinations/assets/ui/activate-prospect-audiences/activate-prospects-highlighted.png)

1. Proceed to the next section to [select your profile audiences](#select-profile-audiences) for export.

## Select your prospect audiences {#select-prospect-audiences}

Use the check boxes to the left of the prospect audiences names to select the audiences that you want to export to the destination, then select **[!UICONTROL Next]**. Note that only the prospect audiences are shown in this view, and no other audiences are displayed. 

![Dataset export workflow showing the Select audiences step where you can select which prospect audiences to export.](/help/destinations/assets/ui/activate-prospect-audiences/select-prospect-audiences.png)

## Scheduling and next steps

For the rest of the activation workflow to export prospect audiences, read the tutorial on activating data to file based-destinations. Continue from the [schedule audience export step](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling).

>[!NOTE]
>
>Note that in the scheduling step, the workflow to activate prospect audiences only allows you to [export full files](/help/destinations/ui/activate-batch-profile-destinations.md#export-full-files). Incremental file exports are not supported.

<!--

Note that we will need to add links to other destination types here as more destinations become supported 

-->

## Other use cases achieved through partner data support {#other-use-cases}

Explore further use cases enabled through partner data support in Real-Time CDP:

* [Supplement first-party profiles with attributes from trusted data partners](/help/rtcdp/partner-data/supplement-first-party-profiles.md) to improve your data foundation and gain new insights into your customer base and gain better audience optimization.
* Use third-party data support in Real-Time CDP to [expand your profile base with prospect profiles from data partners and engage with them to acquire or reach new customers](/help/rtcdp/partner-data/prospecting.md).
* [Leverage partner aided recognition for personalizing on-site experiences](/help/rtcdp/partner-data/onsite-personalization.md) during the visit without the user authenticating or having prior history with your brand.