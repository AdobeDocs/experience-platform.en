---
title: Demandbase People connection
description: Use this destination to activate your audiences and enrich them with Demandbase third-party data, for other downstream use-cases in marketing and sales.
---

# Demandbase People connection {#demandbase-people}

Activate profiles for your Demandbase campaigns for audience targeting, personalization, and suppression.

## Use case {#use-case}

As a marketer, after running an [account-based campaign](../../ui/activate-account-audiences.md), I can analyze engagement data to identify key individuals for retargeting. I can create a People List of engaged contacts, decision-makers, and high-value personas, then launch a nurture campaign through email, paid media, or personalized content to deepen engagement.

Additionally, I can segment individuals by job title, industry, or engagement level to create targeted campaigns with personalized messaging, driving higher engagement and conversions.

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

* **Demandbase API guardrails**: Work with your Demandbase contact to understand your API guardrails. The Import API allows for a maximum number of 1200 API calls per time period (86400 seconds).
* **List deletion**: People lists are unique, so you cannot re-create a new list with a name already in use. When you remove people from a list, they will no longer be available, but they will not be deleted.
* **Activation time**: Data loading in Demandbase is subject to overnight processing. The cut-off time is 4PM PST. You should see your data in Demandbase by 8AM PST.
* **Audience naming**: If an audience with the same name was activated earlier in Demandbase, yo will receive an error if you try to activate the same audience on the same or on another activation dataflow.
