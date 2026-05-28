---
keywords: activate destinations;activate data
title: Activation overview
type: Tutorial
description: Learn how to activate the audiences you have in Adobe Experience Platform to various types of destinations.
exl-id: 987af401-2d93-45b4-a8f9-191e6058e4da
TQID: https://experienceleague.adobe.com/57dVog9ZkGiqnfLTf6oHgvyanMB0Hl12jzoRO-K63Q8
product_v2:
  - id: edbd1a0e-46c8-49da-8c10-dba9ec80bba9
    internal-label: Experience Platform
feature_v2:
  - id: c132d929-fa62-4271-803e-b823be07b914
    internal-label: Profile
role_v2:
  - id: b69b2659-1057-424e-8fc5-ed9e016dc554
    internal-label: User
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
---
# Activation overview

>[!IMPORTANT]
>
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

[!DNL Adobe Experience Platform] supports a wide range of destinations. The audience activation workflow varies between the destinations, based on the type of audience data they support, and the frequency of the data export.

## Activation methods {#activation-methods}

After you [configure your destination](connect-destination.md), you can activate audiences in multiple ways:

### Activate audiences from the destinations catalog {#activate-from-catalog}

See the following guides for detailed information on activating audiences to your destination from the destinations catalog:

* [Activate audience data to streaming audience export destinations](activate-segment-streaming-destinations.md)
* [Activate audience data to streaming profile export destinations](activate-streaming-profile-destinations.md)
* [Activate audience data to batch profile export destinations](activate-batch-profile-destinations.md)

### Activate audiences from the [!UICONTROL Browse] page {#activate-from-browse}

Follow the steps below to activate data to your destinations from the **[!UICONTROL Browse]** page.

1. Go to **[!UICONTROL Connections > Destinations]**, and select the **[!UICONTROL Browse]** tab.

    ![Browse tab](../assets/ui/activation-overview/browse-tab.png)

1. Find the destination connection that you want to use to activate your segments, select the three dots in the [!UICONTROL Name] column, then select **[!UICONTROL Activate audiences]**.

    ![Activate audiences button](../assets/ui/activation-overview/activate-segments.png)

1. Depending on the selected destination, follow the steps described in the articles below, starting with the **[!UICONTROL Select segments]** step, to finish the activation workflow:

    * [Activate audience data to streaming audience export destinations](activate-segment-streaming-destinations.md)
    * [Activate audience data to streaming profile export destinations](activate-streaming-profile-destinations.md)
    * [Activate audience data to batch profile export destinations](activate-batch-profile-destinations.md)

### Activate audiences from the audience details page {#activate-audience-details}

You can activate audiences to destinations from the audience details page. See [Audience details](../../segmentation/ui/audience-portal.md#audience-details) for more information.

Depending on the selected destination, follow the steps described in the articles below to finish the activation workflow:
    
* [Activate audience data to streaming audience export destinations](activate-segment-streaming-destinations.md)
* [Activate audience data to streaming profile export destinations](activate-streaming-profile-destinations.md)
* [Activate audience data to batch profile export destinations](activate-batch-profile-destinations.md)
