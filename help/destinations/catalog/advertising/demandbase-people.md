---
title: Demandbase People connection
description: Use this destination to activate your audiences and enrich them with Demandbase third-party data, for other downstream use-cases in marketing and sales.
---

# Demandbase People connection {#demandbase-people}

Activate profiles for your Demandbase campaigns for audience targeting, personalization, and suppression.

## Use case {#use-case}

A B2B marketer uses the [Demandbase B2B](demandbase.md) destination for account-based marketing to focus campaigns on high-value accounts rather than broad audiences. This approach maximizes impact by targeting companies that exhibit strong buying intent or have meaningfully engaged with their brand. Using account signals, they identify accounts actively interested in their products or services. The marketer can then run an account-based campaign and analyze engagement data to determine which accounts show the highest levels of interest. This analysis helps pinpoint key individuals within those accounts, such as decision-makers, influencers, and stakeholders who have interacted with the campaigns by downloading content, attending webinars, or visiting the website. These individuals are critical for follow-up efforts to advance the deal.

Next, marketers can shift from an account-focused strategy to a people-based strategy by creating a People List of engaged contacts. This list includes individuals who have demonstrated intent or responded positively to the campaign, making them ideal for retargeting and nurturing efforts. By segmenting them based on job title, industry, or engagement level, marketers can tailor follow-up messaging to address specific needs and pain points.

With the People List created, marketers can launch a nurture campaign to keep these high-value prospects engaged. This may include targeted email sequences, personalized paid media ads, or one-on-one sales outreach with personalized messaging. By leveraging engagement insights, messaging can be refined to align with each contact's interests and behaviors, increasing the likelihood of conversion.

This multi-stage approach, beginning with account-level targeting and transitioning to people-based engagement, ensures my marketing efforts remain precise and effective. By leveraging insights from Demandbase, you can identify and engage high-potential accounts while fostering deeper relationships with key stakeholders, accelerating pipeline velocity, and improving conversion rates.

## Supported audiences {#supported-audiences}

This section describes which type of audiences you can export to this destination.

| Audience origin | Supported | Description | 
---------|----------|----------|
| [!DNL Segmentation Service] | ✓ | Audiences generated through the Experience Platform [Segmentation Service](../../../segmentation/home.md).|
| Custom uploads | X | Audiences [imported](../../../segmentation/ui/overview.md#import-audience) into Experience Platform from CSV files. |

{style="table-layout:auto"}

## Export type and frequency {#export-type-and-frequency} 

Refer to the table below for information about the destination export type and frequency.

| Item         | Type      | Notes                       |
|--------------|-----------|---------------------------|
| Export Type  | Audience export | You are exporting all members of an audience with the identifiers (name, phone number, or others) used in the *Demandbase* destination. |
| Frequency    | Streaming  | Streaming destinations are "always on" API-based connections. As soon as a profile is updated in Experience Platform based on audience evaluation, the connector sends the update downstream to the destination platform. Read more about [streaming destinations](/help/destinations/destination-types.md#streaming-destinations). |

{style="table-layout:auto"}

## Prerequisites {#prerequisites}

To export audiences to Demandbase, you need the following:

1. A Demandbase account.
2. A Demandbase API token. You can generate an API token with your user in Demandbase. To generate a token, navigate to [My Profile > API Token](https://web.demandbase.com/o/ad/at) after logging into your Demandbase account.

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

![Add bearer token](../../assets/catalog/advertising/demandbase-people/bearer-token.png)

* **[!UICONTROL Bearer token]**: Fill in the bearer token to authenticate to the destination. View [prerequisites](#prerequisites) for information on how to obtain the token.

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Add information about the destination connection](../../assets/catalog/advertising/demandbase-people/name-and-description.png)

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.

Now you're ready to activate your audiences within Demandbase People.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate profiles and audiences to streaming audience export destinations](/help/destinations/ui/activate-segment-streaming-destinations.md) for instructions on activating audiences to this destination.

## Additional notes and important callouts {#additional-notes}

* **Demandbase API guardrails**: If you have exported audiences to Demandbase and the exports are successful in Experience Platform, yet not all of the data reaches Demandbase, you might have encountered API throttling on the Demandbase side. Reach out to them for clarification.
* **List deletion**: People lists are unique, so you cannot re-create a new list with a name already in use. When you remove people from a list, they will no longer be available, but they will not be deleted.
* **Activation time**: Data loading in Demandbase is subject to overnight processing.
* **Audience naming**: If an account audience with the same name was activated earlier to Demandbase, you cannot activate it again through a different dataflow to the Demandbase destination.
