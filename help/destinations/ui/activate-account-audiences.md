---
title: Activate account audiences to destinations
type: Tutorial
description: Learn how to activate account audiences to destinations
badgeB2B: label="B2B Edition" type="Informative" url=" https://experienceleague.adobe.com/docs/experience-platform/rtcdp/intro/rtcdp-intro/overview.html?lang=en#rtcdp-editions newtab=true"
badgeB2P: label="B2P Edition" type="Positive" url=" https://experienceleague.adobe.com/docs/experience-platform/rtcdp/intro/rtcdp-intro/overview.html?lang=en#rtcdp-editions newtab=true"
exl-id: ad69d0a8-bf5b-42ac-97a3-401eadda62cd
---
# Activate account audiences

>[!AVAILABILITY]
>
>The functionality to activate account audiences to destinations is available for companies purchasing the [Business-to-Business](/help/rtcdp/overview.md#rtcdp-b2b) and [Business-to-Person](/help/rtcdp/overview.md#rtcdp-b2p) editions of Real-Time Customer Data Platform.

This article explains the workflow required to export [account audiences](/help/segmentation/ui/account-audiences.md) from Adobe Experience Platform to your preferred destination. 

## Supported destinations {#supported-destinations}

Go to **[!UICONTROL Connections]** > **[!UICONTROL Destinations]**, and select the **[!UICONTROL Catalog]** tab. Use the **[!UICONTROL Data types]** filter and select **[!UICONTROL Accounts]** to see the destinations which support the activation of account audiences. Currently, exporting account audiences is available only to certain cloud storage destinations ([Amazon S3](/help/destinations/catalog/cloud-storage/amazon-s3.md), [ADLS Gen 2](/help/destinations/catalog/cloud-storage/adls-gen2.md), [Azure Blob Storage](/help/destinations/catalog/cloud-storage/azure-blob.md), [Data Landing Zone](/help/destinations/catalog/cloud-storage/data-landing-zone.md), and [SFTP](/help/destinations/catalog/cloud-storage/sftp.md)) and the [(Companies) LinkedIn Matched Audiences](/help/destinations/catalog/social/linkedin.md) destination.  

![Destinations which support account audiences.](/help/destinations/assets/ui/activate-account-audiences/data-types-filter.png)

## Video overview

View the video below for an overview of creating and activating account audiences, and the supported use cases when activating account audiences.

>[!VIDEO](https://video.tv.adobe.com/v/338252/?learn=on)

## Prerequisites {#prerequisites}

* You must first ingest [account profiles](/help/rtcdp/accounts/account-profile-overview.md) and create [account audiences](/help/segmentation/ui/account-audiences.md) before you can activate them to downstream destinations.
* To activate account audiences to destinations, you must have successfully connected to a destination. If you haven't done so already, go to the [destinations catalog](../catalog/overview.md), browse the supported destinations, and configure the destination that you want to use. Read the UI tutorial on [connecting to destinations](./connect-destination.md) for more information.

### Required permissions {#permissions}

To activate account audiences, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Activate Destinations]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To ensure that you have the necessary permissions to activate account audiences, browse the destinations catalog. If a destination has an **[!UICONTROL Activate]** control, then you have the appropriate permissions.

## Select your destination {#select-destination}

Follow the instructions to select a destination where you can export your datasets:

1. Go to **[!UICONTROL Connections > Destinations]**, and select the **[!UICONTROL Catalog]** tab.
    
    ![Destination catalog tab with Catalog control highlighted.](/help/destinations/assets/ui/export-datasets/catalog-tab.png)

1. Select **[!UICONTROL Activate]** on the card corresponding to the destination that you want to export datasets to. 

  >[!TIP]
  >
  >The destinations that can export account audiences are indicated with an icon in the upper right corner of the card, similar to the destination highlighted below, or you can use the data type filter to only display destinations that can export account audiences, as [shown higher on the page](#supported-destinations).

  ![Amazon S3 destination page that can export profile audiences highlighted.](/help/destinations/assets/ui/activate-account-audiences/amazon-s3-icon-activate-account-audiences.png)

1. Select **[!UICONTROL Data type Accounts]**, followed by the destination connection that you want to export datasets to, then select **[!UICONTROL Next]**.

  >[!TIP]
  > 
  >If you want to set up a new destination to activate account audiences, select **[!UICONTROL Configure new destination]** to trigger the [Connect to destination](/help/destinations/ui/connect-destination.md) workflow and [select accounts as data type](/help/destinations/ui/connect-destination.md#segment-activation-or-dataset-exports).

  ![Destination activation workflow with accounts control highlighted.](/help/destinations/assets/ui/activate-account-audiences/activate-account-audiences-highlighted.png)

1. Proceed to the next section to [select your account audiences](#select-profile-audiences) for export.

## Select your account audiences {#select-account-audiences}

Use the check boxes to the left of the account audiences names to select the audiences that you want to export to the destination, then select **[!UICONTROL Next]**. Note that only *account audiences* are shown in this view, and no other audience types are displayed. 

![Dataset export workflow showing the Select audiences step where you can select which account audiences to export.](/help/destinations/assets/ui/activate-account-audiences/select-account-audiences.png)

## Scheduling and next steps

For the rest of the activation workflow to export account audiences, read the tutorial on activating data to file based-destinations. Continue from the [schedule audience export step](/help/destinations/ui/activate-batch-profile-destinations.md#scheduling). If you are activating account audiences to the **[!UICONTROL (Companies) LinkedIn Matched Audiences]** destination, read the tutorial on activating streaming destinations. Continue from the [mapping step](/help/destinations/ui/activate-segment-streaming-destinations.md#mapping).

>[!NOTE]
>
>Note that in the scheduling step when exporting account audiences to cloud storage destinations, the workflow to activate account audiences only allows you to export [full files](/help/destinations/ui/activate-batch-profile-destinations.md#export-full-files) and [incremental files](/help/destinations/ui/activate-batch-profile-destinations.md#export-incremental-files) _on a daily schedule_. Hourly exports are not supported. Note also that **[!UICONTROL After audience evaluation]** is the only supported evaluation type.

## Important callouts and known limitations {#important-callouts-known-limitations}

Note the following important callouts and known limitations for the general availability release of the functionality to activate account audiences.

### Required mapping pairs in the mapping step when activating account audiences to the **[!UICONTROL (Companies) LinkedIn Matched Audiences]** destination {#required-mappings}

When activating account audiences to the **[!UICONTROL (Companies) LinkedIn Matched Audiences]** destination, note that the following two mapping pairs are mandatory to successfully export data:

![LinkedIn mapping required fields.](/help/destinations/assets/ui/activate-account-audiences/linkedin-mapping-required-fields.png)

|Source field | Target field |
|---------|----------|
| `accountName` | `companyName` |
| `accountKey.sourceKey`  | `primaryId` (select this field in the **[!UICONTROL Select Identity namespace]** view, when selecting the **[!UICONTROL Target Field]**). <br> ![Select identity namespace highlighted in the workflow to activate account audiences to destinations.](/help/destinations/assets/ui/activate-account-audiences/identity-namespace-highlighted.png "Select identity namespace highlighted in the workflow to activate account audiences to destinations."){width="100" zoomable="yes"} |

### Data governance enforcement {#data-governance-enforcement}

Consent is enforced at the person or profile level for *customer and prospect audiences*. Therefore,  [consent policy evaluation](/help/data-governance/enforcement/auto-enforcement.md#consent-policy-evaluation) is currently not supported when activating account audiences to destinations. In the review step of the activation workflow, you can see a greyed out control for **[!UICONTROL View applicable consent policies]**. 

![Review step of the activate account audiences workflow with the consent enforcement control greyed out.](/help/destinations/assets/ui/activate-account-audiences/consent-checks-greyed-out.png)

Other data governance mechanisms in Real-Time CDP such as [data usage policy checks](/help/data-governance/enforcement/auto-enforcement.md#consent-policy-evaluation) and [attribute-based access control](/help/destinations/home.md#attribute-based-access) are supported.
