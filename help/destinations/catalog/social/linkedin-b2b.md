---
title: (Companies) LinkedIn connection
description: Use this destination to activate your account audiences for Account-Based Marketing (ABM) use cases. Activate profiles for your LinkedIn campaigns for audience targeting, personalization, and suppression, based on hashed emails.
badgeB2B: label="B2B Edition" type="Informative" url=" https://experienceleague.adobe.com/docs/experience-platform/rtcdp/intro/rtcdp-intro/overview.html?lang=en#rtcdp-editions newtab=true"
badgeB2P: label="B2P Edition" type="Positive" url=" https://experienceleague.adobe.com/docs/experience-platform/rtcdp/intro/rtcdp-intro/overview.html?lang=en#rtcdp-editions newtab=true"
---
# (Companies) LinkedIn Match Audiences connection {#companies-linkedin}

>[!AVAILABILITY]
>
>>The functionality to activate account audiences to the (Companies) LinkedIn destination is available for companies purchasing the [Business-to-Business](/help/rtcdp/overview.md#rtcdp-b2b) and [Business-to-Person](/help/rtcdp/overview.md#rtcdp-b2p) editions of Real-Time Customer Data Platform.

Use this destination to activate your [account audiences](/help/segmentation/ui/account-audiences.md) for Account-Based Marketing (ABM) use cases. Advertise to relevant personas and roles in your target accounts via the (Companies) LinkedIn destination. 

![LinkedIn account destination displayed in the Experience Platform UI.](/help/destinations/assets/catalog/social/linkedin-b2b/linkedin-b2b-destination.png)

## Use case {#use-case}

Use this destination to activate your account audiences for Account-Based Marketing (ABM) use cases. Advertise to relevant personas and roles in your target accounts via the (Companies) LinkedIn destination. 

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
| Export Type  | Audience export | All audience members will be exported with key identifiers like name, phone number, and more. |
| Frequency    | Streaming  | "Always-on" API-based connections. Updates are sent downstream immediately after profile changes. |

{style="table-layout:auto"}

## Prerequisites {#prerequisites}

To export account audiences to Demandbase, you need the following:

1. A Demandbase account.
2. A Demandbase API token. You can generate an API token with your user in Demandbase. To generate a token, navigate to [My Profile > API Token](https://web.demandbase.com/o/ad/at) after logging into your Demandbase account.

## Connect to the destination {#connect}

>[!IMPORTANT]
> 
>To connect to the destination, you need the **[!UICONTROL View Destinations]** and **[!UICONTROL Manage Destinations]** [access control permission](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.

To connect to this destination, follow the steps described in the [destination configuration tutorial](../../ui/connect-destination.md). In the configure destination workflow, fill in the fields listed in the two sections below.

### Authenticate to destination {#authenticate}

To authenticate to the destination, fill in the required fields and select **[!UICONTROL Connect to destination]**.

![Add bearer token](/help/destinations/assets/catalog/advertising/demandbase/add-bearer-token.png)

* **[!UICONTROL Bearer token]**: Fill in the bearer token to authenticate to the destination. View [prerequisites](#prerequisites) for information on how to obtain the token.

### Fill in destination details {#destination-details}

To configure details for the destination, fill in the required and optional fields below. An asterisk next to a field in the UI indicates that the field is required.

![Add information about the destination connection](/help/destinations/assets/catalog/advertising/demandbase/name-and-description.png)

*  **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
*  **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
*  **[!UICONTROL Entity type]**: Select **[!UICONTROL Account]** as the entity type.

Now you're ready to activate your audiences within Demandbase.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate account audiences](/help/destinations/ui/activate-account-audiences.md) for instructions on activating account audiences to this destination.

## Required mapping pairs in the mapping step when activating account audiences to the **[!UICONTROL (Companies) LinkedIn Matched Audiences]** destination {#required-mappings}

When activating account audiences to the **[!UICONTROL (Companies) LinkedIn Matched Audiences]** destination, note that the following two mapping pairs are mandatory to successfully export data:

![LinkedIn mapping required fields.](/help/destinations/assets/ui/activate-account-audiences/linkedin-mapping-required-fields.png)

|Source field | Target field |
|---------|----------|
| `accountName` | `companyName` |
| `accountKey.sourceKey`  | `primaryId` (select this field in the **[!UICONTROL Select Identity namespace]** view, when selecting the **[!UICONTROL Target Field]**). <br> ![Select identity namespace highlighted in the workflow to activate account audiences to destinations.](/help/destinations/assets/ui/activate-account-audiences/identity-namespace-highlighted.png "Select identity namespace highlighted in the workflow to activate account audiences to destinations."){width="100" zoomable="yes"} |