---
title: Demandbase connection
description: Use this destination to activate your account audiences for Account-Based Marketing (ABM) use cases. Advertise to relevant personas and roles in your target accounts via DemandBase's B2B Demand Side Platform (DSP). Target accounts can also be enriched with Demandbase third-party data, for other downstream use-cases in marketing and sales.
last-substantial-update: 2024-09-30
exl-id: a84609a2-f1d3-4998-9db4-ad59c0a0b631
---
# Demandbase connection {#demandbase}

>[!AVAILABILITY]
>
>The functionality to activate account audiences to the Demandbase destination is available for companies purchasing the [Business-to-Business](/help/rtcdp/overview.md#rtcdp-b2b) and [Business-to-Person](/help/rtcdp/overview.md#rtcdp-b2p) editions of Real-Time Customer Data Platform.

Activate profiles for your Demandbase campaigns for audience targeting, personalization, and suppression, based on [account audiences](/help/segmentation/types/account-audiences.md) .

## Use case {#use-case}

Use this destination to activate your account audiences for Account-Based Marketing (ABM) use cases. Advertise to relevant personas and roles in your target accounts via DemandBase's B2B Demand Side Platform (DSP). Target accounts can also be enriched with Demandbase third-party data, for other downstream use-cases in marketing and sales.

For instance, leverage Demandbase's ad-tech DSP to target specific personas or roles within key accounts for top-of-funnel lead generation, or create and grow buying groups. Use the Demandbase destination to explore other use cases to target your accounts effectively.

With this integration, you can also personalize the website experience using real-time account information lookup to optimize engagement.

## Supported audiences {#supported-audiences}

This section describes which type of audiences you can export to this destination.

| Audience origin | Supported | Description | 
|---------|----------|----------|
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

* **[!UICONTROL Name]**: A name by which you will recognize this destination in the future.
* **[!UICONTROL Description]**: A description that will help you identify this destination in the future.
* **[!UICONTROL Entity type]**: Select **[!UICONTROL Account]** as the entity type.

Now you're ready to activate your audiences within Demandbase.

## Activate audiences to this destination {#activate}

>[!IMPORTANT]
> 
>* To activate data, you need the **[!UICONTROL View Destinations]**, **[!UICONTROL Activate Destinations]**, **[!UICONTROL View Profiles]**, and **[!UICONTROL View Segments]** [access control permissions](/help/access-control/home.md#permissions). Read the [access control overview](/help/access-control/ui/overview.md) or contact your product administrator to obtain the required permissions.
>* To export *identities*, you need the **[!UICONTROL View Identity Graph]** [access control permission](/help/access-control/home.md#permissions). <br> ![Select identity namespace highlighted in the workflow to activate audiences to destinations.](/help/destinations/assets/overview/export-identities-to-destination.png "Select identity namespace highlighted in the workflow to activate audiences to destinations."){width="100" zoomable="yes"}

Read [Activate account audiences](/help/destinations/ui/activate-account-audiences.md) for instructions on activating account audiences to this destination.

### Mandatory mappings {#mandatory-mappings}

When activating audiences to the [!DNL Demandbase] destination, you must configure the following mandatory field mappings in the mapping step:

| Source field | Target field | Description |
|--------------|--------------|-------------|
| `xdm: accountName` | `xdm: accountName` | The name of the account |
| `xdm: accountOrganization.domain` | `xdm: accountEmailDomain` | The email domain of the account organization |
| `xdm: accountKey.sourceKey` | `Identity: primaryId` | The primary identifier for the account |

![Demandbase mappings](/help/destinations/assets/catalog/advertising/demandbase/demandbase-mapping.png)

These mappings are required for the destination to function properly and must be configured before you can proceed with the activation workflow.

## Additional notes and important callouts {#additional-notes}

* **Audience naming**: If an account audience with the same name was activated earlier to Demandbase, you cannot activate it again through a different dataflow to the Demandbase destination.
* **Demandbase API guardrails**: If you have exported audiences to Demandbase and the exports are successful in Experience Platform, yet not all of the data reaches Demandbase, you might have encountered API throttling on the Demandbase side. Reach out to them for clarification.
* **List deletion**: Account lists are unique, so you cannot re-create a new list with a name already in use. When you remove accounts from a list, they will no longer be available, but they will not be deleted.
* **Activation time**: Data loading in Demandbase is subject to overnight processing.
