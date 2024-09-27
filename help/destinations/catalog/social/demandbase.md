---
title: Demandbase Destination
description: Use this documentation to integrate and activate profiles for Demandbase campaigns. This destination enables targeting, personalization, and suppression based on account audiences using Adobe Experience Platform.
badgeB2B: label="B2B Edition" type="Informative" url=" https://experienceleague.adobe.com/docs/experience-platform/rtcdp/intro/rtcdp-intro/overview.html?lang=en#rtcdp-editions newtab=true"
badgeB2P: label="B2P Edition" type="Positive" url=" https://experienceleague.adobe.com/docs/experience-platform/rtcdp/intro/rtcdp-intro/overview.html?lang=en#rtcdp-editions newtab=true"
---

# Demandbase connection {#demandbase}

>[!AVAILABILITY]
>
>This destination connector is available to Real-Time CDP B2B and B2P customers. More information at this [link](https://experienceleague.adobe.com/en/docs/experience-platform/rtcdp/intro/rtcdp-intro/overview#rtcdp-editions).

Activate profiles for your Demandbase campaigns for audience targeting, personalization, and suppression, based on [account audiences](/help/segmentation/ui/account-audiences.md) .

## Use case

Use this destination to activate your account audiences for Account-Based Marketing (ABM) use cases, including top-of-funnel campaigns and lead nurturing through Demandbase's Ad Tech DSP.

For instance, leverage Demandbase's Ad Tech (DSP) to target specific personas or roles within key accounts for top-of-funnel lead generation, or create and grow buying groups. Use the Demandbase destination to explore other use cases to target your accounts effectively.

With this integration, you can also personalize the website experience using real-time account information lookup to optimize engagement.

## Supported Audiences

| Audience Origin          | Supported | Description                                            |
|--------------------------|-----------|--------------------------------------------------------|
| Segmentation Service      | Yes       | Audiences generated through Adobe Experience Platform Segmentation Service can be exported. |

## Export Type and Frequency

| Item         | Type      | Notes                                                                                              |
|--------------|-----------|----------------------------------------------------------------------------------------------------|
| Export Type  | Audience export | All audience members will be exported with key identifiers like name, phone number, and more. |
| Frequency    | Streaming  | "Always-on" API-based connections. Updates are sent downstream immediately after profile changes. |

## Prerequisites

To export account audiences to Demandbase, you need the following:

1. A Demandbase account.
2. A Demandbase API token. You have the ability to generate an API token with your user in Demandbase. To generate a token, navigate to [My Profile > API Token](https://web.demandbase.com/o/ad/at) in after logging into your Demandbase account.

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

![Add bearer token](/help/destinations/assets/catalog/social/demandbase/add-bearer-token.png)

* **[!UICONTROL Bearer token]**: Fill in the bearer token to authenticate to the destination.

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Add information about the destination connection](/help/destinations/assets/catalog/social/demandbase/name-and-description.png)

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Entity type]**: Select **Account** as the entity type.

Now you're ready to activate your audiences within Demandbase.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate account audiences](/help/destinations/ui/activate-account-audiences.md) for instructions on activating account audiences to this destination.

## Additional notes and important callouts

* If an account audience with the same name was activated earlier to Demandbase, you cannot activate it again through a different dataflow to the Demandbase destination.
* If you have exported audiences to Demandbase and the exports are successful in Experience Platform, yet not all of the data reaches Demandbase, you might have encountered API throttling on the Demandbase side. Reach out to them for clarification.
